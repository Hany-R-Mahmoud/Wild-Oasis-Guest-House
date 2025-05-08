import CabinCard from "@/app/_components/CabinCard";
import { getCabins } from "@/app/_lib/data-service";

async function CabinsList({ filter }) {
  const cabins = await getCabins();
  // console.log(cabins);

  let displayedCabins;

  if (filter === "all") displayedCabins = cabins;
  if (filter === "small")
    displayedCabins = cabins.filter((cabin) => cabin.maxCapacity <= 3);
  if (filter === "medium")
    displayedCabins = cabins.filter(
      (cabin) => cabin.maxCapacity > 3 && cabin.maxCapacity <= 7
    );
  if (filter === "big")
    displayedCabins = cabins.filter((cabin) => cabin.maxCapacity >= 8);

  if (!cabins.length) return null;

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
      {cabins.map((cabin) => (
        <CabinCard cabin={cabin} key={cabin.id} />
      ))}
    </div>
  );
}

export default CabinsList;
