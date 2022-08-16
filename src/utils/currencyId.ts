import { Currency, WDOGE, Token } from '@huskyswap/sdk'

export function currencyId(currency: Currency): string {
  if (currency === WDOGE) return 'WDOGE'
  if (currency instanceof Token) return currency.address
  throw new Error('invalid currency')
}
