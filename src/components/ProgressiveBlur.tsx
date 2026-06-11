export default function ProgressiveBlur() {
  return (
    <>
      <div className="progressive-blur" />
      <div className="fixed bottom-0 left-0 right-0 h-15 bg-linear-to-t from-surface to-transparent pointer-events-none z-51" />
    </>
  );
}
