<template>
  <div class="call-to-action">
    <div class="container">
      <div class="cta">
        <div class="cta__heading">Lorem ipsum dolor sit amet.</div>
        <div class="cta__subtitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At quo
          temporibus illo dignissimos autem aperiam!
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
            <label for="options">Выберите вариант</label>
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
      <img
        class="img"
        src="https://images.unsplash.com/photo-1602020277972-99978250c8bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
        alt=""
      />
    </div>
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

/* 
  FONTS: 
  font-family: 'Roboto Mono', monospace;
  font-family: 'Source Sans Pro', sans-serif;
*/

/* FONT-SIZES:
4.768rem/76.29px,
3.815rem/61.04px
3.052rem/48.83px,
2.441rem/39.06px,
1.953rem/31.25px,
1.563rem/25.00px,
1.25rem/20.00px,
1rem/16.00px,
0.8rem/12.80px,
0.64rem/10.24px,
0.512rem/8.19px
 */
.call-to-action {
  padding: 0 12rem 4.8rem;
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
      &__heading {
        color: $white;
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
        margin-top: 3.2rem;

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
            box-shadow: 0 0 0 4px rgba($main-light-2, 0.6);
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
          }
        }
      }
    }
    .img {
      width: 23%;

      filter: brightness(0.8);
      background: linear-gradient();
    }
  }
}
</style>