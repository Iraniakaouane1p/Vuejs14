<template>
  <div class="form-contact-container">
    <div class="form-content">
     
      <div class="form-header centered"> 
        <h2>Nous contacter </h2>
        <!-- <p>Besoin d'aide ou d'informations supplémentaires ? Remplissez le formulaire ci-dessous et nous vous contacterons dans les plus brefs délais.</p> -->
      </div>
      <div class="header-content">
      
        <div class="logo-container">
          <img src="https://enlilia.com/wp-content/uploads/2023/02/enlilia-logo-final.png" alt="Logo" class="logo logo-animation">
        </div>
      
        <div class="form-container">
          <form @submit.prevent="submitForm" class="contact-form">
            <div class="form-group">
              <!-- <label for="name">Nom complet *</label> -->
              <input type="text" id="name" v-model="formData.name" placeholder="Votre nom complet" required>
            </div>
            <div class="form-group">
              <!-- <label for="email">Email *</label> -->
              <input type="email" id="email" v-model="formData.email" placeholder="Votre adresse email" required>
            </div>
            <div class="form-group">
              <!-- <label for="message">Message *</label> -->
              <textarea id="message" v-model="formData.message" rows="4" placeholder="Votre message" required></textarea>
            </div>
            <div class="form-group">
              <label for="file">Fichier (optionnel)</label>
              <input type="file" @change="handleFileChange" id="file" class="file-input" placeholder="Aucun fichier choisi">
            </div>
            <button type="submit" class="submit-btn">Envoyer</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        name: '',
        email: '',
        message: '',
        file: null
      }
    };
  },
  methods: {
    submitForm() {
    
      console.log('Formulaire soumis', this.formData);
      // Réinitialiser les données du formulaire après soumission
      this.formData.name = '';//Cette ligne réinitialise le champ name du formulaire en le définissant comme une chaîne vide, effaçant ainsi toute donnée saisie par l'utilisateur.
      this.formData.email = '';
      this.formData.message = '';
      this.formData.file = null;
    },
    handleFileChange(event) {
      // Mettre à jour le fichier sélectionné dans les données du formulaire
      this.formData.file = event.target.files[0];
    }
  }
};
</script>

<style scoped>
.form-contact-container {
  background-color: #f0f0f0;
  padding: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto; 
}

.form-content {
  background-color: #0f466c;
  border-radius: 10px;
  padding: 60px;
  max-width: 900px; 
  width: 100%;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
}


.header-content {
  display: flex;
  align-items: center;
}

.logo-container {
  flex: 1;
  display: flex;
  justify-content: center; 
  align-items: center; 
  height: 100%;
}

.logo {
  max-width: 200px; 
  height: auto; 
}

.logo-animation {
  animation: pulseLogo 2s ease-in-out infinite alternate;
}

@keyframes pulseLogo {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.1);
  }
}

.form-container {
  flex: 2.5;
  margin-right: 20px; 
}

.form-header {
  text-align: left;
  margin-bottom: 30px;
  font-family: Arial, sans-serif; 
  color: #fff;
}

.form-header h2 {
  font-family: Arial, sans-serif; 
}

.form-header p {
  font-family: Arial, sans-serif; 
}

.contact-form .form-group {
  margin-bottom: 20px;
}

.contact-form label {
  display: block;
  margin-bottom: 5px;
  color: #fff;
}

.contact-form input[type="text"],
.contact-form input[type="email"],
.contact-form textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-family: Arial, sans-serif;
}

.contact-form textarea {
  resize: vertical;
}

.contact-form .file-input {
  display: block;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: calc(100% - 22px);
  color: #fff; 
}

.submit-btn {
  background-color: #57c8f3;
  color: #fff;
  border: none;
  padding: 12px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-family: Arial, sans-serif;
  font-size: 16px;
  transition: background-color 0.3s;
}

.submit-btn:hover {
  background-color: #57c8f3;
}


.centered {
  text-align: center;
}


</style>
