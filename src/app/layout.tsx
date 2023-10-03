import NavBar from "@/components/navbar/NavBar";
import Providers from "@/components/providers/Providers";
import { Toaster } from "@/components/ui/Toaster";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import { Inter } from "next/font/google";

export const metadata = {
  title: "Nextdit",
  description: "A Reddit clone built with Next.js and TypeScript.",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
  authModal,
}: {
  children: React.ReactNode;
  authModal: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn(
        "bg-white text-slate-900 antialiased light",
        inter.className
      )}
    >
      <body className="min-h-screen bg-slate-50 antialiased">
        <Providers>
          {/* @ts-expect-error server component */}
          <NavBar />

          {authModal}
          <div className="container max-w-7xl mx-auto h-full pt-16">
            {children}
          </div>
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
