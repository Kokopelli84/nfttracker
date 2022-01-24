export interface NftDetail extends Nft {
  currentPrice?: number;
  currentDollarValue?: number;
  lastSale?: number;
  lastDollarValue?: number;
}

export interface Nft {
  id: number;
  token_id: string;
  num_sales: number;
  background_color: null;
  image_url: string;
  image_preview_url: string;
  image_thumbnail_url: string;
  image_original_url: string;
  animation_url: null;
  animation_original_url: null;
  name: string;
  description: string;
  external_link: null;
  asset_contract: AssetContract;
  permalink: string;
  collection: Collection;
  decimals: number;
  token_metadata: string;
  owner: Creator;
  sell_orders: SellOrder[];
  creator: Creator;
  traits: Trait[];
  last_sale: LastSale;
  top_bid: null;
  listing_date: null;
  is_presale: boolean;
  transfer_fee_payment_token: null;
  transfer_fee: null;
}

export interface SellOrder {
  current_price?: number;
}

export interface AssetContract {
  address: string;
  asset_contract_type: string;
  created_date: Date;
  name: string;
  nft_version: string;
  opensea_version: null;
  owner: number;
  schema_name: string;
  symbol: string;
  total_supply: null;
  description: null;
  external_link: null;
  image_url: null;
  default_to_fiat: boolean;
  dev_buyer_fee_basis_points: number;
  dev_seller_fee_basis_points: number;
  only_proxied_transfers: boolean;
  opensea_buyer_fee_basis_points: number;
  opensea_seller_fee_basis_points: number;
  buyer_fee_basis_points: number;
  seller_fee_basis_points: number;
  payout_address: null;
}

export interface Collection {
  banner_image_url: null;
  chat_url: null;
  created_date: Date;
  default_to_fiat: boolean;
  description: null;
  dev_buyer_fee_basis_points: string;
  dev_seller_fee_basis_points: string;
  discord_url: null;
  display_data: DisplayData;
  external_url: null;
  featured: boolean;
  featured_image_url: string;
  hidden: boolean;
  safelist_request_status: string;
  image_url: null;
  is_subject_to_whitelist: boolean;
  large_image_url: null;
  medium_username: null;
  name: string;
  only_proxied_transfers: boolean;
  opensea_buyer_fee_basis_points: string;
  opensea_seller_fee_basis_points: string;
  payout_address: null;
  require_email: boolean;
  short_description: null;
  slug: string;
  telegram_url: null;
  twitter_username: null;
  instagram_username: null;
  wiki_url: null;
}

export interface DisplayData {
  card_display_style: string;
  images: any[];
}

export interface Creator {
  user: User | null;
  profile_img_url: string;
  address: string;
  config: string;
}

export interface User {
  username: null;
}

export interface LastSale {
  asset: Asset;
  asset_bundle: null;
  event_type: string;
  event_timestamp: Date;
  auction_type: null;
  total_price: string;
  payment_token: PaymentToken;
  transaction: Transaction;
  created_date: Date;
  quantity: string;
}

export interface Asset {
  token_id: string;
  decimals: number;
}

export interface PaymentToken {
  id: number;
  symbol: string;
  address: string;
  image_url: string;
  name: null;
  decimals: number;
  eth_price: string;
  usd_price: string;
}

export interface Transaction {
  block_hash: string;
  block_number: string;
  from_account: Creator;
  id: number;
  timestamp: Date;
  to_account: Creator;
  transaction_hash: string;
  transaction_index: string;
}

export interface Trait {
  trait_type: string;
  value: string;
  display_type: null;
  max_value: null;
  trait_count: number;
  order: null;
}
