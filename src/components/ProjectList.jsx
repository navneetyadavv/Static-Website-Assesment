import React from 'react';
import p1 from '../../public/p1.jpg'
import p2 from '../../public/p2.jpg'
import p3 from '../../public/p3.jpg'
import p4 from '../../public/p4.jpg'
import l1 from '../../public/l1.svg'
import l2 from '../../public/l2.svg'
import l3 from '../../public/l3.svg'
import l4 from '../../public/l4.svg'
import l5 from '../../public/l5.svg'
import l6 from '../../public/l6.svg'


const ProjectList = () => {
  const projects = [
    {
      id: 1,
      name: 'Soft UI XD Version',
      icon: l1, 
      members: [
        p1,
        p2,
        p3,
        p4,
      ],
      budget: '$14,000',
      completion: 60,
      completionColor: 'bg-blue-500',
    },
    {
      id: 2,
      name: 'Add Progress Track',
      icon: l2, 
      members: [
        p1,
        p2,
      ],
      budget: '$3,000',
      completion: 10,
      completionColor: 'bg-blue-500',
    },
    {
      id: 3,
      name: 'Fix Platform Errors',
      icon: l3, 
      members: [
        p1,
        p2,
        p3,
      ],
      budget: 'Not set',
      completion: 100,
      completionColor: 'bg-green-500',
    },
    {
      id: 4,
      name: 'Launch our Mobile App',
      icon: l4,
      members: [
        p4,
      ],
      budget: '$20,500',
      completion: 100,
      completionColor: 'bg-green-500',
    },
    {
      id: 5,
      name: 'Add the New Pricing Page',
      icon: l5,
      members: [
        p1,
        p2,
        p3,
        p4,
      ],
      budget: '$500',
      completion: 25,
      completionColor: 'bg-blue-500',
    },
    {
      id: 6,
      name: 'Redesign New Online Shop',
      icon: l6,
      members: [
        p3,
        p4,
      ],
      budget: '$2,000',
      completion: 40,
      completionColor: 'bg-blue-500',
    },
  ];

  return (
    <div className='h-ful w-full'>
      <h3 className="text-xl font-semibold mb-4">Projects</h3>
      <p className="text-sm text-gray-500 mb-6">30 done this month</p>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px] table-auto">
          <thead>
            <tr className="text-left text-gray-500 uppercase text-sm">
              <th className="pb-2">Companies</th>
              <th className="pb-2">Members</th>
              <th className="pb-2">Budget</th>
              <th className="pb-2">Completion</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <tr key={project.id} className="border-t">
                <td className="py-4 flex items-center">
                  <img src={project.icon} alt="" className="w-9 h-9 mr-3" />
                  {project.name}
                </td>
                <td className="py-4">
                  <div className="flex">
                    {project.members.map((member, index) => (
                      <img
                        key={index}
                        src={member}
                        alt=""
                        className="w-8 h-8 rounded-full border-2 border-white -ml-3 first:ml-0"
                      />
                    ))}
                  </div>
                </td>
                <td className="py-4">{project.budget}</td>
                <td className="py-4">
                  <div className="relative w-full h-2 bg-gray-200 rounded-full">
                    <div
                      className={`absolute h-full ${project.completionColor} rounded-full`}
                      style={{ width: `${project.completion}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">{project.completion}%</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProjectList;
