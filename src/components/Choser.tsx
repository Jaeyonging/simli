import React, { useState, useEffect } from 'react';
import { CardView } from './CardView';
import { DropDown } from './Dropdown';
import { useSelector } from 'react-redux';
import { RootState } from '../store/configureStore';
import { QMap } from '../types/qtypes';

export const Choser = () => {
    const [qtype, setQtype] = useState<string>("");
    const qtypeState = useSelector((state: RootState) => state.qType);
    const [isVisible, setVisible] = useState(true)

    const OnClickBtn = () => {
        if (qtypeState) {
            console.log("onclick")
            setVisible(false)
            setQtype(QMap.get(qtypeState) || "");
        }
    };

    return (
        <>
            <div className='choser_container'>
                {isVisible ? (
                    <>
                        <div>
                            <img className="choser_img" src='./TestImg.webp' alt="Test Image" />
                        </div>
                        <div className='choser_menu'>
                            <DropDown />
                        </div>
                        <div className='choser_btn'>
                            <button className='choser_startBtn' onClick={OnClickBtn}>실시하기</button>
                        </div>
                    </>

                ) : (

                    <>
                        {qtype ? (<CardView qtype={qtype}></CardView>) : (<div></div>)}
                    </>
                )}
            </div>

        </>
    );
};
