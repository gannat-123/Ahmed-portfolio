export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white pt-16 pb-8 px-4 mt-20 relative overflow-hidden">
      {/* عناصر زخرفية */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 to-amber-600"></div>
      <div className="absolute -top-10 left-1/4 w-32 h-32 bg-amber-500/5 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 right-1/3 w-40 h-40 bg-amber-600/5 rounded-full blur-xl"></div>
      
      <div className="container mx-auto relative z-10">
        {/* المحتوى الرئيسي */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* معلومات الشركة */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <span className="text-amber-400 mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                </svg>
              </span>
              روائع الرخام
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              نقدم خدمات تركيب وتشطيب الرخام بجودة عالية للفلل والشقق بمستوى راقي وفاخر. نحن نضمن لكم منتجاً نهائياً يتسم بالدقة والجمال والمتانة.
            </p>

            {/* أيقونات السوشيال */}
            <div className="flex space-x-4 rtl:space-x-reverse">
              {/* فيسبوك */}
              <a
                href="https://www.facebook.com/share/1A1kXZ6iTR/" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-lg hover:bg-blue-600 transition-colors duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>

              {/* واتساب */}
              <a
                href="https://wa.me/201096061471" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-lg hover:bg-green-600 transition-colors duration-300"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    d="M20.52 3.48A11.77 11.77 0 0 0 12 0C5.373 0 0 5.373 0 12c0 2.116.553 4.178 1.6 6L0 24l6-1.6A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12 0-3.18-1.24-6.175-3.48-8.52zM12 21.82c-1.93 0-3.797-.53-5.414-1.528l-.387-.234-3.56.95.95-3.56-.234-.387A9.82 9.82 0 0 1 2.18 12C2.18 6.94 6.94 2.18 12 2.18c2.618 0 5.077 1.02 6.928 2.872A9.78 9.78 0 0 1 21.82 12c0 5.06-4.76 9.82-9.82 9.82zm5.38-7.02c-.293-.147-1.733-.857-2-.953-.267-.097-.46-.147-.653.147-.193.293-.747.953-.92 1.147-.173.193-.34.22-.633.073-.293-.147-1.238-.457-2.36-1.457-.873-.777-1.46-1.737-1.633-2.03-.173-.293-.018-.45.13-.597.133-.133.293-.347.44-.52.147-.173.193-.293.293-.487.1-.193.05-.367-.027-.513-.073-.147-.653-1.58-.897-2.167-.237-.57-.48-.493-.653-.5l-.56-.01c-.193 0-.507.073-.773.367s-1.02.997-1.02 2.433 1.043 2.826 1.187 3.02c.147.193 2.05 3.127 4.967 4.387.693.3 1.233.48 1.653.613.693.22 1.327.187 1.827.113.557-.083 1.733-.707 1.98-1.387.247-.68.247-1.263.173-1.387-.073-.127-.267-.2-.56-.347z"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* روابط سريعة */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-amber-400">روابط سريعة</h4>
            <ul className="space-y-3">
              <li><a href="/" className="text-gray-400 hover:text-amber-400 transition-colors duration-300">الرئيسية</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-amber-400 transition-colors duration-300">من نحن</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-amber-400 transition-colors duration-300">الخدمات</a></li>
              <li><a href="#gallery" className="text-gray-400 hover:text-amber-400 transition-colors duration-300">المعرض</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-amber-400 transition-colors duration-300">اتصل بنا</a></li>
            </ul>
          </div>

          {/* معلومات الاتصال */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-amber-400">تواصل معنا</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-amber-500 mt-1 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <span className="text-gray-400">القاهرة، مصر</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-amber-500 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                <span className="text-gray-400">01096061471</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-amber-500 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span className="text-gray-400">الأحد - الخميس: 9ص - 5م</span>
              </li>
            </ul>
          </div>
        </div>

        {/* قسم حقوق النشر */}
        <div className="border-t border-gray-800 pt-8 mt-8 text-center">
          <p className="text-gray-500">
            © {new Date().getFullYear()} روائع الرخام. جميع الحقوق محفوظة | تركيب رخام فلل وشقق
          </p>
          <div className="flex justify-center mt-4 space-x-6 rtl:space-x-reverse text-sm text-gray-500">
            <a href="#" className="hover:text-amber-400 transition-colors duration-300">شروط الخدمة</a>
            <a href="#" className="hover:text-amber-400 transition-colors duration-300">سياسة الخصوصية</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
