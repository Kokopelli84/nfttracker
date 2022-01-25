import { render, screen } from '@testing-library/react';
import Nav from '@/components/nav';

describe('Nav component', () => {
  test('should render the sections', () => {
    render(<Nav />);

    screen.getByText(/Portfolio/);
    screen.getByText(/LazyMint NFT/);
    screen.getByText(/Track Wallets/);
  });
});
