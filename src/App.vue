<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view/>
  </template>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #555B6E;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #6C9D9B;
}

#nav a.router-link-exact-active {
  color: #8dcec0;
}
/*==Couleur majoritaire du site==*/
.gris {
  color: #555B6E;
}
.turquoisePastel {
  color: #89B0AE;
}
.turquoiseClair {
  color: #BEE3DB;
}
.blancCorail {
  color: #FAF9F9;
}
.rosePastel {
  color: #FFD6BA;
}
.rosePastelfonce {
  color: #FF8533;
}
/*==Couleur majoritaire du site==*/
/*==Globale==*/
body {
  background-color: #FFD6BA;
  color: #555B6E;
}
.titre {
  ccolor: #555B6E;
  text-transform: uppercase;
}
.conteneurMenu {
  display: flex;
  flex-direction: column;
  margin-bottom: 0.5em;
  align-items: center;
  justify-content: center;
}
.underLien {
  color: #6C9D9B;
  text-transform: uppercase;
  text-decoration: underline;
}
.underLien:hover {
    color: #8dcec0;
}
/*==Fin Globale==*/
/*==Bouton==*/
.bouttonAdd {
  background-color: #FFD6BA;
  font-style: italic;
  font-weight: 800;
  color: #555B6E;
  text-transform: uppercase;
  border-style: hidden;
  border-radius: 5px;
}
.bouttonAdd:active {
  -webkit-box-shadow: inset 0px 0px 7px 6px rgba(245, 176, 118, 0.64);
  -moz-box-shadow: inset 0px 0px 7px 6px rgba(245, 176, 118, 0.64);
  box-shadow: inset 0px 0px 7px 6px rgba(245, 176, 118, 0.64);
}

</style>
