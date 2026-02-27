import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import ProjectProgress from "../components/dashboard/ProjectProgress";
import Overview from "../components/dashboard/Overview";
import ProjectActivity from "../components/dashboard/ProjectActivity";
import ProjectCollaboration from "../components/dashboard/ProjectCollaboration";

const DashboardPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    toast.success("Logged out successfully!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    navigate("/login");
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const sidebarVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const mainVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  const scrollCardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const completed = 41;
  const inProgress = 34;
  const pending = 25;

  const total = 100;

  return (
    <motion.div
      className="bg-gray-100 min-h-screen flex items-center justify-center p-4 font-inter"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="bg-white w-full max-w-7xl lg:rounded-[2.5rem] shadow-2xl flex flex-col lg:flex-row overflow-hidden min-h-screen lg:min-h-[90vh]">
        {/* Sidebar */}
        <motion.aside
          className="hidden lg:flex w-64 border-r border-gray-100 p-8 flex-col"
          variants={sidebarVariants}
        >
          {/* Logo */}
          <div className="flex items-center gap-2 mb-12">
            <div className="w-8 h-8 bg-donezo-green-dark rounded-full flex items-center justify-center">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                ></path>
              </svg>
            </div>
            <span className="text-xl font-bold text-gray-800">Donezo</span>
          </div>

          {/* Navigation Menu */}
          <nav className="flex-1">
            <div className="mb-8">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
                Menu
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-3 p-2 bg-gray-50 text-donezo-green font-semibold rounded-xl border-l-4 border-donezo-green">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    ></path>
                  </svg>
                  Dashboard
                </li>
                <li className="flex items-center justify-between p-2 text-gray-500 hover:bg-gray-50 rounded-xl cursor-pointer">
                  <div className="flex items-center gap-3">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      ></path>
                    </svg>
                    Tasks
                  </div>
                  <span className="text-[10px] bg-donezo-green-dark text-white px-1.5 py-0.5 rounded-md">
                    12+
                  </span>
                </li>
                <li className="flex items-center gap-3 p-2 text-gray-500 hover:bg-gray-50 rounded-xl cursor-pointer">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    ></path>
                  </svg>
                  Calendar
                </li>
                <li className="flex items-center gap-3 p-2 text-gray-500 hover:bg-gray-50 rounded-xl cursor-pointer">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    ></path>
                  </svg>
                  Analytics
                </li>
                <li className="flex items-center gap-3 p-2 text-gray-500 hover:bg-gray-50 rounded-xl cursor-pointer">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    ></path>
                  </svg>
                  Team
                </li>
              </ul>
            </div>

            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
                General
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-3 p-2 text-gray-500 hover:bg-gray-50 rounded-xl cursor-pointer">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    ></path>
                    <path
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    ></path>
                  </svg>
                  Settings
                </li>
                <li className="flex items-center gap-3 p-2 text-gray-500 hover:bg-gray-50 rounded-xl cursor-pointer">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    ></path>
                  </svg>
                  Help
                </li>
                <li className="flex items-center gap-3 p-2 text-gray-500 hover:bg-gray-50 rounded-xl cursor-pointer">
                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-3 text-gray-500 hover:bg-gray-50 rounded-xl p-2"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      ></path>
                    </svg>
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </nav>

          {/* App Download Card */}
          <div className="mt-auto bg-black rounded-2xl p-4 text-white relative overflow-hidden">
            <div className="z-10 relative">
              <div className="bg-gray-800 w-8 h-8 rounded-lg flex items-center justify-center mb-2">
                <svg className="w-5 h-5" fill="white" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.1 2.48-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.24-1.99 1.11-3.14-1.01.04-2.23.67-2.95 1.51-.64.73-1.21 1.92-1.05 3.05 1.13.09 2.25-.59 2.89-1.42z"></path>
                </svg>
              </div>
              <p className="text-sm font-semibold mb-1 leading-tight">
                Download our Mobile App
              </p>
              <p className="text-[10px] text-gray-400 mb-4">
                Get easy in another way
              </p>
              <button className="w-full bg-donezo-green-dark py-2 rounded-xl text-xs font-bold hover:bg-opacity-90 transition">
                Download
              </button>
            </div>
            {/* Decorative Circle */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-white opacity-10 rounded-full"></div>
          </div>
        </motion.aside>

        <motion.main
          className="flex-1 p-4 md:p-8 overflow-y-auto"
          variants={mainVariants}
        >
          <motion.header
            className="flex items-center justify-between mb-8 flex-wrap"
            variants={itemVariants}
          >
            <div className="relative w-full lg:w-96 mb-4 lg:mb-0">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  ></path>
                </svg>
              </span>
              <input
                className="w-full pl-10 pr-12 py-2 bg-gray-50 border-none rounded-xl text-sm focus:ring-1 focus:ring-donezo-green-dark"
                placeholder="Search task"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-gray-400 border border-gray-200 px-1.5 py-0.5 rounded flex items-center gap-1">
                <svg
                  className="w-2.5 h-2.5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2L4.5 20.29L5.21 21L12 18L18.79 21L19.5 20.29L12 2Z"></path>
                </svg>
                F
              </span>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-4 text-gray-400">
                <button className="hover:text-gray-600 transition">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    ></path>
                  </svg>
                </button>
                <button className="relative hover:text-gray-600 transition">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    ></path>
                  </svg>
                  <div className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></div>
                </button>
              </div>
              <div className="flex items-center gap-3 pl-6 border-l border-gray-100">
                <div className="text-right">
                  <p className="text-sm font-bold text-gray-800 leading-tight">
                    Totok Michael
                  </p>
                  <p className="text-[10px] text-gray-400">
                    tmichael20@mail.com
                  </p>
                </div>
                <img
                  alt="User Profile"
                  className="w-10 h-10 rounded-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC12i09MBm0YrpNLT5fpXBnpqq5XFBOUkCWvinFqfnNEM9ne5fRpUMCLTvf_eSFDPi5HFE7ZOdGw4BTih6rrtBMkrvEiftm2U3AuM5HU7hZ8614yN5SlRpp60PgYRffwwlfcMWYow0UsltcdiY0t9flZ87X8ByKBJP0tNa4ZRfM_wzCoJG56FMTwAXcTu8zHPafdfOEd9TBJ2fBu2w5bfUk0VdOXILdaOWCkDtisN1nu-mGfMuH2tQfK86sSDyeubrJNNHXAy3uChs"
                />
              </div>
            </div>
          </motion.header>

          <section className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-1">
                Dashboard
              </h1>
              <p className="text-sm text-gray-400">
                Plan, prioritize, and accomplish your tasks with ease.
              </p>
            </div>
            <div className="flex gap-3">
              <button className="bg-donezo-green-dark text-white px-5 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2 hover:bg-opacity-90 transition">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 4v16m8-8H4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  ></path>
                </svg>
                Add Project
              </button>
              <button className="border border-gray-200 text-gray-600 px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-gray-50 transition">
                Import Data
              </button>
            </div>
          </section>
          <Overview scrollCardVariants={scrollCardVariants}></Overview>
          <ProjectActivity scrollCardVariants={scrollCardVariants} />
          <ProjectCollaboration scrollCardVariants={scrollCardVariants} />
        </motion.main>
      </div>
    </motion.div>
  );
};
export default DashboardPage;
