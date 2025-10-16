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
      className="flex min-h-screen flex-col items-center justify-between"
      style={{
        backgroundColor: "#26315e", // navy background (DoctorDisability navy)
        color: "#1a1a1a",
      }}
    >
      {/* Top navy bar */}
      <div
        style={{
          backgroundColor: "#26315e",
          height: "60px",
          width: "100%",
        }}
      ></div>

      {/* Chat area */}
      <div
        className="mx-auto w-full max-w-5xl flex-grow flex items-center justify-center"
        style={{
          backgroundColor: "#ffffff",
          borderRadius: "12px",
          padding: "1rem",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        }}
      >
        <ChatKitPanel
          theme="light"
          onWidgetAction={handleWidgetAction}
          onResponseEnd={handleResponseEnd}
          onThemeRequest={setScheme}
        />
      </div>

      {/* Bottom navy bar */}
      <div
        style={{
          backgroundColor: "#26315e",
          height: "60px",
          width: "100%",
        }}
      ></div>
    </main>
  );
}
