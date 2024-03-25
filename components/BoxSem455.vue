
<template>
  <div style="">
    <div type="primary" class="box-r-scoll">
      <div>
        <div class="font-prim"><span>Code Semless</span></div>
      </div>
      <!-- // -->
      <div class="col-12" id="tabSeven" style="margin-bottom: 25px">
        <div>
          <b style="color: #19a17a !important" set-lan="text:4.5.5 UserPlaceBet"
            >4.5.5
            <span
              style="padding-left: 3px margin-bottom: 25px;"
              id="Seamless_UserPlaceBet"
              >UserPlacePayout</span
            ></b
          >
        </div>
      </div>
      <!-- <div class="boxinput">
        <div class="false-input">
          <input
            type="text"
            v-model="playerApiId"
            placeholder="Player Api Id"
          />
        </div>
        <div class="false-input">
          <input
            type="text"
            v-model="playerApiUsername"
            placeholder="Player Api Username"
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
            >Example Request Body
            <span style="color: red"> (กรณีไม่ถูกรางวัล)</span>
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
        <copy-text id="myDiv">
          <pre>
                                        <code id="354A" style="border-radius: 0.375rem;  height: 300px; overflow: scroll;" class="hljs json">{
    <span class="hljs-attr">"service"</span>: <span class="hljs-string">"UserPlacePayout"</span>,
    <span class="hljs-attr">"data"</span>: {
        <span class="hljs-attr">"playerApiId"</span>: <span class="hljs-string">"281199a5837d34ce72dcc86c0e14bc26b9362d63b0f49173a3b977d0dfe2adfd"</span>,
        <span class="hljs-attr">"playerApiUsername"</span>: <span class="hljs-string">"testa0aagentthbmb01@comptestseamless"</span>,
        <span class="hljs-attr">"playerUsername"</span>: <span class="hljs-string">"testa0aagentthbmb01"</span>,
        <span class="hljs-attr">"ticketId"</span>: <span class="hljs-string">"751811"</span>,
        <span class="hljs-attr">"type"</span>: <span class="hljs-string">"stockgerman"</span>,
        <span class="hljs-attr">"government"</span>: <span class="hljs-string">false</span>,
        <span class="hljs-attr">"drawId"</span>: <span class="hljs-string">47600</span>,
        <span class="hljs-attr">"totalBetAmt"</span>: <span class="hljs-string"> -9.9</span>,
        <span class="hljs-attr">"totalPayOutAmt"</span>: <span class="hljs-string"> 900</span>,
        <span class="hljs-attr">"txtList"</span>: [
            {
                <span class="hljs-attr">"agentPt"</span>: <span class="hljs-string">"95"</span>,
                <span class="hljs-attr">"apiPt"</span>: <span class="hljs-string">"5"</span>,
                <span class="hljs-attr">"betKey"</span>: <span class="hljs-string">"NzUxODExLTI="</span>,
                <span class="hljs-attr">"betId"</span>: <span class="hljs-string">"1"</span>,
                <span class="hljs-attr">"betType"</span>: <span class="hljs-string">"bottom2"</span>,
                <span class="hljs-attr">"betNumber"</span>: <span class="hljs-string">"87"</span>,
                <span class="hljs-attr">"betStatus"</span>: <span class="hljs-string">"false"</span>,
                <span class="hljs-attr">"betAmt"</span>: <span class="hljs-string">9.9</span>,
                <span class="hljs-attr">"betTotal"</span>: <span class="hljs-string">10</span>,
                <span class="hljs-attr">"betDiscount"</span>: <span class="hljs-string">1</span>,
                <span class="hljs-attr">"payOutRate"</span>: <span class="hljs-string">90</span>,
                <span class="hljs-attr">"rateLevel"</span>: <span class="hljs-string">0</span>,
                <span class="hljs-attr">"rateLevelAmount"</span>: <span class="hljs-string">0</span>,
                <span class="hljs-attr">"betResultKey"</span>: <span class="hljs-string">""</span>,
                <span class="hljs-attr">"payOutAmt"</span>: <span class="hljs-string">0</span>
            }
        ],
        <span class="hljs-attr">"status"</span>: <span class="hljs-string">"Success"</span>,
        <span class="hljs-attr">"result"</span>: {
            <span class="hljs-attr">"bottom1"</span>: [
                <span class="hljs-string">"7"</span>,
                <span class="hljs-string">"8"</span>
            ],
            <span class="hljs-attr">"bottom2"</span>: [
                <span class="hljs-string">"78"</span>
            ],
            <span class="hljs-attr">"row2"</span>: [
                <span class="hljs-string">"77"</span>,
                <span class="hljs-string">"78"</span>,
                <span class="hljs-string">"87"</span>
            ],
            <span class="hljs-attr">"row3"</span>: [
                <span class="hljs-string">"456"</span>,
                <span class="hljs-string">"465"</span>,
                <span class="hljs-string">"546"</span>,
                <span class="hljs-string">"564"</span>,
                <span class="hljs-string">"645"</span>,
                <span class="hljs-string">"654"</span>
            ],
            <span class="hljs-attr">"top1"</span>: [
                <span class="hljs-string">"4"</span>,
                <span class="hljs-string">"5"</span>,
                <span class="hljs-string">"6"</span>
            ],
            <span class="hljs-attr">"top2"</span>: [
                <span class="hljs-string">"56"</span>
            ],
            <span class="hljs-attr">"top3"</span>: [
                <span class="hljs-string">"456"</span>
            ]
        },
        <span class="hljs-attr">"resultlink"</span>: <span class="hljs-string">""</span>,
        <span class="hljs-attr">"createDate"</span>: <span class="hljs-string">"2023-10-02 20:41:54"</span>,
        <span class="hljs-attr">"currency"</span>: <span class="hljs-string">"thb"</span>

    }
}</code></pre>
        </copy-text>
      </div>
      <div class="koh-faq-question form-group ex">
        <div class="Point">
          <b
            style="color: #19a17a !important"
            set-lan="text:Example Request Body"
            >Example Request Body
            <span style="color: red"> (กรณีถูกรางวัล)</span></b
          >
          <i
            class="fa fa-chevron-down"
            aria-hidden="true"
            style="margin-left: 2%; font-size: 1rem"
          ></i>

          <!-- <div class="btn-send">
            <a href="#openModal-about">
              <button class="custom-btn btn-13" @click="get_semless">
                Send Code
              </button></a
            >
          </div> -->
        </div>
      </div>
      <div class="koh-faq-answer col-12">
        <copy-text id="myDiv">
          <pre>

                                        <code id="354A" style="border-radius: 0.375rem;  height: 300px; overflow: scroll;" class="hljs json">{
    <span class="hljs-attr">"service"</span>: <span class="hljs-string">"UserPlacePayout"</span>,
    <span class="hljs-attr">"data"</span>: {
        <span class="hljs-attr">"playerApiId"</span>: <span class="hljs-string">"281199a5837d34ce72dcc86c0e14bc26b9362d63b0f49173a3b977d0dfe2adfd"</span>,
        <span class="hljs-attr">"playerApiUsername"</span>: <span class="hljs-string">"testa0aagentthbmb01@comptestseamless"</span>,
        <span class="hljs-attr">"playerUsername"</span>: <span class="hljs-string">"testa0aagentthbmb01"</span>,
        <span class="hljs-attr">"ticketId"</span>: <span class="hljs-string">"751812"</span>,
        <span class="hljs-attr">"type"</span>: <span class="hljs-string">"stockgerman"</span>,
        <span class="hljs-attr">"government"</span>: <span class="hljs-string">false</span>,
        <span class="hljs-attr">"drawId"</span>: <span class="hljs-string">47600</span>,
        <span class="hljs-attr">"totalBetAmt"</span>: <span class="hljs-string"> -9.9</span>,
        <span class="hljs-attr">"totalPayOutAmt"</span>: <span class="hljs-string"> 900</span>,
        <span class="hljs-attr">"txtList"</span>: [
            {
                <span class="hljs-attr">"agentPt"</span>: <span class="hljs-string">"95"</span>,
                <span class="hljs-attr">"apiPt"</span>: <span class="hljs-string">"5"</span>,
                <span class="hljs-attr">"betKey"</span>: <span class="hljs-string">"NzUxODExLTE="</span>,
                <span class="hljs-attr">"betId"</span>: <span class="hljs-string">"1"</span>,
                <span class="hljs-attr">"betType"</span>: <span class="hljs-string">"bottom2"</span>,
                <span class="hljs-attr">"betNumber"</span>: <span class="hljs-string">"78"</span>,
                <span class="hljs-attr">"betStatus"</span>: <span class="hljs-string">"true"</span>,
                <span class="hljs-attr">"betAmt"</span>: <span class="hljs-string">9.9</span>,
                <span class="hljs-attr">"betTotal"</span>: <span class="hljs-string">10</span>,
                <span class="hljs-attr">"betDiscount"</span>: <span class="hljs-string">1</span>,
                <span class="hljs-attr">"payOutRate"</span>: <span class="hljs-string">90</span>,
                <span class="hljs-attr">"rateLevel"</span>: <span class="hljs-string">0</span>,
                <span class="hljs-attr">"rateLevelAmount"</span>: <span class="hljs-string">0</span>,
                <span class="hljs-attr">"betResultKey"</span>: <span class="hljs-string">"bottom2"</span>,
                <span class="hljs-attr">"payOutAmt"</span>: <span class="hljs-string">900</span>
            }
        ],
        <span class="hljs-attr">"status"</span>: <span class="hljs-string">"Success"</span>,
        <span class="hljs-attr">"result"</span>: {
            <span class="hljs-attr">"bottom1"</span>: [
                <span class="hljs-string">"7"</span>,
                <span class="hljs-string">"8"</span>
            ],
            <span class="hljs-attr">"bottom2"</span>: [
                <span class="hljs-string">"78"</span>
            ],
            <span class="hljs-attr">"row2"</span>: [
                <span class="hljs-string">"77"</span>,
                <span class="hljs-string">"78"</span>,
                <span class="hljs-string">"87"</span>
            ],
            <span class="hljs-attr">"row3"</span>: [
                <span class="hljs-string">"456"</span>,
                <span class="hljs-string">"465"</span>,
                <span class="hljs-string">"546"</span>,
                <span class="hljs-string">"564"</span>,
                <span class="hljs-string">"645"</span>,
                <span class="hljs-string">"654"</span>
            ],
            <span class="hljs-attr">"top1"</span>: [
                <span class="hljs-string">"4"</span>,
                <span class="hljs-string">"5"</span>,
                <span class="hljs-string">"6"</span>
            ],
            <span class="hljs-attr">"top2"</span>: [
                <span class="hljs-string">"56"</span>
            ],
            <span class="hljs-attr">"top3"</span>: [
                <span class="hljs-string">"456"</span>
            ]
        },
        <span class="hljs-attr">"resultlink"</span>: <span class="hljs-string">""</span>,
        <span class="hljs-attr">"createDate"</span>: <span class="hljs-string">"2023-10-02 20:41:54"</span>,
        <span class="hljs-attr">"currency"</span>: <span class="hljs-string">"thb"</span>

    }
}</code></pre>
        </copy-text>
      </div>
      <!-- // -->
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
      <!-- // -->

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
                  >Example Request Body
                  <span style="color: red"> (กรณีไม่ถูกรางวัล)</span>
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
                                        <code id="354A" style="border-radius: 0.375rem;  height: 300px; overflow: scroll;" class="hljs json">{
    <span class="hljs-attr">"service"</span>: <span class="hljs-string">"UserPlacePayout"</span>,
    <span class="hljs-attr">"data"</span>: {
        <span class="hljs-attr">"playerApiId"</span>: <span class="hljs-string">"281199a5837d34ce72dcc86c0e14bc26b9362d63b0f49173a3b977d0dfe2adfd"</span>,
        <span class="hljs-attr">"playerApiUsername"</span>: <span class="hljs-string">"testa0aagentthbmb01@comptestseamless"</span>,
        <span class="hljs-attr">"playerUsername"</span>: <span class="hljs-string">"testa0aagentthbmb01"</span>,
        <span class="hljs-attr">"ticketId"</span>: <span class="hljs-string">"751811"</span>,
        <span class="hljs-attr">"type"</span>: <span class="hljs-string">"stockgerman"</span>,
        <span class="hljs-attr">"government"</span>: <span class="hljs-string">false</span>,
        <span class="hljs-attr">"drawId"</span>: <span class="hljs-string">47600</span>,
        <span class="hljs-attr">"totalBetAmt"</span>: <span class="hljs-string"> -9.9</span>,
        <span class="hljs-attr">"totalPayOutAmt"</span>: <span class="hljs-string"> 900</span>,
        <span class="hljs-attr">"txtList"</span>: [
            {
                <span class="hljs-attr">"agentPt"</span>: <span class="hljs-string">"95"</span>,
                <span class="hljs-attr">"apiPt"</span>: <span class="hljs-string">"5"</span>,
                <span class="hljs-attr">"betKey"</span>: <span class="hljs-string">"NzUxODExLTI="</span>,
                <span class="hljs-attr">"betId"</span>: <span class="hljs-string">"1"</span>,
                <span class="hljs-attr">"betType"</span>: <span class="hljs-string">"bottom2"</span>,
                <span class="hljs-attr">"betNumber"</span>: <span class="hljs-string">"87"</span>,
                <span class="hljs-attr">"betStatus"</span>: <span class="hljs-string">"false"</span>,
                <span class="hljs-attr">"betAmt"</span>: <span class="hljs-string">9.9</span>,
                <span class="hljs-attr">"betTotal"</span>: <span class="hljs-string">10</span>,
                <span class="hljs-attr">"betDiscount"</span>: <span class="hljs-string">1</span>,
                <span class="hljs-attr">"payOutRate"</span>: <span class="hljs-string">90</span>,
                <span class="hljs-attr">"rateLevel"</span>: <span class="hljs-string">0</span>,
                <span class="hljs-attr">"rateLevelAmount"</span>: <span class="hljs-string">0</span>,
                <span class="hljs-attr">"betResultKey"</span>: <span class="hljs-string">""</span>,
                <span class="hljs-attr">"payOutAmt"</span>: <span class="hljs-string">0</span>
            }
        ],
        <span class="hljs-attr">"status"</span>: <span class="hljs-string">"Success"</span>,
        <span class="hljs-attr">"result"</span>: {
            <span class="hljs-attr">"bottom1"</span>: [
                <span class="hljs-string">"7"</span>,
                <span class="hljs-string">"8"</span>
            ],
            <span class="hljs-attr">"bottom2"</span>: [
                <span class="hljs-string">"78"</span>
            ],
            <span class="hljs-attr">"row2"</span>: [
                <span class="hljs-string">"77"</span>,
                <span class="hljs-string">"78"</span>,
                <span class="hljs-string">"87"</span>
            ],
            <span class="hljs-attr">"row3"</span>: [
                <span class="hljs-string">"456"</span>,
                <span class="hljs-string">"465"</span>,
                <span class="hljs-string">"546"</span>,
                <span class="hljs-string">"564"</span>,
                <span class="hljs-string">"645"</span>,
                <span class="hljs-string">"654"</span>
            ],
            <span class="hljs-attr">"top1"</span>: [
                <span class="hljs-string">"4"</span>,
                <span class="hljs-string">"5"</span>,
                <span class="hljs-string">"6"</span>
            ],
            <span class="hljs-attr">"top2"</span>: [
                <span class="hljs-string">"56"</span>
            ],
            <span class="hljs-attr">"top3"</span>: [
                <span class="hljs-string">"456"</span>
            ]
        },
        <span class="hljs-attr">"resultlink"</span>: <span class="hljs-string">""</span>,
        <span class="hljs-attr">"createDate"</span>: <span class="hljs-string">"2023-10-02 20:41:54"</span>,
        <span class="hljs-attr">"currency"</span>: <span class="hljs-string">"thb"</span>

    }
}</code></pre>
            </div>
            <div class="koh-faq-question form-group ex">
              <div class="Point">
                <b
                  style="color: #19a17a !important"
                  set-lan="text:Example Request Body"
                  >Example Request Body
                  <span style="color: red"> (กรณีถูกรางวัล)</span></b
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

                                        <code id="354A" style="border-radius: 0.375rem;  height: 300px; overflow: scroll;" class="hljs json">{
    <span class="hljs-attr">"service"</span>: <span class="hljs-string">"UserPlacePayout"</span>,
    <span class="hljs-attr">"data"</span>: {
        <span class="hljs-attr">"playerApiId"</span>: <span class="hljs-string">"281199a5837d34ce72dcc86c0e14bc26b9362d63b0f49173a3b977d0dfe2adfd"</span>,
        <span class="hljs-attr">"playerApiUsername"</span>: <span class="hljs-string">"testa0aagentthbmb01@comptestseamless"</span>,
        <span class="hljs-attr">"playerUsername"</span>: <span class="hljs-string">"testa0aagentthbmb01"</span>,
        <span class="hljs-attr">"ticketId"</span>: <span class="hljs-string">"751812"</span>,
        <span class="hljs-attr">"type"</span>: <span class="hljs-string">"stockgerman"</span>,
        <span class="hljs-attr">"government"</span>: <span class="hljs-string">false</span>,
        <span class="hljs-attr">"drawId"</span>: <span class="hljs-string">47600</span>,
        <span class="hljs-attr">"totalBetAmt"</span>: <span class="hljs-string"> -9.9</span>,
        <span class="hljs-attr">"totalPayOutAmt"</span>: <span class="hljs-string"> 900</span>,
        <span class="hljs-attr">"txtList"</span>: [
            {
                <span class="hljs-attr">"agentPt"</span>: <span class="hljs-string">"95"</span>,
                <span class="hljs-attr">"apiPt"</span>: <span class="hljs-string">"5"</span>,
                <span class="hljs-attr">"betKey"</span>: <span class="hljs-string">"NzUxODExLTE="</span>,
                <span class="hljs-attr">"betId"</span>: <span class="hljs-string">"1"</span>,
                <span class="hljs-attr">"betType"</span>: <span class="hljs-string">"bottom2"</span>,
                <span class="hljs-attr">"betNumber"</span>: <span class="hljs-string">"78"</span>,
                <span class="hljs-attr">"betStatus"</span>: <span class="hljs-string">"true"</span>,
                <span class="hljs-attr">"betAmt"</span>: <span class="hljs-string">9.9</span>,
                <span class="hljs-attr">"betTotal"</span>: <span class="hljs-string">10</span>,
                <span class="hljs-attr">"betDiscount"</span>: <span class="hljs-string">1</span>,
                <span class="hljs-attr">"payOutRate"</span>: <span class="hljs-string">90</span>,
                <span class="hljs-attr">"rateLevel"</span>: <span class="hljs-string">0</span>,
                <span class="hljs-attr">"rateLevelAmount"</span>: <span class="hljs-string">0</span>,
                <span class="hljs-attr">"betResultKey"</span>: <span class="hljs-string">"bottom2"</span>,
                <span class="hljs-attr">"payOutAmt"</span>: <span class="hljs-string">900</span>
            }
        ],
        <span class="hljs-attr">"status"</span>: <span class="hljs-string">"Success"</span>,
        <span class="hljs-attr">"result"</span>: {
            <span class="hljs-attr">"bottom1"</span>: [
                <span class="hljs-string">"7"</span>,
                <span class="hljs-string">"8"</span>
            ],
            <span class="hljs-attr">"bottom2"</span>: [
                <span class="hljs-string">"78"</span>
            ],
            <span class="hljs-attr">"row2"</span>: [
                <span class="hljs-string">"77"</span>,
                <span class="hljs-string">"78"</span>,
                <span class="hljs-string">"87"</span>
            ],
            <span class="hljs-attr">"row3"</span>: [
                <span class="hljs-string">"456"</span>,
                <span class="hljs-string">"465"</span>,
                <span class="hljs-string">"546"</span>,
                <span class="hljs-string">"564"</span>,
                <span class="hljs-string">"645"</span>,
                <span class="hljs-string">"654"</span>
            ],
            <span class="hljs-attr">"top1"</span>: [
                <span class="hljs-string">"4"</span>,
                <span class="hljs-string">"5"</span>,
                <span class="hljs-string">"6"</span>
            ],
            <span class="hljs-attr">"top2"</span>: [
                <span class="hljs-string">"56"</span>
            ],
            <span class="hljs-attr">"top3"</span>: [
                <span class="hljs-string">"456"</span>
            ]
        },
        <span class="hljs-attr">"resultlink"</span>: <span class="hljs-string">""</span>,
        <span class="hljs-attr">"createDate"</span>: <span class="hljs-string">"2023-10-02 20:41:54"</span>,
        <span class="hljs-attr">"currency"</span>: <span class="hljs-string">"thb"</span>

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
                  >Example Reponse
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

                                        <code id="351B" style="border-radius: 0.375rem;" class="hljs json">{
    <span class="hljs-attr">"code"</span>: <span class="hljs-number">0</span>,
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
      URLdata: "", // กำหนดค่าเริ่มต้นของ agentUsername
      // playerApiId: "",
      // playerApiUsername: "",
      // playerUsername: "",
    };
  },
  beforeCreate() {},
  mounted() {
    // this.get_semless();
  },
  watch: {},
  methods: {
    // get_semlessfalse() {
    //   alert("Send code clicked!");
    //   this.isLoading = true;
    //   this.pop = true;
    //   var senduser = {
    //     service: "UserPlacePayout",
    //     // playerApiId: this.playerApiId,
    //     // playerApiUsername: this.playerApiUsername,
    //     // playerUsername: this.playerUsername,
    //     // data: {

    //     //   playerApiId:
    //     //     "989bda3ba671f2374635d295fc08b4f461cd1e48fb749420287f9b7f66cb8ced",
    //     //   playerApiUsername: "AALFLFLFLF000005@top1betvip",
    //     //   playerUsername: "AALFLFLFLF000005",

    //     //   ticketId: 2897891,
    //     //   type: "pingponglotto",
    //     //   government: false,
    //     //   drawId: 62541,
    //     //   totalBetAmt: -15.92,
    //     //   totalPayOutAmt: 0,
    //     //   txtList: [
    //     //     {
    //     //       agentPt: "0",
    //     //       apiPt: "100",
    //     //       betKey: "Mjg5Nzg5MS0x",
    //     //       betId: "1",
    //     //       betType: "top2",
    //     //       betNumber: "16",
    //     //       betStatus: "false",
    //     //       betAmt: 1.995,
    //     //       betTotal: 2,
    //     //       betDiscount: 0.5,
    //     //       payOutRate: 90,
    //     //       rateLevel: 0,
    //     //       rateLevelAmount: 0,
    //     //       betResultKey: "",
    //     //       payOutAmt: 0,
    //     //     },
    //     //     {
    //     //       agentPt: "0",
    //     //       apiPt: "100",
    //     //       betKey: "Mjg5Nzg5MS0y",
    //     //       betId: "2",
    //     //       betType: "top2",
    //     //       betNumber: "61",
    //     //       betStatus: "false",
    //     //       betAmt: 1.995,
    //     //       betTotal: 2,
    //     //       betDiscount: 0.5,
    //     //       payOutRate: 90,
    //     //       rateLevel: 0,
    //     //       rateLevelAmount: 0,
    //     //       betResultKey: "",
    //     //       payOutAmt: 0,
    //     //     },
    //     //     {
    //     //       agentPt: "0",
    //     //       apiPt: "100",
    //     //       betKey: "Mjg5Nzg5MS0z",
    //     //       betId: "3",
    //     //       betType: "bottom2",
    //     //       betNumber: "16",
    //     //       betStatus: "false",
    //     //       betAmt: 1.98,
    //     //       betTotal: 2,
    //     //       betDiscount: 1,
    //     //       payOutRate: 90,
    //     //       rateLevel: 0,
    //     //       rateLevelAmount: 0,
    //     //       betResultKey: "",
    //     //       payOutAmt: 0,
    //     //     },
    //     //     {
    //     //       agentPt: "0",
    //     //       apiPt: "100",
    //     //       betKey: "Mjg5Nzg5MS00",
    //     //       betId: "4",
    //     //       betType: "bottom2",
    //     //       betNumber: "61",
    //     //       betStatus: "false",
    //     //       betAmt: 1.98,
    //     //       betTotal: 2,
    //     //       betDiscount: 1,
    //     //       payOutRate: 90,
    //     //       rateLevel: 0,
    //     //       rateLevelAmount: 0,
    //     //       betResultKey: "",
    //     //       payOutAmt: 0,
    //     //     },
    //     //     {
    //     //       agentPt: "0",
    //     //       apiPt: "100",
    //     //       betKey: "Mjg5Nzg5MS01",
    //     //       betId: "5",
    //     //       betType: "top2",
    //     //       betNumber: "68",
    //     //       betStatus: "false",
    //     //       betAmt: 1.995,
    //     //       betTotal: 2,
    //     //       betDiscount: 0.5,
    //     //       payOutRate: 90,
    //     //       rateLevel: 0,
    //     //       rateLevelAmount: 0,
    //     //       betResultKey: "",
    //     //       payOutAmt: 0,
    //     //     },
    //     //     {
    //     //       agentPt: "0",
    //     //       apiPt: "100",
    //     //       betKey: "Mjg5Nzg5MS02",
    //     //       betId: "6",
    //     //       betType: "top2",
    //     //       betNumber: "86",
    //     //       betStatus: "false",
    //     //       betAmt: 1.995,
    //     //       betTotal: 2,
    //     //       betDiscount: 0.5,
    //     //       payOutRate: 90,
    //     //       rateLevel: 0,
    //     //       rateLevelAmount: 0,
    //     //       betResultKey: "",
    //     //       payOutAmt: 0,
    //     //     },
    //     //     {
    //     //       agentPt: "0",
    //     //       apiPt: "100",
    //     //       betKey: "Mjg5Nzg5MS03",
    //     //       betId: "7",
    //     //       betType: "bottom2",
    //     //       betNumber: "68",
    //     //       betStatus: "false",
    //     //       betAmt: 1.98,
    //     //       betTotal: 2,
    //     //       betDiscount: 1,
    //     //       payOutRate: 90,
    //     //       rateLevel: 0,
    //     //       rateLevelAmount: 0,
    //     //       betResultKey: "",
    //     //       payOutAmt: 0,
    //     //     },
    //     //     {
    //     //       agentPt: "0",
    //     //       apiPt: "100",
    //     //       betKey: "Mjg5Nzg5MS04",
    //     //       betId: "8",
    //     //       betType: "bottom2",
    //     //       betNumber: "86",
    //     //       betStatus: "false",
    //     //       betAmt: 1.98,
    //     //       betTotal: 2,
    //     //       betDiscount: 1,
    //     //       payOutRate: 90,
    //     //       rateLevel: 0,
    //     //       rateLevelAmount: 0,
    //     //       betResultKey: "",
    //     //       payOutAmt: 0,
    //     //     },
    //     //   ],
    //     //   status: "success",
    //     //   result: {
    //     //     bottom1: ["0", "1"],
    //     //     bottom2: ["01"],
    //     //     row2: ["78", "74", "87", "84", "47", "48"],
    //     //     row3: ["478", "487", "748", "784", "847", "874"],
    //     //     row4: [
    //     //       "3478",
    //     //       "3487",
    //     //       "3748",
    //     //       "3784",
    //     //       "3847",
    //     //       "3874",
    //     //       "4378",
    //     //       "4387",
    //     //       "4738",
    //     //       "4783",
    //     //       "4837",
    //     //       "4873",
    //     //       "7348",
    //     //       "7384",
    //     //       "7438",
    //     //       "7483",
    //     //       "7834",
    //     //       "7843",
    //     //       "8347",
    //     //       "8374",
    //     //       "8437",
    //     //       "8473",
    //     //       "8734",
    //     //       "8743",
    //     //     ],
    //     //     top1: ["7", "8", "4"],
    //     //     top2: ["84"],
    //     //     top3: ["784"],
    //     //     top4: ["3784"],
    //     //     top5: ["13784"],
    //     //     top6: ["013784"],
    //     //   },
    //     //   resultlink: "",
    //     //   createDate: "2024-03-15 17:38:38",
    //     //   currency: "thb",
    //     // },
    //     service: "UserPlacePayout",
    //     data: {
    //       playerApiId:
    //         "281199a5837d34ce72dcc86c0e14bc26b9362d63b0f49173a3b977d0dfe2adfd",
    //       playerApiUsername: "testa0aagentthbmb01@comptestseamless",
    //       playerUsername: "testa0aagentthbmb01",
    //       ticketId: "751811",
    //       type: "stockgerman",
    //       government: false,
    //       drawId: 47600,
    //       totalBetAmt: -9.9,
    //       totalPayOutAmt: 900,
    //       txtList: [
    //         {
    //           agentPt: "95",
    //           apiPt: "5",
    //           betKey: "NzUxODExLTI=",
    //           betId: "1",
    //           betType: "bottom2",
    //           betNumber: "87",
    //           betStatus: "false",
    //           betAmt: 9.9,
    //           betTotal: 10,
    //           betDiscount: 1,
    //           payOutRate: 90,
    //           rateLevel: 0,
    //           rateLevelAmount: 0,
    //           betResultKey: "",
    //           payOutAmt: 0,
    //         },
    //       ],
    //       status: "Success",
    //       result: {
    //         bottom1: ["7", "8"],
    //         bottom2: ["78"],
    //         row2: ["77", "78", "87"],
    //         row3: ["456", "465", "546", "564", "645", "654"],
    //         top1: ["4", "5", "6"],
    //         top2: ["56"],
    //         top3: ["456"],
    //       },
    //       resultlink: "",
    //       createDate: "2023-10-02 20:41:54",
    //       currency: "thb",
    //     },
    //   };
    //   // const URL =
    //   //   "https://top1betvip.infosoft.click/api/latest/integration/lotto";
    //   const URL = "https://api-test.ambexapi.com/api/v1/l/c";
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
    // get_semless() {
    //   alert("Send code clicked!");
    //   this.isLoading = true;
    //   this.pop = true;
    //   var senduser = {
    //     // service: "UserPlacePayout",
    //     // data: {
    //     //   service: "UserPlacePayout",
    //     //   data: {
    //     //     playerApiId:
    //     //       "989bda3ba671f2374635d295fc08b4f461cd1e48fb749420287f9b7f66cb8ced",
    //     //     playerApiUsername: "AALFLFLFLF000005@top1betvip",
    //     //     playerUsername: "AALFLFLFLF000005",
    //     //     ticketId: 2897891,
    //     //     type: "pingponglotto",
    //     //     government: false,
    //     //     drawId: 62541,
    //     //     totalBetAmt: -15.92,
    //     //     totalPayOutAmt: 0,
    //     //     txtList: [
    //     //       {
    //     //         agentPt: "0",
    //     //         apiPt: "100",
    //     //         betKey: "Mjg5Nzg5MS0x",
    //     //         betId: "1",
    //     //         betType: "top2",
    //     //         betNumber: "16",
    //     //         betStatus: "false",
    //     //         betAmt: 1.995,
    //     //         betTotal: 2,
    //     //         betDiscount: 0.5,
    //     //         payOutRate: 90,
    //     //         rateLevel: 0,
    //     //         rateLevelAmount: 0,
    //     //         betResultKey: "",
    //     //         payOutAmt: 0,
    //     //       },
    //     //       {
    //     //         agentPt: "0",
    //     //         apiPt: "100",
    //     //         betKey: "Mjg5Nzg5MS0y",
    //     //         betId: "2",
    //     //         betType: "top2",
    //     //         betNumber: "61",
    //     //         betStatus: "false",
    //     //         betAmt: 1.995,
    //     //         betTotal: 2,
    //     //         betDiscount: 0.5,
    //     //         payOutRate: 90,
    //     //         rateLevel: 0,
    //     //         rateLevelAmount: 0,
    //     //         betResultKey: "",
    //     //         payOutAmt: 0,
    //     //       },
    //     //       {
    //     //         agentPt: "0",
    //     //         apiPt: "100",
    //     //         betKey: "Mjg5Nzg5MS0z",
    //     //         betId: "3",
    //     //         betType: "bottom2",
    //     //         betNumber: "16",
    //     //         betStatus: "true",
    //     //         betAmt: 1.98,
    //     //         betTotal: 2,
    //     //         betDiscount: 1,
    //     //         payOutRate: 90,
    //     //         rateLevel: 0,
    //     //         rateLevelAmount: 0,
    //     //         betResultKey: "",
    //     //         payOutAmt: 0,
    //     //       },
    //     //       {
    //     //         agentPt: "0",
    //     //         apiPt: "100",
    //     //         betKey: "Mjg5Nzg5MS00",
    //     //         betId: "4",
    //     //         betType: "bottom2",
    //     //         betNumber: "61",
    //     //         betStatus: "false",
    //     //         betAmt: 1.98,
    //     //         betTotal: 2,
    //     //         betDiscount: 1,
    //     //         payOutRate: 90,
    //     //         rateLevel: 0,
    //     //         rateLevelAmount: 0,
    //     //         betResultKey: "",
    //     //         payOutAmt: 0,
    //     //       },
    //     //       {
    //     //         agentPt: "0",
    //     //         apiPt: "100",
    //     //         betKey: "Mjg5Nzg5MS01",
    //     //         betId: "5",
    //     //         betType: "top2",
    //     //         betNumber: "68",
    //     //         betStatus: "false",
    //     //         betAmt: 1.995,
    //     //         betTotal: 2,
    //     //         betDiscount: 0.5,
    //     //         payOutRate: 90,
    //     //         rateLevel: 0,
    //     //         rateLevelAmount: 0,
    //     //         betResultKey: "",
    //     //         payOutAmt: 0,
    //     //       },
    //     //       {
    //     //         agentPt: "0",
    //     //         apiPt: "100",
    //     //         betKey: "Mjg5Nzg5MS02",
    //     //         betId: "6",
    //     //         betType: "top2",
    //     //         betNumber: "86",
    //     //         betStatus: "false",
    //     //         betAmt: 1.995,
    //     //         betTotal: 2,
    //     //         betDiscount: 0.5,
    //     //         payOutRate: 90,
    //     //         rateLevel: 0,
    //     //         rateLevelAmount: 0,
    //     //         betResultKey: "",
    //     //         payOutAmt: 0,
    //     //       },
    //     //       {
    //     //         agentPt: "0",
    //     //         apiPt: "100",
    //     //         betKey: "Mjg5Nzg5MS03",
    //     //         betId: "7",
    //     //         betType: "bottom2",
    //     //         betNumber: "68",
    //     //         betStatus: "false",
    //     //         betAmt: 1.98,
    //     //         betTotal: 2,
    //     //         betDiscount: 1,
    //     //         payOutRate: 90,
    //     //         rateLevel: 0,
    //     //         rateLevelAmount: 0,
    //     //         betResultKey: "",
    //     //         payOutAmt: 0,
    //     //       },
    //     //       {
    //     //         agentPt: "0",
    //     //         apiPt: "100",
    //     //         betKey: "Mjg5Nzg5MS04",
    //     //         betId: "8",
    //     //         betType: "bottom2",
    //     //         betNumber: "86",
    //     //         betStatus: "false",
    //     //         betAmt: 1.98,
    //     //         betTotal: 2,
    //     //         betDiscount: 1,
    //     //         payOutRate: 90,
    //     //         rateLevel: 0,
    //     //         rateLevelAmount: 0,
    //     //         betResultKey: "",
    //     //         payOutAmt: 0,
    //     //       },
    //     //     ],
    //     //     status: "success",
    //     //     result: {
    //     //       bottom1: ["0", "1"],
    //     //       bottom2: ["01"],
    //     //       row2: ["78", "74", "87", "84", "47", "48"],
    //     //       row3: ["478", "487", "748", "784", "847", "874"],
    //     //       row4: [
    //     //         "3478",
    //     //         "3487",
    //     //         "3748",
    //     //         "3784",
    //     //         "3847",
    //     //         "3874",
    //     //         "4378",
    //     //         "4387",
    //     //         "4738",
    //     //         "4783",
    //     //         "4837",
    //     //         "4873",
    //     //         "7348",
    //     //         "7384",
    //     //         "7438",
    //     //         "7483",
    //     //         "7834",
    //     //         "7843",
    //     //         "8347",
    //     //         "8374",
    //     //         "8437",
    //     //         "8473",
    //     //         "8734",
    //     //         "8743",
    //     //       ],
    //     //       top1: ["7", "8", "4"],
    //     //       top2: ["84"],
    //     //       top3: ["784"],
    //     //       top4: ["3784"],
    //     //       top5: ["13784"],
    //     //       top6: ["013784"],
    //     //     },
    //     //     resultlink: "",
    //     //     createDate: "2024-03-15 17:38:38",
    //     //     currency: "thb",
    //     //   },
    //     // },
    //     service: "UserPlacePayout",
    //     data: {
    //       playerApiId:
    //         "281199a5837d34ce72dcc86c0e14bc26b9362d63b0f49173a3b977d0dfe2adfd",
    //       playerApiUsername: "testa0aagentthbmb01@comptestseamless",
    //       playerUsername: "testa0aagentthbmb01",
    //       ticketId: "751812",
    //       type: "stockgerman",
    //       government: false,
    //       drawId: 47600,
    //       totalBetAmt: -9.9,
    //       totalPayOutAmt: 900,
    //       txtList: [
    //         {
    //           agentPt: "95",
    //           apiPt: "5",
    //           betKey: "NzUxODExLTE=",
    //           betId: "1",
    //           betType: "bottom2",
    //           betNumber: "78",
    //           betStatus: "true",
    //           betAmt: 9.9,
    //           betTotal: 10,
    //           betDiscount: 1,
    //           payOutRate: 90,
    //           rateLevel: 0,
    //           rateLevelAmount: 0,
    //           betResultKey: "bottom2",
    //           payOutAmt: 900,
    //         },
    //       ],
    //       status: "Success",
    //       result: {
    //         bottom1: ["7", "8"],
    //         bottom2: ["78"],
    //         row2: ["77", "78", "87"],
    //         row3: ["456", "465", "546", "564", "645", "654"],
    //         top1: ["4", "5", "6"],
    //         top2: ["56"],
    //         top3: ["456"],
    //       },
    //       resultlink: "",
    //       createDate: "2023-10-02 20:41:54",
    //       currency: "thb",
    //     },
    //   };
    //   // const URL =
    //   //   "https://top1betvip.infosoft.click/api/latest/integration/lotto";
    //   const URL = "https://api-test.ambexapi.com/api/v1/l/c";
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
