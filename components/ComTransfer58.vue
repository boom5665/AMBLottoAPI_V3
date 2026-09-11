<!-- Please remove this file from your project -->
<template>
  <div>
    <div class="box-tran" style="display: flex">
      <div class="box-all">
        <div class="col-12" id="tab7">
          <div>
            <h1>
              <b style="color: #19a17a !important">5.8
                <span style="padding-left: 3px" id="tran_outstanding">
                  Outstanding</span></b>
            </h1>
            <p>{{ $t("tranOut1") }}</p>
          </div>
        </div>

        <div class="btn-toolbar mb-3" role="toolbar">
          <div class="form-group col-12 ex">
            <div><b style="color: #19a17a !important">Method, URL, Headers</b></div>
          </div>

          <div class="form-group col-12">
            <div class="table-wrapper">
              <table class="table table-borderless table-striped" id="DataTableOut0">
                <thead class="rgba-green-slight">
                  <tr>
                    <th style="width: 26%" class="thcolor bRight txtCenter">Item</th>
                    <th class="thcolor txtCenter">Detail</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="bRight">Method</td>
                    <td>POST</td>
                  </tr>
                  <tr>
                    <td class="bRight">URL</td>
                    <td>{Url}/apiRoute/api/outstanding</td>
                  </tr>
                  <tr>
                    <td class="bRight">Headers</td>
                    <td>Content-Type: application/json</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div class="form-group col-12 ex">
            <div>
              <b style="color: #19a17a !important" set-lan="text:Request Body">Request Body</b>
            </div>
          </div>

          <div class="form-group col-12">
            <div class="table-wrapper">
              <table class="table table-borderless table-striped" id="DataTableOut1">
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
                    <td>{{ $t("tranOut_req_agentUsername") }}</td>
                  </tr>
                  <tr>
                    <td class="bRight">agentApiKey</td>
                    <td class="bRight">String</td>
                    <td>{{ $t("tranOut_req_agentApiKey") }}</td>
                  </tr>
                  <tr>
                    <td class="bRight">playerUsername</td>
                    <td class="bRight">String</td>
                    <td>{{ $t("tranOut_req_playerUsername") }}</td>
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
              <table class="table table-borderless table-striped" id="DataTableOut2">
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
                    <td>{{ $t("tranOut_res_code") }}</td>
                  </tr>
                  <tr>
                    <td class="bRight">data</td>
                    <td class="bRight">Object</td>
                    <td>{{ $t("tranOut_res_data") }}</td>
                  </tr>
                  <tr>
                    <td class="bRight">data.totalOutstanding</td>
                    <td class="bRight">Number</td>
                    <td>{{ $t("tranOut_res_data_totalOutstanding") }}</td>
                  </tr>
                  <tr>
                    <td class="bRight">data.currency</td>
                    <td class="bRight">String</td>
                    <td>{{ $t("tranOut_res_data_currency") }}</td>
                  </tr>
                  <tr>
                    <td class="bRight">data.list</td>
                    <td class="bRight">Object</td>
                    <td>{{ $t("tranOut_res_data_list") }}</td>
                  </tr>
                  <tr>
                    <td class="bRight">data.list.lotto</td>
                    <td class="bRight">Array&lt;Object&gt;</td>
                    <td>{{ $t("tranOut_res_data_list_lotto") }}</td>
                  </tr>
                  <tr>
                    <td class="bRight">data.list.lotto[].gameId</td>
                    <td class="bRight">String</td>
                    <td>{{ $t("tranOut_res_lotto_gameId") }}</td>
                  </tr>
                  <tr>
                    <td class="bRight">data.list.lotto[].outstanding</td>
                    <td class="bRight">Number</td>
                    <td>{{ $t("tranOut_res_lotto_outstanding") }}</td>
                  </tr>
                  <tr>
                    <td class="bRight">msg</td>
                    <td class="bRight">Object</td>
                    <td>{{ $t("tranOut_res_msg") }}</td>
                  </tr>
                  <tr>
                    <td class="bRight">msg.th</td>
                    <td class="bRight">String</td>
                    <td>{{ $t("tranOut_res_msg_th") }}</td>
                  </tr>
                  <tr>
                    <td class="bRight">msg.en</td>
                    <td class="bRight">String</td>
                    <td>{{ $t("tranOut_res_msg_en") }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div class="form-group col-12 ex">
            <div>
              <b style="color: #cfa137 !important">{{ $t("tranOut_note") }}</b>
            </div>
          </div>

          <div class="form-group col-12 ex">
            <div><b style="color: #19a17a !important">Response Code</b></div>
          </div>

          <div class="form-group col-12">
            <div class="table-wrapper">
              <table class="table table-borderless table-striped" id="DataTableOut3">
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
                    <td>{{ $t("tranOut_err_0") }}</td>
                  </tr>
                  <tr>
                    <td class="bRight">41001</td>
                    <td>{{ $t("tranOut_err_41001") }}</td>
                  </tr>
                  <tr>
                    <td class="bRight">71001</td>
                    <td>{{ $t("tranOut_err_71001") }}</td>
                  </tr>
                  <tr>
                    <td class="bRight">71002</td>
                    <td>{{ $t("tranOut_err_71002") }}</td>
                  </tr>
                  <tr>
                    <td class="bRight">71004</td>
                    <td>{{ $t("tranOut_err_71004") }}</td>
                  </tr>
                  <tr>
                    <td class="bRight">71010</td>
                    <td>{{ $t("tranOut_err_71010") }}</td>
                  </tr>
                  <tr>
                    <td class="bRight">71014</td>
                    <td>{{ $t("tranOut_err_71014") }}</td>
                  </tr>
                  <tr>
                    <td class="bRight">72004</td>
                    <td>{{ $t("tranOut_err_72004") }}</td>
                  </tr>
                  <tr>
                    <td class="bRight">75501</td>
                    <td>{{ $t("tranOut_err_75501") }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
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
