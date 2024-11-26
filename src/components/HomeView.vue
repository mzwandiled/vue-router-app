<script setup>
import cars from "../data/cars.json"
import {RouterLink} from "vue-router"
</script>

<template>
<div>
  <h1>HomeView </h1>
  <div class="container">
    <!-- Car 1 -->
    <div class="car-card" v-for="car in cars" :key="car.Name">
      <img :src="car.img" alt="Car 1" class="car-img">
      <div class="car-info">
        <h3><RouterLink :to="`/cars/${car.id}`">{{car.Name}}</RouterLink></h3>
        <p>Price: $25,000</p>
        <p>Description: A sleek and stylish sedan with great performance.</p>
      </div>
    </div>
  </div>
</div>
</template>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 20px;
}

.car-card {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: calc(33.33% - 20px); /* 3 items per row with some space */
  margin: 10px;
  transition: transform 0.3s ease;
}

.car-card:hover {
  transform: scale(1.05);
}

.car-img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.car-info {
  padding: 15px;
}

.car-info h3 {
  margin: 0;
  font-size: 1.5em;
  color: #333;
}

.car-info p {
  color: #666;
  font-size: 1em;
}

@media (max-width: 768px) {
  .car-card {
    width: calc(50% - 20px); /* 2 items per row on medium screens */
  }
}

@media (max-width: 480px) {
  .car-card {
    width: 100%; /* 1 item per row on smaller screens */
  }
}
</style>