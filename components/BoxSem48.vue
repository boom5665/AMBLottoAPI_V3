
<template>
  <div style="">
    <div type="primary" class="box-r-scoll">
      <div>
        <div class="font-prim"><span>Code Semless</span></div>
      </div>
      <!-- // -->
      <div class="col-12" id="tabSeven">
        <lable
          ><b style="color: #19a17a !important" set-lan="text:4.8 Detail"
            >4.8
            <span style="padding-left: 3px" id="Seamless_Detail"
              >Detail</span
            ></b
          ></lable
        >
      </div>

      <div class="divBox">
        <div class="col-12">
          <label class="txtHead">Method : </label>
          <label>Post</label>
        </div>
        <div class="col-12">
          <label class="txtHead"> Url : </label>
          <label> https://dev-api.amblotto.net/apiRoute/api/detail </label>
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
      <div class="koh-faq-answer col-12">
        <pre>

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
      <!-- // -->
       <div>
        <div>RESPONSE</div>
        <div class="divBox-content">
          Click Send Code to start a request and see the response here! Or
          choose an example: application/json
          <span>
            <button class="buton-suscess"></button> 200
          </span>

        </div>
      </div>
      <!-- // -->

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
            set-lan="text:Example Service Respond Code"
            >Example Service Respond Code</b
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

                                    <code id="410B" style="border-radius: 0.375rem; height: 500px; overflow: scroll;" class="hljs json">{
    <span class="hljs-attr">"code"</span>: <span class="hljs-number">"0"</span>,
    <span class="hljs-attr">"data"</span>: {
        <span class="hljs-attr">"rate"</span>: {
        <span class="hljs-attr">"baaclotto"</span>: {
        <span class="hljs-attr">"bottom1"</span>: {
        <span class="hljs-attr">"discount"</span>: <span class="hljs-number">0</span>,
        <span class="hljs-attr">"max"</span>: <span class="hljs-number">200000</span>,
        <span class="hljs-attr">"min"</span>: <span class="hljs-number">1</span>,
        <span class="hljs-attr">"payout"</span>: <span class="hljs-number">4.2</span>,
                },
                <span class="hljs-attr">"bottom2"</span>: {
                <span class="hljs-attr">"discount"</span>: <span class="hljs-number">0</span>,
                <span class="hljs-attr">"max"</span>: <span class="hljs-number">20000</span>,
                <span class="hljs-attr">"min"</span>: <span class="hljs-number">1</span>,
                <span class="hljs-attr">"payout"</span>: <span class="hljs-number">90</span>,
                },
                <span class="hljs-attr">"row3"</span>: {
                <span class="hljs-attr">"discount"</span>: <span class="hljs-number">0</span>,
                <span class="hljs-attr">"max"</span>: <span class="hljs-number">20000</span>,
                <span class="hljs-attr">"min"</span>: <span class="hljs-number">1</span>,
                <span class="hljs-attr">"payout"</span>: <span class="hljs-number">150</span>,
                },
                <span class="hljs-attr">"top1"</span>: {
                <span class="hljs-attr">"discount"</span>: <span class="hljs-number">0</span>,
                <span class="hljs-attr">"max"</span>: <span class="hljs-number">200000</span>,
                <span class="hljs-attr">"min"</span>: <span class="hljs-number">1</span>,
                <span class="hljs-attr">"payout"</span>: <span class="hljs-number">3.2</span>
                },
                <span class="hljs-attr">"top2"</span>: {
                <span class="hljs-attr">"discount"</span>: <span class="hljs-number">0</span>,
                <span class="hljs-attr">"max"</span>: <span class="hljs-number">20000</span>,
                <span class="hljs-attr">"min"</span>: <span class="hljs-number">1</span>,
                <span class="hljs-attr">"payout"</span>: <span class="hljs-number">90</span>,
                },
                <span class="hljs-attr">"top3"</span>: {
                <span class="hljs-attr">"discount"</span>: <span class="hljs-number">0</span>,
                <span class="hljs-attr">"max"</span>: <span class="hljs-number">5000,</span>,
                <span class="hljs-attr">"min"</span>: <span class="hljs-number">1</span>,
                <span class="hljs-attr">"payout"</span>: <span class="hljs-number">90</span>
                }
            },
            <span class="hljs-attr">"gsblotto"</span>: {
            <span class="hljs-attr">"bottom1"</span>: {
            <span class="hljs-attr">"discount"</span>: <span class="hljs-number">0</span>,
            <span class="hljs-attr">"max"</span>: <span class="hljs-number">200000</span>,
            <span class="hljs-attr">"min"</span>: <span class="hljs-number">1</span>,
            <span class="hljs-attr">"payout"</span>: <span class="hljs-number">4.2</span>,
                },
                <span class="hljs-attr">"bottom2"</span>: {
                <span class="hljs-attr">"discount"</span>: <span class="hljs-number">0</span>,
                <span class="hljs-attr">"max"</span>: <span class="hljs-number">20000</span>,
                <span class="hljs-attr">"min"</span>: <span class="hljs-number">1</span>,
                <span class="hljs-attr">"payout"</span>: <span class="hljs-number">90</span>,
                },
                <span class="hljs-attr">"row3"</span>: {
                <span class="hljs-attr">"discount"</span>: <span class="hljs-number">0</span>,
                <span class="hljs-attr">"max"</span>: <span class="hljs-number">20000</span>,
                <span class="hljs-attr">"min"</span>: <span class="hljs-number">1</span>,
                <span class="hljs-attr">"payout"</span>: <span class="hljs-number">150</span>,
                },
                <span class="hljs-attr">"top1"</span>: {
                <span class="hljs-attr">"discount"</span>: <span class="hljs-number">0</span>,
                <span class="hljs-attr">"max"</span>: <span class="hljs-number">200000</span>,
                <span class="hljs-attr">"min"</span>: <span class="hljs-number">1</span>,
                <span class="hljs-attr">"payout"</span>: <span class="hljs-number">3.2</span>
                },
                <span class="hljs-attr">"top2"</span>: {
                <span class="hljs-attr">"discount"</span>: <span class="hljs-number">0</span>,
                <span class="hljs-attr">"max"</span>: <span class="hljs-number">20000</span>,
                <span class="hljs-attr">"min"</span>: <span class="hljs-number">1</span>,
                <span class="hljs-attr">"payout"</span>: <span class="hljs-number">90</span>,
                },
                <span class="hljs-attr">"top3"</span>: {
                <span class="hljs-attr">"discount"</span>: <span class="hljs-number">0</span>,
                <span class="hljs-attr">"max"</span>: <span class="hljs-number">5000</span>,
                <span class="hljs-attr">"min"</span>: <span class="hljs-number">1</span>,
                <span class="hljs-attr">"payout"</span>: <span class="hljs-number">90</span>
                }
            },
            <span class="hljs-attr">"hanoylotto"</span>: {
            <span class="hljs-attr">"bottom1"</span>: {
            <span class="hljs-attr">"discount"</span>: <span class="hljs-number">0</span>,
            <span class="hljs-attr">"max"</span>: <span class="hljs-number">200000</span>,
            <span class="hljs-attr">"min"</span>: <span class="hljs-number">1</span>,
            <span class="hljs-attr">"payout"</span>: <span class="hljs-number">4.2</span>,
                },
                <span class="hljs-attr">"bottom2"</span>: {
                <span class="hljs-attr">"discount"</span>: <span class="hljs-number">0</span>,
                <span class="hljs-attr">"max"</span>: <span class="hljs-number">20000</span>,
                <span class="hljs-attr">"min"</span>: <span class="hljs-number">1</span>,
                <span class="hljs-attr">"payout"</span>: <span class="hljs-number">90</span>,
                },
                <span class="hljs-attr">"row3"</span>: {
                <span class="hljs-attr">"discount"</span>: <span class="hljs-number">0</span>,
                <span class="hljs-attr">"max"</span>: <span class="hljs-number">20000</span>,
                <span class="hljs-attr">"min"</span>: <span class="hljs-number">1</span>,
                <span class="hljs-attr">"payout"</span>: <span class="hljs-number">150</span>,
                },
                <span class="hljs-attr">"top1"</span>: {
                <span class="hljs-attr">"discount"</span>: <span class="hljs-number">0</span>,
                <span class="hljs-attr">"max"</span>: <span class="hljs-number">200000</span>,
                <span class="hljs-attr">"min"</span>: <span class="hljs-number">1</span>,
                <span class="hljs-attr">"payout"</span>: <span class="hljs-number">3.2</span>
                },
                <span class="hljs-attr">"top2"</span>: {
                <span class="hljs-attr">"discount"</span>: <span class="hljs-number">0</span>,
                <span class="hljs-attr">"max"</span>: <span class="hljs-number">20000</span>,
                <span class="hljs-attr">"min"</span>: <span class="hljs-number">1</span>,
                <span class="hljs-attr">"payout"</span>: <span class="hljs-number">90</span>,
                },
                <span class="hljs-attr">"top3"</span>: {
                <span class="hljs-attr">"discount"</span>: <span class="hljs-number">0</span>,
                <span class="hljs-attr">"max"</span>: <span class="hljs-number">5000</span>,
                <span class="hljs-attr">"min"</span>: <span class="hljs-number">1</span>,
                <span class="hljs-attr">"payout"</span>: <span class="hljs-number">90</span>
                }
            },
        }
    }
}</code></pre>
      </div>

      <!-- // -->
       <div>
        <div>RESPONSE</div>
        <div class="divBox-content">
          Click Send Code to start a request and see the response here! Or
          choose an example: application/json
          <span>
            <button class="buton-suscess"></button> 200
          </span>

        </div>
      </div>
      <!-- // -->
    </div>
  </div>
</template>

<script>
export default {
  name: "BoxSem48",
};
</script>
