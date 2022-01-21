import React from 'react';
import OutgoingCall from '../outgoing-call.svg';
import IncomingCall from '../incoming-call.svg';

const CallActivity = ({ activity }) => {
    console.log(activity.direction);
    return (
        <div className="activity">
            <div className="call">
                <div className="call-information">
                    <div className="call-direction">
                        {
                            activity.direction === 'inbound' && <img src={IncomingCall}></img>
                        }

                        {
                            activity.direction === 'outbound' && <img src={OutgoingCall}></img>
                        }
                    </div>
                    <div>
                        <p className="from-to">From {activity.from} to {activity.to}</p>
                        <p className="called-at">{new Date(activity.created_at).toLocaleString()}</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default CallActivity;