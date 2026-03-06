import Link from "next/link";
import PortfolioShell from "../components/PortfolioShell";

export default function NotFoundPage() {
  return (
    <PortfolioShell hideHero>
      <section className="not-found-wrap">
        <article className="card not-found-card reveal delay-1">
          <p className="not-found-code">404</p>
          <h1 className="not-found-title">Page Not Found</h1>
          <p className="summary summary-tight">
            The page you are looking for does not exist or has been moved.
          </p>
          <div className="not-found-actions">
            <Link className="cta" href="/">
              Back Home
            </Link>
          </div>
        </article>
      </section>
    </PortfolioShell>
  );
}
