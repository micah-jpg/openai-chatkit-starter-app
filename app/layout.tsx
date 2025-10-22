import Script from "next/script";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AgentKit demo",
  description: "Demo of ChatKit with hosted workflow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isInIframe =
    typeof window !== "undefined" && window.self !== window.top;

  return (
    <html lang="en" data-color-scheme="light">
      <head>
        <meta name="robots" content="noindex, nofollow" />

        {/* ✅ Only load chatkit.js when inside an iframe (isolated app) */}
        {typeof window === "undefined" ? null : isInIframe ? (
          <Script
            src="https://cdn.platform.openai.com/deployments/chatkit/chatkit.js"
            strategy="beforeInteractive"
          />
        ) : null}
      </head>

      <body
        className="antialiased"
        style={{
          backgroundColor: "var(--background)",
          color: "var(--foreground)",
        }}
      >
        {children}
      </body>
    </html>
  );
}
