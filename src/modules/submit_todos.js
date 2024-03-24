import {get_todo_arr} from './data_from_api';

function populate_storage(){
    let todo_in = document.querySelector('#todo_input').value;
    const todo_arr = get_todo_arr();
    
    if (todo_in !== ''){
        todo_arr.push(todo_in);
        localStorage.setItem('todos', JSON.stringify(todo_arr));
        document.querySelector('#todo_input').value = '';
    }  
}

function event_listener_to_submit(){
    document.addEventListener("DOMContentLoaded", ()=>{
        const todo_form = document.querySelector('#todo_form');
        todo_form.addEventListener('submit', (e) => {
            e.preventDefault();
            populate_storage();
        })
    })
}

export {event_listener_to_submit} 