<template>
     <div class="general">
        <Slider
            texto="Welcome To NFT Databoard"
            home="true"
        />
        <div class="center">
            <section id="content">
                <h2 class="subheader">Last Posts</h2>

                <!--Listado articulos-->
                <Articles :articles="articles" />
                <div id="articles"></div>
            </section>
            <Sidebar />
            <div class="clearfix"></div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'LastArticles',
}
</script>