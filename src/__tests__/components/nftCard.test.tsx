import { render, screen } from '@testing-library/react';
import NftCard from '@/components/nftCard';
import { mockNFT } from '../mocks/nft';

describe('Submit Button component', () => {
  const mockProps = {
    nft: mockNFT,
    handleShowModal: () => {},
  };

  test('should render buttons', () => {
    render(<NftCard nft={mockProps.nft} handleShowModal={mockProps.handleShowModal} />);

    screen.getByRole('button');
  });
});
