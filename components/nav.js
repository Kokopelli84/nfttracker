import { FaEthereum, FaChartLine, FaCrosshairs } from 'react-icons/fa';
import { RiZzzFill } from 'react-icons/ri';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Nav = () => {
  const router = useRouter();

  const checkPath = (path) => {
    return path === router.pathname
      ? 'text-white mb-5 opacity-100'
      : 'mb-5 opacity-75';
  };

  return (
    <div className="h-full">
      <nav className="gradient h-full p-7 w-56">
        <h3 className="text-2xl text-white  mb-10 font-medium">NiftyTracker</h3>
        <ul className="list-none text-gray-300  font-medium text-md ">
          <li className={checkPath('/nfts')}>
            <Link href="/nfts" passHref>
              <div className="cursor-pointer flex items-center">
                <FaChartLine className="inline mr-4 " />
                Portfolio
              </div>
            </Link>
          </li>
          <li className={checkPath('/mint')}>
            <Link href="/mint" passHref>
              <div className="cursor-pointer flex items-center">
                <FaEthereum className="inline mr-4 " />
                Mint NFT
              </div>
            </Link>
          </li>
          <li className={checkPath('/lazymint')}>
            <Link href="/lazymint" passHref>
              <div className="cursor-pointer flex items-center">
                <RiZzzFill className="inline mr-4 " />
                LazyMint NFT
              </div>
            </Link>
          </li>
          <li className={checkPath('/track')}>
            <Link href="/track" passHref>
              <div className="cursor-pointer flex items-center">
                <FaCrosshairs className="inline mr-4 " />
                Track Wallets
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
