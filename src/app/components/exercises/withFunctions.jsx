/* eslint-disable no-unused-expressions */
/* eslint-disable react/display-name */
import React from "react";
import CardWrapper from "../common/Card";
const withPropsStyles = (Component) => (props) => {
    const isLogin = localStorage.getItem("auth");
    console.log(isLogin);
    const onLogin = () => {
        localStorage.setItem("auth", "token");
    };
    const onLogOut = () => {
        localStorage.removeItem("auth");
    };
    return (
        <CardWrapper>
            <Component {...{ isAuth: isLogin, onLogin, onLogOut }} />
        </CardWrapper>
    );
};

export default withPropsStyles;
