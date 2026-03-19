<!-- Please remove this file from your project -->
<template>
  <div>
    <div class="box-tran" style="display: flex">
      <div class="box-all">
        <div class="col-12" id="tab7">
          <div>
            <h1>
              <b style="color: #19a17a !important"
                >5.9
                <span style="padding-left: 3px" id="tran_withdrawal">
                  Member Report Detailticket</span
                ></b
              >
            </h1>
          </div>
        </div>

        <div class="btn-toolbar mb-3" role="toolbar">
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
                id="DataTable47A"
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
                    <td class="bRight">ticket_id</td>
                    <td class="bRight">number</td>
                    <td>Ticket code to view bill details (Ticket ID)</td>
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
              <table
                class="table table-borderless table-striped"
                id="DataTable47B"
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
                    <td class="bRight">number</td>
                    <td>Status code, e.g. 200</td>
                  </tr>

                  <tr>
                    <td class="bRight">msg</td>
                    <td class="bRight">object</td>
                    <td>System status message object</td>
                  </tr>

                  <tr>
                    <td class="bRight">en</td>
                    <td class="bRight">string</td>
                    <td>Status message in English, e.g. "Success"</td>
                  </tr>

                  <tr>
                    <td class="bRight">th</td>
                    <td class="bRight">string</td>
                    <td>Status message in Thai, e.g. "สำเร็จ"</td>
                  </tr>

                  <tr>
                    <td class="bRight">data</td>
                    <td class="bRight">object</td>
                    <td>Bill detail data</td>
                  </tr>

                  <tr>
                    <td class="bRight">total</td>
                    <td class="bRight">number</td>
                    <td>Total amount of the bill</td>
                  </tr>

                  <tr>
                    <td class="bRight">comment</td>
                    <td class="bRight">string</td>
                    <td>Bill remark (may be empty)</td>
                  </tr>

                  <tr>
                    <td class="bRight">type</td>
                    <td class="bRight">string</td>
                    <td>Lottery type, e.g. thailotto</td>
                  </tr>

                  <tr>
                    <td class="bRight">round</td>
                    <td class="bRight">number</td>
                    <td>Lottery round number</td>
                  </tr>

                  <tr>
                    <td class="bRight">date_time</td>
                    <td class="bRight">string</td>
                    <td>Lottery round date</td>
                  </tr>

                  <tr>
                    <td class="bRight">currency</td>
                    <td class="bRight">string</td>
                    <td>Currency code, e.g. usd</td>
                  </tr>

                  <tr>
                    <td class="bRight">created_date</td>
                    <td class="bRight">string</td>
                    <td>Bill creation date</td>
                  </tr>

                  <tr>
                    <td class="bRight">result</td>
                    <td class="bRight">string / null</td>
                    <td>Lottery result (null if not yet announced)</td>
                  </tr>

                  <tr>
                    <td class="bRight">draw_id</td>
                    <td class="bRight">number</td>
                    <td>Draw ID</td>
                  </tr>

                  <tr>
                    <td class="bRight">draw_date</td>
                    <td class="bRight">string</td>
                    <td>Draw date</td>
                  </tr>

                  <tr>
                    <td class="bRight">cancel_status</td>
                    <td class="bRight">boolean</td>
                    <td>Cancellation status (true / false)</td>
                  </tr>

                  <tr>
                    <td class="bRight">bet_data</td>
                    <td class="bRight">array</td>
                    <td>List of bet items in the bill</td>
                  </tr>

                  <tr>
                    <td class="bRight">bet_id</td>
                    <td class="bRight">string</td>
                    <td>Bet item ID</td>
                  </tr>

                  <tr>
                    <td class="bRight">bet_status</td>
                    <td class="bRight">string</td>
                    <td>Status of the bet, e.g. pending, win, lose</td>
                  </tr>

                  <tr>
                    <td class="bRight">number</td>
                    <td class="bRight">string</td>
                    <td>Bet number</td>
                  </tr>

                  <tr>
                    <td class="bRight">lotto_type</td>
                    <td class="bRight">string</td>
                    <td>Bet type, e.g. bottom2, top3</td>
                  </tr>

                  <tr>
                    <td class="bRight">amount</td>
                    <td class="bRight">number</td>
                    <td>Bet amount</td>
                  </tr>

                  <tr>
                    <td class="bRight">total</td>
                    <td class="bRight">number</td>
                    <td>Net win/loss amount of the bet</td>
                  </tr>

                  <tr>
                    <td class="bRight">rate</td>
                    <td class="bRight">number</td>
                    <td>Payout rate</td>
                  </tr>

                  <tr>
                    <td class="bRight">discount</td>
                    <td class="bRight">number</td>
                    <td>Discount amount</td>
                  </tr>

                  <tr>
                    <td class="bRight">cancel_status</td>
                    <td class="bRight">boolean</td>
                    <td>Cancellation status (true / false)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="form-group col-12 ex">
            <div>
              <b style="color: #19a17a !important"
                >Example Service Response Code</b
              >
            </div>
          </div>

          <div class="form-group col-12">
            <div class="table-wrapper">
              <table
                class="table table-borderless table-striped"
                id="DataTable47C"
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
        <div style="position: sticky; top: 0px"><Boxtran59 /></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ComTransfer",
};
</script>
