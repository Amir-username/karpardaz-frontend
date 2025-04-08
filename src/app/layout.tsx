import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "کارپرداز",
  description: "پلتفرم استخدام و کاریابی",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </head>
      <body className="bg-gray-50 font-vazir">{children}</body>
    </html>
  );
}
