import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";

// Image metadata
export const alt = "Aditya Thakur - Full Stack Developer Portfolio";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#09090B",
          padding: "80px 100px",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Subtle Purple-Blue Glow (Premium SaaS effect) */}
        <div
          style={{
            position: "absolute",
            top: "-20%",
            right: "-10%",
            width: "800px",
            height: "800px",
            background: "radial-gradient(circle, rgba(124, 108, 251, 0.15) 0%, rgba(9, 9, 11, 0) 60%)",
            borderRadius: "50%",
          }}
        />

        {/* Faint Abstract Mesh/Grid Line (Thin border effect) */}
        <div
          style={{
            position: "absolute",
            left: "100px",
            top: "0",
            bottom: "0",
            width: "1px",
            background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.05), transparent)",
          }}
        />

        {/* Main Content Container */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            zIndex: 10,
            flex: 1,
            justifyContent: "center",
          }}
        >
          {/* Name */}
          <h1
            style={{
              fontSize: 72,
              fontWeight: 800,
              color: "#ffffff",
              margin: 0,
              letterSpacing: "-0.02em",
            }}
          >
            Aditya Thakur
          </h1>
          
          {/* Role */}
          <h2
            style={{
              fontSize: 36,
              fontWeight: 600,
              color: "#7c6cfb", // Aapka brand purple color
              marginTop: 16,
              marginBottom: 0,
            }}
          >
            Full Stack Developer
          </h2>
          
          {/* Description */}
          <p
            style={{
              fontSize: 28,
              color: "#A1A1AA",
              lineHeight: 1.5,
              maxWidth: "850px",
              marginTop: 32,
              marginBottom: 0,
            }}
          >
            Building scalable web applications, AI-powered products and modern digital experiences.
          </p>

          {/* Tech Stack Divider */}
          <div
            style={{
              width: "40px",
              height: "4px",
              backgroundColor: "#27272A",
              marginTop: 48,
              borderRadius: "2px",
            }}
          />

          {/* Tech Stack */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: 32,
              gap: "20px",
            }}
          >
            <span style={{ fontSize: 24, color: "#E4E4E7", fontWeight: 500 }}>Next.js</span>
            <span style={{ fontSize: 24, color: "#3F3F46" }}>•</span>
            <span style={{ fontSize: 24, color: "#E4E4E7", fontWeight: 500 }}>React</span>
            <span style={{ fontSize: 24, color: "#3F3F46" }}>•</span>
            <span style={{ fontSize: 24, color: "#E4E4E7", fontWeight: 500 }}>TypeScript</span>
            <span style={{ fontSize: 24, color: "#3F3F46" }}>•</span>
            <span style={{ fontSize: 24, color: "#E4E4E7", fontWeight: 500 }}>Node.js</span>
            <span style={{ fontSize: 24, color: "#3F3F46" }}>•</span>
            <span style={{ fontSize: 24, color: "#E4E4E7", fontWeight: 500 }}>PostgreSQL</span>
            <span style={{ fontSize: 24, color: "#3F3F46" }}>•</span>
            <span style={{ fontSize: 24, color: "#E4E4E7", fontWeight: 500 }}>AI</span>
          </div>
        </div>

        {/* Footer / URL (Bottom absolute) */}
        <div
          style={{
            position: "absolute",
            bottom: "80px",
            left: "100px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <span
            style={{
              fontSize: 24,
              color: "#71717A",
              fontWeight: 500,
              letterSpacing: "0.05em",
            }}
          >
            adityathakur.co.in
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}