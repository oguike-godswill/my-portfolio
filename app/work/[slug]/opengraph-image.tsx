import { ImageResponse } from "next/og";
import { getProject } from "@/content/projects";
import { site } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function ProjectOpenGraphImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);

  const title = project?.title ?? site.name;
  const category = project?.category ?? "Case Study";
  const tagline = project?.tagline ?? site.description;
  const tech = project?.technologies.slice(0, 5).join(" · ") ?? "Next.js · TypeScript · Flutter";

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
            "radial-gradient(circle at 85% 20%, rgba(255, 138, 61, 0.2), transparent 48%)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ fontSize: "18px", color: "#ff8a3d", letterSpacing: "0.14em" }}>
            CASE STUDY · {category.toUpperCase()}
          </span>
          <span style={{ fontSize: "18px", color: "#a1a1aa" }}>{site.name}</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px", maxWidth: "980px" }}>
          <div style={{ fontSize: "68px", fontWeight: 700, lineHeight: 1.05, letterSpacing: "-0.02em" }}>
            {title}
          </div>
          <div style={{ fontSize: "26px", color: "#a1a1aa", lineHeight: 1.4 }}>{tagline}</div>
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
          <span>{tech}</span>
          <span style={{ color: "#f4f4f6" }}>godswilloguike.com/work/{slug}</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
