<template>
 <header id="header">
        <div class="center">
            <!-- LOGO -->
            <div id="logo">
                <img src="../assets/logo.png" class="app-logo" alt="Logotipo" />
                <span id="brand"> <strong>NFT</strong> Databoard</span>
            </div>

            <!-- MENU -->
            <nav id="menu">
                <ul>
                    <li>
                        <router-link to="/home" active-class="active"
                            >Home</router-link
                        >
                    </li>
                    <li>
                        <router-link to="/blog" active-class="active"
                            >Blog</router-link
                        >
                    </li>
                    <li>
                        <router-link to="/form" active-class="active"
                            >Form</router-link
                        >
                    </li>
                    <li>
                        <router-link
                            :to="{
                                name: 'page',
                                params: {
                                    id: 'Welcome to this Page',
                                },
                            }"
                            active-class="active"
                            >Page</router-link
                        >
                    </li>
                    <li>
                        <router-link to="/peliculas" active-class="active"
                            >NFTS</router-link
                        >
                    </li>
                    
                    <div id="el">
                        {{pressedBtn}}
                        <button >Wallet</button>
                    </div>
                    
                </ul>
            </nav>

            <!--LIMPIAR FLOTADOS-->
            <div class="clearfix"></div>
        </div>
    </header>
</template>

<script>
//import { watch } from '@vue/composition-api';
//import Vue from 'vue';
// import { defineComponent } from '@vue/composition-api'

export default {
    name: 'Header', 
};
/*
new Vue({
    el: '#el',
    data() { 
        return{
            pressedBtn: 'Wallet',
             }
            watch: {
        
        }
    },
}
*/
</script>
