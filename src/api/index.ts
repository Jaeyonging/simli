import axios from 'axios'
let qtestAPI = import.meta.env.VITE_QTEST_KEY


export async function FetchQuestions(qtype: string) {
    return axios.get(`https://www.career.go.kr/inspct/openapi/test/questions?apikey=${qtestAPI}&q=${qtype}`)
}


const axiosInstance = axios.create({
    baseURL: 'https://www.career.go.kr/inspct/openapi/test/report',
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
    },
});

export async function FetchResult(qtype: string, gender: string, qanswer: string) {
    const startDtm = Date.now().toString()
    return axiosInstance.post('', {
        apikey: `${qtestAPI}`,
        qestrnSeq: qtype,
        trgetSe: "100209",
        gender: gender,
        startDtm: startDtm,
        answers: qanswer
    });
}

