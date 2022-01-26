const dollarValue = (ethUsdPrice: number, eth: number) => {
  const dollarUSLocale = Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  return dollarUSLocale.format(ethUsdPrice * eth);
};

export default dollarValue;
