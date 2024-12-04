import { Inter } from "next/font/google";
import "./globals.css";


export const metadata = {
  title: "Shreya Singh",
  description: "This is the portfolio for Shreya Singh, a researcher who has Family Demography, Labour markets, Income Inequality, Son Preference, Longitudinal Analyses, Causal Analyses as her research interests",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-bgPeach">{children}</body>
    </html>
  );
}
