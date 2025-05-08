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
    <div className="border border-primary-800 flex">
      <Button>All cabins</Button>

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

function Button({ handleFilter, filter, activeFilter, children }) {
  <button
    className="px-5 py-2 hover:bg-primary-700"
    onClick={() => handleFilter(filter)}
  >
    {children}
  </button>;
}

export default Filter;
