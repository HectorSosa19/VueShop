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
        <br/>
        <strong><h1 id="TextRegister">Register your information</h1></strong>
        <hr/>
        <section>
        
    <div class="container">
      <div class="mt-5 columns is-centered is-8 is-variable">
        <div class="column is-4-tablet is-3-desktop">
        <b-field label="Name">
            <b-input v-model="name"></b-input>
        </b-field>
        <b-field label="LastName">
            <b-input v-model="LastName"></b-input>
        </b-field>  
        <b-field label="Email">
            <b-input type="email"
                placeholder="el9@gmail.com"
                maxlength="30">
            </b-input>
        </b-field>

        <b-field label="Username"
            >
            <b-input maxlength="30" placeholder="ElFather01"></b-input>
        </b-field>

        <b-field label="Password">
            <b-input type="password"
            placeholder="H18312#"
                >
            </b-input>
        </b-field>

        <b-field label="Phone">
            <b-input placeholder="8091235599" type="number"></b-input>
        </b-field>
                <b-field label="Location">
            <b-input placeholder="Albert Thomas #211 Ensanche Luperon" type="number"></b-input>
        </b-field>
        <br/>
        <b-button id="bt" type="is-dark">Create Account🤺</b-button>
    </div>
    </div>
    </div>
    </section>

    
    <Footer/>
    </div>    
</template>

<style>
#TextRegister{
 font-size: 50px;
 margin-left:700px;
}
#bt{
    margin:0;
    padding:0;
    margin-left: 80px;
}
</style>