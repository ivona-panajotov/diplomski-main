<template>
    <div class="events">
        <EventsList/>
    </div>
</template>

<script>

import EventsList from '../components/EventsList.vue'
export default {
    components:{EventsList}
}
document.body.onmousemove=(e)=>{
    const y=e.pageY
    const x=e.pageX
    const cursor=document.querySelector('#cursor')
    cursor.style.top=`${y}px`
    cursor.style.left=`${x}px`

}
</script>