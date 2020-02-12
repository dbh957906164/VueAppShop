// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { Button, Row, Col, Swipe, SwipeItem, Lazyload, List, Field, NavBar, Tab, Tabs, GoodsAction, GoodsActionIcon, GoodsActionButton, Icon, Sidebar, SidebarItem, Cell, PullRefresh, Pagination, Stepper, Tabbar, TabbarItem } from 'vant';

Vue.use(Button).use(Row).use(Col).use(Swipe).use(SwipeItem).use(Lazyload).use(List).use(Field).use(NavBar).use(Tab).use(Tabs).use(GoodsAction).use(GoodsActionIcon).use(GoodsActionButton).use(Icon).use(Sidebar).use(SidebarItem).use(Cell).use(PullRefresh).use(Pagination).use(Stepper).use(Tabbar).use(TabbarItem)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})