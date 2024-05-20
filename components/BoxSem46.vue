
<template>
  <div style="">
    <div type="primary" class="box-r-scoll">
      <div>
        <div class="font-prim"><span>Code Seamless</span></div>
      </div>
      <!-- // -->
      <div class="col-12" id="tabSeven">
        <div>
          <b style="color: #19a17a !important" set-lan="text:4.6 UserPlaceBet"
            >4.6
            <span style="padding-left: 3px" id="Seamless_UserPlaceBet"
              >ListPlaceout</span
            ></b
          >
        </div>
      </div>
      <div class="divBox">
        <div class="col-12" style="margin-left: 0%">
          <label class="txtHead">Method : </label>
          <label>Post</label>
        </div>
        <div class="col-12">
          <label class="txtHead"> Url : </label>
          <label>
            https://test-api.askmelotto.com/apiRoute/api/ListPlaceout
          </label>
        </div>
        <div class="col-12">
          <label class="txtHead"> headers : </label>
          <label> content-type application/json </label>
        </div>
      </div>

      <div class="col-12" id="tabSix" style="left: 5px">
        <div>
          <b
            style="color: #19a17a !important"
            set-lan="text:4.5.1 GetUserBalance"
          >
            <span style="padding-left: 3px" id="Seamless_GetUserDetail"
              >Input Your URL </span
            ></b
          >
        </div>
      </div>

      <div class="boxinput">
        <div class="false-input">
          <input
            type="text"
            v-model="URLdata"
            placeholder="Please enter your URLhere."
          />
        </div>
      </div>

      <div class="col-12" id="tabSix" style="left: 5px; padding-top: 10px">
        <div>
          <b
            style="color: #19a17a !important"
            set-lan="text:4.5.1 GetUserBalance"
          >
            <span style="padding-left: 3px" id="Seamless_GetUserDetail"
              >Input Your Request body</span
            ></b
          >
        </div>
      </div>
      <div class="koh-faq-answer col-12">
        <code>
          <textarea
            v-model="jsonData"
            rows="10"
            cols="50"
            class="custom-textarea"
          >
          </textarea>
        </code>
      </div>

      <div class="koh-faq-question form-group ex">
        <div class="Point">
          <b
            style="color: #19a17a !important"
            set-lan="text:Example Request Body"
            >Example Request Body
          </b>
          <i
            class="fa fa-chevron-down"
            aria-hidden="true"
            style="margin-left: 2%; font-size: 1rem"
          ></i>
          <div class="btn-send">
            <a href="#openModal-about">
              <button class="custom-btn btn-13" @click="get_Seamless">
                Send Code
              </button></a
            >
          </div>
        </div>
      </div>
      <div class="koh-faq-answer col-12">
        <copy-text id="myDiv">
          <pre>

                                        <code id="410A" style="border-radius: 0.375rem;" class="hljs json">{
    <span class="hljs-attr">"agentUsername"</span>: <span class="hljs-string">"buildexcompany"</span>,
    <span class="hljs-attr">"agentApiKey"</span>: <span class="hljs-string">"504947f655f822e2f8f414bbc1a34ba763c7570ef638135f30b5696c899f806901e163f59f3a86d0c8cd"</span>
}</code></pre>
        </copy-text>
      </div>
      <!-- // -->
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
                <!-- <div class="btn-send">
                  <button class="custom-btn btn-13">Send Code</button>
                </div> -->
              </div>
            </div>

            <div>
              <div class="koh-faq-answer col-12">
                <div class="">
                  <div
                    @click="copyTexttwo"
                    class="copy-clipboard"
                    style="left: 91%"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <title>Copy to Clipboard</title>
                      <path
                        d="M18 6v-6h-18v18h6v6h18v-18h-6zm-12 10h-4v-14h14v4h-10v10zm16 6h-14v-14h14v14z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <pre id="myDivtwo">
        <code  style="border-radius: 0.375rem;  height: 300px; overflow: scroll;" class="hljs json">
          {
          <span class="hljs-attr">"code"</span>: <span class="hljs-number">"0"</span>,
          <span class="hljs-attr">"dataenable"</span>: {
              <span class="hljs-attr">"baaclotto"</span>: {
                  <span class="hljs-attr">"enable"</span>: <span class="hljs-number">"true"</span>
              },
              <span class="hljs-attr">"gsblotto"</span>: {
                  <span class="hljs-attr">"enable"</span>: <span class="hljs-number">"true"</span>
              },
              <span class="hljs-attr">"hanoilotto"</span>: {
                  <span class="hljs-attr">"enable"</span>: <span class="hljs-number">"true"</span>
              },
              <span class="hljs-attr">"hanoilottospecial"</span>: {
                  <span class="hljs-attr">"enable"</span>: <span class="hljs-number">"true"</span>
              },
              <span class="hljs-attr">"hanoilottovip"</span>: {
                  <span class="hljs-attr">"enable"</span>: <span class="hljs-number">"false"</span>
              },
              <span class="hljs-attr">"laoslotto"</span>: {
                  <span class="hljs-attr">"enable"</span>: <span class="hljs-number">"true"</span>
              },
              <span class="hljs-attr">"malaylotto"</span>: {
                  <span class="hljs-attr">"enable"</span>: <span class="hljs-number">"true"</span>
              },
              <span class="hljs-attr">"pingponglotto"</span>: {
                  <span class="hljs-attr">"enable"</span>: <span class="hljs-number">"true"</span>
              },
              <span class="hljs-attr">"stock"</span>: {
                  <span class="hljs-attr">"enable"</span>: <span class="hljs-number">"true"</span>
              },
              <span class="hljs-attr">"thailotto"</span>: {
                  <span class="hljs-attr">"enable"</span>: <span class="hljs-number">"true"</span>
              },
              <span class="hljs-attr">"yeekeelotto"</span>: {
                  <span class="hljs-attr">"enable"</span>: <span class="hljs-number">"true"</span>
              }
          },
          <span class="hljs-attr">"datahotplaceout"</span>: {
              <span class="hljs-attr">"baaclotto"</span>: {
                  <span class="hljs-attr">"bottom1"</span>: {
                      <span class="hljs-attr">"amount"</span>: <span class="hljs-number">0</span>
                  },
                  <span class="hljs-attr">"bottom2"</span>: {
                      <span class="hljs-attr">"amount"</span>: <span class="hljs-number">0</span>
                  },
                  <span class="hljs-attr">"row3"</span>: {
                      <span class="hljs-attr">"amount"</span>: <span class="hljs-number">0</span>
                  },
                  <span class="hljs-attr">"top1"</span>: {
                      <span class="hljs-attr">"amount"</span>: <span class="hljs-number">0</span>
                  },
                  <span class="hljs-attr">"top2"</span>: {
                      <span class="hljs-attr">"amount"</span>: <span class="hljs-number">5</span>
                  },
                  <span class="hljs-attr">"top3"</span>: {
                      <span class="hljs-attr">"amount"</span>: <span class="hljs-number">0</span>
                  }
              },
              <span class="hljs-attr">"gsblotto"</span>: {
                  <span class="hljs-attr">"bottom1"</span>: {
                      <span class="hljs-attr">"amount"</span>: <span class="hljs-number">10</span>
                  },
                  <span class="hljs-attr">"bottom2"</span>: {
                      <span class="hljs-attr">"amount"</span>: <span class="hljs-number">10</span>
                  },
                  <span class="hljs-attr">"row3"</span>: {
                      <span class="hljs-attr">"amount"</span>: <span class="hljs-number">0</span>
                  },
                  <span class="hljs-attr">"top1"</span>: {
                      <span class="hljs-attr">"amount"</span>: <span class="hljs-number">10</span>
                  },
                  <span class="hljs-attr">"top2"</span>: {
                      <span class="hljs-attr">"amount"</span>: <span class="hljs-number">10</span>
                  },
                  <span class="hljs-attr">"top3"</span>: {
                      <span class="hljs-attr">"amount"</span>: <span class="hljs-number">100</span>
                  }
              },
              <span class="hljs-attr">"hanoilotto"</span>: {
                  <span class="hljs-attr">"hanoilotto"</span>: {
                      <span class="hljs-attr">"bottom1"</span>: {
                          <span class="hljs-attr">"amount"</span>: <span class="hljs-number">5</span>
                      },
                      <span class="hljs-attr">"bottom2"</span>: {
                          <span class="hljs-attr">"amount"</span>: <span class="hljs-number">2</span>
                      },
                      <span class="hljs-attr">"row3"</span>: {
                          <span class="hljs-attr">"amount"</span>: <span class="hljs-number">5</span>
                      },
                      <span class="hljs-attr">"top1"</span>: {
                          <span class="hljs-attr">"amount"</span>: <span class="hljs-number">1</span>
                      },
                      <span class="hljs-attr">"top2"</span>: {
                          <span class="hljs-attr">"amount"</span>: <span class="hljs-number">5</span>
                      },
                      <span class="hljs-attr">"top3"</span>: {
                          <span class="hljs-attr">"amount"</span>: <span class="hljs-number">100</span>
                      }
                  }
              },
              <span class="hljs-attr">"hanoilottospecial"</span>: {
                  <span class="hljs-attr">"hanoilottospecial"</span>: {
                      <span class="hljs-attr">"bottom1"</span>: {
                          <span class="hljs-attr">"amount"</span>: <span class="hljs-number">5</span>
                      },
                      <span class="hljs-attr">"bottom2"</span>: {
                          <span class="hljs-attr">"amount"</span>: <span class="hljs-number">5</span>
                      },
                      <span class="hljs-attr">"row3"</span>: {
                          <span class="hljs-attr">"amount"</span>: <span class="hljs-number">5</span>
                      },
                      <span class="hljs-attr">"top1"</span>: {
                          <span class="hljs-attr">"amount"</span>: <span class="hljs-number">5</span>
                      },
                      <span class="hljs-attr">"top2"</span>: {
                          <span class="hljs-attr">"amount"</span>: <span class="hljs-number">5</span>
                      },
                      <span class="hljs-attr">"top3"</span>: {
                          <span class="hljs-attr">"amount"</span>: <span class="hljs-number">5</span>
                      }
                  },
                  <span class="hljs-attr">"hanoilottospecial"</span>: {
                      <span class="hljs-attr">"lottoset"</span>: <span class="hljs-number">null</span>
                  }
              },
              <span class="hljs-attr">"hanoilottovip"</span>: {
                  <span class="hljs-attr">"hanoilottovip"</span>: {
                      <span class="hljs-attr">"bottom1"</span>: {
                          <span class="hljs-attr">"amount"</span>: <span class="hljs-number">5</span>
                      },
                      <span class="hljs-attr">"bottom2"</span>: {
                          <span class="hljs-attr">"amount"</span>: <span class="hljs-number">5</span>
                      },
                      <span class="hljs-attr">"row3"</span>: {
                          <span class="hljs-attr">"amount"</span>: <span class="hljs-number">10</span>
                      },
                      <span class="hljs-attr">"top1"</span>: {
                          <span class="hljs-attr">"amount"</span>: <span class="hljs-number">5</span>
                      },
                      <span class="hljs-attr">"top2"</span>: {
                          <span class="hljs-attr">"amount"</span>: <span class="hljs-number">5</span>
                      },
                      <span class="hljs-attr">"top3"</span>: {
                          <span class="hljs-attr">"amount"</span>: <span class="hljs-number">10</span>
                      }
                  },
                  <span class="hljs-attr">"hanoilottovip_set"</span>: {
                      <span class="hljs-attr">"lottoset"</span>: <span class="hljs-number">null</span>
                  }
              },
              <span class="hljs-attr">"hanoilottovip"</span>: {
                  <span class="hljs-attr">"hanoilottovip"</span>: {
                      <span class="hljs-attr">"bottom1"</span>: {
                          <span class="hljs-attr">"amount"</span>: <span class="hljs-number">0</span>
                      },
                      <span class="hljs-attr">"bottom2"</span>: {
                          <span class="hljs-attr">"amount"</span>: <span class="hljs-number">0</span>
                      },
                      <span class="hljs-attr">"row2"</span>: {
                          <span class="hljs-attr">"amount"</span>: <span class="hljs-number">0</span>
                      },
                      <span class="hljs-attr">"row3"</span>: {
                          <span class="hljs-attr">"amount"</span>: <span class="hljs-number">0</span>
                      },
                      <span class="hljs-attr">"row4"</span>: {
                          <span class="hljs-attr">"amount"</span>: <span class="hljs-number">0</span>
                      },
                      <span class="hljs-attr">"top1"</span>: {
                          <span class="hljs-attr">"amount"</span>: <span class="hljs-number">0</span>
                      },
                      <span class="hljs-attr">"top2"</span>: {
                          <span class="hljs-attr">"amount"</span>: <span class="hljs-number">0</span>
                      },
                      <span class="hljs-attr">"top3"</span>: {
                          <span class="hljs-attr">"amount"</span>: <span class="hljs-number">0</span>
                      },
                      <span class="hljs-attr">"top4"</span>: {
                          <span class="hljs-attr">"amount"</span>: <span class="hljs-number">800</span>
                      }
                  },
                  <span class="hljs-attr">"laoslotto_set"</span>: <span class="hljs-number">null</span>
              },
              <span class="hljs-attr">"malaylotto"</span>: {
                  <span class="hljs-attr">"malaylotto"</span>: {
                      <span class="hljs-attr">"bottom1"</span>: {
                          <span class="hljs-attr">"amount"</span>: <span class="hljs-number">2</span>
                      },
                      <span class="hljs-attr">"bottom2"</span>: {
                          <span class="hljs-attr">"amount"</span>: <span class="hljs-number">2</span>
                      },
                      <span class="hljs-attr">"row3"</span>: {
                          <span class="hljs-attr">"amount"</span>: <span class="hljs-number">2</span>
                      },
                      <span class="hljs-attr">"top1"</span>: {
                          <span class="hljs-attr">"amount"</span>: <span class="hljs-number">2</span>
                      },
                      <span class="hljs-attr">"top2"</span>: {
                          <span class="hljs-attr">"amount"</span>: <span class="hljs-number">2</span>
                      },
                      <span class="hljs-attr">"top3"</span>: {
                          <span class="hljs-attr">"amount"</span>: <span class="hljs-number">2</span>
                      }
                  },
                  <span class="hljs-attr">"malaylotto_set"</span>: {
                      <span class="hljs-attr">"lottoset"</span>: <span class="hljs-number">null</span>
                  }
              },
              <span class="hljs-attr">"pingponglotto"</span>: {
                  <span class="hljs-attr">"bottom1"</span>: {
                      <span class="hljs-attr">"amount"</span>: <span class="hljs-number">0</span>
                  },
                  <span class="hljs-attr">"bottom2"</span>: {
                      <span class="hljs-attr">"amount"</span>: <span class="hljs-number">0</span>
                  },
                  <span class="hljs-attr">"row2"</span>: {
                      <span class="hljs-attr">"amount"</span>: <span class="hljs-number">0</span>
                  },
                  <span class="hljs-attr">"row3"</span>: {
                      <span class="hljs-attr">"amount"</span>: <span class="hljs-number">0</span>
                  },
                  <span class="hljs-attr">"row4"</span>: {
                      <span class="hljs-attr">"amount"</span>: <span class="hljs-number">0</span>
                  },
                  <span class="hljs-attr">"top1"</span>: {
                      <span class="hljs-attr">"amount"</span>: <span class="hljs-number">500</span>
                  },
                  <span class="hljs-attr">"top2"</span>: {
                      <span class="hljs-attr">"amount"</span>: <span class="hljs-number">0</span>
                  },
                  <span class="hljs-attr">"top3"</span>: {
                      <span class="hljs-attr">"amount"</span>: <span class="hljs-number">0</span>
                  },
                  <span class="hljs-attr">"top4"</span>: {
                      <span class="hljs-attr">"amount"</span>: <span class="hljs-number">0</span>
                  },
                  <span class="hljs-attr">"top5"</span>: {
                      <span class="hljs-attr">"amount"</span>: <span class="hljs-number">0</span>
                  },
                  <span class="hljs-attr">"top6"</span>: {
                      <span class="hljs-attr">"amount"</span>: <span class="hljs-number">5000</span>
                  }
              },
              <span class="hljs-attr">"stock"</span>: {
                  <span class="hljs-attr">"malaylotto"</span>: {
                      <span class="hljs-attr">"bottom1"</span>: {
                          <span class="hljs-attr">"amount"</span>: <span class="hljs-number">0</span>
                      },
                      <span class="hljs-attr">"bottom2"</span>: {
                          <span class="hljs-attr">"amount"</span>: <span class="hljs-number">0</span>
                      },
                      <span class="hljs-attr">"row3"</span>: {
                          <span class="hljs-attr">"amount"</span>: <span class="hljs-number">0</span>
                      },
                      <span class="hljs-attr">"top1"</span>: {
                          <span class="hljs-attr">"amount"</span>: <span class="hljs-number">0</span>
                      },
                      <span class="hljs-attr">"top2"</span>: {
                          <span class="hljs-attr">"amount"</span>: <span class="hljs-number">0</span>
                      },
                      <span class="hljs-attr">"top3"</span>: {
                          <span class="hljs-attr">"amount"</span>: <span class="hljs-number">50</span>
                      }
                  },
                  <span class="hljs-attr">"malaylotto_set"</span>: {
                      <span class="hljs-attr">"lottoset"</span>: <span class="hljs-number">null</span>
                  }
              },
              <span class="hljs-attr">"thailotto"</span>: {
                  <span class="hljs-attr">"bottom1"</span>: {
                      <span class="hljs-attr">"amount"</span>: <span class="hljs-number">0</span>
                  },
                  <span class="hljs-attr">"bottom2"</span>: {
                      <span class="hljs-attr">"amount"</span>: <span class="hljs-number">0</span>
                  },
                  <span class="hljs-attr">"bottom3"</span>: {
                      <span class="hljs-attr">"amount"</span>: <span class="hljs-number">0</span>
                  },
                  <span class="hljs-attr">"row2"</span>: {
                      <span class="hljs-attr">"amount"</span>: <span class="hljs-number">0</span>
                  },
                  <span class="hljs-attr">"row3"</span>: {
                      <span class="hljs-attr">"amount"</span>: <span class="hljs-number">0</span>
                  },
                  <span class="hljs-attr">"row4"</span>: {
                      <span class="hljs-attr">"amount"</span>: <span class="hljs-number">0</span>
                  },
                  <span class="hljs-attr">"top1"</span>: {
                      <span class="hljs-attr">"amount"</span>: <span class="hljs-number">500</span>
                  },
                  <span class="hljs-attr">"top2"</span>: {
                      <span class="hljs-attr">"amount"</span>: <span class="hljs-number">0</span>
                  },
                  <span class="hljs-attr">"top3"</span>: {
                      <span class="hljs-attr">"amount"</span>: <span class="hljs-number">0</span>
                  },
                  <span class="hljs-attr">"top4"</span>: {
                      <span class="hljs-attr">"amount"</span>: <span class="hljs-number">0</span>
                  },
                  <span class="hljs-attr">"top5"</span>: {
                      <span class="hljs-attr">"amount"</span>: <span class="hljs-number">0</span>
                  },
                  <span class="hljs-attr">"top6"</span>: {
                      <span class="hljs-attr">"amount"</span>: <span class="hljs-number">500</span>
                  }
              },
              <span class="hljs-attr">"yeekeelotto"</span>: {
                  <span class="hljs-attr">"bottom1"</span>: {
                          <span class="hljs-attr">"amount"</span>: <span class="hljs-number">0</span>
                      },
                      <span class="hljs-attr">"bottom2"</span>: {
                          <span class="hljs-attr">"amount"</span>: <span class="hljs-number">0</span>
                      },
                      <span class="hljs-attr">"row3"</span>: {
                          <span class="hljs-attr">"amount"</span>: <span class="hljs-number">0</span>
                      },
                      <span class="hljs-attr">"top1"</span>: {
                          <span class="hljs-attr">"amount"</span>: <span class="hljs-number">0</span>
                      },
                      <span class="hljs-attr">"top2"</span>: {
                          <span class="hljs-attr">"amount"</span>: <span class="hljs-number">0</span>
                      },
                      <span class="hljs-attr">"top3"</span>: {
                          <span class="hljs-attr">"amount"</span>: <span class="hljs-number">50</span>
                      }
                  }
              },
          },
          <span class="hljs-attr">"datapayout"</span>: {
              <span class="hljs-attr">"baaclotto"</span>: {
                  <span class="hljs-attr">"bottom1"</span>: {
                          <span class="hljs-attr">"discount"</span>: <span class="hljs-number">0</span>,
                          <span class="hljs-attr">"payout"</span>: <span class="hljs-number">4.2</span>
                      },
                      <span class="hljs-attr">"bottom2"</span>: {
                          <span class="hljs-attr">"discount"</span>: <span class="hljs-number">0</span>,
                          <span class="hljs-attr">"payout"</span>: <span class="hljs-number">100</span>
                      },
                      <span class="hljs-attr">"row3"</span>: {
                          <span class="hljs-attr">"discount"</span>: <span class="hljs-number">0</span>,
                          <span class="hljs-attr">"payout"</span>: <span class="hljs-number">166.6</span>
                      },
                      <span class="hljs-attr">"top1"</span>: {
                          <span class="hljs-attr">"discount"</span>: <span class="hljs-number">0</span>,
                          <span class="hljs-attr">"payout"</span>: <span class="hljs-number">3.2</span>
                      },
                      <span class="hljs-attr">"top2"</span>: {
                          <span class="hljs-attr">"discount"</span>: <span class="hljs-number">0</span>,
                          <span class="hljs-attr">"payout"</span>: <span class="hljs-number">100</span>
                      },
                      <span class="hljs-attr">"top3"</span>: {
                          <span class="hljs-attr">"discount"</span>: <span class="hljs-number">0</span>,
                          <span class="hljs-attr">"payout"</span>: <span class="hljs-number">1000</span>
                      }
                  },
              },
              <span class="hljs-attr">"gsblotto"</span>: {
                  <span class="hljs-attr">"bottom1"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">4.2</span>
                  },
                  <span class="hljs-attr">"bottom2"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">100</span>
                  },
                  <span class="hljs-attr">"row3"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">166.6</span>
                  },
                  <span class="hljs-attr">"top1"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">3.2</span>
                  },
                  <span class="hljs-attr">"top2"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">100</span>
                  },
                  <span class="hljs-attr">"top3"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">1000</span>,
                  }
              },
              <span class="hljs-attr">"hanoilotto"</span>: {
              <span class="hljs-attr">"bottom1"</span>: {
              <span class="hljs-attr">"discount"</span>: <span class="hljs-number">0</span>,
              <span class="hljs-attr">"payout"</span>: <span class="hljs-number">4.2</span>,
                  },
                  <span class="hljs-attr">"bottom2"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">100</span>
                  },
                  <span class="hljs-attr">"row3"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">166.6</span>
                  },
                  <span class="hljs-attr">"top1"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">3.2</span>
                  },
                  <span class="hljs-attr">"top2"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">100</span>
                  },
                  <span class="hljs-attr">"top3"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">1000</span>
                  }
              },
              <span class="hljs-attr">"hanoilotto_set"</span>: {
              <span class="hljs-attr">"back2"</span>: {
              <span class="hljs-attr">"discount"</span>: <span class="hljs-number">0</span>,
              <span class="hljs-attr">"payout"</span>: <span class="hljs-number">100</span>
                  },
                  <span class="hljs-attr">"front2"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">100</span>
                  },
                  <span class="hljs-attr">"row3"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>:<span class="hljs-number"> 166.6</span>
                  },
                  <span class="hljs-attr">"row4"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">416.6</span>
                  },
                  <span class="hljs-attr">"top3"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">1000</span>
                  },
                  <span class="hljs-attr">"top4"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>:<span class="hljs-number"> 10000</span>
                  }
              },
              <span class="hljs-attr">"hanoilottospecial"</span>: {
              <span class="hljs-attr">"bottom1"</span>: {
              <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
              <span class="hljs-attr">"payout"</span>: <span class="hljs-number">4.2</span>
                  },
                  <span class="hljs-attr">"bottom2"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">100</span>
                  },
                  <span class="hljs-attr">"row3"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">166.6</span>
                  },
                  <span class="hljs-attr">"top1"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">3.2</span>
                  },
                  <span class="hljs-attr">"top2"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">100</span>
                  },
                  <span class="hljs-attr">"top3"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">1000</span>
                  }
              },
              <span class="hljs-attr">"hanoilottospecial_set"</span>: {
              <span class="hljs-attr">"back2"</span>: {
              <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
              <span class="hljs-attr">"payout"</span>: <span class="hljs-number">100</span>
                  },
                  <span class="hljs-attr">"front2"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">100</span>
                  },
                  <span class="hljs-attr">"row3"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>:<span class="hljs-number"> 166.6</span>
                  },
                  <span class="hljs-attr">"row4"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">416.6</span>
                  },
                  <span class="hljs-attr">"top3"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">1000</span>
                  },
                <span class="hljs-attr"> "top4"</span>: {
                <span class="hljs-attr"> "discount"<span class="hljs-number">0</span>,
                <span class="hljs-attr"> "payout"</span>: 10000</span>
                  }
              },
              <span class="hljs-attr">"hanoilottovip"</span>: {
              <span class="hljs-attr">"bottom1"</span>: {
              <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
              <span class="hljs-attr">"payout"</span>: <span class="hljs-number">4.2</span>
                  },
                  <span class="hljs-attr">"bottom2"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">100</span>
                  },
                  <span class="hljs-attr">"row3"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>:<span class="hljs-number"> 166.6</span>
                  },
                  <span class="hljs-attr">"top1"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>:<span class="hljs-number"> 3.2</span>
                  },
                  <span class="hljs-attr">"top2"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">100</span>
                  },
                  <span class="hljs-attr">"top3"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>:<span class="hljs-number"> 900</span>
                  }
              },
              <span class="hljs-attr">"hanoilottovip_set"</span>: {
              <span class="hljs-attr">"back2"</span>: {
              <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
              <span class="hljs-attr">"payout"</span>:<span class="hljs-number"> 100</span>
                  },
                  <span class="hljs-attr">"front2"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>:<span class="hljs-number"> 100</span>
                  },
                  <span class="hljs-attr">"row3"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>:<span class="hljs-number"> 166.6</span>
                  },
                  <span class="hljs-attr">"row4"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>:<span class="hljs-number"> 416.6</span>
                  },
                  <span class="hljs-attr">"top3"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">1000</span>
                  },
                  <span class="hljs-attr">"top4"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">9000</span>
                  }
              },
              <span class="hljs-attr">"laoslotto_thai"</span>: {
              <span class="hljs-attr">"back2"</span>: {
              <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
              <span class="hljs-attr">"payout"</span>:<span class="hljs-number"> 100</span>
                  },
                  <span class="hljs-attr">"front2"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>:<span class="hljs-number"> 100</span>
                  },
                  <span class="hljs-attr">"row3"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>:<span class="hljs-number"> 166.6</span>
                  },
                  <span class="hljs-attr">"row4"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">416.6</span>
                  },
                  <span class="hljs-attr">"top3"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">1000</span>
                  },
                  <span class="hljs-attr">"top4"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">10000</span>
                  }
              },
              <span class="hljs-attr">"malaylotto"</span>: {
              <span class="hljs-attr">"bottom1"</span>: {
              <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
              <span class="hljs-attr">"payout"</span>: <span class="hljs-number">4.2</span>
                  },
                  <span class="hljs-attr">"bottom2"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">100</span>
                  },
                  <span class="hljs-attr">"row3"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">166.6</span>
                  },
                  <span class="hljs-attr">"top1"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">3.2</span>
                  },
                  <span class="hljs-attr">"top2"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">100</span>
                  },
                  <span class="hljs-attr">"top3"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">1000</span>
                  }
              },
              <span class="hljs-attr">"malaylotto_set"</span>: {
              <span class="hljs-attr">"back2"</span>: {
              <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
              <span class="hljs-attr">"payout"</span>: <span class="hljs-number">100</span>
                  },
                  <span class="hljs-attr">"front2"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>:<span class="hljs-number"> 100</span>
                  },
                  <span class="hljs-attr">"row3"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">166.6</span>
                  },
                  <span class="hljs-attr">"row4"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>:<span class="hljs-number"> 416.6</span>
                  },
                  <span class="hljs-attr">"top3"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">1000</span>
                  },
                  <span class="hljs-attr">"top4"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>:<span class="hljs-number"> 10000</span>
                  }
              },
              <span class="hljs-attr">"pingponglotto"</span>: {
              <span class="hljs-attr">"bottom1"</span>: {
              <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
              <span class="hljs-attr">"payout"</span>: <span class="hljs-number">4.2</span>
                  },
                  <span class="hljs-attr">"bottom2"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">100</span>
                  },
                  <span class="hljs-attr">"row2"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">16.6</span>
                  },
                  <span class="hljs-attr">"row3"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">166.6</span>
                  },
                  <span class="hljs-attr">"row4"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">416.6</span>
                  },
                  <span class="hljs-attr">"top1"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>:<span class="hljs-number"> 3.2</span>
                  },
                  <span class="hljs-attr">"top2"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">100</span>
                  },
                  <span class="hljs-attr">"top3"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">1000</span>
                  },
                  <span class="hljs-attr">"top4"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">5000</span>
                  },
                  <span class="hljs-attr">"top5"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">25000</span>
                  },
                  <span class="hljs-attr">"top6"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>:<span class="hljs-number"> 50000</span>
                  }
              },
              <span class="hljs-attr">"stock"</span>: {
              <span class="hljs-attr">"bottom1"</span>: {
              <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
              <span class="hljs-attr">"payout"</span>: <span class="hljs-number">4.2</span>
                  },
                  <span class="hljs-attr">"bottom2"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">100</span>
                  },
                  <span class="hljs-attr">"row3"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">166.6</span>
                  },
                  <span class="hljs-attr">"top1"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">3.2</span>
                  },
                  <span class="hljs-attr">"top2"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">100</span>
                  },
                  <span class="hljs-attr">"top3"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">1000</span>
                  }
              },
              <span class="hljs-attr">"thailotto"</span>: {
              <span class="hljs-attr">"bottom1"</span>: {
              <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
              <span class="hljs-attr">"payout"</span>:<span class="hljs-number"> 4.2</span>
                  },
                  <span class="hljs-attr">"bottom2"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">90</span>
                  },
                  <span class="hljs-attr">"bottom3"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">225</span>
                  },
                  <span class="hljs-attr">"row2"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">12</span>
                  },
                  <span class="hljs-attr">"row3"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">150</span>
                  },
                  <span class="hljs-attr">"row4"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">225</span>
                  },
                  <span class="hljs-attr">"top1"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">3.2</span>
                  },
                  <span class="hljs-attr">"top2"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">90</span>
                  },
                  <span class="hljs-attr">"top3"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">900</span>
                  },
                  <span class="hljs-attr">"top4"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">5000</span>
                  },
                  <span class="hljs-attr">"top5"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">25000</span>
                  },
                  <span class="hljs-attr">"top6"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-number">10</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">50000</span>
                  }
              },
              <span class="hljs-attr">"yeekeelotto"</span>: {
              <span class="hljs-attr">"bottom1"</span>: {
              <span class="hljs-attr">"discount"</span>: <span class="hljs-number">10</span>,
              <span class="hljs-attr">"payout"</span>: <span class="hljs-number">4.2</span>,
                  },
                  <span class="hljs-attr">"bottom2"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-number">10</span>,
                  <span class="hljs-attr">"payout"</span>:<span class="hljs-number"> 90</span>
                  },
                  <span class="hljs-attr">"row3"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-number">10</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">150</span>
                  },
                  <span class="hljs-attr">"top1"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-number">10</span>,
                  <span class="hljs-attr">"payout"</span>:<span class="hljs-number"> 3.2</span>
                  },
                  <span class="hljs-attr">"top2"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-number">10</span>,
                  <span class="hljs-attr">"payout"</span>:<span class="hljs-number"> 90</span>
                  },
                  <span class="hljs-attr">"top3"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-number">10</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">900</span>
                  }
              }
          },
          <span class="hljs-attr">"dataplaceout"</span>: {
          <span class="hljs-attr">"baaclotto"</span>: {
          <span class="hljs-attr">"bottom1"</span>: {
          <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
          <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                  },
                  <span class="hljs-attr">"bottom2"</span>: {
                  <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                  },
                  <span class="hljs-attr">"row3"</span>: {
                  <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                  },
                  <span class="hljs-attr">"top1"</span>: {
                  <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                  },
                  <span class="hljs-attr">"top2"</span>: {
                  <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                  },
                  <span class="hljs-attr">"top3"</span>: {
                  <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                  }
              },
              <span class="hljs-attr">"gsblotto"</span>: {
                  <span class="hljs-attr">"bottom1"</span>: {
                  <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                  },
                  <span class="hljs-attr">"bottom2"</span>: {
                  <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                  },
                  <span class="hljs-attr">"row3"</span>: {
                  <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                  },
                  <span class="hljs-attr">"top1"</span>: {
                  <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                  },
                  <span class="hljs-attr">"top2"</span>: {
                  <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                  },
                  <span class="hljs-attr">"top3"</span>: {
                  <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                  }
              },
              <span class="hljs-attr">"hanoilotto"</span>: {
              <span class="hljs-attr">"hanoilotto"</span>: {
                      <span class="hljs-attr">"bottom1"</span>: {
                      <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                      <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                      },
                      <span class="hljs-attr">"bottom2"</span>: {
                      <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                      <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                      },
                      <span class="hljs-attr">"row3"</span>: {
                      <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                      <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                      },
                      <span class="hljs-attr">"top1"</span>: {
                      <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                      <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                      },
                      <span class="hljs-attr">"top2"</span>: {
                      <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                      <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                      },
                      <span class="hljs-attr">"top3"</span>: {
                      <span class="hljs-attr">"amount"</span>: <span class="hljs-number">5000</span>,
                      <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                      }
                  },
                  <span class="hljs-attr">"hanoilotto_set"</span>: {
                  <span class="hljs-attr">"lottoset"</span>: {
                  <span class="hljs-attr">"amount"</span>: <span class="hljs-number">1000</span>,
                  <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                      }
                  }
              },
              <span class="hljs-attr">"hanoilottospecial"</span>: {
              <span class="hljs-attr">"hanoilottospecial"</span>: {
              <span class="hljs-attr">"bottom1"</span>: {
              <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
              <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                      },
                      <span class="hljs-attr">"bottom2"</span>: {
                      <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                      <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                      },
                      <span class="hljs-attr">"row3"</span>: {
                      <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                      <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                      },
                      <span class="hljs-attr">"top1"</span>: {
                      <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                      <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                      },
                      <span class="hljs-attr">"top2"</span>: {
                      <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                      <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                      },
                      <span class="hljs-attr">"top3"</span>: {
                      <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                      <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                      }
                  },
                  <span class="hljs-attr">"hanoilottospecial_set"</span>: {
                  <span class="hljs-attr">"lottoset"</span>: {
                  <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                      }
                  }
              },
              <span class="hljs-attr">"hanoilottovip"</span>: {
              <span class="hljs-attr">"hanoilottovip"</span>: {
              <span class="hljs-attr">"bottom1"</span>: {
              <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
              <span class="hljs-attr">"levellist"</span>: [
              <span class="hljs-attr">3.2</span>
                          ]
                      },
                      <span class="hljs-attr">"bottom2"</span>: {
                      <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                      <span class="hljs-attr">"levellist"</span>: [
                      <span class="hljs-attr">80</span>
                          ]
                      },
                      <span class="hljs-attr">"row3"</span>: {
                      <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                      <span class="hljs-attr">"levellist"</span>: [
                      <span class="hljs-attr">116.6</span>
                          ]
                      },
                      <span class="hljs-attr">"top1"</span>: {
                      <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                      <span class="hljs-attr">"levellist"</span>: [
                      <span class="hljs-attr">2.2</span>
                          ]
                      },
                      <span class="hljs-attr">"top2"</span>: {
                      <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                      <span class="hljs-attr">"levellist"</span>: [
                      <span class="hljs-attr">70</span>
                          ]
                      },
                      <span class="hljs-attr">"top3"</span>: {
                      <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                      <span class="hljs-attr">"levellist"</span>: [
                      <span class="hljs-attr">800</span>
                          ]
                      }
                  },
                  <span class="hljs-attr">"hanoilottovip_set"</span>: {
                  <span class="hljs-attr">"lottoset"</span>: {
                  <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                      }
                  }
              },
              <span class="hljs-attr">"laoslotto"</span>: {
              <span class="hljs-attr">"laoslotto"</span>: {
              <span class="hljs-attr">"bottom1"</span>: {
              <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
              <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                      },
                      <span class="hljs-attr">"bottom2"</span>: {
                      <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                      <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                      },
                      <span class="hljs-attr">"row2"</span>: {
                      <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                      <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                      },
                      <span class="hljs-attr">"row3"</span>: {
                      <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                      <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                      },
                      <span class="hljs-attr">"row4"</span>: {
                      <span class="hljs-attr">"amount"</span>: <span class="hljs-number">1</span>,
                      <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                      },
                      <span class="hljs-attr">"top1"</span>: {
                      <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                      <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                      },
                      <span class="hljs-attr">"top2"</span>: {
                      <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                      <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                      },
                      <span class="hljs-attr">"top3"</span>: {
                      <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                      <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                      },
                      <span class="hljs-attr">"top4"</span>: {
                      <span class="hljs-attr">"amount"</span>: <span class="hljs-number">200</span>,
                      <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                      }
                  },
                  <span class="hljs-attr">"laoslotto_set"</span>: {
                  <span class="hljs-attr">"bottom1"</span>: {
                  <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                      },
                      <span class="hljs-attr">"bottom2"</span>: {
                      <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                      <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                      },
                      <span class="hljs-attr">"row2"</span>: {
                      <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                      <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                      },
                      <span class="hljs-attr">"row3"</span>: {
                      <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                      <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                      },
                      <span class="hljs-attr">"row4"</span>: {
                      <span class="hljs-attr">"amount"</span>: <span class="hljs-number">1</span>,
                      <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                      },
                      <span class="hljs-attr">"top1"</span>: {
                      <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                      <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                      },
                      <span class="hljs-attr">"top2"</span>: {
                      <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                      <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                      },
                      <span class="hljs-attr">"top3"</span>: {
                      <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                      <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                      },
                      <span class="hljs-attr">"top4"</span>: {
                      <span class="hljs-attr">"amount"</span>: <span class="hljs-number">200</span>,
                      <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                      }
                  }
              },
              <span class="hljs-attr">"malaylotto"</span>: {
              <span class="hljs-attr">"malaylotto"</span>: {
              <span class="hljs-attr">"bottom1"</span>: {
              <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
              <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                      },
                      <span class="hljs-attr">"bottom2"</span>: {
                      <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                      <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                      },
                      <span class="hljs-attr">"row3"</span>: {
                      <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                      <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                      },
                      <span class="hljs-attr">"top1"</span>: {
                      <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                      <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                      },
                      <span class="hljs-attr">"top2"</span>: {
                      <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                      <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                      },
                      <span class="hljs-attr">"top3"</span>: {
                      <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                      <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                      }
                  },
                  <span class="hljs-attr">"malaylotto_set"</span>: {
                  <span class="hljs-attr">"lottoset"</span>: {
                  <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                      }
                  }
              },
              <span class="hljs-attr">"pingponglotto"</span>: {
              <span class="hljs-attr">"bottom1"</span>: {
              <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
              <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                  },
                  <span class="hljs-attr">"bottom2"</span>: {
                  <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                  },
                  <span class="hljs-attr">"row2"</span>: {
                  <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                  },
                  <span class="hljs-attr">"row3"</span>: {
                  <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                  },
                  <span class="hljs-attr">"row4"</span>: {
                  <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                  },
                  <span class="hljs-attr">"top1"</span>: {
                  <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                  },
                  <span class="hljs-attr">"top2"</span>: {
                  <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                  },
                  <span class="hljs-attr">"top3"</span>: {
                  <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                  },
                  <span class="hljs-attr">"top4"</span>: {
                  <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                  },
                  <span class="hljs-attr">"top5"</span>: {
                  <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                  },
                  <span class="hljs-attr">"top6"</span>: {
                  <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                  }
              },
              <span class="hljs-attr">"stock"</span>: {
              <span class="hljs-attr">"bottom1"</span>: {
              <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
              <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                  },
                  <span class="hljs-attr">"bottom2"</span>: {
                  <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                  },
                  <span class="hljs-attr">"row3"</span>: {
                  <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                  },
                  <span class="hljs-attr">"top1"</span>: {
                  <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                  },
                  <span class="hljs-attr">"top2"</span>: {
                  <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                  },
                  <span class="hljs-attr">"top3"</span>: {
                  <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                  }
              },
              <span class="hljs-attr">"thailotto"</span>: {
              <span class="hljs-attr">"bottom1"</span>: {
              <span class="hljs-attr">"amount"</span>: <span class="hljs-number">1000</span>,
              <span class="hljs-attr">"levellist"</span>: [
              <span class="hljs-attr">3.1</span>,
              <span class="hljs-attr">2</span>
                      ]
                  },
                  <span class="hljs-attr">"bottom2"</span>: {
                  <span class="hljs-attr">"amount"</span>:<span class="hljs-number"> 1000</span>,
                  <span class="hljs-attr">"levellist"</span>: [
                  <span class="hljs-attr">70</span>,
                  <span class="hljs-attr">50</span>
                      ]
                  },
                  <span class="hljs-attr">"bottom3"</span>: {
                  <span class="hljs-attr">"amount"</span>:<span class="hljs-number"> 1000</span>,
                  <span class="hljs-attr">"levellist"</span>: [
                  <span class="hljs-attr">155</span>,
                  <span class="hljs-attr">145</span>
                      ]
                  },
                  <span class="hljs-attr">"row2"</span>: {
                  <span class="hljs-attr">"amount"</span>: <span class="hljs-number">1000</span>,
                  <span class="hljs-attr">"levellist"</span>: [
                  <span class="hljs-attr">10</span>,
                  <span class="hljs-attr">8</span>
                      ]
                  },
                  <span class="hljs-attr">"row3"</span>: {
                  <span class="hljs-attr">"amount"</span>: <span class="hljs-number">1000</span>,
                  <span class="hljs-attr">"levellist"</span>: [
                  <span class="hljs-attr">80</span>,
                  <span class="hljs-attr">70</span>
                      ]
                  },
                  <span class="hljs-attr">"row4"</span>: {
                  <span class="hljs-attr">"amount"</span>: <span class="hljs-number">1000</span>,
                  <span class="hljs-attr">"levellist"</span>: [
                  <span class="hljs-attr">155</span>,
                  <span class="hljs-attr">145</span>
                      ]
                  },
                  <span class="hljs-attr">"top1"</span>: {
                  <span class="hljs-attr">"amount"</span>:<span class="hljs-number"> 1000</span>,
                  <span class="hljs-attr">"levellist"</span>: [
                  <span class="hljs-attr">2.1,</span>
                  <span class="hljs-attr">1</span>
                      ]
                  },
                  <span class="hljs-attr">"top2"</span>: {
                  <span class="hljs-attr">"amount"</span>: <span class="hljs-number">1000</span>,
                  <span class="hljs-attr">"levellist"</span>: [
                  <span class="hljs-attr">70</span>,
                  <span class="hljs-attr">50</span>
                      ]
                  },
                  <span class="hljs-attr">"top3"</span>: {
                  <span class="hljs-attr">"amount"</span>: <span class="hljs-number">1000</span>,
                  <span class="hljs-attr">"levellist"</span>: [
                  <span class="hljs-attr">550</span>,
                  <span class="hljs-attr">450</span>
                      ]
                  },
                  <span class="hljs-attr">"top4"</span>: {
                  <span class="hljs-attr">"amount"</span>: <span class="hljs-number">1000</span>,
                  <span class="hljs-attr">"levellist"</span>: [
                  <span class="hljs-attr">3500</span>,
                  <span class="hljs-attr">3000</span>
                      ]
                  },
                  <span class="hljs-attr">"top5"</span>: {
                  <span class="hljs-attr">"amount"</span>:<span class="hljs-number"> 1000</span>,
                  <span class="hljs-attr">"levellist"</span>: [
                  <span class="hljs-attr">10000</span>,
                  <span class="hljs-attr">5000</span>
                      ]
                  },
                  <span class="hljs-attr">"top6"</span>: {
                  <span class="hljs-attr">"amount"</span>:<span class="hljs-number"> 1000</span>,
                  <span class="hljs-attr">"levellist"</span>: [
                  <span class="hljs-attr">30000</span>,
                  <span class="hljs-attr">25000</span>,
                  <span class="hljs-attr">20000</span>,
                  <span class="hljs-attr">15000</span>
                      ]
                  }
              },
              <span class="hljs-attr">"yeekeelotto"</span>: {
              <span class="hljs-attr">"bottom1"</span>: {
              <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
              <span class="hljs-attr">"levellist"</span>: [
              <span class="hljs-attr">3.2</span>
                      ]
                  },
                  <span class="hljs-attr">"bottom2"</span>: {
                  <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"levellist"</span>: [
                  <span class="hljs-attr">80</span>,
                  <span class="hljs-attr">70</span>
                      ]
                  },
                  <span class="hljs-attr">"row3"</span>: {
                  <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"levellist"</span>: [
                  <span class="hljs-attr">140</span>,
                  <span class="hljs-attr">130</span>
                      ]
                  },
                  <span class="hljs-attr">"top1"</span>: {
                  <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"levellist"</span>: [
                  <span class="hljs-attr">2.2</span>
                      ]
                  },
                  <span class="hljs-attr">"top2"</span>: {
                  <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"levellist"</span>: [
                  <span class="hljs-attr">80</span>,
                  <span class="hljs-attr">70</span>
                      ]
                  },
                  <span class="hljs-attr">"top3"</span>: {
                  <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"levellist"</span>: [
                  <span class="hljs-attr">890</span>,
                  <span class="hljs-attr">880</span>
                      ]
                  }
              }
          }
      </code></pre>
              </div>
              <!-- // -->
            </div>
      <div>
        <div class="divBox-content">
          <div v-if="success" class="dis-colum-center">
            <div class="box-respon">
              <div class="pdd-top">RESPONSE</div>
              <div class="pdd-top">
                <button class="buton-suscess"></button> Code
                {{ numfail }}&nbsp;&nbsp;
              </div>
            </div>
            <div class="padding-content">
              <span>
                <button class="buton-suscess"></button> {{ numfail }}
              </span>
              {{ success }}
            </div>
          </div>
          <div v-else-if="nosuccess" class="dis-colum-center">
            <div class="box-respon">
              <div class="pdd-top">RESPONSE</div>
              <div class="pdd-top">
                <button class="buton-fail"></button> Code
                {{ numfail }}&nbsp;&nbsp;
              </div>
            </div>
            <div class="padding-content">
              <span> <button class="buton-fail"></button> {{ numfail }} </span>
              {{ nosuccess }}
            </div>
          </div>
          <div v-else-if="permission" class="dis-colum-center">
            <div class="box-respon">
              <div class="pdd-top">RESPONSE</div>
              <div class="pdd-top">
                <button class="buton-fail"></button> Code
                {{ numfail }}&nbsp;&nbsp;
              </div>
            </div>
            <div class="padding-content">
              <span> <button class="buton-fail"></button> {{ numfail }} </span>
              {{ permission }}
            </div>
          </div>
          <div v-else>
            <div class="box-respon">
              <div class="pdd-top">RESPONSE</div>
              <div class="pdd-top">Example</div>
            </div>
            <div class="padding-content">
              Click Send Code to start a request and see the response here! Or
              choose an example: application/json
              <span> <button class="buton-suscess"></button> 200 </span>
            </div>
          </div>
        </div>
      </div>
      <!-- // -->

      <!-- <a href="#openModal-about">Send Success</a> -->
      <!--modals-->
      <div id="openModal-about" v-if="pop" class="modalDialog">
        <div>
          <a href="#close" @click="closeAndClear" title="Close" class="close">X</a>
          <div>
            <div class="font-prim"><span>Code Seamless</span></div>
          </div>
          <div>
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
              </div>
            </div>
            <div class="koh-faq-answer col-12">
              <pre>

                                        <code id="410A" style="border-radius: 0.375rem;" class="hljs json">{
    <span class="hljs-attr">"agentUsername"</span>: <span class="hljs-string">"buildexcompany"</span>,
    <span class="hljs-attr">"agentApiKey"</span>: <span class="hljs-string">"504947f655f822e2f8f414bbc1a34ba763c7570ef638135f30b5696c899f806901e163f59f3a86d0c8cd"</span>
}</code></pre>
            </div>
            <!-- // -->
                      <div class="koh-faq-question form-group ex">
            <div class="Point">
              <b
                style="color: #19a17a !important"
                set-lan="text:Example Request Body"
              >
                Your Request Body
              </b>
              <i
                class="fa fa-chevron-down"
                aria-hidden="true"
                style="margin-left: 2%; font-size: 1rem"
              ></i>
            </div>
          </div>
          <div class="koh-faq-answer col-12">
            <code>
              <textarea
                v-model="jsonData"
                rows="10"
                cols="50"
                class="custom-textarea"
              >
              </textarea>
            </code>
          </div>
          </div>
          <div>
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
                <!-- <div class="btn-send">
                  <button class="custom-btn btn-13">Send Code</button>
                </div> -->
              </div>
            </div>

            <div>
              <div class="koh-faq-answer col-12">
                <div class="">
                  <div
                    @click="copyTexttwo"
                    class="copy-clipboard"
                    style="left: 91%"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <title>Copy to Clipboard</title>
                      <path
                        d="M18 6v-6h-18v18h6v6h18v-18h-6zm-12 10h-4v-14h14v4h-10v10zm16 6h-14v-14h14v14z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <pre id="myDivtwo">
        <code  style="border-radius: 0.375rem;  height: 300px; overflow: scroll;" class="hljs json">
          {
          <span class="hljs-attr">"code"</span>: <span class="hljs-number">"0"</span>,
          <span class="hljs-attr">"dataenable"</span>: {
              <span class="hljs-attr">"baaclotto"</span>: {
                  <span class="hljs-attr">"enable"</span>: <span class="hljs-number">"true"</span>
              },
              <span class="hljs-attr">"gsblotto"</span>: {
                  <span class="hljs-attr">"enable"</span>: <span class="hljs-number">"true"</span>
              },
              <span class="hljs-attr">"hanoilotto"</span>: {
                  <span class="hljs-attr">"enable"</span>: <span class="hljs-number">"true"</span>
              },
              <span class="hljs-attr">"hanoilottospecial"</span>: {
                  <span class="hljs-attr">"enable"</span>: <span class="hljs-number">"true"</span>
              },
              <span class="hljs-attr">"hanoilottovip"</span>: {
                  <span class="hljs-attr">"enable"</span>: <span class="hljs-number">"false"</span>
              },
              <span class="hljs-attr">"laoslotto"</span>: {
                  <span class="hljs-attr">"enable"</span>: <span class="hljs-number">"true"</span>
              },
              <span class="hljs-attr">"malaylotto"</span>: {
                  <span class="hljs-attr">"enable"</span>: <span class="hljs-number">"true"</span>
              },
              <span class="hljs-attr">"pingponglotto"</span>: {
                  <span class="hljs-attr">"enable"</span>: <span class="hljs-number">"true"</span>
              },
              <span class="hljs-attr">"stock"</span>: {
                  <span class="hljs-attr">"enable"</span>: <span class="hljs-number">"true"</span>
              },
              <span class="hljs-attr">"thailotto"</span>: {
                  <span class="hljs-attr">"enable"</span>: <span class="hljs-number">"true"</span>
              },
              <span class="hljs-attr">"yeekeelotto"</span>: {
                  <span class="hljs-attr">"enable"</span>: <span class="hljs-number">"true"</span>
              }
          },
          <span class="hljs-attr">"datahotplaceout"</span>: {
              <span class="hljs-attr">"baaclotto"</span>: {
                  <span class="hljs-attr">"bottom1"</span>: {
                      <span class="hljs-attr">"amount"</span>: <span class="hljs-number">0</span>
                  },
                  <span class="hljs-attr">"bottom2"</span>: {
                      <span class="hljs-attr">"amount"</span>: <span class="hljs-number">0</span>
                  },
                  <span class="hljs-attr">"row3"</span>: {
                      <span class="hljs-attr">"amount"</span>: <span class="hljs-number">0</span>
                  },
                  <span class="hljs-attr">"top1"</span>: {
                      <span class="hljs-attr">"amount"</span>: <span class="hljs-number">0</span>
                  },
                  <span class="hljs-attr">"top2"</span>: {
                      <span class="hljs-attr">"amount"</span>: <span class="hljs-number">5</span>
                  },
                  <span class="hljs-attr">"top3"</span>: {
                      <span class="hljs-attr">"amount"</span>: <span class="hljs-number">0</span>
                  }
              },
              <span class="hljs-attr">"gsblotto"</span>: {
                  <span class="hljs-attr">"bottom1"</span>: {
                      <span class="hljs-attr">"amount"</span>: <span class="hljs-number">10</span>
                  },
                  <span class="hljs-attr">"bottom2"</span>: {
                      <span class="hljs-attr">"amount"</span>: <span class="hljs-number">10</span>
                  },
                  <span class="hljs-attr">"row3"</span>: {
                      <span class="hljs-attr">"amount"</span>: <span class="hljs-number">0</span>
                  },
                  <span class="hljs-attr">"top1"</span>: {
                      <span class="hljs-attr">"amount"</span>: <span class="hljs-number">10</span>
                  },
                  <span class="hljs-attr">"top2"</span>: {
                      <span class="hljs-attr">"amount"</span>: <span class="hljs-number">10</span>
                  },
                  <span class="hljs-attr">"top3"</span>: {
                      <span class="hljs-attr">"amount"</span>: <span class="hljs-number">100</span>
                  }
              },
              <span class="hljs-attr">"hanoilotto"</span>: {
                  <span class="hljs-attr">"hanoilotto"</span>: {
                      <span class="hljs-attr">"bottom1"</span>: {
                          <span class="hljs-attr">"amount"</span>: <span class="hljs-number">5</span>
                      },
                      <span class="hljs-attr">"bottom2"</span>: {
                          <span class="hljs-attr">"amount"</span>: <span class="hljs-number">2</span>
                      },
                      <span class="hljs-attr">"row3"</span>: {
                          <span class="hljs-attr">"amount"</span>: <span class="hljs-number">5</span>
                      },
                      <span class="hljs-attr">"top1"</span>: {
                          <span class="hljs-attr">"amount"</span>: <span class="hljs-number">1</span>
                      },
                      <span class="hljs-attr">"top2"</span>: {
                          <span class="hljs-attr">"amount"</span>: <span class="hljs-number">5</span>
                      },
                      <span class="hljs-attr">"top3"</span>: {
                          <span class="hljs-attr">"amount"</span>: <span class="hljs-number">100</span>
                      }
                  }
              },
              <span class="hljs-attr">"hanoilottospecial"</span>: {
                  <span class="hljs-attr">"hanoilottospecial"</span>: {
                      <span class="hljs-attr">"bottom1"</span>: {
                          <span class="hljs-attr">"amount"</span>: <span class="hljs-number">5</span>
                      },
                      <span class="hljs-attr">"bottom2"</span>: {
                          <span class="hljs-attr">"amount"</span>: <span class="hljs-number">5</span>
                      },
                      <span class="hljs-attr">"row3"</span>: {
                          <span class="hljs-attr">"amount"</span>: <span class="hljs-number">5</span>
                      },
                      <span class="hljs-attr">"top1"</span>: {
                          <span class="hljs-attr">"amount"</span>: <span class="hljs-number">5</span>
                      },
                      <span class="hljs-attr">"top2"</span>: {
                          <span class="hljs-attr">"amount"</span>: <span class="hljs-number">5</span>
                      },
                      <span class="hljs-attr">"top3"</span>: {
                          <span class="hljs-attr">"amount"</span>: <span class="hljs-number">5</span>
                      }
                  },
                  <span class="hljs-attr">"hanoilottospecial"</span>: {
                      <span class="hljs-attr">"lottoset"</span>: <span class="hljs-number">null</span>
                  }
              },
              <span class="hljs-attr">"hanoilottovip"</span>: {
                  <span class="hljs-attr">"hanoilottovip"</span>: {
                      <span class="hljs-attr">"bottom1"</span>: {
                          <span class="hljs-attr">"amount"</span>: <span class="hljs-number">5</span>
                      },
                      <span class="hljs-attr">"bottom2"</span>: {
                          <span class="hljs-attr">"amount"</span>: <span class="hljs-number">5</span>
                      },
                      <span class="hljs-attr">"row3"</span>: {
                          <span class="hljs-attr">"amount"</span>: <span class="hljs-number">10</span>
                      },
                      <span class="hljs-attr">"top1"</span>: {
                          <span class="hljs-attr">"amount"</span>: <span class="hljs-number">5</span>
                      },
                      <span class="hljs-attr">"top2"</span>: {
                          <span class="hljs-attr">"amount"</span>: <span class="hljs-number">5</span>
                      },
                      <span class="hljs-attr">"top3"</span>: {
                          <span class="hljs-attr">"amount"</span>: <span class="hljs-number">10</span>
                      }
                  },
                  <span class="hljs-attr">"hanoilottovip_set"</span>: {
                      <span class="hljs-attr">"lottoset"</span>: <span class="hljs-number">null</span>
                  }
              },
              <span class="hljs-attr">"hanoilottovip"</span>: {
                  <span class="hljs-attr">"hanoilottovip"</span>: {
                      <span class="hljs-attr">"bottom1"</span>: {
                          <span class="hljs-attr">"amount"</span>: <span class="hljs-number">0</span>
                      },
                      <span class="hljs-attr">"bottom2"</span>: {
                          <span class="hljs-attr">"amount"</span>: <span class="hljs-number">0</span>
                      },
                      <span class="hljs-attr">"row2"</span>: {
                          <span class="hljs-attr">"amount"</span>: <span class="hljs-number">0</span>
                      },
                      <span class="hljs-attr">"row3"</span>: {
                          <span class="hljs-attr">"amount"</span>: <span class="hljs-number">0</span>
                      },
                      <span class="hljs-attr">"row4"</span>: {
                          <span class="hljs-attr">"amount"</span>: <span class="hljs-number">0</span>
                      },
                      <span class="hljs-attr">"top1"</span>: {
                          <span class="hljs-attr">"amount"</span>: <span class="hljs-number">0</span>
                      },
                      <span class="hljs-attr">"top2"</span>: {
                          <span class="hljs-attr">"amount"</span>: <span class="hljs-number">0</span>
                      },
                      <span class="hljs-attr">"top3"</span>: {
                          <span class="hljs-attr">"amount"</span>: <span class="hljs-number">0</span>
                      },
                      <span class="hljs-attr">"top4"</span>: {
                          <span class="hljs-attr">"amount"</span>: <span class="hljs-number">800</span>
                      }
                  },
                  <span class="hljs-attr">"laoslotto_set"</span>: <span class="hljs-number">null</span>
              },
              <span class="hljs-attr">"malaylotto"</span>: {
                  <span class="hljs-attr">"malaylotto"</span>: {
                      <span class="hljs-attr">"bottom1"</span>: {
                          <span class="hljs-attr">"amount"</span>: <span class="hljs-number">2</span>
                      },
                      <span class="hljs-attr">"bottom2"</span>: {
                          <span class="hljs-attr">"amount"</span>: <span class="hljs-number">2</span>
                      },
                      <span class="hljs-attr">"row3"</span>: {
                          <span class="hljs-attr">"amount"</span>: <span class="hljs-number">2</span>
                      },
                      <span class="hljs-attr">"top1"</span>: {
                          <span class="hljs-attr">"amount"</span>: <span class="hljs-number">2</span>
                      },
                      <span class="hljs-attr">"top2"</span>: {
                          <span class="hljs-attr">"amount"</span>: <span class="hljs-number">2</span>
                      },
                      <span class="hljs-attr">"top3"</span>: {
                          <span class="hljs-attr">"amount"</span>: <span class="hljs-number">2</span>
                      }
                  },
                  <span class="hljs-attr">"malaylotto_set"</span>: {
                      <span class="hljs-attr">"lottoset"</span>: <span class="hljs-number">null</span>
                  }
              },
              <span class="hljs-attr">"pingponglotto"</span>: {
                  <span class="hljs-attr">"bottom1"</span>: {
                      <span class="hljs-attr">"amount"</span>: <span class="hljs-number">0</span>
                  },
                  <span class="hljs-attr">"bottom2"</span>: {
                      <span class="hljs-attr">"amount"</span>: <span class="hljs-number">0</span>
                  },
                  <span class="hljs-attr">"row2"</span>: {
                      <span class="hljs-attr">"amount"</span>: <span class="hljs-number">0</span>
                  },
                  <span class="hljs-attr">"row3"</span>: {
                      <span class="hljs-attr">"amount"</span>: <span class="hljs-number">0</span>
                  },
                  <span class="hljs-attr">"row4"</span>: {
                      <span class="hljs-attr">"amount"</span>: <span class="hljs-number">0</span>
                  },
                  <span class="hljs-attr">"top1"</span>: {
                      <span class="hljs-attr">"amount"</span>: <span class="hljs-number">500</span>
                  },
                  <span class="hljs-attr">"top2"</span>: {
                      <span class="hljs-attr">"amount"</span>: <span class="hljs-number">0</span>
                  },
                  <span class="hljs-attr">"top3"</span>: {
                      <span class="hljs-attr">"amount"</span>: <span class="hljs-number">0</span>
                  },
                  <span class="hljs-attr">"top4"</span>: {
                      <span class="hljs-attr">"amount"</span>: <span class="hljs-number">0</span>
                  },
                  <span class="hljs-attr">"top5"</span>: {
                      <span class="hljs-attr">"amount"</span>: <span class="hljs-number">0</span>
                  },
                  <span class="hljs-attr">"top6"</span>: {
                      <span class="hljs-attr">"amount"</span>: <span class="hljs-number">5000</span>
                  }
              },
              <span class="hljs-attr">"stock"</span>: {
                  <span class="hljs-attr">"malaylotto"</span>: {
                      <span class="hljs-attr">"bottom1"</span>: {
                          <span class="hljs-attr">"amount"</span>: <span class="hljs-number">0</span>
                      },
                      <span class="hljs-attr">"bottom2"</span>: {
                          <span class="hljs-attr">"amount"</span>: <span class="hljs-number">0</span>
                      },
                      <span class="hljs-attr">"row3"</span>: {
                          <span class="hljs-attr">"amount"</span>: <span class="hljs-number">0</span>
                      },
                      <span class="hljs-attr">"top1"</span>: {
                          <span class="hljs-attr">"amount"</span>: <span class="hljs-number">0</span>
                      },
                      <span class="hljs-attr">"top2"</span>: {
                          <span class="hljs-attr">"amount"</span>: <span class="hljs-number">0</span>
                      },
                      <span class="hljs-attr">"top3"</span>: {
                          <span class="hljs-attr">"amount"</span>: <span class="hljs-number">50</span>
                      }
                  },
                  <span class="hljs-attr">"malaylotto_set"</span>: {
                      <span class="hljs-attr">"lottoset"</span>: <span class="hljs-number">null</span>
                  }
              },
              <span class="hljs-attr">"thailotto"</span>: {
                  <span class="hljs-attr">"bottom1"</span>: {
                      <span class="hljs-attr">"amount"</span>: <span class="hljs-number">0</span>
                  },
                  <span class="hljs-attr">"bottom2"</span>: {
                      <span class="hljs-attr">"amount"</span>: <span class="hljs-number">0</span>
                  },
                  <span class="hljs-attr">"bottom3"</span>: {
                      <span class="hljs-attr">"amount"</span>: <span class="hljs-number">0</span>
                  },
                  <span class="hljs-attr">"row2"</span>: {
                      <span class="hljs-attr">"amount"</span>: <span class="hljs-number">0</span>
                  },
                  <span class="hljs-attr">"row3"</span>: {
                      <span class="hljs-attr">"amount"</span>: <span class="hljs-number">0</span>
                  },
                  <span class="hljs-attr">"row4"</span>: {
                      <span class="hljs-attr">"amount"</span>: <span class="hljs-number">0</span>
                  },
                  <span class="hljs-attr">"top1"</span>: {
                      <span class="hljs-attr">"amount"</span>: <span class="hljs-number">500</span>
                  },
                  <span class="hljs-attr">"top2"</span>: {
                      <span class="hljs-attr">"amount"</span>: <span class="hljs-number">0</span>
                  },
                  <span class="hljs-attr">"top3"</span>: {
                      <span class="hljs-attr">"amount"</span>: <span class="hljs-number">0</span>
                  },
                  <span class="hljs-attr">"top4"</span>: {
                      <span class="hljs-attr">"amount"</span>: <span class="hljs-number">0</span>
                  },
                  <span class="hljs-attr">"top5"</span>: {
                      <span class="hljs-attr">"amount"</span>: <span class="hljs-number">0</span>
                  },
                  <span class="hljs-attr">"top6"</span>: {
                      <span class="hljs-attr">"amount"</span>: <span class="hljs-number">500</span>
                  }
              },
              <span class="hljs-attr">"yeekeelotto"</span>: {
                  <span class="hljs-attr">"bottom1"</span>: {
                          <span class="hljs-attr">"amount"</span>: <span class="hljs-number">0</span>
                      },
                      <span class="hljs-attr">"bottom2"</span>: {
                          <span class="hljs-attr">"amount"</span>: <span class="hljs-number">0</span>
                      },
                      <span class="hljs-attr">"row3"</span>: {
                          <span class="hljs-attr">"amount"</span>: <span class="hljs-number">0</span>
                      },
                      <span class="hljs-attr">"top1"</span>: {
                          <span class="hljs-attr">"amount"</span>: <span class="hljs-number">0</span>
                      },
                      <span class="hljs-attr">"top2"</span>: {
                          <span class="hljs-attr">"amount"</span>: <span class="hljs-number">0</span>
                      },
                      <span class="hljs-attr">"top3"</span>: {
                          <span class="hljs-attr">"amount"</span>: <span class="hljs-number">50</span>
                      }
                  }
              },
          },
          <span class="hljs-attr">"datapayout"</span>: {
              <span class="hljs-attr">"baaclotto"</span>: {
                  <span class="hljs-attr">"bottom1"</span>: {
                          <span class="hljs-attr">"discount"</span>: <span class="hljs-number">0</span>,
                          <span class="hljs-attr">"payout"</span>: <span class="hljs-number">4.2</span>
                      },
                      <span class="hljs-attr">"bottom2"</span>: {
                          <span class="hljs-attr">"discount"</span>: <span class="hljs-number">0</span>,
                          <span class="hljs-attr">"payout"</span>: <span class="hljs-number">100</span>
                      },
                      <span class="hljs-attr">"row3"</span>: {
                          <span class="hljs-attr">"discount"</span>: <span class="hljs-number">0</span>,
                          <span class="hljs-attr">"payout"</span>: <span class="hljs-number">166.6</span>
                      },
                      <span class="hljs-attr">"top1"</span>: {
                          <span class="hljs-attr">"discount"</span>: <span class="hljs-number">0</span>,
                          <span class="hljs-attr">"payout"</span>: <span class="hljs-number">3.2</span>
                      },
                      <span class="hljs-attr">"top2"</span>: {
                          <span class="hljs-attr">"discount"</span>: <span class="hljs-number">0</span>,
                          <span class="hljs-attr">"payout"</span>: <span class="hljs-number">100</span>
                      },
                      <span class="hljs-attr">"top3"</span>: {
                          <span class="hljs-attr">"discount"</span>: <span class="hljs-number">0</span>,
                          <span class="hljs-attr">"payout"</span>: <span class="hljs-number">1000</span>
                      }
                  },
              },
              <span class="hljs-attr">"gsblotto"</span>: {
                  <span class="hljs-attr">"bottom1"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">4.2</span>
                  },
                  <span class="hljs-attr">"bottom2"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">100</span>
                  },
                  <span class="hljs-attr">"row3"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">166.6</span>
                  },
                  <span class="hljs-attr">"top1"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">3.2</span>
                  },
                  <span class="hljs-attr">"top2"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">100</span>
                  },
                  <span class="hljs-attr">"top3"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">1000</span>,
                  }
              },
              <span class="hljs-attr">"hanoilotto"</span>: {
              <span class="hljs-attr">"bottom1"</span>: {
              <span class="hljs-attr">"discount"</span>: <span class="hljs-number">0</span>,
              <span class="hljs-attr">"payout"</span>: <span class="hljs-number">4.2</span>,
                  },
                  <span class="hljs-attr">"bottom2"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">100</span>
                  },
                  <span class="hljs-attr">"row3"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">166.6</span>
                  },
                  <span class="hljs-attr">"top1"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">3.2</span>
                  },
                  <span class="hljs-attr">"top2"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">100</span>
                  },
                  <span class="hljs-attr">"top3"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">1000</span>
                  }
              },
              <span class="hljs-attr">"hanoilotto_set"</span>: {
              <span class="hljs-attr">"back2"</span>: {
              <span class="hljs-attr">"discount"</span>: <span class="hljs-number">0</span>,
              <span class="hljs-attr">"payout"</span>: <span class="hljs-number">100</span>
                  },
                  <span class="hljs-attr">"front2"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">100</span>
                  },
                  <span class="hljs-attr">"row3"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>:<span class="hljs-number"> 166.6</span>
                  },
                  <span class="hljs-attr">"row4"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">416.6</span>
                  },
                  <span class="hljs-attr">"top3"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">1000</span>
                  },
                  <span class="hljs-attr">"top4"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>:<span class="hljs-number"> 10000</span>
                  }
              },
              <span class="hljs-attr">"hanoilottospecial"</span>: {
              <span class="hljs-attr">"bottom1"</span>: {
              <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
              <span class="hljs-attr">"payout"</span>: <span class="hljs-number">4.2</span>
                  },
                  <span class="hljs-attr">"bottom2"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">100</span>
                  },
                  <span class="hljs-attr">"row3"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">166.6</span>
                  },
                  <span class="hljs-attr">"top1"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">3.2</span>
                  },
                  <span class="hljs-attr">"top2"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">100</span>
                  },
                  <span class="hljs-attr">"top3"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">1000</span>
                  }
              },
              <span class="hljs-attr">"hanoilottospecial_set"</span>: {
              <span class="hljs-attr">"back2"</span>: {
              <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
              <span class="hljs-attr">"payout"</span>: <span class="hljs-number">100</span>
                  },
                  <span class="hljs-attr">"front2"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">100</span>
                  },
                  <span class="hljs-attr">"row3"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>:<span class="hljs-number"> 166.6</span>
                  },
                  <span class="hljs-attr">"row4"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">416.6</span>
                  },
                  <span class="hljs-attr">"top3"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">1000</span>
                  },
                <span class="hljs-attr"> "top4"</span>: {
                <span class="hljs-attr"> "discount"<span class="hljs-number">0</span>,
                <span class="hljs-attr"> "payout"</span>: 10000</span>
                  }
              },
              <span class="hljs-attr">"hanoilottovip"</span>: {
              <span class="hljs-attr">"bottom1"</span>: {
              <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
              <span class="hljs-attr">"payout"</span>: <span class="hljs-number">4.2</span>
                  },
                  <span class="hljs-attr">"bottom2"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">100</span>
                  },
                  <span class="hljs-attr">"row3"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>:<span class="hljs-number"> 166.6</span>
                  },
                  <span class="hljs-attr">"top1"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>:<span class="hljs-number"> 3.2</span>
                  },
                  <span class="hljs-attr">"top2"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">100</span>
                  },
                  <span class="hljs-attr">"top3"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>:<span class="hljs-number"> 900</span>
                  }
              },
              <span class="hljs-attr">"hanoilottovip_set"</span>: {
              <span class="hljs-attr">"back2"</span>: {
              <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
              <span class="hljs-attr">"payout"</span>:<span class="hljs-number"> 100</span>
                  },
                  <span class="hljs-attr">"front2"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>:<span class="hljs-number"> 100</span>
                  },
                  <span class="hljs-attr">"row3"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>:<span class="hljs-number"> 166.6</span>
                  },
                  <span class="hljs-attr">"row4"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>:<span class="hljs-number"> 416.6</span>
                  },
                  <span class="hljs-attr">"top3"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">1000</span>
                  },
                  <span class="hljs-attr">"top4"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">9000</span>
                  }
              },
              <span class="hljs-attr">"laoslotto_thai"</span>: {
              <span class="hljs-attr">"back2"</span>: {
              <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
              <span class="hljs-attr">"payout"</span>:<span class="hljs-number"> 100</span>
                  },
                  <span class="hljs-attr">"front2"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>:<span class="hljs-number"> 100</span>
                  },
                  <span class="hljs-attr">"row3"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>:<span class="hljs-number"> 166.6</span>
                  },
                  <span class="hljs-attr">"row4"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">416.6</span>
                  },
                  <span class="hljs-attr">"top3"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">1000</span>
                  },
                  <span class="hljs-attr">"top4"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">10000</span>
                  }
              },
              <span class="hljs-attr">"malaylotto"</span>: {
              <span class="hljs-attr">"bottom1"</span>: {
              <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
              <span class="hljs-attr">"payout"</span>: <span class="hljs-number">4.2</span>
                  },
                  <span class="hljs-attr">"bottom2"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">100</span>
                  },
                  <span class="hljs-attr">"row3"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">166.6</span>
                  },
                  <span class="hljs-attr">"top1"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">3.2</span>
                  },
                  <span class="hljs-attr">"top2"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">100</span>
                  },
                  <span class="hljs-attr">"top3"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">1000</span>
                  }
              },
              <span class="hljs-attr">"malaylotto_set"</span>: {
              <span class="hljs-attr">"back2"</span>: {
              <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
              <span class="hljs-attr">"payout"</span>: <span class="hljs-number">100</span>
                  },
                  <span class="hljs-attr">"front2"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>:<span class="hljs-number"> 100</span>
                  },
                  <span class="hljs-attr">"row3"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">166.6</span>
                  },
                  <span class="hljs-attr">"row4"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>:<span class="hljs-number"> 416.6</span>
                  },
                  <span class="hljs-attr">"top3"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">1000</span>
                  },
                  <span class="hljs-attr">"top4"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>:<span class="hljs-number"> 10000</span>
                  }
              },
              <span class="hljs-attr">"pingponglotto"</span>: {
              <span class="hljs-attr">"bottom1"</span>: {
              <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
              <span class="hljs-attr">"payout"</span>: <span class="hljs-number">4.2</span>
                  },
                  <span class="hljs-attr">"bottom2"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">100</span>
                  },
                  <span class="hljs-attr">"row2"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">16.6</span>
                  },
                  <span class="hljs-attr">"row3"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">166.6</span>
                  },
                  <span class="hljs-attr">"row4"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">416.6</span>
                  },
                  <span class="hljs-attr">"top1"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>:<span class="hljs-number"> 3.2</span>
                  },
                  <span class="hljs-attr">"top2"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">100</span>
                  },
                  <span class="hljs-attr">"top3"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">1000</span>
                  },
                  <span class="hljs-attr">"top4"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">5000</span>
                  },
                  <span class="hljs-attr">"top5"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">25000</span>
                  },
                  <span class="hljs-attr">"top6"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>:<span class="hljs-number"> 50000</span>
                  }
              },
              <span class="hljs-attr">"stock"</span>: {
              <span class="hljs-attr">"bottom1"</span>: {
              <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
              <span class="hljs-attr">"payout"</span>: <span class="hljs-number">4.2</span>
                  },
                  <span class="hljs-attr">"bottom2"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">100</span>
                  },
                  <span class="hljs-attr">"row3"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">166.6</span>
                  },
                  <span class="hljs-attr">"top1"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">3.2</span>
                  },
                  <span class="hljs-attr">"top2"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">100</span>
                  },
                  <span class="hljs-attr">"top3"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">1000</span>
                  }
              },
              <span class="hljs-attr">"thailotto"</span>: {
              <span class="hljs-attr">"bottom1"</span>: {
              <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
              <span class="hljs-attr">"payout"</span>:<span class="hljs-number"> 4.2</span>
                  },
                  <span class="hljs-attr">"bottom2"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">90</span>
                  },
                  <span class="hljs-attr">"bottom3"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">225</span>
                  },
                  <span class="hljs-attr">"row2"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">12</span>
                  },
                  <span class="hljs-attr">"row3"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">150</span>
                  },
                  <span class="hljs-attr">"row4"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">225</span>
                  },
                  <span class="hljs-attr">"top1"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">3.2</span>
                  },
                  <span class="hljs-attr">"top2"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">90</span>
                  },
                  <span class="hljs-attr">"top3"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">900</span>
                  },
                  <span class="hljs-attr">"top4"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">5000</span>
                  },
                  <span class="hljs-attr">"top5"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">25000</span>
                  },
                  <span class="hljs-attr">"top6"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-number">10</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">50000</span>
                  }
              },
              <span class="hljs-attr">"yeekeelotto"</span>: {
              <span class="hljs-attr">"bottom1"</span>: {
              <span class="hljs-attr">"discount"</span>: <span class="hljs-number">10</span>,
              <span class="hljs-attr">"payout"</span>: <span class="hljs-number">4.2</span>,
                  },
                  <span class="hljs-attr">"bottom2"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-number">10</span>,
                  <span class="hljs-attr">"payout"</span>:<span class="hljs-number"> 90</span>
                  },
                  <span class="hljs-attr">"row3"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-number">10</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">150</span>
                  },
                  <span class="hljs-attr">"top1"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-number">10</span>,
                  <span class="hljs-attr">"payout"</span>:<span class="hljs-number"> 3.2</span>
                  },
                  <span class="hljs-attr">"top2"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-number">10</span>,
                  <span class="hljs-attr">"payout"</span>:<span class="hljs-number"> 90</span>
                  },
                  <span class="hljs-attr">"top3"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-number">10</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">900</span>
                  }
              }
          },
          <span class="hljs-attr">"dataplaceout"</span>: {
          <span class="hljs-attr">"baaclotto"</span>: {
          <span class="hljs-attr">"bottom1"</span>: {
          <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
          <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                  },
                  <span class="hljs-attr">"bottom2"</span>: {
                  <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                  },
                  <span class="hljs-attr">"row3"</span>: {
                  <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                  },
                  <span class="hljs-attr">"top1"</span>: {
                  <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                  },
                  <span class="hljs-attr">"top2"</span>: {
                  <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                  },
                  <span class="hljs-attr">"top3"</span>: {
                  <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                  }
              },
              <span class="hljs-attr">"gsblotto"</span>: {
                  <span class="hljs-attr">"bottom1"</span>: {
                  <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                  },
                  <span class="hljs-attr">"bottom2"</span>: {
                  <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                  },
                  <span class="hljs-attr">"row3"</span>: {
                  <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                  },
                  <span class="hljs-attr">"top1"</span>: {
                  <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                  },
                  <span class="hljs-attr">"top2"</span>: {
                  <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                  },
                  <span class="hljs-attr">"top3"</span>: {
                  <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                  }
              },
              <span class="hljs-attr">"hanoilotto"</span>: {
              <span class="hljs-attr">"hanoilotto"</span>: {
                      <span class="hljs-attr">"bottom1"</span>: {
                      <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                      <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                      },
                      <span class="hljs-attr">"bottom2"</span>: {
                      <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                      <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                      },
                      <span class="hljs-attr">"row3"</span>: {
                      <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                      <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                      },
                      <span class="hljs-attr">"top1"</span>: {
                      <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                      <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                      },
                      <span class="hljs-attr">"top2"</span>: {
                      <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                      <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                      },
                      <span class="hljs-attr">"top3"</span>: {
                      <span class="hljs-attr">"amount"</span>: <span class="hljs-number">5000</span>,
                      <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                      }
                  },
                  <span class="hljs-attr">"hanoilotto_set"</span>: {
                  <span class="hljs-attr">"lottoset"</span>: {
                  <span class="hljs-attr">"amount"</span>: <span class="hljs-number">1000</span>,
                  <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                      }
                  }
              },
              <span class="hljs-attr">"hanoilottospecial"</span>: {
              <span class="hljs-attr">"hanoilottospecial"</span>: {
              <span class="hljs-attr">"bottom1"</span>: {
              <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
              <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                      },
                      <span class="hljs-attr">"bottom2"</span>: {
                      <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                      <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                      },
                      <span class="hljs-attr">"row3"</span>: {
                      <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                      <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                      },
                      <span class="hljs-attr">"top1"</span>: {
                      <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                      <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                      },
                      <span class="hljs-attr">"top2"</span>: {
                      <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                      <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                      },
                      <span class="hljs-attr">"top3"</span>: {
                      <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                      <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                      }
                  },
                  <span class="hljs-attr">"hanoilottospecial_set"</span>: {
                  <span class="hljs-attr">"lottoset"</span>: {
                  <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                      }
                  }
              },
              <span class="hljs-attr">"hanoilottovip"</span>: {
              <span class="hljs-attr">"hanoilottovip"</span>: {
              <span class="hljs-attr">"bottom1"</span>: {
              <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
              <span class="hljs-attr">"levellist"</span>: [
              <span class="hljs-attr">3.2</span>
                          ]
                      },
                      <span class="hljs-attr">"bottom2"</span>: {
                      <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                      <span class="hljs-attr">"levellist"</span>: [
                      <span class="hljs-attr">80</span>
                          ]
                      },
                      <span class="hljs-attr">"row3"</span>: {
                      <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                      <span class="hljs-attr">"levellist"</span>: [
                      <span class="hljs-attr">116.6</span>
                          ]
                      },
                      <span class="hljs-attr">"top1"</span>: {
                      <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                      <span class="hljs-attr">"levellist"</span>: [
                      <span class="hljs-attr">2.2</span>
                          ]
                      },
                      <span class="hljs-attr">"top2"</span>: {
                      <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                      <span class="hljs-attr">"levellist"</span>: [
                      <span class="hljs-attr">70</span>
                          ]
                      },
                      <span class="hljs-attr">"top3"</span>: {
                      <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                      <span class="hljs-attr">"levellist"</span>: [
                      <span class="hljs-attr">800</span>
                          ]
                      }
                  },
                  <span class="hljs-attr">"hanoilottovip_set"</span>: {
                  <span class="hljs-attr">"lottoset"</span>: {
                  <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                      }
                  }
              },
              <span class="hljs-attr">"laoslotto"</span>: {
              <span class="hljs-attr">"laoslotto"</span>: {
              <span class="hljs-attr">"bottom1"</span>: {
              <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
              <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                      },
                      <span class="hljs-attr">"bottom2"</span>: {
                      <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                      <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                      },
                      <span class="hljs-attr">"row2"</span>: {
                      <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                      <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                      },
                      <span class="hljs-attr">"row3"</span>: {
                      <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                      <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                      },
                      <span class="hljs-attr">"row4"</span>: {
                      <span class="hljs-attr">"amount"</span>: <span class="hljs-number">1</span>,
                      <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                      },
                      <span class="hljs-attr">"top1"</span>: {
                      <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                      <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                      },
                      <span class="hljs-attr">"top2"</span>: {
                      <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                      <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                      },
                      <span class="hljs-attr">"top3"</span>: {
                      <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                      <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                      },
                      <span class="hljs-attr">"top4"</span>: {
                      <span class="hljs-attr">"amount"</span>: <span class="hljs-number">200</span>,
                      <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                      }
                  },
                  <span class="hljs-attr">"laoslotto_set"</span>: {
                  <span class="hljs-attr">"bottom1"</span>: {
                  <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                      },
                      <span class="hljs-attr">"bottom2"</span>: {
                      <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                      <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                      },
                      <span class="hljs-attr">"row2"</span>: {
                      <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                      <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                      },
                      <span class="hljs-attr">"row3"</span>: {
                      <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                      <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                      },
                      <span class="hljs-attr">"row4"</span>: {
                      <span class="hljs-attr">"amount"</span>: <span class="hljs-number">1</span>,
                      <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                      },
                      <span class="hljs-attr">"top1"</span>: {
                      <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                      <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                      },
                      <span class="hljs-attr">"top2"</span>: {
                      <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                      <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                      },
                      <span class="hljs-attr">"top3"</span>: {
                      <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                      <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                      },
                      <span class="hljs-attr">"top4"</span>: {
                      <span class="hljs-attr">"amount"</span>: <span class="hljs-number">200</span>,
                      <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                      }
                  }
              },
              <span class="hljs-attr">"malaylotto"</span>: {
              <span class="hljs-attr">"malaylotto"</span>: {
              <span class="hljs-attr">"bottom1"</span>: {
              <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
              <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                      },
                      <span class="hljs-attr">"bottom2"</span>: {
                      <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                      <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                      },
                      <span class="hljs-attr">"row3"</span>: {
                      <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                      <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                      },
                      <span class="hljs-attr">"top1"</span>: {
                      <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                      <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                      },
                      <span class="hljs-attr">"top2"</span>: {
                      <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                      <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                      },
                      <span class="hljs-attr">"top3"</span>: {
                      <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                      <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                      }
                  },
                  <span class="hljs-attr">"malaylotto_set"</span>: {
                  <span class="hljs-attr">"lottoset"</span>: {
                  <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                      }
                  }
              },
              <span class="hljs-attr">"pingponglotto"</span>: {
              <span class="hljs-attr">"bottom1"</span>: {
              <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
              <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                  },
                  <span class="hljs-attr">"bottom2"</span>: {
                  <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                  },
                  <span class="hljs-attr">"row2"</span>: {
                  <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                  },
                  <span class="hljs-attr">"row3"</span>: {
                  <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                  },
                  <span class="hljs-attr">"row4"</span>: {
                  <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                  },
                  <span class="hljs-attr">"top1"</span>: {
                  <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                  },
                  <span class="hljs-attr">"top2"</span>: {
                  <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                  },
                  <span class="hljs-attr">"top3"</span>: {
                  <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                  },
                  <span class="hljs-attr">"top4"</span>: {
                  <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                  },
                  <span class="hljs-attr">"top5"</span>: {
                  <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                  },
                  <span class="hljs-attr">"top6"</span>: {
                  <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                  }
              },
              <span class="hljs-attr">"stock"</span>: {
              <span class="hljs-attr">"bottom1"</span>: {
              <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
              <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                  },
                  <span class="hljs-attr">"bottom2"</span>: {
                  <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                  },
                  <span class="hljs-attr">"row3"</span>: {
                  <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                  },
                  <span class="hljs-attr">"top1"</span>: {
                  <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                  },
                  <span class="hljs-attr">"top2"</span>: {
                  <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                  },
                  <span class="hljs-attr">"top3"</span>: {
                  <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                  }
              },
              <span class="hljs-attr">"thailotto"</span>: {
              <span class="hljs-attr">"bottom1"</span>: {
              <span class="hljs-attr">"amount"</span>: <span class="hljs-number">1000</span>,
              <span class="hljs-attr">"levellist"</span>: [
              <span class="hljs-attr">3.1</span>,
              <span class="hljs-attr">2</span>
                      ]
                  },
                  <span class="hljs-attr">"bottom2"</span>: {
                  <span class="hljs-attr">"amount"</span>:<span class="hljs-number"> 1000</span>,
                  <span class="hljs-attr">"levellist"</span>: [
                  <span class="hljs-attr">70</span>,
                  <span class="hljs-attr">50</span>
                      ]
                  },
                  <span class="hljs-attr">"bottom3"</span>: {
                  <span class="hljs-attr">"amount"</span>:<span class="hljs-number"> 1000</span>,
                  <span class="hljs-attr">"levellist"</span>: [
                  <span class="hljs-attr">155</span>,
                  <span class="hljs-attr">145</span>
                      ]
                  },
                  <span class="hljs-attr">"row2"</span>: {
                  <span class="hljs-attr">"amount"</span>: <span class="hljs-number">1000</span>,
                  <span class="hljs-attr">"levellist"</span>: [
                  <span class="hljs-attr">10</span>,
                  <span class="hljs-attr">8</span>
                      ]
                  },
                  <span class="hljs-attr">"row3"</span>: {
                  <span class="hljs-attr">"amount"</span>: <span class="hljs-number">1000</span>,
                  <span class="hljs-attr">"levellist"</span>: [
                  <span class="hljs-attr">80</span>,
                  <span class="hljs-attr">70</span>
                      ]
                  },
                  <span class="hljs-attr">"row4"</span>: {
                  <span class="hljs-attr">"amount"</span>: <span class="hljs-number">1000</span>,
                  <span class="hljs-attr">"levellist"</span>: [
                  <span class="hljs-attr">155</span>,
                  <span class="hljs-attr">145</span>
                      ]
                  },
                  <span class="hljs-attr">"top1"</span>: {
                  <span class="hljs-attr">"amount"</span>:<span class="hljs-number"> 1000</span>,
                  <span class="hljs-attr">"levellist"</span>: [
                  <span class="hljs-attr">2.1,</span>
                  <span class="hljs-attr">1</span>
                      ]
                  },
                  <span class="hljs-attr">"top2"</span>: {
                  <span class="hljs-attr">"amount"</span>: <span class="hljs-number">1000</span>,
                  <span class="hljs-attr">"levellist"</span>: [
                  <span class="hljs-attr">70</span>,
                  <span class="hljs-attr">50</span>
                      ]
                  },
                  <span class="hljs-attr">"top3"</span>: {
                  <span class="hljs-attr">"amount"</span>: <span class="hljs-number">1000</span>,
                  <span class="hljs-attr">"levellist"</span>: [
                  <span class="hljs-attr">550</span>,
                  <span class="hljs-attr">450</span>
                      ]
                  },
                  <span class="hljs-attr">"top4"</span>: {
                  <span class="hljs-attr">"amount"</span>: <span class="hljs-number">1000</span>,
                  <span class="hljs-attr">"levellist"</span>: [
                  <span class="hljs-attr">3500</span>,
                  <span class="hljs-attr">3000</span>
                      ]
                  },
                  <span class="hljs-attr">"top5"</span>: {
                  <span class="hljs-attr">"amount"</span>:<span class="hljs-number"> 1000</span>,
                  <span class="hljs-attr">"levellist"</span>: [
                  <span class="hljs-attr">10000</span>,
                  <span class="hljs-attr">5000</span>
                      ]
                  },
                  <span class="hljs-attr">"top6"</span>: {
                  <span class="hljs-attr">"amount"</span>:<span class="hljs-number"> 1000</span>,
                  <span class="hljs-attr">"levellist"</span>: [
                  <span class="hljs-attr">30000</span>,
                  <span class="hljs-attr">25000</span>,
                  <span class="hljs-attr">20000</span>,
                  <span class="hljs-attr">15000</span>
                      ]
                  }
              },
              <span class="hljs-attr">"yeekeelotto"</span>: {
              <span class="hljs-attr">"bottom1"</span>: {
              <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
              <span class="hljs-attr">"levellist"</span>: [
              <span class="hljs-attr">3.2</span>
                      ]
                  },
                  <span class="hljs-attr">"bottom2"</span>: {
                  <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"levellist"</span>: [
                  <span class="hljs-attr">80</span>,
                  <span class="hljs-attr">70</span>
                      ]
                  },
                  <span class="hljs-attr">"row3"</span>: {
                  <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"levellist"</span>: [
                  <span class="hljs-attr">140</span>,
                  <span class="hljs-attr">130</span>
                      ]
                  },
                  <span class="hljs-attr">"top1"</span>: {
                  <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"levellist"</span>: [
                  <span class="hljs-attr">2.2</span>
                      ]
                  },
                  <span class="hljs-attr">"top2"</span>: {
                  <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"levellist"</span>: [
                  <span class="hljs-attr">80</span>,
                  <span class="hljs-attr">70</span>
                      ]
                  },
                  <span class="hljs-attr">"top3"</span>: {
                  <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"levellist"</span>: [
                  <span class="hljs-attr">890</span>,
                  <span class="hljs-attr">880</span>
                      ]
                  }
              }
          }
      </code></pre>
              </div>
              <!-- // -->
            </div>

            <div>
              <div class="koh-faq-question form-group ex">
                <div class="Point">
                  <b
                    style="color: #19a17a !important"
                    set-lan="text:Example Request Body"
                  >
                    Response
                  </b>
                  <i
                    class="fa fa-chevron-down"
                    aria-hidden="true"
                    style="margin-left: 2%; font-size: 1rem"
                  ></i>
                </div>
              </div>
              <div v-if="success">
                <div class="koh-faq-answer col-12">
                  <div class="">
                    <div
                      @click="copyTextthree"
                      class="copy-clipboard"
                      style="left: 91%"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <title>Copy to Clipboard</title>
                        <path
                          d="M18 6v-6h-18v18h6v6h18v-18h-6zm-12 10h-4v-14h14v4h-10v10zm16 6h-14v-14h14v14z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <pre id="myDivtwo">
        <code  style="border-radius: 0.375rem;  height: 300px;
          overflow: scroll;" class="hljs json">{
          <span class="hljs-attr">"code"</span>: <span class="hljs-number">"0"</span>,
          <span class="hljs-attr">"dataenable"</span>: {
              <span class="hljs-attr">"baaclotto"</span>: {
                  <span class="hljs-attr">"enable"</span>: <span class="hljs-number">"true"</span>
              },
              <span class="hljs-attr">"gsblotto"</span>: {
                  <span class="hljs-attr">"enable"</span>: <span class="hljs-number">"true"</span>
              },
              <span class="hljs-attr">"hanoilotto"</span>: {
                  <span class="hljs-attr">"enable"</span>: <span class="hljs-number">"true"</span>
              },
              <span class="hljs-attr">"hanoilottospecial"</span>: {
                  <span class="hljs-attr">"enable"</span>: <span class="hljs-number">"true"</span>
              },
              <span class="hljs-attr">"hanoilottovip"</span>: {
                  <span class="hljs-attr">"enable"</span>: <span class="hljs-number">"false"</span>
              },
              <span class="hljs-attr">"laoslotto"</span>: {
                  <span class="hljs-attr">"enable"</span>: <span class="hljs-number">"true"</span>
              },
              <span class="hljs-attr">"malaylotto"</span>: {
                  <span class="hljs-attr">"enable"</span>: <span class="hljs-number">"true"</span>
              },
              <span class="hljs-attr">"pingponglotto"</span>: {
                  <span class="hljs-attr">"enable"</span>: <span class="hljs-number">"true"</span>
              },
              <span class="hljs-attr">"stock"</span>: {
                  <span class="hljs-attr">"enable"</span>: <span class="hljs-number">"true"</span>
              },
              <span class="hljs-attr">"thailotto"</span>: {
                  <span class="hljs-attr">"enable"</span>: <span class="hljs-number">"true"</span>
              },
              <span class="hljs-attr">"yeekeelotto"</span>: {
                  <span class="hljs-attr">"enable"</span>: <span class="hljs-number">"true"</span>
              }
          },
          <span class="hljs-attr">"datahotplaceout"</span>: {
              <span class="hljs-attr">"baaclotto"</span>: {
                  <span class="hljs-attr">"bottom1"</span>: {
                      <span class="hljs-attr">"amount"</span>: <span class="hljs-number">0</span>
                  },
                  <span class="hljs-attr">"bottom2"</span>: {
                      <span class="hljs-attr">"amount"</span>: <span class="hljs-number">0</span>
                  },
                  <span class="hljs-attr">"row3"</span>: {
                      <span class="hljs-attr">"amount"</span>: <span class="hljs-number">0</span>
                  },
                  <span class="hljs-attr">"top1"</span>: {
                      <span class="hljs-attr">"amount"</span>: <span class="hljs-number">0</span>
                  },
                  <span class="hljs-attr">"top2"</span>: {
                      <span class="hljs-attr">"amount"</span>: <span class="hljs-number">5</span>
                  },
                  <span class="hljs-attr">"top3"</span>: {
                      <span class="hljs-attr">"amount"</span>: <span class="hljs-number">0</span>
                  }
              },
              <span class="hljs-attr">"gsblotto"</span>: {
                  <span class="hljs-attr">"bottom1"</span>: {
                      <span class="hljs-attr">"amount"</span>: <span class="hljs-number">10</span>
                  },
                  <span class="hljs-attr">"bottom2"</span>: {
                      <span class="hljs-attr">"amount"</span>: <span class="hljs-number">10</span>
                  },
                  <span class="hljs-attr">"row3"</span>: {
                      <span class="hljs-attr">"amount"</span>: <span class="hljs-number">0</span>
                  },
                  <span class="hljs-attr">"top1"</span>: {
                      <span class="hljs-attr">"amount"</span>: <span class="hljs-number">10</span>
                  },
                  <span class="hljs-attr">"top2"</span>: {
                      <span class="hljs-attr">"amount"</span>: <span class="hljs-number">10</span>
                  },
                  <span class="hljs-attr">"top3"</span>: {
                      <span class="hljs-attr">"amount"</span>: <span class="hljs-number">100</span>
                  }
              },
              <span class="hljs-attr">"hanoilotto"</span>: {
                  <span class="hljs-attr">"hanoilotto"</span>: {
                      <span class="hljs-attr">"bottom1"</span>: {
                          <span class="hljs-attr">"amount"</span>: <span class="hljs-number">5</span>
                      },
                      <span class="hljs-attr">"bottom2"</span>: {
                          <span class="hljs-attr">"amount"</span>: <span class="hljs-number">2</span>
                      },
                      <span class="hljs-attr">"row3"</span>: {
                          <span class="hljs-attr">"amount"</span>: <span class="hljs-number">5</span>
                      },
                      <span class="hljs-attr">"top1"</span>: {
                          <span class="hljs-attr">"amount"</span>: <span class="hljs-number">1</span>
                      },
                      <span class="hljs-attr">"top2"</span>: {
                          <span class="hljs-attr">"amount"</span>: <span class="hljs-number">5</span>
                      },
                      <span class="hljs-attr">"top3"</span>: {
                          <span class="hljs-attr">"amount"</span>: <span class="hljs-number">100</span>
                      }
                  }
              },
              <span class="hljs-attr">"hanoilottospecial"</span>: {
                  <span class="hljs-attr">"hanoilottospecial"</span>: {
                      <span class="hljs-attr">"bottom1"</span>: {
                          <span class="hljs-attr">"amount"</span>: <span class="hljs-number">5</span>
                      },
                      <span class="hljs-attr">"bottom2"</span>: {
                          <span class="hljs-attr">"amount"</span>: <span class="hljs-number">5</span>
                      },
                      <span class="hljs-attr">"row3"</span>: {
                          <span class="hljs-attr">"amount"</span>: <span class="hljs-number">5</span>
                      },
                      <span class="hljs-attr">"top1"</span>: {
                          <span class="hljs-attr">"amount"</span>: <span class="hljs-number">5</span>
                      },
                      <span class="hljs-attr">"top2"</span>: {
                          <span class="hljs-attr">"amount"</span>: <span class="hljs-number">5</span>
                      },
                      <span class="hljs-attr">"top3"</span>: {
                          <span class="hljs-attr">"amount"</span>: <span class="hljs-number">5</span>
                      }
                  },
                  <span class="hljs-attr">"hanoilottospecial"</span>: {
                      <span class="hljs-attr">"lottoset"</span>: <span class="hljs-number">null</span>
                  }
              },
              <span class="hljs-attr">"hanoilottovip"</span>: {
                  <span class="hljs-attr">"hanoilottovip"</span>: {
                      <span class="hljs-attr">"bottom1"</span>: {
                          <span class="hljs-attr">"amount"</span>: <span class="hljs-number">5</span>
                      },
                      <span class="hljs-attr">"bottom2"</span>: {
                          <span class="hljs-attr">"amount"</span>: <span class="hljs-number">5</span>
                      },
                      <span class="hljs-attr">"row3"</span>: {
                          <span class="hljs-attr">"amount"</span>: <span class="hljs-number">10</span>
                      },
                      <span class="hljs-attr">"top1"</span>: {
                          <span class="hljs-attr">"amount"</span>: <span class="hljs-number">5</span>
                      },
                      <span class="hljs-attr">"top2"</span>: {
                          <span class="hljs-attr">"amount"</span>: <span class="hljs-number">5</span>
                      },
                      <span class="hljs-attr">"top3"</span>: {
                          <span class="hljs-attr">"amount"</span>: <span class="hljs-number">10</span>
                      }
                  },
                  <span class="hljs-attr">"hanoilottovip_set"</span>: {
                      <span class="hljs-attr">"lottoset"</span>: <span class="hljs-number">null</span>
                  }
              },
              <span class="hljs-attr">"hanoilottovip"</span>: {
                  <span class="hljs-attr">"hanoilottovip"</span>: {
                      <span class="hljs-attr">"bottom1"</span>: {
                          <span class="hljs-attr">"amount"</span>: <span class="hljs-number">0</span>
                      },
                      <span class="hljs-attr">"bottom2"</span>: {
                          <span class="hljs-attr">"amount"</span>: <span class="hljs-number">0</span>
                      },
                      <span class="hljs-attr">"row2"</span>: {
                          <span class="hljs-attr">"amount"</span>: <span class="hljs-number">0</span>
                      },
                      <span class="hljs-attr">"row3"</span>: {
                          <span class="hljs-attr">"amount"</span>: <span class="hljs-number">0</span>
                      },
                      <span class="hljs-attr">"row4"</span>: {
                          <span class="hljs-attr">"amount"</span>: <span class="hljs-number">0</span>
                      },
                      <span class="hljs-attr">"top1"</span>: {
                          <span class="hljs-attr">"amount"</span>: <span class="hljs-number">0</span>
                      },
                      <span class="hljs-attr">"top2"</span>: {
                          <span class="hljs-attr">"amount"</span>: <span class="hljs-number">0</span>
                      },
                      <span class="hljs-attr">"top3"</span>: {
                          <span class="hljs-attr">"amount"</span>: <span class="hljs-number">0</span>
                      },
                      <span class="hljs-attr">"top4"</span>: {
                          <span class="hljs-attr">"amount"</span>: <span class="hljs-number">800</span>
                      }
                  },
                  <span class="hljs-attr">"laoslotto_set"</span>: <span class="hljs-number">null</span>
              },
              <span class="hljs-attr">"malaylotto"</span>: {
                  <span class="hljs-attr">"malaylotto"</span>: {
                      <span class="hljs-attr">"bottom1"</span>: {
                          <span class="hljs-attr">"amount"</span>: <span class="hljs-number">2</span>
                      },
                      <span class="hljs-attr">"bottom2"</span>: {
                          <span class="hljs-attr">"amount"</span>: <span class="hljs-number">2</span>
                      },
                      <span class="hljs-attr">"row3"</span>: {
                          <span class="hljs-attr">"amount"</span>: <span class="hljs-number">2</span>
                      },
                      <span class="hljs-attr">"top1"</span>: {
                          <span class="hljs-attr">"amount"</span>: <span class="hljs-number">2</span>
                      },
                      <span class="hljs-attr">"top2"</span>: {
                          <span class="hljs-attr">"amount"</span>: <span class="hljs-number">2</span>
                      },
                      <span class="hljs-attr">"top3"</span>: {
                          <span class="hljs-attr">"amount"</span>: <span class="hljs-number">2</span>
                      }
                  },
                  <span class="hljs-attr">"malaylotto_set"</span>: {
                      <span class="hljs-attr">"lottoset"</span>: <span class="hljs-number">null</span>
                  }
              },
              <span class="hljs-attr">"pingponglotto"</span>: {
                  <span class="hljs-attr">"bottom1"</span>: {
                      <span class="hljs-attr">"amount"</span>: <span class="hljs-number">0</span>
                  },
                  <span class="hljs-attr">"bottom2"</span>: {
                      <span class="hljs-attr">"amount"</span>: <span class="hljs-number">0</span>
                  },
                  <span class="hljs-attr">"row2"</span>: {
                      <span class="hljs-attr">"amount"</span>: <span class="hljs-number">0</span>
                  },
                  <span class="hljs-attr">"row3"</span>: {
                      <span class="hljs-attr">"amount"</span>: <span class="hljs-number">0</span>
                  },
                  <span class="hljs-attr">"row4"</span>: {
                      <span class="hljs-attr">"amount"</span>: <span class="hljs-number">0</span>
                  },
                  <span class="hljs-attr">"top1"</span>: {
                      <span class="hljs-attr">"amount"</span>: <span class="hljs-number">500</span>
                  },
                  <span class="hljs-attr">"top2"</span>: {
                      <span class="hljs-attr">"amount"</span>: <span class="hljs-number">0</span>
                  },
                  <span class="hljs-attr">"top3"</span>: {
                      <span class="hljs-attr">"amount"</span>: <span class="hljs-number">0</span>
                  },
                  <span class="hljs-attr">"top4"</span>: {
                      <span class="hljs-attr">"amount"</span>: <span class="hljs-number">0</span>
                  },
                  <span class="hljs-attr">"top5"</span>: {
                      <span class="hljs-attr">"amount"</span>: <span class="hljs-number">0</span>
                  },
                  <span class="hljs-attr">"top6"</span>: {
                      <span class="hljs-attr">"amount"</span>: <span class="hljs-number">5000</span>
                  }
              },
              <span class="hljs-attr">"stock"</span>: {
                  <span class="hljs-attr">"malaylotto"</span>: {
                      <span class="hljs-attr">"bottom1"</span>: {
                          <span class="hljs-attr">"amount"</span>: <span class="hljs-number">0</span>
                      },
                      <span class="hljs-attr">"bottom2"</span>: {
                          <span class="hljs-attr">"amount"</span>: <span class="hljs-number">0</span>
                      },
                      <span class="hljs-attr">"row3"</span>: {
                          <span class="hljs-attr">"amount"</span>: <span class="hljs-number">0</span>
                      },
                      <span class="hljs-attr">"top1"</span>: {
                          <span class="hljs-attr">"amount"</span>: <span class="hljs-number">0</span>
                      },
                      <span class="hljs-attr">"top2"</span>: {
                          <span class="hljs-attr">"amount"</span>: <span class="hljs-number">0</span>
                      },
                      <span class="hljs-attr">"top3"</span>: {
                          <span class="hljs-attr">"amount"</span>: <span class="hljs-number">50</span>
                      }
                  },
                  <span class="hljs-attr">"malaylotto_set"</span>: {
                      <span class="hljs-attr">"lottoset"</span>: <span class="hljs-number">null</span>
                  }
              },
              <span class="hljs-attr">"thailotto"</span>: {
                  <span class="hljs-attr">"bottom1"</span>: {
                      <span class="hljs-attr">"amount"</span>: <span class="hljs-number">0</span>
                  },
                  <span class="hljs-attr">"bottom2"</span>: {
                      <span class="hljs-attr">"amount"</span>: <span class="hljs-number">0</span>
                  },
                  <span class="hljs-attr">"bottom3"</span>: {
                      <span class="hljs-attr">"amount"</span>: <span class="hljs-number">0</span>
                  },
                  <span class="hljs-attr">"row2"</span>: {
                      <span class="hljs-attr">"amount"</span>: <span class="hljs-number">0</span>
                  },
                  <span class="hljs-attr">"row3"</span>: {
                      <span class="hljs-attr">"amount"</span>: <span class="hljs-number">0</span>
                  },
                  <span class="hljs-attr">"row4"</span>: {
                      <span class="hljs-attr">"amount"</span>: <span class="hljs-number">0</span>
                  },
                  <span class="hljs-attr">"top1"</span>: {
                      <span class="hljs-attr">"amount"</span>: <span class="hljs-number">500</span>
                  },
                  <span class="hljs-attr">"top2"</span>: {
                      <span class="hljs-attr">"amount"</span>: <span class="hljs-number">0</span>
                  },
                  <span class="hljs-attr">"top3"</span>: {
                      <span class="hljs-attr">"amount"</span>: <span class="hljs-number">0</span>
                  },
                  <span class="hljs-attr">"top4"</span>: {
                      <span class="hljs-attr">"amount"</span>: <span class="hljs-number">0</span>
                  },
                  <span class="hljs-attr">"top5"</span>: {
                      <span class="hljs-attr">"amount"</span>: <span class="hljs-number">0</span>
                  },
                  <span class="hljs-attr">"top6"</span>: {
                      <span class="hljs-attr">"amount"</span>: <span class="hljs-number">500</span>
                  }
              },
              <span class="hljs-attr">"yeekeelotto"</span>: {
                  <span class="hljs-attr">"bottom1"</span>: {
                          <span class="hljs-attr">"amount"</span>: <span class="hljs-number">0</span>
                      },
                      <span class="hljs-attr">"bottom2"</span>: {
                          <span class="hljs-attr">"amount"</span>: <span class="hljs-number">0</span>
                      },
                      <span class="hljs-attr">"row3"</span>: {
                          <span class="hljs-attr">"amount"</span>: <span class="hljs-number">0</span>
                      },
                      <span class="hljs-attr">"top1"</span>: {
                          <span class="hljs-attr">"amount"</span>: <span class="hljs-number">0</span>
                      },
                      <span class="hljs-attr">"top2"</span>: {
                          <span class="hljs-attr">"amount"</span>: <span class="hljs-number">0</span>
                      },
                      <span class="hljs-attr">"top3"</span>: {
                          <span class="hljs-attr">"amount"</span>: <span class="hljs-number">50</span>
                      }
                  }
              },
          },
          <span class="hljs-attr">"datapayout"</span>: {
              <span class="hljs-attr">"baaclotto"</span>: {
                  <span class="hljs-attr">"bottom1"</span>: {
                          <span class="hljs-attr">"discount"</span>: <span class="hljs-number">0</span>,
                          <span class="hljs-attr">"payout"</span>: <span class="hljs-number">4.2</span>
                      },
                      <span class="hljs-attr">"bottom2"</span>: {
                          <span class="hljs-attr">"discount"</span>: <span class="hljs-number">0</span>,
                          <span class="hljs-attr">"payout"</span>: <span class="hljs-number">100</span>
                      },
                      <span class="hljs-attr">"row3"</span>: {
                          <span class="hljs-attr">"discount"</span>: <span class="hljs-number">0</span>,
                          <span class="hljs-attr">"payout"</span>: <span class="hljs-number">166.6</span>
                      },
                      <span class="hljs-attr">"top1"</span>: {
                          <span class="hljs-attr">"discount"</span>: <span class="hljs-number">0</span>,
                          <span class="hljs-attr">"payout"</span>: <span class="hljs-number">3.2</span>
                      },
                      <span class="hljs-attr">"top2"</span>: {
                          <span class="hljs-attr">"discount"</span>: <span class="hljs-number">0</span>,
                          <span class="hljs-attr">"payout"</span>: <span class="hljs-number">100</span>
                      },
                      <span class="hljs-attr">"top3"</span>: {
                          <span class="hljs-attr">"discount"</span>: <span class="hljs-number">0</span>,
                          <span class="hljs-attr">"payout"</span>: <span class="hljs-number">1000</span>
                      }
                  },
              },
              <span class="hljs-attr">"gsblotto"</span>: {
                  <span class="hljs-attr">"bottom1"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">4.2</span>
                  },
                  <span class="hljs-attr">"bottom2"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">100</span>
                  },
                  <span class="hljs-attr">"row3"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">166.6</span>
                  },
                  <span class="hljs-attr">"top1"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">3.2</span>
                  },
                  <span class="hljs-attr">"top2"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">100</span>
                  },
                  <span class="hljs-attr">"top3"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">1000</span>,
                  }
              },
              <span class="hljs-attr">"hanoilotto"</span>: {
              <span class="hljs-attr">"bottom1"</span>: {
              <span class="hljs-attr">"discount"</span>: <span class="hljs-number">0</span>,
              <span class="hljs-attr">"payout"</span>: <span class="hljs-number">4.2</span>
                  },
                  <span class="hljs-attr">"bottom2"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">100</span>
                  },
                  <span class="hljs-attr">"row3"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">166.6</span>
                  },
                  <span class="hljs-attr">"top1"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">3.2</span>
                  },
                  <span class="hljs-attr">"top2"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">100</span>
                  },
                  <span class="hljs-attr">"top3"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">1000</span>
                  }
              },
              <span class="hljs-attr">"hanoilotto_set"</span>: {
              <span class="hljs-attr">"back2"</span>: {
              <span class="hljs-attr">"discount"</span>: <span class="hljs-number">0</span>,
              <span class="hljs-attr">"payout"</span>: <span class="hljs-number">100</span>
                  },
                  <span class="hljs-attr">"front2"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">100</span>
                  },
                  <span class="hljs-attr">"row3"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>:<span class="hljs-number"> 166.6</span>
                  },
                  <span class="hljs-attr">"row4"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">416.6</span>
                  },
                  <span class="hljs-attr">"top3"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">1000</span>
                  },
                  <span class="hljs-attr">"top4"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>:<span class="hljs-number"> 10000</span>
                  }
              },
              <span class="hljs-attr">"hanoilottospecial"</span>: {
              <span class="hljs-attr">"bottom1"</span>: {
              <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
              <span class="hljs-attr">"payout"</span>: <span class="hljs-number">4.2</span>
                  },
                  <span class="hljs-attr">"bottom2"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">100</span>
                  },
                  <span class="hljs-attr">"row3"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">166.6</span>
                  },
                  <span class="hljs-attr">"top1"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">3.2</span>
                  },
                  <span class="hljs-attr">"top2"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">100</span>
                  },
                  <span class="hljs-attr">"top3"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">1000</span>
                  }
              },
              <span class="hljs-attr">"hanoilottospecial_set"</span>: {
              <span class="hljs-attr">"back2"</span>: {
              <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
              <span class="hljs-attr">"payout"</span>: <span class="hljs-number">100</span>
                  },
                  <span class="hljs-attr">"front2"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">100</span>
                  },
                  <span class="hljs-attr">"row3"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>:<span class="hljs-number"> 166.6</span>
                  },
                  <span class="hljs-attr">"row4"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">416.6</span>
                  },
                  <span class="hljs-attr">"top3"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">1000</span>
                  },
                <span class="hljs-attr"> "top4"</span>: {
                <span class="hljs-attr"> "discount"<span class="hljs-number">0</span>,
                <span class="hljs-attr"> "payout"</span>: 10000</span>
                  }
              },
              <span class="hljs-attr">"hanoilottovip"</span>: {
              <span class="hljs-attr">"bottom1"</span>: {
              <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
              <span class="hljs-attr">"payout"</span>: <span class="hljs-number">4.2</span>
                  },
                  <span class="hljs-attr">"bottom2"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">100</span>
                  },
                  <span class="hljs-attr">"row3"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>:<span class="hljs-number"> 166.6</span>
                  },
                  <span class="hljs-attr">"top1"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>:<span class="hljs-number"> 3.2</span>
                  },
                  <span class="hljs-attr">"top2"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">100</span>
                  },
                  <span class="hljs-attr">"top3"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>:<span class="hljs-number"> 900</span>
                  }
              },
              <span class="hljs-attr">"hanoilottovip_set"</span>: {
              <span class="hljs-attr">"back2"</span>: {
              <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
              <span class="hljs-attr">"payout"</span>:<span class="hljs-number"> 100</span>
                  },
                  <span class="hljs-attr">"front2"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>:<span class="hljs-number"> 100</span>
                  },
                  <span class="hljs-attr">"row3"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>:<span class="hljs-number"> 166.6</span>
                  },
                  <span class="hljs-attr">"row4"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>:<span class="hljs-number"> 416.6</span>
                  },
                  <span class="hljs-attr">"top3"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">1000</span>
                  },
                  <span class="hljs-attr">"top4"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">9000</span>
                  }
              },
              <span class="hljs-attr">"laoslotto_thai"</span>: {
              <span class="hljs-attr">"back2"</span>: {
              <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
              <span class="hljs-attr">"payout"</span>:<span class="hljs-number"> 100</span>
                  },
                  <span class="hljs-attr">"front2"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>:<span class="hljs-number"> 100</span>
                  },
                  <span class="hljs-attr">"row3"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>:<span class="hljs-number"> 166.6</span>
                  },
                  <span class="hljs-attr">"row4"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">416.6</span>
                  },
                  <span class="hljs-attr">"top3"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">1000</span>
                  },
                  <span class="hljs-attr">"top4"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">10000</span>
                  }
              },
              <span class="hljs-attr">"malaylotto"</span>: {
              <span class="hljs-attr">"bottom1"</span>: {
              <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
              <span class="hljs-attr">"payout"</span>: <span class="hljs-number">4.2</span>
                  },
                  <span class="hljs-attr">"bottom2"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">100</span>
                  },
                  <span class="hljs-attr">"row3"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">166.6</span>
                  },
                  <span class="hljs-attr">"top1"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">3.2</span>
                  },
                  <span class="hljs-attr">"top2"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">100</span>
                  },
                  <span class="hljs-attr">"top3"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">1000</span>
                  }
              },
              <span class="hljs-attr">"malaylotto_set"</span>: {
              <span class="hljs-attr">"back2"</span>: {
              <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
              <span class="hljs-attr">"payout"</span>: <span class="hljs-number">100</span>
                  },
                  <span class="hljs-attr">"front2"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>:<span class="hljs-number"> 100</span>
                  },
                  <span class="hljs-attr">"row3"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">166.6</span>
                  },
                  <span class="hljs-attr">"row4"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>:<span class="hljs-number"> 416.6</span>
                  },
                  <span class="hljs-attr">"top3"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">1000</span>
                  },
                  <span class="hljs-attr">"top4"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>:<span class="hljs-number"> 10000</span>
                  }
              },
              <span class="hljs-attr">"pingponglotto"</span>: {
              <span class="hljs-attr">"bottom1"</span>: {
              <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
              <span class="hljs-attr">"payout"</span>: <span class="hljs-number">4.2</span>
                  },
                  <span class="hljs-attr">"bottom2"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">100</span>
                  },
                  <span class="hljs-attr">"row2"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">16.6</span>
                  },
                  <span class="hljs-attr">"row3"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">166.6</span>
                  },
                  <span class="hljs-attr">"row4"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">416.6</span>
                  },
                  <span class="hljs-attr">"top1"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>:<span class="hljs-number"> 3.2</span>
                  },
                  <span class="hljs-attr">"top2"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">100</span>
                  },
                  <span class="hljs-attr">"top3"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">1000</span>
                  },
                  <span class="hljs-attr">"top4"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">5000</span>
                  },
                  <span class="hljs-attr">"top5"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">25000</span>
                  },
                  <span class="hljs-attr">"top6"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>:<span class="hljs-number"> 50000</span>
                  }
              },
              <span class="hljs-attr">"stock"</span>: {
              <span class="hljs-attr">"bottom1"</span>: {
              <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
              <span class="hljs-attr">"payout"</span>: <span class="hljs-number">4.2</span>,
                  },
                  <span class="hljs-attr">"bottom2"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">100</span>
                  },
                  <span class="hljs-attr">"row3"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">166.6</span>
                  },
                  <span class="hljs-attr">"top1"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">3.2</span>
                  },
                  <span class="hljs-attr">"top2"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">100</span>
                  },
                  <span class="hljs-attr">"top3"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">1000</span>
                  }
              },
              <span class="hljs-attr">"thailotto"</span>: {
              <span class="hljs-attr">"bottom1"</span>: {
              <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
              <span class="hljs-attr">"payout"</span>:<span class="hljs-number"> 4.2</span>
                  },
                  <span class="hljs-attr">"bottom2"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">90</span>
                  },
                  <span class="hljs-attr">"bottom3"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">225</span>
                  },
                  <span class="hljs-attr">"row2"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">12</span>
                  },
                  <span class="hljs-attr">"row3"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">150</span>
                  },
                  <span class="hljs-attr">"row4"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">225</span>
                  },
                  <span class="hljs-attr">"top1"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">3.2</span>
                  },
                  <span class="hljs-attr">"top2"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">90</span>
                  },
                  <span class="hljs-attr">"top3"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">900</span>
                  },
                  <span class="hljs-attr">"top4"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">5000</span>
                  },
                  <span class="hljs-attr">"top5"</span>: {
                  <span class="hljs-attr">"discount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">25000</span>
                  },
                  <span class="hljs-attr">"top6"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-number">10</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">50000</span>
                  }
              },
              <span class="hljs-attr">"yeekeelotto"</span>: {
              <span class="hljs-attr">"bottom1"</span>: {
              <span class="hljs-attr">"discount"</span>: <span class="hljs-number">10</span>,
              <span class="hljs-attr">"payout"</span>: <span class="hljs-number">4.2</span>,
                  },
                  <span class="hljs-attr">"bottom2"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-number">10</span>,
                  <span class="hljs-attr">"payout"</span>:<span class="hljs-number"> 90</span>
                  },
                  <span class="hljs-attr">"row3"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-number">10</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">150</span>
                  },
                  <span class="hljs-attr">"top1"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-number">10</span>,
                  <span class="hljs-attr">"payout"</span>:<span class="hljs-number"> 3.2</span>
                  },
                  <span class="hljs-attr">"top2"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-number">10</span>,
                  <span class="hljs-attr">"payout"</span>:<span class="hljs-number"> 90</span>
                  },
                  <span class="hljs-attr">"top3"</span>: {
                  <span class="hljs-attr">"discount"</span>: <span class="hljs-number">10</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">900</span>
                  }
              }
          },
          <span class="hljs-attr">"dataplaceout"</span>: {
          <span class="hljs-attr">"baaclotto"</span>: {
          <span class="hljs-attr">"bottom1"</span>: {
          <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
          <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                  },
                  <span class="hljs-attr">"bottom2"</span>: {
                  <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                  },
                  <span class="hljs-attr">"row3"</span>: {
                  <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                  },
                  <span class="hljs-attr">"top1"</span>: {
                  <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                  },
                  <span class="hljs-attr">"top2"</span>: {
                  <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                  },
                  <span class="hljs-attr">"top3"</span>: {
                  <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                  }
              },
              <span class="hljs-attr">"gsblotto"</span>: {
                  <span class="hljs-attr">"bottom1"</span>: {
                  <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                  },
                  <span class="hljs-attr">"bottom2"</span>: {
                  <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                  },
                  <span class="hljs-attr">"row3"</span>: {
                  <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                  },
                  <span class="hljs-attr">"top1"</span>: {
                  <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                  },
                  <span class="hljs-attr">"top2"</span>: {
                  <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                  },
                  <span class="hljs-attr">"top3"</span>: {
                  <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                  }
              },
              <span class="hljs-attr">"hanoilotto"</span>: {
              <span class="hljs-attr">"hanoilotto"</span>: {
                      <span class="hljs-attr">"bottom1"</span>: {
                      <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                      <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                      },
                      <span class="hljs-attr">"bottom2"</span>: {
                      <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                      <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                      },
                      <span class="hljs-attr">"row3"</span>: {
                      <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                      <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                      },
                      <span class="hljs-attr">"top1"</span>: {
                      <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                      <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                      },
                      <span class="hljs-attr">"top2"</span>: {
                      <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                      <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                      },
                      <span class="hljs-attr">"top3"</span>: {
                      <span class="hljs-attr">"amount"</span>: <span class="hljs-number">5000</span>,
                      <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                      }
                  },
                  <span class="hljs-attr">"hanoilotto_set"</span>: {
                  <span class="hljs-attr">"lottoset"</span>: {
                  <span class="hljs-attr">"amount"</span>: <span class="hljs-number">1000</span>,
                  <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                      }
                  }
              },
              <span class="hljs-attr">"hanoilottospecial"</span>: {
              <span class="hljs-attr">"hanoilottospecial"</span>: {
              <span class="hljs-attr">"bottom1"</span>: {
              <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
              <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                      },
                      <span class="hljs-attr">"bottom2"</span>: {
                      <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                      <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                      },
                      <span class="hljs-attr">"row3"</span>: {
                      <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                      <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                      },
                      <span class="hljs-attr">"top1"</span>: {
                      <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                      <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                      },
                      <span class="hljs-attr">"top2"</span>: {
                      <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                      <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                      },
                      <span class="hljs-attr">"top3"</span>: {
                      <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                      <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                      }
                  },
                  <span class="hljs-attr">"hanoilottospecial_set"</span>: {
                  <span class="hljs-attr">"lottoset"</span>: {
                  <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                      }
                  }
              },
              <span class="hljs-attr">"hanoilottovip"</span>: {
              <span class="hljs-attr">"hanoilottovip"</span>: {
              <span class="hljs-attr">"bottom1"</span>: {
              <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
              <span class="hljs-attr">"levellist"</span>: [
              <span class="hljs-attr">3.2</span>
                          ]
                      },
                      <span class="hljs-attr">"bottom2"</span>: {
                      <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                      <span class="hljs-attr">"levellist"</span>: [
                      <span class="hljs-attr">80</span>
                          ]
                      },
                      <span class="hljs-attr">"row3"</span>: {
                      <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                      <span class="hljs-attr">"levellist"</span>: [
                      <span class="hljs-attr">116.6</span>
                          ]
                      },
                      <span class="hljs-attr">"top1"</span>: {
                      <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                      <span class="hljs-attr">"levellist"</span>: [
                      <span class="hljs-attr">2.2</span>
                          ]
                      },
                      <span class="hljs-attr">"top2"</span>: {
                      <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                      <span class="hljs-attr">"levellist"</span>: [
                      <span class="hljs-attr">70</span>
                          ]
                      },
                      <span class="hljs-attr">"top3"</span>: {
                      <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                      <span class="hljs-attr">"levellist"</span>: [
                      <span class="hljs-attr">800</span>
                          ]
                      }
                  },
                  <span class="hljs-attr">"hanoilottovip_set"</span>: {
                  <span class="hljs-attr">"lottoset"</span>: {
                  <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                      }
                  }
              },
              <span class="hljs-attr">"laoslotto"</span>: {
              <span class="hljs-attr">"laoslotto"</span>: {
              <span class="hljs-attr">"bottom1"</span>: {
              <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
              <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                      },
                      <span class="hljs-attr">"bottom2"</span>: {
                      <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                      <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                      },
                      <span class="hljs-attr">"row2"</span>: {
                      <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                      <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                      },
                      <span class="hljs-attr">"row3"</span>: {
                      <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                      <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                      },
                      <span class="hljs-attr">"row4"</span>: {
                      <span class="hljs-attr">"amount"</span>: <span class="hljs-number">1</span>,
                      <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                      },
                      <span class="hljs-attr">"top1"</span>: {
                      <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                      <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                      },
                      <span class="hljs-attr">"top2"</span>: {
                      <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                      <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                      },
                      <span class="hljs-attr">"top3"</span>: {
                      <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                      <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                      },
                      <span class="hljs-attr">"top4"</span>: {
                      <span class="hljs-attr">"amount"</span>: <span class="hljs-number">200</span>,
                      <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                      }
                  },
                  <span class="hljs-attr">"laoslotto_set"</span>: {
                  <span class="hljs-attr">"bottom1"</span>: {
                  <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                      },
                      <span class="hljs-attr">"bottom2"</span>: {
                      <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                      <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                      },
                      <span class="hljs-attr">"row2"</span>: {
                      <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                      <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                      },
                      <span class="hljs-attr">"row3"</span>: {
                      <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                      <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                      },
                      <span class="hljs-attr">"row4"</span>: {
                      <span class="hljs-attr">"amount"</span>: <span class="hljs-number">1</span>,
                      <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                      },
                      <span class="hljs-attr">"top1"</span>: {
                      <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                      <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                      },
                      <span class="hljs-attr">"top2"</span>: {
                      <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                      <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                      },
                      <span class="hljs-attr">"top3"</span>: {
                      <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                      <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                      },
                      <span class="hljs-attr">"top4"</span>: {
                      <span class="hljs-attr">"amount"</span>: <span class="hljs-number">200</span>,
                      <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                      }
                  }
              },
              <span class="hljs-attr">"malaylotto"</span>: {
              <span class="hljs-attr">"malaylotto"</span>: {
              <span class="hljs-attr">"bottom1"</span>: {
              <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
              <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                      },
                      <span class="hljs-attr">"bottom2"</span>: {
                      <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                      <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                      },
                      <span class="hljs-attr">"row3"</span>: {
                      <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                      <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                      },
                      <span class="hljs-attr">"top1"</span>: {
                      <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                      <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                      },
                      <span class="hljs-attr">"top2"</span>: {
                      <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                      <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                      },
                      <span class="hljs-attr">"top3"</span>: {
                      <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                      <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                      }
                  },
                  <span class="hljs-attr">"malaylotto_set"</span>: {
                  <span class="hljs-attr">"lottoset"</span>: {
                  <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                      }
                  }
              },
              <span class="hljs-attr">"pingponglotto"</span>: {
              <span class="hljs-attr">"bottom1"</span>: {
              <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
              <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                  },
                  <span class="hljs-attr">"bottom2"</span>: {
                  <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                  },
                  <span class="hljs-attr">"row2"</span>: {
                  <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                  },
                  <span class="hljs-attr">"row3"</span>: {
                  <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                  },
                  <span class="hljs-attr">"row4"</span>: {
                  <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                  },
                  <span class="hljs-attr">"top1"</span>: {
                  <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                  },
                  <span class="hljs-attr">"top2"</span>: {
                  <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                  },
                  <span class="hljs-attr">"top3"</span>: {
                  <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                  },
                  <span class="hljs-attr">"top4"</span>: {
                  <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                  },
                  <span class="hljs-attr">"top5"</span>: {
                  <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                  },
                  <span class="hljs-attr">"top6"</span>: {
                  <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                  }
              },
              <span class="hljs-attr">"stock"</span>: {
              <span class="hljs-attr">"bottom1"</span>: {
              <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
              <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                  },
                  <span class="hljs-attr">"bottom2"</span>: {
                  <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                  },
                  <span class="hljs-attr">"row3"</span>: {
                  <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                  },
                  <span class="hljs-attr">"top1"</span>: {
                  <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                  },
                  <span class="hljs-attr">"top2"</span>: {
                  <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                  },
                  <span class="hljs-attr">"top3"</span>: {
                  <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"levellist"</span>: <span class="hljs-number">[]</span>,
                  }
              },
              <span class="hljs-attr">"thailotto"</span>: {
              <span class="hljs-attr">"bottom1"</span>: {
              <span class="hljs-attr">"amount"</span>: <span class="hljs-number">1000</span>,
              <span class="hljs-attr">"levellist"</span>: [
              <span class="hljs-attr">3.1</span>,
              <span class="hljs-attr">2</span>
                      ]
                  },
                  <span class="hljs-attr">"bottom2"</span>: {
                  <span class="hljs-attr">"amount"</span>:<span class="hljs-number"> 1000</span>,
                  <span class="hljs-attr">"levellist"</span>: [
                  <span class="hljs-attr">70</span>,
                  <span class="hljs-attr">50</span>
                      ]
                  },
                  <span class="hljs-attr">"bottom3"</span>: {
                  <span class="hljs-attr">"amount"</span>:<span class="hljs-number"> 1000</span>,
                  <span class="hljs-attr">"levellist"</span>: [
                  <span class="hljs-attr">155</span>,
                  <span class="hljs-attr">145</span>
                      ]
                  },
                  <span class="hljs-attr">"row2"</span>: {
                  <span class="hljs-attr">"amount"</span>: <span class="hljs-number">1000</span>,
                  <span class="hljs-attr">"levellist"</span>: [
                  <span class="hljs-attr">10</span>,
                  <span class="hljs-attr">8</span>
                      ]
                  },
                  <span class="hljs-attr">"row3"</span>: {
                  <span class="hljs-attr">"amount"</span>: <span class="hljs-number">1000</span>,
                  <span class="hljs-attr">"levellist"</span>: [
                  <span class="hljs-attr">80</span>,
                  <span class="hljs-attr">70</span>
                      ]
                  },
                  <span class="hljs-attr">"row4"</span>: {
                  <span class="hljs-attr">"amount"</span>: <span class="hljs-number">1000</span>,
                  <span class="hljs-attr">"levellist"</span>: [
                  <span class="hljs-attr">155</span>,
                  <span class="hljs-attr">145</span>
                      ]
                  },
                  <span class="hljs-attr">"top1"</span>: {
                  <span class="hljs-attr">"amount"</span>:<span class="hljs-number"> 1000</span>,
                  <span class="hljs-attr">"levellist"</span>: [
                  <span class="hljs-attr">2.1,</span>
                  <span class="hljs-attr">1</span>
                      ]
                  },
                  <span class="hljs-attr">"top2"</span>: {
                  <span class="hljs-attr">"amount"</span>: <span class="hljs-number">1000</span>,
                  <span class="hljs-attr">"levellist"</span>: [
                  <span class="hljs-attr">70</span>,
                  <span class="hljs-attr">50</span>
                      ]
                  },
                  <span class="hljs-attr">"top3"</span>: {
                  <span class="hljs-attr">"amount"</span>: <span class="hljs-number">1000</span>,
                  <span class="hljs-attr">"levellist"</span>: [
                  <span class="hljs-attr">550</span>,
                  <span class="hljs-attr">450</span>
                      ]
                  },
                  <span class="hljs-attr">"top4"</span>: {
                  <span class="hljs-attr">"amount"</span>: <span class="hljs-number">1000</span>,
                  <span class="hljs-attr">"levellist"</span>: [
                  <span class="hljs-attr">3500</span>,
                  <span class="hljs-attr">3000</span>
                      ]
                  },
                  <span class="hljs-attr">"top5"</span>: {
                  <span class="hljs-attr">"amount"</span>:<span class="hljs-number"> 1000</span>,
                  <span class="hljs-attr">"levellist"</span>: [
                  <span class="hljs-attr">10000</span>,
                  <span class="hljs-attr">5000</span>
                      ]
                  },
                  <span class="hljs-attr">"top6"</span>: {
                  <span class="hljs-attr">"amount"</span>:<span class="hljs-number"> 1000</span>,
                  <span class="hljs-attr">"levellist"</span>: [
                  <span class="hljs-attr">30000</span>,
                  <span class="hljs-attr">25000</span>,
                  <span class="hljs-attr">20000</span>,
                  <span class="hljs-attr">15000</span>
                      ]
                  }
              },
              <span class="hljs-attr">"yeekeelotto"</span>: {
              <span class="hljs-attr">"bottom1"</span>: {
              <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
              <span class="hljs-attr">"levellist"</span>: [
              <span class="hljs-attr">3.2</span>
                      ]
                  },
                  <span class="hljs-attr">"bottom2"</span>: {
                  <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"levellist"</span>: [
                  <span class="hljs-attr">80</span>,
                  <span class="hljs-attr">70</span>
                      ]
                  },
                  <span class="hljs-attr">"row3"</span>: {
                  <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"levellist"</span>: [
                  <span class="hljs-attr">140</span>,
                  <span class="hljs-attr">130</span>
                      ]
                  },
                  <span class="hljs-attr">"top1"</span>: {
                  <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"levellist"</span>: [
                  <span class="hljs-attr">2.2</span>
                      ]
                  },
                  <span class="hljs-attr">"top2"</span>: {
                  <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"levellist"</span>: [
                  <span class="hljs-attr">80</span>,
                  <span class="hljs-attr">70</span>
                      ]
                  },
                  <span class="hljs-attr">"top3"</span>: {
                  <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"levellist"</span>: [
                  <span class="hljs-attr">890</span>,
                  <span class="hljs-attr">880</span>
                      ]
                  }
              }
          }
      </code></pre>
                </div>
              </div>

              <div v-else-if="nosuccess">
                <div class="koh-faq-answer col-12">
                  <pre>

                                        <code id="351B" style="border-radius: 0.375rem;" class="hljs json">{
    <span class="hljs-attr">"code"</span>: <span class="hljs-number">{{numfail}}</span>,
        <span class="hljs-attr">"mgs"</span>: <span class="hljs-string">{{ nosuccess }}</span>
}</code></pre>
                </div>
              </div>
              <div v-else-if="permission">
                <div class="koh-faq-answer col-12">
                  <pre>

                                        <code id="351B" style="border-radius: 0.375rem;" class="hljs json">{
    <span class="hljs-attr">"code"</span>: <span class="hljs-number">{{numfail}}</span>,
        <span class="hljs-attr">"mgs"</span>: <span class="hljs-string">{{ permission }}</span>
}</code></pre>
                </div>
              </div>
            </div>
            <div class="loading" v-if="isLoading">Loading...</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CopyText from "~/components/CopyText.vue";
