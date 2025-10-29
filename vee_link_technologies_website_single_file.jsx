// Vee Link Technologies - Single-file React component
// Usage:
// 1) Paste this file into a React project (create-react-app / Vite). Tailwind CSS should be configured.
// 2) Replace the banner image path with a public URL or import a local image.
//    Current placeholder path: '/mnt/data/WhatsApp Image 2025-08-25 at 4.46.44 PM.jpeg'
// 3) Exported component is the default. Drop it into App.jsx to preview.

import React from 'react';

export default function VeeLinkWebsite() {
  // Replace this with your image URL or import statement
  const bannerImage = "/mnt/data/WhatsApp Image 2025-08-25 at 4.46.44 PM.jpeg";

  const courses = [
    {
      title: 'Full Stack Development',
      items: ['HTML', 'CSS', 'JavaScript', 'React', 'Java', 'Spring Boot', 'Hibernate', 'SQL', 'Python', 'Django', 'Flask']
    },
    {
      title: 'Software Testing',
      items: ['Manual Testing', 'Automation Testing', 'JavaScript', 'TypeScript', 'Java', 'Python', 'Selenium', 'Cypress', 'Playwright']
    },
    {
      title: 'Data Analytics & Data Science',
      items: ['Data Analytics', 'Machine Learning', 'Data Science']
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Header / Hero */}
      <header className="relative">
        <div
          className="h-72 md:h-96 bg-cover bg-center flex items-center"
          style={{
            backgroundImage: `linear-gradient(rgba(7,16,58,0.6), rgba(7,16,58,0.6)), url('${bannerImage}')`
          }}
        >
          <div className="container mx-auto px-6 md:px-12 text-white">
            <div className="max-w-3xl">
              <h1 className="text-3xl md:text-5xl font-extrabold">Vee Link Technologies</h1>
              <p className="mt-4 text-lg md:text-xl">Software Training and Placements for Job Seekers and IT Professionals</p>
              <div className="mt-6 flex gap-3">
                <a href="#contact" className="inline-block bg-amber-400 hover:bg-amber-500 text-slate-900 font-semibold px-5 py-3 rounded-lg shadow">Contact Us Now!</a>
                <a href="#courses" className="inline-block bg-transparent border border-white/40 hover:border-white/60 px-5 py-3 rounded-lg">Our Courses</a>
              </div>
            </div>
          </div>
        </div>
        {/* Nav (simple) */}
        <nav className="absolute top-4 left-0 right-0">
          <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
            <div className="text-white font-bold">Vee Link</div>
            <div className="hidden md:flex gap-6 text-white/90">
              <a href="#courses" className="hover:underline">Courses</a>
              <a href="#about" className="hover:underline">About</a>
              <a href="#contact" className="hover:underline">Contact</a>
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 md:px-12 -mt-12 md:-mt-16">
        <section id="courses" className="bg-white rounded-xl shadow-lg p-6 md:p-10">
          <h2 className="text-2xl font-bold mb-4">Courses We Offer</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {courses.map((c) => (
              <article key={c.title} className="p-4 border rounded-lg">
                <h3 className="font-semibold text-lg mb-2">{c.title}</h3>
                <ul className="text-sm space-y-1">
                  {c.items.map((it) => (
                    <li key={it} className="flex items-start gap-2">
                      <span className="inline-block w-2 h-2 bg-amber-400 rounded-full mt-2"></span>
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="mt-8">
          <div className="bg-slate-800 text-white p-6 rounded-xl shadow-lg md:flex md:items-center md:justify-between">
            <div className="md:w-2/3">
              <h3 className="text-xl font-bold">About Vee Link Technologies</h3>
              <p className="mt-2 text-sm md:text-base">We provide practical, industry-aligned training in Full Stack Development, Software Testing, and Data Analytics with placement assistance for job seekers and IT professionals. Learn tools and technologies used by modern companies and build projects that get you hired.</p>
            </div>
            <div className="mt-4 md:mt-0 md:w-1/3 text-sm">
              <p className="font-semibold">Address:</p>
              <p>2nd Floor, No.10 Bell Nagar, Madhanandhapuram, Porur, Chennai</p>
              <p className="mt-2 font-semibold">Phone:</p>
              <p>7667959354</p>
            </div>
          </div>
        </section>

        <section id="testimonials" className="mt-8 grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow">
            <h4 className="font-semibold">Why choose us?</h4>
            <p className="mt-2 text-sm">Hands-on training, real projects, resume & interview support, and industry-relevant curriculum.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <h4 className="font-semibold">Placement Support</h4>
            <p className="mt-2 text-sm">We help with mock interviews and connect learners to hiring partners.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <h4 className="font-semibold">Flexible timings</h4>
            <p className="mt-2 text-sm">Weekend & weekday batches with online and offline modes.</p>
          </div>
        </section>

        <section id="contact" className="mt-8 bg-white p-6 md:p-10 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Form submitted (demo)'); }}>
              <div>
                <label className="block text-sm font-medium">Name</label>
                <input required className="mt-1 block w-full border rounded px-3 py-2" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm font-medium">Email</label>
                <input required type="email" className="mt-1 block w-full border rounded px-3 py-2" placeholder="you@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium">Message</label>
                <textarea required className="mt-1 block w-full border rounded px-3 py-2" rows={4} placeholder="How can we help?" />
              </div>
              <button type="submit" className="bg-indigo-600 text-white px-5 py-2 rounded">Send Message</button>
            </form>

            <div className="p-4 border rounded">
              <h4 className="font-semibold">Contact Details</h4>
              <p className="mt-2">Phone: <a href="tel:7667959354" className="text-indigo-600">7667959354</a></p>
              <p className="mt-1">Address: 2nd Floor, No.10 Bell Nagar, Madhanandhapuram, Porur, Chennai</p>
              <div className="mt-4">
                <h5 className="font-medium">Follow Us</h5>
                <div className="flex gap-3 mt-2">
                  <a className="text-sm border px-3 py-1 rounded">Facebook</a>
                  <a className="text-sm border px-3 py-1 rounded">Instagram</a>
                  <a className="text-sm border px-3 py-1 rounded">LinkedIn</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="mt-10 text-center text-sm text-slate-600">
          © {new Date().getFullYear()} Vee Link Technologies. All rights reserved.
        </footer>
      </main>
    </div>
  );
}
