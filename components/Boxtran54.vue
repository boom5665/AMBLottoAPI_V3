<template>
  <div style="">
    <div type="primary" class="box-r-scoll">
      <div>
        <div class="font-prim"><span>Code Transfer</span></div>
      </div>
      <!-- // -->
      <!-- // -->
      <div class="col-12" id="tabFour">
        <div>
          <b style="color: #19a17a !important" set-lan="text:4.4 login request"
            >5.4
            <span style="padding-left: 3px" id="Seamless_login_request"
              >Login request</span
            ></b
          >
        </div>
      </div>
      <div class="divBox">
        <div class="col-12">
          <label class="txtHead">Method : </label>
          <label>Post</label>
        </div>
        <div class="col-12">
          <label class="txtHead"> Url : </label>
          <label>
            https://test-api.askmelotto.vip/apiRoute/member/Tranferwallet/loginRequest
          </label>
        </div>
        <div class="col-12">
          <label class="txtHead"> headers : </label>
          <label> content-type application/json </label>
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
      <div class="koh-faq form-group">
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
                <button class="custom-btn btn-13" @click="get_Transfer">
                  Send Code
                </button></a
              >
            </div>
          </div>
        </div>

        <div class="koh-faq-answer col-12">
          <copy-text id="myDiv">
            <pre>
              <code id="3_4A" style="border-radius: 0.375rem;  height: 300px; overflow: scroll;" class="hljs json">{
              <span class="hljs-attr">"agentUsername"</span>: <span class="hljs-string">"agenttoe2",</span>
              <span class="hljs-attr">"agentApiKey"</span>: <span class="hljs-string">"90c1f92bf298eeedf29ddea95681f56c7b707ec32368f820e01270d2bf9cda8b",</span>
              <span class="hljs-attr">"playerUsername"</span>: <span class="hljs-string">"testuserapi002",</span>
              <span class="hljs-attr">"data"</span>: {
                  <span class="hljs-attr">"username"</span>: <span class="hljs-string">"ketttt",</span>
                  <span class="hljs-attr">"phone"</span>: <span class="hljs-string">"0111111111",</span>
                  <span class="hljs-attr">"email"</span>: <span class="hljs-string">"google1@gmail.com",</span>
                  <span class="hljs-attr">"line"</span>: <span class="hljs-string">"line1",</span>
                  <span class="hljs-attr">"currency"</span>: <span class="hljs-string">"THB",</span>
                  <span class="hljs-attr">"rate"</span>: {
                      <span class="hljs-attr">"stock"</span>: {
                          <span class="hljs-attr">"row3"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">150,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"top1"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">3.2,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"top2"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">90,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"top3"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">900,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"bottom1"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">4.2,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"bottom2"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">90,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
            }
                      <span class="hljs-attr">"gsblotto"</span>: {
                          <span class="hljs-attr">"row3"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">150,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"top1"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">3.2,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"top2"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">90,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"top3"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">900,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"bottom1"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">4.2,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"bottom2"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">90,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
            }
                      <span class="hljs-attr">"baaclotto"</span>: {
                          <span class="hljs-attr">"row3"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">150,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"top1"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">3.2,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"top2"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">90,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"top3"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">900,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"bottom1"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">4.2,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"bottom2"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">90,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
            }
                      <span class="hljs-attr">"laoslotto"</span>: {
                          <span class="hljs-attr">"row2"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">12,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"row3"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">150,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"row4"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">225,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"top1"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">3.2,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"top2"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">90,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"top3"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">900,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"top4"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">5000,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"top5"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">0,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">0,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">0,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"top6"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">0,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">0,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">0,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"bottom1"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">4.2,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"bottom2"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">90,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
            }
                      <span class="hljs-attr">"stockthai"</span>: {
                          <span class="hljs-attr">"row3"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">150,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"top1"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">3.2,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"top2"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">90,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"top3"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">900,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"bottom1"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">4.2,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"bottom2"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">90,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
            }
                      <span class="hljs-attr">"thailotto"</span>: {
                          <span class="hljs-attr">"row2"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">12,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"row3"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">150,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"row4"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">225,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"top1"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">3.2,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"top2"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">90,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"top3"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">900,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"top4"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">5000,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"top5"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">25000,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"top6"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">50000,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"bottom1"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">4.2,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"bottom2"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">90,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"bottom3"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">225,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
            }
                      <span class="hljs-attr">"hanoylotto"</span>: {
                          <span class="hljs-attr">"row3"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">150,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"row4"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">225,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"top1"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">3.2,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"top2"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">90,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"top3"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">900,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"top4"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">5000,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"top5"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">25000,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"bottom1"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">4.2,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"bottom2"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">90,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
            }
                      <span class="hljs-attr">"malaylotto"</span>: {
                          <span class="hljs-attr">"row3"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">150,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"top1"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">3.2,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"top2"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">90,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"top3"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">900,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"bottom1"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">4.2,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"bottom2"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">90,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
            }
                      <span class="hljs-attr">"stockchina"</span>: {
                          <span class="hljs-attr">"row3"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">150,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"top1"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">3.2,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"top2"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">90,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"top3"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">900,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"bottom1"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">4.2,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"bottom2"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">90,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
            }
                      <span class="hljs-attr">"stockegypt"</span>: {
                          <span class="hljs-attr">"row3"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">150,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"top1"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">3.2,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"top2"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">90,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"top3"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">900,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"bottom1"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">4.2,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"bottom2"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">90,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
            }
                      <span class="hljs-attr">"stockindia"</span>: {
                          <span class="hljs-attr">"row3"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">150,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"top1"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">3.2,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"top2"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">90,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"top3"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">900,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"bottom1"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">4.2,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"bottom2"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">90,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
            }
                      <span class="hljs-attr">"stockkorea"</span>: {
                          <span class="hljs-attr">"row3"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">150,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"top1"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">3.2,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"top2"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">90,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"top3"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">900,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"bottom1"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">4.2,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"bottom2"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">90,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
            }
                      <span class="hljs-attr">"laoslottohd"</span>: {
                          <span class="hljs-attr">"row2"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">12,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"row3"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">25,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"row4"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">40,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"top1"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">3.2,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"top2"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">90,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"top3"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">350,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"top4"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">1000,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"top5"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">25000,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"bottom1"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">4.2,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"bottom2"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">90,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
            }
                      <span class="hljs-attr">"laoslottotv"</span>: {
                          <span class="hljs-attr">"row2"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">12,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"row3"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">25,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"row4"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">40,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"top1"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">3.2,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"top2"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">90,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"top3"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">350,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"top4"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">1000,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"top5"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">25000,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"bottom1"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">4.2,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"bottom2"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">90,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
            }
                      <span class="hljs-attr">"stockgerman"</span>: {
                          <span class="hljs-attr">"row3"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">150,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"top1"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">3.2,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"top2"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">90,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"top3"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">900,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"bottom1"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">4.2,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"bottom2"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">90,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
            }
                      <span class="hljs-attr">"stocknikkei"</span>: {
                          <span class="hljs-attr">"row3"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">150,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"top1"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">3.2,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"top2"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">90,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"top3"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">900,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"bottom1"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">4.2,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"bottom2"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">90,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
            }
                      <span class="hljs-attr">"stockrussia"</span>: {
                          <span class="hljs-attr">"row3"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">150,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"top1"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">3.2,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"top2"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">90,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"top3"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">900,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"bottom1"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">4.2,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"bottom2"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">90,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
            }
                      <span class="hljs-attr">"stocktaiwan"</span>: {
                          <span class="hljs-attr">"row3"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">150,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"top1"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">3.2,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"top2"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">90,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"top3"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">900,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"bottom1"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">4.2,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"bottom2"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">90,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
            }
                      <span class="hljs-attr">"yeekeelotto"</span>: {
                          <span class="hljs-attr">"row3"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">150,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"top1"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">3.2,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"top2"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">90,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"top3"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">900,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"bottom1"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">4.2,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"bottom2"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">90,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
            }
                      <span class="hljs-attr">"zodiaclotto"</span>: {
                          <span class="hljs-attr">"ball1"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">0.01,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">7.50,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"ball2"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">0.01,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">3.75,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"ball3"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">0.01,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">2.50,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"ball4"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">0.01,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">1.90,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"color"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">0.01,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">2.50,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
            }
                      <span class="hljs-attr">"hanoylottotv"</span>: {
                          <span class="hljs-attr">"row3"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">150,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"row4"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">150,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"top1"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">3.2,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"top2"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">90,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"top3"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">900,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"top4"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">150,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"top5"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">150,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"bottom1"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">4.2,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"bottom2"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">90,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
            }
                      <span class="hljs-attr">"stockengland"</span>: {
                          <span class="hljs-attr">"row3"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">150,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"top1"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">3.2,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"top2"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">90,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"top3"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">900,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"bottom1"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">4.2,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"bottom2"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">90,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
            }
                      <span class="hljs-attr">"hanoylottovip"</span>: {
                          <span class="hljs-attr">"row3"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">150,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"row4"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">225,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"top1"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">3.2,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"top2"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">90,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"top3"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">900,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"top4"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">5000,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"top5"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">25000,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"bottom1"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">4.2,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"bottom2"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">90,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
            }
                      <span class="hljs-attr">"laoslotto_set"</span>: {
                          <span class="hljs-attr">"row3"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">25,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"row4"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">40,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"top3"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">350,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"top4"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">1000,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"back2"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">15,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"front2"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">15,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
            }
                      <span class="hljs-attr">"pingponglotto"</span>: {
                          <span class="hljs-attr">"row2"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">12,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"row3"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">150,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"row4"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">225,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"top1"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">3.2,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"top2"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">90,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"top3"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">900,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"top4"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">5000,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"top5"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">25000,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"top6"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">50000,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"bottom1"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">4.2,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"bottom2"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">90,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
            }
                      <span class="hljs-attr">"stockdowjones"</span>: {
                          <span class="hljs-attr">"row3"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">150,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"top1"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">3.2,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"top2"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">90,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"top3"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">900,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"bottom1"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">4.2,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"bottom2"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">90,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
            }
                      <span class="hljs-attr">"stockhangseng"</span>: {
                          <span class="hljs-attr">"row3"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">150,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"top1"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">3.2,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"top2"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">90,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"top3"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">900,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"bottom1"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">4.2,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"bottom2"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">90,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
            }
                      <span class="hljs-attr">"hanoylotto_set"</span>: {
                          <span class="hljs-attr">"row3"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">25,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"row4"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">40,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"top3"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">350,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"top4"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">1000,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"back2"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">15,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"front2"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">15,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
            }
                      <span class="hljs-attr">"hanoylottostar"</span>: {
                          <span class="hljs-attr">"row3"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">150,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"row4"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">150,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"top1"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">3.2,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"top2"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">90,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"top3"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">900,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"top4"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">150,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"top5"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">150,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"bottom1"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">4.2,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"bottom2"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">90,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
            }
                      <span class="hljs-attr">"laoslotto6_set"</span>: {
                          <span class="hljs-attr">"row3"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">0.01,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">0.01,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">0,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"row4"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">0.01,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">0.01,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">0,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"top3"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">0.01,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">0.01,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">0,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"top4"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">0.01,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">0.01,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">0,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"top5"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">0.01,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">0.01,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">0,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"top6"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">0.01,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">0.01,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">0,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"back2"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">0.01,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">0.01,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">0,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"front2"</span>: {
                              <span class="hljs-attr">"max"</span>:  <span class="hljs-string">01,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">0.01,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">0,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
            }
                      <span class="hljs-attr">"laoslottoextra"</span>: {
                          <span class="hljs-attr">"row2"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">12,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"row3"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">25,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"row4"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">40,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"top1"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">3.2,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"top2"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">90,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"top3"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">350,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"top4"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">1000,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"top5"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">25000,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"bottom1"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">4.2,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"bottom2"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">90,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
            }
                      <span class="hljs-attr">"malaylotto_set"</span>: {
                          <span class="hljs-attr">"row3"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">25,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"row4"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">40,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"top3"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">350,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"top4"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">1000,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"back2"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">15,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"front2"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">15,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
            }
                      <span class="hljs-attr">"pingponglotto2"</span>: {
                          <span class="hljs-attr">"row2"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">18.33,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"top1"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">3.66,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"top2"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">90,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
            }
                      <span class="hljs-attr">"pingponglotto3"</span>: {
                          <span class="hljs-attr">"row2"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">12,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"row3"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">150,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"top1"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">3.2,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"top2"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">90,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"top3"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">900,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
            }
                      <span class="hljs-attr">"pingponglotto6"</span>: {
                          <span class="hljs-attr">"row2"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">12,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"row3"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">150,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"row4"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">225,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"top1"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">3.2,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"top2"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">90,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"top3"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">900,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"top4"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">5000,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"top5"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">25000,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"top6"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">50000,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"bottom1"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">4.2,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"bottom2"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">90,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
            }
                      <span class="hljs-attr">"stocksingapore"</span>: {
                          <span class="hljs-attr">"row3"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">150,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"top1"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">3.2,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"top2"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">90,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"top3"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">900,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"bottom1"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">4.2,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"bottom2"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">90,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
            }
                      <span class="hljs-attr">"laoslottohd_set"</span>: {
                          <span class="hljs-attr">"row3"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">25,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"row4"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">40,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"top3"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">350,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"top4"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">1000,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"back2"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">15,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"front2"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">15,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
            }
                      <span class="hljs-attr">"laoslottotv_set"</span>: {
                          <span class="hljs-attr">"row3"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">25,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"row4"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">40,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"top3"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">350,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"top4"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">1000,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"back2"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">15,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"front2"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">15,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
            }
                      <span class="hljs-attr">"hanoylottotv_set"</span>: {
                          <span class="hljs-attr">"row3"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">25,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"row4"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">40,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"top3"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">350,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"top4"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">1000,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"back2"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">15,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"front2"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">15,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
            }
                      <span class="hljs-attr">"stockdowjonesvip"</span>: {
                          <span class="hljs-attr">"row3"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">150,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"top1"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">3.2,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"top2"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">90,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"top3"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">900,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"bottom1"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">4.2,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"bottom2"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">90,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
            }
                      <span class="hljs-attr">"hanoylottospecial"</span>: {
                          <span class="hljs-attr">"row3"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">150,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"row4"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">225,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"top1"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">3.2,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"top2"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">90,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"top3"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">900,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"top4"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">5000,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"top5"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">25000,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"bottom1"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">4.2,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"bottom2"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">90,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
            }
                      <span class="hljs-attr">"hanoylottovip_set"</span>: {
                          <span class="hljs-attr">"row3"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">25,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"row4"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">40,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"top3"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">350,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"top4"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">1000,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"back2"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">15,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"front2"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">15,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
            }
                      <span class="hljs-attr">"hanoylottostar_set"</span>: {
                          <span class="hljs-attr">"row3"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">25,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"row4"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">40,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"top3"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">350,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"top4"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">1000,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"back2"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">15,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"front2"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">15,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
            }
                      <span class="hljs-attr">"laoslottoextra_set"</span>: {
                          <span class="hljs-attr">"row3"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">25,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"row4"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">40,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"top3"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">350,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"top4"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">1000,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"back2"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">15,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"front2"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">15,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
            }
                      <span class="hljs-attr">"hanoylottospecial_set"</span>: {
                          <span class="hljs-attr">"row3"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">25,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"row4"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">40,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"top3"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">350,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"top4"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">1000,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"back2"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">15,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
                          <span class="hljs-attr">"front2"</span>: {
                              <span class="hljs-attr">"max"</span>: <span class="hljs-string">5000000,</span>
                              <span class="hljs-attr">"min"</span>: <span class="hljs-string">1,</span>
                              <span class="hljs-attr">"payout"</span>: <span class="hljs-string">15,</span>
                              <span class="hljs-attr">"discount"</span>: <span class="hljs-string">0</span>
                }
            }
        }
    }
}</code></pre>
          </copy-text>
          <!-- <script src="./API_files/ex_3-1.js.download"></script> -->
        </div>
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
                                    <code id="44B" style="border-radius: 0.375rem;" class="hljs json">{
    <span class="hljs-attr">"code"</span>:  <span class="hljs-number">200</span>,
    <span class="hljs-attr">"data"</span>: {
        <span class="hljs-attr">"playerApiId"</span>: <span class="hljs-string">"ac355caa7591bae913f0e27ec84ab6c526274778"</span>,
        <span class="hljs-attr">"playerApiUsername"</span>: <span class="hljs-string">"testuserapi002@agenttoe2"</span>,
        <span class="hljs-attr">"playerUsername"</span>: <span class="hljs-string">"testuserapi002"</span>,
        <span class="hljs-attr">"tkUuid"</span>: <span class="hljs-string">"12cfc90e9569faf6e70c6d001b12f9e1c392f631"</span>,
        <span class="hljs-attr">"url"</span>: <span class="hljs-string">"https://dev-askmelotto.pirate168.com/token?token=12cfc90e9569faf6e70c6d001b12f9e1c392f631&header=off"</span>,
        <span class="hljs-attr">"urlFullPage"</span>: <span class="hljs-string">"https://dev-askmelotto.pirate168.com/token?token=12cfc90e9569faf6e70c6d001b12f9e1c392f631&header=on"</span>
    },
    <span class="hljs-attr"> "msg"</span>: {
        <span class="hljs-attr">"en"</span>:  <span class="hljs-attr">"Success"</span>,
        <span class="hljs-attr">"th"</span>:  <span class="hljs-attr">"สำเร็จ"</span>
    }
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
          <div></div>
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
              <pre>
                                    <code id="44B" style="border-radius: 0.375rem;" class="hljs json">{
    <span class="hljs-attr">"code"</span>:  <span class="hljs-number">200</span>,
    <span class="hljs-attr">"data"</span>: {
        <span class="hljs-attr">"playerApiId"</span>: <span class="hljs-string">"ac355caa7591bae913f0e27ec84ab6c526274778"</span>,
        <span class="hljs-attr">"playerApiUsername"</span>: <span class="hljs-string">"testuserapi002@agenttoe2"</span>,
        <span class="hljs-attr">"playerUsername"</span>: <span class="hljs-string">"testuserapi002"</span>,
        <span class="hljs-attr">"tkUuid"</span>: <span class="hljs-string">"12cfc90e9569faf6e70c6d001b12f9e1c392f631"</span>,
        <span class="hljs-attr">"url"</span>: <span class="hljs-string">"https://dev-askmelotto.pirate168.com/token?token=12cfc90e9569faf6e70c6d001b12f9e1c392f631&header=off"</span>,
        <span class="hljs-attr">"urlFullPage"</span>: <span class="hljs-string">"https://dev-askmelotto.pirate168.com/token?token=12cfc90e9569faf6e70c6d001b12f9e1c392f631&header=on"</span>
    },
    <span class="hljs-attr"> "msg"</span>: {
        <span class="hljs-attr">"en"</span>:  <span class="hljs-attr">"Success"</span>,
        <span class="hljs-attr">"th"</span>:  <span class="hljs-attr">"สำเร็จ"</span>
    }
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
                <pre>
                                    <code id="44B" style="border-radius: 0.375rem;" class="hljs json">{
<span class="hljs-attr">"code"</span>: <span class="hljs-number">{{ code }}</span>,
    <span class="hljs-attr">"data"</span>: {
         <span class="hljs-attr">"playerApiId"</span>: <span class="hljs-string">{{playerApiId }}</span>,
        <span class="hljs-attr">"playerApiUsername"</span>: <span class="hljs-string">{{ playerApiUsername}}</span>,
        <span class="hljs-attr">"playerUsername"</span>: <span class="hljs-string">{{playerUsername }}</span>,
        <span class="hljs-attr">"tkUuid"</span>: <span class="hljs-string">{{ tkUuid}}</span>,
        <span class="hljs-attr">"url"</span>: <span class="hljs-string">{{url }}</span>,
        <span class="hljs-attr">"urlFullPage"</span>: <span class="hljs-string">{{ urlFullPage}}</span>
    },
    <span class="hljs-attr"> "msg"</span>: {
        <span class="hljs-attr">"en"</span>:  <span class="hljs-attr">"{{en}}",</span>
        <span class="hljs-attr">"th"</span>:  <span class="hljs-attr">"{{th}}"</span>
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
        </div>
      </div>
      <div class="loading" v-if="isLoading">Loading</div>
    </div>
  </div>
</template>

<script>
import CopyText from "~/components/CopyText.vue";
export default {
  components: {
    CopyText,
  },
  name: "BoxSem54",
  data() {
    return {
      success: "",
      nosuccess: "",
      permission: "",
      numfail: "",
      code: "",
      playerApiId: "",
      playerApiUsername: "",
      playerUsername: "",
      url: "",
      urlFullPage: "",
      tkUuid: "",
      msg: "",
      en: "",
      th: "",
      isLoading: false, // กำหนดให้แสดง "Loading..." ในเริ่มต้น
      pop: false, // กำหนดให้แสดง "Loading..." ในเริ่มต้น
      jsonData: "", // ข้อมูล JSON ที่จะส่งไปยังเซิร์ฟเวอร์
      URLdata:
        "https://test-api.askmelotto.vip/apiRoute/member/Tranferwallet/loginRequest", // กำหนดค่าเริ่มต้นของ agentUsername
    };
  },
  beforeCreate() {},
  mounted() {
    // this.get_Seamless();
    const json = {
      agentUsername: "agenttoe2",
      agentApiKey:
        "90c1f92bf298eeedf29ddea95681f56c7b707ec32368f820e01270d2bf9cda8b",
      playerUsername: "testuserapi002",
      data: {
        username: "ketttt",
        phone: "0111111111",
        email: "google1@gmail.com",
        line: "line1",
        currency: "THB",
        rate: {
          stock: {
            row3: {
              max: 5000000,
              min: 1,
              payout: 150,
              discount: 0,
            },
            top1: {
              max: 5000000,
              min: 1,
              payout: 3.2,
              discount: 0,
            },
            top2: {
              max: 5000000,
              min: 1,
              payout: 90,
              discount: 0,
            },
            top3: {
              max: 5000000,
              min: 1,
              payout: 900,
              discount: 0,
            },
            bottom1: {
              max: 5000000,
              min: 1,
              payout: 4.2,
              discount: 0,
            },
            bottom2: {
              max: 5000000,
              min: 1,
              payout: 90,
              discount: 0,
            },
          },
          gsblotto: {
            row3: {
              max: 5000000,
              min: 1,
              payout: 150,
              discount: 0,
            },
            top1: {
              max: 5000000,
              min: 1,
              payout: 3.2,
              discount: 0,
            },
            top2: {
              max: 5000000,
              min: 1,
              payout: 90,
              discount: 0,
            },
            top3: {
              max: 5000000,
              min: 1,
              payout: 900,
              discount: 0,
            },
            bottom1: {
              max: 5000000,
              min: 1,
              payout: 4.2,
              discount: 0,
            },
            bottom2: {
              max: 5000000,
              min: 1,
              payout: 90,
              discount: 0,
            },
          },
          baaclotto: {
            row3: {
              max: 5000000,
              min: 1,
              payout: 150,
              discount: 0,
            },
            top1: {
              max: 5000000,
              min: 1,
              payout: 3.2,
              discount: 0,
            },
            top2: {
              max: 5000000,
              min: 1,
              payout: 90,
              discount: 0,
            },
            top3: {
              max: 5000000,
              min: 1,
              payout: 900,
              discount: 0,
            },
            bottom1: {
              max: 5000000,
              min: 1,
              payout: 4.2,
              discount: 0,
            },
            bottom2: {
              max: 5000000,
              min: 1,
              payout: 90,
              discount: 0,
            },
          },
          laoslotto: {
            row2: {
              max: 5000000,
              min: 1,
              payout: 12,
              discount: 0,
            },
            row3: {
              max: 5000000,
              min: 1,
              payout: 150,
              discount: 0,
            },
            row4: {
              max: 5000000,
              min: 1,
              payout: 225,
              discount: 0,
            },
            top1: {
              max: 5000000,
              min: 1,
              payout: 3.2,
              discount: 0,
            },
            top2: {
              max: 5000000,
              min: 1,
              payout: 90,
              discount: 0,
            },
            top3: {
              max: 5000000,
              min: 1,
              payout: 900,
              discount: 0,
            },
            top4: {
              max: 5000000,
              min: 1,
              payout: 5000,
              discount: 0,
            },
            top5: {
              max: 0,
              min: 0,
              payout: 0,
              discount: 0,
            },
            top6: {
              max: 0,
              min: 0,
              payout: 0,
              discount: 0,
            },
            bottom1: {
              max: 5000000,
              min: 1,
              payout: 4.2,
              discount: 0,
            },
            bottom2: {
              max: 5000000,
              min: 1,
              payout: 90,
              discount: 0,
            },
          },
          stockthai: {
            row3: {
              max: 5000000,
              min: 1,
              payout: 150,
              discount: 0,
            },
            top1: {
              max: 5000000,
              min: 1,
              payout: 3.2,
              discount: 0,
            },
            top2: {
              max: 5000000,
              min: 1,
              payout: 90,
              discount: 0,
            },
            top3: {
              max: 5000000,
              min: 1,
              payout: 900,
              discount: 0,
            },
            bottom1: {
              max: 5000000,
              min: 1,
              payout: 4.2,
              discount: 0,
            },
            bottom2: {
              max: 5000000,
              min: 1,
              payout: 90,
              discount: 0,
            },
          },
          thailotto: {
            row2: {
              max: 5000000,
              min: 1,
              payout: 12,
              discount: 0,
            },
            row3: {
              max: 5000000,
              min: 1,
              payout: 150,
              discount: 0,
            },
            row4: {
              max: 5000000,
              min: 1,
              payout: 225,
              discount: 0,
            },
            top1: {
              max: 5000000,
              min: 1,
              payout: 3.2,
              discount: 0,
            },
            top2: {
              max: 5000000,
              min: 1,
              payout: 90,
              discount: 0,
            },
            top3: {
              max: 5000000,
              min: 1,
              payout: 900,
              discount: 0,
            },
            top4: {
              max: 5000000,
              min: 1,
              payout: 5000,
              discount: 0,
            },
            top5: {
              max: 5000000,
              min: 1,
              payout: 25000,
              discount: 0,
            },
            top6: {
              max: 5000000,
              min: 1,
              payout: 50000,
              discount: 0,
            },
            bottom1: {
              max: 5000000,
              min: 1,
              payout: 4.2,
              discount: 0,
            },
            bottom2: {
              max: 5000000,
              min: 1,
              payout: 90,
              discount: 0,
            },
            bottom3: {
              max: 5000000,
              min: 1,
              payout: 225,
              discount: 0,
            },
          },
          hanoylotto: {
            row3: {
              max: 5000000,
              min: 1,
              payout: 150,
              discount: 0,
            },
            row4: {
              max: 5000000,
              min: 1,
              payout: 225,
              discount: 0,
            },
            top1: {
              max: 5000000,
              min: 1,
              payout: 3.2,
              discount: 0,
            },
            top2: {
              max: 5000000,
              min: 1,
              payout: 90,
              discount: 0,
            },
            top3: {
              max: 5000000,
              min: 1,
              payout: 900,
              discount: 0,
            },
            top4: {
              max: 5000000,
              min: 1,
              payout: 5000,
              discount: 0,
            },
            top5: {
              max: 5000000,
              min: 1,
              payout: 25000,
              discount: 0,
            },
            bottom1: {
              max: 5000000,
              min: 1,
              payout: 4.2,
              discount: 0,
            },
            bottom2: {
              max: 5000000,
              min: 1,
              payout: 90,
              discount: 0,
            },
          },
          malaylotto: {
            row3: {
              max: 5000000,
              min: 1,
              payout: 150,
              discount: 0,
            },
            top1: {
              max: 5000000,
              min: 1,
              payout: 3.2,
              discount: 0,
            },
            top2: {
              max: 5000000,
              min: 1,
              payout: 90,
              discount: 0,
            },
            top3: {
              max: 5000000,
              min: 1,
              payout: 900,
              discount: 0,
            },
            bottom1: {
              max: 5000000,
              min: 1,
              payout: 4.2,
              discount: 0,
            },
            bottom2: {
              max: 5000000,
              min: 1,
              payout: 90,
              discount: 0,
            },
          },
          stockchina: {
            row3: {
              max: 5000000,
              min: 1,
              payout: 150,
              discount: 0,
            },
            top1: {
              max: 5000000,
              min: 1,
              payout: 3.2,
              discount: 0,
            },
            top2: {
              max: 5000000,
              min: 1,
              payout: 90,
              discount: 0,
            },
            top3: {
              max: 5000000,
              min: 1,
              payout: 900,
              discount: 0,
            },
            bottom1: {
              max: 5000000,
              min: 1,
              payout: 4.2,
              discount: 0,
            },
            bottom2: {
              max: 5000000,
              min: 1,
              payout: 90,
              discount: 0,
            },
          },
          stockegypt: {
            row3: {
              max: 5000000,
              min: 1,
              payout: 150,
              discount: 0,
            },
            top1: {
              max: 5000000,
              min: 1,
              payout: 3.2,
              discount: 0,
            },
            top2: {
              max: 5000000,
              min: 1,
              payout: 90,
              discount: 0,
            },
            top3: {
              max: 5000000,
              min: 1,
              payout: 900,
              discount: 0,
            },
            bottom1: {
              max: 5000000,
              min: 1,
              payout: 4.2,
              discount: 0,
            },
            bottom2: {
              max: 5000000,
              min: 1,
              payout: 90,
              discount: 0,
            },
          },
          stockindia: {
            row3: {
              max: 5000000,
              min: 1,
              payout: 150,
              discount: 0,
            },
            top1: {
              max: 5000000,
              min: 1,
              payout: 3.2,
              discount: 0,
            },
            top2: {
              max: 5000000,
              min: 1,
              payout: 90,
              discount: 0,
            },
            top3: {
              max: 5000000,
              min: 1,
              payout: 900,
              discount: 0,
            },
            bottom1: {
              max: 5000000,
              min: 1,
              payout: 4.2,
              discount: 0,
            },
            bottom2: {
              max: 5000000,
              min: 1,
              payout: 90,
              discount: 0,
            },
          },
          stockkorea: {
            row3: {
              max: 5000000,
              min: 1,
              payout: 150,
              discount: 0,
            },
            top1: {
              max: 5000000,
              min: 1,
              payout: 3.2,
              discount: 0,
            },
            top2: {
              max: 5000000,
              min: 1,
              payout: 90,
              discount: 0,
            },
            top3: {
              max: 5000000,
              min: 1,
              payout: 900,
              discount: 0,
            },
            bottom1: {
              max: 5000000,
              min: 1,
              payout: 4.2,
              discount: 0,
            },
            bottom2: {
              max: 5000000,
              min: 1,
              payout: 90,
              discount: 0,
            },
          },
          laoslottohd: {
            row2: {
              max: 5000000,
              min: 1,
              payout: 12,
              discount: 0,
            },
            row3: {
              max: 5000000,
              min: 1,
              payout: 25,
              discount: 0,
            },
            row4: {
              max: 5000000,
              min: 1,
              payout: 40,
              discount: 0,
            },
            top1: {
              max: 5000000,
              min: 1,
              payout: 3.2,
              discount: 0,
            },
            top2: {
              max: 5000000,
              min: 1,
              payout: 90,
              discount: 0,
            },
            top3: {
              max: 5000000,
              min: 1,
              payout: 350,
              discount: 0,
            },
            top4: {
              max: 5000000,
              min: 1,
              payout: 1000,
              discount: 0,
            },
            top5: {
              max: 5000000,
              min: 1,
              payout: 25000,
              discount: 0,
            },
            bottom1: {
              max: 5000000,
              min: 1,
              payout: 4.2,
              discount: 0,
            },
            bottom2: {
              max: 5000000,
              min: 1,
              payout: 90,
              discount: 0,
            },
          },
          laoslottotv: {
            row2: {
              max: 5000000,
              min: 1,
              payout: 12,
              discount: 0,
            },
            row3: {
              max: 5000000,
              min: 1,
              payout: 25,
              discount: 0,
            },
            row4: {
              max: 5000000,
              min: 1,
              payout: 40,
              discount: 0,
            },
            top1: {
              max: 5000000,
              min: 1,
              payout: 3.2,
              discount: 0,
            },
            top2: {
              max: 5000000,
              min: 1,
              payout: 90,
              discount: 0,
            },
            top3: {
              max: 5000000,
              min: 1,
              payout: 350,
              discount: 0,
            },
            top4: {
              max: 5000000,
              min: 1,
              payout: 1000,
              discount: 0,
            },
            top5: {
              max: 5000000,
              min: 1,
              payout: 25000,
              discount: 0,
            },
            bottom1: {
              max: 5000000,
              min: 1,
              payout: 4.2,
              discount: 0,
            },
            bottom2: {
              max: 5000000,
              min: 1,
              payout: 90,
              discount: 0,
            },
          },
          stockgerman: {
            row3: {
              max: 5000000,
              min: 1,
              payout: 150,
              discount: 0,
            },
            top1: {
              max: 5000000,
              min: 1,
              payout: 3.2,
              discount: 0,
            },
            top2: {
              max: 5000000,
              min: 1,
              payout: 90,
              discount: 0,
            },
            top3: {
              max: 5000000,
              min: 1,
              payout: 900,
              discount: 0,
            },
            bottom1: {
              max: 5000000,
              min: 1,
              payout: 4.2,
              discount: 0,
            },
            bottom2: {
              max: 5000000,
              min: 1,
              payout: 90,
              discount: 0,
            },
          },
          stocknikkei: {
            row3: {
              max: 5000000,
              min: 1,
              payout: 150,
              discount: 0,
            },
            top1: {
              max: 5000000,
              min: 1,
              payout: 3.2,
              discount: 0,
            },
            top2: {
              max: 5000000,
              min: 1,
              payout: 90,
              discount: 0,
            },
            top3: {
              max: 5000000,
              min: 1,
              payout: 900,
              discount: 0,
            },
            bottom1: {
              max: 5000000,
              min: 1,
              payout: 4.2,
              discount: 0,
            },
            bottom2: {
              max: 5000000,
              min: 1,
              payout: 90,
              discount: 0,
            },
          },
          stockrussia: {
            row3: {
              max: 5000000,
              min: 1,
              payout: 150,
              discount: 0,
            },
            top1: {
              max: 5000000,
              min: 1,
              payout: 3.2,
              discount: 0,
            },
            top2: {
              max: 5000000,
              min: 1,
              payout: 90,
              discount: 0,
            },
            top3: {
              max: 5000000,
              min: 1,
              payout: 900,
              discount: 0,
            },
            bottom1: {
              max: 5000000,
              min: 1,
              payout: 4.2,
              discount: 0,
            },
            bottom2: {
              max: 5000000,
              min: 1,
              payout: 90,
              discount: 0,
            },
          },
          stocktaiwan: {
            row3: {
              max: 5000000,
              min: 1,
              payout: 150,
              discount: 0,
            },
            top1: {
              max: 5000000,
              min: 1,
              payout: 3.2,
              discount: 0,
            },
            top2: {
              max: 5000000,
              min: 1,
              payout: 90,
              discount: 0,
            },
            top3: {
              max: 5000000,
              min: 1,
              payout: 900,
              discount: 0,
            },
            bottom1: {
              max: 5000000,
              min: 1,
              payout: 4.2,
              discount: 0,
            },
            bottom2: {
              max: 5000000,
              min: 1,
              payout: 90,
              discount: 0,
            },
          },
          yeekeelotto: {
            row3: {
              max: 5000000,
              min: 1,
              payout: 150,
              discount: 0,
            },
            top1: {
              max: 5000000,
              min: 1,
              payout: 3.2,
              discount: 0,
            },
            top2: {
              max: 5000000,
              min: 1,
              payout: 90,
              discount: 0,
            },
            top3: {
              max: 5000000,
              min: 1,
              payout: 900,
              discount: 0,
            },
            bottom1: {
              max: 5000000,
              min: 1,
              payout: 4.2,
              discount: 0,
            },
            bottom2: {
              max: 5000000,
              min: 1,
              payout: 90,
              discount: 0,
            },
          },
          zodiaclotto: {
            ball1: {
              max: 5000000,
              min: 0.01,
              payout: 7.5,
              discount: 0,
            },
            ball2: {
              max: 5000000,
              min: 0.01,
              payout: 3.75,
              discount: 0,
            },
            ball3: {
              max: 5000000,
              min: 0.01,
              payout: 2.5,
              discount: 0,
            },
            ball4: {
              max: 5000000,
              min: 0.01,
              payout: 1.9,
              discount: 0,
            },
            color: {
              max: 5000000,
              min: 0.01,
              payout: 2.5,
              discount: 0,
            },
          },
          hanoylottotv: {
            row3: {
              max: 5000000,
              min: 1,
              payout: 150,
              discount: 0,
            },
            row4: {
              max: 5000000,
              min: 1,
              payout: 150,
              discount: 0,
            },
            top1: {
              max: 5000000,
              min: 1,
              payout: 3.2,
              discount: 0,
            },
            top2: {
              max: 5000000,
              min: 1,
              payout: 90,
              discount: 0,
            },
            top3: {
              max: 5000000,
              min: 1,
              payout: 900,
              discount: 0,
            },
            top4: {
              max: 5000000,
              min: 1,
              payout: 150,
              discount: 0,
            },
            top5: {
              max: 5000000,
              min: 1,
              payout: 150,
              discount: 0,
            },
            bottom1: {
              max: 5000000,
              min: 1,
              payout: 4.2,
              discount: 0,
            },
            bottom2: {
              max: 5000000,
              min: 1,
              payout: 90,
              discount: 0,
            },
          },
          stockengland: {
            row3: {
              max: 5000000,
              min: 1,
              payout: 150,
              discount: 0,
            },
            top1: {
              max: 5000000,
              min: 1,
              payout: 3.2,
              discount: 0,
            },
            top2: {
              max: 5000000,
              min: 1,
              payout: 90,
              discount: 0,
            },
            top3: {
              max: 5000000,
              min: 1,
              payout: 900,
              discount: 0,
            },
            bottom1: {
              max: 5000000,
              min: 1,
              payout: 4.2,
              discount: 0,
            },
            bottom2: {
              max: 5000000,
              min: 1,
              payout: 90,
              discount: 0,
            },
          },
          hanoylottovip: {
            row3: {
              max: 5000000,
              min: 1,
              payout: 150,
              discount: 0,
            },
            row4: {
              max: 5000000,
              min: 1,
              payout: 225,
              discount: 0,
            },
            top1: {
              max: 5000000,
              min: 1,
              payout: 3.2,
              discount: 0,
            },
            top2: {
              max: 5000000,
              min: 1,
              payout: 90,
              discount: 0,
            },
            top3: {
              max: 5000000,
              min: 1,
              payout: 900,
              discount: 0,
            },
            top4: {
              max: 5000000,
              min: 1,
              payout: 5000,
              discount: 0,
            },
            top5: {
              max: 5000000,
              min: 1,
              payout: 25000,
              discount: 0,
            },
            bottom1: {
              max: 5000000,
              min: 1,
              payout: 4.2,
              discount: 0,
            },
            bottom2: {
              max: 5000000,
              min: 1,
              payout: 90,
              discount: 0,
            },
          },
          laoslotto_set: {
            row3: {
              max: 5000000,
              min: 1,
              payout: 25,
              discount: 0,
            },
            row4: {
              max: 5000000,
              min: 1,
              payout: 40,
              discount: 0,
            },
            top3: {
              max: 5000000,
              min: 1,
              payout: 350,
              discount: 0,
            },
            top4: {
              max: 5000000,
              min: 1,
              payout: 1000,
              discount: 0,
            },
            back2: {
              max: 5000000,
              min: 1,
              payout: 15,
              discount: 0,
            },
            front2: {
              max: 5000000,
              min: 1,
              payout: 15,
              discount: 0,
            },
          },
          pingponglotto: {
            row2: {
              max: 5000000,
              min: 1,
              payout: 12,
              discount: 0,
            },
            row3: {
              max: 5000000,
              min: 1,
              payout: 150,
              discount: 0,
            },
            row4: {
              max: 5000000,
              min: 1,
              payout: 225,
              discount: 0,
            },
            top1: {
              max: 5000000,
              min: 1,
              payout: 3.2,
              discount: 0,
            },
            top2: {
              max: 5000000,
              min: 1,
              payout: 90,
              discount: 0,
            },
            top3: {
              max: 5000000,
              min: 1,
              payout: 900,
              discount: 0,
            },
            top4: {
              max: 5000000,
              min: 1,
              payout: 5000,
              discount: 0,
            },
            top5: {
              max: 5000000,
              min: 1,
              payout: 25000,
              discount: 0,
            },
            top6: {
              max: 5000000,
              min: 1,
              payout: 50000,
              discount: 0,
            },
            bottom1: {
              max: 5000000,
              min: 1,
              payout: 4.2,
              discount: 0,
            },
            bottom2: {
              max: 5000000,
              min: 1,
              payout: 90,
              discount: 0,
            },
          },
          stockdowjones: {
            row3: {
              max: 5000000,
              min: 1,
              payout: 150,
              discount: 0,
            },
            top1: {
              max: 5000000,
              min: 1,
              payout: 3.2,
              discount: 0,
            },
            top2: {
              max: 5000000,
              min: 1,
              payout: 90,
              discount: 0,
            },
            top3: {
              max: 5000000,
              min: 1,
              payout: 900,
              discount: 0,
            },
            bottom1: {
              max: 5000000,
              min: 1,
              payout: 4.2,
              discount: 0,
            },
            bottom2: {
              max: 5000000,
              min: 1,
              payout: 90,
              discount: 0,
            },
          },
          stockhangseng: {
            row3: {
              max: 5000000,
              min: 1,
              payout: 150,
              discount: 0,
            },
            top1: {
              max: 5000000,
              min: 1,
              payout: 3.2,
              discount: 0,
            },
            top2: {
              max: 5000000,
              min: 1,
              payout: 90,
              discount: 0,
            },
            top3: {
              max: 5000000,
              min: 1,
              payout: 900,
              discount: 0,
            },
            bottom1: {
              max: 5000000,
              min: 1,
              payout: 4.2,
              discount: 0,
            },
            bottom2: {
              max: 5000000,
              min: 1,
              payout: 90,
              discount: 0,
            },
          },
          hanoylotto_set: {
            row3: {
              max: 5000000,
              min: 1,
              payout: 25,
              discount: 0,
            },
            row4: {
              max: 5000000,
              min: 1,
              payout: 40,
              discount: 0,
            },
            top3: {
              max: 5000000,
              min: 1,
              payout: 350,
              discount: 0,
            },
            top4: {
              max: 5000000,
              min: 1,
              payout: 1000,
              discount: 0,
            },
            back2: {
              max: 5000000,
              min: 1,
              payout: 15,
              discount: 0,
            },
            front2: {
              max: 5000000,
              min: 1,
              payout: 15,
              discount: 0,
            },
          },
          hanoylottostar: {
            row3: {
              max: 5000000,
              min: 1,
              payout: 150,
              discount: 0,
            },
            row4: {
              max: 5000000,
              min: 1,
              payout: 150,
              discount: 0,
            },
            top1: {
              max: 5000000,
              min: 1,
              payout: 3.2,
              discount: 0,
            },
            top2: {
              max: 5000000,
              min: 1,
              payout: 90,
              discount: 0,
            },
            top3: {
              max: 5000000,
              min: 1,
              payout: 900,
              discount: 0,
            },
            top4: {
              max: 5000000,
              min: 1,
              payout: 150,
              discount: 0,
            },
            top5: {
              max: 5000000,
              min: 1,
              payout: 150,
              discount: 0,
            },
            bottom1: {
              max: 5000000,
              min: 1,
              payout: 4.2,
              discount: 0,
            },
            bottom2: {
              max: 5000000,
              min: 1,
              payout: 90,
              discount: 0,
            },
          },
          laoslotto6_set: {
            row3: {
              max: 0.01,
              min: 0.01,
              payout: 0,
              discount: 0,
            },
            row4: {
              max: 0.01,
              min: 0.01,
              payout: 0,
              discount: 0,
            },
            top3: {
              max: 0.01,
              min: 0.01,
              payout: 0,
              discount: 0,
            },
            top4: {
              max: 0.01,
              min: 0.01,
              payout: 0,
              discount: 0,
            },
            top5: {
              max: 0.01,
              min: 0.01,
              payout: 0,
              discount: 0,
            },
            top6: {
              max: 0.01,
              min: 0.01,
              payout: 0,
              discount: 0,
            },
            back2: {
              max: 0.01,
              min: 0.01,
              payout: 0,
              discount: 0,
            },
            front2: {
              max: 0.01,
              min: 0.01,
              payout: 0,
              discount: 0,
            },
          },
          laoslottoextra: {
            row2: {
              max: 5000000,
              min: 1,
              payout: 12,
              discount: 0,
            },
            row3: {
              max: 5000000,
              min: 1,
              payout: 25,
              discount: 0,
            },
            row4: {
              max: 5000000,
              min: 1,
              payout: 40,
              discount: 0,
            },
            top1: {
              max: 5000000,
              min: 1,
              payout: 3.2,
              discount: 0,
            },
            top2: {
              max: 5000000,
              min: 1,
              payout: 90,
              discount: 0,
            },
            top3: {
              max: 5000000,
              min: 1,
              payout: 350,
              discount: 0,
            },
            top4: {
              max: 5000000,
              min: 1,
              payout: 1000,
              discount: 0,
            },
            top5: {
              max: 5000000,
              min: 1,
              payout: 25000,
              discount: 0,
            },
            bottom1: {
              max: 5000000,
              min: 1,
              payout: 4.2,
              discount: 0,
            },
            bottom2: {
              max: 5000000,
              min: 1,
              payout: 90,
              discount: 0,
            },
          },
          malaylotto_set: {
            row3: {
              max: 5000000,
              min: 1,
              payout: 25,
              discount: 0,
            },
            row4: {
              max: 5000000,
              min: 1,
              payout: 40,
              discount: 0,
            },
            top3: {
              max: 5000000,
              min: 1,
              payout: 350,
              discount: 0,
            },
            top4: {
              max: 5000000,
              min: 1,
              payout: 1000,
              discount: 0,
            },
            back2: {
              max: 5000000,
              min: 1,
              payout: 15,
              discount: 0,
            },
            front2: {
              max: 5000000,
              min: 1,
              payout: 15,
              discount: 0,
            },
          },
          pingponglotto2: {
            row2: {
              max: 5000000,
              min: 1,
              payout: 18.33,
              discount: 0,
            },
            top1: {
              max: 5000000,
              min: 1,
              payout: 3.66,
              discount: 0,
            },
            top2: {
              max: 5000000,
              min: 1,
              payout: 90,
              discount: 0,
            },
          },
          pingponglotto3: {
            row2: {
              max: 5000000,
              min: 1,
              payout: 12,
              discount: 0,
            },
            row3: {
              max: 5000000,
              min: 1,
              payout: 150,
              discount: 0,
            },
            top1: {
              max: 5000000,
              min: 1,
              payout: 3.2,
              discount: 0,
            },
            top2: {
              max: 5000000,
              min: 1,
              payout: 90,
              discount: 0,
            },
            top3: {
              max: 5000000,
              min: 1,
              payout: 900,
              discount: 0,
            },
          },
          pingponglotto6: {
            row2: {
              max: 5000000,
              min: 1,
              payout: 12,
              discount: 0,
            },
            row3: {
              max: 5000000,
              min: 1,
              payout: 150,
              discount: 0,
            },
            row4: {
              max: 5000000,
              min: 1,
              payout: 225,
              discount: 0,
            },
            top1: {
              max: 5000000,
              min: 1,
              payout: 3.2,
              discount: 0,
            },
            top2: {
              max: 5000000,
              min: 1,
              payout: 90,
              discount: 0,
            },
            top3: {
              max: 5000000,
              min: 1,
              payout: 900,
              discount: 0,
            },
            top4: {
              max: 5000000,
              min: 1,
              payout: 5000,
              discount: 0,
            },
            top5: {
              max: 5000000,
              min: 1,
              payout: 25000,
              discount: 0,
            },
            top6: {
              max: 5000000,
              min: 1,
              payout: 50000,
              discount: 0,
            },
            bottom1: {
              max: 5000000,
              min: 1,
              payout: 4.2,
              discount: 0,
            },
            bottom2: {
              max: 5000000,
              min: 1,
              payout: 90,
              discount: 0,
            },
          },
          stocksingapore: {
            row3: {
              max: 5000000,
              min: 1,
              payout: 150,
              discount: 0,
            },
            top1: {
              max: 5000000,
              min: 1,
              payout: 3.2,
              discount: 0,
            },
            top2: {
              max: 5000000,
              min: 1,
              payout: 90,
              discount: 0,
            },
            top3: {
              max: 5000000,
              min: 1,
              payout: 900,
              discount: 0,
            },
            bottom1: {
              max: 5000000,
              min: 1,
              payout: 4.2,
              discount: 0,
            },
            bottom2: {
              max: 5000000,
              min: 1,
              payout: 90,
              discount: 0,
            },
          },
          laoslottohd_set: {
            row3: {
              max: 5000000,
              min: 1,
              payout: 25,
              discount: 0,
            },
            row4: {
              max: 5000000,
              min: 1,
              payout: 40,
              discount: 0,
            },
            top3: {
              max: 5000000,
              min: 1,
              payout: 350,
              discount: 0,
            },
            top4: {
              max: 5000000,
              min: 1,
              payout: 1000,
              discount: 0,
            },
            back2: {
              max: 5000000,
              min: 1,
              payout: 15,
              discount: 0,
            },
            front2: {
              max: 5000000,
              min: 1,
              payout: 15,
              discount: 0,
            },
          },
          laoslottotv_set: {
            row3: {
              max: 5000000,
              min: 1,
              payout: 25,
              discount: 0,
            },
            row4: {
              max: 5000000,
              min: 1,
              payout: 40,
              discount: 0,
            },
            top3: {
              max: 5000000,
              min: 1,
              payout: 350,
              discount: 0,
            },
            top4: {
              max: 5000000,
              min: 1,
              payout: 1000,
              discount: 0,
            },
            back2: {
              max: 5000000,
              min: 1,
              payout: 15,
              discount: 0,
            },
            front2: {
              max: 5000000,
              min: 1,
              payout: 15,
              discount: 0,
            },
          },
          hanoylottotv_set: {
            row3: {
              max: 5000000,
              min: 1,
              payout: 25,
              discount: 0,
            },
            row4: {
              max: 5000000,
              min: 1,
              payout: 40,
              discount: 0,
            },
            top3: {
              max: 5000000,
              min: 1,
              payout: 350,
              discount: 0,
            },
            top4: {
              max: 5000000,
              min: 1,
              payout: 1000,
              discount: 0,
            },
            back2: {
              max: 5000000,
              min: 1,
              payout: 15,
              discount: 0,
            },
            front2: {
              max: 5000000,
              min: 1,
              payout: 15,
              discount: 0,
            },
          },
          stockdowjonesvip: {
            row3: {
              max: 5000000,
              min: 1,
              payout: 150,
              discount: 0,
            },
            top1: {
              max: 5000000,
              min: 1,
              payout: 3.2,
              discount: 0,
            },
            top2: {
              max: 5000000,
              min: 1,
              payout: 90,
              discount: 0,
            },
            top3: {
              max: 5000000,
              min: 1,
              payout: 900,
              discount: 0,
            },
            bottom1: {
              max: 5000000,
              min: 1,
              payout: 4.2,
              discount: 0,
            },
            bottom2: {
              max: 5000000,
              min: 1,
              payout: 90,
              discount: 0,
            },
          },
          hanoylottospecial: {
            row3: {
              max: 5000000,
              min: 1,
              payout: 150,
              discount: 0,
            },
            row4: {
              max: 5000000,
              min: 1,
              payout: 225,
              discount: 0,
            },
            top1: {
              max: 5000000,
              min: 1,
              payout: 3.2,
              discount: 0,
            },
            top2: {
              max: 5000000,
              min: 1,
              payout: 90,
              discount: 0,
            },
            top3: {
              max: 5000000,
              min: 1,
              payout: 900,
              discount: 0,
            },
            top4: {
              max: 5000000,
              min: 1,
              payout: 5000,
              discount: 0,
            },
            top5: {
              max: 5000000,
              min: 1,
              payout: 25000,
              discount: 0,
            },
            bottom1: {
              max: 5000000,
              min: 1,
              payout: 4.2,
              discount: 0,
            },
            bottom2: {
              max: 5000000,
              min: 1,
              payout: 90,
              discount: 0,
            },
          },
          hanoylottovip_set: {
            row3: {
              max: 5000000,
              min: 1,
              payout: 25,
              discount: 0,
            },
            row4: {
              max: 5000000,
              min: 1,
              payout: 40,
              discount: 0,
            },
            top3: {
              max: 5000000,
              min: 1,
              payout: 350,
              discount: 0,
            },
            top4: {
              max: 5000000,
              min: 1,
              payout: 1000,
              discount: 0,
            },
            back2: {
              max: 5000000,
              min: 1,
              payout: 15,
              discount: 0,
            },
            front2: {
              max: 5000000,
              min: 1,
              payout: 15,
              discount: 0,
            },
          },
          hanoylottostar_set: {
            row3: {
              max: 5000000,
              min: 1,
              payout: 25,
              discount: 0,
            },
            row4: {
              max: 5000000,
              min: 1,
              payout: 40,
              discount: 0,
            },
            top3: {
              max: 5000000,
              min: 1,
              payout: 350,
              discount: 0,
            },
            top4: {
              max: 5000000,
              min: 1,
              payout: 1000,
              discount: 0,
            },
            back2: {
              max: 5000000,
              min: 1,
              payout: 15,
              discount: 0,
            },
            front2: {
              max: 5000000,
              min: 1,
              payout: 15,
              discount: 0,
            },
          },
          laoslottoextra_set: {
            row3: {
              max: 5000000,
              min: 1,
              payout: 25,
              discount: 0,
            },
            row4: {
              max: 5000000,
              min: 1,
              payout: 40,
              discount: 0,
            },
            top3: {
              max: 5000000,
              min: 1,
              payout: 350,
              discount: 0,
            },
            top4: {
              max: 5000000,
              min: 1,
              payout: 1000,
              discount: 0,
            },
            back2: {
              max: 5000000,
              min: 1,
              payout: 15,
              discount: 0,
            },
            front2: {
              max: 5000000,
              min: 1,
              payout: 15,
              discount: 0,
            },
          },
          hanoylottospecial_set: {
            row3: {
              max: 5000000,
              min: 1,
              payout: 25,
              discount: 0,
            },
            row4: {
              max: 5000000,
              min: 1,
              payout: 40,
              discount: 0,
            },
            top3: {
              max: 5000000,
              min: 1,
              payout: 350,
              discount: 0,
            },
            top4: {
              max: 5000000,
              min: 1,
              payout: 1000,
              discount: 0,
            },
            back2: {
              max: 5000000,
              min: 1,
              payout: 15,
              discount: 0,
            },
            front2: {
              max: 5000000,
              min: 1,
              payout: 15,
              discount: 0,
            },
          },
        },
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
      }
    },
  },
  methods: {
    closeAndClear() {
      // รีเซ็ตค่าตัวแปรต่างๆ ใน component
      // this.jsonData = '';
      this.URLdata =
        "https://test-api.askmelotto.vip/apiRoute/member/Tranferwallet/loginRequest";
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
    get_Transfer() {
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
