import React from "react";

const Header = (props) => {
    // console.log('Props of header component: ', props);
    let { screenName } = props;

    return (
        <h2> {`${screenName} Screen`} </h2>
    );
};

export default Header;