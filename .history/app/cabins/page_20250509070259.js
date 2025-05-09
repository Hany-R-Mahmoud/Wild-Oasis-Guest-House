import CabinsList from "@/app/_components/CabinsList";
import { Suspense } from "react";
import Spinner from "../_components/Spinner";
import Filter from "../_components/Filter";
import ReservationReminder from "../_components/ReservationReminder";

export const revalidate = 86400;

export const metadata = {
  title: "Cabins",
};

export default function Page({ searchParams }) {
  const filter = searchParams?.capacity ?? "all";

  return (
    <div className="mx-5 grid sm:grid-cols-1 md:grid-cols-2">
      <h1 className="text-4xl mb-5 text-accent-400 font-medium">
        Our Luxury Cabins
      </h1>
      <p className="text-primary-200 text-lg mb-10">
        Cozy yet luxurious cabins, located right in the heart of the Italian
        Dolomites. Imagine waking up to beautiful mountain views, spending your
        days exploring the dark forests around, or just relaxing in your private
        hot tub under the stars. Enjoy nature&apos;s beauty in your own little
        home away from home. The perfect spot for a peaceful, calm vacation.
        Welcome to paradise.
      </p>
      <div className="flex justify-end mb-8">
        <Filter />
      </div>

      {/* passing unique key 
       navigation in Next.js is always wrapped in a React transition.
      And in a transition, the suspense will not hide the content that has already been rendered earlier.
      it will just wait and swap it out as soon as the new content comes in.
      */}
      <Suspense fallback={<Spinner />} key={filter}>
        <CabinsList filter={filter} />
        <ReservationReminder />
      </Suspense>
    </div>
  );
}
