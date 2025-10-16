"use client";

import { useCallback } from "react";
import { ChatKitPanel, type FactAction } from "@/components/ChatKitPanel";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function App() {
  const { setScheme } = useColorScheme();

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
      className="flex min-h-screen flex-col"
      style={{
        backgroundColor: "#ffffff",
        color: "#1a1a1a",
      }}
    >
      {/* Navy top strip */}
      <div
        style={{
          backgroundColor: "#26315e",
          height: "16px",
          width: "100%",
        }}
      />

      {/* Chat Panel (no white box) */}
      <div style={{ flexGrow: 1 }}>
        <ChatKitPanel
          theme="light"
          onWidgetAction={handleWidgetAction}
          onResponseEnd={handleResponseEnd}
          onThemeRequest={setScheme}
        />
      </div>

      {/* Navy bottom strip */}
      <div
        style={{
          backgroundColor: "#26315e",
          height: "16px",
          width: "100%",
        }}
      />
    </main>
  );
}
