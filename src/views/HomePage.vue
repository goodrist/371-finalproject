<template>
  <!-- Hero Banner -->
  <section class="hero">
    <div class="hero-text">
      <h1>Laker Pride Meets Everyday Style</h1>
      <p>Shop the new GVSU Athleisure Collection</p>
      <a href="#" class="shop-btn" @click.prevent="onShopClick">Shop Now</a>
    </div>
  </section>

  <!-- Featured Products -->
  <section class="featured">
    <h2>Featured Looks</h2>
    <div class="product-grid">
      <!-- Top row -->
      <div class="product-card">
        <div
          style="
            width: 100%;
            height: 260px;
            background-color: #e5e7eb;
            border-radius: 10px;
          "
        ></div>
        <p class="product-name">Pennant Crew</p>
      </div>

      <div class="product-card">
        <div
          style="
            width: 100%;
            height: 260px;
            background-color: #e5e7eb;
            border-radius: 10px;
          "
        ></div>
        <p class="product-name">Phoenix Fleece Crew</p>
      </div>

      <div class="product-card">
        <div
          style="
            width: 100%;
            height: 260px;
            background-color: #e5e7eb;
            border-radius: 10px;
          "
        ></div>
        <p class="product-name">Powerblend Sparkle Crew</p>
      </div>

      <!-- Middle row -->
      <div class="product-card">
        <div
          style="
            width: 100%;
            height: 260px;
            background-color: #e5e7eb;
            border-radius: 10px;
          "
        ></div>
        <p class="product-name">Club Fleece Hoodie</p>
      </div>

      <div class="product-card">
        <div
          style="
            width: 100%;
            height: 260px;
            background-color: #e5e7eb;
            border-radius: 10px;
          "
        ></div>
        <p class="product-name">Heavyweight Hoodie</p>
      </div>

      <div class="product-card">
        <div
          style="
            width: 100%;
            height: 260px;
            background-color: #e5e7eb;
            border-radius: 10px;
          "
        ></div>
        <p class="product-name">Jersey Long Sleeve Tee</p>
      </div>

      <!-- Bottom row -->
      <div class="product-card">
        <div
          style="
            width: 100%;
            height: 260px;
            background-color: #e5e7eb;
            border-radius: 10px;
          "
        ></div>
        <p class="product-name">Rise Swoosh Flex Hat</p>
      </div>

      <div class="product-card">
        <div
          style="
            width: 100%;
            height: 260px;
            background-color: #e5e7eb;
            border-radius: 10px;
          "
        ></div>
        <p class="product-name">GVSU Beanie</p>
      </div>

      <div class="product-card">
        <div
          style="
            width: 100%;
            height: 260px;
            background-color: #e5e7eb;
            border-radius: 10px;
          "
        ></div>
        <p class="product-name">JV St. Johnsbury Tote Bag</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const onShopClick = () => {
  alert('Collection page coming soon!')
}
</script>
