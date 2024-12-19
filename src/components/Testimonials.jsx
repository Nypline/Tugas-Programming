

const Testimonials = () => {
  const reviews = [
    {
      name: "James Passaquindici Arcand",
      text: "I needed a modern living room that matched my busy lifestyle, and ArchiWeb delivered beyond my expectations. The design is sleek, functional, and exactly what I envisioned. Highly recommended!.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzr9uph9Hige96UHRV93yDK8rSFMRXwvy96Q&s", // Replace with actual image URLs
    },
    {
      name: "Abram Schleifer",
      text: "My luxurious villa is a dream come true, thanks to ArchiWeb. Their attention to detail and ability to bring opulence to life are unmatched. I'm thrilled with the result!",
      image: "https://i.pinimg.com/474x/98/51/1e/98511ee98a1930b8938e42caf0904d2d.jpg", // Replace with actual image URLs
    },
    {
      name: "Clara Smith",
      text: "As someone who values comfort and aesthetics, I couldn't be happier with my cozy bedroom. ArchWeb created a space that's perfect for relaxing and capturing content. They're incredible!",
      image: "https://imgcdn.stablediffusionweb.com/2024/6/12/4d688bcf-f53b-42b6-a98d-3254619f3b58.jpg", // Replace with actual image URLs
    },
  ];

  return (
    <section className="py-16 bg-gray-50" id="testimonials">
      <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
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
