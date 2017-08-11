webpackJsonp([1],{177:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(2),s=n.n(a);e.default={props:["task"],methods:{destroy:function(){var t=this;s.a.delete("/api/v1/tasks/"+this.task.id).then(function(){return t.$emit("destroy",t.task)})}}}},197:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"box"},[n("div",{staticClass:"content"},[t._v("\n    "+t._s(t.task.description)+"\n  ")]),t._v(" "),n("nav",{staticClass:"level"},[n("div",{staticClass:"level-left"},[n("a",{staticClass:"level-item",on:{click:function(e){t.$emit("select",t.task)}}},[t._m(0)]),t._v(" "),n("a",{staticClass:"level-item",on:{click:t.destroy}},[t._m(1)])]),t._v(" "),n("div",{staticClass:"level-right"},[n("div",{staticClass:"level-item"},[n("small",[t._v("\n          "+t._s(t.task.date)+"\n        ")])])])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"icon is-small"},[n("i",{staticClass:"fa fa-pencil",attrs:{"aria-hidden":"true"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"icon is-small is-danger"},[n("i",{staticClass:"fa fa-trash",attrs:{"aria-hidden":"true"}})])}]}},198:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("div",{staticClass:"columns"},[n("div",{staticClass:"column"},[n("div",{staticClass:"field"},[n("div",{staticClass:"control"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.newTask.description,expression:"newTask.description"}],staticClass:"input",attrs:{type:"text"},domProps:{value:t.newTask.description},on:{input:function(e){e.target.composing||(t.newTask.description=e.target.value)}}})])]),t._v(" "),n("div",{staticClass:"field"},[n("div",{staticClass:"control"},[n("button",{staticClass:"button is-primary",on:{click:t.addTask}},[t._v("\n            Add\n          ")])])])])]),t._v(" "),n("div",{staticClass:"columns"},[n("div",{staticClass:"column"},t._l(t.tasks,function(e){return n("box",{key:e.id,attrs:{task:e},on:{select:t.selectTask,destroy:t.removeTask}})}))])])},staticRenderFns:[]}},199:function(t,e,n){var a=n(3)(n(200),n(201),null,null,null);t.exports=a.exports},200:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(2),s=n.n(a),r=n(27),i=n.n(r),o=n(12);n.n(o);e.default={components:{Box:i.a},data:function(){return{tasks:[]}},created:function(){this.fetchTasks()},methods:{fetchTasks:function(){var t=this,e=new Date;e.setDate(e.getDate()-1),e.setHours(12),e=Object(o.format)(e,"YYYY-MM-DD"),s.a.get("/api/v1/tasks",{params:{day:e}}).then(function(e){var n=e.data;t.tasks=n.data})}}}},201:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("div",{staticClass:"columns"},[n("div",{staticClass:"column"},t._l(t.tasks,function(t){return n("box",{key:t.id,attrs:{task:t}})}))])])},staticRenderFns:[]}},202:function(t,e,n){var a=n(3)(n(203),n(204),null,null,null);t.exports=a.exports},203:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(2),s=n.n(a),r=n(12),i=(n.n(r),n(27)),o=n.n(i);e.default={components:{Box:o.a},data:function(){return{tasks:[]}},created:function(){this.fetchTasks()},methods:{fetchTasks:function(){var t=this,e=Object(r.format)(Object(r.startOfWeek)(new Date,{weekStartsOn:1}),"YYYY-MM-DD"),n=Object(r.format)(Object(r.endOfWeek)(new Date,{weekStartsOn:1}),"YYYY-MM-DD");s.a.get("/api/v1/tasks",{params:{start_day:e,end_day:n}}).then(function(e){var n=e.data;t.tasks=n.data})}}}},204:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("div",{staticClass:"columns"},[n("div",{staticClass:"column"},t._l(t.tasks,function(t){return n("box",{key:t.id,attrs:{task:t}})}))])])},staticRenderFns:[]}},205:function(t,e,n){var a=n(3)(n(206),n(207),null,null,null);t.exports=a.exports},206:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(2),s=n.n(a);e.default={data:function(){return{githubUrl:""}},created:function(){var t=this;s.a.get("/login/github").then(function(e){var n=e.data;t.githubUrl=n})},methods:{}}},207:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"columns"},[n("div",{staticClass:"column is-3"},[n("div",{staticClass:"card"},[n("div",{staticClass:"card-content"},[n("p",{staticClass:"title"},[t._v("\n          Login\n        ")]),t._v(" "),n("a",{staticClass:"button",attrs:{href:t.githubUrl}},[t._m(0),t._v(" "),n("span",[t._v("\n            Github\n          ")])])])])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"icon"},[n("i",{staticClass:"fa fa-github",attrs:{"aria-hidden":"true"}})])}]}},208:function(t,e){},209:function(t,e){},210:function(t,e){},211:function(t,e,n){var a=n(3)(n(212),n(216),null,null,null);t.exports=a.exports},212:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(213),s=n.n(a);e.default={components:{Navbar:s.a}}},213:function(t,e,n){var a=n(3)(n(214),n(215),null,null,null);t.exports=a.exports},214:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(29),s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t};e.default={computed:s({},Object(a.mapGetters)({authCheck:"Auth/check"}))}},215:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"navbar",attrs:{id:"navbar"}},[t._m(0),t._v(" "),n("div",{staticClass:"navbar-menu"},[n("div",{staticClass:"navbar-end"},[n("router-link",{staticClass:"navbar-item",attrs:{to:{name:"today-view"}}},[t._v("\n        Home\n      ")]),t._v(" "),n("a",{directives:[{name:"show",rawName:"v-show",value:t.authCheck,expression:"authCheck"}],staticClass:"navbar-item",attrs:{href:"/logout"}},[t._v("\n        Logout\n      ")])],1)])])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"navbar-brand"},[n("a",{staticClass:"navbar-item",attrs:{href:""}},[t._v("\n      Quid\n    ")]),t._v(" "),n("div",{staticClass:"navbar-burger"},[n("span"),t._v(" "),n("span"),t._v(" "),n("span")])])}]}},216:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",[n("navbar"),t._v(" "),n("div",{staticClass:"tabs is-centered"},[n("ul",[n("router-link",{attrs:{tag:"li",to:{name:"today-view"}}},[n("a",[t._v("Today")])]),t._v(" "),n("router-link",{attrs:{tag:"li",to:{name:"yesterday-view"}}},[n("a",[t._v("Yerterday")])]),t._v(" "),n("router-link",{attrs:{tag:"li",to:{name:"week-view"}}},[n("a",[t._v("Week")])])],1)]),t._v(" "),n("section",{attrs:{id:"router-view"}},[n("div",{staticClass:"container"},[n("router-view")],1)])],1)},staticRenderFns:[]}},217:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(2),s=n.n(a);s.a.defaults.headers.common["X-Requested-With"]="XMLHttpRequest";var r=document.head.querySelector('meta[name="csrf-token"]');r&&(s.a.defaults.headers.common["X-CSRF-TOKEN"]=r.content)},218:function(t,e){},27:function(t,e,n){var a=n(3)(n(177),n(197),null,null,null);t.exports=a.exports},3:function(t,e){t.exports=function(t,e,n,a,s){var r,i=t=t||{},o=typeof t.default;"object"!==o&&"function"!==o||(r=t,i=t.default);var c="function"==typeof i?i.options:i;e&&(c.render=e.render,c.staticRenderFns=e.staticRenderFns),a&&(c._scopeId=a);var u;if(s?(u=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},c._ssrRegister=u):n&&(u=n),u){var l=c.functional,d=l?c.render:c.beforeCreate;l?c.render=function(t,e){return u.call(e),d(t,e)}:c.beforeCreate=d?[].concat(d,u):[u]}return{esModule:r,exports:i,options:c}}},71:function(t,e,n){n(72),t.exports=n(218)},72:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={setCurrent:function(t,e){(0,t.commit)("SET_CURRENT_AUTH",e)}},s={current:function(t){return t.current},check:function(t){return!!t.current}},r=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}({},"SET_CURRENT_AUTH",function(t,e){t.current=e}),i={state:{current:null},actions:a,getters:s,mutations:r,namespaced:!0},o=n(11),c=n.n(o),u=n(29),l=n(208),d=n.n(l),v=n(209),f=n.n(v),p=n(210),m=n.n(p);c.a.use(u.default);var h=new u.default.Store({actions:d.a,getters:f.a,mutations:m.a,modules:{Auth:i}}),_=n(11),k=n.n(_),C=n(30),b=n(74),y=n.n(b),w=n(199),x=n.n(w),g=n(202),T=n.n(g),O=n(205),E=n.n(O),j=n(2),M=n.n(j);k.a.use(C.default);var Y=[{path:"/",component:y.a,name:"today-view",meta:{requiresAuth:!0},beforeEnter:function(t,e,n){M.a.get("/me").then(function(t){var e=t.data;h.dispatch("Auth/setCurrent",e)}).then(function(){return n()}),n()}},{path:"/week",component:T.a,name:"week-view",meta:{requiresAuth:!0}},{path:"/yesterday",component:x.a,name:"yesterday-view",meta:{requiresAuth:!0}},{path:"/login",component:E.a,meta:{requiresAuth:!1},beforeEnter:function(t,e,n){M.a.get("/me").then(function(t){var e=t.data;e?(h.dispatch("Auth/setCurrent",e),n({name:"today-view"})):n()})}}],R=new C.default({routes:Y,base:"/w/",mode:"history",linkExactActiveClass:"is-active"}),D=n(11),$=n.n(D),A=n(211),P=n.n(A);n(217),R.beforeEach(function(t,e,n){t.matched.some(function(t){return t.meta.requiresAuth})?h.getters["Auth/check"]?n():n({path:"/login"}):n()}),new $.a({store:h,router:R,el:"#app",render:function(t){return t(P.a)}})},74:function(t,e,n){var a=n(3)(n(75),n(198),null,null,null);t.exports=a.exports},75:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(12),s=(n.n(a),n(27)),r=n.n(s),i=n(2),o=n.n(i);e.default={components:{Box:r.a},created:function(){this.fetchTasks()},data:function(){return{tasks:[],newTask:{description:null}}},methods:{removeTask:function(t){this.tasks.filter(function(e){return e.id!==t.id})},selectTask:function(t){this.newTask=t},fetchTasks:function(){var t=this,e=Object(a.format)(new Date,"YYYY-MM-DD");o.a.get("/api/v1/tasks",{params:{day:e}}).then(function(e){var n=e.data;t.tasks=n.data})},addTask:function(){var t=this,e=Object(a.format)(new Date,"YYYY-MM-DD"),n={description:this.newTask.description,date:e};o.a.post("/api/v1/tasks",n).then(function(e){var n=e.data;t.tasks.push(n.data)})}}}}},[71]);