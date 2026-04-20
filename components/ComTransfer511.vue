<!-- Please remove this file from your project -->
<template>
  <div>
    <div class="box-tran" style="display: flex">
      <div class="box-all">
        <div class="col-12" id="tab7">
          <div>
            <h1>
              <b style="color: #19a17a !important">5.11
                <span style="padding-left: 3px" id="tran_withdrawal">
                  Deposit Withdraw History By TransId</span></b>
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
                    <td>Agent account, account length is restricted to 36 characters at most.</td>
                  </tr>

                  <tr>
                    <td class="bRight">agentApiKey</td>
                    <td class="bRight">string</td>
                    <td>System generated key ID after creating agent.</td>
                  </tr>

                  <tr>
                    <td class="bRight">transId</td>
                    <td class="bRight">string</td>
                    <td>Unique transaction ID from your system (Deposit / Withdrawal).</td>
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
                    <td class="bRight">playerApiId</td>
                    <td class="bRight">string</td>
                    <td>Player ID from partner system.</td>
                  </tr>

                  <tr>
                    <td class="bRight">playerApiUsername</td>
                    <td class="bRight">string</td>
                    <td>Player username from partner system.</td>
                  </tr>

                  <tr>
                    <td class="bRight">playerUsername</td>
                    <td class="bRight">string</td>
                    <td>Player username from Askmelotto system.</td>
                  </tr>

                  <tr>
                    <td class="bRight">transId</td>
                    <td class="bRight">string</td>
                    <td>Unique transaction ID from your system (Deposit / Withdrawal).</td>
                  </tr>

                  <tr>
                    <td class="bRight">transferAmount</td>
                    <td class="bRight">number</td>
                    <td>Transaction amount.</td>
                  </tr>

                  <tr>
                    <td class="bRight">transferDate</td>
                    <td class="bRight">date</td>
                    <td>Transaction date time.</td>
                  </tr>

                  <tr>
                    <td class="bRight">type</td>
                    <td class="bRight">string</td>
                    <td>Transaction type (DEPOSIT / WITHDRAW).</td>
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
                    <td class="bRight">0</td>
                    <td class="bRight">success</td>
                    <td>Request completed successfully.</td>
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
                    <td class="bRight">71020</td>
                    <td class="bRight">error</td>
                    <td>Invalid transId.</td>
                  </tr>

                  <tr>
                    <td class="bRight">71032</td>
                    <td class="bRight">error</td>
                    <td>Missing field 'transId'.</td>
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
          <Boxtran511 />
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
