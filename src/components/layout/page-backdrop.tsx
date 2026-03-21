export function PageBackdrop() {
  return (
    <>
      <div className="landing-mesh pointer-events-none fixed inset-0 -z-20" />
      <div className="landing-noise fixed inset-0 -z-10 size-full" />
    </>
  );
}
