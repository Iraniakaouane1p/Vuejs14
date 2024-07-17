<template>
    <a href="#" class="card-item" :class="cardClass">
      <img :src="imageSrc" :alt="imageAlt">
      <span :class="labelClass">{{ label }}</span>
      <h3>{{ title }}</h3>
      <div class="arrow">
        <i class="fas fa-arrow-right card-icon"></i>
      </div>
    </a>
  </template>
  
  <script>
  export default {
    props: {
      title: String,
      imageSrc: String,
      imageAlt: String,
      label: String,
      cardClass: String,
      labelClass: String
    }
  };
  </script>
  
  <style scoped>
  .card-item {
    background: #fff;
    padding: 26px;
    border-radius: 8px;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.04);
    list-style: none;
    cursor: pointer;
    text-decoration: none;
    border: 2px solid transparent;
    transition: border 0.5s ease;
  }
  
  .card-item:hover {
    border: 2px solid #000;
  }
  
  .card-item img {
    width: 100%;
    aspect-ratio: 16/9;
    border-radius: 8px;
    object-fit: cover;
  }
  
  span {
    display: inline-block;
    padding: 8px 15px;
    font-size: 0.75rem;
    border-radius: 50px;
    font-weight: 600;
  }
  
  .developer {
    background-color: #F7DFF5;
    color: #2968a8;
  }
  
  .designer {
    background-color: #d1e8ff;
    color: #2968a8;
  }
  
  .editor {
    background-color: #d6f8d6;
    color: #2968a8;
  }
  
  h3 {
    color: #000;
    font-size: 1.438rem;
    margin-top: 28px;
    font-weight: 600;
  }
  
  .arrow {
    display: flex;
    align-items: center;
    justify-content: center;
    transform: rotate(-35deg);
    height: 40px;
    width: 40px;
    color: #000;
    border: 1px solid #000;
    border-radius: 50%;
    margin-top: 40px;
    transition: 0.2s ease;
  }
  
  .card-item:hover .arrow {
    background: #000;
    color: #fff;
  }
  </style>
  