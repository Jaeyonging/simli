import React, { useEffect, useState } from 'react';
import { Radio } from './Radio';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/configureStore';
import { FetchQuestions } from '../api';
import { QTest } from '../types/qtypes';
import { addAnswers } from '../store/qtestSlice';
import { ResultSurvey } from './ResultSurvey';

interface Props {
    qtype: string
    gender: string
}

export const CardView = ({ qtype, gender }: Props) => {
    const [count, setCount] = useState(0);
    const [isFinished, setFinished] = useState(false)
    const [answer, setAnswer] = useState("")
    const [data, setData] = useState<QTest[] | null>(null);
    const [nextbuttonText, setNextButtonText] = useState("다음")
    const [isSelected, setSeleccted] = useState(false)
    const qtestState = useSelector((state: RootState) => state.qtest);
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        FetchQuestions(qtype).then((res) => {
            setData(res.data.RESULT);
        });

    }, [qtype]);

    useEffect(() => {
        if (answer) {
            setSeleccted(true)
        }
    }, [answer])

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (data == null) return

        //버튼 해제
        const radioButtons = document.getElementsByName("answer") as NodeListOf<HTMLInputElement>;
        radioButtons.forEach((button) => {
            button.checked = false;
            setSeleccted(false)
            setAnswer("")
        });

        if (count === data.length - 1) {
            dispatch(addAnswers(answer))
            setFinished(true)
            return;

        }
        if (count === data.length - 2) {
            setNextButtonText("결과보기");
            setCount(count + 1);
            dispatch(addAnswers(answer))
            return;
        }

        setCount(count + 1);
        dispatch(addAnswers(answer))

    };


    return (
        <>
            <div className='card-container'>

                {!isFinished ? (
                    <>
                        {data === null ? (
                            <div>Loading...</div>
                        ) : (
                            <>
                                <h2 className='card-title'>{data[count].question}</h2>
                                <div className='card-total'>
                                    {"<"}{count + 1}/{data.length}{">"}
                                </div>

                                <div className='card-ques'>
                                    <div className='radio-row'>
                                        <form onSubmit={handleFormSubmit}>
                                            {[1, 2, 3, 4, 5].map((index) => (
                                                <div className='radio-option' key={index}>
                                                    <Radio name="answer" value={index.toString()} setValue={setAnswer}>
                                                        {index}. {data[count][`answer0${index}` as keyof QTest]}
                                                    </Radio>
                                                </div>
                                            ))}
                                            <div className='card-buttons'>
                                                <button className={`submitbtn ${isSelected ? 'selected' : 'notselected'}`} type='submit' disabled={!isSelected}>
                                                    {nextbuttonText}
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </>
                        )}
                    </>
                ) : (
                    <ResultSurvey gender={gender}></ResultSurvey>
                )}
            </div>

        </>

    );
};