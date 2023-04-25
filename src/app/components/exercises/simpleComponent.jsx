import React from "react";
import PropTypes from "prop-types";
import Subtitle from "../common/typografy/subtitle";

const SimpleComponent = ({ onLogin, onLogOut, isAuth }) => {
    return (
        <Subtitle>
            {isAuth ? (
                <button
                    type="button"
                    className="btn btn-danger"
                    onClick={onLogOut}
                >
                    Выйти из системы
                </button>
            ) : (
                <button
                    type="button"
                    className="btn btn-success"
                    onClick={onLogin}
                >
                    Войти
                </button>
            )}
        </Subtitle>
    );
};
SimpleComponent.propTypes = {
    onLogin: PropTypes.func,
    onLogOut: PropTypes.func,
    isAuth: PropTypes.string
};
export default SimpleComponent;
