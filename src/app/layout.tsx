import "@/styles/globals.css";
import Header from "@components/Header";
import Footer from "@components/Footer";
import ContactWidget from "@components/ContactWidget";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 container mx-auto p-6">{children}</main>
        <Footer />
        <ContactWidget />
      </body>
    </html>
  );
}
