import { useEffect, useState } from 'react';
import { useMoralis } from 'react-moralis';
import { useDispatch, useSelector } from 'react-redux';
import AuthMessage from '../../components/messages/auth';
import Modal from '../../components/modal';
import NFTCard from '../../components/nftCard';
import SellNFT from '../../components/sellNFT';
import TransferNFT from '../../components/transferNFT';
import { changeCurrentNFT, fetchNFTs } from '../../state/actions';

const NFTPage = () => {
  const dispatch = useDispatch();
  const nfts = useSelector((state) => state.nft);
  const content = useSelector((state) => state.modal);
  const [showModal, setShowModal] = useState(false);

  const { account, isAuthenticated } = useMoralis();

  const handleShowModal = (id) => {
    const nft = nfts.find((nft) => nft.id === id);
    dispatch(changeCurrentNFT(nft));
    setShowModal(true);
  };

  useEffect(() => {
    if (account) {
      dispatch(fetchNFTs(account));
    }
  }, [account, dispatch]);

  if (account && isAuthenticated) {
    return nfts.length ? (
      <div
        className="grid md:grid-cols-3 md:grid-rows-auto  lg:grid-cols-5 lg:grid-rows-auto  gap-5  overflow-auto
    "
      >
        {nfts.map((nft) => (
          <NFTCard key={nft.id} nft={nft} handleShowModal={handleShowModal} />
        ))}

        <Modal show={showModal} cancel={() => setShowModal(false)}>
          {content === 'send' && <TransferNFT></TransferNFT>}
          {content === 'sell' && <SellNFT></SellNFT>}
        </Modal>
      </div>
    ) : (
      <h1>No NFts</h1>
    );
  } else {
    return <AuthMessage action="view your NFTs" />;
  }
};

export default NFTPage;
