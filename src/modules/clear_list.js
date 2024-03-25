import {get_todo_arr} from './data_from_api';

function clear_list(){
    const todo_arr = get_todo_arr();
    todo_arr.length = 0; // Clear the array
    localStorage.setItem('todos', JSON.stringify(todo_arr));//updates the localStorage with the cleared array, the key is todos
}

function event_listener_clear(){
    document.addEventListener('DOMContentLoaded', () => {
        const clear_btn = document.querySelector('#clear');
        clear_btn.addEventListener("click",(e) => {
            console.log('clearing list');
            clear_list();
            window.location.reload();
        })    
    })
}

export {event_listener_clear}