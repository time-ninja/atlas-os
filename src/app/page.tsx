"use client";

import { useState } from "react";
import MissionCard from "../components/missioncard";
import Header from "../components/Header";
import ProgressCard from "../components/ProgressCard";
// import { timetable } from "../data/timetable";
import NextClassCard from "../components/NextClassCard";
import { getNextClass } from "../utils/getNextClass";

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
  const nextClass = getNextClass();

  return (
    
    <main className="min-h-screen flex flex-col items-center justify-center gap-6 bg-black">
      <Header />
      {nextClass ? (
      <NextClassCard
         subject={nextClass.subject}
          start={nextClass.start}
          end={nextClass.end}
          location={nextClass.location}
      />) : (
  <div className="w-80 rounded-2xl bg-zinc-900 p-6 text-white">
    <h2 className="text-2xl font-bold">🎉 Classes Complete</h2>

    <p className="mt-4 text-gray-300">
      No more classes today.
    </p>
  </div>
)}

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