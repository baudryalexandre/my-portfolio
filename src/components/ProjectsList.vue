<template>
  <section class="projects" data-aos="fade-up">
    <div class="overlay"></div>
    <div class="content">
      <h1><span class="glitch" data-text="Mes Projets">Mes Projets</span></h1>
      <div class="project-list">
        <div class="project-item" v-for="project in projects" :key="project.id"
          :class="{ expanded: project.isExpanded }" @click="toggleExpand(project)">
          <!-- Ici, on remplace expandProject par toggleExpand -->

          <img :src="project.image" :alt="project.title" class="project-image" />
          <div class="project-details">
            <h3>{{ project.title }}</h3>
            <p v-if="!project.isExpanded">{{ project.description }}</p>
            <p v-if="project.isExpanded">{{ project.fullDescription }}</p>
            <button class="btn" @click.stop="toggleExpand(project)">
              {{ project.isExpanded ? 'Voir moins' : 'Voir plus' }}
            </button>
          </div>

          <!-- Détails supplémentaires dans la vue en plein écran -->
          <div v-if="project.isExpanded" class="extra-info">
            <p><strong>Date :</strong> {{ project.date }}</p>
            <p><strong>Technologies :</strong> {{ project.technologies.join(', ') }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
  import { reactive } from 'vue';

  // Liste des projets avec plus de détails
  const projects = reactive([
    {
      id: 1,
      title: 'Projet 1',
      image: require('@/assets/projet1.webp'),
      description: 'Description courte du projet 1',
      fullDescription: `Description complète et détaillée du projet 1. Ce projet utilise diverses technologies.`, 
      link: '#',
      date: '2024-09-09',
      technologies: ['Vue.js', 'JavaScript', 'CSS'],
      isExpanded: false // état initial non déplié
    },
    {
      id: 2,
      title: 'Projet 2',
      image: require('@/assets/projet2.webp'),
      description: 'Description courte du projet 2',
      fullDescription: 'Description complète et détaillée du projet 2. Utilisation des bibliothèques modernes...',
      link: '#',
      date: '2023-08-15',
      technologies: ['React', 'Node.js', 'HTML'],
      isExpanded: false
    },
    {
      id: 3,
      title: 'Projet 3',
      image: require('@/assets/projet3.webp'),
      description: 'Description courte du projet 3',
      fullDescription: 'Description complète et détaillée du projet 3. Mise en place de fonctionnalités avancées...',
      link: '#',
      date: '2022-07-10',
      technologies: ['Python', 'Django', 'PostgreSQL'],
      isExpanded: false
    },
    {
      id: 4,
      title: 'Projet 4',
      image: require('@/assets/projet4.webp'),
      description: 'Description courte du projet 4',
      fullDescription: 'Description complète et détaillée du projet 4. Ce projet présente une architecture complexe...',
      link: '#',
      date: '2021-06-05',
      technologies: ['Go', 'Rust', 'Docker'],
      isExpanded: false
    }
  ]);

  // Fonction pour basculer l'expansion d'un projet
  const toggleExpand = (project) => {
    project.isExpanded = !project.isExpanded;
    // Empêche le défilement de la page principale quand un projet est en mode "plein écran"
    document.body.style.overflow = project.isExpanded ? 'hidden' : '';
  };
</script>



<style>
  .projects {
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
  }

  .content {
    display: flex;
    width: 80%;
    z-index: 1;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .project-list {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5em;
    padding: 2em 0;
  }

  .project-item {
    position: relative;
    background: rgba(37, 5, 7, 0.7);
    padding: 1.5em;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: all 0.5s ease;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .project-item p {
  white-space: pre-line;
}

h1 {
  position: relative;
    font-size: 5rem;
    font-weight: bold;
    color: #C8AD7F;
    z-index: 2;
}


  .project-item.expanded {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100vw;
    height: 91vh;
    z-index: 100;
    background-color: rgba(0, 0, 0, 0.9);
    padding: 5% 10%;
    border-radius: 0;
    overflow-y: auto;
    transition: all 0.5s ease;
  }

  .project-image {
    width: 100%;
    height: 200px;
    border-radius: 8px;
    object-fit: cover;
    margin-bottom: 1em;
  }

  .project-item h3 {
    font-size: 1.5rem;
    margin-bottom: 0.5em;
    color: #C8AD7F;
  }

  .project-item p {
    margin-bottom: 1em;
    color: #E8DCCA;
  }

  .extra-info {
    margin-top: 1em;
    background-color: rgba(200, 173, 127, 0.1);
    padding: 1em;
    border-radius: 8px;
  }

  .btn {
    display: inline-block;
    padding: 10px 20px;
    background-color: #C8AD7F;
    color: #0e0e0e;
    text-decoration: none;
    border-radius: 4px;
    font-weight: bold;
    transition: background-color 0.3s ease;
  }

  .btn:hover {
    background-color: #E8DCCA;
  }


  .glitch {
    position: relative;
    font-size: 3rem;
    margin-bottom: 3%;
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


  @media (max-width: 768px) {
    .project-list {
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    }
  }

  @media (max-width: 480px) {
    .project-list {
      grid-template-columns: 1fr;
    }
  }
</style>