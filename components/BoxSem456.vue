
<template>
  <div style="">
    <div type="primary" class="box-r-scoll">
      <div>
        <div class="font-prim"><span>Code Semless</span></div>
      </div>
      <!-- // -->
      <div class="col-12" id="tabSeven" style="margin-bottom: 25px">
        <div>
          <b style="color: #19a17a !important" set-lan="text:4.5.6 UserPlaceBet"
            >4.5.6
            <span style="padding-left: 3px" id="UserPlaceReToRunning"
              >UserPlaceReToRunning</span
            ></b
          >
        </div>
      </div>
      <!-- <div class="col-12 boxinput">
        <div class="false-input">
          <input type="text" placeholder="Username" />
        </div>
        <div class="false-input">
          <input type="text" placeholder="Password" />
        </div>
      </div> -->
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
          <div class="btn-send">
            <button class="custom-btn btn-13" @click="get_semless">
              Send Code
            </button>
          </div>
        </div>
      </div>
      <div class="koh-faq-answer col-12">
        <pre>

                <code id="356A" style="border-radius: 0.375rem; height: 500px; overflow: scroll;" class="hljs json">{
    <span class="hljs-attr">"service"</span>: <span class="hljs-string">"UserPlaceReToRunning"</span>,
    <span class="hljs-attr">"data"</span>: {
        <span class="hljs-attr">"playerApiId"</span>: <span class="hljs-string">"281199a5837d34ce72dcc86c0e14bc26b9362d63b0f49173a3b977d0dfe2adfd"</span>,
        <span class="hljs-attr">"playerApiUsername"</span>: <span class="hljs-string">"testa0aagentthbmb01@comptestseamless"</span>,
        <span class="hljs-attr">"playerUsername"</span>: <span class="hljs-string">"testa0aagentthbmb01"</span>,
        <span class="hljs-attr">"ticketId"</span>: <span class="hljs-string">40864</span>,
        <span class="hljs-attr">"type"</span>: <span class="hljs-string">"pingponglotto6"</span>,
        <span class="hljs-attr">"government"</span>: <span class="hljs-string">false</span>,
        <span class="hljs-attr">"drawId"</span>: <span class="hljs-number">37187</span>,
        <span class="hljs-attr">"totalBetAmt"</span>: <span class="hljs-number">1243</span>,
        <span class="hljs-attr">"txtList"</span>: [
            {
                <span class="hljs-attr">"agentPt"</span>: <span class="hljs-string">"95"</span>,
                <span class="hljs-attr">"apiPt"</span>: <span class="hljs-number">"5"</span>,
                <span class="hljs-attr">"betKey"</span>: <span class="hljs-string">"NDA4NjQtMQ=="</span>,
                <span class="hljs-attr">"betId"</span>: <span class="hljs-number">"1"</span>,
                <span class="hljs-attr">"betType"</span>: <span class="hljs-number">"top6"</span>,
                <span class="hljs-attr">"betNumber"</span>: <span class="hljs-string">"789000"</span>,
                <span class="hljs-attr">"betStatus"</span>: <span class="hljs-number">"pending"</span>,
                <span class="hljs-attr">"betAmt"</span>: <span class="hljs-number">733</span>,
                <span class="hljs-attr">"betTotal"</span>: <span class="hljs-number">733</span>,
                <span class="hljs-attr">"betDiscount"</span>: <span class="hljs-string">0</span>,
                <span class="hljs-attr">"payOutRate"</span>: <span class="hljs-number">50000</span>,
                <span class="hljs-attr">"rateLevel"</span>: <span class="hljs-number">0</span>,
                <span class="hljs-attr">"rateLevelAmount"</span>: <span class="hljs-number">0</span>,
                <span class="hljs-attr">"betResultKey"</span>: <span class="hljs-number">""</span>,
                <span class="hljs-attr">"payOutAmt"</span>: <span class="hljs-number">0</span>
            }
        ],
        <span class="hljs-attr">"status"</span>: <span class="hljs-string">"pending"</span>,
        <span class="hljs-attr">"createDate"</span>: <span class="hljs-string">"2023-10-07 17:18:42"</span>,
        <span class="hljs-attr">"DrawOpen"</span>: <span class="hljs-string">"2023-10-07 17:00:00"</span>,
        <span class="hljs-attr">"currency"</span>: <span class="hljs-string">"thb"</span>,
        <span class="hljs-attr">"drawExpire"</span>: <span class="hljs-string">"2023-10-07 17:30:00"</span>,
        <span class="hljs-attr">"totalPayOutAmt"</span>: <span class="hljs-string">0</span>
    }
}</code></pre>
      </div>
      <!-- // -->
      <div>
        <div>RESPONSE</div>
        <div class="divBox-content">
          <div v-if="success" class="dis-colum-center">
            <div>
              <span>
                <button class="buton-suscess"></button> Code 200&nbsp;&nbsp;
              </span>
            </div>
            <div style="display: flex; justify-content: center">
              <div>
                {{ success }}
              </div>
            </div>
          </div>
          <div v-else-if="nosuccess" class="dis-colum-center">
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
          <div v-else>
            Click Send Code to start a request and see the response here! Or
            choose an example: application/json
            <span> <button class="buton-suscess"></button> 200 </span>
          </div>
        </div>
      </div>
      <!-- <div class="col-12 boxinput">
        <div class="false-input">
          <input type="text" placeholder="Username" />
        </div>
         <div class="false-input">
          <input type="text" placeholder="Password" />
        </div>
      </div> -->
      <div class="koh-faq-question form-group ex">
        <div class="Point">
          <b
            style="color: #19a17a !important"
            set-lan="text:Example Service Respond Code"
            >Example Service Respond Code</b
          >
          <i
            class="fa fa-chevron-down"
            aria-hidden="true"
            style="margin-left: 2%; font-size: 1rem"
          ></i>
          <!-- <div class="btn-send">
            <button class="custom-btn btn-13">Send Code</button>
          </div> -->
        </div>
      </div>

      <div class="koh-faq-answer col-12">
        <div
          class="copy-clipboard"
          style="
            position: absolute;
            width: 20px;
            top: 8px;
            right: 0;
            cursor: pointer;
          "
        ></div>
        <pre><code id="352B" style="border-radius: 0.375rem;" class="hljs json">{
    <span class="hljs-attr">"code"</span>: <span class="hljs-number">0</span>
}</code></pre>
      </div>
      <!-- <div>
        <div>RESPONSE</div>
        <div class="divBox-content">
          Click Send Code to start a request and see the response here! Or
          choose an example: application/json
          <span>
            <button class="buton-suscess"></button> 200
          </span>

        </div>
      </div> -->
      <!-- // -->
    </div>
  </div>
