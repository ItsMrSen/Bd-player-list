import React from 'react';
import list from '../../fakeData/list';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faLink } from '@fortawesome/free-solid-svg-icons'
import './Tiger.css'

const Tiger = (props) => {
    console.log(props)
    const {imgLink, name, age, avg, role, email, salary} = props.list;
    return (
        <div className="top">
            <div className="img">
            <img src={imgLink} alt=""/>
            </div>
            <div className="down">
            <h3 className="name">Name : <strong>{name}</strong></h3>
            <p>Age : {age}</p>
            <p>AVG : {avg}</p>
            <p>Role : {role}</p>
            <p>Mail : {email}</p>
            <h5>Salary : {salary}tk</h5>
            <button className="salary"
            onClick = {() => props.salaryHandler(props.list)}>
            <FontAwesomeIcon icon={faLink} /> Add</button>

            </div>
        </div>
    );
};

export default Tiger;