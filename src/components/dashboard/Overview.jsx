import { motion } from "framer-motion";
const Overview = ({ scrollCardVariants, overviewData }) => {
  return (
    <motion.section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {/* Total Projects Card */}
      {overviewData &&
        Object.entries(overviewData).map(([key, value]) => (
          <motion.div
            className="bg-white hover:bg-green-700 p-6 shadow-sm rounded-3xl text-gray-700 hover:text-white relative"
            variants={scrollCardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex justify-between items-start mb-4">
              <p className="text-sm opacity-80">{key}</p>
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
            <h2 className="text-4xl font-bold mb-4 ">{value}</h2>
            <div className="flex items-center gap-1.5 text-[10px] bg-white/10 w-max px-2 py-1 rounded-full">
              <span className="bg-donezo-green-light text-green-600 px-1 rounded">
                1
              </span>
              <span className="opacity-70 ">increased from last month</span>
            </div>
          </motion.div>
        ))}
    </motion.section>
  );
};

export default Overview;
