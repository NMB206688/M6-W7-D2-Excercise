export default function MainLayout({ children }) {
  return (
    <div style={{ maxWidth: 800, margin: "0 auto", padding: 24 }}>
      {children}
    </div>
  );
}
