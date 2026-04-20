<template>
  <div style="">
    <div type="primary" class="box-r-scoll">
      <div>
        <div class="font-prim"><span>Code Transfer</span></div>
      </div>
  
      <div class="col-12" id="tabFour">
        <div>
          <b style="color: #19a17a !important">5.10
            <span style="padding-left: 3px" id="withdrawal">
              Member Report List</span></b>
        </div>
      </div>
      <div class="divBox">
        <div class="col-12">
          <label class="txtHead">Method : </label>
          <label>Post</label>
        </div>
        <div class="col-12">
          <label class="txtHead">Url : </label>
          <label>
           https://test-api.askmelotto.vip/apiRoute/api/depositWithdrawHistory
          </label>
        </div>
        <div class="col-12">
          <label class="txtHead"> headers : </label>
          <label> content-type application/json </label>
        </div>

      </div>
      <div class="koh-faq-question form-group ex">
        <div class="Point">
          <b style="color: #19a17a !important" set-lan="text:Example Request Body">Example Request Body</b>
          <i class="fa fa-chevron-down" aria-hidden="true" style="margin-left: 2%; font-size: 1rem"></i>
          <!-- <div class="btn-send">
            <a href="#openModal-about">
              <button class="custom-btn btn-13" @click="get_Transfer">
                Send Code
              </button></a
            >
          </div> -->
        </div>
      </div>
      <div class="koh-faq-answer col-12">
        <copy-text id="myDiv">
          <pre>
    <code id="47B" style="border-radius: 0.375rem;" class="hljs json">
{
  <span class="hljs-attr">"agentUsername"</span>: <span class="hljs-string">"agenttoe2"</span>,
  <span class="hljs-attr">"agentApiKey"</span>: <span class="hljs-string">"90c1f92bf298eeedf29ddea95681f56c7b707ec32368f820e01270d2bf9cda8b"</span>,
  <span class="hljs-attr">"ref"</span>: <span class="hljs-string">"1e85bf651d85c6267d59948b979ab262b336909e"</span>
}
    </code>
  </pre>
        </copy-text>
      </div>
      <div>
        <div class="koh-faq-question form-group ex">
          <div class="Point">
            <b style="color: #19a17a !important" set-lan="text:Example Request Body">Example Response Code</b>
            <i class="fa fa-chevron-down" aria-hidden="true" style="margin-left: 2%; font-size: 1rem"></i>
            <!-- <div class="btn-send">
            <button class="custom-btn btn-13">Send Code</button>
          </div> -->
          </div>
        </div>

        <div class="koh-faq-answer col-12">

          <pre>
    <code id="47B" style="border-radius: 0.375rem;" class="hljs json">
{
  <span class="hljs-attr">"code"</span>: <span class="hljs-number">0</span>,
  <span class="hljs-attr">"data"</span>: {
    <span class="hljs-attr">"playerApiId"</span>: <span class="hljs-string">"798e898d5ca3f7ab8aca1cca11bb91c96914b1cf"</span>,
    <span class="hljs-attr">"playerApiUsername"</span>: <span class="hljs-string">"testuserapi5@agenttoe2"</span>,
    <span class="hljs-attr">"playerUsername"</span>: <span class="hljs-string">"testuserapi5"</span>,
    <span class="hljs-attr">"ref"</span>: <span class="hljs-string">"1e85bf651d85c6267d59948b979ab262b336909e"</span>,
    <span class="hljs-attr">"transferAmount"</span>: <span class="hljs-number">300</span>,
    <span class="hljs-attr">"transferDate"</span>: <span class="hljs-string">"2026-04-17 13:18:22"</span>,
    <span class="hljs-attr">"type"</span>: <span class="hljs-string">"DEPOSIT"</span>
  },
  <span class="hljs-attr">"msg"</span>: <span class="hljs-string">"success"</span>
}
    </code>
  </pre>

        </div>
      </div>

    </div>
  </div>
</template>

