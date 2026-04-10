import React from "react";

const Contact = () => {
  const phone = "2507XXXXXXXX"; // replace with your number
  const email = "silastech@gmail.com";
  const instagram = "https://instagram.com/silastech";

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12 text-center">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">
        Contact Us
      </h1>

      <p className="text-gray-700 mb-10">
        Reach out to us through any of the platforms below
      </p>

      <div className="flex flex-col md:flex-row justify-center gap-6">
        
        {/* WhatsApp */}
        <a
          href={`https://wa.me/${phone}`}
          target="_blank"
          rel="noreferrer"
          className="bg-green-500 text-white px-6 py-3 rounded-xl shadow hover:bg-green-600 transition"
        >
          Chat on WhatsApp
        </a>

        {/* Email */}
        <a
          href={`mailto:${email}`}
          className="bg-blue-500 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-600 transition"
        >
          Send Email
        </a>

        {/* Instagram */}
        <a
          href={instagram}
          target="_blank"
          rel="noreferrer"
          className="bg-pink-500 text-white px-6 py-3 rounded-xl shadow hover:bg-pink-600 transition"
        >
          Visit Instagram
        </a>

      </div>
    </div>
  );
};

export default Contact;