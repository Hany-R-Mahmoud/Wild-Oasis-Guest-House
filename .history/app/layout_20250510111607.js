import "@/app/_styles/globals.css";
import { Josefin_Sans } from "next/font/google";
import HeaderMediaQuery from "./_components/HeaderMediaQuery";
import { ReservationProvider } from "./_components/ReservationContext";
import Header from "./_components/Header";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  // title: "The Wild Oasis",
  title: {
    template: "%s / The Wild Oasis",
    default: "Welcome : The Wild Oasis",
  },
  description:
    " Luxurious cabin hotel, located in the heart of the Italian Dolomites, surrounded by beautiful mountains and dark forests",
};

export default function RootLayout({ children }) {
  return (
    <html lang="eng">
      <body
        className={`${josefin.className} bg-primary-950 antialiased text-primary-100 min-h-screen  relative `}
      >
        <div className="container mx-auto px-2">
          <Header />
          <ReservationProvider>
            <main className=" max-w-7xl  w-full px-2 py-12 ">{children}</main>
          </ReservationProvider>{" "}
        </div>
      </body>
    </html>
  );
}
