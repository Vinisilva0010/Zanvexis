import { NextRequest, NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe-server'
import { headers } from 'next/headers'

export async function POST(req: NextRequest) {
  const body = await req.text()
  const signature = headers().get('stripe-signature')

  if (!signature) {
    return NextResponse.json({ error: 'No signature' }, { status: 400 })
  }

  try {
    const event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    )

    console.log('Webhook recebido:', event.type)

    switch (event.type) {
      case 'customer.subscription.created':
        console.log('Assinatura criada:', event.data.object.id)
        // TODO: Salvar no banco de dados que o usuário tem plano premium
        break
        
      case 'customer.subscription.deleted':
        console.log('Assinatura cancelada:', event.data.object.id)
        // TODO: Remover plano premium do usuário
        break
        
      case 'invoice.payment_succeeded':
        console.log('Pagamento aprovado:', event.data.object.id)
        break
        
      case 'invoice.payment_failed':
        console.log('Pagamento falhou:', event.data.object.id)
        break
    }

    return NextResponse.json({ received: true })
  } catch (error) {
    console.error('Erro no webhook:', error)
    return NextResponse.json(
      { error: 'Erro no webhook' }, 
      { status: 400 }
    )
  }
}


