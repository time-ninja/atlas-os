type ProgressCardProps = {
  completed: number;
  total: number;
};

export default function ProgressCard({
  completed,
  total,
}: ProgressCardProps) {
  return (
    <div className="w-96 rounded-2xl bg-zinc-900 p-6 text-white shadow-lg">
      <h2 className="text-xl font-bold">📊 Today's Progress</h2>

      <p className="mt-4 text-lg">
        {completed} / {total} Missions Completed
      </p>
    </div>
  );
}