import { Suspense } from "react";
import "./globals.css";
import RouteScrollToTop from "@/masterLayout/RouteScrollToTop";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Suspense fallback={<loading />}>
          <RouteScrollToTop />
          {children}
        </Suspense>
      </body>
    </html>
  );
}
