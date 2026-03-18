<!-- Please remove this file from your project -->
<template>
  <div class="box-intro" style="display: flex">
    <div class="">
      <div class="col-12" id="tab3">
        <div>
          <h1>
            <b style="color: #19a17a !important" set-lan="text:5.3 Setting"
              >5.3
              <span style="padding-left: 3px" id="tran_Setting5"
                >Setting</span
              ></b
            >
          </h1>
        </div>
      </div>

      <div class="btn-toolbar mb-3" role="toolbar">
        <div class="form-group col-12">
          <label set-lan="html:0. *"
            >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {{ $t("setting3") }}
          </label>
          <div>
            <label set-lan="html:1.	Login"
              >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1.{{
                $t("login")
              }}</label
            >
          </div>

          <div class="col-12">
            <img
              src="~/assets/image/Login001.png"
              style="width: 30%; margin-left: 10%"
            />
          </div>
          <div class="pb-5"></div>
          <label set-lan="html:2.	Click"
            >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            2. {{ $t("setting4") }}</label
          >
          <div class="col-12">
            <img
              src="~/assets/image/2.png"
              style="width: 80%; margin-left: 10%"
            />
          </div>
          <div class="pb-5"></div>
          <label id="tabZero" set-lan="html:4. Define"
            >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3. {{ $t("setting31") }}</label
          >
          <div class="col-12">
            <label set-lan="html:4.1 You can"
              >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              3.1  {{ $t("tran513") }}</label
            >
          </div>
          <div class="col-12">
            <label set-lan="html:4.2 You can"
              >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              3.2  {{ $t("tran514") }}</label
            >
          </div>
          <div class="col-12">
            <img
              src="~/assets/image/4.png"
              style="width: 80%; margin-left: 10%"
            />
          </div>
        </div>
      </div>
      <div class="pb-5"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ComTransfer",
};
</script>
