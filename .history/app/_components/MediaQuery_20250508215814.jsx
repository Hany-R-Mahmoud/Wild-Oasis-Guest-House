'use client';

import { useMediaQuery } from 'react-responsive';

export default function MediaQuery  () > {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <ServerComponent isMobile={isMobile} />
  );
};