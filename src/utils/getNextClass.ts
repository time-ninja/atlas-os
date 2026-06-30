import { timetable } from "../data/timetable";

export function getNextClass() {
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

const todaysClasses = timetable.filter(
  (lesson) => lesson.day === todayName
);


const hours = String(today.getHours()).padStart(2, "0");
const minutes = String(today.getMinutes()).padStart(2, "0");

const currentTime = `${hours}:${minutes}`;

const nextClass = todaysClasses.find((lesson) => {
  return lesson.start > currentTime;
});
if (!nextClass) {
  return null;
}

return nextClass;
}