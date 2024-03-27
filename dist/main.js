/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/clear_list.js":
/*!***********************************!*\
  !*** ./src/modules/clear_list.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   event_listener_clear: () => (/* binding */ event_listener_clear)
/* harmony export */ });
/* harmony import */ var _data_from_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data_from_api */ "./src/modules/data_from_api.js");


function clear_list(){
    const todo_arr = (0,_data_from_api__WEBPACK_IMPORTED_MODULE_0__.get_todo_arr)();
    todo_arr.length = 0; // Clear the array
    localStorage.setItem('todos', JSON.stringify(todo_arr));//updates the localStorage with the cleared array, the key is todos
}

function event_listener_clear(){
    document.addEventListener('DOMContentLoaded', () => {
        const clear_btn = document.querySelector('#clear');
        clear_btn.addEventListener("click",(e) => {
            // console.log('clearing list');
            clear_list();
            window.location.reload();//reload the window so that it updates with the right content
        })    
    })
}



/***/ }),

/***/ "./src/modules/data_from_api.js":
/*!**************************************!*\
  !*** ./src/modules/data_from_api.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   get_todo_arr: () => (/* binding */ get_todo_arr)
/* harmony export */ });
//function to push todo input by users to localstorage
function get_todo_arr(){return JSON.parse(localStorage.getItem('todos')) || [];}



/***/ }),

/***/ "./src/modules/delete_item.js":
/*!************************************!*\
  !*** ./src/modules/delete_item.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   delete_item: () => (/* binding */ delete_item)
/* harmony export */ });
/* harmony import */ var _data_from_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data_from_api */ "./src/modules/data_from_api.js");
/* harmony import */ var _render_todos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render_todos */ "./src/modules/render_todos.js");



function delete_item(index){
    const todo_arr = (0,_data_from_api__WEBPACK_IMPORTED_MODULE_0__.get_todo_arr)();
    //cutting the array from the specified index and by 1 element
    todo_arr.splice(index,1);
    localStorage.setItem('todos', JSON.stringify(todo_arr));
    // console.log(get_todo_arr());
    (0,_render_todos__WEBPACK_IMPORTED_MODULE_1__.render_todo_list)();
}



/***/ }),

/***/ "./src/modules/html_elements.js":
/*!**************************************!*\
  !*** ./src/modules/html_elements.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   create_button: () => (/* binding */ create_button),
/* harmony export */   set_up: () => (/* binding */ set_up)
/* harmony export */ });
function create_form(){
    const form = document.createElement('form');
    form.id = 'todo_form';
    const title_input = create_input('title_input','text', "Enter Title");
    const title_label = create_label('todo_form','Title:');

    const text_area = create_text_area("text_area");
    const description_label = create_label('todo_form','Description:');

    const date_input = create_input('due_date', 'date', 'Enter Due Date:');
    const date_label = create_label('todo_form','Due Date');

    const priority = create_select('priority','Priority');
    const priority_label = create_label('priority','Priority of task:');

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

// function create_clear_btn(){
//     const button = document.createElement('button');
//     button.type = 'submit';
//     button.id = 'clear';
//     button.textContent = 'Clear list';
//     document.body.append(button);
// }

function set_up() {
    document.addEventListener('DOMContentLoaded', () => {
        create_form();
        create_ul();
    });
}




/***/ }),

/***/ "./src/modules/render_todos.js":
/*!*************************************!*\
  !*** ./src/modules/render_todos.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   add_todo_to_html: () => (/* binding */ add_todo_to_html),
/* harmony export */   render_todo_list: () => (/* binding */ render_todo_list)
/* harmony export */ });
/* harmony import */ var _data_from_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data_from_api */ "./src/modules/data_from_api.js");
/* harmony import */ var _html_elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./html_elements */ "./src/modules/html_elements.js");
/* harmony import */ var _delete_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./delete_item */ "./src/modules/delete_item.js");




