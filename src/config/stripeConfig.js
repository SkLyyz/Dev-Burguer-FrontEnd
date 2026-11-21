import { loadStripe } from '@stripe/stripe-js'

const key = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY

if (!key) {
  throw new Error('Chave pública Stripe não configurada')
}

export default loadStripe(key)