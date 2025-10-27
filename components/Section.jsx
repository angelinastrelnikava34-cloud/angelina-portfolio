
export default function Section({ id, title, subtitle, children }){
  return (
    <section id={id} className="scroll-mt-24 py-16 md:py-24">
      <div className="container">
        {title && (
          <div className="mb-10">
            <h2 className="text-2xl md:text-4xl font-semibold tracking-tight">{title}</h2>
            {subtitle && (<p className="mt-2 text-sm md:text-base opacity-70">{subtitle}</p>)}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}
