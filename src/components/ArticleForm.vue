<template>
  <div class="article-submission-form">
    <div class="form-content">
      <h2>Déposer un Article</h2>
      <form @submit.prevent="submitArticle">
        <div class="form-group">
          <label for="title">Titre de l'Article</label>
          <input type="text" id="title" v-model="article.title" required placeholder="Entrez le titre de l'article">
        </div>
        <div class="form-group">
          <label for="author">Auteur</label>
          <input type="text" id="author" v-model="article.author" required placeholder="Votre nom">
        </div>
        <div class="form-group">
          <label for="content">Contenu de l'Article</label>
          <textarea id="content" v-model="article.content" rows="6" required placeholder="Entrez le contenu de l'article"></textarea>
        </div>
        <div class="form-group">
          <label for="image">Image de l'article</label>
          <input type="file" id="image" accept="image/*" @change="handleImageUpload">
          <img v-if="article.image" :src="imagePreview" alt="Aperçu de l'image" class="image-preview">
        </div>
        <div class="form-group">
          <label for="category">Catégorie de l'Article</label>
          <select id="category" v-model="article.category" required>
            <option disabled value="">Sélectionnez une catégorie</option>
            <option value="Actualités">Actualités</option>
            <option value="Technologie">Technologie</option>
            <option value="Mode">Mode</option>
          </select>
        </div>
        <button type="submit">Soumettre</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      article: {
        title: '',
        author: '',
        content: '',
        category: '',
        image: null
      }
    };
  },
  computed: {
    imagePreview() {
      return this.article.image ? URL.createObjectURL(this.article.image) : null;
    }
  },
  methods: {
    submitArticle() {
      const newArticle = { ...this.article };
      this.$emit('article-submitted', newArticle);
      this.article.title = '';
      this.article.author = '';
      this.article.content = '';
      this.article.category = '';
      this.article.image = null;
    },
    handleImageUpload(event) {
      const file = event.target.files[0];
      if (file) {
        this.article.image = file;
      }
    }
  }
};
</script>
<style scoped>

* {
  font-family: 'Arial', sans-serif;
}

.article-submission-form {
  background-image: url("https://enlilia.com/wp-content/uploads/2023/02/banner01.webp");
  background-size: cover;
  background-position: center;
  padding: 50px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.form-content {
  max-width: 500px;
  width: 100%;
  padding: 40px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
}

h2 {
  text-align: center;
  margin-bottom: 20px;
  color: #333;
}

.form-group {
  margin-bottom: 25px;
}

label {
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
  color: #444;
}

input[type="text"],
textarea,
select,
input[type="file"] {
  width: calc(100% - 20px); 
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 16px;
  margin-left: 10px; 
  margin-right: 10px;
}

input[type="text"]::placeholder,
textarea::placeholder {
  color: #999;
}

select {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position-x: 95%;
  background-position-y: 50%;
  padding-right: 25px;
}

.button-container {
  text-align: center;
}

button[type="submit"] {
  background-color: #57c8f3;
  color: #fff;
  border: none;
  padding: 15px 30px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 18px;
  display: inline-block;
  transition: background-color 0.3s ease;
}

button[type="submit"]:hover {
  background-color: #45a9d1;
}

.image-preview {
  max-width: 100%;
  height: auto;
  margin-top: 10px;
}

@media (max-width: 600px) {
  .form-content {
    padding: 20px;
  }

  input[type="text"],
  textarea,
  select,
  input[type="file"] {
    padding: 10px;
  }

  button[type="submit"] {
    padding: 12px 24px;
    font-size: 16px;
  }
}
</style>
