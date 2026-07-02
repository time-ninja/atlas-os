import Link from "next/link";
import { sidebarData } from "@/data/sidebar";

export default function Sidebar() {
  return (
    <div className="w-64 min-h-screen bg-zinc-900 border-r border-zinc-800 px-6 py-8 flex flex-col">

      <h1 className="text-3xl font-bold tracking-tight text-white">AtlasOS</h1>

    <div className="mt-3">
        <p className="text-sm text-zinc-400 leading-relaxed italic">
        "Discipline is choosing between what you want now and what you want most."
        </p>

        <p className="mt-2 text-xs text-zinc-500">
        — Abraham Lincoln
        </p>
    </div>

    <div className="my-8 border-t border-zinc-800" />

    <nav className="flex flex-col gap-2">
      {sidebarData.map((item) => (

        <Link
          key={item.id}
          href={item.route}
          className="block rounded-xl px-4 py-3 text-zinc-300 hover:bg-zinc-800 hover:text-white transition-colors duration-200"
        >
          {item.name}
        </Link>

      ))}
    </nav>

    </div>
  );
}