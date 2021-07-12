<template>
<form @submit.prevent="login()" class="shadow-lg">
  <div class="form-group">
    <label for="username">Email address</label>
    <input type="text" class="form-control" id="username" placeholder="Username">
  </div>
  <div class="form-group">
    <label for="password">Password</label>
    <input type="password" class="form-control" id="password" placeholder="Password">
  </div>
  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Remember me</label>
  </div>
          <div v-if="error">Can't log in!</div>
  <button type="submit" class="btn btn-primary">Log in</button>
</form>
</template>

<script>
import $ from 'jquery' 
export default {
  name: "Login",
  props: ["signUp"],
  data() {
    return {
      exited: this.$props.signUp,
      username:'',
      password:'',
      error:false,
      data:''
    };
  },
  methods: {

    login (){    
      
      fetch('https://randomuser.me/api/?results=2&seed=abc').then(function(response){ return response.json(); })
.then((data)=> {
  console.log(username.value)
    this.data = data;
    localStorage.setItem("username",this.data.results[0].login.username)
    localStorage.setItem("password",this.data.results[0].login.password)

    localStorage.setItem(this.data.results[1].login.username,this.data.results[1].login.password)
    console.log(this.data.results[0].login.username,this.data.results[0].login.password)

const localUser1=localStorage.getItem('username')
      const localPass1=localStorage.getItem('password')
    if(username.value==localUser1 && password.value==localPass1){
        this.error=false
        console.log('Logged in')
      }else this.error=true
})
  
      
  },
}}

document.body.onmousemove=(e)=>{
    const y=e.pageY
    const x=e.pageX
    const cursor=document.querySelector('#cursor')
    cursor.style.top=`${y}px`
    cursor.style.left=`${x}px`

}
$('body').css({'background-color': 'rgb(53, 63, 84)'})

</script>

<style scoped>

form{
  background-color:white;
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
input[type=text],[type=password]{
  width: 50rem;
  margin: 2rem;
}
.form-check{
 margin-left: 70rem;
}
.form-group{
 padding: 1.1rem;
}
@media screen and (min-width: 769px) and (max-width: 1279px){
  form{
    width:60rem;
    height: 35rem;
    margin-right: 10rem;
  }
  .btn{
    margin-left: 50rem;
  }
label{
  margin: 1.3rem 3rem;
}
input[type=checkbox]{
margin: 1.5rem -42rem;
}
.form-check-label{
  margin-left: -50rem;
}

}
</style>