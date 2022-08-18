<template>
  <router-view />
</template>

<script>
export default {};
</script>

<style>
#app {
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(
    to right top,
    #377ee8,
    #5e75f5,
    #8966fa,
    #b44ef7,
    #de12eb
  );
  background-size: 400% 400%;

  -webkit-animation: AnimationName 5s ease infinite;
  -moz-animation: AnimationName 5s ease infinite;
  animation: AnimationName 5s ease infinite;
}

@-webkit-keyframes AnimationName {
  0% {
    background-position: 0% 24%;
  }
  50% {
    background-position: 100% 77%;
  }
  100% {
    background-position: 0% 24%;
  }
}
@-moz-keyframes AnimationName {
  0% {
    background-position: 0% 24%;
  }
  50% {
    background-position: 100% 77%;
  }
  100% {
    background-position: 0% 24%;
  }
}
@keyframes AnimationName {
  0% {
    background-position: 0% 24%;
  }
  50% {
    background-position: 100% 77%;
  }
  100% {
    background-position: 0% 24%;
  }
}
</style>
