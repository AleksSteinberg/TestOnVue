<template>
  <main class="main">
    <div class="main__text">
      <h1>
        ОШИБКА 404
      </h1>
      <p>
        Такой страницы не существует
      </p>
    </div>
    <button @click="goToBackPage">
      Назад
    </button>
  </main>
</template>

<script>
export default {
  name: 'ErrorNotFound',
  methods: {
    goToBackPage () {
      this.$router.push('/StartingPage')
    }
  }
}

</script>

<style scoped>

  .main {
    background: linear-gradient(347.96deg, #41126B 0%, #AA4CE0 100%);
    width: 100vw;
    height: 100vh;
    text-align: center;
    align-content: center;
  }
  .main__text {
    h1 {
      font-family: SF Pro Display;
      color: white;
      font-weight: 600;
      line-height: 71.6px;
      letter-spacing: -0.06em;
      font-size: 60px;
      margin: 0;
    }
    p {
      margin-top: 24px;
      color: white;
      font-family: SF Pro Display;
      font-size: 16px;
      font-weight: 400;
      line-height: 19.09px;
    }
  }
  button {
    margin-top: 32px;
    width: 155px;
    height: 48px;
    border-radius: 8px;
    background-color: rgba(170, 76, 224, 1);
    border: none;
    color: white;
  }
</style>
