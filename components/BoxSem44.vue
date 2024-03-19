
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
      </div>
      <div class="boxinput">
        <div class="false-input">
          <input
            type="text"
            v-model="playerUsername"
            placeholder="Player Username"
          />
        </div>
      </div> -->

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
            <a href="#openModal-about">
              <button class="custom-btn btn-13" @click="get_semless">
                Send Code
              </button></a
            >
          </div>
        </div>
      </div>
      <div>
        <div class="koh-faq-answer col-12 test">
          <pre>

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
                <button class="buton-suscess"></button> Code 400&nbsp;&nbsp;
              </div>
            </div>
            <div class="padding-content">
              <span> <button class="buton-suscess"></button> 200 </span>
              {{ success }}
            </div>
          </div>
          <div v-else-if="nosuccess" class="dis-colum-center">
            <div class="box-respon">
              <div class="pdd-top">RESPONSE</div>
              <div class="pdd-top">
                <button class="buton-fail"></button> Code 400&nbsp;&nbsp;
              </div>
            </div>
            <div class="padding-content">
              <span> <button class="buton-fail"></button> 200 </span>
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
      <div id="openModal-about" class="modalDialog">
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

            <div v-else-if="nosuccess" class="divBox-content">
              <div class="dis-colum-center">
                <div>
                  <span>
                    <button class="buton-fail"></button> Code 400&nbsp;&nbsp;
                  </span>
                </div>
                <div style="dis-center">
                  <div>
                    {{ nosuccess }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
      code: "",
      playerApiId: "",
      playerApiUsername: "",
      playerUsername: "",
      url: "",
      urlFullPage: "",
      tkUuid: "",
      msg: "",

      // agentUsername: "top1betvip", // กำหนดค่าเริ่มต้นของ agentUsername
      // agentApiKey:
      //   "95b1b602d7d4929e48593af7d96fbe79c615a10b91a9411423c5ca04ae073d11", // กำหนดค่าเริ่มต้นของ agentApiKey
      // playerUsername: "AALFLFLFLF000005", // กำหนดค่าเริ่มต้นของ playerUsername
    };
  },
  beforeCreate() {},
  mounted() {
    // this.get_semless();
  },
  watch: {},
  methods: {
    get_semless() {
      alert("Send code clicked!");
      var senduser = {
        // agentUsername: "top1betvip", // กำหนดค่าเริ่มต้นของ agentUsername
        // agentApiKey:
        //   "95b1b602d7d4929e48593af7d96fbe79c615a10b91a9411423c5ca04ae073d11", // กำหนดค่าเริ่มต้นของ agentApiKey
        // playerUsername: "AALFLFLFLF000005", // กำหนดค่าเริ่มต้นของ playerUsername
        agentUsername: "sportbookv2",
        agentApiKey:
          "29d09af218b716963c79a0d58c20d5e47211f65e456af68ee81687af4fa50fba",
        playerUsername: "testa0alottoviptesttong",
        // agentUsername: this.agentUsername,
        // agentApiKey: this.agentApiKey,
        // playerUsername: this.playerUsername,
      };
      const URL =
        "https://test-api.askmelotto.com/apiRoute/member/loginRequest";
      this.$axios
        .$post(URL, senduser)
        .then((response) => {
          console.log(response.code === 0);
          if (response.code === 0) {
            this.success = "Successful operation."; // กำหนดค่า success ให้เป็น "SUCCESS"
            this.code = response.code;
            this.msg = response.msg;
            this.playerApiId = response.data.playerApiId;
            this.playerApiUsername = response.data.playerApiUsername;
            this.playerUsername = response.data.playerUsername;
            this.url = response.data.url;
            this.urlFullPage = response.data.urlFullPage;
            this.tkUuid = response.data.tkUuid;
          } else if (response.code === 403) {
            this.permission = "Permission denied.";
          } else {
            this.nosuccess = "Bad Request.";
          }
        })
        .catch((error) => {
          // console.log(error);
          if (error) {
            this.nosuccess = "Bad Request."; // กำหนดค่า success ให้เป็น "SUCCESS"
          } else {
            this.nosuccess = "Bad Request."; // กำหนดค่า nosuccess ให้เป็น "Fail"
          }
        });
    },
  },
};
</script>



