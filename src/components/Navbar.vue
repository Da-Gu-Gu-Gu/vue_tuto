<template>
  <div class="navbar">
    <div>
      <h1>👋 Hi,</h1>
      <p>Login as <span>hello@gmail.com</span></p>
    </div>
    <div class="logout">logout</div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: white;
  width: 600px;
  border-radius: 10px;
  padding: 15px;
}

h1 {
  /* background: red; */
  font-size: 25px;
  text-align: left;
  padding-bottom: 0px;
}
p {
  margin-top: 10px;
  color: black;
}

span {
  color: #377ee8;
}

.logout {
  background: #e63946;
  width: 100px;
  padding: 10px;
  color: white;
  border-radius: 10px;
  cursor: pointer;
}
</style>
