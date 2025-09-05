import { NextRequest, NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe-server'
import { headers } from 'next/headers'

export async function POST(req: NextRequest) {
  console.log('🎣 Webhook do Stripe recebido!')
  console.log('📅 Timestamp:', new Date().toISOString())
  
  try {
    // Obter body e signature
    const body = await req.text()
    const signature = headers().get('stripe-signature')
    
    console.log('📝 Body length:', body.length)
    console.log('🔏 Signature present:', !!signature)
    
    // Validar signature
    if (!signature) {
      console.error('❌ Signature não encontrada')
      return NextResponse.json({ error: 'Missing signature' }, { status: 400 })
    }

    // Verificar se webhook secret está configurado
    if (!process.env.STRIPE_WEBHOOK_SECRET) {
      console.error('❌ STRIPE_WEBHOOK_SECRET não configurado')
      return NextResponse.json({ error: 'Webhook secret not configured' }, { status: 500 })
    }

    console.log('🔐 Validando evento com webhook secret...')
    
    // Construir e validar evento
    const event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET
    )

    console.log('✅ Evento validado com sucesso!')
    console.log('🎯 Tipo do evento:', event.type)
    console.log('🆔 Event ID:', event.id)
    console.log('⏰ Criado em:', new Date(event.created * 1000).toISOString())

    // Processar eventos específicos
    switch (event.type) {
      case 'checkout.session.completed':
        await handleCheckoutCompleted(event)
        break
        
      case 'customer.subscription.created':
        await handleSubscriptionCreated(event)
        break
        
      case 'customer.subscription.updated':
        await handleSubscriptionUpdated(event)
        break
        
      case 'customer.subscription.deleted':
        await handleSubscriptionDeleted(event)
        break
        
      case 'invoice.payment_succeeded':
        await handlePaymentSucceeded(event)
        break
        
      case 'invoice.payment_failed':
        await handlePaymentFailed(event)
        break
        
      default:
        console.log('⚠️ Evento não tratado:', event.type)
    }

    console.log('🎉 Webhook processado com sucesso!')
    return NextResponse.json({ 
      received: true, 
      eventType: event.type,
      eventId: event.id,
      processed: true 
    })

  } catch (error) {
    console.error('💥 Erro ao processar webhook:', error)
    console.error('📊 Error details:', {
      message: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined
    })
    
    return NextResponse.json(
      { 
        error: 'Webhook processing failed',
        details: error instanceof Error ? error.message : 'Unknown error'
      }, 
      { status: 400 }
    )
  }
}

// Handler para checkout completado
async function handleCheckoutCompleted(event: any) {
  console.log('🛒 === CHECKOUT COMPLETADO ===')
  const session = event.data.object
  
  console.log('💳 Session ID:', session.id)
  console.log('💰 Amount Total:', session.amount_total / 100, session.currency.toUpperCase())
  console.log('📧 Customer Email:', session.customer_email)
  console.log('🎯 Customer ID:', session.customer)
  console.log('📋 Subscription ID:', session.subscription)
  console.log('🏷️ Metadata:', session.metadata)
  
  // TODO: Atualizar banco de dados - checkout completado
  console.log('✅ Status: Checkout processado com sucesso')
}

// Handler para assinatura criada
async function handleSubscriptionCreated(event: any) {
  console.log('📅 === ASSINATURA CRIADA ===')
  const subscription = event.data.object
  
  console.log('🆔 Subscription ID:', subscription.id)
  console.log('👤 Customer ID:', subscription.customer)
  console.log('📊 Status:', subscription.status)
  console.log('💰 Current Period Start:', new Date(subscription.current_period_start * 1000).toISOString())
  console.log('📅 Current Period End:', new Date(subscription.current_period_end * 1000).toISOString())
  console.log('🏷️ Plan ID:', subscription.items.data[0]?.price?.id)
  console.log('💵 Amount:', subscription.items.data[0]?.price?.unit_amount / 100, subscription.items.data[0]?.price?.currency?.toUpperCase())
  
  // TODO: Salvar assinatura ativa no banco de dados
  console.log('✅ Status: Assinatura ativa registrada')
}

// Handler para assinatura atualizada
async function handleSubscriptionUpdated(event: any) {
  console.log('🔄 === ASSINATURA ATUALIZADA ===')
  const subscription = event.data.object
  
  console.log('🆔 Subscription ID:', subscription.id)
  console.log('👤 Customer ID:', subscription.customer)
  console.log('📊 Status:', subscription.status)
  console.log('📅 Updated At:', new Date().toISOString())
  console.log('🏷️ Plan ID:', subscription.items.data[0]?.price?.id)
  
  // TODO: Atualizar dados da assinatura no banco
  console.log('✅ Status: Assinatura atualizada')
}

// Handler para assinatura cancelada
async function handleSubscriptionDeleted(event: any) {
  console.log('❌ === ASSINATURA CANCELADA ===')
  const subscription = event.data.object
  
  console.log('🆔 Subscription ID:', subscription.id)
  console.log('👤 Customer ID:', subscription.customer)
  console.log('📊 Status:', subscription.status)
  console.log('📅 Canceled At:', new Date(subscription.canceled_at * 1000).toISOString())
  console.log('🔚 Period End:', new Date(subscription.current_period_end * 1000).toISOString())
  
  // TODO: Remover acesso premium do usuário
  console.log('✅ Status: Acesso premium removido')
}

// Handler para pagamento bem-sucedido
async function handlePaymentSucceeded(event: any) {
  console.log('💚 === PAGAMENTO APROVADO ===')
  const invoice = event.data.object
  
  console.log('🧾 Invoice ID:', invoice.id)
  console.log('👤 Customer ID:', invoice.customer)
  console.log('💰 Amount Paid:', invoice.amount_paid / 100, invoice.currency.toUpperCase())
  console.log('📅 Period Start:', new Date(invoice.period_start * 1000).toISOString())
  console.log('📅 Period End:', new Date(invoice.period_end * 1000).toISOString())
  console.log('📋 Subscription ID:', invoice.subscription)
  console.log('💳 Payment Method:', invoice.payment_intent)
  
  // TODO: Registrar pagamento no histórico
  console.log('✅ Status: Pagamento registrado com sucesso')
}

// Handler para pagamento falhado
async function handlePaymentFailed(event: any) {
  console.log('💔 === PAGAMENTO FALHOU ===')
  const invoice = event.data.object
  
  console.log('🧾 Invoice ID:', invoice.id)
  console.log('👤 Customer ID:', invoice.customer)
  console.log('💰 Amount Due:', invoice.amount_due / 100, invoice.currency.toUpperCase())
  console.log('📋 Subscription ID:', invoice.subscription)
  console.log('❌ Failure Reason:', invoice.last_finalization_error?.message || 'Unknown')
  console.log('🔄 Next Payment Attempt:', invoice.next_payment_attempt ? new Date(invoice.next_payment_attempt * 1000).toISOString() : 'None')
  
  // TODO: Notificar usuário sobre falha no pagamento
  console.log('⚠️ Status: Falha no pagamento registrada')
}


