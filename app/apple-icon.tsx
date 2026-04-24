import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";

// Image metadata
export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

// Brand tokens (mirrored from tailwind.config.ts — inline styles only in og routes)
const SAGE = "#9CAF94";
const SAGE_DEEP = "#7D9175";
const CREAM = "#FAF6F0";
const PINE = "#3D4A3A";
const CORAL = "#E8927C";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: CREAM,
          position: "relative",
          // iOS masks the corners; the outer rounding is cosmetic.
          borderRadius: 36,
        }}
      >
        {/* soft sage plate */}
        <div
          style={{
            position: "absolute",
            inset: 18,
            borderRadius: 28,
            background: SAGE,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              lineHeight: 1,
            }}
          >
            <span
              style={{
                fontFamily: '"Source Serif 4", Georgia, serif',
                fontSize: 128,
                fontWeight: 600,
                color: PINE,
                letterSpacing: "-0.03em",
                marginTop: -4,
              }}
            >
              p
            </span>
            <span
              style={{
                width: 14,
                height: 14,
                borderRadius: 999,
                background: CORAL,
                marginLeft: 6,
                marginBottom: 20,
              }}
            />
          </div>
        </div>

        {/* thin sage-deep hairline rule at the base — wordmark-feel */}
        <div
          style={{
            position: "absolute",
            left: 36,
            right: 36,
            bottom: 30,
            height: 1,
            background: SAGE_DEEP,
            opacity: 0.45,
          }}
        />
      </div>
    ),
    {
      ...size,
    },
  );
}
