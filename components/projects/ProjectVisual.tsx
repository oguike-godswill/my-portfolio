import { cn } from "@/lib/cn";

function Bar({ className }: { className?: string }) {
  return <div className={cn("rounded-full bg-white/15", className)} />;
}

function Block({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return <div className={cn("rounded-md bg-white/8", className)} style={style} />;
}

function MarketplaceVisual({ accent }: { accent: string }) {
  return (
    <div className="flex h-full gap-3 p-4">
      <div className="flex w-1/4 flex-col gap-2 rounded-lg bg-white/5 p-3">
        <div className="mb-1 h-2 w-2/3 rounded-full" style={{ background: accent }} />
        {[80, 60, 70, 50, 65].map((w, i) => (
          <div key={i} className="flex items-center gap-1.5">
            <div className="h-2 w-2 rounded-sm border border-white/20" />
            <Bar className={`h-1.5 w-[${w}%]`} />
          </div>
        ))}
      </div>
      <div className="flex-1 space-y-2.5">
        <div className="flex items-center gap-2 rounded-lg bg-white/5 p-2">
          <div className="h-2 w-1/3 rounded-full bg-white/20" />
          <div className="ml-auto h-4 w-10 rounded-full" style={{ background: accent }} />
        </div>
        <div className="grid grid-cols-2 gap-2.5">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="rounded-lg bg-white/5 p-2.5">
              <Block className="mb-2 h-10 w-full" />
              <Bar className="mb-1.5 h-1.5 w-2/3" />
              <div className="flex items-center justify-between">
                <Bar className="h-1.5 w-1/3" />
                <div className="h-2.5 w-2.5 rounded-full" style={{ background: accent }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function HairVisual({ accent }: { accent: string }) {
  return (
    <div className="flex h-full flex-col p-4">
      <div className="mb-3 flex items-center justify-between">
        <div className="h-2.5 w-14 rounded-full" style={{ background: accent }} />
        <div className="flex gap-2">
          <Bar className="h-1.5 w-8" />
          <Bar className="h-1.5 w-8" />
          <Bar className="h-1.5 w-8" />
        </div>
      </div>
      <div className="flex flex-1 gap-3">
        <div className="flex flex-1 flex-col justify-center gap-2">
          <div className="font-display text-xl font-bold leading-tight text-white/85 sm:text-2xl">
            Feel good,
            <br />
            <span style={{ color: accent }}>look great.</span>
          </div>
          <Bar className="h-1.5 w-2/3" />
          <Bar className="h-1.5 w-1/2" />
          <div className="mt-2 h-5 w-20 rounded-full" style={{ background: accent }} />
        </div>
        <div className="grid w-1/2 grid-cols-2 gap-2">
          <Block className="h-full" />
          <Block className="h-full" style={{ background: `${accent}33` }} />
          <Block className="h-full" style={{ background: `${accent}33` }} />
          <Block className="h-full" />
        </div>
      </div>
    </div>
  );
}

function ChurchVisual({ accent }: { accent: string }) {
  return (
    <div className="flex h-full flex-col p-4">
      <div className="mb-2 flex items-center justify-between">
        <div className="h-2.5 w-12 rounded-full" style={{ background: accent }} />
        <Bar className="h-1.5 w-20" />
      </div>
      <div className="mb-3 flex flex-1 flex-col items-center justify-center gap-2 rounded-lg bg-white/4">
        <div className="font-display text-lg font-bold text-white/85 sm:text-xl">
          Welcome <span style={{ color: accent }}>home.</span>
        </div>
        <Bar className="h-1.5 w-1/3" />
      </div>
      <div className="grid grid-cols-3 gap-2">
        {[0, 1, 2].map((i) => (
          <div key={i} className="rounded-lg bg-white/5 p-2">
            <div className="mb-1.5 h-1 w-1/2 rounded-full" style={{ background: accent }} />
            <Bar className="mb-1 h-1.5 w-full" />
            <Bar className="h-1.5 w-2/3" />
          </div>
        ))}
      </div>
    </div>
  );
}

const visuals: Record<string, (props: { accent: string }) => React.ReactNode> = {
  marketplace: MarketplaceVisual,
  quotehub: MarketplaceVisual,
  "hair-brand": HairVisual,
  "velvet-and-roots": HairVisual,
  church: ChurchVisual,
  "grace-chapel": ChurchVisual,
  taskflow: MarketplaceVisual,
  bites: MarketplaceVisual,
  finova: MarketplaceVisual,
  learnly: MarketplaceVisual,
  staybnb: MarketplaceVisual,
  pulse: MarketplaceVisual,
  artify: MarketplaceVisual,
};

export function ProjectVisual({
  kind,
  accent,
  url,
  className,
}: {
  kind: string;
  accent: string;
  url?: string;
  className?: string;
}) {
  const Visual = visuals[kind] ?? MarketplaceVisual;
  return (
    <div
      className={cn(
        "overflow-hidden rounded-[10px] border border-line bg-surface shadow-[0_20px_60px_-20px_rgb(0_0_0/0.6)]",
        className
      )}
    >
      {/* Browser chrome */}
      <div className="flex items-center gap-3 border-b border-line bg-surface-2 px-4 py-2.5">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#3a3a3a]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#3a3a3a]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#3a3a3a]" />
        </div>
        <div className="flex flex-1 items-center gap-1.5 rounded-full bg-background px-3 py-1">
          <span className="h-1.5 w-1.5 rounded-full" style={{ background: accent }} />
          <span className="truncate text-[10px] text-muted">{url ?? "example.com"}</span>
        </div>
      </div>
      <div className="aspect-[16/10]">
        <Visual accent={accent} />
      </div>
    </div>
  );
}
