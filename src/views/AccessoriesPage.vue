<template>
  <section class="hero">
    <div class="hero-text">
      <h1>Laker Accessories</h1>
      <p>Hats, bags, and cold-weather essentials.</p>
      <a href="#" class="shop-btn" @click.prevent="onShopClick">
        Shop Accessories
      </a>
    </div>
  </section>

  <section class="featured">
    <h2>Top Accessories</h2>
    <div class="product-grid">
      <div class="product-card">
        <div
          style="width: 100%; height: 260px; background-color: #fef9c3; border-radius: 10px;"
        ></div>
        <p class="product-name">Rise Swoosh Flex Hat</p>
      </div>
      <div class="product-card">
        <div
          style="width: 100%; height: 260px; background-color: #fef9c3; border-radius: 10px;"
        ></div>
        <p class="product-name">GVSU Knit Beanie</p>
      </div>
      <div class="product-card">
        <div
          style="width: 100%; height: 260px; background-color: #fef9c3; border-radius: 10px;"
        ></div>
        <p class="product-name">Canvas Tote Bag</p>
      </div>

      <div class="product-card">
        <div
          style="width: 100%; height: 260px; background-color: #fef9c3; border-radius: 10px;"
        ></div>
        <p class="product-name">Laker Scarf</p>
      </div>
      <div class="product-card">
        <div
          style="width: 100%; height: 260px; background-color: #fef9c3; border-radius: 10px;"
        ></div>
        <p class="product-name">GV Socks</p>
      </div>
      <div class="product-card">
        <div
          style="width: 100%; height: 260px; background-color: #fef9c3; border-radius: 10px;"
        ></div>
        <p class="product-name">Keychain & Lanyard Set</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const onShopClick = () => {
  alert('Accessories collection coming soon!')
}
</script>
