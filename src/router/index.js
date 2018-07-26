import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import FootballScoring from '@/components/FootballScoring'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/top',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/football',
      name: 'FootballScoring',
      component: FootballScoring
    }
  ]
})
