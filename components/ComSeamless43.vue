<!-- Please remove this file from your project -->
<template>
  <div>
    <div class="box-intro" style="display: flex">
      <div class="">
        <div class="col-12" id="tabThree">
          <div>
            <h1>
              <b style="color: #19a17a !important" set-lan="text:4.3 Setting"
                >4.3
                <span style="padding-left: 3px" id="Seamless_Setting"
                  >Setting</span
                ></b
              >
            </h1>
          </div>
        </div>

        <div class="btn-toolbar mb-3" role="toolbar">
          <div class="form-group col-12">
            <label set-lan="html:0. *">
              {{ $t("setting3") }}
            </label>
            <label set-lan="html:1.	Login">1.{{ $t("login") }}</label>
            <div class="col-12">
              <img
                src="~/assets/image/Login001.png"
                style="width: 30%; margin-left: 10%"
              />
            </div>

            <label set-lan="html:2.	Click"> 2.{{ $t("setting4") }}</label>
            <div class="col-12">
              <img
                src="~/assets/image/Account002.png"
                style="width: 80%; margin-left: 10%"
              />
            </div>

            <label id="tabZero" set-lan="html:4. Define"
              >3.{{ $t("setting31") }}</label
            >
            <div class="col-12">
              <label set-lan="html:4.1 You can">
                3.1 {{ $t("setting32") }}</label
              >
            </div>
            <div class="col-12">
              <label set-lan="html:4.2 You can">
                3.2 {{ $t("setting33") }}</label
              >
            </div>
            <div class="col-12">
              <img
                src="~/assets/image/3.png"
                style="width: 80%; margin-left: 10%"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ComSeamless43",
};
</script>
