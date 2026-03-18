<template>
  <div class="scale-wrapper">
    <Header />
    <div class="box-cotent">
      <div class="box-Navbar">
        <Navbar />
      </div>

      <div class="W-default">
        <div></div>
        <LanguageDropdown />

        <div style="display: flex; width: 100%">
          <img class="img" src="~/assets/image/Banner3.jpg" alt="" />
        </div>

        <div style="display: flex; width: 100%">
          <div style="width: 100%; background-color: rgba(0, 0, 0, 0.08)">
            <Nuxt />
          </div>
        </div>
      </div>
    </div>

    <!-- <Footer /> -->
  </div>
</template>

<script>
import Header from "~/components/Navbars/Header.vue";
import Footer from "~/components/Navbars/Footer.vue";
import Navbar from "~/components/Navbars/Navbar.vue";
import LanguageDropdown from '~/components/LanguageDropdown.vue'

export default {
  name: "default",
  components: {
    Header,
    Footer,
    Navbar,
    LanguageDropdown
  },
};
</script>
