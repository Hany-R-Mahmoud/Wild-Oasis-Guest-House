"use client";
import {
  differenceInDays,
  isPast,
  isSameDay,
  isWithinInterval,
} from "date-fns";
import { DayPicker, TZDate } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { useReservation } from "./ReservationContext";

function isAlreadyBooked(range, datesArr) {
  return (
    range?.from &&
    range?.to &&
    datesArr.some((date) =>
      isWithinInterval(date, { start: range?.from, end: range?.to })
    )
  );
}

const getTimezone = () => {
  const offset = new Date().getTimezoneOffset();
  const sign = offset >= 0 ? "-" : "+";
  const hours = Math.floor(Math.abs(offset / 60));
  const minutes = Math.abs(offset % 60);
  return `${sign}${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}`;
};

function DateSelector({ cabin, settings, bookedDates }) {
  const { range, setRange, resetRange } = useReservation();

  const displayRange = isAlreadyBooked(range, bookedDates) ? {} : range;

  const { regularPrice, discount } = cabin;
  const numNights = differenceInDays(displayRange?.to, displayRange?.from);
  const cabinPrice = numNights * (regularPrice - discount);

  // SETTINGS
  const { minBookingLength, maxBookingLength } = settings;

  return (
    <div>
      {/* <div className="grid sm:grid-cols-1 md:grid-cols-2"> */}
      {/* <div className="flex flex-col justify-between"> */}

      <DayPicker
        className="p-5 place-self-center "
        mode="range"
        min={minBookingLength}
        max={maxBookingLength}
        // fromMonth={new Date()} depricated
        startMonth={new Date()}
        // fromDate={new Date()}        deprecated
        startDate={new Date()}
        // startDate={new Date(new Date().getTime() + timezoneOffset)}
        // toYear={new Date().getFullYear() + 5}deprecated
        endMonth={new Date(2025, 12)}
        captionLayout="dropdown"
        numberOfMonths={2}
        animate
        onSelect={setRange}
        selected={displayRange}
        // disabling past dates & already booked dates
        disabled={(currentDate) =>
          isPast(currentDate) ||
          bookedDates.some((date) => isSameDay(date, currentDate))
        }
        timeZone={getTimezone()}
      />

      <div className="container flex flex-col gap-8 p-8 mx-auto bg-accent-500 text-primary-800 ">
        {/* <div className="grid sm:grid-cols-1 md:grid-cols-2 px-8 py-8 bg-accent-500 text-primary-800 "> */}
        {/* <div className="flex items-center justify-between px-8 bg-accent-500 text-primary-800 h-[72px]"> */}{" "}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
          {/* <div className="flex items-baseline gap-6"> */}

          <p className="flex gap-2 items-baseline">
            {discount > 0 ? (
              <>
                <span className="text-2xl">${regularPrice - discount}</span>
                <span className="line-through font-semibold text-primary-700">
                  ${regularPrice}
                </span>
              </>
            ) : (
              <span className="text-2xl">${regularPrice}</span>
            )}
            <span className="">/night</span>
          </p>
          {numNights ? (
            <>
              <p className="bg-accent-600 px-3 py-2 text-2xl">
                <span>&times;</span> <span>{numNights}</span>
              </p>
              <p>
                <span className="text-lg font-bold uppercase">Total</span>{" "}
                <span className="text-2xl font-semibold">${cabinPrice}</span>
              </p>
            </>
          ) : null}
        </div>
        {range?.from || range?.to ? (
          <button
            className="border border-primary-800 py-2 px-4 text-sm font-semibold"
            onClick={() => resetRange()}
          >
            Clear
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default DateSelector;
