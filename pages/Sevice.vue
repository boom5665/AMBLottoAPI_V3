<!-- Please remove this file from your project -->
<template>
  <div class="col-12">
    <div class="box-Sem">
      <div class="box-Sev">
        <h1>
          <b style="color: #19a17a !important"
            >6.
            <span style="padding-left: 3px" id="ser_Service_Respond_Code"
              >Example Service Response Code</span
            ></b
          >
        </h1>

        <div class="col-12" id="tabOne" style="margin-bottom: 10px">
          <div>
            <b style="color: #19a17a !important"
              >6.1
              <span style="padding-left: 3px" id="ser_Member_Authen"
                >Member Authen</span
              ></b
            >
          </div>
        </div>
        <div class="btn-toolbar mb-3" role="toolbar">
          <div class="form-group col-12">
            <div class="table-wrapper marTop">
              <table class="table table-borderless table-striped">
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
                      set-lan="html:Description"
                      class="thcolor bRight txtCenter"
                    >
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="bRight">61001</td>
                    <td>Invalid UserAgent or ApiKey</td>
                  </tr>
                  <tr>
                    <td class="bRight">61002</td>
                    <td>IP address is not allowed.</td>
                  </tr>
                  <tr>
                    <td class="bRight">61003</td>
                    <td>request error Player not found.</td>
                  </tr>
                  <tr>
                    <td class="bRight">61004</td>
                    <td>
                      request error callback url requst error destination error
                    </td>
                  </tr>
                  <tr>
                    <td class="bRight">61005</td>
                    <td>(Other error)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div class="col-12" id="tabTwo" style="margin-bottom: 10px">
          <div>
            <b style="color: #19a17a !important"
              >6.2
              <span style="padding-left: 3px" id="ser_Service_response"
                >Service response</span
              ></b
            >
          </div>
        </div>
        <div class="btn-toolbar mb-3" role="toolbar">
          <div class="form-group col-12">
            <div class="table-wrapper marTop">
              <table class="table table-borderless table-striped">
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
                      set-lan="html:Description"
                      class="thcolor bRight txtCenter"
                    >
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="bRight">0</td>
                    <td>success</td>
                  </tr>
                  <tr>
                    <td class="bRight">41001</td>
                    <td>Error Request body is not an object.</td>
                  </tr>
                  <tr>
                    <td class="bRight">41002</td>
                    <td>
                      invalid input format 'balance', 'page', 'limit', field.
                    </td>
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
                    <td class="bRight">71001</td>
                    <td>missing field 'agentUsername'.</td>
                  </tr>
                  <tr>
                    <td class="bRight">71002</td>
                    <td>missing field 'playerUsername'.</td>
                  </tr>
                  <tr>
                    <td class="bRight">71003</td>
                    <td>Invalid agentUsername or apiKey.</td>
                  </tr>
                  <tr>
                    <td class="bRight">71004</td>
                    <td>missing field 'agentApiKey'.</td>
                  </tr>
                  <tr>
                    <td class="bRight">71005</td>
                    <td>
                      playerUsername must be between 4 and 24 characters long.
                    </td>
                  </tr>
                  <tr>
                    <td class="bRight">71006</td>
                    <td>
                      username must not contain any special characters and can
                      only contain letters a-z and numbers 0-9.
                    </td>
                  </tr>
                  <tr>
                    <td class="bRight">71007</td>
                    <td>missing field 'transId'.</td>
                  </tr>
                  <tr>
                    <td class="bRight">71008</td>
                    <td>
                      System detects double request bets. Please wait 1 minute
                      to proceed again.
                    </td>
                  </tr>
                  <tr>
                    <td class="bRight">71010</td>
                    <td>invalid ApiKey or UserAgent</td>
                  </tr>
                  <tr>
                    <td class="bRight">71011</td>
                    <td>invalid lottotype</td>
                  </tr>
                  <tr>
                    <td class="bRight">71012</td>
                    <td>login fail</td>
                  </tr>
                  <tr>
                    <td class="bRight">71014</td>
                    <td>invalid UserMember</td>
                  </tr>
                  <tr>
                    <td class="bRight">71016</td>
                    <td>Can request up to 15 times per minute.</td>
                  </tr>
                  <tr>
                    <td class="bRight">71017</td>
                    <td>transId has already existed</td>
                  </tr>
                  <tr>
                    <td class="bRight">71019</td>
                    <td>invalid transId</td>
                  </tr>
                  <tr>
                    <td class="bRight">71020</td>
                    <td>invalid referenceid</td>
                  </tr>
                  <tr>
                    <td class="bRight">71021</td>
                    <td>please input startDate and endDate</td>
                  </tr>
                  <tr>
                    <td class="bRight">71022</td>
                    <td>invalid input format 'startDate' field.</td>
                  </tr>

                  <tr>
                    <td class="bRight">71023</td>
                    <td>invalid input format 'endDate' field.</td>
                  </tr>
                  <tr>
                    <td class="bRight">71024</td>
                    <td>page should be greater than 0</td>
                  </tr>
                  <tr>
                    <td class="bRight">71025</td>
                    <td>balance should be greater than 0</td>
                  </tr>
                  <tr>
                    <td class="bRight">71026</td>
                    <td>missing field 'startDate'.</td>
                  </tr>
                  <tr>
                    <td class="bRight">71027</td>
                    <td>missing field 'endDate'.</td>
                  </tr>
                  <tr>
                    <td class="bRight">71028</td>
                    <td>missing field 'ref'.</td>
                  </tr>
                  <tr>
                    <td class="bRight">90003</td>
                    <td>limit should be greater than or equal to 1</td>
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
                  <tr>
                    <td class="bRight">911011</td>
                    <td>
                      Please inform your admin to set up additional commission
                      acceptance and enable the collection of the remaining
                      percentage.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sevice",
};
</script>
