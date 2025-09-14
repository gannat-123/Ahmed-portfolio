"use client";
import Gallery from "../components/Gallery";
import Head from "next/head";

export default function Home() {
  return (
    <div className="font-tajawal bg-gray-50">
      {/* Hero Section */}
       <Head>
        <title>أحمد محمد – فني تركيب وتشطيب رخام والجرانيت</title>
        <meta
          name="description"
          content="أحمد محمد، فني تركيب وتشطيب الرخام والجرانيت في القاهرة. خبرة أكثر من 18 سنة. تركيب أرضيات، واجهات، سلالم، مطابخ وحمامات، ديكورات وفواصل. اتصل الآن."
        />
        <meta
          name="keywords"
          content="أحمد محمد, فني رخام, تركيب رخام, تشطيب رخام, رخام القاهرة, رخام وجرانيت, سلالم رخام, مطابخ رخام, ديكورات رخام"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://ahmedportfolio-mu.vercel.app/" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="أحمد محمد – فني تركيب وتشطيب رخام والجرانيت"
        />
        <meta
          property="og:description"
          content="أحمد محمد، فني تركيب وتشطيب الرخام والجرانيت في القاهرة. خبرة أكثر من 18 سنة. اتصل الآن."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ahmedportfolio-mu.vercel.app/" />
        <meta property="og:image" content="/image1.jpg" />

        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "أحمد محمد",
              jobTitle: "فني تركيب وتشطيب رخام وجرانيت",
              url: "https://ahmedportfolio-mu.vercel.app/",
              sameAs: ["https://www.facebook.com/share/1A1kXZ6iTR/"],
            }),
          }}
        />
      </Head>

      <section id="home" className="h-screen flex flex-col items-center justify-center text-center bg-gradient-to-r from-gray-800 to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1615873968403-89e068629265?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80')] bg-cover bg-center opacity-30"></div>
        <div className="relative z-10 max-w-2xl px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-down">روائع الرخام</h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">تركيب وتشطيب جميع أنواع الرخام للفلل والشقق</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#services" className="px-8 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center">
              خدماتنا <i className="fas fa-arrow-down ml-2"></i>
            </a>
            <a href="#contact" className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center justify-center">
              تواصل معنا <i className="fas fa-phone ml-2"></i>
            </a>
          </div>
        </div>
        <div className="absolute bottom-10 animate-bounce">
          <i className="fas fa-chevron-down text-2xl text-amber-500"></i>
        </div>
      </section>
<section
  id="about"
  className="py-20 px-6 max-w-7xl mx-auto bg-gradient-to-b from-white to-gray-50"
>
  {/* العنوان */}
  <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-800 relative inline-block pb-3 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-24 after:h-1 after:bg-amber-500">
    من أنا
  </h2>

  <div className="grid md:grid-cols-2 gap-12 items-center">
    {/* الصورة */}
    <div className="flex flex-col items-center order-1 md:order-2">
      <img
        src="/image1.jpg"
        alt="أحمد محمد"
        className="w-64 h-78 object-cover rounded-xl shadow-xl border-4 border-amber-500"
      />
      <h3 className="mt-4 text-xl font-bold text-gray-800">أحمد محمد</h3>
      <p className="text-gray-600">فني تركيب وتشطيب رخام</p>
    </div>

    {/* النص */}
    <div className="text-gray-700 leading-relaxed order-2 md:order-1">
      <p className="text-lg md:text-xl mb-6">
        <i className="fas fa-quote-right text-amber-500 text-2xl mb-4 block"></i>
        أنا <span className="font-semibold text-gray-900">أحمد محمد</span>، أعمل
        في مجال <span className="font-semibold">تركيب وتشطيب الرخام</span> بخبرة
        تمتد لاكثر من 18 سنة ولدى ورشة ل تصنيع و تشطيب الرخام و الجرانيت المستورد و المصرى بالمنطقة الصناعية للرخام و الجرانيت  . طرة.القاهرة.&quot;شق الثعبان.&quot;
        
      </p>
      <p className="text-lg md:text-xl mb-6">
        أؤمن أن الرخام ليس مجرد مادة بناء، بل هو عنصر جمالي يضيف قيمة فريدة
        لأي مساحة. لذلك أحرص على اختيار الخامات بعناية واستخدام أحدث الأدوات
        والتقنيات لضمان نتيجة تليق بثقة عملائي.
      </p>

      {/* المميزات */}
      <div className="grid sm:grid-cols-2 gap-4 mt-6">
        <div className="flex items-center bg-white p-3 rounded-lg shadow-md">
          <div className="bg-amber-100 p-2 rounded-full mr-3">
            <i className="fas fa-award text-amber-600"></i>
          </div>
          <span>جودة عالية</span>
        </div>
        <div className="flex items-center bg-white p-3 rounded-lg shadow-md">
          <div className="bg-amber-100 p-2 rounded-full mr-3">
            <i className="fas fa-clock text-amber-600"></i>
          </div>
          <span>التزام بالمواعيد</span>
        </div>
        <div className="flex items-center bg-white p-3 rounded-lg shadow-md">
          <div className="bg-amber-100 p-2 rounded-full mr-3">
            <i className="fas fa-tools text-amber-600"></i>
          </div>
          <span>أحدث التقنيات</span>
        </div>
        <div className="flex items-center bg-white p-3 rounded-lg shadow-md">
          <div className="bg-amber-100 p-2 rounded-full mr-3">
            <i className="fas fa-users text-amber-600"></i>
          </div>
          <span>فريق دعم محترف</span>
        </div>
        <div className="flex items-center bg-white p-3 rounded-lg shadow-md">
          <div className="bg-amber-100 p-2 rounded-full mr-3">
            <i className="fas fa-handshake text-amber-600"></i>
          </div>
          <span>ثقة عملائي</span>
        </div>
        <div className="flex items-center bg-white p-3 rounded-lg shadow-md">
          <div className="bg-amber-100 p-2 rounded-full mr-3">
            <i className="fas fa-tags text-amber-600"></i>
          </div>
          <span>أسعار مناسبة</span>
        </div>
      </div>
    </div>
  </div>
