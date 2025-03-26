import React from 'react';
import TeamMemberCard from "./component/TeamMemberCard"
import './App.css'

const App = () => {

  const teamData = [
    {"Name":"John Deo","Job":"Software Engineer"},
    {"Name":"Lakshmi Shankar","Job":"Developer"}
  ]

  return (
    teamData.map((item,index) => (
      <TeamMemberCard key={index} name={item.Name} job={item.Job} />
    ))
  );
}

export default App;
