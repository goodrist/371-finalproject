<template>
  <section class="hero">
    <div class="hero-text">
      <h1>Laker Family Collection</h1>
      <p>Matching outfits and spirit wear for the whole family.</p>
      <a href="#" class="shop-btn" @click.prevent="onShopClick">Shop Family</a>
    </div>
  </section>

  <section class="featured">
    <h2>Family Favorites</h2>
    <div class="product-grid">
      <div class="product-card">
        <div
          style="width: 100%; height: 260px; background-color: #e0f2fe; border-radius: 10px;"
        ></div>
        <p class="product-name">Family Hoodie Set</p>
      </div>
      <div class="product-card">
        <div
          style="width: 100%; height: 260px; background-color: #e0f2fe; border-radius: 10px;"
        ></div>
        <p class="product-name">Youth Laker Crew</p>
      </div>
      <div class="product-card">
        <div
          style="width: 100%; height: 260px; background-color: #e0f2fe; border-radius: 10px;"
        ></div>
        <p class="product-name">Toddler GV Tee</p>
      </div>

      <div class="product-card">
        <div
          style="width: 100%; height: 260px; background-color: #e0f2fe; border-radius: 10px;"
        ></div>
        <p class="product-name">GV Onesie</p>
      </div>
      <div class="product-card">
        <div
          style="width: 100%; height: 260px; background-color: #e0f2fe; border-radius: 10px;"
        ></div>
        <p class="product-name">Laker Family Beanies</p>
      </div>
      <div class="product-card">
        <div
          style="width: 100%; height: 260px; background-color: #e0f2fe; border-radius: 10px;"
        ></div>
        <p class="product-name">Family Photo Crew</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const onShopClick = () => {
  alert('Family collection coming soon!')
}
</script>
