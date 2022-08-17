import{_ as p,r as f,o as n,c as a,a as e,b as u,w as _,d as h,t as c,n as b,s as r,e as v,f as w,F as y,g as k,h as D}from"./index.65141a1a.js";const S={name:"SongItem",props:["song"]},$={class:"text-gray-500 text-sm"},I={class:"text-gray-600 text-lg"},C=["onClick"],P=e("i",{class:"fa fa-comments text-gray-600"},null,-1);function B(o,s,t,d,m,x){const i=f("router-link");return n(),a("li",{class:b(["flex justify-between items-center p-3 pl-6 cursor-pointer transition duration-300 hover:bg-gray-50 example snapshot",`song-id-${t.song.docID}`])},[e("div",null,[u(i,{to:{name:"song",params:{id:t.song.docID}},class:"font-bold block text-gray-600 composition-name"},{default:_(()=>[h(c(t.song.modified_name),1)]),_:1},8,["to"]),e("span",$,c(t.song.display_name),1)]),e("div",I,[u(i,{custom:"",to:{name:"song",params:{id:t.song.docID},hash:"#comments"}},{default:_(({navigate:l})=>[e("span",{class:"comments",onClick:l},[P,h(" "+c(t.song.comment_count),1)],8,C)]),_:1},8,["to"])])],2)}const q=p(S,[["render",B]]),E={beforeMount(o,s){let t=`fa fa-${s.value.icon} text-green-400 text-xl`;s.value.right&&(t+=" float-right"),o.innerHTML+=`<i class="${t}"></i>`}},H="/assets/img/introduction-music.png",L={name:"Home",components:{AppSongItem:q},directives:{"icon-secondary":E},data(){return{songs:[],maxPerPage:25,pendingRequest:!1}},async created(){this.getSongs(),window.addEventListener("scroll",this.handleScroll)},beforeUnmount(){window.removeEventListener("scroll",this.handleScroll)},methods:{handleScroll(){const{scrollTop:o,offsetHeight:s}=document.documentElement,{innerHeight:t}=window;Math.round(o)+t===s&&this.getSongs()},async getSongs(){if(this.pendingRequest)return;this.pendingRequest=!0;let o;if(this.songs.length){const s=await r.doc(this.songs[this.songs.length-1].docID).get();o=await r.orderBy("modified_name").startAfter(s).limit(this.maxPerPage).get()}else o=await r.orderBy("modified_name").limit(this.maxPerPage).get();o.forEach(s=>{this.songs.push({docID:s.id,...s.data()})}),this.pendingRequest=!1}}},N={class:"mb-8 py-20 text-white text-center relative"},R=e("div",{class:"absolute inset-0 w-full h-full bg-contain introduction-bg",style:{"background-image":"url(assets/img/header.png)"}},null,-1),M={class:"container mx-auto"},T={class:"text-white main-header-content"},V={class:"font-bold text-5xl mb-5"},j=e("p",{class:"w-full md:w-8/12 mx-auto"}," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et dolor mollis, congue augue non, venenatis elit. Nunc justo eros, suscipit ac aliquet imperdiet, venenatis et sapien. Duis sed magna pulvinar, fringilla lorem eget, ullamcorper urna. ",-1),A=e("img",{class:"relative block mx-auto mt-5 -mb-20 w-auto max-w-full",src:H},null,-1),F={class:"container mx-auto"},O={class:"bg-white rounded border border-gray-200 relative flex flex-col"},W={class:"px-6 pt-6 pb-5 font-bold border-b border-gray-200"},z=e("span",{class:"card-title"},"Songs",-1),U=[z],G={id:"playlist"};function J(o,s,t,d,m,x){const i=f("app-song-item"),l=v("icon-secondary");return n(),a("main",null,[e("section",N,[R,e("div",M,[e("div",T,[e("h1",V,c(o.$t("home.listen")),1),j])]),A]),e("section",F,[e("div",O,[w((n(),a("div",W,U)),[[l,{icon:"headphones-alt",right:!0}]]),e("ol",G,[(n(!0),a(y,null,k(m.songs,g=>(n(),D(i,{key:g.docID,song:g},null,8,["song"]))),128))])])])])}const Q=p(L,[["render",J]]);export{Q as default};
