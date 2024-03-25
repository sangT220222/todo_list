import {get_todo_arr} from './data_from_api';
import {add_todo_to_html} from './render_todos'

function populate_storage(){
    let todo_in = document.querySelector('#todo_input').value;
    const todo_arr = get_todo_arr();
    
    if (todo_in !== ''){
        todo_arr.push(todo_in);
        localStorage.setItem('todos', JSON.stringify(todo_arr));
        document.querySelector('#todo_input').value = '';
        //as the new todo item will be displayed when refresh is set, the code below will do that once a new item is added
        window.location.reload();
    }  
}

function event_listener_to_submit(){
    document.addEventListener("DOMContentLoaded", ()=>{

        todo_form.addEventListener('submit', (e) => {
            e.preventDefault();
            populate_storage();
        })
    })
}

export {event_listener_to_submit} 