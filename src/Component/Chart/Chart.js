import React, { useState } from 'react';
import list from '../../fakeData/list';
import './Chart.css';
import Tiger from '../Tigers/Tiger';
import Salary from '../Salary/Salary';


const Chart = () => {
    const first8 = list.slice(0, 8);
    const [lists, setLists] = useState(first8);
    const [player, setPlayer] = useState([]);
    const salaryHandler =(list) =>{
        console.log('salaryHandler', list)
        const newPlayer = [...player, list];
        setPlayer(newPlayer)
    }
    return (
        <div className="data">
            <div className="right">
            {
                lists.map(li => <Tiger
                    salaryHandler ={salaryHandler} list={li}></Tiger>)
            }
            </div>
            <div className="left">
            <h3>Total Item's- {list.length}</h3>
            <div className="player">
                <h3>Counted Player : {player.length}</h3>
            </div>
            <br/>
            <div className="pSalary">
            <Salary player={player}></Salary>
            </div>
            </div>
        </div>
    );
};

export default Chart;
{/* <h3>Total Item's- {list.length}</h3>
            <ul>{
                lists.map(list => <li>{list.name}</li>)
            }
            </ul> */}