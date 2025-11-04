{/* HERO / мини-превью справа от заголовка */}
<div className="grid grid-cols-3 gap-6">
  {CONTENT.gallery.slice(0, 5).map((item, index) => (
    <div key={item.src} className="relative overflow-hidden rounded-2xl">
      <img
        src={item.src}
        alt={item.alt || ''}
        className="h-44 w-32 md:h-48 md:w-36 object-cover rounded-2xl kb-animate"
        loading={index < 2 ? 'eager' : 'lazy'}
        decoding="async"
        onError={(e) => {
          // прячем сломанный кадр, чтобы не было "вопросика"
          e.currentTarget.style.display = 'none';
          // можно также убрать всю ячейку:
          // e.currentTarget.closest('.relative')?.remove();
        }}
        style={{ animationDelay: `${(index % 6) * 0.8}s` }}
      />
    </div>
  ))}
</div>
