import type { Metadata } from "next";
import "./globals.css";
import { organizationSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "VAILIS | AI Execution Partner",
  description: "We turn AI into business results. Execution partner for AI integration.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body className="bg-white text-gray-900 antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
