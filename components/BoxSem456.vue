
<template>
  <div style="">
    <div type="primary" class="box-r-scoll">
      <div>
        <div class="font-prim"><span>Code Seamless</span></div>
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
            placeholder="Please enter your URLhere."
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
<code id="356A" style="border-radius: 0.375rem;  height: 300px; overflow: scroll;" class="hljs json">{
  <span class="hljs-attr">"service"</span>: <span class="hljs-string">"UserPlaceReToRunning"</span>,
  <span class="hljs-attr">"data"</span>: {
      <span class="hljs-attr">"playerApiId"</span>: <span class="hljs-string">"85e6041148d44880338d625674a51c4ea0afce5108c28590ae2ef62bb265d819"</span>,
      <span class="hljs-attr">"playerApiUsername"</span>: <span class="hljs-string">"member1@handsome"</span>,
      <span class="hljs-attr">"playerUsername"</span>: <span class="hljs-string">"member1"</span>,
      <span class="hljs-attr">"ticketId"</span>: <span class="hljs-string">4208113</span>,
      <span class="hljs-attr">"type"</span>: <span class="hljs-string">"stockgerman"</span>,
      <span class="hljs-attr">"government"</span>: <span class="hljs-string">false</span>,
      <span class="hljs-attr">"drawId"</span>: <span class="hljs-string">72140</span>,
      <span class="hljs-attr">"totalBetAmt"</span>: <span class="hljs-string">2</span>
      <span class="hljs-attr">"txtList"</span>: [
            {
              <span class="hljs-attr">"agentPt"</span>: <span class="hljs-string">"0"</span>,
              <span class="hljs-attr">"apiPt"</span>: <span class="hljs-string">"100"</span>,
              <span class="hljs-attr">"betKey"</span>: <span class="hljs-string">"NDIwODExMy0x"</span>,
              <span class="hljs-attr">"betId"</span>: <span class="hljs-string">"1"</span>,
              <span class="hljs-attr">"betType"</span>: <span class="hljs-string">"top3"</span>,
              <span class="hljs-attr">"betNumber"</span>: <span class="hljs-string">"198"</span>,
              <span class="hljs-attr">"betStatus"</span>: <span class="hljs-string">"pending"</span>,
              <span class="hljs-attr">"betAmt"</span>: <span class="hljs-string">1</span>,
              <span class="hljs-attr">"betTotal"</span>: <span class="hljs-string">1</span>,
              <span class="hljs-attr">"betDiscount"</span>: <span class="hljs-string">0</span>,
              <span class="hljs-attr">"payOutRate"</span>: <span class="hljs-string">900</span>,
              <span class="hljs-attr">"rateLevel"</span>: <span class="hljs-string">0</span>,
              <span class="hljs-attr">"rateLevelAmount"</span>: <span class="hljs-string">0</span>,
              <span class="hljs-attr">"betResultKey"</span>: <span class="hljs-string">""</span>,
              <span class="hljs-attr">"payOutAmt"</span>: <span class="hljs-string">0</span>
            },
            {
              <span class="hljs-attr">"agentPt"</span>: <span class="hljs-string">"0"</span>,
              <span class="hljs-attr">"apiPt"</span>: <span class="hljs-string">"100"</span>,
              <span class="hljs-attr">"betKey"</span>: <span class="hljs-string">"NDIwODExMy0y"</span>,
              <span class="hljs-attr">"betId"</span>: <span class="hljs-string">"2"</span>,
              <span class="hljs-attr">"betType"</span>: <span class="hljs-string">"top3"</span>,
              <span class="hljs-attr">"betNumber"</span>: <span class="hljs-string">"983"</span>,
              <span class="hljs-attr">"betStatus"</span>: <span class="hljs-string">"pending"</span>,
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
      <span class="hljs-attr">"status"</span>: <span class="hljs-string">"pending"</span>,
      <span class="hljs-attr">"createDate"</span>: <span class="hljs-string">"2024-05-10 16:49:40"</span>,
      <span class="hljs-attr">"DrawOpen"</span>: <span class="hljs-string">"2024-05-10 05:00:00"</span>,
      <span class="hljs-attr">"currency"</span>: <span class="hljs-string">"thb"</span>,
      <span class="hljs-attr">"drawExpire"</span>: <span class="hljs-string">"2024-05-10 22:00:00"</span>,
      <span class="hljs-attr">"totalPayOutAmt"</span>: <span class="hljs-string"> 0</span>
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
    <span class="hljs-attr">"code"</span>: <span class="hljs-string">0</span>
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
          <a href="#close" @click="closeAndClear" title="Close" class="close"
            >X</a
          >
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

                <code id="356A" style="border-radius: 0.375rem;  height: 300px; overflow: scroll;" class="hljs json">{
    <span class="hljs-attr">"service"</span>: <span class="hljs-string">"UserPlaceReToRunning"</span>,
    <span class="hljs-attr">"data"</span>: {
        <span class="hljs-attr">"playerApiId"</span>: <span class="hljs-string">"281199a5837d34ce72dcc86c0e14bc26b9362d63b0f49173a3b977d0dfe2adfd"</span>,
        <span class="hljs-attr">"playerApiUsername"</span>: <span class="hljs-string">"testa0aagentthbmb01@comptestseamless"</span>,
        <span class="hljs-attr">"playerUsername"</span>: <span class="hljs-string">"testa0aagentthbmb01"</span>,
        <span class="hljs-attr">"ticketId"</span>: <span class="hljs-string">40864</span>,
        <span class="hljs-attr">"type"</span>: <span class="hljs-string">"pingponglotto6"</span>,
        <span class="hljs-attr">"government"</span>: <span class="hljs-string">false</span>,
        <span class="hljs-attr">"drawId"</span>: <span class="hljs-string">37187</span>,
        <span class="hljs-attr">"totalBetAmt"</span>: <span class="hljs-string">1243</span>,
        <span class="hljs-attr">"txtList"</span>: [
            {
                <span class="hljs-attr">"agentPt"</span>: <span class="hljs-string">"95"</span>,
                <span class="hljs-attr">"apiPt"</span>: <span class="hljs-string">"5"</span>,
                <span class="hljs-attr">"betKey"</span>: <span class="hljs-string">"NDA4NjQtMQ=="</span>,
                <span class="hljs-attr">"betId"</span>: <span class="hljs-string">"1"</span>,
                <span class="hljs-attr">"betType"</span>: <span class="hljs-string">"top6"</span>,
                <span class="hljs-attr">"betNumber"</span>: <span class="hljs-string">"789000"</span>,
                <span class="hljs-attr">"betStatus"</span>: <span class="hljs-string">"pending"</span>,
                <span class="hljs-attr">"betAmt"</span>: <span class="hljs-string">733</span>,
                <span class="hljs-attr">"betTotal"</span>: <span class="hljs-string">733</span>,
                <span class="hljs-attr">"betDiscount"</span>: <span class="hljs-string">0</span>,
                <span class="hljs-attr">"payOutRate"</span>: <span class="hljs-string">50000</span>,
                <span class="hljs-attr">"rateLevel"</span>: <span class="hljs-string">0</span>,
                <span class="hljs-attr">"rateLevelAmount"</span>: <span class="hljs-string">0</span>,
                <span class="hljs-attr">"betResultKey"</span>: <span class="hljs-string">""</span>,
                <span class="hljs-attr">"payOutAmt"</span>: <span class="hljs-string">0</span>
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
            </div> -->
            <!-- // -->
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
            <!-- <div class="koh-faq-question form-group ex">
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
    <span class="hljs-attr">"code"</span>: <span class="hljs-string">0</span>
}</code></pre>
            </div> -->
            <!-- // -->
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
    <span class="hljs-attr">"code"</span>: <span class="hljs-string">0</span>
}</code></pre>
              </div>
            </div>

            <div v-else-if="nosuccess">
              <div class="koh-faq-answer col-12">
                <pre>

                                        <code id="351B" style="border-radius: 0.375rem;" class="hljs json">{
    <span class="hljs-attr">"code"</span>: <span class="hljs-string">{{numfail}}</span>,
        <span class="hljs-attr">"mgs"</span>: <span class="hljs-string">{{ nosuccess }}</span>
}</code></pre>
              </div>
            </div>
            <div v-else-if="permission">
              <div class="koh-faq-answer col-12">
                <pre>

                                        <code id="351B" style="border-radius: 0.375rem;" class="hljs json">{
    <span class="hljs-attr">"code"</span>: <span class="hljs-string">{{numfail}}</span>,
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
      URLdata: "https://handsome.pirate168.com/", // กำหนดค่าเริ่มต้นของ agentUsername
      // playerApiId: "",
      // playerApiUsername: "",
      // playerUsername: "",
    };
  },
  beforeCreate() {},
  mounted() {
    // this.get_Seamless();
    const json = {
      service: "UserPlaceReToRunning",
      data: {
        playerApiId:
          "85e6041148d44880338d625674a51c4ea0afce5108c28590ae2ef62bb265d819",
        playerApiUsername: "member1@handsome",
        playerUsername: "member1",
        ticketId: 4208113,
        type: "stockgerman",
        government: false,
        drawId: 72140,
        totalBetAmt: 2,
        txtList: [
          {
            agentPt: "0",
            apiPt: "100",
            betKey: "NDIwODExMy0x",
            betId: "1",
            betType: "top3",
            betNumber: "198",
            betStatus: "pending",
            betAmt: 1,
            betTotal: 1,
            betDiscount: 0,
            payOutRate: 900,
            rateLevel: 0,
            rateLevelAmount: 0,
            betResultKey: "",
            payOutAmt: 0,
          },
          {
            agentPt: "0",
            apiPt: "100",
            betKey: "NDIwODExMy0y",
            betId: "2",
            betType: "top3",
            betNumber: "983",
            betStatus: "pending",
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
        status: "pending",
        createDate: "2024-05-10 16:49:40",
        DrawOpen: "2024-05-10 05:00:00",
        currency: "thb",
        drawExpire: "2024-05-10 22:00:00",
        totalPayOutAmt: 0,
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
    // get_Seamless() {
    //         alert("Send code clicked!");
    //   this.isLoading = true;
    //   this.pop = true;
    //   var senduser = {
    //     service: "UserPlaceReToRunning",
    //     // playerApiId: this.playerApiId,
    //     // playerApiUsername: this.playerApiUsername,
    //     // playerUsername: this.playerUsername,
    //     data: {
    //       playerApiId:
    //         "989bda3ba671f2374635d295fc08b4f461cd1e48fb749420287f9b7f66cb8ced",
    //       playerApiUsername: "AALFLFLFLF000005@top1betvip",
    //       playerUsername: "AALFLFLFLF000005",
    //       ticketId: 2904120,
    //       type: "pingponglotto",
    //       government: false,
    //       drawId: 62551,
    //       totalBetAmt: -39.67,
    //       txtList: [
    //         {
    //           agentPt: "0",
    //           apiPt: "100",
    //           betKey: "MjkwNDEyMC0x",
    //           betId: "1",
    //           betType: "top2",
    //           betNumber: "88",
    //           betStatus: "pending",
    //           betAmt: 9.975,
    //           betTotal: 10,
    //           betDiscount: 0.3,
    //           payOutRate: 90,
    //           rateLevel: 0,
    //           rateLevelAmount: 0,
    //           betResultKey: "",
    //           payOutAmt: 0,
    //         },
    //         {
    //           agentPt: "0",
    //           apiPt: "100",
    //           betKey: "MjkwNDEyMC0y",
    //           betId: "2",
    //           betType: "bottom2",
    //           betNumber: "88",
    //           betStatus: "pending",
    //           betAmt: 9.9,
    //           betTotal: 10,
    //           betDiscount: 1,
    //           payOutRate: 90,
    //           rateLevel: 0,
    //           rateLevelAmount: 0,
    //           betResultKey: "",
    //           payOutAmt: 0,
    //         },
    //         {
    //           agentPt: "0",
    //           apiPt: "100",
    //           betKey: "MjkwNDEyMC0z",
    //           betId: "3",
    //           betType: "top1",
    //           betNumber: "8",
    //           betStatus: "pending",
    //           betAmt: 9.9,
    //           betTotal: 10,
    //           betDiscount: 1,
    //           payOutRate: 3,
    //           rateLevel: 0,
    //           rateLevelAmount: 0,
    //           betResultKey: "",
    //           payOutAmt: 0,
    //         },
    //         {
    //           agentPt: "0",
    //           apiPt: "100",
    //           betKey: "MjkwNDEyMC00",
    //           betId: "4",
    //           betType: "bottom1",
    //           betNumber: "8",
    //           betStatus: "pending",
    //           betAmt: 9.9,
    //           betTotal: 10,
    //           betDiscount: 1,
    //           payOutRate: 4.2,
    //           rateLevel: 0,
    //           rateLevelAmount: 0,
    //           betResultKey: "",
    //           payOutAmt: 0,
    //         },
    //       ],
    //       status: "pending",
    //       createDate: "2024-03-15 18:52:37",
    //       DrawOpen: "2024-03-15 18:30:00",
    //       currency: "thb",
    //       drawExpire: "2024-03-15 19:00:00",
    //       totalPayOutAmt: 0,
    //     },
    //   };
    //   // const URL =
    //   // "https://top1betvip.infosoft.click/api/latest/integration/lotto";
    //   const URL = "https://api-test.ambexapi.com/api/v1/l/c";
    //   this.$axios
    //     .$post(URL, senduser)
    //     .then((response) => {
    //       console.log(response);
    //       if (response.code === 0 || response.code === 200) {
    //                     this.success = "Successful operation.";
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
    // .catch((error) => {
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