<script>
import CopyText from "~/components/CopyText.vue";
export default {
  components: {
    CopyText,
  },
  name: "BoxSem56",
  data() {
    return {
      success: "",
      nosuccess: "",
      permission: "",
      numfail: "",
      isLoading: false, // กำหนดให้แสดง "Loading..." ในเริ่มต้น
      pop: false, // กำหนดให้แสดง "Loading..." ในเริ่มต้น
      jsonData: "", // ข้อมูล JSON ที่จะส่งไปยังเซิร์ฟเวอร์
      URLdata: "https://test-api.askmelotto.vip/api/v2/fe/get_balance", // กำหนดค่าเริ่มต้นของ agentUsername
      code: "",
      addBalance: "",
      afterAgentBalance: "",
      afterMemberBalance: "",
      beforeAgentBalance: "",
      beforeMemberBalance: "",
      playerApiId: "", // กำหนดค่าเริ่มต้นของ agentUsername
      playerApiUsername: "",
      playerUsername: "",
      msg: "",
    };
  },
  beforeCreate() { },
  mounted() {
    // this.get_Seamless();
    const json = {
      agentUsername: "agenttoe2",
      agentApiKey:
        "90c1f92bf298eeedf29ddea95681f56c7b707ec32368f820e01270d2bf9cda8b",
      playerUsername: "testuserapi001",
      balance: 300,
      transId: "25f0c27dbea3f32s61f2cd6612676125127126761216541276519",
    };

    // ใช้ JSON.stringify() เพื่อจัดรูปแบบ JSON แล้วกำหนดให้ jsonData เป็นค่าที่จัดรูปแบบแล้ว
    this.jsonData = JSON.stringify(json, null, 2);
  },
  watch: {
    jsonData(newValue) {
      try {
        const formattedJson = JSON.stringify(JSON.parse(newValue), null, 2);
        this.jsonData = formattedJson;
      } catch (error) {
        console.error("Invalid JSON format:", error);
        // ดำเนินการต่อไปตามที่ต้องการ เช่น แสดงข้อความแจ้งเตือนหรือดำเนินการอื่น ๆ
      }
    },
  },
  methods: {
    closeAndClear() {
      // รีเซ็ตค่าตัวแปรต่างๆ ใน component
      // this.jsonData = '';

      this.URLdata = "https://test-api.askmelotto.vip/api/v2/fe/get_balance";
      this.isLoading = false;
      this.pop = false;
      this.response = null;
      this.success = "";
      this.code = null;
      this.numfail = null;
      this.msg = "";
      this.playerApiId = "";
      this.playerApiUsername = "";
      this.playerUsername = "";
      this.url = "";
      this.urlFullPage = "";
      this.tkUuid = "";
      this.permission = "";
      this.nosuccess = "";
    },

    get_Transfer() {
      alert("Send code clicked!");
      if (this.jsonData) {
        this.isLoading = true;
        this.pop = true;
        this.isLoading = true;
        try {
          const dataToSend = JSON.parse(this.jsonData);
          const URL = this.URLdata;
          console.log("URL", URL);
          // เรียกใช้ axios หรือวิธีการส่งข้อมูลไปยังเซิร์ฟเวอร์ที่คุณใช้งาน
          // ตัวอย่าง:

          this.$axios
            .post(URL, dataToSend)
            .then((response) => {
              // ตอบกลับจากเซิร์ฟเวอร์
              this.response = response.data;
              console.log("Sending JSON serv:", this.response);
              if (this.response.code === 0 || this.response.code === 200) {
                this.success = "Successful operation.";
                this.code = this.response.code;
                this.numfail = this.code; // กำหนดค่า success ให้เป็น "SUCCESS"
                this.msg = this.response.msg;
                this.addBalance = this.response.data.addBalance;
                this.afterAgentBalance = this.response.data.afterAgentBalance;
                this.afterMemberBalance = this.response.data.afterMemberBalance;
                this.beforeAgentBalance = this.response.data.beforeAgentBalance;
                this.beforeMemberBalance =
                  this.response.data.beforeMemberBalance;
                this.playerApiId = this.response.data.playerApiId;
                this.playerApiUsername = this.response.data.playerApiUsername;
                this.playerUsername = this.response.data.playerUsername;
                this.ref = this.response.data.ref;
              } else if (this.response.code === 403) {
                this.permission = "Permission denied.";
                this.numfail = "403";
              } else if (this.response.code === 401) {
                this.numfail = "401";
                this.permission = "Authentication Failed.";
              } else if (this.response.code === 404) {
                this.permission = "Not Found.";
                this.numfail = "404";
              } else if (this.response.code === 405) {
                this.permission = "Method Not Allowed.";
                this.numfail = "405";
              } else if (this.response.code === 406) {
                this.permission = "Not Acceptable";
                this.numfail = "406";
              } else if (this.response.code === 407) {
                this.permission = "Proxy Authentication Required";
                this.numfail = "407 ";
              } else if (this.response.code === 408) {
                this.permission = "Request Timeout";
                this.numfail = "408";
              } else if (this.response.code === 500) {
                this.permission = "Server error.";
                this.numfail = "500";
              } else if (this.response.code === 501) {
                this.permission = "Not Implemented";
                this.numfail = "501";
              } else if (this.response.code === 502) {
                this.permission = "Bad Gateway";
                this.numfail = "502";
              } else if (this.response.code === 503) {
                this.permission = "Server error.";
                this.numfail = "503";
              } else if (this.response.code === 999) {
                this.permission = "Server error.";
                this.numfail = "999";
              } else {
                this.nosuccess = "Bad Request.";
                this.numfail = "400";
              }
              this.isLoading = false;
            })
            .catch((error) => {
              // จัดการข้อผิดพลาด
              console.log(error);
              if (error.response) {
                const statusCode = error.response.status;
                switch (statusCode) {
                  case 403:
                    this.permission = "Permission denied.";
                    this.numfail = "403";
                    break;
                  case 401:
                    this.permission = "Authentication Failed.";
                    this.numfail = "401";
                    break;
                  case 404:
                    this.permission = "Not Found.";
                    this.numfail = "404";
                    break;
                  case 405:
                    this.permission = "Method Not Allowed.";
                    this.numfail = "405";
                    break;
                  case 406:
                    this.permission = "Not Acceptable";
                    this.numfail = "406";
                    break;
                  case 407:
                    this.permission = "Proxy Authentication Required";
                    this.numfail = "407";
                    break;
                  case 500:
                    this.permission = "Server error.";
                    this.numfail = "500";
                    break;
                  case 501:
                    this.permission = "Not Implemented";
                    this.numfail = "501";
                    break;
                  case 502:
                    this.permission = "Bad Gateway";
                    this.numfail = "502";
                    break;
                  case 503:
                    this.permission = "Service Unavailable";
                    this.numfail = "503";
                    break;
                  case 999:
                    this.permission = "Out of service.";
                    this.numfail = "999";
                    break;
                  default:
                    this.nosuccess = "Bad Request.";
                    this.numfail = "400";
                }
              } else {
                this.nosuccess = "Bad Request.";
                this.numfail = "400";
              }
              this.isLoading = false;
            });
        } catch (error) {
          // กรณีที่ข้อมูล JSON ไม่ถูกต้อง
          console.error("Invalid JSON format:", error);
          alert("กรุณากรอกข้อมูล JSON ที่ถูกต้อง");
          this.pop = false;
          this.isLoading = false;
        }
        // สำหรับเนื้อหาทดสอบ
        // console.log("Sending JSON data:", dataToSend);
      } else if (this.URLdata) {
        alert("กรุณากรอก URL ที่นี่");
        this.pop = false;
      } else {
        alert("กรุณากรอก Request ที่นี่");
        this.pop = false;
      }
    },
  },
};
</script>
