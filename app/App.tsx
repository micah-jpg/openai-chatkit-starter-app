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
      className="flex min-h-screen flex-col items-center justify-center"
      style={{
        backgroundColor: "#ffffff",
        color: "#1a1a1a",
      }}
    >
      <div
        className="mx-auto w-full max-w-5xl flex-grow flex flex-col items-center justify-center rounded-xl overflow-hidden"
        style={{
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          backgroundColor: "#ffffff",
        }}
      >
        {/* Navy top strip */}
        <div
          style={{
            backgroundColor: "#26315e",
            height: "16px",
            width: "100%",
          }}
        ></div>

        {/* Chat panel */}
        <div
          style={{
            flexGrow: 1,
            width: "100%",
            backgroundColor: "#ffffff",
          }}
        >
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
        ></div>
      </div>
    </main>
  );
}
