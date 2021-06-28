<template>
<div id="home" >
    <img :src=fish :class=fish_logo alt="" srcset="">
    <img id="algae" src='@/assets/images/algae.png'>
        <div class="container">
      <span class="header">
    <h1>Liquify</h1>
    </span>
     <p>Connecting <br>since 2015</p>
     <span><p id="quote">“A fish will never realize its potential until you throw it in water.-”</p>
</span>
    </div>
  </div>
  <div class="span">
    <h1>Check out <em>Liquify</em> past <em>{{yearSpan}}</em> years</h1>
    <div id="year2015" class="shadow-lg">
      <h2 class="title"><b>Liquify 2015</b></h2>
      <p>The first year of our adventure. We had more than <b>100.000+</b> students that attented our conference! All attendees had a chance to send their CV to company of their choice,and get accepted for job or internship.</p>
    </div>
    <div id="year2016" class="shadow-lg">
      <h2 class="title2"><b>Liquify 2016</b></h2>
      <p>The first year of our adventure. We had more than <b>100.000+</b> students that attented our conference! All attendees had a chance to send their CV to company of their choice,and get accepted for job or internship.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
   data() {
    return {
      // logo: require('./assets/images/diplomski-logo.png'),
      fish: require('@/assets/images/fish.png'),
     blob: require('@/assets/images/blob.png'),
      fish_logo:'fish',
      yearSpan: new Date().getFullYear()-2015
    }
  },
  mounted() {
    this.example()
     
     function SetPosition(width,height,x,y){
       this.width=width,
       this.height=height,
       this.x=x
       this.y=y
       let bubble=document.createElement('div')
            bubble.style.width=`${width}rem`
            bubble.style.height=`${height}rem`
            bubble.style.top=`${y}rem`
            bubble.style.left=`${x}rem`
            bubble.classList.add('bubbles')
         $('#home').append(bubble)
         let home=document.querySelector('#home')
         console.log(home)
         }
      
      const bubble1= new SetPosition(5,5,63,30)
      const bubble2= new SetPosition(7,7,10,2)
      const bubble3= new SetPosition(6,6,30,20)//top 50 maybe
      const bubble4= new SetPosition(3.5,3.5,50,3)
      const bubble5= new SetPosition(4,4,73,15)
      const bubble6= new SetPosition(3.5,3.5,50,35)

      //  $('#app').append(bubble1)

  },
 methods: {
   example(){
     this.$nextTick(()=>{
       $(window).scroll(function () {
    $('.span').toggleClass('scrolled',$(this).scrollTop() > 10)
  })
       
     })
   }
  },
 
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@import url('https://fonts.googleapis.com/css2?family=Mate+SC&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,300;1,300&family=Limelight&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans&family=Limelight&display=swap');@import url('https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;1,300;1,700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;1,100&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;400;500;600&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Raleway&Signika+Negative:wght@400;600;700&display=swap');

#home{
  position: relative;
  border-bottom: 1px solid rgb(10, 29, 44);
  height: 100vh !important;
  width: 100% !important;
  background: rgb(99,122,181);
background: -moz-radial-gradient(circle, rgba(99,122,181,1) 0%, rgba(23,34,79,1) 79%);
background: -webkit-radial-gradient(circle, rgba(99,122,181,1) 0%, rgba(23,34,79,1) 79%);
background: radial-gradient(circle, rgba(99,122,181,1) 0%, rgba(23,34,79,1) 79%);
/* background: rgb(255,255,255);
background: -moz-radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(211,211,211,1) 47%, rgba(140,140,140,1) 100%);
background: -webkit-radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(211,211,211,1) 47%, rgba(140,140,140,1) 100%);
background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(211,211,211,1) 47%, rgba(140,140,140,1) 100%); */
}
.span{
 background: rgb(217,223,237);
background: -moz-radial-gradient(circle, rgba(217,223,237,1) 6%, rgba(69,73,88,1) 100%);
background: -webkit-radial-gradient(circle, rgba(217,223,237,1) 6%, rgba(69,73,88,1) 100%);
background: radial-gradient(circle, rgba(217,223,237,1) 6%, rgba(69,73,88,1) 100%);
z-index: 13;
  height:200vh;
  position: relative;
  transition: background-color 200ms ease-out;
}
.span.scrolled{
background-color: rgba(214, 22, 22, 0.781) !important;
  transition: background-color 300ms ease-in;
}
#quote{
  width: 45rem;
  font-family: 'Roboto';
  font-size: 1.2rem;
  /* margin-left: 33rem; */
  padding-left: 2rem;
  border-bottom: 1px solid white;
  border-right: 1px solid white;
  display: block;
  z-index: 15;
  /* padding-left: 70rem; */
}

@keyframes sway1 {
    0%, 100%{ transform: rotate(-8deg);}
    50%{ transform: rotate(8deg); }
}
.navbar.scrolled{
    background-color: rgba(255, 255, 255, 0.781) !important;
  transition: background-color 300ms ease-in;
}
.bubbles{
     animation: sway1 6s infinite;
    transform-origin: 50% 100% 0;
-webkit-box-shadow:0px 0px 206px 96px rgb(242, 243, 221);/*3rd value 172*/
-moz-box-shadow: 0px 0px 206px 96px rgb(228, 228, 226);/*3rd value 172*/
box-shadow: 0px 0px 206px 96px rgb(201, 201, 200);/*4th value 155*/
  border:none;
  border-radius: 50%;
  position: absolute;
  background-color: rgba(255, 255, 255, 0.664)!important;
  z-index:15;
}


