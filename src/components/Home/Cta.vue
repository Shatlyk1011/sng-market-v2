<template>
  <div class="call-to-action">
    <div class="container">
      <div class="cta">
        <div class="cta__heading">Мы предлагаем сотрудничество</div>
        <div class="cta__subtitle">
          Для долгосрочного сотрудничества пожалуйста оставьте свои данные. Мы с
          вами свяжемся в лижайшее время!
        </div>

        <div class="form">
          <div>
            <label for="name" class="label">Полное имя:</label>
            <input id="name" type="text" placeholder="Ваше имя..." required />
          </div>

          <div>
            <label for="name" class="label">Email адрес:</label>
            <input id="name" type="text" placeholder="anton@mail.ru" required />
          </div>
          <div>
            <label for="options">Тип интересующего товара:</label>
            <select id="options">
              <option value="">Выберите:</option>
              <option value="Овощи">Овощи</option>
              <option value="Фрукты">Фрукты</option>
              <option value="Сухофрукты">Сухофрукты</option>
            </select>
          </div>

          <button class="btn">Отправить заявку!</button>
        </div>
      </div>
      <img class="img" src="../../assets/cta-bg.jpg" alt="" />
    </div>
    <div class="bg"></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
$main-light-1: #d9975c;
$main-light-2: #ab825f;
$main-dark-1: #455445;
$main-dark-2: #1e281e;
$text: #181f29;
$white: #fff;

$roboto: "Roboto Mono", monospace;
$SSP: "Source Sans Pro", sans-serif;

.call-to-action {
  padding: 4.8rem;
  position: relative;
  .container {
    margin: 0 auto;
    border-radius: 10px;
    max-width: 100rem;
    background-color: $main-dark-1;
    display: flex;
    overflow: hidden;
    .cta {
      width: 100%;
      padding: 2.4rem 3.2rem;
      height: 100%;
      &__heading {
        color: $main-light-1;
        font-size: 3.125rem;
        font-weight: 600;
        font-family: $SSP;
      }

      &__subtitle {
        color: $white;
        font-family: $roboto;
        font-size: 1.6rem;
        font-weight: 500;
      }

      .form {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1.6rem;
        margin-top: 4.8rem;

        div {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        label {
          color: $white;
          font-family: $SSP;
          font-weight: 600;
          font-size: 1.4rem;
        }
        input,
        select {
          padding: 1rem 1.2rem;
          outline: none;
          border: none;
          border-radius: 6px;

          &::placeholder {
            font-size: 1.28rem;
            font-weight: 500;
            font-family: $SSP;
          }

          &:focus {
            box-shadow: 0 0 0 4px rgba($main-light-2, 0.3);
          }
        }
        select {
          font-size: 1.28rem;
          font-family: $roboto;
          option {
          }
        }
        .btn {
          font-size: 1.28rem;
          font-family: $roboto;
          font-weight: 600;
          align-self: end;
          padding: 1rem 1.2rem;
          outline: none;
          border: none;
          border-radius: 6px;
          background-color: $main-light-1;
          transition: all 0.3s cubic-bezier(0.65, 0, 0.35, 1);

          &:hover {
            background-color: $main-light-2;
            color: $white;
          }
          &:active {
            transform: translateY(3px) scale(0.97);
          }
        }
      }
    }
    .img {
      width: 30%;

      filter: brightness(0.8);
      background: linear-gradient();
    }
  }

  .bg {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    margin: auto;
    background-color: #ffffff;
    opacity: 0.05;
    background: repeating-linear-gradient(
      -45deg,
      $main-dark-2,
      $main-dark-2 8px,
      #ffffff 8px,
      #ffffff 40px
    );
    z-index: -1;
  }
}
</style>