import React from 'react';

const TeamMemberCard = ({ key,name,job }) => {
    return (
        <div key={key} className='mainBox'>
            <div className='teamCard'>
                <h4>Team member's name: {name}</h4>
                <h6>Job title: {job}</h6>
            </div>
        </div>
    );
}

export default TeamMemberCard;
