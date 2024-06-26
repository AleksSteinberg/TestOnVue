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
    <h1>Регистрация</h1>
    <form action="">
      <ul>
        <li><input type="text" placeholder="Логин*"></li>
        <li><input type="text" placeholder="Пароль*"></li>
        <li><input type="text" placeholder="Email@gmail.com*"></li>
        <li><input type="text" placeholder="Пароль*"></li>
        <div class="capcha__section">
          <div class="capcha__section--image">
            <img src="../assets/capcha.jpg" alt="">
            <button>
              <img src="../assets/refresh-capcha.svg" alt="">
            </button>
          </div>
          <p>Введите символы с картинки. Используйте строчные и прописные буквы, цифры.</p>
        </div>
        <li><input type="text" placeholder="Введите код с картинки*"></li>
      </ul>
    </form>
    <button class="button__login">
      Зарегистрироваться
    </button>
    <p class="login__text">У вас уже есть аккауте? <a href="">Войти</a></p>
  </main>
</template>

<script>
export default {
  name: 'SignUpPage',
  methods: {
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
      font-size: 17px;
      font-weight: 600;
      line-height: 22px;
      letter-spacing: -0.4300000071525574px;
      text-align: center;
      margin: 0;
      padding: 0;
    }
    p {
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
    padding: 0;
    margin: 0 15px 0 0;
    width: 22px;
    height: 22px;
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
    padding-top: 16px;
    h1 {
      font-family: SF Pro Display;
      font-size: 32px;
      font-weight: 600;
      line-height: 33.6px;
      letter-spacing: -0.05em;
      text-align: left;
      margin: 0;
      padding-top: 16px;
    }
    ul {
      padding: 0;
    }
    li {
      list-style-type: none;
      margin-bottom: 8px;

      input {
        border: none;
        background-color: white;
        width: 91.7vw;
        height: 49px;
        padding: 15px 0 15px 15px;
        border-radius: 8px;
        font-family: SF Pro Display;
        font-size: 16px;
        font-weight: 400;
        line-height: 19.09px;
        text-align: left;
      }
    }
  }
  .capcha__section {
    margin-top: 16px;
    p {
      font-family: SF Pro Display;
      font-size: 14px;
      font-weight: 400;
      line-height: 16.71px;
      text-align: left;
      color: rgba(130, 130, 130, 1);
      margin-top: 8px;
      margin-bottom: 8px;
    }
  }
  .capcha__section--image {
    display: flex;
    justify-content: space-between;
    align-items: center;
    button {
      background: none;
      border: none;
      border-radius: 8px;
      width: 40px;
      height: 40px;
      background-color: white;
      padding: 0;
      img {
        padding: 6px 6px 6px 6px;
      }
    }
  }
  .button__login {
    background: rgba(170, 76, 224, 1);
    width: 358px;
    height: 48px;
    padding: 9px 55px 9px 55px;
    border: none;
    border-radius: 8px;
    color: white;
    margin-top: 52px;
  }
  .login__text {
    margin-top: 20px;
    text-align: center;
    font-family: SF Pro Display;
    font-size: 16px;
    font-weight: 400;
    line-height: 19.09px;
    a {
      font-family: SF Pro Display;
      font-size: 16px;
      font-weight: 400;
      line-height: 19.09px;
      text-align: left;
      color: rgba(170, 76, 224, 1);
    }
  }
</style>
