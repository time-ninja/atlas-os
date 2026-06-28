type MissionCardProps = {
  subject: string;
  task: string;
  deadline: string;
};

export default function MissionCard(props: MissionCardProps) {
  return (
    <div className="rounded-2xl bg-zinc-900 p-6">
      <h2 className="text-2xl font-bold">🎯 Today's Mission</h2>

      <p className="mt-4 text-lg">
        {props.subject}
      </p>

      <p className="mt-2 text-lg">
        {props.task}
      </p>

      <p className="mt-2 text-gray-400">
        {props.deadline}
      </p>

      <button className="mt-6 rounded-xl bg-blue-600 px-5 py-2 font-semibold hover:bg-blue-500">
        Start Focus Session
      </button>
    </div>
  );
}