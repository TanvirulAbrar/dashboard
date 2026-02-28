import { motion } from "framer-motion";
import DataChart from "./DataChart";
// import DataChart from "../charts/DataChart";
const ProjectActivity = ({ scrollCardVariants, products, analyticsData }) => {
  const getIcon = (category) => {
    const IconData = {
      subscription: {
        d: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
        colors: "bg-green-50 text-green-600",
      },
      addon: {
        d: "M3 10h18M12 3v18",
        colors: "bg-orange-50 text-orange-600",
      },
      design: {
        d: "M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z",
        colors: "bg-pink-50 text-pink-600",
      },
      development: {
        d: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
        colors: "bg-blue-50 text-blue-600",
      },
      testing: {
        d: "M9 12l2 2 4-4",
        colors: "bg-yellow-50 text-yellow-600",
      },
      default: {
        d: "M12 6v6l4 2",
        colors: "bg-slate-50 text-slate-600",
      },
    };

    return IconData[category] || IconData.default;
  };
  return (
    <motion.section className="grid grid-cols-12 lg:grid-cols-12 gap-6 mb-8">
      <motion.div
        className="col-span-4 bg-gray-600 p-6 rounded-3xl border border-gray-100 lg:col-span-4"
        variants={scrollCardVariants}
        initial="hidden"
        whileInView="visible"
        whileHover={{ scale: 1.02 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <h3 className="font-bold text-gray-800 mb-6">Project Analytics</h3>
        <DataChart data={analyticsData} />
      </motion.div>

      <motion.div
        className="col-span-4 bg-white p-6 rounded-3xl border border-gray-100 flex flex-col justify-between lg:col-span-4"
        variants={scrollCardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        whileHover={{ scale: 1.02, y: -5 }}
        transition={{ duration: 0.3 }}
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
        whileHover={{ scale: 1.02 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-bold text-gray-800">Product</h3>
          <button className="text-xs border border-gray-200 px-3 py-1 rounded-full text-gray-500 hover:bg-gray-50">
            + New
          </button>
        </div>
        <ul className="space-y-4">
          {products &&
            products.map((product) => {
              const icon = getIcon(product.category);
              const revenue = product.price * product.sales;

              return (
                <li className="flex items-center gap-3 bg-white rounded-xl hover:shadow-md transition">
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center ${icon.colors}`}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d={icon.d}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.8"
                      />
                    </svg>
                  </div>

                  <div className="flex-1">
                    <p className="text-[10px] flex justify-between font-semibold text-gray-800">
                      <div className="line-clamp-1">{product.name}</div>
                      <div
                        className={`${icon.colors} text-[8px] font-normal px-[6px] rounded-full`}
                      >
                        {product.category}
                      </div>
                    </p>
                    <p className="text-[10px] text-gray-400 ">
                      ${product.price} • Sales: {product.sales}
                    </p>
                  </div>
                </li>
              );
            })}
        </ul>
      </motion.div>
    </motion.section>
  );
};
export default ProjectActivity;
