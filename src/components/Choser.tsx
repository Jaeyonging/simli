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
    const [gender, setGender] = useState("");

    const OnClickBtn = () => {
        if (qtypeState) {
            console.log("onclick")
            setVisible(false)
            setQtype(QMap.get(qtypeState) || "");
        }
    };

    const handleGenderChange = (event: any) => {
        setGender(event.target.value)
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
                        성별
                        <div className='gender-container'>
                            <label>
                                남자
                                <input type="radio" name="gender" value="100323" checked={gender === "100323"} onChange={handleGenderChange} />
                            </label>
                            <label>
                                여자
                                <input type="radio" name="gender" value="100324" checked={gender === "100324"} onChange={handleGenderChange} />
                            </label>
                        </div>
                        <div className='choser_btn'>
                            <button className='choser_startBtn' onClick={OnClickBtn}>실시하기</button>
                        </div>
                    </>

                ) : (

                    <>
                        {qtype ? (<CardView qtype={qtype} gender={gender}></CardView>) : (<div></div>)}
                    </>
                )}
            </div>

        </>
    );
};
