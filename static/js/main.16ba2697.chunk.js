(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{10:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__1htnS",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__3f-W_"}},13:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__3KRgV"}},14:function(e,t,a){e.exports={Button:"Button_Button__R5UZr"}},4:function(e,t,a){e.exports={Searchbar:"SearchBar_Searchbar__3xOjz",SearchForm:"SearchBar_SearchForm__6IxGA",SearchFormButton:"SearchBar_SearchFormButton__1NqXy",SearchFormButtonLabel:"SearchBar_SearchFormButtonLabel__3TmBk",SearchFormInput:"SearchBar_SearchFormInput__2G9re"}},41:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),c=a(6),o=a.n(c),l=a(11),i=a(3),s=(a(19),a(12)),u=a.n(s),m=a(0),b=function(){return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(u.a,{type:"ThreeDots",color:"#00BFFF",height:90,width:90,timeout:2500})})};var j,h={fetchImg:function(e,t){return fetch("https://pixabay.com/api/?q=".concat(e,"&page=").concat(t,"&key=").concat("23907146-6bbb396b18ee8800d3622a6a4","&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.ok?e.json():Promise.reject(new Error("No images on request"))}))}},d=a(4),f=a.n(d),O=["title","titleId"];function g(){return g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},g.apply(this,arguments)}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}function x(e,t){var a=e.title,n=e.titleId,c=p(e,O);return r.createElement("svg",g({id:"Layer_1_1_",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 16 16",style:{enableBackground:"new 0 0 16 16"},xmlSpace:"preserve",ref:t,"aria-labelledby":n},c),a?r.createElement("title",{id:n},a):null,j||(j=r.createElement("path",{d:"M5,10c1.198,0,2.284-0.441,3.147-1.146l7,7l0.707-0.707l-7-7C9.559,7.284,10,6.198,10,5c0-2.757-2.243-5-5-5S0,2.243,0,5 S2.243,10,5,10z M5,1c2.209,0,4,1.791,4,4c0,2.209-1.791,4-4,4S1,7.209,1,5C1,2.791,2.791,1,5,1z"})))}var v=r.forwardRef(x);a.p;var y=function(e){var t=e.submit,a=Object(r.useState)(""),n=Object(i.a)(a,2),c=n[0],o=n[1],l=function(){o("")};return Object(m.jsx)("header",{className:f.a.Searchbar,children:Object(m.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(c),l()},className:f.a.SearchForm,children:[Object(m.jsxs)("button",{type:"submit",className:f.a.SearchFormButton,children:[Object(m.jsx)(v,{width:"20",height:"20"}),Object(m.jsx)("span",{className:f.a.SearchFormButtonLabel})]}),Object(m.jsx)("input",{className:f.a.SearchFormInput,type:"text",name:"searchbar",value:c,onChange:function(e){var t=e.currentTarget.value;o(t)},autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})},_=a(10),S=a.n(_),I=function(e){var t=e.alt,a=e.src,r=e.url,n=e.modalOpen;return Object(m.jsx)("li",{className:S.a.ImageGalleryItem,onClick:function(){n(r,t)},children:Object(m.jsx)("img",{src:a,alt:t,className:S.a.ImageGalleryItemImage})})},w=a(13),k=a.n(w);function B(e){var t=e.modalOpen,a=e.result;return Object(m.jsx)("ul",{className:k.a.ImageGallery,children:a.map((function(e){var a=e.id,r=e.tags,n=e.webformatURL,c=e.largeImageURL;return Object(m.jsx)(I,{alt:r,src:n,url:c,modalOpen:t},a)}))})}var F=a(8),N=a.n(F),L=document.querySelector("#modal-root");var G=function(e){var t=e.largeImageURL,a=e.alt,n=e.onClick;Object(r.useEffect)((function(){return window.addEventListener("keydown",o),function(){window.removeEventListener("keydown",o)}}));var o=function(e){"Escape"===e.code&&n()};return Object(c.createPortal)(Object(m.jsx)("div",{className:N.a.Overlay,onClick:function(e){e.target===e.currentTarget&&n()},children:Object(m.jsxs)("div",{className:N.a.Modal,children:[Object(m.jsx)("img",{src:t,alt:a}),Object(m.jsx)("button",{className:N.a.button,type:"button",onClick:n,children:"X"})]})}),L)},C=a(14),E=a.n(C),R=function(e){var t=e.onClick;return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("button",{type:"button",className:E.a.Button,onClick:t,children:"Load more"})})};a(41);function M(){var e=Object(r.useState)(""),t=Object(i.a)(e,2),a=t[0],n=t[1],c=Object(r.useState)("idle"),o=Object(i.a)(c,2),s=o[0],u=o[1],j=Object(r.useState)([]),d=Object(i.a)(j,2),f=d[0],O=d[1],g=Object(r.useState)(1),p=Object(i.a)(g,2),x=p[0],v=p[1],_=Object(r.useState)(null),S=Object(i.a)(_,2),I=S[0],w=S[1],k=Object(r.useState)(""),F=Object(i.a)(k,2),N=F[0],L=F[1],C=Object(r.useState)(""),E=Object(i.a)(C,2),M=E[0],U=E[1];Object(r.useEffect)((function(){""!==a.trim()&&(u("pending"),h.fetchImg(a,x).then((function(e){var t=e.hits.map((function(e){return{id:e.id,webformatURL:e.webformatURL,largeImageURL:e.largeImageURL,tags:e.tags}}));t.length>0?(O((function(e){return[].concat(Object(l.a)(e),Object(l.a)(t))})),u("resolved")):(alert("No any picture"),u("idle"))})).catch((function(e){w(e),u("rejected")})).finally((function(){x>1&&window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})})))}),[x,a]);return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(y,{submit:function(e){e!==a&&(O([]),v(1),n(e))}}),Object(m.jsxs)("div",{children:[Object(m.jsx)(B,{modalOpen:function(e,t){L(e),U(t)},result:f}),"resolved"===s&&Object(m.jsx)(R,{onClick:function(){v((function(e){return e+1})),u("pending")}})]}),"pending"===s&&Object(m.jsx)(b,{}),N&&Object(m.jsx)(G,{largeImageURL:N,alt:M,onClick:function(){L(""),U("")}}),"rejected"===s&&Object(m.jsx)("p",{children:I})]})}o.a.render(Object(m.jsx)(n.a.StrictMode,{children:Object(m.jsx)(M,{})}),document.getElementById("root"))},8:function(e,t,a){e.exports={Overlay:"Modal_Overlay__3zPkd",Modal:"Modal_Modal__2ObvF",button:"Modal_button__3Q84B"}}},[[42,1,2]]]);
//# sourceMappingURL=main.16ba2697.chunk.js.map