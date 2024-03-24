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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0Esd0JBQXdCOzs7Ozs7Ozs7Ozs7Ozs7O0FDRHhCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckM2Qzs7QUFFN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNERBQVk7O0FBRWpDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxNQUFNLEdBQUcsS0FBSztBQUNoRDtBQUNBLFNBQVM7QUFDVCxNQUFNLG1CQUFtQjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxNQUFNLEdBQUcsS0FBSztBQUNoRDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQzZDO0FBQ0U7O0FBRS9DO0FBQ0E7QUFDQSxxQkFBcUIsNERBQVk7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7O0FBRWlDOzs7Ozs7VUMxQmpDO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNxRDtBQUNGO0FBQ1M7QUFDTTs7QUFFbEU7QUFDQSxJQUFJLGlFQUFNO0FBQ1Y7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQSxJQUFJLDBFQUFnQjtBQUNwQixJQUFJLGtGQUF3QjtBQUM1QjtBQUNBO0FBQ0E7O0FBRUEsTyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9tb2R1bGVzL2RhdGFfZnJvbV9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL21vZHVsZXMvaHRtbF9lbGVtZW50cy5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvbW9kdWxlcy9yZW5kZXJfdG9kb3MuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL21vZHVsZXMvc3VibWl0X3RvZG9zLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvL2Z1bmN0aW9uIHRvIHB1c2ggdG9kbyBpbnB1dCBieSB1c2VycyB0byBsb2NhbHN0b3JhZ2VcbmZ1bmN0aW9uIGdldF90b2RvX2Fycigpe3JldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2RvcycpKSB8fCBbXTt9XG5cbmV4cG9ydCB7Z2V0X3RvZG9fYXJyfTsiLCJmdW5jdGlvbiBjcmVhdGVfZm9ybSgpe1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgZm9ybS5pZCA9ICd0b2RvX2Zvcm0nO1xuICAgIGNvbnN0IGlucHV0ID0gY3JlYXRlX2lucHV0KCk7XG4gICAgY29uc3QgYnV0dG9uID0gY3JlYXRlX2J1dHRvbigpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZChmb3JtKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlX2lucHV0KCl7XG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGlucHV0LnR5cGUgPSAndGV4dCc7XG4gICAgaW5wdXQuaWQgPSAndG9kb19pbnB1dCc7XG4gICAgaW5wdXQucGxhY2Vob2xkZXIgPSAnRW50ZXIgYSB0b2RvJztcbiAgICByZXR1cm4gaW5wdXQ7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZV9idXR0b24oKXtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidXR0b24udHlwZSA9ICdzdWJtaXQnO1xuICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9ICdBZGQgVG9kbyc7XG4gICAgcmV0dXJuIGJ1dHRvbjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlX3VsKCl7XG4gICAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIHVsLmlkID0gJ3RvZG9fbGlzdCc7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmQodWwpO1xufVxuXG5cbmZ1bmN0aW9uIHNldF91cCgpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgICAgICBjcmVhdGVfZm9ybSgpO1xuICAgICAgICBjcmVhdGVfdWwoKTtcbiAgICB9KTtcbn1cblxuZXhwb3J0IHtzZXRfdXB9OyIsImltcG9ydCB7Z2V0X3RvZG9fYXJyfSBmcm9tICcuL2RhdGFfZnJvbV9hcGknO1xuXG5mdW5jdGlvbiByZW5kZXJfdG9kb19saXN0KCl7XG4gICAgLy9oZXJlIHdlIHdpbGwgcmV0cmlldmUgYXJyYXkgZnJvbSBsb2NhbFN0b3JhZ2UgZnJvbSBBUEkgdGhhdCB3aWxsIGdpdmUgdXMgdGhlIHRvZG8gbGlzdCBpdGVtcyB0aGF0IGFyZSBzYXZlZCBvbiBpdFxuICAgIC8vcGFyc2UgaXMgdXNlZCB0byBnZXQgY29udmVydCB0aGUgSlNPTiBmcm9tIEFQSSB0byBKUyByZWFkYWJsZSBvYmplY1xuICAgIGNvbnN0IHRvZG9fbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvX2xpc3QnKTtcbiAgICBjb25zdCB0b2RvX2FyciA9IGdldF90b2RvX2FycigpO1xuXG4gICAgaWYodG9kb19hcnIgJiYgdG9kb19saXN0KXtcbiAgICAgICAgdG9kb19saXN0LmlubmVySFRNTCA9ICcnO1xuICAgICAgICBjb25zb2xlLmxvZyh0b2RvX2Fycik7XG4gICAgICAgIHRvZG9fYXJyLmZvckVhY2goKGl0ZW0saW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coaXRlbSk7XG4gICAgICAgICAgICBsaXN0LnRleHRDb250ZW50ID0gYCR7aW5kZXh9LiR7aXRlbX1gO1xuICAgICAgICAgICAgdG9kb19saXN0LmFwcGVuZENoaWxkKGxpc3QpO1xuICAgICAgICB9KTsgICAgXG4gICAgfSBlbHNlIGlmKHRvZG9fYXJyKXsgLy9lbHNlIGNvbmRpdGlvbiBpZiB0b2RvX2xpc3QgbGkgZWxlbWVtbnQgaW4gSFRNTCBpcyBlbXB0eVxuICAgICAgICBjb25zb2xlLmxvZyh0b2RvX2Fycik7XG4gICAgICAgIHRvZG9fYXJyLmZvckVhY2goKGl0ZW0saW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coaXRlbSk7XG4gICAgICAgICAgICBsaXN0LnRleHRDb250ZW50ID0gYCR7aW5kZXh9LiR7aXRlbX1gO1xuICAgICAgICAgICAgdG9kb19saXN0LmFwcGVuZENoaWxkKGxpc3QpO1xuICAgICAgICB9KTsgICAgXG4gICAgfVxuICAgIC8vbWFrZSBpdCBibGFuayBzbyB0aGF0IGV2ZXJ5dGltZSB0aGUgcGFnZSBpcyByZWZyZXNoIHdlIGNhbiB1cGRhdGUgaXQgZnJvbSBzY3JhdGNoXG59XG5cbmZ1bmN0aW9uIGFkZF90b2RvX3RvX2h0bWwoKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCk9PntcbiAgICAgICAgcmVuZGVyX3RvZG9fbGlzdCgpO1xuICAgIH0pICAgXG59XG5cbmV4cG9ydCB7YWRkX3RvZG9fdG9faHRtbH07IiwiaW1wb3J0IHtnZXRfdG9kb19hcnJ9IGZyb20gJy4vZGF0YV9mcm9tX2FwaSc7XG5pbXBvcnQge2FkZF90b2RvX3RvX2h0bWx9IGZyb20gJy4vcmVuZGVyX3RvZG9zJ1xuXG5mdW5jdGlvbiBwb3B1bGF0ZV9zdG9yYWdlKCl7XG4gICAgbGV0IHRvZG9faW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kb19pbnB1dCcpLnZhbHVlO1xuICAgIGNvbnN0IHRvZG9fYXJyID0gZ2V0X3RvZG9fYXJyKCk7XG4gICAgXG4gICAgaWYgKHRvZG9faW4gIT09ICcnKXtcbiAgICAgICAgdG9kb19hcnIucHVzaCh0b2RvX2luKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG9zJywgSlNPTi5zdHJpbmdpZnkodG9kb19hcnIpKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG9faW5wdXQnKS52YWx1ZSA9ICcnO1xuICAgICAgICAvL2FzIHRoZSBuZXcgdG9kbyBpdGVtIHdpbGwgYmUgZGlzcGxheWVkIHdoZW4gcmVmcmVzaCBpcyBzZXQsIHRoZSBjb2RlIGJlbG93IHdpbGwgZG8gdGhhdCBvbmNlIGEgbmV3IGl0ZW0gaXMgYWRkZWRcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH0gIFxufVxuXG5mdW5jdGlvbiBldmVudF9saXN0ZW5lcl90b19zdWJtaXQoKXtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKT0+e1xuICAgICAgICBjb25zdCB0b2RvX2Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kb19mb3JtJyk7XG4gICAgICAgIHRvZG9fZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgcG9wdWxhdGVfc3RvcmFnZSgpO1xuICAgICAgICB9KVxuICAgIH0pXG59XG5cbmV4cG9ydCB7ZXZlbnRfbGlzdGVuZXJfdG9fc3VibWl0fSAiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vd2hlcmUgdGhlIGNvZGUgd2lsbCBiZSBjYWxsZWQgYW5kIGltcGxlbWVudGVkIGhlcmVcbmltcG9ydCB7Z2V0X3RvZG9fYXJyfSBmcm9tICcuL21vZHVsZXMvZGF0YV9mcm9tX2FwaSc7XG5pbXBvcnQgeyBzZXRfdXAgfSBmcm9tICcuL21vZHVsZXMvaHRtbF9lbGVtZW50cy5qcydcbmltcG9ydCB7IGFkZF90b2RvX3RvX2h0bWwgfSBmcm9tICcuL21vZHVsZXMvcmVuZGVyX3RvZG9zLmpzJ1xuaW1wb3J0IHtldmVudF9saXN0ZW5lcl90b19zdWJtaXR9IGZyb20gJy4vbW9kdWxlcy9zdWJtaXRfdG9kb3MuanMnXG5cbmNvbnN0IG1haW4gPSAoKSA9PiB7XG4gICAgc2V0X3VwKCk7XG4gICAgLy8gY29uc3QgdG9kb19hcnIgPSBnZXRfdG9kb19hcnIoKTtcbiAgICAvLyB0b2RvX2Fyci5sZW5ndGggPSAwOyAvLyBDbGVhciB0aGUgYXJyYXlcbiAgICAvLyBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9kb3MnLCBKU09OLnN0cmluZ2lmeSh0b2RvX2FycikpOyBcbiAgICBhZGRfdG9kb190b19odG1sKCk7XG4gICAgZXZlbnRfbGlzdGVuZXJfdG9fc3VibWl0KCk7XG4gICAgXG4gICAgLy8gY29uc29sZS5sb2codG9kb19hcnIpXG59XG5cbm1haW4oKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=