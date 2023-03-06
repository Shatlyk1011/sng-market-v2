<template>
  <Teleport to="body">
    <div class="ausmodal">
      <div class="container">
        <div class="icon-wrap">
          <ion-icon class="icon" name="alert-circle-outline"></ion-icon>
        </div>
        <h3>Удалить {{ productName }}?</h3>
        <p>Вы уверены что хотите удалить этот продукт?</p>

        <div class="btns">
          <button @click="$emit('handleClose')" class="btn btn--cancel">
            Отмена
          </button>
          <button @click="$emit('handleDelete')" class="btn btn--delete">
            Удалить
          </button>
        </div>
      </div>
      <div class="blur"></div>
    </div>
  </Teleport>
</template>

<script>
export default {
  name: "AUSModal",

  setup() {},
};
</script>

<style lang="scss">
$main-light-1: #d9975c;
$main-light-2: #ab825f;
$main-dark-1: #455445;
$main-dark-2: #1e281e;
$text: #181f29;
$white: #fff;

$roboto: "Roboto Mono", monospace;
$SSP: "Source Sans Pro", sans-serif;

.ausmodal {
  .container {
    width: 40rem;
    display: flex;
    flex-direction: column;
    padding: 2.4rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 100;
    background-color: #fff;
    box-shadow: 0px 20px 24px -4px rgba(16, 24, 40, 0.08),
      0px 8px 8px -4px rgba(16, 24, 40, 0.03);
    border-radius: 12px;

    .icon-wrap {
      position: absolute;
      &::before {
        content: "";
        position: absolute;
        width: 3.2rem;
        height: 3.2rem;
        top: 40%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 100%;
        background-color: rgba(#d92d20, 0.15);
        z-index: -1;
      }
      &::after {
        content: "";
        position: absolute;
        width: 4.8rem;
        height: 4.8rem;
        top: 40%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 100%;
        background-color: rgba(#d92d20, 0.1);
        z-index: -1;
      }
      .icon {
        width: 2.4rem;
        height: 2.4rem;
        color: #d92d20;
        padding: 0;
        margin: 0;
        z-index: 9999;
      }
    }

    h3 {
      font-size: 2rem;
      font-weight: 500;
      margin: 4.8rem 0 1.2rem;
    }

    p {
      color: $main-dark-1;
      margin-bottom: 3.2rem;
      font-family: $SSP;
      letter-spacing: 0.2px;
    }

    .btns {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;

      .btn {
        padding: 1rem 6rem;
        border-radius: 8px;
        font-weight: 500;
        transition: all 0.2s linear;
        font-family: $SSP;
        font-weight: 500;
        font-size: 1.4rem;

        &:active {
          transform: translateY(2px) scale(0.97);
        }

        &--cancel {
          border: 1px solid $main-dark-1;
          background-color: #fff;
        }
        &--delete {
          background-color: #d92d20;
          color: #fff;

          &:hover {
            background-color: rgba(#d92d20, 0.8);
          }
        }
      }
    }
  }

  .blur {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 120vh;
    background-color: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(6px);
    z-index: 99;
  }
}
</style>