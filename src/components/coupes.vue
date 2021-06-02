<template>
<h3 class="titre">Nos Coupes glacées</h3>
<div class="conteneurMenu">
  <figure>
    <img src="@/images/bounty.jpg" alt="Coupe Glace mexicaine" />
    <figcaption>Coupe Glacer : 8.90 €
      <button class="bouttonAdd" v-on:click="Ajouter(8.90, Coupe)">Ajouter</button>
    </figcaption>
    </figure>
    <figure v-for="boule in coupes" v-bind:key="boule">
      <img :alt="boule.nom" v-bind:src="boule.cornet" />
      <figcaption>{{boule.nom}}: {{boule.prix}} €
        <button class="bouttonAdd" v-on:click="Ajouter(boule.prix, boule.nom)">Ajouter</button>
      </figcaption>
      </figure>
</div>
<total/>
</template>
<script>
import { mapState } from 'vuex'
import total from '@/components/commande.vue'
export default {
  name: 'coupes',
  components: {
    total
  },
  data () {
    return {
      panier: 0,
      liste: [],
      coupes: [
        { id: 0, cornet: './images/glace-mexicaine.jpg', prix: 8.9, nom: 'Coupe Mexicaine' },
        { id: 1, cornet: './images/amarena.jpg', prix: 7.9, nom: 'Amarena' },
        { id: 2, cornet: './images/bounty.jpg', prix: 6.9, nom: 'bounty' },
        { id: 3, cornet: './images/coupe-exotique.jpg', prix: 5.9, nom: 'Coupe exotique' }
      ]
    }
  },
  computed: {
    ...mapState(['panierClient', 'commande'])
  },
  methods: {
    Ajouter (prix, nom) {
      this.liste = this.commande
      this.liste.push(nom)
      this.panier = this.panierClient + prix
      this.$store.dispatch('MAJPanier', {
        panierClient: this.panier,
        commande: this.liste
      })
    }
  }
}

</script>
