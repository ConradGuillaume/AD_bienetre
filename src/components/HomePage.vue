<template>
  <div class="Home">
    <header>
      <h1>AD BIEN-ETRE</h1>
      <div class="imgcontain">
        <img class="logo" src="../Style/img/AD_sansnom.png" alt="Logo" />
      </div>
    </header>
    <main>
      <div class="select-container">
        <div class="line"></div>
        <router-link class="select" to="/pageTwo">Massage</router-link>
      </div>
      <div class="select-container">
        <div class="line"></div>
        <router-link class="select" to="/pageTwo"
          >Soins énergétiques</router-link
        >
      </div>
      <div class="select-container">
        <div class="line"></div>
        <router-link class="select" to="/pageFour">épilations</router-link>
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
