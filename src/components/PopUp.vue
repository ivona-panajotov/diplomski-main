<template>
  <div v-if="exited">
    <div class="dropShadow"></div>
    <div class="popUp shadow-lg p-3 mb-5 bg-white rounded">
      <font-awesome-icon icon="times" id="exit" @click="exitModal()" />

       <form @submit.prevent="login()">
        <h1>Login</h1>
        <div v-if="error" class="error">Can't log in!</div>
        <div>
          <input type="string" placeholder="Username" v-model="username">
        </div>
        <div>
          <input type="password" placeholder="Password" v-model="password">
        </div>
        <button type="submit">Submit</button>
       </form>
      </div>
    </div>
</template>

<script>
import axios from "axios" 
export default {
  name: "PopUp",
  props: ["signUp"],
  data() {
    return {
      exited: this.$props.signUp,
      username:'',
      password:'',
      error:false
    };
  },
  methods: {

    exitModal() {
      console.log("exit modal");
      this.exited = !this.exited;
      console.log(this.exited);
    },
    login (){    
      const localUser1=localStorage.getItem('username')
      const localPass1=localStorage.getItem('password')
      if(this.username==localUser1 && this.password==localPass1){
        this.error=false
        console.log('Logged in')
      }else this.error=true
  },
  created() {
    console.log(this.$props.signUp);
    fetch("https://randomuser.me/api/?results=5&seed=abc")
      .then((response) => response.json())
      .then((data) => {
        users(data);
      })
      .catch((err) => console.log(err, err.status));

    function users(data) {
      const users = data.results;
      console.log(users);
    }
  }
}}
localStorage.setItem('username','rinho94')
    localStorage.setItem('password','pass')
document.body.onmousemove=(e)=>{
    const y=e.pageY
    const x=e.pageX
    const cursor=document.querySelector('#cursor')
    cursor.style.top=`${y}px`
    cursor.style.left=`${x}px`

}
</script>

<style scoped>
html,
body {
  max-width: 100% !important;
  max-height: 100vh !important;
}

.dropShadow {
  backdrop-filter: blur(3px);
  margin-top: -10rem;
  background-color: rgba(100, 99, 99, 0.596);
  min-height: 184% !important;
  min-width: 100% !important;
  position: fixed;
  z-index: 15;
}
.popUp {
  top: 5rem;
  height: 40rem;
  width: 70rem;
  background-color: white;
  color: black;
  z-index: 17;
  position: absolute;
  margin-left: 21rem;
}
form {
 display: grid;
 grid-row: auto auto auto;
  margin: 5rem;
  padding: 3rem;
}
input {
  -webkit-box-shadow: -22px 7px 72px 9px rgba(137, 108, 150, 1);
  -moz-box-shadow: -22px 7px 72px 9px rgba(137, 108, 150, 1);
  box-shadow: -22px 7px 72px 9px rgba(137, 108, 150, 1);
  width: 15.3rem;

  background-color: rgb(10, 2, 37);
  color: rgb(50, 158, 131);
  margin-bottom: 3rem;
  position: relative;
}
input:focus {
  transform: scale(1.03);
}
label {
  border-top: 1px solid black;
  width: 50rem;
  margin: 1.3rem;

}
#exit {
  height: 2rem;
  width: 2rem;
  color: rgb(155, 32, 32);
  box-shadow: 1px 1px 5px rgb(199, 34, 34);
  float: right;
}

.error{
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: bold;
  color: darkred;
  font-size: 2rem
}

</style>