import React from 'react';
import IncomingCall from '../incoming-call.svg';
import OutgoingCall from '../outgoing-call.svg'

const CallActivityDetails = ({activity}) => {
    return (
        <div className= "details">
            <h2>Call Details</h2>
            <div className="call-details">
                <div className="call-direction">
                    {
                        activity.direction === 'inbound' && <img src={IncomingCall}></img>
                    }

                    {
                        activity.direction === 'outbound' && <img src={OutgoingCall}></img>
                    }
                </div>
                <div className= "call-information">
                    <p className="from-to">From {activity.from} to {activity.to}</p>
                    <p className="created-at"> {new Date(activity.created_at).toLocaleString()} </p>
                    <p className="type-duration"> {activity.call_type} {activity.duration}s</p>
                </div>
            </div>
        </div>
    )
}

export default CallActivityDetails;