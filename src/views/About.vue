<template>
  <div class="about">
    <h1 style="border-left: 1rem solid purple; width: 17rem; border-right: 1rem solid salmon">About Liquify</h1>
    <p>Students have hard time,and that's why <em>Liquify</em> exists. We are gathering people from all around the globe, and serve them what we have.</p>
    <p>We are based in Belgrade and London <em>(for now)</em> </p>
    <h2>So what do we have?</h2>
    <p>Our organization contains conferences and workshops. Conferences and worksops are split into two:
      <ul style="font-family:monospace">
        <p style="padding-left:1rem; width: 15rem; border-left: 1rem solid purple; border-bottom:0.2rem solid black">Conference part 1:</p>
        <li style="width:15rem; background-color:purple;">Listen to the speakers</li>
        <p style="margin-top:0.7rem; padding-left:1rem; width: 15rem; border-left: 1rem solid purple; border-bottom:0.2rem solid black">Conference part 2:</p>
        <li style="width:15rem; background-color:purple;">Apply for an internship or job</li>
        <hr>
        <p style="padding-left:1rem; width: 15rem; border-left: 1rem solid salmon; border-bottom:0.2rem solid black">Workshop part 1:</p>
        <li style="width:15rem; background-color:salmon">Practice</li>
        <p style="margin-top:0.7rem; padding-left:1rem; width: 15rem; border-left: 1rem solid salmon; border-bottom:0.2rem solid black">Workshop part 2:</p>
        <li style="width:15rem; background-color:salmon">Show your knowledge</li>      
      </ul>
    </p>
     <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2830.6354586717216!2d20.41963991549816!3d44.80861737909864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a6ff4cc5d8a99%3A0xac606eee34863673!2z0JHQu9C-0LogMjMsIEJlbGdyYWRl!5e0!3m2!1sen!2srs!4v1626003633681!5m2!1sen!2srs" width="700" height="450" style="border:1rem ridge white;" allowfullscreen="" loading="lazy"></iframe>
    <span id="contact-span">
     <h2 style="border-bottom:0.5rem solid gray">Contact</h2>
      <p>Belgrade: +381 92 384 1277</p>
      <p>London: +44 7 555 123-456.</p>
    </span>
  </div>
</template>

<script scoped>
export default {
  
}
let body=document.querySelector('body')
body.style.backgroundColor='rgb(66, 98, 107)'
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=KoHo:ital,wght@0,400;0,500;1,300&display=swap");

.about{
  font-family: 'KoHo';
  margin: 10rem 5rem;
  color: white;
}
#contact-span{
  font-family: 'sans';
  font-size: 1.2rem;
  margin-top: -29rem;
  margin-left: 50rem;
  display: flex;
  flex-direction: column;
}
</style>
