const { createContext } = require("react");

const ReservationsContext = createContext();

function ReservationsProvider() {
  return <ReservationsContext.Provider></ReservationsContext.Provider>;
}
