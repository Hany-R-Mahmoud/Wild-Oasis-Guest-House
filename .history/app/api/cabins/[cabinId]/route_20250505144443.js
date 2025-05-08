export async function GET(request, { params }) {
  // console.log(request, params);

  const { cabinId } = params;

  return Response.json({ test: "test" });
}

// export async function POST() {}
