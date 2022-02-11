import { Nft, NftDetail } from '@/ts/interfaces/INFT';
import { TokenData } from '@/ts/types/TokenData';
import dollarValue from './dollarValue';

export const formatDetailNft = (nft: Nft, tokenData: TokenData): NftDetail => {
  let currentPrice;
  let currentDollarValue;
  let lastSale;
  let lastDollarValue;

  if (nft.sell_orders && tokenData) {
    currentPrice =
      nft.sell_orders && nft.sell_orders.length && +nft?.sell_orders[0].current_price! / 1e18;
    currentDollarValue = dollarValue(tokenData.usdPrice, currentPrice);
  }

  if (nft.last_sale) {
    lastSale = +nft.last_sale.payment_token.eth_price;
    lastDollarValue =
      (tokenData && lastSale && dollarValue(tokenData.usdPrice, lastSale)) || undefined;
  }

  return {
    ...nft,
    currentPrice,
    currentDollarValue,
    lastSale,
    lastDollarValue,
  };
};
