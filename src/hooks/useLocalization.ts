export interface LocalizationFunctions {
  formatNumber: (value: number) => string;
  formatCurrency: (value: number) => string;
}

export function useLocalization(): LocalizationFunctions {
  const formatNumber = new Intl.NumberFormat("EN", {
    maximumFractionDigits: 2,
  }).format;

  const formatCurrency = new Intl.NumberFormat("EN", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 2,
    currencyDisplay: "symbol",
  }).format;

  return {
    formatNumber,
    formatCurrency,
  };
}
