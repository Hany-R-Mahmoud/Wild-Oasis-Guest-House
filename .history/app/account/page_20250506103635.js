import { auth } from "../_lib/auth";

export const metadata = {
  title: "Guest area",
};
export default async function Page() {
  const session = await auth();

  console.log(session.user.name.split(" "));
  return (
    <div>
      <h2 className="font-semibold text-2xl text-accent-400 mb-7">
        Welcome, {}
      </h2>
    </div>
  );
}
