<template>
  <footer class="footer">
    <p>&copy; 2024 Zone01/Alexandre BAUDRY. Tous droits réservés.</p>
  </footer>
</template>

<style scoped>
  .footer {
    background: #333;
    color: #C8AD7F;
    text-align: center;
    margin-top: auto;
  }

  /* Pour les petits appareils (téléphones) */
  @media (max-width: 600px) {
    .footer {
      display: flex;
      padding: 0.9em;
      background: #333;
      color: #C8AD7F;
      text-align: center;
      justify-content: center;
      align-items: center;
      flex-direction: row;
      flex-wrap: nowrap;
    }

    p {
      font-size: 1rem;
    }
  }

  /* Pour les tablettes */
  @media (min-width: 601px) and (max-width: 992px) {
    .footer {
      display: flex;
      padding: 0.69em;
      background: #333;
      color: #C8AD7F;
      text-align: center;
      justify-content: center;
      align-items: center;
      flex-direction: row;
      flex-wrap: nowrap;
    }

    p {
      font-size: 1.2rem;
    }
  }

  /* Pour les grands écrans */
  @media (min-width: 993px) and (max-width: 1024px) {
    .footer {
      padding: 0.56em;
      display: flex;
      background: #333;
      color: #C8AD7F;
      text-align: center;
      justify-content: center;
      align-items: center;
      flex-direction: row;
      flex-wrap: nowrap;
    }

    p {
      font-size: 1.3rem;
    }
  }

  @media (min-width: 1025px) {
    .footer {
      padding: 0em;
      display: flex;
      background: #333;
      color: #C8AD7F;
      text-align: center;
      justify-content: center;
      align-items: center;
      flex-direction: row;
      flex-wrap: nowrap;
    }

    p {
      font-size: 1.7rem;
    }
  }
</style>