import { Block } from "@/content/blog";

function renderBlock(block: Block, key: number) {
  switch (block.type) {
    case "p":
      return (
        <p key={key} className="muted text-base leading-relaxed sm:text-[17px]">
          {block.text}
        </p>
      );
    case "h2":
      return (
        <h2 key={key} className="display-heading pt-4 text-2xl sm:text-3xl">
          {block.text}
        </h2>
      );
    case "h3":
      return (
        <h3 key={key} className="pt-2 font-display text-lg font-semibold tracking-normal">
          {block.text}
        </h3>
      );
    case "ul":
      return (
        <ul key={key} className="space-y-2.5">
          {block.items.map((item) => (
            <li key={item} className="muted flex items-start gap-2.5 text-base leading-relaxed">
              <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-[var(--accent)]" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol key={key} className="space-y-2.5">
          {block.items.map((item, i) => (
            <li key={item} className="muted flex items-start gap-3 text-base leading-relaxed">
              <span className="mt-0.5 font-mono text-xs text-[var(--accent-text)]">{i + 1}.</span>
              {item}
            </li>
          ))}
        </ol>
      );
    case "code":
      return (
        <pre
          key={key}
          className="overflow-x-auto rounded-xl border border-border bg-[var(--bg-subtle)] p-4 font-mono text-[13px] leading-relaxed text-fg-muted"
        >
          <code>{block.code}</code>
        </pre>
      );
    case "quote":
      return (
        <blockquote
          key={key}
          className="border-l-2 border-[var(--accent)] pl-5 font-display text-lg italic leading-relaxed text-fg sm:text-xl"
        >
          {block.text}
        </blockquote>
      );
    case "note":
      return (
        <aside
          key={key}
          className="rounded-xl border border-border bg-[var(--accent-soft)] px-5 py-4 text-sm leading-relaxed text-fg"
        >
          <span className="mb-1 block font-mono text-[10px] uppercase tracking-wider text-[var(--accent-text)]">
            Note
          </span>
          {block.text}
        </aside>
      );
    default:
      return null;
  }
}

export function PostBody({ blocks }: { blocks: Block[] }) {
  return <div className="space-y-6">{blocks.map((block, i) => renderBlock(block, i))}</div>;
}
