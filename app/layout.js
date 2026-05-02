
import "./globals.css";

export const metadata = {
  title: "Filip Legierski - Digital Designer | Strucureo",
  description: "Digital designer with 9+ years experience in web design, app design, and branding.",
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
