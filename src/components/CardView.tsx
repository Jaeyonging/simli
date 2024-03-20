import React, { useEffect, useState } from 'react';
import { Radio } from './Radio';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/configureStore';
import { FetchQuestions } from '../api';
import { QTest } from '../types/qtypes';

interface Props {
    qtype: string
}

export const CardView = ({ qtype }: Props) => {
    const [data, setData] = useState<QTest[] | null>(null);

    useEffect(() => {
        FetchQuestions(qtype).then((res) => {
            console.log(res.data.RESULT)
            setData(res.data.RESULT);
        });

    }, []);

    const [count, setCount] = useState(0);
    const [nextbuttonText, setNextButtonText] = useState("다음")
    const [prevbuttonText, setPrevButtonText] = useState("이전")
    const qtestState = useSelector((state: RootState) => state.qtest);
    const dispatch = useDispatch<AppDispatch>();
    const handleNext = () => {
        if (data == null) return
        const radioButtons = document.getElementsByName("answer") as NodeListOf<HTMLInputElement>;
        radioButtons.forEach((button) => {
            button.checked = false;
        });

        if (count === data.length - 1) {
            return;
        }
        if (count === data.length - 2) {
            setNextButtonText("결과보기");
            setCount(count + 1);
            return;
        }
        setCount(count + 1);
    };

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const target = e.target as typeof e.target & {
            answer: { value: string };
        };
        console.log(target.answer.value);
        handleNext();
    };



    return (
        <>
            {data === null ? (
                <div>Loading...</div>
            ) : (
                <div className='card-container'>
                    <h2 className='card-title'>{data[count].question}</h2>
                    <div className='card-ques'>
                        <div className='radio-row'>
                            <form onSubmit={handleFormSubmit}>
                                {[1, 2, 3, 4, 5].map((index) => (
                                    <div className='radio-option' key={index}>
                                        <Radio name="answer" value={index.toString()}>
                                            {index}. {data[count][`answer0${index}` as keyof QTest]}
                                        </Radio>

                                    </div>
                                ))}
                                <div className='card-buttons'>
                                    <button className='submitbtn' type='submit'>{nextbuttonText}</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </>

    );
};