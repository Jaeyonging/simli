import axios from 'axios'
let qtestAPI = import.meta.env.VITE_QTEST_KEY


export async function FetchQuestions() {
    return axios.get(`http://www.career.go.kr/inspct/openapi/test/questions?apikey=${qtestAPI}&q=8`)
}
