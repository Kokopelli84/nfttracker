import { ReactNode, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface ClientOnlyPortalProps {
  children: ReactNode;
  selector: string;
}

export default function ClientOnlyPortal({ children, selector }: ClientOnlyPortalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, [selector]);

  return mounted ? createPortal(children, document.getElementById('modal')!) : null;
}
