<!-- Please remove this file from your project -->
<template>
  <div class="nav-pc">
    <div class="logo">
      <img class="con-box-two-img" style="margin: 0 !important" src="~/assets/image/logo.png" alt="" />
    </div>
    <header class="nav-header">
      <div class="left-menu">
        <div class="accordion">
          <div class="section">
            <input id="section-1" type="radio" name="accordion-1" checked="checked" />

            <ul>
              <Nuxt-link class="text-nav " to="/">
                <li class="underline">
                  <svg class="svg-doc" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">

                    <path
                      d="M64 464c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16H224v80c0 17.7 14.3 32 32 32h80V448c0 8.8-7.2 16-16 16H64zM64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V154.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0H64zm56 256c-13.3 0-24 10.7-24 24s10.7 24 24 24H264c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24H264c13.3 0 24-10.7 24-24s-10.7-24-24-24H120z" />
                  </svg>1. Introduction
                </li>
              </Nuxt-link>
              <Nuxt-link class="text-nav" to="/version">
                <li class="underline">
                  <svg class="svg-doc" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">

                    <path
                      d="M64 464c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16H224v80c0 17.7 14.3 32 32 32h80V448c0 8.8-7.2 16-16 16H64zM64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V154.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0H64zm56 256c-13.3 0-24 10.7-24 24s10.7 24 24 24H264c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24H264c13.3 0 24-10.7 24-24s-10.7-24-24-24H120z" />
                  </svg>2. Version
                </li>
              </Nuxt-link>
            </ul>

            <!-- <label for="section-1"><span>Lottotype</span></label>
            <div class="content">
              <ul>
                <Nuxt-link class="text-nav" to="/Lottotype">
                  <li>
                    <span>Lotto type </span>
                  </li></Nuxt-link
                >
              </ul>
            </div> -->
          </div>
          <div class="section">
            <input id="section" type="radio" name="accordion-1" value="toggle" />
            <label for="section" class="underline">
              <span><svg class="svg-doc" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">

                  <path
                    d="M64 464c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16H224v80c0 17.7 14.3 32 32 32h80V448c0 8.8-7.2 16-16 16H64zM64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V154.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0H64zm56 256c-13.3 0-24 10.7-24 24s10.7 24 24 24H264c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24H264c13.3 0 24-10.7 24-24s-10.7-24-24-24H120z" />
                </svg>3. Lottotype</span></label>
            <div class="content">
              <ul>
                <Nuxt-link class="text-nav" to="/Lottotype" target="_self">
                  <li>
                    <span>3.1 Key Type</span>
                  </li>
                </Nuxt-link>
              </ul>
              <ul>
                <Nuxt-link class="text-nav" to="/keytype">
                  <li>
                    <span>3.2 Key Sub Type </span>
                  </li>
                </Nuxt-link>
              </ul>
            </div>
          </div>
          <div class="section">
            <input id="section-2" type="radio" name="accordion-1" value="toggle" />
            <label for="section-2" class="underline">
              <span><svg class="svg-doc" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">

                  <path
                    d="M64 464c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16H224v80c0 17.7 14.3 32 32 32h80V448c0 8.8-7.2 16-16 16H64zM64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V154.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0H64zm56 256c-13.3 0-24 10.7-24 24s10.7 24 24 24H264c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24H264c13.3 0 24-10.7 24-24s-10.7-24-24-24H120z" />
                </svg>4. Seamless API</span></label>
            <div class="content">
              <ul>
                <Nuxt-link class="text-nav" to="/Seamless">
                  <li>
                    <span>4.1 Introduction Seamless API</span>
                  </li>
                </Nuxt-link>
                <Nuxt-link class="text-nav" to="/Seamless42">
                  <li>
                    <span>4.2 Workflow </span>
                  </li>
                </Nuxt-link>
                <Nuxt-link class="text-nav" to="/Seamless43">
                  <li>
                    <span>4.3 Setting</span>
                  </li>
                </Nuxt-link>
                <Nuxt-link class="text-nav" to="/Seamless44">
                  <li>
                    <span>4.4 Login request </span>
                  </li>
                </Nuxt-link>
                <Nuxt-link class="text-nav" to="/Seamless45">
                  <li>
                    <span>4.5 Call Back Service </span>
                  </li>
                </Nuxt-link>
                <Nuxt-link class="text-nav" to="/Seamless45">
                  <li>
                    <span>4.5.1 GetUserDetail </span>
                  </li>
                </Nuxt-link>
                <Nuxt-link class="text-nav" to="/Seamless452">
                  <li>
                    <span>4.5.2 GetUserBalance </span>
                  </li>
                </Nuxt-link>
                <Nuxt-link class="text-nav" to="/Seamless453">
                  <li>
                    <span>4.5.3 UserPlaceBet </span>
                  </li>
                </Nuxt-link>
                <Nuxt-link class="text-nav" to="/Seamless454">
                  <li>
                    <span>4.5.4 UserPlaceBetCancel </span>
                  </li>
                </Nuxt-link>
                <Nuxt-link class="text-nav" to="/Seamless455">
                  <li>
                    <span>4.5.5 UserPlacePayout </span>
                  </li>
                </Nuxt-link>
                <Nuxt-link class="text-nav" to="/Seamless456">
                  <li>
                    <span>4.5.6 UserPlaceReToRunning </span>
                  </li>
                </Nuxt-link>
                <!-- <Nuxt-link class="text-nav" to="/Seamless46">
                  <li>
                    <span>4.6 ListPlaceout </span>
                  </li>
                </Nuxt-link> -->
                <!-- <Nuxt-link class="text-nav" to="/Seamless47">
                  <li>
                    <span style="word-break: break-all"
                      >4.6 ListHotnumberandLimitnumber
                    </span>
                  </li>
                </Nuxt-link>
                <Nuxt-link class="text-nav" to="/Seamless48">
                  <li>
                    <span>4.7 Detail </span>
                  </li>
                </Nuxt-link> -->
              </ul>
            </div>
          </div>
          <div class="section">
            <input id="section-3" type="radio" name="accordion-1" value="toggle" />
            <label for="section-3" class="underline">
              <span><svg class="svg-doc" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">

                  <path
                    d="M64 464c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16H224v80c0 17.7 14.3 32 32 32h80V448c0 8.8-7.2 16-16 16H64zM64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V154.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0H64zm56 256c-13.3 0-24 10.7-24 24s10.7 24 24 24H264c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24H264c13.3 0 24-10.7 24-24s-10.7-24-24-24H120z" />
                </svg>5. Transferwallet API</span></label>
            <div class="content">
              <ul>
                <Nuxt-link class="text-nav" to="/Transferwallet">
                  <li>5.1 Introduction Transferwallet API</li>
                </Nuxt-link>

                <Nuxt-link class="text-nav" to="/Transferwallet52">
                  <li>
                    <span>5.2 Workflow</span>
                  </li>
                </Nuxt-link>
                <ul>
                  <Nuxt-link class="text-nav" to="/Transferwallet53">
                    <li>
                      <span>5.3 Setting</span>
                    </li>
                  </Nuxt-link>
                </ul>
                <ul>
                  <Nuxt-link class="text-nav " to="/Transferwallet54">
                    <li>
                      <span>5.4 login request</span>
                    </li>
                  </Nuxt-link>
                </ul>
                <ul>
                  <Nuxt-link class="text-nav" to="/Transferwallet55">
                    <li>
                      <span>5.5 Deposit</span>
                    </li>
                  </Nuxt-link>
                  <Nuxt-link class="text-nav" to="/Transferwallet56">
                    <li>
                      <span>5.6 Withdrawal</span>
                    </li>
                  </Nuxt-link>
                </ul>
              </ul>
            </div>
          </div>
          <div class="section">
            <input id="section-4" type="radio" name="accordion-1" value="toggle" />
            <label for="section-4" class="underline">
              <span><svg class="svg-doc" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">

                  <path
                    d="M64 464c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16H224v80c0 17.7 14.3 32 32 32h80V448c0 8.8-7.2 16-16 16H64zM64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V154.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0H64zm56 256c-13.3 0-24 10.7-24 24s10.7 24 24 24H264c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24H264c13.3 0 24-10.7 24-24s-10.7-24-24-24H120z" />
                </svg>6. Sevice response Code</span></label>
            <div class="content">
              <ul>
                <Nuxt-link class="text-nav" to="/Sevice">
                  <li>6.1 Member Authen</li>
                </Nuxt-link>
                <Nuxt-link class="text-nav" to="/Sevice">
                  <li>
                    <span>6.2 Service response</span>
                  </li>
                </Nuxt-link>
              </ul>
            </div>
          </div>
          <div class="section">
            <input id="section-5" type="radio" name="accordion-1" value="toggle" />
            <label for="section-5" class="underline">
              <span><svg class="svg-doc" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">

                  <path
                    d="M64 464c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16H224v80c0 17.7 14.3 32 32 32h80V448c0 8.8-7.2 16-16 16H64zM64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V154.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0H64zm56 256c-13.3 0-24 10.7-24 24s10.7 24 24 24H264c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24H264c13.3 0 24-10.7 24-24s-10.7-24-24-24H120z" />
                </svg>7. Currencies</span></label>
            <div class="content">
              <ul>
                <Nuxt-link class="text-nav" to="/Currencies">
                  <li>7.1 Currencies</li>
                </Nuxt-link>
              
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style lang="scss" scoped>
@mixin transition($trans...) {
  -webkit-transition: $trans;
  -moz-transition: $trans;
  -ms-transition: $trans;
  transition: $trans;
}

