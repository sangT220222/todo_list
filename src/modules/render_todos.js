import {get_todo_arr} from './data_from_api';

function render_todo_list(){
    //here we will retrieve array from localStorage from API that will give us the todo list items that are saved on it
    //parse is used to get convert the JSON from API to JS readable objec
    const todo_list = document.querySelector('#todo_list');
    const todo_arr = get_todo_arr();

    if(todo_arr && todo_list){
        todo_list.innerHTML = '';
        console.log(todo_arr);
        todo_arr.forEach(item => {
            const list = document.createElement('li');
            const title_element = document.createElement('strong');
            title_element.textContent = 'Title: ';
            const title_text = document.createTextNode(item.title);
            title_element.appendChild(title_text);
        
            const description_element = document.createElement('p');
            description_element.textContent = 'Description: ' + item.description;
        
            const due_date_element = document.createElement('p');
            due_date_element.textContent = 'Due Date: ' + item.due_date;

            const priority_element = document.createElement('p');
            priority_element.textContent = 'Priority: ' + item.priority;
    
            // console.log(item.description);
            // list.textContent = `${item.title}`;
            list.appendChild(title_element);
            list.appendChild(description_element);
            list.appendChild(due_date_element);
            list.appendChild(priority_element);

            todo_list.appendChild(list);
        });    
    } else if(todo_arr){ //else condition if todo_list li elememnt in HTML is empty
        console.log(todo_arr);
        todo_arr.forEach((item,index) => {
            const list = document.createElement('li');
            console.log(item);
            list.textContent = `${index}.${item}`;
            todo_list.appendChild(list);
        });    
    }
    //make it blank so that everytime the page is refresh we can update it from scratch
}

function add_todo_to_html() {
    document.addEventListener("DOMContentLoaded", ()=>{
        render_todo_list();
    })   
}

export {add_todo_to_html};