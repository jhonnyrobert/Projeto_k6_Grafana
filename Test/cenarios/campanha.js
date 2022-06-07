import http from 'k6/http';
import { sleep, check } from 'k6';
import getHome from './home.js';
import getProduct from './product.js';

export const options = {
    scenarios: {

        usuarios_constantes: {
            executor: 'constant-vus',
            vus: 10,
            duration: '10m',
        },

        requisicoes_de_bots: {
            executor: 'constant-arrival-rate',
            rate: 5, // 200 RPS, since timeUnit is the default 1s
            duration: '2m',
            preAllocatedVUs: 2,
            maxVUs: 50,
            startTime: '2m'
        },
        usuarios_anuncio: {
            executor: 'ramping-vus',
            startTime: '2m',
            startVUs: 0,
            stages: [
                { duration: '30s', target: 10 },
                { duration: '30s', target: 10 },
                { duration: '1m', target: 0 },
            ],
            gracefulRampDown: '0s',
        },
    },

};

//VU
export default function () {
    getHome();
    sleep(1);
    getProduct();
}