@mixin noselect() {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -o-user-select: none;
  user-select: none;
}

$color: #043e35;
$toggle-background: gray;
$toggle-background-active: lighten($toggle-background, 8);

.accordion {
  color: $color;
  width: 100%;

  .section {
    width: 100%;

    input[type="radio"] {
      display: none;

      &:checked {
        &+label {
          // background: #fff;

          &:before {
            content: " ";
            position: absolute;
            border-left: 3px solid #043e35;
            height: 100%;
            left: 0;
          }
        }

        &~.content {
          max-height: 300px;
          opacity: 1;
          z-index: 10;
          overflow-y: auto;
        }
      }
    }

    label {
      font-size: 14px;
      position: relative;
      cursor: pointer;
      padding: 10px 10px 0px 10px;
      display: table;
      // background: #fff;
      width: -webkit-fill-available;
      word-break: break-all;
      @include transition(background 0.3s ease-in-out);
      @include noselect();

      &:before {
        content: " ";
        width: 100%;
        position: absolute;
        left: 0;
        top: 0;
        height: 1px;
        // border-top: 1px solid #fff;
      }

      &:hover {
        background: $toggle-background-active;
        font-weight: 700;
        color: $color;
      }

      span {
        display: table-cell;
        vertical-align: middle;
        padding: 0px 0px;
      }
    }

    &:last-of-type {
      border-bottom: 1px solid #fff;
    }

    .content {
      max-height: 0;
      @include transition(all 0.4s);
      opacity: 0;
      position: relative;
      overflow-y: hidden;
    }
  }
}

.left-menu {
  background: #fff;
  width: 100%;
  position: relative;
  top: 25px;
  bottom: 0;
  font-size: 14px;
}

.accordion {
  font-size: 16px;

  .section {
    .content {
      padding: 0 15px;
    }

    input[type="radio"] {
      display: none;

      &:checked {
        &~.content {
          padding: 0px 10px;
        }
      }
    }
  }
}

ul {
  width: 100%;
  padding: 0;
  margin: 0;
  list-style: none;

  li {
    padding: 5px 10px;

    i {
      font-size: 13px;
      width: 15px;
      margin-right: 15px;
    }

    &:hover {
      cursor: pointer;
      color: $color;
      font-weight: 700;
      background: $toggle-background-active;
    }
  }
}

.underline {
  border: none;
  /* ลบเส้นขอบ */
  border-bottom: 1px solid #ced4da;
  /* เพิ่มเส้นใต้ */
  padding: 8px;
  /* ระยะห่าง */
  color: #333;
  /* สีข้อความ */
  outline: none;
  /* ลบเส้นขอบเมื่อคลิก */
}
</style>
