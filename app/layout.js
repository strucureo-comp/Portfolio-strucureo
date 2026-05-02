
import "./globals.css";

export const metadata = {
  title: "Strucureo Portfolios | Strucureo",
  description: "Digital Portfolio in web design, app design, and branding.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="body">
        {children}
      </body>
    </html>
  );
}
