export default function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#050505",
        color: "#E2E1DF",
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ textAlign: "center", maxWidth: 600 }}>
        <h1 style={{ letterSpacing: "0.3em", fontSize: 12, textTransform: "uppercase" }}>
          sprnt / 25
        </h1>
        <h2 style={{ fontSize: 32, marginTop: 16, lineHeight: 1.1 }}>
          25 — global transport to and from Africa.
        </h2>
        <p style={{ marginTop: 16, fontSize: 14, opacity: 0.8 }}>
          This is the React rebuild of the 25 product. You&apos;re seeing it via Vite + Netlify.
        </p>
      </div>
    </div>
  );
}
