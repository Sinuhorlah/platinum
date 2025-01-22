import React from 'react';
import kabir from '../../assets/founder.jpg';
import image from '../../assets/Images/hradmin.jpg';
import codebeast from '../../assets/Images/codebeast.jpg'
import London from '../../assets/Images/london.jpg'

import FlipCard from './FlipCard';

const TeamSection = () => {
  const teamMembers = [


    {
      frontImage: London,
     
      name: 'BABALOLA OLASUNMIBO',
      position: 'FOUNDER-MD/CEO',
      description: 'He has training in applied accounting, CNNA,and other managerial training in management in general. He has worked as a credit and debt recovery officer with two different microfiance banks for over 5years, he has also wrked as head of administration in a school for 5years and has also helped start up other oraganizations, such as oil and gas, water producing factory, etc. He is an enterpreneur who belived that his role is to provide leadership support for his eam and drive his team towards achieving the goals of the organization .',
      socialLinks: {
        facebook: "https://facebook.com/Babalolaolasunmibo",
        twitter: "https://twitter.com/Babalolaolasunmibo",
        instagram: "https://instagram.com/Babalolaolasunmibo",
        linkedin: "https://linkedin.com/in/Babaloloolasunmibo",
      },
    },
    {
      frontImage: kabir,
      
   
      name: 'Bakare Olarenwaju Oluwasegun',
      position: 'Co-Founder',
      description: 'He has his training in civil engineering and he lived and worked as a civil engineer in London, United Kingdom. He has been living in London for about 20 years. ',
      socialLinks: {
        facebook: "https://facebook.com/Oluwasegun Olanrewaju Bakare",
        twitter: "https://twitter.com/Oluwasegun Olanrewaju Bakare",
        instagram: "https://instagram.com/Oluwasegun Olanrewaju Bakare",
        linkedin: "https://www.linkedin.com/in/oluwasegun-bakare-9892b0239/",
      },
    },

    
    {
      frontImage: image,
     
      name: 'Okoh Vera',
      position: 'HR/ADMIN',
      description: 'Our head of human resources and administration. She has over five years experience',
      socialLinks: {
        facebook: "https://facebook.com/okoh vera",
        // twitter: "https://twitter.com/johndoe",
        instagram: "https://instagram.com/vee_cruz",
        // linkedin: "https://linkedin.com/in/johndoe",
      },
    },
    {
      frontImage: codebeast,
     
      name: 'Olalekan AbdulLateef. S',
      position: 'CHIEF TECNICAL OFFICER',
      description: 'is the head of ICT department and programmer. He has over 5years experience in app and website development',
      socialLinks: {
        facebook: "https://web.facebook.com/codebeast101",
        twitter: "https://twitter.com/Olatech101",
        instagram: "https://www.instagram.com/olatech101/",
        linkedin: "https://www.linkedin.com/in/sulaimon-olalekan-a-bb9794b5/",
      },
    },
    
    
  ];

  return (

     <section className="team-section bg-gray-100 py-16" id='team'>
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
        Meet Our <span className='text-blue-400'>Team</span> 
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-8">
        {teamMembers.map((member, index) => (
          <FlipCard key={index} {...member} />
        ))}
      </div>
    </section>

  );
};

export default TeamSection;