<template>
  <header class="header">
    <nav>
      <router-link to="/">Accueil</router-link>
      <router-link to="/about">À Propos</router-link>
      <router-link to="/skill">Compétences</router-link>
      <router-link to="/projects">Projets</router-link>
      <router-link to="/contact">Contact</router-link>
    </nav>
  </header>
</template>

<style scoped>
  .header {
    padding: 1em;
    background: #333;
    color: white;
  }

  nav {
    display: flex;
    justify-content: center;
    gap: 1em;
  }

  a {
    color: #C8AD7F;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  /* Pour les petits appareils (téléphones) */
  @media (max-width: 600px) {
    .header {
      display: flex;
      padding: 1em;
      background: #333;
      color: #C8AD7F;
      text-align: center;
      justify-content: center;
      align-items: center;
      flex-direction: row;
      flex-wrap: nowrap;
    }

    a {
      font-size: 1.1rem;
    }
  }

  /* Pour les tablettes */
  @media (min-width: 601px) and (max-width: 992px) {
    .header {
      padding: 1em;
      display: flex;
      background: #333;
      color: #C8AD7F;
      text-align: center;
      justify-content: center;
      align-items: center;
      flex-direction: row;
      flex-wrap: nowrap;
    }

    a {
      font-size: 1.3rem;
    }
  }

  /* Pour les grands écrans */
  @media (min-width: 993px) and (max-width: 1024px) {
    .header {
      display: flex;
      background: #333;
      color: #C8AD7F;
      text-align: center;
      justify-content: center;
      align-items: center;
      flex-direction: row;
      flex-wrap: nowrap;
    }

    a {
      font-size: 1.4rem;
    }
  }

  @media (min-width: 1025px) {
    .header {
      display: flex;
      background: #333;
      color: #C8AD7F;
      text-align: center;
      justify-content: center;
      align-items: center;
      flex-direction: row;
      flex-wrap: nowrap;
    }

    a {
      font-size: 2rem;
    }
  }
</style>