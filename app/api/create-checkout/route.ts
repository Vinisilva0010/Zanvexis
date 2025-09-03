import { NextRequest, NextResponse } from 'next/server'
import { auth, currentUser } from '@clerk/nextjs/server'
import { stripe } from '@/lib/stripe-server'

export async function POST(req: NextRequest) {
  console.log('🚀 API create-checkout chamada')
  
  try {
    // Verificar se as variáveis de ambiente estão configuradas
    console.log('🔑 Verificando variáveis de ambiente:', {
      stripeKey: process.env.STRIPE_SECRET_KEY ? 'Configurada' : 'NÃO CONFIGURADA',
      publishableKey: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY ? 'Configurada' : 'NÃO CONFIGURADA'
    })
    
    if (!process.env.STRIPE_SECRET_KEY) {
      console.error('❌ STRIPE_SECRET_KEY não encontrada')
      return NextResponse.json({ 
        error: 'Configuração do Stripe não encontrada. Configure as variáveis de ambiente.' 
      }, { status: 500 })
    }

    // Tentativa mais robusta de obter dados do usuário
    let userId: string | null = null
    let userEmail: string | null = null
    
    try {
      const authResult = auth()
      userId = authResult.userId
      console.log('👤 UserId from auth():', userId)
      
      if (userId) {
        const user = await currentUser()
        userEmail = user?.emailAddresses[0]?.emailAddress || null
        console.log('👤 User email:', userEmail)
      }
    } catch (authError) {
      console.error('🔐 Erro na autenticação:', authError)
    }
    
    // Ler o body da requisição
    const body = await req.json()
    const { priceId, planName, userEmail: bodyUserEmail } = body
    console.log('📋 Body da requisição:', body)
    
    // Se não conseguiu autenticar via servidor, usar dados do request
    if (!userId && bodyUserEmail) {
      userEmail = bodyUserEmail
      userId = 'temp_user_id' // ID temporário para continuar o fluxo
      console.log('📧 Usando email do body:', userEmail)
    }
    
    if (!userId) {
      console.error('❌ Não foi possível identificar o usuário')
      return NextResponse.json({ 
        error: 'Não foi possível verificar sua autenticação. Tente fazer logout e login novamente.' 
      }, { status: 401 })
    }
    
    console.log('💰 Dados recebidos:', { priceId, planName, userEmail })

    if (!priceId) {
      console.error('❌ Price ID não fornecido')
      return NextResponse.json({ error: 'Price ID é obrigatório' }, { status: 400 })
    }

    console.log('💳 Criando sessão do Stripe...')
    
    const session = await stripe.checkout.sessions.create({
      customer_email: userEmail,
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: 'subscription',
      currency: 'brl',
      success_url: `${req.headers.get('origin')}/dashboard?success=true&plan=${planName}`,
      cancel_url: `${req.headers.get('origin')}/planos?canceled=true`,
      metadata: {
        userId: userId,
        planName: planName
      },
      billing_address_collection: 'required',
      allow_promotion_codes: true,
    })

    console.log('✅ Sessão criada com sucesso:', session.id)
    return NextResponse.json({ sessionId: session.id })
  } catch (error) {
    console.error('Erro na criação do checkout:', error)
    
    // Log detalhado para debug
    console.error('Detalhes do erro:', {
      message: error instanceof Error ? error.message : 'Erro desconhecido',
      stack: error instanceof Error ? error.stack : undefined,
      stripeKey: process.env.STRIPE_SECRET_KEY ? 'Configurada' : 'NÃO CONFIGURADA'
    })
    
    return NextResponse.json(
      { 
        error: 'Erro interno do servidor',
        details: error instanceof Error ? error.message : 'Erro desconhecido'
      }, 
      { status: 500 }
    )
  }
}


