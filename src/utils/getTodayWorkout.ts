import { gymschedule } from "../data/gym";

export function getTodayWorkout() {
    const today = new Date();

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const todayName = days[today.getDay()];

const todaysworkout = gymschedule.find(
  (Workout) => Workout.day === todayName
);

return todaysworkout;
}