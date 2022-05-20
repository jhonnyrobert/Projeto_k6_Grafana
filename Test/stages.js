import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  stages: [// duração total do teste a soma dos durations
    {duration: '3s', target:10},
    {duration: '5s', target:20}, // aumentando a carga enviada [ramp up]
    {duration: '3s', target:10} // decrecimo de usuários virtuais [ramp down]
  ],

};


export default function () {
  http.get('https://test.k6.io');
  sleep(1);
}