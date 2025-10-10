import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The 2nd BEEU Challenge",
  description: "2nd International BEEU Challenge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>{children}</>
  );
}
