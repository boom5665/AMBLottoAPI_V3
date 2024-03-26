<template>
  <div>
    <div :id="elementId">
      <slot></slot>
    </div>

    <div class="">
      <div @click="copyText" class="copy-clipboard">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <title>Copy to Clipboard</title>
          <path
            d="M18 6v-6h-18v18h6v6h18v-18h-6zm-12 10h-4v-14h14v4h-10v10zm16 6h-14v-14h14v14z"
          ></path>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    elementId: {
      type: String,
      default: "myDiv", // รับค่า id ของ div ที่มีข้อความที่ต้องการคัดลอก
    },
  },
  methods: {
    copyText() {
      // เลือกข้อความใน div และคัดลอกไปยังคลิปบอร์ด
      const textToCopy = document.getElementById(this.elementId).innerText;

      // สร้าง element input สำหรับคัดลอกข้อความ
      const inputElement = document.createElement("input");
      inputElement.setAttribute("value", textToCopy);
      document.body.appendChild(inputElement);

      // เลือกและคัดลอกข้อความที่อยู่ใน input element
      inputElement.select();
      document.execCommand("copy");

      // ลบ input element ที่สร้างขึ้น
      document.body.removeChild(inputElement);

      // แสดงข้อความแจ้งเตือนหลังจากคัดลอกสำเร็จ
      alert("คัดลอกเนื้อหาเรียบร้อยแล้ว");
    },
  },
};
</script>

<style>
.copy-clipboard {
  width: 20px;
  position: absolute;
  top: 10px;
  left: 90%;
  cursor: pointer;
}
svg:hover {
  fill: gray;
}
</style>
