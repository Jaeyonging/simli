import axios from 'axios'
let qtestAPI = import.meta.env.VITE_QTEST_KEY


export async function FetchQuestions(qtype: string) {
    return axios.get(`https://www.career.go.kr/inspct/openapi/test/questions?apikey=${qtestAPI}&q=${qtype}`)
}

const corsAnywhereUrl = 'https://cors-anywhere.herokuapp.com/';
const apiUrl = 'https://www.career.go.kr/inspct/openapi/test/report';

export async function FetchResult(qtype: string, gender: string, qanswer: string) {
    const startDtm = Date.now().toString()
    return axios.post(corsAnywhereUrl + apiUrl, {
        apikey: `${qtestAPI}`,
        qestrnSeq: qtype,
        trgetSe: "100209",
        gender: gender,
        startDtm: startDtm,
        answers: qanswer
    });
}

