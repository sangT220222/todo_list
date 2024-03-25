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
    const title_label = create_label('title','Title:');

    const text_area = create_text_area('description');
    const description_label = create_label('description','Description:');

    const date_input = create_input('due_date', 'date', 'Enter Due Date:');
    const date_label = create_label('date','Due Date');

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
        
            // const descriptionElement = document.createElement('p');
            // descriptionElement.textContent = 'Description: ' + item.description;
        
            const due_date_element = document.createElement('p');
            due_date_element.textContent = 'Due Date: ' + item.due_date;
        
            // console.log(item.title);
            // list.textContent = `${item.title}`;
            list.appendChild(title_element);
            list.appendChild(due_date_element);
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
/* harmony import */ var _render_todos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render_todos */ "./src/modules/render_todos.js");



function populate_storage(){
    let todo_title = document.querySelector('#title_input').value;
    let todo_date = document.querySelector('#due_date').value;
    const todo_item = {
        title: todo_title,
        due_date : todo_date
    };

    const todo_arr = (0,_data_from_api__WEBPACK_IMPORTED_MODULE_0__.get_todo_arr)();
    
    if (todo_item !== ''){
        todo_arr.push(todo_item);
        localStorage.setItem('todos', JSON.stringify(todo_arr));
        document.querySelector('#title_input').value = '';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBNkM7O0FBRTdDO0FBQ0EscUJBQXFCLDREQUFZO0FBQ2pDLHlCQUF5QjtBQUN6Qiw0REFBNEQ7QUFDNUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDLFNBQVM7QUFDVCxLQUFLO0FBQ0w7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQkE7QUFDQSx3QkFBd0I7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakg2Qzs7QUFFN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNERBQVk7O0FBRWpDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsV0FBVztBQUNoRDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsTUFBTSxtQkFBbUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsTUFBTSxHQUFHLEtBQUs7QUFDaEQ7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUM2QztBQUNFOztBQUUvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIsNERBQVk7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDs7QUFFaUM7Ozs7OztVQ2hDakM7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNxRDtBQUNEO0FBQ1M7QUFDTTtBQUNOOztBQUU3RDtBQUNBLElBQUksaUVBQU07QUFDVjtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBLElBQUksMEVBQWdCO0FBQ3BCLElBQUksa0ZBQXdCO0FBQzVCLElBQUksNEVBQW9CO0FBQ3hCO0FBQ0E7O0FBRUEsTyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9tb2R1bGVzL2NsZWFyX2xpc3QuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL21vZHVsZXMvZGF0YV9mcm9tX2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvbW9kdWxlcy9odG1sX2VsZW1lbnRzLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9tb2R1bGVzL3JlbmRlcl90b2Rvcy5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvbW9kdWxlcy9zdWJtaXRfdG9kb3MuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kb19saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Z2V0X3RvZG9fYXJyfSBmcm9tICcuL2RhdGFfZnJvbV9hcGknO1xuXG5mdW5jdGlvbiBjbGVhcl9saXN0KCl7XG4gICAgY29uc3QgdG9kb19hcnIgPSBnZXRfdG9kb19hcnIoKTtcbiAgICB0b2RvX2Fyci5sZW5ndGggPSAwOyAvLyBDbGVhciB0aGUgYXJyYXlcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9kb3MnLCBKU09OLnN0cmluZ2lmeSh0b2RvX2FycikpOy8vdXBkYXRlcyB0aGUgbG9jYWxTdG9yYWdlIHdpdGggdGhlIGNsZWFyZWQgYXJyYXksIHRoZSBrZXkgaXMgdG9kb3Ncbn1cblxuZnVuY3Rpb24gZXZlbnRfbGlzdGVuZXJfY2xlYXIoKXtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBjbGVhcl9idG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2xlYXInKTtcbiAgICAgICAgY2xlYXJfYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLChlKSA9PiB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnY2xlYXJpbmcgbGlzdCcpO1xuICAgICAgICAgICAgY2xlYXJfbGlzdCgpO1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpOy8vcmVsb2FkIHRoZSB3aW5kb3cgc28gdGhhdCBpdCB1cGRhdGVzIHdpdGggdGhlIHJpZ2h0IGNvbnRlbnRcbiAgICAgICAgfSkgICAgXG4gICAgfSlcbn1cblxuZXhwb3J0IHtldmVudF9saXN0ZW5lcl9jbGVhcn0iLCIvL2Z1bmN0aW9uIHRvIHB1c2ggdG9kbyBpbnB1dCBieSB1c2VycyB0byBsb2NhbHN0b3JhZ2VcbmZ1bmN0aW9uIGdldF90b2RvX2Fycigpe3JldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2RvcycpKSB8fCBbXTt9XG5cbmV4cG9ydCB7Z2V0X3RvZG9fYXJyfTsiLCJmdW5jdGlvbiBjcmVhdGVfZm9ybSgpe1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgZm9ybS5pZCA9ICd0b2RvX2Zvcm0nO1xuICAgIGNvbnN0IHRpdGxlX2lucHV0ID0gY3JlYXRlX2lucHV0KCd0aXRsZV9pbnB1dCcsJ3RleHQnLCBcIkVudGVyIFRpdGxlXCIpO1xuICAgIGNvbnN0IHRpdGxlX2xhYmVsID0gY3JlYXRlX2xhYmVsKCd0aXRsZScsJ1RpdGxlOicpO1xuXG4gICAgY29uc3QgdGV4dF9hcmVhID0gY3JlYXRlX3RleHRfYXJlYSgnZGVzY3JpcHRpb24nKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbl9sYWJlbCA9IGNyZWF0ZV9sYWJlbCgnZGVzY3JpcHRpb24nLCdEZXNjcmlwdGlvbjonKTtcblxuICAgIGNvbnN0IGRhdGVfaW5wdXQgPSBjcmVhdGVfaW5wdXQoJ2R1ZV9kYXRlJywgJ2RhdGUnLCAnRW50ZXIgRHVlIERhdGU6Jyk7XG4gICAgY29uc3QgZGF0ZV9sYWJlbCA9IGNyZWF0ZV9sYWJlbCgnZGF0ZScsJ0R1ZSBEYXRlJyk7XG5cbiAgICBjb25zdCBwcmlvcml0eSA9IGNyZWF0ZV9zZWxlY3QoJ3ByaW9yaXR5JywnUHJpb3JpdHknKTtcbiAgICBjb25zdCBwcmlvcml0eV9sYWJlbCA9IGNyZWF0ZV9sYWJlbCgncHJpb3JpdHknLCdQcmlvcml0eSBvZiB0YXNrOicpO1xuXG4gICAgY29uc3QgYnV0dG9uID0gY3JlYXRlX2J1dHRvbigpO1xuICAgIGNvbnN0IGxpbmVfYnJlYWsgPSBhZGRfbGluZV9icmVhaygpO1xuXG4gICAgZm9ybS5hcHBlbmRDaGlsZCh0aXRsZV9sYWJlbCk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZCh0aXRsZV9pbnB1dCk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChsaW5lX2JyZWFrKTtcblxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25fbGFiZWwpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQodGV4dF9hcmVhKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGxpbmVfYnJlYWspO1xuXG4gICAgZm9ybS5hcHBlbmRDaGlsZChkYXRlX2xhYmVsKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGRhdGVfaW5wdXQpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQobGluZV9icmVhayk7XG5cbiAgICBmb3JtLmFwcGVuZENoaWxkKHByaW9yaXR5X2xhYmVsKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHByaW9yaXR5KTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGxpbmVfYnJlYWspO1xuXG4gICAgZm9ybS5hcHBlbmRDaGlsZChidXR0b24pO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKGZvcm0pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVfbGFiZWwobGFiZWxfZm9yLGxhYmVsX3RleHQpe1xuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsbGFiZWxfZm9yKTtcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IGxhYmVsX3RleHQ7XG4gICAgcmV0dXJuIGxhYmVsO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVfaW5wdXQoaWQsdHlwZSxwbGFjZWhvbGRlcil7XG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGlucHV0LnR5cGUgPSB0eXBlO1xuICAgIGlucHV0LmlkID0gaWQ7XG4gICAgaW5wdXQucGxhY2Vob2xkZXIgPSBwbGFjZWhvbGRlcjtcbiAgICByZXR1cm4gaW5wdXQ7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZV9idXR0b24oKXtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidXR0b24udHlwZSA9ICdzdWJtaXQnO1xuICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9ICdBZGQgVG9kbyc7XG4gICAgcmV0dXJuIGJ1dHRvbjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlX3VsKCl7XG4gICAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIHVsLmlkID0gJ3RvZG9fbGlzdCc7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmQodWwpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVfdGV4dF9hcmVhKGlkKXtcbiAgICBjb25zdCB0ZXh0X2FyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgIHRleHRfYXJlYS5pZCA9IGlkO1xuICAgIHJldHVybiB0ZXh0X2FyZWE7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZV9zZWxlY3QoaWQsbmFtZSl7XG4gICAgY29uc3Qgc2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgY29uc3QgbG93ID0gY3JlYXRlX29wdGlvbignTG93Jyk7XG4gICAgY29uc3QgbWVkID0gY3JlYXRlX29wdGlvbignTWVkaXVtJyk7XG4gICAgY29uc3QgaGlnaCA9IGNyZWF0ZV9vcHRpb24oJ0hpZ2gnKTtcblxuICAgIHNlbGVjdC5pZCA9IGlkO1xuICAgIHNlbGVjdC5uYW1lID0gbmFtZTtcblxuICAgIHNlbGVjdC5hcHBlbmRDaGlsZChsb3cpO1xuICAgIHNlbGVjdC5hcHBlbmRDaGlsZChtZWQpO1xuICAgIHNlbGVjdC5hcHBlbmRDaGlsZChoaWdoKTtcblxuICAgIHJldHVybiBzZWxlY3Q7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZV9vcHRpb24odmFsdWUpe1xuICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIG9wdGlvbi52YWx1ZSA9IHZhbHVlO1xuICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IHZhbHVlO1xuICAgIHJldHVybiBvcHRpb247XG59XG5mdW5jdGlvbiBhZGRfbGluZV9icmVhaygpe1xuICAgIGNvbnN0IGxpbmVfYnJlYWsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpO1xuICAgIHJldHVybiBsaW5lX2JyZWFrO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVfY2xlYXJfYnRuKCl7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYnV0dG9uLnR5cGUgPSAnc3VibWl0JztcbiAgICBidXR0b24uaWQgPSAnY2xlYXInO1xuICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9ICdDbGVhciBsaXN0JztcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZChidXR0b24pO1xufVxuXG5mdW5jdGlvbiBzZXRfdXAoKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICAgICAgY3JlYXRlX2Zvcm0oKTtcbiAgICAgICAgY3JlYXRlX3VsKCk7XG4gICAgICAgIGNyZWF0ZV9jbGVhcl9idG4oKTtcbiAgICB9KTtcbn1cblxuZXhwb3J0IHtzZXRfdXB9OyIsImltcG9ydCB7Z2V0X3RvZG9fYXJyfSBmcm9tICcuL2RhdGFfZnJvbV9hcGknO1xuXG5mdW5jdGlvbiByZW5kZXJfdG9kb19saXN0KCl7XG4gICAgLy9oZXJlIHdlIHdpbGwgcmV0cmlldmUgYXJyYXkgZnJvbSBsb2NhbFN0b3JhZ2UgZnJvbSBBUEkgdGhhdCB3aWxsIGdpdmUgdXMgdGhlIHRvZG8gbGlzdCBpdGVtcyB0aGF0IGFyZSBzYXZlZCBvbiBpdFxuICAgIC8vcGFyc2UgaXMgdXNlZCB0byBnZXQgY29udmVydCB0aGUgSlNPTiBmcm9tIEFQSSB0byBKUyByZWFkYWJsZSBvYmplY1xuICAgIGNvbnN0IHRvZG9fbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvX2xpc3QnKTtcbiAgICBjb25zdCB0b2RvX2FyciA9IGdldF90b2RvX2FycigpO1xuXG4gICAgaWYodG9kb19hcnIgJiYgdG9kb19saXN0KXtcbiAgICAgICAgdG9kb19saXN0LmlubmVySFRNTCA9ICcnO1xuICAgICAgICBjb25zb2xlLmxvZyh0b2RvX2Fycik7XG4gICAgICAgIHRvZG9fYXJyLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgICAgIGNvbnN0IHRpdGxlX2VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHJvbmcnKTtcbiAgICAgICAgICAgIHRpdGxlX2VsZW1lbnQudGV4dENvbnRlbnQgPSAnVGl0bGU6ICc7XG4gICAgICAgICAgICBjb25zdCB0aXRsZV90ZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoaXRlbS50aXRsZSk7XG4gICAgICAgICAgICB0aXRsZV9lbGVtZW50LmFwcGVuZENoaWxkKHRpdGxlX3RleHQpO1xuICAgICAgICBcbiAgICAgICAgICAgIC8vIGNvbnN0IGRlc2NyaXB0aW9uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIC8vIGRlc2NyaXB0aW9uRWxlbWVudC50ZXh0Q29udGVudCA9ICdEZXNjcmlwdGlvbjogJyArIGl0ZW0uZGVzY3JpcHRpb247XG4gICAgICAgIFxuICAgICAgICAgICAgY29uc3QgZHVlX2RhdGVfZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIGR1ZV9kYXRlX2VsZW1lbnQudGV4dENvbnRlbnQgPSAnRHVlIERhdGU6ICcgKyBpdGVtLmR1ZV9kYXRlO1xuICAgICAgICBcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGl0ZW0udGl0bGUpO1xuICAgICAgICAgICAgLy8gbGlzdC50ZXh0Q29udGVudCA9IGAke2l0ZW0udGl0bGV9YDtcbiAgICAgICAgICAgIGxpc3QuYXBwZW5kQ2hpbGQodGl0bGVfZWxlbWVudCk7XG4gICAgICAgICAgICBsaXN0LmFwcGVuZENoaWxkKGR1ZV9kYXRlX2VsZW1lbnQpO1xuICAgICAgICAgICAgdG9kb19saXN0LmFwcGVuZENoaWxkKGxpc3QpO1xuICAgICAgICB9KTsgICAgXG4gICAgfSBlbHNlIGlmKHRvZG9fYXJyKXsgLy9lbHNlIGNvbmRpdGlvbiBpZiB0b2RvX2xpc3QgbGkgZWxlbWVtbnQgaW4gSFRNTCBpcyBlbXB0eVxuICAgICAgICBjb25zb2xlLmxvZyh0b2RvX2Fycik7XG4gICAgICAgIHRvZG9fYXJyLmZvckVhY2goKGl0ZW0saW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coaXRlbSk7XG4gICAgICAgICAgICBsaXN0LnRleHRDb250ZW50ID0gYCR7aW5kZXh9LiR7aXRlbX1gO1xuICAgICAgICAgICAgdG9kb19saXN0LmFwcGVuZENoaWxkKGxpc3QpO1xuICAgICAgICB9KTsgICAgXG4gICAgfVxuICAgIC8vbWFrZSBpdCBibGFuayBzbyB0aGF0IGV2ZXJ5dGltZSB0aGUgcGFnZSBpcyByZWZyZXNoIHdlIGNhbiB1cGRhdGUgaXQgZnJvbSBzY3JhdGNoXG59XG5cbmZ1bmN0aW9uIGFkZF90b2RvX3RvX2h0bWwoKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCk9PntcbiAgICAgICAgcmVuZGVyX3RvZG9fbGlzdCgpO1xuICAgIH0pICAgXG59XG5cbmV4cG9ydCB7YWRkX3RvZG9fdG9faHRtbH07IiwiaW1wb3J0IHtnZXRfdG9kb19hcnJ9IGZyb20gJy4vZGF0YV9mcm9tX2FwaSc7XG5pbXBvcnQge2FkZF90b2RvX3RvX2h0bWx9IGZyb20gJy4vcmVuZGVyX3RvZG9zJ1xuXG5mdW5jdGlvbiBwb3B1bGF0ZV9zdG9yYWdlKCl7XG4gICAgbGV0IHRvZG9fdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGl0bGVfaW5wdXQnKS52YWx1ZTtcbiAgICBsZXQgdG9kb19kYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2R1ZV9kYXRlJykudmFsdWU7XG4gICAgY29uc3QgdG9kb19pdGVtID0ge1xuICAgICAgICB0aXRsZTogdG9kb190aXRsZSxcbiAgICAgICAgZHVlX2RhdGUgOiB0b2RvX2RhdGVcbiAgICB9O1xuXG4gICAgY29uc3QgdG9kb19hcnIgPSBnZXRfdG9kb19hcnIoKTtcbiAgICBcbiAgICBpZiAodG9kb19pdGVtICE9PSAnJyl7XG4gICAgICAgIHRvZG9fYXJyLnB1c2godG9kb19pdGVtKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG9zJywgSlNPTi5zdHJpbmdpZnkodG9kb19hcnIpKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RpdGxlX2lucHV0JykudmFsdWUgPSAnJztcbiAgICAgICAgLy9hcyB0aGUgbmV3IHRvZG8gaXRlbSB3aWxsIGJlIGRpc3BsYXllZCB3aGVuIHJlZnJlc2ggaXMgc2V0LCB0aGUgY29kZSBiZWxvdyB3aWxsIGRvIHRoYXQgb25jZSBhIG5ldyBpdGVtIGlzIGFkZGVkXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICB9ICBcbn1cblxuZnVuY3Rpb24gZXZlbnRfbGlzdGVuZXJfdG9fc3VibWl0KCl7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCk9PntcblxuICAgICAgICB0b2RvX2Zvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHBvcHVsYXRlX3N0b3JhZ2UoKTtcbiAgICAgICAgfSlcbiAgICB9KVxufVxuXG5leHBvcnQge2V2ZW50X2xpc3RlbmVyX3RvX3N1Ym1pdH0gIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvL3doZXJlIHRoZSBjb2RlIHdpbGwgYmUgY2FsbGVkIGFuZCBpbXBsZW1lbnRlZCBoZXJlXG5pbXBvcnQge2dldF90b2RvX2Fycn0gZnJvbSAnLi9tb2R1bGVzL2RhdGFfZnJvbV9hcGknO1xuaW1wb3J0IHsgc2V0X3VwIH0gZnJvbSAnLi9tb2R1bGVzL2h0bWxfZWxlbWVudHMuanMnO1xuaW1wb3J0IHsgYWRkX3RvZG9fdG9faHRtbCB9IGZyb20gJy4vbW9kdWxlcy9yZW5kZXJfdG9kb3MuanMnO1xuaW1wb3J0IHtldmVudF9saXN0ZW5lcl90b19zdWJtaXR9IGZyb20gJy4vbW9kdWxlcy9zdWJtaXRfdG9kb3MuanMnO1xuaW1wb3J0IHtldmVudF9saXN0ZW5lcl9jbGVhcn0gZnJvbSAnLi9tb2R1bGVzL2NsZWFyX2xpc3QuanMnO1xuXG5jb25zdCBtYWluID0gKCkgPT4ge1xuICAgIHNldF91cCgpO1xuICAgIC8vIGNvbnN0IHRvZG9fYXJyID0gZ2V0X3RvZG9fYXJyKCk7XG4gICAgLy8gdG9kb19hcnIubGVuZ3RoID0gMDsgLy8gQ2xlYXIgdGhlIGFycmF5XG4gICAgLy8gbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG9zJywgSlNPTi5zdHJpbmdpZnkodG9kb19hcnIpKTsgXG4gICAgYWRkX3RvZG9fdG9faHRtbCgpO1xuICAgIGV2ZW50X2xpc3RlbmVyX3RvX3N1Ym1pdCgpO1xuICAgIGV2ZW50X2xpc3RlbmVyX2NsZWFyKCk7XG4gICAgLy8gY29uc29sZS5sb2codG9kb19hcnIpXG59XG5cbm1haW4oKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=