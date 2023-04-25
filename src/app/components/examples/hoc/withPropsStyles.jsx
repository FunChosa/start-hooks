/* eslint-disable react/display-name */

import React from "react";
import CardWrapper from "../../common/Card";
const withPropsStyles = (Component) => (props) => {
    return (
        <CardWrapper>
            <Component {...props} name="Hello World" />
        </CardWrapper>
    );
};

export default withPropsStyles;
