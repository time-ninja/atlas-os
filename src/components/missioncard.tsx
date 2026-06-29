type MissionCardProps = {
  subject: string;
  task: string;
  deadline: string;
  onComplete: (subject: string) => void;
  completed: boolean;
};


export default function MissionCard({
  subject,
  task,
  deadline,
  completed,
  onComplete,
}: MissionCardProps) {
  return (
    <div className="rounded-2xl bg-zinc-900 p-6">
      <h2 className="text-2xl font-bold">🎯 Today's Mission</h2>

      <p className="mt-4 text-lg">
        {subject}
      </p>

      <p className="mt-2 text-lg">
        {task}
      </p>

      <p className="mt-2 text-gray-400">
        {deadline}
      </p>

   {completed ? (
  <p className="mt-6 text-green-400 font-semibold">
    ✅ Mission Completed
  </p>
) : (
  <button
    onClick={() => onComplete(subject)}
    className="mt-6 rounded-xl bg-blue-600 px-5 py-2 font-semibold hover:bg-blue-500"
  >
    Complete Mission
  </button>
)}
    </div>
  );
}