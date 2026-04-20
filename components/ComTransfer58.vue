<!-- Please remove this file from your project -->
<template>
  <div>
    <div class="box-tran" style="display: flex">
      <div class="box-all">
        <div class="col-12" id="tab7">
          <div>
            <h1>
              <b style="color: #19a17a !important">5.8
                <span style="padding-left: 3px" id="tran_withdrawal">
                  Member Report List</span></b>
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
              <label class="txtHead">Url : </label>
              <label>
                https://test-api.askmelotto.vip/apiRoute/api/withdraw
              </label>
            </div>
            <div class="col-12">
              <label class="txtHead"> headers : </label>
              <label> content-type application/json </label>
            </div>
          </div> -->

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
                                        <svg  style="position: absolute;width: 20px;left: -25px;" onclick="copyContent(document.getElementById('tran_tabfive-eg_ser').innerHTML)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Copy to Clipboard</title><path d="M18 6v-6h-18v18h6v6h18v-18h-6zm-12 10h-4v-14h14v4h-10v10zm16 6h-14v-14h14v14z"></path></svg>
                                    </div>
                                    <code id="47A" style="border-radius: 0.375rem;" class="hljs json">{
    <span class="hljs-attr">"agentUsername"</span>: <span class="hljs-string">"agentapi",</span>
    <span class="hljs-attr">"agentApiKey"</span>: <span class="hljs-string">"18c089a2e49dfc1776b6abc2ea3ee909d43b10bc37dfd7195a7265da82f8b4a983a1ebf3",</span>
    <span class="hljs-attr">"playerUsername"</span>: <span class="hljs-string">"testuserapi001",</span>
    <span class="hljs-attr">"balance"</span>: <span class="hljs-number">100,</span>
    <span class="hljs-attr">"transId"</span>: <span class="hljs-string">"25f0c27dbea3f3261f2cd66126761251s2712676121657"</span>
}</code></pre>

                </div>
              </div>
            </div>
          </div> -->
          <div class="form-group col-12 ex">
            <div>
              <b style="color: #19a17a !important" set-lan="text:Request Body">Request Body</b>
            </div>
          </div>

          <div class="form-group col-12">
            <div class="table-wrapper">
              <table class="table table-borderless table-striped" id="DataTable47A">
                <thead class="rgba-green-slight">
                  <tr>
                    <th style="width: 26%" set-lan="html:Parameter" class="thcolor bRight txtCenter">
                      Parameter
                    </th>
                    <th style="width: 15%" set-lan="html:Type" class="thcolor bRight txtCenter">
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
                    <td class="bRight">string</td>
                    <td>Agent account , Account length is restricted to 36 chars at most.</td>
                  </tr>

                  <tr>
                    <td class="bRight">agentApiKey</td>
                    <td class="bRight">string</td>
                    <td>System generate key ID after crate Agent</td>
                  </tr>

                  <tr>
                    <td class="bRight">playerUserName</td>
                    <td class="bRight">string</td>
                    <td>Player username (Member Username) to retrieve data. If not specified, the system will return
                      data for all members.
                    </td>
                  </tr>

                  <tr>
                    <td class="bRight">start_date</td>
                    <td class="bRight">string (datetime)</td>
                    <td>
                      Start date for fetching data, e.g.
                      "2025-11-05T00:00:00+07:00"
                    </td>
                  </tr>
                  <tr>
                    <td class="bRight">end_date</td>
                    <td class="bRight">string (datetime)</td>
                    <td>
                      End date for fetching data, e.g.
                      "2025-11-05T23:59:59+07:00"
                    </td>
                  </tr>
                  <tr>
                    <td class="bRight">page</td>
                    <td class="bRight">number</td>
                    <td>Page number to retrieve</td>
                  </tr>
                  <tr>
                    <td class="bRight">limit</td>
                    <td class="bRight">number</td>
                    <td>Limit that was used.</td>
                  </tr>
                  <tr>
                    <td class="bRight">currency</td>
                    <td class="bRight">string</td>
                    <td>Currency thb, usd, cny, idr, vnd, lak, myr, mmk, khr, php, eur, twd, inr, gbp, krw..
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="form-group col-12 ex">
            <div><b style="color: #19a17a !important">Response Body</b></div>
          </div>

          <div class="form-group col-12">
            <div class="table-wrapper">
              <table class="table table-borderless table-striped" id="DataTable47B">
                <thead class="rgba-green-slight">
                  <tr>
                    <th style="width: 26%" set-lan="html:Parameter" class="thcolor bRight txtCenter">
                      Parameter
                    </th>
                    <th style="width: 15%" set-lan="html:Type" class="thcolor bRight txtCenter">
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
                    <td class="bRight">number</td>
                    <td>Status code returned from the system, e.g. 200</td>
                  </tr>
                  <tr>
                    <td class="bRight">msg</td>
                    <td class="bRight">object</td>
                    <td>Information message.</td>
                  </tr>
                  <tr>
                    <td class="bRight">data</td>
                    <td class="bRight">object</td>
                    <td>Object response.</td>
                  </tr>
                  <tr>
                    <td class="bRight">agentUsername</td>
                    <td class="bRight">string</td>
                    <td>Agent account, Account length is restricted to 36 chars at most.</td>
                  </tr>

                  <tr>
                    <td class="bRight">startDate</td>
                    <td class="bRight">string</td>
                    <td>Date format “yyyy-MM-dd HH:mm:ss” (GMT+7)</td>
                  </tr>

                  <tr>
                    <td class="bRight">endDate</td>
                    <td class="bRight">string</td>
                    <td>Date format “yyyy-MM-dd HH:mm:ss” (GMT+7)</td>
                  </tr>

                  <tr>
                    <td class="bRight">result</td>
                    <td class="bRight">array object</td>
                    <td>List of result documents.</td>
                  </tr>

                  <tr>
                    <td class="bRight">docs</td>
                    <td class="bRight">array</td>
                    <td>Array of bet documents.</td>
                  </tr>

                  <tr>
                    <td class="bRight">totalDocs</td>
                    <td class="bRight">number</td>
                    <td>Total number of documents in collection that match a query.</td>
                  </tr>

                  <tr>
                    <td class="bRight">limit</td>
                    <td class="bRight">number</td>
                    <td>Limit that was used.</td>
                  </tr>

                  <tr>
                    <td class="bRight">totalPages</td>
                    <td class="bRight">number</td>
                    <td>Total number of pages.</td>
                  </tr>

                  <tr>
                    <td class="bRight">page</td>
                    <td class="bRight">number</td>
                    <td>Current page number.</td>
                  </tr>

                  <tr>
                    <td class="bRight">hasprevPage</td>
                    <td class="bRight">boolean</td>
                    <td>Has previous page (true/false)</td>
                  </tr>

                  <tr>
                    <td class="bRight">hasnextPage</td>
                    <td class="bRight">boolean</td>
                    <td>Has next page (true/false)</td>
                  </tr>

                  <tr>
                    <td class="bRight">prevPage</td>
                    <td class="bRight">number / null</td>
                    <td>Previous page number</td>
                  </tr>

                  <tr>
                    <td class="bRight">nextPage</td>
                    <td class="bRight">number / null</td>
                    <td>Next page number</td>
                  </tr>

                  <tr>
                    <td class="bRight">no</td>
                    <td class="bRight">number</td>
                    <td>Order number.</td>
                  </tr>

                  <tr>
                    <td class="bRight">playerApiId</td>
                    <td class="bRight">string</td>
                    <td>Player Id from partner system.</td>
                  </tr>

                  <tr>
                    <td class="bRight">playerUsername</td>
                    <td class="bRight">string</td>
                    <td>Player username from partner system.</td>
                  </tr>

                  <tr>
                    <td class="bRight">datetime</td>
                    <td class="bRight">string</td>
                    <td>The date the bet was placed (YYYY-MM-DD HH:mm:ss)</td>
                  </tr>

                  <tr>
                    <td class="bRight">ticketId</td>
                    <td class="bRight">number</td>
                    <td>User bet group record from one submit.</td>
                  </tr>

                  <tr>
                    <td class="bRight">type</td>
                    <td class="bRight">string</td>
                    <td>Type of lotto.</td>
                  </tr>

                  <tr>
                    <td class="bRight">round</td>
                    <td class="bRight">number</td>
                    <td>Round of draw agent (default = 1)</td>
                  </tr>

                  <tr>
                    <td class="bRight">goverment</td>
                    <td class="bRight">boolean</td>
                    <td>true = government lotto, false = normal lotto</td>
                  </tr>

                  <tr>
                    <td class="bRight">totalBetAmount</td>
                    <td class="bRight">number</td>
                    <td>Total bet amount.</td>
                  </tr>

                  <tr>
                    <td class="bRight">discount</td>
                    <td class="bRight">number</td>
                    <td>Discount amount.</td>
                  </tr>

                  <tr>
                    <td class="bRight">totalPayOutAmount</td>
                    <td class="bRight">number</td>
                    <td>Payout amount (0 when lose)</td>
                  </tr>

                  <tr>
                    <td class="bRight">totalBalanceAmount</td>
                    <td class="bRight">number</td>
                    <td>Net result of ticket.</td>
                  </tr>

                  <tr>
                    <td class="bRight">status</td>
                    <td class="bRight">string</td>
                    <td>False = lose, True = win, Pending = waiting, Cancel = cancelled</td>
                  </tr>

                  <tr>
                    <td class="bRight">drawResult</td>
                    <td class="bRight">object / null</td>
                    <td>Lottery result object (top/bottom/range numbers)</td>
                  </tr>

                  <tr>
                    <td class="bRight">betKey</td>
                    <td class="bRight">string</td>
                    <td>Base64(ticketId-betId)</td>
                  </tr>

                  <tr>
                    <td class="bRight">betId</td>
                    <td class="bRight">string</td>
                    <td>Bet position id.</td>
                  </tr>

                  <tr>
                    <td class="bRight">betType</td>
                    <td class="bRight">string</td>
                    <td>Bet type (top6, top5, top4, top3, top2, top1, row*, bottom*)</td>
                  </tr>

                  <tr>
                    <td class="bRight">betNumber</td>
                    <td class="bRight">string</td>
                    <td>User selected number.</td>
                  </tr>

                  <tr>
                    <td class="bRight">betStatus</td>
                    <td class="bRight">string</td>
                    <td>Pending / False / True status of bet</td>
                  </tr>

                  <tr>
                    <td class="bRight">betAmount</td>
                    <td class="bRight">number</td>
                    <td>Bet amount after discount.</td>
                  </tr>

                  <tr>
                    <td class="bRight">betTotal</td>
                    <td class="bRight">number</td>
                    <td>Total bet amount.</td>
                  </tr>

                  <tr>
                    <td class="bRight">betDiscount</td>
                    <td class="bRight">number</td>
                    <td>Discount amount.</td>
                  </tr>

                  <tr>
                    <td class="bRight">payOutRate</td>
                    <td class="bRight">number</td>
                    <td>Payout rate when win.</td>
                  </tr>

                  <tr>
                    <td class="bRight">payOutAmount</td>
                    <td class="bRight">number</td>
                    <td>Payout result amount.</td>
                  </tr>

                  <tr>
                    <td class="bRight">rateLevel</td>
                    <td class="bRight">number</td>
                    <td>0 = normal, 1-4 = discount level</td>
                  </tr>

                  <tr>
                    <td class="bRight">rateLevelAmount</td>
                    <td class="bRight">float</td>
                    <td>Amount based on rate level.</td>
                  </tr>

                  <tr>
                    <td class="bRight">apiPt</td>
                    <td class="bRight">number</td>
                    <td>API commission %</td>
                  </tr>

                  <tr>
                    <td class="bRight">agentPt</td>
                    <td class="bRight">number</td>
                    <td>Agent commission %</td>
                  </tr>

                  <tr>
                    <td class="bRight">betResultKey</td>
                    <td class="bRight">string</td>
                    <td>Result key mapping (top/bottom/range)</td>
                  </tr>


                </tbody>
              </table>
            </div>
          </div>
          <div class="form-group col-12 ex">
            <div>
              <b style="color: #19a17a !important">Example Service Response Code</b>
            </div>
          </div>

          <div class="form-group col-12">
            <div class="table-wrapper">
              <table class="table table-borderless table-striped" id="DataTable47C">
                <thead class="rgba-green-slight">
                  <tr>
                    <th style="width: 26%" set-lan="html:Parameter" class="thcolor bRight txtCenter">
                      Parameter
                    </th>
                    <th set-lan="html:Description" class="thcolor txtCenter">
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="bRight">200</td>
                    <td>success</td>
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
                    <b style="color: #19a17a !important"
                      >Example Service Response Code</b
                    ><i
                      class="fa fa-chevron-down"
                      aria-hidden="true"
                      style="margin-left: 2%; font-size: 1rem"
                    ></i>
                  </div>
                  <button onclick="copyContent(document.getElementById('transfer_tabfive-four_req').innerHTML)" class="btn btn-info waves-effect waves-light">Copy to clipboard</button>
                </div>
                <div class="koh-faq-answer col-12">
                  <pre>
                                    <div class="copy-clipboard" style=" position: absolute;width: 20px;top: 10px;right: 0;cursor:pointer">
                                        <svg  style="position: absolute;width: 20px;left: -25px;" onclick="copyContent(document.getElementById('tran_tabfive-nine_ser').innerHTML)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Copy to Clipboard</title><path d="M18 6v-6h-18v18h6v6h18v-18h-6zm-12 10h-4v-14h14v4h-10v10zm16 6h-14v-14h14v14z"></path></svg>
                                    </div>
                                    <code id="47B" style="border-radius: 0.375rem;" class="hljs json">{
    <span class="hljs-attr">"code"</span>: <span class="hljs-number">0,</span>
    <span class="hljs-attr">"data"</span>: {
        <span class="hljs-attr">"addBalance"</span>: <span class="hljs-number">100,</span>
        <span class="hljs-attr">"afterAgentBalance"</span>: <span class="hljs-number">43813417.23,</span>
        <span class="hljs-attr">"afterMemberBalance"</span>: <span class="hljs-number">0,</span>
        <span class="hljs-attr">"beforeAgentBalance"</span>:<span class="hljs-number">43812886.55,</span>
        <span class="hljs-attr">"beforeMemberBalance"</span>:<span class="hljs-number">369,</span>
        <span class="hljs-attr">"playerApiId"</span>: <span class="hljs-string">"ff4003404239450abb86dd313cb138cabea9ded4f26993a72933d318b16e86",</span>
        <span class="hljs-attr">"playerApiUsername"</span>: <span class="hljs-string">"testuserapi001@agentapi",</span>
        <span class="hljs-attr">"playerUsername"</span>: <span class="hljs-string">"testuserapi001",</span>
        <span class="hljs-attr">"ref"</span>: <span class="hljs-string">"1e77a9cfc9a8b05e613cc0a4f87c2226575c5e77f095d3411b0094b0e730d4",</span>
    },
    <span class="hljs-attr">"msg"</span>: <span class="hljs-string">"success"</span>
}</code></pre>
                </div>
              </div>
            </div>
          </div> -->
        </div>

        <div class="pb-5"></div>
      </div>
      <div class="box-all-content">
        <div style="position: sticky; top: 0px">
          <Boxtran58 />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ComTransfer",
};
</script>