@keyframes sway2 {
    0%, 100%{ transform: rotate(-1deg);}
    50%{ transform: rotate(1deg); }
}


.fish{
  /* border-left: 1px solid black; */
   animation: sway2 10s infinite;
    transform-origin: 50% 100% 0;
  left: 31rem;
  margin-top: 7rem;
  z-index: 11 !important;
  height: auto;
  max-width: 53rem;
  position: absolute;

}

.container{
  color:white;
  text-transform: uppercase;
  position: absolute;
  display: block;
  font-family: 'Josefin Sans';
  font-weight: 100;
  margin-top: 10rem;
/* margin-top: -40rem; */
margin-left: 3rem !important;
font-size: 5rem;
}
.container>p{
  margin-right: 54rem;
}
.bubbles{
  background-color: white;
   position:absolute;
  z-index:-0.3;
}
.container>.header>h1{
  font-size: 5rem;
  width: 30rem;
  color: white;
  font-family: 'Limelight';
  font-weight: 600;
  text-transform: uppercase;
    border-left: 1px double rgb(255, 255, 255);
  border-bottom: 1px double rgb(255, 255, 255);
}
#algae{
  z-index: 10;
  margin: 10rem;
  top: 9rem;
  position:absolute;
  filter: brightness(64%);
  filter: drop-shadow(50%);
}
@media screen and (max-width:480px){
  #quote{
    font-size: 1rem;
    word-break: break-all;
    margin-left: -7rem;
 writing-mode: vertical-rl;
  text-orientation: upright;
  }
  .fish{
    width:5rem;
    left: -50rem;
  }
  .container>.header>h1{
    width:15rem;
    font-size: 2.5rem;
    margin-left: -2rem;
  }
  .container>p{
    width:2rem;
    font-size: 2.2rem;
margin-left: -1.3rem;
  }
  .bubbles{
  margin-left: -30rem;
  width: 5rem;
  }
  #algae{
    margin-left: -3rem;
  }
}
@media screen and (min-width: 1290px){
  .fish{
    margin-top: 10rem;
    margin-left:30rem;
    width:55rem
  }
 
  .container>.header>h1{
    font-size:10rem;
    width: 55rem
  }
  .bubbles{
    margin-left: 10rem;
    margin-top: 5rem
  }
  #algae{
    margin-left: -3rem;
    margin-top: 25rem;
    width: 35rem;
    height: 30rem
  }
  .container>p{
    margin-left: 5rem;
    width: 50rem;
    font-size: 7rem
  }
  #quote{
    margin-left: 25rem
  }
  
}
#year2015{
  position: absolute;
  margin-left: 70rem;
  color:black;
  font-family: 'Roboto';
  font-size: 1.5rem;
  background-image: linear-gradient(to right,rgb(219, 215, 159),rgb(226, 203, 159));
  border-radius: 5%;
  height: 40rem;
  border-right: 1rem dotted rgb(108, 148, 105);
  display: flex;
  flex-direction: column;
  padding-top: 5rem;
  padding: 3rem
}
.span>h1{
  padding-top: 3rem;
  color: white;
  font-weight: bold;
  font-family: 'Raleway';
  letter-spacing: 0.3rem;
  border-bottom: double white;
  width:30rem;
  padding-left: 2rem
}
@keyframes line {
  0%{
    height: 0
  }
  100%{
    height: 26.8rem
  }
}
.title{
  position: absolute;
  margin-left: -5.2rem;
  color: white;
  width: 5rem;
  font-family: 'Mate';
  font-weight: bold;
  margin-top: -2.8rem;
  background-image: radial-gradient(rgb(16, 56, 39),rgb(67, 102, 72));
  text-transform: uppercase;
  writing-mode: vertical-lr;
  z-index: -1;
  text-orientation: upright;
  animation-name: line;
  animation-duration: 3s;
}
#year2016{
  position: absolute;
  width: 44rem;
  color:black;
  font-family: 'Roboto';
  font-size: 1.5rem;
  background-image: linear-gradient(to left,rgb(176, 173, 219),rgb(73, 73, 109));
  border-radius: 5%;
  height: 40rem;
  border-left: 1rem dotted rgb(108, 148, 105);
  display: flex;
  flex-direction: column;
  padding-top: 5rem;
  padding: 3rem;
  margin-top: 20rem
}
.title2{
  position: absolute;
  margin-left: 37.5rem;
  color: white;
  width: 5rem;
  font-family: 'Mate';
  font-weight: bold;
  margin-top: -2.8rem;
  background-image: radial-gradient(rgb(16, 56, 39),rgb(67, 102, 72));
  text-transform: uppercase;
  writing-mode: vertical-rl;
  z-index: -1;
  text-orientation: upright;
  animation-name: line;
  animation-duration: 3s
}
</style>
