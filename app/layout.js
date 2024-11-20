'use client';

import Header from './_components/Header';
import Footer from './_components/Footer';
import './globals.css';
import Script from 'next/script';  // Importing Script component for dynamic script loading

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Astro369 - Your source for daily horoscopes, astrology readings, and spiritual consultations." />
        <title>Astro369</title>

        {/* FontAwesome CSS */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        />
        
        {/* Google Fonts (Lato) */}
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap"
          rel="stylesheet"
        />

        {/* You can add additional meta tags for SEO here */}
      </head>
      <body>
        <Header />
        {children}  {/* Render dynamic content here */}
        <Footer />

        {/* Dynamically load the FontAwesome script after the page is interactive */}
        <Script
          strategy="afterInteractive"  // This ensures the script is loaded after the page is interactive
          src="https://kit.fontawesome.com/c521e77e5d.js"
          crossOrigin="anonymous"
        />
      </body>
    </html>
  );
}
