<template>
  <div id="app">
    <Header />
    <div slot-scope="home"><Home /></div>
    <router-view/>
  </div>
</template>

<script>
import Header from './components/shared/Header'
import Home from './components/Home'
import '../node_modules/slick-carousel/slick/slick.scss'; 
import './assets/scss/app.scss'
export default {
  name: 'App',
  components: {
    Header, Home
  }
}
</script>
