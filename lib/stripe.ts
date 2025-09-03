// Função para carregar Stripe no cliente (apenas no browser)
export const getStripe = async () => {
  const { loadStripe } = await import('@stripe/stripe-js')
  
  const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
  
  if (!publishableKey) {
    console.warn('NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY não está configurada')
    return null
  }
  
  return loadStripe(publishableKey)
}


