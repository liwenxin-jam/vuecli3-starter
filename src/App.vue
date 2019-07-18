<template>
  <div id="app">
    <router-view />
    <!-- <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view> -->
    <!-- <transition name="fade-transform" mode="out-in">
      <keep-alive :include="['A', 'B']">
        <router-view :key="key" />
      </keep-alive>
    </transition> -->
  </div>
</template>
