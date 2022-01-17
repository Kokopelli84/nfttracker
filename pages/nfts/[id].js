import { useRouter } from 'next/router';
import NFTDetail from '../../components/nftDetail';

const NFTDetailPage = ({ nft }) => {
  const router = useRouter();
  const { id } = router.query;
  return <h1>Hey</h1>;
};

export default NFTDetailPage;
