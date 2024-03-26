
<template>
  <div style="">
    <div type="primary" class="box-r-scoll">
      <div>
        <div class="font-prim"><span>Code Seamless</span></div>
      </div>
      <!-- // -->
      <div class="col-12" id="tabSeven">
        <div>
          <b style="color: #19a17a !important" set-lan="text:4.7 UserPlaceBet"
            >4.7
            <span style="padding-left: 3px" id="Seamless_UserPlaceBet"
              >ListHotnumberandLimitnumber</span
            ></b
          >
        </div>
      </div>
      <div class="divBox">
        <div class="col-12">
          <label class="txtHead">Method : </label>
          <label>Post</label>
        </div>
        <div class="col-12">
          <label class="txtHead"> Url : </label>
          <label>
            https://test-api.askmelotto.com/apiRoute/api/ListHotnumberandLimitnumber
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
            placeholder="agent Username"
          />
        </div>
        <div class="false-input">
          <input
            type="text"
            v-model="agentApiKey"
            placeholder="agent Api Key"
          />
        </div>
      </div>
      <div class="boxinput">
        <div class="false-input">
          <input
            type="text"
            v-model="services"
            placeholder="services"
          />
        </div>
      </div> -->
      <div class="boxinput">
        <div class="false-input">
          <input type="text" v-model="URLdata"  placeholder="Please enter your URLhere." />
        </div>
      </div>
      <div class="koh-faq-answer col-12">
        <code>
          <textarea
            v-model="jsonData"
            rows="8"
            class="custom-textarea"
            placeholder="Please enter your request here."
          >
          </textarea>
        </code>
      </div>
      <div class="koh-faq-question form-group ex">
        <div class="Point">
          <b
            style="color: #19a17a !important"
            set-lan="text:Example Request Body"
            >Example Request Body
          </b>
          <i
            class="fa fa-chevron-down"
            aria-hidden="true"
            style="margin-left: 2%; font-size: 1rem"
          ></i>
          <div class="btn-send">
            <a href="#openModal-about">
              <button class="custom-btn btn-13" @click="get_Seamless">
                Send Code
              </button></a
            >
          </div>
        </div>
      </div>
      <!-- // -->
      <div class="koh-faq-answer col-12">
        <copy-text id="myDiv">
          <pre>

                                        <code id="410A" style="border-radius: 0.375rem;" class="hljs json">{
    <span class="hljs-attr">"agentUsername"</span>: <span class="hljs-string">"superadmincash"</span>,
    <span class="hljs-attr">"agentApiKey"</span>: <span class="hljs-string">"345afccac1c08a4f8e37fbf1ac4f6e2a63e298062482c3f5192a63f3f8"</span>,
    <span class="hljs-attr">"services"</span>: <span class="hljs-string">"DeleteLimitnumber"</span>,
    <span class="hljs-attr">"data"</span>: {
        <span class="hljs-attr">"limitnumber"</span>: {
            <span class="hljs-attr">"thailotto"</span>: {
                <span class="hljs-attr">"top3"</span>: {
                    <span class="hljs-attr">"number"</span>: <span class="hljs-string">"567"</span>
                }
            }
        }
    }
}</code></pre>
        </copy-text>
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
            <div class="font-prim"><span>Code Seamless</span></div>
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
            <div class="koh-faq-answer col-12">
              <pre>

                                        <code id="410A" style="border-radius: 0.375rem;" class="hljs json">{
    <span class="hljs-attr">"agentUsername"</span>: <span class="hljs-string">"superadmincash"</span>,
    <span class="hljs-attr">"agentApiKey"</span>: <span class="hljs-string">"345afccac1c08a4f8e37fbf1ac4f6e2a63e298062482c3f5192a63f3f8"</span>,
    <span class="hljs-attr">"services"</span>: <span class="hljs-string">"DeleteLimitnumber"</span>,
    <span class="hljs-attr">"data"</span>: {
        <span class="hljs-attr">"limitnumber"</span>: {
            <span class="hljs-attr">"thailotto"</span>: {
                <span class="hljs-attr">"top3"</span>: {
                    <span class="hljs-attr">"number"</span>: <span class="hljs-string">"567"</span>
                }
            }
        }
    }
}</code></pre>
            </div>
            <!-- // -->
          </div>
          <div>
            <div class="koh-faq-question form-group ex">
              <div class="Point">
                <b
                  style="color: #19a17a !important"
                  set-lan="text:Example Request Body"
                  >Example Service Respond Code
                </b>
                <i
                  class="fa fa-chevron-down"
                  aria-hidden="true"
                  style="margin-left: 2%; font-size: 1rem"
                ></i>
              </div>
            </div>
            <div class="koh-faq-answer col-12">
              <pre>

                                    <code id="410B" style="border-radius: 0.375rem;" class="hljs json">{
    <span class="hljs-attr">"code"</span>: <span class="hljs-number">"0"</span>,
    <span class="hljs-attr">"data"</span>: {
        <span class="hljs-attr">"hotnumber":</span> {
        <span class="hljs-attr">"thailotto":</span> [
                {
                    <span class="hljs-attr">"agentid"</span>: <span class="hljs-number">19</span>,
                    <span class="hljs-attr">"amount"</span>:<span class="hljs-number"> 100</span>,
                    <span class="hljs-attr">"hotnumid"</span>: <span class="hljs-number">787</span>,
                    <span class="hljs-attr">"number"</span>: <span class="hljs-number">"000000"</span>,
                    <span class="hljs-attr">"subtype"</span>: <span class="hljs-number">"top6"</span>,
                    <span class="hljs-attr">"superadmin"</span>: <span class="hljs-number">18</span>
                }
            ]
        },
        <span class="hljs-attr">"limitnumber"</span>: {
        <span class="hljs-attr">"thailotto"</span>: [
                {
                    <span class="hljs-attr">"agentid"</span>: <span class="hljs-number">19</span>,
                    <span class="hljs-attr">"amount"</span>:<span class="hljs-number">0</span>,
                    <span class="hljs-attr">"hotnumid"</span>: <span class="hljs-number">206</span>,
                    <span class="hljs-attr">"number"</span>: <span class="hljs-number">"123456"</span>,
                    <span class="hljs-attr">"subtype"</span>: <span class="hljs-number">"top6"</span>,
                    <span class="hljs-attr">"superadmin"</span>: <span class="hljs-number">18</span>
                }
            ]
        }
    }
}</code></pre>
            </div>
            <!-- // -->
          </div>

          <div>
            <div class="koh-faq-question form-group ex">
              <div class="Point">
                <b
                  style="color: #19a17a !important"
                  set-lan="text:Example Request Body"
                >
                  Service Respond Code
                </b>
                <i
                  class="fa fa-chevron-down"
                  aria-hidden="true"
                  style="margin-left: 2%; font-size: 1rem"
                ></i>
              </div>
            </div>
            <div v-if="success">
              <div class="koh-faq-answer col-12">
                <pre>

                                    <code id="410B" style="border-radius: 0.375rem;" class="hljs json">{
    <span class="hljs-attr">"code"</span>: <span class="hljs-number">"0"</span>,
    <span class="hljs-attr">"data"</span>: {
        <span class="hljs-attr">"hotnumber":</span> {
        <span class="hljs-attr">"thailotto":</span> [
                {
                    <span class="hljs-attr">"agentid"</span>: <span class="hljs-number">19</span>,
                    <span class="hljs-attr">"amount"</span>:<span class="hljs-number"> 100</span>,
                    <span class="hljs-attr">"hotnumid"</span>: <span class="hljs-number">787</span>,
                    <span class="hljs-attr">"number"</span>: <span class="hljs-number">"000000"</span>,
                    <span class="hljs-attr">"subtype"</span>: <span class="hljs-number">"top6"</span>,
                    <span class="hljs-attr">"superadmin"</span>: <span class="hljs-number">18</span>
                }
            ]
        },
        <span class="hljs-attr">"limitnumber"</span>: {
        <span class="hljs-attr">"thailotto"</span>: [
                {
                    <span class="hljs-attr">"agentid"</span>: <span class="hljs-number">19</span>,
                    <span class="hljs-attr">"amount"</span>:<span class="hljs-number">0</span>,
                    <span class="hljs-attr">"hotnumid"</span>: <span class="hljs-number">206</span>,
                    <span class="hljs-attr">"number"</span>: <span class="hljs-number">"123456"</span>,
                    <span class="hljs-attr">"subtype"</span>: <span class="hljs-number">"top6"</span>,
                    <span class="hljs-attr">"superadmin"</span>: <span class="hljs-number">18</span>
                }
            ]
        }
    }
}</code></pre>
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
  name: "BoxSem47",
  data() {
    return {
      success: "",
      nosuccess: "",
      permission: "",
      numfail: "",
      isLoading: false, // กำหนดให้แสดง "Loading..." ในเริ่มต้น
      pop: false, // กำหนดให้แสดง "Loading..." ในเริ่มต้น
      jsonData: "", // ข้อมูล JSON ที่จะส่งไปยังเซิร์ฟเวอร์
      URLdata: "", // กำหนดค่าเริ่มต้นของ agentUsername
      // agentUsername: "",
      // agentApiKey: "",
      // services: "",
    };
  },
  beforeCreate() {},
  mounted() {
    // this.get_Seamless();
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
    // get_Seamless() {
    //   alert("Send code clicked!");
    //   this.isLoading = true;
    //   this.pop = true;
    //   var senduser = {
    //     agentUsername: "superadmincash",
    //     agentApiKey:
    //       "345afccac1c08a4f8e37fbf1ac4f6e2a63e298062482c3f5192a63f3f8",
    //     services: "DeleteLimitnumber",
    //     // agentUsername: this.agentUsername,
    //     // agentApiKey: this.agentApiKey,
    //     // services: this.services,
    //     data: {
    //       limitnumber: {
    //         thailotto: {
    //           top3: {
    //             number: "567",
    //           },
    //         },
    //       },
    //     },
    //   };
    //   const URL =
    //     "https://test-api.askmelotto.com/apiRoute/api/ListHotnumberandLimitnumber";
    //   this.$axios
    //     .$post(URL, senduser)
    //     .then((response) => {
    //       console.log(response);
    //       if (response.code === 0 || response.code === 200) {
    //         this.success = "Successful operation.";
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
