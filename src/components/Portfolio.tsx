
const Portfolio = () => {
  const projects = [
    {
      title: 'Giogioxii.com',
      description: 'Sito web per content creator gaming con design moderno e community digitale',
      image: '/lovable-uploads/e48f6d34-36da-48df-937b-a7c72334c9d0.png',
      tags: ['Gaming', 'Content Creator', 'Community'],
      url: 'https://giogioxii.com'
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-nexivo-dark mb-6">
            Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Un esempio del mio lavoro
          </p>
        </div>
        
        <div className="flex justify-center">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group cursor-pointer animate-scale-in max-w-md"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg hover-lift">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-nexivo-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-200 text-sm">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <h3 className="text-xl font-bold text-nexivo-dark mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 bg-nexivo-blue/10 text-nexivo-blue rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
