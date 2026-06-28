import MissionCard from "../components/missioncard";

const missions = [
  {
    subject: "AE653",
    task: "Tutorial 5",
    deadline: "Quiz in 4 days",
  },

  {
    subject: "ME201",
    task: "Assignment 2",
    deadline: "Tomorrow",
  },

  {
    subject: "ESC101",
    task: "Lab Report",
    deadline: "Tonight",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6 bg-black">
     {missions.map((mission) => (
  <MissionCard
    subject={mission.subject}
    task={mission.task}
    deadline={mission.deadline}
  />
))}
    </main>
  );
}
