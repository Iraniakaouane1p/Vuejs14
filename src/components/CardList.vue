<template>
  <div>
    <div v-if="cards.length" class="slide-container swiper">
      <div class="swiper-wrapper">
        <div v-for="(card, index) in cards" :key="index" class="card swiper-slide">
          <div class="image-content">
            <span class="overlay"></span>
            <div class="card-image">
              <img :src="card.imageSrc" :alt="card.imageAlt" class="card-img">
            </div>
          </div>
          <div class="card-content">
            <h2 class="name">{{ card.title }}</h2>
            <p class="description">{{ card.description }}</p>
            <router-link :to="{ name: 'ArticleDetails', params: { id: index }}" class="button">View More</router-link>
          </div>
        </div>
      </div>
      <div class="swiper-button-next swiper-navBtn" @click="nextSlide"></div>
      <div class="swiper-button-prev swiper-navBtn" @click="prevSlide"></div>
      <div class="swiper-pagination"></div>
    </div>
    <ArticleForm @article-submitted="addArticle"></ArticleForm>
  </div>
</template>

<script>
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import ArticleForm from './ArticleForm.vue';

export default {
  components: { ArticleForm },
  data() {
    return {
      swiperInstance: null,
      cards: [
        {
          title: "Titre d'article",
          description: "The lorem text the section that contains header with having open functionality. Lorem dolor sit amet consectetur adipisicing elit.",
          imageSrc: "https://enlilia.com/wp-content/uploads/2023/02/enlilia-logo-final.png",
          imageAlt: "Profile 1"
        },
        {
          title: "Titre d'article",
          description: "The lorem text the section that contains header with having open functionality. Lorem dolor sit amet consectetur adipisicing elit.",
          imageSrc: "https://enlilia.com/wp-content/uploads/2023/02/enlilia-logo-final.png",
          imageAlt: "Profile 2"
        },
        {
          title: "Titre d'article",
          description: "The lorem text the section that contains header with having open functionality. Lorem dolor sit amet consectetur adipisicing elit.",
          imageSrc: "https://enlilia.com/wp-content/uploads/2023/02/enlilia-logo-final.png",
          imageAlt: "Profile 3"
        },
        {
          title: "Titre d'article",
          description: "The lorem text the section that contains header with having open functionality. Lorem dolor sit amet consectetur adipisicing elit.",
          imageSrc: "https://enlilia.com/wp-content/uploads/2023/02/enlilia-logo-final.png",
          imageAlt: "Profile 3"
        }
        // Autres cartes initiales
      ]
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.swiperInstance = new Swiper(".slide-container", {
        slidesPerView: 3,
        spaceBetween: 25,
        loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          dynamicBullets: true,
        },
        breakpoints: {
          0: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          520: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          950: {
            slidesPerView: 3,
            spaceBetween: 25,
          },
        },
      });
    });
  },
  methods: {
    addArticle(article) {
      const newCard = {
        title: article.title,
        description: article.content,
        imageSrc: article.image ? URL.createObjectURL(article.image) : 'default-image-url',
        imageAlt: article.title
      };
      this.cards.push(newCard);
    },
    nextSlide() {
      if (this.swiperInstance) {
        this.swiperInstance.slideNext();
      }
    },
    prevSlide() {
      if (this.swiperInstance) {
        this.swiperInstance.slidePrev();
      }
    }
  }
};
</script>

<style scoped>
.slide-container {
  max-width: 1120px;
  width: 100%;
  padding: 40px 0;
}

.card {
  border-radius: 25px;
  background-color: #FFF;
  width: 300px; /* Taille fixe */
  height: 450px; /* Taille fixe */
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 25px; /* Ajustez si nécessaire */
}

.image-content,
.card-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.image-content {
  position: relative;
  padding: 25px 0;
}

.overlay {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  background-color: #4070F4;
  border-radius: 25px 25px 0 0;
}

.overlay::before,
.overlay::after {
  content: '';
  position: absolute;
  right: 0;
  bottom: -40px;
  height: 40px;
  width: 40px;
  background-color: #4070F4;
}

.overlay::after {
  border-radius: 0 25px 0 0;
  background-color: #FFF;
}

.card-image {
  position: relative;
  height: 150px;
  width: 150px;
  border-radius: 50%;
  background: #FFF;
  padding: 3px;
}

.card-image .card-img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 50%;
  border: 4px solid #4070F4;
}

.name {
  font-size: 18px;
  font-weight: 500;
  color: #333;
  margin-top: 10px;
}

.description {
  font-size: 14px;
  color: #707070;
  text-align: center;
  margin: 10px 0;
  overflow: hidden; /* Empêche le débordement du texte */
  text-overflow: ellipsis; /* Ajoute des points de suspension (...) pour le texte qui dépasse */
  white-space: nowrap; /* Empêche le texte de passer à la ligne */
}

.button {
  border: none;
  font-size: 16px;
  color: #FFF;
  padding: 8px 16px;
  background-color: #4070F4;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-bottom: 10px;
}

.button:hover {
  background: #265DF2;
}

.swiper-navBtn {
  color: #6E93f7;
  transition: color 0.3s ease;
}

.swiper-navBtn:hover {
  color: #4070F4;
}

.swiper-navBtn::before,
.swiper-navBtn::after {
  font-size: 35px;
}

.swiper-button-next {
  right: 0;
}

.swiper-button-prev {
  left: 0;
}

.swiper-pagination-bullet {
  background-color: #6E93f7;
  opacity: 1;
}

.swiper-pagination-bullet-active {
  background-color: #4070F4;
}

@media screen and (max-width: 768px) {
  .slide-container {
    margin: 0 10px;
  }

  .swiper-navBtn {
    display: none;
  }
}

.swiper {
  position: relative;
  overflow: hidden;
}

.swiper-wrapper {
  transition-property: transform;
  box-sizing: content-box;
}

.swiper-slide {
  float: left;
  box-sizing: border-box;
}
</style>