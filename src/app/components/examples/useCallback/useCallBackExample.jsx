import React, { useEffect, useState, useRef, useCallback } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

const UseCallBackExample = () => {
    const [data, setData] = useState({});
    const withOutCallBack = useRef(0);
    const withCallBack = useRef(0);

    const handelChange = ({ target }) => {
        setData((prevState) => ({ ...prevState, [target.name]: target.value }));
    };
    // withOut CallBAck
    const validateWithOutCallBack = (data) => {
        console.log(data);
    };
    useEffect(() => {
        withOutCallBack.current++;
    }, [validateWithOutCallBack]);
    // with CallBack
    const validateWithCallBack = useCallback((data) => {
        console.log(data);
    }, []);

    useEffect(() => {
        withCallBack.current++;
    }, [validateWithCallBack]);

    useEffect(() => {
        validateWithOutCallBack(data);
        validateWithCallBack(data);
    }, [data]);

    return (
        <CardWrapper>
            <SmallTitle>Example</SmallTitle>
            <p>Render WithOutCallBack: {withOutCallBack.current}</p>
            <p>Render WithCallBack: {withCallBack.current}</p>

            <label htmlFor="email" className="form-label">
                Email
            </label>
            <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={data.email || ""}
                onChange={handelChange}
            />
        </CardWrapper>
    );
};

export default UseCallBackExample;
