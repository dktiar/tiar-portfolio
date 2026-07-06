import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Tiar Dwi Krisnanto — IT Section Head Portfolio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0a0a0a",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Background accent */}
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "500px",
            height: "630px",
            background: "linear-gradient(135deg, #1e3a8a10, #3b82f620)",
            borderRadius: "0 0 0 300px",
          }}
        />

        {/* Label */}
        <div
          style={{
            fontSize: 14,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "#525252",
            marginBottom: 24,
            display: "flex",
          }}
        >
          Portfolio · Jakarta, Indonesia
        </div>

        {/* Name */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 900,
            color: "#fafafa",
            lineHeight: 0.95,
            letterSpacing: "-0.03em",
            textTransform: "uppercase",
            display: "flex",
            flexDirection: "column",
            marginBottom: 32,
          }}
        >
          <span>TIAR DWI</span>
          <span style={{ color: "#3b82f6" }}>KRISNANTO</span>
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: 24,
            color: "#a3a3a3",
            marginBottom: 48,
            display: "flex",
          }}
        >
          IT Section Head / Senior Supervisor
        </div>

        {/* Tags */}
        <div style={{ display: "flex", gap: 12 }}>
          {["Infrastructure", "ISO 27001", "Security", "Property Tech"].map((tag) => (
            <div
              key={tag}
              style={{
                padding: "8px 16px",
                border: "1px solid #262626",
                borderRadius: 99,
                fontSize: 13,
                color: "#525252",
                display: "flex",
              }}
            >
              {tag}
            </div>
          ))}
        </div>

        {/* Bottom branding */}
        <div
          style={{
            position: "absolute",
            bottom: 40,
            right: 80,
            fontSize: 18,
            fontWeight: 700,
            color: "#262626",
            letterSpacing: "-0.05em",
            display: "flex",
          }}
        >
          tiar-portfolio.vercel.app
        </div>
      </div>
    ),
    { ...size }
  );
}
