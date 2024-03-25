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

    const button = create_button();
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

function create_button(){
    const button = document.createElement('button');
    button.type = 'submit';
    button.textContent = 'Add Todo';
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

function create_clear_btn(){
    const button = document.createElement('button');
    button.type = 'submit';
    button.id = 'clear';
    button.textContent = 'Clear list';
    document.body.append(button);
}

function set_up() {
    document.addEventListener('DOMContentLoaded', () => {
        create_form();
        create_ul();
        create_clear_btn();
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
    let todo_text = document.getElementById('text_area').value;
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
        document.querySelector('#description').value = '';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBNkM7O0FBRTdDO0FBQ0EscUJBQXFCLDREQUFZO0FBQ2pDLHlCQUF5QjtBQUN6Qiw0REFBNEQ7QUFDNUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDLFNBQVM7QUFDVCxLQUFLO0FBQ0w7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQkE7QUFDQSx3QkFBd0I7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakg2Qzs7QUFFN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNERBQVk7O0FBRWpDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxXQUFXO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUztBQUNULE1BQU0sbUJBQW1CO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLE1BQU0sR0FBRyxLQUFLO0FBQ2hEO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEQ2QztBQUM3QyxXQUFXLGtCQUFrQjs7QUFFN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFCQUFxQiw0REFBWTtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMOztBQUVpQzs7Ozs7O1VDeENqQztVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ3FEO0FBQ0Q7QUFDUztBQUNNO0FBQ047O0FBRTdEO0FBQ0EsSUFBSSxpRUFBTTtBQUNWO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0EsSUFBSSwwRUFBZ0I7QUFDcEIsSUFBSSxrRkFBd0I7QUFDNUIsSUFBSSw0RUFBb0I7QUFDeEI7QUFDQTs7QUFFQSxPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL21vZHVsZXMvY2xlYXJfbGlzdC5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvbW9kdWxlcy9kYXRhX2Zyb21fYXBpLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9tb2R1bGVzL2h0bWxfZWxlbWVudHMuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL21vZHVsZXMvcmVuZGVyX3RvZG9zLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9tb2R1bGVzL3N1Ym1pdF90b2Rvcy5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb19saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtnZXRfdG9kb19hcnJ9IGZyb20gJy4vZGF0YV9mcm9tX2FwaSc7XG5cbmZ1bmN0aW9uIGNsZWFyX2xpc3QoKXtcbiAgICBjb25zdCB0b2RvX2FyciA9IGdldF90b2RvX2FycigpO1xuICAgIHRvZG9fYXJyLmxlbmd0aCA9IDA7IC8vIENsZWFyIHRoZSBhcnJheVxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvcycsIEpTT04uc3RyaW5naWZ5KHRvZG9fYXJyKSk7Ly91cGRhdGVzIHRoZSBsb2NhbFN0b3JhZ2Ugd2l0aCB0aGUgY2xlYXJlZCBhcnJheSwgdGhlIGtleSBpcyB0b2Rvc1xufVxuXG5mdW5jdGlvbiBldmVudF9saXN0ZW5lcl9jbGVhcigpe1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNsZWFyX2J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjbGVhcicpO1xuICAgICAgICBjbGVhcl9idG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKGUpID0+IHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdjbGVhcmluZyBsaXN0Jyk7XG4gICAgICAgICAgICBjbGVhcl9saXN0KCk7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7Ly9yZWxvYWQgdGhlIHdpbmRvdyBzbyB0aGF0IGl0IHVwZGF0ZXMgd2l0aCB0aGUgcmlnaHQgY29udGVudFxuICAgICAgICB9KSAgICBcbiAgICB9KVxufVxuXG5leHBvcnQge2V2ZW50X2xpc3RlbmVyX2NsZWFyfSIsIi8vZnVuY3Rpb24gdG8gcHVzaCB0b2RvIGlucHV0IGJ5IHVzZXJzIHRvIGxvY2Fsc3RvcmFnZVxuZnVuY3Rpb24gZ2V0X3RvZG9fYXJyKCl7cmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZG9zJykpIHx8IFtdO31cblxuZXhwb3J0IHtnZXRfdG9kb19hcnJ9OyIsImZ1bmN0aW9uIGNyZWF0ZV9mb3JtKCl7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBmb3JtLmlkID0gJ3RvZG9fZm9ybSc7XG4gICAgY29uc3QgdGl0bGVfaW5wdXQgPSBjcmVhdGVfaW5wdXQoJ3RpdGxlX2lucHV0JywndGV4dCcsIFwiRW50ZXIgVGl0bGVcIik7XG4gICAgY29uc3QgdGl0bGVfbGFiZWwgPSBjcmVhdGVfbGFiZWwoJ3RvZG9fZm9ybScsJ1RpdGxlOicpO1xuXG4gICAgY29uc3QgdGV4dF9hcmVhID0gY3JlYXRlX3RleHRfYXJlYShcInRleHRfYXJlYVwiKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbl9sYWJlbCA9IGNyZWF0ZV9sYWJlbCgndG9kb19mb3JtJywnRGVzY3JpcHRpb246Jyk7XG5cbiAgICBjb25zdCBkYXRlX2lucHV0ID0gY3JlYXRlX2lucHV0KCdkdWVfZGF0ZScsICdkYXRlJywgJ0VudGVyIER1ZSBEYXRlOicpO1xuICAgIGNvbnN0IGRhdGVfbGFiZWwgPSBjcmVhdGVfbGFiZWwoJ3RvZG9fZm9ybScsJ0R1ZSBEYXRlJyk7XG5cbiAgICBjb25zdCBwcmlvcml0eSA9IGNyZWF0ZV9zZWxlY3QoJ3ByaW9yaXR5JywnUHJpb3JpdHknKTtcbiAgICBjb25zdCBwcmlvcml0eV9sYWJlbCA9IGNyZWF0ZV9sYWJlbCgncHJpb3JpdHknLCdQcmlvcml0eSBvZiB0YXNrOicpO1xuXG4gICAgY29uc3QgYnV0dG9uID0gY3JlYXRlX2J1dHRvbigpO1xuICAgIGNvbnN0IGxpbmVfYnJlYWsgPSBhZGRfbGluZV9icmVhaygpO1xuXG4gICAgZm9ybS5hcHBlbmRDaGlsZCh0aXRsZV9sYWJlbCk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZCh0aXRsZV9pbnB1dCk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChsaW5lX2JyZWFrKTtcblxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25fbGFiZWwpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQodGV4dF9hcmVhKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGxpbmVfYnJlYWspO1xuXG4gICAgZm9ybS5hcHBlbmRDaGlsZChkYXRlX2xhYmVsKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGRhdGVfaW5wdXQpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQobGluZV9icmVhayk7XG5cbiAgICBmb3JtLmFwcGVuZENoaWxkKHByaW9yaXR5X2xhYmVsKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHByaW9yaXR5KTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGxpbmVfYnJlYWspO1xuXG4gICAgZm9ybS5hcHBlbmRDaGlsZChidXR0b24pO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKGZvcm0pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVfbGFiZWwobGFiZWxfZm9yLGxhYmVsX3RleHQpe1xuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsbGFiZWxfZm9yKTtcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IGxhYmVsX3RleHQ7XG4gICAgcmV0dXJuIGxhYmVsO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVfaW5wdXQoaWQsdHlwZSxwbGFjZWhvbGRlcil7XG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGlucHV0LnR5cGUgPSB0eXBlO1xuICAgIGlucHV0LmlkID0gaWQ7XG4gICAgaW5wdXQucGxhY2Vob2xkZXIgPSBwbGFjZWhvbGRlcjtcbiAgICByZXR1cm4gaW5wdXQ7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZV9idXR0b24oKXtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidXR0b24udHlwZSA9ICdzdWJtaXQnO1xuICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9ICdBZGQgVG9kbyc7XG4gICAgcmV0dXJuIGJ1dHRvbjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlX3VsKCl7XG4gICAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIHVsLmlkID0gJ3RvZG9fbGlzdCc7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmQodWwpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVfdGV4dF9hcmVhKGlkKXtcbiAgICBjb25zdCB0ZXh0X2FyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgIHRleHRfYXJlYS5pZCA9IGlkO1xuICAgIHJldHVybiB0ZXh0X2FyZWE7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZV9zZWxlY3QoaWQsbmFtZSl7XG4gICAgY29uc3Qgc2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgY29uc3QgbG93ID0gY3JlYXRlX29wdGlvbignTG93Jyk7XG4gICAgY29uc3QgbWVkID0gY3JlYXRlX29wdGlvbignTWVkaXVtJyk7XG4gICAgY29uc3QgaGlnaCA9IGNyZWF0ZV9vcHRpb24oJ0hpZ2gnKTtcblxuICAgIHNlbGVjdC5pZCA9IGlkO1xuICAgIHNlbGVjdC5uYW1lID0gbmFtZTtcblxuICAgIHNlbGVjdC5hcHBlbmRDaGlsZChsb3cpO1xuICAgIHNlbGVjdC5hcHBlbmRDaGlsZChtZWQpO1xuICAgIHNlbGVjdC5hcHBlbmRDaGlsZChoaWdoKTtcblxuICAgIHJldHVybiBzZWxlY3Q7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZV9vcHRpb24odmFsdWUpe1xuICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIG9wdGlvbi52YWx1ZSA9IHZhbHVlO1xuICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IHZhbHVlO1xuICAgIHJldHVybiBvcHRpb247XG59XG5mdW5jdGlvbiBhZGRfbGluZV9icmVhaygpe1xuICAgIGNvbnN0IGxpbmVfYnJlYWsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpO1xuICAgIHJldHVybiBsaW5lX2JyZWFrO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVfY2xlYXJfYnRuKCl7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYnV0dG9uLnR5cGUgPSAnc3VibWl0JztcbiAgICBidXR0b24uaWQgPSAnY2xlYXInO1xuICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9ICdDbGVhciBsaXN0JztcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZChidXR0b24pO1xufVxuXG5mdW5jdGlvbiBzZXRfdXAoKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICAgICAgY3JlYXRlX2Zvcm0oKTtcbiAgICAgICAgY3JlYXRlX3VsKCk7XG4gICAgICAgIGNyZWF0ZV9jbGVhcl9idG4oKTtcbiAgICB9KTtcbn1cblxuZXhwb3J0IHtzZXRfdXB9OyIsImltcG9ydCB7Z2V0X3RvZG9fYXJyfSBmcm9tICcuL2RhdGFfZnJvbV9hcGknO1xuXG5mdW5jdGlvbiByZW5kZXJfdG9kb19saXN0KCl7XG4gICAgLy9oZXJlIHdlIHdpbGwgcmV0cmlldmUgYXJyYXkgZnJvbSBsb2NhbFN0b3JhZ2UgZnJvbSBBUEkgdGhhdCB3aWxsIGdpdmUgdXMgdGhlIHRvZG8gbGlzdCBpdGVtcyB0aGF0IGFyZSBzYXZlZCBvbiBpdFxuICAgIC8vcGFyc2UgaXMgdXNlZCB0byBnZXQgY29udmVydCB0aGUgSlNPTiBmcm9tIEFQSSB0byBKUyByZWFkYWJsZSBvYmplY1xuICAgIGNvbnN0IHRvZG9fbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvX2xpc3QnKTtcbiAgICBjb25zdCB0b2RvX2FyciA9IGdldF90b2RvX2FycigpO1xuXG4gICAgaWYodG9kb19hcnIgJiYgdG9kb19saXN0KXtcbiAgICAgICAgdG9kb19saXN0LmlubmVySFRNTCA9ICcnO1xuICAgICAgICBjb25zb2xlLmxvZyh0b2RvX2Fycik7XG4gICAgICAgIHRvZG9fYXJyLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgICAgIGNvbnN0IHRpdGxlX2VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHJvbmcnKTtcbiAgICAgICAgICAgIHRpdGxlX2VsZW1lbnQudGV4dENvbnRlbnQgPSAnVGl0bGU6ICc7XG4gICAgICAgICAgICBjb25zdCB0aXRsZV90ZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoaXRlbS50aXRsZSk7XG4gICAgICAgICAgICB0aXRsZV9lbGVtZW50LmFwcGVuZENoaWxkKHRpdGxlX3RleHQpO1xuICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uX2VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICBkZXNjcmlwdGlvbl9lbGVtZW50LnRleHRDb250ZW50ID0gJ0Rlc2NyaXB0aW9uOiAnICsgaXRlbS5kZXNjcmlwdGlvbjtcbiAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBkdWVfZGF0ZV9lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgZHVlX2RhdGVfZWxlbWVudC50ZXh0Q29udGVudCA9ICdEdWUgRGF0ZTogJyArIGl0ZW0uZHVlX2RhdGU7XG5cbiAgICAgICAgICAgIGNvbnN0IHByaW9yaXR5X2VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICBwcmlvcml0eV9lbGVtZW50LnRleHRDb250ZW50ID0gJ1ByaW9yaXR5OiAnICsgaXRlbS5wcmlvcml0eTtcbiAgICBcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGl0ZW0uZGVzY3JpcHRpb24pO1xuICAgICAgICAgICAgLy8gbGlzdC50ZXh0Q29udGVudCA9IGAke2l0ZW0udGl0bGV9YDtcbiAgICAgICAgICAgIGxpc3QuYXBwZW5kQ2hpbGQodGl0bGVfZWxlbWVudCk7XG4gICAgICAgICAgICBsaXN0LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uX2VsZW1lbnQpO1xuICAgICAgICAgICAgbGlzdC5hcHBlbmRDaGlsZChkdWVfZGF0ZV9lbGVtZW50KTtcbiAgICAgICAgICAgIGxpc3QuYXBwZW5kQ2hpbGQocHJpb3JpdHlfZWxlbWVudCk7XG5cbiAgICAgICAgICAgIHRvZG9fbGlzdC5hcHBlbmRDaGlsZChsaXN0KTtcbiAgICAgICAgfSk7ICAgIFxuICAgIH0gZWxzZSBpZih0b2RvX2Fycil7IC8vZWxzZSBjb25kaXRpb24gaWYgdG9kb19saXN0IGxpIGVsZW1lbW50IGluIEhUTUwgaXMgZW1wdHlcbiAgICAgICAgY29uc29sZS5sb2codG9kb19hcnIpO1xuICAgICAgICB0b2RvX2Fyci5mb3JFYWNoKChpdGVtLGluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGl0ZW0pO1xuICAgICAgICAgICAgbGlzdC50ZXh0Q29udGVudCA9IGAke2luZGV4fS4ke2l0ZW19YDtcbiAgICAgICAgICAgIHRvZG9fbGlzdC5hcHBlbmRDaGlsZChsaXN0KTtcbiAgICAgICAgfSk7ICAgIFxuICAgIH1cbiAgICAvL21ha2UgaXQgYmxhbmsgc28gdGhhdCBldmVyeXRpbWUgdGhlIHBhZ2UgaXMgcmVmcmVzaCB3ZSBjYW4gdXBkYXRlIGl0IGZyb20gc2NyYXRjaFxufVxuXG5mdW5jdGlvbiBhZGRfdG9kb190b19odG1sKCkge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpPT57XG4gICAgICAgIHJlbmRlcl90b2RvX2xpc3QoKTtcbiAgICB9KSAgIFxufVxuXG5leHBvcnQge2FkZF90b2RvX3RvX2h0bWx9OyIsImltcG9ydCB7Z2V0X3RvZG9fYXJyfSBmcm9tICcuL2RhdGFfZnJvbV9hcGknO1xuLy8gaW1wb3J0IHthZGRfdG9kb190b19odG1sfSBmcm9tICcuL3JlbmRlcl90b2RvcydcblxuZnVuY3Rpb24gcG9wdWxhdGVfc3RvcmFnZSgpe1xuICAgIGxldCB0b2RvX3RpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RpdGxlX2lucHV0JykudmFsdWU7XG4gICAgbGV0IHRvZG9fdGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0X2FyZWEnKS52YWx1ZTtcbiAgICBsZXQgdG9kb19kYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2R1ZV9kYXRlJykudmFsdWU7XG4gICAgbGV0IHRvZG9fcHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJpb3JpdHknKS52YWx1ZTtcbiAgICBcbiAgICBjb25zdCB0b2RvX2l0ZW0gPSB7XG4gICAgICAgIHRpdGxlOiB0b2RvX3RpdGxlLFxuICAgICAgICBkZXNjcmlwdGlvbjogdG9kb190ZXh0LFxuICAgICAgICBkdWVfZGF0ZSA6IHRvZG9fZGF0ZSxcbiAgICAgICAgcHJpb3JpdHkgOiB0b2RvX3ByaW9yaXR5XG4gICAgfTtcblxuICAgIGNvbnN0IHRvZG9fYXJyID0gZ2V0X3RvZG9fYXJyKCk7XG4gICAgXG4gICAgaWYgKHRvZG9faXRlbSAhPT0gJycpe1xuICAgICAgICB0b2RvX2Fyci5wdXNoKHRvZG9faXRlbSk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvcycsIEpTT04uc3RyaW5naWZ5KHRvZG9fYXJyKSk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aXRsZV9pbnB1dCcpLnZhbHVlID0gJyc7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZXNjcmlwdGlvbicpLnZhbHVlID0gJyc7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkdWVfZGF0ZScpLnZhbHVlID0gJyc7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcmlvcml0eScpLnZhbHVlID0gJyc7XG4gICAgICAgIC8vYXMgdGhlIG5ldyB0b2RvIGl0ZW0gd2lsbCBiZSBkaXNwbGF5ZWQgd2hlbiByZWZyZXNoIGlzIHNldCwgdGhlIGNvZGUgYmVsb3cgd2lsbCBkbyB0aGF0IG9uY2UgYSBuZXcgaXRlbSBpcyBhZGRlZFxuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfSAgXG59XG5cbmZ1bmN0aW9uIGV2ZW50X2xpc3RlbmVyX3RvX3N1Ym1pdCgpe1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpPT57XG5cbiAgICAgICAgdG9kb19mb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBwb3B1bGF0ZV9zdG9yYWdlKCk7XG4gICAgICAgIH0pXG4gICAgfSlcbn1cblxuZXhwb3J0IHtldmVudF9saXN0ZW5lcl90b19zdWJtaXR9ICIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy93aGVyZSB0aGUgY29kZSB3aWxsIGJlIGNhbGxlZCBhbmQgaW1wbGVtZW50ZWQgaGVyZVxuaW1wb3J0IHtnZXRfdG9kb19hcnJ9IGZyb20gJy4vbW9kdWxlcy9kYXRhX2Zyb21fYXBpJztcbmltcG9ydCB7IHNldF91cCB9IGZyb20gJy4vbW9kdWxlcy9odG1sX2VsZW1lbnRzLmpzJztcbmltcG9ydCB7IGFkZF90b2RvX3RvX2h0bWwgfSBmcm9tICcuL21vZHVsZXMvcmVuZGVyX3RvZG9zLmpzJztcbmltcG9ydCB7ZXZlbnRfbGlzdGVuZXJfdG9fc3VibWl0fSBmcm9tICcuL21vZHVsZXMvc3VibWl0X3RvZG9zLmpzJztcbmltcG9ydCB7ZXZlbnRfbGlzdGVuZXJfY2xlYXJ9IGZyb20gJy4vbW9kdWxlcy9jbGVhcl9saXN0LmpzJztcblxuY29uc3QgbWFpbiA9ICgpID0+IHtcbiAgICBzZXRfdXAoKTtcbiAgICAvLyBjb25zdCB0b2RvX2FyciA9IGdldF90b2RvX2FycigpO1xuICAgIC8vIHRvZG9fYXJyLmxlbmd0aCA9IDA7IC8vIENsZWFyIHRoZSBhcnJheVxuICAgIC8vIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvcycsIEpTT04uc3RyaW5naWZ5KHRvZG9fYXJyKSk7IFxuICAgIGFkZF90b2RvX3RvX2h0bWwoKTtcbiAgICBldmVudF9saXN0ZW5lcl90b19zdWJtaXQoKTtcbiAgICBldmVudF9saXN0ZW5lcl9jbGVhcigpO1xuICAgIC8vIGNvbnNvbGUubG9nKHRvZG9fYXJyKVxufVxuXG5tYWluKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9