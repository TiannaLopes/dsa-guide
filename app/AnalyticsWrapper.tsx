"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Script from "next/script";
import * as gtag from "../lib/gtag"; // Correct relative path

export default function AnalyticsWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    gtag.pageview(pathname);
  }, [pathname]);

  return (
    <>
      {/* Google Analytics Scripts */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      {children}
    </>
  );
}
