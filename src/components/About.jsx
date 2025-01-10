const About = () => {
  return (
    <section className="py-16 px-6">
      <div
        className="container mx-auto flex flex-col md:flex-row items-center gap-8"
        id="about"
      >
        <img
          src="https://i.pinimg.com/736x/6e/48/83/6e488361d07c19e8ae2b885afce6ba4f.jpg"
          alt="About us"
          className="w-full md:w-1/2 rounded-lg shadow-lg"
        />
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="text-gray-600 leading-relaxed">
            Di ArchiWeb, kami berkomitmen untuk mengubah ide menjadi ruang yang
            luar biasa. Dengan keahlian dalam perencanaan, desain interior, dan
            eksterior, kami memadukan kreativitas dan fungsionalitas untuk
            menghadirkan hasil yang istimewa. Misi kami adalah menciptakan rumah
            dan ruang yang menginspirasi, dengan solusi personal yang sesuai
            dengan gaya hidup dan visi Anda.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
