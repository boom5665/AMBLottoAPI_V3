<!-- Please remove this file from your project -->
<template>
  <div>
    <div class="box-tran" style="display: flex">
      <div class="box-all">
        <div class="col-12" id="tab4">
          <div>
            <h1>
              <b
                style="color: #19a17a !important"
                set-lan="text:5.4 login request"
                >5.4
                <span style="padding-left: 3px" id="tran_login_request5"
                  >login request</span>
                </b>
            </h1>
          </div>
        </div>

        <div class="btn-toolbar mb-3" role="toolbar">
          <!-- <div class="divBox">
            <div class="col-12">
              <label class="txtHead">Method : </label>
              <label>Post</label>
            </div>
            <div class="col-12">
              <label class="txtHead"> Url : </label>
              <label>
                https://test-api.askmelotto.com/api/v2/apiRoute/member/Transferwallet/loginRequest
              </label>
            </div>
            <div class="col-12">
              <label class="txtHead"> headers : </label>
              <label> content-type application/json </label>
            </div>
          </div> -->
          <div class="form-group col-12 ex">
            <div>
              <b style="color: #19a17a !important" set-lan="text:Request Body"
                >Request Body</b
              >
            </div>
          </div>

          <div class="form-group col-12">
            <div class="table-wrapper">
              <table
                class="table table-borderless table-striped"
                id="DataTable1"
              >
                <thead class="rgba-green-slight">
                  <tr>
                    <th
                      style="width: 26%"
                      set-lan="html:Parameter"
                      class="thcolor txtCenter bRight"
                    >
                      Parameter
                    </th>
                    <th
                      style="width: 15%"
                      set-lan="html:Type"
                      class="thcolor txtCenter bRight"
                    >
                      Type
                    </th>

                    <th set-lan="html:Description" class="thcolor txtCenter">
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="bRight">agentUsername</td>
                    <td class="bRight">String</td>

                    <td>
                      Agent account , Account length is restricted to 36 chars
                      at most.
                    </td>
                  </tr>
                  <tr>
                    <td class="bRight">agentApiKey</td>
                    <td class="bRight">String</td>

                    <td>System generate key ID after create Agent</td>
                  </tr>
                  <tr>
                    <td class="bRight">playerUsername</td>
                    <td class="bRight">String</td>

                    <td>Player username from partner system.</td>
                  </tr>
                  <tr>
                    <td class="bRight">data</td>
                    <td class="bRight">Object</td>

                    <td>Object respone.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <!-- <div class="koh-tab-content col-12">
            <div class="koh-tab-content-body">
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
                    <button onclick="copyContent(document.getElementById('transfer_tabfive-four_req').innerHTML)" class="btn btn-info waves-effect waves-light">Copy to clipboard</button>
                  </div>
                </div>
                <div class="koh-faq-answer col-12">
                  <pre>
                                    <div class="copy-clipboard" style=" position: absolute;width: 20px;top: 10px;right: 0;cursor:pointer">
                                        <svg  style="position: absolute;width: 20px;left: -25px;" onclick="copyContent(document.getElementById('transfer_tabfive-four_req').innerHTML)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Copy to Clipboard</title><path d="M18 6v-6h-18v18h6v6h18v-18h-6zm-12 10h-4v-14h14v4h-10v10zm16 6h-14v-14h14v14z"></path></svg>
                                    </div>
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

                </div>
              </div>
            </div>
          </div> -->
          <div class="form-group col-12 ex">
            <div><b style="color: #19a17a !important">Response Body</b></div>
          </div>

          <div class="form-group col-12">
            <div class="table-wrapper">
              <table
                class="table table-borderless table-striped"
                id="DataTable2"
              >
                <thead class="rgba-green-slight">
                  <tr>
                    <th
                      style="width: 26%"
                      set-lan="html:Parameter"
                      class="thcolor bRight txtCenter"
                    >
                      Parameter
                    </th>
                    <th
                      style="width: 15%"
                      set-lan="html:Type"
                      class="thcolor bRight txtCenter"
                    >
                      Type
                    </th>
                    <th set-lan="html:Description" class="thcolor txtCenter">
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="bRight">code</td>
                    <td class="bRight">Number</td>
                    <td>Result Code Reference.</td>
                  </tr>
                  <tr>
                    <td class="bRight">msg</td>
                    <td class="bRight">Object</td>
                    <td>Information message.</td>
                  </tr>
                  <tr>
                    <td class="bRight">data</td>
                    <td class="bRight">Object</td>
                    <td>Object respone.</td>
                  </tr>
                  <tr>
                    <td class="bRight">playerApiId</td>
                    <td class="bRight">String</td>
                    <td>Player Id from partner system.</td>
                  </tr>
                  <tr>
                    <td class="bRight">playerApiUsername</td>
                    <td class="bRight">String</td>
                    <td>Player username from AMB Lotto system</td>
                  </tr>
                  <tr>
                    <td class="bRight">playerUsername</td>
                    <td class="bRight">String</td>
                    <td>Player username from partner system.</td>
                  </tr>
                  <tr>
                    <td class="bRight">tkUuid</td>
                    <td class="bRight">String</td>
                    <td>Token for send to home page.</td>
                  </tr>
                  <tr>
                    <td class="bRight">uriDesktop</td>
                    <td class="bRight">String</td>
                    <td>AMB Lotto link but don't show web header</td>
                  </tr>
                  <tr>
                    <td class="bRight">urlFullPage</td>
                    <td class="bRight">String</td>
                    <td>AMB Lotto link fullpage</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="form-group col-12 ex">
            <div><b style="color: #19a17a !important">Response Code</b></div>
          </div>

          <div class="form-group col-12">
            <div class="table-wrapper">
              <table class="table table-borderless table-striped">
                <thead class="rgba-green-slight">
                  <tr>
                    <th
                      style="width: 26%"
                      set-lan="html:Parameter"
                      class="thcolor bRight txtCenter"
                    >
                      Parameter
                    </th>
                    <th set-lan="html:Description" class="thcolor txtCenter">
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="bRight">0</td>
                    <td>success</td>
                  </tr>
                  <tr>
                    <td class="bRight">1003</td>
                    <td>invalid data type</td>
                  </tr>
                  <tr>
                    <td class="bRight">71010</td>
                    <td>invalid ApiKey or UserAgent.</td>
                  </tr>
                  <tr>
                    <td class="bRight">71011</td>
                    <td>missing field 'agentUsername'.</td>
                  </tr>
                  <tr>
                    <td class="bRight">71012</td>
                    <td>missing field 'playerUsername'.</td>
                  </tr>

                  <tr>
                    <td class="bRight">71013</td>
                    <td>missing field 'agentApiKey'.</td>
                  </tr>
                  <tr>
                    <td class="bRight">71014</td>
                    <td>
                      playerUsername must be between 4 and 36 characters long.
                    </td>
                  </tr>
                  <tr>
                    <td class="bRight">71015</td>
                    <td>
                      Username must not contain any special characters and can
                      only contain letters a-z and numbers 0-9.
                    </td>
                  </tr>

                  <tr>
                    <td class="bRight">71016</td>
                    <td>login fail.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="koh-tab-content col-12">
            <div class="koh-tab-content-body">
              <div class="koh-faq form-group"></div>
            </div>
          </div>

          <div class="form-group col-12 ex">
            <div>
              <b style="color: #cfa137 !important" set-lan="text:** Optional"
                >** Optional for direct/re-direct link.</b
              >
            </div>
          </div>
          <div class="form-group col-12">
            <label set-lan="html:You can add"
              >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              คุณสามารถเพิ่มค่าพารามิเตอร์ต่อท้ายในลิงค์ (&lottotype=)
              เพื่อเปลี่ยนเส้นทางให้ผู้เล่นไปยังหน้าแทง AMB Lotto
              ประเภทนั้นๆ</label
            >
          </div>
          <!-- <div class="col-8">
                <a href="../img/zip/game_icons.rar" style="float: right;" class="Point" download=""><i class="fa fa-download" aria-hidden="true"></i>
                    <label class="Point">&nbsp;Download Icon</label></a>
            </div>
            <div class="form-group col-3"></div> -->
          <div class="form-group col-2"></div>
          <div class="form-group col-6">
            <div class="table-wrapper">
              <table class="table table-borderless table-striped">
                <thead class="rgba-green-slight">
                  <tr>
                    <th class="thcolor bRight txtCenter" style="width: 200px">
                      Name
                    </th>
                    <th class="thcolor bRight txtCenter" style="width: 210px">
                      Value of parameter
                    </th>
                    <!-- <th class="txtCenter" style="width: 210px;">Image icon</th> -->
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="bRight txtMid">หวยไทย</td>
                    <td class="bRight txtCenter txtMid">thailotto</td>
                    <!-- <td class="bRight txtCenter bBottom" style="background-color: gray;">
                                    <img src="/img/game_icon/baccarat.png" class="IconSize"></td> -->
                  </tr>
                  <tr>
                    <td class="bRight txtMid">หวยลาว(แทงแบบไทย)</td>
                    <td class="bRight txtCenter txtMid">laoslotto</td>
                  </tr>
                  <tr>
                    <td class="bRight txtMid">หวยฮานอย</td>
                    <td class="bRight txtCenter txtMid">hanoylotto</td>
                  </tr>
                  <tr>
                    <td class="bRight txtMid">หวยฮานอย(วีไอพี)</td>
                    <td class="bRight txtCenter txtMid">hanoylottovip</td>
                  </tr>
                  <tr>
                    <td class="bRight txtMid">หวย ธกส.</td>
                    <td class="bRight txtCenter txtMid">baaclotto</td>
                  </tr>
                  <tr>
                    <td class="bRight txtMid">หวย ออมสิน</td>
                    <td class="bRight txtCenter txtMid">gsblotto</td>
                  </tr>
                  <tr>
                    <td class="bRight txtMid">หวยปิงปอง</td>
                    <td class="bRight txtCenter txtMid">pingponglotto</td>
                  </tr>
                  <tr>
                    <td class="bRight txtMid">หวยลาว(แบบชุด)</td>
                    <td class="bRight txtCenter txtMid">laoslotto_set</td>
                  </tr>
                  <tr>
                    <td class="bRight txtMid">หวยยี่กี</td>
                    <td class="bRight txtCenter txtMid">yeekeelotto</td>
                  </tr>
                  <tr>
                    <td class="bRight txtMid">หวยมาเลย์</td>
                    <td class="bRight txtCenter txtMid">malaylotto</td>
                  </tr>
                  <tr>
                    <td class="bRight txtMid">หวยฮานอย(แบบชุด)</td>
                    <td class="bRight txtCenter txtMid">hanoylotto_set</td>
                  </tr>
                  <tr>
                    <td class="bRight txtMid">หวยฮานอยวีไอพี(แบบชุด)</td>
                    <td class="bRight txtCenter txtMid">hanoylottovip_set</td>
                  </tr>
                  <tr>
                    <td class="bRight txtMid">หวยฮานอยพิเศษ(แบบชุด)</td>
                    <td class="bRight txtCenter txtMid">
                      hanoylottospecial_set
                    </td>
                  </tr>
                  <tr>
                    <td class="bRight txtMid">หวยมาเลย์(แบบชุด)</td>
                    <td class="bRight txtCenter txtMid">malaylotto_set</td>
                  </tr>
                  <tr>
                    <td class="bRight txtMid">หวยฮานอย(พิเศษ)</td>
                    <td class="bRight txtCenter txtMid">hanoylottospecial</td>
                  </tr>
                  <tr>
                    <td class="bRight txtMid">หวยหุ้นเกาหลี</td>
                    <td class="bRight txtCenter txtMid">stockkorea</td>
                  </tr>
                  <tr>
                    <td class="bRight txtMid">หวยหุ้นจีน</td>
                    <td class="bRight txtCenter txtMid">stockchina</td>
                  </tr>
                  <tr>
                    <td class="bRight txtMid">หวยหุ้นดาวโจนส์</td>
                    <td class="bRight txtCenter txtMid">stockdowjones</td>
                  </tr>
                  <tr>
                    <td class="bRight txtMid">หวยหุ้นไต้หวัน</td>
                    <td class="bRight txtCenter txtMid">stocktaiwan</td>
                  </tr>
                  <tr>
                    <td class="bRight txtMid">หวยหุ้นอังกฤษ</td>
                    <td class="bRight txtCenter txtMid">stockengland</td>
                  </tr>
                  <tr>
                    <td class="bRight txtMid">หวยหุ้นอินเดีย</td>
                    <td class="bRight txtCenter txtMid">stockindia</td>
                  </tr>
                  <tr>
                    <td class="bRight txtMid">หวยหุ้นฮั่งเส็ง</td>
                    <td class="bRight txtCenter txtMid">stockhangseng</td>
                  </tr>
                  <tr>
                    <td class="bRight txtMid">หวยหุ้นอียิปต์</td>
                    <td class="bRight txtCenter txtMid">stockegypt</td>
                  </tr>
                  <tr>
                    <td class="bRight txtMid">หวยหุ้นนิเคอิ</td>
                    <td class="bRight txtCenter txtMid">stocknikkei</td>
                  </tr>
                  <tr>
                    <td class="bRight txtMid">หวยหุ้นสิงค์โปร</td>
                    <td class="bRight txtCenter txtMid">stocksingapore</td>
                  </tr>
                  <tr>
                    <td class="bRight txtMid">หวยหุ้นไทย</td>
                    <td class="bRight txtCenter txtMid">stockthai</td>
                  </tr>
                  <tr>
                    <td class="bRight txtMid">หวยหุ้นเยอรมัน</td>
                    <td class="bRight txtCenter txtMid">stockgerman</td>
                  </tr>
                  <tr>
                    <td class="bRight txtMid">หวยหุ้นรัสเซีย</td>
                    <td class="bRight txtCenter txtMid">stockrussia</td>
                  </tr>
                  <tr>
                    <td class="bRight txtMid">หวยยี่กีนักษัตร</td>
                    <td class="bRight txtCenter txtMid">zodiaclotto</td>
                  </tr>
                  <tr>
                    <td class="bRight txtMid">หวยปิงปองออนไลน์ 2 ตัว</td>
                    <td class="bRight txtCenter txtMid">pingponglotto2</td>
                  </tr>
                  <tr>
                    <td class="bRight txtMid">หวยปิงปองออนไลน์ 3 ตัว</td>
                    <td class="bRight txtCenter txtMid">pingponglotto3</td>
                  </tr>
                  <tr>
                    <td class="bRight txtMid">หวยปิงปองออนไลน์ 6 ตัว</td>
                    <td class="bRight txtCenter txtMid">pingponglotto6</td>
                  </tr>
                  <tr>
                    <td class="bRight txtMid">หวยฮานอย รอบ 12.30 (แบบชุด)</td>
                    <td class="bRight txtCenter txtMid">hanoylottostar_set</td>
                  </tr>
                  <tr>
                    <td class="bRight txtMid">หวยฮานอย รอบ 14.30</td>
                    <td class="bRight txtCenter txtMid">hanoylottotv</td>
                  </tr>
                  <tr>
                    <td class="bRight txtMid">หวยฮานอย รอบ 14.30 (แบบชุด)</td>
                    <td class="bRight txtCenter txtMid">hanoylottotv_set</td>
                  </tr>
                  <tr>
                    <td class="bRight txtMid">หวยลาว รอบ 08.30</td>
                    <td class="bRight txtCenter txtMid">laoslottoextra</td>
                  </tr>
                  <tr>
                    <td class="bRight txtMid">หวยลาว รอบ 08.30 (แบบชุด)</td>
                    <td class="bRight txtCenter txtMid">laoslottoextra_set</td>
                  </tr>
                  <tr>
                    <td class="bRight txtMid">หวยลาว รอบ 13.45</td>
                    <td class="bRight txtCenter txtMid">laoslottohd</td>
                  </tr>
                  <tr>
                    <td class="bRight txtMid">หวยลาว รอบ 13.45 (แบบชุด)</td>
                    <td class="bRight txtCenter txtMid">laoslottohd_set</td>
                  </tr>
                  <tr>
                    <td class="bRight txtMid">หวยลาว รอบ 10.30</td>
                    <td class="bRight txtCenter txtMid">laoslottotv</td>
                  </tr>
                  <tr>
                    <td class="bRight txtMid">หวยลาว รอบ 10.30 (แบบชุด)</td>
                    <td class="bRight txtCenter txtMid">laoslottotv_set</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="btn-toolbar mb-3" role="toolbar">
          <div class="form-group col-12 ex">
            <div>
              <b style="color: #cfa137 !important">AMB Lotto direct link</b>
            </div>
          </div>
        </div>
        <div class="btn-toolbar mb-3" role="toolbar">
          <div class="divBox" style="font-size: 0.8rem">
            <!-- <div class="col-12">
                            <label class="txtHead">Baccarat :</label><label>http://m.hippo168.com/?tkuuid=5ebd1f57dc7cdc7900125a65&amp;</label><label class="txtHead">game=BAC</label>
                        </div> -->
            <div class="col-12">
              <label class="txtHead">thailotto :</label>
              <label
                >https://dev-askmelotto.pirate168.com/token?token=12cfc90e9569faf6e70c6d001b12f9e1c392f631&amp;header=off&amp;</label
              >
              <label class="txtHead">lottotype=zodiaclotto</label>
            </div>

            <div class="col-12">
              <label class="txtHead"> laoslotto : </label>
              <label
                >https://dev-askmelotto.pirate168.com/token?token=12cfc90e9569faf6e70c6d001b12f9e1c392f631&amp;header=off&amp;</label
              >
              <label class="txtHead">lottotype=laoslotto</label>
            </div>
            <div class="col-12">
              <label class="txtHead"> hanoylotto : </label>
              <label
                >https://dev-askmelotto.pirate168.com/token?token=12cfc90e9569faf6e70c6d001b12f9e1c392f631&amp;header=off&amp;</label
              >
              <label class="txtHead">lottotype=hanoylotto</label>
            </div>
            <div class="col-12">
              <label class="txtHead"> hanoylottovip : </label>
              <label
                >https://dev-askmelotto.pirate168.com/token?token=12cfc90e9569faf6e70c6d001b12f9e1c392f631&amp;header=off&amp;</label
              >
              <label class="txtHead">lottotype=hanoylottovip</label>
            </div>
            <div class="col-12">
              <label class="txtHead"> baaclotto : </label>
              <label
                >https://dev-askmelotto.pirate168.com/token?token=12cfc90e9569faf6e70c6d001b12f9e1c392f631&amp;header=off&amp;</label
              >
              <label class="txtHead">lottotype=baaclotto</label>
            </div>
            <div class="col-12">
              <label class="txtHead"> gsblotto : </label>
              <label
                >https://dev-askmelotto.pirate168.com/token?token=12cfc90e9569faf6e70c6d001b12f9e1c392f631&amp;header=off&amp;</label
              >
              <label class="txtHead">lottotype=gsblotto</label>
            </div>
            <div class="col-12">
              <label class="txtHead"> pingponglotto :</label>
              <label
                >https://dev-askmelotto.pirate168.com/token?token=12cfc90e9569faf6e70c6d001b12f9e1c392f631&amp;header=off&amp;</label
              >
              <label class="txtHead">lottotype=pingponglotto</label>
            </div>
            <div class="col-12">
              <label class="txtHead"> laoslotto_set :</label>
              <label
                >https://dev-askmelotto.pirate168.com/token?token=12cfc90e9569faf6e70c6d001b12f9e1c392f631&amp;header=off&amp;</label
              >
              <label class="txtHead">lottotype=laoslotto_set</label>
            </div>
            <div class="col-12">
              <label class="txtHead"> yeekeelotto :</label>
              <label
                >https://dev-askmelotto.pirate168.com/token?token=12cfc90e9569faf6e70c6d001b12f9e1c392f631&amp;header=off&amp;</label
              >
              <label class="txtHead">lottotype=yeekeelotto</label>
            </div>
            <div class="col-12">
              <label class="txtHead"> malaylotto :</label
              ><label
                >https://dev-askmelotto.pirate168.com/token?token=12cfc90e9569faf6e70c6d001b12f9e1c392f631&amp;header=off&amp;</label
              >
              <label class="txtHead">lottotype=malaylotto</label>
            </div>
            <div class="col-12">
              <label class="txtHead"> hanoylotto_set :</label>
              <label
                >https://dev-askmelotto.pirate168.com/token?token=12cfc90e9569faf6e70c6d001b12f9e1c392f631&amp;header=off&amp;</label
              >
              <label class="txtHead">lottotype=hanoylotto_set</label>
            </div>
            <div class="col-12">
              <label class="txtHead"> hanoylotto_set :</label>
              <label
                >https://dev-askmelotto.pirate168.com/token?token=12cfc90e9569faf6e70c6d001b12f9e1c392f631&amp;header=off&amp;</label
              >
              <label class="txtHead">lottotype=hanoylottovip_set</label>
            </div>
            <div class="col-12">
              <label class="txtHead"> hanoylottospecial_set :</label>
              <label
                >https://dev-askmelotto.pirate168.com/token?token=12cfc90e9569faf6e70c6d001b12f9e1c392f631&amp;header=off&amp;</label
              >
              <label class="txtHead">lottotype=hanoylottospecial_set</label>
            </div>
            <div class="col-12">
              <label class="txtHead"> malaylotto_set :</label>
              <label
                >https://dev-askmelotto.pirate168.com/token?token=12cfc90e9569faf6e70c6d001b12f9e1c392f631&amp;header=off&amp;</label
              >
              <label class="txtHead">lottotype=malaylotto_set</label>
            </div>
            <div class="col-12">
              <label class="txtHead"> hanoylottospecial :</label>
              <label
                >https://dev-askmelotto.pirate168.com/token?token=12cfc90e9569faf6e70c6d001b12f9e1c392f631&amp;header=off&amp;</label
              >
              <label class="txtHead">lottotype=hanoylottospecial</label>
            </div>
            <div class="col-12">
              <label class="txtHead"> stockkorea :</label>
              <label
                >https://dev-askmelotto.pirate168.com/token?token=12cfc90e9569faf6e70c6d001b12f9e1c392f631&amp;header=off&amp;</label
              >
              <label class="txtHead">lottotype=stockkorea</label>
            </div>
            <div class="col-12">
              <label class="txtHead"> stockchina :</label>
              <label
                >https://dev-askmelotto.pirate168.com/token?token=12cfc90e9569faf6e70c6d001b12f9e1c392f631&amp;header=off&amp;</label
              >
              <label class="txtHead">lottotype=stockchina</label>
            </div>
            <div class="col-12">
              <label class="txtHead"> stockdowjones :</label>
              <label
                >https://dev-askmelotto.pirate168.com/token?token=12cfc90e9569faf6e70c6d001b12f9e1c392f631&amp;header=off&amp;</label
              >
              <label class="txtHead">lottotype=stockdowjones</label>
            </div>
            <div class="col-12">
              <label class="txtHead"> stocktaiwan : </label>
              <label
                >https://dev-askmelotto.pirate168.com/token?token=12cfc90e9569faf6e70c6d001b12f9e1c392f631&amp;header=off&amp;</label
              >
              <label class="txtHead">lottotype=stocktaiwan</label>
            </div>
            <div class="col-12">
              <label class="txtHead"> stockengland :</label>
              <label
                >https://dev-askmelotto.pirate168.com/token?token=12cfc90e9569faf6e70c6d001b12f9e1c392f631&amp;header=off&amp;</label
              >
              <label class="txtHead">lottotype=stockengland</label>
            </div>
            <div class="col-12">
              <label class="txtHead"> stockindia :</label>
              <label
                >https://dev-askmelotto.pirate168.com/token?token=12cfc90e9569faf6e70c6d001b12f9e1c392f631&amp;header=off&amp;</label
              >
              <label class="txtHead">lottotype=stockindia</label>
            </div>
            <div class="col-12">
              <label class="txtHead"> stockhangseng :</label>
              <label
                >https://dev-askmelotto.pirate168.com/token?token=12cfc90e9569faf6e70c6d001b12f9e1c392f631&amp;header=off&amp;</label
              >
              <label class="txtHead">lottotype=stockhangseng</label>
            </div>
            <div class="col-12">
              <label class="txtHead"> stockegypt : </label>
              <label
                >https://dev-askmelotto.pirate168.com/token?token=12cfc90e9569faf6e70c6d001b12f9e1c392f631&amp;header=off&amp;</label
              >
              <label class="txtHead">lottotype=stockegypt</label>
            </div>
            <div class="col-12">
              <label class="txtHead"> stocknikkei : </label>
              <label
                >https://dev-askmelotto.pirate168.com/token?token=12cfc90e9569faf6e70c6d001b12f9e1c392f631&amp;header=off&amp;</label
              >
              <label class="txtHead">lottotype=stocknikkei</label>
            </div>
            <div class="col-12">
              <label class="txtHead"> stocksingapore :</label>
              <label
                >https://dev-askmelotto.pirate168.com/token?token=12cfc90e9569faf6e70c6d001b12f9e1c392f631&amp;header=off&amp;</label
              >
              <label class="txtHead">lottotype=stocksingapore</label>
            </div>
            <div class="col-12">
              <label class="txtHead"> stockthai :</label>
              <label
                >https://dev-askmelotto.pirate168.com/token?token=12cfc90e9569faf6e70c6d001b12f9e1c392f631&amp;header=off&amp;</label
              >
              <label class="txtHead">&lottotype=stockthai</label>
            </div>
            <div class="col-12">
              <label class="txtHead"> stockgerman :</label>
              <label
                >https://dev-askmelotto.pirate168.com/token?token=12cfc90e9569faf6e70c6d001b12f9e1c392f631&amp;header=off&amp;</label
              >
              <label class="txtHead">lottotype=stockgerman</label>
            </div>
            <div class="col-12">
              <label class="txtHead">stockrussia : </label>
              <label
                >https://dev-askmelotto.pirate168.com/token?token=12cfc90e9569faf6e70c6d001b12f9e1c392f631&amp;header=off&amp;</label
              >
              <label class="txtHead">lottotype=stockrussia</label>
            </div>
            <div class="col-12">
              <label class="txtHead">stockrussia : </label>
              <label
                >https://dev-askmelotto.pirate168.com/token?token=12cfc90e9569faf6e70c6d001b12f9e1c392f631&amp;header=off&amp;</label
              >
              <label class="txtHead">lottotype=stockrussia</label>
            </div>
            <div class="col-12">
              <label class="txtHead">zodiaclotto :</label>
              <label
                >https://dev-askmelotto.pirate168.com/token?token=12cfc90e9569faf6e70c6d001b12f9e1c392f631&amp;header=off&amp;</label
              >
              <label class="txtHead">lottotype=zodiaclotto</label>
            </div>

            <div class="col-12">
              <label class="txtHead">pingponglotto2 :</label>
              <label
                >https://dev-askmelotto.pirate168.com/token?token=12cfc90e9569faf6e70c6d001b12f9e1c392f631&amp;header=off&amp;</label
              >
              <label class="txtHead">lottotype=pingponglotto2</label>
            </div>
            <div class="col-12">
              <label class="txtHead">pingponglotto2 :</label>
              <label
                >https://dev-askmelotto.pirate168.com/token?token=12cfc90e9569faf6e70c6d001b12f9e1c392f631&amp;header=off&amp;</label
              >
              <label class="txtHead">lottotype=pingponglotto2</label>
            </div>
            <div class="col-12">
              <label class="txtHead">pingponglotto3 :</label>
              <label
                >https://dev-askmelotto.pirate168.com/token?token=12cfc90e9569faf6e70c6d001b12f9e1c392f631&amp;header=off&amp;</label
              >
              <label class="txtHead">lottotype=pingponglotto3</label>
            </div>
            <div class="col-12">
              <label class="txtHead">pingponglotto6 :</label>
              <label
                >https://dev-askmelotto.pirate168.com/token?token=12cfc90e9569faf6e70c6d001b12f9e1c392f631&amp;header=off&amp;</label
              >
              <label class="txtHead">lottotype=pingponglotto6</label>
            </div>
            <div class="col-12">
              <label class="txtHead">hanoylottostar_set :</label>
              <label
                >https://dev-askmelotto.pirate168.com/token?token=12cfc90e9569faf6e70c6d001b12f9e1c392f631&amp;header=off&amp;</label
              >
              <label class="txtHead">lottotype=hanoylottostar_set</label>
            </div>
            <div class="col-12">
              <label class="txtHead">hanoylottostar :</label>
              <label
                >https://dev-askmelotto.pirate168.com/token?token=12cfc90e9569faf6e70c6d001b12f9e1c392f631&amp;header=off&amp;</label
              >
              <label class="txtHead">lottotype=hanoylottostar</label>
            </div>
            <div class="col-12">
              <label class="txtHead">hanoylottotv :</label>
              <label
                >https://dev-askmelotto.pirate168.com/token?token=12cfc90e9569faf6e70c6d001b12f9e1c392f631&amp;header=off&amp;</label
              >
              <label class="txtHead">lottotype=hanoylottotv</label>
            </div>
            <div class="col-12">
              <label class="txtHead">hanoylottotv_set :</label>
              <label
                >https://dev-askmelotto.pirate168.com/token?token=12cfc90e9569faf6e70c6d001b12f9e1c392f631&amp;header=off&amp;</label
              >
              <label class="txtHead">lottotype=hanoylottotv_set</label>
            </div>
            <div class="col-12">
              <label class="txtHead">laoslottoextra :</label>
              <label
                >https://dev-askmelotto.pirate168.com/token?token=12cfc90e9569faf6e70c6d001b12f9e1c392f631&amp;header=off&amp;</label
              >
              <label class="txtHead">lottotype=laoslottoextra</label>
            </div>
            <div class="col-12">
              <label class="txtHead">laoslottoextra_set :</label>
              <label
                >https://dev-askmelotto.pirate168.com/token?token=12cfc90e9569faf6e70c6d001b12f9e1c392f631&amp;header=off&amp;</label
              >
              <label class="txtHead">lottotype=laoslottoextra_set</label>
            </div>
            <div class="col-12">
              <label class="txtHead">laoslottohd :</label>
              <label
                >https://dev-askmelotto.pirate168.com/token?token=12cfc90e9569faf6e70c6d001b12f9e1c392f631&amp;header=off&amp;</label
              >
              <label class="txtHead">lottotype=laoslottohd</label>
            </div>
            <div class="col-12">
              <label class="txtHead">laoslottohd_set :</label>
              <label
                >https://dev-askmelotto.pirate168.com/token?token=12cfc90e9569faf6e70c6d001b12f9e1c392f631&amp;header=off&amp;</label
              >
              <label class="txtHead">lottotype=laoslottohd_set</label>
            </div>
            <div class="col-12">
              <label class="txtHead">laoslottotv :</label>
              <label
                >https://dev-askmelotto.pirate168.com/token?token=12cfc90e9569faf6e70c6d001b12f9e1c392f631&amp;header=off&amp;</label
              >
              <label class="txtHead">lottotype=laoslottotv</label>
            </div>
            <div class="col-12">
              <label class="txtHead">laoslottotv_set :</label>
              <label
                >https://dev-askmelotto.pirate168.com/token?token=12cfc90e9569faf6e70c6d001b12f9e1c392f631&amp;header=off&amp;</label
              >
              <label class="txtHead">lottotype=laoslottotv_set</label>
            </div>
          </div>
        </div>

        <div class="btn-toolbar mb-3" role="toolbar">
          <div class="form-group col-12 ex">
            <div><b style="color: #cfa137 !important">Language</b></div>
          </div>
          <div class="form-group col-12">
            <label
              >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;หมายเหตุ
              : กรุณาใช้รหัสตรงตามตัวอย่าง</label
            >
          </div>
        </div>
        <div class="btn-toolbar mb-3" role="toolbar">
          <div class="form-group col-2"></div>
          <div class="form-group col-6">
            <div class="table-wrapper">
              <table class="table table-borderless table-striped">
                <thead class="rgba-green-slight">
                  <tr>
                    <th class="thcolor bRight txtCenter" style="width: 200px">
                      Language
                    </th>
                    <th class="thcolor txtCenter" style="width: 210px">
                      Value of parameter
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="bRight txtMid">English</td>
                    <td class="txtCenter txtMid">EN</td>
                  </tr>
                  <tr>
                    <td class="bRight txtMid">Thai</td>
                    <td class="txtCenter txtMid">TH</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="btn-toolbar mb-3" role="toolbar">
          <div class="divBox" style="font-size: 0.87rem">
            <div class="col-12">
              <label class="txtHead">English :</label
              ><label
                >https://dev-askmelotto.pirate168.com/token?token=12cfc90e9569faf6e70c6d001b12f9e1c392f631&amp;header=off&amp;lottotype=thailotto&amp;</label
              ><label class="txtHead">lang=en</label>
            </div>

            <div class="col-12">
              <label class="txtHead">Thai : </label
              ><label
                >https://dev-askmelotto.pirate168.com/token?token=12cfc90e9569faf6e70c6d001b12f9e1c392f631&amp;header=off&amp;lottotype=laoslotto&amp;</label
              ><label class="txtHead">lang=th</label>
            </div>
          </div>
        </div>

        <div class="btn-toolbar mb-3" role="toolbar">
          <div class="form-group col-12 ex">
            <div>
              <b style="color: #cfa137 !important"
                >Signout re-direct optional link:</b
              >
            </div>
          </div>
        </div>
        <div class="btn-toolbar mb-3" role="toolbar">
          <div class="divBox" style="font-size: 0.681rem; margin-bottom: 15px">
            <div class="col-12">
              <label class="txtHead">thailotto : </label
              ><label
                >https://dev-askmelotto.pirate168.com/token?token=12cfc90e9569faf6e70c6d001b12f9e1c392f631&amp;header=off&amp;lottotype=thailotto&amp;url=</label
              ><label class="txtHead"
                >input your link here(full link with https://)</label
              >
            </div>
            <div class="col-12">
              <label class="txtHead">laoslotto : </label
              ><label
                >https://dev-askmelotto.pirate168.com/token?token=12cfc90e9569faf6e70c6d001b12f9e1c392f631&amp;header=off&amp;lottotype=laoslotto&amp;url=</label
              ><label class="txtHead"
                >input your link here(full link with https://)</label
              >
            </div>
            <div class="col-12">
              <label class="txtHead">hanoylotto : </label
              ><label
                >https://dev-askmelotto.pirate168.com/token?token=12cfc90e9569faf6e70c6d001b12f9e1c392f631&amp;header=off&amp;lottotype=hanoylotto&amp;url=</label
              ><label class="txtHead"
                >input your link here(full link with https://)</label
              >
            </div>
            <div class="col-12">
              <label class="txtHead">hanoylottovip : </label
              ><label
                >https://dev-askmelotto.pirate168.com/token?token=12cfc90e9569faf6e70c6d001b12f9e1c392f631&amp;header=off&amp;lottotype=hanoylottovip&amp;url=</label
              ><label class="txtHead"
                >input your link here(full link with https://)</label
              >
            </div>
            <div class="col-12">
              <label class="txtHead">baaclotto : </label
              ><label
                >https://dev-askmelotto.pirate168.com/token?token=12cfc90e9569faf6e70c6d001b12f9e1c392f631&amp;header=off&amp;lottotype=baaclotto&amp;url=</label
              ><label class="txtHead"
                >input your link here(full link with https://)</label
              >
            </div>
            <div class="col-12">
              <label class="txtHead"> gsblotto : </label
              ><label
                >https://dev-askmelotto.pirate168.com/token?token=12cfc90e9569faf6e70c6d001b12f9e1c392f631&amp;header=off&amp;lottotype=gsblotto&amp;url=</label
              ><label class="txtHead"
                >input your link here(full link with https://)</label
              >
            </div>
            <div class="col-12">
              <label class="txtHead">pingponglotto :</label
              ><label
                >https://dev-askmelotto.pirate168.com/token?token=12cfc90e9569faf6e70c6d001b12f9e1c392f631&amp;header=off&amp;lottotype=pingponglotto&amp;url=</label
              ><label class="txtHead"
                >input your link here(full link with https://)</label
              >
            </div>
            <div class="col-12">
              <label class="txtHead">laoslotto_set : </label
              ><label
                >https://dev-askmelotto.pirate168.com/token?token=12cfc90e9569faf6e70c6d001b12f9e1c392f631&amp;header=off&amp;lottotype=laoslotto_set&amp;url=</label
              ><label class="txtHead"
                >input your link here(full link with https://)</label
              >
            </div>
            <div class="col-12">
              <label class="txtHead">yeekeelotto : </label
              ><label
                >https://dev-askmelotto.pirate168.com/token?token=12cfc90e9569faf6e70c6d001b12f9e1c392f631&amp;header=off&amp;lottotype=yeekeelotto&amp;url=</label
              ><label class="txtHead"
                >input your link here(full link with https://)</label
              >
            </div>
            <div class="col-12">
              <label class="txtHead">malaylotto :</label
              ><label
                >https://dev-askmelotto.pirate168.com/token?token=12cfc90e9569faf6e70c6d001b12f9e1c392f631&amp;header=off&amp;lottotype=malaylotto&amp;url=</label
              ><label class="txtHead"
                >input your link here(full link with https://)</label
              >
            </div>
            <div class="col-12">
              <label class="txtHead">hanoylotto_set :</label
              ><label
                >https://dev-askmelotto.pirate168.com/token?token=12cfc90e9569faf6e70c6d001b12f9e1c392f631&amp;header=off&amp;lottotype=hanoylotto_set&amp;url=</label
              ><label class="txtHead"
                >input your link here(full link with https://)</label
              >
            </div>
            <div class="col-12">
              <label class="txtHead">hanoylottovip_set :</label
              ><label
                >https://dev-askmelotto.pirate168.com/token?token=12cfc90e9569faf6e70c6d001b12f9e1c392f631&amp;header=off&amp;lottotype=hanoylottovip_set&amp;url=</label
              ><label class="txtHead"
                >input your link here(full link with https://)</label
              >
            </div>
            <div class="col-12">
              <label class="txtHead">hanoylottospecial_set :</label
              ><label
                >https://dev-askmelotto.pirate168.com/token?token=12cfc90e9569faf6e70c6d001b12f9e1c392f631&amp;header=off&amp;lottotype=hanoylottospecial_set&amp;url=</label
              ><label class="txtHead"
                >input your link here(full link with https://)</label
              >
            </div>
            <div class="col-12">
              <label class="txtHead">malaylotto_set :</label
              ><label
                >https://dev-askmelotto.pirate168.com/token?token=12cfc90e9569faf6e70c6d001b12f9e1c392f631&amp;header=off&amp;lottotype=malaylotto_set&amp;url=</label
              ><label class="txtHead"
                >input your link here(full link with https://)</label
              >
            </div>
            <div class="col-12">
              <label class="txtHead">hanoylottospecial :</label
              ><label
                >https://dev-askmelotto.pirate168.com/token?token=12cfc90e9569faf6e70c6d001b12f9e1c392f631&amp;header=off&amp;lottotype=hanoylottospecial&amp;url=</label
              ><label class="txtHead"
                >input your link here(full link with https://)</label
              >
            </div>
            <div class="col-12">
              <label class="txtHead">stockkorea : </label
              ><label
                >https://dev-askmelotto.pirate168.com/token?token=12cfc90e9569faf6e70c6d001b12f9e1c392f631&amp;header=off&amp;lottotype=stockkorea&amp;url=</label
              ><label class="txtHead"
                >input your link here(full link with https://)</label
              >
            </div>
            <div class="col-12">
              <label class="txtHead">stockchina :</label
              ><label
                >https://dev-askmelotto.pirate168.com/token?token=12cfc90e9569faf6e70c6d001b12f9e1c392f631&amp;header=off&amp;lottotype=stockchina&amp;url=</label
              ><label class="txtHead"
                >input your link here(full link with https://)</label
              >
            </div>
            <div class="col-12">
              <label class="txtHead">stockdowjones :</label
              ><label
                >https://dev-askmelotto.pirate168.com/token?token=12cfc90e9569faf6e70c6d001b12f9e1c392f631&amp;header=off&amp;lottotype=stockdowjones&amp;url=</label
              ><label class="txtHead"
                >input your link here(full link with https://)</label
              >
            </div>
            <div class="col-12">
              <label class="txtHead">stocktaiwan :</label
              ><label
                >https://dev-askmelotto.pirate168.com/token?token=12cfc90e9569faf6e70c6d001b12f9e1c392f631&amp;header=off&amp;lottotype=stocktaiwan&amp;url=</label
              ><label class="txtHead"
                >input your link here(full link with https://)</label
              >
            </div>
            <div class="col-12">
              <label class="txtHead">stockengland :</label
              ><label
                >https://dev-askmelotto.pirate168.com/token?token=12cfc90e9569faf6e70c6d001b12f9e1c392f631&amp;header=off&amp;lottotype=stockengland&amp;url=</label
              ><label class="txtHead"
                >input your link here(full link with https://)</label
              >
            </div>
            <div class="col-12">
              <label class="txtHead"> stockindia :</label
              ><label
                >https://dev-askmelotto.pirate168.com/token?token=12cfc90e9569faf6e70c6d001b12f9e1c392f631&amp;header=off&amp;lottotype=stockindia&amp;url=</label
              ><label class="txtHead"
                >input your link here(full link with https://)</label
              >
            </div>
            <div class="col-12">
              <label class="txtHead">stockhangseng :</label
              ><label
                >https://dev-askmelotto.pirate168.com/token?token=12cfc90e9569faf6e70c6d001b12f9e1c392f631&amp;header=off&amp;lottotype=stockhangseng&amp;url=</label
              ><label class="txtHead"
                >input your link here(full link with https://)</label
              >
            </div>
            <div class="col-12">
              <label class="txtHead">stockegypt :</label
              ><label
                >https://dev-askmelotto.pirate168.com/token?token=12cfc90e9569faf6e70c6d001b12f9e1c392f631&amp;header=off&amp;lottotype=stockegypt&amp;url=</label
              ><label class="txtHead"
                >input your link here(full link with https://)</label
              >
            </div>
            <div class="col-12">
              <label class="txtHead">stocknikkei :</label
              ><label
                >https://dev-askmelotto.pirate168.com/token?token=12cfc90e9569faf6e70c6d001b12f9e1c392f631&amp;header=off&amp;lottotype=stocknikkei&amp;url=</label
              ><label class="txtHead"
                >input your link here(full link with https://)</label
              >
            </div>
            <div class="col-12">
              <label class="txtHead">stocksingapore :</label
              ><label
                >https://dev-askmelotto.pirate168.com/token?token=12cfc90e9569faf6e70c6d001b12f9e1c392f631&amp;header=off&amp;lottotype=stocksingapore&amp;url=</label
              ><label class="txtHead"
                >input your link here(full link with https://)</label
              >
            </div>
            <div class="col-12">
              <label class="txtHead">stockthai :</label
              ><label
                >https://dev-askmelotto.pirate168.com/token?token=12cfc90e9569faf6e70c6d001b12f9e1c392f631&amp;header=off&amp;lottotype=stockthai&amp;url=</label
              ><label class="txtHead"
                >input your link here(full link with https://)</label
              >
            </div>
            <div class="col-12">
              <label class="txtHead">stockgerman :</label
              ><label
                >https://dev-askmelotto.pirate168.com/token?token=12cfc90e9569faf6e70c6d001b12f9e1c392f631&amp;header=off&amp;lottotype=stockgerman&amp;url=</label
              ><label class="txtHead"
                >input your link here(full link with https://)</label
              >
            </div>
            <div class="col-12">
              <label class="txtHead">stockrussia : </label
              ><label
                >https://dev-askmelotto.pirate168.com/token?token=12cfc90e9569faf6e70c6d001b12f9e1c392f631&amp;header=off&amp;lottotype=stockrussia&amp;url=</label
              ><label class="txtHead"
                >input your link here(full link with https://)</label
              >
            </div>
            <div class="col-12">
              <label class="txtHead">zodiaclotto : </label
              ><label
                >https://dev-askmelotto.pirate168.com/token?token=12cfc90e9569faf6e70c6d001b12f9e1c392f631&amp;header=off&amp;lottotype=&amp;url=zodiaclotto</label
              ><label class="txtHead"
                >input your link here(full link with https://)</label
              >
            </div>
            <div class="col-12">
              <label class="txtHead">pingponglotto2 : </label
              ><label
                >https://dev-askmelotto.pirate168.com/token?token=12cfc90e9569faf6e70c6d001b12f9e1c392f631&amp;header=off&amp;lottotype=&amp;url=pingponglotto2</label
              ><label class="txtHead"
                >input your link here(full link with https://)</label
              >
            </div>
            <div class="col-12">
              <label class="txtHead">pingponglotto3 : </label
              ><label
                >https://dev-askmelotto.pirate168.com/token?token=12cfc90e9569faf6e70c6d001b12f9e1c392f631&amp;header=off&amp;lottotype=&amp;url=pingponglotto3</label
              ><label class="txtHead"
                >input your link here(full link with https://)</label
              >
            </div>
            <div class="col-12">
              <label class="txtHead">pingponglotto6 : </label
              ><label
                >https://dev-askmelotto.pirate168.com/token?token=12cfc90e9569faf6e70c6d001b12f9e1c392f631&amp;header=off&amp;lottotype=&amp;url=pingponglotto6</label
              ><label class="txtHead"
                >input your link here(full link with https://)</label
              >
            </div>
            <div class="col-12">
              <label class="txtHead">hanoylottostar_set : </label
              ><label
                >https://dev-askmelotto.pirate168.com/token?token=12cfc90e9569faf6e70c6d001b12f9e1c392f631&amp;header=off&amp;lottotype=&amp;url=hanoylottostar_set</label
              ><label class="txtHead"
                >input your link here(full link with https://)</label
              >
            </div>
            <div class="col-12">
              <label class="txtHead">hanoylottostar : </label
              ><label
                >https://dev-askmelotto.pirate168.com/token?token=12cfc90e9569faf6e70c6d001b12f9e1c392f631&amp;header=off&amp;lottotype=&amp;url=hanoylottostar</label
              ><label class="txtHead"
                >input your link here(full link with https://)</label
              >
            </div>
            <div class="col-12">
              <label class="txtHead">hanoylottotv : </label
              ><label
                >https://dev-askmelotto.pirate168.com/token?token=12cfc90e9569faf6e70c6d001b12f9e1c392f631&amp;header=off&amp;lottotype=&amp;url=hanoylottotv</label
              ><label class="txtHead"
                >input your link here(full link with https://)</label
              >
            </div>
            <div class="col-12">
              <label class="txtHead">hanoylottotv_set : </label
              ><label
                >https://dev-askmelotto.pirate168.com/token?token=12cfc90e9569faf6e70c6d001b12f9e1c392f631&amp;header=off&amp;lottotype=&amp;url=hanoylottotv_set</label
              ><label class="txtHead"
                >input your link here(full link with https://)</label
              >
            </div>
            <div class="col-12">
              <label class="txtHead">laoslottoextra : </label
              ><label
                >https://dev-askmelotto.pirate168.com/token?token=12cfc90e9569faf6e70c6d001b12f9e1c392f631&amp;header=off&amp;lottotype=&amp;url=laoslottoextra</label
              ><label class="txtHead"
                >input your link here(full link with https://)</label
              >
            </div>
            <div class="col-12">
              <label class="txtHead">laoslottoextra_set : </label
              ><label
                >https://dev-askmelotto.pirate168.com/token?token=12cfc90e9569faf6e70c6d001b12f9e1c392f631&amp;header=off&amp;lottotype=&amp;url=laoslottoextra_set</label
              ><label class="txtHead"
                >input your link here(full link with https://)</label
              >
            </div>
            <div class="col-12">
              <label class="txtHead">laoslottohd : </label
              ><label
                >https://dev-askmelotto.pirate168.com/token?token=12cfc90e9569faf6e70c6d001b12f9e1c392f631&amp;header=off&amp;lottotype=&amp;url=laoslottohd</label
              ><label class="txtHead"
                >input your link here(full link with https://)</label
              >
            </div>
            <div class="col-12">
              <label class="txtHead">laoslottohd_set : </label
              ><label
                >https://dev-askmelotto.pirate168.com/token?token=12cfc90e9569faf6e70c6d001b12f9e1c392f631&amp;header=off&amp;lottotype=&amp;url=laoslottohd_set</label
              ><label class="txtHead"
                >input your link here(full link with https://)</label
              >
            </div>
            <div class="col-12">
              <label class="txtHead">laoslottotv : </label
              ><label
                >https://dev-askmelotto.pirate168.com/token?token=12cfc90e9569faf6e70c6d001b12f9e1c392f631&amp;header=off&amp;lottotype=&amp;url=laoslottotv</label
              ><label class="txtHead"
                >input your link here(full link with https://)</label
              >
            </div>
            <div class="col-12">
              <label class="txtHead">laoslottotv_set : </label
              ><label
                >https://dev-askmelotto.pirate168.com/token?token=12cfc90e9569faf6e70c6d001b12f9e1c392f631&amp;header=off&amp;lottotype=&amp;url=laoslottotv_set</label
              ><label class="txtHead"
                >input your link here(full link with https://)</label
              >
            </div>
          </div>
        </div>

        <div class="pb-5"></div>
      </div>
      <div class="box-all-content">
        <div style="position: sticky; top: 0px"><Boxtran54 /></div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "ComTransfer",
};
</script>
