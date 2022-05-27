<template>
    <div>
         <!-- NavBar -->
        <b-navbar>
        <template #brand>
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <img
                    src="https://png.pngtree.com/png-vector/20210322/ourlarge/pngtree-the-online-shop-logo-uses-a-single-color-home-theme-png-image_3096093.jpg"
                    alt="Lightweight UI components for Vue.js based on Bulma"
                >
            </b-navbar-item>
        </template>
        <template #start>
            <b-navbar-item>
                <router-link to='/AllCategories'>All Categories</router-link>
            </b-navbar-item>
            <b-navbar-item>
            <router-link to='/Products'>Buy Products</router-link> 
            </b-navbar-item>
            <b-navbar-item>
                <router-link to='/Offers'>Offers</router-link>
            </b-navbar-item>
            <b-navbar-dropdown label="Services">
                <b-navbar-item>
                   <router-link to='/Services'>Contact Us</router-link> 
                </b-navbar-item>
            </b-navbar-dropdown>
        </template>
        <template #end>
            <b-navbar-item tag="div">
                <div class="buttons">
                <b-dropdown
                    position="is-bottom-left"
                    append-to-body
                    aria-role="menu"
                    trap-focus
                >
                    <template #trigger>
                        <a role="button">
                            <img id = "persona" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+
                            gvaeTAAACcklEQVRoge3ZzUtUYRTH8Y+GkllQRhCupDci+guSbNEuilYtW4j1H0T/RdAiwl0UQdteLIRWaUG27HVTSjslLYio0NQWdy4N4zjjPH
                            OuM4FfODAv95z7+3Gf+zz3nocttiiEjgJrD+Ak+rEfK5jHK0xiscBzN00nhvEOqzXiM862SGNd9mFKbQPlsYR7ONcKseuxB69t3ERlPMauTVddhV
                            vSTeRxf9NVVzCAP5o3sorTqSI6k+X/4wK2BdSBkdTECCODATVyhlITI4wcCKiR04/ulMQII1HDimyB7k1JjDCyHFCjnKWUpAgjSSdeh2/4kZIYYeR
                            jQI2c6dTECCNvA2rkfEhNjDDyJqBGzmRqYoSRHQE1cn4H1mqYF2IeT1bxPFVExBXpC6jRdK0II8k3aBXepyZGGHkUUCNnLLBWw3ThmebvjwmJz1mR
                            dGNWuolZTZqIGFpkHZHxJvLHtVFXZVD6FTnZAr01GdO4iactUVqHfnyxcRPfZe/8bclLGzcStgZF3ezldBVQsy5FGJlq4NgnBZw/jB5ZK7TesLqtD
                            RbAahzHxbLvQ7iLGfwqxTTu4ETZccM4tkkaa3IIN2Tv7qulz7s3kNeHm6WcRYziaEEa16VTti0wLuuiVA6b+ZLIMzgsa/H04kgpbxQLVfJWZOvKe
                            bFtpjXsxBV8qiIiOmZwVXCXvgOXMLcJBipjDpcF7K714kELDFTGQ4ldSLKpdLINTOQxge0pRq63gfjKuNaoiYOqz0itjmVVdgBqPaKM1Pm/VXSqsi
                            FUS+ip4rQ0zZoNoVpT2oLYnlUkX7G3/If1jPTgZ+FymqNHi1usW2zxP/EX26+//YRK7SwAAAAASUVORK5CYII="/>
                            <b-icon icon="menu-down"></b-icon>
                        </a>
                    </template>


                    <b-dropdown-item
                        aria-role="menu-item"
                        :focusable="false"
                        custom
                        paddingless>
                        <form action="">
                            <div class="modal-card" style="width:300px;">
                                <section class="modal-card-body">
                                    <b-field label="Email">
                                        <b-input
                                            type="email"
                                            placeholder="Your email"
                                            required>
                                        </b-input>
                                    </b-field>

                                    <b-field label="Password">
                                        <b-input
                                            type="password"
                                            password-reveal
                                            placeholder="Your password"
                                            required>
                                        </b-input>
                                    </b-field>

                                    <b-checkbox>Remember me</b-checkbox>
                                    <br/>
                                    <hr/>
                                    <strong><a href="/CreateUser">SIGN UP! 🦌</a></strong>
                                    <br/>
                                    <strong><a href="">Forget Your Password❓...</a></strong>
                                </section>
                                <footer class="modal-card-foot">
                                    <b-button
                                        label="Login"
                                        type="is-primary" />
                                </footer>
                            </div>
                        </form>
                    </b-dropdown-item>
                </b-dropdown>
                    <!-- Aqui termina -->
                    
                    <img id ="carrito" src="data:image/png;base64,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"/>
                </div>
            </b-navbar-item>
        </template>
    </b-navbar>
    <router-view></router-view>
    </div>
</template>

<script>
import Order from '@/views/Order.vue';
export default {
    components: { 
        Order 
    },
    
}
</script>

<style>
@import "https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css";
*{
    font-family: 'Josefin Sans', sans-serif;
}
#persona{
  padding: 0;
  margin:0;
  margin-top: 6px;
  margin-right: 35px;
}
#carrito{
  padding: 0;
  margin:0;
  margin-bottom: 9px;
}
</style>