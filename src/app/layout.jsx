import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata = {
  title: "Shams | Dark Portfolio",
  description: "Dark-friendly portfolio page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white scroll-smooth">
        {/* Navbar */}
        <Navbar />

        {/* Main content */}
        <main className="relative z-10 min-h-screen">{children}</main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
