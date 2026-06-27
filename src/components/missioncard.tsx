export default function MissionCard() {
  return (
    <div className="rounded-2xl bg-zinc-900 p-6">
      <h2 className="text-2xl font-bold">🎯 Today's Mission</h2>

      <p className="mt-4 text-lg">
        Study AE653 Tutorial 5
      </p>

      <p className="mt-2 text-gray-400">
        Quiz in 4 days
      </p>

      <button className="mt-6 rounded-xl bg-blue-600 px-5 py-2 font-semibold hover:bg-blue-500">
        Start Focus Session
      </button>
    </div>
  );
}