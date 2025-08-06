function FN$mlRRQQ729e9(FN$mlRRQQ729e9, bAlR_V729ea, TIB_63m729eb) {
  for (TIB_63m729eb = 0x0; TIB_63m729eb < bAlR_V729ea; TIB_63m729eb++)
    FN$mlRRQQ729e9.push(FN$mlRRQQ729e9.shift());
  return FN$mlRRQQ729e9;
}
const bAlR_V729ea = FN$mlRRQQ729e9(
  [
    "c",
    !0x1,
    "length",
    0x2,
    0x0,
    0x1,
    "toLowerCase",
    "floor",
    0xe10,
    0x3c,
    "0",
    0xa,
    ":",
    "toString",
    ".",
    "split",
    0x10,
    0xff,
    0x64,
    0x8,
    null,
  ],
  0x2
);
TIB_63m729eb(initFirebaseApp);
TIB_63m729eb(capitalize);
TIB_63m729eb(formatSnakeCaseString);
TIB_63m729eb(formatExperience);
TIB_63m729eb(formatAliveTime);
TIB_63m729eb(byteToHex);
TIB_63m729eb(findServerByName, bAlR_V729ea[0x1]);
function TIB_63m729eb(FN$mlRRQQ729e9, TIB_63m729eb = bAlR_V729ea[0x3]) {
  Object.defineProperty(FN$mlRRQQ729e9, bAlR_V729ea[0x0], {
    value: TIB_63m729eb,
    configurable: bAlR_V729ea[0x14],
  });
  return FN$mlRRQQ729e9;
}

