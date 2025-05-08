import { createContext } from "react";

const ReservationsContext = createContext();

function ReservationsProvider() {
  return <ReservationsContext.Provider></ReservationsContext.Provider>;
}
