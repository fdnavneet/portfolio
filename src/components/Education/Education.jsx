
import { education } from "../../constants";

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 px-6 md:px-12 lg:px-24 font-sans bg-skills-gradient relative"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4" />
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My education journey and academic background
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative max-w-4xl mx-auto">
        {/* Vertical Line */}
        <div className="absolute left-1/2 top-0 transform -translate-x-1/2 w-1 bg-white h-full"></div>

        {/* Education Entries */}
        {education.map((edu, index) => (
          <div
            key={edu.id}
            className={`flex flex-col sm:flex-row items-center mb-16 relative ${
              index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
            }`}
          >
           

            {/* Content Card */}
            <div
              className={`bg-gray-900 border border-white rounded-2xl shadow-2xl p-6 sm:max-w-sm w-full mt-12 sm:mt-0 transform transition-transform duration-300 hover:scale-105 ${
                index % 2 === 0 ? "sm:ml-12" : "sm:mr-12"
              }`}
            >
              {/* Card Logo */}
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">{edu.degree}</h3>
                  <h4 className="text-md text-gray-300">{edu.school}</h4>
                </div>
              </div>

              <p className="text-sm text-gray-500">{edu.date}</p>
              <p className="mt-2 text-gray-400 font-bold">Grade: {edu.grade}</p>
              <p className="mt-2 text-gray-400">{edu.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;













