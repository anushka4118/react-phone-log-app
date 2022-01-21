import React from 'react';
import CallActivity from './CallActivity.jsx';


const CallActivityList = ({ activities, onActivitySelected }) => {
    return (
        <ul className="ActivityList">
            {
                activities.map(activity => {
                    return <li key={activity.id} onClick={() => { onActivitySelected(activity) }}><CallActivity activity={activity} /></li>;
                })
            }
        </ul>
    )
}

export default CallActivityList;