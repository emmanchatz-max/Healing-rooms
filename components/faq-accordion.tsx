type FAQItem = {
  question: string;
  answer: string;
};

type FAQAccordionProps = {
  items: FAQItem[];
};

export function FAQAccordion({ items }: FAQAccordionProps) {
  return (
    <div className="space-y-4">
      {items.map((item) => (
        <details
          key={item.question}
          className="group rounded-[1.75rem] border border-stone/70 bg-white/85 p-6 shadow-soft"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left font-serif text-2xl text-charcoal marker:hidden">
            {item.question}
            <span className="text-gold transition group-open:rotate-45">+</span>
          </summary>
          <p className="mt-4 max-w-3xl text-base leading-7 text-charcoal/72">
            {item.answer}
          </p>
        </details>
      ))}
    </div>
  );
}
