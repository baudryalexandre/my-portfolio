<template>
  <section class="about">
    <div class="overlay"></div>
    <div class="content">
      <h1><span class="glitch" data-text="À Propos de Moi">À Propos de Moi</span></h1>
      <div class="content_para">
        <p>Je suis un développeur FullStack spécialisé dans le web avec une passion pour la cybersécurité et l'IA. J'ai
          commencé en
          Avril 2023 lors de ma piscine(immersion intensif de 26 jours) à Zone01.
          <br><br>
          Au sein de Zone01, j'ai eu l'opportunité de développer une solide base dans plusieurs technologies de
          programmation, notamment Python, Golang, JavaScript, Rust, CSS, HTML et SQL. Cette formation, axée sur une
          pédagogie collaborative (peer-to-peer), m'a permis d'acquérir des compétences à la fois techniques et humaines
          : je sais travailler
          en autonomie, en équipe, et je m'efforce toujours de trouver des solutions créatives à des problèmes
          complexes.
          <br><br>
          Je suis une personne rigoureuse, curieuse et toujours prête à apprendre. Grâce à ma formation, j'ai acquis des
          compétences techniques variées, ainsi qu'une capacité à m'adapter rapidement aux nouveaux défis. Egalement
          très à l'aise avec le travail en équipe, je sais m'organiser pour respecter les délais tout en
          produisant un travail de qualité. Prêt à m'investir pleinement dans une
          entreprise ou une organisation, désireux d'apporter mes idées créatives et mes compétences dans des projets concret et apprendre des autres.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
  .about {
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

  .content {
    display: flex;
    width: 82%;
    z-index: 1;
    justify-content: center;
    align-content: center;
    align-items: center;
    flex-direction: column;
    flex-wrap: nowrap;
  }

  .content_para {
    display: flex;
    width: 100%;
    padding: 4%;
    border: 1px solid #ddd;
    border-radius: 8px;
    background: #250507b5;
    flex: 1 1 calc(33.333%);
    box-sizing: border-box;
    flex-direction: column;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: center;
    align-items: center;
  }

  .content_para p {
    font-size: 1.4rem;
  }

  h1 {
    position: relative;
    font-size: 5rem;
    font-weight: bold;
    color: #C8AD7F;
    z-index: 2;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
  }

  /* Effet Glitch */
  .glitch {
    position: relative;
    font-size: 3rem;
    margin-bottom: 10%;
    font-weight: bold;
    color: #C8AD7F;
    z-index: 2;
    animation: glitch-animation 2s infinite;
  }

  .glitch::before,
  .glitch::after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 77%;
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
</style>