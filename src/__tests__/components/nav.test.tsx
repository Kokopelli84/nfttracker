import { render, screen } from '@testing-library/react';
import Nav from '@/components/nav';

const useRouter = jest.spyOn(require('next/router'), 'useRouter');

describe('Nav component', () => {
  test('should render the sections', () => {
    useRouter.mockImplementationOnce(() => ({
      pathname: '/',
    }));

    render(<Nav />);

    screen.getByText(/Portfolio/);
    screen.getByText(/LazyMint NFT/);
    screen.getByText(/Track Wallets/);
  });
});
