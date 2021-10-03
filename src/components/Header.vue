<template>
 <header id="header">
        <div class="center">
            <!-- LOGO -->
            <div id="logo">
                <img src="../assets/logo.png" class="app-logo" alt="Logotipo" />
                <span id="brand"> <strong>Learn</strong>Vue </span>
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
                        <router-link to="/formulario" active-class="active"
                            >Form</router-link
                        >
                    </li>
                    <li>
                        <router-link
                            :to="{
                                name: 'pagina',
                                params: {
                                    id: 'Welcome to this Page',
                                },
                            }"
                            active-class="active"
                            >Need to CHANGE</router-link
                        >
                    </li>
                    <li>
                        <router-link to="/peliculas" active-class="active"
                            >NFTS</router-link
                        >
                    </li>
                </ul>
            </nav>

            <!--LIMPIAR FLOTADOS-->
            <div class="clearfix"></div>
        </div>
    </header>
</template>

<script>
// import { defineComponent } from '@vue/composition-api'

export default {
    name: 'Header',  
};
</script>
