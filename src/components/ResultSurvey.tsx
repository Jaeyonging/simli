import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/configureStore';
import axios from 'axios';
import { FetchResult } from '../api';
import { QMap } from '../types/qtypes';

interface Props {
    gender: string
}

export const ResultSurvey = ({ gender }: Props) => {
    const qtypeState = useSelector((state: RootState) => state.qType);
    const qanswerState = useSelector((state: RootState) => state.qtest);
    const [result, setResult] = useState("")

    useEffect(() => {
        const questionType = QMap.get(qtypeState)?.toString();

        if (questionType) {
            FetchResult(questionType, gender, qanswerState).then((res) => {
                setResult(res.data.RESULT.url)
            })
                .catch((err) => {
                    console.log(err)
                })
        }
    }, []);
    console.log(result)
    return (
        <>
            <div className='result-title'>
                검사 결과
            </div>

            <div className='result-descr'>
                결과 보러가기
                <div>
                    ↓↓↓
                </div>
                <div className='result-url'>
                    {result ? (
                        <a href={result} target="_blank" rel="noopener noreferrer">
                            <button className='result-btn'>Go to Result</button>
                        </a>
                    ) : (
                        <div>Network Failed</div>)}
                </div>

            </div>
        </>
    );
};
