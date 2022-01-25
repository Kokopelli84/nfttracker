import { render, screen } from '@testing-library/react';
import NftCard from '@/components/nftCard';
import { mockNFT } from '../mocks/nft';
import { Provider } from 'react-redux';
import { store } from '@/state/store';

describe('Submit Button component', () => {
  const mockProps = {
    nft: mockNFT,
    handleShowModal: () => {},
  };

  test('should render buttons', () => {
    render(
      <Provider store={store}>
        <NftCard nft={mockProps.nft} handleShowModal={mockProps.handleShowModal} />
      </Provider>
    );

    screen.getAllByRole('button');
  });
});
