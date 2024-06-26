<template>
  <header class="header">
    <div class="header__back">
        <a href="">Cancel</a>
    </div>
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
  <main>
    <div class="main__form">
      <div class="main__send">
        <p>
          ОТПРАВИТЬ
        </p>
        <div class="button__send">
          <button>
            <span>
              <img class="currency" src="../assets/BTC.svg" alt="">
              <p>BTC</p>
              <img class="button__arrow__dn" src="../assets/arrow_dn.svg" alt="">
            </span>
          </button>
          <input type="text" placeholder="Bitcoin">
        </div>
      </div>
      <div class="payment">
        <p>Способ оплаты</p>
        <a href="">Авангард</a>
       </div>
      <button class="button__change">
        <img src="../assets/change_button.svg" alt="">
      </button>
      <div class="main__get">
        <p>
          ПОЛУЧИТЬ
        </p>
        <div class="button__get">
          <button>
            <span>
              <img class="currency" src="../assets/BTC.svg" alt="">
              <p>BTC</p>
              <img class="button__arrow__dn" src="../assets/arrow_dn.svg" alt="">
            </span>
          </button>
          <input type="text" placeholder="Ruble">
        </div>
      </div>
    </div>
    <button class="view__offer">
      Смотреть предложения
    </button>
    <button class="button__faq">
      <span>
        <img src="../assets/faq_message.svg" alt="">
        <p>FAQ</p>
      </span>
      <img src="../assets/arrow_right.svg" alt="">
    </button>
    <div class="deals">
      <div class="deals__header">
        <div class="deals__filter">
          <p>МОИ СДЕЛКИ</p>
          <a href="">АКТИВНЫЕ</a>
        </div>
      </div>
      <div class="deals__main">
        <form action="">
          <ul class="form__title">
            <li>ID сделки</li>
            <li>Дата</li>
            <li>Длительность</li>
            <li>Тип сделки</li>
            <li>С кем проводилась</li>
            <li>Направление и сумма</li>
          </ul>
        </form>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'MainPage'
}
</script>

