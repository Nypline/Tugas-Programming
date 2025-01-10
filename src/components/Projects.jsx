const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Ruang Tamu Minimalis",
      description:
        "Desain ruang tamu modern dengan furnitur minimalis yang elegan.",
      image:
        "https://i.pinimg.com/736x/3f/f6/12/3ff612b3accf0a3ef989e51f19f3a69f.jpg",
    },
    {
      id: 2,
      title: "Villa Mewah",
      description:
        "Villa dengan arsitektur megah dan sentuhan kemewahan di setiap sudutnya.",
      image:
        "https://i.pinimg.com/736x/90/dd/59/90dd59a64b7caac2d65f690558075827.jpg",
    },
    {
      id: 3,
      title: "Kamar Tidur Nyaman",
      description:
        "Kamar tidur yang hangat dan elegan dengan nuansa warna yang menenangkan.",
      image:
        "https://i.pinimg.com/736x/95/f0/a6/95f0a649e31f5e8df973ca4713306731.jpg",
    },
  ];

  return (
    <section className="py-16 bg-gray-100" id="projects">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Our Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
