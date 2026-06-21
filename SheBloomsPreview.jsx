export const metadata = {
  title: 'She Blooms — Find Yourself Again in 90 Days',
  description: 'A gentle 90-day reset for women who feel lost, overwhelmed, or disconnected from themselves.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
