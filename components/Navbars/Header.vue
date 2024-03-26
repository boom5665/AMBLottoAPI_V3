<!-- Please remove this file from your project -->
<template>
  <div class="nav-mobile">
    <header class="header">
      <!-- <div class="logo">
        <img
          class="con-box-two-img"
          style="margin: 0 !important"
          src="~/assets/image/logo.png"
          alt=""
        />
      </div> -->
      <div class="burger-fix"></div>
      <input class="menu-btn" type="checkbox" id="menu-btn" />
      <label class="menu-icon" for="menu-btn"
        ><span class="navicon"></span
      ></label>
      <ul class="menu">
        <div class="pd-left">
          <Nuxt-link class="text-nav" to="/"
            ><li class="">
              <svg
                class="svg-doc"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                <path
                  d="M64 464c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16H224v80c0 17.7 14.3 32 32 32h80V448c0 8.8-7.2 16-16 16H64zM64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V154.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0H64zm56 256c-13.3 0-24 10.7-24 24s10.7 24 24 24H264c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24H264c13.3 0 24-10.7 24-24s-10.7-24-24-24H120z"
                /></svg
              >1. Introduction
            </li></Nuxt-link
          >
        </div>
        <div class="pd-left">
          <Nuxt-link class="text-nav" to="/version"
            ><li>
              <svg
                class="svg-doc"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                <path
                  d="M64 464c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16H224v80c0 17.7 14.3 32 32 32h80V448c0 8.8-7.2 16-16 16H64zM64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V154.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0H64zm56 256c-13.3 0-24 10.7-24 24s10.7 24 24 24H264c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24H264c13.3 0 24-10.7 24-24s-10.7-24-24-24H120z"
                /></svg
              >2. Version
            </li></Nuxt-link
          >
        </div>
        <section>
          <details class="pd-left">
            <summary>
              <svg
                class="svg-doc"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                <path
                  d="M64 464c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16H224v80c0 17.7 14.3 32 32 32h80V448c0 8.8-7.2 16-16 16H64zM64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V154.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0H64zm56 256c-13.3 0-24 10.7-24 24s10.7 24 24 24H264c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24H264c13.3 0 24-10.7 24-24s-10.7-24-24-24H120z"
                /></svg
              >3. Lottotype
            </summary>
            <Nuxt-link class="text-nav" to="/Lottotype" target="_self">
              <li>
                <span>3.1 Key Type</span>
              </li>
            </Nuxt-link>
            <Nuxt-link class="text-nav" to="/keytype">
              <li>
                <span>3.2 Key Sub Type </span>
              </li>
            </Nuxt-link>
          </details>
        </section>
        <section>
          <details class="pd-left">
            <summary>
              <svg
                class="svg-doc"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                <path
                  d="M64 464c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16H224v80c0 17.7 14.3 32 32 32h80V448c0 8.8-7.2 16-16 16H64zM64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V154.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0H64zm56 256c-13.3 0-24 10.7-24 24s10.7 24 24 24H264c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24H264c13.3 0 24-10.7 24-24s-10.7-24-24-24H120z"
                /></svg
              >4. Seamless API
            </summary>
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

            <Nuxt-link class="text-nav" to="/Seamless46">
              <li>
                <span>4.6 ListPlaceout </span>
              </li>
            </Nuxt-link>
            <Nuxt-link class="text-nav" to="/Seamless47">
              <li>
                <span style="word-break: break-all"
                  >4.7 ListHotnumberandLimitnumber
                </span>
              </li>
            </Nuxt-link>
            <Nuxt-link class="text-nav" to="/Seamless48">
              <li>
                <span>4.8 Detail </span>
              </li>
            </Nuxt-link>
          </details>
        </section>
        <section>
          <details class="pd-left">
            <summary>
              <svg
                class="svg-doc"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                <path
                  d="M64 464c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16H224v80c0 17.7 14.3 32 32 32h80V448c0 8.8-7.2 16-16 16H64zM64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V154.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0H64zm56 256c-13.3 0-24 10.7-24 24s10.7 24 24 24H264c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24H264c13.3 0 24-10.7 24-24s-10.7-24-24-24H120z"
                /></svg
              >5. Tranferswallet API
            </summary>
            <Nuxt-link class="text-nav" to="/Tranferswallet">
              <li>5.1 Introduction Transferwallet API</li></Nuxt-link
            >
            <Nuxt-link class="text-nav" to="/Tranferswallet52">
              <li>
                <span>5.2 Workflow</span>
              </li>
            </Nuxt-link>
            <Nuxt-link class="text-nav" to="/Tranferswallet53">
              <li>
                <span>5.3 Setting</span>
              </li>
            </Nuxt-link>
            <Nuxt-link class="text-nav" to="/Tranferswallet54">
              <li>
                <span>5.4 login request</span>
              </li>
            </Nuxt-link>
            <Nuxt-link class="text-nav" to="/Tranferswallet55">
              <li>
                <span>5.5 Deposit</span>
              </li>
            </Nuxt-link>
            <Nuxt-link class="text-nav" to="/Tranferswallet56">
              <li>
                <span>5.6 Withdrawal</span>
              </li>
            </Nuxt-link>
          </details>
        </section>
        <section>
          <details class="pd-left">
            <summary>
              <svg
                class="svg-doc"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                <path
                  d="M64 464c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16H224v80c0 17.7 14.3 32 32 32h80V448c0 8.8-7.2 16-16 16H64zM64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V154.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0H64zm56 256c-13.3 0-24 10.7-24 24s10.7 24 24 24H264c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24H264c13.3 0 24-10.7 24-24s-10.7-24-24-24H120z"
                /></svg
              >6. Sevice Respone Code
            </summary>
            <Nuxt-link class="text-nav" to="/Sevice"
              ><li>6.1 Member Authen</li></Nuxt-link
            >
            <Nuxt-link class="text-nav" to="/Sevice">
              <li>
                <span>6.2 Service Respone</span>
              </li>
            </Nuxt-link>
          </details>
        </section>
      </ul>
    </header>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>


