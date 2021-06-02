<template>
    <section class="conteneurMenu">
    <figure>
      <router-link  to="/CoupesGlacer">
      <img src="@/images/glace-mexicaine.jpg" alt="vers le menu des coupes glacer" />
  </router-link>
  <figcaption class="underLien">Coupe Glacer</figcaption>
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
