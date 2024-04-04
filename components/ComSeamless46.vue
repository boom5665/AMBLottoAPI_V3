<!-- Please remove this file from your project -->
<template>
  <div>
    <div class="box-Sem" style="display: flex">
      <div class="box-all">
      <div class="col-12" id="tab47">
        <div
          ><h1><b style="color: #19a17a !important"
            >4.6
            <span style="padding-left: 3px" id="Seamless_ListPlaceout"
              >ListPlaceout</span
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
              https://test-api.askmelotto.com/apiRoute/api/ListPlaceout
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
                  <button onclick="copyContent(document.getElementById('transfer_tabfive-four_req').innerHTML)" class="btn btn-info waves-effect waves-light">Copy to clipboard</button>
                </div>
              </div>
              <div class="koh-faq-answer col-12">
                <pre>
                                        <div class="copy-clipboard" style="position: absolute;width: 20px;top: 30px;right: 0;cursor:pointer">
                                            <svg style="position: absolute;width: 20px;left: -25px;" onclick="copyContent(document.getElementById('seamless_tabfour-six-four_seven_req').innerHTML)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Copy to Clipboard</title><path d="M18 6v-6h-18v18h6v6h18v-18h-6zm-12 10h-4v-14h14v4h-10v10zm16 6h-14v-14h14v14z"></path></svg>
                                        </div>
                                        <code id="410A" style="border-radius: 0.375rem;" class="hljs json">{
    <span class="hljs-attr">"agentUsername"</span>: <span class="hljs-string">"buildexcompany"</span>,
    <span class="hljs-attr">"agentApiKey"</span>: <span class="hljs-string">"504947f655f822e2f8f414bbc1a34ba763c7570ef638135f30b5696c899f806901e163f59f3a86d0c8cd"</span>
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
                <tr>
                  <td class="bRight">dataenable</td>
                  <td class="bRight">Object</td>
                  <td>Object response dataenable.</td>
                </tr>
                <tr>
                  <td class="bRight">datahotplaceout</td>
                  <td class="bRight">Object</td>
                  <td>Object response datahotplaceout.</td>
                </tr>
                <tr>
                  <td class="bRight">datapayout</td>
                  <td class="bRight">Object</td>
                  <td>Object response datapayout.</td>
                </tr>
                <tr>
                  <td class="bRight">dataplaceout</td>
                  <td class="bRight">Object</td>
                  <td>Object response dataplaceout.</td>
                </tr>
                <tr>
                  <td class="bRight">baaclotto(lotto type)</td>
                  <td class="bRight">Object</td>
                  <td>Object response lottotype.</td>
                </tr>
                <tr>
                  <td class="bRight">bottom1(subtype)</td>
                  <td class="bRight">Object</td>
                  <td>Object response subtype.</td>
                </tr>
                <tr>
                  <td class="bRight">enable</td>
                  <td class="bRight">String</td>
                  <td>Enable true and false.</td>
                </tr>
                <tr>
                  <td class="bRight">amount</td>
                  <td class="bRight">float</td>
                  <td>Amount of hot placeout.</td>
                </tr>
                <tr>
                  <td class="bRight">discount</td>
                  <td class="bRight">float</td>
                  <td>Discount of payout</td>
                </tr>
                <tr>
                  <td class="bRight">payout</td>
                  <td class="bRight">Number</td>
                  <td>Payout rate normal.</td>
                </tr>
                <tr>
                  <td class="bRight">levellist</td>
                  <td class="bRight">Number</td>
                  <td>levellist of payout</td>
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
                  <td>success</td>
                </tr>
                <tr>
                  <td class="bRight">1054</td>
                  <td>Invalid ApiKey or UserAgent</td>
                </tr>
                <tr>
                  <td class="bRight">1054</td>
                  <td>Error Request body is not an object</td>
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
                                            <svg style="position: absolute;width: 20px;left: -25px;" onclick="copyContent(document.getElementById('seamless_tabfour-six-four_five_ser').innerHTML)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Copy to Clipboard</title><path d="M18 6v-6h-18v18h6v6h18v-18h-6zm-12 10h-4v-14h14v4h-10v10zm16 6h-14v-14h14v14z"></path></svg>
                                        </div>
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
            </div>
          </div>
        </div> -->
      </div>


      </div>
          <div class="box-all-content">
        <div style="position: sticky; top: 0px">
          <!-- <div > -->
          <BoxSem46 />
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "ComSeamless46",
};
</script>
