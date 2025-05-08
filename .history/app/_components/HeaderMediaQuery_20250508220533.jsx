// "use client";

import { useMediaQuery } from "react-responsive";
import Header from "./Header";

export default function HeaderMediaQuery() {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return <Header isMobile={isMobile} />;
}
