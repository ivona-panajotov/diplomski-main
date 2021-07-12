<template>
<div id="cursor"></div>
  <div id="main" @scroll="handleScroll" @mousemove="cursor($event)">
    <div id="root">
      <nav class="navbar navbar-dark navbar-expand-lg">
        <button
          type="button"
          aria-label="Toggle navigation"
          class="navbar-toggler collapsed"
          aria-expanded="false"
          aria-controls="nav-collapse"
          style="overflow-anchor: none"
        >
          <span class="navbar-toggler-icon" @click="navOpen"></span>
        </button>
        <div
          id="nav-collapse"
          class="navbar-collapse collapse"
          style="display: none"
        >
          <ul class="navbar-nav">
            <li class="close"><font-awesome-icon style="color:white; width:5rem; height:5rem;margin: -3rem 0 3rem; float:left" icon="times" />
</li>
            <li class="nav-item item">
              <router-link to="/"  :id=isActive name="home"
                >Home</router-link
              >
            </li>
            <li class="nav-item item">
              <router-link to="/events"   name="events"
                >All events</router-link
              >
            </li>
            <li class="nav-item item">
              <router-link to="/about"  name="about" 
                >About</router-link
              >
            </li>
            <li class="nav-item item">
              <router-link to="/team"  name="team" 
                >Our team</router-link
              >
            </li>
          </ul>
          
        </div>
        <div class="btn-container">
              <button type="button" class="button  sign btn my-sm-0 btn-secondary btn-sm" @click="signup">
                             <div class="transition1"></div>
              <router-link to="/signup">Sing up</router-link>
              </button>
            </div>
            <span class="line-container"
              ><div class="line"></div>
              <div class="line"></div
            ></span>
            <div class="btn-container">
              <button type="button" class="button login btn my-sm-0 btn-secondary btn-sm">
                                             <div class="transition2"></div>
              <router-link to="/login">Login</router-link>
              </button>
            </div>
            <span class="line-container"
              ><div class="line"></div>
              <div class="line"></div
            ></span>
      </nav>
    </div>
  </div>
  <!-- <Login v-if="showModal" signUp="false"/> -->
  <footer></footer>
  <router-view />
</template>

<script>
import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
export default {
  el: '#app',
  data() {
    return {
      showModal: false,
      isActive:false
    };
  },
  methods: {
    navOpen(){
      let $nav=$('#nav-collapse').css({display:'flex'})
      $('li').click(()=>$nav.css({display:'none'}))
      $('.close').click(()=>$nav.css({display:'none'}))
    },
    cursor(e) {
      let x = e.pageX;
      let y = e.pageY;
      $("#cursor").css({
        top: y + "px",
        left: x + "px",
      });
    },
    colorBtn(e) {
      const div = document.createElement("div");
      div.setAttribute('id','navDiv')
      $(div).css({
        height: 1 + "rem",
        width: 1 + "rem",
        backgroundColor: "white",
        position: "absolute",
        marginTop: -2 + "rem",
        opacity: 0,
        borderRadius: 80 + "%",
        marginLeft: 1 + "rem",
        zIndex: -1,
      });
      $(div).animate(
        {
          opacity: 1,
          height: 6 + "rem",
          width: 6 + "rem",
          marginTop: -2 + "rem",
          //     borderRadius:0
        },
        600
      );
      $(div).animate(
        {
          height: 6 + "rem",
          width: 16 + "rem",
          marginLeft: -4.2 + "rem",
          borderRadius: 0,
        },
        500
      );
      console.log(e.target);
      if (e.target.name == "home") {
        $(e.target).append(div);
      } else if (e.target.name == "events") {
        $(e.target).append(div);
      } else if (e.target.name == "about") {
        $(e.target).append(div);
      } else if (e.target.name == "contact") {
        $(e.target).append(div);
      }
    },
    modal(val) {
      console.log(val);
    },
  },
  //  watch:{
  //   $route(to,form){
  //     if(this.$route.name=='home'){
  //       console.log('home!')
  //     }
      
  //   //   console.log('removed from navbar')
  //   // $('#navDiv').remove()
  //   }
  // },
};
document.body.onclick = (e) => {
  $("#cursor").css({
    opacity: 0,
  });
  const cursorRemove = setTimeout(() => {
    $("#cursor").css({
      opacity: 1,
    });
    clearTimeout(cursorRemove);
  }, 600);
  const cursorx = e.pageX;
  const cursory = e.pageY;

  function Dripple(width,height,x,y,id,animate){
       this.width=width,
       this.height=height,
       this.x=x
       this.y=y
       this.animate=animate
       let dripple=document.createElement('div')
            dripple.style.top=`${y}px`
           dripple.style.left=`${x}px`
             dripple.classList.add(`dripple${id}`)
    const app = document.querySelector("#app");

    app.appendChild(dripple);
    dripple.animate({
          opacity: 0,
          width: this.width + "rem",
          height: this.height + "rem",
        },this.animate)
       if (id == 0) {
      const removeDripple = setTimeout(() => {
        $('.dripple0').remove()
        clearTimeout(removeDripple);
      }, animate);
    } else if (id == 1) {
      const removeDripple = setTimeout(() => {
          $('.dripple1').remove()
        clearTimeout(removeDripple);
      }, animate);
    } else {
      const removeDripple = setTimeout(() => {
          $('.dripple2').remove()
        clearTimeout(removeDripple);
      }, animate);
    }
  }
let dripple1=new Dripple(7,7.2,cursorx,cursory,0,700)
let dripple2=new Dripple(6,6,cursorx,cursory,1,800)
let dripple3=new Dripple(5,5.2,cursorx,cursory,2,810)
};
$('body').scroll(()=>{
let $nav = $(".navbar");
let $navItem=$('a');
let $transitor1=$('.transition1')
$transitor1.toggleClass('color-transition1', $('body').scrollTop() > $nav.height());
let $transitor2=$('.transition2')
$transitor2.toggleClass('color-transition2', $('body').scrollTop() > $nav.height());
$navItem.toggleClass('linked', $('body').scrollTop() > $nav.height());
$nav.toggleClass('scrolled', $('body').scrollTop() > $nav.height());

})
</script>

