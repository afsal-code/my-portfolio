import React, { useState } from 'react';

const Skill = () => {
  const [selectedSkill, setSelectedSkill] = useState("Frontend");

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
    <div className="ml-[100px] p-8 rounded-xl shadow-lg w-[600px] h-[400px] text-gray-200 bg-[#626f47]">
      <h2 className="text-3xl font-bold mb-6 border-b-4 border-green-600 inline-block pb-1">
        {title} Skills
      </h2>

      <ul className="space-y-6 mt-4">
        {skills.map((skill, index) => (
          <li key={index}>
            <div className="flex justify-between mb-1">
              <span className="text-lg font-medium">{skill.name}</span>
              <span className="text-sm font-semibold">{skill.level}%</span>
            </div>

            <div className="w-full bg-gray-400 h-4 rounded-full relative">
              <div
                className="bg-green-600 h-4 rounded-full"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div id='skills'>
      <div className='w-full h-screen bg-[#bdb395]'>
        <div className='relative flex inline-block top-[150px] pl-20'>
          <p className='text-7xl font-mediumbold'>
            Skill &<br /> Proficiencies
          </p>
        </div>

        <div className='flex mt-[250px] ml-[300px]'>
          <div className="grid grid-cols-2 gap-y-8 gap-x-8 justify-center items-center">
            <div>
              <button onClick={() => setSelectedSkill('Frontend')} className="border-2 border-green-900 h-[150px] w-[250px] hover:bg-green-800 transition">
                <i className="fa-solid fa-wand-magic-sparkles text-3xl flex flex-col mb-4"></i>Frontend
              </button>
            </div>

            <div>
              <button onClick={() => setSelectedSkill('Backend')} className="border-2 border-green-900 h-[150px] w-[250px] hover:bg-green-800 transition">
                <i className="fa-solid fa-server text-3xl flex flex-col mb-4"></i>Backend
              </button>
            </div>

            <div>
              <button onClick={() => setSelectedSkill('Tools')} className="border-2 border-green-900 h-[150px] w-[250px] hover:bg-green-800 transition">
                <i className="fa-solid fa-screwdriver-wrench text-3xl flex flex-col mb-4"></i>Tools
              </button>
            </div>

            <div>
              <button onClick={() => setSelectedSkill('SoftSkills')} className="border-2 border-green-900 h-[150px] w-[250px] hover:bg-green-800 transition">
                <i className="fa-solid fa-users text-3xl flex flex-col mb-4"></i>Soft Skills
              </button>
            </div>
          </div>

          {/* Conditional Skill Box Rendering */}
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
