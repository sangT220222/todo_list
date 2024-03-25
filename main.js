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
            console.log('clearing list');
            clear_list();
            window.location.reload();
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
    const input = create_input();
    const button = create_button();
    form.appendChild(input);
    form.appendChild(button);
    document.body.append(form);
}

function create_input(){
    const input = document.createElement('input');
    input.type = 'text';
    input.id = 'todo_input';
    input.placeholder = 'Enter a todo';
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
        todo_arr.forEach((item,index) => {
            const list = document.createElement('li');
            // console.log(item);
            list.textContent = `${index}.${item}`;
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
    let todo_in = document.querySelector('#todo_input').value;
    const todo_arr = (0,_data_from_api__WEBPACK_IMPORTED_MODULE_0__.get_todo_arr)();
    
    if (todo_in !== ''){
        todo_arr.push(todo_in);
        localStorage.setItem('todos', JSON.stringify(todo_arr));
        document.querySelector('#todo_input').value = '';
        //as the new todo item will be displayed when refresh is set, the code below will do that once a new item is added
        window.location.reload();
    }  
}

function event_listener_to_submit(){
    document.addEventListener("DOMContentLoaded", ()=>{
        const todo_form = document.querySelector('#todo_form');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBNkM7O0FBRTdDO0FBQ0EscUJBQXFCLDREQUFZO0FBQ2pDLHlCQUF5QjtBQUN6Qiw0REFBNEQ7QUFDNUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMOzs7Ozs7Ozs7Ozs7Ozs7O0FDakJBO0FBQ0Esd0JBQXdCOzs7Ozs7Ozs7Ozs7Ozs7O0FDRHhCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOzs7Ozs7Ozs7Ozs7Ozs7OztBQzdDNkM7O0FBRTdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDREQUFZOztBQUVqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsTUFBTSxHQUFHLEtBQUs7QUFDaEQ7QUFDQSxTQUFTO0FBQ1QsTUFBTSxtQkFBbUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsTUFBTSxHQUFHLEtBQUs7QUFDaEQ7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakM2QztBQUNFOztBQUUvQztBQUNBO0FBQ0EscUJBQXFCLDREQUFZO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMOztBQUVpQzs7Ozs7O1VDMUJqQztVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ3FEO0FBQ0Q7QUFDUztBQUNNO0FBQ047O0FBRTdEO0FBQ0EsSUFBSSxpRUFBTTtBQUNWO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0EsSUFBSSwwRUFBZ0I7QUFDcEIsSUFBSSxrRkFBd0I7QUFDNUIsSUFBSSw0RUFBb0I7QUFDeEI7QUFDQTs7QUFFQSxPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL21vZHVsZXMvY2xlYXJfbGlzdC5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvbW9kdWxlcy9kYXRhX2Zyb21fYXBpLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9tb2R1bGVzL2h0bWxfZWxlbWVudHMuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL21vZHVsZXMvcmVuZGVyX3RvZG9zLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9tb2R1bGVzL3N1Ym1pdF90b2Rvcy5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb19saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtnZXRfdG9kb19hcnJ9IGZyb20gJy4vZGF0YV9mcm9tX2FwaSc7XG5cbmZ1bmN0aW9uIGNsZWFyX2xpc3QoKXtcbiAgICBjb25zdCB0b2RvX2FyciA9IGdldF90b2RvX2FycigpO1xuICAgIHRvZG9fYXJyLmxlbmd0aCA9IDA7IC8vIENsZWFyIHRoZSBhcnJheVxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvcycsIEpTT04uc3RyaW5naWZ5KHRvZG9fYXJyKSk7Ly91cGRhdGVzIHRoZSBsb2NhbFN0b3JhZ2Ugd2l0aCB0aGUgY2xlYXJlZCBhcnJheSwgdGhlIGtleSBpcyB0b2Rvc1xufVxuXG5mdW5jdGlvbiBldmVudF9saXN0ZW5lcl9jbGVhcigpe1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNsZWFyX2J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjbGVhcicpO1xuICAgICAgICBjbGVhcl9idG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKGUpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjbGVhcmluZyBsaXN0Jyk7XG4gICAgICAgICAgICBjbGVhcl9saXN0KCk7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgIH0pICAgIFxuICAgIH0pXG59XG5cbmV4cG9ydCB7ZXZlbnRfbGlzdGVuZXJfY2xlYXJ9IiwiLy9mdW5jdGlvbiB0byBwdXNoIHRvZG8gaW5wdXQgYnkgdXNlcnMgdG8gbG9jYWxzdG9yYWdlXG5mdW5jdGlvbiBnZXRfdG9kb19hcnIoKXtyZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9kb3MnKSkgfHwgW107fVxuXG5leHBvcnQge2dldF90b2RvX2Fycn07IiwiZnVuY3Rpb24gY3JlYXRlX2Zvcm0oKXtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIGZvcm0uaWQgPSAndG9kb19mb3JtJztcbiAgICBjb25zdCBpbnB1dCA9IGNyZWF0ZV9pbnB1dCgpO1xuICAgIGNvbnN0IGJ1dHRvbiA9IGNyZWF0ZV9idXR0b24oKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGlucHV0KTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmQoZm9ybSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZV9pbnB1dCgpe1xuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBpbnB1dC50eXBlID0gJ3RleHQnO1xuICAgIGlucHV0LmlkID0gJ3RvZG9faW5wdXQnO1xuICAgIGlucHV0LnBsYWNlaG9sZGVyID0gJ0VudGVyIGEgdG9kbyc7XG4gICAgcmV0dXJuIGlucHV0O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVfYnV0dG9uKCl7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYnV0dG9uLnR5cGUgPSAnc3VibWl0JztcbiAgICBidXR0b24udGV4dENvbnRlbnQgPSAnQWRkIFRvZG8nO1xuICAgIHJldHVybiBidXR0b247XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZV91bCgpe1xuICAgIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICB1bC5pZCA9ICd0b2RvX2xpc3QnO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKHVsKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlX2NsZWFyX2J0bigpe1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ1dHRvbi50eXBlID0gJ3N1Ym1pdCc7XG4gICAgYnV0dG9uLmlkID0gJ2NsZWFyJztcbiAgICBidXR0b24udGV4dENvbnRlbnQgPSAnQ2xlYXIgbGlzdCc7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmQoYnV0dG9uKTtcbn1cblxuZnVuY3Rpb24gc2V0X3VwKCkge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgICAgIGNyZWF0ZV9mb3JtKCk7XG4gICAgICAgIGNyZWF0ZV91bCgpO1xuICAgICAgICBjcmVhdGVfY2xlYXJfYnRuKCk7XG4gICAgfSk7XG59XG5cbmV4cG9ydCB7c2V0X3VwfTsiLCJpbXBvcnQge2dldF90b2RvX2Fycn0gZnJvbSAnLi9kYXRhX2Zyb21fYXBpJztcblxuZnVuY3Rpb24gcmVuZGVyX3RvZG9fbGlzdCgpe1xuICAgIC8vaGVyZSB3ZSB3aWxsIHJldHJpZXZlIGFycmF5IGZyb20gbG9jYWxTdG9yYWdlIGZyb20gQVBJIHRoYXQgd2lsbCBnaXZlIHVzIHRoZSB0b2RvIGxpc3QgaXRlbXMgdGhhdCBhcmUgc2F2ZWQgb24gaXRcbiAgICAvL3BhcnNlIGlzIHVzZWQgdG8gZ2V0IGNvbnZlcnQgdGhlIEpTT04gZnJvbSBBUEkgdG8gSlMgcmVhZGFibGUgb2JqZWNcbiAgICBjb25zdCB0b2RvX2xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kb19saXN0Jyk7XG4gICAgY29uc3QgdG9kb19hcnIgPSBnZXRfdG9kb19hcnIoKTtcblxuICAgIGlmKHRvZG9fYXJyICYmIHRvZG9fbGlzdCl7XG4gICAgICAgIHRvZG9fbGlzdC5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgY29uc29sZS5sb2codG9kb19hcnIpO1xuICAgICAgICB0b2RvX2Fyci5mb3JFYWNoKChpdGVtLGluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGl0ZW0pO1xuICAgICAgICAgICAgbGlzdC50ZXh0Q29udGVudCA9IGAke2luZGV4fS4ke2l0ZW19YDtcbiAgICAgICAgICAgIHRvZG9fbGlzdC5hcHBlbmRDaGlsZChsaXN0KTtcbiAgICAgICAgfSk7ICAgIFxuICAgIH0gZWxzZSBpZih0b2RvX2Fycil7IC8vZWxzZSBjb25kaXRpb24gaWYgdG9kb19saXN0IGxpIGVsZW1lbW50IGluIEhUTUwgaXMgZW1wdHlcbiAgICAgICAgY29uc29sZS5sb2codG9kb19hcnIpO1xuICAgICAgICB0b2RvX2Fyci5mb3JFYWNoKChpdGVtLGluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGl0ZW0pO1xuICAgICAgICAgICAgbGlzdC50ZXh0Q29udGVudCA9IGAke2luZGV4fS4ke2l0ZW19YDtcbiAgICAgICAgICAgIHRvZG9fbGlzdC5hcHBlbmRDaGlsZChsaXN0KTtcbiAgICAgICAgfSk7ICAgIFxuICAgIH1cbiAgICAvL21ha2UgaXQgYmxhbmsgc28gdGhhdCBldmVyeXRpbWUgdGhlIHBhZ2UgaXMgcmVmcmVzaCB3ZSBjYW4gdXBkYXRlIGl0IGZyb20gc2NyYXRjaFxufVxuXG5mdW5jdGlvbiBhZGRfdG9kb190b19odG1sKCkge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpPT57XG4gICAgICAgIHJlbmRlcl90b2RvX2xpc3QoKTtcbiAgICB9KSAgIFxufVxuXG5leHBvcnQge2FkZF90b2RvX3RvX2h0bWx9OyIsImltcG9ydCB7Z2V0X3RvZG9fYXJyfSBmcm9tICcuL2RhdGFfZnJvbV9hcGknO1xuaW1wb3J0IHthZGRfdG9kb190b19odG1sfSBmcm9tICcuL3JlbmRlcl90b2RvcydcblxuZnVuY3Rpb24gcG9wdWxhdGVfc3RvcmFnZSgpe1xuICAgIGxldCB0b2RvX2luID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG9faW5wdXQnKS52YWx1ZTtcbiAgICBjb25zdCB0b2RvX2FyciA9IGdldF90b2RvX2FycigpO1xuICAgIFxuICAgIGlmICh0b2RvX2luICE9PSAnJyl7XG4gICAgICAgIHRvZG9fYXJyLnB1c2godG9kb19pbik7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvcycsIEpTT04uc3RyaW5naWZ5KHRvZG9fYXJyKSk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvX2lucHV0JykudmFsdWUgPSAnJztcbiAgICAgICAgLy9hcyB0aGUgbmV3IHRvZG8gaXRlbSB3aWxsIGJlIGRpc3BsYXllZCB3aGVuIHJlZnJlc2ggaXMgc2V0LCB0aGUgY29kZSBiZWxvdyB3aWxsIGRvIHRoYXQgb25jZSBhIG5ldyBpdGVtIGlzIGFkZGVkXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICB9ICBcbn1cblxuZnVuY3Rpb24gZXZlbnRfbGlzdGVuZXJfdG9fc3VibWl0KCl7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCk9PntcbiAgICAgICAgY29uc3QgdG9kb19mb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG9fZm9ybScpO1xuICAgICAgICB0b2RvX2Zvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHBvcHVsYXRlX3N0b3JhZ2UoKTtcbiAgICAgICAgfSlcbiAgICB9KVxufVxuXG5leHBvcnQge2V2ZW50X2xpc3RlbmVyX3RvX3N1Ym1pdH0gIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvL3doZXJlIHRoZSBjb2RlIHdpbGwgYmUgY2FsbGVkIGFuZCBpbXBsZW1lbnRlZCBoZXJlXG5pbXBvcnQge2dldF90b2RvX2Fycn0gZnJvbSAnLi9tb2R1bGVzL2RhdGFfZnJvbV9hcGknO1xuaW1wb3J0IHsgc2V0X3VwIH0gZnJvbSAnLi9tb2R1bGVzL2h0bWxfZWxlbWVudHMuanMnO1xuaW1wb3J0IHsgYWRkX3RvZG9fdG9faHRtbCB9IGZyb20gJy4vbW9kdWxlcy9yZW5kZXJfdG9kb3MuanMnO1xuaW1wb3J0IHtldmVudF9saXN0ZW5lcl90b19zdWJtaXR9IGZyb20gJy4vbW9kdWxlcy9zdWJtaXRfdG9kb3MuanMnO1xuaW1wb3J0IHtldmVudF9saXN0ZW5lcl9jbGVhcn0gZnJvbSAnLi9tb2R1bGVzL2NsZWFyX2xpc3QuanMnO1xuXG5jb25zdCBtYWluID0gKCkgPT4ge1xuICAgIHNldF91cCgpO1xuICAgIC8vIGNvbnN0IHRvZG9fYXJyID0gZ2V0X3RvZG9fYXJyKCk7XG4gICAgLy8gdG9kb19hcnIubGVuZ3RoID0gMDsgLy8gQ2xlYXIgdGhlIGFycmF5XG4gICAgLy8gbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG9zJywgSlNPTi5zdHJpbmdpZnkodG9kb19hcnIpKTsgXG4gICAgYWRkX3RvZG9fdG9faHRtbCgpO1xuICAgIGV2ZW50X2xpc3RlbmVyX3RvX3N1Ym1pdCgpO1xuICAgIGV2ZW50X2xpc3RlbmVyX2NsZWFyKCk7XG4gICAgLy8gY29uc29sZS5sb2codG9kb19hcnIpXG59XG5cbm1haW4oKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=