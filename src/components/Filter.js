import React from "react";

// function Filter({ onCategoryChange, onSearchChange, search }) {
//     return (
//         <div className="Filter">
//             <input type="text" name="search" placeholder="Search..." value={search} onChange=

function Filter({ onCategoryChange, onSearchChange, search }) {
    return (
        <div className="filter">
            <input type="text" name="search" placeholder="Search..." value={search} onChange={onSearchChange} />
            <select name="filter" onChange={onCategoryChange}>
                <option value="All">Filter by category</option>
            </select>
        </div>
    )
}

export default Filter;