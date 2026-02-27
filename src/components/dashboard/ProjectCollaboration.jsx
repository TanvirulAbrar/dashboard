import { motion } from "framer-motion";
import ProjectProgress from "./ProjectProgress";

const ProjectCollaboration = ({ scrollCardVariants }) => {
  return (
    <motion.section className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      {/* Team Collaboration */}
      <motion.div
        className="col-span-5 bg-white p-6 rounded-3xl border border-gray-100 lg:col-span-5"
        variants={scrollCardVariants}
        initial="hidden"
        whileInView="visible"
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
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                alt="Alexandra"
                className="w-10 h-10 rounded-full"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC12i09MBm0YrpNLT5fpXBnpqq5XFBOUkCWvinFqfnNEM9ne5fRpUMCLTvf_eSFDPi5HFE7ZOdGw4BTih6rrtBMkrvEiftm2U3AuM5HU7hZ8614yN5SlRpp60PgYRffwwlfcMWYow0UsltcdiY0t9flZ87X8ByKBJP0tNa4ZRfM_wzCoJG56FMTwAXcTu8zHPafdfOEd9TBJ2fBu2w5bfUk0VdOXILdaOWCkDtisN1nu-mGfMuH2tQfK86sSDyeubrJNNHXAy3uChs"
              />
              <div>
                <p className="text-xs font-bold text-gray-800">
                  Alexandra Deff
                </p>
                <p className="text-[9px] text-gray-400">
                  Working on{" "}
                  <span className="text-gray-600">
                    Github Project Repository
                  </span>
                </p>
              </div>
            </div>
            <span className="text-[8px] px-2 py-0.5 rounded-md bg-green-50 text-green-600 font-medium">
              Completed
            </span>
          </div>
          {/* Team Member 2 */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                alt="Edwin"
                className="w-10 h-10 rounded-full"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCuExxbZFN4sLm4sJi8vrDtnUJxkandvVONhtADA4kmszoeLtxuqfSE8V-Y757uYIUOFDVFdgnsq1w4QasgOFN2Ys_AhlyBVP4Hq5mo7S6ukH8zbXNwgBlyXBDMS94_2iVjemelbKPHkJZbJAkltRdDXl1_PNP7ai9y2rALV7nsO6W4h8fFy8oXM5tB7CHArSoSbS_qv3LMX57sjB2Yk0EzbMqpT4VsyAb2Dlz1nActa9x_InLLNbip9ipncpM1k_C9jh7pjd1vtT0"
              />
              <div>
                <p className="text-xs font-bold text-gray-800">Edwin Adenike</p>
                <p className="text-[9px] text-gray-400">
                  Working on{" "}
                  <span className="text-gray-600">
                    Integrate User Authentication System
                  </span>
                </p>
              </div>
            </div>
            <span className="text-[8px] px-2 py-0.5 rounded-md bg-orange-50 text-orange-600 font-medium">
              In Progress
            </span>
          </div>
          {/* Team Member 3 */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                alt="Isaac"
                className="w-10 h-10 rounded-full"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBk7pc3a_pKvwfs8i7Rkl7NdUweS3Bqx2PaK1mNQUZvhmedJhmjMo5vyHL_6YJAGJOED8VIENJWCy55opY0wWchbKLMpKVUXDwDwNmZNtdDN_lpZmho7FaUNYRoHXVo_WGnbceQLEh5UuTrop3_Ta47KmMtqw3WWNzbNPoLD29S9b0AhqFdubfrG2wvPNK8ZaC2XhbahsyP4g9yo5-BGdob8eW2Th8hD7cisSDqe7DVJEdYm2Cm-JeQZKsuduMjx7pRkqJ52ra7U4"
              />
              <div>
                <p className="text-xs font-bold text-gray-800">
                  Isaac Oluwatemilorun
                </p>
                <p className="text-[9px] text-gray-400">
                  Working on{" "}
                  <span className="text-gray-600">
                    Develop Search and Filter Functionality
                  </span>
                </p>
              </div>
            </div>
            <span className="text-[8px] px-2 py-0.5 rounded-md bg-red-50 text-red-400 font-medium">
              Pending
            </span>
          </div>
          {/* Team Member 4 */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                alt="David"
                className="w-10 h-10 rounded-full"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSUEWcAniU7VimsBJf-zeup4QX-KvqjFOBVa0pdCManx-e12MGEM7wKYyAME1t9NAoucR6mssIQD7JiTIpPfOIBcrVEum1bA3n5mKFp6qtfivYrrxQVwCnbpCPiOdzJGxBhkNh70slnpnrOdgKzzrSqngCf7LQCxYtdTxYA8Z7UJBVyif6mzxVGimjDctLTPWrRo9mJg3dwOYruvtjYI4c0HVNNqji6gdrRC-YCg_b45HsEQobXhotmAzNlTXnlA67AnWrYDicvf4"
              />
              <div>
                <p className="text-xs font-bold text-gray-800">David Oshodi</p>
                <p className="text-[9px] text-gray-400">
                  Working on{" "}
                  <span className="text-gray-600">
                    Responsive Layout for Homepage
                  </span>
                </p>
              </div>
            </div>
            <span className="text-[8px] px-2 py-0.5 rounded-md bg-orange-50 text-orange-600 font-medium">
              In Progress
            </span>
          </div>
        </div>
      </motion.div>

      <ProjectProgress />

      <motion.div
        className="col-span-3 bg-black rounded-3xl p-6 relative overflow-hidden flex flex-col lg:col-span-3"
        variants={scrollCardVariants}
        initial="hidden"
        whileInView="visible"
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
