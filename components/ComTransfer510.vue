<!-- Please remove this file from your project -->
<template>
  <div>
    <div class="box-tran" style="display: flex">
      <div class="box-all">
        <div class="col-12" id="tab7">
          <div>
            <h1>
              <b style="color: #19a17a !important">5.9
                <span style="padding-left: 3px" id="tran_withdrawal">
                  Member Report Detailticket</span></b>
            </h1>
          </div>
        </div>

        <div class="btn-toolbar mb-3" role="toolbar">
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
                    <td>Agent account, Account length is restricted to 36 characters at most.</td>
                  </tr>

                  <tr>
                    <td class="bRight">agentApiKey</td>
                    <td class="bRight">string</td>
                    <td>System generated API key after creating agent.</td>
                  </tr>

                  <tr>
                    <td class="bRight">ticketId</td>
                    <td class="bRight">integer</td>
                    <td>If you want to show a specific ticket, send ticketId. If not provided, all tickets will be
                      returned.</td>
                  </tr>

                  <tr>
                    <td class="bRight">startDate</td>
                    <td class="bRight">string (datetime)</td>
                    <td>Date format “yyyy-MM-dd HH:mm:ss” (GMT+7)</td>
                  </tr>

                  <tr>
                    <td class="bRight">endDate</td>
                    <td class="bRight">string (datetime)</td>
                    <td>Date format “yyyy-MM-dd HH:mm:ss” (GMT+7)</td>
                  </tr>

                  <tr>
                    <td class="bRight">page</td>
                    <td class="bRight">integer</td>
                    <td>Current page number.</td>
                  </tr>

                  <tr>
                    <td class="bRight">limit</td>
                    <td class="bRight">integer</td>
                    <td>Limit of records per page.</td>
                  </tr>

                  <tr>
                    <td class="bRight">currency</td>
                    <td class="bRight">string</td>
                    <td>
                      Supported currencies: thb, usd, cny, idr, vnd, lak, myr, mmk, khr, php, eur, twd, inr, gbp, krw
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
                    <td>Result Code Reference.</td>
                  </tr>
                  <tr>
                    <td class="bRight">data</td>
                    <td class="bRight">object</td>
                    <td>Object response.</td>
                  </tr>
                  <tr>
                    <td class="bRight">agentUsername</td>
                    <td class="bRight">string</td>
                    <td>Agent account, account length is restricted to 36 characters at most.</td>
                  </tr>
                  <tr>
                    <td class="bRight">startDate</td>
                    <td class="bRight">date</td>
                    <td>Date type “yyyy-MM-dd HH:mm:ss” (GMT+7)</td>
                  </tr>
                  <tr>
                    <td class="bRight">endDate</td>
                    <td class="bRight">date</td>
                    <td>Date type “yyyy-MM-dd HH:mm:ss” (GMT+7)</td>
                  </tr>
                  <tr>
                    <td class="bRight">result</td>
                    <td class="bRight">arrayobject</td>
                    <td>Result data container.</td>
                  </tr>
                  <tr>
                    <td class="bRight">docs</td>
                    <td class="bRight">arrayobject</td>
                    <td>Array of documents.</td>
                  </tr>
                  <tr>
                    <td class="bRight">no</td>
                    <td class="bRight">number</td>
                    <td>Sequence number of the record.</td>
                  </tr>
                  <tr>
                    <td class="bRight">playerApiId</td>
                    <td class="bRight">string</td>
                    <td>Player ID from partner system.</td>
                  </tr>
                  <tr>
                    <td class="bRight">playerUsername</td>
                    <td class="bRight">string</td>
                    <td>Player username from partner system.</td>
                  </tr>
                  <tr>
                    <td class="bRight">datetime</td>
                    <td class="bRight">string</td>
                    <td>The date the bet was placed. Format: YYYY-MM-DD HH:mm:ss</td>
                  </tr>
                  <tr>
                    <td class="bRight">ticketId</td>
                    <td class="bRight">string</td>
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
                    <td>Round of drawagent เช่น yeekeelotto round 88</td>
                  </tr>
                  <tr>
                    <td class="bRight">goverment</td>
                    <td class="bRight">boolean</td>
                    <td>If true = lottoset, if false = lotto</td>
                  </tr>
                  <tr>
                    <td class="bRight">totalBetAmount</td>
                    <td class="bRight">string</td>
                    <td>User bet amount.</td>
                  </tr>
                  <tr>
                    <td class="bRight">discount</td>
                    <td class="bRight">number</td>
                    <td>Discount bet amount.</td>
                  </tr>
                  <tr>
                    <td class="bRight">totalPayOutAmount</td>
                    <td class="bRight">number</td>
                    <td>Equals 0 when a player loses.</td>
                  </tr>
                  <tr>
                    <td class="bRight">totalBalanceAmount</td>
                    <td class="bRight">number</td>
                    <td>Net of bet ticket.</td>
                  </tr>
                  <tr>
                    <td class="bRight">status</td>
                    <td class="bRight">string</td>
                    <td>False(ไม่ถูกรางวัล), True(ถูกรางวัล), Pending(รอผล), Cancel(ยกเลิก)</td>
                  </tr>
                  <tr>
                    <td class="bRight">drawResult</td>
                    <td class="bRight">arrayobject</td>
                    <td>Bet result object เช่น top6, top5, top4, top3, top2, top1, row4, row3, row2, bottom3, bottom2,
                      bottom1</td>
                  </tr>
                  <tr>
                    <td class="bRight">txtList</td>
                    <td class="bRight">arrayobject</td>
                    <td>Bet detail, max 200 numbers/ticket.</td>
                  </tr>
                  <tr>
                    <td class="bRight">betKey</td>
                    <td class="bRight">number</td>
                    <td>betKey = encode64("ticketId" - "betId")</td>
                  </tr>
                  <tr>
                    <td class="bRight">betId</td>
                    <td class="bRight">string</td>
                    <td>Bet ID of bet position.</td>
                  </tr>
                  <tr>
                    <td class="bRight">betType</td>
                    <td class="bRight">string</td>
                    <td>User bet type เช่น top6, top5, top4, top3, top2, top1, row4, row3, row2, bottom3, bottom2,
                      bottom1</td>
                  </tr>
                  <tr>
                    <td class="bRight">betNumber</td>
                    <td class="bRight">number</td>
                    <td>User bet number.</td>
                  </tr>
                  <tr>
                    <td class="bRight">betStatus</td>
                    <td class="bRight">string</td>
                    <td>Status of bet data (Pending).</td>
                  </tr>
                  <tr>
                    <td class="bRight">betAmount</td>
                    <td class="bRight">number</td>
                    <td>Bet amount = betTotal - betDiscount</td>
                  </tr>
                  <tr>
                    <td class="bRight">betTotal</td>
                    <td class="bRight">number</td>
                    <td>User bet total amount.</td>
                  </tr>
                  <tr>
                    <td class="bRight">betDiscount</td>
                    <td class="bRight">number</td>
                    <td>Discount bet amount.</td>
                  </tr>
                  <tr>
                    <td class="bRight">payOutRate</td>
                    <td class="bRight">number</td>
                    <td>Rate payout when member wins.</td>
                  </tr>
                  <tr>
                    <td class="bRight">payOutAmount</td>
                    <td class="bRight">number</td>
                    <td>Payout amount of this record.</td>
                  </tr>
                  <tr>
                    <td class="bRight">rateLevel</td>
                    <td class="bRight">number</td>
                    <td>If 0 = normal payout, if 1,2,3,4 = discount rate</td>
                  </tr>
                  <tr>
                    <td class="bRight">rateLevelAmount</td>
                    <td class="bRight">float</td>
                    <td>Amount by rateLevel.</td>
                  </tr>
                  <tr>
                    <td class="bRight">apiPt</td>
                    <td class="bRight">number</td>
                    <td>Position tracking (%) of API (askmelotto).</td>
                  </tr>
                  <tr>
                    <td class="bRight">agentPt</td>
                    <td class="bRight">number</td>
                    <td>Position tracking (%) of agent.</td>
                  </tr>
                  <tr>
                    <td class="bRight">betResultKey</td>
                    <td class="bRight">string</td>
                    <td>Bet result key lotto set.</td>
                  </tr>
                  <tr>
                    <td class="bRight">totalDocs</td>
                    <td class="bRight">number</td>
                    <td>Total number of matching documents.</td>
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
                    <td>Has previous page (true / false)</td>
                  </tr>
                  <tr>
                    <td class="bRight">hasnextPage</td>
                    <td class="bRight">boolean</td>
                    <td>Has next page (true / false)</td>
                  </tr>
                  <tr>
                    <td class="bRight">prevPage</td>
                    <td class="bRight">number</td>
                    <td>Previous page number.</td>
                  </tr>
                  <tr>
                    <td class="bRight">nextPage</td>
                    <td class="bRight">number</td>
                    <td>Next page number.</td>
                  </tr>
                  <tr>
                    <td class="bRight">msg</td>
                    <td class="bRight">string</td>
                    <td>Information message.</td>
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
                    <td class="bRight">200</td>
                    <td class="bRight">success</td>
                    <td>Request completed successfully.</td>
                  </tr>

                  <tr>
                    <td class="bRight">41001</td>
                    <td class="bRight">error</td>
                    <td>Request body is not an object.</td>
                  </tr>

                  <tr>
                    <td class="bRight">71001</td>
                    <td class="bRight">error</td>
                    <td>Missing field 'agentUsername'.</td>
                  </tr>

                  <tr>
                    <td class="bRight">71004</td>
                    <td class="bRight">error</td>
                    <td>Missing field 'agentApiKey'.</td>
                  </tr>

                  <tr>
                    <td class="bRight">71010</td>
                    <td class="bRight">error</td>
                    <td>Invalid ApiKey or UserAgent.</td>
                  </tr>

                  <tr>
                    <td class="bRight">71022</td>
                    <td class="bRight">error</td>
                    <td>Invalid input format in 'startDate' field.</td>
                  </tr>

                  <tr>
                    <td class="bRight">71023</td>
                    <td class="bRight">error</td>
                    <td>Invalid input format in 'endDate' field.</td>
                  </tr>

                  <tr>
                    <td class="bRight">71026</td>
                    <td class="bRight">error</td>
                    <td>Missing field 'startDate'.</td>
                  </tr>

                  <tr>
                    <td class="bRight">71027</td>
                    <td class="bRight">error</td>
                    <td>Missing field 'endDate'.</td>
                  </tr>

                  <tr>
                    <td class="bRight">90003</td>
                    <td class="bRight">error</td>
                    <td>Limit should be greater than 0.</td>
                  </tr>

                  <tr>
                    <td class="bRight">20017</td>
                    <td class="bRight">error</td>
                    <td>Invalid currency.</td>
                  </tr>

                  <tr>
                    <td class="bRight">72003</td>
                    <td class="bRight">error</td>
                    <td>Invalid ticketId.</td>
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
          <Boxtran59 />
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
