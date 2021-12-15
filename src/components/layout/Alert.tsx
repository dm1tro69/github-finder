import React, {FC, useContext} from 'react';
import AlertContext from "../../context/alert/AlertContext";

const Alert:FC = () => {
    // @ts-ignore
    const {alert} = useContext(AlertContext)
    return (
        <>
            {alert !== null && <strong className={'flex-1 text-base leading-7 text-white'}>{alert}</strong>}
           </>
    )
};

export default Alert;
