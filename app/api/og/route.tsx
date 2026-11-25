import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const runtime = "edge";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title") || site.headline;
  const subtitle =
    searchParams.get("subtitle") ||
    "Frontend & Mobile Product Engineer · React · Next.js · TypeScript · Node.js · Flutter";
  const tag = searchParams.get("tag") || "PORTFOLIO";
  const path = searchParams.get("path") || "godswilloguike.com";

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#08080a",
          color: "#f4f4f6",
          padding: "64px 72px",
          fontFamily: "sans-serif",
          backgroundImage:
            "radial-gradient(circle at 82% 18%, rgba(255, 138, 61, 0.22), transparent 50%)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <div
              style={{
                width: "42px",
                height: "42px",
                borderRadius: "10px",
                border: "1px solid rgba(255,255,255,0.18)",
                backgroundColor: "#121216",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "17px",
                fontWeight: 700,
                color: "#ff8a3d",
              }}
            >
              {site.initials}
            </div>
            <span style={{ fontSize: "22px", fontWeight: 600 }}>{site.name}</span>
          </div>
          <span style={{ fontSize: "16px", color: "#ff8a3d", letterSpacing: "0.14em" }}>
            {tag.toUpperCase()}
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px", maxWidth: "980px" }}>
          <div style={{ fontSize: "60px", fontWeight: 700, lineHeight: 1.07, letterSpacing: "-0.02em" }}>
            {title}
          </div>
          <div style={{ fontSize: "24px", color: "#a1a1aa", lineHeight: 1.4 }}>{subtitle}</div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(255,255,255,0.1)",
            paddingTop: "24px",
            fontSize: "18px",
            color: "#71717a",
          }}
        >
          <span>{path}</span>
          <span style={{ color: "#10b981" }}>Available for opportunities</span>
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
