function create_form(){
    const form = document.createElement('form');
    form.id = 'todo_form';
    const title_input = create_input('title_input','text', "Enter Title");
    const title_label = create_label('todo_form','Title');

    const text_area = create_text_area("text_area");
    const description_label = create_label('todo_form','Description');

    const date_input = create_input('due_date', 'date', 'Due Date');
    const date_label = create_label('todo_form','Due Date');

    const priority = create_select('priority','Priority');
    const priority_label = create_label('priority','Priority of task');

    const button = create_button('add_todo', 'Add Todo Item');
    const clear_list = create_button('clear','Clear whole list');

    const line_break = add_line_break();

    form.appendChild(title_label);
    form.appendChild(title_input);
    form.appendChild(line_break);

    form.appendChild(description_label);
    form.appendChild(text_area);
    form.appendChild(line_break);

    form.appendChild(date_label);
    form.appendChild(date_input);
    form.appendChild(line_break);

    form.appendChild(priority_label);
    form.appendChild(priority);
    form.appendChild(line_break);

    form.appendChild(button);
    document.body.append(form);
    document.body.append(clear_list);
}

function create_label(label_for,label_text){
    const label = document.createElement('label');
    label.setAttribute('for',label_for);
    label.textContent = label_text;
    return label;
}

function create_input(id,type,placeholder){
    const input = document.createElement('input');
    input.type = type;
    input.id = id;
    input.placeholder = placeholder;
    return input;
}

function create_button(id, text_content){
    const button = document.createElement('button');
    button.type = 'submit';
    button.id = id;
    button.textContent = text_content;
    return button;
}

function create_ul(){
    const ul = document.createElement('ul');
    ul.id = 'todo_list';
    document.body.append(ul);
}

function create_text_area(id){
    const text_area = document.createElement('textarea');
    text_area.id = id;
    return text_area;
}

function create_select(id,name){
    const select = document.createElement('select');
    const low = create_option('Low');
    const med = create_option('Medium');
    const high = create_option('High');

    select.id = id;
    select.name = name;

    select.appendChild(low);
    select.appendChild(med);
    select.appendChild(high);

    return select;
}

function create_option(value){
    const option = document.createElement('option');
    option.value = value;
    option.textContent = value;
    return option;
}
function add_line_break(){
    const line_break = document.createElement('br');
    return line_break;
}

function set_up() {
    document.addEventListener('DOMContentLoaded', () => {
        create_form();
        create_ul();
    });
}

export {create_button};
export {set_up};