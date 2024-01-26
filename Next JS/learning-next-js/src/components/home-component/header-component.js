import React from "react";

const HeaderComponent = (props) => {
    // console.log('Props of header component: ', props);
    let { heading } = props;

    return (
        <h1> {`${heading} Screen!`} </h1>
    );
};

export default HeaderComponent;