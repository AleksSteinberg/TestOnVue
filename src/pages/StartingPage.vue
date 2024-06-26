<template>
  <header class="header">
    <div class="header__text">
      <h1 class="header__text--title">
        TWIX.IM
      </h1>
      <p class="header__text--description">
        bot
      </p>
    </div>
    <button class="header__popup">
      <img src="../assets/popup-button.svg" alt="">
    </button>
  </header>
  <main class="main">
    <div class="main__text">
      <h1 class="main__text--title">
        Меняйте валюту <span>без посредников</span>
      </h1>
      <p class="main__text--top">
        Децентрализованный P2P обмен.
      </p>
      <p class="main__text--bottom">
        Ваш телеграм аккаунт не связан с ботом напрямую. Вы можете иметь множество аккаунтов используя лишь один профиль тг
      </p>
    </div>
    <div class="main__buttons">
      <button @click="LoginPage" class="main__buttons--button--top">
        Войти
      </button>
      <button @click="SignUpPage" class="main__buttons--button--bottom">
        Зарегистрироваться
      </button>
    </div>
  </main>
</template>

<script>
export default {
  name: 'StartingPage',
  methods: {
    SignUpPage () {
      this.$router.push('/SignUpPage')
    },
    LoginPage () {
      this.$router.push('/LoginPage')
    }
  }
}
</script>

<style scoped>
  .header {
    text-align: center;
    display: flex;
    width: 100vw;
    height: 44px;
    justify-content: end;
    align-items: center;
    padding-top: 11px;
    padding-bottom: 3px;
    h1 {
      font-family: SF Pro Display;
      font-size: 17px;
      font-weight: 600;
      line-height: 22px;
      letter-spacing: -0.4300000071525574px;
      text-align: center;
      margin: 0;
      padding: 0;
    }
    p {
      font-family: SF Pro Display;
      font-size: 13px;
      font-weight: 400;
      line-height: 18px;
      letter-spacing: -0.07800000160932541px;
      text-align: center;
      margin: 0;
      padding: 0;
      color:  rgba(60, 60, 67, 0.6);

    }
  }
  .header__text {
    margin-right: 125px;
  }
  .header__popup {
    background: none;
    border: none;
    margin-right: 15px;
    img {
      width: 22px;
      height: 22px;
    }
  }

  .main {
    width: 91.7vw;
    margin: 0;
    margin-left: auto;
    margin-right: auto;
  }
  .main__text {
    margin-top: 136px;
  }

  .main__text--title {
    font-family: SF Pro Display;
    font-size: 56px;
    font-weight: 700;
    line-height: 53.2px;
    letter-spacing: -0.05em;
    text-align: left;
    margin: 0;
    span {
      color: rgba(170, 76, 224, 1);
    }
  }
  .main__text--top {
    font-family: SF Pro Display;
    margin-top: 16px;
    font-size: 16px;
    font-weight: 400;
    line-height: 19.09px;
    text-align: left;

  }
  .main__text--bottom {
    margin-top: 16px;
    font-family: SF Pro Display;
    font-size: 16px;
    font-weight: 400;
    line-height: 19.09px;
    text-align: left;
    color: rgba(60, 60, 67, 0.6);
  }
  .main__buttons {
    display: grid;
    grid-template-columns: repeat(1, auto)
  }
  .main__buttons--button--top {
    margin-top: 149px;
    background: rgba(170, 76, 224, 1);
    width: 358px;
    height: 48px;
    padding: 9px 55px 9px 55px;
    border: none;
    border-radius: 8px;
    opacity: 0px;
    color: white;
    font-family: SF Pro Display;
    font-size: 16px;
    font-weight: 400;
    line-height: 19.09px;
    text-align: center;
  }
  .main__buttons--button--bottom {
    margin-top: 8px;
    background: none;
    width: 358px;
    height: 48px;
    padding: 9px 55px 9px 55px;
    border: 1px rgba(170, 76, 224, 1) solid;
    border-radius: 8px;
    opacity: 0px;
    font-family: SF Pro Display;
    color: rgba(170, 76, 224, 1);
    font-size: 16px;
    font-weight: 400;
    line-height: 19.09px;
    text-align: center;
  }
</style>
