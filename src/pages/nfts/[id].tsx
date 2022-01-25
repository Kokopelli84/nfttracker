import Button from '@/components/button';
import NftDetail from '@/components/nftDetail';
import { formatDetailNft } from '@/helpers/formatDetailNft';
import { useAppSelector } from '@/state/hooks';
import { NftDetail as NftDetailType } from '@/ts/interfaces/INFT';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useTokenPrice } from 'react-moralis';

const NFTDetailPage = () => {
  const nfts = useAppSelector(state => state.nft);
  const router = useRouter();
  const { fetchTokenPrice, data: tokenData } = useTokenPrice({
    address: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
    chain: 'eth',
  });

  const [nftDetail, setNftDetail] = useState<NftDetailType>();

  useEffect(() => {
    fetchTokenPrice();
  }, [fetchTokenPrice]);

  useEffect(() => {
    const id = router.query.id as string;
    const nft = nfts.length && nfts.find(nftItem => nftItem.id === parseInt(id));

    if (nft && tokenData) {
      setNftDetail(formatDetailNft(nft, tokenData));
    }
  }, [nfts, router.query.id, tokenData]);

  return nftDetail ? (
    <div className="mx-44">
      <Button text="Go Back" click={() => router.back()} classNames="mb-7" />
      <NftDetail nft={nftDetail} />
    </div>
  ) : (
    <div>No NFT found</div>
  );
};

export default NFTDetailPage;
