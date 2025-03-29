import {Space_Grotesk} from "next/font/google";
import type {Metadata} from "next";
import "./globals.css";
import FluidCursor from "./Hooks/Fluidcursor";


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk", 
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} antialiased`}>
      
        {children}</body>
    </html>
  );
}
