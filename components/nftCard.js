import Image from 'next/image';
import { FaInfoCircle, FaPaperPlane, FaTag } from 'react-icons/fa';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import { changeModalContent } from '../state/actions';

const NFTCard = ({ nft, handleShowModal }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col ">
      <Image
        alt="Mountains"
        src={nft.image_url || nft.asset_contract.image_url}
        objectFit="cover"
        quality={100}
        width={300}
        height={300}
        className="rounded-xl"
      />
      <div className=" bg-transparent border border-gray-600 flex text-white place-content-around text-xl  p-3 mt-2 rounded-xl bg-tr">
        <Link href={`nfts/${nft.id}`} passHref>
          <button>
            <FaInfoCircle />
          </button>
        </Link>
        <button
          onClick={() => {
            dispatch(changeModalContent('send'));
            handleShowModal(nft.id);
          }}
        >
          <FaPaperPlane />
        </button>
        <button
          onClick={() => {
            dispatch(changeModalContent('sell'));
            handleShowModal(nft.id);
          }}
        >
          <FaTag />
        </button>
      </div>
    </div>
  );
};

export default NFTCard;
