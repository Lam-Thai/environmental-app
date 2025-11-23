import { Nunito_Sans } from "next/font/google";
import "./globals.css";

const geistSans = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  weight: ["400", "700"],
});

const geistMono = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  weight: ["400", "700"],
});

export const metadata = {
  title: "Releaf",
  description: "An environmental app to help you live sustainably.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
