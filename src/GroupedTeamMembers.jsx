import { useState } from 'react';

const GroupedTeamMembers = ({employees, selectedTeam, setTeam}) => {

  const [groupedEmployees, setGroupedData] = useState(groupTeamMembers());

  function groupTeamMembers() {
    let teams = [];
    let teamAMembers = employees.filter((employee) => employee === "teamA");
    let teamA ={team: "teamA", members: teamAMembers, collapse:  selectedTeam === "teamA"? false : true};
    teams.push(teamA);

    let teamBMembers = employees.filter((employee) => employee === "teamB");
    let teamB ={team: "teamB", members: teamBMembers, collapse:  selectedTeam === "teamB"? false : true};
    teams.push(teamB);

    let teamCMembers = employees.filter((employee) => employee === "teamC");
    let teamC ={team: "teamC", members: teamCMembers, collapse:  selectedTeam === "teamC"? false : true};
    teams.push(teamC);

    let teamDMembers = employees.filter((employee) => employee === "teamD");
    let teamD ={team: "teamD", members: teamDMembers, collapse:  selectedTeam === "teamA"? false : true};
    teams.push(teamD);

    return teams;
  }
  
  return (
    <header className="container">
      <div className="row justify-content-center mt-3 mb-4">
        <div className="col-8">
          <h1>Grouped Team Members</h1>
        </div>
      </div>
    </header>
  )
  
}
export default GroupedTeamMembers;