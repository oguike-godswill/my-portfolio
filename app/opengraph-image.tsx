import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${site.name} — Frontend & App Developer`;

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0a0a0b",
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          padding: 72,
          color: "#f4f4f5",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 9999,
              backgroundColor: "#ff8a3d",
            }}
          />
          <div style={{ fontSize: 26, color: "#a1a1aa", letterSpacing: 2, textTransform: "uppercase" }}>
            {site.role}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: 76, lineHeight: 1.05, fontWeight: 600, maxWidth: 950 }}>
            I build web &amp; mobile products that people actually use.
          </div>
          <div style={{ fontSize: 30, color: "#a1a1aa" }}>
            React · Next.js · TypeScript · Node.js · Flutter
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 26, color: "#71717a" }}>
          <div>{site.name}</div>
          <div style={{ color: "#ffa163" }}>{site.url.replace("https://", "")}</div>
        </div>
      </div>
    ),
    size,
  );
}
