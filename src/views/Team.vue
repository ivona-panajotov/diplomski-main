<template>
    <div>
        <div id="line-thru"></div>
        <h1>Meet our team</h1>
        <div id="profiles">
            <div class="profile">
                    <div class="wrapper">Aaron Milles - CEO</div>
            <img src="@/assets/images/profile2.jpg" class="shadow-lg" alt="" srcset="">
            </div>
            <div class="profile">
                <div class="wrapper">Natalie Hethers - HR Manager</div>
            <img src="@/assets/images/profile1.jpg" class="shadow-lg" alt="" srcset="">
            </div>
            <div class="profile">
                                <div class="wrapper"> Nadia Hrebenova - Asistent</div>

            <img src="@/assets/images/profile3.jpg" class="shadow-lg" alt="" srcset="">
            </div>
            <div class="profile">
                                <div class="wrapper">Ross Bayuk - Business administrator</div>

            <img src="@/assets/images/profile4.jpg" class="shadow-lg" alt="" srcset="">
            </div>
            <div class="profile">
                         <div class="wrapper">Matthew Brown - IS supervisor</div>
            <img src="@/assets/images/profile5.jpg" class="shadow-lg" alt="" srcset="">
            </div>
            <div class="profile">
                         <div class="wrapper">Soon... Perhaps you'll fill an position?</div>
                         <div class="soon shadow-lg" ></div>
            <img src="@/assets/images/question.png"  style="height:13rem; margin-top: 5rem" alt="" srcset="">
            </div>
        </div>
    </div>
</template>

<script scoped>
export default {
beforeCreate: function() {
        document.body.className = 'team';
    }
}
document.body.onmousemove=(e)=>{
    const y=e.pageY
    const x=e.pageX
    const cursor=document.querySelector('#cursor')
    cursor.style.top=`${y}px`
    cursor.style.left=`${x}px`

}
$('body').css({position:'fixed','background-color':'rgb(53, 63, 84)'})

</script>

<style scoped>
body.team{  width:100%;
height: 100%;
    background-color: rgb(53, 63, 84) !important;
}
div>h1{
    padding-left: 0.7rem;
    margin: 13rem 10rem;
    font-size: 4rem;
    font-family: 'Courier New', Courier, monospace;
    font-weight: bold;
    color: rgb(202, 185, 138);
    text-shadow: 4px 2px 5px rgb(116, 116, 116);
    letter-spacing: 5px;
    border-left:1rem solid wheat
}


img{
width: 17rem;
height: 17rem;
margin: 3rem 8rem 20rem;
}
#profiles{
    margin: 10rem 0;
     display: grid;
    grid-template-columns: auto auto auto;
}

.wrapper{
    text-align: center;
    color: white;
    height: 3rem;
    width: 17rem;
    background-color: rgb(56, 28, 80);
    margin: -3rem 8rem ;
    
}.soon{
    height: 17rem;
    width: 17rem;
    position: absolute;
    border: 1rem solid salmon;
    margin: 3rem 8rem;
    z-index: 1;
     opacity: 0.7; 
}
img:hover{
    transform: scale(1.1);
    transition: transform 1s ease;
}
@media screen and (min-width: 769px) and (max-width: 1279px){
#profiles{
   display: flexbox;
  flex-wrap: wrap;
  width: 300px;
  gap: 20rem 13rem;
  margin-left: -3.3rem;
}
.profile{
  width: 100px;
  height: 50px;
}
}
</style>