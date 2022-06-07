import http from 'k6/http';
import {check} from 'k6';

//init
export const url = 'https://www.amazon.com.br/';

export const options = {
    vus: 10,
    duration: '30s',
};

//VU
export default function (){
    const response = http.get(url);
    check(response, {
        'is status 200' : (r) => r.status === 200,
    });

}