<template>
  <p>
    Votre coupe créateur :<br />
    <ul>
      <li v-for="picasso in coupePerso" v-bind:key="picasso">{{picasso}}<button class="bouttonAdd" v-on:click="del(picasso)">Retirer</button></li>
      <li>{{prixCoupe.toFixed(2)}} €</li>
    </ul>
    <button v-if="coupePerso.length >= 1" class="bouttonAdd" v-on:click="sauverLaCoupe">Enregistrer votre coupe</button>
  </p>
  <ul>
    <li><h4 class="titre_h1">Les parfuns de glaces</h4></li>
    <li v-for="glace in parfumGlace" v-bind:key="glace">{{glace.parfum}} <button v-on:click="coupeCreation(glace.parfum)" class="bouttonAdd">Ajouter</button></li>
    <li><h4 class="titre_h1">Les sorbets</h4></li>
    <li v-for="sorbet in parfumSorbet" v-bind:key="sorbet">{{sorbet.parfum}}<button v-on:click="coupeCreation(sorbet.parfum)" class="bouttonAdd">Ajouter</button></li>
    <li><h4 class="titre_h1">Les suppléments</h4></li>
    <li v-for="topping in supplement" v-bind:key="topping">{{topping.sup}}<button v-on:click="coupeCreation(topping.sup)" class="bouttonAdd">Ajouter</button></li>
  </ul>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'creation',
  data () {
    return {
      nCoupe: 0,
      prixCoupe: 0,
      prixCommande: 0,
      coupePerso: [],
      parfumGlace: [
        { id: 0, parfum: 'Vanille Bourbon' },
        { id: 1, parfum: 'Chocolat Noir' },
        { id: 2, parfum: 'Café' },
        { id: 3, parfum: 'Amande & miel' },
        { id: 4, parfum: 'Noisette' },
        { id: 5, parfum: 'Fleur de lait' },
        { id: 6, parfum: 'Pistache' }
      ],
      parfumSorbet: [
        { id: 0, parfum: 'Melon' },
        { id: 1, parfum: 'Framboise' },
        { id: 2, parfum: 'Citron' },
        { id: 3, parfum: 'Pêche' },
        { id: 4, parfum: 'Menthe' },
        { id: 5, parfum: 'Cassis' },
        { id: 6, parfum: 'Citron vert' }
      ],
      supplement: [
        { id: 0, sup: 'Chantilly' },
        { id: 1, sup: 'Fruit rouge' },
        { id: 2, sup: 'Kiwi' },
        { id: 3, sup: 'Annanas' }
      ]
    }
  },
  updated () {
    if (this.coupePerso.length < 1) {
      this.pricCoupe = 0
    }
    if (this.coupePerso.length === 1) {
      this.prixCoupe = 2.50
    }
    if (this.coupePerso.length === 2) {
      this.prixCoupe = 3.50
    }
    if (this.coupePerso.length === 3) {
      this.prixCoupe = 4.50
    }
    if (this.coupePerso.length === 4) {
      this.prixCoupe = this.coupePerso.length * 1.8
    }
    if (this.coupePerso.length >= 4) {
      this.prixCoupe = this.coupePerso.length * 1.6
    }
    if (this.coupePerso.length >= 6) {
      this.prixCoupe = this.coupePerso.length * 1.4
    }
  },
  computed: {
    ...mapState(['panierClient', 'commande', 'coupeCreateurPerso'])
  },
  methods: {
    coupeCreation (name) {
      this.coupePerso.push(name)
    },
    sauverLaCoupe () {
      this.nCoupe++
      this.coupeCreateurPerso.push('N° Coupe ' + this.nCoupe)
      this.coupeCreateurPerso.push(this.coupePerso)
      const Recap = this.coupeCreateurPerso
      this.prixCommande = this.panierClient + this.prixCoupe
      this.$store.dispatch('MAJPanier2', {
        panierClient: this.prixCommande,
        coupeCreateurPerso: Recap
      })
      this.coupePerso = []
      this.prixCoupe = 0
    },
    del (number) {
      this.coupePerso.splice(number, 1)
    }
  }
}
</script>
