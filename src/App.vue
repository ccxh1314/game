<template>
  <div id="app">
    <Header></Header>
    <!-- <Home></Home> -->
    <router-view></router-view>

    <Footer></Footer>

  </div>
</template>

<script>
// import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';


export default {
  name: 'app',
  components:{
    Header,Footer 
  },

  created(){
    // console.log(1,this.$axios)
    // console.log(2,axios)
            // axios({
                // url:"/api/banner"
            //     url:'/douban/v2/movie/top250?start=0&count=10'
            // }).then(res=>console.log(res.data))
    }

}
</script>

<style> 

</style>
