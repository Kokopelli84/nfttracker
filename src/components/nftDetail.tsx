import { NftDetail as NftDetailType } from '@/ts/interfaces/INFT';
import Image from 'next/image';
import React from 'react';
import { FaEthereum } from 'react-icons/fa';

type Props = {
  nft: NftDetailType;
};

const NftDetail = ({ nft }: Props) => {
  return (
    <div className="flex justify-between ">
      <div className="mr-10 ">
        <Image
          alt="nft image"
          src={nft.image_url || nft.collection.featured_image_url}
          width={400}
          height={400}
          className="rounded-lg"
        />
      </div>
      <div className="flex-1 ">
        <h1 className="text-3xl text-white mb-5">{nft.name}</h1>
        <div className="text-gray-400 border border-gray-500 h-fit rounded-lg p-5 mb-5">
          <h2 className="mb-3 text-lg">Current Price</h2>
          <div className="flex items-center text-white mb-5">
            <FaEthereum className="mr-1 text-3xl" />
            <div className="text-3xl mr-3">{nft.currentPrice || 'Not For Sale'}</div>
            <div className="text-gray-400">
              {nft.currentPrice && `($${nft.currentDollarValue})`}
            </div>
          </div>
          <h2 className="mb-3 text-lg">Last Sale Price</h2>
          <div className="flex items-center text-white mb-5">
            <FaEthereum className="mr-1 text-3xl" />
            <div className="text-3xl mr-3">{nft.lastSale || 'No last sale'}</div>
            <div className="text-gray-400">{nft.lastSale && `($${nft.lastDollarValue})`}</div>
          </div>
        </div>
        <div className="text-gray-400 border border-gray-500 h-fit rounded-lg p-5">
          <h2 className="mb-3 text-lg">Created By</h2>
          <div className="flex items-center mb-3">
            <div className="mr-2 ">
              <Image
                alt="creator-image"
                src={nft.creator.profile_img_url}
                width={30}
                height={30}
                className="rounded-full"
              />
            </div>
            <a
              href={`https://rinkeby.etherscan.io/address/${nft.creator.address}`}
              className="mb-1 text-blue-500">
              {nft.creator.address}
            </a>
          </div>
          <h2 className="mb-3 text-lg">Description</h2>
          <p className="text-white text-base leading-6">{nft.description}</p>
        </div>
      </div>
    </div>
  );
};

export default NftDetail;
