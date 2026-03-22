export function formatRupiah(
  amount: number,
  withDecimals: boolean = false
): string {
  const options: Intl.NumberFormatOptions = {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: withDecimals ? 2 : 0,
    maximumFractionDigits: withDecimals ? 2 : 0,
  };

  return new Intl.NumberFormat('id-ID', options).format(amount);
}
