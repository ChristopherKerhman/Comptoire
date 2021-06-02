<template>
<!--Page d'erreur 404 pour éviter les problème de navigation dans l'application-->
<div class="not-found">
  La page que tu cherches n'existe pas... Mais nous y traivaillons à grand renfort de suplément chantilly.
</div>
       <router-link to="/">Retour</router-link>
       <router-view/>
</template>
<style>
.not-found {
  font-size: 2em;
  color: black;
}
</style>
