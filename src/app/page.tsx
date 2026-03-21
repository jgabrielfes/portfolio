import type { Metadata } from "next";

import { LandingView } from "@/components/landing/landing-view";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return <LandingView />;
}
