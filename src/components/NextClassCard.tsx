type NextClassCardProps = {
  subject: string;
  start: string;
  end: string;
  location: string;
};

export default function NextClassCard({
  subject,
  start,
  end,
  location,
}: NextClassCardProps) {
  return (
    <div className="rounded-2xl bg-zinc-900 p-6 w-80">
      <h2 className="text-2xl font-bold">📚 Next Class</h2>

      <p className="mt-4 text-xl">{subject}</p>

      <p className="text-gray-400">
        {start} - {end}
      </p>

      <p className="mt-2 text-gray-300">
        📍 {location}
      </p>
    </div>
  );
}