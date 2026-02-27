import { motion } from "framer-motion";
const Overview = ({ scrollCardVariants }) => {
  return (
    <motion.section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {/* Total Projects Card */}
      <motion.div
        className="bg-donezo-green-dark p-6 rounded-3xl text-white relative"
        variants={scrollCardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        whileHover={{ scale: 1.05, y: -5 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex justify-between items-start mb-4">
          <p className="text-sm opacity-80">Total Projects</p>
          <div className="bg-white/20 p-1.5 rounded-full">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M7 11l5-5m0 0l5 5m-5-5v12"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              ></path>
            </svg>
          </div>
        </div>
        <h2 className="text-4xl font-bold mb-4 ">24</h2>
        <div className="flex items-center gap-1.5 text-[10px] bg-white/10 w-max px-2 py-1 rounded-full">
          <span className="bg-donezo-green-light text-donezo-green-dark px-1 rounded">
            2.5
          </span>
          <span className="opacity-70 ">increased from last month</span>
        </div>
      </motion.div>

      <motion.div
        className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm relative"
        variants={scrollCardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        whileHover={{ scale: 1.05, y: -5 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex justify-between items-start mb-4">
          <p className="text-sm text-gray-500">Ended Projects</p>
          <div className="border border-gray-200 p-1.5 rounded-full text-gray-400">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M7 11l5-5m0 0l5 5m-5-5v12"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              ></path>
            </svg>
          </div>
        </div>
        <h2 className="text-4xl font-bold text-gray-800 mb-4">10</h2>
        <div className="flex items-center gap-1.5 text-[10px] bg-gray-50 text-gray-400 w-max px-2 py-1 rounded-full border border-gray-100">
          <span className="bg-gray-200 text-gray-600 px-1 rounded">12</span>
          <span>increased from last month</span>
        </div>
      </motion.div>

      <motion.div
        className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm relative"
        variants={scrollCardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        whileHover={{ scale: 1.05, y: -5 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex justify-between items-start mb-4">
          <p className="text-sm text-gray-500">Running Projects</p>
          <div className="border border-gray-200 p-1.5 rounded-full text-gray-400">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M7 11l5-5m0 0l5 5m-5-5v12"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              ></path>
            </svg>
          </div>
        </div>
        <h2 className="text-4xl font-bold text-gray-800 mb-4">12</h2>
        <div className="flex items-center gap-1.5 text-[10px] bg-gray-50 text-gray-400 w-max px-2 py-1 rounded-full border border-gray-100">
          <span className="bg-gray-200 text-gray-600 px-1 rounded">2.1</span>
          <span>increased from last month</span>
        </div>
      </motion.div>

      <motion.div
        className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm relative"
        variants={scrollCardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        whileHover={{ scale: 1.05, y: -5 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex justify-between items-start mb-4">
          <p className="text-sm text-gray-500">Pending Project</p>
          <div className="border border-gray-200 p-1.5 rounded-full text-gray-400">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M7 11l5-5m0 0l5 5m-5-5v12"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              ></path>
            </svg>
          </div>
        </div>
        <h2 className="text-4xl font-bold text-gray-800 mb-4">2</h2>
        <p className="text-[10px] text-gray-400 font-medium">On Discuss</p>
      </motion.div>
    </motion.section>
  );
};

export default Overview;
