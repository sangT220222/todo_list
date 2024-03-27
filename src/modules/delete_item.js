import { get_todo_arr } from "./data_from_api"
import { render_todo_list } from './render_todos';

function delete_item(index){
    const todo_arr = get_todo_arr();
    //cutting the array from the specified index and by 1 element
    todo_arr.splice(index,1);
    localStorage.setItem('todos', JSON.stringify(todo_arr));
    // console.log(get_todo_arr());
    render_todo_list();
}

export { delete_item }