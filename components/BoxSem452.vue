
<template>
  <div style="">
    <div type="primary" class="box-r-scoll">
      <div>
        <div class="font-prim"><span>Code Seamless</span></div>
      </div>
      <!-- // -->

      <div class="col-12" id="tabSixs" style="left: 10px; margin-bottom: 25px">
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
          <a href="#close" title="Close" class="close">X</a>
          <div>
            <div class="font-prim"><span>Code Seamless</span></div>
          </div>
          <div>
            <!-- <div class="koh-faq-question form-group ex">
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

                                        <code id="351A" style="border-radius: 0.375rem;" class="hljs json">{
    <span class="hljs-attr">"service"</span>: <span class="hljs-string">"GetUserBalance"</span>,
    <span class="hljs-attr">"data"</span>: {
        <span class="hljs-attr">"playerApiId"</span>: <span class="hljs-string">"21f7d4c971036eea30d1db483d01f131faada79fa94d52560c9f2c2b56a6f8877b66ae2c624f89442c938db064d8179f"</span>,
        <span class="hljs-attr">"playerApiUsername"</span>: <span class="hljs-string">"testa0alottoviptest2@comptestseamless"</span>,
        <span class="hljs-attr">"playerUsername"</span>: <span class="hljs-string">"testa0alottoviptest2"</span>
    }
}</code></pre>
            </div> -->
            <!-- // -->
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
          <div>

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
              <div class="koh-faq-answer col-12">
                <pre>

                                        <code id="351B" style="border-radius: 0.375rem;" class="hljs json">{
    <span class="hljs-attr">"code"</span>: <span class="hljs-number">0</span>,
    <span class="hljs-attr">"balance"</span>: <span class="hljs-number">2879</span>
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
      jsonData: '',
      URLdata: 'https://handsome.pirate168.com/',  // ใช้ /api/ ใน path ของ URL
      isLoading: false,
      pop: false,
      response: null,
      success: '',
      code: null,
      numfail: null,
      msg: '',
      playerApiId: '',
      playerApiUsername: '',
      playerUsername: '',
      url: '',
      urlFullPage: '',
      tkUuid: '',
      permission: '',
      nosuccess: ''
    };
  },
  beforeCreate() {},
  mounted() {
    const json = {
      service: "GetUserBalance",
      data: {
        playerApiId: "85e6041148d44880338d625674a51c4ea0afce5108c28590ae2ef62bb265d819",
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
    async get_Seamless() {
      alert("Send code clicked!");
      if (this.jsonData && this.URLdata) {

        this.isLoading = true;
        this.pop = true;
        try {
          const dataToSend = JSON.parse(this.jsonData);
          console.log("URL", this.URLdata);
          // const response = await this.$axios.post(this.URLdata, dataToSend);
          const response = await this.$axios.get(this.URLdata,{ mode: 'no-cors' }, dataToSend);
          this.response = response.data;
          console.log("Sending JSON serv:", this.response);
          switch (this.response.code) {
            case 0:
            case 200:
              this.success = "Successful operation.";
              this.numfail = this.response.code;
              this.msg = this.response.msg;
              this.playerApiId = this.response.data.playerApiId;
              this.playerApiUsername = this.response.data.playerApiUsername;
              this.playerUsername = this.response.data.playerUsername;
              this.url = this.response.data.url;
              this.urlFullPage = this.response.data.urlFullPage;
              this.tkUuid = this.response.data.tkUuid;
              break;
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
            case 500:
              this.permission = "Server error.";
              this.numfail = "500";
              break;
            default:
              this.nosuccess = "Bad Request.";
              this.numfail = "400";
          }
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
