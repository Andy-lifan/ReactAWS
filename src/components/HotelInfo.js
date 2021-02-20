import React, { useState, useEffect } from 'react';
//import servicesData from './data/services.json';
//import accessibilitiesData from './data/accessibilities.json';
//import arrivalinfoData from './data/arrivalinfo.json';


const HotelInfo = () => {

  const [arrivalinfoData, setArrivalinfoData] = useState([]) 
  //arrivalinfoData is a state variable, setArrivalinfoDta is a function
  const loadArrivalinfoData = async() => {
    //Query the API gateway
    const response = await fetch('https://n4b3cskro0.execute-api.us-east-2.amazonaws.com/production/arrivalinfo', 
    // { method:'POST', headers: {'Content-Type': 'application/json'},body:JSON.stringify({"action": "Tutorial:", "remark":"5:00 PM"})})
    // .then(data => {console.log(data);});
    { method: 'GET'});     
    let jsonData = await response.json();
    //Assign the reponse data to the state variable 
    setArrivalinfoData(jsonData);      
  };

  useEffect( () => {
  // Load the menu links data from the API Gateway
    loadArrivalinfoData();
  }, [] );

  const [servicesData, setServicesData] = useState([]);
  const loadServicesData = async()=> {
  const resp = await fetch('https://n4b3cskro0.execute-api.us-east-2.amazonaws.com/production/services');
  let jsonData = await resp.json();
  setServicesData(jsonData);  
  };

  useEffect( () => {
    loadServicesData();
  },[]);

  const [accessibilitiesData, setAccessibilitiesData] = useState([]);
  const loadAccessibilitiesData = async()=> {
  const resp = await fetch('https://n4b3cskro0.execute-api.us-east-2.amazonaws.com/production/accessibilities');
  let jsonData = await resp.json();
  setAccessibilitiesData(jsonData);  
  };

  useEffect( () => {
    loadAccessibilitiesData();
  },[]);

  return (
    <div className="scene" id="hotelinfo">
      <article className="heading">
        <h1>Essential Info</h1>
      </article>
      <article id="usefulinfo">
        <section id="arrivalinfo">
          <h2>Arrival Information</h2>
          <ul>
            {
              arrivalinfoData.map( (arrival) => <li><strong>{arrival.action}</strong> {arrival.remark}</li> )
                        
            }            
          </ul>
        </section>
        <section className="checklist" id="services">
          <h2>Services and Amenities</h2>
          <p>Our services and amenities are designed to make your travel easy, your stay comfortable, and your experience one-of-a-kind.</p>
          <ul>
            {
              servicesData.map( (service) => <li>{service.name} </li> )
            }            
          </ul>
        </section>
        <section className="checklist" id="accessibility">
          <h2>Accessibility</h2>
          <p>We're committed to maintaining the same quality of service for every individual. We offer the following facilities for those with special needs:</p>
          <ul>
            {
              accessibilitiesData.map((accessibility) => <li>{accessibility.name}</li>)
            }            
          </ul>
        </section>
      </article>
      <article id="greenprogram">
        <h2>Landon Green Program</h2>
        <p><strong>The Landon Hotel - London</strong> was recently renovated, and we considered the impact on the earth the entire way. From green building materials, to solar power, to energy-friendly lighting and appliances throughout the hotel - we’re saving energy in every socket, outlet, and switch. We’ve also initiated a recycling and composting program that reduces the load to local landfills, while providing valuable raw material for use in new products, or in the case of compost, for use in local gardens and landscapes.</p>
      </article>
    </div>    
 );
}

export default HotelInfo;