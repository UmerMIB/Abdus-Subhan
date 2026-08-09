import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Wrench, Sparkles, CheckCircle, Cpu } from 'lucide-react';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const skillsData = [
    {
      category: 'Frontend',
      icon: 'Code2',
      items: [
        { name: 'React.js', level: 85 },
        { name: 'Next.js', level: 80 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'HTML/CSS', level: 95 },
      ],
    },
    {
      category: 'Backend',
      icon: 'Database',
      items: [
        { name: 'Node.js', level: 70 },
        { name: 'MongoDB', level: 75 },
        { name: 'Prisma', level: 65 },
      ],
    },
    {
      category: 'Tools',
      icon: 'Wrench',
      items: [
        { name: 'Redux Toolkit', level: 75 },
        { name: 'Responsive Design', level: 90 },
        { name: 'Git & GitHub', level: 80 },
      ],
    },
  ];

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-5 h-5 text-[#38BDF8]" />;
      case 'Database':
        return <Database className="w-5 h-5 text-[#38BDF8]" />;
      case 'Wrench':
        return <Wrench className="w-5 h-5 text-[#38BDF8]" />;
      default:
        return <Cpu className="w-5 h-5 text-[#38BDF8]" />;
    }
  };

  const categories = ['All', ...skillsData.map((s) => s.category)];

  const filteredSkillCategories =
    selectedCategory === 'All'
      ? skillsData
      : skillsData.filter((s) => s.category === selectedCategory);

  return (
    <section className="py-20 bg-[#0D1117]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#38BDF8]/10 text-[#38BDF8] text-xs uppercase">
            <Sparkles className="w-4 h-4" />
            Core Skills
          </div>
          <h2 className="text-4xl font-bold text-white mt-4">
            Skills & Tech Stack
          </h2>
          <p className="text-[#9CA3AF] mt-2 max-w-xl mx-auto">
            Technologies I use to build fast, scalable, and modern web applications.
          </p>
        </div>

        {/* Filters */}
        <div className="flex justify-center flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-sm transition ${selectedCategory === cat
                  ? 'bg-[#38BDF8] text-black'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkillCategories.map((group, index) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 p-6 rounded-2xl border border-white/10"
            >
              {/* Title */}
              <div className="flex items-center gap-3 mb-6">
                {getCategoryIcon(group.icon)}
                <h3 className="text-white font-semibold">{group.category}</h3>
              </div>

              {/* Skills */}
              <div className="space-y-4">
                {group.items.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm text-white mb-1">
                      <span>{skill.name}</span>
                      <span className="text-gray-400">{skill.level}%</span>
                    </div>

                    <div className="w-full bg-white/10 h-2 rounded-full">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1 }}
                        className="bg-gradient-to-r from-[#38BDF8] to-[#6366F1] h-2 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};