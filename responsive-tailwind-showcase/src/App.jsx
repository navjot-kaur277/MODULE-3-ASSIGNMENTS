export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      {/* 8. Navigation Bar */}
      <nav className="sticky top-0 z-50 border-b border-slate-100 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-4 md:flex-row">
          <span className="text-2xl font-black tracking-tighter text-indigo-600">
            STUDIO.
          </span>
          <div className="flex gap-8 font-medium text-slate-600">
            <a
              href="#features"
              className="hover:text-indigo-600 transition-colors"
            >
              Features
            </a>
            <a
              href="#table"
              className="hover:text-indigo-600 transition-colors"
            >
              Data
            </a>
            <a
              href="#contact"
              className="hover:text-indigo-600 transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      <main className="mx-auto max-w-7xl px-6">
        {/* 10. Hero Section (Heading + Image) */}
        <section className="flex flex-col items-center gap-16 py-20 lg:flex-row">
          <div className="flex-1 space-y-8">
            {/* 3. Responsive Text with Gradient */}
            <h2 className="bg-gradient-to-r from-indigo-600 to-violet-500 bg-clip-text text-4xl font-black tracking-tight text-transparent sm:text-6xl lg:text-8xl">
              Build the Future.
            </h2>
            <p className="max-w-xl text-lg leading-relaxed text-slate-500">
              Create stunning, high-performance interfaces with our
              utility-first framework.
            </p>
            {/* 1. Button Styling */}
            <button className="rounded-full bg-slate-200 px-10 py-4 font-bold transition-all hover:bg-slate-300 active:bg-slate-400">
              Get Started
            </button>
          </div>
          <div className="flex-1">
            {/* 2. Image with Hover Effect */}
            <div className="group overflow-hidden rounded-3xl shadow-2xl transition-all">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
                alt="Dashboard"
                className="w-full transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </section>

        {/* 9. Responsive Grid Layout (Features) */}
        <section
          id="features"
          className="grid grid-cols-1 gap-8 py-20 sm:grid-cols-2 lg:grid-cols-3"
        >
          {[1, 2, 3].map((item) => (
            /* 5. Card Component */
            <div
              key={item}
              className="group rounded-3xl border border-slate-100 bg-white p-8 shadow-sm transition-all hover:shadow-xl"
            >
              <div className="mb-6 h-12 w-12 rounded-2xl bg-indigo-50" />
              <h3 className="mb-3 text-xl font-bold">Feature Analysis</h3>
              <p className="mb-6 text-slate-500 leading-relaxed">
                Advanced analytics and real-time data processing for your
                application.
              </p>
              {/* 4. List Styling */}
              <ul className="list-inside list-disc space-y-2 text-slate-600">
                <li className="hover:text-blue-600 transition-colors">
                  Dynamic Scaling
                </li>
                <li className="hover:text-blue-600 transition-colors">
                  Auto-Optimization
                </li>
              </ul>
              <button className="mt-8 w-full rounded-xl bg-slate-100 py-3 font-semibold hover:bg-slate-200 active:bg-slate-300">
                Learn More
              </button>
            </div>
          ))}
        </section>

        {/* 6. Table Styling */}
        <section id="table" className="py-20">
          <div className="overflow-hidden rounded-3xl border border-slate-100 shadow-sm">
            <table className="w-full text-left">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-6 py-4 font-bold">Requirement</th>
                  <th className="px-6 py-4 font-bold">Status</th>
                  <th className="px-6 py-4 font-bold">Priority</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="transition-colors hover:bg-indigo-50/50">
                  <td className="px-6 py-4">Responsive Design</td>
                  <td className="px-6 py-4">Completed</td>
                  <td className="px-6 py-4">High</td>
                </tr>
                <tr className="bg-slate-50/30 transition-colors hover:bg-indigo-50/50">
                  <td className="px-6 py-4">Tailwind v4</td>
                  <td className="px-6 py-4">Active</td>
                  <td className="px-6 py-4">High</td>
                </tr>
                <tr className="transition-colors hover:bg-indigo-50/50">
                  <td className="px-6 py-4">Clean Code</td>
                  <td className="px-6 py-4">Ready</td>
                  <td className="px-6 py-4">Critical</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 7. Input Form */}
        <section id="contact" className="mx-auto max-w-xl py-20">
          <form className="space-y-4 rounded-3xl border border-slate-100 bg-white p-10 shadow-2xl">
            <h2 className="mb-8 text-center text-3xl font-black">Join Us</h2>
            <input
              type="text"
              placeholder="Full Name"
              className="w-full rounded-xl border border-slate-200 p-4 transition focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full rounded-xl border border-slate-200 p-4 transition focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full rounded-xl border border-slate-200 p-4 transition focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
            <button className="w-full rounded-xl bg-indigo-600 py-4 font-bold text-white transition hover:bg-indigo-700 active:scale-[0.98]">
              Send Message
            </button>
          </form>
        </section>
      </main>
    </div>
  );
}
