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
            </h1></div
          >
        </div>

        <div class="col-12">
          <label set-lan="html:*Please keep">
            *โปรดเก็บข้อมูล ”Call Back Service”
            <b style="color: red">ทั้งหมดไว้เป็นความลับ</b>.
          </label>
        </div>
        <div><b style="color: #19a17a !important"></b></div>


        <div class="col-12" id="tabEight">
          <div
            ><b style="color: #19a17a !important"
              >4.5.4
              <span style="padding-left: 3px" id="Seamless_UserPlaceBetCancel"
                >UserPlaceBetCancel</span
              ></b
            ></div
          >
        </div>

        <div class="btn-toolbar mb-3" role="toolbar">
          <div class="form-group col-12">
            <label set-lan="html:when previous PlaceBet">
              1. ใช้ยกเลิกเมื่อ UserPlaceBet เกิดข้อผิดพลาด หรือ Time Out <br />
              2. ใช้ยกเลิกกรณีที่ผู้เล่นต้องการยกเลิก <br />
              2.1 กรณียกเลิกทั้งตั๋ว Status ของตั๋วจะเป็น "Cancel"
              ซึ่งรายละเอียดในการเดิมพันแต่ละรายการ ทุกรายการของตั๋วนั้นจะมี
              "betStatus" เป็น "Cancel"<br />
              2.2 ถ้ายกเลิกที่ละเลข ตั๋วเป็น SUCCESS แต่ในโพยเลขที่ยกเลิก มี "betStatus"  เป็น "Cancel"
            </label>
          </div>
          <div class="form-group col-12 ex">
            <div
              ><b style="color: #19a17a !important" set-lan="text:Request Body"
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
                      style="width: 20%"
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
                    <td class="bRight">Fixed value"UserPlaceBetCancel"</td>
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
                    <td class="bRight">betId</td>
                    <td class="bRight">Number</td>
                    <td class="bRight">Identity of bet data.</td>
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
                    <td class="bRight">betStatus</td>
                    <td class="bRight">String</td>
                    <td class="bRight">Status of bet data(Cancel).</td>
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
                      Success Pending (รอผล), Cancel(ยกเลิก).
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
                    <button onclick="copyContent(document.getElementById('seamless_tabfour-five-four_req').innerHTML)" class="btn btn-info waves-effect waves-light">Copy to clipboard</button>
                  </div>
                </div>
                <div class="koh-faq-answer col-12">
                  <pre>
                                        <div class="copy-clipboard" style="position: absolute;width: 20px;top: 30px;right: 0;cursor:pointer">
                                            <svg style="position: absolute;width: 20px;left: -25px;" onclick="copyContent(document.getElementById('seamless_tabfour-five-four_req').innerHTML)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Copy to Clipboard</title><path d="M18 6v-6h-18v18h6v6h18v-18h-6zm-12 10h-4v-14h14v4h-10v10zm16 6h-14v-14h14v14z"></path></svg>
                                        </div>
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
              </div>
            </div>
          </div> -->
          <div class="form-group col-12 ex">
            <div
              ><b style="color: #19a17a !important">Response Body</b></div
            >
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
                      style="width: 20%"
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
            <div
              ><b style="color: #19a17a !important"
                >Service Response Code</b
              ></div
            >
          </div>

          <div class="form-group col-12">
            <div class="table-wrapper">
              <table class="table table-borderless table-striped">
                <thead class="rgba-green-slight">
                  <tr>
                    <th
                      style="width: 20%"
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
                    <td class="bRight">51101</td>
                    <td>Duplicate Transaction (no return).</td>
                  </tr>
                  <tr>
                    <td class="bRight">51102</td>
                    <td>Transaction not found.</td>
                  </tr>
                  <tr>
                    <td class="bRight">911009</td>
                    <td>Bad parameters.</td>
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
                      set-lan="text:Example Service Respond Code"
                      >Example Service Respond Code</b
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
                                            <svg style="position: absolute;width: 20px;left: -25px;" onclick="copyContent(document.getElementById('seamless_tabfour-six-four_three_ser').innerHTML)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Copy to Clipboard</title><path d="M18 6v-6h-18v18h6v6h18v-18h-6zm-12 10h-4v-14h14v4h-10v10zm16 6h-14v-14h14v14z"></path></svg>
                                        </div>
                                        <code id="352B" style="border-radius: 0.375rem;" class="hljs json">{
    <span class="hljs-attr">"code"</span>: <span class="hljs-number">0</span>
}</code></pre>
                </div>
              </div>
            </div>
          </div> -->
        </div>

        <div class="col-12" id="tabNine">
          <div
            ><b style="color: #19a17a !important"
              >4.5.5
              <span style="padding-left: 3px" id="Seamless_UserPlacePayout"
                >UserPlacePayout</span
              ></b
            ></div
          >
        </div>

        <div class="btn-toolbar mb-3" role="toolbar">
          <div class="form-group col-12">
            <label set-lan="html:This interface will">
              ถ้ามีการออกผลรางวัล ระบบ Askmelotto จะส่งคำขอ UserPlacePayout
              เมื่อมีการออกผลรางวัล</label
            >
          </div>
          <div class="form-group col-12 ex">
            <div
              ><b style="color: #19a17a !important" set-lan="text:Request Body"
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
                      style="width: 20%"
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
                    <td class="bRight">Fixed value"UserPlacePayout"</td>
                  </tr>
                  <tr>
                    <td class="bRight">data</td>
                    <td class="bRight">Object</td>
                    <td class="bRight">Object respone.</td>
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
                    <td class="bRight">totalPayOutAmt</td>
                    <td class="bRight">Number</td>
                    <td class="bRight">
                      totalPayOutAmt equals 0 when a player loses.
                    </td>
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
                    <td class="bRight">Bet id of bet position.</td>
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
                    <td class="bRight">betType</td>
                    <td class="bRight">String</td>
                    <td class="bRight">
                      User bet type =
                      top6,top5,top4,top3,top2,top1,row4,row3,row2,bottom3,bottom2,bottom1
                    </td>
                  </tr>
                  <tr>
                    <td class="bRight">betStatus</td>
                    <td class="bRight">String</td>
                    <td class="bRight">
                      Status of bet data(Pending, True, False, Cancel).
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
                    <td class="bRight">
                      Rate payout when member win.(*recheck and update for
                      lottoset.)
                    </td>
                  </tr>
                  <tr>
                    <td class="bRight">payOutAmt</td>
                    <td class="bRight">payOutAmt</td>
                    <td class="bRight">Payout amount of this reccord.</td>
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
                  <tr>
                    <td class="bRight">result</td>
                    <td class="bRight">arrayobject</td>
                    <td class="bRight"></td>
                  </tr>
                  <tr>
                    <td class="bRight">resultlink</td>
                    <td class="bRight">String</td>
                    <td class="bRight">
                      Link for show game reslut of this drawId.
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
                      >Example Request Body
                      <span style="color: red">(กรณีไม่ถูกรางวัล)</span></b
                    >

                    <i
                      class="fa fa-chevron-down"
                      aria-hidden="true"
                      style="margin-left: 2%; font-size: 1rem"
                    ></i>

                    <button onclick="copyContent(document.getElementById('seamless_tabfour-five-five_lose_req').innerHTML)" class="btn btn-info waves-effect waves-light">Copy to clipboard</button>
                  </div>
                </div>
                <div class="koh-faq-answer col-12">
                  <pre>
                                        <div class="copy-clipboard" style="position: absolute;width: 20px;top: 30px;right: 0;cursor:pointer">
                                            <svg style="position: absolute;width: 20px;left: -25px;" onclick="copyContent(document.getElementById('seamless_tabfour-five-five_lose_req').innerHTML)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Copy to Clipboard</title><path d="M18 6v-6h-18v18h6v6h18v-18h-6zm-12 10h-4v-14h14v4h-10v10zm16 6h-14v-14h14v14z"></path></svg>
                                        </div>
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
              </div>
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
                      >Example Request Body
                      <span style="color: red"> (กรณีถูกรางวัล)</span></b
                    >
                    <i
                      class="fa fa-chevron-down"
                      aria-hidden="true"
                      style="margin-left: 2%; font-size: 1rem"
                    ></i>

                    <button onclick="copyContent(document.getElementById('seamless_tabfour-five-five_win_req').innerHTML)" class="btn btn-info waves-effect waves-light">Copy to clipboard</button>
                  </div>
                </div>
                <div class="koh-faq-answer col-12">
                  <pre>
                                        <div class="copy-clipboard" style="position: absolute;width: 20px;top: 30px;right: 0;cursor:pointer">
                                            <svg style="position: absolute;width: 20px;left: -25px;" onclick="copyContent(document.getElementById('seamless_tabfour-five-five_win_req').innerHTML)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Copy to Clipboard</title><path d="M18 6v-6h-18v18h6v6h18v-18h-6zm-12 10h-4v-14h14v4h-10v10zm16 6h-14v-14h14v14z"></path></svg>
                                        </div>
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
              </div>
            </div>
          </div> -->
          <div class="form-group col-12 ex">
            <div
              ><b style="color: #19a17a !important">Response Body</b></div
            >
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
                      style="width: 20%"
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
            <div
              ><b style="color: #19a17a !important"
                >Service Response Code</b
              ></div
            >
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
                      style="width: 20%"
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
                    <td class="bRight">51101</td>
                    <td>Duplicate Transaction (no return).</td>
                  </tr>
                  <tr>
                    <td class="bRight">911009</td>
                    <td>Bad parameters.</td>
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
                      set-lan="text:Example Service Respond Code"
                      >Example Service Respond Code</b
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

        <div class="col-12" id="tab15">
          <div
            ><b style="color: #19a17a !important"
              >4.5.6
              <span style="padding-left: 3px" id="Seamless_UserPlaceReToRunning"
                >UserPlaceReToRunning</span
              ></b
            ></div
          >
        </div>

        <div class="btn-toolbar mb-3" role="toolbar">
          <div class="form-group col-12">
            <label set-lan="html:356">
              When a player places a bet, the Pretty Gaming system sends a
              request UserPayTips to the partner's system. The request will be
              timed out after 4 seconds and PlaceBetCancel will be sent.</label
            >
          </div>
          <div class="form-group col-12 ex">
            <div
              ><b style="color: #19a17a !important" set-lan="text:Request Body"
                >Request Body</b
              >
            </div>
          </div>

          <div class="form-group col-12">
            <div class="table-wrapper">
              <table
                class="table table-borderless table-striped"
                id="DataTable356A"
              >
                <thead class="rgba-green-slight">
                  <tr>
                    <th
                      style="width: 20%"
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
                    <td class="bRight">Fixed value"UserPlaceReToRunning"</td>
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
                    <td class="bRight">betKey</td>
                    <td class="bRight">Number</td>
                    <td class="bRight">User bet number record key.</td>
                  </tr>
                  <tr>
                    <td class="bRight">betId</td>
                    <td class="bRight">Number</td>
                    <td class="bRight">Bet id of bet position.</td>
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
                    <td class="bRight">betNumber</td>
                    <td class="bRight">Number</td>
                    <td class="bRight">User bet number.</td>
                  </tr>
                  <tr>
                    <td class="bRight">betStatus</td>
                    <td class="bRight">String</td>
                    <td class="bRight">
                      Status of bet data(Pending, True, False, Cancel).
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
                    <button onclick="copyContent(document.getElementById('seamless_tabfour-five-six_req').innerHTML)" class="btn btn-info waves-effect waves-light">Copy to clipboard</button>
                  </div>
                </div>
                <div class="koh-faq-answer col-12">
                  <pre>
                                        <div class="copy-clipboard" style="position: absolute;width: 20px;top: 30px;right: 0;cursor:pointer">
                                            <svg style="position: absolute;width: 20px;left: -25px;" onclick="copyContent(document.getElementById('seamless_tabfour-five-six_req').innerHTML)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Copy to Clipboard</title><path d="M18 6v-6h-18v18h6v6h18v-18h-6zm-12 10h-4v-14h14v4h-10v10zm16 6h-14v-14h14v14z"></path></svg>
                                        </div>
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
              </div>
            </div>
          </div> -->
          <div class="form-group col-12 ex">
            <div
              ><b style="color: #19a17a !important">Response Body</b></div
            >
          </div>

          <div class="form-group col-12">
            <div class="table-wrapper">
              <table
                class="table table-borderless table-striped"
                id="DataTable356B"
              >
                <thead class="rgba-green-slight">
                  <tr>
                    <th
                      style="width: 20%"
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
            <div
              ><b style="color: #19a17a !important"
                >Service Response Code</b
              ></div
            >
          </div>

          <div class="form-group col-12">
            <div class="table-wrapper">
              <table
                class="table table-borderless table-striped"
                id="DataTable356C"
              >
                <thead class="rgba-green-slight">
                  <tr>
                    <th
                      style="width: 20%"
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
                    <td class="bRight">51101</td>
                    <td>Duplicate Transaction (no return).</td>
                  </tr>
                  <tr>
                    <td class="bRight">911008</td>
                    <td>Player not found.</td>
                  </tr>
                  <tr>
                    <td class="bRight">911009</td>
                    <td>Bad parameters.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="koh-tab-content col-12">
            <div class="koh-tab-content-body">
              <div class="koh-faq form-group">
                <div class="koh-faq-question form-group ex">
                  <div class="Point">
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
                  </div>
                </div>
                <!-- <div class="koh-faq-answer col-12">
                  <div
                    class="copy-clipboard"
                    style="
                      position: absolute;
                      width: 20px;
                      top: 8px;
                      right: 0;
                      cursor: pointer;
                    "
                  >
                    <svg style="position: absolute;width: 20px;left: -25px;" onclick="copyContent(document.getElementById('seamless_tabfour-six-four_two_ser').innerHTML)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                            <title>Copy to Clipboard</title>
                                            <path d="M18 6v-6h-18v18h6v6h18v-18h-6zm-12 10h-4v-14h14v4h-10v10zm16 6h-14v-14h14v14z"></path>
                                        </svg>
                  </div>
                  <pre><code id="352B" style="border-radius: 0.375rem;" class="hljs json">{
    <span class="hljs-attr">"code"</span>: <span class="hljs-number">0</span>
}</code></pre>
                </div> -->


              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="box-all-content">
        <div style="position: sticky; top: 0px">
          <!-- <div > -->
          <BoxSem454 />
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
