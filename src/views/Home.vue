<template>
    <div>
        <NavBar/>
        <Slider/>
        <CardCategory/>
        <Cards/>
        <Footer/>   
    </div>
</template>


<script>
import NavBar from '@/components/NavBar.vue';
import Slider from '@/components/Slider.vue';
import Cards from '../components/Cards.vue';
import CardCategory from '../components/CardCategory.vue';
import Footer from '../components/Footer.vue';

export default{
    name:'Home',
    components: {
    NavBar,
    Slider,
    Cards,
    CardCategory,
    Footer
}
}
</script>


<style>

</style>