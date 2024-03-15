
<template>
  <div style="">
    <div type="primary" class="box-r-scoll" >
      <div>
        <div class="font-prim"><span>Code Semless</span></div>
      </div>
   <!-- // -->
      <div class="col-12" id="tabSeven">
        <div
          ><b style="color: #19a17a !important" set-lan="text:4.6 UserPlaceBet"
            >4.6
            <span style="padding-left: 3px" id="Seamless_UserPlaceBet"
              >ListPlaceout</span
            ></b
          ></div
        >
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
      <!-- <div class="col-12 boxinput">
        <div class="false-input">
          <input type="text" placeholder="Username" />
        </div>
         <div class="false-input">
          <input type="text" placeholder="Password" />
        </div>
      </div> -->
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
           <button class="custom-btn btn-13" @click="get_semless">Send Code</button>
        </div>
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
          <div>
        <div>RESPONSE</div>
        <div class="divBox-content">
          <div v-if="success" class="dis-colum-center">
            <div>
              <span>
                <button class="buton-suscess"></button> Code 200&nbsp;&nbsp;
              </span>
            </div>
            <div style="display: flex; justify-content: center">
              <div>
                {{ success }}
              </div>
            </div>
          </div>
          <div v-else-if="nosuccess" class="dis-colum-center">
            <div>
              <span>
                <button class="buton-fail"></button> Code 400&nbsp;&nbsp;
              </span>
            </div>
            <div style="dis-center">
              <div>
                {{ nosuccess }}
              </div>
            </div>
          </div>
          <div v-else>
            Click Send Code to start a request and see the response here! Or
            choose an example: application/json
            <span> <button class="buton-suscess"></button> 200 </span>
          </div>
        </div>
      </div>
      <!-- // -->

  <!-- <div class="col-12 boxinput">
        <div class="false-input">
          <input type="text" placeholder="Username" />
        </div>
         <div class="false-input">
          <input type="text" placeholder="Password" />
        </div>
      </div> -->
            <div class="koh-faq-question form-group ex">
                <div class="Point">
                  <b
                    style="color: #19a17a !important"
                    set-lan="text:Example Request Body"
                    >Example Service Respond Code
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
                                    <pre>
        <code id="410B" style="border-radius: 0.375rem; height: 500px;
          overflow: scroll;" class="hljs json">{
          <span class="hljs-attr">"code"</span>: <span class="hljs-number">"0"</span>,
          <span class="hljs-attr">"dataenable"</span>: {
              <span class="hljs-attr">"baaclotto"</span>: {
                  <span class="hljs-attr">"enable"</span>: <span class="hljs-number">"true"</span>
              },
              <span class="hljs-attr">"gsblotto"</span>: {
                  <span class="hljs-attr">"enable"</span>: <span class="hljs-number">"true"</span>
              },
              <span class="hljs-attr">"hanoylotto"</span>: {
                  <span class="hljs-attr">"enable"</span>: <span class="hljs-number">"true"</span>
              },
              <span class="hljs-attr">"hanoylottospecial"</span>: {
                  <span class="hljs-attr">"enable"</span>: <span class="hljs-number">"true"</span>
              },
              <span class="hljs-attr">"hanoylottovip"</span>: {
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
              <span class="hljs-attr">"hanoylotto"</span>: {
                  <span class="hljs-attr">"hanoylotto"</span>: {
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
              <span class="hljs-attr">"hanoylottospecial"</span>: {
                  <span class="hljs-attr">"hanoylottospecial"</span>: {
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
                  <span class="hljs-attr">"hanoylottospecial"</span>: {
                      <span class="hljs-attr">"lottoset"</span>: <span class="hljs-number">null</span>
                  }
              },
              <span class="hljs-attr">"hanoylottovip"</span>: {
                  <span class="hljs-attr">"hanoylottovip"</span>: {
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
                  <span class="hljs-attr">"hanoylottovip_set"</span>: {
                      <span class="hljs-attr">"lottoset"</span>: <span class="hljs-number">null</span>
                  }
              },
              <span class="hljs-attr">"hanoylottovip"</span>: {
                  <span class="hljs-attr">"hanoylottovip"</span>: {
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
                  }
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
              <span class="hljs-attr">"hanoylotto"</span>: {
              <span class="hljs-attr">"bottom1"</span>: {
              <span class="hljs-attr">"discount"</span>: <span class="hljs-number">0</span>,
              <span class="hljs-attr">"payout"</span>: <span class="hljs-number">4.2
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
              <span class="hljs-attr">"hanoylotto_set"</span>: {
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
              <span class="hljs-attr">"hanoylottospecial"</span>: {
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
              <span class="hljs-attr">"hanoylottospecial_set"</span>: {
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
              <span class="hljs-attr">"hanoylottovip"</span>: {
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
              <span class="hljs-attr">"hanoylottovip_set"</span>: {
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
              <span class="hljs-attr">"payout"</span>: <span class="hljs-number">4.2</span>,</span>
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
                  <span class="hljs-attr">"discount"</span>: 10</span>,
                  <span class="hljs-attr">"payout"</span>: <span class="hljs-number">50000</span>
                  }
              },
              <span class="hljs-attr">"yeekeelotto"</span>: {
              <span class="hljs-attr">"bottom1"</span>: {
              <span class="hljs-attr">"discount"</span>: <span class="hljs-number">10</span>,
              <span class="hljs-attr">"payout"</span>: <span class="hljs-number">4.2
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
          <span class="hljs-attr">"levellist"</span>: []
                  },
                  <span class="hljs-attr">"bottom2"</span>: {
                  <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"levellist"</span>: []
                  },
                  <span class="hljs-attr">"row3"</span>: {
                  <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"levellist"</span>: []
                  },
                  <span class="hljs-attr">"top1"</span>: {
                  <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"levellist"</span>: []
                  },
                  <span class="hljs-attr">"top2"</span>: {
                  <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"levellist"</span>: []
                  },
                  <span class="hljs-attr">"top3"</span>: {
                  <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"levellist"</span>: []
                  }
              },
              <span class="hljs-attr">"gsblotto"</span>: {
                  <span class="hljs-attr">"bottom1"</span>: {
                  <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"levellist"</span>: []
                  },
                  <span class="hljs-attr">"bottom2"</span>: {
                  <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"levellist"</span>: []
                  },
                  <span class="hljs-attr">"row3"</span>: {
                  <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"levellist"</span>: []
                  },
                  <span class="hljs-attr">"top1"</span>: {
                  <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"levellist"</span>: []
                  },
                  <span class="hljs-attr">"top2"</span>: {
                  <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"levellist"</span>: []
                  },
                  <span class="hljs-attr">"top3"</span>: {
                  <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"levellist"</span>: []
                  }
              },
              <span class="hljs-attr">"hanoylotto"</span>: {
              <span class="hljs-attr">"hanoylotto"</span>: {
                      <span class="hljs-attr">"bottom1"</span>: {
                      <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                      <span class="hljs-attr">"levellist"</span>: []
                      },
                      <span class="hljs-attr">"bottom2"</span>: {
                      <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                      <span class="hljs-attr">"levellist"</span>: []
                      },
                      <span class="hljs-attr">"row3"</span>: {
                      <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                      <span class="hljs-attr">"levellist"</span>: []
                      },
                      <span class="hljs-attr">"top1"</span>: {
                      <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                      <span class="hljs-attr">"levellist"</span>: []
                      },
                      <span class="hljs-attr">"top2"</span>: {
                      <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                      <span class="hljs-attr">"levellist"</span>: []
                      },
                      <span class="hljs-attr">"top3"</span>: {
                      <span class="hljs-attr">"amount"</span>: <span class="hljs-number">5000</span>,
                      <span class="hljs-attr">"levellist"</span>: []
                      }
                  },
                  <span class="hljs-attr">"hanoylotto_set"</span>: {
                  <span class="hljs-attr">"lottoset"</span>: {
                  <span class="hljs-attr">"amount"</span>: <span class="hljs-number">1000</span>,
                  <span class="hljs-attr">"levellist"</span>: []
                      }
                  }
              },
              <span class="hljs-attr">"hanoylottospecial"</span>: {
              <span class="hljs-attr">"hanoylottospecial"</span>: {
              <span class="hljs-attr">"bottom1"</span>: {
              <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
              <span class="hljs-attr">"levellist"</span>: []
                      },
                      <span class="hljs-attr">"bottom2"</span>: {
                      <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                      <span class="hljs-attr">"levellist"</span>: []
                      },
                      <span class="hljs-attr">"row3"</span>: {
                      <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                      <span class="hljs-attr">"levellist"</span>: []
                      },
                      <span class="hljs-attr">"top1"</span>: {
                      <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                      <span class="hljs-attr">"levellist"</span>: []
                      },
                      <span class="hljs-attr">"top2"</span>: {
                      <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                      <span class="hljs-attr">"levellist"</span>: []
                      },
                      <span class="hljs-attr">"top3"</span>: {
                      <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                      <span class="hljs-attr">"levellist"</span>: []
                      }
                  },
                  <span class="hljs-attr">"hanoylottospecial_set"</span>: {
                  <span class="hljs-attr">"lottoset"</span>: {
                  <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"levellist"</span>: []
                      }
                  }
              },
              <span class="hljs-attr">"hanoylottovip"</span>: {
              <span class="hljs-attr">"hanoylottovip"</span>: {
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
                  <span class="hljs-attr">"hanoylottovip_set"</span>: {
                  <span class="hljs-attr">"lottoset"</span>: {
                  <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"levellist"</span>: []
                      }
                  }
              },
              <span class="hljs-attr">"laoslotto"</span>: {
              <span class="hljs-attr">"laoslotto"</span>: {
              <span class="hljs-attr">"bottom1"</span>: {
              <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
              <span class="hljs-attr">"levellist"</span>: []
                      },
                      <span class="hljs-attr">"bottom2"</span>: {
                      <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                      <span class="hljs-attr">"levellist"</span>: []
                      },
                      <span class="hljs-attr">"row2"</span>: {
                      <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                      <span class="hljs-attr">"levellist"</span>: []
                      },
                      <span class="hljs-attr">"row3"</span>: {
                      <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                      <span class="hljs-attr">"levellist"</span>: []
                      },
                      <span class="hljs-attr">"row4"</span>: {
                      <span class="hljs-attr">"amount"</span>: <span class="hljs-number">1,
                      <span class="hljs-attr">"levellist"</span>: []
                      },
                      <span class="hljs-attr">"top1"</span>: {
                      <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                      <span class="hljs-attr">"levellist"</span>: []
                      },
                      <span class="hljs-attr">"top2"</span>: {
                      <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                      <span class="hljs-attr">"levellist"</span>: []
                      },
                      <span class="hljs-attr">"top3"</span>: {
                      <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                      <span class="hljs-attr">"levellist"</span>: []
                      },
                      <span class="hljs-attr">"top4"</span>: {
                      <span class="hljs-attr">"amount"</span>: <span class="hljs-number">200</span>,
                      <span class="hljs-attr">"levellist"</span>: []
                      }
                  },
                  <span class="hljs-attr">"laoslotto_set"</span>: {
                  <span class="hljs-attr">"bottom1"</span>: {
                  <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"levellist"</span>: []
                      },
                      <span class="hljs-attr">"bottom2"</span>: {
                      <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                      <span class="hljs-attr">"levellist"</span>: []
                      },
                      <span class="hljs-attr">"row2"</span>: {
                      <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                      <span class="hljs-attr">"levellist"</span>: []
                      },
                      <span class="hljs-attr">"row3"</span>: {
                      <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                      <span class="hljs-attr">"levellist"</span>: []
                      },
                      <span class="hljs-attr">"row4"</span>: {
                      <span class="hljs-attr">"amount"</span>: <span class="hljs-number">1</span>,
                      <span class="hljs-attr">"levellist"</span>: []
                      },
                      <span class="hljs-attr">"top1"</span>: {
                      <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                      <span class="hljs-attr">"levellist"</span>: []
                      },
                      <span class="hljs-attr">"top2"</span>: {
                      <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                      <span class="hljs-attr">"levellist"</span>: []
                      },
                      <span class="hljs-attr">"top3"</span>: {
                      <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                      <span class="hljs-attr">"levellist"</span>: []
                      },
                      <span class="hljs-attr">"top4"</span>: {
                      <span class="hljs-attr">"amount"</span>: <span class="hljs-number">200</span>,
                      <span class="hljs-attr">"levellist"</span>: []
                      }
                  }
              },
              <span class="hljs-attr">"malaylotto"</span>: {
              <span class="hljs-attr">"malaylotto"</span>: {
              <span class="hljs-attr">"bottom1"</span>: {
              <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
              <span class="hljs-attr">"levellist"</span>: []
                      },
                      <span class="hljs-attr">"bottom2"</span>: {
                      <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                      <span class="hljs-attr">"levellist"</span>: []
                      },
                      <span class="hljs-attr">"row3"</span>: {
                      <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                      <span class="hljs-attr">"levellist"</span>: []
                      },
                      <span class="hljs-attr">"top1"</span>: {
                      <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                      <span class="hljs-attr">"levellist"</span>: []
                      },
                      <span class="hljs-attr">"top2"</span>: {
                      <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                      <span class="hljs-attr">"levellist"</span>: []
                      },
                      <span class="hljs-attr">"top3"</span>: {
                      <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                      <span class="hljs-attr">"levellist"</span>: []
                      }
                  },
                  <span class="hljs-attr">"malaylotto_set"</span>: {
                  <span class="hljs-attr">"lottoset"</span>: {
                  <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"levellist"</span>: []
                      }
                  }
              },
              <span class="hljs-attr">"pingponglotto"</span>: {
              <span class="hljs-attr">"bottom1"</span>: {
              <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
              <span class="hljs-attr">"levellist"</span>: []
                  },
                  <span class="hljs-attr">"bottom2"</span>: {
                  <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"levellist"</span>: []
                  },
                  <span class="hljs-attr">"row2"</span>: {
                  <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"levellist"</span>: []
                  },
                  <span class="hljs-attr">"row3"</span>: {
                  <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"levellist"</span>: []
                  },
                  <span class="hljs-attr">"row4"</span>: {
                  <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"levellist"</span>: []
                  },
                  <span class="hljs-attr">"top1"</span>: {
                  <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"levellist"</span>: []
                  },
                  <span class="hljs-attr">"top2"</span>: {
                  <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"levellist"</span>: []
                  },
                  <span class="hljs-attr">"top3"</span>: {
                  <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"levellist"</span>: []
                  },
                  <span class="hljs-attr">"top4"</span>: {
                  <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"levellist"</span>: []
                  },
                  <span class="hljs-attr">"top5"</span>: {
                  <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"levellist"</span>: []
                  },
                  <span class="hljs-attr">"top6"</span>: {
                  <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"levellist"</span>: []
                  }
              },
              <span class="hljs-attr">"stock"</span>: {
              <span class="hljs-attr">"bottom1"</span>: {
              <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
              <span class="hljs-attr">"levellist"</span>: []
                  },
                  <span class="hljs-attr">"bottom2"</span>: {
                  <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"levellist"</span>: []
                  },
                  <span class="hljs-attr">"row3"</span>: {
                  <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"levellist"</span>: []
                  },
                  <span class="hljs-attr">"top1"</span>: {
                  <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"levellist"</span>: []
                  },
                  <span class="hljs-attr">"top2"</span>: {
                  <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"levellist"</span>: []
                  },
                  <span class="hljs-attr">"top3"</span>: {
                  <span class="hljs-attr">"amount"</span><span class="hljs-number">0</span>,
                  <span class="hljs-attr">"levellist"</span>: []
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
                  <span class="hljs-attr">"amount"</span>: <span class="hljs-number">1000</span>,</span>
                  <span class="hljs-attr">"levellist"</span>: [
                  <span class="hljs-attr">70</span>,</span>
                  <span class="hljs-attr">50</span>
                      ]
                  },
                  <span class="hljs-attr">"top3"</span>: {
                  <span class="hljs-attr">"amount"</span>: <span class="hljs-number">1000</span>,</span>
                  <span class="hljs-attr">"levellist"</span>: [
                  <span class="hljs-attr">550</span>,</span>
                  <span class="hljs-attr">450</span>
                      ]
                  },
                  <span class="hljs-attr">"top4"</span>: {
                  <span class="hljs-attr">"amount"</span>: <span class="hljs-number">1000</span>,</span>
                  <span class="hljs-attr">"levellist"</span>: [
                  <span class="hljs-attr">3500</span>,</span>
                  <span class="hljs-attr">3000</span>
                      ]
                  },
                  <span class="hljs-attr">"top5"</span>: {
                  <span class="hljs-attr">"amount"</span>:<span class="hljs-number"> 1000</span>,</span>
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
      }
          }
      }</code></pre>
               </div>

       <!-- <div>
        <div>RESPONSE</div>
        <div class="divBox-content">
          Click Send Code to start a request and see the response here! Or
          choose an example: application/json 200
        </div>
      </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BoxSem46",
  data() {
    return {
      success: "",
      nosuccess: "",
    };
  },
  beforeCreate() {},
  mounted() {
    // this.get_semless();
  },
  watch: {},
  methods: {
    get_semless() {
      alert("Send code clicked!");
      var senduser = {
        agentUsername: "buildexcompany",
        agentApiKey:
          "504947f655f822e2f8f414bbc1a34ba763c7570ef638135f30b5696c899f806901e163f59f3a86d0c8cd",
      };
      const URL = "https://test-api.askmelotto.com/apiRoute/api/ListPlaceout";
      this.$axios
        .$post(URL, senduser)
        .then((response) => {
          console.log(response);
          if (response) {
            this.success = "Successful operation."; // กำหนดค่า success ให้เป็น "SUCCESS"
          } else {
            this.nosuccess = "Bad Request."; // กำหนดค่า nosuccess ให้เป็น "Fail"
          }
        })
        .catch((error) => {
          console.log(error);
          if (error) {
            this.nosuccess = "Bad Request."; // กำหนดค่า success ให้เป็น "SUCCESS"
          } else {
            this.nosuccess = "Bad Request."; // กำหนดค่า nosuccess ให้เป็น "Fail"
          }
          //  console.log(nosuccess);
        });
    },
  },
};
</script>
