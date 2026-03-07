import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VAILIS.ai | AI Execution Partner",
  description: "We turn AI into business results. Execution partner for AI integration.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning>
      <body className="bg-white text-gray-900 antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
