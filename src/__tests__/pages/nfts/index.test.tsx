import NFTPage from '@/pages/nfts';
import { store } from '@/state/store';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { mockNFT } from '../../mocks/nft';

const useMoralis = jest.spyOn(require('react-moralis'), 'useMoralis');
const useAppSelector = jest.spyOn(require('@/state/hooks'), 'useAppSelector');

describe('NftPage', () => {
  it('renders a sign in message if not logged in', () => {
    useMoralis.mockImplementationOnce(() => ({
      account: null,
      isAuthenticated: false,
    }));

    render(
      <Provider store={store}>
        <NFTPage />
      </Provider>
    );

    expect(screen.getByText(/please authenticate./i)).toBeInTheDocument();
  });

  it('renders a "No Nft" message if user has no Nfts', () => {
    useMoralis.mockImplementationOnce(() => ({
      account: '0xC97475B097D9529D3B700B3e471E2f756f99Dded',
      isAuthenticated: true,
    }));

    useAppSelector.mockImplementationOnce(() => []);

    render(
      <Provider store={store}>
        <NFTPage />
      </Provider>
    );

    expect(screen.getByText(/no nfts/i)).toBeInTheDocument();
  });

  it("renders the user's nfts", async () => {
    useMoralis.mockImplementationOnce(() => ({
      account: '0xC97475B097D9529D3B700B3e471E2f756f99Dded',
      isAuthenticated: true,
    }));

    useAppSelector.mockImplementationOnce(() => [mockNFT]);

    render(
      <Provider store={store}>
        <NFTPage />
      </Provider>
    );

    expect(screen.getByText(/nftgrid/i)).toBeInTheDocument();
  });
});