</template>

<script>
export default {
  name: "BoxSem45",
  data() {
    return {
      success: "",
      nosuccess: "",
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
        service: "UserPlaceReToRunning",
        data: {
          playerApiId:
            "281199a5837d34ce72dcc86c0e14bc26b9362d63b0f49173a3b977d0dfe2adfd",
          playerApiUsername: "testa0aagentthbmb01@comptestseamless",
          playerUsername: "testa0aagentthbmb01",
          ticketId: 40864,
          type: "pingponglotto6",
          government: false,
          drawId: 37187,
          totalBetAmt: 1243,
          txtList: [
            {
              agentPt: "95",
              apiPt: "5",
              betKey: "NDA4NjQtMQ==",
              betId: "1",
              betType: "top6",
              betNumber: "789000",
              betStatus: "pending",
              betAmt: 733,
              betTotal: 733,
              betDiscount: 0,
              payOutRate: 50000,
              rateLevel: 0,
              rateLevelAmount: 0,
              betResultKey: "",
              payOutAmt: 0,
            },
          ],
          status: "pending",
          createDate: "2023-10-07 17:18:42",
          DrawOpen: "2023-10-07 17:00:00",
          currency: "thb",
          drawExpire: "2023-10-07 17:30:00",
          totalPayOutAmt: 0,
        },
      };
      const URL = "https://api-test.ambexapi.com/api/v1/l/c";
      this.$axios
        .$post(URL, senduser)
        .then((response) => {
          console.log(response);
          if (response) {
            this.success = "Successful operation."; // กำหนดค่า success ให้เป็น "SUCCESS"
          } else {
            this.nosuccess = "Bad Request."; // กำหนดค่า nosuccess ให้เป็น "Fail"
          }
        })
        .catch((error) => {
          console.log(error);
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
