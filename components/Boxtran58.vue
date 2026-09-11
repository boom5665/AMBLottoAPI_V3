<template>
  <div style="">
    <div type="primary" class="box-r-scoll">
      <div>
        <div class="font-prim"><span>Code Transfer</span></div>
      </div>

      <div class="col-12" id="tabFour">
        <div>
          <b style="color: #19a17a !important">5.8
            <span style="padding-left: 3px" id="withdrawal">
              Outstanding</span></b>
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
           &lt;Url&gt;/apiRoute/api/outstanding
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
        </div>
      </div>
      <div class="koh-faq-answer col-12">
        <copy-text id="myDiv">
          <pre>
    <code style="border-radius: 0.375rem;" class="hljs json">
{
  <span class="hljs-attr">"agentUsername"</span>: <span class="hljs-string">"agenttoe2"</span>,
  <span class="hljs-attr">"agentApiKey"</span>: <span class="hljs-string">"&lt;agentApiKey&gt;"</span>,
  <span class="hljs-attr">"playerUsername"</span>: <span class="hljs-string">"testlog0012"</span>
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
          </div>
        </div>

        <div class="koh-faq-answer col-12">

          <pre>
    <code style="border-radius: 0.375rem;" class="hljs json">
{
  <span class="hljs-attr">"code"</span>: <span class="hljs-number">0</span>,
  <span class="hljs-attr">"msg"</span>: {
    <span class="hljs-attr">"th"</span>: <span class="hljs-string">"สำเร็จ"</span>,
    <span class="hljs-attr">"en"</span>: <span class="hljs-string">"Success"</span>
  },
  <span class="hljs-attr">"data"</span>: {
    <span class="hljs-attr">"totalOutstanding"</span>: <span class="hljs-number">12500</span>,
    <span class="hljs-attr">"currency"</span>: <span class="hljs-string">"thb"</span>,
    <span class="hljs-attr">"list"</span>: {
      <span class="hljs-attr">"lotto"</span>: [
        {
          <span class="hljs-attr">"gameId"</span>: <span class="hljs-string">"government"</span>,
          <span class="hljs-attr">"outstanding"</span>: <span class="hljs-number">8000</span>
        },
        {
          <span class="hljs-attr">"gameId"</span>: <span class="hljs-string">"hanoi_vip"</span>,
          <span class="hljs-attr">"outstanding"</span>: <span class="hljs-number">1000</span>
        },
        {
          <span class="hljs-attr">"gameId"</span>: <span class="hljs-string">"yeekee"</span>,
          <span class="hljs-attr">"outstanding"</span>: <span class="hljs-number">3500</span>
        }
      ]
    }
  }
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
      URLdata: "<Url>/apiRoute/api/outstanding", // กำหนดค่าเริ่มต้นของ agentUsername
      code: "",
      totalOutstanding: "",
      currency: "",
      msg: "",
    };
  },
  beforeCreate() { },
  mounted() {
    const json = {
      agentUsername: "agenttoe2",
      agentApiKey: "<agentApiKey>",
      playerUsername: "testlog0012",
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
      }
    },
  },
  methods: {
    closeAndClear() {
      this.URLdata = "<Url>/apiRoute/api/outstanding";
      this.isLoading = false;
      this.pop = false;
      this.response = null;
      this.success = "";
      this.code = null;
      this.numfail = null;
      this.msg = "";
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

          this.$axios
            .post(URL, dataToSend)
            .then((response) => {
              this.response = response.data;
              console.log("Sending JSON serv:", this.response);
              if (this.response.code === 0 || this.response.code === 200) {
                this.success = "Successful operation.";
                this.code = this.response.code;
                this.numfail = this.code;
                this.msg = this.response.msg;
                this.totalOutstanding = this.response.data.totalOutstanding;
                this.currency = this.response.data.currency;
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
          console.error("Invalid JSON format:", error);
          alert("กรุณากรอกข้อมูล JSON ที่ถูกต้อง");
          this.pop = false;
          this.isLoading = false;
        }
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
