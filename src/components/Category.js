import React from "react";

const Category = ({ id, title }) => {
    return (
        <div key={id}>{title}</div>
    )
};

export default Category;