import Logo from "@/app/_components/Logo";
import Navigation from "@/app/_components/Navigation";

import "@/app/_styles/globals.css";

export const metadata = {
  title: "The Wild Oasis",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body className="bg-blue-900 text-gray-50 min-h-screen ">
        <header>
          <Logo />
          <Navigation />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
