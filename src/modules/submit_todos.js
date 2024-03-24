import {get_todo_arr} from './modules/data_from_api';

function populate_storage(){
    const todo_in = docuement.querySelector('#todoInput');
    const todo_arr = get_todo_arr();
    
    if (todo_in !== ''){
        todo_arr.push(todo_in);
        localStorage.setItem('todos'.JSON.stringify(todos));
        todo_in.value = '';
    }  
}

export {populate_storage} 