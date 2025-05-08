"use client";

import { useSearchParams } from "next/navigation";

function Filter() {
  function handleFilter(filter) {
    // from Next.js next/navigation
    useSearchParams();

    // web API, not a Next.js
    const params = new URLSearchParams();
  }

  return (
    <div className="border border-primary-800 flex">
      <button
        className="px-5 py-2 hover:bg-primary-700"
        onClick={() => handleFilter("all")}
      >
        All cabins
      </button>
      <button
        className="px-5 py-2 hover:bg-primary-700"
        onClick={() => handleFilter("small")}
      >
        1 &mdash; 3 guests
      </button>
      <button
        className="px-5 py-2 hover:bg-primary-700"
        onClick={() => handleFilter("medium")}
      >
        4 &mdash; 7 guests
      </button>
      <button
        className="px-5 py-2 hover:bg-primary-700"
        onClick={() => handleFilter("large")}
      >
        8 &mdash; 10 guests
      </button>
    </div>
  );
}

export default Filter;
