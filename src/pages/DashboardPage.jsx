import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function DashboardPage() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4 font-inter">
     
      <div className="bg-white w-full max-w-7xl lg:rounded-[2.5rem] shadow-2xl flex flex-col lg:flex-row overflow-hidden min-h-screen lg:min-h-[90vh]">
      
        <aside className="hidden lg:flex w-64 border-r border-gray-100 p-8 flex-col">
          {/* Logo */}
          <div className="flex items-center gap-2 mb-12">
            <div className="w-8 h-8 bg-donezo-green-dark rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
              </svg>
            </div>
            <span className="text-xl font-bold text-gray-800">Donezo</span>
          </div>

          {/* Navigation Menu */}
          <nav className="flex-1">
            <div className="mb-8">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">Menu</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-3 p-2 bg-gray-50 text-donezo-green font-semibold rounded-xl border-l-4 border-donezo-green">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                  </svg>
                  Dashboard
                </li>
                <li className="flex items-center justify-between p-2 text-gray-500 hover:bg-gray-50 rounded-xl cursor-pointer">
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                    </svg>
                    Tasks
                  </div>
                  <span className="text-[10px] bg-donezo-green-dark text-white px-1.5 py-0.5 rounded-md">12+</span>
                </li>
                <li className="flex items-center gap-3 p-2 text-gray-500 hover:bg-gray-50 rounded-xl cursor-pointer">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                  </svg>
                  Calendar
                </li>
                <li className="flex items-center gap-3 p-2 text-gray-500 hover:bg-gray-50 rounded-xl cursor-pointer">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                  </svg>
                  Analytics
                </li>
                <li className="flex items-center gap-3 p-2 text-gray-500 hover:bg-gray-50 rounded-xl cursor-pointer">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                  </svg>
                  Team
                </li>
              </ul>
            </div>

            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">General</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-3 p-2 text-gray-500 hover:bg-gray-50 rounded-xl cursor-pointer">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                    <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                  </svg>
                  Settings
                </li>
                <li className="flex items-center gap-3 p-2 text-gray-500 hover:bg-gray-50 rounded-xl cursor-pointer">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                  </svg>
                  Help
                </li>
                <li className="flex items-center gap-3 p-2 text-gray-500 hover:bg-gray-50 rounded-xl cursor-pointer">
                  <Link to="/login" className="flex items-center gap-3">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                    </svg>
                    Logout
                  </Link>
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
              <p className="text-sm font-semibold mb-1 leading-tight">Download our Mobile App</p>
              <p className="text-[10px] text-gray-400 mb-4">Get easy in another way</p>
              <button className="w-full bg-donezo-green-dark py-2 rounded-xl text-xs font-bold hover:bg-opacity-90 transition">Download</button>
            </div>
            {/* Decorative Circle */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-white opacity-10 rounded-full"></div>
          </div>
        </aside>

        
        
        <main className="flex-1 p-4 md:p-8 overflow-y-auto">
          
          <header className="flex items-center justify-between mb-8 flex-wrap">
            <div className="relative w-full lg:w-96 mb-4 lg:mb-0">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
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
                <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L4.5 20.29L5.21 21L12 18L18.79 21L19.5 20.29L12 2Z"></path>
                </svg>
                F
              </span>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-4 text-gray-400">
                <button className="hover:text-gray-600 transition">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                  </svg>
                </button>
                <button className="relative hover:text-gray-600 transition">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                  </svg>
                  <div className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></div>
                </button>
              </div>
              <div className="flex items-center gap-3 pl-6 border-l border-gray-100">
                <div className="text-right">
                  <p className="text-sm font-bold text-gray-800 leading-tight">Totok Michael</p>
                  <p className="text-[10px] text-gray-400">tmichael20@mail.com</p>
                </div>
                <img alt="User Profile" className="w-10 h-10 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC12i09MBm0YrpNLT5fpXBnpqq5XFBOUkCWvinFqfnNEM9ne5fRpUMCLTvf_eSFDPi5HFE7ZOdGw4BTih6rrtBMkrvEiftm2U3AuM5HU7hZ8614yN5SlRpp60PgYRffwwlfcMWYow0UsltcdiY0t9flZ87X8ByKBJP0tNa4ZRfM_wzCoJG56FMTwAXcTu8zHPafdfOEd9TBJ2fBu2w5bfUk0VdOXILdaOWCkDtisN1nu-mGfMuH2tQfK86sSDyeubrJNNHXAy3uChs"/>
              </div>
            </div>
          </header>

          
          <section className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-1">Dashboard</h1>
              <p className="text-sm text-gray-400">Plan, prioritize, and accomplish your tasks with ease.</p>
            </div>
            <div className="flex gap-3">
              <button className="bg-donezo-green-dark text-white px-5 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2 hover:bg-opacity-90 transition">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M12 4v16m8-8H4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                </svg>
                Add Project
              </button>
              <button className="border border-gray-200 text-gray-600 px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-gray-50 transition">
                Import Data
              </button>
            </div>
          </section>

         
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {/* Total Projects Card */}
            <div className="bg-donezo-green-dark p-6 rounded-3xl text-white relative">
              <div className="flex justify-between items-start mb-4">
                <p className="text-sm opacity-80">Total Projects</p>
                <div className="bg-white/20 p-1.5 rounded-full">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M7 11l5-5m0 0l5 5m-5-5v12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                  </svg>
                </div>
              </div>
              <h2 className="text-4xl font-bold mb-4">24</h2>
              <div className="flex items-center gap-1.5 text-[10px] bg-white/10 w-max px-2 py-1 rounded-full">
                <span className="bg-donezo-green-light text-donezo-green-dark px-1 rounded">2.5</span>
                <span className="opacity-70">increased from last month</span>
              </div>
            </div>

           
            <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm relative">
              <div className="flex justify-between items-start mb-4">
                <p className="text-sm text-gray-500">Ended Projects</p>
                <div className="border border-gray-200 p-1.5 rounded-full text-gray-400">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M7 11l5-5m0 0l5 5m-5-5v12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                  </svg>
                </div>
              </div>
              <h2 className="text-4xl font-bold text-gray-800 mb-4">10</h2>
              <div className="flex items-center gap-1.5 text-[10px] bg-gray-50 text-gray-400 w-max px-2 py-1 rounded-full border border-gray-100">
                <span className="bg-gray-200 text-gray-600 px-1 rounded">12</span>
                <span>increased from last month</span>
              </div>
            </div>

            
            <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm relative">
              <div className="flex justify-between items-start mb-4">
                <p className="text-sm text-gray-500">Running Projects</p>
                <div className="border border-gray-200 p-1.5 rounded-full text-gray-400">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M7 11l5-5m0 0l5 5m-5-5v12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                  </svg>
                </div>
              </div>
              <h2 className="text-4xl font-bold text-gray-800 mb-4">12</h2>
              <div className="flex items-center gap-1.5 text-[10px] bg-gray-50 text-gray-400 w-max px-2 py-1 rounded-full border border-gray-100">
                <span className="bg-gray-200 text-gray-600 px-1 rounded">2.1</span>
                <span>increased from last month</span>
              </div>
            </div>

           
            <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm relative">
              <div className="flex justify-between items-start mb-4">
                <p className="text-sm text-gray-500">Pending Project</p>
                <div className="border border-gray-200 p-1.5 rounded-full text-gray-400">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M7 11l5-5m0 0l5 5m-5-5v12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                  </svg>
                </div>
              </div>
              <h2 className="text-4xl font-bold text-gray-800 mb-4">2</h2>
              <p className="text-[10px] text-gray-400 font-medium">On Discuss</p>
            </div>
          </section>

         
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
           
            <div className="col-span-4 bg-white p-6 rounded-3xl border border-gray-100 lg:col-span-4">
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
                  <div className="absolute -top-6 bg-donezo-green-light/40 text-[8px] font-bold px-1 rounded">74%</div>
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
            </div>

           
            <div className="col-span-4 bg-white p-6 rounded-3xl border border-gray-100 flex flex-col justify-between lg:col-span-4">
              <h3 className="font-bold text-gray-800 mb-4">Reminders</h3>
              <div>
                <p className="text-xl font-bold text-donezo-green-dark mb-1 leading-tight">Meeting with Arc Company</p>
                <p className="text-xs text-gray-400">Time : 02.00 pm - 04.00 pm</p>
              </div>
              <button className="w-full bg-donezo-green-dark text-white py-3 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 mt-4">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
                </svg>
                Start Meeting
              </button>
            </div>

            
            <div className="col-span-4 bg-white p-6 rounded-3xl border border-gray-100 lg:col-span-4">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-bold text-gray-800">Project</h3>
                <button className="text-xs border border-gray-200 px-3 py-1 rounded-full text-gray-500 hover:bg-gray-50">+ New</button>
              </div>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-50 text-blue-600 rounded flex items-center justify-center">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-800">Develop API Endpoints</p>
                    <p className="text-[9px] text-gray-400">Due date: Nov 25, 2024</p>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-teal-50 text-teal-600 rounded flex items-center justify-center">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-800">Onboarding Flow</p>
                    <p className="text-[9px] text-gray-400">Due date: Nov 28, 2024</p>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-orange-50 text-orange-600 rounded flex items-center justify-center">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                      <path d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-800">Build Dashboard</p>
                    <p className="text-[9px] text-gray-400">Due date: Nov 30, 2024</p>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-yellow-50 text-yellow-600 rounded flex items-center justify-center">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-800">Optimize Page Load</p>
                    <p className="text-[9px] text-gray-400">Due date: Dec 5, 2024</p>
                  </div>
                </li>
              </ul>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