</section>





 {/* Services Section */}
<section id="services" className="py-20 bg-gray-100 px-4">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-800 relative inline-block pb-2 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-32 after:h-1 after:bg-amber-500">
      خدماتي
    </h2>

    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {/* 1 */}
      <div className="bg-white p-8 rounded-2xl shadow-md flex flex-col items-center text-center hover:-translate-y-2 transition-all">
        <div className="bg-amber-100 p-4 rounded-full mb-4">
          <i className="fas fa-th-large text-2xl text-amber-600"></i>
        </div>
        <h3 className="text-xl font-bold mb-3">تركيب أرضيات رخام وجرانيت</h3>
        <p className="text-gray-600">أرضيات متينة وفاخرة تناسب جميع المساحات</p>
      </div>

      {/* 2 */}
      <div className="bg-white p-8 rounded-2xl shadow-md flex flex-col items-center text-center hover:-translate-y-2 transition-all">
        <div className="bg-amber-100 p-4 rounded-full mb-4">
          <i className="fas fa-building text-2xl text-amber-600"></i>
        </div>
        <h3 className="text-xl font-bold mb-3">تشطيب واجهات</h3>
        <p className="text-gray-600">تنفيذ واجهات رخامية وجرانيتية تضيف لمسة فاخرة للمباني</p>
      </div>

      {/* 3 */}
      <div className="bg-white p-8 rounded-2xl shadow-md flex flex-col items-center text-center hover:-translate-y-2 transition-all">
        <div className="bg-amber-100 p-4 rounded-full mb-4">
          <i className="fas fa-stairs text-2xl text-amber-600"></i>
        </div>
        <h3 className="text-xl font-bold mb-3">سلالم رخام وجرانيت</h3>
        <p className="text-gray-600">تصميمات عملية وفخمة للسلالم الداخلية والخارجية</p>
      </div>

      {/* 4 */}
      <div className="bg-white p-8 rounded-2xl shadow-md flex flex-col items-center text-center hover:-translate-y-2 transition-all">
        <div className="bg-amber-100 p-4 rounded-full mb-4">
          <i className="fas fa-bath text-2xl text-amber-600"></i>
        </div>
        <h3 className="text-xl font-bold mb-3">مطابخ وحمامات</h3>
        <p className="text-gray-600">تركيب رخام وجرانيت عالي الجودة للمطابخ والحمامات</p>
      </div>

      {/* 5 */}
      <div className="bg-white p-8 rounded-2xl shadow-md flex flex-col items-center text-center hover:-translate-y-2 transition-all">
        <div className="bg-amber-100 p-4 rounded-full mb-4">
          <i className="fas fa-columns text-2xl text-amber-600"></i>
        </div>
        <h3 className="text-xl font-bold mb-3">أعمدة وتكسية حوائط</h3>
        <p className="text-gray-600">تشطيب الأعمدة والجدران لتجعل المكان أكثر فخامة</p>
      </div>

      {/* 6 */}
      <div className="bg-white p-8 rounded-2xl shadow-md flex flex-col items-center text-center hover:-translate-y-2 transition-all">
        <div className="bg-amber-100 p-4 rounded-full mb-4">
          <i className="fas fa-gem text-2xl text-amber-600"></i>
        </div>
        <h3 className="text-xl font-bold mb-3">ديكورات وفواصل رخامية</h3>
        <p className="text-gray-600">تصميم وتنفيذ ديكورات مبتكرة باستخدام الرخام</p>
      </div>

      {/* 7 */}
      <div className="bg-white p-8 rounded-2xl shadow-md flex flex-col items-center text-center hover:-translate-y-2 transition-all">
        <div className="bg-amber-100 p-4 rounded-full mb-4">
          <i className="fas fa-sync-alt text-2xl text-amber-600"></i>
        </div>
        <h3 className="text-xl font-bold mb-3">تلميع وصيانة</h3>
        <p className="text-gray-600">خدمات تلميع وتجديد للرخام والجرانيت للحفاظ على لمعانه</p>
      </div>

      {/* 8 */}
      <div className="bg-white p-8 rounded-2xl shadow-md flex flex-col items-center text-center hover:-translate-y-2 transition-all">
        <div className="bg-amber-100 p-4 rounded-full mb-4">
          <i className="fas fa-tools text-2xl text-amber-600"></i>
        </div>
        <h3 className="text-xl font-bold mb-3">ترميم وإصلاح</h3>
        <p className="text-gray-600">معالجة الكسر والتشققات وإرجاع الرخام كالجديد</p>
      </div>

      {/* 9 */}
      <div className="bg-white p-8 rounded-2xl shadow-md flex flex-col items-center text-center hover:-translate-y-2 transition-all">
        <div className="bg-amber-100 p-4 rounded-full mb-4">
          <i className="fas fa-monument text-2xl text-amber-600"></i>
        </div>
        <h3 className="text-xl font-bold mb-3">تركيب مقابر رخامية</h3>
        <p className="text-gray-600">تصميم وتنفيذ مقابر بالرخام والجرانيت بأعلى جودة</p>
      </div>
    </div>
  </div>
