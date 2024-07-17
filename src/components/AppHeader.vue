<template>
    <div class="nav">
       
        <router-link to="/HelloWorld">formulaire de contact</router-link>
        <router-link to="/ArticleForm">Depot d'article</router-link>
        <router-link to="/CardList">Articles</router-link>
        
    </div>
</template>
<script>
export default{
   name:'AppHeader'
}
</script>
<style>
.nav{
    background-color: skyblue;
    overflow: hidden;
}
.nav a{
    float:left;
    color: #f2f2f2;
    padding: 16px 14px;
    text-align: center;
    font-size: 17px;
    text-decoration: none;
    margin-right: 5px;

}
.nav a:hover{
    background: #ddd;
    color: #333;
    
}
</style>