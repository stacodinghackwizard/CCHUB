<template>
    <div>
        <HeaderPage/>
        <HeroPage/>
        <CounterPage/>
        <aboutHome/>
        <teamPage/>
        <schedulePage/>
        <pricePage/>
    </div>
</template>

<script>
import HeaderPage from '../../components/HeaderPage/Header.vue';
import HeroPage from '../../components/HomePage/Hero/Hero.vue';
import CounterPage from '../../components/HomePage/Counter/Counter.vue';
import aboutHome from '../../components/HomePage/about/about.vue';
import teamPage from '../../components/HomePage/team/team.vue';
import schedulePage from '../../components/HomePage/schedule/schedule.vue';
import pricePage from '../../components/HomePage/price/price.vue';
export default {
    name: 'HomePage',
    components: {
        HeaderPage,
        HeroPage,
        CounterPage,
        aboutHome,
        teamPage,
        schedulePage,
        pricePage,
    }
}
</script>