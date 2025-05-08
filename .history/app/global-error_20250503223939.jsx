export default function RootError({ error, statusCode, reset }) {
  return (
    <html lang="eng">
      <body
        className={`${josefin.className} bg-primary-950 antialiased text-primary-100 min-h-screen flex flex-col relative `}
      >
        <main className="flex justify-center items-center flex-col gap-6">
          <h1 className="text-3xl font-semibold">Something went wrong!</h1>
          <p className="text-lg">{error.message}</p>

          <button
            className="inline-block bg-accent-500 text-primary-800 px-6 py-3 text-lg"
            onClick={reset}
          >
            Try again
          </button>
        </main>
      </body>
    </html>
  );
}
