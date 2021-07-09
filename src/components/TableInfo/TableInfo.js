import React from "react";
import moment from "moment";


function TableInfo(props) {

    const name = `${props.name.first} ${props.name.last}`;

    return (
        <tr key={props.login.uuid}>
            <td><img src={props.image} alt={name} /></td>
            <td>{name}</td>
            <td>{props.phone}</td>
            <td>{props.email}</td>
            <td>{moment(props.dob).format('M/D/YYYY')}</td>
        </tr>
    )
}

export default TableInfo;