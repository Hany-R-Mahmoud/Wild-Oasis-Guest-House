import DateSelector from "./DateSelector";
import ReservationForm from "./ReservationForm";

function Reservation() {
  return (
    <div className="grid grid-col-2 border border-primary-800 min-h-[400px]">
      <DateSelector />
      <ReservationForm />
    </div>
  );
}

export default Reservation;
