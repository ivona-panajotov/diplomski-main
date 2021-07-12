<template>
    <div class="events">
        <EventsList :eventsInfo="eventsInfo"/>
        <EventInfo :eventsInfo="eventsInfo"/>
        
    </div>
</template>

<script>

import eventData from '../data/events.json'
import EventsList from '../components/EventsList.vue'
import EventInfo from '../views/EventInfo.vue'
export default {
    components:{EventsList},
    data() {
        return {
            eventsInfo:[],
        }
    
    },
    created(){
        for(let data of eventData){
            this.eventsInfo.push(data)
            JSON.parse(JSON.stringify(this.eventsInfo))
        }
        console.log(this.$props)
    }
}
document.body.onmousemove=(e)=>{
    const y=e.pageY
    const x=e.pageX
    const cursor=document.querySelector('#cursor')
    cursor.style.top=`${y}px`
    cursor.style.left=`${x}px`

}
</script>