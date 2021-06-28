<template>
    <div id="events">
        <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="@/assets/images/conference1.jpg" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <router-link to="/info"> <a href="#" class="btn btn-primary">Go somewhere</a></router-link>
  </div>
</div><div class="card" style="width: 18rem;">
  <img class="card-img-top" src="@/assets/images/conference2.jpg" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div><div class="card" style="width: 18rem;">
  <img class="card-img-top" src="@/assets/images/conference3.jpeg" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div><div class="card" style="width: 18rem;">
  <img class="card-img-top"  src="@/assets/images/conference4.jpg" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div><div class="card" style="width: 18rem;">
  <img class="card-img-top" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div><div class="card" style="width: 18rem;">
  <img class="card-img-top" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div><div class="card" style="width: 18rem;">
  <img class="card-img-top" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div><div class="card" style="width: 18rem;">
  <img class="card-img-top" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
</template>

<style scoped>
#events{
    display: grid;
    margin: 2rem;
    padding: 3rem;
    grid-template-columns: auto auto auto auto;
}
.card{
    margin: 1.2rem
}
.card-img-top{
    max-width: 18rem;
    max-height: 10rem !important;
}
</style>