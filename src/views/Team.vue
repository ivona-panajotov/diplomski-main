<template>
    <div>
        <div id="line-thru"></div>
        <h1>Meet our team</h1>
    </div>
</template>

<script>
export default {

}
document.body.onmousemove=(e)=>{
    const y=e.pageY
    const x=e.pageX
    const cursor=document.querySelector('#cursor')
    cursor.style.top=`${y}px`
    cursor.style.left=`${x}px`

}
</script>

<style scoped>
body,html{
     background: rgb(217,223,237);
background: -moz-radial-gradient(circle, rgba(217,223,237,1) 6%, rgba(69,73,88,1) 100%);
background: -webkit-radial-gradient(circle, rgba(217,223,237,1) 6%, rgba(69,73,88,1) 100%);
background: radial-gradient(circle, rgba(217,223,237,1) 6%, rgba(69,73,88,1) 100%);
  height:100vh;
  position: relative;
}
    #cursor {
  position: absolute;
  border: 1px solid rgb(92, 92, 92);
  height: 7.3rem;
  width: 7.3rem;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  cursor: none !important;
  z-index: 50;
  backdrop-filter: grayscale(100)
}
div>h1{
    margin-top: 13rem;
    font-size: 4rem;
    font-family: 'Courier New', Courier, monospace;
    font-weight: bold;
    color: rgb(138, 202, 188);
    text-shadow: 4px 2px 5px rgb(116, 116, 116);
    letter-spacing: 5px
}

@keyframes line {
    0%{
        width: 0
    }
    100%{
        width:37rem
    }
}

#line-thru{
    position: absolute;
    background-color: rgb(44, 34, 68);
    animation-name: line;
    animation-duration: 1s infinite;
    z-index: -1;
    height: 3.2rem;
}

</style>