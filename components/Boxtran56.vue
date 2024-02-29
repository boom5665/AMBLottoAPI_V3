
<template>
  <div style="">
    <div type="primary" class="box-r-scoll">
      <div>
        <div class="font-prim"><span>Code Tranfer</span></div>
      </div>
      <!-- // -->
      <div class="col-12" id="tabFour">
        <lable
          ><b style="color: #19a17a !important"
            >5.6
            <span style="padding-left: 3px" id="withdrawal">withdrawal</span></b
          ></lable
        >
      </div>
      <div class="divBox">
        <div class="col-12">
          <label class="txtHead">Method : </label>
          <label>Post</label>
        </div>
        <div class="col-12">
          <label class="txtHead">Url : </label>
          <label> https://dev-api.amblotto.net/apiRoute/api/withdraw </label>
        </div>
        <div class="col-12">
          <label class="txtHead"> headers : </label>
          <label> content-type application/json </label>
        </div>
      </div>
      <div class="col-12 boxinput">
        <div class="false-input">
          <input type="text" placeholder="Username" />
        </div>
        <div class="false-input">
          <input type="text" placeholder="Password" />
        </div>
      </div>
      <div class="koh-faq-question form-group ex">
        <lable class="Point">
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
          <div class="btn-send">
            <button class="custom-btn btn-13">Send Code</button>
          </div>
        </lable>
      </div>
      <div class="koh-faq-answer col-12">
        <pre>
                                    <!-- <div class="copy-clipboard" style=" position: absolute;width: 20px;top: 10px;right: 0;cursor:pointer">
                                        <svg  style="position: absolute;width: 20px;left: -25px;" onclick="copyContent(document.getElementById('tran_tabfive-eg_ser').innerHTML)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Copy to Clipboard</title><path d="M18 6v-6h-18v18h6v6h18v-18h-6zm-12 10h-4v-14h14v4h-10v10zm16 6h-14v-14h14v14z"></path></svg>
                                    </div> -->
                                    <code id="47A" style="border-radius: 0.375rem;" class="hljs json">{
    <span class="hljs-attr">"agentUsername"</span>: <span class="hljs-string">"agentapi",</span>
    <span class="hljs-attr">"agentApiKey"</span>: <span class="hljs-string">"18c089a2e49dfc1776b6abc2ea3ee909d43b10bc37dfd7195a7265da82f8b4a983a1ebf3",</span>
    <span class="hljs-attr">"playerUsername"</span>: <span class="hljs-string">"testuserapi001",</span>
    <span class="hljs-attr">"balance"</span>: <span class="hljs-number">100,</span>
    <span class="hljs-attr">"transId"</span>: <span class="hljs-string">"25f0c27dbea3f3261f2cd66126761251s2712676121657"</span>
}</code></pre>
        <!-- <script src="./API_files/ex4_7.js.download"></script> -->
      </div>

      <!-- // -->
      <div>
        <div>RESPONSE</div>
        <div class="divBox-content">
          Click Send Code to start a request and see the response here! Or
          choose an example: application/json
          <span> <button class="buton-suscess"></button> 200 </span>
        </div>
      </div>

      <div class="col-12 boxinput">
        <div class="false-input">
          <input type="text" placeholder="Username" />
        </div>
        <div class="false-input">
          <input type="text" placeholder="Password" />
        </div>
      </div>
      <div class="koh-faq-question form-group ex">
        <lable class="Point"
          ><b style="color: #19a17a !important">Example Service Respond Code</b
          ><i
            class="fa fa-chevron-down"
            aria-hidden="true"
            style="margin-left: 2%; font-size: 1rem"
          ></i
        ></lable>
        <div class="btn-send">
          <button class="custom-btn btn-13">Send Code</button>
        </div>
      </div>
      <div class="koh-faq-answer col-12">
        <pre>

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
      <div>
        <div>RESPONSE</div>
        <div class="divBox-content">
          Click Send Code to start a request and see the response here! Or
          choose an example: application/json
          <span> <button class="buton-suscess"></button> 200 </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BoxSem56",
};
</script>
