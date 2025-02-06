<!-- Please remove this file from your project -->
<template>
  <div class="col-12">
    <div class="box-Sem">
      <div class="box-Sev">
        <h1>
          <b style="color: #19a17a !important">7.
            <span style="padding-left: 3px" id="ser_Service_Respond_Code">Currencies</span></b>
        </h1>

        <div class="col-12" id="tabOne" style="margin-bottom: 10px">
          <div>
            <b style="color: #19a17a !important">7.1
              <span style="padding-left: 3px" id="ser_Member_Authen">Currencies</span></b>
              <b ><div>*สกุลเงิน IDR, KHR, LAK, VND จะถูกแปลงเป็นเครดิตในอัตราส่วน 1:1000</div></b>
          </div>
        </div>
        <div class="btn-toolbar mb-3" role="toolbar">
          <div class="form-group col-12">
            <div class="table-wrapper marTop">
              <table class="table table-borderless table-striped">
                <thead class="rgba-green-slight">
                  <tr>
                    <th style="width: 10%" set-lan="html:Parameter" class="thcolor bRight txtCenter">
                      Key
                    </th>
                    <th style="width: 10%" set-lan="html:Description" class="thcolor bRight txtCenter">
                      Description (EN)
                    </th>
                    <th style="width: 10%" set-lan="html:Description" class="thcolor bRight txtCenter">
                      Description (TH)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="bRight">THB</td>
                    <td class="bRight">Thai Baht</td>
                    <td >บาทไทย</td>
                  </tr>
                  <tr>
                    <td class="bRight">USD</td>
                    <td class="bRight">US Dollars</td>
                    <td>ดอลลาร์สหรัฐ</td>
                  </tr>
                  <tr>
                    <td class="bRight">CNY</td>
                    <td class="bRight">Chinese Yuan Renminbi</td>
                    <td>หยวนเหรินหมินปี้จีน</td>
                  </tr>
                  <tr>
                    <td class="bRight">IDR</td>
                    <td class="bRight">Indonesian Rupiahs (1:1000)</td>
                    <td>รูเปียห์อินโดนีเซีย (1:1000)</td>
                  </tr>
                  <tr>
                    <td class="bRight">VND</td>
                    <td class="bRight">Vietnamese Dongs (1:1000)</td>
                    <td>ดองเวียดนาม (1:1000)
                    </td>
                  </tr>
                  <tr>
                    <td class="bRight">LAK</td>
                    <td class="bRight">Lao Kips (1:1000)</td>
                    <td>กีบลาว (1:1000)</td>
                  </tr>
                  <tr>
                    <td class="bRight">MYR</td>
                    <td class="bRight">Malaysian Ringgits</td>
                    <td>ริงกิตมาเลเซีย</td>
                  </tr>
                  <tr>
                    <td class="bRight">MMK</td>
                    <td class="bRight">Burmese Kyats</td>
                    <td>จ๊าตพม่า</td>
                  </tr>
                  <tr>
                    <td  class="bRight">KHR</td>
                    <td  class="bRight">Cambodian Riels (1:1000)</td>
                    <td>เรียลกัมพูชา (1:1000)</td>
                  </tr>
                  <tr>
                    <td  class="bRight">PHP</td>
                    <td  class="bRight">Philippine Pesos </td>
                    <td>เปโซฟิลิปปินส์</td>
                  </tr>
                  <tr>
                    <td  class="bRight">EUR</td>
                    <td  class="bRight">Euros</td>
                    <td>ยูโร</td>
                  </tr>
                  <tr>
                    <td  class="bRight">TWD</td>
                    <td  class="bRight">Taiwan New Dollars</td>
                    <td>ดอลลาร์ไต้หวันใหม่
                    </td>
                  </tr>
                  <tr>
                    <td  class="bRight">INR</td>
                    <td  class="bRight">Indian Rupees</td>
                    <td>รูปีอินเดีย</td>
                  </tr>
                  <tr>
                    <td  class="bRight">GBP</td>
                    <td  class="bRight">British Pounds</td>
                    <td>ปอนด์อังกฤษ</td>
                  </tr>
                  <tr>
                    <td  class="bRight">KRW</td>
                    <td  class="bRight">South Korean Won </td>
                    <td>วอนเกาหลีใต้</td>
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
