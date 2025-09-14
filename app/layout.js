import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Analytics } from "@vercel/analytics/react"


export const metadata = {
  title: "أحمد محمد - فني تركيب وتشطيب رخام وجرانيت في مصر",
  description:
    "خدمات تركيب وتشطيب جميع أنواع الرخام والجرانيت للفلل والشقق في جميع محافظات مصر. خبرة طويلة وجودة عالية مع التزام بالمواعيد.",
  keywords: [
    "فني رخام",
    "تركيب رخام",
    "تشطيب رخام",
    "رخام جرانيت",
    "رخام مطابخ",
    "رخام حمامات",
    "سلالم رخام",
    "فني رخام مصر",
    "أحمد محمد رخام",
    "تركيب رخام في مصر",
  ],
  openGraph: {
    title: "أحمد محمد - فني تركيب وتشطيب رخام وجرانيت",
    description:
      "تركيب وتشطيب رخام لجميع المحافظات في مصر | جودة عالية وأسعار مناسبة",
    siteName: "روائع الرخام",
    locale: "ar_EG",
    type: "website",
    url: "https://ahmedportfolio-mu.vercel.app/",
    images: [
      {
        url: "https://ahmedportfolio-mu.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "أحمد محمد - فني تركيب رخام",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@ahmed_rk", // ضع حساب تويتر إذا موجود
    creator: "@ahmed_rk",
    title: "أحمد محمد - فني تركيب وتشطيب رخام وجرانيت",
    description:
      "خدمات تركيب وتشطيب جميع أنواع الرخام والجرانيت للفلل والشقق في جميع محافظات مصر.",
    images: ["https://ahmedportfolio-mu.vercel.app/og-image.jpg"],
  },
  alternates: {
    canonical: "https://ahmedportfolio-mu.vercel.app/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content={metadata.description}
        />
        <meta name="keywords" content={metadata.keywords.join(", ")} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={metadata.alternates.canonical} />

        {/* Google / Bing site verification */}
        <meta
          name="google-site-verification"
          content="pJ_p3OG2_oyzl9yhWK4HtkM4J547PFoYX5l268nUr9M"
        />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph */}
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:site_name" content={metadata.openGraph.siteName} />
        <meta property="og:locale" content={metadata.openGraph.locale} />
        {metadata.openGraph.images.map((img, idx) => (
          <meta key={idx} property="og:image" content={img.url} />
        ))}

        {/* Twitter Card */}
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:site" content={metadata.twitter.site} />
        <meta name="twitter:creator" content={metadata.twitter.creator} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        {metadata.twitter.images.map((img, idx) => (
          <meta key={idx} name="twitter:image" content={img} />
        ))}

        {/* Structured Data - Schema.org */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "أحمد محمد - فني تركيب رخام",
              image: "https://ahmedportfolio-mu.vercel.app/image1.jpg",
              telephone: "+201096061471",
              email: "info@ahmedportfolio-mu.vercel.app", // ضع ايميل صحيح لو موجود
              url: "https://ahmedportfolio-mu.vercel.app/",
              address: {
                "@type": "PostalAddress",
                addressCountry: "EG",
                addressRegion: "القاهرة",
                addressLocality: "القاهرة",
              },
              priceRange: "جيد ومناسب",
              description:
                "تركيب وتشطيب جميع أنواع الرخام والجرانيت في مصر للفلل والشقق.",
              sameAs: [
                "https://www.facebook.com/share/1A1kXZ6iTR/",
                "https://www.instagram.com/ahmed_rk/",
              ],
            }),
          }}
        />
      </head>
      <body className="bg-gray-100 text-gray-800">
        <Navbar />
        <main className="min-h-screen p-6">{children}</main>
                <Analytics />

        <Footer />
      </body>
    </html>
  );
}
