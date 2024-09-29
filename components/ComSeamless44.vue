<!-- Please remove this file from your project -->
<template>
  <div>
    <div class="box-Sem" style="display: flex">
      <div class="box-all">
        <div class="col-12" id="tabFour" style="">
          <div
            ><h1>
              <b
                style="color: #19a17a !important"
                set-lan="text:4.4 login request"
                >4.4
                <span style="padding-left: 3px" id="Seamless_login_request"
                  >Login request</span
                ></b
              >
            </h1></div
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
                https://test-api.askmelotto.vip/apiRoute/member/loginRequest
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
                id="DataTable1"
              >
                <thead class="rgba-green-slight">
                  <tr>
                    <th
                      style="width: 26%"
                      set-lan="html:Parameter"
                      class="thcolor txtCenter bRight"
                    >
                      Parameter
                    </th>
                    <th
                      style="width: 15%"
                      set-lan="html:Type"
                      class="thcolor txtCenter bRight"
                    >
                      Type
                    </th>
                    <th
                      style="width: 40%"
                      set-lan="html:Description"
                      class="thcolor absbRight txtCenter"
                    >
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="bRight">agentUsername</td>
                    <td class="bRight">String</td>
                    <td class="bRight">
                      Agent account , Account length is restricted to 36 chars
                      at most.
                    </td>
                  </tr>
                  <tr>
                    <td class="bRight">agentApiKey</td>
                    <td class="bRight">String</td>
                    <td class="bRight">
                      System generate key ID after create Agent
                    </td>
                  </tr>
                  <tr>
                    <td class="bRight">playerUsername</td>
                    <td class="bRight">String</td>
                    <td class="bRight">Player username from partner system.</td>
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
                    <button onclick="copyContent(document.getElementById('seamless_tabfour-four_req').innerHTML)" class="btn btn-info waves-effect waves-light">Copy to clipboard</button>
                  </div>
                </div>
                <div class="koh-faq-answer col-12">
                  <pre>
                                    <div class="copy-clipboard" style=" position: absolute;width: 20px;top: 30px;right: 0;cursor:pointer">
                                        <svg  style="position: absolute;width: 20px;left: -25px;" onclick="copyContent(document.getElementById('seamless_tabfour-four_req').innerHTML)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Copy to Clipboard</title><path d="M18 6v-6h-18v18h6v6h18v-18h-6zm-12 10h-4v-14h14v4h-10v10zm16 6h-14v-14h14v14z"></path></svg>
                                    </div>
                                        <code id="3_4A" style="border-radius: 0.375rem;" class="hljs json">{
    <span class="hljs-attr">"agentUsername"</span>: <span class="hljs-string">"comptestseamless"</span>,
    <span class="hljs-attr">"agentApiKey"</span>: <span class="hljs-string">"18791944ec1a15e649c390d1403c5d6bc888a0d63602116c8f8b1725975e7c2eb832b2509f00eaf11f35bfbf810637e0"</span>,
    <span class="hljs-attr">"playerUsername"</span>: <span class="hljs-string">"member1"</span>
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
                      set-lan="html:Type"
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
                    <td class="bRight">msg</td>
                    <td class="bRight">String</td>
                    <td class="bRight">Information message.</td>
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
                    <td class="bRight">tkUuid</td>
                    <td class="bRight">String</td>
                    <td class="bRight">
                      Can use only 1 time. limit to 24 hours from generate time.
                    </td>
                  </tr>
                  <tr>
                    <td class="bRight">url</td>
                    <td class="bRight">String</td>
                    <td class="bRight">
                      Askmelotto link
                    </td>
                  </tr>
                  <tr>
                    <td class="bRight">urlFullPage</td>
                    <td class="bRight">String</td>
                    <td class="bRight">Askmelotto link fullpage</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="form-group col-12 ex">
            <div
              ><b style="color: #19a17a !important">Response Code</b></div
            >
          </div>

          <div class="form-group col-12">
            <div class="table-wrapper">
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
                    <td class="bRight">41001</td>
                    <td>Error Request body is not an object.</td>
                  </tr>
                  <tr>
                    <td class="bRight">61001</td>
                    <td>Invalid UserAgent or ApiKey</td>
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
                    <td class="bRight">71001</td>
                    <td>missing field 'agentUsername'.</td>
                  </tr>
                  <tr>
                    <td class="bRight">71002</td>
                    <td>missing field 'playerUsername'.</td>
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
                      >Example Service Response Code
                    </b>
                    <i
                      class="fa fa-chevron-down"
                      aria-hidden="true"
                      style="margin-left: 2%; font-size: 1rem"
                    ></i>
                    <button onclick="copyContent(document.getElementById('seamless_tabfour-four_res').innerHTML)" class="btn btn-info waves-effect waves-light">Copy to clipboard</button>
                  </div>
                </div>
                <div class="koh-faq-answer col-12">
                  <pre>
                                        <div class="copy-clipboard" style="position: absolute;width: 20px; top: 30px;right: 0;cursor:pointer">
                                            <svg style="position: absolute;width: 20px;left: -25px;" onclick="copyContent(document.getElementById('seamless_tabfour-four_res').innerHTML)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Copy to Clipboard</title><path d="M18 6v-6h-18v18h6v6h18v-18h-6zm-12 10h-4v-14h14v4h-10v10zm16 6h-14v-14h14v14z"></path></svg>
                                        </div>
                                        <code id="3_4B" style="border-radius: 0.375rem;" class="hljs json">{
    <span class="hljs-attr">"code"</span>: <span class="hljs-number">0</span>,
    <span class="hljs-attr">"data"</span>: {
        <span class="hljs-attr">"playerApiId"</span>: <span class="hljs-string">"67239355aa8af3f4a6678e31cc3eb83a1612322fc2bf6b8f268b1660f1f37e"</span>,
        <span class="hljs-attr">"playerApiUsername"</span>: <span class="hljs-string">"member1@comptestseamless"</span>,
        <span class="hljs-attr">"playerUsername"</span>: <span class="hljs-string">"member1"</span>,
        <span class="hljs-attr">"tkUuid"</span>: <span class="hljs-string">"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiIsImN0eSI6IiJ9.eyJhZ2VudGlkIjoxODksImV4cCI6MTYyNzE3ODYzMCwiaWF0IjoxNjI2MzE0NjMwLCJyb2xlIjoibWVtYmVyMUBjb21wc2VhbWxlc3MiLCJzdWIiOmZhbHNlfQ.eLfAFfTnSD80OajqxH6yWmojd_m8MB7C0xxvahoWtPg"</span>,
        <span class="hljs-attr">"url"</span>: <span class="hljs-string">"https://dev-askmelotto.pirate168.com/token?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiIsImN0eSI6IiJ9.eyJhZ2VudGlkIjoxODksImV4cCI6MTYyNzE3ODYzMCwiaWF0IjoxNjI2MzE0NjMwLCJyb2xlIjoibWVtYmVyMUBjb21wc2VhbWxlc3MiLCJzdWIiOmZhbHNlfQ.eLfAFfTnSD80OajqxH6yWmojd_m8MB7C0xxvahoWtPg&header=off"</span>,
        <span class="hljs-attr">"urlFullPage"</span>: <span class="hljs-string">"https://dev-askmelotto.pirate168.com/token?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiIsImN0eSI6IiJ9.eyJhZ2VudGlkIjoxODksImV4cCI6MTYyNzE3ODYzMCwiaWF0IjoxNjI2MzE0NjMwLCJyb2xlIjoibWVtYmVyMUBjb21wc2VhbWxlc3MiLCJzdWIiOmZhbHNlfQ.eLfAFfTnSD80OajqxH6yWmojd_m8MB7C0xxvahoWtPg&header=on"</span>
    },
    <span class="hljs-attr">"mgs"</span>: <span class="hljs-string">"Success"</span>
}</code></pre>
                </div>
              </div>
            </div>
          </div> -->
          <div class="form-group col-12 ex">
            <div
              ><b style="color: #19a17a !important" set-lan="text:** Optional"
                >** Optional for direct/re-direct link.</b
              ></div
            >
          </div>
          <div class="form-group col-12">
            <label set-lan="html:You can add">
              คุณสามารถเพิ่มค่าพารามิเตอร์ต่อท้ายในลิงค์ (&lottotype=)
              เพื่อเปลี่ยนเส้นทางให้ผู้เล่นไปยังหน้าแทง Askmelotto
              ประเภทนั้นๆ</label
            >
          </div>
          <div class="col-8">
            <!-- <a href="https://service-api.prettygaming.asia/img/zip/game_icons.rar" style="float: right;"
                            class="Point" download=""><i class="fa fa-download" aria-hidden="true"></i>
                            <label class="Point">&nbsp;Download Icon</label></a> -->
          </div>
          <div class="form-group col-3"></div>
          <div class="form-group col-2"></div>
          <div class="form-group col-6">
            <div class="table-wrapper">
              <table class="table table-borderless table-striped">
                <thead class="rgba-green-slight">
                  <tr>
                    <th class="thcolor bRight txtCenter" style="width: 200px">
                      Name
                    </th>
                    <th class="thcolor bRight txtCenter" style="width: 210px">
                      Value of parameter
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="bRight txtMid">หวยไทย</td>
                    <td class="bRight txtCenter txtMid">thailotto</td>
                  </tr>
                  <tr>
                    <td class="bRight txtMid">หวยลาว(แทงแบบไทย)</td>
                    <td class="bRight txtCenter txtMid">laoslotto</td>
                  </tr>
                  <tr>
                    <td class="bRight txtMid">หวยฮานอย</td>
                    <td class="bRight txtCenter txtMid">hanoylotto</td>
                  </tr>
                  <tr>
                    <td class="bRight txtMid">หวยฮานอย(วีไอพี)</td>
                    <td class="bRight txtCenter txtMid">hanoylottovip</td>
                  </tr>
                  <tr>
                    <td class="bRight txtMid">หวย ธกส.</td>
                    <td class="bRight txtCenter txtMid">baaclotto</td>
                  </tr>
                  <tr>
                    <td class="bRight txtMid">หวย ออมสิน</td>
                    <td class="bRight txtCenter txtMid">gsblotto</td>
                  </tr>
                  <tr>
                    <td class="bRight txtMid">หวยปิงปอง</td>
                    <td class="bRight txtCenter txtMid">pingponglotto</td>
                  </tr>
                  <tr>
                    <td class="bRight txtMid">หวยลาว(แบบชุด)</td>
                    <td class="bRight txtCenter txtMid">laoslotto_set</td>
                  </tr>
                  <tr>
                    <td class="bRight txtMid">หวยยี่กี</td>
                    <td class="bRight txtCenter txtMid">yeekeelotto</td>
                  </tr>
                  <tr>
                    <td class="bRight txtMid">หวยมาเลย์</td>
                    <td class="bRight txtCenter txtMid">malaylotto</td>
                  </tr>
                  <tr>
                    <td class="bRight txtMid">หวยฮานอย(แบบชุด)</td>
                    <td class="bRight txtCenter txtMid">hanoylotto_set</td>
                  </tr>
                  <tr>
                    <td class="bRight txtMid">หวยฮานอยวีไอพี(แบบชุด)</td>
                    <td class="bRight txtCenter txtMid">hanoylottovip_set</td>
                  </tr>
                  <tr>
                    <td class="bRight txtMid">หวยฮานอยพิเศษ(แบบชุด)</td>
                    <td class="bRight txtCenter txtMid">
                      hanoylottospecial_set
                    </td>
                  </tr>
                  <tr>
                    <td class="bRight txtMid">หวยมาเลย์(แบบชุด)</td>
                    <td class="bRight txtCenter txtMid">malaylotto_set</td>
                  </tr>
                  <tr>
                    <td class="bRight txtMid">หวยฮานอย(พิเศษ)</td>
                    <td class="bRight txtCenter txtMid">hanoylottospecial</td>
                  </tr>
                  <tr>
                    <td class="bRight txtMid">หวยหุ้นเกาหลี</td>
                    <td class="bRight txtCenter txtMid">stockkorea</td>
                  </tr>
                  <tr>
                    <td class="bRight txtMid">หวยหุ้นจีน</td>
                    <td class="bRight txtCenter txtMid">stockchina</td>
                  </tr>
                  <tr>
                    <td class="bRight txtMid">หวยหุ้นดาวโจนส์</td>
                    <td class="bRight txtCenter txtMid">stockdowjones</td>
                  </tr>
                  <tr>
                    <td class="bRight txtMid">หวยหุ้นไต้หวัน</td>
                    <td class="bRight txtCenter txtMid">stocktaiwan</td>
                  </tr>
                  <tr>
                    <td class="bRight txtMid">หวยหุ้นอังกฤษ</td>
                    <td class="bRight txtCenter txtMid">stockengland</td>
                  </tr>
                  <tr>
                    <td class="bRight txtMid">หวยหุ้นอินเดีย</td>
                    <td class="bRight txtCenter txtMid">stockindia</td>
                  </tr>
                  <tr>
                    <td class="bRight txtMid">หวยหุ้นฮั่งเส็ง</td>
                    <td class="bRight txtCenter txtMid">stockhangseng</td>
                  </tr>
                  <tr>
                    <td class="bRight txtMid">หวยหุ้นอียิปต์</td>
                    <td class="bRight txtCenter txtMid">stockegypt</td>
                  </tr>
                  <tr>
                    <td class="bRight txtMid">หวยหุ้นนิเคอิ</td>
                    <td class="bRight txtCenter txtMid">stocknikkei</td>
                  </tr>
                  <tr>
                    <td class="bRight txtMid">หวยหุ้นสิงค์โปร</td>
                    <td class="bRight txtCenter txtMid">stocksingapore</td>
                  </tr>
                  <tr>
                    <td class="bRight txtMid">หวยหุ้นไทย</td>
                    <td class="bRight txtCenter txtMid">stockthai</td>
                  </tr>
                  <tr>
                    <td class="bRight txtMid">หวยหุ้นเยอรมัน</td>
                    <td class="bRight txtCenter txtMid">stockgerman</td>
                  </tr>
                  <tr>
                    <td class="bRight txtMid">หวยหุ้นรัสเซีย</td>
                    <td class="bRight txtCenter txtMid">stockrussia</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <!-- <div class="btn-toolbar mb-3" role="toolbar">
          <div class="form-group col-12 ex">
            <div
              ><b style="color: #19a17a !important">Game direct link</b></div
            >
          </div>
        </div> -->
        <!-- <div class="btn-toolbar mb-3" role="toolbar">
          <div class="divBox" style="font-size: 0.8rem; word-break: break-all">
            <div class="col-12">

            </div>
            <div class="col-12">
              <div class="row">
                <div
                  class="col-12"
                  style="padding-right: 0px; padding-left: 2px"
                >
                  <label class="txtHead">laoslotto :&nbsp;</label
                  ><label style="margin-bottom: 0px"
                    >https://test-front.pirate168.com/token?token=jd_m8MB7C0xxvahoWtPg&amp;header=off&amp;<label
                      class="txtHead"
                      style="margin-bottom: 0px"
                      >lotto=laoslotto</label
                    ></label
                  >
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="row">
                <div
                  class="col-12"
                  style="padding-right: 0px; padding-left: 2px"
                >
                  <label class="txtHead">hanoylotto :&nbsp;</label
                  ><label style="margin-bottom: 0px"
                    >https://test-front.pirate168.com/token?token=jd_m8MB7C0xxvahoWtPg&amp;header=off&amp;<label
                      class="txtHead"
                      style="margin-bottom: 0px"
                      >lotto=hanoylotto</label
                    ></label
                  >
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="row">
                <div
                  class="col-12"
                  style="padding-right: 0px; padding-left: 2px"
                >
                  <label class="txtHead">hanoylottovip :&nbsp;</label
                  ><label style="margin-bottom: 0px"
                    >https://test-front.pirate168.com/token?token=jd_m8MB7C0xxvahoWtPg&amp;header=off&amp;<label
                      class="txtHead"
                      style="margin-bottom: 0px"
                      >lotto=hanoylottovip</label
                    ></label
                  >
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="row">
                <div
                  class="col-12"
                  style="padding-right: 0px; padding-left: 2px"
                >
                  <label class="txtHead">baaclotto :&nbsp;</label
                  ><label style="margin-bottom: 0px"
                    >https://test-front.pirate168.com/token?token=jd_m8MB7C0xxvahoWtPg&amp;header=off&amp;<label
                      class="txtHead"
                      style="margin-bottom: 0px"
                      >lotto=baaclotto</label
                    ></label
                  >
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="row">
                <div
                  class="col-12"
                  style="padding-right: 0px; padding-left: 2px"
                >
                  <label class="txtHead">gsblotto :&nbsp;</label
                  ><label style="margin-bottom: 0px"
                    >https://test-front.pirate168.com/token?token=jd_m8MB7C0xxvahoWtPg&amp;header=off&amp;<label
                      class="txtHead"
                      style="margin-bottom: 0px"
                      >lotto=gsblotto</label
                    ></label
                  >
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="row">
                <div
                  class="col-12"
                  style="padding-right: 0px; padding-left: 2px"
                >
                  <label class="txtHead">pingponglotto :&nbsp;</label
                  ><label style="margin-bottom: 0px"
                    >https://test-front.pirate168.com/token?token=jd_m8MB7C0xxvahoWtPg&amp;header=off&amp;<label
                      class="txtHead"
                      style="margin-bottom: 0px"
                      >lotto=pingponglotto</label
                    ></label
                  >
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="row">
                <div
                  class="col-12"
                  style="padding-right: 0px; padding-left: 2px"
                >
                  <label class="txtHead">laoslotto_set :&nbsp;</label
                  ><label style="margin-bottom: 0px"
                    >https://test-front.pirate168.com/token?token=jd_m8MB7C0xxvahoWtPg&amp;header=off&amp;<label
                      class="txtHead"
                      style="margin-bottom: 0px"
                      >lotto=laoslotto_set</label
                    ></label
                  >
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="row">
                <div
                  class="col-12"
                  style="padding-right: 0px; padding-left: 2px"
                >
                  <label class="txtHead">yeekeelotto :&nbsp;</label
                  ><label style="margin-bottom: 0px"
                    >https://test-front.pirate168.com/token?token=jd_m8MB7C0xxvahoWtPg&amp;header=off&amp;<label
                      class="txtHead"
                      style="margin-bottom: 0px"
                      >lotto=yeekeelotto</label
                    ></label
                  >
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="row">
                <div
                  class="col-12"
                  style="padding-right: 0px; padding-left: 2px"
                >
                  <label class="txtHead">malaylotto :&nbsp;</label
                  ><label style="margin-bottom: 0px"
                    >https://test-front.pirate168.com/token?token=jd_m8MB7C0xxvahoWtPg&amp;header=off&amp;<label
                      class="txtHead"
                      style="margin-bottom: 0px"
                      >lotto=malaylotto</label
                    ></label
                  >
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="row">
                <div
                  class="col-12"
                  style="padding-right: 0px; padding-left: 2px"
                >
                  <label class="txtHead">hanoylotto_set :&nbsp;</label
                  ><label style="margin-bottom: 0px"
                    >https://test-front.pirate168.com/token?token=jd_m8MB7C0xxvahoWtPg&amp;header=off&amp;<label
                      class="txtHead"
                      style="margin-bottom: 0px"
                      >lotto=hanoylotto_set</label
                    ></label
                  >
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="row">
                <div
                  class="col-12"
                  style="padding-right: 0px; padding-left: 2px"
                >
                  <label class="txtHead">hanoylottovip_set :&nbsp;</label
                  ><label style="margin-bottom: 0px"
                    >https://test-front.pirate168.com/token?token=jd_m8MB7C0xxvahoWtPg&amp;header=off&amp;<label
                      class="txtHead"
                      style="margin-bottom: 0px"
                      >lotto=hanoylottovip_set</label
                    ></label
                  >
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="row">
                <div
                  class="col-12"
                  style="padding-right: 0px; padding-left: 2px"
                >
                  <label class="txtHead">hanoylottospecial_set :&nbsp;</label
                  ><label style="margin-bottom: 0px"
                    >https://test-front.pirate168.com/token?token=jd_m8MB7C0xxvahoWtPg&amp;header=off&amp;<label
                      class="txtHead"
                      style="margin-bottom: 0px"
                      >lotto=hanoylottospecial_set</label
                    ></label
                  >
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="row">
                <div
                  class="col-12"
                  style="padding-right: 0px; padding-left: 2px"
                >
                  <label class="txtHead">malaylotto_set :&nbsp;</label
                  ><label style="margin-bottom: 0px"
                    >https://test-front.pirate168.com/token?token=jd_m8MB7C0xxvahoWtPg&amp;header=off&amp;<label
                      class="txtHead"
                      style="margin-bottom: 0px"
                      >lotto=malaylotto_set</label
                    ></label
                  >
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="row">
                <div
                  class="col-12"
                  style="padding-right: 0px; padding-left: 2px"
                >
                  <label class="txtHead">hanoylottospecial :&nbsp;</label
                  ><label style="margin-bottom: 0px"
                    >https://test-front.pirate168.com/token?token=jd_m8MB7C0xxvahoWtPg&amp;header=off&amp;<label
                      class="txtHead"
                      style="margin-bottom: 0px"
                      >lotto=hanoylottospecial</label
                    ></label
                  >
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="row">
                <div
                  class="col-12"
                  style="padding-right: 0px; padding-left: 2px"
                >
                  <label class="txtHead">stockkorea :&nbsp;</label
                  ><label style="margin-bottom: 0px"
                    >https://test-front.pirate168.com/token?token=jd_m8MB7C0xxvahoWtPg&amp;header=off&amp;<label
                      class="txtHead"
                      style="margin-bottom: 0px"
                      >lotto=stockkorea</label
                    ></label
                  >
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="row">
                <div
                  class="col-12"
                  style="padding-right: 0px; padding-left: 2px"
                >
                  <label class="txtHead">stockchina :&nbsp;</label
                  ><label style="margin-bottom: 0px"
                    >https://test-front.pirate168.com/token?token=jd_m8MB7C0xxvahoWtPg&amp;header=off&amp;<label
                      class="txtHead"
                      style="margin-bottom: 0px"
                      >lotto=stockchina</label
                    ></label
                  >
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="row">
                <div
                  class="col-12"
                  style="padding-right: 0px; padding-left: 2px"
                >
                  <label class="txtHead">stockdowjones :&nbsp;</label
                  ><label style="margin-bottom: 0px"
                    >https://test-front.pirate168.com/token?token=jd_m8MB7C0xxvahoWtPg&amp;header=off&amp;<label
                      class="txtHead"
                      style="margin-bottom: 0px"
                      >lotto=stockdowjones</label
                    ></label
                  >
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="row">
                <div
                  class="col-12"
                  style="padding-right: 0px; padding-left: 2px"
                >
                  <label class="txtHead">stocktaiwan :&nbsp;</label
                  ><label style="margin-bottom: 0px"
                    >https://test-front.pirate168.com/token?token=jd_m8MB7C0xxvahoWtPg&amp;header=off&amp;<label
                      class="txtHead"
                      style="margin-bottom: 0px"
                      >lotto=stocktaiwan</label
                    ></label
                  >
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="row">
                <div
                  class="col-12"
                  style="padding-right: 0px; padding-left: 2px"
                >
                  <label class="txtHead">stockengland :&nbsp;</label
                  ><label style="margin-bottom: 0px"
                    >https://test-front.pirate168.com/token?token=jd_m8MB7C0xxvahoWtPg&amp;header=off&amp;<label
                      class="txtHead"
                      style="margin-bottom: 0px"
                      >lotto=stockengland</label
                    ></label
                  >
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="row">
                <div
                  class="col-12"
                  style="padding-right: 0px; padding-left: 2px"
                >
                  <label class="txtHead">stockindia :&nbsp;</label
                  ><label style="margin-bottom: 0px"
                    >https://test-front.pirate168.com/token?token=jd_m8MB7C0xxvahoWtPg&amp;header=off&amp;<label
                      class="txtHead"
                      style="margin-bottom: 0px"
                      >lotto=stockindia</label
                    ></label
                  >
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="row">
                <div
                  class="col-12"
                  style="padding-right: 0px; padding-left: 2px"
                >
                  <label class="txtHead">stockhangseng :&nbsp;</label
                  ><label style="margin-bottom: 0px"
                    >https://test-front.pirate168.com/token?token=jd_m8MB7C0xxvahoWtPg&amp;header=off&amp;<label
                      class="txtHead"
                      style="margin-bottom: 0px"
                      >lotto=stockhangseng</label
                    ></label
                  >
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="row">
                <div
                  class="col-12"
                  style="padding-right: 0px; padding-left: 2px"
                >
                  <label class="txtHead">stockegypt :&nbsp;</label
                  ><label style="margin-bottom: 0px"
                    >https://test-front.pirate168.com/token?token=jd_m8MB7C0xxvahoWtPg&amp;header=off&amp;<label
                      class="txtHead"
                      style="margin-bottom: 0px"
                      >lotto=stockegypt</label
                    ></label
                  >
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="row">
                <div
                  class="col-12"
                  style="padding-right: 0px; padding-left: 2px"
                >
                  <label class="txtHead">stocknikkei :&nbsp;</label
                  ><label style="margin-bottom: 0px"
                    >https://test-front.pirate168.com/token?token=jd_m8MB7C0xxvahoWtPg&amp;header=off&amp;<label
                      class="txtHead"
                      style="margin-bottom: 0px"
                      >lotto=stocknikkei</label
                    ></label
                  >
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="row">
                <div
                  class="col-12"
                  style="padding-right: 0px; padding-left: 2px"
                >
                  <label class="txtHead">stocksingapore :&nbsp;</label
                  ><label style="margin-bottom: 0px"
                    >https://test-front.pirate168.com/token?token=jd_m8MB7C0xxvahoWtPg&amp;header=off&amp;<label
                      class="txtHead"
                      style="margin-bottom: 0px"
                      >lotto=stocksingapore</label
                    ></label
                  >
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="row">
                <div
                  class="col-12"
                  style="padding-right: 0px; padding-left: 2px"
                >
                  <label class="txtHead">stockthai :&nbsp;</label
                  ><label style="margin-bottom: 0px"
                    >https://test-front.pirate168.com/token?token=jd_m8MB7C0xxvahoWtPg&amp;header=off&amp;<label
                      class="txtHead"
                      style="margin-bottom: 0px"
                      >lotto=stockthai</label
                    ></label
                  >
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="row">
                <div
                  class="col-12"
                  style="padding-right: 0px; padding-left: 2px"
                >
                  <label class="txtHead">stockgerman :&nbsp;</label
                  ><label style="margin-bottom: 0px"
                    >https://test-front.pirate168.com/token?token=jd_m8MB7C0xxvahoWtPg&amp;header=off&amp;<label
                      class="txtHead"
                      style="margin-bottom: 0px"
                      >lotto=stockgerman</label
                    ></label
                  >
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="row">
                <div
                  class="col-12"
                  style="padding-right: 0px; padding-left: 2px"
                >
                  <label class="txtHead">stockrussia :&nbsp;</label
                  ><label style="margin-bottom: 0px"
                    >https://test-front.pirate168.com/token?token=jd_m8MB7C0xxvahoWtPg&amp;header=off&amp;<label
                      class="txtHead"
                      style="margin-bottom: 0px"
                      >lotto=stockrussia</label
                    ></label
                  >
                </div>
              </div>
            </div>
          </div>
        </div> -->
        <div class="btn-toolbar mb-3" role="toolbar">
          <div class="form-group col-12 ex">
            <div><b style="color: #19a17a !important">Language</b></div>
          </div>
          <div class="form-group col-12">
            <label> หมายเหตุ : กรุณาใช้รหัสตรงตามตัวอย่าง</label>
          </div>
        </div>
        <div class="btn-toolbar mb-3" role="toolbar">
          <div class="form-group col-2"></div>
          <div class="form-group col-6">
            <div class="table-wrapper">
              <table class="table table-borderless table-striped">
                <thead class="rgba-green-slight">
                  <tr>
                    <th class="thcolor bRight txtCenter" style="width: 200px">
                      Language
                    </th>
                    <th class="thcolor txtCenter" style="width: 210px">
                      Value of parameter
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="bRight txtMid">English</td>

                    <td class="txtCenter txtMid">EN</td>
                  </tr>
                  <tr>
                    <td class="bRight txtMid">Thai</td>
                    <td class="txtCenter txtMid">TH</td>
                  </tr>
                   <tr>
                    <td class="bRight txtMid">VIETNAM</td>
                    <td class="txtCenter txtMid">VN</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="btn-toolbar mb-3" role="toolbar">
          <div class="divBox" style="font-size: 0.87rem; word-break: break-all">
            <div class="col-12">
              <div class="row">
                <div
                  class="col-12"
                  style="padding-right: 0px; padding-left: 2px"
                >
                  <label class="txtHead">English :&nbsp;</label
                  ><label style="margin-bottom: 0px"
                    >https://test-front.pirate168.com/token?token=jd_m8MB7C0xxvahoWtPg&header=off&amp;lotto=thailotto&<label
                      class="txtHead"
                      style="margin-bottom: 0px"
                      >lang=en</label
                    ></label
                  >
                </div>
              </div>
              <!-- <label class="txtHead">English
                                :&nbsp;</label><label>English : https://test-front.pirate168.com/token?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiIsImN0eSI6IiJ9.eyJhZ2VudGlkIjoxODksImV4cCI6MTYyNzE3ODYzMCwiaWF0IjoxNjI2MzE0NjMwLCJyb2xlIjoibWVtYmVyMUBjb21wc2VhbWxlc3MiLCJzdWIiOmZhbHNlfQ.eLfAFfTnSD80OajqxH6yWmojd_m8MB7C0xxvahoWtPg&header=off&amp;</label><label
                                class="txtHead">lottotype=thailotto&lang=EN</label> -->
            </div>
            <div class="col-12">
              <div class="row">
                <div
                  class="col-12"
                  style="padding-right: 0px; padding-left: 2px"
                >
                  <label class="txtHead">Thai :&nbsp;</label
                  ><label style="margin-bottom: 0px"
                    >https://test-front.pirate168.com/token?token=jd_m8MB7C0xxvahoWtPg&header=off&amp;lotto=laoslotto&<label
                      class="txtHead"
                      style="margin-bottom: 0px"
                      >lang=th</label
                    ></label
                  >
                </div>
              </div>
            </div>
            <!-- <div class="col-12">
                            <label class="txtHead">Chinese Mandarin
                                :&nbsp;</label><label>http://m.hippo168.com/?tkuuid=5ebd1f57dc7cdc7900125a65&amp;game=BAC&amp;</label><label
                                class="txtHead">lang=CNM</label>
                        </div>
                        <div class="col-12">
                            <label class="txtHead">Chinese Cantonese
                                :&nbsp;</label><label>http://m.hippo168.com/?tkuuid=5ebd1f57dc7cdc7900125a65&amp;game=BAC&amp;</label><label
                                class="txtHead">lang=CNC</label>
                        </div>
                        <div class="col-12">
                            <label class="txtHead">Korean
                                :&nbsp;</label><label>http://m.hippo168.com/?tkuuid=5ebd1f57dc7cdc7900125a65&amp;game=BAC&amp;</label><label
                                class="txtHead">lang=KOR</label>
                        </div>
                        <div class="col-12">
                            <label class="txtHead">Vietnam
                                :&nbsp;</label><label>http://m.hippo168.com/?tkuuid=5ebd1f57dc7cdc7900125a65&amp;game=BAC&amp;</label><label
                                class="txtHead">lang=VT</label>
                        </div> -->
          </div>
        </div>
        <div class="btn-toolbar mb-3" role="toolbar">
          <div class="form-group col-12 ex">
            <div
              ><b style="color: #19a17a !important"
                >Signout re-direct optional link:</b
              ></div
            >
          </div>
        </div>
        <div class="btn-toolbar mb-3" role="toolbar">
          <div
            class="divBox"
            style="font-size: 0.681rem; word-break: break-all; margin-left: 0"
          >
            <div class="col-12">

              <!-- <label class="txtHead">Baccarat
                                :&nbsp;</label><label>http://m.hippo168.com/?tkuuid=5ebd1f57dc7cdc7900125a65&amp;game=BAC&amp;url=</label><label
                                class="txtHead">input your link here(full link with https://)</label> -->
            </div>
            <div class="col-12">
              <div class="row">
                <div
                  class="col-12"
                  style="padding-right: 0px; padding-left: 2px"
                >
                  <label class="txtHead">laoslotto :&nbsp;</label
                  ><label style="margin-bottom: 0px"
                    >https://test-front.pirate168.com/token?token=jd_m8MB7C0xxvahoWtPg&header=off&lotto=laoslotto&url=<label
                      class="txtHead"
                      style="margin-bottom: 0px"
                      >input your link here(full link with https://)</label
                    ></label
                  >
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="row">
                <div
                  class="col-12"
                  style="padding-right: 0px; padding-left: 2px"
                >
                  <label class="txtHead">hanoylotto :&nbsp;</label
                  ><label style="margin-bottom: 0px"
                    >https://test-front.pirate168.com/token?token=jd_m8MB7C0xxvahoWtPg&header=off&lotto=hanoylotto&url=<label
                      class="txtHead"
                      style="margin-bottom: 0px"
                      >input your link here(full link with https://)</label
                    ></label
                  >
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="row">
                <div
                  class="col-12"
                  style="padding-right: 0px; padding-left: 2px"
                >
                  <label class="txtHead">hanoylottovip :&nbsp;</label
                  ><label style="margin-bottom: 0px"
                    >https://test-front.pirate168.com/token?token=jd_m8MB7C0xxvahoWtPg&header=off&lotto=hanoylottovip&url=<label
                      class="txtHead"
                      style="margin-bottom: 0px"
                      >input your link here(full link with https://)</label
                    ></label
                  >
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="row">
                <div
                  class="col-12"
                  style="padding-right: 0px; padding-left: 2px"
                >
                  <label class="txtHead">baaclotto :&nbsp;</label
                  ><label style="margin-bottom: 0px"
                    >https://test-front.pirate168.com/token?token=jd_m8MB7C0xxvahoWtPg&header=off&lotto=baaclotto&url=<label
                      class="txtHead"
                      style="margin-bottom: 0px"
                      >input your link here(full link with https://)</label
                    ></label
                  >
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="row">
                <div
                  class="col-12"
                  style="padding-right: 0px; padding-left: 2px"
                >
                  <label class="txtHead">gsblotto :&nbsp;</label
                  ><label style="margin-bottom: 0px"
                    >https://test-front.pirate168.com/token?token=jd_m8MB7C0xxvahoWtPg&header=off&lotto=gsblotto&url=<label
                      class="txtHead"
                      style="margin-bottom: 0px"
                      >input your link here(full link with https://)</label
                    ></label
                  >
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="row">
                <div
                  class="col-12"
                  style="padding-right: 0px; padding-left: 2px"
                >
                  <label class="txtHead">pingponglotto :&nbsp;</label
                  ><label style="margin-bottom: 0px"
                    >https://test-front.pirate168.com/token?token=jd_m8MB7C0xxvahoWtPg&header=off&lotto=pingponglotto&url=<label
                      class="txtHead"
                      style="margin-bottom: 0px"
                      >input your link here(full link with https://)</label
                    ></label
                  >
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="row">
                <div
                  class="col-12"
                  style="padding-right: 0px; padding-left: 2px"
                >
                  <label class="txtHead">laoslotto_set :&nbsp;</label
                  ><label style="margin-bottom: 0px"
                    >https://test-front.pirate168.com/token?token=jd_m8MB7C0xxvahoWtPg&header=off&lotto=laoslotto_set&url=<label
                      class="txtHead"
                      style="margin-bottom: 0px"
                      >input your link here(full link with https://)</label
                    ></label
                  >
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="row">
                <div
                  class="col-12"
                  style="padding-right: 0px; padding-left: 2px"
                >
                  <label class="txtHead">yeekeelotto :&nbsp;</label
                  ><label style="margin-bottom: 0px"
                    >https://test-front.pirate168.com/token?token=jd_m8MB7C0xxvahoWtPg&header=off&lotto=yeekeelotto&url=<label
                      class="txtHead"
                      style="margin-bottom: 0px"
                      >input your link here(full link with https://)</label
                    ></label
                  >
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="row">
                <div
                  class="col-12"
                  style="padding-right: 0px; padding-left: 2px"
                >
                  <label class="txtHead">malaylotto :&nbsp;</label
                  ><label style="margin-bottom: 0px"
                    >https://test-front.pirate168.com/token?token=jd_m8MB7C0xxvahoWtPg&header=off&lotto=malaylotto&url=<label
                      class="txtHead"
                      style="margin-bottom: 0px"
                      >input your link here(full link with https://)</label
                    ></label
                  >
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="row">
                <div
                  class="col-12"
                  style="padding-right: 0px; padding-left: 2px"
                >
                  <label class="txtHead">hanoylotto_set :&nbsp;</label
                  ><label style="margin-bottom: 0px"
                    >https://test-front.pirate168.com/token?token=jd_m8MB7C0xxvahoWtPg&header=off&lotto=hanoylotto_set&url=<label
                      class="txtHead"
                      style="margin-bottom: 0px"
                      >input your link here(full link with https://)</label
                    ></label
                  >
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="row">
                <div
                  class="col-12"
                  style="padding-right: 0px; padding-left: 2px"
                >
                  <label class="txtHead">hanoylottovip_set :&nbsp;</label
                  ><label style="margin-bottom: 0px"
                    >https://test-front.pirate168.com/token?token=jd_m8MB7C0xxvahoWtPg&header=off&lotto=hanoylottovip_set&url=<label
                      class="txtHead"
                      style="margin-bottom: 0px"
                      >input your link here(full link with https://)</label
                    ></label
                  >
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="row">
                <div
                  class="col-12"
                  style="padding-right: 0px; padding-left: 2px"
                >
                  <label class="txtHead">hanoylottospecial_set :&nbsp;</label
                  ><label style="margin-bottom: 0px"
                    >https://test-front.pirate168.com/token?token=jd_m8MB7C0xxvahoWtPg&header=off&lotto=hanoylottospecial_set&url=<label
                      class="txtHead"
                      style="margin-bottom: 0px"
                      >input your link here(full link with https://)</label
                    ></label
                  >
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="row">
                <div
                  class="col-12"
                  style="padding-right: 0px; padding-left: 2px"
                >
                  <label class="txtHead">malaylotto_set :&nbsp;</label
                  ><label style="margin-bottom: 0px"
                    >https://test-front.pirate168.com/token?token=jd_m8MB7C0xxvahoWtPg&header=off&lotto=malaylotto_set&url=<label
                      class="txtHead"
                      style="margin-bottom: 0px"
                      >input your link here(full link with https://)</label
                    ></label
                  >
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="row">
                <div
                  class="col-12"
                  style="padding-right: 0px; padding-left: 2px"
                >
                  <label class="txtHead">hanoylottospecial :&nbsp;</label
                  ><label style="margin-bottom: 0px"
                    >https://test-front.pirate168.com/token?token=jd_m8MB7C0xxvahoWtPg&header=off&lotto=hanoylottospecial&url=<label
                      class="txtHead"
                      style="margin-bottom: 0px"
                      >input your link here(full link with https://)</label
                    ></label
                  >
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="row">
                <div
                  class="col-12"
                  style="padding-right: 0px; padding-left: 2px"
                >
                  <label class="txtHead">stockkorea :&nbsp;</label
                  ><label style="margin-bottom: 0px"
                    >https://test-front.pirate168.com/token?token=jd_m8MB7C0xxvahoWtPg&header=off&lotto=stockkorea&url=<label
                      class="txtHead"
                      style="margin-bottom: 0px"
                      >input your link here(full link with https://)</label
                    ></label
                  >
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="row">
                <div
                  class="col-12"
                  style="padding-right: 0px; padding-left: 2px"
                >
                  <label class="txtHead">stockchina :&nbsp;</label
                  ><label style="margin-bottom: 0px"
                    >https://test-front.pirate168.com/token?token=jd_m8MB7C0xxvahoWtPg&header=off&lotto=stockchina&url=<label
                      class="txtHead"
                      style="margin-bottom: 0px"
                      >input your link here(full link with https://)</label
                    ></label
                  >
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="row">
                <div
                  class="col-12"
                  style="padding-right: 0px; padding-left: 2px"
                >
                  <label class="txtHead">stockdowjones :&nbsp;</label
                  ><label style="margin-bottom: 0px"
                    >https://test-front.pirate168.com/token?token=jd_m8MB7C0xxvahoWtPg&header=off&lotto=stockdowjones&url=<label
                      class="txtHead"
                      style="margin-bottom: 0px"
                      >input your link here(full link with https://)</label
                    ></label
                  >
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="row">
                <div
                  class="col-12"
                  style="padding-right: 0px; padding-left: 2px"
                >
                  <label class="txtHead">stocktaiwan :&nbsp;</label
                  ><label style="margin-bottom: 0px"
                    >https://test-front.pirate168.com/token?token=jd_m8MB7C0xxvahoWtPg&header=off&lotto=stocktaiwan&url=<label
                      class="txtHead"
                      style="margin-bottom: 0px"
                      >input your link here(full link with https://)</label
                    ></label
                  >
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="row">
                <div
                  class="col-12"
                  style="padding-right: 0px; padding-left: 2px"
                >
                  <label class="txtHead">stockengland :&nbsp;</label
                  ><label style="margin-bottom: 0px"
                    >https://test-front.pirate168.com/token?token=jd_m8MB7C0xxvahoWtPg&header=off&lotto=stockengland&url=<label
                      class="txtHead"
                      style="margin-bottom: 0px"
                      >input your link here(full link with https://)</label
                    ></label
                  >
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="row">
                <div
                  class="col-12"
                  style="padding-right: 0px; padding-left: 2px"
                >
                  <label class="txtHead">stockindia :&nbsp;</label
                  ><label style="margin-bottom: 0px"
                    >https://test-front.pirate168.com/token?token=jd_m8MB7C0xxvahoWtPg&header=off&lotto=stockindia&url=<label
                      class="txtHead"
                      style="margin-bottom: 0px"
                      >input your link here(full link with https://)</label
                    ></label
                  >
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="row">
                <div
                  class="col-12"
                  style="padding-right: 0px; padding-left: 2px"
                >
                  <label class="txtHead">stockhangseng :&nbsp;</label
                  ><label style="margin-bottom: 0px"
                    >https://test-front.pirate168.com/token?token=jd_m8MB7C0xxvahoWtPg&header=off&lotto=stockhangseng&url=<label
                      class="txtHead"
                      style="margin-bottom: 0px"
                      >input your link here(full link with https://)</label
                    ></label
                  >
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="row">
                <div
                  class="col-12"
                  style="padding-right: 0px; padding-left: 2px"
                >
                  <label class="txtHead">stockegypt :&nbsp;</label
                  ><label style="margin-bottom: 0px"
                    >https://test-front.pirate168.com/token?token=jd_m8MB7C0xxvahoWtPg&header=off&lotto=stockegypt&url=<label
                      class="txtHead"
                      style="margin-bottom: 0px"
                      >input your link here(full link with https://)</label
                    ></label
                  >
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="row">
                <div
                  class="col-12"
                  style="padding-right: 0px; padding-left: 2px"
                >
                  <label class="txtHead">stocknikkei :&nbsp;</label
                  ><label style="margin-bottom: 0px"
                    >https://test-front.pirate168.com/token?token=jd_m8MB7C0xxvahoWtPg&header=off&lotto=stocknikkei&url=<label
                      class="txtHead"
                      style="margin-bottom: 0px"
                      >input your link here(full link with https://)</label
                    ></label
                  >
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="row">
                <div
                  class="col-12"
                  style="padding-right: 0px; padding-left: 2px"
                >
                  <label class="txtHead">stocksingapore :&nbsp;</label
                  ><label style="margin-bottom: 0px"
                    >https://test-front.pirate168.com/token?token=jd_m8MB7C0xxvahoWtPg&header=off&lotto=stocksingapore&url=<label
                      class="txtHead"
                      style="margin-bottom: 0px"
                      >input your link here(full link with https://)</label
                    ></label
                  >
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="row">
                <div
                  class="col-12"
                  style="padding-right: 0px; padding-left: 2px"
                >
                  <label class="txtHead">stockthai :&nbsp;</label
                  ><label style="margin-bottom: 0px"
                    >https://test-front.pirate168.com/token?token=jd_m8MB7C0xxvahoWtPg&header=off&lotto=stockthai&url=<label
                      class="txtHead"
                      style="margin-bottom: 0px"
                      >input your link here(full link with https://)</label
                    ></label
                  >
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="row">
                <div
                  class="col-12"
                  style="padding-right: 0px; padding-left: 2px"
                >
                  <label class="txtHead">stockgerman :&nbsp;</label
                  ><label style="margin-bottom: 0px"
                    >https://test-front.pirate168.com/token?token=jd_m8MB7C0xxvahoWtPg&header=off&lotto=stockgerman&url=<label
                      class="txtHead"
                      style="margin-bottom: 0px"
                      >input your link here(full link with https://)</label
                    ></label
                  >
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="row">
                <div
                  class="col-12"
                  style="padding-right: 0px; padding-left: 2px"
                >
                  <label class="txtHead">stockrussia :&nbsp;</label
                  ><label style="margin-bottom: 0px"
                    >https://test-front.pirate168.com/token?token=jd_m8MB7C0xxvahoWtPg&header=off&lotto=stockrussia&url=<label
                      class="txtHead"
                      style="margin-bottom: 0px"
                      >input your link here(full link with https://)</label
                    ></label
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="box-all-content">
        <div style="position: sticky; top: 0px">
          <!-- <div > -->
          <BoxSem44 />
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "ComSeamless44",
};
</script>
