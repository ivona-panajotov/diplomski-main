<template>
<form class="shadow-lg">
  <div class="form-group">
    <label for="username">Username</label>
    <input type="text" class="form-control" id="username" placeholder="Username">
  </div> <div class="form-group">
    <label for="email">Email address</label>
    <input type="email" class="form-control" id="email" placeholder="Enter email">
    <small id="emailtxt" class="form-text text-muted">Pssst... We will not share your email to anyone else</small>
  </div>
  <div class="form-group">
    <label for="password">Password</label>
    <input type="password" class="form-control" id="password" placeholder="Password">
  </div>
  <button type="submit" class="btn btn-primary">Register</button>
</form>
</template>

<script>
import axios from "axios" 
export default {
  name: "Register",
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

form{
  width:80rem;
  height:120;
  font-size: 1rem ;
  margin-left: 7rem;
  margin-top: 10rem;
  display: flex;
  flex-direction: column;

}
label{
  font-weight: bold;
  border-bottom: 2px black dotted;
}
.btn{
  margin: 3rem;
  margin-left: 70rem;
  height: 3rem;
  width: 6rem;
}
input[type=text],[type=password],[type=email]{
  width: 50rem;
  margin: 2rem;
}
.form-check{
 margin-left: 70rem;
}
.form-group{
 padding: 1.1rem;
}
#emailtxt{
  margin-left: 2rem;
}@media screen and (min-width: 769px) and (max-width: 1279px){
form{
  height: 30rem;
  width: 65rem;
  margin-left: 5rem;
}
.btn{margin: -6rem 57rem;}
}
</style>