"use client";

function Filter() {
  function handleFilter(filter) {}

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
        1 &dash; 3 guests
      </button>
      <button
        className="px-5 py-2 hover:bg-primary-700"
        onClick={() => handleFilter("medium")}
      >
        4 &dash; 7 guests
      </button>
      <button
        className="px-5 py-2 hover:bg-primary-700"
        onClick={() => handleFilter("large")}
      >
        8 &dash; 10 guests
      </button>
    </div>
  );
}

export default Filter;
