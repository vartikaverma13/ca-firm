import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BookConsultationModal } from "@/components/BookConsultationModal";

export const metadata: Metadata = {
  title: {
    default: "Rohit Aggarwal & Company | Chartered Accountants & Financial Advisors",
    template: "%s | Rohit Aggarwal & Company",
  },
  description:
    "Rohit Aggarwal & Company is a premium Chartered Accountancy practice delivering end-to-end financial, tax, compliance, and advisory services to corporates, startups, and high-net-worth individuals.",
  keywords:
    "chartered accountant, CA firm, Rohit Aggarwal, tax consultant, GST advisory, audit, financial advisory, virtual CFO, startup advisory, Ghaziabad, Delhi NCR",
  openGraph: {
    title: "Rohit Aggarwal & Company | Chartered Accountants",
    description:
      "Premium CA practice delivering financial, tax, compliance, and advisory services. Trusted by 500+ clients with 98% retention.",
    type: "website",
    locale: "en_IN",
    siteName: "Rohit Aggarwal & Company",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <BookConsultationModal />
      </body>
    </html>
  );
}
