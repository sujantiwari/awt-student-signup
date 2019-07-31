import {FETCH_PROJECTS} from './types';

export function getProjects(){
    const request = fetch("http://localhost:9000/category");

    return (dispatch)=>{
        request.then((data) => data.json())
        .then((data)=>{
            dispatch({type: FETCH_PROJECTS, payload: data});
        });
    };
}