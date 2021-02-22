import React, { useState, useEffect } from 'react';

function PoshRequestHooks() {
        const [putremarkData, setRemarkData] = useState(null);
        const [putactionData, setActionData] = useState(null);
    
        useEffect(() => {
            // POST request using fetch inside useEffect React hook
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ remark: "6:00 PM", action: "Jogging"})
            };
            fetch('https://n4b3cskro0.execute-api.us-east-2.amazonaws.com/production/arrivalinfopost', requestOptions)
                .then(response => response.json())
                .then(data => {setRemarkData(data.remark); setActionData(data.action)} );   
        
        }, []);
    
        return (
            <div className="info-test">
                <h5 className="card-header"> put request hooks with endpoint</h5>
                <div className="card-body">
                    PoshRequestHooks remark, action : {putremarkData} {putactionData}
                </div>
            </div>
        );
    }     

export default PoshRequestHooks;