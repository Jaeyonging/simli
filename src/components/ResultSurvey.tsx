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
    console.log(qtypeState)
    console.log(qanswerState)
    useEffect(() => {
        console.log(QMap.get(qtypeState)?.toString())

        FetchResult(QMap.get(qtypeState).toString(), gender, qanswerState).then((res) => {
            console.log(res.data)
            setResult(res.data.RESULT.url)
        })


    }, []);

    return (
        <>
            검사 결과
            <div>
                결과 보러가기~!!
                <div>
                    {result && <a href={result} target="_blank" rel="noopener noreferrer">{result}</a>}
                </div>

            </div>
        </>
    );
};
