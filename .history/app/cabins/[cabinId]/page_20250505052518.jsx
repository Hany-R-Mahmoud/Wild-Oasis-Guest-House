import Cabin from "@/app/_components/Cabin";
import Reservation from "@/app/_components/Reservation";
import Spinner from "@/app/_components/Spinner";
import { getCabin, getCabins } from "@/app/_lib/data-service";
import { Suspense } from "react";

export async function generateMetadata({ params }) {
  const { name } = await getCabin(params.cabinId);
  return {
    title: `Cabin ${name}`,
  };
}

export async function generateStaticParams() {
  const cabins = await getCabins();

  const ids = cabins.map((cabin) => ({
    cabinId: String(cabin.id),
  }));

  // console.log(ids);

  return ids;
}

export default async function Page({ params }) {
  // blocking waterfall, each is waiting for other to finish
  const cabin = await getCabin(params.cabinId);

  // // loading settings
  // const settings = await getSettings();
  // // loading booked dates for cabin
  // const bookedDates = getBookedDatesByCabinId(params.cabinId);

  //to overcome the waterfall

  // const [cabin, settings, bookedDates] = await Promise.all([
  //   getCabin(params.cabinId),
  //   await getSettings(),
  //   getBookedDatesByCabinId(params.cabinId),
  // ]);

  const { id, name, maxCapacity, regularPrice, discount, image, description } =
    cabin;

  return (
    <div className="max-w-6xl mx-auto mt-8">
      <Cabin cabin={cabin} />
      <div>
        <h2 className="text-5xl font-semibold text-center mb-10 text-accent-400">
          Reserve {name} today. Pay on arrival.
        </h2>
        <Suspense fallback={<Spinner />}>
          <Reservation cabin={cabin} />
        </Suspense>
      </div>
    </div>
  );
}
