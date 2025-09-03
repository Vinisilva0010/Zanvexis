'use client'
import { useState } from 'react'
import { useAuth, useUser } from '@clerk/nextjs'

interface CheckoutButtonProps {
  priceId: string
  planName: string
  className?: string
  children: React.ReactNode
}

export default function CheckoutButton({ 
  priceId, 
  planName, 
  className = '',
  children 
}: CheckoutButtonProps) {
  const [loading, setLoading] = useState(false)
  const { isSignedIn } = useAuth()
  const { user } = useUser()

  const handleCheckout = async () => {
    console.log('🖱️ Botão de checkout clicado!', { priceId, planName, isSignedIn, userEmail: user?.emailAddresses[0]?.emailAddress })
    
    if (!isSignedIn) {
      console.log('❌ Usuário não está logado, redirecionando para sign-in')
      window.location.href = '/sign-in'
      return
    }

    setLoading(true)
    console.log('⏳ Iniciando processo de checkout...')
    
    try {
      // Carregamento dinâmico do Stripe para evitar erros no servidor
      console.log('📦 Carregando Stripe...')
      const { getStripe } = await import('@/lib/stripe')
      
      console.log('🌐 Fazendo requisição para API...')
      const response = await fetch('/api/create-checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          priceId,
          planName,
          userEmail: user?.emailAddresses[0]?.emailAddress
        }),
      })

      console.log('📥 Resposta da API recebida:', { 
        status: response.status, 
        ok: response.ok 
      })

      const data = await response.json()
      console.log('📊 Dados da resposta:', data)

      if (!response.ok) {
        if (response.status === 401) {
          console.log('❌ 401 - Redirecionando para login')
          window.location.href = '/sign-in'
          return
        }
        throw new Error(data.error || 'Erro ao criar sessão de checkout')
      }

      console.log('🎯 Session ID recebido:', data.sessionId)
      console.log('🔄 Carregando cliente Stripe...')
      
      const stripe = await getStripe()
      
      if (!stripe) {
        throw new Error('Stripe não foi carregado')
      }

      console.log('🚀 Redirecionando para checkout do Stripe...')
      const { error } = await stripe.redirectToCheckout({
        sessionId: data.sessionId,
      })

      if (error) {
        console.error('❌ Erro do Stripe:', error)
        alert('Erro do Stripe: ' + error.message)
      }
    } catch (error) {
      console.error('💥 Erro no checkout:', error)
      alert('Erro ao processar pagamento. Tente novamente. Erro: ' + (error instanceof Error ? error.message : 'Desconhecido'))
    } finally {
      setLoading(false)
      console.log('✅ Processo finalizado, loading=false')
    }
  }

  return (
    <button 
      onClick={handleCheckout}
      disabled={loading}
      className={`${className} ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      {loading ? 'Processando...' : children}
    </button>
  )
}