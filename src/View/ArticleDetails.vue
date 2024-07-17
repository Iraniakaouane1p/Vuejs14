<template>
  <div>
    <header :class="{ 'fixed-header': isFixedHeader }">
      <div class="header-banner"></div>
      <h1 class="article-title">{{ selectedArticle && selectedArticle.title }}</h1>
    </header>
    
    <section class="content">
      <article>
        <p v-if="selectedArticle">{{ selectedArticle.content }}</p>
        <img v-if="selectedArticle && selectedArticle.imageSrc" :src="selectedArticle.imageSrc" alt="Image de l'article">

        <p>Wolf vinyl hella, jean shorts disrupt skateboard master cleanse hashtag iPhone. Pop-up bicycle rights Brooklyn iPhone Helvetica kitsch Godard, XOXO blog aesthetic beard quinoa. Fixie kale chips PBR&B twee, YOLO raw denim before they sold out photo booth bespoke seitan food truck. Ethical chia before they sold out, trust fund viral ennui you probably haven't heard of them cred bitters mixtape semiotics deep v jean shorts pork belly occupy shabby chic sriracha ethnic normcore bicycle rights single-origin coffee slow-carb jean shorts. Twee ethnic mumblecore, Carles banh mi slow-carb pour-over organic. Ethical tofu narwhal, hoodie viral ennui tousled paleo. Butcher chia cray iPhone keytar, sustainable Cosby sweater literally try-hard put a bird on it photo booth ethical street art literally semiotics.</p>
        <p><img src="http://placehold.it/660x150"></p>
        <p>Twee 8-bit Blue Bottle, wolf tattooed distillery retro dreamcatcher put a bird on it letterpress asymmetrical actually Austin crucifix cred. Selfies ethical butcher vegan, umami bitters literally wolf seitan +1 Intelligentsia Pitchfork. Godard mixtape pork belly Pitchfork, fap food truck wolf banh mi post-ironic. Narwhal letterpress Etsy direct trade irony pour-over. Cosby sweater literally Vice DIY butcher selvage shabby chic, XOXO hashtag letterpress single-origin coffee. Artisan Portland disrupt swag small batch chambray, Neutra bespoke Wes Anderson tofu VHS ennui. Cosby sweater letterpress 90's shabby chic cornhole, literally YOLO sartorial bitters Blue Bottle cardigan chambray asymmetrical.</p>
        <p>Twee 8-bit Blue Bottle, wolf tattooed distillery retro dreamcatcher put a bird on it letterpress asymmetrical actually Austin crucifix cred. Selfies ethical butcher vegan, umami bitters literally wolf seitan +1 Intelligentsia Pitchfork. Godard mixtape pork belly Pitchfork, fap food truck wolf banh mi post-ironic. Narwhal letterpress Etsy direct trade irony pour-over. Cosby sweater literally Vice DIY butcher selvage shabby chic, XOXO hashtag letterpress single-origin coffee. Artisan Portland disrupt swag small batch chambray, Neutra bespoke Wes Anderson tofu VHS ennui. Cosby sweater letterpress 90's shabby chic cornhole, literally YOLO sartorial bitters Blue Bottle cardigan chambray asymmetrical.</p>
      </article>
        
      <aside>
        <img src="http://placehold.it/144x150">
        <img src="http://placehold.it/144x150">
      </aside>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isFixedHeader: false,
      selectedArticle: {
        title: "Titre de l'article",
        content: "Contenu de l'article",
        imageSrc: "https://example.com/image.jpg"
      }
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  unmounted() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      if (window.scrollY >= 300) {
        this.isFixedHeader = true;
      } else {
        this.isFixedHeader = false;
      }
    }
  }
};
</script>
<style scoped>
body { 
  margin: 0; 
  padding: 0; 
}

header {
  z-index: 10;
}

.header-banner {
  background-image: url('https://as1.ftcdn.net/v2/jpg/03/04/68/52/1000_F_304685223_ttVGVAkC5JlfgEOTO8KYbN4tjnRqM715.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 300px;
}

.article-title {
  background-color: rgba(18, 72, 120, 0.8);
  color: #fff;
  padding: 0 1rem;
  font-size: 2.5rem;
  text-align: center;
  margin: 0;
  position: relative;
  top: -5px;
}

.fixed-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}

nav {
  width: 100%;
  height: 60px;
  background: #292f36;
  position: fixed;
  z-index: 10;
}

nav div {
  color: white;
  font-size: 2rem;
  line-height: 60px;
  position: absolute;
  top: 0;
  left: 2%;
  visibility: hidden;
}
.visible-title {
  visibility: visible;
}

nav ul { 
  list-style-type: none;
  margin: 0 2% auto 0;
  padding-left: 0;
  text-align: right;
  max-width: 100%;
}
nav ul li { 
  display: inline-block; 
  line-height: 60px;
  margin-left: 10px;
}
nav ul li a {
  text-decoration: none; 
  color: #a9abae;
}

.content { 
  margin: 0 auto;
  padding: 4rem 0;
  width: 960px;
  max-width: 100%;
}
article {
  float: left;
  width: 720px;
}
article p:first-of-type {
  margin-top: 0;
}
aside {
  float: right;
  width: 120px;
}
p img {
  max-width: 100%;
}

@media only screen and (max-width: 960px) {
  .content { 
    padding: 2rem 0;
  }
  article {
    float: none;
    margin: 0 auto;
    width: 96%;
  }
  article:last-of-type {  
    margin-bottom: 3rem;
  }
  aside {  
    float: none;
    text-align: center;
    width: 100%;
  }
}
</style>

