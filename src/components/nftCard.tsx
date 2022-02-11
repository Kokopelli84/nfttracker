import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaInfoCircle, FaPaperPlane, FaTag } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { Nft } from '@/ts/interfaces/INFT';
import { changeModalContent } from '../state/actions';

type IProps = {
  nft: Nft;
  handleShowModal: (id: number) => void;
};

const NFTCard = ({ nft, handleShowModal }: IProps) => {
  const dispatch = useDispatch();
  const currentPrice = nft.sell_orders && nft.sell_orders[0].current_price;

  return (
    <div className="flex flex-col w-fit">
      <div className="relative">
        <Image
          alt="Mountains"
          src={nft.image_url || nft.collection.featured_image_url}
          objectFit="cover"
          quality={100}
          width={300}
          height={300}
          className="rounded-xl"
        />
        {currentPrice && (
          <a
            href={`https://testnets.opensea.io/assets/${nft.asset_contract.address}/${nft.token_id}`}
            className="absolute block w-fit p-2 gradient shadow-md top-1 right-1 tranform  text-center text-white rounded-md shaow-lg uppercase text-xs font-semibold"
            target="_blank"
            rel="noreferrer">
            For Sale
          </a>
        )}
      </div>
      <div className=" bg-transparent border border-gray-600 flex text-white place-content-around text-xl  p-3 mt-2 rounded-xl bg-tr">
        <Link href={`nfts/${nft.id}`} passHref>
          <button type="button">
            <FaInfoCircle />
          </button>
        </Link>
        <button
          type="button"
          onClick={() => {
            dispatch(changeModalContent('send'));
            handleShowModal(nft.id);
          }}>
          <FaPaperPlane />
        </button>
        <button
          type="button"
          className="disabled:cursor-not-allowed disabled:opacity-50"
          disabled={!!currentPrice}
          onClick={() => {
            dispatch(changeModalContent('sell'));
            handleShowModal(nft.id);
          }}>
          <FaTag />
        </button>
      </div>
    </div>
  );
};

export default NFTCard;
