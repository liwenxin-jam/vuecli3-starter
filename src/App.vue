<template>
  <div id="app">
    <!-- <router-view /> -->

    <!-- 在2.1.0版本之前 -->
    <!-- <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view> -->

    <!-- 在2.1.0版本之后 -->
    <transition name="fade-transform" mode="out-in">
      <keep-alive :include="['lifecycleKeepAlive']">
        <router-view />
      </keep-alive>
    </transition>
  </div>
</template>
