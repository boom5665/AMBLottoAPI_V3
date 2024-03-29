
<template>
  <div style="">
    <div type="primary" class="box-r-scoll">
      <div>
        <div class="font-prim"><span>Code Seamless</span></div>
      </div>
      <!-- // -->

      <div class="col-12" id="tabFive">
        <div>
          <b
            style="color: #19a17a !important"
            set-lan="text:4.5 Call Back Service"
            >4.5
            <span style="padding-left: 3px" id="Seamless_Call_Back_Service"
              >Call Back Service</span
            >
          </b>
        </div>
      </div>
      <div class="col-12" id="tabSix" style="left: 10px; margin-bottom: 25px">
        <div>
          <b
            style="color: #19a17a !important"
            set-lan="text:4.5.1 GetUserBalance"
            >4.5.1
            <span style="padding-left: 3px" id="Seamless_GetUserDetail"
              >GetUser Detail</span
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
              >ใส่เส้น URL ของลูกค้า</span
            ></b
          >
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
            v-model="playerUsername"
            placeholder="Player Username"
          />
        </div>
      </div> -->
      <div class="boxinput">
        <div class="false-input">
          <input
            type="text"
            v-model="URLdata"
            placeholder="Please enter your URLhere."
          />
        </div>
      </div>
      <div class="koh-faq-answer col-12">
        <code>
          <textarea v-model="jsonData" rows="8" class="custom-textarea">
          </textarea>
        </code>
      </div>
      <div class="koh-faq-question form-group ex">
        <div class="Point">
          <b
            style="color: #19a17a !important"
            set-lan="text:Example Request Body"
            >Example Request
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
    <span class="hljs-attr">"service"</span>: <span class="hljs-string">"GetUserDetail"</span>,
    <span class="hljs-attr">"data"</span>: {
        <span class="hljs-attr">"playerUsername"</span>: <span class="hljs-string">"comptestseamless"</span>,
        <span class="hljs-attr">"agentUsername"</span>: <span class="hljs-string">"top1betvip"</span>
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

                                        <code id="351A" style="border-radius: 0.375rem;     width: 100% !important;" class="hljs json">{
    <span class="hljs-attr">"service"</span>: <span class="hljs-string">"GetUserDetail"</span>,
    <span class="hljs-attr">"data"</span>: {
        <span class="hljs-attr">"playerUsername"</span>: <span class="hljs-string">"testa0aagentthbmb01"</span>,
        <span class="hljs-attr">"agentUsername"</span>: <span class="hljs-string">"comptestseamless"</span>
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
              <div class="">
                <div
                  @click="copyTexttwo"
                  class="copy-clipboard"
                  style="left: 91%"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <title>Copy to Clipboard</title>
                    <path
                      d="M18 6v-6h-18v18h6v6h18v-18h-6zm-12 10h-4v-14h14v4h-10v10zm16 6h-14v-14h14v14z"
                    ></path>
                  </svg>
                </div>
              </div>
              <pre id="myDivtwo">
                                        <code id="351A" style="border-radius: 0.375rem;  height: 300px; overflow: scroll;     width: 100% !important;" class="hljs json">{
    <span class="hljs-attr">"code"</span>: <span class="hljs-string">0</span>,
    <span class="hljs-attr">"data"</span>: {
        <span class="hljs-attr">"username"</span>: <span class="hljs-string">"testa0aagentthbmb01"</span>,
        <span class="hljs-attr">"phone"</span>: <span class="hljs-string">"0xxxxxxxx"</span>,
        <span class="hljs-attr">"Username"</span>: <span class="hljs-string">"xxxx@gmail.com"</span>,
        <span class="hljs-attr">"line"</span>: <span class="hljs-string">"lineX"</span>,
        <span class="hljs-attr">"currency"</span>: <span class="hljs-string">"THB"</span>,
        <span class="hljs-attr">"rate"</span>: {
            <span class="hljs-attr">"baaclotto"</span>: {
                <span class="hljs-attr">"bottom1"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">10000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">4</span>
                },
                <span class="hljs-attr">"bottom2"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">10</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">10000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">90</span>
                },
                <span class="hljs-attr">"row3"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">150</span>
                },
                <span class="hljs-attr">"top1"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">10000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">3</span>
                },
                <span class="hljs-attr">"top2"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">10000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">90</span>
                },
                <span class="hljs-attr">"top3"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">1000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">900</span>
                }
            },
            <span class="hljs-attr">"gsblotto"</span>: {
                <span class="hljs-attr">"bottom1"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">10000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">4</span>
                },
                <span class="hljs-attr">"bottom2"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">10000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">90</span>
                },
                <span class="hljs-attr">"row3"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">150</span>
                },
                <span class="hljs-attr">"top1"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">10000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">3.2</span>
                },
                <span class="hljs-attr">"top2"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">10000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">90</span>
                },
                <span class="hljs-attr">"top3"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">1000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">900</span>
                }
            },
            <span class="hljs-attr">"laoslotto_set"</span>: {
                <span class="hljs-attr">"back2"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">600</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">15</span>
                },
                <span class="hljs-attr">"front2"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">600</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">15</span>
                },
                <span class="hljs-attr">"row3"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">600</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">25</span>
                },
                <span class="hljs-attr">"row4"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">600</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">40</span>
                },
                <span class="hljs-attr">"top3"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">600</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">350</span>
                },
                <span class="hljs-attr">"top4"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">600</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">1000</span>
                }
            },
            <span class="hljs-attr">"laoslotto"</span>: {
                <span class="hljs-attr">"bottom1"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">10000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">4</span>
                },
                <span class="hljs-attr">"bottom2"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">10000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">90</span>
                },
                <span class="hljs-attr">"row2"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">10000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">12</span>
                },
                <span class="hljs-attr">"row3"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">150</span>
                },
                <span class="hljs-attr">"row4"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">1000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">225</span>
                },
                <span class="hljs-attr">"top1"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">10000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">3</span>
                },
                <span class="hljs-attr">"top2"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">10000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">90</span>
                },
                <span class="hljs-attr">"top3"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">1000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">900</span>
                },
                <span class="hljs-attr">"top4"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">500</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">5000</span>
                }
            },
            <span class="hljs-attr">"hanoylotto_set"</span>: {
                <span class="hljs-attr">"back2"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">600</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">15</span>
                },
                <span class="hljs-attr">"front2"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">600</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">15</span>
                },
                <span class="hljs-attr">"row3"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">600</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">25</span>
                },
                <span class="hljs-attr">"row4"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">600</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">40</span>
                },
                <span class="hljs-attr">"top3"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">600</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">350</span>
                },
                <span class="hljs-attr">"top4"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">600</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">1000</span>
                }
            },
            <span class="hljs-attr">"hanoylotto"</span>: {
                <span class="hljs-attr">"bottom1"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">10000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">4</span>
                },
                <span class="hljs-attr">"bottom2"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">10000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">90</span>
                },
                <span class="hljs-attr">"row2"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">10000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">0</span>
                },
                <span class="hljs-attr">"row3"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">150</span>
                },
                <span class="hljs-attr">"row4"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">1000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">0</span>
                },
                <span class="hljs-attr">"top1"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">200000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">3.2</span>
                },
                <span class="hljs-attr">"top2"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">20000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">90</span>
                },
                <span class="hljs-attr">"top3"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">900</span>
                },
                <span class="hljs-attr">"top4"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">500</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">0</span>
                }
            },
            <span class="hljs-attr">"hanoylottospecial"</span>: {
                <span class="hljs-attr">"bottom1"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">10000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">4</span>
                },
                <span class="hljs-attr">"bottom2"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">10000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">90</span>
                },
                <span class="hljs-attr">"bottom2"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">10000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">90</span>
                },
                <span class="hljs-attr">"row3"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">10000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">0</span>
                },
                <span class="hljs-attr">"top1"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">200000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">3.2</span>
                },
                <span class="hljs-attr">"top2"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">20000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">90</span>
                },
                <span class="hljs-attr">"top3"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">900</span>
                }
            },
            <span class="hljs-attr">"hanoylottospecial_set"</span>: {
                <span class="hljs-attr">"back2"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">600</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">15</span>
                },
                <span class="hljs-attr">"front2"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">600</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">15</span>
                },
                <span class="hljs-attr">"row3"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">600</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">25</span>
                },
                <span class="hljs-attr">"row4"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">600</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">40</span>
                },
                <span class="hljs-attr">"top3"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">600</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">350</span>
                },
                <span class="hljs-attr">"top4"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">600</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">1000</span>
                }
            },
            <span class="hljs-attr">"hanoylottovip"</span>: {
                <span class="hljs-attr">"bottom1"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">10000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">4</span>
                },
                <span class="hljs-attr">"bottom2"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">10000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">90</span>
                },
                <span class="hljs-attr">"row2"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">10000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">0</span>
                },
                <span class="hljs-attr">"row3"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">150</span>
                },
                <span class="hljs-attr">"row4"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">1000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">0</span>
                },
                <span class="hljs-attr">"top1"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">10000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">3</span>
                },
                <span class="hljs-attr">"top2"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">10000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">90</span>
                },
                <span class="hljs-attr">"top3"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">1000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">900</span>
                },
                <span class="hljs-attr">"top4"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">500</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">0</span>
                }
            },
            <span class="hljs-attr">"hanoylottovip_set"</span>: {
                <span class="hljs-attr">"back2"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">600</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">15</span>
                },
                <span class="hljs-attr">"front2"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">600</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">15</span>
                },
                <span class="hljs-attr">"row3"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">600</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">25</span>
                },
                <span class="hljs-attr">"row4"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">600</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">40</span>
                },
                <span class="hljs-attr">"top3"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">600</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">350</span>
                },
                <span class="hljs-attr">"top4"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">600</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">1000</span>
                }
            },
            <span class="hljs-attr">"malaylotto"</span>: {
                <span class="hljs-attr">"bottom1"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">10000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">4</span>
                },
                <span class="hljs-attr">"bottom2"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">10000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">90</span>
                },
                <span class="hljs-attr">"row2"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">10000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">0</span>
                },
                <span class="hljs-attr">"row3"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">150</span>
                },
                <span class="hljs-attr">"row4"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">1000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">0</span>
                },
                <span class="hljs-attr">"top1"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">10000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">3</span>
                },
                <span class="hljs-attr">"top2"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">10000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">90</span>
                },
                <span class="hljs-attr">"top3"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">1000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">900</span>
                },
                <span class="hljs-attr">"top4"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">500</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">0</span>
                }
            },
            <span class="hljs-attr">"malaylotto_set"</span>: {
                <span class="hljs-attr">"back2"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">600</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">15</span>
                },
                <span class="hljs-attr">"front2"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">600</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">15</span>
                },
                <span class="hljs-attr">"row3"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">600</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">25</span>
                },
                <span class="hljs-attr">"row4"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">600</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">40</span>
                },
                <span class="hljs-attr">"top3"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">600</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">350</span>
                },
                <span class="hljs-attr">"top4"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">600</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">1000</span>
                }
            },
            <span class="hljs-attr">"pingponglotto"</span>: {
                <span class="hljs-attr">"bottom1"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">10000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">4</span>
                },
                <span class="hljs-attr">"bottom2"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">10000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">90</span>
                },
                <span class="hljs-attr">"row2"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">10000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">12</span>
                },
                <span class="hljs-attr">"row3"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">130</span>
                },
                <span class="hljs-attr">"row4"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">1000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">225</span>
                },
                <span class="hljs-attr">"top1"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">10000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">3</span>
                },
                <span class="hljs-attr">"top2"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">10000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">90</span>
                },
                <span class="hljs-attr">"top3"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">1000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">800</span>
                },
                <span class="hljs-attr">"top4"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">5000</span>
                },
                <span class="hljs-attr">"top5"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">500</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">25000</span>
                },
                <span class="hljs-attr">"top6"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">500</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">50000</span>
                }
            },
            <span class="hljs-attr">"stock"</span>: {
                <span class="hljs-attr">"bottom1"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">10000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">4</span>
                },
                <span class="hljs-attr">"bottom2"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">10000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">90</span>
                },
                <span class="hljs-attr">"row3"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">150</span>
                },
                <span class="hljs-attr">"top1"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">10000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">3</span>
                },
                <span class="hljs-attr">"top2"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">10000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">90</span>
                },
                <span class="hljs-attr">"top3"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">1000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">900</span>
                }
            },
            <span class="hljs-attr">"thailotto"</span>: {
                <span class="hljs-attr">"bottom1"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">10000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">4</span>
                },
                <span class="hljs-attr">"bottom2"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">10000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">90</span>
                },
                <span class="hljs-attr">"bottom3"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">10000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">225</span>
                },
                <span class="hljs-attr">"row2"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">10000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">12</span>
                },
                <span class="hljs-attr">"row3"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">150</span>
                },
                <span class="hljs-attr">"row4"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">1000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">225</span>
                },
                <span class="hljs-attr">"top1"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">10000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">3</span>
                },
                <span class="hljs-attr">"top2"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">10000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">90</span>
                },
                <span class="hljs-attr">"top3"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">1000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">900</span>
                },
                <span class="hljs-attr">"top4"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">500</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">5000</span>
                },
                <span class="hljs-attr">"top5"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">500</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">25000</span>
                },
                <span class="hljs-attr">"top6"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">500</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">50000</span>
                }
            },
            <span class="hljs-attr">"yeekeelotto"</span>: {
                <span class="hljs-attr">"bottom1"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">10000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">1</span>
                },
                <span class="hljs-attr">"bottom2"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">10000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">90</span>
                },
                <span class="hljs-attr">"row3"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">150</span>
                },
                <span class="hljs-attr">"top1"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">10000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">2</span>
                },
                <span class="hljs-attr">"top2"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">10000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">90</span>
                },
                <span class="hljs-attr">"top3"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">1000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">900</span>
                }
            },
            <span class="hljs-attr">"zodiaclotto"</span>: {
                <span class="hljs-attr">"ball1"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">10000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">0</span>
                },
                <span class="hljs-attr">"ball2"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">10000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">0</span>
                },
                <span class="hljs-attr">"ball3"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">10000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">0</span>
                },
                <span class="hljs-attr">"ball4"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">0</span>
                },
                <span class="hljs-attr">"color"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">1000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">0</span>
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
                <div class="">
                  <div
                    @click="copyTextthree"
                    class="copy-clipboard"
                    style="left: 91%"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <title>Copy to Clipboard</title>
                      <path
                        d="M18 6v-6h-18v18h6v6h18v-18h-6zm-12 10h-4v-14h14v4h-10v10zm16 6h-14v-14h14v14z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <pre id="myDivthree">

                                        <code id="" style="border-radius: 0.375rem;  height: 300px; overflow: scroll;     width: 100% !important;" class="hljs json">{
    <span class="hljs-attr">"code"</span>: <span class="hljs-string">0</span>,
    <span class="hljs-attr">"data"</span>: {
        <span class="hljs-attr">"username"</span>: <span class="hljs-string">"{{username}}"</span>,
        <span class="hljs-attr">"phone"</span>: <span class="hljs-string">"{{phone}}"</span>,
        <span class="hljs-attr">"Username"</span>: <span class="hljs-string">"{{Username}}"</span>,
        <span class="hljs-attr">"line"</span>: <span class="hljs-string">"{{line}}"</span>,
        <span class="hljs-attr">"currency"</span>: <span class="hljs-string">"{{currency}}"</span>,
        <span class="hljs-attr">"rate"</span>: {
            <span class="hljs-attr">"baaclotto"</span>: {
                <span class="hljs-attr">"bottom1"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">10000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">4</span>
                },
                <span class="hljs-attr">"bottom2"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">10</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">10000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">90</span>
                },
                <span class="hljs-attr">"row3"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">150</span>
                },
                <span class="hljs-attr">"top1"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">10000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">3</span>
                },
                <span class="hljs-attr">"top2"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">10000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">90</span>
                },
                <span class="hljs-attr">"top3"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">1000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">900</span>
                }
            },
            <span class="hljs-attr">"gsblotto"</span>: {
                <span class="hljs-attr">"bottom1"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">10000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">4</span>
                },
                <span class="hljs-attr">"bottom2"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">10000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">90</span>
                },
                <span class="hljs-attr">"row3"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">150</span>
                },
                <span class="hljs-attr">"top1"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">10000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">3.2</span>
                },
                <span class="hljs-attr">"top2"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">10000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">90</span>
                },
                <span class="hljs-attr">"top3"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">1000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">900</span>
                }
            },
            <span class="hljs-attr">"laoslotto_set"</span>: {
                <span class="hljs-attr">"back2"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">600</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">15</span>
                },
                <span class="hljs-attr">"front2"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">600</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">15</span>
                },
                <span class="hljs-attr">"row3"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">600</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">25</span>
                },
                <span class="hljs-attr">"row4"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">600</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">40</span>
                },
                <span class="hljs-attr">"top3"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">600</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">350</span>
                },
                <span class="hljs-attr">"top4"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">600</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">1000</span>
                }
            },
            <span class="hljs-attr">"laoslotto"</span>: {
                <span class="hljs-attr">"bottom1"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">10000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">4</span>
                },
                <span class="hljs-attr">"bottom2"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">10000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">90</span>
                },
                <span class="hljs-attr">"row2"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">10000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">12</span>
                },
                <span class="hljs-attr">"row3"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">150</span>
                },
                <span class="hljs-attr">"row4"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">1000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">225</span>
                },
                <span class="hljs-attr">"top1"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">10000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">3</span>
                },
                <span class="hljs-attr">"top2"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">10000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">90</span>
                },
                <span class="hljs-attr">"top3"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">1000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">900</span>
                },
                <span class="hljs-attr">"top4"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">500</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">5000</span>
                }
            },
            <span class="hljs-attr">"hanoylotto_set"</span>: {
                <span class="hljs-attr">"back2"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">600</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">15</span>
                },
                <span class="hljs-attr">"front2"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">600</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">15</span>
                },
                <span class="hljs-attr">"row3"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">600</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">25</span>
                },
                <span class="hljs-attr">"row4"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">600</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">40</span>
                },
                <span class="hljs-attr">"top3"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">600</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">350</span>
                },
                <span class="hljs-attr">"top4"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">600</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">1000</span>
                }
            },
            <span class="hljs-attr">"hanoylotto"</span>: {
                <span class="hljs-attr">"bottom1"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">10000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">4</span>
                },
                <span class="hljs-attr">"bottom2"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">10000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">90</span>
                },
                <span class="hljs-attr">"row2"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">10000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">0</span>
                },
                <span class="hljs-attr">"row3"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">150</span>
                },
                <span class="hljs-attr">"row4"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">1000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">0</span>
                },
                <span class="hljs-attr">"top1"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">200000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">3.2</span>
                },
                <span class="hljs-attr">"top2"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">20000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">90</span>
                },
                <span class="hljs-attr">"top3"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">900</span>
                },
                <span class="hljs-attr">"top4"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">500</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">0</span>
                }
            },
            <span class="hljs-attr">"hanoylottospecial"</span>: {
                <span class="hljs-attr">"bottom1"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">10000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">4</span>
                },
                <span class="hljs-attr">"bottom2"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">10000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">90</span>
                },
                <span class="hljs-attr">"bottom2"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">10000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">90</span>
                },
                <span class="hljs-attr">"row3"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">10000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">0</span>
                },
                <span class="hljs-attr">"top1"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">200000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">3.2</span>
                },
                <span class="hljs-attr">"top2"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">20000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">90</span>
                },
                <span class="hljs-attr">"top3"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">900</span>
                }
            },
            <span class="hljs-attr">"hanoylottospecial_set"</span>: {
                <span class="hljs-attr">"back2"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">600</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">15</span>
                },
                <span class="hljs-attr">"front2"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">600</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">15</span>
                },
                <span class="hljs-attr">"row3"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">600</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">25</span>
                },
                <span class="hljs-attr">"row4"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">600</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">40</span>
                },
                <span class="hljs-attr">"top3"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">600</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">350</span>
                },
                <span class="hljs-attr">"top4"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">600</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">1000</span>
                }
            },
            <span class="hljs-attr">"hanoylottovip"</span>: {
                <span class="hljs-attr">"bottom1"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">10000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">4</span>
                },
                <span class="hljs-attr">"bottom2"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">10000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">90</span>
                },
                <span class="hljs-attr">"row2"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">10000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">0</span>
                },
                <span class="hljs-attr">"row3"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">150</span>
                },
                <span class="hljs-attr">"row4"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">1000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">0</span>
                },
                <span class="hljs-attr">"top1"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">10000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">3</span>
                },
                <span class="hljs-attr">"top2"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">10000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">90</span>
                },
                <span class="hljs-attr">"top3"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">1000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">900</span>
                },
                <span class="hljs-attr">"top4"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">500</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">0</span>
                }
            },
            <span class="hljs-attr">"hanoylottovip_set"</span>: {
                <span class="hljs-attr">"back2"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">600</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">15</span>
                },
                <span class="hljs-attr">"front2"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">600</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">15</span>
                },
                <span class="hljs-attr">"row3"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">600</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">25</span>
                },
                <span class="hljs-attr">"row4"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">600</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">40</span>
                },
                <span class="hljs-attr">"top3"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">600</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">350</span>
                },
                <span class="hljs-attr">"top4"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">600</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">1000</span>
                }
            },
            <span class="hljs-attr">"malaylotto"</span>: {
                <span class="hljs-attr">"bottom1"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">10000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">4</span>
                },
                <span class="hljs-attr">"bottom2"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">10000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">90</span>
                },
                <span class="hljs-attr">"row2"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">10000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">0</span>
                },
                <span class="hljs-attr">"row3"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">150</span>
                },
                <span class="hljs-attr">"row4"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">1000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">0</span>
                },
                <span class="hljs-attr">"top1"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">10000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">3</span>
                },
                <span class="hljs-attr">"top2"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">10000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">90</span>
                },
                <span class="hljs-attr">"top3"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">1000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">900</span>
                },
                <span class="hljs-attr">"top4"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">500</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">0</span>
                }
            },
            <span class="hljs-attr">"malaylotto_set"</span>: {
                <span class="hljs-attr">"back2"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">600</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">15</span>
                },
                <span class="hljs-attr">"front2"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">600</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">15</span>
                },
                <span class="hljs-attr">"row3"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">600</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">25</span>
                },
                <span class="hljs-attr">"row4"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">600</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">40</span>
                },
                <span class="hljs-attr">"top3"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">600</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">350</span>
                },
                <span class="hljs-attr">"top4"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">600</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">1000</span>
                }
            },
            <span class="hljs-attr">"pingponglotto"</span>: {
                <span class="hljs-attr">"bottom1"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">10000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">4</span>
                },
                <span class="hljs-attr">"bottom2"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">10000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">90</span>
                },
                <span class="hljs-attr">"row2"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">10000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">12</span>
                },
                <span class="hljs-attr">"row3"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">130</span>
                },
                <span class="hljs-attr">"row4"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">1000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">225</span>
                },
                <span class="hljs-attr">"top1"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">10000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">3</span>
                },
                <span class="hljs-attr">"top2"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">10000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">90</span>
                },
                <span class="hljs-attr">"top3"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">1000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">800</span>
                },
                <span class="hljs-attr">"top4"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">5000</span>
                },
                <span class="hljs-attr">"top5"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">500</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">25000</span>
                },
                <span class="hljs-attr">"top6"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">500</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">50000</span>
                }
            },
            <span class="hljs-attr">"stock"</span>: {
                <span class="hljs-attr">"bottom1"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">10000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">4</span>
                },
                <span class="hljs-attr">"bottom2"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">10000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">90</span>
                },
                <span class="hljs-attr">"row3"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">150</span>
                },
                <span class="hljs-attr">"top1"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">10000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">3</span>
                },
                <span class="hljs-attr">"top2"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">10000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">90</span>
                },
                <span class="hljs-attr">"top3"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">1000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">900</span>
                }
            },
            <span class="hljs-attr">"thailotto"</span>: {
                <span class="hljs-attr">"bottom1"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">10000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">4</span>
                },
                <span class="hljs-attr">"bottom2"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">10000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">90</span>
                },
                <span class="hljs-attr">"bottom3"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">10000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">225</span>
                },
                <span class="hljs-attr">"row2"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">10000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">12</span>
                },
                <span class="hljs-attr">"row3"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">150</span>
                },
                <span class="hljs-attr">"row4"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">1000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">225</span>
                },
                <span class="hljs-attr">"top1"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">10000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">3</span>
                },
                <span class="hljs-attr">"top2"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">10000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">90</span>
                },
                <span class="hljs-attr">"top3"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">1000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">900</span>
                },
                <span class="hljs-attr">"top4"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">500</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">5000</span>
                },
                <span class="hljs-attr">"top5"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">500</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">25000</span>
                },
                <span class="hljs-attr">"top6"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">500</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">50000</span>
                }
            },
            <span class="hljs-attr">"yeekeelotto"</span>: {
                <span class="hljs-attr">"bottom1"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">10000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">1</span>
                },
                <span class="hljs-attr">"bottom2"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">10000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">90</span>
                },
                <span class="hljs-attr">"row3"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">150</span>
                },
                <span class="hljs-attr">"top1"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">10000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">2</span>
                },
                <span class="hljs-attr">"top2"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">10000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">90</span>
                },
                <span class="hljs-attr">"top3"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">1000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">900</span>
                }
            },
            <span class="hljs-attr">"zodiaclotto"</span>: {
                <span class="hljs-attr">"ball1"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">10000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">0</span>
                },
                <span class="hljs-attr">"ball2"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">10000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">0</span>
                },
                <span class="hljs-attr">"ball3"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">10000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">0</span>
                },
                <span class="hljs-attr">"ball4"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">0</span>
                },
                <span class="hljs-attr">"color"</span>: {
                    <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>,
                    <span class="hljs-attr">"max"</span>: <span class="hljs-string">1000</span>,
                    <span class="hljs-attr">"min"</span>: <span class="hljs-string">1</span>,
                    <span class="hljs-attr">"payout"</span>: <span class="hljs-string">0</span>
                }
            }
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
          <div class="loading" v-if="isLoading">Loading...</div>
        </div>
      </div>
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
      URLdata: "https://api-test.ambexapi.com/api/v1/l/c", // กำหนดค่าเริ่มต้นของ agentUsername
      username: "",
      phone: "",
      email: "",
      line: "",
      currency: "",
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
      }
    },
  },
  methods: {
    copyTexttwo() {
      // เลือกข้อความใน div และคัดลอกไปยังคลิปบอร์ด
      var textToCopy = document.getElementById("myDivtwo").innerText;

      // สร้าง element input สำหรับคัดลอกข้อความ
      var inputElement = document.createElement("input");
      inputElement.setAttribute("value", textToCopy);
      document.body.appendChild(inputElement);

      // เลือกและคัดลอกข้อความที่อยู่ใน input element
      inputElement.select();
      document.execCommand("copy");

      // ลบ input element ที่สร้างขึ้น
      document.body.removeChild(inputElement);

      // แสดงข้อความแจ้งเตือนหลังจากคัดลอกสำเร็จ
      alert("คัดลอกเนื้อหาเรียบร้อยแล้ว");
    },
    copyTextthree() {
      // เลือกข้อความใน div และคัดลอกไปยังคลิปบอร์ด
      var textToCopy = document.getElementById("myDivthree").innerText;

      // สร้าง element input สำหรับคัดลอกข้อความ
      var inputElement = document.createElement("input");
      inputElement.setAttribute("value", textToCopy);
      document.body.appendChild(inputElement);

      // เลือกและคัดลอกข้อความที่อยู่ใน input element
      inputElement.select();
      document.execCommand("copy");

      // ลบ input element ที่สร้างขึ้น
      document.body.removeChild(inputElement);

      // แสดงข้อความแจ้งเตือนหลังจากคัดลอกสำเร็จ
      alert("คัดลอกเนื้อหาเรียบร้อยแล้ว");
    },
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
                this.username = this.response.data.username;
                this.phone = this.response.data.phone;
                this.line = this.response.data.line;
                this.email = this.response.data.email;
                this.currency = this.response.data.currency;
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
