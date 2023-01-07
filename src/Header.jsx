import React from 'react'
import { useContext } from 'react';
import DataContext from './context/DataContext';

const Header = () => {

    const { employees, selectedTeam } = useContext(DataContext);
    const teamMemberCount = employees.filter((employee) => employee.teamName === selectedTeam).length;

  return (
    <header className='container'>
        <div className='row justify-content-center mt-3 mb-4'>
      <h1 className='mt-4 p5 bg-primary text-white rounded'>Team Member Allocation</h1>
      <h3>{selectedTeam} has {teamMemberCount} {teamMemberCount === 1 ? 'member' : 'members'}</h3>
      </div>
    </header>
  )
}

export default Header
