import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "João Ferraz — Desenvolvedor full-stack sênior";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Cores aproximadas dos tokens primary / chart do tema (light). */
const bg = "#f8fafc";
const fg = "#0f172a";
const accent = "#2d6a8a";
const muted = "#64748b";

export default function OpenGraphImage() {
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
          background: `linear-gradient(135deg, ${bg} 0%, #e8f4f8 45%, #dbeafe 100%)`,
          fontFamily:
            'ui-sans-serif, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: 999,
              background: accent,
            }}
          />
          <span
            style={{
              fontSize: 22,
              fontWeight: 600,
              letterSpacing: "-0.02em",
              color: fg,
            }}
          >
            JF<span style={{ color: accent }}>.</span>
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              fontSize: 64,
              fontWeight: 700,
              letterSpacing: "-0.04em",
              lineHeight: 1.05,
              color: fg,
            }}
          >
            João Ferraz
          </div>
          <div
            style={{
              fontSize: 30,
              fontWeight: 500,
              color: muted,
              maxWidth: 900,
              lineHeight: 1.35,
            }}
          >
            Desenvolvedor full-stack sênior · microsserviços, integrações e
            produto em escala
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 12,
            fontSize: 20,
            fontWeight: 500,
            color: accent,
          }}
        >
          <span>TypeScript</span>
          <span style={{ color: muted }}>·</span>
          <span>Vite</span>
          <span style={{ color: muted }}>·</span>
          <span>NestJS</span>
          <span style={{ color: muted }}>·</span>
          <span>React</span>
          <span style={{ color: muted }}>·</span>
          <span>.NET</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
