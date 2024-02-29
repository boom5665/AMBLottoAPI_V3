
<template>
  <div style="">
    <div type="primary" class="box-r-scoll">
      <div>
        <div class="font-prim"><span>Code Tranfer</span></div>
      </div>
      <!-- // -->
      <!-- // -->
      <div class="col-12" id="tabFour">
        <lable
          ><b style="color: #19a17a !important" set-lan="text:4.4 login request"
            >5.4
            <span style="padding-left: 3px" id="Seamless_login_request"
              >Login request</span
            ></b
          ></lable
        >
      </div>
      <div class="divBox">
        <div class="col-12">
          <label class="txtHead">Method : </label>
          <label>Post</label>
        </div>
        <div class="col-12">
          <label class="txtHead"> Url : </label>
          <label>
            https://dev-api.amblotto.net/api/v2/apiRoute/member/tranferwallet/loginRequest
          </label>
        </div>
        <div class="col-12">
          <label class="txtHead"> headers : </label>
          <label> content-type application/json </label>
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

      <div class="koh-faq form-group">
        <div class="koh-faq-question form-group ex">
          <lable class="Point">
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
              <button class="custom-btn btn-13">Send Code</button>
            </div>
          </lable>
        </div>

        <div class="koh-faq-answer col-12">
          <pre>
                                    <!-- <div class="copy-clipboard" style=" position: absolute;width: 20px;top: 10px;right: 0;cursor:pointer">
                                        <svg  style="position: absolute;width: 20px;left: -25px;" onclick="copyContent(document.getElementById('transfer_tabfive-four_req').innerHTML)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Copy to Clipboard</title><path d="M18 6v-6h-18v18h6v6h18v-18h-6zm-12 10h-4v-14h14v4h-10v10zm16 6h-14v-14h14v14z"></path></svg>
                                    </div> -->
                                    <code id="3_4A" style="border-radius: 0.375rem; height: 500px;
    overflow: scroll;" class="hljs json">{
  <span class="hljs-attr">"agentUsername"</span>: <span class="hljs-string">"agenttoe2",</span>
  <span class="hljs-attr">"agentApiKey"</span>: <span class="hljs-string">"90c1f92bf298eeedf29ddea95681f56c7b707ec32368f820e01270d2bf9cda8b",</span>
  <span class="hljs-attr">"playerUsername"</span>: <span class="hljs-string">"testuserapi002",</span>
  <span class="hljs-attr">"data"</span>:{
      <span class="hljs-attr">"username"</span>: <span class="hljs-string">"ketttt",</span>
      <span class="hljs-attr">"phone"</span>: <span class="hljs-string">"0111111111",</span>
      <span class="hljs-attr">"email"</span>: <span class="hljs-string">"google1@gmail.com",</span>
      <span class="hljs-attr">"line"</span>: <span class="hljs-string">"line1",</span>
      <span class="hljs-attr">"currency"</span>: <span class="hljs-string">"THB",</span>
      <span class="hljs-attr">"rate"</span>: {
          <span class="hljs-attr">"thailotto"</span>: {
              <span class="hljs-attr">"top6"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">1000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">50000</span>
                },
              <span class="hljs-attr">"top5"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">2000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">25000</span>
                },
              <span class="hljs-attr">"top4"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">5000</span>
                },
              <span class="hljs-attr">"row4"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">7000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">225</span>
                },
              <span class="hljs-attr">"top3"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">900</span>
                },
              <span class="hljs-attr">"bottom3"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">20000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">225</span>
                },
              <span class="hljs-attr">"row3"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">20000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">150</span>
                },
              <span class="hljs-attr">"top2"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">20000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">90</span>
                },
              <span class="hljs-attr">"bottom2"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">20000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">90</span>
                },
              <span class="hljs-attr">"row2"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">20000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">12</span>
                },
              <span class="hljs-attr">"top1"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">200000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">3.2</span>
                },
              <span class="hljs-attr">"bottom1"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">200000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">4.2</span>
                }
            },
          <span class="hljs-attr">"gsblotto"</span>: {
              <span class="hljs-attr">"top3"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">900</span>
                },
              <span class="hljs-attr">"row3"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">20000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">150</span>
                },
              <span class="hljs-attr">"top2"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">20000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">90</span>
                },
              <span class="hljs-attr">"bottom2"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">20000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">90</span>
                },
              <span class="hljs-attr">"top1"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">200000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">3.2</span>
                },
              <span class="hljs-attr">"bottom1"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">200000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">4.2</span>
                }
            },
          <span class="hljs-attr">"baaclotto"</span>: {
              <span class="hljs-attr">"top3"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">900</span>
                },
              <span class="hljs-attr">"row3"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">20000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">150</span>
                },
              <span class="hljs-attr">"top2"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">20000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">90</span>
                },
              <span class="hljs-attr">"bottom2"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">20000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">90</span>
                },
              <span class="hljs-attr">"top1"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">200000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">3.2</span>
                },
              <span class="hljs-attr">"bottom1"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">200000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">4.2</span>
                }
            },
          <span class="hljs-attr">"laoslotto"</span>: {
              <span class="hljs-attr">"top4"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">4500</span>
                },
              <span class="hljs-attr">"row4"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">7000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">220</span>
                },
              <span class="hljs-attr">"top3"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">900</span>
                },
              <span class="hljs-attr">"row3"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">20000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">150</span>
                },
              <span class="hljs-attr">"top2"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">20000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">90</span>
                },
              <span class="hljs-attr">"bottom2"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">20000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">90</span>
                },
              <span class="hljs-attr">"row2"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">20000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">12</span>
                },
              <span class="hljs-attr">"top1"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">200000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">3.2</span>
                },
              <span class="hljs-attr">"bottom1"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">200000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">4.2</span>
                }
            },
          <span class="hljs-attr">"laoslotto_set"</span>: {
              <span class="hljs-attr">"top4"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">4500</span>
                },
              <span class="hljs-attr">"row4"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">7000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">220</span>
                },
              <span class="hljs-attr">"top3"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">900</span>
                },
              <span class="hljs-attr">"row3"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">20000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">150</span>
                },
              <span class="hljs-attr">"front2"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">600,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">15</span>
                },
              <span class="hljs-attr">"back2"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">600,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">15</span>
                }
            },
          <span class="hljs-attr">"laoslottotv"</span>: {
              <span class="hljs-attr">"top5"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">4500</span>
                },
              <span class="hljs-attr">"top4"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">4500</span>
                },
              <span class="hljs-attr">"row4"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">7000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">220</span>
                },
              <span class="hljs-attr">"top3"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">900</span>
                },
              <span class="hljs-attr">"row3"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">20000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">150</span>
                },
              <span class="hljs-attr">"top2"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">20000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">90</span>
                },
              <span class="hljs-attr">"bottom2"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">20000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">90</span>
                },
              <span class="hljs-attr">"row2"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">20000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">12</span>
                },
              <span class="hljs-attr">"top1"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">200000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">3.2</span>
                },
              <span class="hljs-attr">"bottom1"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">200000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">4.2</span>
                }
            },
          <span class="hljs-attr">"laoslottotv_set"</span>: {
              <span class="hljs-attr">"top4"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">4500</span>
                },
              <span class="hljs-attr">"row4"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">7000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">220</span>
                },
              <span class="hljs-attr">"top3"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">900</span>
                },
              <span class="hljs-attr">"row3"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">20000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">150</span>
                },
              <span class="hljs-attr">"front2"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">600,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">15</span>
                },
              <span class="hljs-attr">"back2"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">600,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">15</span>
                }
            },
          <span class="hljs-attr">"laoslottohd"</span>: {
              <span class="hljs-attr">"top5"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">4500</span>
                },
              <span class="hljs-attr">"top4"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">4500</span>
                },
              <span class="hljs-attr">"row4"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">7000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">220</span>
                },
              <span class="hljs-attr">"top3"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">900</span>
                },
              <span class="hljs-attr">"row3"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">20000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">150</span>
                },
              <span class="hljs-attr">"top2"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">20000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">90</span>
                },
              <span class="hljs-attr">"bottom2"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">20000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">90</span>
                },
              <span class="hljs-attr">"row2"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">20000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">12</span>
                },
              <span class="hljs-attr">"top1"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">200000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">3.2</span>
                },
              <span class="hljs-attr">"bottom1"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">200000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">4.2</span>
                }
            },
          <span class="hljs-attr">"laoslottohd_set"</span>: {
              <span class="hljs-attr">"top4"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">4500</span>
                },
              <span class="hljs-attr">"row4"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">7000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">220</span>
                },
              <span class="hljs-attr">"top3"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">900</span>
                },
              <span class="hljs-attr">"row3"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">20000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">150</span>
                },
              <span class="hljs-attr">"front2"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">600,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">15</span>
                },
              <span class="hljs-attr">"back2"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">600,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">15</span>
                }
            },
          <span class="hljs-attr">"laoslottoextra"</span>: {
              <span class="hljs-attr">"top5"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">4500</span>
                },
              <span class="hljs-attr">"top4"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">4500</span>
                },
              <span class="hljs-attr">"row4"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">7000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">220</span>
                },
              <span class="hljs-attr">"top3"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">900</span>
                },
              <span class="hljs-attr">"row3"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">20000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">150</span>
                },
              <span class="hljs-attr">"top2"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">20000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">90</span>
                },
              <span class="hljs-attr">"bottom2"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">20000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">90</span>
                },
              <span class="hljs-attr">"row2"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">20000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">12</span>
                },
              <span class="hljs-attr">"top1"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">200000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">3.2</span>
                },
              <span class="hljs-attr">"bottom1"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">200000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">4.2</span>
                }
            },
          <span class="hljs-attr">"laoslottoextra_set"</span>: {
              <span class="hljs-attr">"top4"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">4500</span>
                },
              <span class="hljs-attr">"row4"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">7000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">220</span>
                },
              <span class="hljs-attr">"top3"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">900</span>
                },
              <span class="hljs-attr">"row3"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">20000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">150</span>
                },
              <span class="hljs-attr">"front2"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">600,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">15</span>
                },
              <span class="hljs-attr">"back2"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">600,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">15</span>
                }
            },
          <span class="hljs-attr">"malaylotto"</span>: {
              <span class="hljs-attr">"top3"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">900</span>
                },
              <span class="hljs-attr">"row3"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">20000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">150</span>
                },
              <span class="hljs-attr">"top2"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">20000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">90</span>
                },
              <span class="hljs-attr">"bottom2"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">20000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">90</span>
                },
              <span class="hljs-attr">"top1"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">200000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">3.2</span>
                },
              <span class="hljs-attr">"bottom1"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">200000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">4.2</span>
                }
            },
          <span class="hljs-attr">"malaylotto_set"</span>: {
              <span class="hljs-attr">"top4"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">900</span>
                },
              <span class="hljs-attr">"row4"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">20000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">150</span>
                },
              <span class="hljs-attr">"top3"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">900</span>
                },
              <span class="hljs-attr">"row3"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">20000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">150</span>
                },
              <span class="hljs-attr">"front2"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">600,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">15</span>
                },
              <span class="hljs-attr">"back2"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">600,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">15</span>
                }
            },
          <span class="hljs-attr">"hanoylotto"</span>: {
              <span class="hljs-attr">"top3"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">900</span>
                },
              <span class="hljs-attr">"row3"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">20000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">150</span>
                },
              <span class="hljs-attr">"top2"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">20000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">90</span>
                },
              <span class="hljs-attr">"bottom2"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">20000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">90</span>
                },
              <span class="hljs-attr">"top1"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">200000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">3.2</span>
                },
              <span class="hljs-attr">"bottom1"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">200000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">4.2</span>
                }
            },
          <span class="hljs-attr">"hanoylotto_set"</span>: {
              <span class="hljs-attr">"top4"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">900</span>
                },
              <span class="hljs-attr">"row4"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">20000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">150</span>
                },
              <span class="hljs-attr">"top3"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">900</span>
                },
              <span class="hljs-attr">"row3"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">20000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">150</span>
                },
              <span class="hljs-attr">"front2"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">600,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">15</span>
                },
              <span class="hljs-attr">"back2"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">600,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">15</span>
                }
            },
          <span class="hljs-attr">"hanoylottospecial"</span>: {
              <span class="hljs-attr">"top3"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">900</span>
                },
              <span class="hljs-attr">"row3"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">20000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">150</span>
                },
              <span class="hljs-attr">"top2"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">20000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">90</span>
                },
              <span class="hljs-attr">"bottom2"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">20000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">90</span>
                },
              <span class="hljs-attr">"top1"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">200000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">3.2</span>
                },
              <span class="hljs-attr">"bottom1"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">200000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">4.2</span>
                }
            },
          <span class="hljs-attr">"hanoylottospecial_set"</span>: {
              <span class="hljs-attr">"top4"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">900</span>
                },
              <span class="hljs-attr">"row4"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">20000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">150</span>
                },
              <span class="hljs-attr">"top3"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">900</span>
                },
              <span class="hljs-attr">"row3"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">20000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">150</span>
                },
              <span class="hljs-attr">"front2"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">600,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">15</span>
                },
              <span class="hljs-attr">"back2"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">600,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">15</span>
                }
            },
          <span class="hljs-attr">"hanoylottovip"</span>: {
              <span class="hljs-attr">"top3"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">900</span>
                },
              <span class="hljs-attr">"row3"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">20000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">150</span>
                },
              <span class="hljs-attr">"top2"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">20000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">90</span>
                },
              <span class="hljs-attr">"bottom2"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">20000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">90</span>
                },
              <span class="hljs-attr">"top1"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">200000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">3.2</span>
                },
              <span class="hljs-attr">"bottom1"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">200000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">4.2</span>
                }
            },
          <span class="hljs-attr">"hanoylottovip_set"</span>: {
              <span class="hljs-attr">"top4"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">900</span>
                },
              <span class="hljs-attr">"row4"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">20000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">150</span>
                },
              <span class="hljs-attr">"top3"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">900</span>
                },
              <span class="hljs-attr">"row3"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">20000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">150</span>
                },
              <span class="hljs-attr">"front2"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">600,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">15</span>
                },
              <span class="hljs-attr">"back2"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">600,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">15</span>
                }
            },
          <span class="hljs-attr">"hanoylottotv"</span>: {
              <span class="hljs-attr">"top3"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">900</span>
                },
              <span class="hljs-attr">"row3"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">20000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">150</span>
                },
              <span class="hljs-attr">"top2"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">20000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">90</span>
                },
              <span class="hljs-attr">"bottom2"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">20000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">90</span>
                },
              <span class="hljs-attr">"top1"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">200000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">3.2</span>
                },
              <span class="hljs-attr">"bottom1"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">200000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">4.2</span>
                }
            },
          <span class="hljs-attr">"hanoylottotv_set"</span>: {
              <span class="hljs-attr">"top4"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">900</span>
                },
              <span class="hljs-attr">"row4"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">20000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">150</span>
                },
              <span class="hljs-attr">"top3"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">900</span>
                },
              <span class="hljs-attr">"row3"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">20000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">150</span>
                },
              <span class="hljs-attr">"front2"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">600,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">15</span>
                },
              <span class="hljs-attr">"back2"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">600,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">15</span>
                }
            },
          <span class="hljs-attr">"hanoylottostar"</span>: {
              <span class="hljs-attr">"top3"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">900</span>
                },
              <span class="hljs-attr">"row3"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">20000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">150</span>
                },
              <span class="hljs-attr">"top2"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">20000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">90</span>
                },
              <span class="hljs-attr">"bottom2"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">20000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">90</span>
                },
              <span class="hljs-attr">"top1"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">200000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">3.2</span>
                },
              <span class="hljs-attr">"bottom1"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">200000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">4.2</span>
                }
            },
          <span class="hljs-attr">"hanoylottostar_set"</span>: {
              <span class="hljs-attr">"top4"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">900</span>
                },
              <span class="hljs-attr">"row4"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">20000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">150</span>
                },
              <span class="hljs-attr">"top3"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">900</span>
                },
              <span class="hljs-attr">"row3"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">20000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">150</span>
                },
              <span class="hljs-attr">"front2"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">600,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">15</span>
                },
              <span class="hljs-attr">"back2"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">600,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">15</span>
                }
            },
          <span class="hljs-attr">"pingponglotto"</span>: {
              <span class="hljs-attr">"top6"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">1000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">50000</span>
                },
              <span class="hljs-attr">"top5"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">2000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">25000</span>
                },
              <span class="hljs-attr">"top4"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">5000</span>
                },
              <span class="hljs-attr">"row4"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">7000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">225</span>
                },
              <span class="hljs-attr">"top3"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">800</span>
                },
              <span class="hljs-attr">"row3"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">20000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">130</span>
                },
              <span class="hljs-attr">"top2"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">20000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">90</span>
                },
              <span class="hljs-attr">"bottom2"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">20000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">90</span>
                },
              <span class="hljs-attr">"row2"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">20000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">12</span>
                },
              <span class="hljs-attr">"top1"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">200000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">3</span>
                },
              <span class="hljs-attr">"bottom1"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">200000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">4</span>
                }
            },
          <span class="hljs-attr">"pingponglotto6"</span>: {
              <span class="hljs-attr">"top6"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">1000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">50000</span>
                },
              <span class="hljs-attr">"top5"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">2000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">25000</span>
                },
              <span class="hljs-attr">"top4"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">5000</span>
                },
              <span class="hljs-attr">"row4"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">7000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">225</span>
                },
              <span class="hljs-attr">"top3"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">800</span>
                },
              <span class="hljs-attr">"row3"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">20000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">130</span>
                },
              <span class="hljs-attr">"top2"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">20000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">90</span>
                },
              <span class="hljs-attr">"bottom2"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">20000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">90</span>
                },
              <span class="hljs-attr">"row2"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">20000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">12</span>
                },
              <span class="hljs-attr">"top1"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">200000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">3</span>
                },
              <span class="hljs-attr">"bottom1"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">200000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">4</span>
                }
            },
          <span class="hljs-attr">"pingponglotto3"</span>: {
              <span class="hljs-attr">"top3"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">800</span>
                },
              <span class="hljs-attr">"row3"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">20000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">130</span>
                },
              <span class="hljs-attr">"top2"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">20000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">90</span>
                },
              <span class="hljs-attr">"row2"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">20000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">12</span>
                },
              <span class="hljs-attr">"top1"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">200000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">3</span>
                }
            },
          <span class="hljs-attr">"pingponglotto2"</span>: {
              <span class="hljs-attr">"top2"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">20000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">90</span>
                },
              <span class="hljs-attr">"row2"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">20000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">12</span>
                },
              <span class="hljs-attr">"top1"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">200000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">3</span>
                }
            },
          <span class="hljs-attr">"yeekeelotto"</span>: {
              <span class="hljs-attr">"top3"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">800</span>
                },
              <span class="hljs-attr">"row3"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">20000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">130</span>
                },
              <span class="hljs-attr">"top2"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">20000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">90</span>
                },
              <span class="hljs-attr">"bottom2"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">20000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">90</span>
                },
              <span class="hljs-attr">"top1"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">200000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">3</span>
                },
              <span class="hljs-attr">"bottom1"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">200000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">4</span>
                }
            },
          <span class="hljs-attr">"stock"</span>: {
              <span class="hljs-attr">"top3"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">800</span>
                },
              <span class="hljs-attr">"row3"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">20000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">130</span>
                },
              <span class="hljs-attr">"top2"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">20000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">90</span>
                },
              <span class="hljs-attr">"bottom2"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">20000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">90</span>
                },
              <span class="hljs-attr">"top1"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">200000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">3</span>
                },
              <span class="hljs-attr">"bottom1"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">200000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">4</span>
                }
            },
          <span class="hljs-attr">"zodiaclotto"</span>: {
              <span class="hljs-attr">"ball1"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">200000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">4.2</span>
                },
              <span class="hljs-attr">"ball2"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">20000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">90</span>
                },
              <span class="hljs-attr">"ball3"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">20000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">150</span>
                },
              <span class="hljs-attr">"ball4"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">200000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">3.2</span>
                },
              <span class="hljs-attr">"color"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0,</span>
                  <span class="hljs-attr">"max"</span>: <span class="hljs-string">20000,</span>
                  <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-string">90</span>
                }
            }
        }
    }

}</code></pre>
          <!-- <script src="./API_files/ex_3-1.js.download"></script> -->
        </div>
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
    </div>
  </div>
</template>

<script>
export default {
  name: "BoxSem54",
};
</script>
