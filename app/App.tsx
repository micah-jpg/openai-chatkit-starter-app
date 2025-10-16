"use client";

import { useCallback } from "react";
import { ChatKitPanel, type FactAction } from "@/components/ChatKitPanel";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function App() {
  const { setScheme } = useColorScheme(); // we won’t need to read current scheme

  const handleWidgetAction = useCallback(async (action: FactAction) => {
    if (process.env.NODE_ENV !== "production") {
      console.info("[ChatKitPanel] widget action", action);
    }
  }, []);

  const handleResponseEnd = useCallback(() => {
    if (process.env.NODE_ENV !== "production") {
      console.debug("[ChatKitPanel] response end");
    }
  }, []);

  return (
    <main
      className="flex min-h-screen flex-col items-center justify-end"
      style={{
        backgroundColor: "#ffffff", // white background
        color: "#1a1a1a", // dark text
      }}
    >
      <div className="mx-auto w-full max-w-5xl">
        <ChatKitPanel
          theme={{
            background: "#ffffff",
            text: "#1a1a1a",
            accent: "#0071e3",
            accentForeground: "#ffffff",
          }}
          onWidgetAction={handleWidgetAction}
          onResponseEnd={handleResponseEnd}
          onThemeRequest={setScheme}
        />
      </div>
    </main>
  );
}
