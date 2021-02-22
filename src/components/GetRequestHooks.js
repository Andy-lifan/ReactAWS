import React, { useState, useEffect } from 'react';

function GetRequestHooks() {
    const [arrivalinfoData, setArrivalinfoData]= useState([]);

    useEffect(() => {
        // GET request using fetch inside useEffect React hook
    const response = fetch('https://n4b3cskro0.execute-api.us-east-2.amazonaws.com/production/arrivalinfo', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ remark:"5:00 PM", action: "Jogging" })   
    });
    const data = response.json();
    setArrivalinfoData(data);    
    }, []);

    return (
        <div className="Hotelinfo">
            <h2>Arrival Information for GetRequestHooks</h2>
            <ul>
            {
            arrivalinfoData.map( (arrival) => <li><strong>{arrival.action}</strong> {arrival.remark}</li> )                        
            }            
            </ul>
            </div>
    );
}

export default GetRequestHooks;