export default {
  components: {
    CopyText,
  },
  name: "BoxSem46",
  data() {
    return {
      success: "",
      nosuccess: "",
      permission: "",
      numfail: "",
      isLoading: false, // กำหนดให้แสดง "Loading..." ในเริ่มต้น
      pop: false, // กำหนดให้แสดง "Loading..." ในเริ่มต้น
      jsonData: "", // ข้อมูล JSON ที่จะส่งไปยังเซิร์ฟเวอร์
      URLdata: "https://test-api.askmelotto.com/apiRoute/api/ListPlaceout", // กำหนดค่าเริ่มต้นของ agentUsername
      // agentApiKey:  "",
      // agentApiKey: "",
    };
  },
  beforeCreate() {},
  mounted() {
    // this.get_Seamless();
    const json = {
      service: "GetUserDetail",
      data: {
        playerUsername: "comptestseamless",
        agentUsername: "top1betvip",
      },
    };

    // ใช้ JSON.stringify() เพื่อจัดรูปแบบ JSON แล้วกำหนดให้ jsonData เป็นค่าที่จัดรูปแบบแล้ว
    this.jsonData = JSON.stringify(json, null, 2);
  },
  watch: {
    jsonData(newValue) {
      try {
        const formattedJson = JSON.stringify(JSON.parse(newValue), null, 2);
        this.jsonData = formattedJson;
      } catch (error) {
        console.error("Invalid JSON format:", error);
        // ดำเนินการต่อไปตามที่ต้องการ เช่น แสดงข้อความแจ้งเตือนหรือดำเนินการอื่น ๆ
      }
    },
  },
  methods: {
          closeAndClear() {
      // รีเซ็ตค่าตัวแปรต่างๆ ใน component
      // this.jsonData = '';
      this.URLdata = 'https://test-api.askmelotto.com/apiRoute/api/ListPlaceout';
      this.isLoading = false;
      this.pop = false;
      this.response = null;
      this.success = '';
      this.code = null;
      this.numfail = null;
      this.msg = '';
      this.playerApiId = '';
      this.playerApiUsername = '';
      this.playerUsername = '';
      this.url = '';
      this.urlFullPage = '';
      this.tkUuid = '';
      this.permission = '';
      this.nosuccess = '';
    },
    copyTexttwo() {
      // เลือกข้อความใน div และคัดลอกไปยังคลิปบอร์ด
      var textToCopy = document.getElementById("myDivtwo").innerText;

      // สร้าง element input สำหรับคัดลอกข้อความ
      var inputElement = document.createElement("input");
      inputElement.setAttribute("value", textToCopy);
      document.body.appendChild(inputElement);

      // เลือกและคัดลอกข้อความที่อยู่ใน input element
      inputElement.select();
      document.execCommand("copy");

      // ลบ input element ที่สร้างขึ้น
      document.body.removeChild(inputElement);

      // แสดงข้อความแจ้งเตือนหลังจากคัดลอกสำเร็จ
      alert("คัดลอกเนื้อหาเรียบร้อยแล้ว");
    },
    copyTextthree() {
      // เลือกข้อความใน div และคัดลอกไปยังคลิปบอร์ด
      var textToCopy = document.getElementById("myDivthree").innerText;

      // สร้าง element input สำหรับคัดลอกข้อความ
      var inputElement = document.createElement("input");
      inputElement.setAttribute("value", textToCopy);
      document.body.appendChild(inputElement);

      // เลือกและคัดลอกข้อความที่อยู่ใน input element
      inputElement.select();
      document.execCommand("copy");

      // ลบ input element ที่สร้างขึ้น
      document.body.removeChild(inputElement);

      // แสดงข้อความแจ้งเตือนหลังจากคัดลอกสำเร็จ
      alert("คัดลอกเนื้อหาเรียบร้อยแล้ว");
    },
    get_Seamless() {
      alert("Send code clicked!");
      if (this.jsonData) {
        this.isLoading = true;
        this.pop = true;
        this.isLoading = true;
        try {
          const dataToSend = JSON.parse(this.jsonData);
          const URL = this.URLdata;
          console.log("URL", URL);
          // เรียกใช้ axios หรือวิธีการส่งข้อมูลไปยังเซิร์ฟเวอร์ที่คุณใช้งาน
          // ตัวอย่าง:

          this.$axios
            .post(URL, dataToSend)
            .then((response) => {
              // ตอบกลับจากเซิร์ฟเวอร์
              this.response = response.data;
              console.log("Sending JSON serv:", this.response);
              if (this.response.code === 0 || this.response.code === 200) {
                this.success = "Successful operation.";
                this.code = this.response.code;
                this.numfail = this.code; // กำหนดค่า success ให้เป็น "SUCCESS"
                this.msg = this.response.msg;
                this.playerApiId = this.response.data.playerApiId;
                this.playerApiUsername = this.response.data.playerApiUsername;
                this.playerUsername = this.response.data.playerUsername;
                this.url = this.response.data.url;
                this.urlFullPage = this.response.data.urlFullPage;
                this.tkUuid = this.response.data.tkUuid;
                this.code = this.response.code;
                this.numfail = this.code;
             } else if (this.response.code === 403) {
                this.permission = "Permission denied.";
                this.numfail = "403";
              } else if (this.response.code === 401) {
                this.numfail = "401";
                this.permission = "Authentication Failed.";
              } else if (this.response.code === 404) {
                this.permission = "Not Found.";
                this.numfail = "404";
              } else if (this.response.code === 405) {
                this.permission = "Method Not Allowed.";
                this.numfail = "405";
              } else if (this.response.code === 406) {
                this.permission = "Not Acceptable";
                this.numfail = "406";
              } else if (this.response.code === 407) {
                this.permission = "Proxy Authentication Required";
                this.numfail = "407 ";
              } else if (this.response.code === 408) {
                this.permission = "Request Timeout";
                this.numfail = "408";
              } else if (this.response.code === 500) {
                this.permission = "Server error.";
                this.numfail = "500";
              } else if (this.response.code === 501) {
                this.permission = "Not Implemented";
                this.numfail = "501";
              } else if (this.response.code === 502) {
                this.permission = "Bad Gateway";
                this.numfail = "502";
              } else if (this.response.code === 503) {
                this.permission = "Server error.";
                this.numfail = "503";
              } else if (this.response.code === 999) {
                this.permission = "Server error.";
                this.numfail = "999";
              } else {
                this.nosuccess = "Bad Request.";
                this.numfail = "400";
              }
              this.isLoading = false;
            })
            .catch((error) => {
              // จัดการข้อผิดพลาด
              console.log(error);
              if (error.response) {
                const statusCode = error.response.status;
   switch (statusCode) {
              case 403:
                this.permission = "Permission denied.";
                this.numfail = "403";
                break;
              case 401:
                this.permission = "Authentication Failed.";
                this.numfail = "401";
                break;
              case 404:
                this.permission = "Not Found.";
                this.numfail = "404";
                break;
              case 405:
                this.permission = "Method Not Allowed.";
                this.numfail = "405";
                break;
              case 406:
                this.permission = "Not Acceptable";
                this.numfail = "406";
                break;
              case 407:
                this.permission = "Proxy Authentication Required";
                this.numfail = "407";
                break;
              case 500:
                this.permission = "Server error.";
                this.numfail = "500";
                break;
              case 501:
                this.permission = "Not Implemented";
                this.numfail = "501";
                break;
              case 502:
                this.permission = "Bad Gateway";
                this.numfail = "502";
                break;
              case 503:
                this.permission = "Service Unavailable";
                this.numfail = "503";
                break;
              case 999:
                this.permission = "Out of service.";
                this.numfail = "999";
                break;
              default:
                this.nosuccess = "Bad Request.";
                this.numfail = "400";
            }
              } else {
                this.nosuccess = "Bad Request.";
                this.numfail = "400";
              }
              this.isLoading = false;
            });
        } catch (error) {
          // กรณีที่ข้อมูล JSON ไม่ถูกต้อง
          console.error("Invalid JSON format:", error);
          alert("กรุณากรอกข้อมูล JSON ที่ถูกต้อง");
          this.pop = false;
          this.isLoading = false;
        }
        // สำหรับเนื้อหาทดสอบ
        // console.log("Sending JSON data:", dataToSend);
      } else if (this.URLdata) {
        alert("กรุณากรอก URL ที่นี่");
        this.pop = false;
      } else {
        alert("กรุณากรอก Request ที่นี่");
        this.pop = false;
      }
    },
  },
};
</script>
