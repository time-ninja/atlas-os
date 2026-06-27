import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
      <h1 className="text-6xl font-bold">AtlasOS</h1>

      <h2 className="mt-4 text-2xl text-gray-300">
        Your Academic Operating System
      </h2>

      <p className="mt-6 max-w-xl text-center text-gray-400">
        Maximize your CPI. Organize your research. Stay consistent.
      </p>

      <button className="mt-10 rounded-xl bg-blue-600 px-6 py-3 text-lg font-semibold hover:bg-blue-500">
        Start Your Day
      </button>
    </main>
  );
}