function render_todo_list(){
    //here we will retrieve array from localStorage from API that will give us the todo list items that are saved on it
    //parse is used to get convert the JSON from API to JS readable objec
    const todo_list = document.querySelector('#todo_list');
    const todo_arr = (0,_data_from_api__WEBPACK_IMPORTED_MODULE_0__.get_todo_arr)();

    if(todo_arr && todo_list){
        todo_list.innerHTML = '';
        console.log(todo_arr);
        todo_arr.forEach((item,index) => {
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

            const delete_btn = (0,_html_elements__WEBPACK_IMPORTED_MODULE_1__.create_button)('delete_item','Delete Item');
            delete_btn.addEventListener('click',() => {
                (0,_delete_item__WEBPACK_IMPORTED_MODULE_2__.delete_item)(index);
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




/***/ }),

/***/ "./src/modules/submit_todos.js":
/*!*************************************!*\
  !*** ./src/modules/submit_todos.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   event_listener_to_submit: () => (/* binding */ event_listener_to_submit)
/* harmony export */ });
/* harmony import */ var _data_from_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data_from_api */ "./src/modules/data_from_api.js");

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

    const todo_arr = (0,_data_from_api__WEBPACK_IMPORTED_MODULE_0__.get_todo_arr)();
    
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

 

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_data_from_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/data_from_api */ "./src/modules/data_from_api.js");
/* harmony import */ var _modules_html_elements_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/html_elements.js */ "./src/modules/html_elements.js");
/* harmony import */ var _modules_render_todos_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/render_todos.js */ "./src/modules/render_todos.js");
/* harmony import */ var _modules_submit_todos_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/submit_todos.js */ "./src/modules/submit_todos.js");
/* harmony import */ var _modules_clear_list_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/clear_list.js */ "./src/modules/clear_list.js");
//where the code will be called and implemented here






const main = () => {
    (0,_modules_html_elements_js__WEBPACK_IMPORTED_MODULE_1__.set_up)();
    // const todo_arr = get_todo_arr();
    // todo_arr.length = 0; // Clear the array
    // localStorage.setItem('todos', JSON.stringify(todo_arr)); 
    (0,_modules_render_todos_js__WEBPACK_IMPORTED_MODULE_2__.add_todo_to_html)();
    (0,_modules_submit_todos_js__WEBPACK_IMPORTED_MODULE_3__.event_listener_to_submit)();
    (0,_modules_clear_list_js__WEBPACK_IMPORTED_MODULE_4__.event_listener_clear)();
    // console.log(todo_arr)
}

