<script>
import NavBar from '@/components/NavBar.vue'
import Footer from '../components/Footer.vue'
import axios from 'axios'
const Url_Api = "https://localhost:7182/api/Product/"
    export default {
    data() {
        return {
            Products:[],
            todoITem:{},
            CreatedBy:"true",
            UpdatedBy:"true",
            Id:0,
            name:'',
            category:'',
            price:0,
            dateOfExpiry:'',
            description:'',
            stock:0,
        };
    },
    components: { NavBar, Footer }
  ,mounted(){
   axios.get(Url_Api).then((response)=>(this.Products = response.data));
 }
}

</script>

<template>
<div>
    <NavBar/>
    <div v-for="product in Products"class="currency">
    <section class="section is-hidden-mobile">
      <h3 class="title has-text-centered is-size-4">{{product.category}}</h3>
      <div class="">

          <div class="card">
            <div class="card-image has-text-centered px-6">
              <img src="https://m.media-amazon.com/images/I/71rXSVqET9L._AC_SX466_.jpg" alt="Placeholder image">
            </div>
            <div class="card-content">
              <p>${{product.price}}USD</p>
              <p class="title is-size-5">{{product.name}}</p>
              <strong>{{product.description}}</strong>
            </div>
            <footer class="card-footer">
              <p class="card-footer-item">
                <a href="" class="has-text-grey">Buy</a>
              </p>
            </footer>
          </div>
        </div>
        </section>
        </div>
    <Footer/>
</div>    
</template>

<style >

</style>