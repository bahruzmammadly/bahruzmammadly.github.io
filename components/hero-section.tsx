export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex h-screen w-full items-center"
      aria-labelledby="hero-heading"
    >
      {/* Main content */}
      <div className="relative z-10 px-6 sm:px-10 md:px-16 lg:pl-28 xl:pl-36">
        <div className="relative pl-6 md:pl-8">
          {/* Purple dot + vertical line */}
          <div className="absolute left-0 top-0 flex flex-col items-center">
            <span className="mt-3 h-2.5 w-2.5 rounded-full bg-primary md:mt-4 md:h-3 md:w-3" />
            <span
              className="mt-0 w-px bg-primary/20"
              style={{ height: "calc(100% + 10rem)" }}
            />
          </div>

          {/* Brand heading */}
          <h1
            id="hero-heading"
            className="font-mono text-[2.25rem] font-extrabold leading-[1] tracking-tight sm:text-6xl md:text-7xl lg:text-[5.5rem]"
          >
            <span className="text-foreground">mammadly</span>
            <span className="text-primary">.dev()</span>
          </h1>

          {/* Full name */}
          <p className="mt-3 font-mono text-sm tracking-wide text-primary sm:text-base md:mt-4 md:text-lg">
            Bahruz Mammadly
          </p>

          {/* Role description */}
          <p className="mt-2 max-w-md font-mono text-xs leading-relaxed text-muted-foreground sm:text-sm md:mt-3 md:text-base">
            {"Front end & mobile developer,"}
            <br />
            {"crafting modern digital experiences."}
          </p>
        </div>
      </div>

      {/* Bottom horizontal line */}
      <div
        className="absolute bottom-16 left-0 right-0 h-px bg-border/20 md:bottom-12"
        aria-hidden="true"
      />
    </section>
  );
}
