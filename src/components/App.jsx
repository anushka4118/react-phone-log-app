import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

import CallDetails from './Details.jsx';
import Header from './Header.jsx';
import CallActivityList from './CallActivityList.jsx';
import CallActivityDetails from './Details.jsx';
import AirCall from '../../util/Aircall';
import LeftArrow from '../left-arrow.svg';
import Pad from '../pad.svg';


const App = () => {
  const [activities, setActivities] = useState([]);
  const [currentActivity, setCurrentActivity] = useState(null);

  useEffect(() => {
    AirCall.getActivities()
    .then(activities => {
      setActivities(activities);
    })
  }, [])


  const handleActivitySelected = (activity) => {
    console.log(activity);
    setCurrentActivity(activity);
  };

  const handleOnBackClick = () => {
    setCurrentActivity(null);
  }

  return (
    <div className= 'container'>
      <div>
        <Header />
        <div className="container-header">
          {currentActivity ?
            <img src={LeftArrow} onClick={handleOnBackClick} /> :
            <div className="call-list"> <h2>Call Activity</h2> </div>
          }
        </div>
        <div className="container-view">
          {currentActivity ?
            <CallActivityDetails activity={currentActivity} /> :
            <div className="call-list"> <CallActivityList activities={activities} onActivitySelected={handleActivitySelected} /> </div>
          }
        </div>
      </div>
      <div className="phone-pad">
        <img src={Pad}></img>
      </div>
    </div>
  );
};


ReactDOM.render(<App />, document.getElementById('app'));

export default App;
