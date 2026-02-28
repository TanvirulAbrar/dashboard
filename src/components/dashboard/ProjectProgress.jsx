import { motion } from "framer-motion";

export default function ProjectProgress() {
  const completed = 41;
  const inProgress = 34;
  const pending = 25;

  const radius = 15.9155;
  const circumference = 2 * Math.PI * radius;

  const completedLength = (completed / 100) * circumference;
  const progressLength = (inProgress / 100) * circumference;
  const pendingLength = (pending / 100) * circumference;

  // Animation variants
  const containerVariants = {
    hidden: {
      opacity: 0,
      scale: 0.9,
      y: 30,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };

  const progressVariants = {
    hidden: {
      strokeDashoffset: circumference,
      opacity: 0,
    },
    visible: (custom) => ({
      strokeDashoffset: custom.offset,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: "easeInOut",
        delay: custom.delay,
      },
    }),
  };

  const legendVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: 0.8,
      },
    },
  };

  return (
    <motion.div
      className="col-span-4 bg-white p-6 rounded-3xl border border-gray-100 flex flex-col items-center"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      whileHover={{ scale: 1.02, y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <motion.h3
        className="font-bold text-gray-800 self-start mb-6"
        variants={legendVariants}
      >
        Project Progress
      </motion.h3>

      <motion.div className="relative w-36 h-36" variants={containerVariants}>
        <svg className="-rotate-90" viewBox="0 0 36 36">
          {/* Completed */}
          <motion.circle
            cx="18"
            cy="18"
            r={radius}
            fill="none"
            stroke="#16a34a"
            strokeWidth="4"
            strokeDasharray={`${completedLength} ${circumference}`}
            strokeDashoffset="0"
            strokeLinecap="round"
            variants={progressVariants}
            custom={{ offset: 0, delay: 0.2 }}
          />

          {/* In Progress */}
          <motion.circle
            cx="18"
            cy="18"
            r={radius}
            fill="none"
            stroke="#4ade80"
            strokeWidth="4"
            strokeDasharray={`${progressLength} ${circumference}`}
            strokeDashoffset={-completedLength}
            strokeLinecap="round"
            variants={progressVariants}
            custom={{ offset: -completedLength, delay: 0.4 }}
          />

          {/* Pending */}
          <motion.circle
            cx="18"
            cy="18"
            r={radius}
            fill="none"
            stroke="#d1d5db"
            strokeWidth="4"
            strokeDasharray={`${pendingLength} ${circumference}`}
            strokeDashoffset={-(completedLength + progressLength)}
            strokeLinecap="round"
            variants={progressVariants}
            custom={{ offset: -(completedLength + progressLength), delay: 0.6 }}
          />
        </svg>

        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <motion.span
            className="text-2xl font-bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 1 }}
          >
            {completed}%
          </motion.span>
          <motion.span
            className="text-xs text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 1.2 }}
          >
            Completed
          </motion.span>
        </motion.div>
      </motion.div>

      <motion.div
        className="flex gap-4 mt-4 text-xs text-gray-500"
        variants={legendVariants}
      >
        <motion.div
          className="flex items-center gap-1"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.2 }}
        >
          <motion.span
            className="w-2 h-2 rounded-full bg-green-600"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, delay: 1.4 }}
          />
          Completed
        </motion.div>
        <motion.div
          className="flex items-center gap-1"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.2 }}
        >
          <motion.span
            className="w-2 h-2 rounded-full bg-green-400"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, delay: 1.5 }}
          />
          In Progress
        </motion.div>
        <motion.div
          className="flex items-center gap-1"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.2 }}
        >
          <motion.span
            className="w-2 h-2 rounded-full bg-gray-300"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, delay: 1.6 }}
          />
          Pending
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
