import { getBookedDatesByCabinId } from "@/app/_lib/data-service";

export async function GET(request, { params }) {
  // console.log(request, params);

  const { cabinId } = params;

  try {
    await Promise.all(getCabin(cabinId),getBookedDatesByCabinId)
  }

  return Response.json({ test: "test" });
}

// export async function POST() {}
