<!-- Please remove this file from your project -->
<template>
  <div>
    <div class="box-Sem" style="display: flex">
      <div class="box-all">
        <div class="col-12" id="tabFive">
          <div>
            <h1>
              <b
                style="color: #19a17a !important"
                set-lan="text:4.5 Call Back Service"
                >4.5
                <span style="padding-left: 3px" id="Seamless_Call_Back_Service"
                  >Call Back Service</span
                >
              </b>
            </h1>
          </div>
        </div>

        <div class="col-12">
          <label set-lan="html:*Please keep">
            *โปรดเก็บข้อมูล ”Call Back Service”
            <b style="color: red">ทั้งหมดไว้เป็นความลับ</b>.
          </label>
        </div>
        <div><b style="color: #19a17a !important"></b></div>

        <div class="col-12" id="tabSeven">
          <div>
            <b
              style="color: #19a17a !important"
              set-lan="text:4.5.2 UserPlaceBet"
              >4.5.3
              <span style="padding-left: 3px" id="Seamless_UserPlaceBet"
                >UserPlaceBet</span
              ></b
            >
          </div>
        </div>

        <div class="btn-toolbar mb-3" role="toolbar">
          <div class="form-group col-12">
            <label set-lan="html:When a player places">
              เมื่อผู้เล่นวางเดิมพัน ระบบ Askmelotto จะส่งคำขอ UserPlaceBet
              ไปยังระบบของคู่ธุรกิจ คำขอจะหมดเวลาหลังจาก 10 วินาทีและจะส่ง
              PlaceBetCancel</label
            >
          </div>
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
                id="DataTable352"
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
                    <th
                      style="width: 40%"
                      set-lan="html:Description"
                      class="thcolor bRight txtCenter"
                    >
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="bRight">service</td>
                    <td class="bRight">String</td>
                    <td class="bRight">Fixed value"UserPlaceBet"</td>
                  </tr>
                  <tr>
                    <td class="bRight">data</td>
                    <td class="bRight">Object</td>
                    <td class="bRight">Object response.</td>
                  </tr>
                  <tr>
                    <td class="bRight">playerApiId</td>
                    <td class="bRight">String</td>
                    <td class="bRight">Player Id from partner system.</td>
                  </tr>
                  <tr>
                    <td class="bRight">playerApiUsername</td>
                    <td class="bRight">String</td>
                    <td class="bRight">
                      Player username from Askmelotto system.
                    </td>
                  </tr>
                  <tr>
                    <td class="bRight">playerUsername</td>
                    <td class="bRight">String</td>
                    <td class="bRight">Player username from partner system.</td>
                  </tr>
                  <tr>
                    <td class="bRight">ticketId</td>
                    <td class="bRight">String</td>
                    <td class="bRight">
                      User bet group record from one submit.
                    </td>
                  </tr>
                  <tr>
                    <td class="bRight">type</td>
                    <td class="bRight">String</td>
                    <td class="bRight">Type of lotto.</td>
                  </tr>
                  <tr>
                    <td class="bRight">government</td>
                    <td class="bRight">Boolean</td>
                    <td class="bRight">
                      If government = true is lottoset, If government = false is
                      lotto.
                    </td>
                  </tr>
                  <tr>
                    <td class="bRight">drawId</td>
                    <td class="bRight">Number</td>
                    <td class="bRight">Draw agent id.</td>
                  </tr>
                  <tr>
                    <td class="bRight">totalBetAmt</td>
                    <td class="bRight">String</td>
                    <td class="bRight">User bet amount.</td>
                  </tr>
                  <tr>
                    <td class="bRight">txtList</td>
                    <td class="bRight">arrayobject</td>
                    <td class="bRight">Bet Detail.</td>
                  </tr>
                  <tr>
                    <td class="bRight">agentPt</td>
                    <td class="bRight">Number</td>
                    <td class="bRight">Position tracking (%) of agent.</td>
                  </tr>
                  <tr>
                    <td class="bRight">apiPt</td>
                    <td class="bRight">Number</td>
                    <td class="bRight">
                      Position tracking (%) of api(Askmelotto).
                    </td>
                  </tr>
                  <tr>
                    <td class="bRight">betId</td>
                    <td class="bRight">Number</td>
                    <td class="bRight">Identity of bet data.</td>
                  </tr>
                  <tr>
                    <td class="bRight">betKey</td>
                    <td class="bRight">String</td>
                    <td class="bRight">User bet number record key.</td>
                  </tr>
                  <tr>
                    <td class="bRight">betNumber</td>
                    <td class="bRight">Number</td>
                    <td class="bRight">User bet number.</td>
                  </tr>
                  <tr>
                    <td class="bRight">betStatus</td>
                    <td class="bRight">String</td>
                    <td class="bRight">
                      Status of bet data(Pending).
                    </td>
                  </tr>
                  <tr>
                    <td class="bRight">betAmt</td>
                    <td class="bRight">Number</td>
                    <td class="bRight">Bet amount =betTotal-betDiscount</td>
                  </tr>
                  <tr>
                    <td class="bRight">betTotal</td>
                    <td class="bRight">Number</td>
                    <td class="bRight">User bet total amount.</td>
                  </tr>
                  <tr>
                    <td class="bRight">betDiscount</td>
                    <td class="bRight">Number</td>
                    <td class="bRight">Discount bet amount.</td>
                  </tr>
                  <tr>
                    <td class="bRight">payOutRate</td>
                    <td class="bRight">Number</td>
                    <td class="bRight">Rate payout when member win.</td>
                  </tr>
                  <tr>
                    <td class="bRight">betType</td>
                    <td class="bRight">String</td>
                    <td class="bRight">
                      User bet type =
                      top6,top5,top4,top3,top2,top1,row4,row3,row2,bottom3,bottom2,bottom1
                    </td>
                  </tr>
                  <tr>
                    <td class="bRight">rateLevel</td>
                    <td class="bRight">Number</td>
                    <td class="bRight">
                      If 0=rate payout normal, If =1, 2, 3, 4 rate discount.
                    </td>
                  </tr>
                  <tr>
                    <td class="bRight">rateLevelAmount</td>
                    <td class="bRight">float</td>
                    <td class="bRight">Amount of rate follow by rateLevel.</td>
                  </tr>
                  <tr>
                    <td class="bRight">status</td>
                    <td class="bRight">String</td>
                    <td class="bRight">
                      Success (Payment สำเร็จ), Pending (รอผล), Cancel(ยกเลิก).
                    </td>
                  </tr>
                  <tr>
                    <td class="bRight">createDate</td>
                    <td class="bRight">String</td>
                    <td class="bRight">
                      The date the bet was placed. format(YYYY-MM-DD HH:mm:ss)
                    </td>
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
                    <button onclick="copyContent(document.getElementById('seamless_tabfour-five-three_req').innerHTML)" class="btn btn-info waves-effect waves-light">Copy to clipboard</button>
                  </div>
                </div>
                <div class="koh-faq-answer col-12">
                  <pre>
                                        <div class="copy-clipboard" style="position: absolute;width: 20px;top: 30px;right: 0;cursor:pointer">
                                            <svg style="position: absolute;width: 20px;left: -25px;" onclick="copyContent(document.getElementById('seamless_tabfour-five-three_req').innerHTML)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Copy to Clipboard</title><path d="M18 6v-6h-18v18h6v6h18v-18h-6zm-12 10h-4v-14h14v4h-10v10zm16 6h-14v-14h14v14z"></path></svg>
                                        </div>
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
                    <th
                      style="width: 40%"
                      set-lan="html:Description"
                      class="thcolor bRight txtCenter"
                    >
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="bRight">code</td>
                    <td class="bRight">Number</td>
                    <td class="bRight">Result Code Reference.</td>
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
                    <th set-lan="html:Description" class="thcolor txtCenter">
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="bRight">0</td>
                    <td>Success</td>
                  </tr>
                  <tr>
                    <td class="bRight">911001</td>
                    <td>Insufficient balance.</td>
                  </tr>
                  <tr>
                    <td class="bRight">911002</td>
                    <td>Account is Suspend.</td>
                  </tr>
                  <tr>
                    <td class="bRight">911004</td>
                    <td>Session expired.</td>
                  </tr>
                  <tr>
                    <td class="bRight">911005</td>
                    <td>Bet failed. Please try again.</td>
                  </tr>
                  <tr>
                    <td class="bRight">911006</td>
                    <td>The game is under maintenance.</td>
                  </tr>
                  <tr>
                    <td class="bRight">911007</td>
                    <td>You are not allowed to play this game.</td>
                  </tr>
                  <tr>
                    <td class="bRight">911008</td>
                    <td>Player not found.</td>
                  </tr>
                  <tr>
                    <td class="bRight">911009</td>
                    <td>Bad parameters.</td>
                  </tr>
                  <tr>
                    <td class="bRight">911010</td>
                    <td>Account is locked.</td>
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
                      set-lan="text:Example Service Response Code"
                      >Example Service Response Code</b
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
                                    <div class="copy-clipboard" style="position: absolute;width: 20px;top: 10px;right: 0;cursor:pointer">
                                            <svg style="position: absolute;width: 20px;left: -25px;" onclick="copyContent(document.getElementById('seamless_tabfour-six-four_two_ser').innerHTML)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Copy to Clipboard</title><path d="M18 6v-6h-18v18h6v6h18v-18h-6zm-12 10h-4v-14h14v4h-10v10zm16 6h-14v-14h14v14z"></path></svg>
                                        </div>
                                        <code id="352B" style="border-radius: 0.375rem;" class="hljs json">{
    <span class="hljs-attr">"code"</span>: <span class="hljs-number">0</span>
}</code></pre>
                </div>
              </div>
            </div>
          </div> -->
        </div>
      </div>
      <div class="box-all-content">
        <div style="position: sticky; top: 0px">
          <!-- <div > -->
          <BoxSem453 />
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "ComSeamless45",
};
</script>
