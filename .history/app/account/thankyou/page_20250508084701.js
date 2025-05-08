import { auth } from "@/app/_lib/auth";
import Link from "next/link";

export default async function Page() {
  const session = await auth();
  if (!session) throw new Error("You must be logged in");
  return (
    <div className="text-center space-y-6 mt-4">
      <h1 className="text-3xl font-semibold">Thank you for your booking!</h1>
      <Link
        href="/account/reservations"
        className="underline text-xl text-accent-500 inline-block"
      >
        Manage your bookings &rarr;
      </Link>
    </div>
  );
}
