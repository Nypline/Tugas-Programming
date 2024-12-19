

const About = () => {
  return (
    <section className="py-16 px-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
        <img
          src="https://images.bisnis.com/posts/2017/07/16/671942/img1sah.jpg"
          alt="About us"
          className="w-full md:w-1/2 rounded-lg shadow-lg"
        />
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="text-gray-600 leading-relaxed">
          At ArchiWeb, we are dedicated to transforming ideas into extraordinary spaces. With expertise in planning, interior, and exterior design, we blend creativity and functionality to deliver exceptional results. Our mission is to create homes and spaces that inspire, offering personalized solutions that cater to your lifestyle and vision.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
