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
                  Member Report List</span></b>
            </h1>
            <p style="margin-bottom: 0">{{ $t("tran581") }}</p>
            <p style="margin-top: 0">{{ $t("tran582") }}</p>
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
                {Url}/apiRoute/api/withdraw
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
                    <td class="bRight">String</td>
                    <td>{{ $t("tran58_req_agentUsername") }}</td>
                  </tr>

                  <tr>
                    <td class="bRight">agentApiKey</td>
                    <td class="bRight">String</td>
                    <td>{{ $t("tran58_req_agentApiKey") }}</td>
                  </tr>

                  <tr>
                    <td class="bRight">playerUserName</td>
                    <td class="bRight">String</td>
                    <td>{{ $t("tran58_req_playerUserName") }}</td>
                  </tr>

                  <tr>
                    <td class="bRight">currency</td>
                    <td class="bRight">String</td>
                    <td>{{ $t("tran58_req_currency") }}</td>
                  </tr>
                  <tr>
                    <td class="bRight">startDate</td>
                    <td class="bRight">String</td>
                    <td>{{ $t("tran58_req_startDate") }}</td>
                  </tr>
                  <tr>
                    <td class="bRight">endDate</td>
                    <td class="bRight">String</td>
                    <td>{{ $t("tran58_req_endDate") }}</td>
                  </tr>
                  <tr>
                    <td class="bRight">isUpdate</td>
                    <td class="bRight">Boolean</td>
                    <td>{{ $t("tran58_req_isUpdate") }}</td>
                  </tr>
                  <tr>
                    <td class="bRight">page</td>
                    <td class="bRight">Number</td>
                    <td>{{ $t("tran58_req_page") }}</td>
                  </tr>
                  <tr>
                    <td class="bRight">limit</td>
                    <td class="bRight">Number</td>
                    <td>{{ $t("tran58_req_limit") }}</td>
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
                    <td class="bRight">Number</td>
                    <td>{{ $t("tran58_res_code") }}</td>
                  </tr>
                  <tr>
                    <td class="bRight">data</td>
                    <td class="bRight">Object</td>
                    <td>{{ $t("tran58_res_data") }}</td>
                  </tr>
                  <tr>
                    <td class="bRight">data.agentUsername</td>
                    <td class="bRight">String</td>
                    <td>{{ $t("tran58_res_data_agentUsername") }}</td>
                  </tr>

                  <tr>
                    <td class="bRight">data.startDate</td>
                    <td class="bRight">String</td>
                    <td>{{ $t("tran58_res_data_startDate") }}</td>
                  </tr>

                  <tr>
                    <td class="bRight">data.endDate</td>
                    <td class="bRight">String</td>
                    <td>{{ $t("tran58_res_data_endDate") }}</td>
                  </tr>

                  <tr>
                    <td class="bRight">data.result</td>
                    <td class="bRight">Object</td>
                    <td>{{ $t("tran58_res_data_result") }}</td>
                  </tr>

                  <tr>
                    <td class="bRight">data.result.docs</td>
                    <td class="bRight">Array&lt;Object&gt;</td>
                    <td>{{ $t("tran58_res_data_result_docs") }}</td>
                  </tr>

                  <tr>
                    <td class="bRight">docs[].no</td>
                    <td class="bRight">Number</td>
                    <td>{{ $t("tran58_res_docs_no") }}</td>
                  </tr>

                  <tr>
                    <td class="bRight">docs[].playerApiId</td>
                    <td class="bRight">String</td>
                    <td>{{ $t("tran58_res_docs_playerApiId") }}</td>
                  </tr>

                  <tr>
                    <td class="bRight">docs[].playerUsername</td>
                    <td class="bRight">String</td>
                    <td>{{ $t("tran58_res_docs_playerUsername") }}</td>
                  </tr>

                  <tr>
                    <td class="bRight">docs[].datetime</td>
                    <td class="bRight">String</td>
                    <td>{{ $t("tran58_res_docs_datetime") }}</td>
                  </tr>

                  <tr>
                    <td class="bRight">docs[].updatedAt</td>
                    <td class="bRight">String</td>
                    <td>{{ $t("tran58_res_docs_updatedAt") }}</td>
                  </tr>

                  <tr>
                    <td class="bRight">docs[].ticketId</td>
                    <td class="bRight">Number</td>
                    <td>{{ $t("tran58_res_docs_ticketId") }}</td>
                  </tr>

                  <tr>
                    <td class="bRight">docs[].type</td>
                    <td class="bRight">String</td>
                    <td>{{ $t("tran58_res_docs_type") }}</td>
                  </tr>

                  <tr>
                    <td class="bRight">docs[].round</td>
                    <td class="bRight">Number</td>
                    <td>{{ $t("tran58_res_docs_round") }}</td>
                  </tr>

                  <tr>
                    <td class="bRight">docs[].goverment</td>
                    <td class="bRight">Boolean</td>
                    <td>{{ $t("tran58_res_docs_goverment") }}</td>
                  </tr>

                  <tr>
                    <td class="bRight">docs[].totalBetAmount</td>
                    <td class="bRight">Number</td>
                    <td>{{ $t("tran58_res_docs_totalBetAmount") }}</td>
                  </tr>

                  <tr>
                    <td class="bRight">docs[].discount</td>
                    <td class="bRight">Number</td>
                    <td>{{ $t("tran58_res_docs_discount") }}</td>
                  </tr>

                  <tr>
                    <td class="bRight">docs[].totalPayOutAmount</td>
                    <td class="bRight">Number</td>
                    <td>{{ $t("tran58_res_docs_totalPayOutAmount") }}</td>
                  </tr>

                  <tr>
                    <td class="bRight">docs[].totalBalanceAmount</td>
                    <td class="bRight">Number</td>
                    <td>{{ $t("tran58_res_docs_totalBalanceAmount") }}</td>
                  </tr>

                  <tr>
                    <td class="bRight">docs[].status</td>
                    <td class="bRight">String</td>
                    <td>{{ $t("tran58_res_docs_status") }}</td>
                  </tr>

                  <tr>
                    <td class="bRight">docs[].drawResult</td>
                    <td class="bRight">Object/Null</td>
                    <td>{{ $t("tran58_res_docs_drawResult") }}</td>
                  </tr>

                  <tr>
                    <td class="bRight">docs[].txtList</td>
                    <td class="bRight">Array&lt;Object&gt;</td>
                    <td>{{ $t("tran58_res_docs_txtList") }}</td>
                  </tr>

                  <tr>
                    <td class="bRight">txtList[].betKey</td>
                    <td class="bRight">String</td>
                    <td>{{ $t("tran58_res_txtList_betKey") }}</td>
                  </tr>

                  <tr>
                    <td class="bRight">txtList[].betId</td>
                    <td class="bRight">String</td>
                    <td>{{ $t("tran58_res_txtList_betId") }}</td>
                  </tr>

                  <tr>
                    <td class="bRight">txtList[].betType</td>
                    <td class="bRight">String</td>
                    <td>{{ $t("tran58_res_txtList_betType") }}</td>
                  </tr>

                  <tr>
                    <td class="bRight">txtList[].betNumber</td>
                    <td class="bRight">String</td>
                    <td>{{ $t("tran58_res_txtList_betNumber") }}</td>
                  </tr>

                  <tr>
                    <td class="bRight">txtList[].betStatus</td>
                    <td class="bRight">String</td>
                    <td>{{ $t("tran58_res_txtList_betStatus") }}</td>
                  </tr>

                  <tr>
                    <td class="bRight">txtList[].betAmount</td>
                    <td class="bRight">Number</td>
                    <td>{{ $t("tran58_res_txtList_betAmount") }}</td>
                  </tr>

                  <tr>
                    <td class="bRight">txtList[].betTotal</td>
                    <td class="bRight">Number</td>
                    <td>{{ $t("tran58_res_txtList_betTotal") }}</td>
                  </tr>

                  <tr>
                    <td class="bRight">txtList[].betDiscount</td>
                    <td class="bRight">Number</td>
                    <td>{{ $t("tran58_res_txtList_betDiscount") }}</td>
                  </tr>

                  <tr>
                    <td class="bRight">txtList[].payOutRate</td>
                    <td class="bRight">Number</td>
                    <td>{{ $t("tran58_res_txtList_payOutRate") }}</td>
                  </tr>

                  <tr>
                    <td class="bRight">txtList[].payOutAmount</td>
                    <td class="bRight">Number</td>
                    <td>{{ $t("tran58_res_txtList_payOutAmount") }}</td>
                  </tr>

                  <tr>
                    <td class="bRight">txtList[].rateLevel</td>
                    <td class="bRight">Number</td>
                    <td>{{ $t("tran58_res_txtList_rateLevel") }}</td>
                  </tr>

                  <tr>
                    <td class="bRight">txtList[].rateLevelAmount</td>
                    <td class="bRight">Number</td>
                    <td>{{ $t("tran58_res_txtList_rateLevelAmount") }}</td>
                  </tr>

                  <tr>
                    <td class="bRight">txtList[].apiPt</td>
                    <td class="bRight">Number</td>
                    <td>{{ $t("tran58_res_txtList_apiPt") }}</td>
                  </tr>

                  <tr>
                    <td class="bRight">txtList[].agentPt</td>
                    <td class="bRight">Number</td>
                    <td>{{ $t("tran58_res_txtList_agentPt") }}</td>
                  </tr>

                  <tr>
                    <td class="bRight">txtList[].betResultKey</td>
                    <td class="bRight">String</td>
                    <td>{{ $t("tran58_res_txtList_betResultKey") }}</td>
                  </tr>

                  <tr>
                    <td class="bRight">data.result.totalDocs</td>
                    <td class="bRight">Number</td>
                    <td>{{ $t("tran58_res_data_result_totalDocs") }}</td>
                  </tr>

                  <tr>
                    <td class="bRight">data.result.limit</td>
                    <td class="bRight">Number</td>
                    <td>{{ $t("tran58_res_data_result_limit") }}</td>
                  </tr>

                  <tr>
                    <td class="bRight">data.result.totalPages</td>
                    <td class="bRight">Number</td>
                    <td>{{ $t("tran58_res_data_result_totalPages") }}</td>
                  </tr>

                  <tr>
                    <td class="bRight">data.result.page</td>
                    <td class="bRight">Number</td>
                    <td>{{ $t("tran58_res_data_result_page") }}</td>
                  </tr>

                  <tr>
                    <td class="bRight">data.result.hasprevPage</td>
                    <td class="bRight">Boolean</td>
                    <td>{{ $t("tran58_res_data_result_hasprevPage") }}</td>
                  </tr>

                  <tr>
                    <td class="bRight">data.result.hasnextPage</td>
                    <td class="bRight">Boolean</td>
                    <td>{{ $t("tran58_res_data_result_hasnextPage") }}</td>
                  </tr>

                  <tr>
                    <td class="bRight">data.result.prevPage</td>
                    <td class="bRight">Number/Null</td>
                    <td>{{ $t("tran58_res_data_result_prevPage") }}</td>
                  </tr>

                  <tr>
                    <td class="bRight">data.result.nextPage</td>
                    <td class="bRight">Number/Null</td>
                    <td>{{ $t("tran58_res_data_result_nextPage") }}</td>
                  </tr>

                  <tr>
                    <td class="bRight">msg</td>
                    <td class="bRight">Object</td>
                    <td>{{ $t("tran58_res_msg") }}</td>
                  </tr>

                  <tr>
                    <td class="bRight">msg.en</td>
                    <td class="bRight">String</td>
                    <td>{{ $t("tran58_res_msg_en") }}</td>
                  </tr>

                  <tr>
                    <td class="bRight">msg.th</td>
                    <td class="bRight">String</td>
                    <td>{{ $t("tran58_res_msg_th") }}</td>
                  </tr>

                </tbody>
              </table>
            </div>
          </div>
          <div class="form-group col-12 ex">
            <div>
              <b style="color: #19a17a !important">Response Code</b>
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
                    <td class="bRight">0</td>
                    <td>{{ $t("tran58_err_0") }}</td>
                  </tr>
                  <tr>
                    <td class="bRight">41001</td>
                    <td>{{ $t("tran58_err_41001") }}</td>
                  </tr>
                  <tr>
                    <td class="bRight">50301</td>
                    <td>{{ $t("tran58_err_50301") }}</td>
                  </tr>
                  <tr>
                    <td class="bRight">71001</td>
                    <td>{{ $t("tran58_err_71001") }}</td>
                  </tr>
                  <tr>
                    <td class="bRight">71002</td>
                    <td>{{ $t("tran58_err_71002") }}</td>
                  </tr>
                  <tr>
                    <td class="bRight">71010</td>
                    <td>{{ $t("tran58_err_71010") }}</td>
                  </tr>
                  <tr>
                    <td class="bRight">71014</td>
                    <td>{{ $t("tran58_err_71014") }}</td>
                  </tr>
                  <tr>
                    <td class="bRight">71022</td>
                    <td>{{ $t("tran58_err_71022") }}</td>
                  </tr>
                  <tr>
                    <td class="bRight">71023</td>
                    <td>{{ $t("tran58_err_71023") }}</td>
                  </tr>
                  <tr>
                    <td class="bRight">71401</td>
                    <td>{{ $t("tran58_err_71401") }}</td>
                  </tr>
                  <tr>
                    <td class="bRight">71402</td>
                    <td>{{ $t("tran58_err_71402") }}</td>
                  </tr>
                  <tr>
                    <td class="bRight">71403</td>
                    <td>{{ $t("tran58_err_71403") }}</td>
                  </tr>
                  <tr>
                    <td class="bRight">72004</td>
                    <td>{{ $t("tran58_err_72004") }}</td>
                  </tr>
                  <tr>
                    <td class="bRight">75401</td>
                    <td>{{ $t("tran58_err_75401") }}</td>
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
