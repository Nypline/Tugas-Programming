const Testimonials = () => {
  const reviews = [
    {
      name: "James Passaquindici Arcand",
      text: "ArchiWeb menghadirkan ruang tamu modern yang cocok dengan gaya hidup saya yang sibuk. Desainnya begitu elegan, fungsional, dan persis seperti yang saya impikan. Sangat direkomendasikan!",
      image:
        "https://i.pinimg.com/736x/d7/ac/c7/d7acc710d8001089244718e8869aa7d4.jpg",
    },
    {
      name: "Abram Schleifer",
      text: "Villa mewah saya adalah impian yang menjadi kenyataan, berkat ArchiWeb. Perhatian mereka pada detail dan kemampuan mewujudkan kemewahan sungguh luar biasa. Saya sangat puas dengan hasilnya!",
      image:
        "https://i.pinimg.com/736x/ff/2f/eb/ff2feb7c4ce96fa3176e569338a0f279.jpg",
    },
    {
      name: "Clara Smith",
      text: "Sebagai seseorang yang mengutamakan kenyamanan dan estetika, saya sangat bahagia dengan kamar tidur saya yang nyaman. ArchiWeb menciptakan ruang yang sempurna untuk bersantai dan menghasilkan konten. Luar biasa!",
      image:
        "https://i.pinimg.com/1200x/15/82/9d/15829d026839a7c399b361d1c9f5f838.jpg",
    },
  ];

  return (
    <section className="py-16 bg-gray-50" id="testimonials">
      <h2 className="text-3xl font-bold text-center mb-12">
        What Our Clients Say
      </h2>
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-white p-6 shadow-lg rounded-lg flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
          >
            <img
              src={review.image}
              alt={review.name}
              className="w-20 h-20 rounded-full mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold mb-2">{review.name}</h3>
            <p className="text-gray-600 leading-relaxed">{review.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
