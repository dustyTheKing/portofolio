import { Plus_Jakarta_Sans } from "next/font/google";
import Head from "next/head";

import Header from "../components/Header";
import Nav from "../components/Nav";

// Setup font utama (Plus Jakarta Sans)
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const Layout = ({ children }) => {
  const pageTitle = "Teuku Muhammad Dista | Full-Stack Developer";
  const pageDescription =
    "Teuku Muhammad Dista is a Full-Stack Web Developer with 3+ years of experience building modern, scalable, and intuitive web applications.";

  return (
    <main
      className={`page bg-site text-white bg-cover bg-no-repeat ${jakarta.variable} font-sans relative overflow-x-hidden`}
    >
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta
          name="keywords"
          content="Teuku Muhammad Dista, Full Stack Developer, Software Engineer, React, Next.js, JavaScript, Web Developer Portfolio"
        />
        <meta name="author" content="Teuku Muhammad Dista" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#131424" />

        {/* Open Graph / Social Media Preview */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content="/og-image.png" />

        {/* Favicons */}
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
      </Head>

      <Nav />
      <Header />

      {/* Main Content */}
      <div className="w-full h-full">{children}</div>
    </main>
  );
};

export default Layout;