import http from 'k6/http';
import {sleep, check} from 'k6';

export const url = 'https://www.amazon.com.br/';

export const options = {
    stages: [
        { duration: '1m', target: 100 }, // Ramp-up até 100 usuários
        { duration: '3m', target: 200 }, // mantém 200 usuários por 3 minutos
        { duration: '1m', target: 0 }, // ramp-down to 0 users
    ],
    thresholds: {
        http_req_duration: ['p(95) < 1000'],
        http_req_failed: ['rate<0.01'],
        checks: ['rate>0.99']
    },
};

//VU
export default function (){
    const response = http.get(url);
    check(response, {
        'is status 200' : (r) => r.status === 200,
    });
}