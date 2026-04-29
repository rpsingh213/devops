import { ImageResponse } from "next/og";
import { profile } from "@/content/profile";

export const runtime = "edge";

const SIZE = { width: 1200, height: 630 };

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background:
            "linear-gradient(135deg, #1a0b2e 0%, #4a1d5a 35%, #831843 70%, #1a0b2e 100%)",
          color: "white",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              background: "linear-gradient(135deg, #c026d3, #ec4899)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 28,
              fontWeight: 800,
            }}
          >
            M
          </div>
          <div style={{ fontSize: 24, opacity: 0.85 }}>{profile.shortName} Rana • Portfolio</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 78, fontWeight: 800, lineHeight: 1.05 }}>
            {profile.name}
          </div>
          <div style={{ fontSize: 36, opacity: 0.9, lineHeight: 1.2 }}>
            {profile.headline}
          </div>
          <div style={{ fontSize: 24, opacity: 0.7, marginTop: 8, maxWidth: 980 }}>
            {profile.tagline}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 22,
            opacity: 0.7,
          }}
        >
          <span>{profile.location}</span>
          <span>{profile.totalExperience} • LEXORBIS</span>
        </div>
      </div>
    ),
    { ...SIZE }
  );
}
