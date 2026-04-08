import type {Metadata} from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ThemeProvider } from '@/components/ThemeProvider';

import './globals.css';


// TYPOGRAPHY SYSTEM - Centralized font configuration
// Change fonts here to update across the entire app


export const metadata: Metadata = {
  title: 'Alpha Medi Lab - Accurate Diagnostics, Compassionate Care',
  description: 'Leading medical diagnostics laboratory providing accurate results and compassionate care.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
