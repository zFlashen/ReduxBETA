import {
  AxisLockThreshold,
  minimapSmoothFactor,
  drawMinimapInterval,
  baseCellSize,
  combinedCameraDistanceThreshold,
  combinedZoomFocusStrength,
  combinedInterpSpeed,
  messageColors,
} from "./config/constants.js";
import {
  MESSAGE_TYPES,
  CellVisibility,
  MassDisplayType,
  SKIN_LOAD_STATUS,
  PlayerState,
} from "./config/enums.js";
import {
  defaultKeyMappings,
  defaultOptions,
  defaultSubPanelSettings,
  fontConfigs,
} from "./config/settings.js";
import {
  readAscii,
  readUtf16,
  writeAscii,
  writeUtf16,
} from "./utils/binary.js";
import {
  byteToHex,
  capitalize,
  findServerByName,
  formatAliveTime,
  formatExperience,
  formatSnakeCaseString,
  initFirebaseApp,
  initializeNord,
  injectShadowStyle,
  transformCellColor,
} from "./utils/helpers.js";
import { Logger } from "./utils/logger.js";
import { defaultTheme } from "./utils/theme.js";
import { SERVER_PORT } from "./config.js";
import Pto5ea937_Inst from "./vendor/js/tinycolor.min.js";
var Mao5huZea938_run;
var CoKB;
var VuerW6rI_ea93a_neq;
var DEFAULT$HB0T_ea93b_Status;
var B5O8N2Mea93c_ret;
var Date$F4EY;
var async_gvZqk_Dc_ea93e_div;
var If$sEyzqKbhea93f_Exec;
var Str_NmyJ4kX;
var VoidGBYH;
var ObjectueAUtq;
var in_hpdqea943_div;
var tRyea944_Id;
var NOgc$oea945_num;
var React_RtHu4Gea946;
var for_JCpm;
var for_zWYea948_lte;
var El_SqvbXGiea949_Tmp;
var Map_brr9MVea94a_Idx;
var hVJea94b_Data;
var AtgnhF;
var qRcea94d_init;
var FalseJax;
var xhr_tj9avEM;
var Promise_28_SVO_ea950_fn;
var Kb5zM5ea951_neq;
var UX3IB;
var LodashmDBDNdea953_mul;
var e$Iqgea954_Proc;
var iU2ea955_Id;
var ijs;
var Lodashif3ebPI;
var while_dFOcH$ea958_ret;
var qq8ea959_idx;
var Cd8Hiea95a_Init;
var FalsebDqti5ea95b_eq;
var Map$pA_ea95c_Obj;
var WeakMapxkJW_ea95d_bool;
var Callback$wD5ea95e_Ctx;
var svqea95f_bool;
var yZBjeytPea960_Cb;
var Evt_zsUK;
var DateDg_57Yb;
var VARJb6ea963_Ref;
var asyncq0oTeVQT;
var NghauAMea965_VAL;
var PeBgnB15ea966_and;
var sA76M0oea967_gte;
var IMPORTjQwS8jD7;
var For_lVMfr;
var Cb_W4cW2;
var Catch_wCYNjd$ea96b_exec;
var ReactFCGxs$ea96c_Tmp;
var CTXgGGYfuSi_ea96d_Opt;
var AlIjpjxYea96e_Id;
var RegExp_yFv;
var pQQAhea970_Tmp;
var U0QG_Qf;
var dNwtiUlea972_Handler;
var Math_zxd$ea973_Obj;
var Map$XDb6n5y_ea974_State;
var WeakMap$jAciSKVZea975_or;
var xmea976_xor;
var kLdlPea977_lte;
var JcVea978_neq;
var yield_L2zEL16;
var Promise_KDZM8Y_ea97a_Cfg;
var HandlerbspL;
var El_jtxnG4q;
var CLASS_3Ft;
var instanceof_NYxWUQj_ea97e_Err;
var SetGjfJUkLJea97f_Buf;
var LGeF78Jea980_type;
var Switch$DDqRA_ea981_mul;
var Catch_tLBy;
var bXFgW$Qq;
var letwtfOyM80ea984_num;
var WeakMaphlyBuhea985_num;
var New_cKB3q5G_ea986_cb;
var React$vkea987_Idx;
var let_ExdFq$65;
var FN_okkea989_Handler;
var AwaitNM$mbea98a_mul;
var Symbol_I0$w5g$ea98b_Opt;
var nh6XVqea98c_Cb;
var IMPORT_f936f76C_ea98d_lte;
var djUgiSea98e_Fn;
var WeakMap$J22VUWjRea98f_ex;
var Get$NeypNg;
var AhC4E4RR;
var Array_eUa8SZ3Z$ea992_Buf;
var async_D8l9NKg;
var PMulimorea994_str;
function HelpervL9ea995_opt(
  AxisLockThreshold,
  minimapSmoothFactor,
  drawMinimapInterval
) {
  for (
    drawMinimapInterval = 0;
    drawMinimapInterval < minimapSmoothFactor;
    drawMinimapInterval++
  ) {
    AxisLockThreshold.push(AxisLockThreshold.shift());
  }
  return AxisLockThreshold;
}
// Deobfuscator: Removed original data array 'c7$6'
Object$kDcGWUY(y2jX$eaa13_Idx);
Object$kDcGWUY(RETURN_zuR);
Object$kDcGWUY(J8EVQ);
Object$kDcGWUY(CHueaa10_Proc, 2);
Object$kDcGWUY(HXgYeaa0d_TYPE);
Object$kDcGWUY(XHR_uLPuP9eaa0c_Ex);
Object$kDcGWUY(TruejJBgB31q);
Object$kDcGWUY(fGuNueaa0a_err);
Object$kDcGWUY(bmBtnjkeaa09_or);
Object$kDcGWUY(HelperBFZkQ, 2);
Object$kDcGWUY(yield_a4eFrbK9_eaa07_Ret);
Object$kDcGWUY(This_GCC, 2);
Object$kDcGWUY(rCRuBeaa05_res, 2);
Object$kDcGWUY(React_a3eebzUUeaa04, 2);
Object$kDcGWUY(If_yEAw_eaa03_Res);
Object$kDcGWUY(Promise_OUmY4gHt_ea9fe_idx, 3);
Object$kDcGWUY(hjScxea9fd_res);
Object$kDcGWUY(zPY7Wy_, 6);
Object$kDcGWUY(JRZXea9f8_obj);
Object$kDcGWUY(GnQwWt, 4);
Object$kDcGWUY(IND8m_ea9f5_add, 4);
Object$kDcGWUY(MapODojwDKKea9eb_Key);
Object$kDcGWUY(hdnn_8ea9ea_Idx);
Object$kDcGWUY(HelperUhSO_ea9e8_Run);
Object$kDcGWUY(Await_IJIz2M);
Object$kDcGWUY(KEGPXBW, 2);
Object$kDcGWUY(Qbnjfea9e3_lte);
Object$kDcGWUY(in_Lv7rr7N);
Object$kDcGWUY(CtxBk7q_);
Object$kDcGWUY(Void$jyv1Bm3);
Object$kDcGWUY(Catch$HaPx87ea9df_ret);
Object$kDcGWUY(TruepwDZ3M$ea9dc_Res);
Object$kDcGWUY(Map_f43ea9db_ret);
Object$kDcGWUY(EkFea9da_mul);
Object$kDcGWUY(Gu0B6FmO, 2);
Object$kDcGWUY(dNwVcfi$ea9d8_type);
Object$kDcGWUY(BOOLqoaO);
Object$kDcGWUY(do_QEm141);
Object$kDcGWUY(NaN_semFS17);
Object$kDcGWUY(BigInt_ZShVUjt$ea9d0_err, 2);
Object$kDcGWUY(BOOLxEFAPea9cf_or);
Object$kDcGWUY(Evt_gCqea9ce_Val);
Object$kDcGWUY(letl8FDUOw_ea9cd_Ref);
Object$kDcGWUY(LodashxQu4);
Object$kDcGWUY(Void_ojp$ea9ca_neq, 7);
Object$kDcGWUY(DOC_FDXvy4GG);
Object$kDcGWUY(DEFAULT_B6Cea9c5_Ret);
Object$kDcGWUY(XHReYHH$ea9c2_bool);
Object$kDcGWUY(FNmsM);
Object$kDcGWUY(DateN4UN, 2);
Object$kDcGWUY(Str_MMr1pN24$ea9b9_not, 2);
function Object$kDcGWUY(AxisLockThreshold, minimapSmoothFactor = 1) {
  Object.defineProperty(AxisLockThreshold, "length", {
    value: minimapSmoothFactor,
    configurable: false,
  });
  return AxisLockThreshold;
}
const Await_RRv = {
  ...defaultOptions,
  sSoloTrickMode: "MANUAL",
  cameraMode: "cameraDefault",
  followMouseMode: "followMouseAlways",
};
Mao5huZea938_run = JSON.parse(JSON.stringify(Await_RRv));
CoKB = JSON.parse(JSON.stringify(defaultKeyMappings));
VuerW6rI_ea93a_neq = defaultSubPanelSettings;
DEFAULT$HB0T_ea93b_Status = defaultTheme;
B5O8N2Mea93c_ret = {
  massType: 0,
  levelNames: 3,
  levelSkins: 3,
};
const KR7DmFbea999_bool = new firebase.auth.GoogleAuthProvider();
Date$F4EY = undefined;
async_gvZqk_Dc_ea93e_div = undefined;
If$sEyzqKbhea93f_Exec = undefined;
Str_NmyJ4kX = undefined;
VoidGBYH = undefined;
ObjectueAUtq = false;
in_hpdqea943_div = false;
tRyea944_Id = false;
NOgc$oea945_num = false;
React_RtHu4Gea946 = false;
for_JCpm = false;
for_zWYea948_lte = false;
El_SqvbXGiea949_Tmp = true;
Map_brr9MVea94a_Idx = [];
hVJea94b_Data = false;
AtgnhF = null;
qRcea94d_init = null;
FalseJax = {};
xhr_tj9avEM = {};
Promise_28_SVO_ea950_fn = {};
Kb5zM5ea951_neq = false;
UX3IB = -1;
LodashmDBDNdea953_mul = -1;
e$Iqgea954_Proc = "-1";
iU2ea955_Id = [];
ijs = false;
Lodashif3ebPI = [];
while_dFOcH$ea958_ret = -1;
qq8ea959_idx = "cameraDefault";
Cd8Hiea95a_Init = "followMouseAlways";
FalsebDqti5ea95b_eq = -1;
Map$pA_ea95c_Obj = -1;
WeakMapxkJW_ea95d_bool = -1;
Callback$wD5ea95e_Ctx = -1;
svqea95f_bool = -1;
yZBjeytPea960_Cb = -1;
Evt_zsUK = 0;
DateDg_57Yb = -1;
VARJb6ea963_Ref = -1;
asyncq0oTeVQT = {};
NghauAMea965_VAL = undefined;
PeBgnB15ea966_and = null;
sA76M0oea967_gte = 0;
IMPORTjQwS8jD7 = null;
For_lVMfr = null;
Cb_W4cW2 = null;
Catch_wCYNjd$ea96b_exec = 0;
ReactFCGxs$ea96c_Tmp = -Infinity;
CTXgGGYfuSi_ea96d_Opt = -Infinity;
let GetEre34Q = 0;
let RZL = 0;
let Stringify_J7krEf_Q_ea99c_Inst;
const El_adcGQ944ea99d_Cb = new Map([
  [1, "LMB"],
  [2, "MMB"],
  [3, "RMB"],
  [4, "Mouse 4"],
  [5, "Mouse 5"],
  [8, "Backspace"],
  [9, "Tab"],
  [13, "Enter"],
  [16, "Shift"],
  [17, "Ctrl"],
  [18, "Alt"],
  [19, "Pause"],
  [20, "Caps Lock"],
  [27, "Escape"],
  [32, "Space"],
  [33, "Page Up"],
  [34, "Page Down"],
  [35, "End"],
  [36, "Home"],
  [37, "←"],
  [38, "↑"],
  [39, "→"],
  [40, "↓"],
  [45, "Insert"],
  [46, "Delete"],
  [48, "0"],
  [49, "1"],
  [50, "2"],
  [51, "3"],
  [52, "4"],
  [53, "5"],
  [54, "6"],
  [55, "7"],
  [56, "8"],
  [59, "9"],
  [65, "A"],
  [66, "B"],
  [67, "C"],
  [68, "D"],
  [69, "E"],
  [70, "F"],
  [71, "G"],
  [72, "H"],
  [73, "I"],
  [74, "J"],
  [75, "K"],
  [76, "L"],
  [77, "M"],
  [78, "N"],
  [79, "O"],
  [80, "P"],
  [81, "Q"],
  [82, "R"],
  [83, "S"],
  [84, "T"],
  [85, "U"],
  [86, "V"],
  [87, "W"],
  [88, "X"],
  [89, "Y"],
  [90, "Z"],
  [91, "Meta"],
  [93, "Menu"],
  [96, "Numpad 0"],
  [97, "Numpad 1"],
  [98, "Numpad 2"],
  [99, "Numpad 3"],
  [100, "Numpad 4"],
  [101, "Numpad 5"],
  [102, "Numpad 6"],
  [103, "Numpad 7"],
  [104, "Numpad 8"],
  [105, "Numpad 9"],
  [106, "*"],
  [107, "+"],
  [109, "-"],
  [110, "."],
  [111, "/"],
  [112, "F1"],
  [113, "F2"],
  [114, "F3"],
  [115, "F4"],
  [116, "F5"],
  [117, "F6"],
  [118, "F7"],
  [119, "F8"],
  [120, "F9"],
  [121, "F10"],
  [122, "F11"],
  [123, "F12"],
  [144, "Num Lock"],
  [145, "Scroll Lock"],
  [186, ";"],
  [187, "="],
  [188, ","],
  [189, "-"],
  [190, "."],
  [191, "/"],
  [192, "`"],
  [219, "["],
  [220, "\\"],
  [221, "]"],
  [222, "'"],
]);
AlIjpjxYea96e_Id = {};
RegExp_yFv = {};
pQQAhea970_Tmp = [];
U0QG_Qf = undefined;
dNwtiUlea972_Handler = undefined;
Math_zxd$ea973_Obj = new Map();
Map$XDb6n5y_ea974_State = new Map();
WeakMap$jAciSKVZea975_or = {};
xmea976_xor = undefined;
kLdlPea977_lte = undefined;
JcVea978_neq = undefined;
yield_L2zEL16 = undefined;
Promise_KDZM8Y_ea97a_Cfg = undefined;
HandlerbspL = null;
let ParsecKKDq_ea99e_gt = null;
let P7Tea99f_Cfg = 0;
El_jtxnG4q = false;
const vZpklf = 850;
window.isGameLoopFrozenByPing = false;
window.DATA_FREEZE_THRESHOLD_BYTES = 102400;
window.isGameLoopFrozenByData = false;
CLASS_3Ft = false;
let yield_j0ltb_ea9a1_eq = 0;
let do_Hz8uZ47Tea9a2_Id = false;
let xhr_UZ5IPT_ea9a3_run = false;
instanceof_NYxWUQj_ea97e_Err = false;
SetGjfJUkLJea97f_Buf = false;
LGeF78Jea980_type = new PIXI.Container();
Switch$DDqRA_ea981_mul = new PIXI.Container();
Catch_tLBy = new PIXI.Container();
bXFgW$Qq = new PIXI.Container();
letwtfOyM80ea984_num = new PIXI.Container();
WeakMaphlyBuhea985_num = new PIXI.Container(PIXI.Texture.EMPTY);
New_cKB3q5G_ea986_cb = new PIXI.Container();
React$vkea987_Idx = new PIXI.Container();
let_ExdFq$65 = new PIXI.Container();
FN_okkea989_Handler = new PIXI.Sprite(PIXI.Texture.EMPTY);
AwaitNM$mbea98a_mul = new PIXI.Graphics();
const Evt_oIHD_ea9a4_idx = new PIXI.Graphics();
class XHR_v4dBj2ayea9a5_Inst {
  constructor(AxisLockThreshold = false) {
    this.socket = null;
    this.currentServer = null;
    this.currentServerName = null;
    this.spectate = false;
    this.spectatingId = 0;
    this.name = "";
    this.enabled = AxisLockThreshold;
    this.playerId = 0;
    this.calculatedMouseY = 0;
    this.calculatedMouseX = 0;
    this.players = new Map();
    this.foodObjects = new Map();
    this.myCells = new Map();
    this.centerX = 0;
    this.centerY = 0;
    this.centerX_ = 0;
    this.centerY_ = 0;
    this.prevCenterX = 0;
    this.prevCenterY = 0;
    this.centerSteps = 0;
    this.scale = 0.5;
    this.scale_ = 0.5;
    this.scale_base = 0.5;
    this.mouseZoom = 1;
    this.offsetX = 0;
    this.offsetY = 0;
    this.lastSwapTime = 0;
    this.mouseRawX = 0;
    this.mouseRawY = 0;
    this.mouseX = 0;
    this.mouseY = 0;
    this.mouseFrozen = false;
    this.isLineSplitting = false;
    this.lineSplitAnchorX = 0;
    this.lineSplitAnchorY = 0;
    this.lineSplitAxis = null;
    this.party = [];
    this.partyIds = {};
    this.subPanelOverride = false;
    this.serverData = {
      hasSentSubPanel: false,
      border: {},
      maxCells: 16,
    };
    this.score = 0;
    this.customGameMap = null;
    this.accountListeners = {};
    this.lastUpdatePacketTime = 0;
    this.wasAliveLastTick = false;
    this.isPrimary = AxisLockThreshold;
    if (this.isPrimary) {
      
      this.leaderboardState = {
        entries: [],
        animationTime: 200,
        lastUpdateTime: 0,
        animationFrameId: null,
      };
    } else {
      
      this.isConnecting = false;
      this.reconnectIntervalId = null;
    }
    setInterval(() => {
      
      return this.sendPing();
    }, 1000);
  }
  sendSplit(...AxisLockThreshold) {
    AxisLockThreshold.length = 1;
    return new Promise((minimapSmoothFactor) => {
      const drawMinimapInterval = VoidGBYH.sendKey(17);
      for (
        let baseCellSize = 0;
        baseCellSize < AxisLockThreshold[0];
        baseCellSize++
      ) {
        this.sendPacket(drawMinimapInterval);
      }
      setTimeout(() => {
        minimapSmoothFactor();
      }, parseFloat($("#currentPing span").text().replace("ms", "")) + 15);
    });
  }
  getMass() {
    
    let AxisLockThreshold = 0;
    for (const minimapSmoothFactor of this.myCells.values()) {
      AxisLockThreshold += minimapSmoothFactor.getRealMass();
    }
    return AxisLockThreshold;
  }
  spec(AxisLockThreshold = 0) {
    if (NghauAMea965_VAL == null) {
      this.selfMsg("No server selected!");
      return;
    }
    this.spectate = true;
    this.spectatingId = AxisLockThreshold;
    if (this.isConnected() && this.currentServer == NghauAMea965_VAL.ip) {
      this.sendPacket(VoidGBYH.sendSpectate(this.spectatingId));
      if (this.isPrimary) {
        BigIntLsuea9cc_ex(false);
      }
    } else {
      
      this.connect(NghauAMea965_VAL.ip);
    }
    Ctx_aylk4EOu();
    jQueryLzNd.close("mainModal");
    if (this.isPrimary) {
      Proto$L05X_ea9c6_sub();
    }
  }
  play() {
    
    if (!this.isPrimary && this.isConnecting) {
      
      Logger.warn("Player 2 is already connecting, ignoring play request.");
      return;
    }
    if (NghauAMea965_VAL == null) {
      
      this.selfMsg("No server selected!");
      return;
    }
    this.name = this.isPrimary ? $("#name-box").val() : $("#name-box2").val();
    this.spectate = false;
    this.currentServerName = NghauAMea965_VAL.name;
    if (this.isPrimary) {
      $("#currentServer nord-icon").hide();
      $("#currentServer #joinedServer").show();
      $("#currentServer").show();
      $("#currentServer").attr("variant", "success");
      $("#currentServerName").text(this.currentServerName);
      if (this.isConnected() && this.currentServer == NghauAMea965_VAL.ip) {
        this.sendPacket(VoidGBYH.setName(this.name));
        BigIntLsuea9cc_ex(false);
      } else {
        
        this.connect(NghauAMea965_VAL.ip);
      }
    } else if (
      this.isConnected() &&
      this.currentServer == NghauAMea965_VAL.ip
    ) {
      this.sendPacket(VoidGBYH.setName(this.name));
    } else {
      
      if (If$sEyzqKbhea93f_Exec && If$sEyzqKbhea93f_Exec.isConnected()) {
        
        If$sEyzqKbhea93f_Exec.name = $("#name-box").val();
      }
      this.isConnecting = true;
      this.attemptPlayer2Connection();
      if (If$sEyzqKbhea93f_Exec && If$sEyzqKbhea93f_Exec.isConnected()) {
        
        If$sEyzqKbhea93f_Exec.sendPacket(
          VoidGBYH.sendPartyAction(0, If$sEyzqKbhea93f_Exec.playerId)
        );
      }
    }
    Ctx_aylk4EOu();
    jQueryLzNd.close("mainModal");
    if (this.isPrimary) {
      
      Proto$L05X_ea9c6_sub();
    }
  }
  connect(AxisLockThreshold) {
    
    GetEre34Q = 0;
    $("#currentTotalXP").hide();
    $("#currentTotalXP").text("");
    if (this.socket != null) {
      this.socket.nextUrl = AxisLockThreshold;
      this.disconnect();
      return;
    }
    const minimapSmoothFactor = this.currentServerName;
    if (this.isPrimary) {
      BigIntLsuea9cc_ex(true, "Connecting to " + this.currentServerName);
      $("#currentServer nord-icon").hide();
      $("#currentServer #joiningServer").show();
      $("#currentServer").show();
      $("#currentServer").attr("variant", "neutral");
      $("#currentServerName").text(this.currentServerName);
    }
    this.currentServer = AxisLockThreshold;
    this.currentServerName = NghauAMea965_VAL.name;
    const drawMinimapInterval = NghauAMea965_VAL.ssl == 1 ? "wss://" : "ws://";
    this.socket = new WebSocket(drawMinimapInterval + AxisLockThreshold);
    this.socket.binaryType = "arraybuffer";
    let baseCellSize = this;
    this.socket.onopen = this.onConnect.bind(this);
    this.socket.onmessage = this.onMessage.bind(this);
    this.socket.onclose = function (AxisLockThreshold) {
      
      BigIntLsuea9cc_ex(false);
      const drawMinimapInterval = AxisLockThreshold.reason
        ? "Reason: " + AxisLockThreshold.reason
        : "";
      if (baseCellSize.isPrimary) {
        
        baseCellSize.reset();
        baseCellSize.selfMsg(
          "Disconnected from the server. " + drawMinimapInterval
        );
        $("#currentServer nord-icon").hide();
        $("#currentServer #disconnectServer").show();
        $("#currentServer").show();
        $("#currentServer").attr("variant", "danger");
        $("#currentServerName").text(
          "Disconnected from " + minimapSmoothFactor
        );
      } else {
        
        const combinedCameraDistanceThreshold =
          faCUfKea9fb_add() === baseCellSize;
        const combinedZoomFocusStrength = baseCellSize.isConnecting;
        baseCellSize.reset();
        baseCellSize.selfMsg(
          "Disconnected from the server. " + drawMinimapInterval
        );
        if (
          combinedCameraDistanceThreshold &&
          If$sEyzqKbhea93f_Exec &&
          If$sEyzqKbhea93f_Exec.isConnected()
        ) {
          Logger.info("Player 2 disconnected, swapping player to Player 1.");
          If$sEyzqKbhea93f_Exec.enabled = true;
          Str_NmyJ4kX.enabled = false;
        }
      }
      if (this.nextUrl != null) {
        if (!baseCellSize.isPrimary) {
          
          baseCellSize.isConnecting = true;
        }
        baseCellSize.connect(this.nextUrl);
      } else if (!baseCellSize.isPrimary && baseCellSize.isConnecting) {
        
        Logger.warn("Player 2 connection failed. Retrying in 5 seconds.");
        baseCellSize.reconnectIntervalId = setTimeout(() => {
          
          baseCellSize.attemptPlayer2Connection();
        }, 5000);
      }
    };
    this.socket.onerror = function () {};
  }
  async onConnect() {
    Map_brr9MVea94a_Idx = [];
    if (this.isPrimary) {
      BigIntLsuea9cc_ex(false);
      if (!this.spectate) {
        BigIntLsuea9cc_ex(true, "Joining Game");
        this.play();
      } else {
        BigIntLsuea9cc_ex(true, "Entering spectating mode");
        this.spec();
      }
      Proto$L05X_ea9c6_sub();
    } else {
      
      this.isConnecting = false;
      this.stopReconnectAttempts();
      if (!this.spectate) {
        
        this.play();
        setTimeout(() => {
          
          if (this.isConnected() && this.myCells.size === 0 && !this.spectate) {
            Logger.info("Player 2 spawn check failed, retrying...");
            this.play();
          }
        }, 1500);
      } else {
        
        this.spec();
      }
    }
    this.sendPacket(VoidGBYH.handshakeStart());
    this.sendPing();
    this.sendOptions();
    const AxisLockThreshold = this.isPrimary ? MYstEuQeaa14_err : FLsTXl;
    if (AxisLockThreshold.auth().currentUser !== null) {
      
      AxisLockThreshold.auth()
        .currentUser.getIdToken(true)
        .then((AxisLockThreshold) => {
          
          this.sendPacket(VoidGBYH.sendAuthToken(AxisLockThreshold));
        })
        .catch(
          Object$kDcGWUY((...AxisLockThreshold) => {
            AxisLockThreshold.length = 1;
            return HelperBFZkQ(AxisLockThreshold[0], true);
          })
        );
    } else if (!this.spectate) {
      this.sendPacket(VoidGBYH.setName(this.name));
    } else {
      this.sendPacket(VoidGBYH.sendSpectate());
    }
  }
  disconnect() {
    
    GetEre34Q = 0;
    $("#currentTotalXP").hide();
    $("#currentTotalXP").text("");
    if (this.socket) {
      
      this.socket.close();
    }
    if (this.isPrimary) {
      
      this.serverData.border.enabled = false;
      if (Str_NmyJ4kX.socket) {
        Str_NmyJ4kX.socket.close();
      }
      jQueryLzNd.open("mainModal");
      Proto$L05X_ea9c6_sub();
    } else {
      
      this.isConnecting = false;
      this.stopReconnectAttempts();
    }
  }
  clearBuckets() {
    
    for (const AxisLockThreshold of this.players.values()) {
      
      jQuery_hn$0_2t_ea9b2_sub.unregister(AxisLockThreshold);
    }
    this.players.clear();
    for (const minimapSmoothFactor of this.foodObjects.values()) {
      jQuery_hn$0_2t_ea9b2_sub.unregister(minimapSmoothFactor);
    }
    this.foodObjects.clear();
  }
  reset() {
    
    GetEre34Q = 0;
    $("#currentTotalXP").hide();
    $("#currentTotalXP").text("");
    if (!this.isPrimary) {
      
      this.stopReconnectAttempts();
    }
    this.clearBuckets();
    this.myCells.clear();
    this.spectatingId = 0;
    if (this.isPrimary) {
      
      Map$XDb6n5y_ea974_State.clear();
    }
    const AxisLockThreshold = this.isPrimary
      ? "seenByClient1"
      : "seenByClient2";
    for (const minimapSmoothFactor of zLCuf8c.players.values()) {
      
      minimapSmoothFactor[AxisLockThreshold] = false;
    }
    this.playerId = 0;
    this.score = 0;
    this.customGameMap = null;
    this.currentServer = null;
    VJjDr.stopLinesplit(this);
    this.clearParty();
    VJjDr.handlePlayerDeathOrDisconnect();
    this.serverData.hasSentSubPanel = false;
    this.serverData.resetType = 0;
    this.serverData.autosplits = false;
    this.serverData.border.enabled = false;
    if (this.isPrimary) {
      g5Mea9c8_TYPE();
    } else if (!If$sEyzqKbhea93f_Exec || !If$sEyzqKbhea93f_Exec.isConnected()) {
      
      g5Mea9c8_TYPE();
    }
    if (this.socket != null) {
      
      this.socket = null;
    }
    if (this.subPanelOverride) {
      
      this.subPanelOverride = false;
      as_dX7WJBQ_ea9c4_mul();
    }
  }
  stopReconnectAttempts() {
    if (!this.isPrimary && this.reconnectIntervalId) {
      
      clearTimeout(this.reconnectIntervalId);
      this.reconnectIntervalId = null;
    }
  }
  attemptPlayer2Connection() {
    
    if (this.isPrimary || !this.isConnecting || this.isConnected()) {
      
      this.stopReconnectAttempts();
      this.isConnecting = false;
      return;
    }
    Logger.info(
      "Player 2 attempting to connect to " + this.currentServerName + "..."
    );
    this.connect(NghauAMea965_VAL.ip);
  }
  handleDeath() {
    if (for_zWYea948_lte) {
      const AxisLockThreshold = faCUfKea9fb_add();
      const minimapSmoothFactor = this;
      if (minimapSmoothFactor !== AxisLockThreshold && AxisLockThreshold) {
        
        minimapSmoothFactor.selfMsg(
          "Multi died. Spectating active player and preparing to respawn..."
        );
        minimapSmoothFactor.sendPacket(
          VoidGBYH.sendSpectate(AxisLockThreshold.playerId)
        );
        setTimeout(() => {
          if (minimapSmoothFactor && minimapSmoothFactor.isConnected()) {
            minimapSmoothFactor.play();
          }
        }, 1000);
        for_zWYea948_lte = false;
        return;
      }
    }
    VJjDr.stopLinesplit(this);
    const drawMinimapInterval = faCUfKea9fb_add() === this;
    const baseCellSize =
      this === If$sEyzqKbhea93f_Exec ? Str_NmyJ4kX : If$sEyzqKbhea93f_Exec;
    let combinedCameraDistanceThreshold;
    if (drawMinimapInterval) {
      if (React_RtHu4Gea946) {
        
        if (!jQueryLzNd.isOpen("mainModal")) {
          this.spec();
        }
        React_RtHu4Gea946 = false;
        return;
      }
      combinedCameraDistanceThreshold = Mao5huZea938_run.cAutoRespawn;
      if (combinedCameraDistanceThreshold) {
        
        if (!jQueryLzNd.isOpen("mainModal")) {
          
          this.play();
        }
      } else if (baseCellSize && baseCellSize.myCells.size > 0) {
        ForKgjVzrQea9fc_Status();
      }
    } else {
      combinedCameraDistanceThreshold = El_SqvbXGiea949_Tmp;
      if (combinedCameraDistanceThreshold) {
        
        this.isConnecting = false;
        if (!jQueryLzNd.isOpen("mainModal")) {
          this.play();
        }
      }
    }
  }
  handleKey(AxisLockThreshold) {
    if (AxisLockThreshold === 38) {
      this.mouseZoom *= 1.05;
      this.mouseZoom =
        this.mouseZoom > 5 ? 5 : this.mouseZoom < 0.1 ? 0.1 : this.mouseZoom;
      return;
    }
    if (AxisLockThreshold === 40) {
      this.mouseZoom *= 0.95;
      this.mouseZoom =
        this.mouseZoom > 5 ? 5 : this.mouseZoom < 0.1 ? 0.1 : this.mouseZoom;
      return;
    }
    if (AxisLockThreshold === CoKB.kEjectMass) {
      
      ObjectueAUtq = true;
      return;
    }
    if (AxisLockThreshold === CoKB.kSplit) {
      
      if (VJjDr.canSplitNow(1)) {
        
        return;
      }
      this.sendSplit(1);
      return;
    }
    if (AxisLockThreshold === CoKB.kToggleSpec) {
      
      this.sendPacket(VoidGBYH.sendKey(18));
      return;
    }
    if (AxisLockThreshold === CoKB.k4xSplit) {
      if (VJjDr.canSplitNow(2)) {
        return;
      }
      this.sendSplit(2);
      return;
    }
    if (AxisLockThreshold === CoKB.k8xSplit) {
      if (VJjDr.canSplitNow(3)) {
        
        return;
      }
      this.sendSplit(3);
      return;
    }
    if (AxisLockThreshold === CoKB.k16xSplit) {
      if (VJjDr.canSplitNow(4)) {
        return;
      }
      this.sendSplit(4);
      return;
    }
    if (AxisLockThreshold === CoKB.k32xSplit) {
      if (VJjDr.canSplitNow(5)) {
        return;
      }
      this.sendSplit(5);
      return;
    }
    if (AxisLockThreshold === CoKB.k64xSplit) {
      if (VJjDr.canSplitNow(6)) {
        return;
      }
      this.sendSplit(6);
      return;
    }
    if (AxisLockThreshold === CoKB.k128xSplit) {
      if (VJjDr.canSplitNow(7)) {
        return;
      }
      this.sendSplit(7);
      return;
    }
    if (AxisLockThreshold === CoKB.k256xSplit) {
      if (VJjDr.canSplitNow(8)) {
        return;
      }
      this.sendSplit(8);
      return;
    }
    if (AxisLockThreshold === CoKB.kMultiSplit) {
      zd8T_jfeea9b6_and.deactivate();
      If_yEAw_eaa03_Res(1);
      return;
    }
    if (AxisLockThreshold === CoKB.kMultiDouble) {
      zd8T_jfeea9b6_and.deactivate();
      If_yEAw_eaa03_Res(2);
      return;
    }
    if (AxisLockThreshold === CoKB.kMultiMax) {
      zd8T_jfeea9b6_and.deactivate();
      If_yEAw_eaa03_Res(8);
      return;
    }
    if (AxisLockThreshold === CoKB.kMultiEject) {
      var minimapSmoothFactor;
      var drawMinimapInterval;
      zd8T_jfeea9b6_and.deactivate();
      minimapSmoothFactor = faCUfKea9fb_add();
      drawMinimapInterval =
        minimapSmoothFactor === If$sEyzqKbhea93f_Exec
          ? Str_NmyJ4kX
          : If$sEyzqKbhea93f_Exec;
      if (drawMinimapInterval) {
        CLASS_3Ft = true;
        drawMinimapInterval.sendPacket(VoidGBYH.sendEjectMass(true));
      }
      return;
    }
    if (AxisLockThreshold === CoKB.kFreezeMouse) {
      this.mouseFrozen = !this.mouseFrozen;
      return;
    }
    if (AxisLockThreshold === CoKB.kContextMenu) {
      Catch$HaPx87ea9df_ret();
    }
  }
  isConnected() {
    return this.socket != null && this.socket.readyState === 1;
  }
  sendPacket(AxisLockThreshold) {
    if (this.isConnected()) {
      this.socket.send(AxisLockThreshold);
    }
  }
  sendPing() {
    if (this.isConnected()) {
      if (this.isPrimary) {
        Catch_wCYNjd$ea96b_exec = performance.now();
      }
      this.sendPacket(VoidGBYH.sendPing());
    }
  }
  sendOptions() {
    if (this.isConnected()) {
      this.sendPacket(VoidGBYH.sendOptions());
    }
  }
  selfMsg(AxisLockThreshold) {
    const minimapSmoothFactor = AxisLockThreshold.trim();
    if (
      minimapSmoothFactor.match(
        new RegExp("Connecting to chat server...?", "")
      ) ||
      (!this.isPrimary &&
        this.isConnecting &&
        minimapSmoothFactor.match(
          new RegExp("Disconnected from the server.?", "")
        ))
    ) {
      return;
    }
    const drawMinimapInterval = minimapSmoothFactor.match(
      new RegExp("You have earned (\\d+) experience!?", "")
    );
    if (drawMinimapInterval) {
      const baseCellSize = parseInt(drawMinimapInterval[1], 10);
      GetEre34Q += baseCellSize;
      $("#currentTotalXP").show();
      $("#currentTotalXP").text("+" + GetEre34Q + " XP");
      return;
    }
    const combinedCameraDistanceThreshold = minimapSmoothFactor.match(
      new RegExp("Connected to chat server!?", "")
    );
    if (combinedCameraDistanceThreshold) {
      $("#chat-input, #emotePanelBtn").removeAttr("disabled");
      $("#chat-input").attr("placeholder", "Type message...");
      return;
    }
    const combinedZoomFocusStrength = minimapSmoothFactor.match(
      new RegExp("Server resetting in (\\d+) seconds?", "")
    );
    if (combinedZoomFocusStrength) {
      const combinedInterpSpeed = parseInt(combinedZoomFocusStrength[1], 10);
      console.log("Server will reset in " + combinedInterpSpeed + " seconds");
      return;
    }
    $("#systemChat").append(
      "<div>" +
        (this.isPrimary
          ? minimapSmoothFactor
          : "Player 2: " + minimapSmoothFactor) +
        "</div>"
    );
    const messageColors = $("#systemChat div");
    if (messageColors.length > 8) {
      messageColors.slice(0, messageColors.length - 8).remove();
    }
  }
  selfMsgWithJoinCode(...AxisLockThreshold) {
    AxisLockThreshold.length = 2;
    $("#systemChat").append(
      "<div>" +
        AxisLockThreshold[0] +
        '<span class="systemJoinCode">' +
        AxisLockThreshold[1] +
        "</span></div>"
    );
    const minimapSmoothFactor = $("#systemChat div");
    if (minimapSmoothFactor.length > 8) {
      minimapSmoothFactor.slice(0, minimapSmoothFactor.length - 8).remove();
    }
  }
  clearParty() {
    this.party = [];
    this.partyIds = {};
    this.partyLeader = -1;
    this.partyIndex = -1;
    if (this.isPrimary) {
      WeakMap$J22VUWjRea98f_ex.css("display", "none");
      $("#leaveParty").css("display", "none");
      if (this.partyCode != null || For_lVMfr != null) {
        this.partyCode = For_lVMfr = null;
        IMPORTjQwS8jD7 = null;
      }
    }
  }
  isPartyLeader() {
    return this.partyLeader == this.playerId;
  }
  getServerMaxCells() {
    return this.serverData.maxCells;
  }
  onMessage(AxisLockThreshold) {
    const minimapSmoothFactor = AxisLockThreshold.data.byteLength;
    if (
      minimapSmoothFactor > window.DATA_FREEZE_THRESHOLD_BYTES &&
      Str_NmyJ4kX &&
      Str_NmyJ4kX.isConnected()
    ) {
      if (!window.isGameLoopFrozenByData) {
        window.isGameLoopFrozenByData = true;
        BigIntLsuea9cc_ex(true, "Processing large update...");
        Logger.warn(
          "Large data packet received (" +
            (minimapSmoothFactor / 1024).toFixed(1) +
            " KB). Freezing game loop to process."
        );
      }
    }
    const drawMinimapInterval = performance.now();
    const baseCellSize = new DataView(AxisLockThreshold.data);
    const combinedCameraDistanceThreshold = baseCellSize.getUint8(0);
    baseCellSize.offset = 1;
    if (combinedCameraDistanceThreshold === MESSAGE_TYPES.UPDATE) {
      this.lastUpdatePacketTime = drawMinimapInterval;
    }
    switch (combinedCameraDistanceThreshold) {
      case MESSAGE_TYPES.UPDATE:
        this.handleUpdate(baseCellSize, drawMinimapInterval);
        break;
      case MESSAGE_TYPES.POSITION:
        this.handlePosition(baseCellSize);
        break;
      case MESSAGE_TYPES.SHOW_SUB_PANEL:
        this.showSubPanel(baseCellSize);
        break;
      case MESSAGE_TYPES.UPDATE_SUB_PANEL:
        this.updateSubPanel(baseCellSize);
        break;
      case MESSAGE_TYPES.INVITE:
        this.handleInvite(baseCellSize);
        break;
      case MESSAGE_TYPES.PARTY_INFO:
        this.handlePartyInfo(baseCellSize);
        break;
      case MESSAGE_TYPES.PARTY_JOIN_CODE:
        this.handlePartyJoinCode(baseCellSize);
        break;
      case MESSAGE_TYPES.MAP_DATA:
        this.handleMapData(baseCellSize);
        break;
      case MESSAGE_TYPES.CLEAR_NODES:
        this.clearBuckets();
        break;
      case MESSAGE_TYPES.UPDATE_BORDER:
        this.handleUpdateBorder(baseCellSize);
        break;
      case MESSAGE_TYPES.RESET_TIME:
        this.handleResetTime(baseCellSize);
        break;
      case MESSAGE_TYPES.SPECTATORS:
        this.handleSpectators(baseCellSize);
        break;
      case MESSAGE_TYPES.SYSTEM_MSG:
        this.selfMsg(readUtf16(baseCellSize));
        break;
      case MESSAGE_TYPES.WHISPER:
        this.handleWhisper(baseCellSize);
        break;
      case MESSAGE_TYPES.ADD_BUFF:
        baseCellSize.offset += 8;
        break;
      case MESSAGE_TYPES.AUTHENTICATED:
        this.handleAuthenticated(baseCellSize);
        break;
      case MESSAGE_TYPES.PARTY_DATA:
        if (this.isPrimary) {
          this.handlePartyData(baseCellSize);
        }
        break;
      case MESSAGE_TYPES.LEADERBOARD:
        if (this.isPrimary) {
          this.handleLeaderboard(baseCellSize);
        }
        break;
      case MESSAGE_TYPES.PING:
        if (this.isPrimary) {
          this.handlePing();
        }
        break;
      case MESSAGE_TYPES.CHAT:
        if (this.isPrimary) {
          this.handleChat(baseCellSize);
        }
        break;
      case MESSAGE_TYPES.PROFILE:
        if (this.isPrimary) {
          this.handleProfile(baseCellSize);
        }
        break;
    }
    if (window.isGameLoopFrozenByData) {
      window.isGameLoopFrozenByData = false;
      if (!window.isGameLoopFrozenByPing) {
        BigIntLsuea9cc_ex(false);
      }
      Logger.info(
        "Finished processing large data packet. Unfreezing game loop."
      );
    }
  }
  handleUpdate(AxisLockThreshold, minimapSmoothFactor) {
    let drawMinimapInterval = AxisLockThreshold.getUint16(
      AxisLockThreshold.offset,
      true
    );
    AxisLockThreshold.offset += 2;
    while (drawMinimapInterval > 0) {
      const baseCellSize = AxisLockThreshold.getUint16(
        AxisLockThreshold.offset,
        true
      );
      AxisLockThreshold.offset += 2;
      zLCuf8c.remove(baseCellSize, this);
      drawMinimapInterval--;
    }
    let combinedCameraDistanceThreshold = AxisLockThreshold.getUint16(
      AxisLockThreshold.offset,
      true
    );
    AxisLockThreshold.offset += 2;
    while (combinedCameraDistanceThreshold > 0) {
      const combinedZoomFocusStrength = AxisLockThreshold.getUint16(
        AxisLockThreshold.offset,
        true
      );
      AxisLockThreshold.offset += 2;
      const combinedInterpSpeed = jQuery_hn$0_2t_ea9b2_sub.get(
        combinedZoomFocusStrength
      );
      if (combinedInterpSpeed) {
        combinedInterpSpeed.onDelete();
        if (combinedInterpSpeed.type === 6) {
          this.foodObjects.delete(combinedZoomFocusStrength);
        } else {
          this.players.delete(combinedZoomFocusStrength);
        }
        if (combinedInterpSpeed.playerId === this.playerId) {
          this.myCells.delete(combinedZoomFocusStrength);
          if (this.myCells.size === 0) {
            this.handleDeath();
          }
        }
      }
      combinedCameraDistanceThreshold--;
    }
    while (true) {
      const baseCellSize = AxisLockThreshold.getUint16(
        AxisLockThreshold.offset,
        true
      );
      AxisLockThreshold.offset += 2;
      if (baseCellSize === 0) {
        break;
      }
      let messageColors = true;
      let MESSAGE_TYPES = zLCuf8c.getPlayer(baseCellSize);
      if (!MESSAGE_TYPES) {
        MESSAGE_TYPES = new do_JMwG(baseCellSize);
        messageColors = false;
      }
      const CellVisibility =
        (AxisLockThreshold.getUint8(AxisLockThreshold.offset++) << 16) +
        (AxisLockThreshold.getUint8(AxisLockThreshold.offset++) << 8) +
        AxisLockThreshold.getUint8(AxisLockThreshold.offset++);
      MESSAGE_TYPES.name = readUtf16(AxisLockThreshold);
      MESSAGE_TYPES.cellColor = transformCellColor(
        CellVisibility,
        MESSAGE_TYPES.name.includes("🤖") ? 70 : 0
      );
      MESSAGE_TYPES.setSkin(readAscii(AxisLockThreshold));
      MESSAGE_TYPES.setFlags(
        AxisLockThreshold.getUint8(AxisLockThreshold.offset++)
      );
      if ((MESSAGE_TYPES.flags & 2) === 2) {
        MESSAGE_TYPES.nameColor =
          "#" +
          byteToHex(AxisLockThreshold.getUint8(AxisLockThreshold.offset++)) +
          byteToHex(AxisLockThreshold.getUint8(AxisLockThreshold.offset++)) +
          byteToHex(AxisLockThreshold.getUint8(AxisLockThreshold.offset++));
        MESSAGE_TYPES.parseEffect(
          AxisLockThreshold.getUint8(AxisLockThreshold.offset++)
        );
        MESSAGE_TYPES.nameFont = AxisLockThreshold.getUint8(
          AxisLockThreshold.offset++
        );
      }
      if (!messageColors) {
        zLCuf8c.add(MESSAGE_TYPES);
      } else {
        zLCuf8c.markUpdated(MESSAGE_TYPES);
      }
      if (this.isPrimary) {
        MESSAGE_TYPES.seenByClient1 = true;
      } else {
        MESSAGE_TYPES.seenByClient2 = true;
      }
    }
    while (AxisLockThreshold.offset < AxisLockThreshold.byteLength) {
      const MassDisplayType = AxisLockThreshold.getUint8(
        AxisLockThreshold.offset++
      );
      if (MassDisplayType === 0) {
        break;
      }
      let SKIN_LOAD_STATUS = 0;
      while (AxisLockThreshold.offset < AxisLockThreshold.byteLength) {
        var PlayerState;
        if (MassDisplayType === 2 && SKIN_LOAD_STATUS === 0) {
          SKIN_LOAD_STATUS = AxisLockThreshold.getUint16(
            AxisLockThreshold.offset,
            true
          );
          AxisLockThreshold.offset += 2;
          if (SKIN_LOAD_STATUS === 0) {
            break;
          }
        }
        const combinedZoomFocusStrength = AxisLockThreshold.getUint16(
          AxisLockThreshold.offset,
          true
        );
        AxisLockThreshold.offset += 2;
        if (combinedZoomFocusStrength === 0) {
          if (MassDisplayType === 2) {
            SKIN_LOAD_STATUS = 0;
            continue;
          } else {
            break;
          }
        }
        jQuery_hn$0_2t_ea9b2_sub.cancelDeathAnimation(
          combinedZoomFocusStrength
        );
        let combinedInterpSpeed = jQuery_hn$0_2t_ea9b2_sub.get(
          combinedZoomFocusStrength
        );
        if (!combinedInterpSpeed) {
          combinedInterpSpeed = new WeakMaplS3ea9a6(
            combinedZoomFocusStrength,
            this
          );
        }
        combinedInterpSpeed.setType(MassDisplayType);
        combinedInterpSpeed.setX(
          AxisLockThreshold.getInt16(AxisLockThreshold.offset, true)
        );
        combinedInterpSpeed.setY(
          AxisLockThreshold.getInt16(AxisLockThreshold.offset + 2, true)
        );
        AxisLockThreshold.offset += 4;
        switch (MassDisplayType) {
          case 1:
            combinedInterpSpeed.setSize(
              AxisLockThreshold.getUint16(AxisLockThreshold.offset, true)
            );
            AxisLockThreshold.offset += 2;
            combinedInterpSpeed.color =
              (AxisLockThreshold.getUint8(AxisLockThreshold.offset++) << 16) +
              (AxisLockThreshold.getUint8(AxisLockThreshold.offset++) << 8) +
              AxisLockThreshold.getUint8(AxisLockThreshold.offset++);
            PlayerState = AxisLockThreshold.getUint8(
              AxisLockThreshold.offset++
            );
            combinedInterpSpeed.skin = (PlayerState & 127) - 1;
            combinedInterpSpeed.rainbow = (PlayerState & 128) === 128;
            break;
          case 2:
            combinedInterpSpeed.setSize(
              AxisLockThreshold.getUint16(AxisLockThreshold.offset, true)
            );
            AxisLockThreshold.offset += 2;
            combinedInterpSpeed.playerId = SKIN_LOAD_STATUS;
            break;
          case 3:
          case 4:
            combinedInterpSpeed.setSize(
              AxisLockThreshold.getUint16(AxisLockThreshold.offset, true)
            );
            AxisLockThreshold.offset += 2;
            break;
        }
        combinedInterpSpeed.onCreate(this);
        if (
          combinedInterpSpeed.playerId === this.playerId &&
          MassDisplayType === 2
        ) {
          if (!this.myCells.has(combinedZoomFocusStrength)) {
            this.myCells.set(combinedZoomFocusStrength, combinedInterpSpeed);
          }
        }
      }
    }
    while (AxisLockThreshold.offset < AxisLockThreshold.byteLength) {
      const MassDisplayType = AxisLockThreshold.getUint8(
        AxisLockThreshold.offset++
      );
      if (MassDisplayType === 0) {
        break;
      }
      while (AxisLockThreshold.offset < AxisLockThreshold.byteLength) {
        const combinedZoomFocusStrength = AxisLockThreshold.getUint16(
          AxisLockThreshold.offset,
          true
        );
        AxisLockThreshold.offset += 2;
        if (combinedZoomFocusStrength === 0) {
          break;
        }
        const defaultKeyMappings = AxisLockThreshold.getInt16(
          AxisLockThreshold.offset,
          true
        );
        const defaultOptions = AxisLockThreshold.getInt16(
          AxisLockThreshold.offset + 2,
          true
        );
        AxisLockThreshold.offset += 4;
        const combinedInterpSpeed = jQuery_hn$0_2t_ea9b2_sub.get(
          combinedZoomFocusStrength
        );
        if (combinedInterpSpeed) {
          let defaultSubPanelSettings;
          switch (MassDisplayType) {
            case 2:
            case 3:
            case 4:
              defaultSubPanelSettings = AxisLockThreshold.getUint16(
                AxisLockThreshold.offset,
                true
              );
              AxisLockThreshold.offset += 2;
              break;
          }
          combinedInterpSpeed.updateState(
            defaultKeyMappings,
            defaultOptions,
            defaultSubPanelSettings,
            minimapSmoothFactor
          );
        } else {
          switch (MassDisplayType) {
            case 2:
            case 3:
            case 4:
              AxisLockThreshold.offset += 2;
              break;
          }
        }
      }
    }
    this.updateScorePanel();
  }
  handlePosition(AxisLockThreshold) {
    this.centerX_ = AxisLockThreshold.getFloat32(
      AxisLockThreshold.offset,
      true
    );
    AxisLockThreshold.offset += 4;
    this.centerY_ = AxisLockThreshold.getFloat32(
      AxisLockThreshold.offset,
      true
    );
    AxisLockThreshold.offset += 4;
    this.centerSteps = 30;
  }
  handleUpdateBorder(AxisLockThreshold) {
    this.serverData.border = {};
    this.serverData.border.left = AxisLockThreshold.getInt16(
      AxisLockThreshold.offset,
      true
    );
    this.serverData.border.top = AxisLockThreshold.getInt16(
      AxisLockThreshold.offset + 2,
      true
    );
    this.serverData.border.right = AxisLockThreshold.getInt16(
      AxisLockThreshold.offset + 4,
      true
    );
    this.serverData.border.bottom = AxisLockThreshold.getInt16(
      AxisLockThreshold.offset + 6,
      true
    );
    AxisLockThreshold.offset += 8;
    this.serverData.border.width =
      this.serverData.border.right - this.serverData.border.left;
    this.serverData.border.height =
      this.serverData.border.bottom - this.serverData.border.top;
    this.serverData.border.enabled =
      this.serverData.border.width != 0 && this.serverData.border.height != 0;
    if (this.isPrimary) {
      g5Mea9c8_TYPE();
    }
  }
  handleMapData(AxisLockThreshold) {
    this.playerId = AxisLockThreshold.getUint16(AxisLockThreshold.offset, true);
    AxisLockThreshold.offset += 3;
    this.handleUpdateBorder(AxisLockThreshold);
    this.serverData.maxCells = AxisLockThreshold.getUint16(
      AxisLockThreshold.offset,
      true
    );
    AxisLockThreshold.offset += 2;
    readAscii(AxisLockThreshold);
    this.serverData.autosplits = AxisLockThreshold.getUint8(
      AxisLockThreshold.offset++
    );
    if (this.isPrimary) {
      const minimapSmoothFactor = window.location.hash.substring(1);
      if (minimapSmoothFactor && minimapSmoothFactor.length > 0) {
        If$sEyzqKbhea93f_Exec.sendPacket(
          VoidGBYH.sendPartyJoin(minimapSmoothFactor)
        );
      }
    } else if (
      If$sEyzqKbhea93f_Exec &&
      If$sEyzqKbhea93f_Exec.isConnected() &&
      this.playerId !== 0
    ) {
      Logger.info(
        "Player 2 (ID: " + this.playerId + ") connected. Handling party logic."
      );
      if (IMPORTjQwS8jD7) {
        Logger.info(
          "Player 1 is in a public party. Player 2 joining with code: " +
            IMPORTjQwS8jD7
        );
        this.sendPacket(VoidGBYH.sendPartyJoin(IMPORTjQwS8jD7));
      } else if (If$sEyzqKbhea93f_Exec.party.length > 0) {
        Logger.info(
          "Player 1 is in a private party. Requesting a public code so Player 2 can join."
        );
        If$sEyzqKbhea93f_Exec.sendPacket(VoidGBYH.sendPartyAction(4, 0));
        setTimeout(() => {
          if (IMPORTjQwS8jD7) {
            Logger.info(
              "Public code received. Player 2 attempting to join with code: " +
                IMPORTjQwS8jD7
            );
            this.sendPacket(VoidGBYH.sendPartyJoin(IMPORTjQwS8jD7));
          } else {
            Logger.warn(
              "Could not retrieve a public party code in time. Falling back to invite."
            );
            If$sEyzqKbhea93f_Exec.sendPacket(
              VoidGBYH.sendPartyAction(0, this.playerId)
            );
          }
        }, 1500);
      } else {
        Logger.info(
          "Player 1 is not in a party. Creating a new one and inviting Player 2 (ID: " +
            this.playerId +
            ")."
        );
        If$sEyzqKbhea93f_Exec.sendPacket(
          VoidGBYH.sendPartyAction(0, this.playerId)
        );
      }
    }
  }
  handleInvite(AxisLockThreshold) {
    const minimapSmoothFactor = readUtf16(AxisLockThreshold)
      .replace(new RegExp("<", "g"), "&lt;")
      .replace(new RegExp(">", "g"), "&gt;");
    const drawMinimapInterval = this.isPrimary
      ? Str_NmyJ4kX
      : If$sEyzqKbhea93f_Exec;
    if (
      drawMinimapInterval &&
      minimapSmoothFactor === drawMinimapInterval.name &&
      drawMinimapInterval.playerId !== 0
    ) {
      Logger.info(
        "Player " +
          (this.isPrimary ? 1 : 2) +
          " auto-accepting invite from Player " +
          (this.isPrimary ? 2 : 1) +
          " (" +
          minimapSmoothFactor +
          ")."
      );
      this.sendPacket(VoidGBYH.sendInviteResponse(true));
      return;
    }
    if (Mao5huZea938_run.cAutoDecline) {
      this.sendPacket(VoidGBYH.sendInviteResponse(false));
      return;
    }
    const baseCellSize = Str_NmyJ4kX.isConnected()
      ? this.isPrimary
        ? "Player 1 is"
        : "Player 2 is"
      : "You're";
    const combinedCameraDistanceThreshold = $(
      '\n      <nord-notification>\n        <div slot="icon" style="display: none;"></div>\n        <h2>' +
        baseCellSize +
        ' pending a party invite!</h2>\n        <div id="popup-party-text">' +
        minimapSmoothFactor +
        ' has invited you to a party.</div>\n        <div style="display: flex; justify-content: flex-end; margin-top: 10px; gap: 5px;">\n          <nord-button id="btn-decline" variant="secondary" size="s">Decline</nord-button>\n          <nord-button id="btn-accept" variant="primary" size="s">Accept</nord-button>\n        </div>\n      </nord-notification>\n    '
    );
    $("nord-notification-group").prepend(combinedCameraDistanceThreshold);
    const combinedZoomFocusStrength = combinedCameraDistanceThreshold[0];
    const combinedInterpSpeed = setInterval(() => {
      if (!combinedZoomFocusStrength.shadowRoot) {
        return;
      }
      clearInterval(combinedInterpSpeed);
      injectShadowStyle(
        "nord-notification",
        ".n-notification{border: solid 1px var(--n-color-border);background: var(--n-color-background)!important;padding: 16px !important}.n-dismiss{display:none !important}.n-notification-body{padding: 0 !important;}",
        "notification-style"
      );
      combinedCameraDistanceThreshold.find("#btn-accept").on("click", () => {
        this.sendPacket(VoidGBYH.sendInviteResponse(true));
        combinedZoomFocusStrength.dismiss?.();
      });
      combinedCameraDistanceThreshold.find("#btn-decline").on("click", () => {
        this.sendPacket(VoidGBYH.sendInviteResponse(false));
        combinedZoomFocusStrength.dismiss?.();
      });
    }, 20);
  }
  handlePartyInfo(AxisLockThreshold) {
    const minimapSmoothFactor = [];
    const drawMinimapInterval = {};
    let baseCellSize = -1;
    const combinedCameraDistanceThreshold = new Set(
      Object.keys(this.partyIds).map(Number)
    );
    const combinedZoomFocusStrength = AxisLockThreshold.getUint16(
      AxisLockThreshold.offset,
      true
    );
    AxisLockThreshold.offset += 2;
    const combinedInterpSpeed = new Set();
    for (
      let messageColors = 0;
      messageColors < combinedZoomFocusStrength;
      messageColors++
    ) {
      const MESSAGE_TYPES = {};
      const CellVisibility = AxisLockThreshold.getUint8(
        AxisLockThreshold.offset++
      );
      MESSAGE_TYPES.id = AxisLockThreshold.getUint16(
        AxisLockThreshold.offset,
        true
      );
      AxisLockThreshold.offset += 2;
      combinedInterpSpeed.add(MESSAGE_TYPES.id);
      MESSAGE_TYPES.isLeader = CellVisibility === 1;
      if (MESSAGE_TYPES.isLeader) {
        baseCellSize = MESSAGE_TYPES.id;
      }
      MESSAGE_TYPES.name = readUtf16(AxisLockThreshold) || "An unnamed cell";
      Object.assign(MESSAGE_TYPES, {
        x: 0,
        y: 0,
        x_: 0,
        y_: 0,
        score: 0,
        cache: -1,
        team: 0,
        state: PlayerState.UNKNOWN,
      });
      let MassDisplayType = zLCuf8c.getPlayer(MESSAGE_TYPES.id);
      if (!MassDisplayType) {
        MassDisplayType = new do_JMwG(MESSAGE_TYPES.id);
        zLCuf8c.add(MassDisplayType);
      }
      MassDisplayType.name = MESSAGE_TYPES.name;
      MESSAGE_TYPES.fullPlayerData = MassDisplayType;
      const SKIN_LOAD_STATUS = this.partyIds[MESSAGE_TYPES.id];
      if (SKIN_LOAD_STATUS != null) {
        const defaultKeyMappings = this.party[SKIN_LOAD_STATUS];
        Object.assign(MESSAGE_TYPES, {
          x: defaultKeyMappings.x,
          y: defaultKeyMappings.y,
          x_: defaultKeyMappings.x_,
          y_: defaultKeyMappings.y_,
          state: defaultKeyMappings.state,
          score: defaultKeyMappings.score,
          cache: defaultKeyMappings.cache,
          mmColor: defaultKeyMappings.mmColor,
        });
      }
      minimapSmoothFactor.push(MESSAGE_TYPES);
      drawMinimapInterval[MESSAGE_TYPES.id] = minimapSmoothFactor.length - 1;
    }
    const defaultOptions = this.isPrimary ? Str_NmyJ4kX : If$sEyzqKbhea93f_Exec;
    for (const defaultSubPanelSettings of combinedCameraDistanceThreshold) {
      if (!combinedInterpSpeed.has(defaultSubPanelSettings)) {
        let fontConfigs = this.myCells.has(defaultSubPanelSettings);
        if (!fontConfigs && defaultOptions) {
          fontConfigs = defaultOptions.myCells.has(defaultSubPanelSettings);
        }
        if (
          !fontConfigs &&
          defaultSubPanelSettings !== this.playerId &&
          defaultSubPanelSettings !==
            (defaultOptions ? defaultOptions.playerId : -1)
        ) {
          zLCuf8c.remove(defaultSubPanelSettings);
          Logger.debug(
            "PlayerData for ID " +
              defaultSubPanelSettings +
              " removed from registry (left party, not active in game)."
          );
        }
      }
    }
    this.party = minimapSmoothFactor;
    this.partyIds = drawMinimapInterval;
    this.partyLeader = baseCellSize;
    if (this.isPrimary) {
      if (combinedZoomFocusStrength > 0) {
        this.drawParty();
      } else {
        this.clearParty();
      }
    }
  }
  handlePartyData(AxisLockThreshold) {
    var minimapSmoothFactor = AxisLockThreshold.getUint16(
      AxisLockThreshold.offset,
      true
    );
    var drawMinimapInterval;
    AxisLockThreshold.offset += 2;
    if (minimapSmoothFactor != this.party.length) {
      return;
    }
    for (
      drawMinimapInterval = 0;
      drawMinimapInterval < minimapSmoothFactor;
      drawMinimapInterval++
    ) {
      var baseCellSize = this.party[drawMinimapInterval];
      baseCellSize.state = AxisLockThreshold.getUint8(
        AxisLockThreshold.offset++
      );
      if (baseCellSize.state === PlayerState.ALIVE) {
        baseCellSize.x_ = AxisLockThreshold.getInt16(
          AxisLockThreshold.offset,
          true
        );
        baseCellSize.y_ = AxisLockThreshold.getInt16(
          AxisLockThreshold.offset + 2,
          true
        );
        baseCellSize.score = AxisLockThreshold.getInt32(
          AxisLockThreshold.offset + 4,
          true
        );
        AxisLockThreshold.offset += 8;
      }
    }
    this.drawParty();
  }
  handlePartyJoinCode(AxisLockThreshold) {
    var minimapSmoothFactor = readAscii(AxisLockThreshold);
    this.partyCode = readAscii(AxisLockThreshold);
    const drawMinimapInterval = this.partyCode;
    if (drawMinimapInterval) {
      this.selfMsgWithJoinCode(minimapSmoothFactor, drawMinimapInterval);
      IMPORTjQwS8jD7 = drawMinimapInterval;
    } else {
      console.log(minimapSmoothFactor);
      this.selfMsg(minimapSmoothFactor);
      this.partyCode = null;
      if (this.isPrimary) {
        IMPORTjQwS8jD7 = null;
      }
    }
  }
  handleResetTime(AxisLockThreshold) {
    var minimapSmoothFactor = AxisLockThreshold.getUint8(
      AxisLockThreshold.offset++
    );
    var drawMinimapInterval;
    drawMinimapInterval = AxisLockThreshold.getFloat64(
      AxisLockThreshold.offset,
      true
    );
    this.serverData.resetType = minimapSmoothFactor;
    this.serverData.resetTime = drawMinimapInterval;
  }
  handleSpectators(AxisLockThreshold) {
    this.spectators = AxisLockThreshold.getUint16(
      AxisLockThreshold.offset,
      true
    );
    Promise_28_SVO_ea950_fn.spectatorCount.text(this.spectators);
  }
  handleAuthenticated() {
    if (!this.spectate) {
      this.sendPacket(VoidGBYH.setName(this.name));
    } else {
      this.sendPacket(VoidGBYH.sendSpectate());
    }
  }
  showSubPanel(AxisLockThreshold) {
    var minimapSmoothFactor =
      AxisLockThreshold.getUint8(AxisLockThreshold.offset++) == 1;
    this.subPanelOverride = minimapSmoothFactor;
    as_dX7WJBQ_ea9c4_mul();
    if (minimapSmoothFactor) {
      if (!this.serverData.hasSentSubPanel) {
        LodashxQu4();
        this.serverData.hasSentSubPanel = true;
      }
    }
  }
  updateScorePanel() {
    let AxisLockThreshold = 0;
    for (const minimapSmoothFactor of this.myCells.values()) {
      AxisLockThreshold += minimapSmoothFactor.getRealMass();
    }
    if (AxisLockThreshold > this.score) {
      this.score = AxisLockThreshold;
    }
  }
  updateSubPanel() {
    const AxisLockThreshold = this.isPrimary ? AtgnhF : qRcea94d_init;
    if (AxisLockThreshold) {
      DEFAULT_B6Cea9c5_Ret(AxisLockThreshold.uid);
    }
  }
  handleLeaderboard(AxisLockThreshold) {
    const minimapSmoothFactor = document.getElementById("leaderboard-canvas");
    if (!minimapSmoothFactor) {
      return;
    }
    const drawMinimapInterval = minimapSmoothFactor.getContext("2d");
    const baseCellSize = performance.now();
    const combinedCameraDistanceThreshold = 200;
    this.leaderboardState.lastUpdateTime = baseCellSize;
    const combinedZoomFocusStrength = AxisLockThreshold.getUint32(
      AxisLockThreshold.offset,
      true
    );
    AxisLockThreshold.offset += 4;
    const combinedInterpSpeed = [];
    for (
      let messageColors = 0;
      messageColors < combinedZoomFocusStrength;
      messageColors++
    ) {
      const MESSAGE_TYPES = AxisLockThreshold.getUint16(
        AxisLockThreshold.offset,
        true
      );
      AxisLockThreshold.offset += 2;
      const CellVisibility = readUtf16(AxisLockThreshold) || "An unnamed cell";
      combinedInterpSpeed.push({
        id: MESSAGE_TYPES,
        name: CellVisibility,
        targetY: messageColors * 28 + 20,
      });
    }
    const MassDisplayType = new Map(
      this.leaderboardState.entries.map(
        Object$kDcGWUY((...AxisLockThreshold) => {
          AxisLockThreshold.length = 1;
          return [AxisLockThreshold[0].id, AxisLockThreshold[0]];
        })
      )
    );
    this.leaderboardState.entries = combinedInterpSpeed.map(
      Object$kDcGWUY((...AxisLockThreshold) => {
        AxisLockThreshold.length = 1;
        const minimapSmoothFactor = MassDisplayType.get(
          AxisLockThreshold[0].id
        );
        return {
          ...AxisLockThreshold[0],
          startY: minimapSmoothFactor
            ? minimapSmoothFactor.currentY
            : AxisLockThreshold[0].targetY,
          currentY: minimapSmoothFactor
            ? minimapSmoothFactor.currentY
            : AxisLockThreshold[0].targetY,
        };
      })
    );
    const SKIN_LOAD_STATUS = () => {
      const AxisLockThreshold =
        performance.now() - this.leaderboardState.lastUpdateTime;
      const baseCellSize = Math.min(
        AxisLockThreshold / combinedCameraDistanceThreshold,
        1
      );
      const combinedZoomFocusStrength = 1 - Math.pow(1 - baseCellSize, 3);
      const combinedInterpSpeed = window.devicePixelRatio || 1;
      const MESSAGE_TYPES = 250;
      const CellVisibility = this.leaderboardState.entries.length * 28 + 10;
      minimapSmoothFactor.width = MESSAGE_TYPES * combinedInterpSpeed;
      minimapSmoothFactor.height = CellVisibility * combinedInterpSpeed;
      minimapSmoothFactor.style.width = "" + MESSAGE_TYPES + "px";
      minimapSmoothFactor.style.height = "" + CellVisibility + "px";
      drawMinimapInterval.setTransform(
        combinedInterpSpeed,
        0,
        0,
        combinedInterpSpeed,
        0,
        0
      );
      drawMinimapInterval.clearRect(0, 0, MESSAGE_TYPES, CellVisibility);
      drawMinimapInterval.font = "14px 'Nordhealth Sans', sans-serif";
      drawMinimapInterval.textAlign = "left";
      drawMinimapInterval.textBaseline = "middle";
      drawMinimapInterval.shadowColor = "rgba(0, 0, 0, 0.5)";
      drawMinimapInterval.shadowBlur = 4;
      this.leaderboardState.entries.forEach(
        (AxisLockThreshold, baseCellSize) => {
          AxisLockThreshold.currentY =
            AxisLockThreshold.startY +
            (AxisLockThreshold.targetY - AxisLockThreshold.startY) *
              combinedZoomFocusStrength;
          let combinedInterpSpeed = DEFAULT$HB0T_ea93b_Status["--n-color-text"];
          if (AxisLockThreshold.id === this.playerId) {
            combinedInterpSpeed =
              DEFAULT$HB0T_ea93b_Status["--n-color-text-highlight"];
          } else if (this.partyIds[AxisLockThreshold.id] != null) {
            combinedInterpSpeed =
              DEFAULT$HB0T_ea93b_Status["--n-color-text-info"];
          }
          const CellVisibility = ["🥇", "🥈", "🥉"];
          const minimapSmoothFactor =
            baseCellSize < 3
              ? "" + CellVisibility[baseCellSize] + " "
              : "" + (baseCellSize + 1) + ". ";
          drawMinimapInterval.fillStyle = combinedInterpSpeed;
          drawMinimapInterval.font = "14px 'Nordhealth Sans', sans-serif";
          let combinedCameraDistanceThreshold = AxisLockThreshold.name;
          const MassDisplayType =
            drawMinimapInterval.measureText(minimapSmoothFactor).width;
          const SKIN_LOAD_STATUS = MESSAGE_TYPES - MassDisplayType - 20;
          if (
            drawMinimapInterval.measureText(combinedCameraDistanceThreshold)
              .width > SKIN_LOAD_STATUS
          ) {
            while (
              drawMinimapInterval.measureText(
                combinedCameraDistanceThreshold + "…"
              ).width > SKIN_LOAD_STATUS
            ) {
              combinedCameraDistanceThreshold =
                combinedCameraDistanceThreshold.slice(0, -1);
            }
            combinedCameraDistanceThreshold += "…";
          }
          drawMinimapInterval.fillText(
            minimapSmoothFactor + combinedCameraDistanceThreshold,
            10,
            AxisLockThreshold.currentY
          );
        }
      );
      if (baseCellSize < 1) {
        requestAnimationFrame(SKIN_LOAD_STATUS);
      }
    };
    if (this.leaderboardState.animationFrameId) {
      cancelAnimationFrame(this.leaderboardState.animationFrameId);
    }
    this.leaderboardState.animationFrameId =
      requestAnimationFrame(SKIN_LOAD_STATUS);
  }
  handlePing(...AxisLockThreshold) {
    AxisLockThreshold.length = 0;
    async_gvZqk_Dc_ea93e_div = performance.now() - Catch_wCYNjd$ea96b_exec;
    if (async_gvZqk_Dc_ea93e_div > 300) {
      P7Tea99f_Cfg = 0;
      if (Str_NmyJ4kX?.isConnected() && !window.isGameLoopFrozenByPing) {
        window.isGameLoopFrozenByPing = true;
        BigIntLsuea9cc_ex(true, "High Ping Detected!");
        Logger.warn(
          "High ping detected (" +
            async_gvZqk_Dc_ea93e_div.toFixed(0) +
            "ms) with Player 2 active. Freezing game loop."
        );
      }
    } else if (window.isGameLoopFrozenByPing) {
      if (P7Tea99f_Cfg === 0) {
        P7Tea99f_Cfg = performance.now();
        Logger.info(
          "Ping is now stable (" +
            async_gvZqk_Dc_ea93e_div.toFixed(0) +
            "ms). Starting 3-second unfreeze timer."
        );
      } else if (performance.now() - P7Tea99f_Cfg > 1000) {
        window.isGameLoopFrozenByPing = false;
        P7Tea99f_Cfg = 0;
        BigIntLsuea9cc_ex(false);
        Logger.info(
          "Ping has been stable for 3 seconds. Unfreezing game loop."
        );
      }
    }
    const minimapSmoothFactor =
      async_gvZqk_Dc_ea93e_div < 100
        ? "success"
        : async_gvZqk_Dc_ea93e_div < 200
        ? "warning"
        : "danger";
    $("#currentPing")
      .attr("variant", minimapSmoothFactor)
      .show()
      .find("span")
      .text("" + async_gvZqk_Dc_ea93e_div.toFixed() + "ms");
  }
  handleChat(...AxisLockThreshold) {
    AxisLockThreshold.length = 1;
    const minimapSmoothFactor = AxisLockThreshold[0].getUint8(
      AxisLockThreshold[0].offset++
    );
    const drawMinimapInterval = AxisLockThreshold[0].getUint8(
      AxisLockThreshold[0].offset++
    );
    const baseCellSize = AxisLockThreshold[0].getUint8(
      AxisLockThreshold[0].offset++
    );
    const combinedCameraDistanceThreshold = AxisLockThreshold[0].getUint8(
      AxisLockThreshold[0].offset++
    );
    const combinedZoomFocusStrength =
      "#" +
      (
        16777216 +
        (drawMinimapInterval << 16) +
        (baseCellSize << 8) +
        combinedCameraDistanceThreshold
      )
        .toString(16)
        .slice(1)
        .toUpperCase();
    const combinedInterpSpeed = AxisLockThreshold[0].getUint8(
      AxisLockThreshold[0].offset++
    );
    const MESSAGE_TYPES = AxisLockThreshold[0].getUint16(
      AxisLockThreshold[0].offset,
      true
    );
    AxisLockThreshold[0].offset += 2;
    if (Map_brr9MVea94a_Idx.includes(MESSAGE_TYPES)) {
      return;
    }
    const CellVisibility = readUtf16(AxisLockThreshold[0]);
    AxisLockThreshold[0].getUint8(AxisLockThreshold[0].offset++);
    const MassDisplayType =
      readUtf16(AxisLockThreshold[0])
        .replace(new RegExp("<", "g"), "<")
        .replace(new RegExp(">", "g"), ">") || "An unnamed cell";
    const SKIN_LOAD_STATUS = readUtf16(AxisLockThreshold[0])
      .replace(new RegExp("<", "g"), "<")
      .replace(new RegExp(">", "g"), ">");
    const PlayerState =
      AxisLockThreshold[0].offset < AxisLockThreshold[0].byteLength
        ? AxisLockThreshold[0].getBigInt64(AxisLockThreshold[0].offset, true)
        : 0n;
    const defaultKeyMappings = CellVisibility
      ? '<nord-badge class="chat-tag">' + CellVisibility + "</nord-badge>"
      : "";
    const defaultOptions =
      minimapSmoothFactor === 1
        ? '<span class="chat-party-indicator" style="color: ' +
          DEFAULT$HB0T_ea93b_Status["--n-color-text-info"] +
          '; font-weight: bold; margin-right: 5px;">[PARTY]</span>'
        : "";
    const defaultSubPanelSettings =
      '\n      <div class="chat-message" ' +
      (PlayerState ? 'data-msgid="' + PlayerState + '"' : "") +
      ">\n        " +
      defaultOptions +
      "\n        " +
      defaultKeyMappings +
      '\n        <span class="chat-name" data-player-id="' +
      MESSAGE_TYPES +
      '" data-name-color="' +
      Pto5ea937_Inst(
        "#" +
          transformCellColor(
            16777216 +
              (drawMinimapInterval << 16) +
              (baseCellSize << 8) +
              combinedCameraDistanceThreshold,
            0
          )
            .toString(16)
            .padStart(6, "0")
      ).toHexString() +
      '" style="color: ' +
      Pto5ea937_Inst(
        "#" +
          transformCellColor(
            16777216 +
              (drawMinimapInterval << 16) +
              (baseCellSize << 8) +
              combinedCameraDistanceThreshold,
            0
          )
            .toString(16)
            .padStart(6, "0")
      ).toHexString() +
      ';">\n          ' +
      MassDisplayType +
      '\n        </span>\n        <div class="chat-content" style="color: ' +
      messageColors[combinedInterpSpeed] +
      ';">\n          ' +
      HXgYeaa0d_TYPE(SKIN_LOAD_STATUS) +
      "\n        </div>\n      </div>\n    ";
    const fontConfigs = $(defaultSubPanelSettings);
    fontConfigs.find(".chat-name").on("contextmenu", Xb4x);
    Void$jyv1Bm3(fontConfigs[0]);
  }
  handleWhisper(...AxisLockThreshold) {
    AxisLockThreshold.length = 1;
    const minimapSmoothFactor =
      readUtf16(AxisLockThreshold[0]) || "An unnamed cell";
    const drawMinimapInterval = AxisLockThreshold[0].getUint16(
      AxisLockThreshold[0].offset,
      true
    );
    AxisLockThreshold[0].offset += 2;
    if (Map_brr9MVea94a_Idx.includes(drawMinimapInterval)) {
      return;
    }
    const baseCellSize = AxisLockThreshold[0].getUint8(
      AxisLockThreshold[0].offset++
    );
    const combinedCameraDistanceThreshold = AxisLockThreshold[0].getUint8(
      AxisLockThreshold[0].offset++
    );
    const combinedZoomFocusStrength = AxisLockThreshold[0].getUint8(
      AxisLockThreshold[0].offset++
    );
    const combinedInterpSpeed =
      "#" +
      (
        16777216 +
        (baseCellSize << 16) +
        (combinedCameraDistanceThreshold << 8) +
        combinedZoomFocusStrength
      )
        .toString(16)
        .slice(1)
        .toUpperCase();
    const messageColors = readUtf16(AxisLockThreshold[0]) || "An unnamed cell";
    const MESSAGE_TYPES = AxisLockThreshold[0].getUint16(
      AxisLockThreshold[0].offset,
      true
    );
    AxisLockThreshold[0].offset += 2;
    const CellVisibility = AxisLockThreshold[0].getUint8(
      AxisLockThreshold[0].offset++
    );
    const MassDisplayType = AxisLockThreshold[0].getUint8(
      AxisLockThreshold[0].offset++
    );
    const SKIN_LOAD_STATUS = AxisLockThreshold[0].getUint8(
      AxisLockThreshold[0].offset++
    );
    const PlayerState =
      "#" +
      (
        16777216 +
        (CellVisibility << 16) +
        (MassDisplayType << 8) +
        SKIN_LOAD_STATUS
      )
        .toString(16)
        .slice(1)
        .toUpperCase();
    const defaultKeyMappings = readUtf16(AxisLockThreshold[0]);
    const defaultOptions =
      '\n      <div class="chat-message whisper-message">\n        <span class="chat-name" data-player-id="' +
      drawMinimapInterval +
      '" style="color: ' +
      combinedInterpSpeed +
      ';">' +
      minimapSmoothFactor +
      '</span>\n        <span style="margin: 0 4px;">&gt;</span>\n        <span class="chat-name" data-player-id="' +
      MESSAGE_TYPES +
      '" style="color: ' +
      PlayerState +
      ';">' +
      messageColors +
      '</span>\n        <div class="chat-content">: ' +
      HXgYeaa0d_TYPE(defaultKeyMappings) +
      "</div>\n      </div>\n    ";
    const defaultSubPanelSettings = $(defaultOptions);
    defaultSubPanelSettings.find(".chat-name").on("contextmenu", Xb4x);
    Void$jyv1Bm3(defaultSubPanelSettings[0]);
  }
  handleProfile(...AxisLockThreshold) {
    AxisLockThreshold.length = 1;
    AxisLockThreshold[1] = readAscii(AxisLockThreshold[0]);
    AxisLockThreshold[2] = JSON.parse(AxisLockThreshold[1]);
    BigInt_ZShVUjt$ea9d0_err(AxisLockThreshold[2]);
  }
  drawParty() {
    const AxisLockThreshold = $("#partyPanel").empty();
    const minimapSmoothFactor = [...this.party];
    if (
      Str_NmyJ4kX &&
      Str_NmyJ4kX.isConnecting &&
      !this.partyIds.hasOwnProperty(Str_NmyJ4kX.playerId)
    ) {
      const drawMinimapInterval =
        Str_NmyJ4kX.name || $("#name-box2").val() || "Player 2";
      const baseCellSize = new do_JMwG(Str_NmyJ4kX.playerId || -2);
      baseCellSize.name = drawMinimapInterval;
      baseCellSize.cellColor = 8947848;
      minimapSmoothFactor.push({
        id: Str_NmyJ4kX.playerId || -2,
        name: drawMinimapInterval,
        displayName: drawMinimapInterval,
        state: PlayerState.JOINING,
        isLeader: false,
        score: 0,
        fullPlayerData: baseCellSize,
      });
    }
    if (!minimapSmoothFactor.length || Mao5huZea938_run.cHidePartyPanel) {
      AxisLockThreshold.hide();
      $("#leaveParty").hide();
      return;
    }
    AxisLockThreshold.show();
    $("#leaveParty").show();
    minimapSmoothFactor.forEach(
      Object$kDcGWUY((...minimapSmoothFactor) => {
        minimapSmoothFactor.length = 2;
        const baseCellSize =
          minimapSmoothFactor[0].displayName || minimapSmoothFactor[0].name;
        minimapSmoothFactor[2] =
          '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-ellipsis-icon lucide-ellipsis"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>';
        if (minimapSmoothFactor[0].state === PlayerState.DEAD) {
          minimapSmoothFactor[2] =
            '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-skull-icon lucide-skull"><path d="m12.5 17-.5-1-.5 1h1z"/><path d="M15 22a1 1 0 0 0 1-1v-1a2 2 0 0 0 1.56-3.25 8 8 0 1 0-11.12 0A2 2 0 0 0 8 20v1a1 1 0 0 0 1 1z"/><circle cx="15" cy="12" r="1"/><circle cx="9" cy="12" r="1"/></svg>';
        } else if (minimapSmoothFactor[0].state === PlayerState.SPECTATE) {
          minimapSmoothFactor[2] =
            '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eye-icon lucide-eye"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/></svg>';
        } else if (minimapSmoothFactor[0].state === PlayerState.JOINING) {
          minimapSmoothFactor[2] = "Joining...";
        } else if (minimapSmoothFactor[0].score > 0) {
          minimapSmoothFactor[2] =
            minimapSmoothFactor[0].score.toLocaleString();
        }
        const combinedCameraDistanceThreshold = $(
          '\n        <div class="party-row" data-index="' +
            minimapSmoothFactor[1] +
            '">\n          <span class="player-name ' +
            (minimapSmoothFactor[0].isLeader ? "leader" : "") +
            '">' +
            baseCellSize +
            '</span>\n          <span class="player-status" style="color: ' +
            DEFAULT$HB0T_ea93b_Status["--n-color-text"] +
            '">' +
            minimapSmoothFactor[2] +
            "</span>\n        </div>\n      "
        );
        combinedCameraDistanceThreshold.on("contextmenu", Stringify_NFlcpsmH);
        AxisLockThreshold.append(combinedCameraDistanceThreshold);
      }, 2)
    );
  }
}
class WeakMaplS3ea9a6 {
  constructor(AxisLockThreshold) {
    this.id = AxisLockThreshold;
    this.type = 0;
    this.nameCache = null;
    this.massText = null;
    this.skin = null;
    this.playerId = 0;
    this.color = 0;
    this.pastelColor = null;
    this.x = 0;
    this.y = 0;
    this.x_ = 0;
    this.y_ = 0;
    this.size = 0;
    this.size_ = 0;
    this.massLastAmount = -1;
    this.cache = null;
    this.spawnTime = performance.now();
    this._cachedData = {
      targetAlpha: 1,
      isTransparent: Mao5huZea938_run.cTransCells,
      lastSize: 0,
      lastPosition: {
        x: NaN,
        y: NaN,
      },
      lastColor: null,
      lastFrameTime: 0,
      lastMouseX: NaN,
      lastMouseY: NaN,
      lastLineThickness: NaN,
      lastPlayerName: null,
      lastPlayerSkinUrl: null,
      lastGraphicsColor: null,
      lastGraphicsAlpha: null,
    };
    this._cachedData.targetAlpha = this._cachedData.isTransparent ? 0.5 : 1;
  }
  setType(AxisLockThreshold) {
    this.type = AxisLockThreshold;
  }
  setX(AxisLockThreshold) {
    this.x_ = AxisLockThreshold;
    this.x = AxisLockThreshold;
  }
  setY(AxisLockThreshold) {
    this.y_ = AxisLockThreshold;
    this.y = AxisLockThreshold;
  }
  setSize(AxisLockThreshold) {
    this.size_ = AxisLockThreshold;
    this.size = AxisLockThreshold;
  }
  updateState(AxisLockThreshold, minimapSmoothFactor, drawMinimapInterval) {
    this.x_ = AxisLockThreshold;
    this.y_ = minimapSmoothFactor;
    if (drawMinimapInterval !== undefined) {
      this.size_ = drawMinimapInterval;
    }
  }
  getMass() {
    return ((this.size * this.size) / 25) >> 0;
  }
  getRealMass() {
    return ((this.size_ * this.size_) / 25) >> 0;
  }
  interpolateState(AxisLockThreshold, minimapSmoothFactor = false) {
    if (minimapSmoothFactor) {
      this.x = this.x_;
      this.y = this.y_;
      this.size = this.size_;
      return;
    }
    const drawMinimapInterval = 0.1;
    const baseCellSize = Math.min(
      (15 / Mao5huZea938_run.rAnimationDelay) * AxisLockThreshold,
      1
    );
    const combinedCameraDistanceThreshold = this.x_ - this.x;
    const combinedZoomFocusStrength = this.y_ - this.y;
    if (
      Math.abs(combinedCameraDistanceThreshold) > drawMinimapInterval ||
      Math.abs(combinedZoomFocusStrength) > drawMinimapInterval
    ) {
      this.x += combinedCameraDistanceThreshold * baseCellSize;
      this.y += combinedZoomFocusStrength * baseCellSize;
    } else {
      this.x = this.x_;
      this.y = this.y_;
    }
    const combinedInterpSpeed = this.size_ - this.size;
    if (Math.abs(combinedInterpSpeed) > drawMinimapInterval) {
      this.size += combinedInterpSpeed * baseCellSize;
    } else {
      this.size = this.size_;
    }
  }
  toShortString(...AxisLockThreshold) {
    AxisLockThreshold.length = 1;
    if (AxisLockThreshold[0] < 1000) {
      return AxisLockThreshold[0].toString();
    } else if (AxisLockThreshold[0] < 1000000) {
      let minimapSmoothFactor = Math.floor(AxisLockThreshold[0] / 100) / 10;
      return minimapSmoothFactor.toFixed(1) + "K";
    } else if (AxisLockThreshold[0] < 1000000000) {
      let minimapSmoothFactor = Math.floor(AxisLockThreshold[0] / 100000) / 10;
      return minimapSmoothFactor.toFixed(1) + "M";
    } else if (AxisLockThreshold[0] >= 1000000000) {
      let minimapSmoothFactor =
        Math.floor(AxisLockThreshold[0] / 100000000) / 10;
      return minimapSmoothFactor.toFixed(1) + "B";
    }
    return AxisLockThreshold[0].toString();
  }
  handleFood() {
    if (this.needsPixiUpdate && this.sprite.visible) {
      this.sprite.position.set(this.x, this.y);
      this.sprite.texture = dNwtiUlea972_Handler;
      const AxisLockThreshold = Object$kDcGWUY((...AxisLockThreshold) => {
        AxisLockThreshold.length = 1;
        const minimapSmoothFactor = Pto5ea937_Inst(AxisLockThreshold[0]);
        const drawMinimapInterval = Object$kDcGWUY((...AxisLockThreshold) => {
          AxisLockThreshold.length = 1;
          return parseInt(AxisLockThreshold[0].replace("#", ""), 16);
        });
        return [
          drawMinimapInterval(minimapSmoothFactor.toHexString()),
          drawMinimapInterval(minimapSmoothFactor.lighten(10).toHexString()),
          drawMinimapInterval(minimapSmoothFactor.lighten(20).toHexString()),
          drawMinimapInterval(minimapSmoothFactor.darken(10).toHexString()),
          drawMinimapInterval(minimapSmoothFactor.darken(20).toHexString()),
        ];
      });
      const minimapSmoothFactor = AxisLockThreshold(
        DEFAULT$HB0T_ea93b_Status["--n-color-accent"]
      );
      const drawMinimapInterval =
        minimapSmoothFactor[
          Math.floor(Math.random() * minimapSmoothFactor.length)
        ];
      this.sprite.tint = drawMinimapInterval;
      this.needsPixiUpdate = false;
    }
  }
  createPixiObjects() {
    if (this.type == 2) {
      if (!this.container) {
        this.container = new PIXI.Container();
        this.container.parentCell = this;
        this.needsPixiUpdate = true;
        let_ExdFq$65.addChild(this.container);
      }
    } else if (!this.sprite) {
      this.sprite = new PIXI.Sprite(PIXI.Texture.EMPTY);
      this.sprite.parentCell = this;
      this.sprite.anchor.set(0.5);
      if (this.type === 6) {
        this.sprite.width = 12;
        this.sprite.height = 12;
      }
      this.needsPixiUpdate = true;
      if (this.type != 0) {
        let_ExdFq$65.addChild(this.sprite);
      } else {
        letwtfOyM80ea984_num.addChild(this.sprite);
      }
    }
  }
  handle(AxisLockThreshold) {
    if (
      (this.type === 2 && !this.container) ||
      (this.type !== 2 && !this.sprite)
    ) {
      return;
    }
    if (!this._cachedData) {
      this._cachedData = {
        targetAlpha: 1,
        isTransparent: Mao5huZea938_run.cTransCells,
        lastSize: 0,
        lastPosition: {
          x: NaN,
          y: NaN,
        },
        lastColor: null,
        lastFrameTime: 0,
        lastMouseX: NaN,
        lastMouseY: NaN,
        lastLineThickness: NaN,
        lastPlayerName: null,
        lastPlayerSkinUrl: null,
      };
      this._cachedData.targetAlpha = this._cachedData.isTransparent ? 0.5 : 1;
    }
    if (this._cachedData.isTransparent !== Mao5huZea938_run.cTransCells) {
      this._cachedData.isTransparent = Mao5huZea938_run.cTransCells;
      this._cachedData.targetAlpha = this._cachedData.isTransparent ? 0.5 : 1;
    }
    const minimapSmoothFactor = this._cachedData.targetAlpha;
    const drawMinimapInterval =
      this.x !== this._cachedData.lastPosition.x ||
      this.y !== this._cachedData.lastPosition.y;
    switch (this.type) {
      case 0:
        break;
      case 1:
        this.handleEjectedMass(minimapSmoothFactor, drawMinimapInterval);
        break;
      case 2:
        this.handlePlayerCell(
          minimapSmoothFactor,
          drawMinimapInterval,
          AxisLockThreshold
        );
        break;
      case 3:
        this.handleVirus(minimapSmoothFactor, drawMinimapInterval);
        break;
      case 4:
        this.handleMotherCell(minimapSmoothFactor, drawMinimapInterval);
        break;
    }
    if (drawMinimapInterval) {
      this._cachedData.lastPosition.x = this.x;
      this._cachedData.lastPosition.y = this.y;
    }
  }
  handleEjectedMass(AxisLockThreshold, minimapSmoothFactor) {
    const drawMinimapInterval = If$sEyzqKbhea93f_Exec
      ? zLCuf8c.getPlayer(If$sEyzqKbhea93f_Exec.playerId)
      : null;
    const baseCellSize = Str_NmyJ4kX
      ? zLCuf8c.getPlayer(Str_NmyJ4kX.playerId)
      : null;
    const combinedCameraDistanceThreshold =
      (drawMinimapInterval && this.color === drawMinimapInterval.cellColor) ||
      (baseCellSize && this.color === baseCellSize.cellColor);
    let combinedZoomFocusStrength;
    if (Mao5huZea938_run.cCustomCellColor && combinedCameraDistanceThreshold) {
      const combinedInterpSpeed = 10000 / Mao5huZea938_run.rRgbSpeed;
      const messageColors = performance.now() / combinedInterpSpeed;
      const MESSAGE_TYPES = ((Math.sin(messageColors) + 1) / 2) * 100;
      const CellVisibility = Pto5ea937_Inst.mix(
        Mao5huZea938_run.sRgbColor1,
        Mao5huZea938_run.sRgbColor2,
        MESSAGE_TYPES
      );
      combinedZoomFocusStrength = parseInt(
        CellVisibility.toHexString().substring(1),
        16
      );
    } else {
      if (this.pastelColor === null && this.color !== null) {
        const MassDisplayType = (this.color >> 16) & 255;
        const SKIN_LOAD_STATUS = (this.color >> 8) & 255;
        const PlayerState = this.color & 255;
        const defaultKeyMappings = Pto5ea937_Inst({
          r: MassDisplayType,
          g: SKIN_LOAD_STATUS,
          b: PlayerState,
        })
          .lighten(25)
          .desaturate(20);
        this.pastelColor = parseInt(
          defaultKeyMappings.toHexString().substring(1),
          16
        );
      }
      combinedZoomFocusStrength = this.pastelColor || this.color;
    }
    const defaultOptions = performance.now();
    const defaultSubPanelSettings = defaultOptions - this.spawnTime;
    const fontConfigs = 1000;
    const readAscii = Math.min(defaultSubPanelSettings / fontConfigs, 1);
    let readUtf16;
    if (readAscii < 1) {
      const MassDisplayType = (combinedZoomFocusStrength >> 16) & 255;
      const SKIN_LOAD_STATUS = (combinedZoomFocusStrength >> 8) & 255;
      const PlayerState = combinedZoomFocusStrength & 255;
      const writeAscii = 1 - Math.pow(1 - readAscii, 3);
      const writeUtf16 = 0.3;
      const byteToHex = writeUtf16 + (1 - writeUtf16) * writeAscii;
      const capitalize = Math.floor(MassDisplayType * byteToHex);
      const findServerByName = Math.floor(SKIN_LOAD_STATUS * byteToHex);
      const formatAliveTime = Math.floor(PlayerState * byteToHex);
      readUtf16 =
        (capitalize << 16) | (findServerByName << 8) | formatAliveTime;
    } else {
      readUtf16 = combinedZoomFocusStrength;
    }
    if (this.needsPixiUpdate) {
      let formatExperience = U0QG_Qf;
      if (this.skin >= 0 && this.skin < pQQAhea970_Tmp.length) {
        formatExperience = pQQAhea970_Tmp[this.skin];
      }
      if (this.sprite.texture !== formatExperience) {
        this.sprite.texture = formatExperience;
      }
      if (this.sprite.alpha !== AxisLockThreshold) {
        this.sprite.alpha = AxisLockThreshold;
      }
      const formatSnakeCaseString = this.size * 2;
      if (this.sprite.width !== formatSnakeCaseString) {
        this.sprite.width = formatSnakeCaseString;
        this.sprite.height = formatSnakeCaseString;
      }
      this.needsPixiUpdate = false;
    }
    if (this.sprite.tint !== readUtf16) {
      this.sprite.tint = readUtf16;
    }
    if (minimapSmoothFactor) {
      this.sprite.position.set(this.x, this.y);
    }
    if (this.sprite.zIndex !== this.size) {
      this.sprite.zIndex = this.size;
    }
  }
  getCellVisibility() {
    if (faCUfKea9fb_add().playerId === this.playerId) {
      return CellVisibility.SELF;
    }
    if (faCUfKea9fb_add().partyIds[this.playerId] != null) {
      return CellVisibility.PARTY;
    }
    return CellVisibility.ALL;
  }
  handlePlayerCell(
    AxisLockThreshold,
    minimapSmoothFactor,
    drawMinimapInterval
  ) {
    if (!this.container) {
      return;
    }
    const combinedCameraDistanceThreshold = zLCuf8c.getPlayerById(
      this.playerId
    );
    if (!combinedCameraDistanceThreshold) {
      return;
    }
    this.color = Pto5ea937_Inst(
      "#" +
        combinedCameraDistanceThreshold.cellColor.toString(16).padStart(6, "0")
    ).toHexString();
    const combinedZoomFocusStrength = 20;
    const combinedInterpSpeed = performance.now() - this.spawnTime;
    const messageColors = Math.min(
      combinedInterpSpeed / combinedZoomFocusStrength,
      1
    );
    const MESSAGE_TYPES = 1 - Math.pow(1 - messageColors, 3);
    if (!this.backgroundSprite) {
      this.backgroundSprite = new PIXI.Sprite(
        yield_a4eFrbK9_eaa07_Ret(baseCellSize)
      );
      this.backgroundSprite.anchor.set(0.5);
      this.container.addChildAt(this.backgroundSprite, 0);
    }
    if (!this.cellSprite) {
      this.cellSprite = new PIXI.Sprite(PIXI.Texture.EMPTY);
      this.cellSprite.anchor.set(0.5);
      this.cellSprite.width = baseCellSize * 2;
      this.cellSprite.height = baseCellSize * 2;
      this.container.addChild(this.cellSprite);
    }
    if (!this.skinSprite) {
      this.skinSprite = new PIXI.Sprite(PIXI.Texture.EMPTY);
      this.skinSprite.anchor.set(0.5);
      this.skinSprite.width = baseCellSize * 2;
      this.skinSprite.height = baseCellSize * 2;
      this.container.addChild(this.skinSprite);
    }
    if (!this.nameSprite) {
      this.nameSprite = new PIXI.Sprite(PIXI.Texture.EMPTY);
      this.nameSprite.anchor.set(0.5, 0.5);
      this.container.addChild(this.nameSprite);
    }
    if (!this.massSprite) {
      this.massSprite = new PIXI.Sprite(PIXI.Texture.EMPTY);
      this.massSprite.anchor.set(0.5, 0.5);
      this.container.addChild(this.massSprite);
    }
    const CellVisibility = this.getCellVisibility();
    const MassDisplayType = 4 / this.size;
    const SKIN_LOAD_STATUS =
      drawMinimapInterval.scale >= MassDisplayType * 4 ||
      Mao5huZea938_run.cDisableAutoNameHiding;
    const PlayerState =
      B5O8N2Mea93c_ret.levelNames >= CellVisibility &&
      SKIN_LOAD_STATUS &&
      combinedCameraDistanceThreshold.name.length > 0;
    const defaultKeyMappings =
      (CellVisibility <= B5O8N2Mea93c_ret.levelMass ||
        faCUfKea9fb_add().serverData.autosplits) &&
      SKIN_LOAD_STATUS;
    const defaultOptions = combinedCameraDistanceThreshold.spiked > 0;
    const defaultSubPanelSettings =
      !defaultOptions && B5O8N2Mea93c_ret.levelSkins >= CellVisibility;
    if (defaultOptions) {
      this.cellSprite.visible = true;
      this.backgroundSprite.visible = false;
      this.skinSprite.visible = false;
      const fontConfigs =
        combinedCameraDistanceThreshold.spiked === 1
          ? jW39BD0.getTexture("spikeTexture")
          : jW39BD0.getTexture("motherCellTexture");
      if (this.cellSprite.texture !== fontConfigs) {
        this.cellSprite.texture = fontConfigs;
      }
      if (this.cellSprite.tint !== 16777215) {
        this.cellSprite.tint = 16777215;
      }
    } else {
      this.cellSprite.visible = false;
      this.backgroundSprite.visible = true;
      const readAscii =
        this.playerId === If$sEyzqKbhea93f_Exec.playerId ||
        (Str_NmyJ4kX && this.playerId === Str_NmyJ4kX.playerId);
      let readUtf16;
      if (Mao5huZea938_run.cCustomCellColor && readAscii) {
        const writeAscii = 10000 / Mao5huZea938_run.rRgbSpeed;
        const writeUtf16 = performance.now() / writeAscii;
        const byteToHex = ((Math.sin(writeUtf16) + 1) / 2) * 100;
        const capitalize = Pto5ea937_Inst.mix(
          Mao5huZea938_run.sRgbColor1,
          Mao5huZea938_run.sRgbColor2,
          byteToHex
        );
        readUtf16 = parseInt(capitalize.toHexString().substring(1), 16);
      } else {
        readUtf16 = combinedCameraDistanceThreshold.cellColor;
      }
      const findServerByName = readUtf16;
      if (this.backgroundSprite.tint !== findServerByName) {
        this.backgroundSprite.tint = findServerByName;
      }
      const formatAliveTime = AxisLockThreshold * MESSAGE_TYPES;
      if (this.backgroundSprite.alpha !== formatAliveTime) {
        this.backgroundSprite.alpha = formatAliveTime;
      }
      const formatExperience = combinedCameraDistanceThreshold.getSkin();
      const formatSnakeCaseString =
        defaultSubPanelSettings && formatExperience && formatExperience.texture;
      this.skinSprite.visible = formatSnakeCaseString;
      if (formatSnakeCaseString) {
        const initFirebaseApp = formatExperience.isGif
          ? formatExperience.texture.getTexture()
          : formatExperience.texture;
        if (this.skinSprite.texture !== initFirebaseApp) {
          this.skinSprite.texture = initFirebaseApp;
        }
        this.skinSprite.alpha =
          (Mao5huZea938_run.cTransCells ? AxisLockThreshold : 1) *
          MESSAGE_TYPES;
      }
    }
    const initializeNord = Math.max(MassDisplayType, 0.16) * 4;
    this.nameSprite.visible = PlayerState;
    if (PlayerState) {
      const injectShadowStyle = Dom34uUv8$ea9b1_bool.getNameTexture(
        combinedCameraDistanceThreshold
      );
      if (this.nameSprite.texture !== injectShadowStyle) {
        this.nameSprite.texture = injectShadowStyle;
      }
      if (this.nameSprite.scale.x !== initializeNord) {
        this.nameSprite.scale.set(initializeNord);
      }
      const transformCellColor = combinedCameraDistanceThreshold.lowerName
        ? baseCellSize / 1.25 - this.nameSprite.height / 2
        : 0;
      if (this.nameSprite.y !== transformCellColor) {
        this.nameSprite.position.y = transformCellColor;
      }
    }
    this.massSprite.visible = defaultKeyMappings;
    if (defaultKeyMappings) {
      const Logger = this.getRealMass();
      if (this.massLastAmount !== Logger) {
        const defaultTheme =
          B5O8N2Mea93c_ret.massType === 1
            ? this.toShortString(Logger)
            : Logger.toString();
        const SERVER_PORT = Dom34uUv8$ea9b1_bool.getNameTexture({
          name: defaultTheme,
          nameColor: "#FFFFFF",
          nameFont: -1,
        });
        if (this.massSprite.texture !== SERVER_PORT) {
          this.massSprite.texture = SERVER_PORT;
        }
        this.massLastAmount = Logger;
      }
      if (this.massSprite.scale.x !== initializeNord) {
        this.massSprite.scale.set(initializeNord);
      }
      const CoKB = this.nameSprite.visible
        ? this.nameSprite.texture.height * this.nameSprite.scale.y
        : 0;
      const VuerW6rI_ea93a_neq =
        this.nameSprite.y +
        CoKB / 2 +
        (this.massSprite.texture.height * this.massSprite.scale.y) / 2;
      if (this.massSprite.y !== VuerW6rI_ea93a_neq) {
        this.massSprite.position.y = VuerW6rI_ea93a_neq;
      }
    }
    const DEFAULT$HB0T_ea93b_Status =
      If$sEyzqKbhea93f_Exec &&
      If$sEyzqKbhea93f_Exec.myCells.size > 0 &&
      Str_NmyJ4kX &&
      Str_NmyJ4kX.myCells.size > 0;
    const Date$F4EY = Mao5huZea938_run.cCellRing && DEFAULT$HB0T_ea93b_Status;
    const async_gvZqk_Dc_ea93e_div =
      (If$sEyzqKbhea93f_Exec &&
        combinedCameraDistanceThreshold.id ===
          If$sEyzqKbhea93f_Exec.playerId) ||
      (Str_NmyJ4kX &&
        combinedCameraDistanceThreshold.id === Str_NmyJ4kX.playerId);
    if (Date$F4EY && async_gvZqk_Dc_ea93e_div) {
      const VoidGBYH =
        faCUfKea9fb_add().playerId === combinedCameraDistanceThreshold.id;
      if (!this.ringSprite) {
        this.ringSprite = new PIXI.Graphics()
          .lineStyle(10, 16777215, Mao5huZea938_run.cTransCells ? 0.8 : 1)
          .drawCircle(0, 0, ((baseCellSize + 6) * 2 - 22) >> 1);
        this.container.addChild(this.ringSprite);
      }
      if (this.ringSprite.visible !== VoidGBYH) {
        this.ringSprite.visible = VoidGBYH;
      }
    } else if (this.ringSprite) {
      this.ringSprite.destroy(true);
      this.ringSprite = null;
    }
    const ObjectueAUtq = this.size / baseCellSize;
    const in_hpdqea943_div = ObjectueAUtq * MESSAGE_TYPES;
    if (this.container.scale.x !== in_hpdqea943_div) {
      this.container.scale.set(in_hpdqea943_div);
    }
    if (minimapSmoothFactor) {
      this.container.position.set(this.x, this.y);
    }
    this.needsPixiUpdate = false;
    const tRyea944_Id = defaultOptions ? this.size * 0.5 : this.size;
    if (this.container.zIndex !== tRyea944_Id) {
      this.container.zIndex = tRyea944_Id;
    }
  }
  updateNameEffect(AxisLockThreshold) {
    const minimapSmoothFactor =
      AxisLockThreshold.effect === 1 && _0x11F51[0] != null;
    if (minimapSmoothFactor) {
      if (!this.nameEffectSprite) {
        this.nameEffectSprite = new PIXI.Sprite(PIXI.Texture.EMPTY);
        this.nameSprite.addChild(this.nameEffectSprite);
      }
      if (!this.nameEffectSprite.visible) {
        this.nameEffectSprite.visible = true;
      }
      const drawMinimapInterval = _0x11F51[0].getTexture();
      if (this.nameEffectSprite.texture !== drawMinimapInterval) {
        this.nameEffectSprite.texture = drawMinimapInterval;
      }
      const baseCellSize =
        this.nameSprite.texture.width / drawMinimapInterval.width;
      const combinedCameraDistanceThreshold =
        this.nameSprite.texture.height / drawMinimapInterval.height;
      if (
        this.nameEffectSprite.scale.x !== baseCellSize ||
        this.nameEffectSprite.scale.y !== combinedCameraDistanceThreshold
      ) {
        this.nameEffectSprite.scale.set(
          baseCellSize,
          combinedCameraDistanceThreshold
        );
      }
    } else if (this.nameEffectSprite && this.nameEffectSprite.visible) {
      this.nameEffectSprite.visible = false;
    }
  }
  handleVirus(AxisLockThreshold, minimapSmoothFactor) {
    if (this.needsPixiUpdate) {
      this.sprite.anchor.set(0.5);
      const drawMinimapInterval = jW39BD0.getTexture("spikeTexture");
      if (this.sprite.texture !== drawMinimapInterval) {
        this.sprite.texture = drawMinimapInterval;
      }
      if (this.sprite.alpha !== AxisLockThreshold) {
        this.sprite.alpha = AxisLockThreshold;
      }
      this.needsPixiUpdate = false;
    }
    if (this._cachedData.lastSize !== this.size) {
      const baseCellSize = this.size / 256;
      if (this.sprite.scale.x !== baseCellSize) {
        this.sprite.scale.set(baseCellSize);
      }
      this._cachedData.lastSize = this.size;
    }
    if (minimapSmoothFactor) {
      this.sprite.position.set(this.x, this.y);
    }
    const combinedCameraDistanceThreshold = this.size;
    if (this.sprite.zIndex !== combinedCameraDistanceThreshold) {
      this.sprite.zIndex = combinedCameraDistanceThreshold;
    }
  }
  handleMotherCell(AxisLockThreshold, minimapSmoothFactor) {
    if (this.needsPixiUpdate) {
      const drawMinimapInterval = jW39BD0.getTexture("motherCellTexture");
      if (this.sprite.texture !== drawMinimapInterval) {
        this.sprite.texture = drawMinimapInterval;
      }
      this.setDefaultSpriteAnchor();
      if (this.sprite.alpha !== AxisLockThreshold) {
        this.sprite.alpha = AxisLockThreshold;
      }
      this.needsPixiUpdate = false;
    }
    if (this._cachedData.lastSize !== this.size) {
      const baseCellSize = this.size / 256;
      if (this.sprite.scale.x !== baseCellSize) {
        this.sprite.scale.set(baseCellSize);
      }
      this._cachedData.lastSize = this.size;
    }
    if (minimapSmoothFactor) {
      this.sprite.position.set(this.x, this.y);
    }
    const combinedCameraDistanceThreshold = this.size;
    if (this.sprite.zIndex !== combinedCameraDistanceThreshold) {
      this.sprite.zIndex = combinedCameraDistanceThreshold;
    }
  }
  setDefaultSpriteAnchor() {
    this.sprite.anchor.set(0.5);
    this.sprite.width = 128;
    this.sprite.height = 128;
  }
  onCreate(AxisLockThreshold) {
    jQuery_hn$0_2t_ea9b2_sub.register(this);
    if (this.type == 6) {
      AxisLockThreshold.foodObjects.set(this.id, this);
    } else {
      AxisLockThreshold.players.set(this.id, this);
    }
    if (this.playerId == AxisLockThreshold.playerId) {
      AxisLockThreshold.myCells.set(this.id, this);
    }
  }
  onDelete() {
    jQuery_hn$0_2t_ea9b2_sub.unregister(this);
  }
  destroyPixiObjects() {
    if (this.ringSprite) {
      this.ringSprite.destroy(true);
      this.ringSprite = null;
    }
    if (this.debuffSprite) {
      this.debuffSprite.destroy(true);
      this.debuffSprite = null;
    }
    if (this.shieldSprite) {
      this.shieldSprite.destroy(true);
      this.shieldSprite = null;
    }
    if (this.crownGraphic) {
      this.crownGraphic.destroy(true);
      this.crownGraphic = null;
    }
    if (this.nameEffectSprite) {
      this.nameEffectSprite.destroy(true);
      this.nameEffectSprite = null;
    }
    if (this.massText) {
      this.massText.destroy({
        texture: true,
        baseTexture: true,
      });
      this.massText = null;
    }
    if (this.container) {
      if (this.container.parent) {
        this.container.parent.removeChild(this.container);
      }
      this.container.destroy({
        children: true,
      });
      this.container = null;
    } else if (this.sprite) {
      if (this.sprite.parent) {
        this.sprite.parent.removeChild(this.sprite);
      }
      this.sprite.destroy({
        children: true,
      });
      this.sprite = null;
    }
    if (this.cache) {
      this.cache.destroy(true);
      this.cache = null;
    }
  }
}
class do_JMwG {
  constructor(AxisLockThreshold) {
    this.id = AxisLockThreshold;
    this.name = undefined;
    this.skin = undefined;
    this.skinCache = undefined;
    this.cellColor = undefined;
    this.nameColor = "#E0E0E0";
    this.flags = 0;
    this.effect = 0;
    this.nameFont = 0;
    this.lowerName = false;
    this.cacheUpdate = false;
    this.spiked = 0;
    this.seenByClient1 = false;
    this.seenByClient2 = false;
  }
  setFlags(AxisLockThreshold) {
    this.flags = AxisLockThreshold;
    if ((AxisLockThreshold & 8) !== 0) {
      this.spiked = 1;
    } else if ((AxisLockThreshold & 16) !== 0) {
      this.spiked = 2;
    } else {
      this.spiked = 0;
    }
  }
  parseEffect(AxisLockThreshold) {
    if (AxisLockThreshold >= 64) {
      this.lowerName = true;
      this.effect = AxisLockThreshold - 64;
    } else {
      this.lowerName = false;
      this.effect = AxisLockThreshold;
    }
  }
  setSkin(AxisLockThreshold) {
    if (!AxisLockThreshold || AxisLockThreshold.length === 0) {
      this.skin = null;
      this.skinCache = null;
      return;
    }
    if (AxisLockThreshold !== this.skin && !this.name.includes("🤖")) {
      this.skin = AxisLockThreshold;
      this.skinCache = null;
    }
  }
  async loadGifSkin(AxisLockThreshold) {
    try {
      const minimapSmoothFactor = await gifFrames({
        url: AxisLockThreshold,
        frames: "all",
        cumulative: false,
        outputType: "canvas",
      });
      const drawMinimapInterval = new rejea9ac_Key();
      drawMinimapInterval.loadFromFrameData(minimapSmoothFactor);
      RegExp_yFv[AxisLockThreshold] = SKIN_LOAD_STATUS.LOADED;
      AlIjpjxYea96e_Id[AxisLockThreshold] = {
        texture: drawMinimapInterval,
        hasTransparency: false,
        isGif: true,
      };
    } catch {
      this.skin = null;
      RegExp_yFv[AxisLockThreshold] = SKIN_LOAD_STATUS.ERROR;
    }
  }
  processLoadedTexture(...AxisLockThreshold) {
    AxisLockThreshold.length = 2;
    const minimapSmoothFactor = document.createElement("canvas");
    minimapSmoothFactor.width = AxisLockThreshold[1].width;
    minimapSmoothFactor.height = AxisLockThreshold[1].height;
    const drawMinimapInterval = minimapSmoothFactor.getContext("2d");
    drawMinimapInterval.beginPath();
    drawMinimapInterval.arc(
      AxisLockThreshold[1].width / 2,
      AxisLockThreshold[1].height / 2,
      Math.min(AxisLockThreshold[1].width, AxisLockThreshold[1].height) / 2,
      0,
      Math.PI * 2,
      false
    );
    drawMinimapInterval.closePath();
    drawMinimapInterval.clip();
    drawMinimapInterval.drawImage(
      AxisLockThreshold[1].baseTexture.resource.source,
      0,
      0
    );
    RegExp_yFv[AxisLockThreshold[0]] = SKIN_LOAD_STATUS.LOADED;
    AlIjpjxYea96e_Id[AxisLockThreshold[0]] = {
      texture: PIXI.Texture.from(minimapSmoothFactor),
      hasTransparency: true,
      isGif: false,
    };
  }
  async loadImageSkin(AxisLockThreshold) {
    return new Promise((minimapSmoothFactor, drawMinimapInterval) => {
      const baseCellSize = PIXI.Texture.from(AxisLockThreshold);
      if (baseCellSize.baseTexture.valid) {
        this.processLoadedTexture(AxisLockThreshold, baseCellSize);
        minimapSmoothFactor();
      } else {
        baseCellSize.baseTexture.once("update", () => {
          this.processLoadedTexture(AxisLockThreshold, baseCellSize);
          minimapSmoothFactor();
        });
        baseCellSize.baseTexture.once("error", (minimapSmoothFactor) => {
          console.error(
            "Failed to load skin: " + AxisLockThreshold,
            minimapSmoothFactor
          );
          RegExp_yFv[AxisLockThreshold] = SKIN_LOAD_STATUS.ERROR;
          this.skin = null;
          drawMinimapInterval(minimapSmoothFactor);
        });
      }
    });
  }
  getSkin() {
    if (this.skinCache && RegExp_yFv[this.skin] === SKIN_LOAD_STATUS.LOADED) {
      return this.skinCache;
    }
    if (!this.skin) {
      return null;
    }
    const AxisLockThreshold =
      "http://localhost:" +
      SERVER_PORT +
      "/cors/" +
      encodeURIComponent(this.skin);
    switch (RegExp_yFv[AxisLockThreshold]) {
      case undefined:
        RegExp_yFv[AxisLockThreshold] = SKIN_LOAD_STATUS.LOADING;
        if (this.skin.toLowerCase().endsWith(".gif")) {
          this.loadGifSkin(AxisLockThreshold);
        } else {
          this.loadImageSkin(AxisLockThreshold).catch(() => {});
        }
        break;
      case SKIN_LOAD_STATUS.LOADED:
        this.skinCache = AlIjpjxYea96e_Id[AxisLockThreshold];
        return this.skinCache;
      case SKIN_LOAD_STATUS.ERROR:
        this.skin = null;
        break;
    }
    return null;
  }
}
class letmwr {
  constructor() {
    this.players = new Map();
    this.defaultData = null;
    this.updatedPlayers = [];
    this.init();
  }
  init() {
    this.defaultData = new do_JMwG(0);
    this.defaultData.name = "";
    this.defaultData.cellColor = 11184810;
  }
  add(AxisLockThreshold) {
    this.players.set(AxisLockThreshold.id, AxisLockThreshold);
  }
  remove(AxisLockThreshold, minimapSmoothFactor) {
    const drawMinimapInterval = this.players.get(AxisLockThreshold);
    if (!drawMinimapInterval) {
      return;
    }
    if (minimapSmoothFactor === If$sEyzqKbhea93f_Exec) {
      drawMinimapInterval.seenByClient1 = false;
    } else if (minimapSmoothFactor === Str_NmyJ4kX) {
      drawMinimapInterval.seenByClient2 = false;
    }
    if (
      !drawMinimapInterval.seenByClient1 &&
      !drawMinimapInterval.seenByClient2
    ) {
      this.players.delete(AxisLockThreshold);
    }
  }
  clear() {
    this.players.clear();
    this.init();
  }
  getPlayer(AxisLockThreshold) {
    return this.players.get(AxisLockThreshold);
  }
  getPlayerById(AxisLockThreshold) {
    return this.players.get(AxisLockThreshold) ?? this.defaultData;
  }
  markUpdated(AxisLockThreshold) {
    if (!AxisLockThreshold.cacheUpdate) {
      AxisLockThreshold.cacheUpdate = true;
      this.updatedPlayers.push(AxisLockThreshold);
    }
  }
  processUpdates() {
    while (this.updatedPlayers.length > 0) {
      const AxisLockThreshold = this.updatedPlayers.shift();
      AxisLockThreshold.cacheUpdate = false;
    }
  }
}
class RETURN_FUB_ea9a9_Opt {
  constructor() {
    this.textureCache = new Map();
    this.rendererText = new PIXI.Text("", {});
  }
  _getCacheKey(...AxisLockThreshold) {
    AxisLockThreshold.length = 1;
    const minimapSmoothFactor =
      AxisLockThreshold[0].nameFont === -1
        ? {
            fontFamily: "Nordhealth Sans",
          }
        : fontConfigs[AxisLockThreshold[0].nameFont] || fontConfigs[0];
    return (
      "" +
      AxisLockThreshold[0].name +
      "|" +
      AxisLockThreshold[0].nameColor +
      "|" +
      minimapSmoothFactor.fontFamily +
      "|" +
      Mao5huZea938_run.rTextOutlines
    );
  }
  getNameTexture(AxisLockThreshold) {
    if (
      !AxisLockThreshold ||
      AxisLockThreshold.name === undefined ||
      AxisLockThreshold.name === null
    ) {
      return PIXI.Texture.EMPTY;
    }
    const minimapSmoothFactor = this._getCacheKey(AxisLockThreshold);
    if (this.textureCache.has(minimapSmoothFactor)) {
      return this.textureCache.get(minimapSmoothFactor);
    }
    const drawMinimapInterval = AxisLockThreshold.nameFont === -1;
    const baseCellSize = !drawMinimapInterval
      ? fontConfigs[AxisLockThreshold.nameFont] || fontConfigs[0]
      : null;
    const combinedCameraDistanceThreshold = !drawMinimapInterval
      ? AxisLockThreshold.nameFont === 0
      : false;
    if (drawMinimapInterval) {
      this.rendererText.style.fontFamily = "Nordhealth Sans";
      this.rendererText.style.fontWeight = "bold";
      this.rendererText.style.fontSize = 54;
      this.rendererText.style.fill = "#FFFFFF";
      this.rendererText.style.stroke = "black";
      this.rendererText.style.strokeThickness = Mao5huZea938_run.rTextOutlines;
    } else {
      this.rendererText.style.fontFamily = baseCellSize.fontFamily;
      this.rendererText.style.fontWeight = combinedCameraDistanceThreshold
        ? "bold"
        : "normal";
      this.rendererText.style.fontSize = baseCellSize.fontSize;
      this.rendererText.style.fill = AxisLockThreshold.nameColor;
      this.rendererText.style.stroke = baseCellSize.outlineColor;
      this.rendererText.style.strokeThickness = combinedCameraDistanceThreshold
        ? Mao5huZea938_run.rTextOutlines
        : 9;
    }
    this.rendererText.text = AxisLockThreshold.name.includes("🤖")
      ? "🤖"
      : AxisLockThreshold.name;
    this.rendererText.updateText(true);
    const combinedZoomFocusStrength = PIXI.RenderTexture.create({
      width: this.rendererText.width,
      height: this.rendererText.height,
      resolution: Date$F4EY.renderer.resolution,
    });
    Date$F4EY.renderer.render(this.rendererText, {
      renderTexture: combinedZoomFocusStrength,
    });
    this.textureCache.set(minimapSmoothFactor, combinedZoomFocusStrength);
    return combinedZoomFocusStrength;
  }
  invalidateCache() {
    this.textureCache.clear();
    Logger.info("NameCacheManager cache invalidated.");
  }
}
class E0Pea9aa_Cfg {
  constructor() {}
  handshakeStart(...AxisLockThreshold) {
    AxisLockThreshold.length = 0;
    AxisLockThreshold.a = new ArrayBuffer(17);
    AxisLockThreshold[93] = new DataView(AxisLockThreshold.a);
    AxisLockThreshold[93].setUint8(0, 255);
    AxisLockThreshold[93].setUint8(1, 6);
    writeAscii(2, AxisLockThreshold[93], "Gota Web 3.6.5");
    return AxisLockThreshold.a;
  }
  setName(...AxisLockThreshold) {
    AxisLockThreshold.length = 1;
    AxisLockThreshold.a = new ArrayBuffer(
      2 + (AxisLockThreshold[0].length + 1) * 2
    );
    AxisLockThreshold[123] = new DataView(AxisLockThreshold.a);
    AxisLockThreshold[123].setUint8(0, 0);
    writeUtf16(1, AxisLockThreshold[123], AxisLockThreshold[0]);
    if (Mao5huZea938_run.cSilentLogin) {
      AxisLockThreshold[123].setUint8(
        2 + AxisLockThreshold[0].length * 2 + 1,
        1
      );
    }
    return AxisLockThreshold.a;
  }
  sendKey(...AxisLockThreshold) {
    AxisLockThreshold.length = 1;
    AxisLockThreshold[-134] = new ArrayBuffer(1);
    AxisLockThreshold[2] = new DataView(AxisLockThreshold[-134]);
    AxisLockThreshold[2].setUint8(0, AxisLockThreshold[0]);
    return AxisLockThreshold[-134];
  }
  sendMouse(...AxisLockThreshold) {
    AxisLockThreshold.length = 2;
    AxisLockThreshold[184] = new ArrayBuffer(9);
    AxisLockThreshold[3] = new DataView(AxisLockThreshold[184]);
    AxisLockThreshold[3].setUint8(0, 16);
    AxisLockThreshold[3].setInt32(1, AxisLockThreshold[0], true);
    AxisLockThreshold[3].setInt32(5, AxisLockThreshold[1], true);
    return AxisLockThreshold[184];
  }
  sendEjectMass(...AxisLockThreshold) {
    AxisLockThreshold.length = 1;
    AxisLockThreshold[1] = new ArrayBuffer(1);
    AxisLockThreshold[94] = new DataView(AxisLockThreshold[1]);
    AxisLockThreshold[94].setUint8(0, AxisLockThreshold[0] ? 3 : 4);
    return AxisLockThreshold[1];
  }
  sendPing(...AxisLockThreshold) {
    AxisLockThreshold.length = 0;
    AxisLockThreshold[56] = new ArrayBuffer(1);
    AxisLockThreshold[-144] = new DataView(AxisLockThreshold[56]);
    AxisLockThreshold[-144].setUint8(0, 71);
    return AxisLockThreshold[56];
  }
  sendSpectate(...AxisLockThreshold) {
    AxisLockThreshold.length = 1;
    AxisLockThreshold.a = new ArrayBuffer(3);
    AxisLockThreshold[110] = new DataView(AxisLockThreshold.a);
    AxisLockThreshold[110].setUint8(0, 1);
    if (AxisLockThreshold[0]) {
      AxisLockThreshold[110].setUint16(1, AxisLockThreshold[0], true);
    }
    return AxisLockThreshold.a;
  }
  sendChat(...AxisLockThreshold) {
    AxisLockThreshold.length = 2;
    AxisLockThreshold.a = new ArrayBuffer(
      2 + (AxisLockThreshold[0].length + 1) * 2
    );
    AxisLockThreshold[3] = new DataView(AxisLockThreshold.a);
    AxisLockThreshold[3].setUint8(0, 72);
    AxisLockThreshold[3].setUint8(1, AxisLockThreshold[1]);
    writeUtf16(2, AxisLockThreshold[3], AxisLockThreshold[0]);
    return AxisLockThreshold.a;
  }
  sendInviteResponse(...AxisLockThreshold) {
    AxisLockThreshold.length = 1;
    AxisLockThreshold.a = new ArrayBuffer(2);
    AxisLockThreshold[18] = new DataView(AxisLockThreshold.a);
    AxisLockThreshold[18].setUint8(0, 41);
    AxisLockThreshold[18].setUint8(1, AxisLockThreshold[0] ? 1 : 0);
    return AxisLockThreshold.a;
  }
  sendPartyAction(...AxisLockThreshold) {
    AxisLockThreshold.length = 2;
    const minimapSmoothFactor = new ArrayBuffer(6);
    const drawMinimapInterval = new DataView(minimapSmoothFactor);
    drawMinimapInterval.setUint8(0, 40);
    drawMinimapInterval.setUint8(1, AxisLockThreshold[0]);
    drawMinimapInterval.setUint32(2, AxisLockThreshold[1], true);
    return minimapSmoothFactor;
  }
  sendPartyJoin(...AxisLockThreshold) {
    AxisLockThreshold.length = 1;
    AxisLockThreshold[-227] = new ArrayBuffer(
      1 + AxisLockThreshold[0].length + 1
    );
    AxisLockThreshold[48] = new DataView(AxisLockThreshold[-227]);
    AxisLockThreshold[48].setUint8(0, 42);
    writeAscii(1, AxisLockThreshold[48], AxisLockThreshold[0]);
    return AxisLockThreshold[-227];
  }
  sendShowProfile(...AxisLockThreshold) {
    AxisLockThreshold.length = 1;
    AxisLockThreshold[-17] = new ArrayBuffer(3);
    AxisLockThreshold.b = new DataView(AxisLockThreshold[-17]);
    AxisLockThreshold.b.setUint8(0, 103);
    AxisLockThreshold.b.setUint16(1, AxisLockThreshold[0], true);
    return AxisLockThreshold[-17];
  }
  sendWhisper(...AxisLockThreshold) {
    AxisLockThreshold.length = 2;
    AxisLockThreshold[2] = new ArrayBuffer(
      5 + (AxisLockThreshold[1].length + 1) * 2
    );
    AxisLockThreshold[3] = new DataView(AxisLockThreshold[2]);
    AxisLockThreshold[3].setUint8(0, 73);
    AxisLockThreshold[3].setUint32(1, AxisLockThreshold[0], true);
    writeUtf16(5, AxisLockThreshold[3], AxisLockThreshold[1]);
    return AxisLockThreshold[2];
  }
  sendSubPanel(...AxisLockThreshold) {
    AxisLockThreshold.length = 0;
    AxisLockThreshold.b = new ArrayBuffer(
      8 + (VuerW6rI_ea93a_neq.skinName.length + 1)
    );
    AxisLockThreshold[1] = new DataView(AxisLockThreshold.b);
    AxisLockThreshold[1].setUint8(0, 10);
    AxisLockThreshold[1].setUint8(1, VuerW6rI_ea93a_neq.nameColor.r);
    AxisLockThreshold[1].setUint8(2, VuerW6rI_ea93a_neq.nameColor.g);
    AxisLockThreshold[1].setUint8(3, VuerW6rI_ea93a_neq.nameColor.b);
    AxisLockThreshold[1].setUint8(4, VuerW6rI_ea93a_neq.chatColor);
    AxisLockThreshold[1].setUint8(5, VuerW6rI_ea93a_neq.effect);
    AxisLockThreshold[1].setUint8(6, VuerW6rI_ea93a_neq.lowerName ? 1 : 0);
    writeAscii(7, AxisLockThreshold[1], VuerW6rI_ea93a_neq.skinName);
    AxisLockThreshold[1].setUint8(
      8 + VuerW6rI_ea93a_neq.skinName.length,
      VuerW6rI_ea93a_neq.nameFont
    );
    return AxisLockThreshold.b;
  }
  sendLockedNameChange(...AxisLockThreshold) {
    AxisLockThreshold.length = 1;
    AxisLockThreshold[189] = new ArrayBuffer(
      1 + (AxisLockThreshold[0].length + 1)
    );
    AxisLockThreshold[224] = new DataView(AxisLockThreshold[189]);
    AxisLockThreshold[224].setUint8(0, 11);
    writeAscii(1, AxisLockThreshold[224], AxisLockThreshold[0]);
    return AxisLockThreshold[189];
  }
  sendOptions(...AxisLockThreshold) {
    AxisLockThreshold.length = 0;
    AxisLockThreshold.a = new ArrayBuffer(3);
    AxisLockThreshold.b = new DataView(AxisLockThreshold.a);
    AxisLockThreshold.b.setUint8(0, 104);
    AxisLockThreshold.b.setUint16(1, Mao5huZea938_run.rViewDistance, true);
    return AxisLockThreshold.a;
  }
  sendQueue(...AxisLockThreshold) {
    AxisLockThreshold.length = 1;
    AxisLockThreshold.a = new ArrayBuffer(5);
    AxisLockThreshold[-239] = new DataView(AxisLockThreshold.a);
    AxisLockThreshold[-239].setUint8(0, 80);
    AxisLockThreshold[-239].setUint8(1, AxisLockThreshold[0]);
    AxisLockThreshold[-239].setUint8(2, 0);
    AxisLockThreshold[-239].setUint16(3, 0);
    return AxisLockThreshold.a;
  }
  sendCustomGame(...AxisLockThreshold) {
    AxisLockThreshold.length = 1;
    AxisLockThreshold[1] = new ArrayBuffer(2);
    AxisLockThreshold.b = new DataView(AxisLockThreshold[1]);
    AxisLockThreshold.b.setUint8(0, 90);
    AxisLockThreshold.b.setUint8(1, AxisLockThreshold[0]);
    return AxisLockThreshold[1];
  }
  sendLeaveMatch(...AxisLockThreshold) {
    AxisLockThreshold.length = 0;
    AxisLockThreshold.a = new ArrayBuffer(1);
    AxisLockThreshold[59] = new DataView(AxisLockThreshold.a);
    AxisLockThreshold[59].setUint8(0, 81);
    return AxisLockThreshold.a;
  }
  sendShowLobbies(...AxisLockThreshold) {
    AxisLockThreshold.length = 0;
    AxisLockThreshold[233] = new ArrayBuffer(2);
    AxisLockThreshold[189] = new DataView(AxisLockThreshold[233]);
    AxisLockThreshold[189].setUint8(0, 93);
    return AxisLockThreshold[233];
  }
  sendJoinLobby(...AxisLockThreshold) {
    AxisLockThreshold.length = 2;
    AxisLockThreshold[2] = new ArrayBuffer(
      5 + (AxisLockThreshold[1].length * 2 + 2)
    );
    AxisLockThreshold.b = new DataView(AxisLockThreshold[2]);
    AxisLockThreshold.b.setUint8(0, 94);
    AxisLockThreshold.b.setUint32(1, AxisLockThreshold[0], true);
    writeUtf16(5, AxisLockThreshold.b, AxisLockThreshold[1]);
    return AxisLockThreshold[2];
  }
  sendAuthToken(...AxisLockThreshold) {
    AxisLockThreshold.length = 1;
    AxisLockThreshold[1] = new ArrayBuffer(
      1 + (AxisLockThreshold[0].length + 1)
    );
    AxisLockThreshold[2] = new DataView(AxisLockThreshold[1]);
    AxisLockThreshold[2].setUint8(0, 101);
    writeAscii(1, AxisLockThreshold[2], AxisLockThreshold[0]);
    return AxisLockThreshold[1];
  }
}
class VoidNKXXxGq_ea9ab_gte {
  constructor({
    name: AxisLockThreshold,
    address: minimapSmoothFactor,
    players: drawMinimapInterval,
    bots: baseCellSize,
    playerText: combinedCameraDistanceThreshold,
    gamemode: combinedZoomFocusStrength,
    region: combinedInterpSpeed,
    ssl: messageColors,
    order: MESSAGE_TYPES,
  }) {
    this.name = AxisLockThreshold;
    this.ip = minimapSmoothFactor;
    this.players = drawMinimapInterval;
    this.bots = baseCellSize;
    this.playerText = combinedCameraDistanceThreshold;
    this.mode = combinedZoomFocusStrength;
    this.region = combinedInterpSpeed;
    this.ssl = messageColors;
    this.order = MESSAGE_TYPES;
  }
}
class rejea9ac_Key {
  constructor() {
    this.delay = 0;
    this.frames = [];
    this.isGif = true;
  }
  push(AxisLockThreshold) {
    this.frames.push(AxisLockThreshold);
  }
  getFrame(AxisLockThreshold) {
    return this.frames[AxisLockThreshold];
  }
  get length() {
    return this.frames.length;
  }
  getTexture() {
    const AxisLockThreshold =
      Math.floor(JcVea978_neq / this.delay) % this.length;
    return this.getFrame(AxisLockThreshold);
  }
  loadFromFrameData(AxisLockThreshold) {
    if (!AxisLockThreshold.length) {
      return;
    }
    const minimapSmoothFactor = AxisLockThreshold[0].getImage().width;
    const drawMinimapInterval = AxisLockThreshold[0].getImage().height;
    const baseCellSize = document.createElement("canvas");
    const combinedCameraDistanceThreshold = document.createElement("canvas");
    baseCellSize.width = combinedCameraDistanceThreshold.width =
      minimapSmoothFactor;
    baseCellSize.height = combinedCameraDistanceThreshold.height =
      drawMinimapInterval;
    const combinedZoomFocusStrength = baseCellSize.getContext("2d");
    const combinedInterpSpeed =
      combinedCameraDistanceThreshold.getContext("2d");
    this.delay = AxisLockThreshold[0].frameInfo.delay * 10;
    for (const messageColors of AxisLockThreshold) {
      combinedZoomFocusStrength.clearRect(
        0,
        0,
        minimapSmoothFactor,
        drawMinimapInterval
      );
      combinedZoomFocusStrength.drawImage(
        combinedCameraDistanceThreshold,
        0,
        0
      );
      const MESSAGE_TYPES = messageColors.getImage();
      combinedInterpSpeed.drawImage(MESSAGE_TYPES, 0, 0);
      const CellVisibility = PIXI.Texture.from(MESSAGE_TYPES);
      this.push(CellVisibility);
      const {
        disposal: MassDisplayType,
        x: SKIN_LOAD_STATUS,
        y: PlayerState,
        width: defaultKeyMappings,
        height: defaultOptions,
      } = messageColors.frameInfo;
      if (MassDisplayType === 2) {
        combinedInterpSpeed.clearRect(
          SKIN_LOAD_STATUS,
          PlayerState,
          defaultKeyMappings,
          defaultOptions
        );
      } else if (MassDisplayType === 3) {
        combinedInterpSpeed.clearRect(
          0,
          0,
          minimapSmoothFactor,
          drawMinimapInterval
        );
        combinedInterpSpeed.drawImage(baseCellSize, 0, 0);
      }
    }
  }
}
class Const$Uy1yu {
  constructor() {
    this.cells = new Map();
    this.dyingCells = new Map();
  }
  cancelDeathAnimation(AxisLockThreshold) {
    const minimapSmoothFactor = this.dyingCells.get(AxisLockThreshold);
    if (minimapSmoothFactor) {
      minimapSmoothFactor.cell.destroyPixiObjects();
      this.dyingCells.delete(AxisLockThreshold);
    }
  }
  get allCells() {
    return Array.from(
      this.cells.values(),
      Object$kDcGWUY((...AxisLockThreshold) => {
        AxisLockThreshold.length = 1;
        return AxisLockThreshold[0].cell;
      })
    );
  }
  get(AxisLockThreshold) {
    const minimapSmoothFactor = this.cells.get(AxisLockThreshold);
    if (minimapSmoothFactor) {
      return minimapSmoothFactor.cell;
    }
    const drawMinimapInterval = this.dyingCells.get(AxisLockThreshold);
    if (drawMinimapInterval) {
      return drawMinimapInterval.cell;
    } else {
      return undefined;
    }
  }
  register(AxisLockThreshold) {
    const minimapSmoothFactor = this.cells.get(AxisLockThreshold.id);
    if (minimapSmoothFactor) {
      minimapSmoothFactor.refCount++;
    } else {
      AxisLockThreshold.createPixiObjects();
      this.cells.set(AxisLockThreshold.id, {
        cell: AxisLockThreshold,
        refCount: 1,
      });
    }
    return AxisLockThreshold;
  }
  unregister(AxisLockThreshold) {
    const minimapSmoothFactor = this.cells.get(AxisLockThreshold.id);
    if (!minimapSmoothFactor) {
      return;
    }
    minimapSmoothFactor.refCount--;
    if (minimapSmoothFactor.refCount <= 0) {
      this.cells.delete(AxisLockThreshold.id);
      const drawMinimapInterval =
        AxisLockThreshold.container || AxisLockThreshold.sprite;
      if (!drawMinimapInterval) {
        AxisLockThreshold.destroyPixiObjects();
        return;
      }
      const baseCellSize =
        Mao5huZea938_run.rCombinedViewportScale > 0
          ? yZBjeytPea960_Cb
          : WeakMapxkJW_ea95d_bool;
      const combinedCameraDistanceThreshold =
        window.innerWidth / 2 / baseCellSize;
      const combinedZoomFocusStrength = window.innerHeight / 2 / baseCellSize;
      const combinedInterpSpeed =
        bXFgW$Qq.pivot.x - combinedCameraDistanceThreshold;
      const messageColors = bXFgW$Qq.pivot.x + combinedCameraDistanceThreshold;
      const MESSAGE_TYPES = bXFgW$Qq.pivot.y - combinedZoomFocusStrength;
      const CellVisibility = bXFgW$Qq.pivot.y + combinedZoomFocusStrength;
      const MassDisplayType = AxisLockThreshold.size_ || 10;
      const SKIN_LOAD_STATUS =
        AxisLockThreshold.x + MassDisplayType > combinedInterpSpeed &&
        AxisLockThreshold.x - MassDisplayType < messageColors &&
        AxisLockThreshold.y + MassDisplayType > MESSAGE_TYPES &&
        AxisLockThreshold.y - MassDisplayType < CellVisibility;
      if (SKIN_LOAD_STATUS) {
        New_cKB3q5G_ea986_cb.addChild(drawMinimapInterval);
        this.dyingCells.set(AxisLockThreshold.id, {
          cell: AxisLockThreshold,
          startTime: performance.now(),
          initialScaleX: drawMinimapInterval.scale.x,
          initialScaleY: drawMinimapInterval.scale.y,
        });
      } else {
        AxisLockThreshold.destroyPixiObjects();
      }
    }
  }
}
class Ls_ea9ae_Init {
  static get player() {
    return faCUfKea9fb_add();
  }
  static msg(AxisLockThreshold) {
    this.player.selfMsg(AxisLockThreshold);
  }
  static send(AxisLockThreshold) {
    this.player.sendPacket(AxisLockThreshold);
  }
  static parseId(...AxisLockThreshold) {
    AxisLockThreshold.length = 1;
    const minimapSmoothFactor = parseInt(AxisLockThreshold[0], 10);
    if (isNaN(minimapSmoothFactor)) {
      return null;
    } else {
      return minimapSmoothFactor;
    }
  }
}
class jQueryLzNd {
  static #modalStack = [];
  static #openModals = new Set();
  static #bodyScrollLocked = false;
  static config = {
    mainModal: {
      onOpen: Proto$L05X_ea9c6_sub,
      onClose: Proto$L05X_ea9c6_sub,
      closeOnEsc: false,
      closeOnBackdrop: false,
    },
  };
  static open(AxisLockThreshold) {
    const minimapSmoothFactor = document.getElementById(AxisLockThreshold);
    if (!minimapSmoothFactor) {
      console.error('Modal "' + AxisLockThreshold + '" not found');
      return false;
    }
    if (this.#openModals.has(AxisLockThreshold)) {
      return false;
    }
    const drawMinimapInterval =
      this.#modalStack.length > 0
        ? this.#modalStack[this.#modalStack.length - 1]
        : null;
    this.#modalStack.push(AxisLockThreshold);
    this.#openModals.add(AxisLockThreshold);
    minimapSmoothFactor.setAttribute("open", "");
    if (!this.#bodyScrollLocked) {
      document.body.classList.add("modal-open");
      this.#bodyScrollLocked = true;
    }
    if (drawMinimapInterval) {
      const baseCellSize = document.getElementById(drawMinimapInterval);
      baseCellSize.classList.add("modal-inactive");
    }
    this.config[AxisLockThreshold]?.onOpen?.();
    return true;
  }
  static close(AxisLockThreshold) {
    if (this.activeModal && AxisLockThreshold !== this.activeModal) {
      return this.close(this.activeModal);
    }
    if (!this.#openModals.has(AxisLockThreshold)) {
      return false;
    }
    const minimapSmoothFactor = document.getElementById(AxisLockThreshold);
    if (!minimapSmoothFactor) {
      return false;
    }
    const drawMinimapInterval = this.#modalStack.indexOf(AxisLockThreshold);
    if (drawMinimapInterval !== -1) {
      this.#modalStack.splice(drawMinimapInterval, 1);
    }
    minimapSmoothFactor.removeAttribute("open");
    minimapSmoothFactor.classList.remove("modal-inactive");
    this.#openModals.delete(AxisLockThreshold);
    if (this.#modalStack.length > 0) {
      const baseCellSize = this.#modalStack[this.#modalStack.length - 1];
      const combinedCameraDistanceThreshold =
        document.getElementById(baseCellSize);
      combinedCameraDistanceThreshold.classList.remove("modal-inactive");
    } else if (this.#bodyScrollLocked) {
      document.body.classList.remove("modal-open");
      this.#bodyScrollLocked = false;
    }
    this.config[AxisLockThreshold]?.onClose?.();
    return true;
  }
  static closeAll() {
    while (this.#modalStack.length > 0) {
      this.close(this.#modalStack[this.#modalStack.length - 1]);
    }
  }
  static isOpen(AxisLockThreshold) {
    return this.#openModals.has(AxisLockThreshold);
  }
  static get activeModal() {
    if (this.#modalStack.length > 0) {
      return this.#modalStack[this.#modalStack.length - 1];
    } else {
      return null;
    }
  }
  static get modalCount() {
    return this.#modalStack.length;
  }
}
const zLCuf8c = new letmwr();
const Dom34uUv8$ea9b1_bool = new RETURN_FUB_ea9a9_Opt();
const jQuery_hn$0_2t_ea9b2_sub = new Const$Uy1yu();
const StringifyQqsoaEea9b3_Handler = [
  {
    description: "Whisper a player by ID",
    triggers: ["whisper", "t", "w"],
    action: ([AxisLockThreshold, ...minimapSmoothFactor]) => {
      const drawMinimapInterval = Ls_ea9ae_Init.parseId(AxisLockThreshold);
      if (!drawMinimapInterval) {
        return Ls_ea9ae_Init.msg("Invalid player ID.");
      }
      const baseCellSize = minimapSmoothFactor.join(" ");
      if (!baseCellSize) {
        return;
      }
      Ls_ea9ae_Init.send(
        VoidGBYH.sendWhisper(drawMinimapInterval, baseCellSize)
      );
      CtxBk7q_("/t " + drawMinimapInterval + " ");
    },
  },
  {
    description: "Reply to previous whisper",
    triggers: ["reply", "r"],
    action: Object$kDcGWUY((...AxisLockThreshold) => {
      AxisLockThreshold.length = 1;
      const minimapSmoothFactor = AxisLockThreshold[0].join(" ");
      if (minimapSmoothFactor) {
        Ls_ea9ae_Init.send(VoidGBYH.sendWhisper(0, minimapSmoothFactor));
        CtxBk7q_("/r ");
      }
    }),
  },
  {
    description: "Message your party",
    triggers: ["party", "p"],
    action: Object$kDcGWUY((...AxisLockThreshold) => {
      AxisLockThreshold.length = 1;
      const minimapSmoothFactor = AxisLockThreshold[0].join(" ");
      if (minimapSmoothFactor) {
        Ls_ea9ae_Init.send(VoidGBYH.sendChat(minimapSmoothFactor, 1));
        CtxBk7q_("/p ");
      }
    }),
  },
  {
    description: "Invite player to party",
    triggers: ["invite", "i"],
    action: ([AxisLockThreshold]) => {
      if (!Get_OCOyLea9e4_Init()) {
        return;
      }
      KEGPXBW(0, AxisLockThreshold);
    },
  },
  {
    description: "Leave party",
    triggers: ["leave", "l"],
    action: () => {
      return Ls_ea9ae_Init.send(VoidGBYH.sendPartyAction(3, 0));
    },
  },
  {
    description: "Kick from party",
    triggers: ["kick"],
    action: ([AxisLockThreshold]) => {
      if (!Get_OCOyLea9e4_Init()) {
        return;
      }
      KEGPXBW(1, AxisLockThreshold);
    },
  },
  {
    description: "Clear chat",
    triggers: ["clear"],
    action: (...AxisLockThreshold) => {
      AxisLockThreshold.length = 0;
      const minimapSmoothFactor = document.getElementById("chatAll");
      if (minimapSmoothFactor) {
        minimapSmoothFactor.innerHTML = "";
      }
    },
  },
  {
    description: "Show your ID",
    triggers: ["info"],
    action: (...AxisLockThreshold) => {
      AxisLockThreshold.length = 0;
      const minimapSmoothFactor = faCUfKea9fb_add().playerId;
      Ls_ea9ae_Init.msg(
        minimapSmoothFactor > 0
          ? "Your ID is " + minimapSmoothFactor
          : "You must be connected."
      );
    },
  },
  {
    description: "Join party by code",
    triggers: ["join", "j"],
    action: ([AxisLockThreshold]) => {
      if (AxisLockThreshold) {
        Ls_ea9ae_Init.send(VoidGBYH.sendPartyJoin(AxisLockThreshold));
      }
    },
  },
  {
    description:
      "Make Player 2 join a party by code (leaves current party if needed)",
    triggers: ["join2", "j2"],
    async action([AxisLockThreshold]) {
      if (!AxisLockThreshold) {
        Ls_ea9ae_Init.msg("Usage: /join2 [party_code]");
        return;
      }
      if (!Str_NmyJ4kX || !Str_NmyJ4kX.isConnected()) {
        Ls_ea9ae_Init.msg("Player 2 is not connected.");
        return;
      }
      try {
        if (Str_NmyJ4kX.party.length > 0) {
          Ls_ea9ae_Init.msg(
            "Player 2 is in a party. Leaving current party first..."
          );
          Str_NmyJ4kX.sendPacket(VoidGBYH.sendPartyAction(3, 0));
          await new Promise(
            Object$kDcGWUY((...AxisLockThreshold) => {
              AxisLockThreshold.length = 1;
              return setTimeout(AxisLockThreshold[0], 200);
            })
          );
        }
        Ls_ea9ae_Init.msg(
          "Player 2 attempting to join party: " + AxisLockThreshold
        );
        Str_NmyJ4kX.sendPacket(VoidGBYH.sendPartyJoin(AxisLockThreshold));
      } catch (minimapSmoothFactor) {
        Ls_ea9ae_Init.msg("An error occurred while trying to join the party.");
        console.error(minimapSmoothFactor);
      }
    },
  },
  {
    description: "Set party to private",
    triggers: ["private"],
    action: () => {
      return Ls_ea9ae_Init.send(VoidGBYH.sendPartyAction(4, 1));
    },
  },
  {
    description: "Set party to public",
    triggers: ["public"],
    action: () => {
      return Ls_ea9ae_Init.send(VoidGBYH.sendPartyAction(4, 0));
    },
  },
  {
    description: "Spectate a player",
    triggers: ["spectate", "s"],
    action: ([AxisLockThreshold]) => {
      const minimapSmoothFactor = Ls_ea9ae_Init.parseId(AxisLockThreshold);
      if (!minimapSmoothFactor) {
        return If$sEyzqKbhea93f_Exec.selfMsg("Invalid ID.");
      }
      If$sEyzqKbhea93f_Exec.sendPacket(
        VoidGBYH.sendSpectate(minimapSmoothFactor)
      );
    },
  },
  {
    description: "Disconnect",
    triggers: ["disconnect"],
    action: () => {
      return faCUfKea9fb_add().disconnect();
    },
  },
  {
    description: "Show account UID",
    triggers: ["account"],
    action: () => {
      Ls_ea9ae_Init.msg(
        AtgnhF ? "UID: " + AtgnhF.uid : "You are not logged in."
      );
    },
  },
  {
    description: "Block or unblock a player",
    triggers: ["block", "b"],
    action: ([AxisLockThreshold]) => {
      const minimapSmoothFactor = Ls_ea9ae_Init.parseId(AxisLockThreshold);
      if (minimapSmoothFactor) {
        Ls_ea9ae_Init.msg(bmBtnjkeaa09_or(minimapSmoothFactor));
      }
    },
  },
];
const jW39BD0 = {
  textures: new Map(),
  loadingPromises: new Map(),
  async preloadTexture(AxisLockThreshold, minimapSmoothFactor) {
    if (this.loadingPromises.has(AxisLockThreshold)) {
      return this.loadingPromises.get(AxisLockThreshold);
    }
    const drawMinimapInterval = new Promise(
      Object$kDcGWUY((...drawMinimapInterval) => {
        drawMinimapInterval.length = 2;
        const baseCellSize = PIXI.Texture.from(minimapSmoothFactor);
        baseCellSize.baseTexture.on("loaded", () => {
          this.textures.set(AxisLockThreshold, baseCellSize);
          drawMinimapInterval[0](baseCellSize);
        });
        baseCellSize.baseTexture.on(
          "error",
          Object$kDcGWUY((...baseCellSize) => {
            baseCellSize.length = 1;
            return drawMinimapInterval[1](baseCellSize[0]);
          })
        );
      }, 2)
    );
    this.loadingPromises.set(AxisLockThreshold, drawMinimapInterval);
    return drawMinimapInterval;
  },
  getTexture(AxisLockThreshold) {
    return this.textures.get(AxisLockThreshold);
  },
  clearUnusedTextures() {
    for (const [AxisLockThreshold, minimapSmoothFactor] of this.textures) {
      if (!minimapSmoothFactor.baseTexture.used) {
        minimapSmoothFactor.destroy(true);
        this.textures.delete(AxisLockThreshold);
      }
    }
  },
  async preloadGameAssets() {
    try {
      await Promise.all([
        this.preloadTexture("spikeTexture", "images/spike.png"),
        this.preloadTexture("motherCellTexture", "images/motherCell.png"),
      ]);
      Logger.info("Game assets preloaded successfully");
    } catch (AxisLockThreshold) {
      console.error("--- Error During preloadGameAssets ---");
      console.error("Caught Object Type:", typeof AxisLockThreshold);
      console.error(
        "Caught Object Is Error Instance:",
        AxisLockThreshold instanceof Error
      );
      console.error(
        "Caught Object toString():",
        AxisLockThreshold ? AxisLockThreshold.toString() : "N/A"
      );
      if (AxisLockThreshold instanceof Error) {
        console.error("Error Message:", AxisLockThreshold.message);
        console.error("Error Stack:", AxisLockThreshold.stack);
      }
      console.error("Full Caught Object:", AxisLockThreshold);
    }
  },
};
const VJjDr = {
  playerStates: {
    p1: {
      state: "idle",
      pendingSplitCount: 0,
      packetTimer: null,
      mouseFreezeBackup: false,
    },
    p2: {
      state: "idle",
      pendingSplitCount: 0,
      packetTimer: null,
      mouseFreezeBackup: false,
    },
  },
  trajectoryLine: null,
  stateIndicator: null,
  axisIndicator: null,
  animationTimer: 0,
  animationDuration: 1.25,
  maxLineLength: 4000,
  activationDelay: 250,
  _getActivePlayerState: function (AxisLockThreshold) {
    if (!AxisLockThreshold) {
      return null;
    }
    const minimapSmoothFactor = AxisLockThreshold.isPrimary ? "p1" : "p2";
    return this.playerStates[minimapSmoothFactor];
  },
  initVisualElements: function () {
    if (!this.trajectoryLine && PIXI) {
      this.trajectoryLine = new PIXI.Graphics();
      this.trajectoryLine.visible = false;
      WeakMaphlyBuhea985_num.addChild(this.trajectoryLine);
      this.stateIndicator = new PIXI.Graphics();
      this.stateIndicator.visible = false;
      WeakMaphlyBuhea985_num.addChild(this.stateIndicator);
      this.axisIndicator = new PIXI.Text("", {
        fontFamily: "Arial",
        fontSize: 16,
        fill: 16777215,
        align: "center",
        stroke: 0,
        strokeThickness: 4,
      });
      this.axisIndicator.visible = false;
      this.axisIndicator.anchor.set(0.5);
      WeakMaphlyBuhea985_num.addChild(this.axisIndicator);
    }
  },
  _drawPulsingLine: function (
    AxisLockThreshold,
    minimapSmoothFactor,
    drawMinimapInterval
  ) {
    const baseCellSize = If$sEyzqKbhea93f_Exec.serverData.border;
    const combinedCameraDistanceThreshold =
      baseCellSize && baseCellSize.enabled;
    if (!this.trajectoryLine || !combinedCameraDistanceThreshold) {
      if (this.trajectoryLine) {
        this.trajectoryLine.visible = false;
      }
      return;
    }
    this.animationTimer += drawMinimapInterval / 60;
    const combinedZoomFocusStrength =
      (this.animationTimer % this.animationDuration) / this.animationDuration;
    const combinedInterpSpeed = this.maxLineLength * combinedZoomFocusStrength;
    const messageColors = Math.sin(combinedZoomFocusStrength * Math.PI) * 0.9;
    this.trajectoryLine
      .clear()
      .lineStyle(5, minimapSmoothFactor, messageColors);
    this.trajectoryLine.visible = true;
    const MESSAGE_TYPES = faCUfKea9fb_add().lineSplitAnchorX;
    const CellVisibility = faCUfKea9fb_add().lineSplitAnchorY;
    if (AxisLockThreshold === "x") {
      const MassDisplayType = Math.max(
        baseCellSize.left,
        MESSAGE_TYPES - combinedInterpSpeed
      );
      const SKIN_LOAD_STATUS = Math.min(
        baseCellSize.right,
        MESSAGE_TYPES + combinedInterpSpeed
      );
      this.trajectoryLine
        .moveTo(MassDisplayType, CellVisibility)
        .lineTo(SKIN_LOAD_STATUS, CellVisibility);
    } else {
      const PlayerState = Math.max(
        baseCellSize.top,
        CellVisibility - combinedInterpSpeed
      );
      const defaultKeyMappings = Math.min(
        baseCellSize.bottom,
        CellVisibility + combinedInterpSpeed
      );
      this.trajectoryLine
        .moveTo(MESSAGE_TYPES, PlayerState)
        .lineTo(MESSAGE_TYPES, defaultKeyMappings);
    }
  },
  activateLinesplitToggle: function () {
    const AxisLockThreshold = faCUfKea9fb_add();
    if (!AxisLockThreshold || AxisLockThreshold.myCells.size === 0) {
      return;
    }
    const minimapSmoothFactor = this._getActivePlayerState(AxisLockThreshold);
    if (!minimapSmoothFactor) {
      return;
    }
    this.initVisualElements();
    if (Mao5huZea938_run.sLinesplitMode === "TOGGLE") {
      if (minimapSmoothFactor.state === "idle") {
        this.startLinesplitActivation(AxisLockThreshold);
      } else {
        this.stopLinesplit(AxisLockThreshold);
      }
    } else {
      this.startLinesplitActivation(AxisLockThreshold);
    }
  },
  deactivateLinesplitHold: function () {
    const AxisLockThreshold = faCUfKea9fb_add();
    const minimapSmoothFactor = this._getActivePlayerState(AxisLockThreshold);
    if (!minimapSmoothFactor) {
      return;
    }
    if (
      Mao5huZea938_run.sLinesplitMode === "HOLD" &&
      minimapSmoothFactor.state !== "idle"
    ) {
      this.stopLinesplit(AxisLockThreshold);
    }
  },
  canSplitNow: function (AxisLockThreshold = 1) {
    const minimapSmoothFactor = faCUfKea9fb_add();
    const drawMinimapInterval = this._getActivePlayerState(minimapSmoothFactor);
    if (!drawMinimapInterval) {
      return false;
    }
    if (
      drawMinimapInterval.state === "activating" ||
      drawMinimapInterval.state === "locking"
    ) {
      drawMinimapInterval.pendingSplitCount += AxisLockThreshold;
      return true;
    } else if (drawMinimapInterval.state.startsWith("active-")) {
      if (
        minimapSmoothFactor &&
        typeof minimapSmoothFactor.sendSplit === "function"
      ) {
        minimapSmoothFactor.sendSplit(AxisLockThreshold);
      }
      return true;
    }
    return false;
  },
  startLinesplitActivation: function (AxisLockThreshold) {
    const minimapSmoothFactor = this._getActivePlayerState(AxisLockThreshold);
    if (!minimapSmoothFactor || minimapSmoothFactor.state !== "idle") {
      return;
    }
    this.animationTimer = 0;
    minimapSmoothFactor.pendingSplitCount = 0;
    let drawMinimapInterval = false;
    let baseCellSize = null;
    let combinedCameraDistanceThreshold = Infinity;
    const combinedZoomFocusStrength = AxisLockThreshold.calculatedMouseX;
    const combinedInterpSpeed = AxisLockThreshold.calculatedMouseY;
    if (
      combinedZoomFocusStrength &&
      combinedInterpSpeed &&
      AxisLockThreshold.myCells.size > 1
    ) {
      for (const messageColors of AxisLockThreshold.myCells.values()) {
        const MESSAGE_TYPES = messageColors.x - combinedZoomFocusStrength;
        const CellVisibility = messageColors.y - combinedInterpSpeed;
        const MassDisplayType =
          MESSAGE_TYPES * MESSAGE_TYPES + CellVisibility * CellVisibility;
        if (MassDisplayType < combinedCameraDistanceThreshold) {
          baseCellSize = messageColors;
          combinedCameraDistanceThreshold = MassDisplayType;
        }
      }
    }
    if (baseCellSize) {
      AxisLockThreshold.lineSplitAnchorX = baseCellSize.x_;
      AxisLockThreshold.lineSplitAnchorY = baseCellSize.y_;
      drawMinimapInterval = true;
      Logger.info(
        "[Linesplit] Anchor override: Snapped to CLOSEST cell (ID " +
          baseCellSize.id +
          ")."
      );
    } else {
      let SKIN_LOAD_STATUS = {
        size: -1,
      };
      for (const PlayerState of AxisLockThreshold.myCells.values()) {
        if (PlayerState.size > SKIN_LOAD_STATUS.size) {
          SKIN_LOAD_STATUS = PlayerState;
        }
      }
      if (SKIN_LOAD_STATUS.size >= 0) {
        AxisLockThreshold.lineSplitAnchorX = SKIN_LOAD_STATUS.x_;
        AxisLockThreshold.lineSplitAnchorY = SKIN_LOAD_STATUS.y_;
        drawMinimapInterval = true;
        Logger.info("[Linesplit] Anchor default: Set to biggest cell.");
      }
    }
    if (!drawMinimapInterval) {
      AxisLockThreshold.lineSplitAnchorX = AxisLockThreshold.centerX;
      AxisLockThreshold.lineSplitAnchorY = AxisLockThreshold.centerY;
    }
    minimapSmoothFactor.state = "activating";
    AxisLockThreshold.lineSplitAxis = null;
    minimapSmoothFactor.mouseFreezeBackup = AxisLockThreshold.mouseFrozen;
    if (this.stateIndicator) {
      this.stateIndicator
        .clear()
        .beginFill(65535, 0.5)
        .drawCircle(
          AxisLockThreshold.lineSplitAnchorX,
          AxisLockThreshold.lineSplitAnchorY,
          20
        )
        .endFill();
      this.stateIndicator.visible = true;
    }
    RETURN_zuR(false);
    clearTimeout(minimapSmoothFactor.packetTimer);
    minimapSmoothFactor.packetTimer = setTimeout(() => {
      if (minimapSmoothFactor.state === "activating") {
        minimapSmoothFactor.state = "locking";
        if (this.stateIndicator) {
          this.stateIndicator
            .clear()
            .beginFill(16776960, 0.5)
            .drawCircle(
              AxisLockThreshold.lineSplitAnchorX,
              AxisLockThreshold.lineSplitAnchorY,
              20
            )
            .endFill();
        }
      }
    }, async_gvZqk_Dc_ea93e_div * 2);
  },
  stopLinesplit: function (AxisLockThreshold) {
    if (!AxisLockThreshold) {
      return;
    }
    const minimapSmoothFactor = this._getActivePlayerState(AxisLockThreshold);
    if (!minimapSmoothFactor || minimapSmoothFactor.state === "idle") {
      return;
    }
    clearTimeout(minimapSmoothFactor.packetTimer);
    minimapSmoothFactor.packetTimer = null;
    minimapSmoothFactor.state = "idle";
    AxisLockThreshold.lineSplitAxis = null;
    minimapSmoothFactor.pendingSplitCount = 0;
    if (faCUfKea9fb_add() === AxisLockThreshold) {
      if (this.trajectoryLine) {
        this.trajectoryLine.visible = false;
      }
      if (this.stateIndicator) {
        this.stateIndicator.visible = false;
      }
      if (this.axisIndicator) {
        this.axisIndicator.visible = false;
      }
      RETURN_zuR(false);
    }
  },
  updateInGameLoop: function (
    minimapSmoothFactor,
    drawMinimapInterval,
    baseCellSize,
    combinedCameraDistanceThreshold
  ) {
    const combinedZoomFocusStrength =
      this._getActivePlayerState(minimapSmoothFactor);
    if (
      !combinedZoomFocusStrength ||
      combinedZoomFocusStrength.state === "idle" ||
      !minimapSmoothFactor
    ) {
      if (this.trajectoryLine) {
        this.trajectoryLine.visible = false;
      }
      return [drawMinimapInterval, baseCellSize];
    }
    let combinedInterpSpeed = 65280;
    const messageColors = zLCuf8c.getPlayer(minimapSmoothFactor.playerId);
    if (messageColors) {
      if (Mao5huZea938_run.cCustomCellColor) {
        const MESSAGE_TYPES = 10000 / Mao5huZea938_run.rRgbSpeed;
        const CellVisibility = performance.now() / MESSAGE_TYPES;
        const MassDisplayType = ((Math.sin(CellVisibility) + 1) / 2) * 100;
        const SKIN_LOAD_STATUS = Pto5ea937_Inst.mix(
          Mao5huZea938_run.sRgbColor1,
          Mao5huZea938_run.sRgbColor2,
          MassDisplayType
        );
        combinedInterpSpeed = parseInt(
          SKIN_LOAD_STATUS.toHexString().substring(1),
          16
        );
      } else {
        combinedInterpSpeed = messageColors.cellColor;
      }
    }
    let PlayerState = drawMinimapInterval;
    let defaultKeyMappings = baseCellSize;
    if (
      combinedZoomFocusStrength.state === "activating" ||
      combinedZoomFocusStrength.state === "locking"
    ) {
      PlayerState = minimapSmoothFactor.lineSplitAnchorX;
      defaultKeyMappings = minimapSmoothFactor.lineSplitAnchorY;
      if (combinedZoomFocusStrength.state === "locking") {
        const defaultOptions = Math.abs(
          drawMinimapInterval - minimapSmoothFactor.lineSplitAnchorX
        );
        const defaultSubPanelSettings = Math.abs(
          baseCellSize - minimapSmoothFactor.lineSplitAnchorY
        );
        this._drawPulsingLine(
          defaultOptions > defaultSubPanelSettings ? "x" : "y",
          16776960,
          combinedCameraDistanceThreshold
        );
        if (
          defaultOptions > AxisLockThreshold ||
          defaultSubPanelSettings > AxisLockThreshold
        ) {
          minimapSmoothFactor.lineSplitAxis =
            defaultOptions > defaultSubPanelSettings ? "x" : "y";
          combinedZoomFocusStrength.state =
            "active-" + minimapSmoothFactor.lineSplitAxis;
          if (combinedZoomFocusStrength.pendingSplitCount > 0) {
            if (minimapSmoothFactor?.sendSplit) {
              minimapSmoothFactor.sendSplit(
                combinedZoomFocusStrength.pendingSplitCount
              );
            }
            combinedZoomFocusStrength.pendingSplitCount = 0;
          }
          RETURN_zuR(true);
          if (this.stateIndicator) {
            this.stateIndicator
              .clear()
              .beginFill(combinedInterpSpeed, 0.5)
              .drawCircle(
                minimapSmoothFactor.lineSplitAnchorX,
                minimapSmoothFactor.lineSplitAnchorY,
                20
              )
              .endFill();
          }
          if (this.axisIndicator) {
            this.axisIndicator.text =
              minimapSmoothFactor.lineSplitAxis.toUpperCase();
            this.axisIndicator.position.set(
              minimapSmoothFactor.lineSplitAnchorX,
              minimapSmoothFactor.lineSplitAnchorY - 40
            );
            this.axisIndicator.visible = true;
          }
        }
      } else if (this.trajectoryLine) {
        this.trajectoryLine.visible = false;
      }
    } else {
      this._drawPulsingLine(
        minimapSmoothFactor.lineSplitAxis,
        combinedInterpSpeed,
        combinedCameraDistanceThreshold
      );
      if (minimapSmoothFactor.lineSplitAxis === "x") {
        defaultKeyMappings = minimapSmoothFactor.lineSplitAnchorY;
      } else if (minimapSmoothFactor.lineSplitAxis === "y") {
        PlayerState = minimapSmoothFactor.lineSplitAnchorX;
      }
    }
    return [PlayerState, defaultKeyMappings];
  },
  handleSettingsUpdate: function () {
    this.stopLinesplit(If$sEyzqKbhea93f_Exec);
    this.stopLinesplit(Str_NmyJ4kX);
  },
  handlePlayerDeathOrDisconnect: function () {},
};
const zd8T_jfeea9b6_and = {
  sprites: [],
  isActive: false,
  animationStartTime: 0,
  duration: 4000,
  circleTexture: null,
  init: function () {
    if (this.circleTexture || typeof PIXI === "undefined" || !Date$F4EY) {
      return;
    }
    const AxisLockThreshold = new PIXI.Graphics();
    const minimapSmoothFactor = 100;
    const drawMinimapInterval = 8;
    AxisLockThreshold.lineStyle(drawMinimapInterval, 16777215, 1);
    AxisLockThreshold.beginFill(16777215, 0.3);
    AxisLockThreshold.drawCircle(
      minimapSmoothFactor,
      minimapSmoothFactor,
      minimapSmoothFactor - drawMinimapInterval / 2
    );
    AxisLockThreshold.endFill();
    const baseCellSize = {
      scaleMode: PIXI.SCALE_MODES.LINEAR,
      resolution: Date$F4EY.renderer.resolution,
    };
    this.circleTexture = Date$F4EY.renderer.generateTexture(
      AxisLockThreshold,
      baseCellSize
    );
    AxisLockThreshold.destroy();
    this.circleTexture.baseTexture.mipmap = PIXI.MIPMAP_MODES.ON;
    Date$F4EY.renderer.texture.updateTexture(this.circleTexture.baseTexture);
    if (this.sprites.length === 0) {
      for (
        let combinedCameraDistanceThreshold = 0;
        combinedCameraDistanceThreshold < 3;
        combinedCameraDistanceThreshold++
      ) {
        const combinedZoomFocusStrength = new PIXI.Sprite(this.circleTexture);
        combinedZoomFocusStrength.anchor.set(0.5);
        combinedZoomFocusStrength.visible = false;
        this.sprites.push(combinedZoomFocusStrength);
        React$vkea987_Idx.addChild(combinedZoomFocusStrength);
      }
    }
  },
  activate: function () {
    const AxisLockThreshold = faCUfKea9fb_add();
    const minimapSmoothFactor =
      AxisLockThreshold === If$sEyzqKbhea93f_Exec
        ? Str_NmyJ4kX
        : If$sEyzqKbhea93f_Exec;
    if (
      !minimapSmoothFactor ||
      !minimapSmoothFactor.isConnected() ||
      minimapSmoothFactor.myCells.size === 0
    ) {
      return;
    }
    this.init();
    this.animationStartTime = performance.now();
    this.isActive = true;
    this.sprites.forEach(
      Object$kDcGWUY((...AxisLockThreshold) => {
        AxisLockThreshold.length = 1;
        return (AxisLockThreshold[0].visible = true);
      })
    );
  },
  deactivate: function () {
    if (!this.isActive) {
      return;
    }
    this.isActive = false;
    this.sprites.forEach(
      Object$kDcGWUY((...AxisLockThreshold) => {
        AxisLockThreshold.length = 1;
        return (AxisLockThreshold[0].visible = false);
      })
    );
  },
  update: function () {
    if (!this.isActive || this.sprites.length === 0) {
      return;
    }
    const AxisLockThreshold = performance.now();
    const minimapSmoothFactor = AxisLockThreshold - this.animationStartTime;
    const drawMinimapInterval = faCUfKea9fb_add();
    const baseCellSize =
      drawMinimapInterval === If$sEyzqKbhea93f_Exec
        ? Str_NmyJ4kX
        : If$sEyzqKbhea93f_Exec;
    if (
      minimapSmoothFactor > this.duration ||
      !baseCellSize ||
      baseCellSize.myCells.size === 0 ||
      !drawMinimapInterval
    ) {
      this.deactivate();
      return;
    }
    const combinedCameraDistanceThreshold = Winy9ZiY(baseCellSize, false);
    const combinedZoomFocusStrength = combinedCameraDistanceThreshold.x;
    const combinedInterpSpeed = combinedCameraDistanceThreshold.y;
    const messageColors = drawMinimapInterval.getMass();
    const MESSAGE_TYPES = 150;
    const CellVisibility = Math.log(Math.max(1, messageColors)) * 30;
    const MassDisplayType = MESSAGE_TYPES + CellVisibility;
    const SKIN_LOAD_STATUS = minimapSmoothFactor / this.duration;
    for (let PlayerState = 0; PlayerState < 3; PlayerState++) {
      const defaultKeyMappings = this.sprites[PlayerState];
      const defaultOptions = (SKIN_LOAD_STATUS + PlayerState * 0.33) % 1;
      const defaultSubPanelSettings = 1 - Math.pow(1 - defaultOptions, 2);
      const fontConfigs = defaultSubPanelSettings * MassDisplayType;
      const readAscii = 1 - defaultSubPanelSettings;
      if (readAscii > 0.05) {
        defaultKeyMappings.position.set(
          combinedZoomFocusStrength,
          combinedInterpSpeed
        );
        defaultKeyMappings.tint = 16777215;
        defaultKeyMappings.alpha = readAscii;
        const readUtf16 = fontConfigs / 50;
        defaultKeyMappings.scale.set(readUtf16);
        defaultKeyMappings.visible = true;
      } else {
        defaultKeyMappings.visible = false;
      }
    }
  },
};
const Proto$RYZvj3$ea9b7_num = {
  smoothedPositions: new Map(),
  highlighterSmoothedX: NaN,
  highlighterSmoothedY: NaN,
  animationStartTime: 0,
  update(AxisLockThreshold, drawMinimapInterval, baseCellSize) {
    const combinedCameraDistanceThreshold = Math.min(
      minimapSmoothFactor * baseCellSize,
      1
    );
    const combinedZoomFocusStrength = new Set();
    AxisLockThreshold.forEach((AxisLockThreshold) => {
      combinedZoomFocusStrength.add(AxisLockThreshold.id);
      let drawMinimapInterval = this.smoothedPositions.get(
        AxisLockThreshold.id
      );
      if (!drawMinimapInterval || isNaN(drawMinimapInterval.smoothedX)) {
        drawMinimapInterval = {
          smoothedX: AxisLockThreshold.x,
          smoothedY: AxisLockThreshold.y,
        };
        this.smoothedPositions.set(AxisLockThreshold.id, drawMinimapInterval);
      } else {
        drawMinimapInterval.smoothedX +=
          (AxisLockThreshold.x - drawMinimapInterval.smoothedX) *
          combinedCameraDistanceThreshold;
        drawMinimapInterval.smoothedY +=
          (AxisLockThreshold.y - drawMinimapInterval.smoothedY) *
          combinedCameraDistanceThreshold;
      }
    });
    for (const combinedInterpSpeed of this.smoothedPositions.keys()) {
      if (!combinedZoomFocusStrength.has(combinedInterpSpeed)) {
        this.smoothedPositions.delete(combinedInterpSpeed);
      }
    }
    const messageColors = this.getSmoothedPosition(drawMinimapInterval);
    if (messageColors) {
      if (
        isNaN(this.highlighterSmoothedX) ||
        isNaN(this.highlighterSmoothedY)
      ) {
        this.highlighterSmoothedX = messageColors.smoothedX;
        this.highlighterSmoothedY = messageColors.smoothedY;
      } else {
        this.highlighterSmoothedX +=
          (messageColors.smoothedX - this.highlighterSmoothedX) *
          combinedCameraDistanceThreshold;
        this.highlighterSmoothedY +=
          (messageColors.smoothedY - this.highlighterSmoothedY) *
          combinedCameraDistanceThreshold;
      }
    }
  },
  getSmoothedPosition(AxisLockThreshold) {
    return this.smoothedPositions.get(AxisLockThreshold);
  },
  drawHighlighter(
    AxisLockThreshold,
    minimapSmoothFactor,
    drawMinimapInterval,
    baseCellSize
  ) {
    if (isNaN(this.highlighterSmoothedX)) {
      return;
    }
    if (this.animationStartTime === 0) {
      this.animationStartTime = Date.now();
    }
    const combinedCameraDistanceThreshold =
      ((this.highlighterSmoothedX - minimapSmoothFactor.left) /
        minimapSmoothFactor.width) *
      drawMinimapInterval;
    const combinedZoomFocusStrength =
      ((this.highlighterSmoothedY - minimapSmoothFactor.top) /
        minimapSmoothFactor.height) *
      baseCellSize;
    AxisLockThreshold.beginPath();
    AxisLockThreshold.arc(
      combinedCameraDistanceThreshold,
      combinedZoomFocusStrength,
      18,
      0,
      Math.PI * 2,
      false
    );
    AxisLockThreshold.fillStyle =
      DEFAULT$HB0T_ea93b_Status["--n-color-accent"] + "25";
    AxisLockThreshold.fill();
  },
};
const Lodash$KALTWzD_ea9b8_buf = {
  cIsAccount2Enabled: function () {
    clearTimeout(Stringify_J7krEf_Q_ea99c_Inst);
    if (Mao5huZea938_run.cIsAccount2Enabled) {
      $("#authed2").css({
        ["pointer-events"]: "auto",
        opacity: "1",
      });
      $("#cIsAccount2Enabled").attr("checked", true);
      $("#name-box2").show();
      $("#name-box2")
        .css("height", "64px")
        .css("pointer-events", "auto")
        .css("opacity", "1");
      $("#account-content-container").css("height", "300px");
      $(".main-left").css("height", "322px");
    } else {
      $("#authed2").css({
        ["pointer-events"]: "none",
        opacity: "0.4",
      });
      $("#cIsAccount2Enabled").removeAttr("checked", true);
      $("#name-box2")
        .css("height", "0")
        .css("pointer-events", "none")
        .css("opacity", "0");
      $("#account-content-container").css("height", "230px");
      $(".main-left").css("height", "252px");
      Stringify_J7krEf_Q_ea99c_Inst = setTimeout(() => {
        $("#name-box2").hide();
      }, 1000);
    }
  },
  cLimitFPS: function () {
    HandlerR0b5TLt$();
  },
  cTransCells: function () {
    for (const AxisLockThreshold of If$sEyzqKbhea93f_Exec.players.values()) {
      if (AxisLockThreshold.type === 2 && AxisLockThreshold.cellSprite) {
        AxisLockThreshold.cellSprite.alpha = Mao5huZea938_run.cTransCells
          ? 0.5
          : 1;
      } else if (AxisLockThreshold.sprite) {
        AxisLockThreshold.sprite.alpha = Mao5huZea938_run.cTransCells ? 0.5 : 1;
      }
    }
    for (const AxisLockThreshold of Str_NmyJ4kX.players.values()) {
      if (AxisLockThreshold.type === 2 && AxisLockThreshold.cellSprite) {
        AxisLockThreshold.cellSprite.alpha = Mao5huZea938_run.cTransCells
          ? 0.5
          : 1;
      } else if (AxisLockThreshold.sprite) {
        AxisLockThreshold.sprite.alpha = Mao5huZea938_run.cTransCells ? 0.5 : 1;
      }
    }
  },
  cHideChat: function () {
    $(".chat-panel").css(
      "display",
      Mao5huZea938_run.cHideChat ? "none" : "flex"
    );
  },
  cHideMinimap: function () {
    $("#minimap-panel").css(
      "display",
      Mao5huZea938_run.cHideMinimap ? "none" : "flex"
    );
  },
  cCellRing: function () {},
  cHideLeaderboard: function () {
    $("#leaderboard-panel").css(
      "display",
      Mao5huZea938_run.cHideLeaderboard ? "none" : "flex"
    );
  },
  cShowCoordinates: function () {
    $("#minimap-coordinates").css(
      "display",
      Mao5huZea938_run.cShowCoordinates ? "block" : "none"
    );
    React$yyea9e7();
  },
  cShowChunks: function () {},
  cShowBorder: function () {
    g5Mea9c8_TYPE();
  },
  sLinesplitMode: Object$kDcGWUY(function (...AxisLockThreshold) {
    AxisLockThreshold.length = 1;
    if (VJjDr && typeof VJjDr.handleSettingsUpdate === "function") {
      VJjDr.handleSettingsUpdate(AxisLockThreshold[0]);
    }
  }),
  sShowMass: function () {
    B5O8N2Mea93c_ret.levelMass = CellVisibility[Mao5huZea938_run.sShowMass];
  },
  sShowNames: function () {
    B5O8N2Mea93c_ret.levelNames = CellVisibility[Mao5huZea938_run.sShowNames];
  },
  sShowSkins: function () {
    B5O8N2Mea93c_ret.levelSkins = CellVisibility[Mao5huZea938_run.sShowSkins];
  },
  sMassType: function () {
    B5O8N2Mea93c_ret.massType = MassDisplayType[Mao5huZea938_run.sMassType];
  },
  rTextOutlines: Object$kDcGWUY(function (...AxisLockThreshold) {
    AxisLockThreshold.length = 1;
    Mao5huZea938_run.rTextOutlines = Math.min(
      Math.max(AxisLockThreshold[0], 0),
      10
    );
    $("#textOutlines").val(Mao5huZea938_run.rTextOutlines);
    Dom34uUv8$ea9b1_bool.invalidateCache();
  }),
  rAnimationDelay: Object$kDcGWUY(function (...AxisLockThreshold) {
    AxisLockThreshold.length = 1;
    Mao5huZea938_run.rAnimationDelay = Math.min(
      Math.max(AxisLockThreshold[0], 1),
      250
    );
    $("#animationDelay").val(Mao5huZea938_run.rAnimationDelay);
  }),
  rCamDelay: Object$kDcGWUY(function (...AxisLockThreshold) {
    AxisLockThreshold.length = 1;
    Mao5huZea938_run.rCamDelay = Math.min(
      Math.max(AxisLockThreshold[0], 50),
      200
    );
    $("#camDelay").val(Mao5huZea938_run.rCamDelay);
  }),
  rCombinedViewportScale: Object$kDcGWUY(function (...AxisLockThreshold) {
    AxisLockThreshold.length = 1;
    Mao5huZea938_run.rCombinedViewportScale = Math.min(
      Math.max(AxisLockThreshold[0], 0),
      1
    );
    $("#combinedViewportScale").val(Mao5huZea938_run.rCombinedViewportScale);
  }),
  rViewDistance: Object$kDcGWUY(function (...AxisLockThreshold) {
    AxisLockThreshold.length = 1;
    Mao5huZea938_run.rViewDistance = Math.min(
      Math.max(AxisLockThreshold[0], 50),
      150
    );
    $("#viewDistance").val(Mao5huZea938_run.rViewDistance);
    If$sEyzqKbhea93f_Exec.sendOptions();
    Str_NmyJ4kX.sendOptions();
  }),
  rRgbSpeed: Object$kDcGWUY(function (...AxisLockThreshold) {
    AxisLockThreshold.length = 1;
    Mao5huZea938_run.rRgbSpeed = Math.min(
      Math.max(parseInt(AxisLockThreshold[0]), 5),
      1000
    );
    $("#rgbSpeed").val(Mao5huZea938_run.rRgbSpeed);
  }),
};
let_ExdFq$65.sortableChildren = true;
bXFgW$Qq.addChild(Catch_tLBy);
bXFgW$Qq.addChild(letwtfOyM80ea984_num);
bXFgW$Qq.addChild(New_cKB3q5G_ea986_cb);
bXFgW$Qq.addChild(WeakMaphlyBuhea985_num);
bXFgW$Qq.addChild(let_ExdFq$65);
bXFgW$Qq.addChild(React$vkea987_Idx);
Catch_tLBy.addChild(AwaitNM$mbea98a_mul);
LGeF78Jea980_type.addChild(Switch$DDqRA_ea981_mul);
LGeF78Jea980_type.addChild(bXFgW$Qq);
LGeF78Jea980_type.addChild(FN_okkea989_Handler);
letwtfOyM80ea984_num.interactiveChildren = false;
Catch_tLBy.interactiveChildren = false;
WeakMaphlyBuhea985_num.interactiveChildren = false;
React$vkea987_Idx.interactiveChildren = false;
Symbol_I0$w5g$ea98b_Opt = undefined;
nh6XVqea98c_Cb = undefined;
IMPORT_f936f76C_ea98d_lte = undefined;
djUgiSea98e_Fn = undefined;
WeakMap$J22VUWjRea98f_ex = undefined;
Get$NeypNg = undefined;
AhC4E4RR = undefined;
Array_eUa8SZ3Z$ea992_Buf = undefined;
async_D8l9NKg = undefined;
PMulimorea994_str = undefined;
function Str_MMr1pN24$ea9b9_not(...AxisLockThreshold) {
  if (Kb5zM5ea951_neq) {
    dNwVcfi$ea9d8_type(AxisLockThreshold[0]);
    AxisLockThreshold[1].preventDefault();
    return;
  }
  const minimapSmoothFactor = document.activeElement;
  if (
    minimapSmoothFactor &&
    (minimapSmoothFactor.tagName === "INPUT" ||
      minimapSmoothFactor.tagName === "NORD-INPUT" ||
      minimapSmoothFactor.isContentEditable)
  ) {
    if (
      AxisLockThreshold[0] === 13 &&
      minimapSmoothFactor.id === "chat-input"
    ) {
      in_Lv7rr7N($(minimapSmoothFactor).val());
      setTimeout(() => {
        return $(minimapSmoothFactor).blur();
      }, 2);
    }
    return;
  }
  if (AxisLockThreshold[0] === 27) {
    NaN_semFS17(
      If$sEyzqKbhea93f_Exec.isConnected() || Str_NmyJ4kX.isConnected()
    );
  }
  if (jQueryLzNd.isOpen("mainModal")) {
    return;
  }
  if (
    Object.values(CoKB).includes(AxisLockThreshold[0]) ||
    AxisLockThreshold[0] === 9
  ) {
    AxisLockThreshold[1].preventDefault();
  }
  if (
    [
      CoKB.kSplit,
      CoKB.k4xSplit,
      CoKB.k8xSplit,
      CoKB.k16xSplit,
      CoKB.k64xSplit,
      CoKB.kSwapPlayer,
      CoKB.kTrickSplit,
    ].includes(AxisLockThreshold[0]) ||
    (AxisLockThreshold[0] >= CoKB.k32xSplit &&
      AxisLockThreshold[0] <= CoKB.k256xSplit)
  ) {
    in_hpdqea943_div = true;
  }
  switch (AxisLockThreshold[0]) {
    case CoKB.kSwapPlayer:
      ForKgjVzrQea9fc_Status();
      break;
    case CoKB.kTrickSplit: {
      let drawMinimapInterval = If$sEyzqKbhea93f_Exec;
      let baseCellSize = Str_NmyJ4kX;
      let combinedCameraDistanceThreshold = 0;
      let combinedZoomFocusStrength = 0;
      for (const combinedInterpSpeed of If$sEyzqKbhea93f_Exec.myCells.values()) {
        combinedCameraDistanceThreshold += combinedInterpSpeed.getRealMass();
      }
      for (const combinedInterpSpeed of Str_NmyJ4kX.myCells.values()) {
        combinedZoomFocusStrength += combinedInterpSpeed.getRealMass();
      }
      const messageColors =
        combinedCameraDistanceThreshold > combinedZoomFocusStrength;
      for (let MESSAGE_TYPES = 0; MESSAGE_TYPES < 8; MESSAGE_TYPES++) {
        setTimeout(() => {
          (messageColors ? drawMinimapInterval : baseCellSize).sendPacket(
            VoidGBYH.sendKey(17)
          );
        }, !!MESSAGE_TYPES * 200);
      }
      (messageColors ? baseCellSize : drawMinimapInterval).sendPacket(
        VoidGBYH.sendKey(17)
      );
      break;
    }
    case CoKB.kSoloMs:
      Mao5huZea938_run.soloMothership = !Mao5huZea938_run.soloMothership;
      break;
    case CoKB.kBotFastFeed:
      Mao5huZea938_run.BotFFeed = !Mao5huZea938_run.BotFFeed;
      break;
    case CoKB.kMouseFollow:
      Mao5huZea938_run.mouseFollow = !Mao5huZea938_run.mouseFollow;
      break;
    case CoKB.kInfernoSplit: {
      const CellVisibility = faCUfKea9fb_add();
      const MassDisplayType =
        CellVisibility === If$sEyzqKbhea93f_Exec
          ? Str_NmyJ4kX
          : If$sEyzqKbhea93f_Exec;
      for (let MESSAGE_TYPES = 0; MESSAGE_TYPES < 4; MESSAGE_TYPES++) {
        setTimeout(() => {
          CellVisibility.sendPacket(VoidGBYH.sendKey(17));
        }, MESSAGE_TYPES * 20);
      }
      for (let SKIN_LOAD_STATUS = 0; SKIN_LOAD_STATUS < 2; SKIN_LOAD_STATUS++) {
        setTimeout(() => {
          MassDisplayType.sendPacket(VoidGBYH.sendKey(17));
        }, SKIN_LOAD_STATUS * 20);
      }
      break;
    }
    case CoKB.kToggleBotFollowMode:
      d5OVi();
      break;
    case CoKB.kToggleMultiRespawn:
      if (Mao5huZea938_run.cIsAccount2Enabled) {
        Ctx_HHTJdo();
      }
      break;
    case CoKB.kToggleAutoSpectate: {
      const CellVisibility = faCUfKea9fb_add();
      if (CellVisibility && CellVisibility.spectate) {
        return;
      }
      React_RtHu4Gea946 = !React_RtHu4Gea946;
      const PlayerState = React_RtHu4Gea946 ? "ON (for next death)" : "OFF";
      BOOLxEFAPea9cf_or("Auto-Spectate: " + PlayerState);
      break;
    }
    case CoKB.kToggleInactiveToActiveSpec:
      for_zWYea948_lte = !for_zWYea948_lte;
      const PlayerState = for_zWYea948_lte ? "SENT TO SPEC" : "RETURN";
      BOOLxEFAPea9cf_or("Multi Spectate-to-Play: " + PlayerState);
      break;
    case CoKB.kSoloTrick:
      hjScxea9fd_res(faCUfKea9fb_add());
      break;
    case CoKB.kFastFeed:
      yield_LTAv5ipN();
      break;
    case CoKB.kFastFeedMode:
      FROM$YeJ0i$eaa00_bool();
      break;
    case CoKB.kLineSplit:
      VJjDr.activateLinesplitToggle();
      break;
    case CoKB.kCameraMode:
      if (!$("#camera-mode-notification").length) {
        $(
          '<div id="camera-mode-notification" style="position: fixed; top: 80px; left: 50%; transform: translateX(-50%); z-index: 1000;"></div>'
        ).appendTo(document.body);
      }
      const defaultKeyMappings = qq8ea959_idx;
      const defaultOptions =
        defaultKeyMappings === "cameraDefault"
          ? "cameraMassWeighted"
          : "cameraDefault";
      const defaultSubPanelSettings =
        defaultKeyMappings === "cameraDefault" ? "Mass Weighted" : "Default";
      qq8ea959_idx = defaultOptions;
      TruejJBgB31q(defaultOptions);
      Evt_gCqea9ce_Val("Player Camera: " + defaultSubPanelSettings);
      break;
    default:
      (If$sEyzqKbhea93f_Exec.enabled
        ? If$sEyzqKbhea93f_Exec
        : Str_NmyJ4kX
      ).handleKey(AxisLockThreshold[0]);
  }
}
function DateN4UN(...AxisLockThreshold) {
  const minimapSmoothFactor = document.activeElement;
  if (
    minimapSmoothFactor &&
    (minimapSmoothFactor.tagName === "INPUT" ||
      minimapSmoothFactor.tagName === "NORD-INPUT" ||
      minimapSmoothFactor.isContentEditable)
  ) {
    return;
  }
  if (Object.values(CoKB).includes(AxisLockThreshold[0])) {
    AxisLockThreshold[1].preventDefault();
  }
  switch (AxisLockThreshold[0]) {
    case CoKB.kEjectMass:
      ObjectueAUtq = false;
      (If$sEyzqKbhea93f_Exec.enabled
        ? If$sEyzqKbhea93f_Exec
        : Str_NmyJ4kX
      ).sendPacket(VoidGBYH.sendEjectMass(false));
      break;
    case CoKB.kMultiEject:
      AxisLockThreshold[57] =
        faCUfKea9fb_add() === If$sEyzqKbhea93f_Exec
          ? Str_NmyJ4kX
          : If$sEyzqKbhea93f_Exec;
      if (AxisLockThreshold[57]) {
        AxisLockThreshold[57].sendPacket(VoidGBYH.sendEjectMass(false));
        CLASS_3Ft = false;
      }
      break;
    case CoKB.kLineSplit:
      VJjDr.deactivateLinesplitHold();
      break;
  }
  if (
    [
      CoKB.kSplit,
      CoKB.k4xSplit,
      CoKB.k8xSplit,
      CoKB.k16xSplit,
      CoKB.k64xSplit,
      CoKB.kSwapPlayer,
      CoKB.kTrickSplit,
    ].includes(AxisLockThreshold[0]) ||
    (AxisLockThreshold[0] >= CoKB.k32xSplit &&
      AxisLockThreshold[0] <= CoKB.k256xSplit)
  ) {
    in_hpdqea943_div = false;
  }
}
async function NeweNPdm() {
  Logger.info("Starting Gota Redux client initialization...");
  Symbol_I0$w5g$ea98b_Opt = document.getElementById("canvas");
  nh6XVqea98c_Cb = document.getElementById("minimap-canvas");
  IMPORT_f936f76C_ea98d_lte = nh6XVqea98c_Cb.getContext("2d");
  djUgiSea98e_Fn = $("#context-menu");
  WeakMap$J22VUWjRea98f_ex = $("#partyPanel");
  Get$NeypNg = $(".hud-panel");
  AhC4E4RR = document.getElementById("chat-container");
  Array_eUa8SZ3Z$ea992_Buf = document.getElementById("chat-input");
  async_D8l9NKg = document.querySelectorAll(".account-nav-item");
  PMulimorea994_str = document.querySelectorAll(".account-tab-content");
  Promise_28_SVO_ea950_fn.minimapCoordinates = $("#minimap-coordinates");
  Promise_28_SVO_ea950_fn.mouseFrozenDiv = document.getElementById("pMouse");
  Promise_28_SVO_ea950_fn.playerId = document.getElementById("pId");
  Promise_28_SVO_ea950_fn.playerScore = document
    .getElementById("pScore")
    .querySelector("span");
  Promise_28_SVO_ea950_fn.playerMass = document
    .getElementById("pMass")
    .querySelector("span");
  Promise_28_SVO_ea950_fn.playerCells = document
    .getElementById("pCells")
    .querySelector("span");
  Promise_28_SVO_ea950_fn.resetInfo = $("#extra-reset-timer");
  Promise_28_SVO_ea950_fn.resetTime = $("#resetTime");
  Promise_28_SVO_ea950_fn.respawnInfo = $("#extra-respawn-cooldown");
  Promise_28_SVO_ea950_fn.respawnCooldown = $("#respawnCooldown");
  Promise_28_SVO_ea950_fn.spectatorCount = $("#spectatorCount");
  Promise_28_SVO_ea950_fn.partyPanel = WeakMap$J22VUWjRea98f_ex;
  Promise_28_SVO_ea950_fn.friendOnlineCount = $("#social-online-friends-count");
  If$sEyzqKbhea93f_Exec = new XHR_v4dBj2ayea9a5_Inst(true);
  Str_NmyJ4kX = new XHR_v4dBj2ayea9a5_Inst(false);
  VoidGBYH = new E0Pea9aa_Cfg();
  AlIjpjxYea96e_Id = {};
  RegExp_yFv = {};
  Date$F4EY = {
    renderer: PIXI.autoDetectRenderer({
      view: Symbol_I0$w5g$ea98b_Opt,
      backgroundAlpha: 0,
      antialias: true,
      autoDensity: true,
      powerPreference: "high-performance",
      resolution: 1,
    }),
    stage: LGeF78Jea980_type,
  };
  const AxisLockThreshold = Object$kDcGWUY((...AxisLockThreshold) => {
    AxisLockThreshold.length = 1;
    const minimapSmoothFactor = AxisLockThreshold[0].clientX;
    const drawMinimapInterval = AxisLockThreshold[0].clientY;
    If$sEyzqKbhea93f_Exec.mouseRawX = minimapSmoothFactor;
    If$sEyzqKbhea93f_Exec.mouseRawY = drawMinimapInterval;
    Str_NmyJ4kX.mouseRawX = minimapSmoothFactor;
    Str_NmyJ4kX.mouseRawY = drawMinimapInterval;
  });
  const minimapSmoothFactor = Object$kDcGWUY((...AxisLockThreshold) => {
    AxisLockThreshold.length = 1;
    Str_MMr1pN24$ea9b9_not(
      AxisLockThreshold[0].button + 1,
      AxisLockThreshold[0]
    );
  });
  const drawMinimapInterval = Object$kDcGWUY((...AxisLockThreshold) => {
    AxisLockThreshold.length = 1;
    DateN4UN(AxisLockThreshold[0].button + 1, AxisLockThreshold[0]);
  });
  const baseCellSize = Object$kDcGWUY((...AxisLockThreshold) => {
    AxisLockThreshold.length = 1;
    if (AxisLockThreshold[0].target.id == "canvas") {
      const minimapSmoothFactor = event.wheelDelta || event.deltaY * -1;
      const drawMinimapInterval = 1.1;
      const baseCellSize = 0.9;
      if (minimapSmoothFactor > 0) {
        If$sEyzqKbhea93f_Exec.mouseZoom *= drawMinimapInterval;
        Str_NmyJ4kX.mouseZoom *= drawMinimapInterval;
      } else {
        If$sEyzqKbhea93f_Exec.mouseZoom *= baseCellSize;
        Str_NmyJ4kX.mouseZoom *= baseCellSize;
      }
      If$sEyzqKbhea93f_Exec.mouseZoom = Math.max(
        0.15,
        Math.min(If$sEyzqKbhea93f_Exec.mouseZoom, 8)
      );
      Str_NmyJ4kX.mouseZoom = Math.max(
        0.15,
        Math.min(Str_NmyJ4kX.mouseZoom, 8)
      );
    }
  });
  const combinedCameraDistanceThreshold = Object$kDcGWUY(
    (...AxisLockThreshold) => {
      AxisLockThreshold.length = 1;
      const minimapSmoothFactor =
        AxisLockThreshold[0].which ||
        AxisLockThreshold[0].keyCode ||
        AxisLockThreshold[0].charCode;
      if (minimapSmoothFactor <= 5) {
        return;
      }
      Str_MMr1pN24$ea9b9_not(minimapSmoothFactor, AxisLockThreshold[0]);
    }
  );
  const combinedZoomFocusStrength = Object$kDcGWUY((...AxisLockThreshold) => {
    AxisLockThreshold.length = 1;
    const minimapSmoothFactor =
      AxisLockThreshold[0].which ||
      AxisLockThreshold[0].keyCode ||
      AxisLockThreshold[0].charCode;
    DateN4UN(minimapSmoothFactor, AxisLockThreshold[0]);
  });
  const combinedInterpSpeed = () => {
    if (ObjectueAUtq) {
      ObjectueAUtq = false;
      (If$sEyzqKbhea93f_Exec.enabled
        ? If$sEyzqKbhea93f_Exec
        : Str_NmyJ4kX
      ).sendPacket(VoidGBYH.sendEjectMass(false));
    }
  };
  window.onmousemove = AxisLockThreshold;
  window.onmousedown = minimapSmoothFactor;
  window.onmouseup = drawMinimapInterval;
  window.onwheel = baseCellSize;
  window.onkeydown = combinedCameraDistanceThreshold;
  window.onkeyup = combinedZoomFocusStrength;
  window.onblur = combinedInterpSpeed;
  document.addEventListener(
    "contextmenu",
    Object$kDcGWUY((...AxisLockThreshold) => {
      AxisLockThreshold.length = 1;
      return AxisLockThreshold[0].preventDefault();
    })
  );
  $(window).resize(Get_xynDv5x);
  document.addEventListener(
    "click",
    Object$kDcGWUY((...AxisLockThreshold) => {
      AxisLockThreshold.length = 1;
      if (AxisLockThreshold[0].target.closest("[data-close-modal]")) {
        const minimapSmoothFactor =
          AxisLockThreshold[0].target.closest("[data-close-modal]");
        const drawMinimapInterval =
          minimapSmoothFactor.closest(".modal-overlay");
        if (drawMinimapInterval) {
          jQueryLzNd.close(drawMinimapInterval.id);
        }
        return;
      }
      if (AxisLockThreshold[0].target.classList.contains("modal-overlay")) {
        const drawMinimapInterval = AxisLockThreshold[0].target;
        const baseCellSize = jQueryLzNd.config[drawMinimapInterval.id];
        if (baseCellSize?.closeOnBackdrop !== false) {
          jQueryLzNd.close(drawMinimapInterval.id);
        }
      }
    })
  );
  document.addEventListener(
    "keydown",
    Object$kDcGWUY((...AxisLockThreshold) => {
      AxisLockThreshold.length = 1;
      if (AxisLockThreshold[0].key === "Escape" && jQueryLzNd.activeModal) {
        const minimapSmoothFactor = jQueryLzNd.config[jQueryLzNd.activeModal];
        if (minimapSmoothFactor?.closeOnEsc !== false) {
          jQueryLzNd.close(jQueryLzNd.activeModal);
        }
      }
    })
  );
  for (const [
    messageColors,
    [MESSAGE_TYPES, CellVisibility, MassDisplayType = "#000"],
  ] of Object.entries(fontConfigs)) {
    new FontFaceObserver(MESSAGE_TYPES).load(null, 10000).catch(() => {});
    if (messageColors > 0 && messageColors < 64) {
      $("#spNameFont").append(
        '<option value="' +
          messageColors +
          '" style="font-family: ' +
          MESSAGE_TYPES +
          '" class="nameFont">' +
          capitalize(MESSAGE_TYPES) +
          "</option>"
      );
    }
    fontConfigs[messageColors] = {
      fontFamily: MESSAGE_TYPES,
      fontSize: CellVisibility,
      outlineColor: MassDisplayType,
    };
  }
  await jW39BD0.preloadGameAssets();
  U0QG_Qf = yield_a4eFrbK9_eaa07_Ret(32);
  dNwtiUlea972_Handler = yield_a4eFrbK9_eaa07_Ret(8);
  UNDEFINEDm2hr();
  Zqf9Dh();
  const SKIN_LOAD_STATUS = async (AxisLockThreshold) => {
    const minimapSmoothFactor = ["Beta", "Anubis"];
    const drawMinimapInterval = await fetch(
      "https://accounts.gota.io/api/v1/utilities/servers"
    );
    const baseCellSize = await drawMinimapInterval.json();
    Logger.info("Fetched Servers", baseCellSize);
    for (const combinedCameraDistanceThreshold of baseCellSize) {
      const combinedZoomFocusStrength = combinedCameraDistanceThreshold.servers
        .filter(
          Object$kDcGWUY((...AxisLockThreshold) => {
            AxisLockThreshold.length = 1;
            return !minimapSmoothFactor.includes(
              AxisLockThreshold[0].name?.trim()
            );
          })
        )
        .map(
          Object$kDcGWUY((...AxisLockThreshold) => {
            AxisLockThreshold.length = 1;
            const minimapSmoothFactor =
              parseInt(AxisLockThreshold[0].players) || 0;
            const drawMinimapInterval = AxisLockThreshold[0].bots || 0;
            const baseCellSize =
              "" +
              (minimapSmoothFactor + drawMinimapInterval) +
              "/" +
              AxisLockThreshold[0].playersMax +
              (drawMinimapInterval > 0 ? "*" : "");
            return new VoidNKXXxGq_ea9ab_gte({
              ...AxisLockThreshold[0],
              players: minimapSmoothFactor,
              bots: drawMinimapInterval,
              playerText: baseCellSize,
              region: combinedCameraDistanceThreshold.region,
            });
          })
        )
        .sort(
          Object$kDcGWUY((...AxisLockThreshold) => {
            AxisLockThreshold.length = 2;
            return AxisLockThreshold[0].order - AxisLockThreshold[1].order;
          }, 2)
        );
      asyncq0oTeVQT[combinedCameraDistanceThreshold.region] =
        Object.fromEntries(
          combinedZoomFocusStrength.map(
            Object$kDcGWUY((...AxisLockThreshold) => {
              AxisLockThreshold.length = 1;
              return [AxisLockThreshold[0].name, AxisLockThreshold[0]];
            })
          )
        );
    }
    OlzBkmea9c1_idx();
    AxisLockThreshold?.() ??
      (NghauAMea965_VAL && fGuNueaa0a_err(NghauAMea965_VAL.name));
  };
  MYstEuQeaa14_err.database()
    .ref("/game")
    .on(
      "value",
      Object$kDcGWUY((...AxisLockThreshold) => {
        AxisLockThreshold.length = 1;
        const minimapSmoothFactor = AxisLockThreshold[0].val();
        if (minimapSmoothFactor.listRefresh !== sA76M0oea967_gte) {
          sA76M0oea967_gte = minimapSmoothFactor.listRefresh;
          asyncq0oTeVQT = {};
          SKIN_LOAD_STATUS(PeBgnB15ea966_and);
          clearInterval(Cb_W4cW2);
          Cb_W4cW2 = setInterval(() => {
            return SKIN_LOAD_STATUS();
          }, minimapSmoothFactor.listRefresh);
        }
        for (AxisLockThreshold[-166] in minimapSmoothFactor.titles) {
          WeakMap$jAciSKVZea975_or[AxisLockThreshold[-166]] =
            minimapSmoothFactor.titles[AxisLockThreshold[-166]];
        }
      })
    );
  Get_xynDv5x();
  qKCwea9bc_div();
  TruejJBgB31q(
    JSON.parse(localStorage.getItem("options"))?.cameraMode || "cameraDefault"
  );
  $("#cameraMode > nord-button").on("click", function () {
    TruejJBgB31q($(this).attr("id"));
  });
  XHR_uLPuP9eaa0c_Ex(
    JSON.parse(localStorage.getItem("options"))?.followMouseMode ||
      "followMouseAlways"
  );
  $("#followMouseMode > nord-button").on("click", function () {
    XHR_uLPuP9eaa0c_Ex($(this).attr("id"));
  });
  if ($("#account2-loader").is(":visible")) {
    $("#account2-login").hide();
  } else {
    $("#account2-login").show();
  }
  if ($("#account-loader").is(":visible")) {
    $("#account-login").hide();
  } else {
    $("#account-login").show();
  }
  HandlerR0b5TLt$();
  BigIntLsuea9cc_ex(false);
  jQueryLzNd.open("mainModal");
  setTimeout(() => {
    jQueryLzNd.open("aboutModal");
  }, 500);
}
function qKCwea9bc_div(...AxisLockThreshold) {
  Object$kDcGWUY(baseCellSize, 2);
  Object$kDcGWUY(minimapSmoothFactor, 2);
  $("#btnToggleServers").on("click", function () {
    const AxisLockThreshold = $(this);
    const minimapSmoothFactor = AxisLockThreshold.attr("region");
    if (minimapSmoothFactor === "eu") {
      AxisLockThreshold.attr("region", "na").text("North America");
      Await_IJIz2M("na");
      $(".main-right").css("height", "" + XHReYHH$ea9c2_bool() + "px");
    } else {
      AxisLockThreshold.attr("region", "eu").text("Europe");
      Await_IJIz2M("eu");
      $(".main-right").css("height", "" + XHReYHH$ea9c2_bool() + "px");
    }
  });
  $("#name-box, #name-box2").on("input", function () {
    do_QEm141(true);
  });
  $("#soloTrickModeAuto").on("click", () => {
    return y2jX$eaa13_Idx("AUTO");
  });
  $("#soloTrickModeManual").on("click", () => {
    return y2jX$eaa13_Idx("MANUAL");
  });
  function minimapSmoothFactor(...AxisLockThreshold) {
    let minimapSmoothFactor;
    return function (...drawMinimapInterval) {
      clearTimeout(minimapSmoothFactor);
      minimapSmoothFactor = setTimeout(() => {
        AxisLockThreshold[0].apply(this, drawMinimapInterval);
      }, AxisLockThreshold[1]);
    };
  }
  $("#themeColor").on(
    "input",
    minimapSmoothFactor(function () {
      const AxisLockThreshold = $(this);
      const minimapSmoothFactor = AxisLockThreshold.val();
      const drawMinimapInterval = document.documentElement;
      drawMinimapInterval.style.setProperty(
        "--n-color-accent",
        minimapSmoothFactor
      );
      drawMinimapInterval.style.setProperty(
        "--n-color-weak-accent",
        Pto5ea937_Inst(minimapSmoothFactor).darken(10).toHexString() + "25"
      );
      drawMinimapInterval.style.setProperty(
        "--n-color-accent-secondary",
        Pto5ea937_Inst(minimapSmoothFactor).lighten(10).toHexString()
      );
      drawMinimapInterval.style.setProperty(
        "--n-color-text-on-accent",
        Pto5ea937_Inst(DEFAULT$HB0T_ea93b_Status["--n-color-accent"]).isLight()
          ? "#0c0c0c"
          : "#d8d8d8"
      );
      DEFAULT$HB0T_ea93b_Status["--n-color-accent"] = minimapSmoothFactor;
      DEFAULT$HB0T_ea93b_Status["--n-color-weak-accent"] =
        Pto5ea937_Inst(minimapSmoothFactor).darken(10).toHexString() + "25";
      DEFAULT$HB0T_ea93b_Status["--n-color-accent-secondary"] = Pto5ea937_Inst(
        minimapSmoothFactor
      )
        .lighten(10)
        .toHexString();
      DEFAULT$HB0T_ea93b_Status["--n-color-text-on-accent"] = Pto5ea937_Inst(
        minimapSmoothFactor
      ).isLight()
        ? "#0c0c0c"
        : "#d8d8d8";
      do_QEm141();
      g5Mea9c8_TYPE();
      Dom34uUv8$ea9b1_bool.invalidateCache();
      Map$XDb6n5y_ea974_State.clear();
    }, 5)
  );
  $("#sRgbColor1").on(
    "input",
    minimapSmoothFactor(function () {
      Mao5huZea938_run.sRgbColor1 = $(this).val();
      do_QEm141();
    }, 5)
  );
  $("#sRgbColor2").on(
    "input",
    minimapSmoothFactor(function () {
      Mao5huZea938_run.sRgbColor2 = $(this).val();
      do_QEm141();
    }, 5)
  );
  $("#rgbSpeed").on("change", function () {
    let AxisLockThreshold = parseInt($(this).val());
    if (isNaN(AxisLockThreshold)) {
      AxisLockThreshold = 50;
    }
    const minimapSmoothFactor = Math.min(Math.max(AxisLockThreshold, 5), 100);
    Mao5huZea938_run.rRgbSpeed = minimapSmoothFactor;
    $("#rRgbSpeed").val(minimapSmoothFactor);
    $(this).val(minimapSmoothFactor);
    do_QEm141();
  });
  $("#playBtn").on("click", function () {
    if (NghauAMea965_VAL == null) {
      return;
    }
    if (
      If$sEyzqKbhea93f_Exec.myCells.size !== 0 &&
      If$sEyzqKbhea93f_Exec.currentServerName === NghauAMea965_VAL.name
    ) {
      jQueryLzNd.close("mainModal");
      return;
    }
    If$sEyzqKbhea93f_Exec.spectate = false;
    If$sEyzqKbhea93f_Exec.enabled = true;
    Str_NmyJ4kX.enabled = false;
    If$sEyzqKbhea93f_Exec.play();
  });
  $("#specBtn").on("click", function () {
    If$sEyzqKbhea93f_Exec.spec();
  });
  $("#btnModalGotaRedux").on("click", () => {
    jQueryLzNd.open("aboutModal");
  });
  $("[data-close-modal]").on("click", function () {
    const AxisLockThreshold = $(this).closest(".modal-overlay").attr("id");
    jQueryLzNd.close(AxisLockThreshold);
  });
  async_D8l9NKg.forEach(
    Object$kDcGWUY((...AxisLockThreshold) => {
      AxisLockThreshold.length = 1;
      AxisLockThreshold[0].addEventListener("click", function () {
        PMulimorea994_str.forEach(
          Object$kDcGWUY((...AxisLockThreshold) => {
            AxisLockThreshold.length = 1;
            AxisLockThreshold[0].style.display = "none";
            AxisLockThreshold[0].classList.remove("active");
          })
        );
        async_D8l9NKg.forEach(
          Object$kDcGWUY((...AxisLockThreshold) => {
            AxisLockThreshold.length = 1;
            AxisLockThreshold[0].setAttribute("variant", "default");
          })
        );
        const AxisLockThreshold = this.dataset.tab;
        const minimapSmoothFactor = document.querySelector(
          '[data-tab="' + AxisLockThreshold + '"]'
        );
        const drawMinimapInterval = document.getElementById(AxisLockThreshold);
        if (minimapSmoothFactor && drawMinimapInterval) {
          minimapSmoothFactor.setAttribute("variant", "primary");
          drawMinimapInterval.style.display = "block";
          drawMinimapInterval.classList.add("active");
        }
      });
    })
  );
  $(".mainTabBtn").on("click", function () {
    $(".mainTabBtn").attr("variant", "default");
    $(this).attr("variant", "primary");
  });
  const drawMinimapInterval = {
    "#btnServers": {
      id: "main-servers",
      height: () => {
        return XHReYHH$ea9c2_bool();
      },
      overflow: "hidden",
      extraBtn: "#btnToggleServers",
    },
    "#btnOptions": {
      id: "main-options",
      height: () => {
        return XHReYHH$ea9c2_bool("eu");
      },
      overflow: "auto",
      extraBtn: "#btnResetOptions",
    },
    "#btnKeybinds": {
      id: "main-hotkeys",
      height: () => {
        return XHReYHH$ea9c2_bool("eu");
      },
      overflow: "auto",
      extraBtn: "#btnResetKeybinds",
    },
  };
  Object.entries(drawMinimapInterval).forEach(
    ([AxisLockThreshold, minimapSmoothFactor]) => {
      $(AxisLockThreshold).on("click", function () {
        $(".main-right")
          .css("height", minimapSmoothFactor.height())
          .css("overflow", minimapSmoothFactor.overflow);
        $(".main-right > div > nord-button").hide();
        if (minimapSmoothFactor.extraBtn) {
          $(minimapSmoothFactor.extraBtn).show();
        }
        HelperUhSO_ea9e8_Run(minimapSmoothFactor.id);
      });
    }
  );
  Array_eUa8SZ3Z$ea992_Buf.addEventListener(
    "keyup",
    function (AxisLockThreshold) {
      const minimapSmoothFactor = AxisLockThreshold.target.value;
      const drawMinimapInterval = minimapSmoothFactor.split(" ");
      const baseCellSize = $(this).is(":focus");
      const combinedCameraDistanceThreshold =
        minimapSmoothFactor.length === 0 || minimapSmoothFactor.endsWith(" ");
      const combinedZoomFocusStrength = AxisLockThreshold.keyCode;
      const combinedInterpSpeed = document.getElementById(
        "autocomplete-popout"
      );
      const messageColors = document.getElementById("autocomplete-panel");
      if (!combinedInterpSpeed.anchor) {
        combinedInterpSpeed.anchor = "chat-input";
      }
      combinedInterpSpeed.position = "block-start";
      if (combinedZoomFocusStrength === 38 && baseCellSize) {
        if (while_dFOcH$ea958_ret === -1) {
          while_dFOcH$ea958_ret = Lodashif3ebPI.length - 1;
        } else if (while_dFOcH$ea958_ret > 0) {
          while_dFOcH$ea958_ret--;
        }
        if (Lodashif3ebPI.length > 0 && while_dFOcH$ea958_ret >= 0) {
          CtxBk7q_(Lodashif3ebPI[while_dFOcH$ea958_ret]);
        }
        return;
      }
      if (combinedZoomFocusStrength === 40 && baseCellSize) {
        if (while_dFOcH$ea958_ret < Lodashif3ebPI.length - 1) {
          while_dFOcH$ea958_ret++;
        } else {
          while_dFOcH$ea958_ret = -1;
        }
        if (Lodashif3ebPI.length > 0 && while_dFOcH$ea958_ret >= 0) {
          CtxBk7q_(Lodashif3ebPI[while_dFOcH$ea958_ret]);
        } else {
          CtxBk7q_("");
        }
        return;
      }
      if (combinedZoomFocusStrength === 13 && baseCellSize) {
        in_Lv7rr7N($(this).val());
        setTimeout(() => {
          $("#chat-input").blur();
        }, 2);
      }
      if (combinedCameraDistanceThreshold || combinedZoomFocusStrength === 13) {
        combinedInterpSpeed.open = false;
        return;
      }
      if (minimapSmoothFactor.startsWith("/")) {
        if (drawMinimapInterval.length > 1) {
          combinedInterpSpeed.open = false;
          return;
        }
        messageColors.innerHTML = "";
        const MESSAGE_TYPES = drawMinimapInterval[0].substring(1).toLowerCase();
        const CellVisibility = StringifyQqsoaEea9b3_Handler.filter(
          Object$kDcGWUY((...AxisLockThreshold) => {
            AxisLockThreshold.length = 1;
            return AxisLockThreshold[0].triggers.some(
              Object$kDcGWUY((...AxisLockThreshold) => {
                AxisLockThreshold.length = 1;
                return AxisLockThreshold[0]
                  .toLowerCase()
                  .startsWith(MESSAGE_TYPES);
              })
            );
          })
        );
        let MassDisplayType = false;
        for (const SKIN_LOAD_STATUS of CellVisibility) {
          const PlayerState = SKIN_LOAD_STATUS.triggers.findIndex(
            Object$kDcGWUY((...AxisLockThreshold) => {
              AxisLockThreshold.length = 1;
              return AxisLockThreshold[0]
                .toLowerCase()
                .startsWith(MESSAGE_TYPES);
            })
          );
          if (PlayerState > -1) {
            const defaultKeyMappings =
              '\n                <div class="autocomplete-command-row">\n                    <div class="command-name">/' +
              SKIN_LOAD_STATUS.triggers[PlayerState] +
              '</div>\n                    <div class="command-aliases">(' +
              SKIN_LOAD_STATUS.triggers.join(", ") +
              ')</div>\n                    <div class="command-desc">' +
              SKIN_LOAD_STATUS.description +
              "</div>\n                </div>\n            ";
            $("#autocomplete-panel").append(defaultKeyMappings);
            MassDisplayType = true;
          }
        }
        combinedInterpSpeed.open = MassDisplayType;
      } else {
        const defaultOptions =
          drawMinimapInterval[drawMinimapInterval.length - 1];
        if (!defaultOptions.startsWith(":")) {
          combinedInterpSpeed.open = false;
          return;
        }
        messageColors.innerHTML = "";
        const defaultSubPanelSettings = Object.keys(FalseJax).filter(
          Object$kDcGWUY((...AxisLockThreshold) => {
            AxisLockThreshold.length = 1;
            return AxisLockThreshold[0]
              .toLowerCase()
              .includes(defaultOptions.substring(1).toLowerCase());
          })
        );
        const fontConfigs = Object.keys(xhr_tj9avEM).filter(
          Object$kDcGWUY((...AxisLockThreshold) => {
            AxisLockThreshold.length = 1;
            return AxisLockThreshold[0]
              .toLowerCase()
              .includes(defaultOptions.substring(1).toLowerCase());
          })
        );
        if (defaultSubPanelSettings.length === 0 && fontConfigs.length === 0) {
          combinedInterpSpeed.open = false;
          return;
        }
        combinedInterpSpeed.open = true;
        if (defaultSubPanelSettings.length > 0) {
          $("#autocomplete-panel").append("<h3>Emotes</h3>");
          for (const readAscii of defaultSubPanelSettings) {
            $("#autocomplete-panel").append(
              '<img name="' +
                readAscii +
                '" title="' +
                readAscii +
                '" src="images/emotes/' +
                readAscii +
                '.png" />'
            );
          }
        }
        if (fontConfigs.length > 0) {
          $("#autocomplete-panel").append("<h3>Gifs</h3>");
          for (const readAscii of fontConfigs) {
            $("#autocomplete-panel").append(
              '<img name="' +
                readAscii +
                '" title="' +
                readAscii +
                '" src="images/emotes/gifs/' +
                readAscii +
                '.gif" />'
            );
          }
        }
      }
      while_dFOcH$ea958_ret = -1;
    }
  );
  $("#autocomplete-panel").on(
    "click",
    Object$kDcGWUY(function (...AxisLockThreshold) {
      AxisLockThreshold.length = 1;
      const minimapSmoothFactor = document.getElementById(
        "autocomplete-popout"
      );
      if (AxisLockThreshold[0].target.nodeName === "IMG") {
        const drawMinimapInterval = $("#chat-input").val();
        const baseCellSize = drawMinimapInterval.split(" ").pop();
        CtxBk7q_(
          drawMinimapInterval.substring(
            0,
            drawMinimapInterval.length - baseCellSize.length
          ) +
            AxisLockThreshold[0].target.attributes.name.nodeValue +
            " "
        );
        minimapSmoothFactor.open = false;
        $("#chat-input").focus();
      }
    })
  );
  $("#autocomplete-panel").on(
    "click",
    Object$kDcGWUY(function (...AxisLockThreshold) {
      AxisLockThreshold.length = 1;
      AxisLockThreshold[1] = $("#chat-input").val().split(" ");
      if (AxisLockThreshold[0].target.nodeName === "TD") {
        CtxBk7q_(
          "/" +
            AxisLockThreshold[0].target.parentElement.children[0].innerHTML +
            " "
        );
      } else if (AxisLockThreshold[0].target.nodeName === "IMG") {
        AxisLockThreshold.b = $("#chat-input").val();
        AxisLockThreshold[-4] =
          AxisLockThreshold[1][AxisLockThreshold[1].length - 1];
        CtxBk7q_(
          AxisLockThreshold.b.substring(
            0,
            AxisLockThreshold.b.length - AxisLockThreshold[-4].length
          ) +
            AxisLockThreshold[0].target.attributes.name.nodeValue +
            " "
        );
      }
      $("#autocomplete-panel").html("").hide();
      $("#chat-input").focus();
    })
  );
  $("#animationDelay").on("change", function () {
    var AxisLockThreshold = parseInt($(this).val());
    if (isNaN(AxisLockThreshold)) {
      AxisLockThreshold = 90;
    }
    Mao5huZea938_run.rAnimationDelay = Math.min(
      Math.max(AxisLockThreshold, 1),
      250
    );
    $("#animationDelay").val(Mao5huZea938_run.rAnimationDelay);
    $("#rAnimationDelay").val(Mao5huZea938_run.rAnimationDelay);
  });
  $("#camDelay").on("change", function () {
    var AxisLockThreshold = parseInt($(this).val());
    if (isNaN(AxisLockThreshold)) {
      AxisLockThreshold = 100;
    }
    Mao5huZea938_run.rCamDelay = Math.min(Math.max(AxisLockThreshold, 50), 200);
    $("#camDelay").val(Mao5huZea938_run.rCamDelay);
    $("#rCamDelay").val(Mao5huZea938_run.rCamDelay);
  });
  $("#textOutlines").on("change", function () {
    var AxisLockThreshold = parseInt($(this).val());
    if (isNaN(AxisLockThreshold)) {
      AxisLockThreshold = 5;
    }
    Mao5huZea938_run.rTextOutlines = Math.min(
      Math.max(AxisLockThreshold, 0),
      10
    );
    $("#textOutlines").val(Mao5huZea938_run.rTextOutlines);
    $("#rTextOutlines").val(Mao5huZea938_run.rTextOutlines);
  });
  $("#combinedViewportScale").on("change", function () {
    var AxisLockThreshold = parseInt($(this).val());
    if (isNaN(AxisLockThreshold)) {
      AxisLockThreshold = 0.8;
    }
    Mao5huZea938_run.rCombinedViewportScale = Math.min(
      Math.max(AxisLockThreshold, 0),
      1
    );
    $("#combinedViewportScale").val(Mao5huZea938_run.rCombinedViewportScale);
    $("#rCombinedViewportScale").val(Mao5huZea938_run.rCombinedViewportScale);
  });
  $("#viewDistance").on("change", function () {
    var AxisLockThreshold = parseInt($(this).val());
    if (isNaN(AxisLockThreshold)) {
      AxisLockThreshold = 100;
    }
    Mao5huZea938_run.rViewDistance = Math.min(
      Math.max(AxisLockThreshold, 50),
      150
    );
    $("#viewDistance").val(Mao5huZea938_run.rViewDistance);
    $("#rViewDistance").val(Mao5huZea938_run.rViewDistance);
    If$sEyzqKbhea93f_Exec.sendOptions();
    Str_NmyJ4kX.sendOptions();
  });
  $("#emotePanel img").on(
    "click",
    Object$kDcGWUY(function (...AxisLockThreshold) {
      AxisLockThreshold.length = 1;
      $("#chat-input")
        .val($("#chat-input").val() + AxisLockThreshold[0].target.name + " ")
        .focus();
    })
  );
  $(".checkbox-option")
    .off("change")
    .on("change", function () {
      EkFea9da_mul($(this));
    });
  $(".options-container nord-dropdown")
    .off("change")
    .on("change", function () {
      Map_f43ea9db_ret(this);
    });
  $(".options-container nord-range, .options-container nord-input")
    .off("input")
    .on("input", function () {
      TruepwDZ3M$ea9dc_Res($(this));
    });
  $("#popup-party-code-content button").on(
    "click",
    function (...AxisLockThreshold) {
      AxisLockThreshold.length = 0;
      const minimapSmoothFactor = $("#popup-party-code-content input");
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard
          .writeText(minimapSmoothFactor.val())
          .then(() => {
            $("#popup-party-code").hide();
          })
          .catch(
            Object$kDcGWUY((...AxisLockThreshold) => {
              AxisLockThreshold.length = 1;
              console.error("Failed to copy text: ", AxisLockThreshold[0]);
              minimapSmoothFactor.select();
              document.execCommand("Copy");
              $("#popup-party-code").hide();
            })
          );
      } else {
        minimapSmoothFactor.select();
        document.execCommand("Copy");
        $("#popup-party-code").hide();
      }
    }
  );
  $("#menu-invite").on("click", function (...AxisLockThreshold) {
    AxisLockThreshold.length = 0;
    AxisLockThreshold[222] = djUgiSea98e_Fn.data("selected");
    if (If$sEyzqKbhea93f_Exec.enabled) {
      If$sEyzqKbhea93f_Exec.sendPacket(
        VoidGBYH.sendPartyAction(0, AxisLockThreshold[222])
      );
    } else if (Str_NmyJ4kX.enabled) {
      Str_NmyJ4kX.sendPacket(
        VoidGBYH.sendPartyAction(0, AxisLockThreshold[222])
      );
    }
  });
  $("#menu-whisper").on("click", function (...AxisLockThreshold) {
    AxisLockThreshold.length = 0;
    AxisLockThreshold.b = djUgiSea98e_Fn.data("selected");
    AxisLockThreshold.c = $("#chat-input").val();
    $("#chat-input").val(
      "/t " + AxisLockThreshold.b + " " + AxisLockThreshold.c
    );
  });
  $("#menu-profile").on("click", function (...AxisLockThreshold) {
    AxisLockThreshold.length = 0;
    AxisLockThreshold[142] = djUgiSea98e_Fn.data("selected");
    faCUfKea9fb_add().sendPacket(
      VoidGBYH.sendShowProfile(AxisLockThreshold[142])
    );
  });
  $("#menu-pu_pr").on("click", function () {
    if (faCUfKea9fb_add().partyCode == undefined) {
      faCUfKea9fb_add().sendPacket(VoidGBYH.sendPartyAction(4, 0));
      $("#menu-pu_pr span").text("Private");
    } else {
      faCUfKea9fb_add().sendPacket(VoidGBYH.sendPartyAction(4, 1));
      $("#menu-pu_pr span").text("Public");
    }
  });
  $("#menu-promote").on("click", function (...AxisLockThreshold) {
    AxisLockThreshold.length = 0;
    AxisLockThreshold[-16] = djUgiSea98e_Fn.data("party") + 1;
    console.log(AxisLockThreshold[-16]);
    if (faCUfKea9fb_add().isPartyLeader()) {
      KEGPXBW(2, AxisLockThreshold[-16]);
    }
  });
  $("#menu-kick").on("click", function (...AxisLockThreshold) {
    AxisLockThreshold.length = 0;
    AxisLockThreshold.a = djUgiSea98e_Fn.data("party") + 1;
    if (AxisLockThreshold.a >= 0) {
      if (faCUfKea9fb_add().isPartyLeader()) {
        faCUfKea9fb_add().sendPacket(
          VoidGBYH.sendPartyAction(1, AxisLockThreshold.a)
        );
      }
    }
  });
  $("#menu-spectate").on("click", function (...AxisLockThreshold) {
    AxisLockThreshold.length = 0;
    AxisLockThreshold[43] = djUgiSea98e_Fn.data("selected");
    if (AxisLockThreshold[43] >= 0) {
      faCUfKea9fb_add().sendPacket(
        VoidGBYH.sendSpectate(AxisLockThreshold[43])
      );
    }
  });
  $("#menu-block").on("click", function (...AxisLockThreshold) {
    AxisLockThreshold.length = 0;
    AxisLockThreshold[191] = parseInt(djUgiSea98e_Fn.data("selected"));
    faCUfKea9fb_add().selfMsg(bmBtnjkeaa09_or(AxisLockThreshold[191]));
  });
  $("#leaveParty").on("click", function () {
    faCUfKea9fb_add().sendPacket(VoidGBYH.sendPartyAction(3, 0));
  });
  $(document).on(
    "click",
    Object$kDcGWUY(function (...AxisLockThreshold) {
      AxisLockThreshold.length = 1;
      djUgiSea98e_Fn.removeAttr("open");
    })
  );
  MYstEuQeaa14_err.auth().onAuthStateChanged(
    Object$kDcGWUY(function (...AxisLockThreshold) {
      AxisLockThreshold.length = 1;
      if (AxisLockThreshold[0]) {
        H3xBjq();
        if (
          If$sEyzqKbhea93f_Exec.isConnected() &&
          MYstEuQeaa14_err.auth().currentUser !== null
        ) {
          MYstEuQeaa14_err.auth()
            .currentUser.getIdToken(true)
            .then(
              Object$kDcGWUY((...AxisLockThreshold) => {
                AxisLockThreshold.length = 1;
                If$sEyzqKbhea93f_Exec.sendPacket(
                  VoidGBYH.sendAuthToken(AxisLockThreshold[0])
                );
              })
            )
            .catch(
              Object$kDcGWUY((...AxisLockThreshold) => {
                AxisLockThreshold.length = 1;
                return HelperBFZkQ(AxisLockThreshold[0], true);
              })
            );
        }
        AxisLockThreshold[-145] = MYstEuQeaa14_err.database().ref(
          "users/" + AxisLockThreshold[0].uid
        );
        AxisLockThreshold[229] = false;
        AxisLockThreshold[-145].on(
          "value",
          Object$kDcGWUY(function (...minimapSmoothFactor) {
            minimapSmoothFactor.length = 1;
            minimapSmoothFactor[-3] = minimapSmoothFactor[0].val();
            if (!minimapSmoothFactor[-3]) {
              return;
            }
            if (!AxisLockThreshold[229]) {
              $("#account-loader").hide();
              $("#authed").css("display", "flex");
              $("#cGlobalLeaderboard").removeAttr("disabled");
              $("#cGlobalLeaderboard").prop(
                "checked",
                minimapSmoothFactor[-3].flags.PUBLIC
              );
              AxisLockThreshold[229] = true;
            }
            AtgnhF = minimapSmoothFactor[-3];
            $("#account-avatar").attr("src", minimapSmoothFactor[-3].avatar);
            $("#account-username").text(minimapSmoothFactor[-3].username);
            CHueaa10_Proc($("#account-username"), minimapSmoothFactor[-3]);
            $("#account-level").html(
              "Level " + minimapSmoothFactor[-3].levelData.level
            );
            $("#xpMeter1, #account-level, #account-logout").show();
            $("#account-login").hide();
            $("#levelXP1").html(
              formatExperience(minimapSmoothFactor[-3].levelData.xp_current) +
                "/" +
                formatExperience(minimapSmoothFactor[-3].levelData.xp_needed) +
                " XP"
            );
            const drawMinimapInterval =
              (minimapSmoothFactor[-3].levelData.xp_current /
                minimapSmoothFactor[-3].levelData.xp_needed) *
              100;
            $("#xpMeter1").attr("value", drawMinimapInterval);
            if (!If$sEyzqKbhea93f_Exec.accountListeners.loadServers) {
              If$sEyzqKbhea93f_Exec.accountListeners.loadServers =
                MYstEuQeaa14_err.database()
                  .ref("servers/account/" + AtgnhF.uid)
                  .on(
                    "value",
                    Object$kDcGWUY(function (...minimapSmoothFactor) {
                      minimapSmoothFactor.length = 1;
                      minimapSmoothFactor[1] = minimapSmoothFactor[0].val();
                      if (!minimapSmoothFactor[1]) {
                        return;
                      }
                      loadedServers = {};
                      for (minimapSmoothFactor[-20] in minimapSmoothFactor[1]) {
                        minimapSmoothFactor.c =
                          minimapSmoothFactor[1][minimapSmoothFactor[-20]];
                        if (minimapSmoothFactor.c.up) {
                          loadedServers[minimapSmoothFactor.c.name] =
                            new VoidNKXXxGq_ea9ab_gte({
                              name: minimapSmoothFactor.c.name,
                              address:
                                "" +
                                minimapSmoothFactor.c.ip +
                                ":" +
                                minimapSmoothFactor.c.port,
                              players: 0,
                              bots: 0,
                              playerText: "?",
                              gamemode: minimapSmoothFactor.c.gamemode,
                              region: minimapSmoothFactor.c.region,
                              ssl: minimapSmoothFactor.c.ssl,
                              order: 0,
                            });
                        }
                      }
                      OlzBkmea9c1_idx();
                      if (NghauAMea965_VAL != null) {
                        fGuNueaa0a_err(NghauAMea965_VAL.name);
                      }
                    })
                  );
            }
            if (
              minimapSmoothFactor[-3].flags.DISCORD_LINKED &&
              !If$sEyzqKbhea93f_Exec.accountListeners.loadDiscord
            ) {
              If$sEyzqKbhea93f_Exec.accountListeners.loadDiscord =
                MYstEuQeaa14_err.firestore()
                  .collection("discord")
                  .doc(AtgnhF.uid)
                  .onSnapshot(
                    Object$kDcGWUY((...minimapSmoothFactor) => {
                      minimapSmoothFactor.length = 1;
                      if (minimapSmoothFactor[0].exists) {
                        $("#discordLinkStatus").text(
                          "Your account is linked with " +
                            minimapSmoothFactor[0].data().username +
                            "#" +
                            minimapSmoothFactor[0].data().discrim
                        );
                        $("#discordLinkStatus").show();
                        $("#discordLink").hide();
                        $("#discordUnlink").show();
                        $(".discord-login-container").css("padding", "15px");
                      } else {
                        $("#discordLinkStatus").hide();
                        $("#discordUnlink").hide();
                        $("#discordLink").show();
                        $(".discord-login-container").css("padding", "30px");
                      }
                    })
                  );
            }
            if (minimapSmoothFactor[-3].tokens !== undefined) {
              minimapSmoothFactor[2] = new Date();
              minimapSmoothFactor[2].setMonth(
                minimapSmoothFactor[2].getMonth() +
                  minimapSmoothFactor[-3].tokens
              );
              if (minimapSmoothFactor[-3].tokens == 0) {
                $("#redeem-tokens").hide();
                $("#token-amount").text("You have 0 tokens.");
              } else {
                $("#redeem-tokens").show();
                $("#token-amount").text(
                  "You have " +
                    minimapSmoothFactor[-3].tokens +
                    " tokens, maximum expiry date: " +
                    minimapSmoothFactor[2].toString()
                );
                $("#redeem-spend").attr("max", minimapSmoothFactor[-3].tokens);
              }
            } else {
              $("#token-amount").text("You have 0 tokens.");
            }
            if (
              AtgnhF.title &&
              AtgnhF.title > 0 &&
              xmea976_xor &&
              xmea976_xor.titles &&
              xmea976_xor.titles.length > 0
            ) {
              minimapSmoothFactor[-21] = $("#account-titles");
              minimapSmoothFactor.d = 0;
              for (
                minimapSmoothFactor[190] = 0;
                minimapSmoothFactor[190] < xmea976_xor.titles.length;
                minimapSmoothFactor[190]++
              ) {
                if (
                  xmea976_xor.titles[minimapSmoothFactor[190]] == AtgnhF.title
                ) {
                  minimapSmoothFactor.d = minimapSmoothFactor[190] + 1;
                }
              }
              if (minimapSmoothFactor.d > 0) {
                minimapSmoothFactor[-21].val(minimapSmoothFactor.d);
              }
            }
            if (!If$sEyzqKbhea93f_Exec.accountListeners.loadPrivateData) {
              If$sEyzqKbhea93f_Exec.accountListeners.loadPrivateData =
                MYstEuQeaa14_err.database()
                  .ref("private/" + AxisLockThreshold[0].uid)
                  .on(
                    "value",
                    Object$kDcGWUY(function (...minimapSmoothFactor) {
                      minimapSmoothFactor.length = 1;
                      const drawMinimapInterval = minimapSmoothFactor[0].val();
                      if (!drawMinimapInterval) {
                        return;
                      }
                      xmea976_xor = drawMinimapInterval;
                      if (xmea976_xor.titles && xmea976_xor.titles.length > 0) {
                        minimapSmoothFactor[1] = $("#account-titles");
                        minimapSmoothFactor[2] = 0;
                        minimapSmoothFactor[1].empty();
                        minimapSmoothFactor[1].append(
                          "<option value='0'>Default Title</option>"
                        );
                        for (
                          minimapSmoothFactor.c = 0;
                          minimapSmoothFactor.c <
                          drawMinimapInterval.titles.length;
                          minimapSmoothFactor.c++
                        ) {
                          minimapSmoothFactor[1].append(
                            "<option value='" +
                              (minimapSmoothFactor.c + 1) +
                              "'>" +
                              WeakMap$jAciSKVZea975_or[
                                xmea976_xor.titles[minimapSmoothFactor.c]
                              ] +
                              "</option>"
                          );
                          if (
                            xmea976_xor.titles[minimapSmoothFactor.c] ==
                            AtgnhF.title
                          ) {
                            minimapSmoothFactor[2] = minimapSmoothFactor.c + 1;
                          }
                        }
                        if (minimapSmoothFactor[2] > 0) {
                          minimapSmoothFactor[1].val(minimapSmoothFactor[2]);
                        }
                        minimapSmoothFactor[1].css("display", "inline-block");
                      } else {
                        $("#account-titles").css("display", "none");
                      }
                      if (
                        xmea976_xor.message &&
                        xmea976_xor.message.title &&
                        xmea976_xor.message.content &&
                        !xmea976_xor.message.read
                      ) {
                        $("#popup-message-title").text(
                          xmea976_xor.message.title
                        );
                        $("#popup-message-content").html(
                          xmea976_xor.message.content
                        );
                        hdnn_8ea9ea_Idx($("#popup-message"));
                        jQueryLzNd.close("mainModal");
                      }
                    })
                  );
            }
            DEFAULT_B6Cea9c5_Ret(AxisLockThreshold[0].uid);
          })
        );
      } else {
        WHILEn5ZHH();
      }
    })
  );
  FLsTXl.auth().onAuthStateChanged(
    Object$kDcGWUY(function (...AxisLockThreshold) {
      AxisLockThreshold.length = 1;
      if (AxisLockThreshold[0]) {
        IfbIa();
        if (Str_NmyJ4kX.isConnected() && FLsTXl.auth().currentUser !== null) {
          FLsTXl.auth()
            .currentUser.getIdToken(true)
            .then(
              Object$kDcGWUY((...AxisLockThreshold) => {
                AxisLockThreshold.length = 1;
                Str_NmyJ4kX.sendPacket(
                  VoidGBYH.sendAuthToken(AxisLockThreshold[0])
                );
              })
            )
            .catch(
              Object$kDcGWUY((...AxisLockThreshold) => {
                AxisLockThreshold.length = 1;
                return HelperBFZkQ(AxisLockThreshold[0], true);
              })
            );
        }
        AxisLockThreshold[1] = FLsTXl.database().ref(
          "users/" + AxisLockThreshold[0].uid
        );
        AxisLockThreshold.b = false;
        AxisLockThreshold[1].on(
          "value",
          Object$kDcGWUY(function (...minimapSmoothFactor) {
            minimapSmoothFactor.length = 1;
            const drawMinimapInterval = minimapSmoothFactor[0].val();
            if (!drawMinimapInterval) {
              return;
            }
            if (!AxisLockThreshold.b) {
              $("#account2-loader").hide();
              $("#authed2").css("display", "flex");
              $("#cGlobalLeaderboard2").removeAttr("disabled");
              $("#cGlobalLeaderboard2").prop(
                "checked",
                drawMinimapInterval.flags.PUBLIC
              );
              AxisLockThreshold.b = true;
            }
            qRcea94d_init = drawMinimapInterval;
            $("#account2-avatar").attr("src", drawMinimapInterval.avatar);
            $("#account2-username").text(drawMinimapInterval.username);
            CHueaa10_Proc($("#account2-username"), drawMinimapInterval);
            $("#account2-level").html(
              "Level " + drawMinimapInterval.levelData.level
            );
            $(
              "#xpMeter2, #account2-level, #account2-actions, #account2-logout"
            ).show();
            $("#account2-login").hide();
            $("#levelXP2").html(
              formatExperience(drawMinimapInterval.levelData.xp_current) +
                "/" +
                formatExperience(drawMinimapInterval.levelData.xp_needed) +
                " XP"
            );
            const baseCellSize =
              (drawMinimapInterval.levelData.xp_current /
                drawMinimapInterval.levelData.xp_needed) *
              100;
            $("#xpMeter2").attr("value", baseCellSize);
            if (
              drawMinimapInterval.flags.DISCORD_LINKED &&
              !Str_NmyJ4kX.accountListeners.loadDiscord
            ) {
              Str_NmyJ4kX.accountListeners.loadDiscord = FLsTXl.firestore()
                .collection("discord")
                .doc(qRcea94d_init.uid)
                .onSnapshot(
                  Object$kDcGWUY((...minimapSmoothFactor) => {
                    minimapSmoothFactor.length = 1;
                    if (minimapSmoothFactor[0].exists) {
                      $("#discordLinkStatus").text(
                        "Your account is linked with " +
                          minimapSmoothFactor[0].data().username +
                          "#" +
                          minimapSmoothFactor[0].data().discrim
                      );
                      $("#discordLinkStatus").show();
                      $("#discordLink").hide();
                      $("#discordUnlink").show();
                      $(".discord-login-container").css("padding", "15px");
                    } else {
                      $("#discordLinkStatus").hide();
                      $("#discordUnlink").hide();
                      $("#discordLink").show();
                      $(".discord-login-container").css("padding", "30px");
                    }
                  })
                );
            }
            if (
              qRcea94d_init.title &&
              qRcea94d_init.title > 0 &&
              xmea976_xor &&
              xmea976_xor.titles &&
              xmea976_xor.titles.length > 0
            ) {
              minimapSmoothFactor[146] = $("#account2-titles");
              minimapSmoothFactor.b = 0;
              for (
                minimapSmoothFactor[-69] = 0;
                minimapSmoothFactor[-69] < xmea976_xor.titles.length;
                minimapSmoothFactor[-69]++
              ) {
                if (
                  xmea976_xor.titles[minimapSmoothFactor[-69]] ==
                  qRcea94d_init.title
                ) {
                  minimapSmoothFactor.b = minimapSmoothFactor[-69] + 1;
                }
              }
              if (minimapSmoothFactor.b > 0) {
                minimapSmoothFactor[146].val(minimapSmoothFactor.b);
              }
            }
            if (!Str_NmyJ4kX.accountListeners.loadPrivateData) {
              Str_NmyJ4kX.accountListeners.loadPrivateData = FLsTXl.database()
                .ref("private/" + AxisLockThreshold[0].uid)
                .on(
                  "value",
                  Object$kDcGWUY(function (...minimapSmoothFactor) {
                    minimapSmoothFactor.length = 1;
                    const drawMinimapInterval = minimapSmoothFactor[0].val();
                    if (!drawMinimapInterval) {
                      return;
                    }
                    xmea976_xor = drawMinimapInterval;
                    if (xmea976_xor.titles && xmea976_xor.titles.length > 0) {
                      minimapSmoothFactor[1] = $("#account2-titles");
                      minimapSmoothFactor[2] = 0;
                      minimapSmoothFactor[1].empty();
                      minimapSmoothFactor[1].append(
                        "<option value='0'>Default Title</option>"
                      );
                      for (
                        minimapSmoothFactor.c = 0;
                        minimapSmoothFactor.c <
                        drawMinimapInterval.titles.length;
                        minimapSmoothFactor.c++
                      ) {
                        minimapSmoothFactor[1].append(
                          "<option value='" +
                            (minimapSmoothFactor.c + 1) +
                            "'>" +
                            WeakMap$jAciSKVZea975_or[
                              xmea976_xor.titles[minimapSmoothFactor.c]
                            ] +
                            "</option>"
                        );
                        if (
                          xmea976_xor.titles[minimapSmoothFactor.c] ==
                          qRcea94d_init.title
                        ) {
                          minimapSmoothFactor[2] = minimapSmoothFactor.c + 1;
                        }
                      }
                      if (minimapSmoothFactor[2] > 0) {
                        minimapSmoothFactor[1].val(minimapSmoothFactor[2]);
                      }
                      minimapSmoothFactor[1].css("display", "inline-block");
                    } else {
                      $("#account2-titles").css("display", "none");
                    }
                    if (
                      xmea976_xor.message &&
                      xmea976_xor.message.title &&
                      xmea976_xor.message.content &&
                      !xmea976_xor.message.read
                    ) {
                      $("#popup-message-title").text(xmea976_xor.message.title);
                      $("#popup-message-content").html(
                        xmea976_xor.message.content
                      );
                      hdnn_8ea9ea_Idx($("#popup-message"));
                      jQueryLzNd.close("mainModal");
                    }
                  })
                );
            }
            DEFAULT_B6Cea9c5_Ret(AxisLockThreshold[0].uid);
          })
        );
      } else {
        MapFjF6l_ea9f0_Util();
      }
    })
  );
  $("#cGlobalLeaderboard").on("change", function () {
    console.log(instanceof_NYxWUQj_ea97e_Err);
    if (!AtgnhF || instanceof_NYxWUQj_ea97e_Err) {
      return;
    }
    instanceof_NYxWUQj_ea97e_Err = true;
    MYstEuQeaa14_err.auth()
      .currentUser.getIdToken()
      .then(
        Object$kDcGWUY((...AxisLockThreshold) => {
          AxisLockThreshold.length = 1;
          fetch("https://accounts.gota.io/api/v1/options/setFlags", {
            method: "POST",
            headers: {
              ["Content-Type"]: "application/json",
            },
            body: JSON.stringify({
              token: AxisLockThreshold[0],
            }),
          })
            .then(
              Object$kDcGWUY((...AxisLockThreshold) => {
                AxisLockThreshold.length = 1;
                try {
                  return AxisLockThreshold[0].json();
                } catch {
                  return {
                    success: AxisLockThreshold[0].ok,
                    message: AxisLockThreshold[0].ok,
                  };
                }
              })
            )
            .then(
              Object$kDcGWUY((...AxisLockThreshold) => {
                AxisLockThreshold.length = 1;
                console.log(AxisLockThreshold[0].message);
                instanceof_NYxWUQj_ea97e_Err = false;
              })
            )
            .catch(
              Object$kDcGWUY((...AxisLockThreshold) => {
                AxisLockThreshold.length = 1;
                instanceof_NYxWUQj_ea97e_Err = false;
                alert(AxisLockThreshold[0]);
              })
            );
        })
      )
      .catch(
        Object$kDcGWUY((...AxisLockThreshold) => {
          AxisLockThreshold.length = 1;
          console.error("Authentication error:", AxisLockThreshold[0]);
          instanceof_NYxWUQj_ea97e_Err = false;
          HelperBFZkQ(AxisLockThreshold[0], true);
        })
      );
  });
  $("#cGlobalLeaderboard2").on("change", function () {
    if (!qRcea94d_init || SetGjfJUkLJea97f_Buf) {
      return;
    }
    SetGjfJUkLJea97f_Buf = true;
    FLsTXl.auth()
      .currentUser.getIdToken()
      .then(
        Object$kDcGWUY((...AxisLockThreshold) => {
          AxisLockThreshold.length = 1;
          fetch("https://accounts.gota.io/api/v1/options/setFlags", {
            method: "POST",
            headers: {
              ["Content-Type"]: "application/json",
            },
            body: JSON.stringify({
              token: AxisLockThreshold[0],
            }),
          })
            .then(
              Object$kDcGWUY((...AxisLockThreshold) => {
                AxisLockThreshold.length = 1;
                try {
                  return AxisLockThreshold[0].json();
                } catch {
                  return {
                    success: AxisLockThreshold[0].ok,
                    message: AxisLockThreshold[0].ok,
                  };
                }
              })
            )
            .then(() => {
              SetGjfJUkLJea97f_Buf = false;
            })
            .catch(
              Object$kDcGWUY((...AxisLockThreshold) => {
                AxisLockThreshold.length = 1;
                SetGjfJUkLJea97f_Buf = false;
                alert(AxisLockThreshold[0]);
              })
            );
        })
      )
      .catch(
        Object$kDcGWUY((...AxisLockThreshold) => {
          AxisLockThreshold.length = 1;
          console.error(
            "Authentication error (Player 2):",
            AxisLockThreshold[0]
          );
          SetGjfJUkLJea97f_Buf = false;
          HelperBFZkQ(AxisLockThreshold[0], true);
        })
      );
  });
  $("#account-login").on("click", function () {
    MYstEuQeaa14_err.auth()
      .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
      .then(() => {
        return MYstEuQeaa14_err.auth().signInWithPopup(KR7DmFbea999_bool);
      })
      .catch(
        Object$kDcGWUY((...AxisLockThreshold) => {
          AxisLockThreshold.length = 1;
          return HelperBFZkQ(AxisLockThreshold[0], true);
        })
      );
  });
  $("#account-logout").on("click", function () {
    MYstEuQeaa14_err.auth()
      .signOut()
      .then(function () {
        WHILEn5ZHH();
        $("#discordLinkStatus").hide();
        $(".discord-login-container").show();
      })
      .catch(
        Object$kDcGWUY((...AxisLockThreshold) => {
          AxisLockThreshold.length = 1;
          return HelperBFZkQ(AxisLockThreshold[0], true);
        })
      );
  });
  $("#account-social").on("click", function () {
    if (AtgnhF && MYstEuQeaa14_err) {
      console.log(AtgnhF.uid);
    }
  });
  $("#account2-social").on("click", function () {
    if (qRcea94d_init && FLsTXl) {
      console.log(qRcea94d_init.uid);
    }
  });
  $("#account-avatar").on("click", function () {
    BigInt_ZShVUjt$ea9d0_err(AtgnhF, mainModal);
  });
  function baseCellSize(...AxisLockThreshold) {
    if (AxisLockThreshold[0]) {
      $(AxisLockThreshold[1]).prop("disabled", false);
      $(AxisLockThreshold[1]).text("Set");
      return;
    }
    $(AxisLockThreshold[1]).prop("disabled", true);
    $(AxisLockThreshold[1]).text("...");
  }
  $("#account-titles").on("change", function () {
    var AxisLockThreshold;
    if (instanceof_NYxWUQj_ea97e_Err) {
      return;
    }
    AxisLockThreshold = parseInt($(this).val());
    instanceof_NYxWUQj_ea97e_Err = true;
    MYstEuQeaa14_err.auth()
      .currentUser.getIdToken()
      .then(
        Object$kDcGWUY((...minimapSmoothFactor) => {
          minimapSmoothFactor.length = 1;
          fetch(_0x111D7 + "/api/v1/options/setTitle", {
            method: "POST",
            headers: {
              ["Content-Type"]: "application/json",
            },
            body: JSON.stringify({
              token: minimapSmoothFactor[0],
              title: AxisLockThreshold,
            }),
          })
            .then(
              Object$kDcGWUY((...minimapSmoothFactor) => {
                minimapSmoothFactor.length = 1;
                return minimapSmoothFactor[0].json();
              })
            )
            .then(() => {
              instanceof_NYxWUQj_ea97e_Err = false;
            })
            .catch(() => {
              instanceof_NYxWUQj_ea97e_Err = false;
            });
        })
      )
      .catch(
        Object$kDcGWUY((...AxisLockThreshold) => {
          AxisLockThreshold.length = 1;
          HelperBFZkQ(AxisLockThreshold[0], true);
          instanceof_NYxWUQj_ea97e_Err = false;
        })
      );
  });
  $("#account2-login").on("click", function () {
    FLsTXl.auth()
      .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
      .then(() => {
        return FLsTXl.auth().signInWithPopup(KR7DmFbea999_bool);
      })
      .catch(
        Object$kDcGWUY((...AxisLockThreshold) => {
          AxisLockThreshold.length = 1;
          return HelperBFZkQ(AxisLockThreshold[0], true);
        })
      );
  });
  $("#account2-logout").on("click", function () {
    FLsTXl.auth()
      .signOut()
      .then(function () {
        MapFjF6l_ea9f0_Util();
        $("#discordLinkStatus").hide();
        $(".discord-login-container").show();
      })
      .catch(
        Object$kDcGWUY((...AxisLockThreshold) => {
          AxisLockThreshold.length = 1;
          return HelperBFZkQ(AxisLockThreshold[0], true);
        })
      );
  });
  $("#account2-profile").on("click", function () {
    BigInt_ZShVUjt$ea9d0_err(qRcea94d_init, mainModal);
  });
  $("#account-set-username-btn").on("click", function () {
    var AxisLockThreshold;
    if (!AtgnhF) {
      return;
    }
    baseCellSize(false, this);
    AxisLockThreshold = $("#account-username-input").val();
    if (
      !AxisLockThreshold ||
      AxisLockThreshold == "" ||
      AxisLockThreshold.trim() == ""
    ) {
      alert("Please provide a username!");
      baseCellSize(true, this);
      return;
    }
    MYstEuQeaa14_err.auth()
      .currentUser.getIdToken()
      .then(
        Object$kDcGWUY((...minimapSmoothFactor) => {
          minimapSmoothFactor.length = 1;
          fetch(_0x111D7 + "/api/v1/social/username", {
            method: "POST",
            headers: {
              ["Content-Type"]: "application/json",
            },
            body: JSON.stringify({
              token: minimapSmoothFactor[0],
              username: AxisLockThreshold,
            }),
          })
            .then(
              Object$kDcGWUY((...minimapSmoothFactor) => {
                minimapSmoothFactor.length = 1;
                return minimapSmoothFactor[0].json();
              })
            )
            .then((minimapSmoothFactor) => {
              baseCellSize(true, this);
              if (minimapSmoothFactor.code == 200) {
                NaN_semFS17();
                $("#popup-account-username").hide();
                return;
              }
              alert(minimapSmoothFactor.message);
            })
            .catch((minimapSmoothFactor) => {
              alert(minimapSmoothFactor);
              baseCellSize(true, this);
            });
        })
      )
      .catch((AxisLockThreshold) => {
        baseCellSize(true, this);
        HelperBFZkQ(AxisLockThreshold, true);
      });
  });
  $("#discordLink").on("click", function () {
    if (!AtgnhF) {
      return;
    }
    MYstEuQeaa14_err.auth()
      .currentUser.getIdToken()
      .then(
        Object$kDcGWUY((...AxisLockThreshold) => {
          AxisLockThreshold.length = 1;
          window.open(
            "https://accounts.gota.io/api/v1/options/discord/redirect?token=" +
              AxisLockThreshold[0],
            "popup",
            "width=600,height=700"
          );
        })
      );
  });
  $("#discordUnlink").on("click", function () {
    if (!AtgnhF) {
      return;
    }
    MYstEuQeaa14_err.auth()
      .currentUser.getIdToken()
      .then(
        Object$kDcGWUY((...AxisLockThreshold) => {
          AxisLockThreshold.length = 1;
          fetch(_0x111D7 + "/api/v1/options/discord/unlink", {
            method: "POST",
            body: JSON.stringify({
              token: AxisLockThreshold[0],
            }),
            headers: {
              ["Content-Type"]: "application/json",
            },
          })
            .then(
              Object$kDcGWUY((...AxisLockThreshold) => {
                AxisLockThreshold.length = 1;
                return AxisLockThreshold[0].json();
              })
            )
            .then(
              Object$kDcGWUY((...AxisLockThreshold) => {
                AxisLockThreshold.length = 1;
                alert(AxisLockThreshold[0].message);
              })
            );
        })
      )
      .catch(
        Object$kDcGWUY((...AxisLockThreshold) => {
          AxisLockThreshold.length = 1;
          return HelperBFZkQ(AxisLockThreshold[0]);
        })
      );
  });
  $("#redeem-tokens").submit(
    Object$kDcGWUY(function (...AxisLockThreshold) {
      AxisLockThreshold.length = 1;
      AxisLockThreshold[0].preventDefault();
      if (
        !AtgnhF ||
        !confirm(
          "By redeeming, you are agreeing the locked name rules linked below the form.\n\nABUSE WILL RESULT IN THE DELETION OF YOUR LOCKED NAME WITH NO REFUND AND THE POSSIBILITY OF ACCOUNT SUSPENSION.\n\nPress OK to redeem."
        )
      ) {
        return;
      }
      AxisLockThreshold[1] = $("#redeem-name").val();
      AxisLockThreshold[-137] = $("#redeem-spend").val();
      MYstEuQeaa14_err.auth()
        .currentUser.getIdToken()
        .then(
          Object$kDcGWUY((...minimapSmoothFactor) => {
            minimapSmoothFactor.length = 1;
            fetch(_0x111D7 + "/api/v1/options/redeem", {
              method: "POST",
              body: JSON.stringify({
                token: minimapSmoothFactor[0],
                name: AxisLockThreshold[1],
                spend: parseInt(AxisLockThreshold[-137]),
              }),
              headers: {
                ["Content-Type"]: "application/json",
              },
            })
              .then(
                Object$kDcGWUY((...minimapSmoothFactor) => {
                  minimapSmoothFactor.length = 1;
                  return minimapSmoothFactor[0].json();
                })
              )
              .then(
                Object$kDcGWUY((...minimapSmoothFactor) => {
                  minimapSmoothFactor.length = 1;
                  alert(minimapSmoothFactor[0].message);
                  if (minimapSmoothFactor[0].code === 200) {
                    DEFAULT_B6Cea9c5_Ret(AtgnhF.uid);
                  }
                })
              );
          })
        )
        .catch(
          Object$kDcGWUY((...AxisLockThreshold) => {
            AxisLockThreshold.length = 1;
            return HelperBFZkQ(AxisLockThreshold[0]);
          })
        );
    })
  );
  $(document).on(
    "keyup",
    Object$kDcGWUY((...AxisLockThreshold) => {
      AxisLockThreshold.length = 1;
      if (AxisLockThreshold[0].key !== "Enter") {
        return;
      }
      const minimapSmoothFactor = document.getElementById("chat-input");
      if (!minimapSmoothFactor) {
        return;
      }
      if (document.activeElement !== minimapSmoothFactor) {
        if (
          !jQueryLzNd.isOpen("mainModal") &&
          (If$sEyzqKbhea93f_Exec.isConnected() || Str_NmyJ4kX.isConnected())
        ) {
          AxisLockThreshold[0].preventDefault();
          minimapSmoothFactor.focus();
        }
      }
    })
  );
  $(document).on("click", ".keybinds-btn", function () {
    $(".keybinds-btn").removeAttr("variant", "dashed").prop("disabled", true);
    $(this).attr("variant", "dashed").removeAttr("disabled");
    Kb5zM5ea951_neq = true;
  });
  $("#btnResetOptions").on("click", function (...AxisLockThreshold) {
    AxisLockThreshold.length = 0;
    Mao5huZea938_run = JSON.parse(JSON.stringify(Await_RRv));
    DEFAULT$HB0T_ea93b_Status = JSON.parse(JSON.stringify(defaultTheme));
    for (const minimapSmoothFactor in Mao5huZea938_run) {
      if (
        !Object.prototype.hasOwnProperty.call(
          Mao5huZea938_run,
          minimapSmoothFactor
        )
      ) {
        continue;
      }
      const drawMinimapInterval = Mao5huZea938_run[minimapSmoothFactor];
      const baseCellSize = $("#" + minimapSmoothFactor);
      const combinedCameraDistanceThreshold = baseCellSize.length
        ? baseCellSize[0]
        : null;
      if (minimapSmoothFactor === "cameraMode") {
        TruejJBgB31q(drawMinimapInterval);
        continue;
      }
      if (minimapSmoothFactor === "followMouseMode") {
        XHR_uLPuP9eaa0c_Ex(drawMinimapInterval);
        continue;
      }
      if (minimapSmoothFactor === "sSoloTrickMode") {
        y2jX$eaa13_Idx(drawMinimapInterval);
        continue;
      }
      if (!combinedCameraDistanceThreshold) {
        continue;
      }
      switch (minimapSmoothFactor.charAt(0)) {
        case "c":
          combinedCameraDistanceThreshold.checked = drawMinimapInterval;
          break;
        case "s":
          if (baseCellSize.is("nord-dropdown")) {
            baseCellSize.attr("value", drawMinimapInterval);
            const combinedZoomFocusStrength = BigIntpwyK0j_ea9d4_mul[
              minimapSmoothFactor
            ]?.find(
              Object$kDcGWUY((...AxisLockThreshold) => {
                AxisLockThreshold.length = 1;
                return AxisLockThreshold[0].value === drawMinimapInterval;
              })
            );
            if (combinedZoomFocusStrength) {
              baseCellSize
                .find("nord-button")
                .text(combinedZoomFocusStrength.text);
            }
          }
          break;
        case "r":
          combinedCameraDistanceThreshold.value = drawMinimapInterval;
          const combinedInterpSpeed = "#" + minimapSmoothFactor.substring(1);
          $(combinedInterpSpeed).val(drawMinimapInterval);
          break;
      }
    }
    const messageColors = document.documentElement;
    Object.entries(DEFAULT$HB0T_ea93b_Status).forEach(
      ([AxisLockThreshold, minimapSmoothFactor]) => {
        return messageColors.style.setProperty(
          AxisLockThreshold,
          minimapSmoothFactor
        );
      }
    );
    messageColors.style.setProperty(
      "--n-color-weak-accent",
      Pto5ea937_Inst(DEFAULT$HB0T_ea93b_Status["--n-color-accent"])
        .darken(10)
        .toHexString() + "25"
    );
    messageColors.style.setProperty(
      "--n-color-accent-secondary",
      Pto5ea937_Inst(DEFAULT$HB0T_ea93b_Status["--n-color-accent"])
        .lighten(10)
        .toHexString()
    );
    messageColors.style.setProperty(
      "--n-color-text-on-accent",
      Pto5ea937_Inst(DEFAULT$HB0T_ea93b_Status["--n-color-accent"]).isLight()
        ? "#0c0c0c"
        : "#d8d8d8"
    );
    $("#themeColor").val(DEFAULT$HB0T_ea93b_Status["--n-color-accent"]);
    $("#sRgbColor1").val(Mao5huZea938_run.sRgbColor1);
    $("#sRgbColor2").val(Mao5huZea938_run.sRgbColor2);
    for (const minimapSmoothFactor in Mao5huZea938_run) {
      if (Lodash$KALTWzD_ea9b8_buf[minimapSmoothFactor]) {
        Lodash$KALTWzD_ea9b8_buf[minimapSmoothFactor](
          Mao5huZea938_run[minimapSmoothFactor]
        );
      }
    }
    do_QEm141();
    PzLTVea9d7_res("Options have been reset to default.", "success");
  });
  $("#btnResetKeybinds").on("click", function () {
    $(".keybinds-btn").each(function () {
      const AxisLockThreshold = $(this);
      const minimapSmoothFactor = AxisLockThreshold.attr("id");
      if (defaultKeyMappings[minimapSmoothFactor] != null) {
        CoKB[minimapSmoothFactor] = defaultKeyMappings[minimapSmoothFactor];
        FNmsM(AxisLockThreshold);
      }
    });
    UtilQlOY_eaa0f_cb();
    PzLTVea9d7_res("Keybinds have been reset to default.", "success");
  });
  React$yyea9e7();
}
function UNDEFINEDm2hr(...AxisLockThreshold) {
  const minimapSmoothFactor = HelpervL9ea995_opt(
    [
      "EverythingsFine",
      "WeSmart",
      "PandaAww",
      "SleepyCat",
      "Clap",
      "Ditto",
      "MichaelPls",
      "RareParrot",
      "PepePls",
      "RooNoticeMe",
      "PepeEyes",
    ],
    5
  );
  const drawMinimapInterval = HelpervL9ea995_opt(
    [
      "PJSalt",
      "PogChamp",
      "rekt",
      "rip",
      "SaltyCorn",
      "sodaC",
      "sodaHeyGuys",
      "sodaNOPE",
      "sodaW",
      "SwiftRage",
      "WutFace",
      "ResidentSleeper",
      "LUL",
      "MikuFail",
      "PepoHype",
      "KKona",
      "MeguFace",
      "AngryBork",
      "AngeryBOYE",
      "TohruFlex",
      "Sadness",
      "nou",
      "MarioFP",
      "4Head",
      "BibleThump",
      "DansGame",
      "DatSheffy",
      "FailFish",
      "FeelsBadMan",
      "FeelsGoodMan",
      "FeelsMadMan",
      "GabeN",
      "HassanChop",
      "HeyGuys",
      "Kappa",
      "KappaPride",
      "Keepo",
      "Kreygasm",
      "NotLikeThis",
      "OMGScoots",
    ],
    23
  );
  const baseCellSize = HelpervL9ea995_opt(
    [
      "letter_v",
      "letter_w",
      "letter_x",
      "letter_y",
      "letter_z",
      "number_0",
      "number_1",
      "number_2",
      "number_3",
      "number_4",
      "number_5",
      "number_6",
      "number_7",
      "number_8",
      "number_9",
      "heart",
      "star",
      "home",
      "apple",
      "spiral",
      "dice",
      "chicken",
      "ghost",
      "burger",
      "bow",
      "cloud",
      "skull",
      "mug",
      "flower",
      "music",
      "checkmark",
      "clover",
      "crown",
      "fancy",
      "fish",
      "fire",
      "lightning",
      "paw",
      "duck",
      "snowflake",
      "bomb",
      "butterfly",
      "cherry",
      "watermelon",
      "cat",
      "cupid",
      "sword",
      "shield",
      "tornado",
      "radioactive",
      "rocket",
      "wave",
      "letter_a",
      "letter_b",
      "letter_c",
      "letter_d",
      "letter_e",
      "letter_f",
      "letter_g",
      "letter_h",
      "letter_i",
      "letter_j",
      "letter_k",
      "letter_l",
      "letter_m",
      "letter_n",
      "letter_o",
      "letter_p",
      "letter_q",
      "letter_r",
      "letter_s",
      "letter_t",
      "letter_u",
    ],
    15
  );
  for (
    let combinedCameraDistanceThreshold = 0;
    combinedCameraDistanceThreshold < drawMinimapInterval.length;
    combinedCameraDistanceThreshold++
  ) {
    let combinedZoomFocusStrength =
      drawMinimapInterval[combinedCameraDistanceThreshold];
    $(".emote-list").append(
      "<img name='" +
        combinedZoomFocusStrength +
        "' title='" +
        combinedZoomFocusStrength +
        "' src='images/emotes/" +
        combinedZoomFocusStrength +
        ".png' />"
    );
    FalseJax[combinedZoomFocusStrength] = true;
  }
  for (
    let combinedCameraDistanceThreshold = 0;
    combinedCameraDistanceThreshold < minimapSmoothFactor.length;
    combinedCameraDistanceThreshold++
  ) {
    let combinedZoomFocusStrength =
      minimapSmoothFactor[combinedCameraDistanceThreshold];
    $(".gif-list").append(
      "<img name='" +
        combinedZoomFocusStrength +
        "' title='" +
        combinedZoomFocusStrength +
        "' src='images/emotes/gifs/" +
        combinedZoomFocusStrength +
        ".gif' />"
    );
    xhr_tj9avEM[combinedZoomFocusStrength] = true;
  }
  for (
    let combinedCameraDistanceThreshold = 0;
    combinedCameraDistanceThreshold < baseCellSize.length;
    combinedCameraDistanceThreshold++
  ) {
    let combinedInterpSpeed = baseCellSize[combinedCameraDistanceThreshold];
    $("#spEffect").append(
      '<option value="' +
        (combinedCameraDistanceThreshold + 1) +
        '">' +
        formatSnakeCaseString(combinedInterpSpeed) +
        "</option>"
    );
    pQQAhea970_Tmp[combinedCameraDistanceThreshold] = U0QG_Qf;
    let messageColors = new Image();
    messageColors.src =
      "images/ejected_mass_skins/" + combinedInterpSpeed + ".png";
    messageColors.index = combinedCameraDistanceThreshold;
    messageColors.addEventListener("load", function () {
      pQQAhea970_Tmp[this.index] = PIXI.Texture.from(this);
    });
  }
  gifFrames({
    url: "images/effects/hearts.gif",
    frames: "all",
    cumulative: false,
    outputType: "canvas",
  }).then(
    Object$kDcGWUY(function (...AxisLockThreshold) {
      AxisLockThreshold.length = 1;
      AxisLockThreshold[1] = new rejea9ac_Key();
      AxisLockThreshold[1].loadFromFrameData(AxisLockThreshold[0]);
    })
  );
}
function BOOL_jzR0BE6k() {
  as_dX7WJBQ_ea9c4_mul();
  $("#spSkinName").val(VuerW6rI_ea93a_neq.skinName);
  $("#spLowerName").prop("checked", VuerW6rI_ea93a_neq.lowerName);
  $("#spEffect select").val(VuerW6rI_ea93a_neq.effect);
  $("#spNameFont select").val(VuerW6rI_ea93a_neq.nameFont);
}
function Yz5NCU3(...AxisLockThreshold) {
  const minimapSmoothFactor = faCUfKea9fb_add();
  if (
    !minimapSmoothFactor ||
    (!If$sEyzqKbhea93f_Exec.isConnected() &&
      (!Str_NmyJ4kX || !Str_NmyJ4kX.isConnected()))
  ) {
    if (UX3IB !== 0) {
      Promise_28_SVO_ea950_fn.playerId.textContent = "";
      Promise_28_SVO_ea950_fn.playerMass.textContent = "0";
      Promise_28_SVO_ea950_fn.playerCells.textContent = "-";
      Promise_28_SVO_ea950_fn.mouseFrozenDiv.style.display = "none";
      Promise_28_SVO_ea950_fn.playerScore.textContent = "0";
      UX3IB = 0;
      LodashmDBDNdea953_mul = 0;
      e$Iqgea954_Proc = "-";
    }
    return;
  }
  const drawMinimapInterval = "@" + minimapSmoothFactor.playerId;
  if (Promise_28_SVO_ea950_fn.playerId.textContent !== drawMinimapInterval) {
    Promise_28_SVO_ea950_fn.playerId.textContent = drawMinimapInterval;
  }
  AxisLockThreshold[213] = 0;
  for (const baseCellSize of minimapSmoothFactor.myCells.values()) {
    AxisLockThreshold[213] += baseCellSize.getRealMass();
  }
  const combinedCameraDistanceThreshold = minimapSmoothFactor.myCells.size;
  const combinedZoomFocusStrength = minimapSmoothFactor.getServerMaxCells();
  const combinedInterpSpeed =
    "" + combinedCameraDistanceThreshold + "/" + combinedZoomFocusStrength;
  if (UX3IB !== AxisLockThreshold[213]) {
    Promise_28_SVO_ea950_fn.playerMass.textContent =
      AxisLockThreshold[213].toLocaleString();
    UX3IB = AxisLockThreshold[213];
  }
  if (e$Iqgea954_Proc !== combinedInterpSpeed) {
    Promise_28_SVO_ea950_fn.playerCells.textContent = combinedInterpSpeed;
    if (!Mao5huZea938_run.cColoredCellCount) {
      const messageColors =
        combinedCameraDistanceThreshold / combinedZoomFocusStrength;
      if (messageColors >= 1) {
        Promise_28_SVO_ea950_fn.playerCells.style.color =
          DEFAULT$HB0T_ea93b_Status["--n-color-text-danger"];
      } else if (messageColors >= 0.5) {
        Promise_28_SVO_ea950_fn.playerCells.style.color =
          DEFAULT$HB0T_ea93b_Status["--n-color-text-warning"];
      } else {
        Promise_28_SVO_ea950_fn.playerCells.style.color =
          DEFAULT$HB0T_ea93b_Status["--n-color-text-success"];
      }
    } else {
      Promise_28_SVO_ea950_fn.playerCells.style.color = "unset";
    }
    e$Iqgea954_Proc = combinedInterpSpeed;
  }
  const MESSAGE_TYPES = Math.max(
    If$sEyzqKbhea93f_Exec.score,
    Str_NmyJ4kX ? Str_NmyJ4kX.score : 0
  );
  if (LodashmDBDNdea953_mul !== MESSAGE_TYPES) {
    Promise_28_SVO_ea950_fn.playerScore.textContent =
      MESSAGE_TYPES.toLocaleString();
    LodashmDBDNdea953_mul = MESSAGE_TYPES;
  }
  const CellVisibility = minimapSmoothFactor.mouseFrozen ? "block" : "none";
  if (Promise_28_SVO_ea950_fn.mouseFrozenDiv.style.display !== CellVisibility) {
    Promise_28_SVO_ea950_fn.mouseFrozenDiv.style.display = CellVisibility;
  }
}
function FNmsM(...AxisLockThreshold) {
  AxisLockThreshold[-83] = CoKB[AxisLockThreshold[0].attr("id")];
  AxisLockThreshold[0].html(
    El_adcGQ944ea99d_Cb.get(AxisLockThreshold[-83])?.toUpperCase() || "\xA0"
  );
}
function OlzBkmea9c1_idx(...AxisLockThreshold) {
  $("#servers-eu, #servers-na").empty();
  $("#servers-loader").hide();
  $("#server-content").show();
  for (AxisLockThreshold[-81] in asyncq0oTeVQT) {
    for (AxisLockThreshold[1] in asyncq0oTeVQT[AxisLockThreshold[-81]]) {
      AxisLockThreshold.c =
        asyncq0oTeVQT[AxisLockThreshold[-81]][AxisLockThreshold[1]];
      AxisLockThreshold[3] = $(
        '\n      <div aria-describedby="' +
          AxisLockThreshold.c.name.toLowerCase() +
          '" class="server-item" ' +
          (AxisLockThreshold.c.name === "Beta" ? "disabled" : "") +
          '  data-server-id="' +
          AxisLockThreshold.c.name +
          '">\n        <nord-tooltip class="serverInfoTooltip" position="inline-end" id="' +
          AxisLockThreshold.c.name.toLowerCase() +
          '">' +
          AxisLockThreshold.c.playerText +
          '</nord-tooltip>\n        <div class="server-info">\n          <span class="server-name">' +
          AxisLockThreshold.c.name +
          '</span>\n        </div>\n        <div class="server-status">\n          <span class="server-region">' +
          (AxisLockThreshold.c.mode.includes("128x")
            ? "Rush Split (384x)"
            : AxisLockThreshold.c.mode) +
          "</span>\n        </div>\n      </div>\n    "
      );
      $("#servers-" + AxisLockThreshold.c.region).append(AxisLockThreshold[3]);
    }
  }
  $(".main-right").css("height", "" + XHReYHH$ea9c2_bool() + "px");
  $(".server-item").on("click", function () {
    $(".server-item").removeClass("selected");
    $(this).addClass("selected");
    fGuNueaa0a_err($(this).attr("data-server-id"));
  });
  const minimapSmoothFactor =
    JSON.parse(localStorage.getItem("options"))?.server || "Vendetta";
  if (minimapSmoothFactor) {
    const drawMinimapInterval = $(
      '.server-item[data-server-id="' + minimapSmoothFactor + '"]'
    );
    if (drawMinimapInterval.length) {
      drawMinimapInterval.addClass("selected");
      fGuNueaa0a_err(minimapSmoothFactor);
    }
  }
}
function XHReYHH$ea9c2_bool(...AxisLockThreshold) {
  const minimapSmoothFactor =
    AxisLockThreshold[0] || $("#btnToggleServers").attr("region");
  const drawMinimapInterval = Object.keys(
    asyncq0oTeVQT[minimapSmoothFactor] || {}
  ).length;
  const baseCellSize = drawMinimapInterval * 34 + 16;
  return Math.max(baseCellSize, 252);
}
function New_r0sJwVZ() {
  BOOL_jzR0BE6k();
  $("#btn-chg-ln").on("click", function (...AxisLockThreshold) {
    AxisLockThreshold.length = 0;
    if (!hVJea94b_Data) {
      return;
    }
    AxisLockThreshold[239] = prompt("Enter new locked name!");
    if (!AxisLockThreshold[239]) {
      return;
    }
    AxisLockThreshold[1] = null;
    if (typeof AxisLockThreshold[239] !== "string") {
      AxisLockThreshold[1] = "Please enter a valid name!";
    }
    if (AxisLockThreshold[239].length < 2) {
      AxisLockThreshold[1] = "Locked names must be 2 or more characters long.";
    }
    if (AxisLockThreshold[239].length > 20) {
      AxisLockThreshold[1] = "Locked names must be 20 or less characters long.";
    }
    if (AxisLockThreshold[1] !== null) {
      alert(AxisLockThreshold[1]);
      return;
    }
    AxisLockThreshold[239] = AxisLockThreshold[239].trim();
    if (
      confirm(
        "You are about to change your locked name to: '" +
          AxisLockThreshold[239] +
          "'.\nLocked names can only be changed once per week.\n\nAre you sure you wish to continue?"
      )
    ) {
      If$sEyzqKbhea93f_Exec.sendPacket(
        VoidGBYH.sendLockedNameChange(AxisLockThreshold[239])
      );
    }
  });
  $("#btn-updateSP").on("click", function () {
    LodashxQu4();
  });
}
function as_dX7WJBQ_ea9c4_mul() {
  if (hVJea94b_Data || If$sEyzqKbhea93f_Exec.subPanelOverride) {
    $("#btn-cellpanel").prop("disabled", false);
    if (hVJea94b_Data) {
      $(".subpanel-name-dashboard").css("display", "");
    } else {
      $(".subpanel-name-dashboard").css("display", "none");
    }
    $("#subpanel-content").css("display", "block");
  } else {
    $("#btn-cellpanel").prop("disabled", true);
  }
}
function DEFAULT_B6Cea9c5_Ret(...AxisLockThreshold) {
  if (!If$sEyzqKbhea93f_Exec.accountListeners.loadSubPanel) {
    If$sEyzqKbhea93f_Exec.accountListeners.loadSubPanel =
      MYstEuQeaa14_err.firestore()
        .collection("accounts")
        .doc(AxisLockThreshold[0])
        .onSnapshot(
          Object$kDcGWUY((...AxisLockThreshold) => {
            AxisLockThreshold.length = 1;
            const minimapSmoothFactor = AxisLockThreshold[0].data();
            if (!AxisLockThreshold[0].exists || !minimapSmoothFactor.locked) {
              hVJea94b_Data = false;
            } else {
              hVJea94b_Data = true;
              $("#spLockedName").html(minimapSmoothFactor.name);
              if (minimapSmoothFactor.lastChange !== undefined) {
                $("#btn-chg-ln").attr(
                  "title",
                  "Last Changed: " +
                    new Date(minimapSmoothFactor.lastChange).toLocaleString()
                );
              }
              if (minimapSmoothFactor.expiry !== null) {
                $("#spExpiry").html(
                  new Date(
                    minimapSmoothFactor.expiry.seconds * 1000
                  ).toLocaleString()
                );
              } else {
                $("#spExpiry").html("Never");
              }
            }
            as_dX7WJBQ_ea9c4_mul();
            If$sEyzqKbhea93f_Exec.accountListeners.loadSubPanel();
            If$sEyzqKbhea93f_Exec.accountListeners.loadSubPanel = null;
          }),
          () => {
            If$sEyzqKbhea93f_Exec.accountListeners.loadSubPanel();
            If$sEyzqKbhea93f_Exec.accountListeners.loadSubPanel = null;
          }
        );
  }
}
function Proto$L05X_ea9c6_sub(...AxisLockThreshold) {
  AxisLockThreshold.length = 0;
  const minimapSmoothFactor = faCUfKea9fb_add();
  const drawMinimapInterval =
    minimapSmoothFactor && minimapSmoothFactor.isConnected();
  if (drawMinimapInterval && !jQueryLzNd.isOpen("mainModal")) {
    $(".titlebar").css({
      ["background-color"]: "transparent",
      ["border-color"]: "transparent",
    });
    $(".titlebar .title").css("margin-left", "-133px");
    $("nord-notification-group").css("margin-top", "0");
  } else {
    $(".titlebar").css({
      ["background-color"]: "var(--n-color-background)",
      ["border-color"]: "var(--n-color-border)",
    });
    $(".titlebar .title").css("margin-left", "0");
    $("nord-notification-group").css("margin-top", "34px");
  }
}
function H3Pgbhg(...AxisLockThreshold) {
  if (!Mao5huZea938_run.cShowCoordinates) {
    return;
  }
  const minimapSmoothFactor = faCUfKea9fb_add();
  const drawMinimapInterval =
    minimapSmoothFactor && minimapSmoothFactor.myCells.size > 0;
  if (drawMinimapInterval) {
    const baseCellSize = minimapSmoothFactor.centerX.toFixed(0);
    const combinedCameraDistanceThreshold =
      minimapSmoothFactor.centerY.toFixed(0);
    Promise_28_SVO_ea950_fn.minimapCoordinates.text(
      "X: " + baseCellSize + " Y: " + combinedCameraDistanceThreshold
    );
  } else {
    Promise_28_SVO_ea950_fn.minimapCoordinates.text("X: - Y: -");
  }
}
function g5Mea9c8_TYPE(...AxisLockThreshold) {
  AwaitNM$mbea98a_mul.clear();
  const { border: minimapSmoothFactor } = If$sEyzqKbhea93f_Exec.serverData;
  const drawMinimapInterval = 32;
  const baseCellSize =
    Mao5huZea938_run.cShowBorder && minimapSmoothFactor.enabled;
  if (baseCellSize) {
    const combinedCameraDistanceThreshold = PIXI.utils.string2hex(
      DEFAULT$HB0T_ea93b_Status["--n-color-accent"]
    );
    AwaitNM$mbea98a_mul.lineStyle(
      drawMinimapInterval,
      combinedCameraDistanceThreshold
    ).drawRect(
      minimapSmoothFactor.left,
      minimapSmoothFactor.top,
      minimapSmoothFactor.width,
      minimapSmoothFactor.height
    );
    AwaitNM$mbea98a_mul.visible = true;
  } else {
    AwaitNM$mbea98a_mul.visible = false;
  }
}
function DOC_FDXvy4GG(...AxisLockThreshold) {
  if (!If$sEyzqKbhea93f_Exec?.serverData?.border?.enabled) {
    return;
  }
  const minimapSmoothFactor = faCUfKea9fb_add();
  const drawMinimapInterval = new Map();
  IMPORT_f936f76C_ea98d_lte.clearRect(
    0,
    0,
    nh6XVqea98c_Cb.width,
    nh6XVqea98c_Cb.height
  );
  IMPORT_f936f76C_ea98d_lte.font = "10px 'Nordhealth Sans', sans-serif";
  if (If$sEyzqKbhea93f_Exec.playerId !== 0) {
    const baseCellSize = Winy9ZiY(If$sEyzqKbhea93f_Exec, true);
    drawMinimapInterval.set(If$sEyzqKbhea93f_Exec.playerId, {
      id: If$sEyzqKbhea93f_Exec.playerId,
      name: If$sEyzqKbhea93f_Exec.name,
      x: baseCellSize.x,
      y: baseCellSize.y,
      isAlive: If$sEyzqKbhea93f_Exec.myCells.size > 0,
    });
  }
  if (Str_NmyJ4kX?.playerId !== 0) {
    const combinedCameraDistanceThreshold = Winy9ZiY(Str_NmyJ4kX, true);
    drawMinimapInterval.set(Str_NmyJ4kX.playerId, {
      id: Str_NmyJ4kX.playerId,
      name: Str_NmyJ4kX.name,
      x: combinedCameraDistanceThreshold.x,
      y: combinedCameraDistanceThreshold.y,
      isAlive: Str_NmyJ4kX.myCells.size > 0,
    });
  }
  for (const combinedZoomFocusStrength of If$sEyzqKbhea93f_Exec.party || []) {
    if (
      combinedZoomFocusStrength?.state === PlayerState.ALIVE &&
      !drawMinimapInterval.has(combinedZoomFocusStrength.id)
    ) {
      drawMinimapInterval.set(combinedZoomFocusStrength.id, {
        id: combinedZoomFocusStrength.id,
        name: combinedZoomFocusStrength.name,
        x: combinedZoomFocusStrength.x_,
        y: combinedZoomFocusStrength.y_,
        isAlive: true,
      });
    }
  }
  const combinedInterpSpeed =
    minimapSmoothFactor?.playerId && minimapSmoothFactor.myCells.size > 0
      ? minimapSmoothFactor.playerId
      : null;
  Proto$RYZvj3$ea9b7_num.update(
    drawMinimapInterval,
    combinedInterpSpeed,
    AxisLockThreshold[0]
  );
  IMPORT_f936f76C_ea98d_lte.clearRect(
    0,
    0,
    nh6XVqea98c_Cb.width,
    nh6XVqea98c_Cb.height
  );
  if (Mao5huZea938_run.cShowChunks) {
    const messageColors =
      (minimapSmoothFactor.centerX -
        If$sEyzqKbhea93f_Exec.serverData.border.left) /
      If$sEyzqKbhea93f_Exec.serverData.border.width;
    const MESSAGE_TYPES =
      (minimapSmoothFactor.centerY -
        If$sEyzqKbhea93f_Exec.serverData.border.top) /
      If$sEyzqKbhea93f_Exec.serverData.border.height;
    const CellVisibility = nh6XVqea98c_Cb.width / 5;
    const MassDisplayType = nh6XVqea98c_Cb.height / 5;
    IMPORT_f936f76C_ea98d_lte.font = "10px 'Nordhealth Sans', sans-serif";
    IMPORT_f936f76C_ea98d_lte.textAlign = "center";
    IMPORT_f936f76C_ea98d_lte.textBaseline = "middle";
    for (
      AxisLockThreshold.a = 0;
      AxisLockThreshold.a < 5;
      AxisLockThreshold.a++
    ) {
      for (
        AxisLockThreshold[2] = 0;
        AxisLockThreshold[2] < 5;
        AxisLockThreshold[2]++
      ) {
        if (
          Math.floor(messageColors * 5) == AxisLockThreshold.a &&
          Math.floor(MESSAGE_TYPES * 5) == AxisLockThreshold[2]
        ) {
          IMPORT_f936f76C_ea98d_lte.fillStyle =
            DEFAULT$HB0T_ea93b_Status["--n-color-accent"] + "1A";
          IMPORT_f936f76C_ea98d_lte.fillRect(
            AxisLockThreshold.a * CellVisibility,
            AxisLockThreshold[2] * MassDisplayType,
            CellVisibility,
            MassDisplayType
          );
        }
        IMPORT_f936f76C_ea98d_lte.fillStyle =
          DEFAULT$HB0T_ea93b_Status["--n-color-text-weakest"];
        IMPORT_f936f76C_ea98d_lte.fillText(
          ["A", "B", "C", "D", "E"][AxisLockThreshold.a] +
            ["1", "2", "3", "4", "5"][AxisLockThreshold[2]],
          (AxisLockThreshold.a + 0.5) * CellVisibility,
          (AxisLockThreshold[2] + 0.5) * MassDisplayType
        );
      }
    }
  }
  if (combinedInterpSpeed && Str_NmyJ4kX.isConnected()) {
    Proto$RYZvj3$ea9b7_num.drawHighlighter(
      IMPORT_f936f76C_ea98d_lte,
      If$sEyzqKbhea93f_Exec.serverData.border,
      nh6XVqea98c_Cb.width,
      nh6XVqea98c_Cb.height
    );
  }
  if (drawMinimapInterval.size === 0) {
    return;
  }
  IMPORT_f936f76C_ea98d_lte.font = "12px 'Nordhealth Sans', sans-serif";
  for (const SKIN_LOAD_STATUS of drawMinimapInterval.values()) {
    if (!SKIN_LOAD_STATUS.isAlive) {
      continue;
    }
    const defaultKeyMappings = Proto$RYZvj3$ea9b7_num.getSmoothedPosition(
      SKIN_LOAD_STATUS.id
    );
    if (!defaultKeyMappings) {
      continue;
    }
    const defaultOptions =
      SKIN_LOAD_STATUS.id === If$sEyzqKbhea93f_Exec.playerId;
    const defaultSubPanelSettings =
      Str_NmyJ4kX?.playerId === SKIN_LOAD_STATUS.id;
    const fontConfigs = minimapSmoothFactor?.playerId === SKIN_LOAD_STATUS.id;
    const readAscii =
      defaultOptions || defaultSubPanelSettings
        ? fontConfigs
          ? Pto5ea937_Inst(DEFAULT$HB0T_ea93b_Status["--n-color-accent"])
              .lighten(25)
              .toHexString()
          : Pto5ea937_Inst(DEFAULT$HB0T_ea93b_Status["--n-color-accent"])
              .lighten(15)
              .toHexString()
        : Pto5ea937_Inst(DEFAULT$HB0T_ea93b_Status["--n-color-accent"])
            .lighten(5)
            .toHexString();
    const readUtf16 = !defaultOptions && !defaultSubPanelSettings;
    Void_ojp$ea9ca_neq(
      IMPORT_f936f76C_ea98d_lte,
      SKIN_LOAD_STATUS.name,
      defaultKeyMappings.smoothedX,
      defaultKeyMappings.smoothedY,
      6,
      readAscii,
      readUtf16
    );
  }
}
function Void_ojp$ea9ca_neq(...AxisLockThreshold) {
  const minimapSmoothFactor = If$sEyzqKbhea93f_Exec.serverData.border;
  const drawMinimapInterval = nh6XVqea98c_Cb.width;
  const baseCellSize = nh6XVqea98c_Cb.height;
  const combinedCameraDistanceThreshold =
    ((AxisLockThreshold[2] - minimapSmoothFactor.left) /
      minimapSmoothFactor.width) *
    drawMinimapInterval;
  const combinedZoomFocusStrength =
    ((AxisLockThreshold[3] - minimapSmoothFactor.top) /
      minimapSmoothFactor.height) *
    baseCellSize;
  AxisLockThreshold[0].beginPath();
  AxisLockThreshold[0].arc(
    combinedCameraDistanceThreshold,
    combinedZoomFocusStrength,
    AxisLockThreshold[4],
    0,
    Math.PI * 2,
    false
  );
  AxisLockThreshold[0].fillStyle = AxisLockThreshold[5];
  AxisLockThreshold[0].fill();
  if (AxisLockThreshold[6]) {
    const combinedInterpSpeed =
      AxisLockThreshold[1] +
      "_" +
      DEFAULT$HB0T_ea93b_Status["--n-color-accent"] +
      "40";
    let messageColors = Map$XDb6n5y_ea974_State.get(combinedInterpSpeed);
    if (!messageColors) {
      const MESSAGE_TYPES = 4;
      const CellVisibility = 11;
      const MassDisplayType = document.createElement("canvas").getContext("2d");
      MassDisplayType.font = "12px 'Nordhealth Sans', sans-serif";
      const SKIN_LOAD_STATUS = MassDisplayType.measureText(
        AxisLockThreshold[1]
      );
      const PlayerState = SKIN_LOAD_STATUS.width;
      const defaultKeyMappings = PlayerState + MESSAGE_TYPES * 2;
      const defaultOptions = CellVisibility + MESSAGE_TYPES * 2;
      messageColors = document.createElement("canvas");
      messageColors.width = defaultKeyMappings;
      messageColors.height = defaultOptions;
      const defaultSubPanelSettings = messageColors.getContext("2d");
      defaultSubPanelSettings.fillStyle =
        DEFAULT$HB0T_ea93b_Status["--n-color-accent"] + "40";
      defaultSubPanelSettings.roundRect(
        0,
        0,
        defaultKeyMappings,
        defaultOptions,
        5
      );
      defaultSubPanelSettings.fill();
      defaultSubPanelSettings.fillStyle = "#FFFFFF";
      defaultSubPanelSettings.font = "12px 'Nordhealth Sans', sans-serif";
      defaultSubPanelSettings.textAlign = "center";
      defaultSubPanelSettings.textBaseline = "middle";
      defaultSubPanelSettings.fillText(
        AxisLockThreshold[1],
        defaultKeyMappings / 2,
        defaultOptions / 2
      );
      Map$XDb6n5y_ea974_State.set(combinedInterpSpeed, messageColors);
    }
    let fontConfigs = combinedCameraDistanceThreshold - messageColors.width / 2;
    let readAscii =
      combinedZoomFocusStrength -
      AxisLockThreshold[4] -
      messageColors.height -
      2;
    if (fontConfigs < 0) {
      fontConfigs = 0;
    }
    if (fontConfigs + messageColors.width > drawMinimapInterval) {
      fontConfigs = drawMinimapInterval - messageColors.width;
    }
    if (readAscii < 0) {
      readAscii = 0;
    }
    AxisLockThreshold[0].drawImage(messageColors, fontConfigs, readAscii);
  }
}
function LodashxQu4(...AxisLockThreshold) {
  VuerW6rI_ea93a_neq.skinName = $("#spSkinName").val().toLowerCase();
  VuerW6rI_ea93a_neq.lowerName = $("#spLowerName").prop("checked");
  AxisLockThreshold[245] = 0;
  for (
    AxisLockThreshold.b = 0;
    AxisLockThreshold.b < messageColors.length;
    AxisLockThreshold.b++
  ) {
    if (messageColors[AxisLockThreshold.b] == _0x111EE) {
      AxisLockThreshold[245] = AxisLockThreshold.b;
      break;
    }
  }
  VuerW6rI_ea93a_neq.chatColor = AxisLockThreshold[245];
  VuerW6rI_ea93a_neq.effect = parseInt($("#spEffect").val());
  VuerW6rI_ea93a_neq.nameFont = parseInt($("#spNameFont").val());
  If$sEyzqKbhea93f_Exec.sendPacket(VoidGBYH.sendSubPanel(AxisLockThreshold[0]));
}
const BigIntLsuea9cc_ex = (AxisLockThreshold = true, minimapSmoothFactor) => {
  const drawMinimapInterval = $("#loadingOverlay");
  const baseCellSize = $("#loadingOverlay p");
  if (AxisLockThreshold) {
    drawMinimapInterval.stop(true, true).fadeIn(250);
    if (minimapSmoothFactor) {
      baseCellSize.text(minimapSmoothFactor).show();
    } else {
      baseCellSize.text("").hide();
    }
  } else {
    drawMinimapInterval.fadeOut(250);
  }
};
function letl8FDUOw_ea9cd_Ref(...AxisLockThreshold) {
  const minimapSmoothFactor = document.getElementById("notification-container");
  const drawMinimapInterval = document.createElement("div");
  drawMinimapInterval.className = "notification";
  const baseCellSize = document.createElement("span");
  baseCellSize.className = "notification-close";
  baseCellSize.innerHTML = "×";
  baseCellSize.onclick = function () {
    drawMinimapInterval.remove();
    ijs = false;
    XHR_uCA5J6jeaa0e_obj();
  };
  drawMinimapInterval.innerHTML = AxisLockThreshold[0];
  drawMinimapInterval.appendChild(baseCellSize);
  minimapSmoothFactor.appendChild(drawMinimapInterval);
  setTimeout(() => {
    drawMinimapInterval.remove();
    ijs = false;
    XHR_uCA5J6jeaa0e_obj();
  }, 2500);
}
function Evt_gCqea9ce_Val(...AxisLockThreshold) {
  $("#camera-mode-notification").empty();
  AxisLockThreshold[-169] = $(
    '<div class="camera-mode-alert">' + AxisLockThreshold[0] + "</div>"
  );
  AxisLockThreshold[-169].css({
    ["align-items"]: "center",
    background: "var(--n-color-background)",
    padding: "8px 16px",
    ["border-radius"]: "var(--n-border-radius)",
    cursor: "pointer",
    ["font-size"]: "14px",
    transition: "opacity 0.3s ease-in-out, transform 0.2s ease",
    border: "1px solid var(--n-color-border)",
    opacity: "0",
    animation: "slideIn 0.3s ease-out",
  });
  $("#camera-mode-notification").append(AxisLockThreshold[-169]);
  setTimeout(function () {
    AxisLockThreshold[-169].css("opacity", "1");
    setTimeout(function () {
      AxisLockThreshold[-169].css("opacity", "0");
      setTimeout(function () {
        AxisLockThreshold[-169].remove();
      }, 300);
    }, 2000);
  }, 10);
}
function BOOLxEFAPea9cf_or(...AxisLockThreshold) {
  if (!$("#fastfeed-mode-notification").length) {
    $(
      '<div id="fastfeed-mode-notification" style="position: fixed; top: 20px; left: 50%; transform: translateX(-50%); z-index: 1000;"></div>'
    ).appendTo(document.body);
  }
  $("#fastfeed-mode-notification").empty();
  const minimapSmoothFactor = $(
    '<div class="fastfeed-mode-alert">' + AxisLockThreshold[0] + "</div>"
  );
  minimapSmoothFactor.css({
    ["align-items"]: "center",
    background: "var(--n-color-background)",
    padding: "8px 16px",
    ["border-radius"]: "var(--n-border-radius)",
    cursor: "pointer",
    ["font-size"]: "14px",
    transition: "opacity 0.3s ease-in-out, transform 0.2s ease",
    border: "1px solid var(--n-color-border)",
    opacity: "0",
    animation: "slideIn 0.3s ease-out",
  });
  if (!document.getElementById("fastfeed-slidein-style")) {
    const drawMinimapInterval = document.createElement("style");
    drawMinimapInterval.id = "fastfeed-slidein-style";
    drawMinimapInterval.textContent =
      "\n        @keyframes slideIn {\n            from { transform: translateY(-20px); opacity: 0; }\n            to { transform: translateY(0); opacity: 1; }\n        }\n    ";
    document.head.appendChild(drawMinimapInterval);
  }
  $("#fastfeed-mode-notification").append(minimapSmoothFactor);
  setTimeout(function () {
    minimapSmoothFactor.css("opacity", "1");
    setTimeout(function () {
      minimapSmoothFactor.css("opacity", "0");
      setTimeout(function () {
        minimapSmoothFactor.remove();
      }, 300);
    }, 2000);
  }, 10);
}
function BigInt_ZShVUjt$ea9d0_err(...AxisLockThreshold) {
  if (AxisLockThreshold[1]) {
    MapODojwDKKea9eb_Key(AxisLockThreshold[1]);
  }
  $("#profile-username").text(AxisLockThreshold[0].username);
  $("#profile-avatar").attr("src", AxisLockThreshold[0].avatar);
  $("#profile-avatar").attr("alt", AxisLockThreshold[0].username);
  $("#profile-level").html(
    "Level " +
      AxisLockThreshold[0].levelData.level +
      " [" +
      formatExperience(AxisLockThreshold[0].levelData.xp_current) +
      "/" +
      formatExperience(AxisLockThreshold[0].levelData.xp_needed) +
      "]"
  );
  if (
    AxisLockThreshold[0].title &&
    AxisLockThreshold[0].title > 0 &&
    WeakMap$jAciSKVZea975_or[AxisLockThreshold[0].title]
  ) {
    $("#profile-title").text(
      WeakMap$jAciSKVZea975_or[AxisLockThreshold[0].title]
    );
  } else {
    $("#profile-title").text("");
  }
  $("#profile-name").off("click");
  if (AxisLockThreshold[0].uid == AtgnhF.uid) {
    $("#profile-name").on("click", function () {
      $("#popup-profile").hide();
      NaN_semFS17();
    });
    $("#profile-name").css("cursor", "pointer");
  } else {
    $("#profile-name").css("cursor", "default");
  }
  if (AxisLockThreshold[0].flags.STAFF) {
    $("#profile-avatar").addClass("spin");
  } else {
    $("#profile-avatar").removeClass("spin");
  }
  CHueaa10_Proc($("#profile-username"), AxisLockThreshold[0]);
  $("#profile-close-btn").off("click");
  $("#profile-close-btn").on("click", function () {
    if (AxisLockThreshold[1]) {
      hdnn_8ea9ea_Idx(AxisLockThreshold[1]);
    }
    MapODojwDKKea9eb_Key($("#popup-profile"));
  });
  hdnn_8ea9ea_Idx($("#popup-profile"));
}
function finally_qFsWFdtea9d1_Ctx(
  AxisLockThreshold,
  minimapSmoothFactor,
  drawMinimapInterval,
  baseCellSize = -1,
  combinedCameraDistanceThreshold = null,
  combinedZoomFocusStrength = "transparent",
  combinedInterpSpeed = null
) {
  const messageColors = faCUfKea9fb_add();
  const MESSAGE_TYPES = $(djUgiSea98e_Fn);
  const CellVisibility = $("#context-name");
  const MassDisplayType = minimapSmoothFactor.includes("🤖");
  const SKIN_LOAD_STATUS = messageColors.playerId === drawMinimapInterval;
  const PlayerState = messageColors.party.some(
    Object$kDcGWUY((...AxisLockThreshold) => {
      AxisLockThreshold.length = 1;
      return AxisLockThreshold[0].name === minimapSmoothFactor;
    })
  );
  const defaultKeyMappings = messageColors.isPartyLeader();
  const defaultOptions = Pto5ea937_Inst(combinedZoomFocusStrength)
    .lighten(50)
    .toHexString();
  const defaultSubPanelSettings =
    '<span class="contextMenuAvatar" style="background-color: ' +
    combinedZoomFocusStrength +
    ";" +
    (combinedInterpSpeed
      ? "background-image: url(" + combinedInterpSpeed + ")"
      : "") +
    ';"></span>';
  CellVisibility.css("color", defaultOptions).html(
    "" +
      defaultSubPanelSettings +
      '<span style="margin: 0 5px">' +
      (MassDisplayType ? "🤖" : minimapSmoothFactor || "An unnamed cell") +
      "</span>"
  );
  MESSAGE_TYPES.data("selected", drawMinimapInterval)
    .data("party", baseCellSize)
    .data("cellId", combinedCameraDistanceThreshold);
  const fontConfigs = Object$kDcGWUY((...AxisLockThreshold) => {
    AxisLockThreshold.length = 1;
    return $(AxisLockThreshold[0]).show();
  });
  const readAscii = Object$kDcGWUY((...AxisLockThreshold) => {
    AxisLockThreshold.length = 1;
    return $(AxisLockThreshold[0]).hide();
  });
  const readUtf16 = (AxisLockThreshold, ...minimapSmoothFactor) => {
    return minimapSmoothFactor.forEach(
      Object$kDcGWUY((...minimapSmoothFactor) => {
        minimapSmoothFactor.length = 1;
        if (AxisLockThreshold) {
          return fontConfigs(minimapSmoothFactor[0]);
        } else {
          return readAscii(minimapSmoothFactor[0]);
        }
      })
    );
  };
  $(".context-action").hide();
  readUtf16(!MassDisplayType, "#menu-profile", "#menu-invite");
  readUtf16(
    SKIN_LOAD_STATUS && messageColors.party.length,
    "#menu-leave-party"
  );
  readUtf16(SKIN_LOAD_STATUS && !messageColors.party.length, "#menu-add-multi");
  readUtf16(
    !SKIN_LOAD_STATUS && !MassDisplayType,
    "#menu-whisper",
    "#menu-block",
    "#menu-profile"
  );
  readUtf16(messageColors.spectate && !SKIN_LOAD_STATUS, "#menu-spectate");
  if (PlayerState) {
    readAscii("#menu-invite");
  }
  if (messageColors.party.length && !defaultKeyMappings) {
    readAscii("#menu-invite");
  }
  if (defaultKeyMappings) {
    const writeAscii = messageColors.party.some(
      Object$kDcGWUY((...AxisLockThreshold) => {
        AxisLockThreshold.length = 1;
        return AxisLockThreshold[0].name === drawMinimapInterval;
      })
    );
    readUtf16(writeAscii && !SKIN_LOAD_STATUS, "#menu-promote", "#menu-kick");
    readUtf16(writeAscii && SKIN_LOAD_STATUS, "#menu-pu_pr");
  }
  const writeUtf16 = AxisLockThreshold?.clientX ?? messageColors.mouseRawX;
  const byteToHex = AxisLockThreshold?.clientY ?? messageColors.mouseRawY;
  MESSAGE_TYPES.attr("open", true).css({
    left: Math.min(writeUtf16, window.innerWidth - MESSAGE_TYPES.width()),
    top: Math.min(byteToHex, window.innerHeight - MESSAGE_TYPES.height()) - 40,
  });
}
function NaN_semFS17(...AxisLockThreshold) {
  if (
    jQueryLzNd.isOpen("mainModal") &&
    !Kb5zM5ea951_neq &&
    AxisLockThreshold[0]
  ) {
    jQueryLzNd.close("mainModal");
  } else {
    jQueryLzNd.open("mainModal");
  }
}
function do_QEm141(...AxisLockThreshold) {
  try {
    const minimapSmoothFactor =
      document.getElementById("name-box")?.value || "";
    const drawMinimapInterval =
      document.getElementById("name-box2")?.value || "";
    const baseCellSize = document.getElementById("themeColor")?.value || "";
    const combinedCameraDistanceThreshold = {
      ...Mao5huZea938_run,
      ...(AxisLockThreshold[0] && {
        name: minimapSmoothFactor,
      }),
      ...(AxisLockThreshold[0] && {
        name2: drawMinimapInterval,
      }),
    };
    if (baseCellSize) {
      DEFAULT$HB0T_ea93b_Status["--n-color-accent"] = baseCellSize;
      DEFAULT$HB0T_ea93b_Status["--n-color-weak-accent"] =
        Pto5ea937_Inst(baseCellSize).darken(10).toHexString() + "25";
      DEFAULT$HB0T_ea93b_Status["--n-color-accent-secondary"] = Pto5ea937_Inst(
        baseCellSize
      )
        .lighten(10)
        .toHexString();
      DEFAULT$HB0T_ea93b_Status["--n-color-text-on-accent"] = Pto5ea937_Inst(
        baseCellSize
      ).isLight()
        ? "#0c0c0c"
        : "#d8d8d8";
    }
    localStorage.setItem(
      "options",
      JSON.stringify(combinedCameraDistanceThreshold)
    );
    localStorage.setItem("keybinds", JSON.stringify(CoKB));
    localStorage.setItem("theme", JSON.stringify(DEFAULT$HB0T_ea93b_Status));
    localStorage.setItem("subpanel", JSON.stringify(VuerW6rI_ea93a_neq));
  } catch (combinedZoomFocusStrength) {
    Logger.error("Error saving user settings:", combinedZoomFocusStrength);
  }
}
const BigIntpwyK0j_ea9d4_mul = {
  sShowSkins: [
    {
      value: "ALL",
      text: "All",
    },
    {
      value: "PARTY",
      text: "Party",
    },
    {
      value: "SELF",
      text: "Self",
    },
    {
      value: "NONE",
      text: "None",
    },
  ],
  sShowNames: [
    {
      value: "ALL",
      text: "All",
    },
    {
      value: "PARTY",
      text: "Party",
    },
    {
      value: "SELF",
      text: "Self",
    },
    {
      value: "NONE",
      text: "None",
    },
  ],
  sShowMass: [
    {
      value: "ALL",
      text: "All",
    },
    {
      value: "PARTY",
      text: "Party",
    },
    {
      value: "SELF",
      text: "Self",
    },
    {
      value: "NONE",
      text: "None",
    },
  ],
  sMassType: [
    {
      value: "DEFAULT",
      text: "Default",
    },
    {
      value: "SHORT",
      text: "Short",
    },
  ],
};
function BOOLqoaO(...AxisLockThreshold) {
  const minimapSmoothFactor = document.querySelector(
    '.option-control[data-select-id="' + AxisLockThreshold[0] + '"]'
  );
  if (!minimapSmoothFactor) {
    return;
  }
  minimapSmoothFactor.innerHTML = "";
  const drawMinimapInterval = document.createElement("nord-dropdown");
  drawMinimapInterval.setAttribute("size", "s");
  drawMinimapInterval.setAttribute("position", "block-end");
  drawMinimapInterval.setAttribute("align", "end");
  drawMinimapInterval.id = AxisLockThreshold[0];
  const baseCellSize = document.createElement("nord-button");
  baseCellSize.setAttribute("slot", "toggle");
  baseCellSize.setAttribute("size", "s");
  drawMinimapInterval.appendChild(baseCellSize);
  BigIntpwyK0j_ea9d4_mul[AxisLockThreshold[0]].forEach(
    ({ value: AxisLockThreshold, text: minimapSmoothFactor }) => {
      const combinedCameraDistanceThreshold =
        document.createElement("nord-dropdown-item");
      combinedCameraDistanceThreshold.textContent = minimapSmoothFactor;
      combinedCameraDistanceThreshold.setAttribute(
        "data-value",
        AxisLockThreshold
      );
      combinedCameraDistanceThreshold.addEventListener(
        "click",
        (...combinedCameraDistanceThreshold) => {
          combinedCameraDistanceThreshold.length = 0;
          drawMinimapInterval.setAttribute("value", AxisLockThreshold);
          baseCellSize.textContent = minimapSmoothFactor;
          drawMinimapInterval.removeAttribute("open");
          const combinedZoomFocusStrength = new Event("change", {
            bubbles: true,
          });
          drawMinimapInterval.dispatchEvent(combinedZoomFocusStrength);
        }
      );
      drawMinimapInterval.appendChild(combinedCameraDistanceThreshold);
    }
  );
  minimapSmoothFactor.appendChild(drawMinimapInterval);
}
Object.keys(BigIntpwyK0j_ea9d4_mul).forEach(BOOLqoaO);
function Zqf9Dh(...AxisLockThreshold) {
  const minimapSmoothFactor = localStorage.getItem("theme");
  const drawMinimapInterval = document.documentElement;
  const baseCellSize = minimapSmoothFactor
    ? JSON.parse(minimapSmoothFactor)
    : DEFAULT$HB0T_ea93b_Status;
  DEFAULT$HB0T_ea93b_Status = {
    ...DEFAULT$HB0T_ea93b_Status,
    ...baseCellSize,
  };
  Object.entries(DEFAULT$HB0T_ea93b_Status).forEach(
    ([AxisLockThreshold, minimapSmoothFactor]) => {
      drawMinimapInterval.style.setProperty(
        AxisLockThreshold,
        minimapSmoothFactor
      );
    }
  );
  drawMinimapInterval.style.setProperty(
    "--n-color-weak-accent",
    Pto5ea937_Inst(DEFAULT$HB0T_ea93b_Status["--n-color-accent"])
      .darken(10)
      .toHexString() + "25"
  );
  drawMinimapInterval.style.setProperty(
    "--n-color-accent-secondary",
    Pto5ea937_Inst(DEFAULT$HB0T_ea93b_Status["--n-color-accent"])
      .lighten(10)
      .toHexString()
  );
  drawMinimapInterval.style.setProperty(
    "--n-color-text-on-accent",
    Pto5ea937_Inst(DEFAULT$HB0T_ea93b_Status["--n-color-accent"]).isLight()
      ? "#0c0c0c"
      : "#d8d8d8"
  );
  $("#themeColor").val(DEFAULT$HB0T_ea93b_Status["--n-color-accent"]);
  try {
    const combinedCameraDistanceThreshold = localStorage.getItem("keybinds");
    if (combinedCameraDistanceThreshold) {
      Object.assign(CoKB, JSON.parse(combinedCameraDistanceThreshold));
    }
  } catch (combinedZoomFocusStrength) {
    console.error(
      "Error loading keybinds from localStorage:",
      combinedZoomFocusStrength
    );
  }
  for (const combinedInterpSpeed in CoKB) {
    if (Object.prototype.hasOwnProperty.call(CoKB, combinedInterpSpeed)) {
      FNmsM($("#" + combinedInterpSpeed));
    }
  }
  try {
    const messageColors = localStorage.getItem("options");
    if (messageColors) {
      const MESSAGE_TYPES = JSON.parse(messageColors);
      MESSAGE_TYPES.sRgbColor1 = MESSAGE_TYPES.sRgbColor1 || "#ffffff";
      MESSAGE_TYPES.sRgbColor2 = MESSAGE_TYPES.sRgbColor2 || "#ffffff";
      Object.assign(Mao5huZea938_run, MESSAGE_TYPES);
    }
  } catch (combinedZoomFocusStrength) {
    console.error(
      "Error loading options from localStorage:",
      combinedZoomFocusStrength
    );
  }
  for (const CellVisibility in Mao5huZea938_run) {
    if (
      !Object.prototype.hasOwnProperty.call(Mao5huZea938_run, CellVisibility)
    ) {
      continue;
    }
    const MassDisplayType = Mao5huZea938_run[CellVisibility];
    const SKIN_LOAD_STATUS = $("#" + CellVisibility);
    const PlayerState = CellVisibility.charAt(0);
    if (SKIN_LOAD_STATUS.length === 0) {
      continue;
    }
    switch (PlayerState) {
      case "c":
        SKIN_LOAD_STATUS.prop("checked", MassDisplayType);
        Gu0B6FmO(CellVisibility);
        break;
      case "s":
        SKIN_LOAD_STATUS.attr("value", MassDisplayType);
        const defaultKeyMappings = BigIntpwyK0j_ea9d4_mul[CellVisibility];
        const defaultOptions = defaultKeyMappings?.find(
          Object$kDcGWUY((...AxisLockThreshold) => {
            AxisLockThreshold.length = 1;
            return AxisLockThreshold[0].value === MassDisplayType;
          })
        );
        if (defaultOptions) {
          SKIN_LOAD_STATUS.find("nord-button").text(defaultOptions.text);
        }
        Gu0B6FmO(CellVisibility, MassDisplayType);
        break;
      case "r":
        SKIN_LOAD_STATUS.val(MassDisplayType);
        $("#" + CellVisibility.substring(1)).val(MassDisplayType);
        Gu0B6FmO(CellVisibility, MassDisplayType);
        break;
    }
  }
  $("#name-box").val(JSON.parse(localStorage.getItem("options"))?.name);
  $("#name-box2").val(JSON.parse(localStorage.getItem("options"))?.name2);
  $("#themeColor").val(
    JSON.parse(localStorage.getItem("theme"))["--n-color-accent"] ||
      DEFAULT$HB0T_ea93b_Status["--n-color-accent"]
  );
  const defaultSubPanelSettings =
    JSON.parse(localStorage.getItem("options"))?.region || "eu";
  const fontConfigs = $("#btnToggleServers");
  if (defaultSubPanelSettings === "na") {
    fontConfigs.attr("region", "na").text("North America");
    Await_IJIz2M("na");
    $(".main-right").css("height", "" + XHReYHH$ea9c2_bool() + "px");
  } else {
    fontConfigs.attr("region", "eu").text("Europe");
    Await_IJIz2M("eu");
    $(".main-right").css("height", "" + XHReYHH$ea9c2_bool() + "px");
  }
  try {
    const readAscii = localStorage.getItem("subpanel");
    if (readAscii) {
      Object.assign(VuerW6rI_ea93a_neq, JSON.parse(readAscii));
    }
  } catch (combinedZoomFocusStrength) {
    console.error(
      "Error loading subpanel settings from localStorage:",
      combinedZoomFocusStrength
    );
  }
  VuerW6rI_ea93a_neq.lockedName = "";
  New_r0sJwVZ();
  $("#sRgbColor1").val(Mao5huZea938_run.sRgbColor1 || "#ffffff");
  $("#sRgbColor2").val(Mao5huZea938_run.sRgbColor2 || "#ffffff");
  $("#rRgbSpeed").val(Mao5huZea938_run.rRgbSpeed);
  $("#rgbSpeed").val(Mao5huZea938_run.rRgbSpeed);
  y2jX$eaa13_Idx(Mao5huZea938_run.sSoloTrickMode || "AUTO");
}
function PzLTVea9d7_res(
  AxisLockThreshold,
  minimapSmoothFactor = "success",
  drawMinimapInterval = 3000
) {
  const baseCellSize = $("nord-toast-group")[0];
  if (baseCellSize && typeof baseCellSize.addToast === "function") {
    baseCellSize.addToast(AxisLockThreshold, {
      variant: minimapSmoothFactor,
      autoDismiss: drawMinimapInterval,
    });
  } else {
    console.log("Toast: [" + minimapSmoothFactor + "] " + AxisLockThreshold);
  }
}
function dNwVcfi$ea9d8_type(...AxisLockThreshold) {
  AxisLockThreshold[1] = $('.keybinds-btn[variant="dashed"]');
  Kb5zM5ea951_neq = false;
  if (AxisLockThreshold[1].size() == 0) {
    return;
  }
  AxisLockThreshold[-244] = AxisLockThreshold[1].first();
  $(".keybinds-btn").removeAttr("disabled");
  AxisLockThreshold[1].removeAttr("variant");
  AxisLockThreshold.c = -1;
  if (AxisLockThreshold[0] != 27) {
    AxisLockThreshold.c = AxisLockThreshold[0];
  }
  const minimapSmoothFactor = AxisLockThreshold[-244].attr("id");
  CoKB[minimapSmoothFactor] = AxisLockThreshold.c;
  FNmsM(AxisLockThreshold[-244]);
  UtilQlOY_eaa0f_cb();
  const drawMinimapInterval =
    AxisLockThreshold.c !== -1
      ? (
          El_adcGQ944ea99d_Cb.get(AxisLockThreshold.c) ||
          "Key " + AxisLockThreshold.c
        ).toUpperCase()
      : "NONE";
  PzLTVea9d7_res(
    "Set '" +
      AxisLockThreshold[-244].prev().text() +
      "' to '" +
      drawMinimapInterval +
      "'"
  );
}
function Gu0B6FmO(...AxisLockThreshold) {
  const minimapSmoothFactor = Lodash$KALTWzD_ea9b8_buf[AxisLockThreshold[0]];
  if (minimapSmoothFactor != null) {
    minimapSmoothFactor(AxisLockThreshold[1]);
  }
  do_QEm141();
}
function EkFea9da_mul(...AxisLockThreshold) {
  const minimapSmoothFactor = AxisLockThreshold[0].attr("id");
  Mao5huZea938_run[minimapSmoothFactor] = AxisLockThreshold[0].prop("checked");
  Gu0B6FmO(minimapSmoothFactor);
}
function Map_f43ea9db_ret(...AxisLockThreshold) {
  const minimapSmoothFactor = AxisLockThreshold[0].getAttribute("value");
  Mao5huZea938_run[AxisLockThreshold[0].id] = minimapSmoothFactor;
  Gu0B6FmO(AxisLockThreshold[0].id, minimapSmoothFactor);
}
function TruepwDZ3M$ea9dc_Res(...AxisLockThreshold) {
  const minimapSmoothFactor = AxisLockThreshold[0].attr("id");
  Gu0B6FmO(minimapSmoothFactor, AxisLockThreshold[0].val());
}
function Xb4x(AxisLockThreshold) {
  finally_qFsWFdtea9d1_Ctx(
    AxisLockThreshold,
    this.innerText,
    this.dataset.playerId,
    -1,
    this.dataset.id
  );
}
function Stringify_NFlcpsmH(AxisLockThreshold) {
  const minimapSmoothFactor = parseInt($(this).data("index"));
  const drawMinimapInterval = faCUfKea9fb_add().party?.[minimapSmoothFactor];
  if (!drawMinimapInterval) {
    return;
  }
  finally_qFsWFdtea9d1_Ctx(
    AxisLockThreshold,
    drawMinimapInterval.name,
    drawMinimapInterval.id,
    minimapSmoothFactor
  );
}
function Catch$HaPx87ea9df_ret(...AxisLockThreshold) {
  const minimapSmoothFactor = faCUfKea9fb_add();
  if (!minimapSmoothFactor) {
    return;
  }
  const drawMinimapInterval = minimapSmoothFactor.scale;
  const baseCellSize =
    bXFgW$Qq.pivot.x -
    Date$F4EY.stage.position.x / drawMinimapInterval +
    minimapSmoothFactor.mouseRawX / drawMinimapInterval;
  const combinedCameraDistanceThreshold =
    bXFgW$Qq.pivot.y -
    Date$F4EY.stage.position.y / drawMinimapInterval +
    minimapSmoothFactor.mouseRawY / drawMinimapInterval;
  const combinedZoomFocusStrength = [...let_ExdFq$65.children].reverse().find(
    Object$kDcGWUY((...AxisLockThreshold) => {
      AxisLockThreshold.length = 1;
      const minimapSmoothFactor = AxisLockThreshold[0].parentCell;
      if (
        !AxisLockThreshold[0].visible ||
        !minimapSmoothFactor ||
        minimapSmoothFactor.type !== 2
      ) {
        return false;
      }
      const drawMinimapInterval = baseCellSize - minimapSmoothFactor.x;
      const combinedZoomFocusStrength =
        combinedCameraDistanceThreshold - minimapSmoothFactor.y;
      return (
        drawMinimapInterval * drawMinimapInterval +
          combinedZoomFocusStrength * combinedZoomFocusStrength <
        minimapSmoothFactor.size * minimapSmoothFactor.size
      );
    })
  )?.parentCell;
  const combinedInterpSpeed =
    !AxisLockThreshold[0] || AxisLockThreshold[0].target?.id === "canvas";
  if (
    combinedZoomFocusStrength &&
    combinedZoomFocusStrength.playerId !== 0 &&
    combinedInterpSpeed
  ) {
    const messageColors = zLCuf8c.getPlayer(combinedZoomFocusStrength.playerId);
    if (messageColors) {
      console.log(combinedZoomFocusStrength);
      finally_qFsWFdtea9d1_Ctx(
        AxisLockThreshold[0],
        messageColors.name,
        messageColors.id,
        -1,
        combinedZoomFocusStrength.id,
        combinedZoomFocusStrength.color,
        messageColors.skin
      );
    }
  }
}
function Void$jyv1Bm3(...AxisLockThreshold) {
  const minimapSmoothFactor = document.getElementById("chatAll");
  minimapSmoothFactor.appendChild(AxisLockThreshold[0]);
  $("#chatAll").css("display", "flex");
  minimapSmoothFactor.scrollTop = minimapSmoothFactor.scrollHeight;
  while (minimapSmoothFactor.children.length > 250) {
    minimapSmoothFactor.removeChild(minimapSmoothFactor.firstChild);
  }
}
function CtxBk7q_(...AxisLockThreshold) {
  $("#chat-input").val(AxisLockThreshold[0]);
}
function in_Lv7rr7N(...AxisLockThreshold) {
  if (!AxisLockThreshold[0]) {
    return;
  }
  if (AxisLockThreshold[0].startsWith("/")) {
    Qbnjfea9e3_lte(AxisLockThreshold[0]);
  } else {
    faCUfKea9fb_add().sendPacket(VoidGBYH.sendChat(AxisLockThreshold[0], 0));
    CtxBk7q_("");
  }
  Lodashif3ebPI.push(AxisLockThreshold[0]);
  if (Lodashif3ebPI.length > 20) {
    Lodashif3ebPI.shift();
  }
}
function Qbnjfea9e3_lte(...AxisLockThreshold) {
  const [minimapSmoothFactor, ...drawMinimapInterval] = AxisLockThreshold[0]
    .trim()
    .slice(1)
    .split(" ");
  const baseCellSize = StringifyQqsoaEea9b3_Handler.find(
    Object$kDcGWUY((...AxisLockThreshold) => {
      AxisLockThreshold.length = 1;
      return AxisLockThreshold[0].triggers.some(
        Object$kDcGWUY((...AxisLockThreshold) => {
          AxisLockThreshold.length = 1;
          return (
            AxisLockThreshold[0].toLowerCase() ===
            minimapSmoothFactor.toLowerCase()
          );
        })
      );
    })
  );
  CtxBk7q_("");
  if (baseCellSize) {
    baseCellSize.action(drawMinimapInterval);
  } else {
    faCUfKea9fb_add().selfMsg("Invalid command!");
  }
}
function Get_OCOyLea9e4_Init() {
  if (!faCUfKea9fb_add().isPartyLeader()) {
    Ls_ea9ae_Init.msg("You must be party leader.");
    return false;
  }
  return true;
}
function KEGPXBW(...AxisLockThreshold) {
  const minimapSmoothFactor = Ls_ea9ae_Init.parseId(AxisLockThreshold[1]);
  if (!minimapSmoothFactor) {
    return Ls_ea9ae_Init.msg("Invalid ID.");
  }
  Ls_ea9ae_Init.send(
    VoidGBYH.sendPartyAction(AxisLockThreshold[0], minimapSmoothFactor)
  );
}
function Await_IJIz2M(...AxisLockThreshold) {
  AxisLockThreshold[0] = AxisLockThreshold[0].toLowerCase();
  $("#server-content > div").css("display", "none");
  $("#server-content #servers-" + AxisLockThreshold[0]).css("display", "flex");
}
function React$yyea9e7() {
  if (!Mao5huZea938_run.cShowCoordinates) {
    $("#minimap-canvas").css({
      ["border-top"]: "0",
      ["border-radius"]: "5px",
    });
  } else {
    $("#minimap-canvas").css({
      ["border-top"]: "1px solid var(--n-color-border)",
      ["border-radius"]: "0 0 5px 5px",
    });
  }
}
function HelperUhSO_ea9e8_Run(...AxisLockThreshold) {
  AxisLockThreshold[-115] = $("#" + AxisLockThreshold[0]);
  if (AxisLockThreshold[-115].css("display") == "none") {
    Symbol_iZMG1ea9e9_Val();
    AxisLockThreshold[-115].show();
  }
}
function Symbol_iZMG1ea9e9_Val() {
  $(".main-right")
    .children()
    .each(function () {
      if ($(this).css("display") == "block") {
        $(this).hide();
      }
    });
}
function hdnn_8ea9ea_Idx(...AxisLockThreshold) {
  if (AxisLockThreshold[0].css("display") == "none") {
    AxisLockThreshold[0].css("display", "block");
    AxisLockThreshold[0].animate(
      {
        opacity: 1,
      },
      500
    );
  }
}
function MapODojwDKKea9eb_Key(...AxisLockThreshold) {
  if (
    AxisLockThreshold[0].css("display") == "block" &&
    AxisLockThreshold[0].css("opacity") == 1
  ) {
    AxisLockThreshold[0].animate(
      {
        opacity: 0,
      },
      500,
      function () {
        AxisLockThreshold[0].css("display", "none");
      }
    );
  }
}
function Ctx_aylk4EOu(AxisLockThreshold = true) {
  if (AxisLockThreshold) {
    Get$NeypNg.show();
    if (
      If$sEyzqKbhea93f_Exec.party.length == 0 ||
      Mao5huZea938_run.cHidePartyPanel
    ) {
      Promise_28_SVO_ea950_fn.partyPanel.css("display", "none");
      $("#leaveParty").css("display", "none");
    }
    if (Mao5huZea938_run.cHideChat) {
      $(".chat-panel").css("display", "none");
    }
    if (Mao5huZea938_run.cHideMinimap) {
      $("#minimap-panel").css("display", "none");
    }
  }
}
function H3xBjq() {
  $("#account-login, #authed").hide();
  $("#account-loader").show();
}
function IfbIa() {
  $("#account2-login, #authed2").hide();
  $("#account2-loader").show();
}
function WHILEn5ZHH() {
  $(
    "#account-loader, #account-profile, #account-profile, #xpMeter1, #account-level, #account-actions, #account-logout"
  ).hide();
  $("#account-login").show();
  $("#authed").css("display", "flex");
  $("#username-container");
  $("#account-username").text("Guest");
  $("#account-avatar").css("pointer-events", "none").removeAttr("src");
}
function MapFjF6l_ea9f0_Util() {
  $(
    "#account2-loader, #account2-profile, #account2-profile, #xpMeter2, #account2-level, #account2-actions, #account2-logout"
  ).hide();
  $("#account2-login").show();
  $("#authed2").css("display", "flex");
  $("#username2-container");
  $("#account2-username").text("Guest");
  $("#account2-avatar").css("pointer-events", "none").removeAttr("src");
}
function HandlerR0b5TLt$() {
  Logger.info("Starting game loop...");
  JcVea978_neq = performance.now();
  yield_L2zEL16 = 0;
  Promise_KDZM8Y_ea97a_Cfg = 0;
  RZL = 0;
  if (HandlerbspL) {
    clearInterval(HandlerbspL);
    HandlerbspL = null;
  }
  if (ParsecKKDq_ea99e_gt) {
    cancelAnimationFrame(ParsecKKDq_ea99e_gt);
    ParsecKKDq_ea99e_gt = null;
  }
  if (Mao5huZea938_run.cLimitFPS) {
    Logger.info("Game loop started with requestAnimationFrame (FPS limited).");
    function AxisLockThreshold() {
      True$wzFjm$ea9f2_TYPE();
      ParsecKKDq_ea99e_gt = requestAnimationFrame(AxisLockThreshold);
    }
    AxisLockThreshold();
  } else {
    Logger.info("Game loop started with setInterval (FPS uncapped).");
    HandlerbspL = setInterval(True$wzFjm$ea9f2_TYPE, 0);
  }
}
async function True$wzFjm$ea9f2_TYPE() {
  if (window.isGameLoopFrozenByPing || window.isGameLoopFrozenByData) {
    if (Date$F4EY && Date$F4EY.renderer) {
      Date$F4EY.renderer.render(Date$F4EY.stage);
    }
    return;
  }
  const AxisLockThreshold = performance.now();
  const minimapSmoothFactor = AxisLockThreshold - JcVea978_neq;
  const baseCellSize = 250;
  let combinedCameraDistanceThreshold = false;
  if (minimapSmoothFactor > baseCellSize) {
    Logger.warn(
      "Large time gap detected (" +
        minimapSmoothFactor.toFixed(0) +
        "ms). Forcing snap to prevent visual lag."
    );
    combinedCameraDistanceThreshold = true;
  }
  const combinedZoomFocusStrength = Math.min(minimapSmoothFactor, 100);
  const combinedInterpSpeed = combinedZoomFocusStrength / (1000 / 60);
  JcVea978_neq = AxisLockThreshold;
  yield_L2zEL16 += minimapSmoothFactor;
  RZL++;
  if (
    If$sEyzqKbhea93f_Exec &&
    If$sEyzqKbhea93f_Exec.isConnected() &&
    !jQueryLzNd.isOpen("mainModal")
  ) {
    if (
      If$sEyzqKbhea93f_Exec.lastUpdatePacketTime > 0 &&
      AxisLockThreshold - If$sEyzqKbhea93f_Exec.lastUpdatePacketTime > vZpklf
    ) {
      if (!El_jtxnG4q) {
        El_jtxnG4q = true;
        BigIntLsuea9cc_ex(true, "Network connection is unstable...");
      }
    } else if (El_jtxnG4q) {
      El_jtxnG4q = false;
      BigIntLsuea9cc_ex(false);
    }
  } else if (El_jtxnG4q) {
    El_jtxnG4q = false;
    BigIntLsuea9cc_ex(false);
  }
  const messageColors = faCUfKea9fb_add();
  const MESSAGE_TYPES =
    messageColors === If$sEyzqKbhea93f_Exec
      ? Str_NmyJ4kX
      : If$sEyzqKbhea93f_Exec;
  if (MESSAGE_TYPES) {
    const CellVisibility = MESSAGE_TYPES.myCells.size > 0;
    if (CellVisibility && !MESSAGE_TYPES.wasAliveLastTick) {
      if (Mao5huZea938_run.cIndicateBotRespawn) {
        zd8T_jfeea9b6_and.activate();
      }
    }
    MESSAGE_TYPES.wasAliveLastTick = CellVisibility;
  }
  const MassDisplayType = If$sEyzqKbhea93f_Exec
    ? J8EVQ(If$sEyzqKbhea93f_Exec)
    : null;
  const SKIN_LOAD_STATUS = Str_NmyJ4kX ? J8EVQ(Str_NmyJ4kX) : null;
  if (combinedCameraDistanceThreshold) {
    if (MassDisplayType) {
      If$sEyzqKbhea93f_Exec.centerX = MassDisplayType.x;
      If$sEyzqKbhea93f_Exec.centerY = MassDisplayType.y;
    }
    if (SKIN_LOAD_STATUS) {
      Str_NmyJ4kX.centerX = SKIN_LOAD_STATUS.x;
      Str_NmyJ4kX.centerY = SKIN_LOAD_STATUS.y;
    }
  } else {
    const PlayerState = Math.min(combinedInterpSpeed * 0.2, 1);
    if (MassDisplayType) {
      If$sEyzqKbhea93f_Exec.centerX +=
        (MassDisplayType.x - If$sEyzqKbhea93f_Exec.centerX) * PlayerState;
      If$sEyzqKbhea93f_Exec.centerY +=
        (MassDisplayType.y - If$sEyzqKbhea93f_Exec.centerY) * PlayerState;
    }
    if (SKIN_LOAD_STATUS) {
      Str_NmyJ4kX.centerX +=
        (SKIN_LOAD_STATUS.x - Str_NmyJ4kX.centerX) * PlayerState;
      Str_NmyJ4kX.centerY +=
        (SKIN_LOAD_STATUS.y - Str_NmyJ4kX.centerY) * PlayerState;
    }
  }
  const defaultKeyMappings = faCUfKea9fb_add();
  if (!defaultKeyMappings) {
    if (Date$F4EY && Date$F4EY.renderer) {
      Date$F4EY.renderer.render(Date$F4EY.stage);
    }
    return;
  }
  const defaultOptions =
    defaultKeyMappings === If$sEyzqKbhea93f_Exec
      ? MassDisplayType
      : SKIN_LOAD_STATUS;
  if (Mao5huZea938_run.rCombinedViewportScale > 0) {
    JRZXea9f8_obj(combinedInterpSpeed);
  }
  const { targetX: defaultSubPanelSettings, targetY: fontConfigs } =
    IND8m_ea9f5_add(
      defaultKeyMappings,
      defaultOptions,
      MassDisplayType,
      SKIN_LOAD_STATUS
    );
  defaultKeyMappings.scale_base =
    Math.max(canvas.height / 1080, canvas.width / 1920) * 0.2;
  const readAscii =
    defaultKeyMappings.scale_base * defaultKeyMappings.mouseZoom;
  GnQwWt(
    defaultSubPanelSettings,
    fontConfigs,
    readAscii,
    combinedInterpSpeed,
    defaultKeyMappings
  );
  Y6r7jNS2ea9f7_mul();
  const readUtf16 =
    Mao5huZea938_run.rCombinedViewportScale > 0
      ? yZBjeytPea960_Cb
      : WeakMapxkJW_ea95d_bool;
  const writeAscii = window.innerWidth / 2 / readUtf16;
  const writeUtf16 = window.innerHeight / 2 / readUtf16;
  const byteToHex = bXFgW$Qq.pivot.x - writeAscii - 50;
  const capitalize = bXFgW$Qq.pivot.x + writeAscii + 50;
  const findServerByName = bXFgW$Qq.pivot.y - writeUtf16 - 50;
  const formatAliveTime = bXFgW$Qq.pivot.y + writeUtf16 + 50;
  for (const formatExperience of jQuery_hn$0_2t_ea9b2_sub.allCells) {
    formatExperience.interpolateState(
      combinedInterpSpeed,
      combinedCameraDistanceThreshold
    );
    const formatSnakeCaseString =
      formatExperience.container || formatExperience.sprite;
    if (!formatSnakeCaseString) {
      continue;
    }
    const initFirebaseApp = formatExperience.size || 10;
    const initializeNord =
      formatExperience.x + initFirebaseApp > byteToHex &&
      formatExperience.x - initFirebaseApp < capitalize &&
      formatExperience.y + initFirebaseApp > findServerByName &&
      formatExperience.y - initFirebaseApp < formatAliveTime;
    formatSnakeCaseString.visible = initializeNord;
    if (initializeNord) {
      formatExperience.handle(defaultKeyMappings, readUtf16);
    }
  }
  zPY7Wy_(
    defaultKeyMappings,
    readUtf16,
    byteToHex,
    capitalize,
    findServerByName,
    formatAliveTime
  );
  const injectShadowStyle =
    bXFgW$Qq.pivot.x - Date$F4EY.stage.position.x / readUtf16;
  const transformCellColor =
    bXFgW$Qq.pivot.y - Date$F4EY.stage.position.y / readUtf16;
  const defaultTheme =
    injectShadowStyle + defaultKeyMappings.mouseRawX / readUtf16;
  const SERVER_PORT =
    transformCellColor + defaultKeyMappings.mouseRawY / readUtf16;
  defaultKeyMappings.calculatedMouseX = defaultTheme;
  defaultKeyMappings.calculatedMouseY = SERVER_PORT;
  if (Str_NmyJ4kX) {
    Str_NmyJ4kX.calculatedMouseX = defaultTheme;
    Str_NmyJ4kX.calculatedMouseY = SERVER_PORT;
  }
  if (
    defaultKeyMappings.isConnected() &&
    !jQueryLzNd.isOpen("mainModal") &&
    !defaultKeyMappings.mouseFrozen
  ) {
    const [Pto5ea937_Inst, CoKB] = VJjDr.updateInGameLoop(
      defaultKeyMappings,
      defaultTheme,
      SERVER_PORT,
      combinedInterpSpeed
    );
    const VuerW6rI_ea93a_neq = Pto5ea937_Inst - ReactFCGxs$ea96c_Tmp;
    const DEFAULT$HB0T_ea93b_Status = CoKB - CTXgGGYfuSi_ea96d_Opt;
    if (
      VuerW6rI_ea93a_neq * VuerW6rI_ea93a_neq +
        DEFAULT$HB0T_ea93b_Status * DEFAULT$HB0T_ea93b_Status >
      25
    ) {
      defaultKeyMappings.sendPacket(VoidGBYH.sendMouse(Pto5ea937_Inst, CoKB));
      ReactFCGxs$ea96c_Tmp = Pto5ea937_Inst;
      CTXgGGYfuSi_ea96d_Opt = CoKB;
    }
  }
  if (
    ObjectueAUtq &&
    defaultKeyMappings.isConnected() &&
    !jQueryLzNd.isOpen("mainModal")
  ) {
    defaultKeyMappings.sendPacket(VoidGBYH.sendEjectMass(true));
  }
  if (defaultKeyMappings.isConnected() && !jQueryLzNd.isOpen("mainModal")) {
    zd8T_jfeea9b6_and.update();
  }
  rCRuBeaa05_res(defaultTheme, SERVER_PORT);
  This_GCC(defaultTheme, SERVER_PORT);
  React_a3eebzUUeaa04(defaultTheme, SERVER_PORT);
  if (!Mao5huZea938_run.cHideMinimap && RZL % drawMinimapInterval === 0) {
    const B5O8N2Mea93c_ret = combinedInterpSpeed * drawMinimapInterval;
    DOC_FDXvy4GG(B5O8N2Mea93c_ret);
  }
  if (Mao5huZea938_run.cShowCoordinates) {
    H3Pgbhg();
  }
  if (RZL % 5 === 0) {
    Yz5NCU3();
  }
  const async_gvZqk_Dc_ea93e_div = 350;
  const in_hpdqea943_div = performance.now();
  const tRyea944_Id = [];
  for (const [
    NOgc$oea945_num,
    React_RtHu4Gea946,
  ] of jQuery_hn$0_2t_ea9b2_sub.dyingCells.entries()) {
    const {
      cell: formatExperience,
      startTime: for_JCpm,
      initialScaleX: for_zWYea948_lte,
      initialScaleY: El_SqvbXGiea949_Tmp,
    } = React_RtHu4Gea946;
    const formatSnakeCaseString =
      formatExperience.container || formatExperience.sprite;
    if (!formatSnakeCaseString) {
      tRyea944_Id.push(NOgc$oea945_num);
      continue;
    }
    const Map_brr9MVea94a_Idx = in_hpdqea943_div - for_JCpm;
    const hVJea94b_Data = Math.min(
      Map_brr9MVea94a_Idx / async_gvZqk_Dc_ea93e_div,
      1
    );
    const AtgnhF = 1 - Math.pow(1 - hVJea94b_Data, 3);
    formatSnakeCaseString.scale.set(
      for_zWYea948_lte * (1 - AtgnhF),
      El_SqvbXGiea949_Tmp * (1 - AtgnhF)
    );
    formatSnakeCaseString.alpha = 1 - AtgnhF;
    if (hVJea94b_Data >= 1) {
      tRyea944_Id.push(NOgc$oea945_num);
    }
  }
  for (const NOgc$oea945_num of tRyea944_Id) {
    const React_RtHu4Gea946 =
      jQuery_hn$0_2t_ea9b2_sub.dyingCells.get(NOgc$oea945_num);
    if (React_RtHu4Gea946) {
      React_RtHu4Gea946.cell.destroyPixiObjects();
      jQuery_hn$0_2t_ea9b2_sub.dyingCells.delete(NOgc$oea945_num);
    }
  }
  if (Date$F4EY && Date$F4EY.renderer) {
    Date$F4EY.renderer.render(Date$F4EY.stage);
  }
  TypeOf_19M7ciw_ea9f9_opt();
  if (If$sEyzqKbhea93f_Exec && zLCuf8c) {
    zLCuf8c.processUpdates();
  }
}
function Get_xynDv5x(...AxisLockThreshold) {
  AxisLockThreshold.length = 0;
  const minimapSmoothFactor = window.innerWidth;
  const drawMinimapInterval = window.innerHeight;
  Symbol_I0$w5g$ea98b_Opt.style.width = minimapSmoothFactor + "px";
  Symbol_I0$w5g$ea98b_Opt.style.height = drawMinimapInterval + "px";
  Symbol_I0$w5g$ea98b_Opt.width = minimapSmoothFactor;
  Symbol_I0$w5g$ea98b_Opt.height = drawMinimapInterval;
  Date$F4EY.renderer.resize(
    Symbol_I0$w5g$ea98b_Opt.width,
    Symbol_I0$w5g$ea98b_Opt.height
  );
  Date$F4EY.stage.position.x = minimapSmoothFactor / 2;
  Date$F4EY.stage.position.y = drawMinimapInterval / 2;
}
function Winy9ZiY(AxisLockThreshold, minimapSmoothFactor = false) {
  let drawMinimapInterval = 0;
  let baseCellSize = 0;
  let combinedCameraDistanceThreshold = 0;
  const combinedZoomFocusStrength = AxisLockThreshold.myCells;
  const combinedInterpSpeed = combinedZoomFocusStrength.size;
  if (combinedInterpSpeed === 0) {
    if (minimapSmoothFactor) {
      return {
        x: AxisLockThreshold.centerX_,
        y: AxisLockThreshold.centerY_,
      };
    }
    return {
      x: AxisLockThreshold.centerX,
      y: AxisLockThreshold.centerY,
    };
  }
  for (const messageColors of combinedZoomFocusStrength.values()) {
    const MESSAGE_TYPES = minimapSmoothFactor
      ? messageColors.getRealMass()
      : messageColors.getMass();
    const CellVisibility = minimapSmoothFactor
      ? messageColors.x_
      : messageColors.x;
    const MassDisplayType = minimapSmoothFactor
      ? messageColors.y_
      : messageColors.y;
    drawMinimapInterval += CellVisibility * MESSAGE_TYPES;
    baseCellSize += MassDisplayType * MESSAGE_TYPES;
    combinedCameraDistanceThreshold += MESSAGE_TYPES;
  }
  if (combinedCameraDistanceThreshold === 0) {
    let SKIN_LOAD_STATUS = 0;
    let PlayerState = 0;
    for (const messageColors of combinedZoomFocusStrength.values()) {
      const CellVisibility = minimapSmoothFactor
        ? messageColors.x_
        : messageColors.x;
      const MassDisplayType = minimapSmoothFactor
        ? messageColors.y_
        : messageColors.y;
      SKIN_LOAD_STATUS += CellVisibility;
      PlayerState += MassDisplayType;
    }
    return {
      x: SKIN_LOAD_STATUS / combinedInterpSpeed,
      y: PlayerState / combinedInterpSpeed,
    };
  }
  return {
    x: drawMinimapInterval / combinedCameraDistanceThreshold,
    y: baseCellSize / combinedCameraDistanceThreshold,
  };
}
function IND8m_ea9f5_add(...AxisLockThreshold) {
  if (AxisLockThreshold[0].spectate) {
    let minimapSmoothFactor = 0;
    let drawMinimapInterval = 0;
    let baseCellSize = 0;
    let combinedInterpSpeed = 0;
    if (AxisLockThreshold[0].spectatingId !== 0) {
      for (const messageColors of jQuery_hn$0_2t_ea9b2_sub.allCells) {
        if (
          messageColors.playerId === AxisLockThreshold[0].spectatingId &&
          messageColors.type === 2
        ) {
          const MESSAGE_TYPES = messageColors.getMass();
          minimapSmoothFactor += messageColors.x * MESSAGE_TYPES;
          drawMinimapInterval += messageColors.y * MESSAGE_TYPES;
          baseCellSize += MESSAGE_TYPES;
          combinedInterpSpeed++;
        }
      }
    }
    if (combinedInterpSpeed > 0 && baseCellSize > 0) {
      return {
        targetX: minimapSmoothFactor / baseCellSize,
        targetY: drawMinimapInterval / baseCellSize,
      };
    }
    return {
      targetX: AxisLockThreshold[0].centerX_,
      targetY: AxisLockThreshold[0].centerY_,
    };
  }
  const CellVisibility = () => {
    if (AxisLockThreshold[1].cellCount > 0) {
      if (qq8ea959_idx === "cameraMassWeighted") {
        return {
          x: AxisLockThreshold[1].x,
          y: AxisLockThreshold[1].y,
        };
      } else {
        let minimapSmoothFactor = 0;
        let drawMinimapInterval = 0;
        for (const baseCellSize of AxisLockThreshold[0].myCells.values()) {
          minimapSmoothFactor += baseCellSize.x;
          drawMinimapInterval += baseCellSize.y;
        }
        return {
          x: minimapSmoothFactor / AxisLockThreshold[1].cellCount,
          y: drawMinimapInterval / AxisLockThreshold[1].cellCount,
        };
      }
    }
    return {
      x: AxisLockThreshold[0].centerX,
      y: AxisLockThreshold[0].centerY,
    };
  };
  AxisLockThreshold[102] = undefined;
  AxisLockThreshold[5] = undefined;
  const MassDisplayType =
    AxisLockThreshold[2] && AxisLockThreshold[2].cellCount > 0;
  const SKIN_LOAD_STATUS =
    AxisLockThreshold[3] && AxisLockThreshold[3].cellCount > 0;
  const PlayerState = Math.hypot(
    Str_NmyJ4kX.centerX - If$sEyzqKbhea93f_Exec.centerX,
    Str_NmyJ4kX.centerY - If$sEyzqKbhea93f_Exec.centerY
  );
  if (
    MassDisplayType &&
    SKIN_LOAD_STATUS &&
    PlayerState < combinedCameraDistanceThreshold
  ) {
    const defaultKeyMappings = CellVisibility();
    const defaultOptions =
      (If$sEyzqKbhea93f_Exec.centerX + Str_NmyJ4kX.centerX) / 2;
    const defaultSubPanelSettings =
      (If$sEyzqKbhea93f_Exec.centerY + Str_NmyJ4kX.centerY) / 2;
    const fontConfigs = Math.max(
      0,
      Math.min(Mao5huZea938_run.rCombinedViewportScale, 1)
    );
    const readAscii =
      AxisLockThreshold[0].scale_base > 0
        ? AxisLockThreshold[0].scale / AxisLockThreshold[0].scale_base
        : 1;
    const readUtf16 = Math.max(
      0,
      Math.min(1, (readAscii - 1) * combinedZoomFocusStrength)
    );
    const writeAscii = fontConfigs * (1 - readUtf16);
    AxisLockThreshold[102] =
      defaultKeyMappings.x +
      (defaultOptions - defaultKeyMappings.x) * writeAscii;
    AxisLockThreshold[5] =
      defaultKeyMappings.y +
      (defaultSubPanelSettings - defaultKeyMappings.y) * writeAscii;
  } else {
    const writeUtf16 = CellVisibility();
    AxisLockThreshold[102] = writeUtf16.x;
    AxisLockThreshold[5] = writeUtf16.y;
  }
  return {
    targetX: AxisLockThreshold[102],
    targetY: AxisLockThreshold[5],
  };
}
function GnQwWt(...AxisLockThreshold) {
  AxisLockThreshold.length = 4;
  const minimapSmoothFactor = 10 / Mao5huZea938_run.rCamDelay;
  const drawMinimapInterval = 0.1;
  const baseCellSize = Math.min(drawMinimapInterval * AxisLockThreshold[3], 1);
  const combinedCameraDistanceThreshold = Math.min(
    minimapSmoothFactor * AxisLockThreshold[3],
    1
  );
  if (Mao5huZea938_run.rCombinedViewportScale > 0) {
    if (Callback$wD5ea95e_Ctx === -1) {
      Callback$wD5ea95e_Ctx = AxisLockThreshold[0];
      svqea95f_bool = AxisLockThreshold[1];
      yZBjeytPea960_Cb = AxisLockThreshold[2];
    }
    Callback$wD5ea95e_Ctx +=
      (AxisLockThreshold[0] - Callback$wD5ea95e_Ctx) *
      combinedCameraDistanceThreshold;
    svqea95f_bool +=
      (AxisLockThreshold[1] - svqea95f_bool) * combinedCameraDistanceThreshold;
    yZBjeytPea960_Cb +=
      (AxisLockThreshold[2] - yZBjeytPea960_Cb) * baseCellSize;
  } else {
    if (FalsebDqti5ea95b_eq === -1) {
      FalsebDqti5ea95b_eq = AxisLockThreshold[0];
      Map$pA_ea95c_Obj = AxisLockThreshold[1];
      WeakMapxkJW_ea95d_bool = AxisLockThreshold[2];
    }
    FalsebDqti5ea95b_eq +=
      (AxisLockThreshold[0] - FalsebDqti5ea95b_eq) *
      combinedCameraDistanceThreshold;
    Map$pA_ea95c_Obj +=
      (AxisLockThreshold[1] - Map$pA_ea95c_Obj) *
      combinedCameraDistanceThreshold;
    WeakMapxkJW_ea95d_bool +=
      (AxisLockThreshold[2] - WeakMapxkJW_ea95d_bool) * baseCellSize;
  }
  If$sEyzqKbhea93f_Exec.scale +=
    (AxisLockThreshold[2] - If$sEyzqKbhea93f_Exec.scale) * baseCellSize;
  if (Str_NmyJ4kX) {
    Str_NmyJ4kX.scale +=
      (AxisLockThreshold[2] - Str_NmyJ4kX.scale) * baseCellSize;
  }
}
function Y6r7jNS2ea9f7_mul() {
  if (Mao5huZea938_run.rCombinedViewportScale > 0) {
    bXFgW$Qq.scale.set(yZBjeytPea960_Cb);
    bXFgW$Qq.pivot.set(Callback$wD5ea95e_Ctx, svqea95f_bool);
  } else {
    bXFgW$Qq.scale.set(WeakMapxkJW_ea95d_bool);
    bXFgW$Qq.pivot.set(FalsebDqti5ea95b_eq, Map$pA_ea95c_Obj);
  }
}
function JRZXea9f8_obj(...AxisLockThreshold) {
  const minimapSmoothFactor =
    If$sEyzqKbhea93f_Exec && If$sEyzqKbhea93f_Exec.myCells.size > 0;
  const drawMinimapInterval = Str_NmyJ4kX && Str_NmyJ4kX.myCells.size > 0;
  AxisLockThreshold.a = 0;
  AxisLockThreshold[2] = undefined;
  AxisLockThreshold.c = undefined;
  if (minimapSmoothFactor && drawMinimapInterval) {
    const baseCellSize = Str_NmyJ4kX.centerX - If$sEyzqKbhea93f_Exec.centerX;
    const combinedCameraDistanceThreshold =
      Str_NmyJ4kX.centerY - If$sEyzqKbhea93f_Exec.centerY;
    AxisLockThreshold.a = Math.sqrt(
      baseCellSize * baseCellSize +
        combinedCameraDistanceThreshold * combinedCameraDistanceThreshold
    );
    AxisLockThreshold[2] =
      (If$sEyzqKbhea93f_Exec.centerX + Str_NmyJ4kX.centerX) / 2;
    AxisLockThreshold.c =
      (If$sEyzqKbhea93f_Exec.centerY + Str_NmyJ4kX.centerY) / 2;
  } else if (minimapSmoothFactor) {
    AxisLockThreshold[2] = If$sEyzqKbhea93f_Exec.centerX;
    AxisLockThreshold.c = If$sEyzqKbhea93f_Exec.centerY;
  } else if (drawMinimapInterval) {
    AxisLockThreshold[2] = Str_NmyJ4kX.centerX;
    AxisLockThreshold.c = Str_NmyJ4kX.centerY;
  } else {
    AxisLockThreshold[2] = DateDg_57Yb;
    AxisLockThreshold.c = VARJb6ea963_Ref;
  }
  if (DateDg_57Yb === -1) {
    DateDg_57Yb = AxisLockThreshold[2];
    VARJb6ea963_Ref = AxisLockThreshold.c;
    Evt_zsUK = AxisLockThreshold.a;
  }
  const combinedZoomFocusStrength = Math.min(
    combinedInterpSpeed * AxisLockThreshold[0],
    1
  );
  Evt_zsUK += (AxisLockThreshold.a - Evt_zsUK) * combinedZoomFocusStrength;
  DateDg_57Yb +=
    (AxisLockThreshold[2] - DateDg_57Yb) * combinedZoomFocusStrength;
  VARJb6ea963_Ref +=
    (AxisLockThreshold.c - VARJb6ea963_Ref) * combinedZoomFocusStrength;
}
function TypeOf_19M7ciw_ea9f9_opt() {
  Promise_KDZM8Y_ea97a_Cfg++;
  if (yield_L2zEL16 >= 1000) {
    $("#currentFPS").show();
    $("#currentFPS span").text(Promise_KDZM8Y_ea97a_Cfg);
    if (
      If$sEyzqKbhea93f_Exec.serverData.resetType > 0 &&
      If$sEyzqKbhea93f_Exec.serverData.resetTime > 0
    ) {
      Promise_28_SVO_ea950_fn.resetInfo.css("display", "block");
      const AxisLockThreshold = Math.max(
        0,
        Math.floor(
          (If$sEyzqKbhea93f_Exec.serverData.resetTime - Date.now()) / 1000
        )
      );
      if (Promise_28_SVO_ea950_fn.resetTime[0]) {
        Promise_28_SVO_ea950_fn.resetTime[0].textContent =
          formatAliveTime(AxisLockThreshold);
      }
    } else {
      Promise_28_SVO_ea950_fn.resetInfo.css("display", "none");
    }
    yield_L2zEL16 -= 1000;
    Promise_KDZM8Y_ea97a_Cfg = 0;
  }
}
function zPY7Wy_(...AxisLockThreshold) {
  const minimapSmoothFactor =
    (AxisLockThreshold[1] > 0.12 || Mao5huZea938_run.cDisableAutoFoodHiding) &&
    !Mao5huZea938_run.cHideFood;
  letwtfOyM80ea984_num.visible = minimapSmoothFactor;
  if (
    !Mao5huZea938_run.cHideFood &&
    AxisLockThreshold[0] &&
    AxisLockThreshold[0].foodObjects
  ) {
    for (const drawMinimapInterval of AxisLockThreshold[0].foodObjects.values()) {
      if (!drawMinimapInterval.sprite) {
        continue;
      }
      const baseCellSize =
        drawMinimapInterval.x + 10 > AxisLockThreshold[2] &&
        drawMinimapInterval.x - 10 < AxisLockThreshold[3] &&
        drawMinimapInterval.y + 10 > AxisLockThreshold[4] &&
        drawMinimapInterval.y - 10 < AxisLockThreshold[5];
      drawMinimapInterval.sprite.visible = baseCellSize;
      if (baseCellSize) {
        drawMinimapInterval.handleFood();
      }
    }
  } else if (AxisLockThreshold[0] && AxisLockThreshold[0].foodObjects) {
    for (const drawMinimapInterval of AxisLockThreshold[0].foodObjects.values()) {
      if (drawMinimapInterval.sprite) {
        drawMinimapInterval.sprite.visible = false;
      }
    }
  }
}
function faCUfKea9fb_add(...AxisLockThreshold) {
  const minimapSmoothFactor = window.sharedData
    ? window.sharedData.player1
      ? If$sEyzqKbhea93f_Exec
      : window.sharedData.player2
      ? Str_NmyJ4kX
      : null
    : null;
  AxisLockThreshold.a = null;
  if (If$sEyzqKbhea93f_Exec.enabled === true) {
    AxisLockThreshold.a = If$sEyzqKbhea93f_Exec;
    window.sharedData = {
      player1: true,
      player2: false,
      mouseFrozenDiv2: Promise_28_SVO_ea950_fn.mouseFrozenDiv2
        ? Promise_28_SVO_ea950_fn.mouseFrozenDiv2.style.display
        : "none",
    };
  } else if (Str_NmyJ4kX.enabled === true) {
    AxisLockThreshold.a = Str_NmyJ4kX;
    window.sharedData = {
      player1: false,
      player2: true,
      mouseFrozenDiv2: Promise_28_SVO_ea950_fn.mouseFrozenDiv2
        ? Promise_28_SVO_ea950_fn.mouseFrozenDiv2.style.display
        : "none",
    };
  }
  if (
    minimapSmoothFactor &&
    AxisLockThreshold.a &&
    minimapSmoothFactor !== AxisLockThreshold.a
  ) {
    AxisLockThreshold.a.lastSwapTime = Date.now();
    if (minimapSmoothFactor.centerX && minimapSmoothFactor.centerY) {
      AxisLockThreshold.a.prevCenterX = minimapSmoothFactor.centerX;
      AxisLockThreshold.a.prevCenterY = minimapSmoothFactor.centerY;
    }
  }
  return AxisLockThreshold.a;
}
function ForKgjVzrQea9fc_Status(...AxisLockThreshold) {
  const minimapSmoothFactor = faCUfKea9fb_add();
  const drawMinimapInterval =
    minimapSmoothFactor === If$sEyzqKbhea93f_Exec
      ? Str_NmyJ4kX
      : If$sEyzqKbhea93f_Exec;
  if (
    drawMinimapInterval &&
    drawMinimapInterval.isConnected() &&
    drawMinimapInterval.myCells.size === 0 &&
    !drawMinimapInterval.spectate
  ) {
    BOOLxEFAPea9cf_or("Cannot swap: Multi is not in-game.");
    return;
  }
  zd8T_jfeea9b6_and.deactivate();
  if (If$sEyzqKbhea93f_Exec) {
    If$sEyzqKbhea93f_Exec.wasAliveLastTick =
      If$sEyzqKbhea93f_Exec.myCells.size > 0;
  }
  if (Str_NmyJ4kX) {
    Str_NmyJ4kX.wasAliveLastTick = Str_NmyJ4kX.myCells.size > 0;
  }
  If$sEyzqKbhea93f_Exec.play();
  Str_NmyJ4kX.play();
  if (If$sEyzqKbhea93f_Exec.isConnected() && Str_NmyJ4kX.isConnected()) {
    if (If$sEyzqKbhea93f_Exec.enabled && !Str_NmyJ4kX.enabled) {
      If$sEyzqKbhea93f_Exec.enabled = false;
      Str_NmyJ4kX.enabled = true;
      Str_NmyJ4kX.mouseFrozen = false;
    } else if (!If$sEyzqKbhea93f_Exec.enabled && Str_NmyJ4kX.enabled) {
      Str_NmyJ4kX.enabled = false;
      If$sEyzqKbhea93f_Exec.enabled = true;
      If$sEyzqKbhea93f_Exec.mouseFrozen = false;
    }
  }
  if (ObjectueAUtq) {
    if (If$sEyzqKbhea93f_Exec.enabled) {
      If$sEyzqKbhea93f_Exec.sendPacket(VoidGBYH.sendEjectMass(true));
      Str_NmyJ4kX.sendPacket(VoidGBYH.sendEjectMass(false));
    } else if (Str_NmyJ4kX.enabled) {
      Str_NmyJ4kX.sendPacket(VoidGBYH.sendEjectMass(true));
      If$sEyzqKbhea93f_Exec.sendPacket(VoidGBYH.sendEjectMass(false));
    }
  }
}
function hjScxea9fd_res(...AxisLockThreshold) {
  if (
    !AxisLockThreshold[0] ||
    AxisLockThreshold[0].myCells.size === 0 ||
    for_JCpm
  ) {
    return;
  }
  AxisLockThreshold[75] = 0;
  AxisLockThreshold.b = 0;
  AxisLockThreshold[3] = 0;
  for (const minimapSmoothFactor of AxisLockThreshold[0].myCells.values()) {
    const drawMinimapInterval = minimapSmoothFactor.getRealMass();
    AxisLockThreshold[3] += drawMinimapInterval;
    AxisLockThreshold[75] += minimapSmoothFactor.x_ * drawMinimapInterval;
    AxisLockThreshold.b += minimapSmoothFactor.y_ * drawMinimapInterval;
  }
  if (AxisLockThreshold[3] < 1000) {
    return;
  }
  for_JCpm = true;
  const baseCellSize =
    AxisLockThreshold[3] > 0 ? AxisLockThreshold[75] / AxisLockThreshold[3] : 0;
  const combinedCameraDistanceThreshold =
    AxisLockThreshold[3] > 0 ? AxisLockThreshold.b / AxisLockThreshold[3] : 0;
  const combinedZoomFocusStrength = AxisLockThreshold[0].calculatedMouseX;
  const combinedInterpSpeed = AxisLockThreshold[0].calculatedMouseY;
  const messageColors = Object$kDcGWUY((...minimapSmoothFactor) => {
    minimapSmoothFactor.length = 3;
    minimapSmoothFactor[3] = 0;
    const drawMinimapInterval =
      1 + (minimapSmoothFactor[0] - 1) * minimapSmoothFactor[1];
    if (AxisLockThreshold[3] >= 4000) {
      const messageColors =
        baseCellSize + (baseCellSize - combinedZoomFocusStrength);
      const MESSAGE_TYPES =
        combinedCameraDistanceThreshold +
        (combinedCameraDistanceThreshold - combinedInterpSpeed);
      AxisLockThreshold[0].sendPacket(
        VoidGBYH.sendMouse(messageColors, MESSAGE_TYPES)
      );
      minimapSmoothFactor[3] = drawMinimapInterval + 20;
      setTimeout(() => {
        AxisLockThreshold[0].sendPacket(
          VoidGBYH.sendMouse(combinedZoomFocusStrength, combinedInterpSpeed)
        );
      }, minimapSmoothFactor[3]);
    }
    for (
      let CellVisibility = 0;
      CellVisibility < minimapSmoothFactor[0];
      CellVisibility++
    ) {
      setTimeout(() => {
        AxisLockThreshold[0].sendPacket(VoidGBYH.sendKey(17));
      }, 1 + CellVisibility * minimapSmoothFactor[1]);
    }
    minimapSmoothFactor.b = Math.max(
      drawMinimapInterval,
      minimapSmoothFactor[3]
    );
    if (Mao5huZea938_run.sSoloTrickMode === "AUTO") {
      let MassDisplayType;
      if (minimapSmoothFactor[2]) {
        AxisLockThreshold[0].sendPacket(VoidGBYH.sendEjectMass(true));
        MassDisplayType = 900;
        setTimeout(() => {
          return AxisLockThreshold[0].sendPacket(VoidGBYH.sendEjectMass(false));
        }, MassDisplayType);
      } else {
        setTimeout(() => {
          return AxisLockThreshold[0].sendPacket(VoidGBYH.sendEjectMass(true));
        }, minimapSmoothFactor[1]);
        MassDisplayType = minimapSmoothFactor[1] + 900;
        setTimeout(() => {
          return AxisLockThreshold[0].sendPacket(VoidGBYH.sendEjectMass(false));
        }, MassDisplayType);
      }
      minimapSmoothFactor.b = Math.max(minimapSmoothFactor.b, MassDisplayType);
    }
    setTimeout(() => {
      return (for_JCpm = false);
    }, minimapSmoothFactor.b + 20);
  }, 3);
  if (AxisLockThreshold[3] < 4000) {
    messageColors(4, 100, false);
  } else if (AxisLockThreshold[3] < 10000) {
    messageColors(6, 100, false);
  } else if (AxisLockThreshold[3] < 30000) {
    messageColors(7, 100, false);
  } else {
    messageColors(9, 100, true);
  }
}
function Promise_OUmY4gHt_ea9fe_idx(...AxisLockThreshold) {
  if (
    !AxisLockThreshold[0] ||
    AxisLockThreshold[0].myCells.size === 0 ||
    for_JCpm
  ) {
    return;
  }
  AxisLockThreshold[3] = 0;
  AxisLockThreshold.b = 0;
  AxisLockThreshold.c = 0;
  for (const minimapSmoothFactor of AxisLockThreshold[0].myCells.values()) {
    const drawMinimapInterval = minimapSmoothFactor.getRealMass();
    AxisLockThreshold.c += drawMinimapInterval;
    AxisLockThreshold[3] += minimapSmoothFactor.x_ * drawMinimapInterval;
    AxisLockThreshold.b += minimapSmoothFactor.y_ * drawMinimapInterval;
  }
  if (AxisLockThreshold.c < 1000) {
    return;
  }
  for_JCpm = true;
  AxisLockThreshold[0].mouseFrozen = true;
  const baseCellSize =
    AxisLockThreshold.c > 0 ? AxisLockThreshold[3] / AxisLockThreshold.c : 0;
  const combinedCameraDistanceThreshold =
    AxisLockThreshold.c > 0 ? AxisLockThreshold.b / AxisLockThreshold.c : 0;
  const combinedZoomFocusStrength = AxisLockThreshold[1];
  const combinedInterpSpeed = AxisLockThreshold[2];
  const messageColors = Object$kDcGWUY((...minimapSmoothFactor) => {
    minimapSmoothFactor.length = 3;
    const drawMinimapInterval =
      1 + (minimapSmoothFactor[0] - 1) * minimapSmoothFactor[1];
    if (AxisLockThreshold.c >= 4000) {
      const messageColors =
        baseCellSize + (baseCellSize - combinedZoomFocusStrength);
      const MESSAGE_TYPES =
        combinedCameraDistanceThreshold +
        (combinedCameraDistanceThreshold - combinedInterpSpeed);
      AxisLockThreshold[0].sendPacket(
        VoidGBYH.sendMouse(messageColors, MESSAGE_TYPES)
      );
    }
    for (
      let CellVisibility = 0;
      CellVisibility < minimapSmoothFactor[0];
      CellVisibility++
    ) {
      setTimeout(() => {
        AxisLockThreshold[0].sendPacket(VoidGBYH.sendKey(17));
      }, 1 + CellVisibility * minimapSmoothFactor[1]);
    }
    setTimeout(() => {
      AxisLockThreshold[0].sendPacket(
        VoidGBYH.sendMouse(combinedZoomFocusStrength, combinedInterpSpeed)
      );
    }, 2);
    minimapSmoothFactor[3] = drawMinimapInterval;
    if (Mao5huZea938_run.sSoloTrickMode === "AUTO") {
      let MassDisplayType;
      if (minimapSmoothFactor[2]) {
        AxisLockThreshold[0].sendPacket(VoidGBYH.sendEjectMass(true));
        MassDisplayType = 900;
        setTimeout(() => {
          return AxisLockThreshold[0].sendPacket(VoidGBYH.sendEjectMass(false));
        }, MassDisplayType);
      } else {
        setTimeout(() => {
          return AxisLockThreshold[0].sendPacket(VoidGBYH.sendEjectMass(true));
        }, minimapSmoothFactor[1]);
        MassDisplayType = minimapSmoothFactor[1] + 900;
        setTimeout(() => {
          return AxisLockThreshold[0].sendPacket(VoidGBYH.sendEjectMass(false));
        }, MassDisplayType);
      }
      minimapSmoothFactor[3] = Math.max(
        minimapSmoothFactor[3],
        MassDisplayType
      );
    }
    setTimeout(() => {
      for_JCpm = false;
      if (AxisLockThreshold[0]) {
        AxisLockThreshold[0].mouseFrozen = false;
      }
    }, minimapSmoothFactor[3] + 100);
  }, 3);
  if (AxisLockThreshold.c < 4000) {
    messageColors(4, 100, false);
  } else if (AxisLockThreshold.c < 10000) {
    messageColors(6, 100, false);
  } else if (AxisLockThreshold.c < 30000) {
    messageColors(7, 100, false);
  } else {
    messageColors(9, 100, true);
  }
}
async function yield_LTAv5ipN() {
  const AxisLockThreshold = faCUfKea9fb_add();
  if (
    !AxisLockThreshold ||
    !AxisLockThreshold.isConnected() ||
    AxisLockThreshold.myCells.size === 0
  ) {
    return;
  }
  if (tRyea944_Id) {
    return;
  }
  const minimapSmoothFactor = Object$kDcGWUY((...AxisLockThreshold) => {
    AxisLockThreshold.length = 1;
    if (!AxisLockThreshold[0]) {
      return false;
    }
    if (AxisLockThreshold[0].playerId) {
      return (
        AxisLockThreshold[0].isConnected() &&
        AxisLockThreshold[0].myCells.size > 0
      );
    }
    return AxisLockThreshold[0].state === PlayerState.ALIVE;
  });
  if (Mao5huZea938_run.sFastFeed === "MouseCursor") {
    tRyea944_Id = true;
    BOOLxEFAPea9cf_or("Fast Feed: Mouse Cursor");
    AxisLockThreshold.mouseFrozen = true;
    try {
      let drawMinimapInterval = AxisLockThreshold.getMass();
      if (drawMinimapInterval <= 300000) {
        for (let baseCellSize = 0; baseCellSize < 5; baseCellSize++) {
          AxisLockThreshold.sendPacket(VoidGBYH.sendKey(17));
        }
        await new Promise(
          Object$kDcGWUY((...AxisLockThreshold) => {
            AxisLockThreshold.length = 1;
            return setTimeout(AxisLockThreshold[0], 830);
          })
        );
        for (let baseCellSize = 0; baseCellSize < 3; baseCellSize++) {
          AxisLockThreshold.sendPacket(VoidGBYH.sendKey(17));
        }
      } else {
        for (let baseCellSize = 0; baseCellSize < 4; baseCellSize++) {
          AxisLockThreshold.sendPacket(VoidGBYH.sendKey(17));
        }
        await new Promise(
          Object$kDcGWUY((...AxisLockThreshold) => {
            AxisLockThreshold.length = 1;
            return setTimeout(AxisLockThreshold[0], 739);
          })
        );
        for (let baseCellSize = 0; baseCellSize < 4; baseCellSize++) {
          AxisLockThreshold.sendPacket(VoidGBYH.sendKey(17));
        }
      }
      await new Promise(
        Object$kDcGWUY((...AxisLockThreshold) => {
          AxisLockThreshold.length = 1;
          return setTimeout(AxisLockThreshold[0], 350);
        })
      );
    } finally {
      tRyea944_Id = false;
      if (AxisLockThreshold) {
        AxisLockThreshold.mouseFrozen = false;
      }
    }
    return;
  }
  const combinedCameraDistanceThreshold = (...drawMinimapInterval) => {
    drawMinimapInterval.length = 0;
    const baseCellSize =
      AxisLockThreshold === If$sEyzqKbhea93f_Exec
        ? Str_NmyJ4kX
        : If$sEyzqKbhea93f_Exec;
    const combinedCameraDistanceThreshold = [];
    const combinedZoomFocusStrength = Winy9ZiY(AxisLockThreshold, true);
    if (minimapSmoothFactor(baseCellSize)) {
      let combinedInterpSpeed = null;
      let MESSAGE_TYPES = -1;
      for (const CellVisibility of baseCellSize.myCells.values()) {
        if (CellVisibility.getRealMass() > MESSAGE_TYPES) {
          MESSAGE_TYPES = CellVisibility.getRealMass();
          combinedInterpSpeed = CellVisibility;
        }
      }
      if (combinedInterpSpeed) {
        const MassDisplayType =
          combinedInterpSpeed.x_ - combinedZoomFocusStrength.x;
        const SKIN_LOAD_STATUS =
          combinedInterpSpeed.y_ - combinedZoomFocusStrength.y;
        combinedCameraDistanceThreshold.push({
          id: baseCellSize.playerId,
          name: baseCellSize.name,
          cell: combinedInterpSpeed,
          distanceSq:
            MassDisplayType * MassDisplayType +
            SKIN_LOAD_STATUS * SKIN_LOAD_STATUS,
        });
      }
    }
    if (If$sEyzqKbhea93f_Exec.party && If$sEyzqKbhea93f_Exec.party.length > 1) {
      for (const defaultKeyMappings of If$sEyzqKbhea93f_Exec.party) {
        if (
          defaultKeyMappings.id === AxisLockThreshold.playerId ||
          defaultKeyMappings.state !== PlayerState.ALIVE ||
          (baseCellSize && defaultKeyMappings.id === baseCellSize.playerId)
        ) {
          continue;
        }
        let defaultOptions = null;
        let defaultSubPanelSettings = -1;
        for (const CellVisibility of jQuery_hn$0_2t_ea9b2_sub.allCells) {
          if (
            CellVisibility.playerId === defaultKeyMappings.id &&
            CellVisibility.type === 2
          ) {
            const fontConfigs = CellVisibility.getRealMass();
            if (fontConfigs > defaultSubPanelSettings) {
              defaultSubPanelSettings = fontConfigs;
              defaultOptions = CellVisibility;
            }
          }
        }
        if (defaultOptions && defaultSubPanelSettings > 1000) {
          const MassDisplayType =
            defaultOptions.x_ - combinedZoomFocusStrength.x;
          const SKIN_LOAD_STATUS =
            defaultOptions.y_ - combinedZoomFocusStrength.y;
          combinedCameraDistanceThreshold.push({
            id: defaultKeyMappings.id,
            name: defaultKeyMappings.name,
            cell: defaultOptions,
            distanceSq:
              MassDisplayType * MassDisplayType +
              SKIN_LOAD_STATUS * SKIN_LOAD_STATUS,
          });
        }
      }
    }
    if (combinedCameraDistanceThreshold.length === 0) {
      return null;
    }
    combinedCameraDistanceThreshold.sort(
      Object$kDcGWUY((...drawMinimapInterval) => {
        drawMinimapInterval.length = 2;
        return (
          drawMinimapInterval[0].distanceSq - drawMinimapInterval[1].distanceSq
        );
      }, 2)
    );
    return combinedCameraDistanceThreshold[0];
  };
  const combinedZoomFocusStrength = combinedCameraDistanceThreshold();
  if (!combinedZoomFocusStrength) {
    BOOLxEFAPea9cf_or("Fast Feed: No suitable teammates found");
    return;
  }
  tRyea944_Id = true;
  BOOLxEFAPea9cf_or("Fast Feed: " + combinedZoomFocusStrength.name);
  const drawMinimapInterval = AxisLockThreshold.getMass();
  try {
    AxisLockThreshold.sendPacket(
      VoidGBYH.sendMouse(
        combinedZoomFocusStrength.cell.x,
        combinedZoomFocusStrength.cell.y
      )
    );
    AxisLockThreshold.mouseFrozen = true;
    await new Promise(
      Object$kDcGWUY((...AxisLockThreshold) => {
        AxisLockThreshold.length = 1;
        return setTimeout(AxisLockThreshold[0], 50);
      })
    );
    let combinedInterpSpeed = null;
    const messageColors =
      AxisLockThreshold === If$sEyzqKbhea93f_Exec
        ? Str_NmyJ4kX
        : If$sEyzqKbhea93f_Exec;
    if (
      messageColors &&
      combinedZoomFocusStrength.id === messageColors.playerId
    ) {
      combinedInterpSpeed = messageColors;
    } else {
      combinedInterpSpeed = If$sEyzqKbhea93f_Exec.party.find(
        Object$kDcGWUY((...AxisLockThreshold) => {
          AxisLockThreshold.length = 1;
          return AxisLockThreshold[0].id === combinedZoomFocusStrength.id;
        })
      );
    }
    if (!minimapSmoothFactor(combinedInterpSpeed)) {
      console.log("[FastFeed] Target died before first split burst. Aborting.");
      return;
    }
    if (drawMinimapInterval <= 300000) {
      for (let baseCellSize = 0; baseCellSize < 5; baseCellSize++) {
        AxisLockThreshold.sendPacket(VoidGBYH.sendKey(17));
      }
      await new Promise(
        Object$kDcGWUY((...AxisLockThreshold) => {
          AxisLockThreshold.length = 1;
          return setTimeout(AxisLockThreshold[0], 829);
        })
      );
      if (!minimapSmoothFactor(combinedInterpSpeed)) {
        return;
      }
      for (let baseCellSize = 0; baseCellSize < 3; baseCellSize++) {
        AxisLockThreshold.sendPacket(VoidGBYH.sendKey(17));
      }
    } else {
      for (let baseCellSize = 0; baseCellSize < 4; baseCellSize++) {
        AxisLockThreshold.sendPacket(VoidGBYH.sendKey(17));
      }
      await new Promise(
        Object$kDcGWUY((...AxisLockThreshold) => {
          AxisLockThreshold.length = 1;
          return setTimeout(AxisLockThreshold[0], 739);
        })
      );
      if (!minimapSmoothFactor(combinedInterpSpeed)) {
        return;
      }
      for (let baseCellSize = 0; baseCellSize < 4; baseCellSize++) {
        AxisLockThreshold.sendPacket(VoidGBYH.sendKey(17));
      }
    }
    await new Promise(
      Object$kDcGWUY((...AxisLockThreshold) => {
        AxisLockThreshold.length = 1;
        return setTimeout(AxisLockThreshold[0], 600);
      })
    );
  } finally {
    if (AxisLockThreshold) {
      AxisLockThreshold.mouseFrozen = false;
    }
    tRyea944_Id = false;
  }
}
function FROM$YeJ0i$eaa00_bool(...AxisLockThreshold) {
  if (!$("#fastfeed-mode-notification").length) {
    $(
      '<div id="fastfeed-mode-notification" style="position: fixed; top: 80px; left: 50%; transform: translateX(-50%); z-index: 1000;"></div>'
    ).appendTo(document.body);
  }
  AxisLockThreshold.b = undefined;
  AxisLockThreshold.c = undefined;
  const minimapSmoothFactor = Mao5huZea938_run.sFastFeed;
  if (minimapSmoothFactor === "MouseCursor") {
    AxisLockThreshold.b = "SmartTarget";
    AxisLockThreshold.c = "Smart Target";
  } else {
    AxisLockThreshold.b = "MouseCursor";
    AxisLockThreshold.c = "Mouse Cursor";
  }
  Mao5huZea938_run.sFastFeed = AxisLockThreshold.b;
  BOOLxEFAPea9cf_or("Fast Feed Mode: " + AxisLockThreshold.c);
}
function d5OVi(...AxisLockThreshold) {
  AxisLockThreshold.a = undefined;
  AxisLockThreshold[-205] = undefined;
  if (Cd8Hiea95a_Init === "followMouseSCell") {
    AxisLockThreshold.a = "followMouseMacros";
    AxisLockThreshold[-205] = "Standard Follow";
  } else {
    AxisLockThreshold.a = "followMouseSCell";
    AxisLockThreshold[-205] = "S-Cell Positioning";
  }
  XHR_uLPuP9eaa0c_Ex(AxisLockThreshold.a);
  BOOLxEFAPea9cf_or("Multi Follow Mouse Mode: " + AxisLockThreshold[-205]);
}
function Ctx_HHTJdo(...AxisLockThreshold) {
  const minimapSmoothFactor =
    faCUfKea9fb_add() === If$sEyzqKbhea93f_Exec
      ? Str_NmyJ4kX
      : If$sEyzqKbhea93f_Exec;
  if (!minimapSmoothFactor) {
    return;
  }
  const drawMinimapInterval =
    !minimapSmoothFactor.isConnected() ||
    (minimapSmoothFactor.myCells.size === 0 && !minimapSmoothFactor.spectate);
  if (drawMinimapInterval) {
    El_SqvbXGiea949_Tmp = true;
    minimapSmoothFactor.play();
    BOOLxEFAPea9cf_or("Multi Respawn: Activated");
  } else {
    El_SqvbXGiea949_Tmp = !El_SqvbXGiea949_Tmp;
    const baseCellSize = El_SqvbXGiea949_Tmp ? "ON" : "OFF";
    BOOLxEFAPea9cf_or("Multi Auto-Respawn: " + baseCellSize);
  }
}
function If_yEAw_eaa03_Res(...AxisLockThreshold) {
  if (Date.now() < yield_j0ltb_ea9a1_eq) {
    return;
  }
  const minimapSmoothFactor = faCUfKea9fb_add();
  const drawMinimapInterval =
    minimapSmoothFactor === If$sEyzqKbhea93f_Exec
      ? Str_NmyJ4kX
      : If$sEyzqKbhea93f_Exec;
  if (
    !drawMinimapInterval ||
    !drawMinimapInterval.isConnected() ||
    drawMinimapInterval.myCells.size === 0
  ) {
    return;
  }
  if (AxisLockThreshold[0] === 8) {
    if (minimapSmoothFactor.myCells.size === 0) {
      return;
    }
    let baseCellSize = null;
    for (const combinedCameraDistanceThreshold of minimapSmoothFactor.myCells.values()) {
      if (
        !baseCellSize ||
        combinedCameraDistanceThreshold.size > baseCellSize.size
      ) {
        baseCellSize = combinedCameraDistanceThreshold;
      }
    }
    if (baseCellSize) {
      console.log("[MultiMax] Targeting biggest cell and splitting.");
      drawMinimapInterval.sendPacket(
        VoidGBYH.sendMouse(baseCellSize.x, baseCellSize.y)
      );
      setTimeout(() => {
        for (
          let minimapSmoothFactor = 0;
          minimapSmoothFactor < AxisLockThreshold[0];
          minimapSmoothFactor++
        ) {
          drawMinimapInterval.sendPacket(VoidGBYH.sendKey(17));
        }
      }, 1);
      yield_j0ltb_ea9a1_eq = Date.now() + 1;
    }
    return;
  }
  if (Cd8Hiea95a_Init === "followMouseSCell") {
    const combinedZoomFocusStrength = minimapSmoothFactor.myCells.size;
    if (combinedZoomFocusStrength === 0) {
      return;
    }
    let combinedInterpSpeed = 0;
    let messageColors = 0;
    for (const combinedCameraDistanceThreshold of minimapSmoothFactor.myCells.values()) {
      combinedInterpSpeed += combinedCameraDistanceThreshold.x;
      messageColors += combinedCameraDistanceThreshold.y;
    }
    const MESSAGE_TYPES = combinedInterpSpeed / combinedZoomFocusStrength;
    const CellVisibility = messageColors / combinedZoomFocusStrength;
    if (MESSAGE_TYPES && CellVisibility) {
      drawMinimapInterval.sendPacket(
        VoidGBYH.sendMouse(MESSAGE_TYPES, CellVisibility)
      );
      setTimeout(() => {
        for (
          let minimapSmoothFactor = 0;
          minimapSmoothFactor < AxisLockThreshold[0];
          minimapSmoothFactor++
        ) {
          drawMinimapInterval.sendPacket(VoidGBYH.sendKey(17));
        }
      }, 1);
      yield_j0ltb_ea9a1_eq = Date.now() + 1;
    }
  } else if (typeof drawMinimapInterval.sendSplit === "function") {
    CLASS_3Ft = true;
    drawMinimapInterval.sendSplit(AxisLockThreshold[0]).then(() => {
      CLASS_3Ft = false;
    });
    yield_j0ltb_ea9a1_eq = Date.now() + 1;
  }
}
function React_a3eebzUUeaa04(...AxisLockThreshold) {
  const minimapSmoothFactor = faCUfKea9fb_add();
  const drawMinimapInterval =
    minimapSmoothFactor === If$sEyzqKbhea93f_Exec
      ? Str_NmyJ4kX
      : If$sEyzqKbhea93f_Exec;
  if (Mao5huZea938_run.BotFFeed) {
    NOgc$oea945_num = true;
    if (
      !drawMinimapInterval.mouseFrozen &&
      !in_hpdqea943_div &&
      !Mao5huZea938_run.mouseFollow
    ) {
      if (!do_Hz8uZ47Tea9a2_Id) {
        do_Hz8uZ47Tea9a2_Id = true;
        const baseCellSize =
          minimapSmoothFactor.calculatedMouseX || AxisLockThreshold[0];
        const combinedCameraDistanceThreshold =
          minimapSmoothFactor.calculatedMouseY || AxisLockThreshold[1];
        drawMinimapInterval.sendPacket(
          VoidGBYH.sendMouse(baseCellSize, combinedCameraDistanceThreshold)
        );
        setTimeout(() => {
          do_Hz8uZ47Tea9a2_Id = false;
          NOgc$oea945_num = false;
        }, 50);
      }
    }
    if (in_hpdqea943_div && !xhr_UZ5IPT_ea9a3_run) {
      xhr_UZ5IPT_ea9a3_run = true;
      for (
        let combinedZoomFocusStrength = 0;
        combinedZoomFocusStrength < 5;
        combinedZoomFocusStrength++
      ) {
        drawMinimapInterval.sendPacket(VoidGBYH.sendKey(17));
      }
      setTimeout(() => {
        for (
          let AxisLockThreshold = 0;
          AxisLockThreshold < 8;
          AxisLockThreshold++
        ) {
          drawMinimapInterval.sendPacket(VoidGBYH.sendKey(17));
        }
        Mao5huZea938_run.BotFFeed = false;
        xhr_UZ5IPT_ea9a3_run = false;
        NOgc$oea945_num = false;
      }, 830);
    }
  }
}
function rCRuBeaa05_res(...AxisLockThreshold) {
  AxisLockThreshold[2] = faCUfKea9fb_add();
  AxisLockThreshold[58] =
    AxisLockThreshold[2] === If$sEyzqKbhea93f_Exec
      ? Str_NmyJ4kX
      : If$sEyzqKbhea93f_Exec;
  if (Mao5huZea938_run.soloMothership) {
    if (
      !AxisLockThreshold[58].mouseFrozen &&
      !in_hpdqea943_div &&
      !Mao5huZea938_run.mouseFollow
    ) {
      const minimapSmoothFactor =
        AxisLockThreshold[2].calculatedMouseX || AxisLockThreshold[0];
      const drawMinimapInterval =
        AxisLockThreshold[2].calculatedMouseY || AxisLockThreshold[1];
      AxisLockThreshold[58].sendPacket(
        VoidGBYH.sendMouse(minimapSmoothFactor, drawMinimapInterval)
      );
    }
    if (in_hpdqea943_div) {
      for (
        AxisLockThreshold[85] = 0;
        AxisLockThreshold[85] < 8;
        AxisLockThreshold[85]++
      ) {
        AxisLockThreshold[58].sendPacket(VoidGBYH.sendKey(17));
      }
      Mao5huZea938_run.soloMothership = false;
    }
  }
}
function This_GCC(...AxisLockThreshold) {
  if (NOgc$oea945_num) {
    return;
  }
  AxisLockThreshold.a = faCUfKea9fb_add();
  AxisLockThreshold[3] =
    AxisLockThreshold.a === If$sEyzqKbhea93f_Exec
      ? Str_NmyJ4kX
      : If$sEyzqKbhea93f_Exec;
  if (Mao5huZea938_run.mouseFollow) {
    if (Cd8Hiea95a_Init === "followMouseAlways") {
      if (!AxisLockThreshold[3].mouseFrozen) {
        const minimapSmoothFactor =
          AxisLockThreshold.a.calculatedMouseX || AxisLockThreshold[0];
        const drawMinimapInterval =
          AxisLockThreshold.a.calculatedMouseY || AxisLockThreshold[1];
        AxisLockThreshold[3].sendPacket(
          VoidGBYH.sendMouse(minimapSmoothFactor, drawMinimapInterval)
        );
      }
    } else if (Cd8Hiea95a_Init === "followMouseMacros" && CLASS_3Ft) {
      if (!AxisLockThreshold[3].mouseFrozen) {
        const minimapSmoothFactor =
          AxisLockThreshold.a.calculatedMouseX || AxisLockThreshold[0];
        const drawMinimapInterval =
          AxisLockThreshold.a.calculatedMouseY || AxisLockThreshold[1];
        AxisLockThreshold[3].sendPacket(
          VoidGBYH.sendMouse(minimapSmoothFactor, drawMinimapInterval)
        );
      }
    } else if (Cd8Hiea95a_Init === "followMouseSCell" && CLASS_3Ft) {
      if (!AxisLockThreshold[3].mouseFrozen) {
        const baseCellSize = AxisLockThreshold.a.myCells;
        const combinedCameraDistanceThreshold = baseCellSize.size;
        if (combinedCameraDistanceThreshold > 0) {
          let combinedZoomFocusStrength = 0;
          let combinedInterpSpeed = 0;
          for (const messageColors of baseCellSize.values()) {
            combinedZoomFocusStrength += messageColors.x;
            combinedInterpSpeed += messageColors.y;
          }
          const minimapSmoothFactor =
            combinedZoomFocusStrength / combinedCameraDistanceThreshold;
          const drawMinimapInterval =
            combinedInterpSpeed / combinedCameraDistanceThreshold;
          AxisLockThreshold[3].sendPacket(
            VoidGBYH.sendMouse(minimapSmoothFactor, drawMinimapInterval)
          );
        }
      }
    }
  }
}
function yield_a4eFrbK9_eaa07_Ret(...AxisLockThreshold) {
  const minimapSmoothFactor = "circle-radius-" + AxisLockThreshold[0];
  if (Math_zxd$ea973_Obj.has(minimapSmoothFactor)) {
    return Math_zxd$ea973_Obj.get(minimapSmoothFactor);
  }
  Evt_oIHD_ea9a4_idx.clear();
  Evt_oIHD_ea9a4_idx.beginFill(16777215);
  Evt_oIHD_ea9a4_idx.drawCircle(0, 0, AxisLockThreshold[0]);
  Evt_oIHD_ea9a4_idx.endFill();
  const drawMinimapInterval = AxisLockThreshold[0] * 2;
  const baseCellSize = AxisLockThreshold[0] * 2;
  const combinedCameraDistanceThreshold = PIXI.RenderTexture.create({
    width: drawMinimapInterval,
    height: baseCellSize,
    multisample: PIXI.MSAA_QUALITY.HIGH,
    resolution: Date$F4EY.renderer.resolution,
  });
  const combinedZoomFocusStrength = new PIXI.Matrix();
  combinedZoomFocusStrength.translate(
    AxisLockThreshold[0],
    AxisLockThreshold[0]
  );
  Date$F4EY.renderer.render(Evt_oIHD_ea9a4_idx, {
    renderTexture: combinedCameraDistanceThreshold,
    transform: combinedZoomFocusStrength,
    clear: true,
  });
  if (Date$F4EY.renderer.framebuffer && Date$F4EY.renderer.framebuffer.blit) {
    Date$F4EY.renderer.framebuffer.blit();
  }
  Math_zxd$ea973_Obj.set(minimapSmoothFactor, combinedCameraDistanceThreshold);
  return combinedCameraDistanceThreshold;
}
function HelperBFZkQ(...AxisLockThreshold) {
  console.error(
    "Authentication Error:",
    AxisLockThreshold[0].message,
    "(" + AxisLockThreshold[0].code + ")"
  );
  if (AxisLockThreshold[1]) {
    let minimapSmoothFactor =
      "" +
      AxisLockThreshold[0].message +
      " (" +
      AxisLockThreshold[0].code +
      ")";
    switch (AxisLockThreshold[0].code) {
      case "auth/user-disabled":
        minimapSmoothFactor =
          "This account has been permanently suspended by an administrator.";
        break;
      case "auth/popup-closed-by-user":
        return;
    }
    PzLTVea9d7_res(minimapSmoothFactor, "danger");
  }
}
function bmBtnjkeaa09_or(...AxisLockThreshold) {
  if (AxisLockThreshold[0] === 0) {
    return "You cannot block that player.";
  }
  const minimapSmoothFactor = faCUfKea9fb_add().playerId;
  if (AxisLockThreshold[0] === minimapSmoothFactor) {
    return "Why would you block yourself!";
  }
  const drawMinimapInterval = Map_brr9MVea94a_Idx.indexOf(AxisLockThreshold[0]);
  if (drawMinimapInterval !== -1) {
    Map_brr9MVea94a_Idx.splice(drawMinimapInterval, 1);
    return "Unblocked player with ID: " + AxisLockThreshold[0];
  } else {
    Map_brr9MVea94a_Idx.push(AxisLockThreshold[0]);
    return "Blocked player with ID: " + AxisLockThreshold[0];
  }
}
function fGuNueaa0a_err(...AxisLockThreshold) {
  NghauAMea965_VAL = findServerByName(AxisLockThreshold[0], asyncq0oTeVQT);
  if (NghauAMea965_VAL) {
    localStorage.setItem(
      "options",
      JSON.stringify({
        ...(JSON.parse(localStorage.getItem("options")) || {}),
        server: NghauAMea965_VAL.name,
        region: $("#btnToggleServers").attr("region"),
      })
    );
  }
}
function TruejJBgB31q(...AxisLockThreshold) {
  qq8ea959_idx = AxisLockThreshold[0];
  localStorage.setItem(
    "options",
    JSON.stringify({
      ...(JSON.parse(localStorage.getItem("options")) || {}),
      cameraMode: AxisLockThreshold[0],
    })
  );
  $("#cameraMode > nord-button").attr("variant", "plain");
  $("#cameraMode > #" + AxisLockThreshold[0]).attr("variant", "primary");
}
function XHR_uLPuP9eaa0c_Ex(...AxisLockThreshold) {
  Cd8Hiea95a_Init = AxisLockThreshold[0];
  localStorage.setItem(
    "options",
    JSON.stringify({
      ...(JSON.parse(localStorage.getItem("options")) || {}),
      followMouseMode: AxisLockThreshold[0],
    })
  );
  $("#followMouseMode > nord-button").attr("variant", "plain");
  $("#followMouseMode > #" + AxisLockThreshold[0]).attr("variant", "primary");
}
function HXgYeaa0d_TYPE(...AxisLockThreshold) {
  const minimapSmoothFactor = AxisLockThreshold[0].split(" ");
  AxisLockThreshold.a = "";
  AxisLockThreshold[39] = null;
  for (
    AxisLockThreshold[3] = 0;
    AxisLockThreshold[3] < minimapSmoothFactor.length;
    AxisLockThreshold[3]++
  ) {
    if (AxisLockThreshold[3] != 0) {
      AxisLockThreshold.a += " ";
    }
    AxisLockThreshold[39] = minimapSmoothFactor[AxisLockThreshold[3]];
    if (FalseJax[AxisLockThreshold[39]] != null) {
      if (
        AxisLockThreshold[39].startsWith(":") &&
        AxisLockThreshold[39].endsWith(":")
      ) {
        AxisLockThreshold[39] = AxisLockThreshold[39].substring(
          1,
          AxisLockThreshold[39].length - 1
        );
      }
      AxisLockThreshold.a +=
        '<img src="images/emotes/' +
        AxisLockThreshold[39] +
        '.png" height="17" width="17" alt="' +
        AxisLockThreshold[39] +
        '">';
    } else if (xhr_tj9avEM[AxisLockThreshold[39]] != null) {
      if (
        AxisLockThreshold[39].startsWith(":") &&
        AxisLockThreshold[39].endsWith(":")
      ) {
        AxisLockThreshold[39] = AxisLockThreshold[39].substring(
          1,
          AxisLockThreshold[39].length - 1
        );
      }
      AxisLockThreshold.a +=
        '<img src="images/emotes/gifs/' +
        AxisLockThreshold[39] +
        '.gif" height="17" width="17" alt="' +
        AxisLockThreshold[39] +
        '">';
    } else {
      AxisLockThreshold.a += AxisLockThreshold[39];
    }
  }
  return AxisLockThreshold.a;
}
function XHR_uCA5J6jeaa0e_obj(...AxisLockThreshold) {
  if (iU2ea955_Id.length === 0 || ijs) {
    return;
  }
  ijs = true;
  const { message: minimapSmoothFactor } = iU2ea955_Id.shift();
  letl8FDUOw_ea9cd_Ref(minimapSmoothFactor);
}
function UtilQlOY_eaa0f_cb() {
  try {
    localStorage.setItem("keybinds", JSON.stringify(CoKB));
    console.log("Saved keybinds to localStorage.");
  } catch (AxisLockThreshold) {
    console.error("Error saving keybinds to localStorage:", AxisLockThreshold);
  }
}
function CHueaa10_Proc(...AxisLockThreshold) {
  AxisLockThreshold[-99] = "";
  if (AxisLockThreshold[1].flags.STAFF) {
    AxisLockThreshold[-99] = "Gota.io Staff";
  } else if (AxisLockThreshold[1].flags.VERIFIED) {
    AxisLockThreshold[-99] = "Verified Player";
  } else {
    return;
  }
  const minimapSmoothFactor = document.createElement("i");
  minimapSmoothFactor.id = "user-badge";
  minimapSmoothFactor.title = AxisLockThreshold[-99];
  minimapSmoothFactor.textContent = AxisLockThreshold[-99];
  AxisLockThreshold[0].appendChild(minimapSmoothFactor);
}
function J8EVQ(...AxisLockThreshold) {
  const minimapSmoothFactor = {
    x: AxisLockThreshold[0].centerX,
    y: AxisLockThreshold[0].centerY,
    x_: AxisLockThreshold[0].centerX_,
    y_: AxisLockThreshold[0].centerY_,
    totalMass: 0,
    totalSize: 0,
    cellCount: 0,
  };
  const drawMinimapInterval = AxisLockThreshold[0].myCells;
  minimapSmoothFactor.cellCount = drawMinimapInterval.size;
  if (minimapSmoothFactor.cellCount === 0) {
    return minimapSmoothFactor;
  }
  AxisLockThreshold[1] = 0;
  AxisLockThreshold[2] = 0;
  AxisLockThreshold[3] = 0;
  AxisLockThreshold[4] = 0;
  AxisLockThreshold[-208] = 0;
  AxisLockThreshold.f = 0;
  for (const baseCellSize of drawMinimapInterval.values()) {
    const combinedCameraDistanceThreshold = baseCellSize.getMass();
    const combinedZoomFocusStrength = baseCellSize.getRealMass();
    AxisLockThreshold[1] += baseCellSize.x * combinedCameraDistanceThreshold;
    AxisLockThreshold[2] += baseCellSize.y * combinedCameraDistanceThreshold;
    AxisLockThreshold[3] += baseCellSize.x_ * combinedZoomFocusStrength;
    AxisLockThreshold[4] += baseCellSize.y_ * combinedZoomFocusStrength;
    AxisLockThreshold[-208] += combinedCameraDistanceThreshold;
    AxisLockThreshold.f += combinedZoomFocusStrength;
    minimapSmoothFactor.totalSize += baseCellSize.size;
  }
  if (AxisLockThreshold[-208] > 0) {
    minimapSmoothFactor.x = AxisLockThreshold[1] / AxisLockThreshold[-208];
    minimapSmoothFactor.y = AxisLockThreshold[2] / AxisLockThreshold[-208];
  }
  if (AxisLockThreshold.f > 0) {
    minimapSmoothFactor.x_ = AxisLockThreshold[3] / AxisLockThreshold.f;
    minimapSmoothFactor.y_ = AxisLockThreshold[4] / AxisLockThreshold.f;
  }
  minimapSmoothFactor.totalMass = AxisLockThreshold.f;
  return minimapSmoothFactor;
}
function RETURN_zuR(...AxisLockThreshold) {
  const minimapSmoothFactor = document.getElementById(
    "hud-linesplit-indicator"
  );
  if (minimapSmoothFactor) {
    minimapSmoothFactor.style.display = AxisLockThreshold[0] ? "flex" : "none";
  }
}
function y2jX$eaa13_Idx(...AxisLockThreshold) {
  Mao5huZea938_run.sSoloTrickMode = AxisLockThreshold[0];
  localStorage.setItem(
    "options",
    JSON.stringify({
      ...(JSON.parse(localStorage.getItem("options")) || {}),
      sSoloTrickMode: AxisLockThreshold[0],
    })
  );
  $("#sSoloTrickMode > nord-button").attr("variant", "plain");
  if (AxisLockThreshold[0] === "AUTO") {
    $("#soloTrickModeAuto").attr("variant", "primary");
  } else {
    $("#soloTrickModeManual").attr("variant", "primary");
  }
}
document.addEventListener(
  "click",
  Object$kDcGWUY(function (...AxisLockThreshold) {
    AxisLockThreshold.length = 1;
    const minimapSmoothFactor = AxisLockThreshold[0].target.closest("a");
    if (
      minimapSmoothFactor &&
      minimapSmoothFactor.href &&
      minimapSmoothFactor.href.startsWith("http")
    ) {
      AxisLockThreshold[0].preventDefault();
      window.api.send("openLink", minimapSmoothFactor.href);
    }
  })
);
BigIntLsuea9cc_ex(true, "Gota Redux");
document.body.addEventListener(
  "dragstart",
  Object$kDcGWUY((...AxisLockThreshold) => {
    AxisLockThreshold.length = 1;
    return AxisLockThreshold[0].preventDefault();
  })
);
document.body.addEventListener(
  "drop",
  Object$kDcGWUY((...AxisLockThreshold) => {
    AxisLockThreshold.length = 1;
    return AxisLockThreshold[0].preventDefault();
  })
);
initializeNord();
const MYstEuQeaa14_err = initFirebaseApp("Account1");
const FLsTXl = initFirebaseApp("Account2");
NeweNPdm();
document.querySelector("nord-toast-group").addEventListener(
  "dismiss",
  Object$kDcGWUY((...AxisLockThreshold) => {
    AxisLockThreshold.length = 1;
    return AxisLockThreshold[0].target.remove();
  })
);
document.querySelector("nord-notification-group").addEventListener(
  "dismiss",
  Object$kDcGWUY((...AxisLockThreshold) => {
    AxisLockThreshold.length = 1;
    return AxisLockThreshold[0].target.remove();
  })
);
window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("appMinimize").addEventListener("click", () => {
    window.api.minimize();
  });
  document.getElementById("appRestore").addEventListener("click", () => {
    window.api.maximize();
  });
  document.getElementById("appClose").addEventListener("click", () => {
    window.api.close();
  });
});
