<script>
import NavBar from '@/components/NavBar.vue'
import Footer from '../components/Footer.vue'
import axios from 'axios'
const Url_Api="https://localhost:7182/api/Category"

    export default {
    data() {
        return {
            Categories:[],
            todoITem:{},
            CreatedBy:"true",
            UpdatedBy:"true",
            Id:0,
            name:'',
        };
    },
    components: { NavBar, Footer }
    ,mounted(){
   axios.get(Url_Api).then((response)=>(this.Categories = response.data));
 }
}
</script>

<template>
    <div>
        <NavBar/>
        <div v-for="category in Categories">
    <section class="section is-hidden-mobile">
      <h3 class="title has-text-centered is-size-4">{{category.name}}</h3>
      <div class="">

          <div class="card">
            <div class="card-image has-text-centered px-6">
              <img src="https://m.media-amazon.com/images/I/71rXSVqET9L._AC_SX466_.jpg" alt="Placeholder image">
            </div>
            <footer class="card-footer">
              <p class="card-footer-item">
                <a href="/Products" class="has-text-grey">Go to buy</a>
              </p>
            </footer>
          </div>
        </div>
        </section>
        </div>
      <Footer/>
    </div>
</template>

<style>

</style>