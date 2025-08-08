import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Law Brothers — California Car Accident Lawyers — Not at Fault? Free Case Evaluation",
  description:
    "Not at fault in a CA car crash? The Law Brothers fight insurance companies for maximum recovery. Free evaluation. No fees unless we win. 24/7 availability.",
  openGraph: {
    title: "The Law Brothers — California Car Accident Lawyers",
    description:
      "Not at fault in a CA car crash? Free evaluation. No fees unless we win. 24/7 availability.",
    type: "website",
  },
};

export default function Page() {
  return (
    <main className="bg-white text-black">
      {/* Hero */}
      <section className="relative isolate min-h-[80vh] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1603600990248-3b0724285579?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MjY5NzB8MHwxfHNlYXJjaHw0fHxjYXIlMjBhY2NpZGVudCUyMGF0dG9ybmV5JTIwQ2FsaWZvcm5pYXxlbnwwfDB8fHwxNzU0NjA0NTM2fDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="grayscale photo of cars on road"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 sm:py-32">
          <div className="max-w-3xl">
            <p className="mb-3 inline-block rounded-full border border-white/30 bg-black/30 px-3 py-1 text-xs font-medium tracking-wide text-white">
              Se habla español
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              California Car Accident Lawyers
              <span className="block text-gray-200">No Fees Unless We Win!</span>
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-gray-100">
              Not at fault in a car, truck, or motorcycle crash? Get a free, no‑obligation case evaluation. We’re available 24/7 and we’ll come to you anywhere in California.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#free-eval"
                className="rounded-md bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white/60"
                aria-label="Get Free Case Evaluation"
              >
                Get Free Case Evaluation
              </a>
              <a
                href="tel:+18005551234"
                className="rounded-md border border-white/40 bg-transparent px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/60"
                aria-label="Call Now"
              >
                Call Now (24/7)
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              <span className="rounded-md border border-white/30 bg-black/30 px-3 py-1 text-xs font-medium text-white">Free Consultation</span>
              <span className="rounded-md border border-white/30 bg-black/30 px-3 py-1 text-xs font-medium text-white">No Fee Unless We Win</span>
              <span className="rounded-md border border-white/30 bg-black/30 px-3 py-1 text-xs font-medium text-white">We’ll Come To You</span>
              <span className="rounded-md border border-white/30 bg-black/30 px-3 py-1 text-xs font-medium text-white">California Focus</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight">Why Choose The Law Brothers</h2>
          <p className="mt-4 text-gray-700">
            We help not‑at‑fault accident victims across California stand up to insurance companies and pursue maximum recovery — with no upfront costs.
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "CA Accident Specialists",
              body:
                "Deep California focus across major cities. We know the fault-based system, comparative negligence, and local courts.",
            },
            {
              title: "No Fee Unless We Win",
              body:
                "Contingency representation. Your evaluation is free; pay nothing upfront.",
            },
            {
              title: "24/7 + We’ll Come To You",
              body:
                "We meet at your home, hospital, or virtually. When you need us, we’re there.",
            },
            {
              title: "Insurance Handling",
              body:
                "We deal with adjusters, build the evidence, and protect your claim from day one.",
            },
            {
              title: "Experts + Medical Network",
              body:
                "Access to accident reconstruction experts and a broad provider network to accelerate care.",
            },
            {
              title: "Transparent Process",
              body:
                "Clear communication, status updates, and straightforward accounting.",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-lg border border-gray-200 p-6 shadow-sm">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-gray-700">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Practice Areas */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight">What We Do</h2>
            <p className="mt-4 text-gray-700">Car, motorcycle, and truck accident representation for not‑at‑fault victims in California.</p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Car Accidents",
                img: "https://images.unsplash.com/photo-1558721860-a9a4db1fd4db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MjY5NzB8MHwxfHNlYXJjaHwzfHxjYXIlMjBhY2NpZGVudCUyMGxhd3llciUyMENhbGlmb3JuaWF8ZW58MHwwfHx8MTc1NDYwNDUzNXww&ixlib=rb-4.1.0&q=80&w=1080",
                alt: "gray vehicle",
              },
              {
                title: "Motorcycle Accidents",
                img: "https://images.unsplash.com/photo-1502877338535-766e1452684a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MjY5NzB8MHwxfHNlYXJjaHwxfHxtb3RvcmN5Y2xlJTIwcm9hZHxlbnwwfDB8fHwxNzUyNjgyNDA5&ixlib=rb-4.1.0&q=80&w=1080",
                alt: "motorcycle on highway",
              },
              {
                title: "Truck Accidents",
                img: "https://images.unsplash.com/photo-1611360022966-018bd7eba328?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MjY5NzB8MHwxfHNlYXJjaHwzfHxjYXIlMjBhY2NpZGVudCUyMGxhd3llciUyMENhbGlmb3JuaWF8ZW58MHwwfHx8MTc1NDYwNDUzNXww&ixlib=rb-4.1.0&q=85&w=1080",
                alt: "black suv on road during daytime",
              },
            ].map((item) => (
              <div key={item.title} className="group relative isolate overflow-hidden rounded-lg border border-gray-200 shadow-sm">
                <div className="relative h-56 w-full">
                  <Image
                    src={item.img}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(min-width: 768px) 33vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-black/50" />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm text-gray-700">
                    Free evaluation. We handle evidence, insurers, and litigation when needed.
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a href="#free-eval" className="inline-block rounded-md bg-black px-5 py-3 text-sm font-semibold text-white hover:bg-black/90 focus:outline-none focus:ring-2 focus:ring-black/20">
              Start Your Free Case Review
            </a>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight">Meet The Law Brothers</h2>
          <p className="mt-4 text-gray-700">
            Founded by brothers Shawn Lalezary and Shervin Lalezary, our team brings 15+ years of California accident experience backed by nationwide resources.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {[
            {
              name: "Shawn Lalezary",
              role: "Founding Attorney",
              copy:
                "Shawn focuses on motor vehicle litigation and complex negotiations with insurers. He emphasizes clear communication and client accessibility.",
            },
            {
              name: "Shervin Lalezary",
              role: "Founding Attorney",
              copy:
                "Shervin leads trial strategy and case development, ensuring every claim is trial‑ready with strong evidence and expert support.",
            },
          ].map((p) => (
            <div key={p.name} className="rounded-lg border border-gray-200 p-6 shadow-sm">
              <h3 className="text-lg font-semibold">{p.name}</h3>
              <p className="text-sm text-gray-600">{p.role}</p>
              <p className="mt-3 text-gray-700">{p.copy}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight">How It Works</h2>
            <p className="mt-4 text-gray-700">
              A simple, transparent process tailored for California accident claims.
            </p>
          </div>
          <ol className="mt-10 grid gap-6 md:grid-cols-4">
            {[
              {
                step: "1",
                title: "Free Evaluation",
                text:
                  "Tell us what happened. We assess your claim and outline next steps—no obligation.",
              },
              {
                step: "2",
                title: "We Investigate",
                text:
                  "We gather evidence, work with experts, and protect your rights from day one.",
              },
              {
                step: "3",
                title: "We Handle Insurers",
                text:
                  "We manage adjusters and negotiations so you can focus on recovery.",
              },
              {
                step: "4",
                title: "No Fee Unless We Win",
                text:
                  "If there’s no recovery, you owe no attorney’s fees. Simple.",
              },
            ].map((s) => (
              <li key={s.title} className="rounded-lg border border-gray-200 p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-black text-sm font-bold text-white">
                    {s.step}
                  </span>
                  <h3 className="text-lg font-semibold">{s.title}</h3>
                </div>
                <p className="mt-3 text-gray-700">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* What to Expect / CA Context */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">What to Expect</h2>
            <p className="mt-4 text-gray-700">
              California follows a fault‑based system with comparative negligence. Evidence preservation matters—photos, witness info, vehicle data, and timely medical care can impact your recovery.
            </p>
            <ul className="mt-6 list-disc space-y-2 pl-5 text-gray-700">
              <li>Typical timeline varies by injuries, liability disputes, and insurer responsiveness.</li>
              <li>Most cases settle; trial remains an option if insurers are unreasonable.</li>
              <li>Statute of limitations is generally two years from the date of injury in CA, but exceptions apply—consult us to confirm deadlines.</li>
            </ul>
            <p className="mt-4 text-sm text-gray-600">This information is educational only, not legal advice.</p>
          </div>

          {/* Secondary image with overlay */}
          <div className="relative isolate overflow-hidden rounded-lg border border-gray-200">
            <div className="relative h-72 w-full">
              <Image
                src="https://images.unsplash.com/photo-1579620268136-6ef7eccc8b43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MjY5NzB8MHwxfHNlYXJjaHwzfHxjYXIlMjBhY2NpZGVudCUyMGxhd3llciUyMENhbGlmb3JuaWF8ZW58MHwwfHx8MTc1NDYwNDUzNXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="shattered car window close-up"
                fill
                className="object-cover"
                sizes="50vw"
              />
              <div className="absolute inset-0 bg-black/40" />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold">Preserve Evidence Early</h3>
              <p className="mt-2 text-gray-700">
                We help secure photos, surveillance, vehicle data, and medical documentation to strengthen your claim.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight">Serving Clients Across California</h2>
            <p className="mt-4 text-gray-700">
              Local support with statewide reach.
            </p>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {[
              { name: "Los Angeles", href: "/locations/los-angeles-car-accident-lawyer" },
              { name: "Orange County", href: "/locations/orange-county-car-accident-lawyer" },
              { name: "San Bernardino", href: "/locations/san-bernardino-car-accident-lawyer" },
              { name: "Riverside", href: "/locations/riverside-car-accident-lawyer" },
              { name: "San Diego", href: "/locations/san-diego-car-accident-lawyer" },
              { name: "Sacramento", href: "/locations/sacramento-car-accident-lawyer" },
              { name: "San Francisco", href: "/locations/san-francisco-car-accident-lawyer" },
              { name: "More CA Cities", href: "/locations" },
            ].map((c) => (
              <Link
                key={c.name}
                href={c.href}
                className="rounded-md border border-gray-200 bg-white px-4 py-3 text-center text-sm font-medium text-black hover:bg-gray-50"
              >
                {c.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight">What Clients Say</h2>
          <p className="mt-4 text-gray-700">Real feedback from California accident victims we’ve helped.</p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            {
              quote:
                "They took over everything with the insurance company so I could focus on my recovery. Clear updates, no surprises.",
              name: "A.M., Los Angeles",
            },
            {
              quote:
                "Responsive and professional. The team explained each step and made sure I got the care I needed.",
              name: "J.R., San Diego",
            },
            {
              quote:
                "No upfront fees and they came to me at the hospital. I felt supported the whole time.",
              name: "L.K., Riverside",
            },
          ].map((t, i) => (
            <figure key={i} className="rounded-lg border border-gray-200 p-6 shadow-sm">
              <blockquote className="text-gray-900">“{t.quote}”</blockquote>
              <figcaption className="mt-3 text-sm text-gray-600">— {t.name}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight">FAQ — California Accidents</h2>
          </div>
          <div className="mx-auto mt-8 max-w-3xl divide-y divide-gray-200 rounded-lg border border-gray-200 bg-white">
            {[
              {
                q: "Do I pay anything if you don’t win?",
                a: "No. Our contingency fee applies only if we recover for you. Your evaluation is free.",
              },
              {
                q: "Is California a no‑fault state?",
                a: "No. California is fault‑based with comparative negligence, which can reduce recovery by your percentage of fault.",
              },
              {
                q: "How long do I have to file?",
                a: "Generally two years from the date of injury in CA, with exceptions. Contact us promptly to protect your rights.",
              },
              {
                q: "Will my case settle or go to trial?",
                a: "Many cases settle, but we prepare every case for trial to maximize leverage and results.",
              },
              {
                q: "Do you offer Spanish‑language help?",
                a: "Yes. Se habla español. Let us know your preferred language.",
              },
              {
                q: "What’s the contingency fee?",
                a: "Contingency percentages vary by case and stage. We’ll explain all terms in a written fee agreement before you sign.",
              },
            ].map((item) => (
              <details key={item.q} className="group p-5 open:bg-gray-50">
                <summary className="cursor-pointer list-none text-base font-semibold">
                  {item.q}
                </summary>
                <p className="mt-2 text-gray-700">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / Lead Capture */}
      <section id="free-eval" className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Free Case Evaluation</h2>
            <p className="mt-4 text-gray-700">
              Not at fault? Tell us about your accident. We’ll review your case and explain your options—free and with no obligation.
            </p>
            <ul className="mt-6 list-disc space-y-2 pl-5 text-gray-700">
              <li>Available 24/7 — we’ll come to you anywhere in California</li>
              <li>No upfront fees — you pay nothing unless we win</li>
              <li>We handle insurers while you focus on getting better</li>
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="tel:+18005551234" className="rounded-md border border-black bg-white px-5 py-3 text-sm font-semibold text-black hover:bg-gray-50">
                Call Now (24/7)
              </a>
              <a href="mailto:intake@example.com" className="rounded-md bg-black px-5 py-3 text-sm font-semibold text-white hover:bg-black/90">
                Email Intake
              </a>
            </div>
            <p className="mt-4 text-xs text-gray-600">
              By contacting us, you agree we may reach out about your case. This site is attorney advertising. Past results do not guarantee a similar outcome.
            </p>
          </div>

          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <form action="/api/lead" method="post" className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium">
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none focus:border-black"
                    placeholder="Jane Doe"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium">
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none focus:border-black"
                    placeholder="(555) 555‑1234"
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none focus:border-black"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="city" className="block text-sm font-medium">
                    City (CA)
                  </label>
                  <input
                    id="city"
                    name="city"
                    type="text"
                    className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none focus:border-black"
                    placeholder="Los Angeles"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="details" className="block text-sm font-medium">
                  Brief Details
                </label>
                <textarea
                  id="details"
                  name="details"
                  rows={4}
                  required
                  className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none focus:border-black"
                  placeholder="Date, location, how the crash happened, injuries, and insurance info."
                />
              </div>

              <div className="flex items-start gap-2">
                <input id="consent" name="consent" type="checkbox" required className="mt-1" />
                <label htmlFor="consent" className="text-xs text-gray-700">
                  I agree to be contacted about my case. I understand this is not legal advice and no attorney‑client relationship is formed unless and until we both sign a written agreement.
                </label>
              </div>

              <button
                type="submit"
                className="w-full rounded-md bg-black px-5 py-3 text-sm font-semibold text-white hover:bg-black/90"
                aria-label="Submit Free Case Review"
              >
                Get My Free Case Review
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Secondary visual row */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="grid gap-6 sm:grid-cols-3">
          {[
            {
              src: "https://images.unsplash.com/photo-1645216755684-c946ce202427?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3MjY5NzB8MHwxfHNlYXJjaHw2fHxjYXIlMjBhY2NpZGVudCUyMGxhd3llciUyMENhbGlmb3JuaWF8ZW58MHwwfHx8MTc1NDYwNDUzNXww&ixlib=rb-4.1.0&q=85&w=1080",
              alt: "a pile of old cars sitting next to each other",
            },
            {
              src: "https://images.unsplash.com/photo-1558721860-a9a4db1fd4db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MjY5NzB8MHwxfHNlYXJjaHwzfHxjYXIlMjBhY2NpZGVudCUyMGxhd3llciUyMENhbGlmb3JuaWF8ZW58MHwwfHx8MTc1NDYwNDUzNXww&ixlib=rb-4.1.0&q=80&w=1080",
              alt: "gray vehicle",
            },
            {
              src: "https://images.unsplash.com/photo-1611360022966-018bd7eba328?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MjY5NzB8MHwxfHNlYXJjaHwzfHxjYXIlMjBhY2NpZGVudCUyMGxhd3llciUyMENhbGlmb3JuaWF8ZW58MHwwfHx8MTc1NDYwNDUzNXww&ixlib=rb-4.1.0&q=85&w=1080",
              alt: "black suv on road during daytime",
            },
          ].map((img, i) => (
            <div key={i} className="relative isolate overflow-hidden rounded-lg border border-gray-200">
              <div className="relative h-48 w-full">
                <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="33vw" />
                <div className="absolute inset-0 bg-black/30" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer / Legal */}
      <footer className="bg-black text-gray-200">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <div className="grid gap-6 md:grid-cols-3">
            <div>
              <h3 className="text-sm font-semibold text-white">The Law Brothers</h3>
              <p className="mt-3 text-sm text-gray-300">
                California motor vehicle accident attorneys for not‑at‑fault victims. Free evaluation. No fee unless we win.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white">Contact</h3>
              <ul className="mt-3 space-y-1 text-sm">
                <li>
                  <a href="tel:+18005551234" className="hover:underline">Call 24/7: (800) 555‑1234</a>
                </li>
                <li>
                  <a href="mailto:intake@example.com" className="hover:underline">intake@example.com</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white">Legal</h3>
              <p className="mt-3 text-xs text-gray-300">
                Attorney advertising. Past results do not guarantee a similar outcome. No attorney‑client relationship is formed unless and until a written agreement is signed by both client and attorney. Fee structure is contingency‑based and fully described in the written fee agreement.
              </p>
            </div>
          </div>
          <div className="mt-8 border-t border-white/10 pt-6 text-xs text-gray-400">
            © {new Date().getFullYear()} The Law Brothers. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}