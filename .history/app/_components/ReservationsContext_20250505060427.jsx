import { createContext, useContext, useState } from "react";

const ReservationsContext = createContext();

const initialState = { from: undefined, to: undefined };

function ReservationsProvider({ children }) {
  const [range, setRange] = useState(initialState);

  return (
    <ReservationsContext.Provider value={{ range, setRange }}>
      {children}
    </ReservationsContext.Provider>
  );
}

function useReservations() {
  const context = useContext(ReservationsContext);

  if(context === undefined) throw new Error('context is used outside of ReservationsContext')
  retrun context
}
