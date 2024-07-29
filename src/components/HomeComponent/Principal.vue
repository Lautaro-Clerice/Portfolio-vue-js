<template>
  <div class="body">
    <div class="filter">
      <slot></slot>
    </div>
  </div>
</template>

<script setup></script>

<style scoped lang="scss">
.body {
  clip-path: ellipse(100% 50% at 50% 40%);
  width: 100%;
  height: 1000px;
  background-image: url("../../assets/backgorund.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.filter {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.678);
}
@media (width < 800px) {
  .body {
    height: 600px;
  }
}
</style>
