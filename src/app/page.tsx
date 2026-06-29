"use client";

import { useState } from "react";
import MissionCard from "../components/missioncard";
import Header from "../components/Header";
import ProgressCard from "../components/ProgressCard";


const initialMissions = [
  {
    subject: "AE653",
    task: "Tutorial 5",
    deadline: "Quiz in 4 days",
    completed: false,
  },
  {
    subject: "ME201",
    task: "Assignment 2",
    deadline: "Tomorrow",
    completed: false,
  },
  {
    subject: "ESC101",
    task: "Lab Report",
    deadline: "Tonight",
    completed: false,
  },
];

export default function Home() {
  const [missions, setMissions] = useState(initialMissions);

  function completeMission(subject: string) {
      const updatedMissions = missions.map((mission) => {
    if (mission.subject === subject) {
      return {
        ...mission,
        completed: true,
      };
    }

    return mission;
  });

  
  console.log(updatedMissions);

  setMissions(updatedMissions);
  }


  const completedCount = missions.filter(
  (mission) => mission.completed).length;

  const totalMissions = missions.length;

  return (
    
    <main className="min-h-screen flex flex-col items-center justify-center gap-6 bg-black">
      <Header />

      <ProgressCard
          completed={completedCount}
          total={totalMissions}
        />

      {missions.map((mission) => (
        <MissionCard
          key={mission.subject}
          subject={mission.subject}
          task={mission.task}
          deadline={mission.deadline}
          completed={mission.completed}
          onComplete={completeMission}
        />
      ))}
    </main>
  );
}