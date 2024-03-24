//where the code will be called and implemented here
import {get_todo_arr} from './modules/data_from_api';
import { set_up } from './modules/html_elements.js'
import { add_todo_to_html } from './modules/render_todos.js'
import {event_listener_to_submit} from './modules/submit_todos.js'

const main = () => {
    set_up();
    // const todo_arr = get_todo_arr();
    // todo_arr.length = 0; // Clear the array
    // localStorage.setItem('todos', JSON.stringify(todo_arr)); 
    add_todo_to_html();
    event_listener_to_submit();
    // console.log(todo_arr)
}

main();