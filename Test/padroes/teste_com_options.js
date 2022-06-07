import http from 'k6/http';
import {sleep} from 'k6';

//init
export const url = 'https://www.amazon.com.br/';

export const options = {
    vus: 10,
    duration: '30s',
};

//VU
export default function (){
    http.get(url);
    sleep(1);
}