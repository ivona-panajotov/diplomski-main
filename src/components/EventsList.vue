<template>
<!-- <h1>{{eventsInfo}}</h1> -->

<ul id="card-holder">
  <li id="events" v-for="event in eventsInfo" :key="event">
    <div class="card" style="width: 18rem;">
  <img class="card-img-top"  :src="require(`@/assets/images/${event.banner}`)" alt="Card image cap">
  <div class="card-body">
    <h3 class="card-title">{{event.name}}</h3>
    <h4>{{event.date}}</h4>
    <p class="card-text">{{event.short}}</p>
    <router-link :to="{
      name: 'EventInfo',
      params:{ id:event.id}}">More info</router-link>
  </div>
    </div>
  </li>
</ul>
<button class="btn btn-primary"  @click.prevent="showModal">Make an event</button>
<NewEvent v-on:childToParent="onChildClick" v-if="show"/>
</template>

<script>
import eventData from '../data/events.json'
import NewEvent from "../components/NewEvent.vue"
export default {
  components:{NewEvent},
  props:['eventsInfo'],
  data() {
    return {
      json:eventData,
      show:false,
       }
  },
  mounted(){
    console.log(this.$props)
  },
  methods: {
    showModal(){
      console.log(this.show)
this.show=!this.show
    },
    onChildClick (...value) {
      const parsed= JSON.parse(JSON.stringify(value))
      console.log(this.$refs.header)
    }
  },
}
$('body').css({'background-color': 'rgb(53, 63, 84)'})
</script>

<style scoped>
#events{
  display: inline-block;
}
#card-holder{
  margin-top: 7rem;
}
.card{
  height: 25rem;
    margin: 1.2rem;
}
.card-img-top{
    max-width: 18rem;
    max-height: 10rem !important;
}
.btn{
  width: 100%;
}
@media screen and (min-width: 769px) and (max-width: 1279px){
  
 .btn{
   height: 5rem;
  width:7rem; 
  display:flex; 
  margin: -10rem 50rem
}
}
</style>