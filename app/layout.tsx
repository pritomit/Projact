import type { Metadata, Viewport } from "next";
import "./globals.css";
export const metadata: Metadata = { title:"PRITOMX E-Commerce Elite 3D", description:"A futuristic 3D-inspired shopping storefront demo." };
export const viewport: Viewport = { themeColor:"#07070B", width:"device-width", initialScale:1 };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="en"><body>{children}</body></html>; }
