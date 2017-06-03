// import axios from 'axios';
import { FETCH_GREETING } from '../constants/simple_constants';


export function fetchGreeting () {
    const request = 'This is the fetched Greeting'

    return { type: FETCH_GREETING, payload: request }

}