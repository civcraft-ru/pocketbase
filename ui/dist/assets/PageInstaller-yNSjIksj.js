import{S as W,i as G,s as J,F as Q,c as S,m as E,t as O,a as j,d as D,r as M,g as V,p as C,b as X,e as Y,f as K,h as k,j as q,k as r,l as z,n as m,o as T,q as I,u as Z,v as h,w as x,x as ee,y as U,z as N,A,B as te}from"./index-B1Fz2sXi.js";function ne(s){let t,o,u,n,e,p,_,d;return{c(){t=k("label"),o=N("Email"),n=q(),e=k("input"),r(t,"for",u=s[20]),r(e,"type","email"),r(e,"autocomplete","off"),r(e,"id",p=s[20]),e.disabled=s[7],e.required=!0},m(a,i){m(a,t,i),T(t,o),m(a,n,i),m(a,e,i),s[11](e),A(e,s[2]),_||(d=I(e,"input",s[12]),_=!0)},p(a,i){i&1048576&&u!==(u=a[20])&&r(t,"for",u),i&1048576&&p!==(p=a[20])&&r(e,"id",p),i&128&&(e.disabled=a[7]),i&4&&e.value!==a[2]&&A(e,a[2])},d(a){a&&(h(t),h(n),h(e)),s[11](null),_=!1,d()}}}function le(s){let t,o,u,n,e,p,_,d,a,i;return{c(){t=k("label"),o=N("Password"),n=q(),e=k("input"),_=q(),d=k("div"),d.textContent="Recommended at least 10 characters.",r(t,"for",u=s[20]),r(e,"type","password"),r(e,"autocomplete","new-password"),r(e,"minlength","10"),r(e,"id",p=s[20]),e.disabled=s[7],e.required=!0,r(d,"class","help-block")},m(c,g){m(c,t,g),T(t,o),m(c,n,g),m(c,e,g),A(e,s[3]),m(c,_,g),m(c,d,g),a||(i=I(e,"input",s[13]),a=!0)},p(c,g){g&1048576&&u!==(u=c[20])&&r(t,"for",u),g&1048576&&p!==(p=c[20])&&r(e,"id",p),g&128&&(e.disabled=c[7]),g&8&&e.value!==c[3]&&A(e,c[3])},d(c){c&&(h(t),h(n),h(e),h(_),h(d)),a=!1,i()}}}function se(s){let t,o,u,n,e,p,_,d;return{c(){t=k("label"),o=N("Password confirm"),n=q(),e=k("input"),r(t,"for",u=s[20]),r(e,"type","password"),r(e,"minlength","10"),r(e,"id",p=s[20]),e.disabled=s[7],e.required=!0},m(a,i){m(a,t,i),T(t,o),m(a,n,i),m(a,e,i),A(e,s[4]),_||(d=I(e,"input",s[14]),_=!0)},p(a,i){i&1048576&&u!==(u=a[20])&&r(t,"for",u),i&1048576&&p!==(p=a[20])&&r(e,"id",p),i&128&&(e.disabled=a[7]),i&16&&e.value!==a[4]&&A(e,a[4])},d(a){a&&(h(t),h(n),h(e)),_=!1,d()}}}function ie(s){let t,o,u,n,e,p,_,d,a,i,c,g,B,w,F,$,v,y,L;return n=new K({props:{class:"form-field required",name:"email",$$slots:{default:[ne,({uniqueId:l})=>({20:l}),({uniqueId:l})=>l?1048576:0]},$$scope:{ctx:s}}}),p=new K({props:{class:"form-field required",name:"password",$$slots:{default:[le,({uniqueId:l})=>({20:l}),({uniqueId:l})=>l?1048576:0]},$$scope:{ctx:s}}}),d=new K({props:{class:"form-field required",name:"passwordConfirm",$$slots:{default:[se,({uniqueId:l})=>({20:l}),({uniqueId:l})=>l?1048576:0]},$$scope:{ctx:s}}}),{c(){t=k("form"),o=k("div"),o.innerHTML="<h4>Create your first superuser account in order to continue</h4>",u=q(),S(n.$$.fragment),e=q(),S(p.$$.fragment),_=q(),S(d.$$.fragment),a=q(),i=k("button"),i.innerHTML='<span class="txt">Create superuser and login</span> <i class="ri-arrow-right-line"></i>',c=q(),g=k("hr"),B=q(),w=k("label"),w.innerHTML='<i class="ri-upload-cloud-line"></i> <span class="txt">Or initialize from backup</span>',F=q(),$=k("input"),r(o,"class","content txt-center m-b-base"),r(i,"type","submit"),r(i,"class","btn btn-lg btn-block btn-next"),z(i,"btn-disabled",s[7]),z(i,"btn-loading",s[0]),r(t,"class","block"),r(t,"autocomplete","off"),r(w,"for","backupFileInput"),r(w,"class","btn btn-lg btn-hint btn-transparent btn-block"),z(w,"btn-disabled",s[7]),z(w,"btn-loading",s[1]),r($,"id","backupFileInput"),r($,"type","file"),r($,"class","hidden"),r($,"accept",".zip")},m(l,b){m(l,t,b),T(t,o),T(t,u),E(n,t,null),T(t,e),E(p,t,null),T(t,_),E(d,t,null),T(t,a),T(t,i),m(l,c,b),m(l,g,b),m(l,B,b),m(l,w,b),m(l,F,b),m(l,$,b),s[15]($),v=!0,y||(L=[I(t,"submit",Z(s[8])),I($,"change",s[16])],y=!0)},p(l,b){const H={};b&3145892&&(H.$$scope={dirty:b,ctx:l}),n.$set(H);const f={};b&3145864&&(f.$$scope={dirty:b,ctx:l}),p.$set(f);const P={};b&3145872&&(P.$$scope={dirty:b,ctx:l}),d.$set(P),(!v||b&128)&&z(i,"btn-disabled",l[7]),(!v||b&1)&&z(i,"btn-loading",l[0]),(!v||b&128)&&z(w,"btn-disabled",l[7]),(!v||b&2)&&z(w,"btn-loading",l[1])},i(l){v||(O(n.$$.fragment,l),O(p.$$.fragment,l),O(d.$$.fragment,l),v=!0)},o(l){j(n.$$.fragment,l),j(p.$$.fragment,l),j(d.$$.fragment,l),v=!1},d(l){l&&(h(t),h(c),h(g),h(B),h(w),h(F),h($)),D(n),D(p),D(d),s[15](null),y=!1,x(L)}}}function ae(s){let t,o;return t=new Q({props:{$$slots:{default:[ie]},$$scope:{ctx:s}}}),{c(){S(t.$$.fragment)},m(u,n){E(t,u,n),o=!0},p(u,[n]){const e={};n&2097407&&(e.$$scope={dirty:n,ctx:u}),t.$set(e)},i(u){o||(O(t.$$.fragment,u),o=!0)},o(u){j(t.$$.fragment,u),o=!1},d(u){D(t,u)}}}function oe(s,t,o){let u,{params:n}=t,e="",p="",_="",d=!1,a=!1,i,c;g();async function g(){if(!(n!=null&&n.token))return M("/");o(0,d=!0);try{const f=V(n==null?void 0:n.token);await C.collection("_superusers").getOne(f.id,{requestKey:"installer_token_check",headers:{Authorization:n==null?void 0:n.token}})}catch(f){f!=null&&f.isAbort||(X("The installer token is invalid or has expired."),M("/"))}o(0,d=!1),await Y(),i==null||i.focus()}async function B(){if(!u){o(0,d=!0);try{await C.collection("_superusers").create({email:e,password:p,passwordConfirm:_},{headers:{Authorization:n==null?void 0:n.token}}),await C.collection("_superusers").authWithPassword(e,p),M("/")}catch(f){C.error(f)}o(0,d=!1)}}function w(){c&&o(6,c.value="",c)}function F(f){f&&ee(`Note that we don't perform validations for the uploaded backup files. Proceed with caution and only if you trust the file source.

Do you really want to upload and initialize "${f.name}"?`,()=>{$(f)},()=>{w()})}async function $(f){if(!(!f||u)){o(1,a=!0);try{await C.backups.upload({file:f},{headers:{Authorization:n==null?void 0:n.token}}),await C.backups.restore(f.name,{headers:{Authorization:n==null?void 0:n.token}}),te("Please wait while extracting the uploaded archive!"),await new Promise(P=>setTimeout(P,2e3)),M("/")}catch(P){C.error(P)}w(),o(1,a=!1)}}function v(f){U[f?"unshift":"push"](()=>{i=f,o(5,i)})}function y(){e=this.value,o(2,e)}function L(){p=this.value,o(3,p)}function l(){_=this.value,o(4,_)}function b(f){U[f?"unshift":"push"](()=>{c=f,o(6,c)})}const H=f=>{var P,R;F((R=(P=f.target)==null?void 0:P.files)==null?void 0:R[0])};return s.$$set=f=>{"params"in f&&o(10,n=f.params)},s.$$.update=()=>{s.$$.dirty&3&&o(7,u=d||a)},[d,a,e,p,_,i,c,u,B,F,n,v,y,L,l,b,H]}class re extends W{constructor(t){super(),G(this,t,oe,ae,J,{params:10})}}export{re as default};
