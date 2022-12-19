(()=>{"use strict";var n={28:(n,r,t)=>{t.d(r,{Z:()=>s});var e=t(81),a=t.n(e),o=t(645),i=t.n(o)()(a());i.push([n.id,':root {\r\n    --dark: #374151;\r\n    --darker: #1F2937;\r\n    --darkest: #111827;\r\n    --grey: #6B7280;\r\n    --purple: #8B5CF6;\r\n    --light: #EEE;\r\n}\r\n\r\n* {\r\n    margin: 0;\r\n    box-sizing: border-box;\r\n    font-family: "Fira sans", sans-serif;\r\n}\r\n\r\nbody {\r\n    display: flex;\r\n    justify-content: center;\r\n    min-height: 100vh;\r\n    color: #FFF;\r\n    background-color: var(--dark);\r\n}\r\n\r\nform input, button {\r\n    appearance: none;\r\n    border: none;\r\n    outline: none;\r\n    background: none;\r\n}\r\n\r\nbutton:hover {\r\n    opacity: 0.8;\r\n}\r\n\r\nbutton:active {\r\n    opacity: 0.6;\r\n}\r\n\r\n.app__container {\r\n    display: flex;\r\n    justify-content: center;\r\n    flex-direction: column;\r\n    padding-top: 1rem;\r\n    max-width: 100vw;\r\n    margin: 0 auto;\r\n}\r\n\r\nh1 {\r\n    text-align: center;\r\n    font-size: 2.5rem;\r\n    font-weight: 300;\r\n    color: var(--light);\r\n    margin-bottom: 2rem;\r\n}\r\n\r\n/*FORM*/\r\n.form {\r\n    display: flex;\r\n    flex: auto;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.form__input__container {\r\n    display: flex;\r\n    justify-content: center;\r\n    flex-direction: column;\r\n}\r\n\r\n.form__label {\r\n    display: inline-block;\r\n    margin-bottom: 0.5rem;\r\n    color: var(--light);\r\n    font-size: 0.7rem;\r\n}\r\n\r\n.form__input {\r\n    background-color: var(--darker);\r\n    width: 40vw;\r\n    padding: 1rem;\r\n    border-radius: 1rem;\r\n    margin-right: 0.5rem;\r\n    color: var(--light);\r\n    font-size: 1.25rem;\r\n}\r\n\r\ninput::placeholder {\r\n    color: var(--grey);\r\n}\r\n\r\n.form__button-group {\r\n    display: flex;\r\n    flex-direction: row;\r\n}\r\n\r\n.form__button-group button {\r\n    color: var(--purple);\r\n    font-size: 1.25rem;\r\n    font-weight: 700;\r\n    cursor: pointer;\r\n    transition: 0.4s;\r\n}\r\n\r\n.form__open-modal-btn {\r\n    color: var(--purple);\r\n}\r\n\r\n/*FILTERS*/\r\n.filters__container {\r\n    display: flex;\r\n    justify-content: center;\r\n    flex-direction: column;\r\n    margin: 0 auto;\r\n    width: 55vw;\r\n    min-width: 400px;\r\n}\r\n\r\n.filters__buttons-group {\r\n    display: flex;\r\n    margin-top: 1rem;\r\n    justify-content: space-around;\r\n}\r\n\r\n.filters__button {\r\n    color: var(--purple);\r\n    font-size: 1rem;\r\n    font-weight: 700;\r\n    cursor: pointer;\r\n    transition: 0.4s;\r\n}\r\n\r\n.filters__button:focus {\r\n    color: chartreuse;\r\n    font-size: 1rem;\r\n    font-weight: 700;\r\n    cursor: pointer;\r\n    transition: 0.4s;\r\n}\r\n\r\n.filters__inputs-group {\r\n    display: inline-flex;\r\n    justify-content: space-around;\r\n}\r\n\r\n.filters__text-input {\r\n    background-color: var(--darker);\r\n    width: 30vw;\r\n    padding: 0.5rem;\r\n    border-radius: 1rem;\r\n    color: var(--light);\r\n    font-size: 1.25rem;\r\n}\r\n\r\n.filters__date-input {\r\n    color: var(--darkest);\r\n    border: 1px solid #c4c4c4;\r\n    border-radius: 5px;\r\n    background-color: var(--light);\r\n    padding: 2px 2px;\r\n    box-shadow: inset 0 3px 6px rgba(0, 0, 0, 0.1);\r\n    width: 10vw;\r\n}\r\n\r\n.filters__select {\r\n    color: var(--darkest);\r\n    border: 1px solid #c4c4c4;\r\n    border-radius: 5px;\r\n    background-color: var(--light);\r\n    padding: 2px 2px;\r\n    box-shadow: inset 0 3px 6px rgba(0, 0, 0, 0.1);\r\n    width: 10vw;\r\n}\r\n\r\n\r\n/*TASK_LIST*/\r\n.tasks-list__container {\r\n    display: inline-flex;\r\n    flex: 1 1 0;\r\n    max-width: 80vw;\r\n    margin: 0 auto;\r\n    padding-top: 0.5rem;\r\n}\r\n\r\n.task-list__content {\r\n    padding-top: 1rem;\r\n}\r\n\r\n.tasks-list__title {\r\n    padding-top: 2rem;\r\n    margin-bottom: 1rem;\r\n    font-size: 2rem;\r\n    font-weight: 300;\r\n    color: var(--grey);\r\n    text-align: center;\r\n}\r\n\r\n.task__item__content {\r\n    flex: 1 1 0;\r\n}\r\n\r\n\r\n/*TASK ITEM*/\r\n.task-list {\r\n    padding: 1rem;\r\n}\r\n\r\n.task-list h2 {\r\n    font-size: 1.5rem;\r\n    font-weight: 300;\r\n    color: var(--grey);\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n.task__container {\r\n    margin: 1rem auto;\r\n    width: 60vw;\r\n    min-height: 50px;\r\n    min-width: 450px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    background-color: var(--darkest);\r\n    padding: 1rem;\r\n    border-radius: 1rem;\r\n}\r\n\r\n.completed {\r\n    background-color: #6B7280;\r\n    margin: 1rem auto;\r\n    width: 60vw;\r\n    min-height: 50px;\r\n    min-width: 450px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    padding: 1rem;\r\n    border-radius: 1rem;\r\n}\r\n\r\n.completed h3 {\r\n    text-decoration: line-through;\r\n}\r\n\r\n.task__dates-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\n.task__date {\r\n    font-size: 12px;\r\n    max-height: 25px;\r\n    max-width: 140px;\r\n    display: inline-block;\r\n    margin: 0.5rem;\r\n    color: var(--light);\r\n    overflow: hidden;\r\n}\r\n\r\n.task__description {\r\n    width: 20vw;\r\n}\r\n\r\n.task__actions-container {\r\n    display: flex;\r\n}\r\n\r\n.task__actions-container button {\r\n    cursor: pointer;\r\n    margin: 0 0.2rem;\r\n    font-size: 1.125rem;\r\n    font-weight: 700;\r\n    text-transform: uppercase;\r\n    transition: 0.4s;\r\n}\r\n\r\n.task__edit-btn {\r\n    color: var(--purple);\r\n}\r\n\r\n.task__delete-btn {\r\n    color: firebrick;\r\n}\r\n\r\n.task__checkbox-container {\r\n    margin: 10px;\r\n    width: 15px;\r\n    height: 15px;\r\n}\r\n\r\n.task__checkbox-container input[type="checkbox"] {\r\n    appearance: none;\r\n    background-color: #fff;\r\n    margin: 0;\r\n    font: inherit;\r\n    color: currentColor;\r\n    width: 1.15em;\r\n    height: 1.15em;\r\n    border: 0.15em solid currentColor;\r\n    border-radius: 0.15em;\r\n    transform: translateY(-0.075em);\r\n    display: grid;\r\n    place-content: center;\r\n}\r\n\r\n.task__checkbox-container input[type="checkbox"]::before {\r\n    content: "";\r\n    width: 0.65em;\r\n    height: 0.65em;\r\n    transform: scale(0);\r\n    transition: 120ms transform ease-in-out;\r\n    box-shadow: inset 1em 1em var(--purple);\r\n    background-color: var(--purple);\r\n    transform-origin: bottom left;\r\n    clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);\r\n}\r\n\r\n.task__checkbox-container input[type="checkbox"]:checked::before {\r\n    transform: scale(1);\r\n}\r\n\r\n.task__checkbox-container input[type="checkbox"]:focus {\r\n    outline: max(2px, 0.15em) solid currentColor;\r\n    outline-offset: max(2px, 0.15em);\r\n}\r\n\r\n.form-control + .form-control {\r\n    margin-top: 1em;\r\n}\r\n\r\n\r\n/*MODAL*/\r\n.modal__container {\r\n    display: inline-flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    position: absolute;\r\n    margin-top: 150px;\r\n    width: 40vw;\r\n    height: 50vh;\r\n    background: var(--darker);\r\n    border-radius: 1rem;\r\n    z-index: 100;\r\n}\r\n\r\n.modal__description {\r\n    padding-top: 1rem;\r\n    text-align: center;\r\n    font-size: 1.5rem;\r\n    font-weight: 300;\r\n    color: var(--grey);\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n.modal__text-input {\r\n    background-color: var(--light);\r\n    width: 25vw;\r\n    padding: 1rem;\r\n    transition: 0.2s;\r\n    border-radius: 1rem;\r\n    margin-right: 1rem;\r\n    color: var(--darker);\r\n    font-size: 1.25rem;\r\n}\r\n\r\n.modal__text-input:focus {\r\n    border: var(--purple) 1px solid;\r\n}\r\n\r\n.modal__text-input::placeholder {\r\n    color: var(--grey);\r\n}\r\n\r\n.modal__date-inputs-group {\r\n    display: flex;\r\n    flex-direction: column;\r\n    margin-top: 2rem;\r\n    margin-bottom: 2rem;\r\n}\r\n\r\n.modal__label {\r\n    margin-top: 0.5rem;\r\n    display: inline-block;\r\n    margin-bottom: 0.5rem;\r\n    color: var(--light);\r\n    font-size: 1rem;\r\n    margin-right: 1rem;\r\n}\r\n\r\n.modal_date-input {\r\n    display: inline-block;\r\n    border: 1px solid #c4c4c4;\r\n    border-radius: 5px;\r\n    background-color: var(--light);\r\n    padding: 3px 5px;\r\n    box-shadow: inset 0 3px 6px rgba(0, 0, 0, 0.1);\r\n    width: 190px;\r\n}\r\n\r\n.modal__button-group button {\r\n    color: var(--purple);\r\n    font-size: 1.25rem;\r\n    font-weight: 700;\r\n    background-image: linear-gradient(to right, var(--light), var(--purple));\r\n    -webkit-background-clip: text;\r\n    -webkit-text-fill-color: transparent;\r\n    cursor: pointer;\r\n    transition: 0.4s;\r\n}\r\n\r\n.modal__button-group {\r\n    margin-top: 2rem;\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-around;\r\n}\r\n\r\n.hide {\r\n    display: none;\r\n}\r\n\r\n#overlay {\r\n    position: absolute;\r\n    width: 100vw;\r\n    height: 100vh;\r\n    background-color: rgba(0, 0, 0, 0.5);\r\n    z-index: 30;\r\n}',""]);const s=i},645:n=>{n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var t="",e=void 0!==r[5];return r[4]&&(t+="@supports (".concat(r[4],") {")),r[2]&&(t+="@media ".concat(r[2]," {")),e&&(t+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),t+=n(r),e&&(t+="}"),r[2]&&(t+="}"),r[4]&&(t+="}"),t})).join("")},r.i=function(n,t,e,a,o){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(e)for(var s=0;s<this.length;s++){var d=this[s][0];null!=d&&(i[d]=!0)}for(var c=0;c<n.length;c++){var l=[].concat(n[c]);e&&i[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),r.push(l))}},r}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var r=[];function t(n){for(var t=-1,e=0;e<r.length;e++)if(r[e].identifier===n){t=e;break}return t}function e(n,e){for(var o={},i=[],s=0;s<n.length;s++){var d=n[s],c=e.base?d[0]+e.base:d[0],l=o[c]||0,p="".concat(c," ").concat(l);o[c]=l+1;var u=t(p),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)r[u].references++,r[u].updater(m);else{var g=a(m,e);e.byIndex=s,r.splice(s,0,{identifier:p,updater:g,references:1})}i.push(p)}return i}function a(n,r){var t=r.domAPI(r);return t.update(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap&&r.supports===n.supports&&r.layer===n.layer)return;t.update(n=r)}else t.remove()}}n.exports=function(n,a){var o=e(n=n||[],a=a||{});return function(n){n=n||[];for(var i=0;i<o.length;i++){var s=t(o[i]);r[s].references--}for(var d=e(n,a),c=0;c<o.length;c++){var l=t(o[c]);0===r[l].references&&(r[l].updater(),r.splice(l,1))}o=d}}},569:n=>{var r={};n.exports=function(n,t){var e=function(n){if(void 0===r[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}r[n]=t}return r[n]}(n);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");e.appendChild(t)}},216:n=>{n.exports=function(n){var r=document.createElement("style");return n.setAttributes(r,n.attributes),n.insert(r,n.options),r}},565:(n,r,t)=>{n.exports=function(n){var r=t.nc;r&&n.setAttribute("nonce",r)}},795:n=>{n.exports=function(n){var r=n.insertStyleElement(n);return{update:function(t){!function(n,r,t){var e="";t.supports&&(e+="@supports (".concat(t.supports,") {")),t.media&&(e+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(e+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),e+=t.css,a&&(e+="}"),t.media&&(e+="}"),t.supports&&(e+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(e+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),r.styleTagTransform(e,n,r.options)}(r,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)}}}},589:n=>{n.exports=function(n,r){if(r.styleSheet)r.styleSheet.cssText=n;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(n))}}}},r={};function t(e){var a=r[e];if(void 0!==a)return a.exports;var o=r[e]={id:e,exports:{}};return n[e](o,o.exports,t),o.exports}t.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return t.d(r,{a:r}),r},t.d=(n,r)=>{for(var e in r)t.o(r,e)&&!t.o(n,e)&&Object.defineProperty(n,e,{enumerable:!0,get:r[e]})},t.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),t.nc=void 0,(()=>{var n=t(379),r=t.n(n),e=t(795),a=t.n(e),o=t(569),i=t.n(o),s=t(565),d=t.n(s),c=t(216),l=t.n(c),p=t(589),u=t.n(p),m=t(28),g={};g.styleTagTransform=u(),g.setAttributes=d(),g.insert=i().bind(null,"head"),g.domAPI=a(),g.insertStyleElement=l(),r()(m.Z,g),m.Z&&m.Z.locals&&m.Z.locals;const f=new class{constructor(){this.modal=document.getElementById("modal")}openModal(n){this.modal.classList.remove("hide"),v.classList.remove("hide"),this.modal.appendChild(n);const r=x.querySelector("#modal-edit-text"),t=x.querySelector("#accept-modal-btn"),e=x.querySelector("#close-modal-btn"),a=x.querySelector("#modal-start"),o=x.querySelector("#modal-end");return e.addEventListener("click",(()=>this.closeModal())),{dateStartInput:a,dateEndInput:o,acceptBtn:t,textInput:r}}closeModal(){this.modal.removeChild(this.modal.children[0]),this.modal.classList.add("hide"),v.classList.add("hide")}},h=new class{renderTaskList(n){L.innerHTML="",0===n.length?L.innerHTML="<h2 class='tasks-list__title'>No tasks present<h2>":n.forEach((n=>{this.renderSingleTask(n)}))}renderSingleTask(n){const r=document.createElement("article");r.classList.add("task"),r.dataset.id=n.id,r.append(this.#n(n)),L.prepend(r)}#n(n){let{start:r,end:t,description:e,isCompleted:a}=n;const o=document.createElement("div");a?o.classList.add("completed"):o.classList.add("task__container");const i=document.createElement("div");i.classList.add("task__checkbox-container"),i.innerHTML=`<input class='task_checkbox' type='checkbox' ${a?"checked":""} />`;const s=document.createElement("div");s.innerHTML=`<span class='task__date'>Start: ${r}</span>\n\t\t<span class='task__date'>End: ${t}</span>`;const d=document.createElement("h3");d.classList.add("task__description"),d.innerText=`${e}`;const c=document.createElement("div");c.classList.add("task__actions-container");const l=document.createElement("button");l.classList.add("task__edit-btn"),l.title="Edit task",l.innerText="Edit";const p=document.createElement("button");return p.classList.add("task__delete-btn"),p.title="Delete task",p.innerText="Delete",c.append(l,p),o.append(i,s,d,c),a&&o.classList.add("completed"),o}},k=new class{getAllTasksList(){return JSON.parse(localStorage.getItem("tasks")||"[]")}addTask(n){const r=this.getAllTasksList();r.push(n),this.#r(r)}deleteTask(n){let r=this.getAllTasksList().filter((r=>r.id!==n));this.#r(r)}getTaskDataById(n){let r=this.getAllTasksList();const t=this.#t({taskList:r,taskId:n});return{task:r[t],taskIndex:t,taskList:r}}editTaskData(n,r){let{task:t,taskIndex:e,taskList:a}=this.getTaskDataById(n);a[e]={id:t.id,isCompleted:t.isCompleted,description:r.description||t.description,end:r.end||t.end,start:r.start||t.start},this.#r(a)}toggleTaskIsCompletedStatus(n){const{task:r,taskIndex:t,taskList:e}=this.getTaskDataById(n);r.isCompleted=!r.isCompleted,e[t]=r,this.#r(e)}#t({taskList:n,taskId:r}){return n.findIndex((n=>Number(n.id)===Number(r)))}#r(n){localStorage.setItem("tasks",JSON.stringify(n))}},v=document.getElementById("overlay"),b=document.getElementById("form"),x=document.getElementById("modal"),_=document.getElementById("open-modal-btn"),y=document.getElementById("task-input"),L=document.getElementById("list");class w{constructor(n,r,t){this.description=n,this.start=r,this.end=t}create(){return k.addTask({id:Date.now().toString(),description:this.description,start:this.start||I(new Date),end:this.end||E(new Date),isCompleted:!1})}}function T({titleText:n,input:r}){const t=document.createElement("div");t.classList.add("modal__content");const e=document.createElement("h2");e.innerText=n,e.classList.add("modal__description");const a=document.createElement("div");a.classList.add("modal__date-inputs-group");const o=document.createElement("label");o.for="modal-start",o.innerText="Start",o.classList.add("modal__label");const i=document.createElement("input");i.type="date",i.id="modal-start",i.classList.add("modal_date-input"),i.value=I();const s=document.createElement("label");s.for="modal-end",s.innerText="End",s.classList.add("modal__label");const d=document.createElement("input");d.type="date",d.id="modal-end",d.classList.add("modal_date-input"),d.value=E(new Date),a.append(o,i,s,d);const c=document.createElement("div");c.classList.add("modal__button-group");const l=document.createElement("button");l.classList.add("modal__button"),l.id="accept-modal-btn",l.innerText="OK";const p=document.createElement("button");return p.classList.add("modal__button"),p.id="close-modal-btn",p.innerText="Cancel",c.append(l,p),t.append(e),r?t.append(r,a,c):t.append(a,c),t}function E(n){const r=n.getDate()+1,t=n.getMonth()+1;return`${n.getFullYear()}-${t}-${r}`}function I(n=new Date){const r=n.getDate(),t=n.getMonth()+1;return`${n.getFullYear()}-${t}-${r}`}function S(){const n=y.value;new w(n).create(),""!==n&&(h.renderTaskList(k.getAllTasksList()),f.closeModal(),b.reset())}window.addEventListener("load",(()=>{h.renderTaskList(k.getAllTasksList()),b.addEventListener("submit",(()=>{S()})),_.addEventListener("click",(n=>{!function(n){n.preventDefault();let r=y.value;if(""===r)return void alert("Please type your task firstly");const{dateStartInput:t,dateEndInput:e,acceptBtn:a}=f.openModal(T({titleText:"Create task:"}));a.addEventListener("click",(()=>{new w(r,t.value,e.value).create(),h.renderTaskList(k.getAllTasksList()),f.closeModal(),b.reset()}))}(n)})),y.addEventListener("keyup",(n=>{!function(n){"Enter"!==n.code||S()}(n)}),{once:!0}),L.addEventListener("click",(n=>{!function(n){const{task:r}=function(n){if(n.target.classList.contains("task__edit-btn")){const r=n.target.closest(".task").dataset.id;return k.getTaskDataById(r)}}(n),{dateStartInput:t,dateEndInput:e,acceptBtn:a,textInput:o}=f.openModal(function(){const n=document.createElement("input");return n.type="text",n.id="modal-edit-text",n.classList.add("modal__text-input"),T({titleText:"Edit task:",input:n})}());t.value=r.start,e.value=r.end,o.value=r.description,a.addEventListener("click",(()=>{k.editTaskData(r.id,{description:o.value,start:t.value,end:e.value}),h.renderTaskList(k.getAllTasksList()),f.closeModal()}))}(n)})),L.addEventListener("click",(n=>{!function(n){if(n.target.classList.contains("task__delete-btn")){const r=n.target.closest(".task").dataset.id;k.deleteTask(r),h.renderTaskList(k.getAllTasksList())}}(n)})),L.addEventListener("change",(n=>{!function(n){if(n.target.classList.contains("task_checkbox")){const r=n.target.closest(".task").dataset.id;k.toggleTaskIsCompletedStatus(r),h.renderTaskList(k.getAllTasksList())}}(n)}))}))})()})();