<style scoped>
  html {
    background: #f4f4f4;
    height: 100vh;
    width: 100vw;
  }
  .header {
    text-align: center;
    display: flex;
    width: 100vw;
    height: 44px;
    justify-content: space-between;
    align-items: center;
    padding-top: 11px;
    padding-bottom: 3px;
    padding-left: 16px;
    padding-right: 11px;
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
    a {
      font-family: SF Pro Display;
      font-size: 16px;
      font-weight: 400;
      line-height: 19.09px;
      text-align: left;
      color: rgba(170, 76, 224, 1);
      text-decoration: none;
    }
  }
  .header__popup {
    background: none;
    border: none;
    padding: 0;
    margin: 0 0 0 0;
    width: 22px;
    height: 22px;
    img {
      width: 22px;
      height: 22px;
    }
  }
  main {
    width: 91.7vw;
    margin-left: auto;
    margin-right: auto;
  }
  .main__form {
    button {
      background: none;
      border: none;
      border-radius: 8px;
    }
    img {
      img {
        box-shadow: 0px 4px 30px 0px rgba(0, 0, 0, 0.06);
      }
    }
  }
  .main__send {
    background: rgba(234, 234, 234, 1);
    margin: 0;
    margin-top: 32px;
    padding: 16px;
    width: 358px;
    border-radius: 8px;
    p {
      margin: 0;
      font-family: SF Pro Display;
      font-size: 16px;
      font-weight: 500;
      line-height: 22.4px;
      text-align: left;
      color: rgba(130, 130, 130, 1);
    }
  }
  .button__send {
    display: flex;
    justify-content: space-between;
    background-color: white;
    width: 326px;
    height: 48px;
    border-radius: 8px;
    align-items: center;
    margin-top: 16px;
    button {
      width: 120px;
      height: 40px;
      border-radius: 8px;
      background: rgba(236, 236, 236, 1);
      font-family: SF Pro Display;
      font-size: 18px;
      font-weight: 500;
      line-height: 21.48px;
      text-align: center;
      margin-left: 4px;
      span {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 8px;
        .currency {
          width: 28px;
          height: 28px;
        }
        p {
          font-family: SF Pro Display;
          font-size: 18px;
          font-weight: 500;
          line-height: 21.48px;
          text-align: center;
        }
        .button__arrow__dn {
          width: 7px;
          height: 12px;
        }
      }
    }
    input {
      margin: 0;
      width: auto;
      height: auto;
      padding: 8px 4px 8px 4px;
      gap: 8px;
      border-radius: 8px;
      border: none;
    }
  }
  .payment {
    margin: 8px 0 0 0;
    display: flex;
    justify-content: space-between;
    width: 358px;
    height: 48px;
    padding: 0;
    align-items: center;
    background-color: white;
    padding: 4px;
    border-radius: 8px;
    p {
      margin: 0;
      padding: 0;
      background-color: rgba(236, 236, 236, 1);
      width: 150px;
      height: 40px;
      border-radius: 8px;
      font-family: SF Pro Display;
      font-size: 18px;
      font-weight: 500;
      line-height: 21.48px;
      text-align: center;
    }
    a {
      font-size: 16px;
      font-weight: 400;
      line-height: 19.09px;
      text-align: center;
      text-decoration: none;
      color: rgba(170, 76, 224, 1);
      font-family: SF Pro Display;
      margin-right: 8px;
    }
  }
  .button__change {
    width: 40px;
    height: 40px;
    position: fixed;
    left: 35%;
    top: 26.5%;
  }
  .main__get {
    background: rgba(234, 234, 234, 1);
    margin: 0;
    margin-top: 24px;
    padding: 16px;
    width: 358px;
    border-radius: 8px;
    p {
      margin: 0;
      font-family: SF Pro Display;
      font-size: 16px;
      font-weight: 500;
      line-height: 22.4px;
      text-align: left;
      color: rgba(130, 130, 130, 1);
    }
  }
  .button__get {
    display: flex;
    justify-content: space-between;
    background-color: white;
    width: 326px;
    height: 48px;
    border-radius: 8px;
    align-items: center;
    margin-top: 16px;
    button {
      width: 120px;
      height: 40px;
      border-radius: 8px;
      background: rgba(236, 236, 236, 1);
      font-family: SF Pro Display;
      font-size: 18px;
      font-weight: 500;
      line-height: 21.48px;
      text-align: center;
      margin-left: 4px;
      span {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 8px;
        .currency {
          width: 28px;
          height: 28px;
        }
        p {
          font-family: SF Pro Display;
          font-size: 18px;
          font-weight: 500;
          line-height: 21.48px;
          text-align: center;
        }
        .button__arrow__dn {
          width: 7px;
          height: 12px;
        }
      }
    }
    input {
      margin: 0;
      width: auto;
      height: auto;
      padding: 8px 4px 8px 4px;
      gap: 8px;
      border-radius: 8px;
      border: none;
    }
  }
  .view__offer {
    background: rgba(170, 76, 224, 1);
    width: 358px;
    height: 48px;
    padding: 9px 55px 9px 55px;
    border: none;
    border-radius: 8px;
    color: white;
    margin-top: 16px;

  }
  .button__faq {
    width: 358px;
    height: 60px;
    padding: 0;
    border: none;
    border-radius: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    box-shadow: 0px 10px 60px 0px rgba(0, 0, 0, 0.03);
    margin-top: 16px;
    background-color: white;
    span {
      display: flex;
      align-content: center;
      text-align: center;
      p {
        margin: 0;
        margin-left: 8px;
        padding: 0;
        font-family: Manrope;
        font-size: 16px;
        font-weight: 600;
        line-height: 22.4px;
        text-align: left;

      }
    }
  }
  .deals {
    margin-top: 32px;
  }
  .deals__filter {
    display: flex;
    justify-content: space-between;
    margin: 0;
    p {
      font-family: SF Pro Display;
      font-size: 16px;
      font-weight: 500;
      line-height: 22.4px;
      text-align: left;
      color: rgba(130, 130, 130, 1);
      margin: 0;
    }
    a {
      font-family: SF Pro Display;
      font-size: 16px;
      font-weight: 500;
      line-height: 22.4px;
      text-align: left;
      text-decoration: none;
      color: rgba(170, 76, 224, 1);
    }
  }
  .deals__main {
    background-color: white;
    margin-top: 12px;
    padding: 8px 16px;
    ul {
      padding: 0;
      margin: 0;
      li {
        font-family: SF Pro Display;
        list-style-type: none;
        font-weight: 500;
        line-height: 19.6px;
        text-align: left;
        font-size: 14px;
        margin-top: 4px;
      }
    }
  }

</style>
