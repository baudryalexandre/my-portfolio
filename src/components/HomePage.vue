<template>
  <section class="home">
    <div class="overlay"></div>
    <div class="image-container">
      <img src="../assets/Alexandre-BAUDRY02.jpg" alt="Description de l'image" />
    </div>
    <div class="content">
      <h1>
        Bonjour, je suis 
        <span class="glitch" data-text="Alexandre Baudry">Alexandre Baudry</span>
      </h1>     
      <p>Passionné par le développement web, la cybersécurité et l'ia, j'aime explorer les nouvelles technologies et les
        utiliser pour créer des projets concret. Avec une expertise en PYTHON, GOLANG, JAVASCRIPT et RUST, je
        me consacre à créer des applications performantes et sécurisées.</p>
      <router-link to="/projects" class="btn">Voir mes projets</router-link>
    </div>
  </section>
</template>

<style scoped>

  .image-container {
    display: flex;
    width: 20%;
    border: thick double #32a1ce;
    z-index: 1;
    border-radius: 50%;
  }

  img {
    width: 100%;
    border-radius: 50%;
  }

  .home {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90.5vh;
    color: #E8DCCA;
    background-image: url(../assets/background_home.jpg);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    overflow: hidden;
    flex-direction: column;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    z-index: 1;
  }

  h1 {
  font-size: 3rem; /* Même taille pour tout le texte */
  font-weight: bold; /* Applique la même mise en forme que le glitch */
  color: #C8AD7F; /* Assure-toi que la couleur est cohérente */
  z-index: 2;
}

  /* Effet Glitch */
