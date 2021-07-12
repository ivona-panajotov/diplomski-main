<template>

<div style="background-color:#5a5879; color:white; position:relative; heigth:100vh">
   <div class="conditional-div" v-if="id==1">
    <h1 class="header"> {{jsonInfo[0].name}}</h1>
    <img class="confImg shadow-lg" :src="require(`@/assets/images/${jsonInfo[0].banner}`)" alt="Conference banner" >
<div class="desc" v-html="jsonInfo[0].desc"></div>
</div>
  <div class="conditional-div" v-if="id==2">
    <h1 class="header"> {{jsonInfo[1].name}}</h1>
    <img class="confImg shadow-lg" :src="require(`@/assets/images/${jsonInfo[1].banner}`)" alt="Conference banner" >
<div class="desc" v-html="jsonInfo[1].desc"></div>
</div>
<div class="conditional-div" v-if="id==3">
    <h1 class="header"> {{jsonInfo[2].name}}</h1>
    <img class="confImg shadow-lg" :src="require(`@/assets/images/${jsonInfo[2].banner}`)" alt="Conference banner" >
<div class="desc" v-html="jsonInfo[2].desc"></div>
</div><div class="conditional-div" v-if="id==4">
    <h1 class="header"> {{jsonInfo[3].name}}</h1>
    <img class="confImg shadow-lg" :src="require(`@/assets/images/${jsonInfo[3].banner}`)" alt="Conference banner" >
<div v-html="jsonInfo[3].desc"></div>
</div><div class="conditional-div" v-if="id==5">
    <h1 class="header"> {{jsonInfo[4].name}}</h1>
    <img class="confImg shadow-lg" :src="require(`@/assets/images/${jsonInfo[4].banner}`)" alt="Conference banner" >
<div v-html="jsonInfo[4].desc"></div>
</div><div class="conditional-div" v-if="id==6">
    <h1 class="header"> {{jsonInfo[5].name}}</h1>
    <img class="confImg shadow-lg" :src="require(`@/assets/images/${jsonInfo[5].banner}`)" alt="Conference banner" >
<div class="desc" v-html="jsonInfo[5].desc"></div>
</div><div class="conditional-div" v-if="id==7">
    <h1 class="header"> {{jsonInfo[6].name}}</h1>
    <img class="confImg shadow-lg" :src="require(`@/assets/images/${jsonInfo[6].banner}`)" alt="Conference banner" >
<div class="desc" v-html="jsonInfo[6].desc"></div>
</div><div class="conditional-div" v-if="id==8">
    <h1 class="header"> {{jsonInfo[7].name}}</h1>
    <img class="confImg shadow-lg" :src="require(`@/assets/images/${jsonInfo[7].banner}`)" alt="Conference banner" >
<div v-html="jsonInfo[7].desc"></div>
</div>

</div>
<p v-if="register" style="text-align:center; margin:0; color:white; background-color:purple">You successfully applied for this conference</p>
<button class="btn btn-success" @click="applied">Attend !</button>
</template>
<script>
 import eventInfo from '../data/events.json'

export default {
    props:["eventsInfo"],
   data() {
       return {
           id:this.$route.params.id,
           jsonInfo:eventInfo,
           register:false
       }
   },
   methods: {
       applied(){this.register=true}
   },
}
</script>

<style scoped>

.confImg{
     margin: 17rem; 
     width: 50%;
}
.blur{
    position: absolute;
    height: 20rem;
    width:100%
}
.header{
    width: 100%;
    text-align: center;
   padding: 0.3rem 0.5rem;
    background-color: rgb(125, 68, 139);
    border-left: 1rem solid black;
    color: white;
     margin-top: 10rem; 
    position: absolute;
}
.conditional-div{
    text-align: center;
}
.btn{
    width:100%
}
.desc{
    padding-bottom: 7rem;
}
@media screen and (min-width:481px) and (max-width:768px){
    .confImg{
        margin: 15rem 3rem;
    }
}
</style>