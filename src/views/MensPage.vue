<template>
  <section class="hero">
    <div class="hero-text">
      <h1>Men’s Laker Gear</h1>
      <p>Hoodies, crews, and caps for every game day.</p>
      <a href="#" class="shop-btn" @click.prevent="onShopClick">Shop Men’s</a>
    </div>
  </section>

  <section class="featured">
    <h2>Men’s Featured Styles</h2>
    <div class="product-grid">
      <div class="product-card">
        <div
          style="width: 100%; height: 260px; background-color: #e5e7eb; border-radius: 10px;"
        ></div>
        <p class="product-name">GV Classic Hoodie</p>
      </div>
      <div class="product-card">
        <div
          style="width: 100%; height: 260px; background-color: #e5e7eb; border-radius: 10px;"
        ></div>
        <p class="product-name">Heavyweight Crewneck</p>
      </div>
      <div class="product-card">
        <div
          style="width: 100%; height: 260px; background-color: #e5e7eb; border-radius: 10px;"
        ></div>
        <p class="product-name">Stadium Windbreaker</p>
      </div>

      <div class="product-card">
        <div
          style="width: 100%; height: 260px; background-color: #e5e7eb; border-radius: 10px;"
        ></div>
        <p class="product-name">Game Day Joggers</p>
      </div>
      <div class="product-card">
        <div
          style="width: 100%; height: 260px; background-color: #e5e7eb; border-radius: 10px;"
        ></div>
        <p class="product-name">GV Quarter-Zip</p>
      </div>
      <div class="product-card">
        <div
          style="width: 100%; height: 260px; background-color: #e5e7eb; border-radius: 10px;"
        ></div>
        <p class="product-name">Everyday Tee</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const onShopClick = () => {
  alert('Men’s collection coming soon!')
}
</script>
