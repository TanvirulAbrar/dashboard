import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaCheckCircle, FaEye, FaEyeSlash } from "react-icons/fa";
import { useAuth } from "../hooks/useAuth";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await login(email, password);

      toast.success("Login successful! Welcome back!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

      setTimeout(() => {
        navigate("/dashboard");
      }, 500);
    } catch (error) {
      setError("Invalid email or password. Please try again.");
      toast.error("Login failed! Please check your credentials.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } finally {
      setLoading(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
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

  const formVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 z-0">
        <img
          alt="Abstract green wavy lines background"
          className="w-full h-full object-cover"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBl6aGOtaNpfkQ1LSVw2HxLkjRKUiNK78SnM2hK6oC6PGzXCRc-xJY8lwv8mtNZymLo9CDVN3aVKfGhb725IquaEyIC97lIQdV1nOwuFs4XsEDcWACTP-ZIQtog1lv5UzAVQ_hRvWZDyxHfWTQxu6bNzvlKJdfIrq1Lvc3IcQNMeY9si5eAALwGitg2NS9V2ciMH8o_ZqGaANzqYWX1P26rH8J-mMhj11R1-hgG6zrINU2_nCJ0TfoHXHq1fAM0d7iEvo41PKTpMZE"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 min-h-screen flex items-center justify-center p-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="w-full max-w-md">
          {/* Logo and Title */}
          <motion.div className="text-center mb-8" variants={itemVariants}>
            <motion.div
              className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-lime-500 mb-4 shadow-lg shadow-lime-500/20"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaCheckCircle className="text-white text-3xl" />
            </motion.div>
            <motion.h1
              className="text-3xl font-bold text-white tracking-tight mb-2"
              variants={itemVariants}
            >
              Donezo
            </motion.h1>
            <motion.p className="text-emerald-100/70" variants={itemVariants}>
              Streamline your productivity today
            </motion.p>
          </motion.div>

          {/* Glass Card */}
          <motion.div
            className="glass-card rounded-3xl p-8 shadow-2xl"
            variants={formVariants}
          >
            <motion.h2
              className="text-xl font-semibold text-white mb-6"
              variants={itemVariants}
            >
              Sign In
            </motion.h2>

            {/* Error Message */}
            {error && (
              <motion.div
                className="mb-4 p-3 bg-red-500/20 border border-red-500/30 rounded-lg"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                <p className="text-red-200 text-sm">{error}</p>
              </motion.div>
            )}

            <motion.form
              className="space-y-5"
              onSubmit={handleSubmit}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Email Field */}
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-medium text-emerald-100/80 mb-1.5 ml-1">
                  Email Address
                </label>
                <motion.input
                  className="w-full bg-white/10 border-white/10 text-white placeholder-emerald-100/30 rounded-xl px-4 py-3 focus:ring-2 focus:ring-lime-500 focus:border-transparent transition-all outline-none"
                  placeholder="name@company.com"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={loading}
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.div>

              {/* Password Field */}
              <motion.div variants={itemVariants}>
                <div className="flex justify-between mb-1.5 ml-1">
                  <label className="block text-sm font-medium text-emerald-100/80">
                    Password
                  </label>
                  <a
                    className="text-xs font-medium text-lime-500 hover:text-lime-400"
                    href="#"
                  >
                    Forgot password?
                  </a>
                </div>
                <div className="relative">
                  <motion.input
                    className="w-full bg-white/10 border-white/10 text-white placeholder-emerald-100/30 rounded-xl px-4 py-3 pr-12 focus:ring-2 focus:ring-lime-500 focus:border-transparent transition-all outline-none"
                    placeholder="••••••••"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    disabled={loading}
                    whileFocus={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  />
                  <motion.button
                    type="button"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-emerald-100/50 hover:text-emerald-100/70"
                    onClick={() => setShowPassword(!showPassword)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </motion.button>
                </div>
              </motion.div>

              {/* Remember Me */}
              <motion.div
                className="flex items-center ml-1"
                variants={itemVariants}
              >
                <input
                  className="h-4 w-4 text-lime-500 focus:ring-lime-500 border-white/20 bg-white/10 rounded"
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <label
                  className="ml-2 block text-sm text-emerald-100/70"
                  htmlFor="remember-me"
                >
                  Remember me for 30 days
                </label>
              </motion.div>

              {/* Submit Button */}
              <motion.button
                className="w-full bg-lime-500 hover:bg-lime-600 text-white font-bold py-3.5 px-4 rounded-xl shadow-lg shadow-lime-500/20 transition-all active:scale-[0.98] mt-2"
                type="submit"
                disabled={loading}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {loading ? "Signing in..." : "Sign In"}
              </motion.button>
            </motion.form>

            <motion.div className="relative my-8" variants={itemVariants}>
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/10"></div>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-transparent px-2 text-emerald-100/40 font-medium">
                  Or continue with
                </span>
              </div>
            </motion.div>

            {/* Social Buttons */}
            <motion.div
              className="grid grid-cols-2 gap-4"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.button
                className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white py-2.5 rounded-xl transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="currentColor"
                  ></path>
                </svg>
                <span className="text-sm font-medium">Google</span>
              </motion.button>

              <motion.button
                className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white py-2.5 rounded-xl transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z"></path>
                </svg>
                <span className="text-sm font-medium">GitHub</span>
              </motion.button>
            </motion.div>

            {/* Sign Up Link */}
            <motion.p
              className="text-center mt-8 text-sm text-emerald-100/50"
              variants={itemVariants}
            >
              Don't have an account?
              <Link
                to="/signup"
                className="text-lime-500 font-semibold hover:underline ml-1"
              >
                Sign up for free
              </Link>
            </motion.p>
          </motion.div>

          {/*  Links */}
          <motion.div
            className="mt-8 flex justify-center gap-6 text-xs text-emerald-100/30 font-medium"
            variants={itemVariants}
          >
            <a className="hover:text-emerald-100/60 transition-colors" href="#">
              Privacy Policy
            </a>
            <a className="hover:text-emerald-100/60 transition-colors" href="#">
              Terms of Service
            </a>
            <a className="hover:text-emerald-100/60 transition-colors" href="#">
              Contact Support
            </a>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default LoginPage;
