'use client';

import Image from 'next/image';
import { useState, type ReactNode } from 'react';
import {
  Car,
  Gavel,
  ShieldCheck,
  Phone,
  CheckCircle2,
  Clock,
  FileText,
  ArrowRight,
  MapPin,
  AlertTriangle,
  Languages,
  Truck,
  Bike,
} from 'lucide-react';

export default function Page() {
  const [consent, setConsent] = useState(false);

  return (
    <main className="font-sans">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-primary-200 bg-primary-50/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-800">
              <Gavel className="h-5 w-5 text-primary-foreground" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl text-primary-900">Law Brothers</span>
              <span className="text-xs text-primary-700">California Motor Vehicle Accident Attorneys</span>
            </div>
          </div>
          <nav className="hidden items-center gap-8 md:flex">
            <a href="#how" className="text-sm text-primary-800 hover:text-primary-900">How it works</a>
            <a href="#cases" className="text-sm text-primary-800 hover:text-primary-900">Cases we handle</a>
            <a href="#faqs" className="text-sm text-primary-800 hover:text-primary-900">FAQs</a>
            <a href="#contact" className="text-sm text-primary-800 hover:text-primary-900">Contact</a>
          </nav>
          <div className="flex items-center gap-3">
            <span className="hidden rounded-full bg-secondary-100 px-2 py-1 text-xs text-secondary-800 md:inline">24/7</span>
            <a
              href="#free-case-review"
              className="inline-flex items-center gap-2 rounded-md bg-accent-600 px-4 py-2 text-sm font-medium text-accent-foreground hover:bg-accent-700"
            >
              Free Case Review
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-primary-900">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1636965735805-61c1dc404065?ixid=M3w3MjY5NzB8MHwxfHNlYXJjaHw3fHxsb3MlMjBhbmdlbGVzJTIwdHJhZmZpY3xlbnwxfDB8fHwxNzU0NjY5NDI2fDA&ixlib=rb-4.1.0"
            alt="Heavy Los Angeles traffic at sunset."
            fill
            priority
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-radial from-primary-900 via-primary-900/90 to-primary-900/60" />
        </div>
        <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-16 md:grid-cols-2 md:px-6 lg:py-24">
          <div className="flex flex-col items-start justify-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-secondary-100 px-3 py-1 text-secondary-800">
              <ShieldCheck className="h-4 w-4" />
              <span className="text-xs">No Fee Unless We Win</span>
            </div>
            <h1 className="font-serif text-4xl leading-tight text-primary-foreground md:text-5xl">
              Injured in a California car accident and not at fault?
            </h1>
            <p className="mt-4 max-w-xl text-primary-100">
              Law Brothers helps accident victims across California pursue motor vehicle accident claims.
              You focus on healing—we handle the insurers and the legal fight.
            </p>
            <ul className="mt-6 grid w-full grid-cols-1 gap-3 text-primary-100 sm:grid-cols-2">
              <li className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-accent-400" />
                Free, confidential consultation
              </li>
              <li className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-accent-400" />
                Statewide representation in California
              </li>
              <li className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-accent-400" />
                We handle the insurance companies
              </li>
              <li className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-accent-400" />
                Medical treatment coordination
              </li>
            </ul>
            <div className="mt-8 flex items-center gap-4">
              <a
                href="#free-case-review"
                className="inline-flex items-center gap-2 rounded-md bg-accent-600 px-5 py-3 text-accent-foreground hover:bg-accent-700"
              >
                Start Your Free Case Review
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-md border border-primary-700 px-5 py-3 text-primary-100 hover:bg-primary-800">
                <Phone className="h-4 w-4" />
                Request a Call
              </a>
            </div>
            <div className="mt-6 inline-flex items-center gap-3 text-sm text-primary-200">
              <Clock className="h-4 w-4" />
              Fast response. We aim to contact you within minutes.
            </div>
          </div>

          {/* Lead Form */}
          <div id="free-case-review" className="relative">
            <div className="rounded-xl border border-primary-700 bg-primary-800/70 p-6 backdrop-blur">
              <h2 className="font-serif text-2xl text-primary-50">Free Case Review</h2>
              <p className="mt-1 text-sm text-primary-200">No obligation. If you don’t win, you don’t pay.</p>

              <form className="mt-6 grid grid-cols-1 gap-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="flex flex-col">
                    <label className="text-sm text-primary-100">Full name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="mt-1 rounded-md border border-primary-600 bg-primary-900 px-3 py-2 text-primary-50 placeholder-primary-300 outline-none focus:border-accent-500"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-sm text-primary-100">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      className="mt-1 rounded-md border border-primary-600 bg-primary-900 px-3 py-2 text-primary-50 placeholder-primary-300 outline-none focus:border-accent-500"
                      placeholder="(555) 555-5555"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="flex flex-col">
                    <label className="text-sm text-primary-100">Incident date</label>
                    <input
                      type="date"
                      name="date"
                      className="mt-1 rounded-md border border-primary-600 bg-primary-900 px-3 py-2 text-primary-50 outline-none focus:border-accent-500"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-sm text-primary-100">ZIP code (CA)</label>
                    <input
                      type="text"
                      name="zip"
                      pattern="[0-9]{5}"
                      className="mt-1 rounded-md border border-primary-600 bg-primary-900 px-3 py-2 text-primary-50 placeholder-primary-300 outline-none focus:border-accent-500"
                      placeholder="90012"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="flex flex-col">
                    <label className="text-sm text-primary-100">Accident type</label>
                    <select
                      name="type"
                      className="mt-1 rounded-md border border-primary-600 bg-primary-900 px-3 py-2 text-primary-50 outline-none focus:border-accent-500"
                    >
                      <option value="car">Car crash</option>
                      <option value="truck">Truck collision</option>
                      <option value="motorcycle">Motorcycle</option>
                      <option value="rideshare">Rideshare (Uber/Lyft)</option>
                      <option value="pedestrian">Pedestrian</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="flex flex-col">
                    <label className="text-sm text-primary-100">Were you at fault?</label>
                    <select
                      name="fault"
                      className="mt-1 rounded-md border border-primary-600 bg-primary-900 px-3 py-2 text-primary-50 outline-none focus:border-accent-500"
                    >
                      <option value="no">No</option>
                      <option value="unsure">Not sure</option>
                      <option value="yes">Yes</option>
                    </select>
                  </div>
                </div>
                <div className="flex flex-col">
                  <label className="text-sm text-primary-100">Briefly describe what happened</label>
                  <textarea
                    name="details"
                    rows={3}
                    className="mt-1 rounded-md border border-primary-600 bg-primary-900 px-3 py-2 text-primary-50 placeholder-primary-300 outline-none focus:border-accent-500"
                    placeholder="Tell us about your accident and injuries..."
                  />
                </div>
                <label className="mt-2 inline-flex items-start gap-2 text-sm text-primary-100">
                  <input
                    type="checkbox"
                    className="mt-1 h-4 w-4 rounded border-primary-600 bg-primary-900 text-accent-600 focus:ring-accent-600"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                  />
                  <span>
                    I agree to be contacted about my case. I understand this is not legal advice and does not form an
                    attorney–client relationship.
                  </span>
                </label>
                <button
                  type="submit"
                  disabled={!consent}
                  className="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-accent-600 px-5 py-3 font-medium text-accent-foreground hover:bg-accent-700 disabled:opacity-60"
                >
                  Get My Free Review
                  <ArrowRight className="h-4 w-4" />
                </button>
                <p className="mt-2 text-xs text-primary-200">
                  By submitting, you consent to receive communications. No fee unless we win.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-b border-primary-200 bg-primary-50">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 py-6 sm:grid-cols-3 md:px-6">
          <div className="flex items-center gap-3">
            <ShieldCheck className="h-5 w-5 text-accent-600" />
            <p className="text-sm text-primary-800">No Fee Unless We Win</p>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="h-5 w-5 text-accent-600" />
            <p className="text-sm text-primary-800">Serving All of California</p>
          </div>
          <div className="flex items-center gap-3">
            <Languages className="h-5 w-5 text-accent-600" />
            <p className="text-sm text-primary-800">English • Español</p>
          </div>
        </div>
      </section>

      {/* Evidence/Context band */}
      <section className="relative overflow-hidden bg-secondary-50">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-4 py-12 md:grid-cols-2 md:px-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-secondary-200">
              <Image
                src="https://images.unsplash.com/photo-1673187139211-1e7ec3dd60ec?ixid=M3w3MjY5NzB8MHwxfHNlYXJjaHwyfHxjYXIlMjBhY2NpZGVudHxlbnwxfDB8fHwxNzU0NjY4OTEzfDA&ixlib=rb-4.1.0"
                alt="Red car on a flatbed tow truck after a collision."
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-secondary-200">
              <Image
                src="https://images.unsplash.com/photo-1673187139181-795761a40ca1?ixid=M3w3MjY5NzB8MHwxfHNlYXJjaHw0fHxjYXIlMjBhY2NpZGVudHxlbnwxfDB8fHwxNzU0NjY4OTEzfDA&ixlib=rb-4.1.0"
                alt="Two damaged cars in a parking lot post-accident."
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-secondary-200">
              <Image
                src="https://images.unsplash.com/photo-1713623311317-d3c43a4be4cf?ixid=M3w3MjY5NzB8MHwxfHNlYXJjaHw1fHxjYXIlMjBhY2NpZGVudHxlbnwxfDB8fHwxNzU0NjY4OTEzfDA&ixlib=rb-4.1.0"
                alt="Rollover crash with first responders stabilizing the vehicle."
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-secondary-200">
              <Image
                src="https://images.unsplash.com/photo-1575987446487-56eba08666cf?ixid=M3w3MjY5NzB8MHwxfHNlYXJjaHw4fHxjYXIlMjBhY2NpZGVudHxlbnwxfDB8fHwxNzU0NjY4OTEzfDA&ixlib=rb-4.1.0"
                alt="Police officer at a motor vehicle accident scene."
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div>
            <h2 className="font-serif text-3xl text-primary-900">Focused on motor vehicle accident lawsuits</h2>
            <p className="mt-3 text-primary-800">
              When you’re not at fault, you shouldn’t carry the financial burden. We work to pursue compensation for
              medical bills, lost wages, pain and suffering, and property damage.
            </p>
            <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <li className="inline-flex items-center gap-2 text-primary-900">
                <CheckCircle2 className="h-5 w-5 text-accent-600" />
                Deal directly with insurance
              </li>
              <li className="inline-flex items-center gap-2 text-primary-900">
                <CheckCircle2 className="h-5 w-5 text-accent-600" />
                Build evidence and liability
              </li>
              <li className="inline-flex items-center gap-2 text-primary-900">
                <CheckCircle2 className="h-5 w-5 text-accent-600" />
                Coordinate treatment providers
              </li>
              <li className="inline-flex items-center gap-2 text-primary-900">
                <CheckCircle2 className="h-5 w-5 text-accent-600" />
                Negotiate or litigate for results
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="bg-primary-50">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
          <h2 className="font-serif text-3xl text-primary-900">How it works</h2>
          <p className="mt-2 max-w-2xl text-primary-800">
            A clear, simple process designed to reduce stress and move your case forward quickly.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="rounded-lg border border-primary-200 bg-primary-100 p-6">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-accent-600 text-accent-foreground">
                <FileText className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-serif text-xl text-primary-900">1) Free case review</h3>
              <p className="mt-2 text-primary-800">Tell us what happened. We assess liability and next steps.</p>
            </div>
            <div className="rounded-lg border border-primary-200 bg-primary-100 p-6">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-accent-600 text-accent-foreground">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-serif text-xl text-primary-900">2) We build your case</h3>
              <p className="mt-2 text-primary-800">Evidence, treatment coordination, and insurance negotiations.</p>
            </div>
            <div className="rounded-lg border border-primary-200 bg-primary-100 p-6">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-accent-600 text-accent-foreground">
                <Gavel className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-serif text-xl text-primary-900">3) Settlement or suit</h3>
              <p className="mt-2 text-primary-800">We push for maximum recovery—inside or outside the courtroom.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Cases we handle */}
      <section id="cases" className="bg-secondary-50">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
          <h2 className="font-serif text-3xl text-primary-900">Cases we handle</h2>
          <p className="mt-2 max-w-2xl text-primary-800">
            Not at fault? We can help with a wide range of California motor vehicle collisions.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <CaseCard
              icon={<Car className="h-6 w-6" />}
              title="Car crashes"
              copy="Rear-end, T-bone, hit-and-run, uninsured/underinsured."
            />
            <CaseCard
              icon={<Truck className="h-6 w-6" />}
              title="Truck collisions"
              copy="Commercial vehicles, delivery trucks, and big rigs."
            />
            <CaseCard
              icon={<Bike className="h-6 w-6" />}
              title="Motorcycle"
              copy="Lane-splitting, visibility, and high-impact injuries."
            />
            <CaseCard
              icon={<Car className="h-6 w-6" />}
              title="Rideshare"
              copy="Uber/Lyft passenger or driver claims."
            />
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1609320518571-cbde7ea56184?ixid=M3w3MjY5NzB8MHwxfHNlYXJjaHw0fHxsb3MlMjBhbmdlbGVzJTIwdHJhZmZpY3xlbnwxfDB8fHwxNzU0NjY5NDI2fDA&ixlib=rb-4.1.0"
            alt="Cars on a city street in Los Angeles during daytime."
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-radial from-accent-700/90 via-accent-700/80 to-accent-600/80" />
        </div>
        <div className="relative mx-auto flex max-w-7xl flex-col items-start gap-4 px-4 py-12 md:flex-row md:items-center md:justify-between md:px-6">
          <div>
            <h3 className="font-serif text-2xl text-accent-foreground">Free case review. No fee unless we win.</h3>
            <p className="mt-1 text-accent-foreground/90">Speak to a California MVA attorney today.</p>
          </div>
          <a
            href="#free-case-review"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-primary-foreground hover:bg-primary-700"
          >
            Start now
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      {/* FAQs */}
      <section id="faqs" className="bg-primary-50">
        <div className="mx-auto max-w-5xl px-4 py-16 md:px-6">
          <h2 className="font-serif text-3xl text-primary-900">Frequently asked questions</h2>
          <div className="mt-8 grid grid-cols-1 gap-6">
            <FAQ
              q="What if I’m partially at fault?"
              a="California follows comparative negligence. You may still recover damages reduced by your percentage of fault. We’ll evaluate liability during your free review."
            />
            <FAQ
              q="How long do I have to file?"
              a="Deadlines vary, but many MVA claims must be filed within two years in California. Some claims (like against government entities) have shorter timelines. Contact us as soon as possible."
            />
            <FAQ
              q="How much does a lawyer cost?"
              a="We work on contingency—no fee unless we win. You pay nothing upfront."
            />
            <FAQ
              q="What if the other driver is uninsured?"
              a="We’ll explore uninsured/underinsured motorist coverage, third-party liability, and other avenues to pursue compensation."
            />
          </div>
          <div className="mt-6 flex items-start gap-2 text-sm text-primary-800">
            <AlertTriangle className="mt-0.5 h-4 w-4 text-accent-600" />
            <p>
              This information is general and not legal advice. Speaking with our team helps determine the best path for
              your specific situation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact / Footer */}
      <footer id="contact" className="border-t border-primary-200 bg-primary-900">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-12 md:grid-cols-3 md:px-6">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-700">
                <Gavel className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="font-serif text-xl text-primary-50">Law Brothers</span>
            </div>
            <p className="mt-3 max-w-sm text-primary-200">
              Dedicated to representing California accident victims who are not at fault. Free, confidential case reviews
              24/7.
            </p>
            <div className="mt-4 inline-flex items-center gap-2 rounded-md bg-primary-700 px-3 py-1 text-xs text-primary-50">
              <Clock className="h-3.5 w-3.5" />
              Available 24/7
            </div>
          </div>
          <div>
            <h4 className="font-serif text-lg text-primary-50">Service area</h4>
            <p className="mt-2 text-primary-200">Serving clients throughout California.</p>
            <ul className="mt-3 space-y-2 text-primary-100">
              <li className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Los Angeles • San Diego • Bay Area • Inland Empire • Central Valley
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-serif text-lg text-primary-50">Quick links</h4>
            <ul className="mt-2 space-y-2">
              <li><a href="#how" className="text-primary-100 hover:text-primary-50">How it works</a></li>
              <li><a href="#cases" className="text-primary-100 hover:text-primary-50">Cases we handle</a></li>
              <li><a href="#faqs" className="text-primary-100 hover:text-primary-50">FAQs</a></li>
              <li><a href="#free-case-review" className="text-primary-100 hover:text-primary-50">Free case review</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-primary-700">
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-4 py-6 text-sm text-primary-300 md:flex-row md:px-6">
            <p>© {new Date().getFullYear()} Law Brothers. All rights reserved.</p>
            <p>No attorney–client relationship is formed by using this website.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

function CaseCard({
  icon,
  title,
  copy,
}: {
  icon: ReactNode;
  title: string;
  copy: string;
}) {
  return (
    <div className="group rounded-lg border border-secondary-200 bg-secondary-100 p-6 transition">
      <div className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-primary-800 text-primary-foreground">
        {icon}
      </div>
      <h3 className="mt-4 font-serif text-xl text-primary-900">{title}</h3>
      <p className="mt-2 text-primary-800">{copy}</p>
    </div>
  );
}

function FAQ({ q, a }: { q: string; a: string }) {
  return (
    <div className="rounded-lg border border-primary-200 bg-primary-100 p-5">
      <h4 className="font-serif text-lg text-primary-900">{q}</h4>
      <p className="mt-2 text-primary-800">{a}</p>
    </div>
  );
}