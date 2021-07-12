<template>
<div v-if="submitted" id="sent" style="color:purple; font-weight:bold; ">
        Thanks for submitting a new event,you will recieve email within 46h
    </div>
    <form action="POST" id="form">
<div v-if="filled">
  <h1>Hello,you want to make an Event? Make an event,and wait for managers response.</h1>
  <h5>You will recieve mail wether or not is has been accepted.</h5>
    <div id="event-form">
        <p>Name of the event: <input v-model="eName" type="text"/></p>
        <p>Date of the event: <input v-model="eventDate" type="date"/></p>
        <p id="desc">Description</p>
        <textarea v-model="eventDesc" name="" id="" cols="67" rows="5"></textarea> 
        <p>Or if you want to upload an text file...</p> 
        <input type="file" value="">
        
        <p>Lastly,banner for the event </p>
        <input type="file"> 
    </div>
    <div v-if="empty" class="err">
        Please fill out all the fields!
    </div>
    <button class="btn upload btn-success" @click.prevent="emitToParent">Upload</button>
</div>
</form>
</template>

<script scoped>
export default {
    
    data() {
        return {
           eName:"",
            eventDate:"",
            eventDesc:"",
            submitted:false,
            filled:true,
            empty:false,
        }
    },
    methods: {
        emitToParent (event) {
            if(this.eName==0||this.eventDate==0||this.eventDesc==0){
                this.empty=true
            }
            else{
this.$emit('childToParent', this.eName,this.eventDate,this.eventDesc)
    this.submitted=true
    this.filled=false
            }
    }
    },
}
</script>
<style scoped>
#form{
    border-top: 1rem solid wheat;
    border-bottom: 1rem solid wheat;

    color:white;
    display: flex;
    flex-direction: column;
    margin:10rem 13rem;
    width:70%
    }
#sent{
    font-size: 1.5rem;
}
.upload{
    margin: 2rem 0;
    width:100%
}
#event-form{
    font-size: 1.35rem;
}
.err{
    float: right;
    font-size: 1.5rem;
    color:pink; 
    font-weight:bold;
}
@media screen and (min-width: 769px) and (max-width: 1279px){
    #form{
        margin-top:13.5rem;
    }
#sent{
    font-size:1.3rem; padding-top: -7rem; padding-left:20rem; margin: 2rem 9rem
}
}
</style>