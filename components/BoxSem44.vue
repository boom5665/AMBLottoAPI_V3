
<template>
  <div style="">
    <div type="primary" class="box-r-scoll">
      <div>
        <div class="font-prim"><span>Code Semless</span></div>
      </div>
      <div class="col-12" id="tabFour">
        <lable
          ><b style="color: #19a17a !important" set-lan="text:4.4 login request"
            >4.4
            <span style="padding-left: 3px" id="Seamless_login_request"
              >Login request</span
            ></b
          ></lable
        >
      </div>
      <div class="divBox" style="margin-left: 0%">
        <div class="col-12">
          <label class="txtHead">Method : </label>
          <label>Post</label>
        </div>
        <div class="col-12">
          <label class="txtHead"> Url : </label>
          <label>
            https://dev-api.amblotto.net/apiRoute/member/loginRequest
          </label>
        </div>
        <div class="col-12">
          <label class="txtHead"> headers : </label>
          <label> content-type application/json </label>
        </div>
      </div>
      <div class="boxinput">
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
      <div>
        <div class="koh-faq-answer col-12">
          <pre>

                                        <code id="3_4A" style="border-radius: 0.375rem;" class="hljs json">{
    <span class="hljs-attr">"agentUsername"</span>: <span class="hljs-string">"comptestseamless"</span>,
    <span class="hljs-attr">"agentApiKey"</span>: <span class="hljs-string">"18791944ec1a15e649c390d1403c5d6bc888a0d63602116c8f8b1725975e7c2eb832b2509f00eaf11f35bfbf810637e0"</span>,
    <span class="hljs-attr">"playerUsername"</span>: <span class="hljs-string">"member1"</span>
}</code></pre>
        </div>
      </div>
      <div>
        <div>RESPONSE</div>
        <div class="divBox-content">
          Click Send Code to start a request and see the response here! Or
          choose an example: application/json
          <span> <button class="buton-suscess"></button> 200 </span>
        </div>
      </div>
      <div class="boxinput">
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
            >Example Reponse
          </b>
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
      <div class="section">
        <div class="slide">
          <details class="s_container">
            <summary class="s_summary">
              <p class="s_left_col">
                <span class="s_triangle">&blacktriangledown;</span>
              </p>
            </summary>
            <div class="koh-faq-answer col-12">
              <pre>

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
          </details>
        </div>
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
  name: "BoxSem44",
};
</script>
