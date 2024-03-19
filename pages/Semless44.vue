<!-- Please remove this file from your project -->
<template>
  <div class="box-sem" >
    <div class="col-12 M-pading-none"><ComSemless44 /></div>
  </div>
</template>

<script>
export default {
  name: "Semless44",
};
</script>


<style scoped>
/* CSS สำหรับโมดัล */
.modal {
  display: none; /* ซ่อนโมดัลเริ่มต้น */
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0,0,0,0.4); /* สีพื้นหลังโมดัล */
}

/* สไตล์ของเนื้อหาในโมดัล */
.modal-content {
  background-color: #fefefe;
  margin: 15% auto; /* ตำแหน่งของโมดัล */
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
}

/* ปุ่มปิดโมดัล */
.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
</style>
