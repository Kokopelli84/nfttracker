import { changeCurrentNFT } from '@/state/actions';
import { useAppSelector } from '@/state/hooks';
import { Nft } from '@/ts/interfaces/INFT';
import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Modal from './modal';
import NFTCard from './nftCard';
import SellNFT from './sellNFT';
import TransferNFT from './transferNFT';

type Props = {
  nfts: Nft[];
};

const NftGrid = ({ nfts }: Props) => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const content = useAppSelector(state => state.modal);

  const handleShowModal = (id: number) => {
    const nft = nfts.find(singleNft => singleNft.id === id);
    if (nft) {
      dispatch(changeCurrentNFT(nft));
      setShowModal(true);
    }
  };

  return nfts!.length ? (
    <div
      className="grid md:grid-cols-3 md:grid-rows-auto  lg:grid-cols-5 lg:grid-rows-auto  gap-5  overflow-auto
  ">
      {nfts!.map(nft => (
        <NFTCard key={nft.id} nft={nft} handleShowModal={handleShowModal} />
      ))}

      <Modal show={showModal} cancel={() => setShowModal(false)}>
        {content === 'send' && <TransferNFT />}
        {content === 'sell' && <SellNFT />}
      </Modal>
    </div>
  ) : (
    <h1>No NFts</h1>
  );
};

export default NftGrid;
