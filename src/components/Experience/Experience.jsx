



import experiences from "../../constants";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EXPERIENCE</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A collection of my work experience and the roles I have taken
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical Center Line */}
        <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 w-1 bg-white h-full"></div>

        {/* Experience Entries */}
        {experiences.map((exp, index) => (
          <div
            key={exp.id}
            className={`flex flex-col sm:flex-row items-center mb-16 relative
              ${index % 2 === 0 ? "sm:justify-end" : "sm:justify-start"}`}
          >
           

            {/* Content Card */}
            <div
              className={`w-full sm:max-w-md p-6 sm:p-8 bg-gray-900 border border-white rounded-2xl shadow-2xl backdrop-blur-md
              transform transition-transform duration-300 hover:scale-105 hover:shadow-purple-500/50
              ${index % 2 === 0 ? "sm:ml-0 sm:mr-44" : "sm:mr-0 sm:ml-44"} ml-8`}
            >
              <div className="flex items-center space-x-4">
                {/* Company Logo inside Card */}
                <div className="w-16 h-16 bg-white rounded-md overflow-hidden">
                  <img
                    src={exp.img}
                    alt={exp.company}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex flex-col">
                  <h3 className="text-xl sm:text-2xl font-semibold text-white">
                    {exp.role}
                  </h3>
                  <h4 className="text-sm text-gray-300">{exp.company}</h4>
                  <p className="text-xs text-gray-500 mt-1">{exp.date}</p>
                </div>
              </div>

              <p className="mt-4 text-gray-400">{exp.desc}</p>

              <div className="mt-4">
                <h5 className="text-white font-medium mb-2">Skills:</h5>
                <ul className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, i) => (
                    <li
                      key={i}
                      className="bg-purple-600 text-gray-200 px-3 py-1 text-xs sm:text-sm rounded-lg"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;


