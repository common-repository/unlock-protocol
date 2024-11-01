!function(){"use strict";var e={n:function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(o,{a:o}),o},d:function(t,o){for(var n in o)e.o(o,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:o[n]})},o:function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}},t=window.wp.element,o=window.wp.i18n,n=window.wp.plugins,l=window.wp.editPost,c=window.React,r=window.wp.data,a=window.wp.components,s=window.wp.apiFetch,u=e.n(s);const i=()=>u()({path:"/unlock-protocol/v1/settings"}).then((e=>{let t=e.networks,n=[{label:(0,o.__)("None","unlock-protocol"),value:-1}];return Object.entries(t).forEach((e=>{let[t,o]=e;n.push({label:o.network_name.charAt(0).toUpperCase()+o.network_name.slice(1),value:o.network_id})})),n})).catch((e=>(console.error(e),[]))),d=e=>{let{onSaveNewLock:o,removeLock:n,locks:l}=e;const[r,s]=(0,c.useState)(!1);return(0,t.createElement)("div",null,(0,t.createElement)("ul",null,l.map(((e,o)=>(0,t.createElement)(k,{lock:e,onRemove:()=>{n(o)}})))),(0,t.createElement)(a.Button,{className:"components-button is-link",onClick:()=>s(!r)},"Add Lock"),r&&(0,t.createElement)(p,{handleSave:async e=>{await o(e),s(!1)}}))},p=e=>{let{handleSave:n}=e;const[l,r]=(0,c.useState)(),[s,u]=(0,c.useState)(),[d,p]=(0,c.useState)(""),[k,m]=(0,c.useState)([]);(0,c.useEffect)((()=>{i().then((e=>{m(e)}))}),[]);const w=e=>/^0x[a-fA-F0-9]{40}$/.test(e);return k?(0,t.createElement)("form",{onSubmit:e=>(e.preventDefault(),n({network:l,address:s}),!1)},(0,t.createElement)("div",{className:"add-lock-form"},(0,t.createElement)(a.SelectControl,{label:(0,o.__)("Network","unlock-protocol"),options:k,value:l,onChange:e=>r(parseInt(e))}),(0,t.createElement)("p",{className:"label"},(0,o.__)("Lock Address","unlock-protocol")),(0,t.createElement)(a.TextControl,{disabled:!l,value:s,onChange:e=>{w(e)?p(""):p((0,o.__)("Invalid Lock address","unlock-protocol")),u(e)}}),d&&(0,t.createElement)("p",{className:"lock-warning"},d),(0,t.createElement)(a.Button,{disabled:!l||!w(s),className:"add-lock",type:"submit"},(0,o.__)("Add New Lock","unlock-protocol")))):null},k=e=>{let{lock:o,onRemove:n}=e;const[l,r]=(0,c.useState)();return(0,c.useEffect)((()=>{i().then((e=>{e.forEach((e=>{let{value:t,label:n}=e;t===o.network&&r(`${n}: ${function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:18,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"...";if(e.length<=t)return e;o=o||"...";var n=t-o.length,l=Math.ceil(n/2),c=Math.floor(n/2);return e.substr(0,l)+o+e.substr(e.length-c)}(o.address)}`)}))}))}),[o.network]),(0,t.createElement)("li",{style:{display:"flex","justify-content":"space-between"}},(0,t.createElement)("span",null,l),(0,t.createElement)(a.Button,{isSmall:!0,isDestructive:!0,onClick:n},"remove"))};var m=e=>{const{locks:o,postId:n}=(0,r.useSelect)((e=>{const{getCurrentPostId:t,getEditedPostAttribute:o}=e("core/editor"),n=o("meta");let l=[];return n&&n.unlock_protocol_post_locks&&(l=JSON.parse(n.unlock_protocol_post_locks)),{postId:t(),locks:l}}),[]),{editPost:l}=(0,r.useDispatch)("core/editor",[o]),a=(0,c.useCallback)((e=>l({meta:{unlock_protocol_post_locks:JSON.stringify(e)}})),[l]);return n?(0,t.createElement)(d,{onSaveNewLock:async e=>{await a([...o,e])},removeLock:async e=>{const t=[...o];t.splice(e,1),await a(t)},locks:o}):null};(0,n.registerPlugin)("unlock-protocol-unlock-box-full-post-page",{render:()=>(0,t.createElement)(l.PluginDocumentSettingPanel,{name:"full-post-page-lock",title:(0,o.__)("Unlock Protocol","unlock-protocol")},(0,t.createElement)("p",null,(0,o.__)("Add lock(s) to restrict access to the full post content inside of WordPress.","unlock-protocol")," ",(0,t.createElement)("a",{rel:"noopener noreferrer",target:"_blank",href:unlockProtocol.unlock_docs.docs},(0,o.__)("Documentation","unlock-protocol"))),(0,t.createElement)(m,null))})}();