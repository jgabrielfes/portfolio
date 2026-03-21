import { afterEach, describe, expect, it } from "vitest";

import { getSiteUrl } from "./site";

const ENV_KEYS = [
  "NEXT_PUBLIC_SITE_URL",
  "VERCEL_PROJECT_PRODUCTION_URL",
  "VERCEL_URL",
] as const;

describe("getSiteUrl", () => {
  afterEach(() => {
    for (const key of ENV_KEYS) {
      delete process.env[key];
    }
  });

  it("prioriza NEXT_PUBLIC_SITE_URL e normaliza barra final", () => {
    process.env.NEXT_PUBLIC_SITE_URL = "https://exemplo.com/";
    expect(getSiteUrl().href).toBe("https://exemplo.com/");
  });

  it("usa VERCEL_PROJECT_PRODUCTION_URL sem protocolo na env", () => {
    process.env.VERCEL_PROJECT_PRODUCTION_URL = "meuapp.vercel.app";
    expect(getSiteUrl().origin).toBe("https://meuapp.vercel.app");
  });

  it("usa VERCEL_URL quando não há URL explícita nem produção", () => {
    process.env.VERCEL_URL = "preview-abc.vercel.app";
    expect(getSiteUrl().href).toBe("https://preview-abc.vercel.app/");
  });

  it("em desenvolvimento local cai em localhost", () => {
    expect(getSiteUrl().href).toBe("http://localhost:3000/");
  });
});
