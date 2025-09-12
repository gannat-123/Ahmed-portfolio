import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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
    url: "https://your-domain.com",
    images: [
      {
        url: "https://your-domain.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "أحمد محمد - فني تركيب رخام",
      },
    ],
  },
  alternates: {
    canonical: "https://your-domain.com",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        {/* الكلمات المفتاحية */}
        <meta
          name="keywords"
          content="فني رخام, تركيب رخام, تشطيب رخام, رخام جرانيت, رخام مطابخ, رخام حمامات, سلالم رخام, تركيب رخام في مصر, أحمد محمد رخام"
        />

        {/* الأيقونة */}
        <link rel="icon" href="/favicon.ico" />

        {/* الرابط الأساسي (canonical) */}
        <link rel="canonical" href="https://your-domain.com" />
      </head>
      <body className="bg-gray-100 text-gray-800">
        <Navbar />
        <main className="min-h-screen p-6">{children}</main>
        <Footer />

        {/* Schema.org (بيانات منظمة) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "أحمد محمد - فني تركيب رخام",
              image: "https://your-domain.com/image1.jpg",
              telephone: "+201096061471",
              address: {
                "@type": "PostalAddress",
                addressCountry: "EG",
                addressRegion: "مصر",
                addressLocality: "القاهرة",
              },
              priceRange: "جيد ومناسب",
              description:
                "تركيب وتشطيب جميع أنواع الرخام والجرانيت في مصر للفلل والشقق.",
            }),
          }}
        />
      </body>
    </html>
  );
}