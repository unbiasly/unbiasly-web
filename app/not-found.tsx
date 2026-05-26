import Link from "next/link";
import AppStores from "@/components/custom/app-stores";

export default function NotFound() {
  return (
    <>
      <section className="border-b border-rule">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12 py-24 lg:py-40 text-center">
          <div className="font-display text-[28vw] lg:text-[18rem] font-light leading-none tracking-tightest text-accent">
            404
          </div>
          <div className="eyebrow mt-6">Page not found</div>
          <h1 className="font-display text-3xl md:text-5xl font-light leading-tight tracking-tight mt-4 text-balance max-w-2xl mx-auto">
            The link you followed is probably broken, or the page has been removed.
          </h1>
          <p className="mt-5 text-ink-muted max-w-md mx-auto">
            Try heading back to the homepage, or jump straight into the live feed.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-5 py-3.5 bg-ink text-paper text-[13px] font-medium hover:bg-accent transition-colors"
            >
              ← Home
            </Link>
            <Link
              href="/live-news"
              className="inline-flex items-center gap-2 px-5 py-3.5 border border-ink/20 text-[13px] font-medium hover:border-accent hover:text-accent transition-colors"
            >
              Live News
            </Link>
          </div>
        </div>
      </section>
      <AppStores />
    </>
  );
}
