"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import {
  FiMenu,
  FiX,
  FiHome,
  FiInfo,
  FiBriefcase,
  FiImage,
  FiMail,
  FiChevronDown,
} from "react-icons/fi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const pathname = usePathname();
  const servicesRef = useRef(null);
  const mobileMenuRef = useRef(null);

  // إغلاق القائمة عند تغيير المسار (للجوال)
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // تأثير التمرير + نسبة التقدم
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      const winHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      const scrollTop = window.pageYOffset;
      const trackLength = docHeight - winHeight;
      const progress = Math.floor((scrollTop / trackLength) * 100);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // إغلاق القوائم عند الضغط بره
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target)) {
        setServicesOpen(false);
      }
      if (menuOpen && mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  const navLinks = [
    { href: "/", label: "الرئيسية", icon: <FiHome className="ml-2" /> },
    { href: "#about", label: "من نحن", icon: <FiInfo className="ml-2" /> },
    {
      href: "#services",
      label: "الخدمات",
      icon: <FiBriefcase className="ml-2" />,
      submenu: [
        { href: "#flooring", label: "تركيب أرضيات رخام" },
        { href: "#walls", label: "تشطيب الجدران" },
        { href: "#stairs", label: "سلالم رخامية" },
        { href: "#kitchens", label: "مطابخ رخام" },
        { href: "#bathrooms", label: "حمامات رخام" },
      ],
    },
    { href: "#gallery", label: "المعرض", icon: <FiImage className="ml-2" /> },
    { href: "#contact", label: "تواصل", icon: <FiMail className="ml-2" /> },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
          scrolled
            ? "bg-gray-900/95 backdrop-blur-md py-2 shadow-2xl"
            : "bg-gradient-to-b from-gray-900/90 to-transparent py-4"
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* الشعار */}
          <Link href="/" className="flex items-center group relative">
            <div className="absolute -inset-3 bg-amber-600/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative flex items-center space-x-2 rtl:space-x-reverse">
              <div className="p-2 bg-gradient-to-r from-amber-500 to-amber-600 rounded-lg shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
                  />
                </svg>
              </div>
              <h1 className="text-xl md:text-2xl font-bold text-white">روائع الرخام</h1>
            </div>
          </Link>

          {/* قائمة سطح المكتب */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) =>
              link.submenu ? (
                <div key={link.href} ref={servicesRef} className="relative group">
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className={`px-4 py-2 rounded-lg transition-all duration-300 flex items-center group ${
                      pathname.startsWith("/services") || servicesOpen
                        ? "text-amber-400 bg-amber-950/30"
                        : "text-gray-200 hover:text-amber-300 hover:bg-gray-800/50"
                    }`}
                  >
                    {link.label}
                    <FiChevronDown
                      className={`ml-2 transition-transform duration-300 ${
                        servicesOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`absolute top-full right-0 mt-2 w-56 bg-gray-900/95 backdrop-blur-md rounded-xl shadow-2xl border border-gray-800 overflow-hidden transition-all duration-300 transform origin-top ${
                      servicesOpen
                        ? "scale-100 opacity-100"
                        : "scale-95 opacity-0 pointer-events-none"
                    }`}
                  >
                    {link.submenu.map((subItem) => (
                      <a
                        key={subItem.href}
                        href={subItem.href}
                        className="block px-4 py-3 text-gray-300 hover:bg-amber-500/10 hover:text-amber-400 transition-all duration-300 border-b border-gray-800 last:border-b-0"
                        onClick={() => setServicesOpen(false)}
                      >
                        {subItem.label}
                      </a>
                    ))}
                  </div>
                </div>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 rounded-lg transition-all duration-300 group flex items-center ${
                    pathname === link.href
                      ? "text-amber-400 bg-amber-950/30"
                      : "text-gray-200 hover:text-amber-300 hover:bg-gray-800/50"
                  }`}
                >
                  {link.label}
                  {link.icon}
                </a>
              )
            )}
          </div>

          {/* زر الجوال */}
          <button
            className={`md:hidden text-2xl p-2 rounded-lg transition-all duration-300 ${
              menuOpen
                ? "bg-amber-600 text-white rotate-90"
                : "bg-gray-800/50 text-gray-200 hover:bg-amber-600"
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "إغلاق القائمة" : "فتح القائمة"}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      {/* قائمة الجوال */}
      <div
        className={`fixed inset-0 bg-black/80 backdrop-blur-md md:hidden z-40 transition-opacity duration-500 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          ref={mobileMenuRef}
          className={`absolute top-0 right-0 h-full w-3/4 max-w-xs bg-gradient-to-b from-gray-900 to-gray-950 shadow-2xl border-l border-gray-800/50 transform transition-transform duration-500 ease-out ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-5 border-b border-gray-800 flex justify-between items-center bg-gray-900/50">
            <h2 className="text-xl font-bold text-amber-400">روائع الرخام</h2>
            <button
              onClick={() => setMenuOpen(false)}
              className="p-1.5 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-colors duration-300"
            >
              <FiX size={22} />
            </button>
          </div>

          <div className="flex flex-col p-4 space-y-3 h-[calc(100%-140px)] overflow-y-auto">
            {navLinks.map((link) =>
              link.submenu ? (
                <div key={link.href} className="border-b border-gray-800/50 pb-3">
                  <div className="font-medium text-amber-400 px-4 py-2 flex items-center">
                    <FiBriefcase className="ml-2" />
                    {link.label}
                  </div>
                  <div className="mt-2 pl-6 space-y-2">
                    {link.submenu.map((subItem) => (
                      <a
                        key={subItem.href}
                        href={subItem.href}
                        className="block py-2 text-gray-400 hover:text-amber-400 transition-colors duration-300 text-sm"
                        onClick={() => setMenuOpen(false)}
                      >
                        • {subItem.label}
                      </a>
                    ))}
                  </div>
                </div>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  className={`flex items-center p-4 rounded-xl transition-all duration-300 ${
                    pathname === link.href
                      ? "bg-amber-500/20 text-amber-400 border-r-4 border-amber-400"
                      : "text-gray-300 hover:bg-gray-800/50 hover:text-white"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  <span className="ml-3">{link.icon}</span>
                  {link.label}
                </a>
              )
            )}
          </div>
        </div>
      </div>

      {/* شريط التقدم */}
      <div className="fixed top-0 left-0 w-full h-1 z-50">
        <div
          className="h-full bg-gradient-to-r from-amber-500 to-amber-600 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>
    </>
  );
}
