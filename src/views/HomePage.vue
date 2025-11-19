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
        <img src="/images/pennantcrew.jpg" alt="Pennant Crew" />
        <p class="product-name">Pennant Crew</p>
      </div>
      <div class="product-card">
        <img src="/images/phoenixfleececrew.jpg" alt="Phoenix Fleece Crew" />
        <p class="product-name">Phoenix Fleece Crew</p>
      </div>
      <div class="product-card">
        <img src="/images/powerblendsparklescrew.jpg" alt="Powerblend Sparkle Crew" />
        <p class="product-name">Powerblend Sparkle Crew</p>
      </div>

      <!-- Middle row -->
      <div class="product-card">
        <img src="/images/clubfleecehood.jpg" alt="Club Fleece Hoodie" />
        <p class="product-name">Club Fleece Hoodie</p>
      </div>
      <div class="product-card">
        <img src="/images/heavyweighthood.jpg" alt="Heavyweight Hoodie" />
        <p class="product-name">Heavyweight Hoodie</p>
      </div>
      <div class="product-card">
        <img src="/images/jerseylongsleevetee.jpg" alt="Jersey Long Sleeve Tee" />
        <p class="product-name">Jersey Long Sleeve Tee</p>
      </div>

      <!-- Bottom row -->
      <div class="product-card">
        <img src="/images/riseswooshflexhat.jpg" alt="Rise Swoosh Flex Hat" />
        <p class="product-name">Rise Swoosh Flex Hat</p>
      </div>
      <div class="product-card">
        <img src="/images/gvbeanie.jpg" alt="GVSU Beanie" />
        <p class="product-name">GVSU Beanie</p>
      </div>
      <div class="product-card">
        <img src="/images/jvstjohnsburytotebag.jpg" alt="JV St. Johnsbury Tote Bag" />
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
