export default function Section({
  id,
  title,
  subtitle = '',
  children,
  spacing = 'normal', // 'normal' | 'tight'
}) {
  const topPad = spacing === 'tight' ? 'mt-0' : 'mt-10';

  return (
    <section id={id} className={`container mx-auto px-6 ${topPad} mb-12`}>
      {(title || subtitle) && (
        <header className="mb-4">
          {title && (
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
              {title}
            </h2>
          )}
          {subtitle && <p className="mt-2 opacity-80">{subtitle}</p>}
        </header>
      )}
      {children}
    </section>
  );
}
