import React from 'react'

class PoshRequestHooksb extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            arrivalinfoData: []
        };
    }

    async componentDidMount() {    
    const response =  await fetch('https://n4b3cskro0.execute-api.us-east-2.amazonaws.com/production/arrivalinfo', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ "remark":"5:00 PM", "action":"Jogging" })   
    });    
    const data = await response.json();
    this.setState({arrivalinfoData: data});
    } 
    
    render() {
        const {arrivalinfoData} = this.state;
    return (        
        <div className="Test">
            <h2>Arrival Information for Hooks</h2>
            <ul>
            {
            arrivalinfoData.map( (arrival) => <li><strong>{arrival.action}</strong> {arrival.remark}</li> )                        
            }            
            </ul>
            </div>
    );
}
}

export default PoshRequestHooksb;