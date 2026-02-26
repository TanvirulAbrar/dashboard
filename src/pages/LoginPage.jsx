import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt:', { email, password, rememberMe });
  };

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen flex flex-col">
      <div className="layout-container flex h-full grow flex-col">
        {/* Header */}
        <header className="flex items-center justify-between whitespace-nowrap border-b border-slate-200 dark:border-slate-800 px-6 py-4 md:px-10">
          <div className="flex items-center gap-3">
            <div className="size-8 bg-primary rounded-lg flex items-center justify-center text-black">
              <span className="material-symbols-outlined font-bold">check_circle</span>
            </div>
            <h2 className="text-slate-900 dark:text-white text-xl font-black leading-tight tracking-tight">Donezo</h2>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden md:inline text-sm text-slate-500 dark:text-slate-400">Don't have an account?</span>
            <Link to="/signup" className="text-sm font-bold text-slate-900 dark:text-white hover:underline">Sign up</Link>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 flex items-center justify-center p-6">
          <div className="w-full max-w-[440px] flex flex-col gap-8">
            {/* Welcome Text */}
            <div className="flex flex-col gap-2 text-center md:text-left">
              <h1 className="text-slate-900 dark:text-white text-4xl font-black leading-tight tracking-tight">Welcome Back</h1>
              <p className="text-slate-500 dark:text-slate-400 text-base">Efficiency is just one click away.</p>
            </div>

            {/* Card */}
            <div className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-xl p-8 shadow-sm">
              <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                {/* Email Field */}
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Email Address</label>
                  <input 
                    className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white h-12 px-4 focus:ring-primary focus:border-primary transition-all" 
                    placeholder="name@company.com" 
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                {/* Password Field */}
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-center">
                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Password</label>
                    <a className="text-xs font-bold text-primary hover:brightness-110" href="#">Forgot password?</a>
                  </div>
                  <div className="relative">
                    <input 
                      className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white h-12 px-4 pr-12 focus:ring-primary focus:border-primary transition-all" 
                      placeholder="••••••••" 
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <button 
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500" 
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      <span className="material-symbols-outlined text-xl">
                        {showPassword ? 'visibility_off' : 'visibility'}
                      </span>
                    </button>
                  </div>
                </div>

                {/* Remember Me */}
                <div className="flex items-center gap-3 py-1">
                  <input 
                    className="form-checkbox h-5 w-5 rounded border-slate-300 dark:border-slate-700 bg-transparent text-primary focus:ring-0 focus:ring-offset-0 transition-all cursor-pointer" 
                    id="remember" 
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                  />
                  <label className="text-sm text-slate-600 dark:text-slate-400 cursor-pointer" htmlFor="remember">Stay logged in for 30 days</label>
                </div>

                {/* Sign In Button */}
                <button 
                  className="w-full bg-primary hover:brightness-110 text-black font-black text-base py-4 rounded-lg shadow-[0_4px_20px_rgba(102,255,51,0.3)] transition-all" 
                  type="submit"
                >
                  Sign In
                </button>
              </form>

              {/* Divider */}
              <div className="relative my-8">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-slate-200 dark:border-slate-800"></div>
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-white dark:bg-background-dark px-2 text-slate-500">Or continue with</span>
                </div>
              </div>

              {/* Social Logins */}
              <div className="grid grid-cols-2 gap-4">
                <button className="flex items-center justify-center gap-2 h-12 rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">
                  <img alt="" className="w-4 h-4" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFSfDnM-Yrht7r1bXf_bxjeHVcmHsCrpb4NoFLohUF_Ei8ZDVtprwa1xKHVmv-pCG2yGnutd75AB8ivApnjwzwBKrZfBPmqTBWvCIAc-FvISCT_jvtC4HMIn-aI7jmSMN2smELD6HU5FgnHaEkJW7L0UG2Ym8F4d8zMhjoycCwrtab2lfrNq_hacHty6uxXfeQnD7qlm8vCOKbPwyduVX3TZHIaFjrX0I52_xhNt2zPkb7tdF2rAy5BeKxe9Ua00Sq57l2pL83X8k"/>
                  <span className="text-sm font-bold">Google</span>
                </button>
                <button className="flex items-center justify-center gap-2 h-12 rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                  </svg>
                  <span className="text-sm font-bold">GitHub</span>
                </button>
              </div>
            </div>

            {/* Footer Links */}
            <div className="flex justify-center gap-6 text-xs text-slate-500 font-medium">
              <a className="hover:text-primary transition-colors" href="#">Privacy Policy</a>
              <a className="hover:text-primary transition-colors" href="#">Terms of Service</a>
              <a className="hover:text-primary transition-colors" href="#">Help Center</a>
            </div>
          </div>
        </main>

        {/* Decorative Element */}
        <div className="fixed bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary/10 via-primary to-primary/10"></div>
      </div>
    </div>
  );
}
