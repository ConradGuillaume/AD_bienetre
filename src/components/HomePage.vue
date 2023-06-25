<template>
  <div class="Home">
    <header>
      <h1>AD BIEN-ETRE</h1>
      <img class="logo" src="../Style/img/AD_sansnom.png" alt="Logo" />
    </header>
    <main>
      <div class="select-container">
        <div class="line"></div>
        <router-link class="select" to="/pageTwo">Massage</router-link>
      </div>
      <div class="select-container">
        <div class="line"></div>
        <router-link class="select" to="/pageTwo"
          >Soins Energétiques</router-link
        >
      </div>
      <div class="select-container">
        <div class="line"></div>
        <router-link class="select" to="/pageFour">Epilation</router-link>
      </div>
      <div class="select-container">
        <div class="line"></div>
        <router-link class="select" to="/pageFive">Maquillage</router-link>
      </div>
    </main>
    <footer>
      <button class="Call"></button>
      <button class="FB"></button>
      <button class="INSTA"></button>
      <button class="WHATS"></button>
    </footer>
  </div>
</template>

<style lang="scss" scoped src="./HomePage.scss"></style>
