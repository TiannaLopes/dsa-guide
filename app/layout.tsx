import type { Metadata } from "next";
import AnalyticsWrapper from "./AnalyticsWrapper"; 

export const metadata: Metadata = {
  title: "DSA Guide",
  description: "Learn Data Structures and Algorithms",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <AnalyticsWrapper>{children}</AnalyticsWrapper>
      </body>
    </html>
  );
}