main();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SSw0RUFBb0I7QUFDeEI7QUFDQTs7QUFFQSxPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL21vZHVsZXMvY2xlYXJfbGlzdC5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvbW9kdWxlcy9kYXRhX2Zyb21fYXBpLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9tb2R1bGVzL2RlbGV0ZV9pdGVtLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9tb2R1bGVzL2h0bWxfZWxlbWVudHMuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL21vZHVsZXMvcmVuZGVyX3RvZG9zLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9tb2R1bGVzL3N1Ym1pdF90b2Rvcy5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb19saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtnZXRfdG9kb19hcnJ9IGZyb20gJy4vZGF0YV9mcm9tX2FwaSc7XG5cbmZ1bmN0aW9uIGNsZWFyX2xpc3QoKXtcbiAgICBjb25zdCB0b2RvX2FyciA9IGdldF90b2RvX2FycigpO1xuICAgIHRvZG9fYXJyLmxlbmd0aCA9IDA7IC8vIENsZWFyIHRoZSBhcnJheVxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvcycsIEpTT04uc3RyaW5naWZ5KHRvZG9fYXJyKSk7Ly91cGRhdGVzIHRoZSBsb2NhbFN0b3JhZ2Ugd2l0aCB0aGUgY2xlYXJlZCBhcnJheSwgdGhlIGtleSBpcyB0b2Rvc1xufVxuXG5mdW5jdGlvbiBldmVudF9saXN0ZW5lcl9jbGVhcigpe1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNsZWFyX2J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjbGVhcicpO1xuICAgICAgICBjbGVhcl9idG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKGUpID0+IHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdjbGVhcmluZyBsaXN0Jyk7XG4gICAgICAgICAgICBjbGVhcl9saXN0KCk7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7Ly9yZWxvYWQgdGhlIHdpbmRvdyBzbyB0aGF0IGl0IHVwZGF0ZXMgd2l0aCB0aGUgcmlnaHQgY29udGVudFxuICAgICAgICB9KSAgICBcbiAgICB9KVxufVxuXG5leHBvcnQge2V2ZW50X2xpc3RlbmVyX2NsZWFyfSIsIi8vZnVuY3Rpb24gdG8gcHVzaCB0b2RvIGlucHV0IGJ5IHVzZXJzIHRvIGxvY2Fsc3RvcmFnZVxuZnVuY3Rpb24gZ2V0X3RvZG9fYXJyKCl7cmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZG9zJykpIHx8IFtdO31cblxuZXhwb3J0IHtnZXRfdG9kb19hcnJ9OyIsImltcG9ydCB7IGdldF90b2RvX2FyciB9IGZyb20gXCIuL2RhdGFfZnJvbV9hcGlcIlxuaW1wb3J0IHsgcmVuZGVyX3RvZG9fbGlzdCB9IGZyb20gJy4vcmVuZGVyX3RvZG9zJztcblxuZnVuY3Rpb24gZGVsZXRlX2l0ZW0oaW5kZXgpe1xuICAgIGNvbnN0IHRvZG9fYXJyID0gZ2V0X3RvZG9fYXJyKCk7XG4gICAgLy9jdXR0aW5nIHRoZSBhcnJheSBmcm9tIHRoZSBzcGVjaWZpZWQgaW5kZXggYW5kIGJ5IDEgZWxlbWVudFxuICAgIHRvZG9fYXJyLnNwbGljZShpbmRleCwxKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9kb3MnLCBKU09OLnN0cmluZ2lmeSh0b2RvX2FycikpO1xuICAgIC8vIGNvbnNvbGUubG9nKGdldF90b2RvX2FycigpKTtcbiAgICByZW5kZXJfdG9kb19saXN0KCk7XG59XG5cbmV4cG9ydCB7IGRlbGV0ZV9pdGVtIH0iLCJmdW5jdGlvbiBjcmVhdGVfZm9ybSgpe1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgZm9ybS5pZCA9ICd0b2RvX2Zvcm0nO1xuICAgIGNvbnN0IHRpdGxlX2lucHV0ID0gY3JlYXRlX2lucHV0KCd0aXRsZV9pbnB1dCcsJ3RleHQnLCBcIkVudGVyIFRpdGxlXCIpO1xuICAgIGNvbnN0IHRpdGxlX2xhYmVsID0gY3JlYXRlX2xhYmVsKCd0b2RvX2Zvcm0nLCdUaXRsZTonKTtcblxuICAgIGNvbnN0IHRleHRfYXJlYSA9IGNyZWF0ZV90ZXh0X2FyZWEoXCJ0ZXh0X2FyZWFcIik7XG4gICAgY29uc3QgZGVzY3JpcHRpb25fbGFiZWwgPSBjcmVhdGVfbGFiZWwoJ3RvZG9fZm9ybScsJ0Rlc2NyaXB0aW9uOicpO1xuXG4gICAgY29uc3QgZGF0ZV9pbnB1dCA9IGNyZWF0ZV9pbnB1dCgnZHVlX2RhdGUnLCAnZGF0ZScsICdFbnRlciBEdWUgRGF0ZTonKTtcbiAgICBjb25zdCBkYXRlX2xhYmVsID0gY3JlYXRlX2xhYmVsKCd0b2RvX2Zvcm0nLCdEdWUgRGF0ZScpO1xuXG4gICAgY29uc3QgcHJpb3JpdHkgPSBjcmVhdGVfc2VsZWN0KCdwcmlvcml0eScsJ1ByaW9yaXR5Jyk7XG4gICAgY29uc3QgcHJpb3JpdHlfbGFiZWwgPSBjcmVhdGVfbGFiZWwoJ3ByaW9yaXR5JywnUHJpb3JpdHkgb2YgdGFzazonKTtcblxuICAgIGNvbnN0IGJ1dHRvbiA9IGNyZWF0ZV9idXR0b24oJ2FkZF90b2RvJywgJ0FkZCBUb2RvIEl0ZW0nKTtcbiAgICBjb25zdCBjbGVhcl9saXN0ID0gY3JlYXRlX2J1dHRvbignY2xlYXInLCdDbGVhciB3aG9sZSBsaXN0Jyk7XG5cbiAgICBjb25zdCBsaW5lX2JyZWFrID0gYWRkX2xpbmVfYnJlYWsoKTtcblxuICAgIGZvcm0uYXBwZW5kQ2hpbGQodGl0bGVfbGFiZWwpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQodGl0bGVfaW5wdXQpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQobGluZV9icmVhayk7XG5cbiAgICBmb3JtLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uX2xhYmVsKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHRleHRfYXJlYSk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChsaW5lX2JyZWFrKTtcblxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZGF0ZV9sYWJlbCk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChkYXRlX2lucHV0KTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGxpbmVfYnJlYWspO1xuXG4gICAgZm9ybS5hcHBlbmRDaGlsZChwcmlvcml0eV9sYWJlbCk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChwcmlvcml0eSk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChsaW5lX2JyZWFrKTtcblxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZChmb3JtKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZChjbGVhcl9saXN0KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlX2xhYmVsKGxhYmVsX2ZvcixsYWJlbF90ZXh0KXtcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLGxhYmVsX2Zvcik7XG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSBsYWJlbF90ZXh0O1xuICAgIHJldHVybiBsYWJlbDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlX2lucHV0KGlkLHR5cGUscGxhY2Vob2xkZXIpe1xuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBpbnB1dC50eXBlID0gdHlwZTtcbiAgICBpbnB1dC5pZCA9IGlkO1xuICAgIGlucHV0LnBsYWNlaG9sZGVyID0gcGxhY2Vob2xkZXI7XG4gICAgcmV0dXJuIGlucHV0O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVfYnV0dG9uKGlkLCB0ZXh0X2NvbnRlbnQpe1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ1dHRvbi50eXBlID0gJ3N1Ym1pdCc7XG4gICAgYnV0dG9uLmlkID0gaWQ7XG4gICAgYnV0dG9uLnRleHRDb250ZW50ID0gdGV4dF9jb250ZW50O1xuICAgIHJldHVybiBidXR0b247XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZV91bCgpe1xuICAgIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICB1bC5pZCA9ICd0b2RvX2xpc3QnO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKHVsKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlX3RleHRfYXJlYShpZCl7XG4gICAgY29uc3QgdGV4dF9hcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICB0ZXh0X2FyZWEuaWQgPSBpZDtcbiAgICByZXR1cm4gdGV4dF9hcmVhO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVfc2VsZWN0KGlkLG5hbWUpe1xuICAgIGNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgIGNvbnN0IGxvdyA9IGNyZWF0ZV9vcHRpb24oJ0xvdycpO1xuICAgIGNvbnN0IG1lZCA9IGNyZWF0ZV9vcHRpb24oJ01lZGl1bScpO1xuICAgIGNvbnN0IGhpZ2ggPSBjcmVhdGVfb3B0aW9uKCdIaWdoJyk7XG5cbiAgICBzZWxlY3QuaWQgPSBpZDtcbiAgICBzZWxlY3QubmFtZSA9IG5hbWU7XG5cbiAgICBzZWxlY3QuYXBwZW5kQ2hpbGQobG93KTtcbiAgICBzZWxlY3QuYXBwZW5kQ2hpbGQobWVkKTtcbiAgICBzZWxlY3QuYXBwZW5kQ2hpbGQoaGlnaCk7XG5cbiAgICByZXR1cm4gc2VsZWN0O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVfb3B0aW9uKHZhbHVlKXtcbiAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICBvcHRpb24udmFsdWUgPSB2YWx1ZTtcbiAgICBvcHRpb24udGV4dENvbnRlbnQgPSB2YWx1ZTtcbiAgICByZXR1cm4gb3B0aW9uO1xufVxuZnVuY3Rpb24gYWRkX2xpbmVfYnJlYWsoKXtcbiAgICBjb25zdCBsaW5lX2JyZWFrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKTtcbiAgICByZXR1cm4gbGluZV9icmVhaztcbn1cblxuLy8gZnVuY3Rpb24gY3JlYXRlX2NsZWFyX2J0bigpe1xuLy8gICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuLy8gICAgIGJ1dHRvbi50eXBlID0gJ3N1Ym1pdCc7XG4vLyAgICAgYnV0dG9uLmlkID0gJ2NsZWFyJztcbi8vICAgICBidXR0b24udGV4dENvbnRlbnQgPSAnQ2xlYXIgbGlzdCc7XG4vLyAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmQoYnV0dG9uKTtcbi8vIH1cblxuZnVuY3Rpb24gc2V0X3VwKCkge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgICAgIGNyZWF0ZV9mb3JtKCk7XG4gICAgICAgIGNyZWF0ZV91bCgpO1xuICAgIH0pO1xufVxuXG5leHBvcnQge2NyZWF0ZV9idXR0b259O1xuZXhwb3J0IHtzZXRfdXB9OyIsImltcG9ydCB7Z2V0X3RvZG9fYXJyfSBmcm9tICcuL2RhdGFfZnJvbV9hcGknO1xuaW1wb3J0IHtjcmVhdGVfYnV0dG9ufSBmcm9tICcuL2h0bWxfZWxlbWVudHMnO1xuaW1wb3J0IHsgZGVsZXRlX2l0ZW0gfSBmcm9tICcuL2RlbGV0ZV9pdGVtJztcblxuZnVuY3Rpb24gcmVuZGVyX3RvZG9fbGlzdCgpe1xuICAgIC8vaGVyZSB3ZSB3aWxsIHJldHJpZXZlIGFycmF5IGZyb20gbG9jYWxTdG9yYWdlIGZyb20gQVBJIHRoYXQgd2lsbCBnaXZlIHVzIHRoZSB0b2RvIGxpc3QgaXRlbXMgdGhhdCBhcmUgc2F2ZWQgb24gaXRcbiAgICAvL3BhcnNlIGlzIHVzZWQgdG8gZ2V0IGNvbnZlcnQgdGhlIEpTT04gZnJvbSBBUEkgdG8gSlMgcmVhZGFibGUgb2JqZWNcbiAgICBjb25zdCB0b2RvX2xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kb19saXN0Jyk7XG4gICAgY29uc3QgdG9kb19hcnIgPSBnZXRfdG9kb19hcnIoKTtcblxuICAgIGlmKHRvZG9fYXJyICYmIHRvZG9fbGlzdCl7XG4gICAgICAgIHRvZG9fbGlzdC5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgY29uc29sZS5sb2codG9kb19hcnIpO1xuICAgICAgICB0b2RvX2Fyci5mb3JFYWNoKChpdGVtLGluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgICAgIGNvbnN0IHRpdGxlX2VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHJvbmcnKTtcbiAgICAgICAgICAgIHRpdGxlX2VsZW1lbnQudGV4dENvbnRlbnQgPSAnVGl0bGU6ICc7XG4gICAgICAgICAgICBjb25zdCB0aXRsZV90ZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoaXRlbS50aXRsZSk7XG4gICAgICAgICAgICB0aXRsZV9lbGVtZW50LmFwcGVuZENoaWxkKHRpdGxlX3RleHQpO1xuICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uX2VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICBkZXNjcmlwdGlvbl9lbGVtZW50LnRleHRDb250ZW50ID0gJ0Rlc2NyaXB0aW9uOiAnICsgaXRlbS5kZXNjcmlwdGlvbjtcbiAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBkdWVfZGF0ZV9lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgZHVlX2RhdGVfZWxlbWVudC50ZXh0Q29udGVudCA9ICdEdWUgRGF0ZTogJyArIGl0ZW0uZHVlX2RhdGU7XG5cbiAgICAgICAgICAgIGNvbnN0IHByaW9yaXR5X2VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICBwcmlvcml0eV9lbGVtZW50LnRleHRDb250ZW50ID0gJ1ByaW9yaXR5OiAnICsgaXRlbS5wcmlvcml0eTtcblxuICAgICAgICAgICAgY29uc3QgZGVsZXRlX2J0biA9IGNyZWF0ZV9idXR0b24oJ2RlbGV0ZV9pdGVtJywnRGVsZXRlIEl0ZW0nKTtcbiAgICAgICAgICAgIGRlbGV0ZV9idG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpID0+IHtcbiAgICAgICAgICAgICAgICBkZWxldGVfaXRlbShpbmRleCk7XG4gICAgICAgICAgICB9KVxuICAgIFxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coaXRlbS5kZXNjcmlwdGlvbik7XG4gICAgICAgICAgICAvLyBsaXN0LnRleHRDb250ZW50ID0gYCR7aXRlbS50aXRsZX1gO1xuICAgICAgICAgICAgbGlzdC5hcHBlbmRDaGlsZCh0aXRsZV9lbGVtZW50KTtcbiAgICAgICAgICAgIGxpc3QuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25fZWxlbWVudCk7XG4gICAgICAgICAgICBsaXN0LmFwcGVuZENoaWxkKGR1ZV9kYXRlX2VsZW1lbnQpO1xuICAgICAgICAgICAgbGlzdC5hcHBlbmRDaGlsZChwcmlvcml0eV9lbGVtZW50KTtcbiAgICAgICAgICAgIGxpc3QuYXBwZW5kQ2hpbGQoZGVsZXRlX2J0bik7XG5cbiAgICAgICAgICAgIHRvZG9fbGlzdC5hcHBlbmRDaGlsZChsaXN0KTtcbiAgICAgICAgfSk7ICAgIFxuICAgIH0gXG59XG5cbmZ1bmN0aW9uIGFkZF90b2RvX3RvX2h0bWwoKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCk9PntcbiAgICAgICAgcmVuZGVyX3RvZG9fbGlzdCgpO1xuICAgIH0pICAgXG59XG5cbmV4cG9ydCB7cmVuZGVyX3RvZG9fbGlzdCAsIGFkZF90b2RvX3RvX2h0bWx9O1xuIiwiaW1wb3J0IHtnZXRfdG9kb19hcnJ9IGZyb20gJy4vZGF0YV9mcm9tX2FwaSc7XG4vLyBpbXBvcnQge2FkZF90b2RvX3RvX2h0bWx9IGZyb20gJy4vcmVuZGVyX3RvZG9zJ1xuXG5mdW5jdGlvbiBwb3B1bGF0ZV9zdG9yYWdlKCl7XG4gICAgbGV0IHRvZG9fdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGl0bGVfaW5wdXQnKS52YWx1ZTtcbiAgICBsZXQgdG9kb190ZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RleHRfYXJlYScpLnZhbHVlO1xuICAgIGxldCB0b2RvX2RhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZHVlX2RhdGUnKS52YWx1ZTtcbiAgICBsZXQgdG9kb19wcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcmlvcml0eScpLnZhbHVlO1xuICAgIFxuICAgIGNvbnN0IHRvZG9faXRlbSA9IHtcbiAgICAgICAgdGl0bGU6IHRvZG9fdGl0bGUsXG4gICAgICAgIGRlc2NyaXB0aW9uOiB0b2RvX3RleHQsXG4gICAgICAgIGR1ZV9kYXRlIDogdG9kb19kYXRlLFxuICAgICAgICBwcmlvcml0eSA6IHRvZG9fcHJpb3JpdHlcbiAgICB9O1xuXG4gICAgY29uc3QgdG9kb19hcnIgPSBnZXRfdG9kb19hcnIoKTtcbiAgICBcbiAgICBpZiAodG9kb19pdGVtICE9PSAnJyl7XG4gICAgICAgIHRvZG9fYXJyLnB1c2godG9kb19pdGVtKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG9zJywgSlNPTi5zdHJpbmdpZnkodG9kb19hcnIpKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RpdGxlX2lucHV0JykudmFsdWUgPSAnJztcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RleHRfYXJlYScpLnZhbHVlID0gJyc7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkdWVfZGF0ZScpLnZhbHVlID0gJyc7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcmlvcml0eScpLnZhbHVlID0gJyc7XG4gICAgICAgIC8vYXMgdGhlIG5ldyB0b2RvIGl0ZW0gd2lsbCBiZSBkaXNwbGF5ZWQgd2hlbiByZWZyZXNoIGlzIHNldCwgdGhlIGNvZGUgYmVsb3cgd2lsbCBkbyB0aGF0IG9uY2UgYSBuZXcgaXRlbSBpcyBhZGRlZFxuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfSAgXG59XG5cbmZ1bmN0aW9uIGV2ZW50X2xpc3RlbmVyX3RvX3N1Ym1pdCgpe1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpPT57XG5cbiAgICAgICAgdG9kb19mb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBwb3B1bGF0ZV9zdG9yYWdlKCk7XG4gICAgICAgIH0pXG4gICAgfSlcbn1cblxuZXhwb3J0IHtldmVudF9saXN0ZW5lcl90b19zdWJtaXR9ICIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy93aGVyZSB0aGUgY29kZSB3aWxsIGJlIGNhbGxlZCBhbmQgaW1wbGVtZW50ZWQgaGVyZVxuaW1wb3J0IHtnZXRfdG9kb19hcnJ9IGZyb20gJy4vbW9kdWxlcy9kYXRhX2Zyb21fYXBpJztcbmltcG9ydCB7IHNldF91cCB9IGZyb20gJy4vbW9kdWxlcy9odG1sX2VsZW1lbnRzLmpzJztcbmltcG9ydCB7IGFkZF90b2RvX3RvX2h0bWwgfSBmcm9tICcuL21vZHVsZXMvcmVuZGVyX3RvZG9zLmpzJztcbmltcG9ydCB7ZXZlbnRfbGlzdGVuZXJfdG9fc3VibWl0fSBmcm9tICcuL21vZHVsZXMvc3VibWl0X3RvZG9zLmpzJztcbmltcG9ydCB7ZXZlbnRfbGlzdGVuZXJfY2xlYXJ9IGZyb20gJy4vbW9kdWxlcy9jbGVhcl9saXN0LmpzJztcblxuY29uc3QgbWFpbiA9ICgpID0+IHtcbiAgICBzZXRfdXAoKTtcbiAgICAvLyBjb25zdCB0b2RvX2FyciA9IGdldF90b2RvX2FycigpO1xuICAgIC8vIHRvZG9fYXJyLmxlbmd0aCA9IDA7IC8vIENsZWFyIHRoZSBhcnJheVxuICAgIC8vIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvcycsIEpTT04uc3RyaW5naWZ5KHRvZG9fYXJyKSk7IFxuICAgIGFkZF90b2RvX3RvX2h0bWwoKTtcbiAgICBldmVudF9saXN0ZW5lcl90b19zdWJtaXQoKTtcbiAgICBldmVudF9saXN0ZW5lcl9jbGVhcigpO1xuICAgIC8vIGNvbnNvbGUubG9nKHRvZG9fYXJyKVxufVxuXG5tYWluKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9