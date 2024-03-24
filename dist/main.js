/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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


function populate_storage(){
    let todo_in = document.querySelector('#todo_input').value;
    const todo_arr = (0,_data_from_api__WEBPACK_IMPORTED_MODULE_0__.get_todo_arr)();
    
    if (todo_in !== ''){
        todo_arr.push(todo_in);
        localStorage.setItem('todos', JSON.stringify(todo_arr));
        document.querySelector('#todo_input').value = '';
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
//where the code will be called and implemented here





const main = () => {
    (0,_modules_html_elements_js__WEBPACK_IMPORTED_MODULE_1__.set_up)();
    // const todo_arr = get_todo_arr();
    // todo_arr.length = 0; // Clear the array
    // localStorage.setItem('todos', JSON.stringify(todo_arr)); 
    (0,_modules_render_todos_js__WEBPACK_IMPORTED_MODULE_2__.add_todo_to_html)();
    (0,_modules_submit_todos_js__WEBPACK_IMPORTED_MODULE_3__.event_listener_to_submit)();
    // console.log(todo_arr)
}

main();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0Esd0JBQXdCOzs7Ozs7Ozs7Ozs7Ozs7O0FDRHhCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckM2Qzs7QUFFN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNERBQVk7O0FBRWpDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxNQUFNLEdBQUcsS0FBSztBQUNoRDtBQUNBLFNBQVM7QUFDVCxNQUFNLG1CQUFtQjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxNQUFNLEdBQUcsS0FBSztBQUNoRDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2pDNkM7O0FBRTdDO0FBQ0E7QUFDQSxxQkFBcUIsNERBQVk7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDs7QUFFaUM7Ozs7OztVQ3ZCakM7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ3FEO0FBQ0Y7QUFDUztBQUNNOztBQUVsRTtBQUNBLElBQUksaUVBQU07QUFDVjtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBLElBQUksMEVBQWdCO0FBQ3BCLElBQUksa0ZBQXdCO0FBQzVCO0FBQ0E7O0FBRUEsTyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9tb2R1bGVzL2RhdGFfZnJvbV9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL21vZHVsZXMvaHRtbF9lbGVtZW50cy5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvbW9kdWxlcy9yZW5kZXJfdG9kb3MuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL21vZHVsZXMvc3VibWl0X3RvZG9zLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvL2Z1bmN0aW9uIHRvIHB1c2ggdG9kbyBpbnB1dCBieSB1c2VycyB0byBsb2NhbHN0b3JhZ2VcbmZ1bmN0aW9uIGdldF90b2RvX2Fycigpe3JldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2RvcycpKSB8fCBbXTt9XG5cbmV4cG9ydCB7Z2V0X3RvZG9fYXJyfTsiLCJmdW5jdGlvbiBjcmVhdGVfZm9ybSgpe1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgZm9ybS5pZCA9ICd0b2RvX2Zvcm0nO1xuICAgIGNvbnN0IGlucHV0ID0gY3JlYXRlX2lucHV0KCk7XG4gICAgY29uc3QgYnV0dG9uID0gY3JlYXRlX2J1dHRvbigpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZChmb3JtKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlX2lucHV0KCl7XG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGlucHV0LnR5cGUgPSAndGV4dCc7XG4gICAgaW5wdXQuaWQgPSAndG9kb19pbnB1dCc7XG4gICAgaW5wdXQucGxhY2Vob2xkZXIgPSAnRW50ZXIgYSB0b2RvJztcbiAgICByZXR1cm4gaW5wdXQ7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZV9idXR0b24oKXtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidXR0b24udHlwZSA9ICdzdWJtaXQnO1xuICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9ICdBZGQgVG9kbyc7XG4gICAgcmV0dXJuIGJ1dHRvbjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlX3VsKCl7XG4gICAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIHVsLmlkID0gJ3RvZG9fbGlzdCc7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmQodWwpO1xufVxuXG5cbmZ1bmN0aW9uIHNldF91cCgpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgICAgICBjcmVhdGVfZm9ybSgpO1xuICAgICAgICBjcmVhdGVfdWwoKTtcbiAgICB9KTtcbn1cblxuZXhwb3J0IHtzZXRfdXB9OyIsImltcG9ydCB7Z2V0X3RvZG9fYXJyfSBmcm9tICcuL2RhdGFfZnJvbV9hcGknO1xuXG5mdW5jdGlvbiByZW5kZXJfdG9kb19saXN0KCl7XG4gICAgLy9oZXJlIHdlIHdpbGwgcmV0cmlldmUgYXJyYXkgZnJvbSBsb2NhbFN0b3JhZ2UgZnJvbSBBUEkgdGhhdCB3aWxsIGdpdmUgdXMgdGhlIHRvZG8gbGlzdCBpdGVtcyB0aGF0IGFyZSBzYXZlZCBvbiBpdFxuICAgIC8vcGFyc2UgaXMgdXNlZCB0byBnZXQgY29udmVydCB0aGUgSlNPTiBmcm9tIEFQSSB0byBKUyByZWFkYWJsZSBvYmplY1xuICAgIGNvbnN0IHRvZG9fbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvX2xpc3QnKTtcbiAgICBjb25zdCB0b2RvX2FyciA9IGdldF90b2RvX2FycigpO1xuXG4gICAgaWYodG9kb19hcnIgJiYgdG9kb19saXN0KXtcbiAgICAgICAgdG9kb19saXN0LmlubmVySFRNTCA9ICcnO1xuICAgICAgICBjb25zb2xlLmxvZyh0b2RvX2Fycik7XG4gICAgICAgIHRvZG9fYXJyLmZvckVhY2goKGl0ZW0saW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coaXRlbSk7XG4gICAgICAgICAgICBsaXN0LnRleHRDb250ZW50ID0gYCR7aW5kZXh9LiR7aXRlbX1gO1xuICAgICAgICAgICAgdG9kb19saXN0LmFwcGVuZENoaWxkKGxpc3QpO1xuICAgICAgICB9KTsgICAgXG4gICAgfSBlbHNlIGlmKHRvZG9fYXJyKXsgLy9lbHNlIGNvbmRpdGlvbiBpZiB0b2RvX2xpc3QgbGkgZWxlbWVtbnQgaW4gSFRNTCBpcyBlbXB0eVxuICAgICAgICBjb25zb2xlLmxvZyh0b2RvX2Fycik7XG4gICAgICAgIHRvZG9fYXJyLmZvckVhY2goKGl0ZW0saW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coaXRlbSk7XG4gICAgICAgICAgICBsaXN0LnRleHRDb250ZW50ID0gYCR7aW5kZXh9LiR7aXRlbX1gO1xuICAgICAgICAgICAgdG9kb19saXN0LmFwcGVuZENoaWxkKGxpc3QpO1xuICAgICAgICB9KTsgICAgXG4gICAgfVxuICAgIC8vbWFrZSBpdCBibGFuayBzbyB0aGF0IGV2ZXJ5dGltZSB0aGUgcGFnZSBpcyByZWZyZXNoIHdlIGNhbiB1cGRhdGUgaXQgZnJvbSBzY3JhdGNoXG59XG5cbmZ1bmN0aW9uIGFkZF90b2RvX3RvX2h0bWwoKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCk9PntcbiAgICAgICAgcmVuZGVyX3RvZG9fbGlzdCgpO1xuICAgIH0pICAgXG59XG5cbmV4cG9ydCB7YWRkX3RvZG9fdG9faHRtbH07IiwiaW1wb3J0IHtnZXRfdG9kb19hcnJ9IGZyb20gJy4vZGF0YV9mcm9tX2FwaSc7XG5cbmZ1bmN0aW9uIHBvcHVsYXRlX3N0b3JhZ2UoKXtcbiAgICBsZXQgdG9kb19pbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvX2lucHV0JykudmFsdWU7XG4gICAgY29uc3QgdG9kb19hcnIgPSBnZXRfdG9kb19hcnIoKTtcbiAgICBcbiAgICBpZiAodG9kb19pbiAhPT0gJycpe1xuICAgICAgICB0b2RvX2Fyci5wdXNoKHRvZG9faW4pO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9kb3MnLCBKU09OLnN0cmluZ2lmeSh0b2RvX2FycikpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kb19pbnB1dCcpLnZhbHVlID0gJyc7XG4gICAgfSAgXG59XG5cbmZ1bmN0aW9uIGV2ZW50X2xpc3RlbmVyX3RvX3N1Ym1pdCgpe1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpPT57XG4gICAgICAgIGNvbnN0IHRvZG9fZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvX2Zvcm0nKTtcbiAgICAgICAgdG9kb19mb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBwb3B1bGF0ZV9zdG9yYWdlKCk7XG4gICAgICAgIH0pXG4gICAgfSlcbn1cblxuZXhwb3J0IHtldmVudF9saXN0ZW5lcl90b19zdWJtaXR9ICIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy93aGVyZSB0aGUgY29kZSB3aWxsIGJlIGNhbGxlZCBhbmQgaW1wbGVtZW50ZWQgaGVyZVxuaW1wb3J0IHtnZXRfdG9kb19hcnJ9IGZyb20gJy4vbW9kdWxlcy9kYXRhX2Zyb21fYXBpJztcbmltcG9ydCB7IHNldF91cCB9IGZyb20gJy4vbW9kdWxlcy9odG1sX2VsZW1lbnRzLmpzJ1xuaW1wb3J0IHsgYWRkX3RvZG9fdG9faHRtbCB9IGZyb20gJy4vbW9kdWxlcy9yZW5kZXJfdG9kb3MuanMnXG5pbXBvcnQge2V2ZW50X2xpc3RlbmVyX3RvX3N1Ym1pdH0gZnJvbSAnLi9tb2R1bGVzL3N1Ym1pdF90b2Rvcy5qcydcblxuY29uc3QgbWFpbiA9ICgpID0+IHtcbiAgICBzZXRfdXAoKTtcbiAgICAvLyBjb25zdCB0b2RvX2FyciA9IGdldF90b2RvX2FycigpO1xuICAgIC8vIHRvZG9fYXJyLmxlbmd0aCA9IDA7IC8vIENsZWFyIHRoZSBhcnJheVxuICAgIC8vIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvcycsIEpTT04uc3RyaW5naWZ5KHRvZG9fYXJyKSk7IFxuICAgIGFkZF90b2RvX3RvX2h0bWwoKTtcbiAgICBldmVudF9saXN0ZW5lcl90b19zdWJtaXQoKTtcbiAgICAvLyBjb25zb2xlLmxvZyh0b2RvX2Fycilcbn1cblxubWFpbigpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==