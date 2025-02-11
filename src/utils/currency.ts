export function formatToCurrency(
  amount: number | string,
  showCurrencySign: boolean = true
): string {
  if (showCurrencySign) {
    return new Intl.NumberFormat("en-US", {
      style: "currency" as const,
      currency: "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(Number(amount));
  } else {
    return new Intl.NumberFormat("en-US", {
      style: "decimal" as const,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(Number(amount));
  }
}
