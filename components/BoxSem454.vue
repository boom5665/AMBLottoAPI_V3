
<template>
  <div style="">
    <div type="primary" class="box-r-scoll">
      <div>
        <div class="font-prim"><span>Code Seamless</span></div>
      </div>
      <!-- // -->

      <div class="col-12" id="tabSeven" style="margin-bottom: 25px">
        <div>
          <b style="color: #19a17a !important" set-lan="text:4.5.4 UserPlaceBet"
            >4.5.4
            <span style="padding-left: 3px" id="Seamless_UserPlaceBet"
              >UserPlaceBetCancel</span
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
      <div class="koh-faq-answer col-12">
        <copy-text id="myDiv">
          <pre>
<code id="353A" style="border-radius: 0.375rem;  height: 300px; overflow: scroll;" class="hljs json">{
<span class="hljs-attr">"service"</span>: <span class="hljs-string">"UserPlaceBetCancel"</span>,
<span class="hljs-attr">"data"</span>: {
    <span class="hljs-attr">"playerApiId"</span>: <span class="hljs-string">"85e6041148d44880338d625674a51c4ea0afce5108c28590ae2ef62bb265d819"</span>,
    <span class="hljs-attr">"playerApiUsername"</span>: <span class="hljs-string">"member1@handsome"</span>,
    <span class="hljs-attr">"playerUsername"</span>: <span class="hljs-string">"member1"</span>,
    <span class="hljs-attr">"ticketId"</span>: <span class="hljs-string">4169799</span>,
    <span class="hljs-attr">"type"</span>: <span class="hljs-string">"stockengland"</span>,
    <span class="hljs-attr">"government"</span>: <span class="hljs-string">false</span>,
    <span class="hljs-attr">"drawId"</span>: <span class="hljs-string">71890</span>,
    <span class="hljs-attr">"totalBetAmt"</span>: <span class="hljs-string">-1</span>
    <span class="hljs-attr">"txtList"</span>: [
            {
            <span class="hljs-attr">"agentPt"</span>: <span class="hljs-string">"0"</span>,
            <span class="hljs-attr">"apiPt"</span>: <span class="hljs-string">"100"</span>,
            <span class="hljs-attr">"betKey"</span>: <span class="hljs-string">"NDE2OTc5OS0x"</span>,
            <span class="hljs-attr">"betId"</span>: <span class="hljs-string">"1"</span>,
            <span class="hljs-attr">"betType"</span>: <span class="hljs-string">"top3"</span>,
            <span class="hljs-attr">"betNumber"</span>: <span class="hljs-string">"454"</span>,
            <span class="hljs-attr">"betStatus"</span>: <span class="hljs-string">"cancel"</span>,
            <span class="hljs-attr">"betAmt"</span>: <span class="hljs-string">1</span>,
            <span class="hljs-attr">"betTotal"</span>: <span class="hljs-string">1</span>,
            <span class="hljs-attr">"betDiscount"</span>: <span class="hljs-string">0</span>,
            <span class="hljs-attr">"payOutRate"</span>: <span class="hljs-string">900</span>,
            <span class="hljs-attr">"rateLevel"</span>: <span class="hljs-string">0</span>,
            <span class="hljs-attr">"rateLevelAmount"</span>: <span class="hljs-string">0</span>,
            <span class="hljs-attr">"betResultKey"</span>: <span class="hljs-string">""</span>,
            <span class="hljs-attr">"payOutAmt"</span>: <span class="hljs-string">0</span>
            }
        ],
    <span class="hljs-attr">"status"</span>: <span class="hljs-string">"cancel"</span>,
    <span class="hljs-attr">"createDate"</span>: <span class="hljs-string">"2024-05-09 18:30:04"</span>,
    <span class="hljs-attr">"currency"</span>: <span class="hljs-string">"thb"</span>,
    <span class="hljs-attr">"DrawOpen"</span>: <span class="hljs-string">"2024-05-09 05:00:00"</span>,
    <span class="hljs-attr">"drawExpire"</span>: <span class="hljs-string">"2024-05-09 22:00:00"</span>
    }
}</code></pre>
        </copy-text>
      </div>
      <!-- // -->
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
    <span class="hljs-attr">"code"</span>: <span class="hljs-number">0</span>
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

                                        <code id="353A" style="border-radius: 0.375rem;  height: 300px; overflow: scroll;" class="hljs json">{
    <span class="hljs-attr">"service"</span>: <span class="hljs-string">"UserPlaceBetCancel"</span>,
    <span class="hljs-attr">"data"</span>: {
        <span class="hljs-attr">"playerApiId"</span>: <span class="hljs-string">"4e4fbb4539fb0b7bd1d6b01a7f218cc0c311466f40bade45189b24a3efa3e6ba5ef2d47ee85eb2cffa48379b4fa017c6"</span>,
        <span class="hljs-attr">"playerApiUsername"</span>: <span class="hljs-string">"testa0alottoviptestcarl@comptestseamless"</span>,
        <span class="hljs-attr">"playerUsername"</span>: <span class="hljs-string">"testa0alottoviptestcarl"</span>,
        <span class="hljs-attr">"ticketId"</span>: <span class="hljs-string">53000</span>,
        <span class="hljs-attr">"type"</span>: <span class="hljs-string">"thailotto"</span>,
        <span class="hljs-attr">"government"</span>: <span class="hljs-string">false</span>,
        <span class="hljs-attr">"drawId"</span>: <span class="hljs-number">44170</span>,
        <span class="hljs-attr">"totalBetAmt"</span>: <span class="hljs-number">-10000</span>
        <span class="hljs-attr">"txtList"</span>: [
            {
                <span class="hljs-attr">"agentPt"</span>: <span class="hljs-number">"95"</span>,
                <span class="hljs-attr">"apiPt"</span>: <span class="hljs-string">"5"</span>,
                <span class="hljs-attr">"betKey"</span>: <span class="hljs-number">"NTMwMDAtMQ=="</span>,
                <span class="hljs-attr">"betId"</span>: <span class="hljs-string">"1"</span>,
                <span class="hljs-attr">"betType"</span>: <span class="hljs-number">"bottom2"</span>,
                <span class="hljs-attr">"betNumber"</span>: <span class="hljs-number">"10"</span>,
                <span class="hljs-attr">"betStatus"</span>: <span class="hljs-number">"pending"</span>,
                <span class="hljs-attr">"betAmt"</span>: <span class="hljs-number">10000</span>,
                <span class="hljs-attr">"betTotal"</span>: <span class="hljs-string">10000</span>,
                <span class="hljs-attr">"betDiscount"</span>: <span class="hljs-number">0</span>,
                <span class="hljs-attr">"payOutRate"</span>: <span class="hljs-number">90</span>,
                <span class="hljs-attr">"rateLevel"</span>: <span class="hljs-number">0</span>,
                <span class="hljs-attr">"rateLevelAmount"</span>: <span class="hljs-number">0</span>,
                <span class="hljs-attr">"betResultKey"</span>: <span class="hljs-number">""</span>,
                <span class="hljs-attr">"payOutAmt"</span>: <span class="hljs-number">0</span>
            }
        ],
        <span class="hljs-attr">"status"</span>: <span class="hljs-string">"cancel"</span>,
        <span class="hljs-attr">"createDate"</span>: <span class="hljs-string">"2023-11-11 15:16:44"</span>,
        <span class="hljs-attr">"currency"</span>: <span class="hljs-string">"thb"</span>,
        <span class="hljs-attr">"DrawOpen"</span>: <span class="hljs-string">"2023-11-09 01:00:00"</span>,
        <span class="hljs-attr">"drawExpire"</span>: <span class="hljs-string">"2023-11-19 15:25:00"</span>
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
          <!-- <div>
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
    <span class="hljs-attr">"code"</span>: <span class="hljs-number">0</span>
}</code></pre>
            </div>

          </div> -->

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
    <span class="hljs-attr">"code"</span>: <span class="hljs-number">0</span>
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
  name: "BoxSem45",
  data() {
    return {
      success: "",
      nosuccess: "",
      permission: "",
      numfail: "",
      isLoading: false, // กำหนดให้แสดง "Loading..." ในเริ่มต้น
      pop: false, // กำหนดให้แสดง "Loading..." ในเริ่มต้น
      jsonData: "", // ข้อมูล JSON ที่จะส่งไปยังเซิร์ฟเวอร์
      URLdata: "http://54.254.46.163:8080", // กำหนดค่าเริ่มต้นของ agentUsername
      // playerApiId: "",
      // playerApiUsername: "",
      // playerUsername: "",
    };
  },
  beforeCreate() {},
  mounted() {
    // this.get_Seamless();
    const json = {
      service: "UserPlaceBetCancel",
      data: {
        playerApiId:
          "85e6041148d44880338d625674a51c4ea0afce5108c28590ae2ef62bb265d819",
        playerApiUsername: "member1@handsome",
        playerUsername: "member1",
        ticketId: 4169799,
        type: "stockengland",
        government: false,
        drawId: 71890,
        totalBetAmt: -1,
        txtList: [
          {
            agentPt: "0",
            apiPt: "100",
            betKey: "NDE2OTc5OS0x",
            betId: "1",
            betType: "top3",
            betNumber: "454",
            betStatus: "cancel",
            betAmt: 1,
            betTotal: 1,
            betDiscount: 0,
            payOutRate: 900,
            rateLevel: 0,
            rateLevelAmount: 0,
            betResultKey: "",
            payOutAmt: 0,
          },
        ],
        status: "cancel",
        createDate: "2024-05-09 18:30:04",
        currency: "thb",
        DrawOpen: "2024-05-09 05:00:00",
        drawExpire: "2024-05-09 22:00:00",
      },
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
    //     get_Seamless() {
    //             alert("Send code clicked!");
    //       this.isLoading = true;
    //       this.pop = true;
    //       var senduser = {
    //         service: "UserPlaceBetCancel",
    //         data: {
    //           playerApiId:
    //             "4e4fbb4539fb0b7bd1d6b01a7f218cc0c311466f40bade45189b24a3efa3e6ba5ef2d47ee85eb2cffa48379b4fa017c6",
    //           playerApiUsername: "testa0alottoviptestcarl@comptestseamless",
    //           playerUsername: "testa0alottoviptestcarl",
    //            // playerApiId: this.playerApiId,
    //           // playerApiUsername: this.playerApiUsername,
    //           // playerUsername: this.playerUsername,
    //           ticketId: 53000,
    //           type: "thailotto",
    //           government: false,
    //           drawId: 44170,
    //           totalBetAmt: -10000,
    //           txtList: [
    //             {
    //               agentPt: "95",
    //               apiPt: "5",
    //               betKey: "NTMwMDAtMQ==",
    //               betId: "1",
    //               betType: "bottom2",
    //               betNumber: "10",
    //               betStatus: "pending",
    //               betAmt: 10000,
    //               betTotal: 10000,
    //               betDiscount: 0,
    //               payOutRate: 90,
    //               rateLevel: 0,
    //               rateLevelAmount: 0,
    //               betResultKey: "",
    //               payOutAmt: 0,
    //             },
    //           ],
    //           status: "cancel",
    //           createDate: "2023-11-11 15:16:44",
    //           currency: "thb",
    //           DrawOpen: "2023-11-09 01:00:00",
    //           drawExpire: "2023-11-19 15:25:00",
    //         },
    //       };
    //       // const URL = "https://top1betvip.infosoft.click/api/latest/integration/lotto";
    //       const URL = "https://api-test.ambexapi.com/api/v1/l/c";
    //       this.$axios
    //         .$post(URL, senduser)
    //         .then((response) => {
    //           console.log(response);
    //           if (response.code === 0 || response.code === 200) {
    //                         this.success = "Successful operation.";
    //             this.code = response.code;
    //             this.numfail = this.code;
    //                    } else if (response.code === 403) {
    //             this.permission = "Permission denied.";
    //             this.numfail = "403";
    //           } else if (response.code === 401) {
    //             this.numfail = "401";
    //             this.permission = "Authentication Failed.";
    //           } else if (response.code === 404) {
    //             this.permission = "Not Found.";
    //             this.numfail = "404";
    //           } else if (response.code === 405) {
    //             this.permission = "Method Not Allowed.";
    //             this.numfail = "405";
    //           } else if (response.code === 500) {
    //             this.permission = "Server error.";
    //             this.numfail = "500";
    //           } else {
    //             this.nosuccess = "Bad Request.";
    //             this.numfail = "400";
    //           }
    //           this.isLoading = false;
    //         })
    // .catch((error) => {
    //           if (error.response) {
    //             const statusCode = error.response.status;
    //             switch (statusCode) {
    //               case 403:
    //                 this.permission = "Permission denied.";
    //                 this.numfail = "403";
    //                 break;
    //               case 401:
    //                 this.numfail = "401";
    //                 this.permission = "Authentication Failed.";
    //                 break;
    //               case 404:
    //                 this.permission = "Not Found.";
    //                 this.numfail = "404";
    //                 break;
    //               case 405:
    //                 this.permission = "Method Not Allowed.";
    //                 this.numfail = "405";
    //                 break;
    //               case 500:
    //                 this.permission = "Server error.";
    //                 this.numfail = "500";
    //                 break;
    //               default:
    //                 this.nosuccess = "Bad Request.";
    //                 this.numfail = "400";
    //             }
    //           } else {
    //             this.nosuccess = "Bad Request.";
    //             this.numfail = "400";
    //           }
    //           this.isLoading = false;
    //         });
    //     },
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
