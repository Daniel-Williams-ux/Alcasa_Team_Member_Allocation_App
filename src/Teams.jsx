const Teams = ({selectedTeam, handleTeamSelectionChange}) => {
  return (
    <select className="form-select form-select-lg" value={selectedTeam} onChange={handleTeamSelectionChange}>
            <option value="TeamA">TeamA: Architecture</option>
            <option value="TeamB">TeamB: Project Management</option>
            <option value="TeamC">TeamC: Engineering</option>
            <option value="TeamD">TeamD: Administration</option>
          </select>
  )
}
export default Teams;