import { render, screen } from '@testing-library/react';
import { mockNFT } from '../mocks/nft';
import NftDetail from '@/components/nftDetail';

describe('NftDetail component', () => {
  const mockProps = {
    nft: mockNFT,
  };

  test('should render Nft description', () => {
    render(<NftDetail nft={mockProps.nft} />);

    screen.getByText(/RTFKT and Takashi Murakami/i);
  });

  test('should render an href pointing to Nft creator', () => {
    render(<NftDetail nft={mockProps.nft} />);

    const creatorRinkebyUrl = `https://rinkeby.etherscan.io/address/${mockProps.nft.creator.address}`;

    expect(screen.getByText(mockProps.nft.creator.address)).toHaveAttribute(
      'href',
      creatorRinkebyUrl
    );
  });
});
