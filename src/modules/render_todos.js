import {get_todo_arr} from './modules/data_from_api';

function render_todo_list(){
    //here we will retrieve array from localStorage from API that will give us the todo list items that are saved on it
    //parse is used to get convert the JSON from API to JS readable objec
    const todo_list = document.querySelector('#todo_list');
    let todo_arr = get_todo_arr();
    //make it blank so that everytime the page is refresh we can update it from scratch
    todo_list.innerHTML = '';

    todo_arr.forEach(item,index => {
        const list = document.createElement('li');
        list.textContent = `${index}.${item}`;
        todo_list.appendChild(list);
    });
}

export {render_todo_list};