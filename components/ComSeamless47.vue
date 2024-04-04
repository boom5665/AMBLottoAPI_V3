<!-- Please remove this file from your project -->
<template>
  <div>
    <div class="box-Sem" style="display: flex">
      <div class="box-all">

      <div class="col-12" id="tab48">
        <div
          ><h1><b style="color: #19a17a !important"
            >4.7
            <span
              style="padding-left: 3px"
              id="Seamless_ListHotnumberandLimitnumber"
              >ListHotnumberandLimitnumber</span
            ></b
          ></h1></div
        >
      </div>

      <div class="btn-toolbar mb-3" role="toolbar">
        <!-- <div class="divBox">
          <div class="col-12">
            <label class="txtHead">Method : </label>
            <label>Post</label>
          </div>
          <div class="col-12">
            <label class="txtHead"> Url : </label>
            <label>
              https://test-api.askmelotto.com/apiRoute/api/ListHotnumberandLimitnumber
            </label>
          </div>
          <div class="col-12">
            <label class="txtHead"> headers : </label>
            <label> content-type application/json </label>
          </div>
        </div> -->
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
              id="DataTable410A"
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
                    class="thcolor txtCenter"
                  >
                    Description
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="bRight">agentUsername</td>
                  <td class="bRight">String</td>
                  <td>
                    Agent account , Account length is restricted to 36 chars at
                    most.
                  </td>
                </tr>
                <tr>
                  <td class="bRight">agentApiKey</td>
                  <td class="bRight">String</td>
                  <td>System generate key ID after create Agent.</td>
                </tr>
                <tr>
                  <td class="bRight">services</td>
                  <td class="bRight">String</td>
                  <td>Fixed value"DeleteLimitnumber"</td>
                </tr>
                <tr>
                  <td class="bRight">data</td>
                  <td class="bRight">Object</td>
                  <td>Object response.</td>
                </tr>
                <tr>
                  <td class="bRight">limitnumber</td>
                  <td class="bRight">Object</td>
                  <td>Object response limitnumber.</td>
                </tr>
                <tr>
                  <td class="bRight">lottotype(thailotto)</td>
                  <td class="bRight">Object</td>
                  <td>Key of lotto type.</td>
                </tr>
                <tr>
                  <td class="bRight">subtype(top3)</td>
                  <td class="bRight">Object</td>
                  <td>Key of sub type.</td>
                </tr>
                <tr>
                  <td class="bRight">number</td>
                  <td class="bRight">String</td>
                  <td>This number of add hotnumber.</td>
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
                  <button onclick="copyContent(document.getElementById('seamless_tabfour-six-four_eight_req').innerHTML)" class="btn btn-info waves-effect waves-light">Copy to clipboard</button>
                </div>
              </div>
              <div class="koh-faq-answer col-12">
                <pre>
                                        <div class="copy-clipboard" style="position: absolute;width: 20px;top: 30px;right: 0;cursor:pointer">
                                            <svg style="position: absolute;width: 20px;left: -25px;" onclick="copyContent(document.getElementById('seamless_tabfour-six-four_eight_req').innerHTML)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Copy to Clipboard</title><path d="M18 6v-6h-18v18h6v6h18v-18h-6zm-12 10h-4v-14h14v4h-10v10zm16 6h-14v-14h14v14z"></path></svg>
                                        </div>
                                        <code id="410A" style="border-radius: 0.375rem;" class="hljs json">{
    <span class="hljs-attr">"agentUsername"</span>: <span class="hljs-string">"superadmincash"</span>,
    <span class="hljs-attr">"agentApiKey"</span>: <span class="hljs-string">"345afccac1c08a4f8e37fbf1ac4f6e2a63e298062482c3f5192a63f3f8"</span>,
    <span class="hljs-attr">"services"</span>: <span class="hljs-string">"DeleteLimitnumber"</span>,
    <span class="hljs-attr">"data"</span>: {
        <span class="hljs-attr">"limitnumber"</span>: {
            <span class="hljs-attr">"thailotto"</span>: {
                <span class="hljs-attr">"top3"</span>: {
                    <span class="hljs-attr">"number"</span>: <span class="hljs-string">"567"</span>
                }
            }
        }
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
              id="DataTable410B"
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
                    class="thcolor bRight"
                  >
                    Description
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="bRight">code</td>
                  <td class="bRight">Number</td>
                  <td>Result Code Reference.</td>
                </tr>
                <tr>
                  <td class="bRight">msg</td>
                  <td class="bRight">String</td>
                  <td>Information message.</td>
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
              id="DataTable410C"
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
                  <td>Delete LimitNumber Success</td>
                </tr>
                <tr>
                  <td class="bRight">1054</td>
                  <td>Invalid agentUsername</td>
                </tr>
                <tr>
                  <td class="bRight">1054</td>
                  <td>Invalid ApiKey or UserAgent</td>
                </tr>
                <tr>
                  <td class="bRight">1054</td>
                  <td>Invalid agentApiKey</td>
                </tr>
                <tr>
                  <td class="bRight">1054</td>
                  <td>Invalid Services</td>
                </tr>
                <tr>
                  <td class="bRight">1054</td>
                  <td>Services Not Found</td>
                </tr>
                <tr>
                  <td class="bRight">1054</td>
                  <td>Error Request body is not an object</td>
                </tr>
                <tr>
                  <td class="bRight">1054</td>
                  <td>invalid keydata</td>
                </tr>
                <tr>
                  <td class="bRight">1054</td>
                  <td>invalid lottotype</td>
                </tr>
                <tr>
                  <td class="bRight">1054</td>
                  <td>invalid subtype</td>
                </tr>
                <tr>
                  <td class="bRight">1054</td>
                  <td>invalid type number</td>
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
                                    <div class="copy-clipboard" style="position: absolute;width: 20px;top: 30px;right: 0;cursor:pointer">
                                            <svg style="position: absolute;width: 20px;left: -25px;" onclick="copyContent(document.getElementById('seamless_tabfour-six-four_six_ser').innerHTML)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Copy to Clipboard</title><path d="M18 6v-6h-18v18h6v6h18v-18h-6zm-12 10h-4v-14h14v4h-10v10zm16 6h-14v-14h14v14z"></path></svg>
                                        </div>
                                    <code id="410B" style="border-radius: 0.375rem;" class="hljs json">{
    <span class="hljs-attr">"code"</span>: <span class="hljs-number">"0"</span>,
    <span class="hljs-attr">"data"</span>: {
        <span class="hljs-attr">"hotnumber":</span> {
        <span class="hljs-attr">"thailotto":</span> [
                {
                    <span class="hljs-attr">"agentid"</span>: <span class="hljs-number">19</span>,
                    <span class="hljs-attr">"amount"</span>:<span class="hljs-number"> 100</span>,
                    <span class="hljs-attr">"hotnumid"</span>: <span class="hljs-number">787</span>,
                    <span class="hljs-attr">"number"</span>: <span class="hljs-number">"000000"</span>,
                    <span class="hljs-attr">"subtype"</span>: <span class="hljs-number">"top6"</span>,
                    <span class="hljs-attr">"superadmin"</span>: <span class="hljs-number">18</span>
                }
            ]
        },
        <span class="hljs-attr">"limitnumber"</span>: {
        <span class="hljs-attr">"thailotto"</span>: [
                {
                    <span class="hljs-attr">"agentid"</span>: <span class="hljs-number">19</span>,
                    <span class="hljs-attr">"amount"</span>:<span class="hljs-number">0</span>,
                    <span class="hljs-attr">"hotnumid"</span>: <span class="hljs-number">206</span>,
                    <span class="hljs-attr">"number"</span>: <span class="hljs-number">"123456"</span>,
                    <span class="hljs-attr">"subtype"</span>: <span class="hljs-number">"top6"</span>,
                    <span class="hljs-attr">"superadmin"</span>: <span class="hljs-number">18</span>
                }
            ]
        }
    }
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
          <BoxSem47 />
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "ComSeamless47",
};
</script>
