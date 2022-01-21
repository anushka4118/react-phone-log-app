const AirCall = { 
   
    getActivities() { 
        return fetch('https://aircall-job.herokuapp.com/activities').then((response) => {
        return response.json();
    });
}
};

export default AirCall;