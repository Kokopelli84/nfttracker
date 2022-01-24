import { Nft, NftDetail } from '@/ts/interfaces/INFT';
import { TokenData } from '@/ts/types/TokenData';
import dollarValue from './dollarValue';

export const formatDetailNft = (nft: Nft, tokenData: TokenData): NftDetail => {
  const currentPrice =
    (nft?.sell_orders && nft?.sell_orders.length && nft?.sell_orders[0].current_price) || undefined;
  const currentDollarValue =
    (tokenData && currentPrice && parseFloat(dollarValue(tokenData.usdPrice, currentPrice))) ||
    undefined;
  const lastSale = +nft.last_sale.payment_token.eth_price;
  const lastDollarValue =
    (tokenData && lastSale && parseFloat(dollarValue(tokenData.usdPrice, lastSale))) || undefined;

  return {
    ...nft,
    currentPrice,
    currentDollarValue,
    lastSale,
    lastDollarValue,
  };
};
