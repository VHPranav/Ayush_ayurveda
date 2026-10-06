/**
 * CSS-only fade-and-rise for content at the very top of a page: it plays on first
 * paint, before JavaScript hydrates, so headlines never wait for scripts.
 */
export function FadeIn({
  delay = 0,
  className = "",
  children,
}: {
  delay?: number;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={`fade-rise ${className}`} style={{ animationDelay: `${delay}s` }}>
      {children}
    </div>
  );
}
