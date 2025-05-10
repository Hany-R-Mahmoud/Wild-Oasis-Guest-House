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
        {/* <body
        className={`${josefin.className} bg-primary-950 antialiased text-primary-100 min-h-screen flex flex-col relative `}
      > */}
        <Header />
        <div className="container grid sm:grid-cols-1 md:grid-cols-2  mx-auto">
          <div className=" px-2 py-12  ">
            <ReservationProvider>
              {/* <main className=" w-full "> */}
              <main className="max-w-7xl mx-auto w-full row-span-2">
                {children}
              </main>
            </ReservationProvider>
          </div>
        </div>
      </body>
    </html>
  );
}
