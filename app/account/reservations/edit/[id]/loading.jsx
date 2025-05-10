import Spinner from "@/app/_components/Spinner";

export default function Loading() {
  return (
    <div className="grid items-center justify-center">
      <p className="text-xl text-primary-200"> Loading booking data...</p>
      <Spinner />
    </div>
  );
}
