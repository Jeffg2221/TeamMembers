import React from 'react'
import { useContext } from 'react';
import DataContext from './context/DataContext';

const Teams = () => {
    const { handleTeamChange, selectedTeam } = useContext(DataContext);

  return (
            <select className='form-select form-select-lg' value={selectedTeam} onChange={handleTeamChange}>
                <option value='TeamA'> Team A </option>
                <option value='TeamB' > Team B </option>
                <option value='TeamC'> Team C </option>
                <option value='TeamD'> Team D </option>

            </select>
  )
}

export default Teams