.glitch {
  position: relative;
  font-size: inherit; /* Inhérente à la taille de <h1> */
  font-weight: inherit; /* Hérite de la mise en forme de <h1> */
  animation: glitch-animation 2s infinite;
}


  .glitch::before,
  .glitch::after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 74%;
    background: transparent;
    overflow: hidden;
  }

  .glitch::before {
    left: -2px;
    text-shadow: 2px 0 red;
    clip: rect(0, 900px, 0, 0);
    animation: glitch-animation-before 1s infinite linear alternate-reverse;
  }

  .glitch::after {
    left: 2px;
    text-shadow: -2px 0 blue;
    clip: rect(0, 900px, 0, 0);
    animation: glitch-animation-after 1s infinite linear alternate-reverse;
  }

  @keyframes glitch-animation {

    0%,
    5% {
      transform: translate(0);
    }

    10% {
      transform: translate(-2px, -2px);
    }

    15% {
      transform: translate(-2px, 2px);
    }

    20% {
      transform: translate(2px, -2px);
    }

    25% {
      transform: translate(2px, 2px);
    }

    30% {
      transform: translate(0);
    }

    35% {
      transform: translate(2px, -2px);
    }

    40% {
      transform: translate(-2px, 2px);
    }

    45% {
      transform: translate(2px, 2px);
    }

    50% {
      transform: translate(-2px, -2px);
    }

    55% {
      transform: translate(0);
    }

    60%,
    100% {
      transform: translate(0);
    }
  }

  @keyframes glitch-animation-before {

    0%,
    5% {
      clip: rect(42px, 9999px, 44px, 0);
      transform: skew(0.3deg);
    }

    10% {
      clip: rect(15px, 9999px, 56px, 0);
      transform: skew(0.1deg);
    }

    15% {
      clip: rect(86px, 9999px, 30px, 0);
      transform: skew(0.1deg);
    }

    20% {
      clip: rect(70px, 9999px, 96px, 0);
      transform: skew(0.3deg);
    }

    25% {
      clip: rect(45px, 9999px, 76px, 0);
      transform: skew(0.5deg);
    }

    30% {
      clip: rect(56px, 9999px, 99px, 0);
      transform: skew(0.2deg);
    }

    35% {
      clip: rect(80px, 9999px, 92px, 0);
      transform: skew(0.4deg);
    }

    40% {
      clip: rect(24px, 9999px, 96px, 0);
      transform: skew(0.3deg);
    }

    45% {
      clip: rect(77px, 9999px, 96px, 0);
      transform: skew(0.2deg);
    }

    50% {
      clip: rect(33px, 9999px, 44px, 0);
      transform: skew(0.1deg);
    }

    55%,
    100% {
      clip: rect(42px, 9999px, 44px, 0);
      transform: skew(0.3deg);
    }
  }

  @keyframes glitch-animation-after {

    0%,
    5% {
      clip: rect(22px, 9999px, 20px, 0);
      transform: skew(0.3deg);
    }

    10% {
      clip: rect(37px, 9999px, 76px, 0);
      transform: skew(0.5deg);
    }

    15% {
      clip: rect(50px, 9999px, 36px, 0);
      transform: skew(0.1deg);
    }

    20% {
      clip: rect(12px, 9999px, 99px, 0);
      transform: skew(0.4deg);
    }

    25% {
      clip: rect(90px, 9999px, 60px, 0);
      transform: skew(0.3deg);
    }

    30% {
      clip: rect(72px, 9999px, 96px, 0);
      transform: skew(0.5deg);
    }

    35% {
      clip: rect(44px, 9999px, 22px, 0);
      transform: skew(0.2deg);
    }

    40% {
      clip: rect(30px, 9999px, 77px, 0);
      transform: skew(0.3deg);
    }

    45% {
      clip: rect(80px, 9999px, 88px, 0);
      transform: skew(0.1deg);
    }

    50% {
      clip: rect(56px, 9999px, 25px, 0);
      transform: skew(0.4deg);
    }

    55%,
    100% {
      clip: rect(22px, 9999px, 20px, 0);
      transform: skew(0.3deg);
    }
  }

  .content {
    display: flex;
    position: relative;
    text-align: center;
    z-index: 2;
    flex-direction: column;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: center;
    align-items: center;
  }

  p {
    font-size: 1.5rem;
    margin-top: 10px;
    margin: 20px 60px;
  }

  .btn {
    display: inline-block;
    padding: 10px 20px;
    background-color: #C8AD7F;
    color: #0e0e0e;
    text-decoration: none;
    border-radius: 4px;
    font-weight: bold;
    z-index: 2;
    transition: background-color 0.3s ease;
  }

  .btn:hover {
    background-color: #E8DCCA;
  }

  /* Media Queries */

  /* Pour les petits appareils (téléphones) */
  @media (max-width: 600px) {
    .home {
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    }

    .image-container {
      width: 20%;
      margin-bottom: 15px;
      background-color: blue;
      z-index: 3;
    }

    .glitch {
      font-size: 2rem;
      text-align: center;
      margin-top: auto;
    }

    p {
      font-size: 1rem;
      padding: 1em;
      text-align: center;
      margin-top: auto;
    }

    .btn {
      padding: 8px 16px;
      font-size: 0.9rem;
    }

  }

  /* Pour les tablettes */
  @media (min-width: 601px) and (max-width: 992px) {

    .home {
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    }

    .image-container {
      width: 30%;
      margin-bottom: 20px;
    }

    .glitch {
      font-size: 3rem;
    }

    p {
      font-size: 1.3rem;
    }
  }

  /* Pour les grands écrans */
  @media (max-width: 993px) and (max-width: 1024px) {
    .image-container {
      width: 20%;
      margin-bottom: 25px;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    }

    .glitch {
      font-size: 3.2rem;
    }

    p {
      font-size: 1.4rem;
    }

    .btn {
      padding: 12px 24px;
      font-size: 1rem;
    }
  }

  @media (min-width: 1024px) {
    .image-container {
      width: 20%;
      margin-bottom: 25px;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    }

    .glitch {
      font-size: 4rem;
    }

    p {
      font-size: 2rem;
    }

    .btn {
      padding: 12px 24px;
      font-size: 2rem;
    }
  }
</style>