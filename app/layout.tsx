import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import { ClerkProvider, RedirectToSignIn, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/providers/theme-provider";

const font = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Discord Clone",
  description: "Fully working copy of Discord using Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={font.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={false}
            storageKey="discord-theme"
            >
          <SignedOut>
            <RedirectToSignIn />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
          {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
