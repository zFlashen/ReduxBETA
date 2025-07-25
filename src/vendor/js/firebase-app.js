!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define(t)
    : ((e = e || self).firebase = t());
})(this, function () {
  "use strict";
  var i = function (e, t) {
    return (i =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function (e, t) {
          e.__proto__ = t;
        }) ||
      function (e, t) {
        for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
      })(e, t);
  };
  var r = function () {
    return (r =
      Object.assign ||
      function (e) {
        for (var t, r = 1, n = arguments.length; r < n; r++)
          for (var o in (t = arguments[r]))
            Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
        return e;
      }).apply(this, arguments);
  };
  function d(e, t) {
    if (!(t instanceof Object)) return t;
    switch (t.constructor) {
      case Date:
        return new Date(t.getTime());
      case Object:
        void 0 === e && (e = {});
        break;
      case Array:
        e = [];
        break;
      default:
        return t;
    }
    for (var r in t) t.hasOwnProperty(r) && (e[r] = d(e[r], t[r]));
    return e;
  }
  var h = (function (n) {
      function o(e, t) {
        var r = n.call(this, t) || this;
        return (
          (r.code = e),
          (r.name = "FirebaseError"),
          Object.setPrototypeOf(r, o.prototype),
          Error.captureStackTrace &&
            Error.captureStackTrace(r, a.prototype.create),
          r
        );
      }
      return (
        (function (e, t) {
          function r() {
            this.constructor = e;
          }
          i(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((r.prototype = t.prototype), new r()));
        })(o, n),
        o
      );
    })(Error),
    a = (function () {
      function e(e, t, r) {
        (this.service = e), (this.serviceName = t), (this.errors = r);
      }
      return (
        (e.prototype.create = function (e) {
          for (var t = [], r = 1; r < arguments.length; r++)
            t[r - 1] = arguments[r];
          for (
            var n,
              o = t[0] || {},
              i = this.service + "/" + e,
              a = this.errors[e],
              s = a
                ? ((n = o),
                  a.replace(v, function (e, t) {
                    var r = n[t];
                    return null != r ? r.toString() : "<" + t + "?>";
                  }))
                : "Error",
              c = this.serviceName + ": " + s + " (" + i + ").",
              p = new h(i, c),
              l = 0,
              u = Object.keys(o);
            l < u.length;
            l++
          ) {
            var f = u[l];
            "_" !== f.slice(-1) &&
              (f in p &&
                console.warn(
                  'Overwriting FirebaseError base field "' +
                    f +
                    '" can cause unexpected behavior.'
                ),
              (p[f] = o[f]));
          }
          return p;
        }),
        e
      );
    })();
  var v = /\{\$([^}]+)}/g;
  function b(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }
  function n(e, t) {
    var r = new o(e, t);
    return r.subscribe.bind(r);
  }
  var s,
    e,
    o = (function () {
      function e(e, t) {
        var r = this;
        (this.observers = []),
          (this.unsubscribes = []),
          (this.observerCount = 0),
          (this.task = Promise.resolve()),
          (this.finalized = !1),
          (this.onNoObservers = t),
          this.task
            .then(function () {
              e(r);
            })
            .catch(function (e) {
              r.error(e);
            });
      }
      return (
        (e.prototype.next = function (t) {
          this.forEachObserver(function (e) {
            e.next(t);
          });
        }),
        (e.prototype.error = function (t) {
          this.forEachObserver(function (e) {
            e.error(t);
          }),
            this.close(t);
        }),
        (e.prototype.complete = function () {
          this.forEachObserver(function (e) {
            e.complete();
          }),
            this.close();
        }),
        (e.prototype.subscribe = function (e, t, r) {
          var n,
            o = this;
          if (void 0 === e && void 0 === t && void 0 === r)
            throw new Error("Missing Observer.");
          void 0 ===
            (n = (function (e, t) {
              if ("object" != typeof e || null === e) return !1;
              for (var r = 0, n = t; r < n.length; r++) {
                var o = n[r];
                if (o in e && "function" == typeof e[o]) return !0;
              }
              return !1;
            })(e, ["next", "error", "complete"])
              ? e
              : { next: e, error: t, complete: r }).next && (n.next = c),
            void 0 === n.error && (n.error = c),
            void 0 === n.complete && (n.complete = c);
          var i = this.unsubscribeOne.bind(this, this.observers.length);
          return (
            this.finalized &&
              this.task.then(function () {
                try {
                  o.finalError ? n.error(o.finalError) : n.complete();
                } catch (e) {}
              }),
            this.observers.push(n),
            i
          );
        }),
        (e.prototype.unsubscribeOne = function (e) {
          void 0 !== this.observers &&
            void 0 !== this.observers[e] &&
            (delete this.observers[e],
            (this.observerCount -= 1),
            0 === this.observerCount &&
              void 0 !== this.onNoObservers &&
              this.onNoObservers(this));
        }),
        (e.prototype.forEachObserver = function (e) {
          if (!this.finalized)
            for (var t = 0; t < this.observers.length; t++) this.sendOne(t, e);
        }),
        (e.prototype.sendOne = function (e, t) {
          var r = this;
          this.task.then(function () {
            if (void 0 !== r.observers && void 0 !== r.observers[e])
              try {
                t(r.observers[e]);
              } catch (e) {
                "undefined" != typeof console &&
                  console.error &&
                  console.error(e);
              }
          });
        }),
        (e.prototype.close = function (e) {
          var t = this;
          this.finalized ||
            ((this.finalized = !0),
            void 0 !== e && (this.finalError = e),
            this.task.then(function () {
              (t.observers = void 0), (t.onNoObservers = void 0);
            }));
        }),
        e
      );
    })();
  function c() {}
  ((e = s || (s = {}))[(e.DEBUG = 0)] = "DEBUG"),
    (e[(e.VERBOSE = 1)] = "VERBOSE"),
    (e[(e.INFO = 2)] = "INFO"),
    (e[(e.WARN = 3)] = "WARN"),
    (e[(e.ERROR = 4)] = "ERROR"),
    (e[(e.SILENT = 5)] = "SILENT");
  var t,
    p = s.INFO,
    l = function (e, t) {
      for (var r = [], n = 2; n < arguments.length; n++)
        r[n - 2] = arguments[n];
      if (!(t < e.logLevel)) {
        var o = new Date().toISOString();
        switch (t) {
          case s.DEBUG:
          case s.VERBOSE:
            console.log.apply(
              console,
              ["[" + o + "]  " + e.name + ":"].concat(r)
            );
            break;
          case s.INFO:
            console.info.apply(
              console,
              ["[" + o + "]  " + e.name + ":"].concat(r)
            );
            break;
          case s.WARN:
            console.warn.apply(
              console,
              ["[" + o + "]  " + e.name + ":"].concat(r)
            );
            break;
          case s.ERROR:
            console.error.apply(
              console,
              ["[" + o + "]  " + e.name + ":"].concat(r)
            );
            break;
          default:
            throw new Error(
              "Attempted to log a message with an invalid logType (value: " +
                t +
                ")"
            );
        }
      }
    },
    u = (function () {
      function e(e) {
        (this.name = e), (this._logLevel = p), (this._logHandler = l);
      }
      return (
        Object.defineProperty(e.prototype, "logLevel", {
          get: function () {
            return this._logLevel;
          },
          set: function (e) {
            if (!(e in s))
              throw new TypeError("Invalid value assigned to `logLevel`");
            this._logLevel = e;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "logHandler", {
          get: function () {
            return this._logHandler;
          },
          set: function (e) {
            if ("function" != typeof e)
              throw new TypeError(
                "Value assigned to `logHandler` must be a function"
              );
            this._logHandler = e;
          },
          enumerable: !0,
          configurable: !0,
        }),
        (e.prototype.debug = function () {
          for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
          this._logHandler.apply(this, [this, s.DEBUG].concat(e));
        }),
        (e.prototype.log = function () {
          for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
          this._logHandler.apply(this, [this, s.VERBOSE].concat(e));
        }),
        (e.prototype.info = function () {
          for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
          this._logHandler.apply(this, [this, s.INFO].concat(e));
        }),
        (e.prototype.warn = function () {
          for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
          this._logHandler.apply(this, [this, s.WARN].concat(e));
        }),
        (e.prototype.error = function () {
          for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
          this._logHandler.apply(this, [this, s.ERROR].concat(e));
        }),
        e
      );
    })(),
    f =
      (((t = {})["no-app"] =
        "No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()"),
      (t["bad-app-name"] = "Illegal App name: '{$appName}"),
      (t["duplicate-app"] = "Firebase App named '{$appName}' already exists"),
      (t["app-deleted"] = "Firebase App named '{$appName}' already deleted"),
      (t["duplicate-service"] =
        "Firebase service named '{$appName}' already registered"),
      (t["invalid-app-argument"] =
        "firebase.{$appName}() takes either no argument or a Firebase App instance."),
      t),
    y = new a("app", "Firebase", f),
    g = "[DEFAULT]",
    m = [],
    E = (function () {
      function e(e, t, r) {
        (this.firebase_ = r),
          (this.isDeleted_ = !1),
          (this.services_ = {}),
          (this.name_ = t.name),
          (this.automaticDataCollectionEnabled_ =
            t.automaticDataCollectionEnabled || !1),
          (this.options_ = d(void 0, e)),
          (this.INTERNAL = {
            getUid: function () {
              return null;
            },
            getToken: function () {
              return Promise.resolve(null);
            },
            addAuthTokenListener: function (e) {
              m.push(e),
                setTimeout(function () {
                  return e(null);
                }, 0);
            },
            removeAuthTokenListener: function (t) {
              m = m.filter(function (e) {
                return e !== t;
              });
            },
          });
      }
      return (
        Object.defineProperty(e.prototype, "automaticDataCollectionEnabled", {
          get: function () {
            return this.checkDestroyed_(), this.automaticDataCollectionEnabled_;
          },
          set: function (e) {
            this.checkDestroyed_(), (this.automaticDataCollectionEnabled_ = e);
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "name", {
          get: function () {
            return this.checkDestroyed_(), this.name_;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "options", {
          get: function () {
            return this.checkDestroyed_(), this.options_;
          },
          enumerable: !0,
          configurable: !0,
        }),
        (e.prototype.delete = function () {
          var s = this;
          return new Promise(function (e) {
            s.checkDestroyed_(), e();
          })
            .then(function () {
              s.firebase_.INTERNAL.removeApp(s.name_);
              for (
                var e = [], t = 0, r = Object.keys(s.services_);
                t < r.length;
                t++
              )
                for (
                  var n = r[t], o = 0, i = Object.keys(s.services_[n]);
                  o < i.length;
                  o++
                ) {
                  var a = i[o];
                  e.push(s.services_[n][a]);
                }
              return Promise.all(
                e
                  .filter(function (e) {
                    return "INTERNAL" in e;
                  })
                  .map(function (e) {
                    return e.INTERNAL.delete();
                  })
              );
            })
            .then(function () {
              (s.isDeleted_ = !0), (s.services_ = {});
            });
        }),
        (e.prototype._getService = function (e, t) {
          if (
            (void 0 === t && (t = g),
            this.checkDestroyed_(),
            this.services_[e] || (this.services_[e] = {}),
            !this.services_[e][t])
          ) {
            var r = t !== g ? t : void 0,
              n = this.firebase_.INTERNAL.factories[e](
                this,
                this.extendApp.bind(this),
                r
              );
            this.services_[e][t] = n;
          }
          return this.services_[e][t];
        }),
        (e.prototype.extendApp = function (e) {
          var t = this;
          d(this, e),
            e.INTERNAL &&
              e.INTERNAL.addAuthTokenListener &&
              (m.forEach(function (e) {
                t.INTERNAL.addAuthTokenListener(e);
              }),
              (m = []));
        }),
        (e.prototype.checkDestroyed_ = function () {
          if (this.isDeleted_)
            throw y.create("app-deleted", { appName: this.name_ });
        }),
        e
      );
    })();
  (E.prototype.name && E.prototype.options) ||
    E.prototype.delete ||
    console.log("dc");
  var N = "6.3.3";
  var _ = new u("@firebase/app");
  if (
    "object" == typeof self &&
    self.self === self &&
    void 0 !== self.firebase
  ) {
    _.warn(
      "\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  "
    );
    var O = self.firebase.SDK_VERSION;
    O &&
      0 <= O.indexOf("LITE") &&
      _.warn(
        "\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    "
      );
  }
  var w = (function e() {
      var t = (function (a) {
        var s = {},
          c = {},
          p = {},
          l = {
            __esModule: !0,
            initializeApp: function (e, t) {
              if (
                (void 0 === t && (t = {}), "object" != typeof t || null === t)
              ) {
                var r = t;
                t = { name: r };
              }
              var n = t;
              void 0 === n.name && (n.name = g);
              var o = n.name;
              if ("string" != typeof o || !o)
                throw y.create("bad-app-name", { appName: String(o) });
              if (b(s, o)) throw y.create("duplicate-app", { appName: o });
              var i = new a(e, n, l);
              return h((s[o] = i), "create"), i;
            },
            app: u,
            apps: null,
            SDK_VERSION: N,
            INTERNAL: {
              registerService: function (r, e, t, n, o) {
                if ((void 0 === o && (o = !1), c[r]))
                  throw y.create("duplicate-service", { appName: r });
                function i(e) {
                  if ((void 0 === e && (e = u()), "function" != typeof e[r]))
                    throw y.create("invalid-app-argument", { appName: r });
                  return e[r]();
                }
                return (
                  (c[r] = e),
                  n &&
                    ((p[r] = n),
                    f().forEach(function (e) {
                      n("create", e);
                    })),
                  void 0 !== t && d(i, t),
                  (l[r] = i),
                  (a.prototype[r] = function () {
                    for (var e = [], t = 0; t < arguments.length; t++)
                      e[t] = arguments[t];
                    return this._getService
                      .bind(this, r)
                      .apply(this, o ? e : []);
                  }),
                  i
                );
              },
              removeApp: function (e) {
                h(s[e], "delete"), delete s[e];
              },
              factories: c,
              useAsService: i,
            },
          };
        function u(e) {
          if (!b(s, (e = e || g))) throw y.create("no-app", { appName: e });
          return s[e];
        }
        function f() {
          return Object.keys(s).map(function (e) {
            return s[e];
          });
        }
        function h(e, t) {
          for (var r = 0, n = Object.keys(c); r < n.length; r++) {
            var o = i(0, n[r]);
            if (null === o) return;
            p[o] && p[o](t, e);
          }
        }
        function i(e, t) {
          return "serverAuth" === t ? null : t;
        }
        return (
          (l.default = l),
          Object.defineProperty(l, "apps", { get: f }),
          (u.App = a),
          l
        );
      })(E);
      return (
        (t.INTERNAL = r({}, t.INTERNAL, {
          createFirebaseNamespace: e,
          extendNamespace: function (e) {
            d(t, e);
          },
          createSubscribe: n,
          ErrorFactory: a,
          deepExtend: d,
        })),
        t
      );
    })(),
    A = w.initializeApp;
  return (
    (w.initializeApp = function () {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      return (
        (function () {
          try {
            return (
              "[object process]" ===
              Object.prototype.toString.call(global.process)
            );
          } catch (e) {
            return !1;
          }
        })() &&
          _.warn(
            '\n      Warning: This is a browser-targeted Firebase bundle but it appears it is being\n      run in a Node environment.  If running in a Node environment, make sure you\n      are using the bundle specified by the "main" field in package.json.\n      \n      If you are using Webpack, you can specify "main" as the first item in\n      "resolve.mainFields":\n      https://webpack.js.org/configuration/resolve/#resolvemainfields\n      \n      If using Rollup, use the rollup-plugin-node-resolve plugin and specify "main"\n      as the first item in "mainFields", e.g. [\'main\', \'module\'].\n      https://github.com/rollup/rollup-plugin-node-resolve\n      '
          ),
        A.apply(void 0, e)
      );
    }),
    w
  );
});
//# sourceMappingURL=firebase-app.js.map
