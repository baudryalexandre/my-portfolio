<template>
  <section class="skills">
    <div class="overlay"></div>
    <div class="content">
      <h1><span class="glitch" data-text="Compétences et Soft Skills">Compétences et Soft Skills</span></h1>
      <div class="skills-container">
        <!-- Langages de Programmation -->
        <div class="skill">
          <h3>Langages de Programmation</h3>
          <div class="skill-icons">
            <div class="skill-icon">
              <img src="../assets/python_logo.png" alt="Python">
              <p>Python</p>
            </div>
            <div class="skill-icon">
              <img src="../assets/golang_logo.png" alt="Golang">
              <p>Golang</p>
            </div>
            <div class="skill-icon">
              <img src="../assets/javascript_logo.png" alt="JavaScript">
              <p>JavaScript</p>
            </div>
            <div class="skill-icon">
              <img src="../assets/rust_logo.png" alt="Rust">
              <p>Rust</p>
            </div>
            <div class="skill-icon">
              <img src="../assets/css_logo.png" alt="CSS">
              <p>CSS</p>
            </div>
            <div class="skill-icon">
              <img src="../assets/html_logo.png" alt="HTML">
              <p>HTML</p>
            </div>
            <div class="skill-icon">
              <img src="../assets/sqlite_logo.png" alt="Sqlite">
              <p>SQLITE</p>
            </div>
          </div>
        </div>
        
        <!-- Technologies Utilisées -->
        <div class="skill">
          <h3>Technologies Utilisées</h3>
          <div class="skill-icons">
            <div class="skill-icon">
              <img src="../assets/docker_logo.png" alt="Docker">
              <p>Docker</p>
            </div>
            <div class="skill-icon">
              <img src="../assets/github_logo.png" alt="github_logo">
              <p>Github</p>
            </div>
            <div class="skill-icon">
              <img src="../assets/linux_logo.png" alt="Linux">
              <p>Linux</p>
            </div>
            <div class="skill-icon">
              <img src="../assets/windows_logo.png" alt="Windows">
              <p>Windows</p>
            </div>
          </div>
        </div>
        
        <!-- Soft Skills -->
        <div class="skill">
          <h3>Soft Skills</h3>
          <ul>
            <li>Esprit d'équipe</li>
            <li>Autonomie</li>
            <li>Créativité</li>
            <li>Gestion du temps</li>
            <li>Adaptabilité</li>
            <li>Résolution de problèmes</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
  .skills {
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
    background: rgba(0, 0, 0, 0.6);
    z-index: 1;
  }

  .content {
    position: relative;
    z-index: 2;
    display: flex;
    width: 80%;
    max-width: 1200px;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  h1 {
  position: relative;
    font-size: 5rem;
    font-weight: bold;
    color: #C8AD7F;
    z-index: 2;
}

  .skill-icon {
  background: rgba(255, 255, 255, 0.2); /* Fond semi-transparent */
  border-radius: 8px;
  padding: 1%;
}


  .skills-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 2rem;
  }

  .skill {
    background: rgba(37, 5, 7, 0.8);
    border: 1px solid #ddd;
    border-radius: 8px;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .skill h3 {
    margin-bottom: 1rem;
    font-size: 2rem;
    color: #C8AD7F;
    position: relative;
    font-weight: bold;
  }

  .skill-icons {
    width: 100%;
    margin: 1%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.5rem;
  }

  .skill-icon {
    text-align: center;
  }

  .skill-icon img {
    width: 80px;
    height: 80px;
    object-fit: contain;
  }

  .skill-icon p {
    margin-top: 0.5rem;
    font-size: 1.2rem;
    color: #E8DCCA;
  }

  .skill ul {
    list-style: none;
    padding: 0;
  }

  .skill li {
    font-size: 1.4rem;
    color: #E8DCCA;
    margin: 0.5rem 0;
  }

  @keyframes glitch-animation-df02a584 {
    0%, 5% {
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
    60%, 100% {
      transform: translate(0);
    }
  }

  .glitch::before,
  .glitch::after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
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

  @keyframes glitch-animation-before {
    0%, 5% {
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
    55%, 100% {
      clip: rect(42px, 9999px, 44px, 0);
      transform: skew(0.3deg);
    }
  }

  @keyframes glitch-animation-after {
    0%, 5% {
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
    55%, 100% {
      clip: rect(22px, 9999px, 20px, 0);
      transform: skew(0.3deg);
    }
  }
</style>
