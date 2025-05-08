export default function Page() {
  fetch("https://jsonplaceholder.typicode.com/users");
  return (
    <div>
      <h1>Cabins page</h1>
    </div>
  );
}
