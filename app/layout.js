import { Space_Grotesk, Sora } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "../components/LanguageProvider";
import ScrollToTopOnLoad from "../components/ScrollToTopOnLoad";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
});

export const metadata = {
  title: "Israa Chaabi | Futuristic Portfolio",
  description: "Portfolio futuriste d'Israa Chaabi, Full-Stack Developer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={`${spaceGrotesk.variable} ${sora.variable}`}>
        <LanguageProvider>{children}</LanguageProvider>
        <ScrollToTopOnLoad />
      </body>
    </html>
  );
}
