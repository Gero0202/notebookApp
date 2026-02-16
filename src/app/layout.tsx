import type { Metadata } from "next";
import "./globals.css";
import RegisterSW from "./component/RegisterSW";
import NavBar from "./component/navigation/NavBar";


export const metadata: Metadata = {
  title: "Runbook",
  description: "Troubleshooting assistant",
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavBar/>
        <RegisterSW/>
        {children}
      </body>
    </html>
  );
}
