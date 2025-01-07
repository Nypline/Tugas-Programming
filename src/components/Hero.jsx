const Hero = () => {
  return (
    <section
      id="hero"
      className="h-screen bg-cover bg-center relative flex items-center"
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/736x/3f/28/8a/3f288a7f842d4ca6155faca9f726aeb2.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="relative text-white max-w-2xl px-6 md:px-12 py-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Best Solution For Your Home
        </h1>
        <p className="text-lg md:text-xl">
          Wujudkan ruang hunian impian Anda dengan sentuhan desain kreatif dan
          pengerjaan profesional. ArchiWeb menghadirkan kombinasi sempurna
          antara estetika dan fungsi, dirancang khusus untuk memenuhi kebutuhan
          hidup Anda. Temukan inspirasi baru dan solusi terbaik untuk
          menciptakan rumah ideal Anda.
        </p>
      </div>
    </section>
  );
};

export default Hero;
