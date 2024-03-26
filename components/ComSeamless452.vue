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

        <div class="col-12" id="tabSixs" style="left: 10px; width: 90%">
          <div>
            <b
              style="color: #19a17a !important"
              set-lan="text:4.5.2 GetUserBalance"
              >4.5.2
              <span style="padding-left: 3px" id="Seamless_GetUserBalance"
                >GetUserBalance</span
              ></b
            >
          </div>
        </div>

        <div class="btn-toolbar mb-3" role="toolbar">
          <div class="form-group col-12">
            <label set-lan="html:When a player">
              เมื่อผู้เล่นเข้าสู่หน้าแรกหรือหน้าอื่นๆ ของระบบ Askmelotto
              ระบบจะส่งคำขอเพื่อรับยอดเงินคงเหลือของผู้เล่นจริง</label
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
                id="DataTable351"
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
                    <td class="bRight">Fixed value"GetUserBalance"</td>
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
                    <td class="bRight">playerUsername</td>
                    <td class="bRight">String</td>
                    <td class="bRight">Player username from partner system.</td>
                  </tr>
                  <tr>
                    <td class="bRight">playerApiUsername</td>
                    <td class="bRight">String</td>
                    <td class="bRight">
                      Player username from Askmelotto system.
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
                    <button onclick="copyContent(document.getElementById('seamless_tabfour-five-two_req').innerHTML)" class="btn btn-info waves-effect waves-light">Copy to clipboard</button>
                  </div>
                </div>
                <div class="koh-faq-answer col-12">
                  <pre>
                                        <div class="copy-clipboard" style="position: absolute;width: 20px;top: 30px;right: 0;cursor:pointer">
                                            <svg style="position: absolute;width: 20px;left: -25px;" onclick="copyContent(document.getElementById('seamless_tabfour-five-two_req').innerHTML)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Copy to Clipboard</title><path d="M18 6v-6h-18v18h6v6h18v-18h-6zm-12 10h-4v-14h14v4h-10v10zm16 6h-14v-14h14v14z"></path></svg>
                                        </div>
                                        <code id="351A" style="border-radius: 0.375rem;" class="hljs json">{
    <span class="hljs-attr">"service"</span>: <span class="hljs-string">"GetUserBalance"</span>,
    <span class="hljs-attr">"data"</span>: {
        <span class="hljs-attr">"playerApiId"</span>: <span class="hljs-string">"21f7d4c971036eea30d1db483d01f131faada79fa94d52560c9f2c2b56a6f8877b66ae2c624f89442c938db064d8179f"</span>,
        <span class="hljs-attr">"playerApiUsername"</span>: <span class="hljs-string">"testa0alottoviptest2@comptestseamless"</span>,
        <span class="hljs-attr">"playerUsername"</span>: <span class="hljs-string">"testa0alottoviptest2"</span>
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
                  <tr>
                    <td class="bRight">balance</td>
                    <td class="bRight">Number</td>
                    <td class="bRight">Total balance.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="form-group col-12 ex">
            <div>
              <b style="color: #19a17a !important">Service Response Code</b>
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
          <!-- <div class="koh-tab-content col-12">
            <div class="koh-tab-content-body">
              <div class="koh-faq form-group">
                <div class="koh-faq-question form-group ex">
                  <div class="Point"
                    ><b style="color: #19a17a !important"
                      >Example Service Respond Code</b
                    ><i
                      class="fa fa-chevron-down"
                      aria-hidden="true"
                      style="margin-left: 2%; font-size: 1rem"
                    ></i
                  ></div>
                </div>
                <div class="koh-faq-answer col-12">
                  <pre>
                                    <div class="copy-clipboard" style="position: absolute;width: 20px;top: 10px;right: 0;cursor:pointer">
                                            <svg style="position: absolute;width: 20px;left: -25px;" onclick="copyContent(document.getElementById('seamless_tabfour-six-four_one_ser').innerHTML)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Copy to Clipboard</title><path d="M18 6v-6h-18v18h6v6h18v-18h-6zm-12 10h-4v-14h14v4h-10v10zm16 6h-14v-14h14v14z"></path></svg>
                                        </div>
                                        <code id="351B" style="border-radius: 0.375rem;" class="hljs json">{
    <span class="hljs-attr">"code"</span>: <span class="hljs-number">0</span>,
    <span class="hljs-attr">"balance"</span>: <span class="hljs-number">880</span>
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
          <BoxSem452 />
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
