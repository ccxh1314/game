<template>
    <div class="home">
        <Swiper></Swiper>
        <List :list="list" :dataName="'home'"></List>
    </div>
</template>

<script>
import Swiper from '../components/Swiper';
import List from '../components/List';
    export default {
        data(){
            return {
                list:[]
            }
        },
        components:{
            Swiper,List
        },
        mounted(){
            axios({
                url:"/api/home",
                // url:'/douban/v2/movie/top250?start=0&count=10',
                params:{_page:1,_limit:10}


            }).then(
                    res=>
                    this.list = res.data.data
                    // console.log(res)
                )
        }
    }
</script>
 
