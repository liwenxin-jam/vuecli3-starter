<template>
  <div>
    <button class="button button-close">x</button>
    <button :class="[$style.button, $style.close]">x</button>
    <ul>
    <li v-for="user in users" v-if="user.isActive" :key="user.id">{{user.name}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [
        { id: 1, name: "jam", isActive: true },
        { id: 2, name: "xx", isActive: false },
        { id: 3, name: "lai", isActive: true }
      ]
    };
  },
  computed: {
    activeUsers() {
      return this.users.filter(user => {
        return user.isActive;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.button {
  border: none;
  border-radius: 2px;
}
.button-close {
  background-color: red;
}
</style>

<style module>
.button {
  border: none;
  border-radius: 2px;
}
.close {
  background-color: red;
}
</style>

