<script>
import NavBar from '@/components/NavBar.vue'
import Footer from '../components/Footer.vue'
    export default {
    data() {
        return {};
    },
    components: { NavBar, Footer }
}
</script>

<template>
    <div>
        <NavBar/>
        <hr/>
        <strong><h1 id ="help">How Can I Help You?🚁</h1></strong>
        <hr/>
        <section class="center">
            <div class="column is-4-tablet is-3-desktop">
           <div class="card">
        <b-message title="¿How to be a Shop Online seller? " aria-close-label="Close message">
        You just have to register as a user and your data is verified to see if you are a suitable to be a seller in our store.
        </b-message>
        <b-message title="¿How to Download the Shop Online app?" aria-close-label="Close message">
            At the moment we do not have a mobile application available but they are already manufacturing it, since it is ready, they will be able to use our app
        </b-message>
        </div>
        </div>
        </section>
        <Footer/>
    </div>
</template>

<style>
.center{
    margin-left: 600px;
}
#help{
font-size: 50px;
margin-left:470px;
}
</style>