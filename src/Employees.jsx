import { useState} from 'react';

const Employees = () => {

  const [employees, setEmployees] = useState([{id: 1,
    fullName: "Melvin Onyebueka",
    designation: "Director",
    gender: "male",
    teamName: "TeamA"
  },
  {
    id: 2,
    fullName: "Joshua Ray",
    designation: "Architect",
    gender: "Male",
    teamName: "TeamA"
  },
  {
    id: 3,
    fullName: "Gail Shepherd",
    designation: "Architect",
    gender: "female",
    teamName: "TeamA"
  },
  {
    id: 4,
    fullName: "Daniel Williams",
    designation: "Project Manager/Software Engineer",
    gender: "male",
    teamName: "TeamB"
  },
  {
    id: 5,
    fullName: "Jhibola",
    designation: "Supervisor",
    gender: "male",
    teamName: "TeamB"
  },
  {
    id: 6,
    fullName: "Sarah Blake",
    designation: "Associate",
    gender: "female",
    teamName: "TeamB"
  },
  {
    id: 7,
    fullName: "Sunday Cotonu",
    designation: "Member",
    gender: "male",
    teamName: "TeamC"
  },
  {
    id: 8,
    fullName: "Jessica Faye",
    designation: "Member",
    gender: "female",
    teamName: "TeamC"
  },
  {
    id: 9,
    fullName: "Lita Stone",
    designation: "Member",
    gender: "female",
    teamName: "TeamC"
  },
  {
    id: 10,
    fullName: "Daniel Young",
    designation: "Python Developer",
    gender: "male",
    teamName: "TeamD"
  },
  {
    id: 11,
    fullName: "Adrian Jacobs",
    designation: "Vue Developer",
    gender: "male",
    teamName: "TeamD"
  },
  {
    id: 12,
    fullName: "Devin Monroe",
    designation: "Graphic Designer",
    gender: "male",
    teamName: "TeamD"
  }]);
  
  return (
    <main>
      
    </main>
  )
  
}
export default Employees;