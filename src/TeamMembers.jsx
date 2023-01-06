import React from 'react'
import TeamMemberCard from './TeamMemberCard'

const TeamMembers = ({employees, handleEmployeeClick, selectedTeam}) => {
  return (
    employees.map((employee) =>(
        <TeamMemberCard  key={employee.id} employee={employee} handleEmployeeClick={handleEmployeeClick} selectedTeam={selectedTeam}/>
    ))
  )
}

export default TeamMembers