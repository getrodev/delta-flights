import React from 'react'; 
import './FlightList.css'; 

const FlightList = props => {
  if (!props.items || props.items.length === 0) {
    return(
      <div>
        <p>no flights found</p>
      </div>
    )
  }
  return (
    <div className="App">
      <table>
        <tr>
          <th>Id</th>
          <th>Created</th>
          <th>Updated</th>
          <th>Flight_ID</th>
          <th>Flight_Number</th>
          <th>Origin_Gate</th>
          <th>Destination_Gate</th>
          <th>Out_Gmt</th>
          <th>In_Gmt</th>
          <th>Off_Gmt</th>
          <th>On_Gmt</th>
          <th>Destination</th>
          <th>Origin</th>
          <th>Destination_Name</th>
          <th>Origin_Name</th>
          {/* <th>id</th>
          <th>created_at</th>
          <th>updated_at</th>
          <th>flight_identifier</th>
          <th>flt_num</th>
          <th>scheduled_origin_gate</th>
          <th>scheduled_destination_gate</th>
          <th>out_gmt</th>
          <th>in_gmt</th>
          <th>off_gmt</th>
          <th>on_gmt</th>
          <th>destination</th>
          <th>origin</th>
          <th>destination_full_name</th>
          <th>origin_full_name</th> */}
        </tr>
        {props.items.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.id}</td>
              <td>{val.created_at}</td>
              <td>{val.updated_at}</td>
              <td>{val.flight_identifier}</td>
              <td>{val.flt_num}</td>
              <td>{val.scheduled_origin_gate}</td>
              <td>{val.scheduled_destination_gate}</td>
              <td>{val.out_gmt}</td>
              <td>{val.in_gmt}</td>
              <td>{val.off_gmt}</td>
              <td>{val.on_gmt}</td>
              <td>{val.destination}</td>
              <td>{val.origin}</td>
              <td>{val.destination_full_name}</td>
              <td>{val.origin_full_name}</td>
            </tr>
          )
        })}
      </table>
    </div>
  );
}; 

export default FlightList;