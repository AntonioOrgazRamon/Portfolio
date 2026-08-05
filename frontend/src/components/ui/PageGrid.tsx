export function PageGrid() {
  return (
    <div className="page-grid pointer-events-none fixed inset-0 z-0" aria-hidden>
      <div className="absolute inset-0 grid-overlay" />
      <div className="absolute inset-0 grid-overlay-glow" />
    </div>
  );
}
