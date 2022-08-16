import { Currency, ETHER, Token } from '@huskyswap/sdk'

export function currencyId(currency: Currency): string {
  if (currency === ETHER) return 'WDOGE'
  if (currency instanceof Token) return currency.address
  throw new Error('invalid currency')
}
