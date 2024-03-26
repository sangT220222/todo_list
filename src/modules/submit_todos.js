import {get_todo_arr} from './data_from_api';
// import {add_todo_to_html} from './render_todos'

function populate_storage(){
    let todo_title = document.querySelector('#title_input').value;
    let todo_text = document.querySelector('#text_area').value;
    let todo_date = document.querySelector('#due_date').value;
    let todo_priority = document.querySelector('#priority').value;
    
    const todo_item = {
        title: todo_title,
        description: todo_text,
        due_date : todo_date,
        priority : todo_priority
    };

    const todo_arr = get_todo_arr();
    
    if (todo_item !== ''){
        todo_arr.push(todo_item);
        localStorage.setItem('todos', JSON.stringify(todo_arr));
        document.querySelector('#title_input').value = '';
        document.querySelector('#text_area').value = '';
        document.querySelector('#due_date').value = '';
        document.querySelector('#priority').value = '';
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