<template>
    <section class="conteneurMenu">
    <figure>
      <router-link  to="/CoupesGlacer">
      <img src="@/images/glace-mexicaine.jpg" alt="vers le menu des coupes glacer" />
  </router-link>
  <figcaption class="underLien">Coupe Glacer</figcaption>
  </figure>
  <figure>
    <router-link  to="/CompositionGlacer">
    <img src="@/images/coupe-glacee-aux-myrtilles.jpeg" alt="vers le menu des coupes glacer" />
</router-link>
<figcaption class="underLien">Fait vous même votre composition ?</figcaption>
</figure>
  <panier/>
  </section>
</template>
<script>
// @ is an alias to /src
import panier from '@/components/commande.vue'
export default {
  name: 'Home',
  components: {
    panier
  }
}
</script>
