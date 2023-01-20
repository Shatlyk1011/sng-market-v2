<template>
  <div class="hero">
    <div class="container">
      <div class="img-container"></div>
      <div class="content">
        <div class="title">
          Lorem, ipsum dolor sit amet consectetur adipisicing.
        </div>
        <div class="subtitle">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. At error
          sequi alias rerum officia laboriosam!
        </div>

        <div class="search">
          <div class="input">
            <img src="../../assets/icons/search.svg" alt="" />
            <input type="text" placeholder="Яблоко, бананы, виноград..." />
          </div>
          <button class="btn btn-search">Поиск фркутов...</button>
        </div>

        <div class="stats">
          <div class="stat">
            <div class="num">2,442</div>
            <div class="text">lorem2</div>
          </div>
          <div class="stat">
            <div class="num">2,442</div>
            <div class="text">lorem2</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


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

.hero {
  // height: 100vh;

  .container {
    min-height: 75rem;
    padding: 0 6rem;
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    justify-content: center;

    .img-container {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      //bg
      filter: brightness(0.5);
      background: rgb(242, 242, 242);
      background: radial-gradient(
          circle,
          rgba(0, 0, 0, 0.4) 40%,
          rgba(0, 0, 0, 0.6) 100%
        ),
        url("../../assets/bg-3.jpg");
      z-index: -1;
      background-position: bottom;
      background-size: cover;
      object-fit: cover;
    }
    .content {
      position: relative;
      justify-self: center;
      text-align: center;
      margin-top: 4.8rem;
      width: 55rem;
      .title {
        font-family: $SSP;
        font-weight: 700;
        letter-spacing: -0.1rem;
        font-size: 4.8rem;
        line-height: 1.2;
        color: $white;
      }
      .subtitle {
        color: rgba($white, 0.8);
        font-weight: 400;
        font-family: $roboto;
        margin-top: 2.4rem;
      }

      .search {
        display: flex;
        flex-direction: column;
        margin-top: 4.8rem;

        .input {
          background-color: $white;
          display: flex;
          padding: 1.2rem 1.8rem;
          gap: 1rem;
          border-top-right-radius: 2px;
          border-top-left-radius: 2px;

          img {
          }

          input {
            border: none;
            outline: none;
            width: 100%;

            &::placeholder {
              font-family: $roboto;
              letter-spacing: 1px;
            }
          }
        }
        .btn-search {
          text-transform: uppercase;
          padding: 1.2rem 1.8rem;
          border: none;
          outline: none;
          color: $white;
          font-size: 1.28rem;
          background-color: $main-dark-1;
          transition: all 0.3s cubic-bezier(0.65, 0, 0.35, 1);

          &:hover {
            background-color: $main-dark-2;
          }
        }
      }
      .stats {
        display: flex;
        justify-content: center;
        gap: 2.4rem;
        justify-content: space-around;
        margin-top: 6.4rem;

        .stat {
          display: flex;
          flex-direction: column;
          gap: 0;
          .num {
            color: $white;
            font-weight: 600;
            font-size: 3.125rem;
            line-height: 1.2;
            letter-spacing: -0.1rem;
          }
          .text {
            font-weight: 300;
            font-size: 1.4rem;
            color: $white;
          }
        }
      }
    }
  }
}
</style>