import '../styles/globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactWidget from '../components/ContactWidget';
import HireMeModal from '../components/HireMeModal';
import type { ReactNode } from 'react';

export const metadata = { title: 'Peter Rizk – Solution Architect' };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="container gap-6 flex">
          <aside className="sidebar">
            <Header />
          </aside>

          <div className="mainpanel">
            {children}
            <Footer />
          </div>
        </div>

        <ContactWidget />
        <HireMeModal />
      </body>
    </html>
  );
}
