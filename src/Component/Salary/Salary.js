import React from 'react';

const Salary = (props) => {
    const player = props.player
    // const total = player.reduce( (total, income) => total + income.salary, 0);
    let total = 0;
    for (let i = 0; i < player.length; i++) {
        const income = player[i];
        total = total + income.salary;
    }
    return (
        <div>
            {/* <h2>Counted Player{player.length}</h2> */}
            <h3>Counted Salary: {total}</h3>
        </div>
    );
};

export default Salary;