import React from "react";
import { FiCheckCircle, FiSearch, FiGrid, FiHelpCircle } from "react-icons/fi";

const navLinks = [
  { name: "Projects", href: "#" },
  { name: "Team", href: "#" },
  { name: "Reports", href: "#" },
];

const actions = [
  {
    name: "Back to Dashboard",
    href: "/",
    icon: FiGrid,
    primary: true,
  },
];

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-[#221610] text-slate-900 dark:text-slate-100">
      <header className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 px-6 md:px-10 py-3 bg-white dark:bg-[#221610]">
        <div className="flex items-center gap-2 text-lime-500">
          <FiCheckCircle size={26} />
          <h2 className="text-xl font-bold">Donezo</h2>
        </div>

        <nav className="hidden md:flex gap-6 text-sm font-medium text-slate-600 dark:text-slate-400">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="hover:text-lime-500 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div
          className="w-10 h-10 rounded-full border border-slate-200 dark:border-slate-700 bg-cover"
          style={{
            backgroundImage: "url('https://i.pravatar.cc/100')",
          }}
        />
      </header>

      <main className="flex flex-1 items-center justify-center p-6 text-center">
        <div className="max-w-xl w-full">
          <h1 className="text-[120px] font-black text-lime-500 opacity-20 select-none">
            404
          </h1>

          <div className="-mt-16 flex justify-center">
            <div className="w-40 h-40 bg-lime-500/10 rounded-full flex items-center justify-center">
              <FiSearch size={70} className="text-lime-500" />
            </div>
          </div>

          <div className="mt-6 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              Oops! This page seems to have gone missing.
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              The link might be broken, or the page may have been moved. Don't
              worry, your tasks are still safe!
            </p>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            {actions.map((action, index) => {
              const Icon = action.icon;
              return (
                <a
                  key={index}
                  href={action.href}
                  className={
                    action.primary
                      ? "flex items-center justify-center gap-2 px-8 py-3 bg-lime-500 hover:bg-lime-600 text-white font-bold rounded-xl shadow-lg shadow-lime-500/20 transition"
                      : "flex items-center justify-center gap-2 px-8 py-3 border-2 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-bold rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition"
                  }
                >
                  <Icon size={20} />
                  {action.name}
                </a>
              );
            })}
          </div>
        </div>
      </main>

      <footer className="py-10 text-center text-sm text-slate-400 dark:text-slate-600">
        © 2024 Donezo Project Management. Efficiency redefined.
      </footer>
    </div>
  );
};

export default NotFound;
