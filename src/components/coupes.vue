<template>

<h3 class="titre">Nos Coupes glacées</h3>
<div class="conteneurMenu">
  <figure>
    <img src="@/images/glace-mexicaine.jpg" alt="Coupe Glace mexicaine" />
    <figcaption>Coupe Glacer : 8.90 €
      <button class="bouttonAdd" v-on:click="Ajouter (8.9)">Ajouter</button>
    </figcaption>
    </figure>
</div>
</template>
<script>
export default {
  name: 'coupes',
  data () {
    return {
      panier: 0,
      coupeA: 0
    }
  },
  methods: {
    Ajouter (prix) {
      this.panier = this.panier + prix
    }
  }
}

</script>
