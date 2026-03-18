<template>
  <div class="lang-wrapper">
    <!-- ปุ่ม -->
    <div class="lang-btn" @click="toggle">
      <img :src="currentFlag" class="flag" />
      <span class="lang-text">{{ currentLang }}</span>
    </div>

    <!-- ✅ Overlay -->
    <div v-if="open" class="overlay" @click="close"></div>

    <!-- dropdown -->
    <div v-if="open" class="lang-dropdown">
      <div class="title">Select Language</div>

      <div class="item" @click="changeLang('en')">
        <img src="~/assets/flags/en.svg" class="flag-se" />
        English
      </div>

      <div class="item" @click="changeLang('th')">
        <img src="~/assets/flags/th.svg" class="flag-se" />
        ภาษาไทย
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      open: false,
    };
  },

  computed: {
    currentFlag() {
      return this.$i18n.locale === "th"
        ? require("~/assets/flags/th.svg")
        : require("~/assets/flags/en.svg");
    },
    currentLang() {
      return this.$i18n.locale === "th" ? "ภาษาไทย" : "English";
    },
  },

  methods: {
    toggle() {
      this.open = !this.open;
    },
    close() {
      this.open = false;
    },
    changeLang(lang) {
      this.$i18n.setLocale(lang);
      this.open = false;
    },
  },
};
</script>

<style scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3); /* ปรับความเข้มได้ */
  z-index: 99999;
}
.lang-wrapper {
  position: relative;
}

.lang-btn {
  cursor: pointer;
}

.lang-dropdown {
  position: absolute;
  top: 80px;
  right: 50px;
  background: #008f6c !important;
  border-radius: 10px;
  width: 200px;
  /* padding: 10px; */
  color: white;
  z-index: 100000;
}

.title {
  text-align: center;
  font-weight: bold;
  padding: 10px;
  margin-bottom: 0;
}

.item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  cursor: pointer;
}

.item:hover {
  background: rgba(255, 255, 255, 0.1);
}
.flag {
  background: #008f6c !important;
  width: 40px;
  height: 40px;
  padding: 5px;
  border-radius: 5px;
  margin: 0;
}
.flag-se {
  width: 24px;
  height: 24px;
  position: absolute;
  right: 10px;
}
.lang-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  position: absolute;
  right: 50px;
  padding: 8px;
  top: 20px;
    background-color: #043E35;
  border-radius: 5px;
  flex-direction: row;
  width: max-content;
}

.lang-text {
  font-weight: bold;
  color: white;
    font-size: 16px;
}
</style>
