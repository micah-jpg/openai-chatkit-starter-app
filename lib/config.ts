import { ColorScheme, StartScreenPrompt, ThemeOption } from "@openai/chatkit";

export const WORKFLOW_ID =
  process.env.NEXT_PUBLIC_CHATKIT_WORKFLOW_ID?.trim() ?? "";

export const CREATE_SESSION_ENDPOINT = "/api/create-session";

export const STARTER_PROMPTS: StartScreenPrompt[] = [
  {
    label: "How do I get a quote?",
    prompt: "How do I get a quote?",
    icon: "circle-question",
  },
  {
    label: "Explain own-occupation coverage",
    prompt: "Explain own-occupation coverage",
    icon: "circle-question",
  },
  {
    label: "How much coverage do I need?",
    prompt: "How much coverage do I need?",
    icon: "circle-question",
  },
];


export const PLACEHOLDER_INPUT = "Ask anything...";

export const GREETING = "Hi there! Ready to explore your disability insurance options?";

export const getThemeConfig = (theme: ColorScheme): ThemeOption => ({
  color: {
    grayscale: {
      hue: 220,
      tint: 6,
      shade: theme === "dark" ? -1 : -4,
    },
    accent: {
      primary: theme === "dark" ? "#f1f5f9" : "#0f172a",
      level: 1,
    },
  },
  radius: "round",
  // Add other theme options here
  // chatkit.studio/playground to explore config options
  // 👇 ADD THIS PROPERTY AT THE END
  css: `
    [data-testid="thought"] {
      display: none !important;
    }
  `,
});
