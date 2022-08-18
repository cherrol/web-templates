"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  setup(__props) {
    common_vendor.ref("Hello");
    const data = common_vendor.reactive({ title: "Hello" });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(common_vendor.unref(data).title)
      };
    };
  }
});
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/home/cherrol/dev/web-templates/templates/uniapp-vue3/src/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
