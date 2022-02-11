export type TokenData = {
  formattedUsd: string;
  formattedNative: string | null;
  nativePrice?:
    | {
        value: string;
        decimals: number;
        name: string;
        symbol: string;
      }
    | undefined;
  usdPrice: number;
  exchangeAddress?: string | undefined;
  exchangeName?: string | undefined;
  symbol: unknown;
} | null;
