
<template>
  <div style="">
    <div type="primary" class="box-r-scoll">
      <div>
        <div class="font-prim"><span>Code Seamless</span></div>
      </div>
      <div class="col-12" id="tabFour">
        <div>
          <b style="color: #19a17a !important" set-lan="text:4.4 login request"
            >4.4
            <span style="padding-left: 3px" id="Seamless_login_request"
              >Login request</span
            ></b
          >
        </div>
      </div>
      <div class="divBox" style="margin-left: 0%">
        <div class="col-12">
          <label class="txtHead">Method : </label>
          <label>Post</label>
        </div>
        <div class="col-12">
          <label class="txtHead"> Url : </label>
          <label>
            https://test-api.askmelotto.vip/apiRoute/member/loginRequest
          </label>
        </div>
        <div class="col-12">
          <label class="txtHead"> headers : </label>
          <label> content-type application/json </label>
        </div>
      </div>

      <div class="col-12" id="tabSix" style="left: 5px">
        <div>
          <b
            style="color: #19a17a !important"
            set-lan="text:4.5.1 GetUserBalance"
          >
            <span style="padding-left: 3px" id="Seamless_GetUserDetail"
              >Input Your URL
            </span></b
          >
        </div>
      </div>

      <div class="boxinput">
        <div class="false-input">
          <input
            type="text"
            v-model="URLdata"
            placeholder="Please enter your URLhere."
          />
        </div>
      </div>

      <div class="col-12" id="tabSix" style="left: 5px; padding-top: 10px">
        <div>
          <b
            style="color: #19a17a !important"
            set-lan="text:4.5.1 GetUserBalance"
          >
            <span style="padding-left: 3px" id="Seamless_GetUserDetail"
              >Input Your Request body</span
            ></b
          >
        </div>
      </div>
      <div class="koh-faq-answer col-12">
        <code>
          <textarea
            v-model="jsonData"
            rows="10"
            cols="50"
            class="custom-textarea"
          >
          </textarea>
        </code>
      </div>

      <div class="koh-faq-question form-group ex">
        <div class="Point">
          <b
            style="color: #19a17a !important"
            set-lan="text:Example Request Body"
            >Example Request Body</b
          >
          <i
            class="fa fa-chevron-down"
            aria-hidden="true"
            style="margin-left: 2%; font-size: 1rem"
          ></i>

          <div class="btn-send">
            <a id="myLink" href="#openModal-about">
              <button class="custom-btn btn-13" @click="get_Seamless">
                Send Code
              </button></a
            >
          </div>
        </div>
      </div>
      <div>
        <div class="koh-faq-answer col-12 test">
          <copy-text id="myDiv">
            <pre>

                                        <code id="3_4A" style="border-radius: 0.375rem;" class="hljs json">{
    <span class="hljs-attr">"agentUsername"</span>: <span class="hljs-string">"handsome"</span>,
    <span class="hljs-attr">"agentApiKey"</span>: <span class="hljs-string">"099e9bd891a689d7fb3c6dea5c21c461b0a5d09c7b64a73b5c6a6a91caffd130"</span>,
    <span class="hljs-attr">"playerUsername"</span>: <span class="hljs-string">"member1"</span>
}</code></pre>
          </copy-text>
        </div>
      </div>
      <div>
        <div class="koh-faq-question form-group ex">
          <div class="Point">
            <b
              style="color: #19a17a !important"
              set-lan="text:Example Request Body"
              >Example Service Response Code
            </b>
            <i
              class="fa fa-chevron-down"
              aria-hidden="true"
              style="margin-left: 2%; font-size: 1rem"
            ></i>
          </div>
        </div>
        <div class="section">
          <div class="slide">
            <div class="koh-faq-answer col-12">
              <pre>

                                        <code id="3_4B" style="border-radius: 0.375rem;width: 100% !important;" class="hljs json">{
    <span class="hljs-attr">"code"</span>: <span class="hljs-number">0</span>,
    <span class="hljs-attr">"data"</span>: {
        <span class="hljs-attr">"playerApiId"</span>: <span class="hljs-string">"85e6041148d44880338d625674a51c4ea0afce5108c28590ae2ef62bb265d819"</span>,
        <span class="hljs-attr">"playerApiUsername"</span>: <span class="hljs-string">"member1@handsome"</span>,
        <span class="hljs-attr">"playerUsername"</span>: <span class="hljs-string">"member1"</span>,
        <span class="hljs-attr">"tkUuid"</span>: <span class="hljs-string">"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MTU2NzU4MzMsImlkIjoibWVtYmVyMUBoYW5kc29tZSIsInJhbmRvbSI6Im9tR2pqVHJkWGZINkdYTzRPMThwbGc9PSJ9.AjEHdf7HCYZSYhibXq6uuzjb3oLtf_dqasGJgcYkJ3I"</span>,
        <span class="hljs-attr">"url"</span>: <span class="hljs-string">"https://test.askmelotto1.com/seamless?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MTU2NzU4MzMsImlkIjoibWVtYmVyMUBoYW5kc29tZSIsInJhbmRvbSI6Im9tR2pqVHJkWGZINkdYTzRPMThwbGc9PSJ9.AjEHdf7HCYZSYhibXq6uuzjb3oLtf_dqasGJgcYkJ3I"</span>,
        <span class="hljs-attr">"urlFullPage"</span>: <span class="hljs-string">"https://test.askmelotto1.com/seamless?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MTU2NzU4MzMsImlkIjoibWVtYmVyMUBoYW5kc29tZSIsInJhbmRvbSI6Im9tR2pqVHJkWGZINkdYTzRPMThwbGc9PSJ9.AjEHdf7HCYZSYhibXq6uuzjb3oLtf_dqasGJgcYkJ3I"</span>
    },
    <span class="hljs-attr">"mgs"</span>: <span class="hljs-string">"Success"</span>
}</code></pre>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="divBox-content">
          <div v-if="success" class="dis-colum-center">
            <div class="box-respon">
              <div class="pdd-top">RESPONSE</div>
              <div class="pdd-top">
                <button class="buton-suscess"></button> Code
                {{ numfail }}&nbsp;&nbsp;
              </div>
            </div>
            <div class="padding-content">
              <span>
                <button class="buton-suscess"></button> {{ numfail }}
              </span>
              {{ success }}
            </div>
          </div>
          <div v-else-if="nosuccess" class="dis-colum-center">
            <div class="box-respon">
              <div class="pdd-top">RESPONSE</div>
              <div class="pdd-top">
                <button class="buton-fail"></button> Code
                {{ numfail }}&nbsp;&nbsp;
              </div>
            </div>
            <div class="padding-content">
              <span> <button class="buton-fail"></button> {{ numfail }} </span>
              {{ nosuccess }}
            </div>
          </div>
          <div v-else-if="permission" class="dis-colum-center">
            <div class="box-respon">
              <div class="pdd-top">RESPONSE</div>
              <div class="pdd-top">
                <button class="buton-fail"></button> Code
                {{ numfail }}&nbsp;&nbsp;
              </div>
            </div>
            <div class="padding-content">
              <span> <button class="buton-fail"></button> {{ numfail }} </span>
              {{ permission }}
            </div>
          </div>
          <div v-else>
            <div class="box-respon">
              <div class="pdd-top">RESPONSE</div>
              <div class="pdd-top">Example</div>
            </div>
            <div class="padding-content">
              Click Send Code to start a request and see the response here! Or
              choose an example: application/json
              <span> <button class="buton-suscess"></button> 200 </span>
            </div>
          </div>
        </div>
      </div>

      <!-- <a href="#openModal-about">Send Success</a> -->
      <!--modals-->
      <div id="openModal-about" v-if="pop" class="modalDialog">
        <div>
          <a href="#close" @click="closeAndClear" title="Close" class="close"
            >X</a
          >

          <div>
            <div class="font-prim"><span>Code Seamless</span></div>
          </div>

          <div class="koh-faq-question form-group ex">
            <div class="Point">
              <b
                style="color: #19a17a !important"
                set-lan="text:Example Request Body"
              >
                Your Request Body
              </b>
              <i
                class="fa fa-chevron-down"
                aria-hidden="true"
                style="margin-left: 2%; font-size: 1rem"
              ></i>
            </div>
          </div>
          <div class="koh-faq-answer col-12">
            <code>
              <textarea
                v-model="jsonData"
                rows="10"
                cols="50"
                class="custom-textarea"
              >
              </textarea>
            </code>
          </div>

          <div>
            <div class="koh-faq-question form-group ex">
              <div class="Point">
                <b
                  style="color: #19a17a !important"
                  set-lan="text:Example Request Body"
                >
                  Your Service Response Code
                </b>
                <i
                  class="fa fa-chevron-down"
                  aria-hidden="true"
                  style="margin-left: 2%; font-size: 1rem"
                ></i>
              </div>
            </div>
            <div v-if="success">
              <div class="section">
                <div class="slide">
                  <div class="koh-faq-answer col-12">
                    <pre>

                                        <code id="3_4B" style="border-radius: 0.375rem;width: 100% !important;" class="hljs json">{
    <span class="hljs-attr">"code"</span>: <span class="hljs-number">{{ code }}</span>,
    <span class="hljs-attr">"data"</span>: {
        <span class="hljs-attr">"playerApiId"</span>: <span class="hljs-string">{{playerApiId }}</span>,
        <span class="hljs-attr">"playerApiUsername"</span>: <span class="hljs-string">{{ playerApiUsername}}</span>,
        <span class="hljs-attr">"playerUsername"</span>: <span class="hljs-string">{{playerUsername }}</span>,
        <span class="hljs-attr">"tkUuid"</span>: <span class="hljs-string">{{ tkUuid}}</span>,
        <span class="hljs-attr">"url"</span>: <span class="hljs-string">{{url }}</span>,
        <span class="hljs-attr">"urlFullPage"</span>: <span class="hljs-string">{{ urlFullPage}}</span>
    },
    <span class="hljs-attr">"mgs"</span>: <span class="hljs-string">{{msg}}</span>
}</code></pre>
                  </div>
                </div>
              </div>
            </div>

            <div v-else-if="nosuccess">
              <div class="koh-faq-answer col-12">
                <pre>

                                        <code id="351B" style="border-radius: 0.375rem;" class="hljs json">{
    <span class="hljs-attr">"code"</span>: <span class="hljs-number">{{numfail}}</span>,
        <span class="hljs-attr">"mgs"</span>: <span class="hljs-string">{{ nosuccess }}</span>
}</code></pre>
              </div>
            </div>
            <div v-else-if="permission">
              <div class="koh-faq-answer col-12">
                <pre>

                                        <code id="351B" style="border-radius: 0.375rem;" class="hljs json">{
    <span class="hljs-attr">"code"</span>: <span class="hljs-number">{{numfail}}</span>,
        <span class="hljs-attr">"mgs"</span>: <span class="hljs-string">{{ permission }}</span>
}</code></pre>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- <button @click="sendJsonData">Send JSON Data</button> -->
      <div class="loading" v-if="isLoading">Loading...</div>
    </div>
  </div>
