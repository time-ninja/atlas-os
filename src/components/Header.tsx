import { getGreeting } from "@/utils/getGreeting";

export default function Header() {
    const { greeting, date } = getGreeting();

    return (
        <div className="mb-10">

            <h1 className="text-4xl font-bold tracking-tight text-white">
                {greeting}, Preet 👋
            </h1>

            <p className="mt-2 text-zinc-400 text-lg">
                {date}
            </p>

        </div>
    );
}