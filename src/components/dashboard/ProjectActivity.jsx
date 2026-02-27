import { motion } from "framer-motion";
const ProjectActivity = ({ scrollCardVariants }) => {
  return (
    <motion.section className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
      <motion.div
        className="col-span-4 bg-white p-6 rounded-3xl border border-gray-100 lg:col-span-4"
        variants={scrollCardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <h3 className="font-bold text-gray-800 mb-6">Project Analytics</h3>
        <div className="flex items-end justify-between h-40 gap-2 mb-2">
          <div className="flex flex-col items-center flex-1">
            <div className="w-full bg-gray-50 border-2 border-dashed border-gray-200 rounded-full h-16"></div>
            <span className="text-[10px] text-gray-400 mt-2">S</span>
          </div>
          <div className="flex flex-col items-center flex-1">
            <div className="w-full bg-donezo-green-dark rounded-full h-24"></div>
            <span className="text-[10px] text-gray-400 mt-2">M</span>
          </div>
          <div className="flex flex-col items-center flex-1 relative">
            <div className="absolute -top-6 bg-donezo-green-light/40 text-[8px] font-bold px-1 rounded">
              74%
            </div>
            <div className="w-full bg-donezo-green-light rounded-full h-20"></div>
            <span className="text-[10px] text-gray-400 mt-2">T</span>
          </div>
          <div className="flex flex-col items-center flex-1">
            <div className="w-full bg-donezo-green-dark rounded-full h-32"></div>
            <span className="text-[10px] text-gray-400 mt-2">W</span>
          </div>
          <div className="flex flex-col items-center flex-1">
            <div className="w-full bg-gray-50 border-2 border-dashed border-gray-200 rounded-full h-24"></div>
            <span className="text-[10px] text-gray-400 mt-2">T</span>
          </div>
          <div className="flex flex-col items-center flex-1">
            <div className="w-full bg-gray-50 border-2 border-dashed border-gray-200 rounded-full h-16"></div>
            <span className="text-[10px] text-gray-400 mt-2">F</span>
          </div>
          <div className="flex flex-col items-center flex-1">
            <div className="w-full bg-gray-50 border-2 border-dashed border-gray-200 rounded-full h-12"></div>
            <span className="text-[10px] text-gray-400 mt-2">S</span>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="col-span-4 bg-white p-6 rounded-3xl border border-gray-100 flex flex-col justify-between lg:col-span-4"
        variants={scrollCardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <h3 className="font-bold text-gray-800 mb-4">Reminders</h3>
        <div>
          <p className="text-xl font-bold text-donezo-green-dark mb-1 leading-tight">
            Meeting with Arc Company
          </p>
          <p className="text-xs text-gray-400">Time : 02.00 pm - 04.00 pm</p>
        </div>
        <button className="w-full bg-donezo-green-dark text-white py-3 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 mt-4">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
          </svg>
          Start Meeting
        </button>
      </motion.div>

      <motion.div
        className="col-span-4 bg-white p-6 rounded-3xl border border-gray-100 lg:col-span-4"
        variants={scrollCardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-bold text-gray-800">Project</h3>
          <button className="text-xs border border-gray-200 px-3 py-1 rounded-full text-gray-500 hover:bg-gray-50">
            + New
          </button>
        </div>
        <ul className="space-y-4">
          <li className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-50 text-blue-600 rounded flex items-center justify-center">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                ></path>
              </svg>
            </div>
            <div>
              <p className="text-xs font-bold text-gray-800">
                Develop API Endpoints
              </p>
              <p className="text-[9px] text-gray-400">Due date: Nov 25, 2024</p>
            </div>
          </li>
          <li className="flex items-center gap-3">
            <div className="w-8 h-8 bg-teal-50 text-teal-600 rounded flex items-center justify-center">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                ></path>
              </svg>
            </div>
            <div>
              <p className="text-xs font-bold text-gray-800">Onboarding Flow</p>
              <p className="text-[9px] text-gray-400">Due date: Nov 28, 2024</p>
            </div>
          </li>
          <li className="flex items-center gap-3">
            <div className="w-8 h-8 bg-orange-50 text-orange-600 rounded flex items-center justify-center">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                ></path>
                <path
                  d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                ></path>
              </svg>
            </div>
            <div>
              <p className="text-xs font-bold text-gray-800">Build Dashboard</p>
              <p className="text-[9px] text-gray-400">Due date: Nov 30, 2024</p>
            </div>
          </li>
          <li className="flex items-center gap-3">
            <div className="w-8 h-8 bg-yellow-50 text-yellow-600 rounded flex items-center justify-center">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                ></path>
              </svg>
            </div>
            <div>
              <p className="text-xs font-bold text-gray-800">
                Optimize Page Load
              </p>
              <p className="text-[9px] text-gray-400">Due date: Dec 5, 2024</p>
            </div>
          </li>
        </ul>
      </motion.div>
    </motion.section>
  );
};
export default ProjectActivity;
