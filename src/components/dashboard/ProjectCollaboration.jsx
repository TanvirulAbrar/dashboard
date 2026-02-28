import { motion } from "framer-motion";
import ProjectProgress from "./ProjectProgress";

const ProjectCollaboration = ({ scrollCardVariants, users }) => {
  const image = "https://i.ibb.co.com/DPT8GWdc/20260228-131243.jpg";
  return (
    <motion.section className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      {/* Team Collaboration */}
      <motion.div
        className="col-span-5 bg-white p-6 rounded-3xl border border-gray-100 lg:col-span-5"
        variants={scrollCardVariants}
        initial="hidden"
        whileInView="visible"
        whileHover={{ scale: 1.02, y: -5 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-bold text-gray-800">Team Collaboration</h3>
          <button className="text-[10px] border border-gray-200 px-3 py-1 rounded-full text-gray-500 hover:bg-gray-50">
            + Add Member
          </button>
        </div>
        <div className="space-y-4">
          {/* Team Member 1 */}
          {users &&
            users.map((user) => {
              return (
                <div className="flex min-md:h-8 items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      alt="Alexandra"
                      className="w-10 h-10 rounded-full"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBk7pc3a_pKvwfs8i7Rkl7NdUweS3Bqx2PaK1mNQUZvhmedJhmjMo5vyHL_6YJAGJOED8VIENJWCy55opY0wWchbKLMpKVUXDwDwNmZNtdDN_lpZmho7FaUNYRoHXVo_WGnbceQLEh5UuTrop3_Ta47KmMtqw3WWNzbNPoLD29S9b0AhqFdubfrG2wvPNK8ZaC2XhbahsyP4g9yo5-BGdob8eW2Th8hD7cisSDqe7DVJEdYm2Cm-JeQZKsuduMjx7pRkqJ52ra7U4"
                    />
                    <div>
                      <p className="text-xs font-bold text-gray-800">
                        {user.name}
                      </p>
                      <p className="text-[9px] text-gray-400">
                        {user.email}{" "}
                        <span className="text-gray-600">{user.joinDate}</span>
                      </p>
                    </div>
                  </div>
                  <span className="text-[8px] px-2 py-0.5 rounded-md bg-green-50 text-green-600 font-medium">
                    {user.status}
                  </span>
                </div>
              );
            })}
        </div>
      </motion.div>

      <ProjectProgress />

      <motion.div
        className="col-span-3 bg-cover bg-center rounded-3xl p-6 relative overflow-hidden flex flex-col lg:col-span-3"
        variants={scrollCardVariants}
        style={{ backgroundImage: `url(${image})` }}
        initial="hidden"
        whileInView="visible"
        whileHover={{ scale: 1.02, y: -5 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <h3 className="text-white text-sm font-semibold mb-8 z-10">
          Time Tracker
        </h3>
        <div className="z-10 mb-8">
          <p className="text-white text-3xl font-bold tracking-widest text-center">
            01:24:08
          </p>
        </div>
        <div className="z-10 flex justify-center gap-4">
          <button className="bg-white p-2.5 rounded-full text-black hover:bg-gray-200 transition">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"></path>
            </svg>
          </button>
          <button className="bg-red-500 p-2.5 rounded-full text-white hover:bg-red-600 transition">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 6h12v12H6z"></path>
            </svg>
          </button>
        </div>

        <div className="absolute bottom-0 right-0 w-32 h-32 opacity-30">
          <svg
            className="w-full h-full text-donezo-green-light"
            viewBox="0 0 100 100"
          >
            <path
              d="M0 100 Q 25 50 50 100 T 100 100"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            ></path>
            <path
              d="M0 90 Q 25 40 50 90 T 100 90"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            ></path>
            <path
              d="M0 80 Q 25 30 50 80 T 100 80"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            ></path>
          </svg>
        </div>
      </motion.div>
    </motion.section>
  );
};
export default ProjectCollaboration;
