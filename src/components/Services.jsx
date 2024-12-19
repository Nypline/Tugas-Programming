

const Services = () => {
  const services = [
    { name: "Planning", icon: "📐" },
    { name: "Interior", icon: "🏠" },
    { name: "Exterior", icon: "🌳" },
  ];

  return (
    <section className="py-16 bg-gray-50" id="services">
      <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-6 shadow-lg rounded-lg text-center hover:scale-105 transition-transform duration-300"
          >
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="text-2xl font-semibold">{service.name}</h3>
            <p className="text-gray-600 mt-2">Strategic and innovative architectural plans tailored to bring your vision to life</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
