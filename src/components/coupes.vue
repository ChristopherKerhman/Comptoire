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
      <p>Composition : {{boule.composition}}</p>
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
        { id: 0, cornet: './images/glace-mexicaine.jpg', prix: 7.9, nom: 'Coupe Mexicaine', composition: 'Chantilly, boule vanille bourbon, glace café, coulis de café chaud' },
        { id: 1, cornet: './images/amarena.jpg', prix: 7.9, nom: 'Amarena', composition: 'Chantilly, boule vanille bourbon, glace Cerise, cerise confite' },
        { id: 2, cornet: './images/bounty.jpg', prix: 7.9, nom: 'bounty', composition: 'Chantilly, boule vanille bourbon, glace Coco, boule chocolat' },
        { id: 3, cornet: './images/coupe-exotique.jpg', prix: 8.9, nom: 'Coupe exotique', composition: 'Chantilly, boule mangue, boule banane, boule passion' }
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
