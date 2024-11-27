import type { Metadata } from "next";
import "../globals.css";
import { dir } from 'i18next'
import Header from "@/components/ui/header";
import TranslationsProvider from "@/components/TranslationsProvider";
import { Inter } from "next/font/google";
import { notFound } from 'next/navigation';
import i18nConfig from "../../../i18nConfig";
import initTranslations from "../i18n";
import { ToastContainer } from 'react-toastify';
import NextTopLoader from 'nextjs-toploader';
import 'react-toastify/dist/ReactToastify.css';
import Footer from "@/components/ui/footer";
import favicon from "../../public/favicon.ico"
export const metadata: Metadata = {
  title: " Министерство юстиции Республики Узбекистан",
  description: "Министерство юстиции Республики Узбекистан",

};

const inter = Inter({ subsets: ["latin"] });
export  function generateStaticParams() {
  return i18nConfig.locales.map(locale => ({ locale }));
}

const i18nNamespaces = ['home'];

export default async function RootLayout({
  children,
  params: { locale }
}: Readonly<{
  children: React.ReactNode;
  params:any
}>) {
  if (!i18nConfig.locales.includes(locale)) {
    notFound();
  }


  const { resources } = await initTranslations(locale, i18nNamespaces)
  return (
    <html lang={locale} dir={dir(locale)}>
      <body className="bg-[#fff] dark:bg-[#00132D] dark:text-[#FFFFFF]">
      <head >
          <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"></meta>
      </head>
    <NextTopLoader
      color="#2299DD"
      initialPosition={0.08}
      crawlSpeed={200}
      height={3}
      crawl={true}
      showSpinner={true}
      easing="ease"
      speed={200}
      shadow="0 0 10px #2299DD,0 0 5px #2299DD"
      />
      <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}>
        <Header/>
          {children}
        <Footer/>
    </TranslationsProvider>
      <ToastContainer/>
    </body>
  </html>
  );
}



