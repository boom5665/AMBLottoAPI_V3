
<template>
  <div style="">
    <div type="primary" class="box-r-scoll">
      <div>
        <div class="font-prim"><span>Code Semless</span></div>
      </div>
      <!-- // -->

      <div class="col-12" id="tabFive">
        <lable
          ><b
            style="color: #19a17a !important"
            set-lan="text:4.5 Call Back Service"
            >4.5
            <span style="padding-left: 3px" id="Seamless_Call_Back_Service"
              >Call Back Service</span
            >
          </b></lable
        >
      </div>
      <div
        class="col-12"
        id="tabSix"
        style="margin-left: 10px; margin-bottom: 25px"
      >
        <lable
          ><b
            style="color: #19a17a !important"
            set-lan="text:4.5.1 GetUserBalance"
            >4.5.1
            <span style="padding-left: 3px" id="Seamless_GetUserDetail"
              >GetUserDetail</span
            ></b
          >
        </lable>
      </div>

      <div class="col-12 boxinput">
        <div class="false-input">
          <input type="text" placeholder="Username" />
        </div>
         <div class="false-input">
          <input type="text" placeholder="Password" />
        </div>
      </div>
      <div class="koh-faq-question form-group ex">
        <lable class="Point">
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
            <button class="custom-btn btn-13">Send Code</button>
          </div>
        </lable>
      </div>
      <div class="koh-faq-answer col-12">
        <pre>

                                        <code id="351A" style="border-radius: 0.375rem;" class="hljs json">{
    <span class="hljs-attr">"service"</span>: <span class="hljs-string">"GetUserDetail"</span>,
    <span class="hljs-attr">"data"</span>: {
        <span class="hljs-attr">"playerUsername"</span>: <span class="hljs-string">"testa0aagentthbmb01"</span>,
        <span class="hljs-attr">"agentUsername"</span>: <span class="hljs-string">"comptestseamless"</span>
    }
}</code></pre>
      </div>
      <div>
        <div>RESPONSE</div>
        <div class="divBox-content">
          Click Send Code to start a request and see the response here! Or
          choose an example: application/json
          <span>
            <button class="buton-suscess"></button> 200
          </span>

        </div>
      </div>

       <div class="col-12 boxinput">
        <div class="false-input">
          <input type="text" placeholder="Username" />
        </div>
         <div class="false-input">
          <input type="text" placeholder="Password" />
        </div>
      </div>
      <div class="koh-faq-question form-group ex">
        <lable class="Point">
          <b
            style="color: #19a17a !important"
            set-lan="text:Example Request Body"
            >Example Response Body</b
          >
          <i
            class="fa fa-chevron-down"
            aria-hidden="true"
            style="margin-left: 2%; font-size: 1rem"
          ></i>
          <div class="btn-send">
            <button class="custom-btn btn-13">Send Code</button>
          </div>
        </lable>
      </div>
      <div class="koh-faq-answer col-12">
        <pre>

                                        <code id="351A" style="border-radius: 0.375rem; height: 500px; overflow: scroll;" class="hljs json">{
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
       <div>
        <div>RESPONSE</div>
        <div class="divBox-content">
          Click Send Code to start a request and see the response here! Or
          choose an example: application/json
          <span>
            <button class="buton-suscess"></button> 200
          </span>

        </div>
      </div>
      <div
        class="col-12"
        id="tabSixs"
        style="margin-left: 10px; margin-bottom: 25px"
      >
        <lable
          ><b
            style="color: #19a17a !important"
            set-lan="text:4.5.2 GetUserBalance"
            >4.5.2
            <span style="padding-left: 3px" id="Seamless_GetUserBalance"
              >GetUserBalance</span
            ></b
          ></lable
        >
      </div>

      <div class="col-12 boxinput">
        <div class="false-input">
          <input type="text" placeholder="Username" />
        </div>
         <div class="false-input">
          <input type="text" placeholder="Password" />
        </div>
      </div>
      <div class="koh-faq-question form-group ex">
        <lable class="Point">
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
            <button class="custom-btn btn-13">Send Code</button>
          </div>
        </lable>
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
      </div>
        <div>
        <div>RESPONSE</div>
        <div class="divBox-content">
          Click Send Code to start a request and see the response here! Or
          choose an example: application/json
          <span>
            <button class="buton-suscess"></button> 200
          </span>

        </div>
      </div>
      <div class="col-12 boxinput">
        <div class="false-input">
          <input type="text" placeholder="Username" />
        </div>
         <div class="false-input">
          <input type="text" placeholder="Password" />
        </div>
      </div>
      <div class="koh-faq-question form-group ex">
        <lable class="Point"
          ><b style="color: #19a17a !important">Example Service Respond Code</b
          ><i
            class="fa fa-chevron-down"
            aria-hidden="true"
            style="margin-left: 2%; font-size: 1rem"
          ></i>
          <div class="btn-send">
            <button class="custom-btn btn-13">Send Code</button>
          </div>
        </lable>
      </div>

      <div class="koh-faq-answer col-12">
        <pre>

                                        <code id="351B" style="border-radius: 0.375rem;" class="hljs json">{
    <span class="hljs-attr">"code"</span>: <span class="hljs-number">0</span>,
    <span class="hljs-attr">"balance"</span>: <span class="hljs-number">880</span>
}</code></pre>
      </div>
       <div>
        <div>RESPONSE</div>
        <div class="divBox-content">
          Click Send Code to start a request and see the response here! Or
          choose an example: application/json
          <span>
            <button class="buton-suscess"></button> 200
          </span>

        </div>
      </div>

      <div class="col-12" id="tabSeven" style="margin-bottom: 25px">
        <lable
          ><b
            style="color: #19a17a !important"
            set-lan="text:4.5.3 UserPlaceBet"
            >4.5.3
            <span style="padding-left: 3px" id="Seamless_UserPlaceBet"
              >UserPlaceBet</span
            ></b
          ></lable
        >
      </div>
       <div class="col-12 boxinput">
        <div class="false-input">
          <input type="text" placeholder="Username" />
        </div>
         <div class="false-input">
          <input type="text" placeholder="Password" />
        </div>
      </div>
      <div class="koh-faq-question form-group ex">
        <lable class="Point">
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
            <button class="custom-btn btn-13">Send Code</button>
          </div>
        </lable>
      </div>
      <div class="koh-faq-answer col-12">
        <pre>
                                        <code id="352A" style="border-radius: 0.375rem;" class="hljs json">{
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
          Click Send Code to start a request and see the response here! Or
          choose an example: application/json
          <span>
            <button class="buton-suscess"></button> 200
          </span>

        </div>
      </div>

     <div class="col-12 boxinput">
        <div class="false-input">
          <input type="text" placeholder="Username" />
        </div>
         <div class="false-input">
          <input type="text" placeholder="Password" />
        </div>
      </div>
      <div class="koh-faq-question form-group ex">
        <lable class="Point">
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
          <div class="btn-send">
            <button class="custom-btn btn-13">Send Code</button>
          </div>
        </lable>
      </div>

      <div class="koh-faq-answer col-12">
        <pre>

                                        <code id="352B" style="border-radius: 0.375rem;" class="hljs json">{
    <span class="hljs-attr">"code"</span>: <span class="hljs-number">0</span>
}</code></pre>
      </div>
        <div>
        <div>RESPONSE</div>
        <div class="divBox-content">
          Click Send Code to start a request and see the response here! Or
          choose an example: application/json
          <span>
            <button class="buton-suscess"></button> 200
          </span>

        </div>
      </div>
      <div class="col-12" id="tabSeven" style="margin-bottom: 25px">
        <lable
          ><b
            style="color: #19a17a !important "
            set-lan="text:4.5.4 UserPlaceBet"
            >4.5.4
            <span style="padding-left: 3px" id="Seamless_UserPlaceBet"
              >UserPlaceBetCancel</span
            ></b
          ></lable
        >
      </div>
     <div class="col-12 boxinput">
        <div class="false-input">
          <input type="text" placeholder="Username" />
        </div>
         <div class="false-input">
          <input type="text" placeholder="Password" />
        </div>
      </div>
      <div class="koh-faq-question form-group ex">
        <lable class="Point">
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
            <button class="custom-btn btn-13">Send Code</button>
          </div>
        </lable>
      </div>
      <div class="koh-faq-answer col-12">
        <pre>

                                        <code id="353A" style="border-radius: 0.375rem;" class="hljs json">{
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
      </div>
      <!-- // -->
       <div>
        <div>RESPONSE</div>
        <div class="divBox-content">
          Click Send Code to start a request and see the response here! Or
          choose an example: application/json
          <span>
            <button class="buton-suscess"></button> 200
          </span>

        </div>
      </div>
      <!-- // -->
    <div class="col-12 boxinput">
        <div class="false-input">
          <input type="text" placeholder="Username" />
        </div>
         <div class="false-input">
          <input type="text" placeholder="Password" />
        </div>
      </div>
      <div class="koh-faq-question form-group ex">
        <lable class="Point"
          ><b style="color: #19a17a !important">Example Service Respond Code</b
          ><i
            class="fa fa-chevron-down"
            aria-hidden="true"
            style="margin-left: 2%; font-size: 1rem"
          ></i>
          <div class="btn-send">
            <button class="custom-btn btn-13">Send Code</button>
          </div></lable
        >
      </div>

      <div class="koh-faq-answer col-12">
        <pre>

                                        <code id="351B" style="border-radius: 0.375rem;" class="hljs json">{
    <span class="hljs-attr">"code"</span>: <span class="hljs-number">0</span>
}</code></pre>
      </div>
        <div>
        <div>RESPONSE</div>
        <div class="divBox-content">
          Click Send Code to start a request and see the response here! Or
          choose an example: application/json
          <span>
            <button class="buton-suscess"></button> 200
          </span>

        </div>
      </div>
      <div class="col-12" id="tabSeven" style="margin-bottom: 25px">
        <lable
          ><b
            style="color: #19a17a !important"
            set-lan="text:4.5.5 UserPlaceBet"
            >4.5.5
            <span
              style="padding-left: 3px margin-bottom: 25px;"
              id="Seamless_UserPlaceBet"
              >UserPlacePayout</span
            ></b
          ></lable
        >
      </div>
       <div class="col-12 boxinput">
        <div class="false-input">
          <input type="text" placeholder="Username" />
        </div>
         <div class="false-input">
          <input type="text" placeholder="Password" />
        </div>
      </div>
      <div class="koh-faq-question form-group ex">
        <lable class="Point">
          <b
            style="color: #19a17a !important"
            set-lan="text:Example Request Body"
            >Example Reponse <span style="color: red">  (กรณีถูกรางวัล)</span>
          </b>
          <i
            class="fa fa-chevron-down"
            aria-hidden="true"
            style="margin-left: 2%; font-size: 1rem"
          ></i>
          <div class="btn-send">
            <button class="custom-btn btn-13">Send Code</button>
          </div>
        </lable>
      </div>
      <div class="koh-faq-answer col-12">
        <pre>
                                        <code id="354A" style="border-radius: 0.375rem;" class="hljs json">{
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
        <lable class="Point">
          <b
            style="color: #19a17a !important"
            set-lan="text:Example Request Body"
            >Example Request Body   <span style="color: red">  (กรณีถูกรางวัล)</span></b
          >
          <i
            class="fa fa-chevron-down"
            aria-hidden="true"
            style="margin-left: 2%; font-size: 1rem"
          ></i>

          <div class="btn-send">
            <button class="custom-btn btn-13">Send Code</button>
          </div>
        </lable>
      </div>
      <div class="koh-faq-answer col-12">
        <pre>
                                        <!-- <div class="copy-clipboard" style="position: absolute;width: 20px;top: 30px;right: 0;cursor:pointer">
                                            <svg style="position: absolute;width: 20px;left: -25px;" onclick="copyContent(document.getElementById('seamless_tabfour-five-five_win_req').innerHTML)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Copy to Clipboard</title><path d="M18 6v-6h-18v18h6v6h18v-18h-6zm-12 10h-4v-14h14v4h-10v10zm16 6h-14v-14h14v14z"></path></svg>
                                        </div> -->
                                        <code id="354A" style="border-radius: 0.375rem;" class="hljs json">{
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
      <div>
        <div>RESPONSE</div>
        <div class="divBox-content">
          Click Send Code to start a request and see the response here! Or
          choose an example: application/json
          <span>
            <button class="buton-suscess"></button> 200
          </span>

        </div>
      </div>
      <!-- // -->

      <div class="col-12 boxinput">
        <div class="false-input">
          <input type="text" placeholder="Username" />
        </div>
         <div class="false-input">
          <input type="text" placeholder="Password" />
        </div>
      </div>
      <div class="koh-faq-question form-group ex">
        <lable class="Point"
          ><b style="color: #19a17a !important">Example Service Respond Code</b
          ><i
            class="fa fa-chevron-down"
            aria-hidden="true"
            style="margin-left: 2%; font-size: 1rem"
          ></i>
          <div class="btn-send">
            <button class="custom-btn btn-13">Send Code</button>
          </div>
        </lable>
      </div>
      <div class="koh-faq-answer col-12">
        <pre>

                                        <code id="351B" style="border-radius: 0.375rem;" class="hljs json">{
    <span class="hljs-attr">"code"</span>: <span class="hljs-number">0</span>,
}</code></pre>
      </div>
       <div>
        <div>RESPONSE</div>
        <div class="divBox-content">
          Click Send Code to start a request and see the response here! Or
          choose an example: application/json
          <span>
            <button class="buton-suscess"></button> 200
          </span>

        </div>
      </div>
      <div class="col-12" id="tabSeven" style="margin-bottom: 25px">
        <lable
          ><b
            style="color: #19a17a !important"
            set-lan="text:4.5.6 UserPlaceBet"
            >4.5.6
            <span style="padding-left: 3px" id="UserPlaceReToRunning"
              >UserPlaceReToRunning</span
            ></b
          ></lable
        >
      </div>
     <div class="col-12 boxinput">
        <div class="false-input">
          <input type="text" placeholder="Username" />
        </div>
         <div class="false-input">
          <input type="text" placeholder="Password" />
        </div>
      </div>
      <div class="koh-faq-question form-group ex">
        <lable class="Point">
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
            <button class="custom-btn btn-13">Send Code</button>
          </div>
        </lable>
      </div>
      <div class="koh-faq-answer col-12">
        <pre>

                                        <code id="356A" style="border-radius: 0.375rem;" class="hljs json">{
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
          Click Send Code to start a request and see the response here! Or
          choose an example: application/json
          <span>
            <button class="buton-suscess"></button> 200
          </span>

        </div>
      </div>
      <div class="col-12 boxinput">
        <div class="false-input">
          <input type="text" placeholder="Username" />
        </div>
         <div class="false-input">
          <input type="text" placeholder="Password" />
        </div>
      </div>
      <div class="koh-faq-question form-group ex">
        <lable class="Point">
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
          <div class="btn-send">
            <button class="custom-btn btn-13">Send Code</button>
          </div>
        </lable>
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
       <div>
        <div>RESPONSE</div>
        <div class="divBox-content">
          Click Send Code to start a request and see the response here! Or
          choose an example: application/json
          <span>
            <button class="buton-suscess"></button> 200
          </span>

        </div>
      </div>
      <!-- // -->
    </div>
  </div>
</template>

<script>
export default {
  name: "BoxSem45",
};
</script>
