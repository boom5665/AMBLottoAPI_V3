
<template>
  <div style="">
    <div type="primary" class="box-r-scoll">
      <div>
        <div class="font-prim"><span>Code Semless</span></div>
      </div>
      <!-- // -->

      <div class="col-12" id="tabSeven" style="margin-bottom: 25px">
        <div>
          <b style="color: #19a17a !important" set-lan="text:4.5.3 UserPlaceBet"
            >4.5.3
            <span style="padding-left: 3px" id="Seamless_UserPlaceBet"
              >UserPlaceBet</span
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
            >Example Request Body
          </b>
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
      <div class="koh-faq-answer col-12">
        <pre>
                                        <code id="352A" style="border-radius: 0.375rem; height: 500px; overflow: scroll;" class="hljs json">{
    <span class="hljs-attr">"service"</span>: <span class="hljs-string">"UserPlaceBet"</span>,
    <span class="hljs-attr">"data"</span>: {
        <span class="hljs-attr">"playerApiId"</span>: <span class="hljs-string">"281199a5837d34ce72dcc86c0e14bc26b9362d63b0f49173a3b977d0dfe2adfd"</span>,
        <span class="hljs-attr">"playerApiUsername"</span>: <span class="hljs-string">"testa0aagentthbmb01@comptestseamless"</span>,
        <span class="hljs-attr">"playerUsername"</span>: <span class="hljs-string">"testa0aagentthbmb01"</span>,
        <span class="hljs-attr">"ticketId"</span>: <span class="hljs-string">"39781"</span>,
        <span class="hljs-attr">"type"</span>: <span class="hljs-string">"yeekeelotto"</span>,
        <span class="hljs-attr">"government"</span>: <span class="hljs-string">false</span>,
        <span class="hljs-attr">"drawId"</span>: <span class="hljs-number">36160</span>,
        <span class="hljs-attr">"totalBetAmt"</span>: <span class="hljs-number">-49.00000000000001</span>,
        <span class="hljs-attr">"drawName"</span>: <span class="hljs-number">"Yeekee Lotto"</span>,
        <span class="hljs-attr">"drawExpire"</span>: <span class="hljs-number">"2023-10-03 15:14:00"</span>,
        <span class="hljs-attr">"txtList"</span>: [
            {
                <span class="hljs-attr">"agentPt"</span>: <span class="hljs-number">"0"</span>,
                <span class="hljs-attr">"apiPt"</span>: <span class="hljs-number">"100"</span>,
                <span class="hljs-attr">"betKey"</span>: <span class="hljs-number">"Mzk3ODEtMQ=="</span>,
                <span class="hljs-attr">"betId"</span>: <span class="hljs-number">"1"</span>,
                <span class="hljs-attr">"betType"</span>: <span class="hljs-number">"top2"</span>,
                <span class="hljs-attr">"betNumber"</span>: <span class="hljs-number">"12"</span>,
                <span class="hljs-attr">"betStatus"</span>: <span class="hljs-number">"pending"</span>,
                <span class="hljs-attr">"betAmt"</span>: <span class="hljs-number">5</span>,
                <span class="hljs-attr">"betTotal"</span>: <span class="hljs-number">4.95</span>,
                <span class="hljs-attr">"betDiscount"</span>: <span class="hljs-number">0.05</span>,
                <span class="hljs-attr">"payOutRate"</span>: <span class="hljs-number">90</span>,
                <span class="hljs-attr">"rateLevel"</span>: <span class="hljs-number">0</span>,
                <span class="hljs-attr">"rateLevelAmount"</span>: <span class="hljs-number">0</span>,
                <span class="hljs-attr">"betResultKey"</span>: <span class="hljs-number">" "</span>,
                <span class="hljs-attr">"payOutAmt"</span>: <span class="hljs-number">0</span>
            },
            {
                <span class="hljs-attr">"agentPt"</span>: <span class="hljs-number">"0"</span>,
                <span class="hljs-attr">"apiPt"</span>: <span class="hljs-number">"100"</span>,
                <span class="hljs-attr">"betKey"</span>: <span class="hljs-number">"Mzk3ODEtMQ=="</span>,
                <span class="hljs-attr">"betId"</span>: <span class="hljs-number">"2"</span>,
                <span class="hljs-attr">"betType"</span>: <span class="hljs-number">"bottom2"</span>,
                <span class="hljs-attr">"betNumber"</span>: <span class="hljs-number">"12"</span>,
                <span class="hljs-attr">"betStatus"</span>: <span class="hljs-number">"pending"</span>,
                <span class="hljs-attr">"betAmt"</span>: <span class="hljs-number">5</span>,
                <span class="hljs-attr">"betTotal"</span>: <span class="hljs-number">5</span>,
                <span class="hljs-attr">"betDiscount"</span>: <span class="hljs-number">0</span>,
                <span class="hljs-attr">"payOutRate"</span>: <span class="hljs-number">90</span>,
                <span class="hljs-attr">"rateLevel"</span>: <span class="hljs-number">0</span>,
                <span class="hljs-attr">"rateLevelAmount"</span>: <span class="hljs-number">0</span>,
                <span class="hljs-attr">"betResultKey"</span>: <span class="hljs-number">" "</span>,
                <span class="hljs-attr">"payOutAmt"</span>: <span class="hljs-number">0</span>
            }
        ],
        <span class="hljs-attr">"status"</span>: <span class="hljs-number">"pending"</span>,
        <span class="hljs-attr">"createDate"</span>: <span class="hljs-number">"2023-10-03 15:12:25"</span>,
        <span class="hljs-attr">"ip"</span>: <span class="hljs-number">"8.213.194.49"</span>,
        <span class="hljs-attr">"currency"</span>: <span class="hljs-number">"thb"</span>,
        <span class="hljs-attr">"DrawOpen"</span>: <span class="hljs-number">"2023-10-03 05:00:00"</span>
    }
}</code></pre>
      </div>
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
           <div v-else-if="permission" class="dis-colum-center">
            <div>
              <span>
                <button class="buton-fail"></button> Code 403&nbsp;&nbsp;
              </span>
            </div>
            <div style="dis-center">
              <div>
                {{ permission }}
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
            <div class="koh-faq-answer col-12">
              <pre>
                                        <code id="352A" style="border-radius: 0.375rem; height: 500px; overflow: scroll;" class="hljs json">{
    <span class="hljs-attr">"service"</span>: <span class="hljs-string">"UserPlaceBet"</span>,
    <span class="hljs-attr">"data"</span>: {
        <span class="hljs-attr">"playerApiId"</span>: <span class="hljs-string">"281199a5837d34ce72dcc86c0e14bc26b9362d63b0f49173a3b977d0dfe2adfd"</span>,
        <span class="hljs-attr">"playerApiUsername"</span>: <span class="hljs-string">"testa0aagentthbmb01@comptestseamless"</span>,
        <span class="hljs-attr">"playerUsername"</span>: <span class="hljs-string">"testa0aagentthbmb01"</span>,
        <span class="hljs-attr">"ticketId"</span>: <span class="hljs-string">"39781"</span>,
        <span class="hljs-attr">"type"</span>: <span class="hljs-string">"yeekeelotto"</span>,
        <span class="hljs-attr">"government"</span>: <span class="hljs-string">false</span>,
        <span class="hljs-attr">"drawId"</span>: <span class="hljs-number">36160</span>,
        <span class="hljs-attr">"totalBetAmt"</span>: <span class="hljs-number">-49.00000000000001</span>,
        <span class="hljs-attr">"drawName"</span>: <span class="hljs-number">"Yeekee Lotto"</span>,
        <span class="hljs-attr">"drawExpire"</span>: <span class="hljs-number">"2023-10-03 15:14:00"</span>,
        <span class="hljs-attr">"txtList"</span>: [
            {
                <span class="hljs-attr">"agentPt"</span>: <span class="hljs-number">"0"</span>,
                <span class="hljs-attr">"apiPt"</span>: <span class="hljs-number">"100"</span>,
                <span class="hljs-attr">"betKey"</span>: <span class="hljs-number">"Mzk3ODEtMQ=="</span>,
                <span class="hljs-attr">"betId"</span>: <span class="hljs-number">"1"</span>,
                <span class="hljs-attr">"betType"</span>: <span class="hljs-number">"top2"</span>,
                <span class="hljs-attr">"betNumber"</span>: <span class="hljs-number">"12"</span>,
                <span class="hljs-attr">"betStatus"</span>: <span class="hljs-number">"pending"</span>,
                <span class="hljs-attr">"betAmt"</span>: <span class="hljs-number">5</span>,
                <span class="hljs-attr">"betTotal"</span>: <span class="hljs-number">4.95</span>,
                <span class="hljs-attr">"betDiscount"</span>: <span class="hljs-number">0.05</span>,
                <span class="hljs-attr">"payOutRate"</span>: <span class="hljs-number">90</span>,
                <span class="hljs-attr">"rateLevel"</span>: <span class="hljs-number">0</span>,
                <span class="hljs-attr">"rateLevelAmount"</span>: <span class="hljs-number">0</span>,
                <span class="hljs-attr">"betResultKey"</span>: <span class="hljs-number">" "</span>,
                <span class="hljs-attr">"payOutAmt"</span>: <span class="hljs-number">0</span>
            },
            {
                <span class="hljs-attr">"agentPt"</span>: <span class="hljs-number">"0"</span>,
                <span class="hljs-attr">"apiPt"</span>: <span class="hljs-number">"100"</span>,
                <span class="hljs-attr">"betKey"</span>: <span class="hljs-number">"Mzk3ODEtMQ=="</span>,
                <span class="hljs-attr">"betId"</span>: <span class="hljs-number">"2"</span>,
                <span class="hljs-attr">"betType"</span>: <span class="hljs-number">"bottom2"</span>,
                <span class="hljs-attr">"betNumber"</span>: <span class="hljs-number">"12"</span>,
                <span class="hljs-attr">"betStatus"</span>: <span class="hljs-number">"pending"</span>,
                <span class="hljs-attr">"betAmt"</span>: <span class="hljs-number">5</span>,
                <span class="hljs-attr">"betTotal"</span>: <span class="hljs-number">5</span>,
                <span class="hljs-attr">"betDiscount"</span>: <span class="hljs-number">0</span>,
                <span class="hljs-attr">"payOutRate"</span>: <span class="hljs-number">90</span>,
                <span class="hljs-attr">"rateLevel"</span>: <span class="hljs-number">0</span>,
                <span class="hljs-attr">"rateLevelAmount"</span>: <span class="hljs-number">0</span>,
                <span class="hljs-attr">"betResultKey"</span>: <span class="hljs-number">" "</span>,
                <span class="hljs-attr">"payOutAmt"</span>: <span class="hljs-number">0</span>
            }
        ],
        <span class="hljs-attr">"status"</span>: <span class="hljs-number">"pending"</span>,
        <span class="hljs-attr">"createDate"</span>: <span class="hljs-number">"2023-10-03 15:12:25"</span>,
        <span class="hljs-attr">"ip"</span>: <span class="hljs-number">"8.213.194.49"</span>,
        <span class="hljs-attr">"currency"</span>: <span class="hljs-number">"thb"</span>,
        <span class="hljs-attr">"DrawOpen"</span>: <span class="hljs-number">"2023-10-03 05:00:00"</span>
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

                                        <code id="352B" style="border-radius: 0.375rem;" class="hljs json">{
    <span class="hljs-attr">"code"</span>: <span class="hljs-number">0</span>
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
              <div class="koh-faq-answer col-12">
                <pre>

                                        <code id="352B" style="border-radius: 0.375rem;" class="hljs json">{
    <span class="hljs-attr">"code"</span>: <span class="hljs-number">0</span>
}</code></pre>
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
            <div v-else-if="permission" class="divBox-content">
              <div class="dis-colum-center">
                <div>
                  <span>
                    <button class="buton-fail"></button> Code 403&nbsp;&nbsp;
                  </span>
                </div>
                <div style="dis-center">
                  <div>
                    {{ permission }}
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
  name: "BoxSem45",
  data() {
    return {
      success: "",
      nosuccess: "",
      permission: "",
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
        service: "UserPlaceBet",
        data: {
          playerApiId:
            "281199a5837d34ce72dcc86c0e14bc26b9362d63b0f49173a3b977d0dfe2adfd",
          playerApiUsername: "testa0aagentthbmb01@comptestseamless",
          playerUsername: "testa0aagentthbmb01",
          ticketId: "39781",
          type: "yeekeelotto",
          government: false,
          drawId: 36160,
          totalBetAmt: -49.00000000000001,
          drawName: "Yeekee Lotto",
          drawExpire: "2023-10-03 15:14:00",
          txtList: [
            {
              agentPt: "0",
              apiPt: "100",
              betKey: "Mzk3ODEtMQ==",
              betId: "1",
              betType: "top2",
              betNumber: "12",
              betStatus: "pending",
              betAmt: 5,
              betTotal: 4.95,
              betDiscount: 0.05,
              payOutRate: 90,
              rateLevel: 0,
              rateLevelAmount: 0,
              betResultKey: " ",
              payOutAmt: 0,
            },
            {
              agentPt: "0",
              apiPt: "100",
              betKey: "Mzk3ODEtMQ==",
              betId: "2",
              betType: "bottom2",
              betNumber: "12",
              betStatus: "pending",
              betAmt: 5,
              betTotal: 5,
              betDiscount: 0,
              payOutRate: 90,
              rateLevel: 0,
              rateLevelAmount: 0,
              betResultKey: " ",
              payOutAmt: 0,
            },
          ],
          status: "pending",
          createDate: "2023-10-03 15:12:25",
          ip: "8.213.194.49",
          currency: "thb",
          DrawOpen: "2023-10-03 05:00:00",
        },
      };
      // const URL = "https://top1betvip.infosoft.click/api/latest/integration/lotto";
      const URL = "https://api-test.ambexapi.com/api/v1/l/c";
      this.$axios
        .$post(URL, senduser)
        .then((response) => {
          console.log(response);
          if (response.code === 0) {
            this.success = "Successful operation.";
          } else if (response.code === 403) {
            this.permission = "Permission denied.";
          } else {
            this.nosuccess = "Bad Request.";
          }
        })
        .catch((error) => {
          console.log(error);
          if (response.code === 403) {
            this.permission = "Permission denied.";
          } else {
            this.nosuccess = "Bad Request.";
          }
        });
    },
  },
};
</script>
