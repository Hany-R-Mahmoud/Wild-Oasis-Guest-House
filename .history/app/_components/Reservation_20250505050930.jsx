import { getBookedDatesByCabinId, getSettings } from "../_lib/data-service";
import DateSelector from "./DateSelector";
import ReservationForm from "./ReservationForm";

async function Reservation() {
  const [settings, bookedDates] = await Promise.all([
    await getSettings(),
    getBookedDatesByCabinId(params.cabinId),
  ]);

  return (
    <div className="grid grid-col-2 border border-primary-800 min-h-[400px]">
      <DateSelector />
      <ReservationForm />
    </div>
  );
}

export default Reservation;