</section>


      <Gallery />      {/* Contact Section */}
     <section id="contact" className="py-20 bg-gray-800 text-white">
  <div className="max-w-3xl mx-auto px-6 text-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-6 relative inline-block pb-2 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-24 after:h-1 after:bg-amber-500">
      تواصل معنا
    </h2>

    <p className="text-lg md:text-xl mb-10 text-gray-300 leading-relaxed">
      أنا هنا لخدمتك في جميع أعمال <span className="text-amber-400 font-semibold">الرخام والجرانيت</span>.  
      تقدر تتواصل معايا مباشرة على الواتساب لأي استفسار أو اتفاق.  
      خبرة طويلة وضمان أعلى جودة في التنفيذ ✨
    </p>

    {/* زرار واتساب */}
    <a
      href="https://wa.me/201096061471" // غير الرقم لرقم خالك
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center px-8 py-4 bg-green-500 text-white text-lg font-bold rounded-full shadow-lg hover:bg-green-600 transition-all duration-300"
    >
      <i className="fab fa-whatsapp text-2xl ml-3"></i>
      تواصل على واتساب
    </a>

    {/* رقم التليفون ظاهر تحت الزرار */}
    <p className="mt-6 text-amber-400 font-semibold text-xl">
      رقم الهاتف: 01096061471
    </p>
  </div>
</section>

      {/* Footer
      <footer className="py-8 bg-gray-900 text-white text-center">
        <div className="max-w-6xl mx-auto px-4">
          <p>© 2023 قصر الرخام. جميع الحقوق محفوظة</p>
          <div className="flex justify-center mt-4 space-x-4 space-x-reverse">
            <a href="#" className="text-gray-400 hover:text-amber-500 transition"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="text-gray-400 hover:text-amber-500 transition"><i className="fab fa-instagram"></i></a>
            <a href="#" className="text-gray-400 hover:text-amber-500 transition"><i className="fab fa-twitter"></i></a>
            <a href="#" className="text-gray-400 hover:text-amber-500 transition"><i className="fab fa-youtube"></i></a>
          </div>
        </div>
      </footer> */}

      {/* Styles */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Tajawal:wght@300;400;500;700;800&display=swap');
        
        .font-tajawal {
          font-family: 'Tajawal', sans-serif;
        }
        
        .animate-fade-in-down {
          animation: fadeInDown 1s ease-out;
        }
        
        .animate-bounce {
          animation: bounce 2s infinite;
        }
        
        @keyframes fadeInDown {
          0% {
            opacity: 0;
            transform: translateY(-20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-10px);
          }
          60% {
            transform: translateY(-5px);
          }
        }
      `}</style>
    </div>
  );
}