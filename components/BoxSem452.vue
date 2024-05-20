
<template>
  <div style="">
    <div type="primary" class="box-r-scoll">
      <div>
        <div class="font-prim"><span>Code Seamless</span></div>
      </div>
      <!-- // -->

      <div class="col-12" id="tabSixs" style=" margin-bottom: 25px">
        <div>
          <b
            style="color: #19a17a !important"
            set-lan="text:4.5.2 GetUserBalance"
            >4.5.2
            <span style="padding-left: 3px" id="Seamless_GetUserBalance"
              >GetUserBalance</span
            ></b
          >
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
            >Example Request body
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
      <div class="koh-faq-answer col-12">
        <copy-text id="myDiv">
          <pre>

                                        <code id="351A" style="border-radius: 0.375rem;" class="hljs json">{
    <span class="hljs-attr">"service"</span>: <span class="hljs-string">"GetUserBalance"</span>,
    <span class="hljs-attr">"data"</span>: {
        <span class="hljs-attr">"playerApiId"</span>: <span class="hljs-string">"85e6041148d44880338d625674a51c4ea0afce5108c28590ae2ef62bb265d819"</span>,
        <span class="hljs-attr">"playerApiUsername"</span>: <span class="hljs-string">"member1@handsome"</span>,
        <span class="hljs-attr">"playerUsername"</span>: <span class="hljs-string">"member1"</span>
    }
}</code></pre>
        </copy-text>
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
        <div class="koh-faq-answer col-12">
          <pre>

                                        <code id="351B" style="border-radius: 0.375rem;" class="hljs json">{
    <span class="hljs-attr">"code"</span>: <span class="hljs-number">0</span>,
    <span class="hljs-attr">"balance"</span>: <span class="hljs-number">880</span>
}</code></pre>
        </div>
        <!-- // -->
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
                <button class="buton-fail"></button> Code 403&nbsp;&nbsp;
              </div>
            </div>
            <div class="padding-content">
              <span> <button class="buton-fail"></button> 200 </span>
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
          <div>

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
          </div>
          <div></div>

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
              <div class="koh-faq-answer col-12">
                <pre>

                                        <code id="351B" style="border-radius: 0.375rem;" class="hljs json">{
    <span class="hljs-attr">"balance"</span>: <span class="hljs-number">{{balance}}</span>,
    <span class="hljs-attr">"code"</span>: <span class="hljs-number">{{0}}</span>

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
  name: "",
  data() {
    return {
      jsonData: "",
      URLdata: "https://handsome.pirate168.com/", // ใช้ /api/ ใน path ของ URL
      isLoading: false,
      pop: false,
      response: null,
      success: "",
      code: null,
      numfail: null,
      msg: "",
      playerApiId: "",
      playerApiUsername: "",
      playerUsername: "",
      url: "",
      urlFullPage: "",
      tkUuid: "",
      permission: "",
      nosuccess: "",
    };
  },
  beforeCreate() {},
  mounted() {
    const json = {
      service: "GetUserBalance",
      data: {
        playerApiId:
          "85e6041148d44880338d625674a51c4ea0afce5108c28590ae2ef62bb265d819",
        playerApiUsername: "member1@handsome",
        playerUsername: "member1",
      },
    };
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
      // รีเซ็ตค่าตัวแปรต่างๆ ใน component
      // this.jsonData = '';
      this.URLdata = "https://handsome.pirate168.com/";
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
    async get_Seamless() {
      alert("Send code clicked!");
      if (this.jsonData && this.URLdata) {
        this.isLoading = true;
        this.pop = true;
        try {
          const dataToSend = JSON.parse(this.jsonData);
          console.log("URL", this.URLdata);
          const response = await this.$axios.post(this.URLdata, dataToSend);
          // const response = await this.$axios.get(this.URLdata,{ mode: 'no-cors' }, dataToSend);
          this.response = response.data;
          console.log("Sending JSON serv:", this.response);
          if (this.response.code === 0 || this.response.code === 200) {
            this.success = "Successful operation.";
            this.code = this.response.code;
            this.numfail = this.code; // กำหนดค่า success ให้เป็น "SUCCESS"
            this.msg = this.response.msg;
            this.balance = this.response.balance;
            this.playerApiUsername = this.response.data.playerApiUsername;
            this.playerUsername = this.response.data.playerUsername;
            this.url = this.response.data.url;
            this.urlFullPage = this.response.data.urlFullPage;
            this.tkUuid = this.response.data.tkUuid;
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
            this.permission = "Service Unavailable";
            this.numfail = "503";
          } else if (this.response.code === 999) {
            this.permission = "Server error.";
            this.numfail = "999";
          } else {
            this.nosuccess = "Bad Request.";
            this.numfail = "400";
          }
          this.isLoading = false;
        } catch (error) {
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
        } finally {
          this.isLoading = false;
        }
      } else if (!this.URLdata) {
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
