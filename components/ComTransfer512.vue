<!-- Please remove this file from your project -->
<template>
  <div>
    <div class="box-tran" style="display: flex">
      <div class="box-all">
        <div class="col-12" id="tab7">
          <div>
            <h1>
              <b style="color: #19a17a !important">5.12
                <span style="padding-left: 3px" id="tran_withdrawal">
                  Deposit Withdraw History By TransId</span></b>
            </h1>
            <p>{{ $t("tran5111") }}</p>
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
                    <td class="bRight">String</td>
                    <td>{{ $t("tran511_req_agentUsername") }}</td>
                  </tr>

                  <tr>
                    <td class="bRight">agentApiKey</td>
                    <td class="bRight">String</td>
                    <td>{{ $t("tran511_req_agentApiKey") }}</td>
                  </tr>

                  <tr>
                    <td class="bRight">transId</td>
                    <td class="bRight">String</td>
                    <td>{{ $t("tran511_req_transId") }}</td>
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
                    <td>{{ $t("tran511_res_code") }}</td>
                  </tr>

                  <tr>
                    <td class="bRight">data</td>
                    <td class="bRight">Object</td>
                    <td>{{ $t("tran511_res_data") }}</td>
                  </tr>

                  <tr>
                    <td class="bRight">data.playerApiId</td>
                    <td class="bRight">String</td>
                    <td>{{ $t("tran511_res_data_playerApiId") }}</td>
                  </tr>

                  <tr>
                    <td class="bRight">data.playerApiUsername</td>
                    <td class="bRight">String</td>
                    <td>{{ $t("tran511_res_data_playerApiUsername") }}</td>
                  </tr>

                  <tr>
                    <td class="bRight">data.playerUsername</td>
                    <td class="bRight">String</td>
                    <td>{{ $t("tran511_res_data_playerUsername") }}</td>
                  </tr>

                  <tr>
                    <td class="bRight">data.transId</td>
                    <td class="bRight">String</td>
                    <td>{{ $t("tran511_res_data_transId") }}</td>
                  </tr>

                  <tr>
                    <td class="bRight">data.transferAmount</td>
                    <td class="bRight">Number</td>
                    <td>{{ $t("tran511_res_data_transferAmount") }}</td>
                  </tr>

                  <tr>
                    <td class="bRight">data.transferDate</td>
                    <td class="bRight">String</td>
                    <td>{{ $t("tran511_res_data_transferDate") }}</td>
                  </tr>

                  <tr>
                    <td class="bRight">data.type</td>
                    <td class="bRight">String</td>
                    <td>{{ $t("tran511_res_data_type") }}</td>
                  </tr>

                  <tr>
                    <td class="bRight">msg</td>
                    <td class="bRight">Object</td>
                    <td>{{ $t("tran511_res_msg") }}</td>
                  </tr>

                  <tr>
                    <td class="bRight">msg.en</td>
                    <td class="bRight">String</td>
                    <td>{{ $t("tran511_res_msg_en") }}</td>
                  </tr>

                  <tr>
                    <td class="bRight">msg.th</td>
                    <td class="bRight">String</td>
                    <td>{{ $t("tran511_res_msg_th") }}</td>
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
                    <td class="bRight">71007</td>
                    <td>{{ $t("tran55_err_71007") }}</td>
                  </tr>

                  <tr>
                    <td class="bRight">71010</td>
                    <td>{{ $t("tran58_err_71010") }}</td>
                  </tr>

                  <tr>
                    <td class="bRight">71032</td>
                    <td>{{ $t("tran511_err_71032") }}</td>
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
          <Boxtran512 />
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
