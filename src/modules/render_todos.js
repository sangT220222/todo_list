import {get_todo_arr} from './data_from_api';
import {create_button} from './html_elements';
import { delete_item } from './delete_item';

function render_todo_list(){
    //here we will retrieve array from localStorage from API that will give us the todo list items that are saved on it
    //parse is used to get convert the JSON from API to JS readable objec
    const todo_list = document.querySelector('#todo_list');
    const todo_arr = get_todo_arr();

    if(todo_arr && todo_list){
        todo_list.innerHTML = '';
        // console.log(todo_arr);
        todo_arr.forEach((item,index) => {
            const list = document.createElement('li');
            const title_element = document.createElement('p');
            title_element.textContent = 'Title: ';
            const title_text = document.createTextNode(item.title);
            title_element.appendChild(title_text);
        
            const description_element = document.createElement('p');
            description_element.textContent = 'Description: ' + item.description;
        
            const due_date_element = document.createElement('p');
            due_date_element.textContent = 'Due Date: ' + item.due_date;

            const priority_element = document.createElement('p');
            priority_element.textContent = 'Priority: ' + item.priority;

            const delete_btn = create_button('delete_item','Delete Item');
            delete_btn.addEventListener('click',() => {
                delete_item(index);
            })
    
            // console.log(item.description);
            // list.textContent = `${item.title}`;
            list.appendChild(title_element);
            list.appendChild(description_element);
            list.appendChild(due_date_element);
            list.appendChild(priority_element);
            list.appendChild(delete_btn);

            todo_list.appendChild(list);
        });    
    } 
}

function add_todo_to_html() {
    document.addEventListener("DOMContentLoaded", ()=>{
        render_todo_list();
    })   
}

export {render_todo_list , add_todo_to_html};
