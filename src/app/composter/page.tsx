export default function CompostPilotPage() {
  const features = [
    {
      title: "No electricity",
      text: "A manually mixed, naturally aerated system designed to support real biological composting without motors, heaters, filters or subscriptions.",
    },
    {
      title: "Stainless steel contact surfaces",
      text: "Food scraps and compost contact stainless steel rather than plastic. The sealed PU insulation remains isolated inside the double wall.",
    },
    {
      title: "Integrated hand mixing",
      text: "A top-mounted crank turns six solid stainless steel mixing rods to loosen material, improve aeration and reduce compaction.",
    },
    {
      title: "Two-stage system",
      text: "The upper chamber is designed for active composting. The lower chamber provides space for cooling, curing and optional worm activity.",
    },
  ];

  return (
    <main className="min-h-screen bg-stone-50 text-neutral-900">
      <header className="sticky top-0 z-40 border-b border-black/10 bg-stone-50/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="/" className="text-xl font-black tracking-[0.2em]">SIBKO</a>
          <a
            href="#pilot"
            className="rounded-full bg-neutral-900 px-5 py-2.5 text-xs font-bold tracking-widest text-white hover:bg-amber-600"
          >
            JOIN THE PILOT
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-black/10">
        <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-amber-300/25 blur-3xl" />
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-[1.08fr_0.92fr] lg:py-28">
          <div className="relative z-10">
            <div className="mb-6 inline-flex rounded-full border border-amber-700/20 bg-amber-100 px-4 py-2 text-xs font-bold tracking-[0.18em] text-amber-800">
              PROTOTYPE DEVELOPMENT • PILOT INTEREST OPEN
            </div>
            <h1 className="max-w-3xl text-5xl font-black leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl">
              Real compost.
              <br />
              No electricity.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-neutral-600">
              SIBKO is developing a durable insulated stainless steel composting system that combines manual mixing, passive aeration and separate active and curing chambers.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#pilot"
                className="rounded-xl bg-amber-500 px-7 py-4 text-center text-sm font-black tracking-widest text-neutral-950 shadow-lg shadow-amber-500/20 hover:bg-amber-400"
              >
                REGISTER PILOT INTEREST
              </a>
              <a
                href="#concept"
                className="rounded-xl border border-neutral-300 bg-white px-7 py-4 text-center text-sm font-black tracking-widest hover:border-neutral-500"
              >
                EXPLORE THE CONCEPT
              </a>
            </div>
            <p className="mt-4 text-xs leading-5 text-neutral-500">
              No payment required. Pilot specifications, performance and launch timing remain subject to prototype testing.
            </p>
          </div>

          <div className="relative flex min-h-[420px] items-center justify-center overflow-hidden rounded-3xl border border-black/10 bg-gradient-to-br from-neutral-200 via-white to-stone-300 p-8 shadow-2xl shadow-black/10">
            <div className="absolute left-6 top-6 rounded-full border border-black/10 bg-white/75 px-3 py-1.5 text-[10px] font-bold tracking-widest text-neutral-600">
              PRODUCT RENDER PLACEHOLDER
            </div>
            <div className="flex flex-col items-center">
              <div className="h-40 w-56 rounded-t-[56px] rounded-b-2xl border-4 border-neutral-400 bg-gradient-to-r from-neutral-300 via-white to-neutral-400 shadow-xl" />
              <div className="my-2 h-3 w-60 rounded-full bg-neutral-500" />
              <div className="h-40 w-56 rounded-2xl border-4 border-neutral-400 bg-gradient-to-r from-neutral-300 via-white to-neutral-400 shadow-xl" />
              <div className="mt-2 flex gap-24">
                <div className="h-16 w-7 bg-neutral-500" />
                <div className="h-16 w-7 bg-neutral-500" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="concept" className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-3xl">
          <p className="text-xs font-black tracking-[0.22em] text-amber-700">WHY THIS EXISTS</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">
            A passive alternative to electric food-waste processors.
          </h2>
          <p className="mt-6 text-lg leading-8 text-neutral-600">
            The concept is intended for households that want to process food scraps through natural aerobic decomposition, without relying on electrical heating, grinding or dehydration.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {features.map((feature) => (
            <article key={feature.title} className="rounded-2xl border border-black/10 bg-white p-7 shadow-sm">
              <div className="mb-5 h-2 w-12 rounded-full bg-amber-500" />
              <h3 className="text-xl font-black">{feature.title}</h3>
              <p className="mt-3 leading-7 text-neutral-600">{feature.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-black/10 bg-neutral-900 text-white">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-2">
          <div>
            <p className="text-xs font-black tracking-[0.22em] text-amber-400">CURRENT DESIGN DIRECTION</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight">Two chambers. One natural process.</h2>
          </div>
          <div className="space-y-8">
            <div>
              <p className="text-sm font-black tracking-widest text-amber-400">01 • ACTIVE UPPER CHAMBER</p>
              <p className="mt-2 leading-7 text-neutral-300">
                An insulated perforated chamber with a hand crank, six solid stainless mixing rods and a central perforated aeration tube.
              </p>
            </div>
            <div className="border-t border-white/15 pt-8">
              <p className="text-sm font-black tracking-widest text-amber-400">02 • LOWER CURING CHAMBER</p>
              <p className="mt-2 leading-7 text-neutral-300">
                A separate lower chamber intended to receive material for cooling and curing, with passive airflow through hollow soil-contact legs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-8 lg:grid-cols-3">
          <div>
            <p className="text-xs font-black tracking-[0.22em] text-amber-700">PILOT APPROACH</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight">Prove performance before production.</h2>
          </div>
          <div className="rounded-2xl bg-stone-200 p-7">
            <p className="text-4xl font-black text-amber-700">01</p>
            <h3 className="mt-5 text-xl font-black">Prototype testing</h3>
            <p className="mt-3 leading-7 text-neutral-600">Measure temperatures, moisture behaviour, drainage, airflow, mixing effort and compost quality.</p>
          </div>
          <div className="rounded-2xl bg-stone-200 p-7">
            <p className="text-4xl font-black text-amber-700">02</p>
            <h3 className="mt-5 text-xl font-black">Limited pilot release</h3>
            <p className="mt-3 leading-7 text-neutral-600">Invite a small group of early users to provide practical feedback before any wider release.</p>
          </div>
        </div>
      </section>

      <section id="pilot" className="px-6 pb-24">
        <div className="mx-auto max-w-4xl overflow-hidden rounded-3xl bg-amber-500 p-8 shadow-xl shadow-amber-500/20 sm:p-12">
          <p className="text-xs font-black tracking-[0.22em] text-amber-950/70">EARLY ACCESS</p>
          <h2 className="mt-3 max-w-2xl text-4xl font-black tracking-tight text-neutral-950">
            Help determine whether this product reaches production.
          </h2>
          <p className="mt-5 max-w-2xl leading-7 text-amber-950/80">
            Join the pilot list for prototype updates, expected pricing and first access if a limited production run proceeds.
          </p>

          <form action="https://YOUR-FORM-ENDPOINT" method="POST" className="mt-8 grid gap-3 sm:grid-cols-[1fr_auto]">
            <input
              type="email"
              name="email"
              required
              placeholder="Your email address"
              className="min-h-14 rounded-xl border border-amber-900/20 bg-white px-5 text-neutral-900 outline-none placeholder:text-neutral-400 focus:ring-4 focus:ring-white/40"
            />
            <button
              type="submit"
              className="min-h-14 rounded-xl bg-neutral-950 px-7 text-sm font-black tracking-widest text-white hover:bg-neutral-800"
            >
              JOIN PILOT LIST
            </button>
          </form>
          <p className="mt-3 text-xs text-amber-950/70">Pilot registration is non-binding. No spam and no payment required.</p>
        </div>
      </section>

      <footer className="border-t border-black/10 px-6 py-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 text-sm text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 SIBKO Limited. New Zealand.</p>
          <a href="mailto:info@sibko.co.nz" className="font-semibold text-neutral-700 hover:text-amber-700">info@sibko.co.nz</a>
        </div>
      </footer>
    </main>
  );
}
