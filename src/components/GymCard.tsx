type GymCardProps = {
  split: string;
  exerciseCount: number;
}

export default function GymCard({ split, exerciseCount }: GymCardProps) {
    return (
        <div className="rounded-2xl bg-zinc-900 p-6 w-80">
      <h2 className="text-2xl font-bold">{split}</h2>

      <p className="mt-4 text-xl">Exercises: {exerciseCount}

      </p>
      </div>
    );
}