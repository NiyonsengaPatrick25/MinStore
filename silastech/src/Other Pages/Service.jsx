import React from "react";

const Service = () => {
  const services = [
    {
      title: "Web Development",
      desc: "We build responsive and modern websites using React and Tailwind.",
    },
    {
      title: "UI/UX Design",
      desc: "We design clean and user-friendly interfaces.",
    },
    {
      title: "System Development",
      desc: "We develop systems for schools, hospitals, and businesses.",
    },
  ];

  return (
    <div className="min-h-screen bg-white px-6 py-12">
      <h1 className="text-4xl font-bold text-center text-green-600 mb-10">
        Our Services
      </h1>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gray-100 p-6 rounded-2xl shadow hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold mb-3">
              {service.title}
            </h2>
            <p className="text-gray-600">{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;