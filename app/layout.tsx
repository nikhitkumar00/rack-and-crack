import type { Metadata } from "next";
import "@/app/globals.css";
import { cakra, turretRoad, cutoutCity } from "@/public/fonts";
import Copyright from "@/components/copyright";
import { Connect, SocialConnect } from "@/components/connect";

export const metadata: Metadata = {
  title: "Rack and Crack",
  description:
    "Rack and Crack conducted as a part of Tech Fest organized by Christ College of Engineering, Irinjalakuda",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logos/rack-and-crack.svg" />
        <link
          href="https://uploads-ssl.webflow.com/6408bea3de5aef58b7e197d4/css/diagramwf.webflow.c946343f1.min.css"
          rel="stylesheet"
        />
      </head>

      <body
        className={`${turretRoad.variable} ${cakra.variable} ${cutoutCity.variable} w-screen overflow-x-clip bg-dark antialiased`}
      >
        <div className="gradient-wrapper -mb-[5000px] h-fit">
          <div className="galaxy-background"></div>
          <div className="overflow-hidden">
            <div className="sectionHero bg-dark">
              {children}

              <footer>
                <Connect />
                <SocialConnect />
                <Copyright />
              </footer>

              <div className="solar-system"></div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
