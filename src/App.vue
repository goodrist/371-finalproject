<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

import HomePage from './views/HomePage.vue'
import MensPage from './views/MensPage.vue'
import WomensPage from './views/WomensPage.vue'
import FamilyPage from './views/FamilyPage.vue'
import AccessoriesPage from './views/AccessoriesPage.vue'
import AlumniPage from './views/AlumniPage.vue'
import CartPage from './views/CartPage.vue'

type PageKey =
  | 'home'
  | 'mens'
  | 'womens'
  | 'family'
  | 'accessories'
  | 'alumni'
  | 'cart'

const currentPage = ref<PageKey>('home')
const isScrolled = ref(false)

const pageMap: Record<PageKey, any> = {
  home: HomePage,
  mens: MensPage,
  womens: WomensPage,
  family: FamilyPage,
  accessories: AccessoriesPage,
  alumni: AlumniPage,
  cart: CartPage,
}

const currentPageComponent = computed(() => pageMap[currentPage.value])

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const navigateTo = (page: PageKey) => {
  currentPage.value = page
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const goToCart = () => {
  navigateTo('cart')
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <!-- Header -->
  <header class="navbar" :class="{ scrolled: isScrolled }">
    <div class="top-bar">
      <div class="right-icons">
        <a href="#" class="signin">Sign In</a>
        <a href="#" class="cart" @click.prevent="goToCart">
          <img src="/images/cart-icon.png" alt="Shopping Cart" />
        </a>
      </div>
    </div>

    <div class="logo-container">
      <img
        src="/images/lakerstore-logo.png"
        alt="GVSU LakerStore Logo"
        class="logo-img"
      />
    </div>

    <nav class="nav-menu">
      <ul>
        <li><a href="#" @click.prevent="navigateTo('home')">Home</a></li>
        <li><a href="#" @click.prevent="navigateTo('mens')">Men’s</a></li>
        <li><a href="#" @click.prevent="navigateTo('womens')">Women’s</a></li>
        <li><a href="#" @click.prevent="navigateTo('family')">Family</a></li>
        <li>
          <a href="#" @click.prevent="navigateTo('accessories')">Accessories</a>
        </li>
        <li><a href="#" @click.prevent="navigateTo('alumni')">Alumni</a></li>
      </ul>
    </nav>
  </header>

  <!-- Page content -->
  <main>
    <component :is="currentPageComponent" />
  </main>

  <!-- Footer -->
  <footer class="footer">
    <div class="footer-inner">
      <!-- Left: brand -->
      <div class="footer-block">
        <img
          src="/images/lakerstore-logo.png"
          alt="GVSU Laker Store"
          class="footer-logo"
        />
        <p class="footer-text">
          GVSU Laker Store is owned and operated by Grand Valley State University.
        </p>
        <p class="footer-subtext">
          Your source for official Laker gear, spirit wear, and campus essentials.
        </p>
      </div>

      <!-- Middle: contact -->
      <div class="footer-block">
        <h4>Contact</h4>
        <p class="footer-line">1-(616)-331-2450</p>
        <p class="footer-line">
          <a href="mailto:lakerstore@gvsu.edu">lakerstore@gvsu.edu</a>
        </p>
        <p class="footer-line">
          The Marketplace<br />
          10801 N Campus Dr<br />
          Allendale Charter Twp, MI 49401
        </p>
      </div>

      <!-- Right: connect -->
      <div class="footer-block">
        <h4>Connect</h4>
        <button class="email-btn">Email Us</button>
        <div class="social-row">
          <a href="#" aria-label="GVSU Twitter">Twitter</a>
          <a href="#" aria-label="GVSU Facebook">Facebook</a>
          <a href="#" aria-label="GVSU Instagram">Instagram</a>
          <a href="#" aria-label="GVSU TikTok">TikTok</a>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <p>© 2025 GVSU LakerStore | Grand Valley State University</p>
    </div>
  </footer>
</template>
