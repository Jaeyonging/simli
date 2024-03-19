import React, { useState } from 'react';
import { Radio } from './Radio';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/configureStore';

interface Props {
    data: any
}

export const CardView = ({ data }: Props) => {
    const [count, setCount] = useState(0);
    const qtestState = useSelector((state: RootState) => state.qtest);
    const dispatch = useDispatch<AppDispatch>();
    const handleNext = () => {
        setCount(prevCount => (prevCount === data.length - 1 ? 0 : prevCount + 1));
    };

    const handlePrevious = () => {
        setCount(prevCount => (prevCount === 0 ? data.length - 1 : prevCount - 1));
    };

    return (
        <div className='card-container'>
            <h2 className='card-title'>{data[count].question}</h2>
            <div className='card-ques'>
                <div className='radio-row'>
                    {[1, 2, 3, 4, 5].map((index) => (
                        <div className='radio-option' key={index}>
                            <Radio>{index}. {data[count][`answer0${index}`]}</Radio>
                        </div>
                    ))}
                </div>
            </div>
            <div className='card-buttons'>
                <button className='btn' onClick={handlePrevious}>이전</button>
                <button className='btn' onClick={handleNext}>다음</button>
            </div>
        </div>
    );
};
