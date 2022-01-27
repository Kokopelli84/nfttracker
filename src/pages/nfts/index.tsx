import AuthMessage from '@/components/messages/auth';
import NftGrid from '@/components/nftGrid';
import Pending from '@/components/status/pending';
import { fetchNFTs } from '@/state/actions';
import { useAppSelector } from '@/state/hooks';
import React, { useEffect } from 'react';
import { useMoralis } from 'react-moralis';
import { useDispatch } from 'react-redux';

const NFTPage = () => {
  const { account, isAuthenticated } = useMoralis();
  const dispatch = useDispatch();
  const {
    nft: nfts,
    async: { loading },
  } = useAppSelector(state => state);

  useEffect(() => {
    if (account) {
      dispatch(fetchNFTs(account));
    }
  }, [account, dispatch]);

  if (loading) return <Pending />;

  if (account && isAuthenticated) {
    return <NftGrid nfts={nfts} />;
  }
  return <AuthMessage action="view your NFTs" />;
};

export default NFTPage;
