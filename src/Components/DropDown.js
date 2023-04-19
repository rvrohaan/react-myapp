import React from "react";

const DropDown = ({ selectChange, robots }) => {
    return (
        <div>
            <select className="pa3 ba b--green bg-lightest-blue" onChange={selectChange} >
                <option>All</option>
                {
                    robots.map((user, i) => {
                        return (
                            <option key={i}>{robots[i].name}</option>
                        )
                    })
                }
            </select>
        </div>
    );
}

export default DropDown;