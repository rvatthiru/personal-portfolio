import { ImageResponse } from "next/og";

export const alt = "Thirunarayanan Raman: making numbers decisive";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#FAF7F2",
          color: "#14110F",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 24, letterSpacing: 4, textTransform: "uppercase" }}>
          <div style={{ width: 14, height: 14, borderRadius: 14, background: "#FF6B4A" }} />
          A Thirunarayanan Raman production
        </div>

        <div style={{ display: "flex", flexDirection: "column", fontSize: 128, lineHeight: 1, letterSpacing: -4 }}>
          <span>Making numbers</span>
          <span style={{ color: "#4F46E5", fontStyle: "italic" }}>decisive.</span>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", fontSize: 30 }}>
          <span>A career in data, told in five chapters.</span>
          <span style={{ background: "#14110F", color: "#FAF7F2", padding: "12px 24px", borderRadius: 999, fontSize: 24 }}>
            Vibrant America
          </span>
        </div>
      </div>
    ),
    size
  );
}
