import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Farel Nanda Setiawan | Portofolio Junior Programmer",
  description: "Web Portofolio Farel Nanda Setiawan, Seorang Junior Programmer Berbasis Di Surabaya",
  keywords: ['Farel Nanda', 'Farel Nanda Setiawan', 'Farel Nanda Portofolio', 'Programmer Surabaya', 'SMKN 2 Surabaya'],
  authors: [{name: "Farel Nanda Setiawan"}],
  icons: {
    icon: "/images/favicon.png",
  },
  verification: {
    google: "agROQ63Dl86d7ogJSvW5QOatzS1VTv9cNA0RIvJPuq4"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-darker text-lighter overflow-x-hidden">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
