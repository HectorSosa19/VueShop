<script >
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue';
    export default {
    data() {
        return {
            carousels: [
        {
          title: "Offers💣",
          image: "https://electrodomesticoscartagenadotcom.files.wordpress.com/2015/02/untitled-11.jpg",
        },
        {
          title: "News🆕",
          image: "https://i.blogs.es/121836/semana-internet-2022/450_1000.jpg",
        },
        {
          title: "Offers💣",
          image: "https://f.fcdn.app/imgs/e527e5/www.tiendascorripio.com.do/corrdo/69a1/original/recursos/783/0x0/1280x400.jpg",
        }
      ]
        };
    },
    components: { NavBar, Footer }
}
</script>

<template>
    <div>
        <NavBar/>
        <strong><h1 id="TextOffers">Offers & News 🆕💣.</h1></strong>
        <hr/>
        <!-- <section class="images">
        <b-image id ="img1" src="https://electrodomesticoscartagenadotcom.files.wordpress.com/2015/02/untitled-11.jpg"></b-image>
        <b-image id="img2" src="https://i.blogs.es/121836/semana-internet-2022/450_1000.jpg"></b-image>
        <b-image id ="img3" src="https://f.fcdn.app/imgs/e527e5/www.tiendascorripio.com.do/corrdo/69a1/original/recursos/783/0x0/1280x400.jpg"></b-image>
        </section> -->
          <b-carousel>
        <b-carousel-item v-for="(carousel, i) in carousels" :key="i">
        <section>
            <div class="hero-body has-text-centered">
            <h1 class="title">{{carousel.title}}</h1>
            <img :src="carousel.image">
            </div>
        </section>
        </b-carousel-item>
        <template slot="indicators" slot-scope="props">
        <span>{{props.i}}</span>
        </template>
    </b-carousel>


         <a href="/Products" ><b-button id="btn" type="is-dark">Go to Buy 🛒</b-button></a>
        <br/>
        <br/>
        <br/>

        <Footer/>
        
    </div>
</template>

<style >
#btn{
   margin-left: 700px;
}
#img1{
    margin-left: 50px;
    height: 600px;
    width: 600px;
}
#img2{
    position:relative;
    margin:0;
    padding:0;
    left: 720px;
    top:-590px
}
#img3{
    height: 600px;
    width: 600px;
    margin:0;
    padding:0;
    left: 1200px;
    top:-830px
}

#TextOffers{
font-size: 50px;
margin-left:550px;
}
.images{
height: 400px;
width: 400px;
}
</style>