<style lang="scss" scoped>
ul li {
  padding: 3px 10px;
  font-size: 17px;
}
a {
  color: #000;
}
.pd-left {
  padding-left: 20px;
}
/* header */

.header {
  // background-color: #fff;
  // box-shadow: 1px 1px 4px 0 rgba(0,0,0,.1);
  position: fixed;
  width: 100%;
  z-index: 3;
}

.header ul {
  margin: 0;
  padding: 0;
  list-style: none;
  overflow: hidden;
  background-color: #fff;
}

.header li a {
  display: block;
  padding: 20px 20px;
  border-right: 1px solid #f4f4f4;
  text-decoration: none;
}

.header li a:hover,
.header .menu-btn:hover {
  background-color: #f4f4f4;
}

/* menu */

.header .menu {
  clear: both;
  max-height: 0;
  transition: max-height 0.2s ease-out;
}

/* menu icon */

.header .menu-icon {
  cursor: pointer;
  display: inline-block;
  float: right;
  padding: 28px 20px;
  position: relative;
  user-select: none;
}

.header .menu-icon .navicon {
  background: green;
  display: block;
  height: 3px;
  position: relative;
  transition: background 0.2s ease-out;
  width: 20px;
}

.header .menu-icon .navicon:before,
.header .menu-icon .navicon:after {
  background: rgb(25, 161, 122) !important;
  content: "";
  display: block;
  height: 100%;
  position: absolute;
  transition: all 0.2s ease-out;
  width: 100%;
}

.header .menu-icon .navicon:before {
  top: 5px;
}

.header .menu-icon .navicon:after {
  top: -5px;
}

/* menu btn */

.header .menu-btn {
  display: none;
}

.header .menu-btn:checked ~ .menu {
  max-height: 3000px;
  padding: 30px;
}

.header .menu-btn:checked ~ .menu-icon .navicon {
  background: transparent;
}

.header .menu-btn:checked ~ .menu-icon .navicon:before {
  transform: rotate(-45deg);
}

.header .menu-btn:checked ~ .menu-icon .navicon:after {
  transform: rotate(45deg);
}

.header .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:before,
.header .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:after {
  top: 0;
}

/* 48em = 768px */

@media (min-width: 51em) {
  .header li {
    float: left;
  }
  .header li a {
    padding: 20px 30px;
  }
  .header .menu {
    clear: none;
    float: right;
    max-height: none;
  }
  .header .menu-icon {
    display: none;
  }
}

section {
  // padding-top: 4rem;
  width: 90%;
  margin-left: 10px;
}

details[open] summary ~ * {
  animation: open 0.3s ease-in-out;
}

@keyframes open {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
details summary::-webkit-details-marker {
  display: none;
}

details summary {
  width: 100%;
  padding: 0.5rem 0;
  position: relative;
  cursor: pointer;
  font-size: 1rem;
  list-style: none;
  color: black;
}

details summary:after {
  content: "+";
  color: rgb(25, 161, 122) !important;
  position: absolute;
  font-size: 1rem;
  line-height: 0;
  margin-top: 0.75rem;
  right: 0;
  font-weight: 200;
  transform-origin: center;
  transition: 200ms linear;
}
details[open] summary:after {
  transform: rotate(45deg);
  font-size: 2rem;
}
details summary {
  outline: 0;
}
details p {
  font-size: 0.95rem;
  margin: 0 0 1rem;
  padding-top: 1rem;
}
</style>
