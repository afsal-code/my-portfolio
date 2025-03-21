import React, { useState, useRef, useEffect } from 'react';

const Skill = () => {
  const [selectedSkill, setSelectedSkill] = useState('Frontend');
  const [isSectionVisible, setIsSectionVisible] = useState(false);
  const [isTitleVisible, setIsTitleVisible] = useState(false);
  const sectionRef = useRef(null);
  const titleRef = useRef(null);

   useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      ([entry]) => setIsSectionVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );

    const titleObserver = new IntersectionObserver(
      ([entry]) => setIsTitleVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );

    if (sectionRef.current) sectionObserver.observe(sectionRef.current);
    if (titleRef.current) titleObserver.observe(titleRef.current);

    return () => {
      if (sectionRef.current) sectionObserver.unobserve(sectionRef.current);
      if (titleRef.current) titleObserver.unobserve(titleRef.current);
    };
  }, []);

  const frontendSkills = [
    { name: 'HTML/CSS', level: 89 },
    { name: 'JavaScript', level: 75 },
    { name: 'React', level: 70 },
  ];

  const backendSkills = [
    { name: 'Express', level: 29 },
    { name: 'MongoDB', level: 90 },
    { name: 'Node.js', level: 50 },
  ];

  const toolsSkills = [
    { name: 'Tailwind CSS', level: 90 },
    { name: 'Git', level: 95 },
    { name: 'Bootstrap', level: 80 },
  ];

  const softSkills = [
    { name: 'Communication', level: 70 },
    { name: 'Teamwork', level: 80 },
    { name: 'Problem Solving', level: 69 },
    { name: 'Adaptability', level: 86 },
  ];

  const renderSkillBox = (skills, title) => (
    <div
      className={`p-8 rounded-xl shadow-lg w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px] h-auto text-gray-200 bg-[#1b2a26] ml-0 lg:ml-[90px] mt-[-10px] transition-all duration-700 ease-in-out ${
        isSectionVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}
    >
      <h2 className="text-2xl md:text-3xl font-bold mb-6 border-b-4 border-green-600 inline-block pb-1">
        {title} Skills
      </h2>
      <ul className="space-y-6 mt-4">
        {skills.map((skill, index) => (
          <li key={index}>
            <div className="flex justify-between mb-1">
              <span className="text-base md:text-lg font-medium">{skill.name}</span>
              <span className="text-sm font-semibold">{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-700 h-3 md:h-4 rounded-full relative">
              <div
                className="bg-green-600 h-3 md:h-4 rounded-full"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div id="skills" ref={sectionRef} className="w-full min-h-screen bg-[#0f1a17] py-12 px-4">
      <div
        ref={titleRef}
        className={`text-left pl-8 md:pl-20 mb-12 mt-[40px] transform transition-all duration-1000 ease-in-out ${
          isTitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <p className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-200 leading-tight">
          Skill &<br className="hidden md:block" /> Proficiencies
        </p>
      </div>

      <div className="flex flex-col lg:flex-row justify-start items-start px-8 md:px-20 mt-[160px] gap-10 lg:ml-[200px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
          <button
            onClick={() => setSelectedSkill('Frontend')}
            className="border-2 border-green-600 h-[150px] w-[250px] hover:bg-green-800 bg-[#1a2c27] text-gray-200 transition rounded-lg flex flex-col justify-center items-center text-lg"
          >
            <i className="fa-solid fa-wand-magic-sparkles text-3xl mb-2"></i>
            Frontend
          </button>

          <button
            onClick={() => setSelectedSkill('Backend')}
            className="border-2 border-green-600 h-[150px] w-[250px] hover:bg-green-800 bg-[#1a2c27] text-gray-200 transition rounded-lg flex flex-col justify-center items-center text-lg"
          >
            <i className="fa-solid fa-server text-3xl mb-2"></i>
            Backend
          </button>

          <button
            onClick={() => setSelectedSkill('Tools')}
            className="border-2 border-green-600 h-[150px] w-[250px] hover:bg-green-800 bg-[#1a2c27] text-gray-200 transition rounded-lg flex flex-col justify-center items-center text-lg"
          >
            <i className="fa-solid fa-screwdriver-wrench text-3xl mb-2"></i>
            Tools
          </button>

          <button
            onClick={() => setSelectedSkill('SoftSkills')}
            className="border-2 border-green-600 h-[150px] w-[250px] hover:bg-green-800 bg-[#1a2c27] text-gray-200 transition rounded-lg flex flex-col justify-center items-center text-lg"
          >
            <i className="fa-solid fa-users text-3xl mb-2"></i>
            Soft Skills
          </button>
        </div>

        <div className="mt-8 lg:mt-0">
          {selectedSkill === 'Frontend' && renderSkillBox(frontendSkills, 'Frontend')}
          {selectedSkill === 'Backend' && renderSkillBox(backendSkills, 'Backend')}
          {selectedSkill === 'Tools' && renderSkillBox(toolsSkills, 'Tools')}
          {selectedSkill === 'SoftSkills' && renderSkillBox(softSkills, 'Soft')}
        </div>
      </div>
    </div>
  );
};

export default Skill;
