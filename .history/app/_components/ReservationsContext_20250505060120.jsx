import { createContext } from "react";

const ReservationsContext = createContext();

function ReservationsProvider() {
  const [range, setRange] = useState({ from: undefined, to: undefined });

  return <ReservationsContext.Provider></ReservationsContext.Provider>;
}
