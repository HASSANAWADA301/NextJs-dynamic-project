"use client";

import React from "react";
import { useTranslation } from "react-i18next";

type ContactUsProps = {
  content: {
    title: string;
    highlight: string;
  };
};

const ContactUs: React.FC<ContactUsProps> = ({ content }) => {
  const { i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  return (
    <section
      dir={isRTL ? "rtl" : "ltr"}
      className="py-16 px-4 text-center bg-gray-100 mt-[150px]"
    >
      <h2 className="text-4xl font-bold mb-4">
        {content.title}{" "}
        <span className="text-blue-600">{content.highlight}</span>
      </h2>
      <p className="text-gray-600 max-w-xl mx-auto">
        {/* Optional: Additional text here */}
        We'd love to hear from you. Reach out using the form below or via our contact details.
      </p>
      <form className="mt-8 max-w-xl mx-auto grid gap-4">
        <input
          type="text"
          placeholder={isRTL ? "الاسم الكامل" : "Full Name"}
          className="p-3 border rounded"
        />
        <input
          type="email"
          placeholder={isRTL ? "البريد الإلكتروني" : "Email"}
          className="p-3 border rounded"
        />
        <textarea
          rows={4}
          placeholder={isRTL ? "اكتب رسالتك هنا" : "Your message"}
          className="p-3 border rounded"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 transition"
        >
          {isRTL ? "إرسال" : "Send"}
        </button>
      </form>
    </section>
  );
};

export default ContactUs;
