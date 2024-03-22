<!-- Please remove this file from your project -->
<template>
  <div class="box-intro" style="display: flex">
    <div class="">
      <div class="col-12" id="tab3">
        <div>
          <h1>
            <b style="color: #19a17a !important" set-lan="text:5.3 Setting"
              >5.3
              <span style="padding-left: 3px" id="tran_Setting5"
                >Setting</span
              ></b
            >
          </h1>
        </div>
      </div>

      <div class="btn-toolbar mb-3" role="toolbar">
        <div class="form-group col-12">
          <label set-lan="html:0. *"
            >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            *หากคุณมีบัญชีหลัก โปรดสร้างบัญชีตัวแทน API
            ภายใต้บัญชีหลักของคุณและเข้าสู่ระบบด้วยบัญชีตัวแทน API
            ที่สร้างขึ้นก่อน แล้วทำตามขั้นตอนการตั้งค่า ดังนี้

          </label>
 <div>
            <label set-lan="html:1.	Login"
              >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1.เข้าสู่ระบบ</label
            >
          </div>

          <div class="col-12">
            <img
              src="~/assets/image/Login001.png"
              style="width: 30%; margin-left: 10%"
            />
          </div>
          <div class="pb-5"></div>
          <label set-lan="html:2.	Click"
            >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            2.คลิกเมนูบัญชีและเลือกเมนูโปรไฟล์</label
          >
          <div class="col-12">
            <img
              src="~/assets/image/2.png"
              style="width: 80%; margin-left: 10%"
            />
          </div>
          <div class="pb-5"></div>
          <label id="tabZero" set-lan="html:4. Define"
            >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3.กำหนดข้อมูล
            API ต่อไปนี้</label
          >
          <div class="col-12">
            <label set-lan="html:4.1 You can"
              >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              3.1 Key ใช้สำหรับ auten login</label
            >
          </div>
          <div class="col-12">
            <label set-lan="html:4.2 You can"
              >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              3.2 คุณสามารถคลิกปุ่ม “บันทึก” เพื่อบันทึกข้อมูล</label
            >
          </div>
          <div class="col-12">
            <img
              src="~/assets/image/4.png"
              style="width: 80%; margin-left: 10%"
            />
          </div>
        </div>
      </div>
      <div class="pb-5"></div>

    </div>
  </div>
</template>

<script>
export default {
  name: "Comtranfer",
};
</script>
