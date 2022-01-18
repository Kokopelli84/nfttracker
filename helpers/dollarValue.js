const dollarValue = (ethUsdPrice, eth) => {
  const dollarUSLocale = Intl.NumberFormat('en-US');
  return dollarUSLocale.format(ethUsdPrice * eth).slice(0, -1);
};

export default dollarValue;
