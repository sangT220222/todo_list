function create_form(){
    const form = document.createElement('form');
    form.id = 'todo_form';
    const input = create_input();
    const button = create_button();
    form.appendChild(input);
    form.appendChild(button);
    document.body.append(form);
}

function create_input(){
    const input = document.createElement('input');
    input.type = 'text';
    input.id = 'todoInput';
    input.placeholder = 'Enter a todo';
    return input;
}

function create_button(){
    const button = document.createElement('button');
    button.type = 'submit';
    button.textContent = 'Add Todo';
    return button;
}


function set_up() {
    document.addEventListener('DOMContentLoaded', () => {
        create_form();
    });
}

export {set_up};