<style>
html,
body {
  height: 100vh !important;
  width: 100% !important;
  margin: 0;
  overflow-x: hidden;
}

#main {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;

}
#cursor {
  position: fixed;
  border: 1px solid rgb(92, 92, 92);
  height: 7.3rem;
  width: 7.3rem;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  cursor: none !important;
  z-index: 50;
  backdrop-filter: saturate(15);
}
.dripple0 {
  position: fixed;
  width: 5rem;
  height: 5rem;
  border: 4px solid rgb(117, 132, 155);
  border-radius: 50%;
  z-index: 20;
  transform: translate(-50%, -50%);
  box-shadow: 1px 1px 10px rgba(69, 75, 94, 0.747);
  pointer-events: all;
  cursor: none;
}
.dripple1 {
  position: fixed;
  width: 3rem;
  height: 3rem;
  border: 4px solid rgb(117, 132, 155);
  border-radius: 50%;
  z-index: 20;
  transform: translate(-50%, -50%);
  box-shadow: 1px 1px 7px rgba(69, 75, 94, 0.747);
  pointer-events: all;
  cursor: none;
}
.dripple2 {
  position: fixed;
  width: 1.2rem;
  height: 1.2rem;
  border: 4px solid rgb(117, 132, 155);
  border-radius: 50%;
  z-index: 20;
  transform: translate(-50%, -50%);
  box-shadow: 1px 1px 3px rgba(69, 75, 94, 0.747);
  pointer-events: all;
  cursor: none;
}
@import url("https://fonts.googleapis.com/css2?family=Padauk:wght@400;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=KoHo:ital,wght@0,400;0,500;1,300&display=swap");

.navbar {
  width: 100%;
  top: 0 !important;
  font-family: "Raleway";
  position: fixed !important;
  z-index: 25;
  background-color: transparent;
  transition: background-color 200ms ease-out;
}
.navbar.scrolled {
  background-color: rgba(38, 26, 65, 0.781) !important;
  transition: background-color 300ms ease;
}
/* .navbar>div>ul>li>a.linked{
  color: black !important;
  transition: color 300ms ease-in !important; 
} */
@keyframes Colourbtn {
    0%{background-position:72% 0%}
    50%{background-position:29% 100%}
    100%{background-position:72% 0%}
}



.navbar > div > ul > li > a {
  /* background: #232323; */
  text-shadow: 0 0 5px rgb(184, 216, 243), 0 0 10px rgb(222, 243, 255),
    0 0 15px #fff, 0 0 20px #0e19af, 0 0 30px #420ea3, 0 0 40px #3b18ff,
    0 0 55px #1637bc, 0 0 75px #165682;
  color: #e2f1f8 !important;
  /* -webkit-text-stroke-color: black;
    -webkit-text-stroke-width: 0.2px; */
  position: relative;
  /* text-shadow: -5px 4px 9px rgba(0, 8, 0, 1); */
  /* text-shadow: 3px 3px 15px rgb(39, 51, 65); */
  width: 11rem;
  display: flex;
  justify-content: space-evenly;
  font-family: "Raleway";
  /* color: rgb(255, 255, 255) !important; */
  font-size: 2rem;
  margin-left: 5rem;
  z-index: 11;
  /* border-left: 1px dashed rgb(0, 0, 0); */
}
.navbar > div > ul > li > a:hover {
  color: rgb(255, 255, 255) !important;
}
.btn-container {
  position: relative;
  display: flex;
  flex-direction: row;
  height: 3rem;
  max-width: 17rem !important;
  margin-left: 2rem;
}
.button {
  /* background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab); */
  background-image: linear-gradient(90deg, rgb(130, 175, 179),
    rgb(201, 155, 177));
     transition: background-image 200ms ease-out;
    background-size: 600% 600%;
    animation: Colourbtn 3s ease infinite;
  opacity:1;
  border-left: 1px solid white !important;
  border-right: 1px solid white !important;
  border-top: none !important;
  position: relative;
  width: 10rem;
  margin-right: 1rem;
  font-size: 1.2rem !important;
  z-index: 11;
 
}
@keyframes setOpacity {
  0%{opacity:0}
  100%{opacity:1}
}
 .color-transition1{
  position:absolute;
   z-index: -1;
   top:0;
   left:0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(90deg,rgb(194, 219, 126),rgb(95, 151, 189));
     background-size: 400% 400%;
    animation: Colourbtn 5s ease infinite, setOpacity 2s;
    animation-fill-mode: backwards;
} 
.color-transition2{
    position:absolute;
   z-index: -1;
   top:0;
   left:0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(90deg,rgb(219, 213, 126),rgb(155, 95, 189));
     background-size: 400% 400%;
    animation: Colourbtn 5s ease infinite, setOpacity 2s;
    animation-fill-mode: backwards;
}
.login{
   background-image: linear-gradient(90deg,  rgb(214, 179, 196),
    rgb(146, 141, 187));
    background-size: 400% 400%;
    animation: Colourbtn 3s ease infinite;

  border-left: 1px solid white !important;
  border-right: 1px solid white !important;
  border-top: none !important;
  position: relative;
  width: 10rem;
  margin-right: 1rem;
  font-size: 1.2rem !important;
  z-index: 11;
}


