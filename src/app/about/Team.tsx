import React from 'react'
const teamMembers = [
  {
    id: 1,
    name: "Anurag Dalmia",
    role: "Founder",

img:"https://plus.unsplash.com/premium_photo-1664203067979-47448934fd97?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW4lMjBmYWNlfGVufDB8fDB8fHww"   
    },
  {
    id: 2,
    name: "Dr Ashwani Garg",
    role: "Clinical Head & Co-Founder",
    img:"https://plus.unsplash.com/premium_photo-1664203067979-47448934fd97?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW4lMjBmYWNlfGVufDB8fDB8fHww"    
},
  {
    id: 3,
    name: "Dr R R Thangadurai",
    role: "Clinical & Research Head & Co-Founder",
    img:"https://plus.unsplash.com/premium_photo-1664203067979-47448934fd97?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW4lMjBmYWNlfGVufDB8fDB8fHww"    
},
  {
    id: 4,
    name: "Simran Gosain",
    role: "Allied Functional Medicine Practitioner & Coach",
    img:"https://plus.unsplash.com/premium_photo-1664203067979-47448934fd97?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW4lMjBmYWNlfGVufDB8fDB8fHww"    
},
  {
    id: 5,
    name: "Dr Ranjitha L",
    role: "Functional Medicine Clinician",
    img:"https://plus.unsplash.com/premium_photo-1664203067979-47448934fd97?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW4lMjBmYWNlfGVufDB8fDB8fHww"    
},
  {
    id: 6,
    name: "Dr Harshad Inamdar",
    role: "Functional Medicine Clinician",
    img:"https://plus.unsplash.com/premium_photo-1664203067979-47448934fd97?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW4lMjBmYWNlfGVufDB8fDB8fHww"    
},
  {
    id: 7,
    name: "Lalita Tiwari",
    role: "Movement, Relaxation, Meditation Expert",
    img:"https://plus.unsplash.com/premium_photo-1664203067979-47448934fd97?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW4lMjBmYWNlfGVufDB8fDB8fHww"    
},
  {
    id: 8,
    name: "Girija SP",
    role: "Movement, Relaxation, Meditation Expert",
    img:"https://plus.unsplash.com/premium_photo-1664203067979-47448934fd97?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW4lMjBmYWNlfGVufDB8fDB8fHww"    
},
  {
    id: 9,
    name: "Siddarth Goel",
    role: "Functional Medicine Health Coach, Classical Hatha Yoga Teacher",
    img:"https://plus.unsplash.com/premium_photo-1664203067979-47448934fd97?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW4lMjBmYWNlfGVufDB8fDB8fHww"    
},
];

const Team = () => {
  return (
    <div className='bg-[#f6f8f9] p-20'>
      <div className='text-3xl font-bold text-center'>
        An integrative team of experts
</div>
<p className="text-center w-auto p-10 ">
    Team Wellfinity comprises of an integrative team of experts from various disciplines of
science and medicine and some of us even outside the industry.
</p>
<div className='mx-auto w-full max-w-3xl p-7    grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
    {teamMembers.map((member) => (
  <div key={member.id} className="text-center p-4 ">
    <img
      src={member.img}
      alt={member.name}
      className="mx-auto h-20 w-20 rounded-full object-cover"
    />
    <h3 className="mt-4 font-semibold">{member.name}</h3>
    <p className="text-sm text-gray-600">{member.role}</p>
  </div>
))}
</div>


    </div>
  )
}

export default Team