</template>

<script>
import CopyText from "~/components/CopyText.vue";
export default {
  components: {
    CopyText,
  },
  name: "BoxSem44",
  data() {
    return {
      success: "",
      nosuccess: "",
      permission: "",
      numfail: "",
      code: "",
      playerApiId: "",
      playerApiUsername: "",
      playerUsername: "",
      url: "",
      urlFullPage: "",
      tkUuid: "",
      msg: "",
      isLoading: false, // กำหนดให้แสดง "Loading..." ในเริ่มต้น
      pop: false, // กำหนดให้แสดง "Loading..." ในเริ่มต้น
      jsonData: "", // ข้อมูล JSON ที่จะส่งไปยังเซิร์ฟเวอร์
      URLdata: "https://test-api.askmelotto.vip/apiRoute/member/loginRequest", // กำหนดค่าเริ่มต้นของ agentUsername
    };
  },
  beforeCreate() {},
  mounted() {
    const json = {
      agentUsername: "handsome",
      agentApiKey:
        "099e9bd891a689d7fb3c6dea5c21c461b0a5d09c7b64a73b5c6a6a91caffd130",
      playerUsername: "member1",
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
      this.URLdata =
        "https://test-api.askmelotto.vip/apiRoute/member/loginRequest";
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
    get_Seamless() {
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
                this.playerApiId = this.response.data.playerApiId;
                this.playerApiUsername = this.response.data.playerApiUsername;
                this.playerUsername = this.response.data.playerUsername;
                this.url = this.response.data.url;
                this.urlFullPage = this.response.data.urlFullPage;
                this.tkUuid = this.response.data.tkUuid;
                this.code = this.response.code;
                this.numfail = this.code;
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

