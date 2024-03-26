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
/* harmony export */   add_todo_to_html: () => (/* binding */ add_todo_to_html)
/* harmony export */ });
/* harmony import */ var _data_from_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data_from_api */ "./src/modules/data_from_api.js");
/* harmony import */ var _html_elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./html_elements */ "./src/modules/html_elements.js");



function render_todo_list(){
    //here we will retrieve array from localStorage from API that will give us the todo list items that are saved on it
    //parse is used to get convert the JSON from API to JS readable objec
    const todo_list = document.querySelector('#todo_list');
    const todo_arr = (0,_data_from_api__WEBPACK_IMPORTED_MODULE_0__.get_todo_arr)();

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

            const delete_btn = (0,_html_elements__WEBPACK_IMPORTED_MODULE_1__.create_button)('delete_item','Delete Item');
    
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBNkM7O0FBRTdDO0FBQ0EscUJBQXFCLDREQUFZO0FBQ2pDLHlCQUF5QjtBQUN6Qiw0REFBNEQ7QUFDNUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDLFNBQVM7QUFDVCxLQUFLO0FBQ0w7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQkE7QUFDQSx3QkFBd0I7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRHhCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRXVCOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3RIc0I7QUFDQzs7QUFFOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNERBQVk7O0FBRWpDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLCtCQUErQiw2REFBYTtBQUM1QztBQUNBO0FBQ0EscUNBQXFDLFdBQVc7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQzZDO0FBQzdDLFdBQVcsa0JBQWtCOztBQUU3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLDREQUFZO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7O0FBRWlDOzs7Ozs7VUN4Q2pDO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDcUQ7QUFDRDtBQUNTO0FBQ007QUFDTjs7QUFFN0Q7QUFDQSxJQUFJLGlFQUFNO0FBQ1Y7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQSxJQUFJLDBFQUFnQjtBQUNwQixJQUFJLGtGQUF3QjtBQUM1QixJQUFJLDRFQUFvQjtBQUN4QjtBQUNBOztBQUVBLE8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvbW9kdWxlcy9jbGVhcl9saXN0LmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9tb2R1bGVzL2RhdGFfZnJvbV9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL21vZHVsZXMvaHRtbF9lbGVtZW50cy5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvbW9kdWxlcy9yZW5kZXJfdG9kb3MuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL21vZHVsZXMvc3VibWl0X3RvZG9zLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2dldF90b2RvX2Fycn0gZnJvbSAnLi9kYXRhX2Zyb21fYXBpJztcblxuZnVuY3Rpb24gY2xlYXJfbGlzdCgpe1xuICAgIGNvbnN0IHRvZG9fYXJyID0gZ2V0X3RvZG9fYXJyKCk7XG4gICAgdG9kb19hcnIubGVuZ3RoID0gMDsgLy8gQ2xlYXIgdGhlIGFycmF5XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG9zJywgSlNPTi5zdHJpbmdpZnkodG9kb19hcnIpKTsvL3VwZGF0ZXMgdGhlIGxvY2FsU3RvcmFnZSB3aXRoIHRoZSBjbGVhcmVkIGFycmF5LCB0aGUga2V5IGlzIHRvZG9zXG59XG5cbmZ1bmN0aW9uIGV2ZW50X2xpc3RlbmVyX2NsZWFyKCl7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICAgICAgY29uc3QgY2xlYXJfYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NsZWFyJyk7XG4gICAgICAgIGNsZWFyX2J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoZSkgPT4ge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2NsZWFyaW5nIGxpc3QnKTtcbiAgICAgICAgICAgIGNsZWFyX2xpc3QoKTtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTsvL3JlbG9hZCB0aGUgd2luZG93IHNvIHRoYXQgaXQgdXBkYXRlcyB3aXRoIHRoZSByaWdodCBjb250ZW50XG4gICAgICAgIH0pICAgIFxuICAgIH0pXG59XG5cbmV4cG9ydCB7ZXZlbnRfbGlzdGVuZXJfY2xlYXJ9IiwiLy9mdW5jdGlvbiB0byBwdXNoIHRvZG8gaW5wdXQgYnkgdXNlcnMgdG8gbG9jYWxzdG9yYWdlXG5mdW5jdGlvbiBnZXRfdG9kb19hcnIoKXtyZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9kb3MnKSkgfHwgW107fVxuXG5leHBvcnQge2dldF90b2RvX2Fycn07IiwiZnVuY3Rpb24gY3JlYXRlX2Zvcm0oKXtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIGZvcm0uaWQgPSAndG9kb19mb3JtJztcbiAgICBjb25zdCB0aXRsZV9pbnB1dCA9IGNyZWF0ZV9pbnB1dCgndGl0bGVfaW5wdXQnLCd0ZXh0JywgXCJFbnRlciBUaXRsZVwiKTtcbiAgICBjb25zdCB0aXRsZV9sYWJlbCA9IGNyZWF0ZV9sYWJlbCgndG9kb19mb3JtJywnVGl0bGU6Jyk7XG5cbiAgICBjb25zdCB0ZXh0X2FyZWEgPSBjcmVhdGVfdGV4dF9hcmVhKFwidGV4dF9hcmVhXCIpO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uX2xhYmVsID0gY3JlYXRlX2xhYmVsKCd0b2RvX2Zvcm0nLCdEZXNjcmlwdGlvbjonKTtcblxuICAgIGNvbnN0IGRhdGVfaW5wdXQgPSBjcmVhdGVfaW5wdXQoJ2R1ZV9kYXRlJywgJ2RhdGUnLCAnRW50ZXIgRHVlIERhdGU6Jyk7XG4gICAgY29uc3QgZGF0ZV9sYWJlbCA9IGNyZWF0ZV9sYWJlbCgndG9kb19mb3JtJywnRHVlIERhdGUnKTtcblxuICAgIGNvbnN0IHByaW9yaXR5ID0gY3JlYXRlX3NlbGVjdCgncHJpb3JpdHknLCdQcmlvcml0eScpO1xuICAgIGNvbnN0IHByaW9yaXR5X2xhYmVsID0gY3JlYXRlX2xhYmVsKCdwcmlvcml0eScsJ1ByaW9yaXR5IG9mIHRhc2s6Jyk7XG5cbiAgICBjb25zdCBidXR0b24gPSBjcmVhdGVfYnV0dG9uKCdhZGRfdG9kbycsICdBZGQgVG9kbyBJdGVtJyk7XG4gICAgY29uc3QgY2xlYXJfbGlzdCA9IGNyZWF0ZV9idXR0b24oJ2NsZWFyJywnQ2xlYXIgd2hvbGUgbGlzdCcpO1xuXG4gICAgY29uc3QgbGluZV9icmVhayA9IGFkZF9saW5lX2JyZWFrKCk7XG5cbiAgICBmb3JtLmFwcGVuZENoaWxkKHRpdGxlX2xhYmVsKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHRpdGxlX2lucHV0KTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGxpbmVfYnJlYWspO1xuXG4gICAgZm9ybS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbl9sYWJlbCk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZCh0ZXh0X2FyZWEpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQobGluZV9icmVhayk7XG5cbiAgICBmb3JtLmFwcGVuZENoaWxkKGRhdGVfbGFiZWwpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZGF0ZV9pbnB1dCk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChsaW5lX2JyZWFrKTtcblxuICAgIGZvcm0uYXBwZW5kQ2hpbGQocHJpb3JpdHlfbGFiZWwpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQocHJpb3JpdHkpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQobGluZV9icmVhayk7XG5cbiAgICBmb3JtLmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmQoZm9ybSk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmQoY2xlYXJfbGlzdCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZV9sYWJlbChsYWJlbF9mb3IsbGFiZWxfdGV4dCl7XG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJyxsYWJlbF9mb3IpO1xuICAgIGxhYmVsLnRleHRDb250ZW50ID0gbGFiZWxfdGV4dDtcbiAgICByZXR1cm4gbGFiZWw7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZV9pbnB1dChpZCx0eXBlLHBsYWNlaG9sZGVyKXtcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgaW5wdXQudHlwZSA9IHR5cGU7XG4gICAgaW5wdXQuaWQgPSBpZDtcbiAgICBpbnB1dC5wbGFjZWhvbGRlciA9IHBsYWNlaG9sZGVyO1xuICAgIHJldHVybiBpbnB1dDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlX2J1dHRvbihpZCwgdGV4dF9jb250ZW50KXtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidXR0b24udHlwZSA9ICdzdWJtaXQnO1xuICAgIGJ1dHRvbi5pZCA9IGlkO1xuICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IHRleHRfY29udGVudDtcbiAgICByZXR1cm4gYnV0dG9uO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVfdWwoKXtcbiAgICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgdWwuaWQgPSAndG9kb19saXN0JztcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZCh1bCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZV90ZXh0X2FyZWEoaWQpe1xuICAgIGNvbnN0IHRleHRfYXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgdGV4dF9hcmVhLmlkID0gaWQ7XG4gICAgcmV0dXJuIHRleHRfYXJlYTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlX3NlbGVjdChpZCxuYW1lKXtcbiAgICBjb25zdCBzZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICBjb25zdCBsb3cgPSBjcmVhdGVfb3B0aW9uKCdMb3cnKTtcbiAgICBjb25zdCBtZWQgPSBjcmVhdGVfb3B0aW9uKCdNZWRpdW0nKTtcbiAgICBjb25zdCBoaWdoID0gY3JlYXRlX29wdGlvbignSGlnaCcpO1xuXG4gICAgc2VsZWN0LmlkID0gaWQ7XG4gICAgc2VsZWN0Lm5hbWUgPSBuYW1lO1xuXG4gICAgc2VsZWN0LmFwcGVuZENoaWxkKGxvdyk7XG4gICAgc2VsZWN0LmFwcGVuZENoaWxkKG1lZCk7XG4gICAgc2VsZWN0LmFwcGVuZENoaWxkKGhpZ2gpO1xuXG4gICAgcmV0dXJuIHNlbGVjdDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlX29wdGlvbih2YWx1ZSl7XG4gICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgb3B0aW9uLnZhbHVlID0gdmFsdWU7XG4gICAgb3B0aW9uLnRleHRDb250ZW50ID0gdmFsdWU7XG4gICAgcmV0dXJuIG9wdGlvbjtcbn1cbmZ1bmN0aW9uIGFkZF9saW5lX2JyZWFrKCl7XG4gICAgY29uc3QgbGluZV9icmVhayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJyk7XG4gICAgcmV0dXJuIGxpbmVfYnJlYWs7XG59XG5cbi8vIGZ1bmN0aW9uIGNyZWF0ZV9jbGVhcl9idG4oKXtcbi8vICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbi8vICAgICBidXR0b24udHlwZSA9ICdzdWJtaXQnO1xuLy8gICAgIGJ1dHRvbi5pZCA9ICdjbGVhcic7XG4vLyAgICAgYnV0dG9uLnRleHRDb250ZW50ID0gJ0NsZWFyIGxpc3QnO1xuLy8gICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKGJ1dHRvbik7XG4vLyB9XG5cbmZ1bmN0aW9uIHNldF91cCgpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgICAgICBjcmVhdGVfZm9ybSgpO1xuICAgICAgICBjcmVhdGVfdWwoKTtcbiAgICB9KTtcbn1cblxuZXhwb3J0IHtjcmVhdGVfYnV0dG9ufTtcbmV4cG9ydCB7c2V0X3VwfTsiLCJpbXBvcnQge2dldF90b2RvX2Fycn0gZnJvbSAnLi9kYXRhX2Zyb21fYXBpJztcbmltcG9ydCB7Y3JlYXRlX2J1dHRvbn0gZnJvbSAnLi9odG1sX2VsZW1lbnRzJztcblxuZnVuY3Rpb24gcmVuZGVyX3RvZG9fbGlzdCgpe1xuICAgIC8vaGVyZSB3ZSB3aWxsIHJldHJpZXZlIGFycmF5IGZyb20gbG9jYWxTdG9yYWdlIGZyb20gQVBJIHRoYXQgd2lsbCBnaXZlIHVzIHRoZSB0b2RvIGxpc3QgaXRlbXMgdGhhdCBhcmUgc2F2ZWQgb24gaXRcbiAgICAvL3BhcnNlIGlzIHVzZWQgdG8gZ2V0IGNvbnZlcnQgdGhlIEpTT04gZnJvbSBBUEkgdG8gSlMgcmVhZGFibGUgb2JqZWNcbiAgICBjb25zdCB0b2RvX2xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kb19saXN0Jyk7XG4gICAgY29uc3QgdG9kb19hcnIgPSBnZXRfdG9kb19hcnIoKTtcblxuICAgIGlmKHRvZG9fYXJyICYmIHRvZG9fbGlzdCl7XG4gICAgICAgIHRvZG9fbGlzdC5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgY29uc29sZS5sb2codG9kb19hcnIpO1xuICAgICAgICB0b2RvX2Fyci5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgICAgICBjb25zdCB0aXRsZV9lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3Ryb25nJyk7XG4gICAgICAgICAgICB0aXRsZV9lbGVtZW50LnRleHRDb250ZW50ID0gJ1RpdGxlOiAnO1xuICAgICAgICAgICAgY29uc3QgdGl0bGVfdGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGl0ZW0udGl0bGUpO1xuICAgICAgICAgICAgdGl0bGVfZWxlbWVudC5hcHBlbmRDaGlsZCh0aXRsZV90ZXh0KTtcbiAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBkZXNjcmlwdGlvbl9lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgZGVzY3JpcHRpb25fZWxlbWVudC50ZXh0Q29udGVudCA9ICdEZXNjcmlwdGlvbjogJyArIGl0ZW0uZGVzY3JpcHRpb247XG4gICAgICAgIFxuICAgICAgICAgICAgY29uc3QgZHVlX2RhdGVfZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIGR1ZV9kYXRlX2VsZW1lbnQudGV4dENvbnRlbnQgPSAnRHVlIERhdGU6ICcgKyBpdGVtLmR1ZV9kYXRlO1xuXG4gICAgICAgICAgICBjb25zdCBwcmlvcml0eV9lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgcHJpb3JpdHlfZWxlbWVudC50ZXh0Q29udGVudCA9ICdQcmlvcml0eTogJyArIGl0ZW0ucHJpb3JpdHk7XG5cbiAgICAgICAgICAgIGNvbnN0IGRlbGV0ZV9idG4gPSBjcmVhdGVfYnV0dG9uKCdkZWxldGVfaXRlbScsJ0RlbGV0ZSBJdGVtJyk7XG4gICAgXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhpdGVtLmRlc2NyaXB0aW9uKTtcbiAgICAgICAgICAgIC8vIGxpc3QudGV4dENvbnRlbnQgPSBgJHtpdGVtLnRpdGxlfWA7XG4gICAgICAgICAgICBsaXN0LmFwcGVuZENoaWxkKHRpdGxlX2VsZW1lbnQpO1xuICAgICAgICAgICAgbGlzdC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbl9lbGVtZW50KTtcbiAgICAgICAgICAgIGxpc3QuYXBwZW5kQ2hpbGQoZHVlX2RhdGVfZWxlbWVudCk7XG4gICAgICAgICAgICBsaXN0LmFwcGVuZENoaWxkKHByaW9yaXR5X2VsZW1lbnQpO1xuICAgICAgICAgICAgbGlzdC5hcHBlbmRDaGlsZChkZWxldGVfYnRuKTtcblxuICAgICAgICAgICAgdG9kb19saXN0LmFwcGVuZENoaWxkKGxpc3QpO1xuICAgICAgICB9KTsgICAgXG4gICAgfSBcbn1cblxuZnVuY3Rpb24gYWRkX3RvZG9fdG9faHRtbCgpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKT0+e1xuICAgICAgICByZW5kZXJfdG9kb19saXN0KCk7XG4gICAgfSkgICBcbn1cblxuZXhwb3J0IHthZGRfdG9kb190b19odG1sfTsiLCJpbXBvcnQge2dldF90b2RvX2Fycn0gZnJvbSAnLi9kYXRhX2Zyb21fYXBpJztcbi8vIGltcG9ydCB7YWRkX3RvZG9fdG9faHRtbH0gZnJvbSAnLi9yZW5kZXJfdG9kb3MnXG5cbmZ1bmN0aW9uIHBvcHVsYXRlX3N0b3JhZ2UoKXtcbiAgICBsZXQgdG9kb190aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aXRsZV9pbnB1dCcpLnZhbHVlO1xuICAgIGxldCB0b2RvX3RleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGV4dF9hcmVhJykudmFsdWU7XG4gICAgbGV0IHRvZG9fZGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkdWVfZGF0ZScpLnZhbHVlO1xuICAgIGxldCB0b2RvX3ByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByaW9yaXR5JykudmFsdWU7XG4gICAgXG4gICAgY29uc3QgdG9kb19pdGVtID0ge1xuICAgICAgICB0aXRsZTogdG9kb190aXRsZSxcbiAgICAgICAgZGVzY3JpcHRpb246IHRvZG9fdGV4dCxcbiAgICAgICAgZHVlX2RhdGUgOiB0b2RvX2RhdGUsXG4gICAgICAgIHByaW9yaXR5IDogdG9kb19wcmlvcml0eVxuICAgIH07XG5cbiAgICBjb25zdCB0b2RvX2FyciA9IGdldF90b2RvX2FycigpO1xuICAgIFxuICAgIGlmICh0b2RvX2l0ZW0gIT09ICcnKXtcbiAgICAgICAgdG9kb19hcnIucHVzaCh0b2RvX2l0ZW0pO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9kb3MnLCBKU09OLnN0cmluZ2lmeSh0b2RvX2FycikpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGl0bGVfaW5wdXQnKS52YWx1ZSA9ICcnO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGV4dF9hcmVhJykudmFsdWUgPSAnJztcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2R1ZV9kYXRlJykudmFsdWUgPSAnJztcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByaW9yaXR5JykudmFsdWUgPSAnJztcbiAgICAgICAgLy9hcyB0aGUgbmV3IHRvZG8gaXRlbSB3aWxsIGJlIGRpc3BsYXllZCB3aGVuIHJlZnJlc2ggaXMgc2V0LCB0aGUgY29kZSBiZWxvdyB3aWxsIGRvIHRoYXQgb25jZSBhIG5ldyBpdGVtIGlzIGFkZGVkXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICB9ICBcbn1cblxuZnVuY3Rpb24gZXZlbnRfbGlzdGVuZXJfdG9fc3VibWl0KCl7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCk9PntcblxuICAgICAgICB0b2RvX2Zvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHBvcHVsYXRlX3N0b3JhZ2UoKTtcbiAgICAgICAgfSlcbiAgICB9KVxufVxuXG5leHBvcnQge2V2ZW50X2xpc3RlbmVyX3RvX3N1Ym1pdH0gIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvL3doZXJlIHRoZSBjb2RlIHdpbGwgYmUgY2FsbGVkIGFuZCBpbXBsZW1lbnRlZCBoZXJlXG5pbXBvcnQge2dldF90b2RvX2Fycn0gZnJvbSAnLi9tb2R1bGVzL2RhdGFfZnJvbV9hcGknO1xuaW1wb3J0IHsgc2V0X3VwIH0gZnJvbSAnLi9tb2R1bGVzL2h0bWxfZWxlbWVudHMuanMnO1xuaW1wb3J0IHsgYWRkX3RvZG9fdG9faHRtbCB9IGZyb20gJy4vbW9kdWxlcy9yZW5kZXJfdG9kb3MuanMnO1xuaW1wb3J0IHtldmVudF9saXN0ZW5lcl90b19zdWJtaXR9IGZyb20gJy4vbW9kdWxlcy9zdWJtaXRfdG9kb3MuanMnO1xuaW1wb3J0IHtldmVudF9saXN0ZW5lcl9jbGVhcn0gZnJvbSAnLi9tb2R1bGVzL2NsZWFyX2xpc3QuanMnO1xuXG5jb25zdCBtYWluID0gKCkgPT4ge1xuICAgIHNldF91cCgpO1xuICAgIC8vIGNvbnN0IHRvZG9fYXJyID0gZ2V0X3RvZG9fYXJyKCk7XG4gICAgLy8gdG9kb19hcnIubGVuZ3RoID0gMDsgLy8gQ2xlYXIgdGhlIGFycmF5XG4gICAgLy8gbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG9zJywgSlNPTi5zdHJpbmdpZnkodG9kb19hcnIpKTsgXG4gICAgYWRkX3RvZG9fdG9faHRtbCgpO1xuICAgIGV2ZW50X2xpc3RlbmVyX3RvX3N1Ym1pdCgpO1xuICAgIGV2ZW50X2xpc3RlbmVyX2NsZWFyKCk7XG4gICAgLy8gY29uc29sZS5sb2codG9kb19hcnIpXG59XG5cbm1haW4oKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=