import { ImageResponse } from "next/og";
import { getPost } from "@/content/blog";
import { site } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function BlogOpenGraphImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);

  const title = post?.title ?? "Engineering & Life Notes";
  const description = post?.description ?? site.description;
  const tags = post?.tags.join(" · ") ?? "Writing";

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
            "radial-gradient(circle at 80% 80%, rgba(255, 138, 61, 0.18), transparent 48%)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ fontSize: "18px", color: "#ff8a3d", letterSpacing: "0.14em" }}>
            ARTICLE · {tags.toUpperCase()}
          </span>
          <span style={{ fontSize: "18px", color: "#a1a1aa" }}>{site.name}</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "22px", maxWidth: "980px" }}>
          <div style={{ fontSize: "58px", fontWeight: 700, lineHeight: 1.08, letterSpacing: "-0.02em" }}>
            {title}
          </div>
          <div style={{ fontSize: "24px", color: "#a1a1aa", lineHeight: 1.45 }}>{description}</div>
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
          <span>{site.role}</span>
          <span style={{ color: "#f4f4f6" }}>godswilloguike.com/blog/{slug}</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
