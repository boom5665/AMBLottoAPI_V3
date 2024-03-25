
<template>
  <div style="">
    <div type="primary" class="box-r-scoll">
      <div>
        <div class="font-prim"><span>Code Semless</span></div>
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
            https://test-api.askmelotto.com/apiRoute/member/loginRequest
          </label>
        </div>
        <div class="col-12">
          <label class="txtHead"> headers : </label>
          <label> content-type application/json </label>
        </div>
      </div>
      <!-- <div class="boxinput">
        <div class="false-input">
          <input
            type="text"
            v-model="agentUsername"
            placeholder="Agent Username"
          />
        </div>
        <div class="false-input">
          <input
            type="text"
            v-model="agentApiKey"
            placeholder="Agent API Key"
          />
        </div>
      </div> -->
      <div class="boxinput">
        <div class="false-input">
          <input type="text" v-model="URLdata" placeholder="URL" />
        </div>
      </div>
      <div class="koh-faq-answer col-12">
        <code>
          <textarea
            v-model="jsonData"
            rows="8"
            class="custom-textarea"
            placeholder="กรุณากรอกข้อความที่นี่"
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
          <button @click="copyDiv">คัดลอก</button>
          <div class="btn-send">
            <a id="myLink" href="#openModal-about">
              <button class="custom-btn btn-13" @click="get_semless">
                Send Code
              </button></a
            >
          </div>
        </div>
      </div>
      <div>
        <div class="koh-faq-answer col-12 test">
          <pre id="myDiv">

                                        <code id="3_4A" style="border-radius: 0.375rem;" class="hljs json">{
    <span class="hljs-attr">"agentUsername"</span>: <span class="hljs-string">"sportbookv2"</span>,
    <span class="hljs-attr">"agentApiKey"</span>: <span class="hljs-string">"29d09af218b716963c79a0d58c20d5e47211f65e456af68ee81687af4fa50fba"</span>,
    <span class="hljs-attr">"playerUsername"</span>: <span class="hljs-string">"testa0alottoviptesttong"</span>
}</code></pre>
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
          <a href="#close" title="Close" class="close">X</a>
          <div>
            <div class="font-prim"><span>Code Semless</span></div>
          </div>
          <div>
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
              </div>
            </div>
            <div>
              <div class="koh-faq-answer col-12 test">
                <pre>

                                        <code id="3_4A" style="border-radius: 0.375rem;width: 100% !important;" class="hljs json">{
    <span class="hljs-attr">"agentUsername"</span>: <span class="hljs-string">"sportbookv2"</span>,
    <span class="hljs-attr">"agentApiKey"</span>: <span class="hljs-string">"29d09af218b716963c79a0d58c20d5e47211f65e456af68ee81687af4fa50fba"</span>,
    <span class="hljs-attr">"playerUsername"</span>: <span class="hljs-string">"testa0alottoviptesttong"</span>
}</code></pre>
              </div>
            </div>
          </div>
          <div>
            <div class="koh-faq-question form-group ex">
              <div class="Point">
                <b
                  style="color: #19a17a !important"
                  set-lan="text:Example Request Body"
                  >Example Reponse
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
        <span class="hljs-attr">"playerApiId"</span>: <span class="hljs-string">"4e4fbb4539fb0b7bd1d6b01a7f218cc08e7ed2e3ae953d40437a4015092fd3ea5ca691e85b6bc323b3e468e1dbfdd8ae"</span>,
        <span class="hljs-attr">"playerApiUsername"</span>: <span class="hljs-string">"testa0alottoviptesttong@sportbookv2"</span>,
        <span class="hljs-attr">"playerUsername"</span>: <span class="hljs-string">"testa0alottoviptesttong"</span>,
        <span class="hljs-attr">"tkUuid"</span>: <span class="hljs-string">"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MTA0MTA4MzEsImlkIjoidGVzdGEwYWxvdHRvdmlwdGVzdHRvbmdAc3BvcnRib29rdjIiLCJyYW5kb20iOiJ5N0ZrcXV6Qkd0bVBsQXpjRVlaRjJRPT0ifQ.QP_u3DY-OjfaYGUQoiV7ontTedGdJqyf1gLQfdL1p7k"</span>,
        <span class="hljs-attr">"url"</span>: <span class="hljs-string">"https://test.askmelotto.com/seamless?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MTA0MTA4MzEsImlkIjoidGVzdGEwYWxvdHRvdmlwdGVzdHRvbmdAc3BvcnRib29rdjIiLCJyYW5kb20iOiJ5N0ZrcXV6Qkd0bVBsQXpjRVlaRjJRPT0ifQ.QP_u3DY-OjfaYGUQoiV7ontTedGdJqyf1gLQfdL1p7k"</span>,
        <span class="hljs-attr">"urlFullPage"</span>: <span class="hljs-string">"https://test.askmelotto.com/seamless?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MTA0MTA4MzEsImlkIjoidGVzdGEwYWxvdHRvdmlwdGVzdHRvbmdAc3BvcnRib29rdjIiLCJyYW5kb20iOiJ5N0ZrcXV6Qkd0bVBsQXpjRVlaRjJRPT0ifQ.QP_u3DY-OjfaYGUQoiV7ontTedGdJqyf1gLQfdL1p7k"</span>
    },
    <span class="hljs-attr">"mgs"</span>: <span class="hljs-string">"Success"</span>
}</code></pre>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div class="koh-faq-question form-group ex">
              <div class="Point">
                <b
                  style="color: #19a17a !important"
                  set-lan="text:Example Request Body"
                >
                  Reponse
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
export default {
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
      URLdata: "", // กำหนดค่าเริ่มต้นของ agentUsername
      // agentApiKey:
      //   "", // กำหนดค่าเริ่มต้นของ agentApiKey
      // playerUsername: "", // กำหนดค่าเริ่มต้นของ playerUsername
    };
  },
  beforeCreate() {},
  mounted() {},
  watch: {},
  methods: {
    // get_semless() {
    //   alert("Send code clicked!");
    //   this.isLoading = true;
    //   this.pop = true;
    //   this.isLoading = true;

    //   var senduser = {
    //     // agentUsername: "top1betvip", // กำหนดค่าเริ่มต้นของ agentUsername
    //     // agentApiKey:
    //     //   "95b1b602d7d4929e48593af7d96fbe79c615a10b91a9411423c5ca04ae073d11", // กำหนดค่าเริ่มต้นของ agentApiKey
    //     // playerUsername: "AALFLFLFLF000005", // กำหนดค่าเริ่มต้นของ playerUsername
    //     agentUsername: "sportbookv2",
    //     agentApiKey:
    //       "29d09af218b716963c79a0d58c20d5e47211f65e456af68ee81687af4fa50fba",
    //     playerUsername: "testa0alottoviptesttong",

    //     // agentUsername: this.agentUsername,
    //     // agentApiKey: this.agentApiKey,
    //     // playerUsername: this.playerUsername,
    //   };
    //   const URL =
    //     "https://test-api.askmelotto.com/apiRoute/member/loginRequest";
    //   this.$axios
    //     .$post(URL, senduser)
    //     .then((response) => {
    //       console.log(response.code === 0);
    //       if (response.code === 0 || response.code === 200) {
    //         this.success = "Successful operation.";
    //         this.code = response.code;
    //         this.numfail = this.code; // กำหนดค่า success ให้เป็น "SUCCESS"
    //         this.msg = response.msg;
    //         this.playerApiId = response.data.playerApiId;
    //         this.playerApiUsername = response.data.playerApiUsername;
    //         this.playerUsername = response.data.playerUsername;
    //         this.url = response.data.url;
    //         this.urlFullPage = response.data.urlFullPage;
    //         this.tkUuid = response.data.tkUuid;
    //         this.code = response.code;
    //         this.numfail = this.code;
    //       } else if (response.code === 403) {
    //         this.permission = "Permission denied.";
    //         this.numfail = "403";
    //       } else if (response.code === 401) {
    //         this.numfail = "401";
    //         this.permission = "Authentication Failed.";
    //       } else if (response.code === 404) {
    //         this.permission = "Not Found.";
    //         this.numfail = "404";
    //       } else if (response.code === 405) {
    //         this.permission = "Method Not Allowed.";
    //         this.numfail = "405";
    //       } else if (response.code === 500) {
    //         this.permission = "Server error.";
    //         this.numfail = "500";
    //       } else {
    //         this.nosuccess = "Bad Request.";
    //         this.numfail = "400";
    //       }
    //       this.isLoading = false;
    //     })
    //     .catch((error) => {
    //       if (error.response) {
    //         const statusCode = error.response.status;
    //         switch (statusCode) {
    //           case 403:
    //             this.permission = "Permission denied.";
    //             this.numfail = "403";
    //             break;
    //           case 401:
    //             this.numfail = "401";
    //             this.permission = "Authentication Failed.";
    //             break;
    //           case 404:
    //             this.permission = "Not Found.";
    //             this.numfail = "404";
    //             break;
    //           case 405:
    //             this.permission = "Method Not Allowed.";
    //             this.numfail = "405";
    //             break;
    //           case 500:
    //             this.permission = "Server error.";
    //             this.numfail = "500";
    //             break;
    //           default:
    //             this.nosuccess = "Bad Request.";
    //             this.numfail = "400";
    //         }
    //       } else {
    //         this.nosuccess = "Bad Request.";
    //         this.numfail = "400";
    //       }
    //       this.isLoading = false;
    //     });
    // },
    copyDiv() {
      // คัดลอกเนื้อหาภายใน <div> ไปยังคลิปบอร์ด
      this.$copyText(document.getElementById("myDiv").innerText)
        .then(() => {
          // คัดลอกสำเร็จ
          alert("คัดลอกเนื้อหาเรียบร้อยแล้ว");
        })
        .catch(() => {
          // เกิดข้อผิดพลาดในการคัดลอก
          alert("มีบางอย่างผิดพลาดในการคัดลอก");
        });
    },
    get_semless() {
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
              } else if (this.response.code === 500) {
                this.permission = "Server error.";
                this.numfail = "500";
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
                    this.numfail = "401";
                    this.permission = "Authentication Failed.";
                    break;
                  case 404:
                    this.permission = "Not Found.";
                    this.numfail = "404";
                    break;
                  case 405:
                    this.permission = "Method Not Allowed.";
                    this.numfail = "405";
                    break;
                  case 500:
                    this.permission = "Server error.";
                    this.numfail = "500";
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

