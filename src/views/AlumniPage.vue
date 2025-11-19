<template>
  <section class="hero">
    <div class="hero-text">
      <h1>Alumni Collection</h1>
      <p>Classic pieces to celebrate life after GVSU.</p>
      <a href="#" class="shop-btn" @click.prevent="onShopClick">Shop Alumni</a>
    </div>
  </section>

  <section class="featured">
    <h2>Alumni Favorites</h2>
    <div class="product-grid">
      <div class="product-card">
        <div
          style="width: 100%; height: 260px; background-color: #fee2e2; border-radius: 10px;"
        ></div>
        <p class="product-name">Alumni Pennant Crew</p>
      </div>
      <div class="product-card">
        <div
          style="width: 100%; height: 260px; background-color: #fee2e2; border-radius: 10px;"
        ></div>
        <p class="product-name">Alumni Hoodie</p>
      </div>
      <div class="product-card">
        <div
          style="width: 100%; height: 260px; background-color: #fee2e2; border-radius: 10px;"
        ></div>
        <p class="product-name">Alumni Polo</p>
      </div>

      <div class="product-card">
        <div
          style="width: 100%; height: 260px; background-color: #fee2e2; border-radius: 10px;"
        ></div>
        <p class="product-name">Alumni Mug</p>
      </div>
      <div class="product-card">
        <div
          style="width: 100%; height: 260px; background-color: #fee2e2; border-radius: 10px;"
        ></div>
        <p class="product-name">Alumni Scarf</p>
      </div>
      <div class="product-card">
        <div
          style="width: 100%; height: 260px; background-color: #fee2e2; border-radius: 10px;"
        ></div>
        <p class="product-name">Graduation Frame</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const onShopClick = () => {
  alert('Alumni collection coming soon!')
}
</script>