import { firebaseConfig as pEy5fk729ec_Inst } from "../config/settings.js";
export function findServerByName(...FN$mlRRQQ729e9) {
  FN$mlRRQQ729e9[bAlR_V729ea[0x0]] = bAlR_V729ea[0x1];
  FN$mlRRQQ729e9[bAlR_V729ea[0x2]] =
    FN$mlRRQQ729e9[bAlR_V729ea[0x2]][bAlR_V729ea[0x4]]();
  for (const TIB_63m729eb in FN$mlRRQQ729e9[bAlR_V729ea[0x3]]) {
    
    const pEy5fk729ec_Inst = Object.entries(
      FN$mlRRQQ729e9[bAlR_V729ea[0x3]][TIB_63m729eb]
    ).find(([TIB_63m729eb]) => {
      
      return (
        TIB_63m729eb[bAlR_V729ea[0x4]]() === FN$mlRRQQ729e9[bAlR_V729ea[0x2]]
      );
    });
    if (pEy5fk729ec_Inst) {
      return pEy5fk729ec_Inst[bAlR_V729ea[0x3]];
    }
  }
  return bAlR_V729ea[0x12];
}
export function byteToHex(...FN$mlRRQQ729e9) {
  FN$mlRRQQ729e9[bAlR_V729ea[0x0]] = bAlR_V729ea[0x3];
  
  return FN$mlRRQQ729e9[bAlR_V729ea[0x2]]
    [bAlR_V729ea[0xb]](bAlR_V729ea[0xe])
    .padStart(bAlR_V729ea[0x1], bAlR_V729ea[0x8]);
}
export function formatAliveTime(...FN$mlRRQQ729e9) {
  FN$mlRRQQ729e9[bAlR_V729ea[0x0]] = bAlR_V729ea[0x3];
  if (FN$mlRRQQ729e9[bAlR_V729ea[0x2]] <= bAlR_V729ea[0x2]) {
    
    return "0:00";
  }
  const TIB_63m729eb = Math[bAlR_V729ea[0x5]](
      FN$mlRRQQ729e9[bAlR_V729ea[0x2]] / bAlR_V729ea[0x6]
    ),
    pEy5fk729ec_Inst = Math[bAlR_V729ea[0x5]](
      (FN$mlRRQQ729e9[bAlR_V729ea[0x2]] % bAlR_V729ea[0x6]) / bAlR_V729ea[0x7]
    ),
    findServerByName = FN$mlRRQQ729e9[bAlR_V729ea[0x2]] % bAlR_V729ea[0x7],
    byteToHex =
      TIB_63m729eb > bAlR_V729ea[0x2] && pEy5fk729ec_Inst < bAlR_V729ea[0x9]
        ? bAlR_V729ea[0x8] + pEy5fk729ec_Inst
        : pEy5fk729ec_Inst,
    formatAliveTime =
      findServerByName < bAlR_V729ea[0x9]
        ? bAlR_V729ea[0x8] + findServerByName
        : findServerByName;
  return TIB_63m729eb > bAlR_V729ea[0x2]
    ? "" +
        TIB_63m729eb +
        bAlR_V729ea[0xa] +
        byteToHex +
        bAlR_V729ea[0xa] +
        formatAliveTime
    : "" + byteToHex + bAlR_V729ea[0xa] + formatAliveTime;
}
export function formatExperience(...FN$mlRRQQ729e9) {
  FN$mlRRQQ729e9[bAlR_V729ea[0x0]] = bAlR_V729ea[0x3];
  
  const [TIB_63m729eb, pEy5fk729ec_Inst] = FN$mlRRQQ729e9[bAlR_V729ea[0x2]]
      [bAlR_V729ea[0xb]]()
      [bAlR_V729ea[0xd]](bAlR_V729ea[0xc]),
    findServerByName = TIB_63m729eb.replace(
      new RegExp("\\B(?=(\\d{3})+(?!\\d))", "g"),
      ","
    );
  return pEy5fk729ec_Inst
    ? "" + findServerByName + bAlR_V729ea[0xc] + pEy5fk729ec_Inst
    : findServerByName;
}
export function formatSnakeCaseString(...FN$mlRRQQ729e9) {
  FN$mlRRQQ729e9[bAlR_V729ea[0x0]] = bAlR_V729ea[0x3];
  if (!FN$mlRRQQ729e9[bAlR_V729ea[0x2]]) {
    
    return "";
  }
  return FN$mlRRQQ729e9[bAlR_V729ea[0x2]]
    [bAlR_V729ea[0xd]]("_")
    .map(
      TIB_63m729eb((...FN$mlRRQQ729e9) => {
        FN$mlRRQQ729e9[bAlR_V729ea[0x0]] = bAlR_V729ea[0x1];
        return FN$mlRRQQ729e9[bAlR_V729ea[0x3]] === bAlR_V729ea[0x2]
          ? capitalize(FN$mlRRQQ729e9[bAlR_V729ea[0x2]])
          : capitalize(FN$mlRRQQ729e9[bAlR_V729ea[0x2]]);
      }, bAlR_V729ea[0x1])
    )
    .join(" ");
}
export function capitalize(...FN$mlRRQQ729e9) {
  FN$mlRRQQ729e9[bAlR_V729ea[0x0]] = bAlR_V729ea[0x3];
  
  if (!FN$mlRRQQ729e9[bAlR_V729ea[0x2]]) {
    return "";
  }
  return (
    FN$mlRRQQ729e9[bAlR_V729ea[0x2]].charAt(bAlR_V729ea[0x2]).toUpperCase() +
    FN$mlRRQQ729e9[bAlR_V729ea[0x2]].slice(bAlR_V729ea[0x3])
  );
}
export function transformCellColor(color, FN$mlRRQQ729e9 = bAlR_V729ea[0x2]) {
  
  let TIB_63m729eb = (color >> bAlR_V729ea[0xe]) & bAlR_V729ea[0xf],
    pEy5fk729ec_Inst = (color >> bAlR_V729ea[0x11]) & bAlR_V729ea[0xf],
    findServerByName = color & bAlR_V729ea[0xf];
  if (FN$mlRRQQ729e9 > bAlR_V729ea[0x2]) {
    
    const byteToHex =
      bAlR_V729ea[0x10] - Math.min(FN$mlRRQQ729e9, bAlR_V729ea[0x10]);
    TIB_63m729eb = (TIB_63m729eb * byteToHex) / bAlR_V729ea[0x10];
    pEy5fk729ec_Inst = (pEy5fk729ec_Inst * byteToHex) / bAlR_V729ea[0x10];
    findServerByName = (findServerByName * byteToHex) / bAlR_V729ea[0x10];
  } else {
    
    const formatAliveTime = 0x66;
    TIB_63m729eb =
      TIB_63m729eb +
      (((bAlR_V729ea[0xf] - TIB_63m729eb) * formatAliveTime) >>
        bAlR_V729ea[0x11]);
    pEy5fk729ec_Inst =
      pEy5fk729ec_Inst +
      (((bAlR_V729ea[0xf] - pEy5fk729ec_Inst) * formatAliveTime) >>
        bAlR_V729ea[0x11]);
    findServerByName =
      findServerByName +
      (((bAlR_V729ea[0xf] - findServerByName) * formatAliveTime) >>
        bAlR_V729ea[0x11]);
  }
  return (
    (Math[bAlR_V729ea[0x5]](TIB_63m729eb) << bAlR_V729ea[0xe]) |
    (Math[bAlR_V729ea[0x5]](pEy5fk729ec_Inst) << bAlR_V729ea[0x11]) |
    Math[bAlR_V729ea[0x5]](findServerByName)
  );
}
export function initFirebaseApp(...FN$mlRRQQ729e9) {
  FN$mlRRQQ729e9[bAlR_V729ea[0x0]] = bAlR_V729ea[0x3];
  try {
    return firebase.app(FN$mlRRQQ729e9[bAlR_V729ea[0x2]]);
  } catch {
    
    try {
      return firebase.initializeApp(
        pEy5fk729ec_Inst,
        FN$mlRRQQ729e9[bAlR_V729ea[0x2]]
      );
    } catch (TIB_63m729eb) {
      console.error(
        "firebase init failed [" + FN$mlRRQQ729e9[bAlR_V729ea[0x2]] + "]",
        TIB_63m729eb
      );
      return bAlR_V729ea[0x12];
    }
  }
}
export function injectShadowStyle(selector, css, FN$mlRRQQ729e9 = "true") {
  const TIB_63m729eb = setInterval((...pEy5fk729ec_Inst) => {
    pEy5fk729ec_Inst[bAlR_V729ea[0x0]] = bAlR_V729ea[0x2];
    
    const findServerByName = document.querySelectorAll(selector);
    pEy5fk729ec_Inst[bAlR_V729ea[0x13]] = !0x0;
    for (const byteToHex of findServerByName) {
      const formatAliveTime = byteToHex.shadowRoot;
      if (!formatAliveTime) {
        
        pEy5fk729ec_Inst[bAlR_V729ea[0x13]] = bAlR_V729ea[0x14];
        continue;
      }
      if (
        !formatAliveTime.querySelector(
          'style[data-injected="' + FN$mlRRQQ729e9 + '"]'
        )
      ) {
        const formatExperience = document.createElement("style");
        formatExperience.dataset.injected = FN$mlRRQQ729e9;
        formatExperience.textContent = css;
        formatAliveTime.appendChild(formatExperience);
      }
    }
    if (pEy5fk729ec_Inst[bAlR_V729ea[0x13]]) {
      clearInterval(TIB_63m729eb);
    }
  }, 0x32);
}
export function initializeNord() {
  injectShadowStyle(
    "nord-input",
    ".n-input:focus{box-shadow:none!important}",
    "input-style"
  );
  injectShadowStyle(
    "nord-toggle",
    ".n-toggle:focus{box-shadow:none!important}",
    "toggle-style"
  );
  injectShadowStyle(
    "nord-select",
    ".n-select-container{width:90px}.n-select-container select{width:90px;background-color:var(--n-color-surface-raised);padding:5px;font-size:12px}nord-button{--_n-button-inline-size:90px}",
    "select-style"
  );
  injectShadowStyle(
    "nord-dropdown",
    ".n-dropdown-content{padding: 7px;border: 1px solid var(--n-color-border);border-radius: 5px;background: var(--n-color-background);margin-top: -5px;min-inline-size: 100px!important}::slotted(nord-dropdown-group), ::slotted(nord-dropdown-item){padding-inline: 0}",
    "dropdown-style"
  );
  injectShadowStyle(
    "nord-dropdown-item",
    ".n-dropdown-item{padding: 5px 10px!important}",
    "dropdown-item-style"
  );
  injectShadowStyle(
    "nord-notification",
    ".n-notification{border: solid 1px var(--n-color-border);background: var(--n-color-background)!important;padding: 16px !important}.n-dismiss{display:none !important}.n-notification-body{padding: 0 !important;}",
    "notification-style"
  );
  injectShadowStyle(
    "nord-popout",
    ".n-popout{    padding: 5px!important; background: var(--n-color-background)!important; border: 1px solid var(--n-color-border)!important}.n-popout > slot{display: flex;flex-direction: column;gap: 2px;}",
    "popout-style"
  );
  injectShadowStyle(
    ".context-action",
    '.n-button{min-block-size: 10px!important;padding: 5px 10px!important;text-align: start !important;--_n-button-background-color: transparent;}:host([variant="plain"]), :host([variant="plain"]) .n-button:hover{--_n-button-background-color: var(--n-color-button) !important;}',
    "context-button"
  );
  injectShadowStyle(
    "#autocomplete-popout",
    ".n-popout{padding: 0 !important;}",
    "autocomplete-popout"
  );
}

