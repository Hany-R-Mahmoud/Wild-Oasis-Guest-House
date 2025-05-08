import { createContext, useState } from "react";

const ReservationsContext = createContext();

const initialState = { from: undefined, to: undefined };

function ReservationsProvider() {
  const [range, setRange] = useState(initialState);

  return <ReservationsContext.Provider></ReservationsContext.Provider>;
}
