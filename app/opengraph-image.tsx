import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";

export const alt =
  "Peptips — Real answers about life on a GLP-1, without the hype or the lectures.";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

// Brand tokens (from tailwind.config.ts — inline styles only in og routes)
const CREAM = "#FAF6F0";
const CREAM_DEEP = "#F1EADC";
const SAGE = "#9CAF94";
const SAGE_DEEP = "#7D9175";
const PINE = "#3D4A3A";
const CORAL = "#E8927C";
const STONE = "#6F6B63";
const CHARCOAL = "#2A2A2A";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: CREAM,
          // Very soft warm wash, echoing app/globals.css body background
          backgroundImage:
            "radial-gradient(at 8% 6%, rgba(156, 175, 148, 0.08) 0, transparent 55%), radial-gradient(at 92% 94%, rgba(232, 146, 124, 0.06) 0, transparent 55%)",
          display: "flex",
          flexDirection: "column",
          padding: "72px 80px",
          fontFamily: '"Source Serif 4", Georgia, serif',
          position: "relative",
          color: CHARCOAL,
        }}
      >
        {/* Dateline — pine caps-label, top */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            fontFamily: "Inter, system-ui, sans-serif",
            fontSize: 18,
            fontWeight: 500,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: PINE,
          }}
        >
          <span>Vol. I</span>
          <span style={{ color: SAGE_DEEP }}>·</span>
          <span>No. 01</span>
          <span style={{ color: SAGE_DEEP }}>·</span>
          <span>peptips.com</span>
        </div>

        {/* FieldRule — thin line with a sage dot */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            marginTop: 22,
          }}
        >
          <span style={{ height: 1, width: 64, background: SAGE_DEEP }} />
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: 999,
              background: SAGE_DEEP,
            }}
          />
          <span
            style={{
              height: 1,
              flex: 1,
              background: SAGE_DEEP,
              opacity: 0.35,
            }}
          />
        </div>

        {/* Wordmark: pep (pine) + tips (coral) + sage dot */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            marginTop: 70,
            lineHeight: 1,
          }}
        >
          <span
            style={{
              fontSize: 200,
              fontWeight: 600,
              color: PINE,
              letterSpacing: "-0.025em",
            }}
          >
            pep
          </span>
          <span
            style={{
              fontSize: 200,
              fontWeight: 600,
              color: CORAL,
              letterSpacing: "-0.025em",
            }}
          >
            tips
          </span>
          <span
            style={{
              width: 22,
              height: 22,
              borderRadius: 999,
              background: SAGE,
              marginLeft: 14,
              marginBottom: 32,
            }}
          />
        </div>

        {/* Tagline — italic serif, exact line from lib/content/site.ts */}
        <div
          style={{
            marginTop: 40,
            fontSize: 40,
            fontStyle: "italic",
            fontWeight: 400,
            color: PINE,
            lineHeight: 1.25,
            maxWidth: 960,
            letterSpacing: "-0.005em",
          }}
        >
          Real answers about life on a GLP-1, without the hype or the lectures.
        </div>

        {/* Spacer */}
        <div style={{ flex: 1, display: "flex" }} />

        {/* Bottom row: medical disclaimer (regulatory) */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 24,
            paddingTop: 28,
            borderTop: `1px solid ${CREAM_DEEP}`,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              fontFamily: "Inter, system-ui, sans-serif",
              fontSize: 16,
              color: STONE,
              fontStyle: "italic",
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: 999,
                background: SAGE_DEEP,
              }}
            />
            <span>Educational. Not medical advice.</span>
          </div>
          <div
            style={{
              display: "flex",
              fontFamily: "Inter, system-ui, sans-serif",
              fontSize: 14,
              fontWeight: 500,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: STONE,
            }}
          >
            Field Notes
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