.line-container {
  position: relative;
  margin-top: 3rem;
  margin-left: -2rem;
}
.line {
  position: relative;
  width: 5rem;
  border-bottom: 2px solid rgb(255, 255, 255);
  height: 1px;
  z-index: 10;
  margin-left: -6.5rem;
  margin-bottom: 1rem;
}
.line:nth-child(1) {
  width: 10rem;
  margin-left: -9rem;
}

/* .line2{
 
    position: relative;
    width: 3rem;
    border-bottom: 2px solid rgb(255, 255, 255);
    height: 1px;
    z-index: 10;
    margin-left: 2.3rem;
    margin-top: 0.5rem;
} */
#root {
  position: relative;
}
@media screen and (min-width: 0) and (max-width:480px){
  .navbar-expand-lg{
    width:5% !important;
  }
}
@media screen and (min-width:481px) and (max-width:768px) {
.navbar > div > ul > li > a{
    width: 14rem;
    margin-bottom: 3rem;
    font-size: 3rem;
  }
  .navbar>div>ul>li{
    text-align: center;
    /* margin-left: -7rem; */
  } 
  #navDiv{
    display: none
  }
  .btn-container{
    margin-left: 7rem;
  }
  .button{
    display: block;
    margin-right: 5rem;
    border-bottom:0.3rem solid white
  }
  .line-container{
   display: none;
  }
  
   #nav-collapse{
     border-top:1rem solid white;
     padding:0; 
     margin:0;
     position: relative;
     height: 100vh;
     width: 100vw;
      background-color: rgb(38, 26, 65) !important;
      transition-property: none !important;
  }
  .navbar-toggler{
    width:5rem;
    height:5rem;
    
    position:absolute;
    padding:0;
  }
  .navbar-toggler-icon{
    position: absolute;
    width:5rem;
    height:5rem;
    margin-top:-2.3rem;
    margin-left:-2.3rem;

  }
  nav{
    transition-property: none !important;
  }
  .navbar{
    transition-property: none !important;
    padding:0;
  }
  .navbar.scrolled{
    transition-property: none !important;
  }
}
@media screen and (min-width: 769px) and (max-width: 1279px){
  #cursor{
    display:none
  }
 .navbar > div > ul > li > a{
    width: 14rem;
    margin-bottom: 3rem;
    font-size: 3rem;
  }
  .navbar>div>ul>li{
    text-align: center;
    /* margin-left: -7rem; */
  } 
  #navDiv{
    display: none
  }
  .btn-container{
    margin-left: 7rem;
  }
  .button{
    display: block;
    margin-right: 5rem;
    border-bottom:0.3rem solid white
  }
  .line-container{
   display: none;
  }
  
   #nav-collapse{
     border-top:1rem solid white;
     padding:0; 
     margin:0;
     position: relative;
     height: 100vh;
     width: 100vw;
      background-color: rgb(38, 26, 65) !important;
      transition-property: none !important;
  }
  .navbar-toggler{
    width:5rem;
    height:5rem;
    
    position:absolute;
    padding:0;
  }
  .navbar-toggler-icon{
    position: absolute;
    width:5rem;
    height:5rem;
    margin-top:-2.3rem;
    margin-left:-2.3rem;

  }
  nav{
    transition-property: none !important;
  }
  .navbar{
    transition-property: none !important;
    padding:0;
  }
  .navbar.scrolled{
    transition-property: none !important;
  }
}
@media screen and (min-width: 1280px){
.login{
  margin-right: 5rem;
}
.line-container{
  margin-left: -3rem;
}
  .close{
    display:none
  }
}
</style>
