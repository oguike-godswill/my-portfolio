import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <div className="section flex min-h-[60vh] items-center">
      <Container>
        <p className="section-label mb-4">Error</p>
        <h1 className="display-heading text-[5rem] leading-none sm:text-[8rem]">404</h1>
        <p className="display-heading mt-4 text-2xl sm:text-3xl">Looks like this page took a wrong turn.</p>
        <p className="muted mt-4 max-w-md text-base leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has been moved. Everything worth seeing is one
          click away.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href="/">
            Back home
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </ButtonLink>
          <ButtonLink href="/work" variant="secondary">
            View my work
          </ButtonLink>
        </div>

        <p className="muted mt-10 text-sm">
          Or jump straight to{" "}
          <Link href="/contact" className="text-fg underline decoration-border-strong underline-offset-4">
            contact
          </Link>
          .
        </p>
      </Container>
    </div>
  );
}
