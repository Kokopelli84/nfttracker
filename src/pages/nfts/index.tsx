import AuthMessage from '@/components/messages/auth';
import NftGrid from '@/components/nftGrid';
import { fetchNFTs } from '@/state/actions';
import { useAppSelector } from '@/state/hooks';
import React, { useEffect } from 'react';
import { useMoralis } from 'react-moralis';
import { useDispatch } from 'react-redux';

const NFTPage = () => {
  const dispatch = useDispatch();
  const nfts = useAppSelector(state => state.nft);

  const { account, isAuthenticated } = useMoralis();

  useEffect(() => {
    if (account) {
      dispatch(fetchNFTs(account));
    }
  }, [account, dispatch]);

  if (account && isAuthenticated) {
    return <NftGrid nfts={nfts} />;
  }
  return <AuthMessage action="view your NFTs" />;
};

export default NFTPage;
