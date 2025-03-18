import React from 'react';

const About = () => {
  return (
    <div id="about" className="w-full min-h-screen bg-[#0f1a17] px-6 md:px-12 py-10 text-white relative">
      <h2 className="absolute top-20 left-1/2 transform -translate-x-1/2 text-4xl font-bold text-green-500">
        About Me
      </h2>

      <div className="max-w-6xl mx-auto h-full flex flex-col md:flex-row items-start justify-center gap-12 pt-28 md:pt-32">
        <div className="md:w-1/2 space-y-6 bg-[#15231f] p-6 md:p-8 rounded-2xl shadow-md">
          <div className="space-y-4 text-lg leading-relaxed font-light font-mono text-gray-300">
            <p className="text-green-400 font-semibold">Hi, I’m Afsal — a passionate full-stack developer.</p>
            <p>I specialize in the MERN stack: MongoDB, Express, React, and Node.js.</p>
            <p>Experienced in creating fast, scalable, and responsive web applications.</p>
            <p>I focus on clean code, reusable components, and modern UI/UX design.</p>
            <p>Comfortable working with REST APIs, databases, and third-party integrations.</p>
            <p>Skilled in debugging, optimization, and performance tuning.</p>
            <p>Always learning, adapting, and pushing boundaries in web development.</p>
          </div>
        </div>

        <div className="md:w-1/2 space-y-8 mt-10 md:mt-20">
          <h2 className="text-4xl font-bold text-green-400 border-b-4 border-green-400 inline-block pb-1">
            Education & Experience
          </h2>

          <div className="relative border-l-4 border-green-400 pl-6 space-y-12">
            <div className="absolute w-4 h-4 bg-green-400 rounded-full left-[-10px] top-0"></div>

            <div className="bg-[#15231f] p-4 rounded-xl shadow-md">
              <h3 className="text-2xl font-semibold">🎓 B.E Computer Science</h3>
              <p className="text-green-300 font-mono">Anna University — 2021–2025</p>
              <p className="text-sm text-gray-300 font-light mt-1">
                Currently pursuing a degree in Engineering, focusing on software development and fundamentals.
              </p>
            </div>

            <div className="absolute w-4 h-4 bg-green-400 rounded-full left-[-10px] top-21"></div>

            <div className="bg-[#15231f] p-4 rounded-xl shadow-md">
              <h3 className="text-2xl font-semibold">💻 MERN Stack Intern</h3>
              <p className="text-green-300 font-mono">Softroniics Company — 2025</p>
              <p className="text-sm text-gray-300 font-light mt-1">
                Developed responsive full-stack applications. Collaborated to deliver clean, scalable code.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
