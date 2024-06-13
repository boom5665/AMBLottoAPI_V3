<!-- Please remove this file from your project -->
<template>
  <div class="box-sem">
    <div class="col-12">
      <div class="box-intro">
        <div class="col-12">
          <div class="font-prim">1. Introduction The API Service</div>
          <div>
            The API Service
            สร้างขึ้นเพื่อให้ผู้ใช้งานเข้าถึงเงื่อนไขสำหรับการทำงาน เช่น
            ฟังก์ชันการจัดการสมาชิก ฟังก์ชันการจัดการรายงาน
            ฟังก์ชันการจัดการสต๊อกและฟังก์ชันการชำระเงิน
            เอกสารนี้มีรายละเอียดสำหรับการเข้าถึงบริการการขยาย API ของระบบ
          </div>
        </div>
      </div>
      <div class="box-intro">
        <div class="col-12">
          <div class="font-prim">Askmelotto Integration Form</div>

          <a
            href="AMBLOTTOVIP_integration_form.docx"
            download
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="15"
              width="15"
              viewBox="0 0 512 512"
              style="position: relative; top: -3px; left: -3px ;fill: rgb(47, 128, 237);"
            >
              <path
                d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"
              /></svg
            >Download File</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Introduction",
  methods: {
    downloadFile() {
      // สร้าง URL สำหรับไฟล์ที่ต้องการดาวน์โหลด
      const fileUrl = "/path/to/your/file.json";
      // สร้างอิงค์ที่เชื่อมโยงไปยังไฟล์
      const link = document.createElement("a");
      link.href = fileUrl;
      // กำหนด attribue download เพื่อให้ไฟล์ถูกดาวน์โหลดเมื่อคลิก
      link.download = "filename.json";
      // เรียกคำสั่งคลิกลิงก์ที่สร้างขึ้น
      link.click();
    },
  },
};
</script>

<style>
</style>
