import "./chatkit.css";

export const metadata = {
  title: "Doctor Disability Chat",
};

export default function ChatLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          padding: 0,
          background: "#ffffff",
          overflow: "hidden",
        }}
      >
        {children}
      </body>
    </html>
  );
}
