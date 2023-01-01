import './App.css'
import Header from './Header';
import Employees from './Employees';
import Footer from './Footer';
import { useState, useEffect } from 'react';

function App() {
  
  
  const [selectedTeam, setSelectedTeam] = useState('TeamA');

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
    designation: "Project Manager",
    gender: "male",
    teamName: "TeamB"
  },
  {
    id: 5,
    fullName: "Abdulsalam Jhibola",
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
    fullName: "Sunday Loquo",
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

  useEffect(() => {
    localStorage.setItem("employeeList", JSON.stringify(employees))
  },[employees])

  useEffect(() => {
    localStorage.setItem("selectedTeam", JSON.stringify(selectedTeam))
  },[selectedTeam])

  function handleTeamSelectionChange(event) {
    console.log(event.target.value);
    setSelectedTeam(event.target.value);
  }

  function handleEmployeeCardClick(event) {
    const transformedEmployees = employees.map((employee) => employee.id === parseInt(event.currentTarget.id)
      ? (employee.teamName === selectedTeam) ? {...employee, teamName: ''} : {...employee, teamName: selectedTeam} :employee);

    setEmployees(transformedEmployees);
  }
  
  return (
    <div>
      <Header selectedTeam={selectedTeam}
              teamMemberCount={employees.filter((employee) => employee.teamName === selectedTeam).length}/>
      <Employees employees={employees}
        selectedTeam={selectedTeam}
        handleEmployeeCardClick={handleEmployeeCardClick}
         handleTeamSelectionChange={ handleTeamSelectionChange}/>
      <Footer />
    </div>
  )
}

export default App;