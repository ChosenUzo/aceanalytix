import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="relative grid min-h-[80vh] place-items-center overflow-hidden bg-ink text-ondark">
      <div aria-hidden className="absolute inset-0 grid-lines-dark opacity-40" />
      <Container className="relative z-10 text-center">
        <p className="display text-[clamp(4rem,16vw,12rem)] leading-none text-brand-400">404</p>
        <h1 className="display mt-2 text-3xl text-ondark">This page isn’t here.</h1>
        <p className="mx-auto mt-4 max-w-md text-ondark-muted">
          The link may be broken or the page may have moved. Let’s get you back on track.
        </p>
        <div className="mt-8 flex justify-center">
          <Button href="/" variant="onDark" size="lg">
            Back to home
          </Button>
        </div>
      </Container>
    </section>
  );
}
