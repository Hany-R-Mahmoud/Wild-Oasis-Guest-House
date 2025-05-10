"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";

function Filter() {
  // hook from Next.js next/navigation
  const searchParams = useSearchParams();
  //hook from Next.js next/navigation NOT next/router
  // for programmatic navigation
  const router = useRouter();
  // for constructing URL
  const pathname = usePathname();

  //read current value from searchParams
  const activeFilter = searchParams.get("capacity") ?? "all";

  function handleFilter(filter) {
    // web API, not a Next.js

    const params = new URLSearchParams(searchParams);
    params.set("capacity", filter);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  return (
    <div className="flex justify-end mb-8">
      <div className="border border-primary-800 ">
        <Button
          filter="all"
          handleFilter={handleFilter}
          activeFilter={activeFilter}
        >
          All cabins
        </Button>
        <Button
          filter="small"
          handleFilter={handleFilter}
          activeFilter={activeFilter}
        >
          1 &mdash; 3 guests
        </Button>
        <Button
          filter="medium"
          handleFilter={handleFilter}
          activeFilter={activeFilter}
        >
          4 &mdash; 7 guests
        </Button>
        <Button
          filter="large"
          handleFilter={handleFilter}
          activeFilter={activeFilter}
        >
          8 &mdash; 10 guests
        </Button>
      </div>
    </div>
  );
}

function Button({ handleFilter, filter, activeFilter, children }) {
  return (
    <button
      className={`p-2 hover:bg-primary-700 ${
        filter === activeFilter ? "bg-primary-700 text-primary-50" : ""
      }`}
      onClick={() => handleFilter(filter)}
    >
      {children}
    </button>
  );
}

export default Filter;
