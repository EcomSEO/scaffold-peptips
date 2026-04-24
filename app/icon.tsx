import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";

// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

// Brand tokens (mirrored from tailwind.config.ts — inline styles only in og routes)
const SAGE = "#9CAF94";
const PINE = "#3D4A3A";
const CORAL = "#E8927C";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: SAGE,
          borderRadius: 6,
          position: "relative",
        }}
      >
        <span
          style={{
            fontFamily: '"Source Serif 4", Georgia, serif',
            fontSize: 24,
            fontWeight: 600,
            color: PINE,
            lineHeight: 1,
            letterSpacing: "-0.02em",
            marginTop: -1,
          }}
        >
          p
        </span>
        <span
          style={{
            position: "absolute",
            right: 5,
            bottom: 7,
            width: 4,
            height: 4,
            borderRadius: 999,
            background: CORAL,
          }}
        />
      </div>
    ),
    {
      ...size,
    },
  );
}
