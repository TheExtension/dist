var F = { exports: {} }, Z = F.exports, q;
function V() {
  return q || (q = 1, function(g, p) {
    (function(i, A) {
      A(g);
    })(typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : Z, function(i) {
      if (!(globalThis.chrome && globalThis.chrome.runtime && globalThis.chrome.runtime.id))
        throw new Error("This script should only be loaded in a browser extension.");
      if (globalThis.browser && globalThis.browser.runtime && globalThis.browser.runtime.id)
        i.exports = globalThis.browser;
      else {
        const A = "The message port closed before a response was received.", h = (x) => {
          const f = {
            alarms: {
              clear: {
                minArgs: 0,
                maxArgs: 1
              },
              clearAll: {
                minArgs: 0,
                maxArgs: 0
              },
              get: {
                minArgs: 0,
                maxArgs: 1
              },
              getAll: {
                minArgs: 0,
                maxArgs: 0
              }
            },
            bookmarks: {
              create: {
                minArgs: 1,
                maxArgs: 1
              },
              get: {
                minArgs: 1,
                maxArgs: 1
              },
              getChildren: {
                minArgs: 1,
                maxArgs: 1
              },
              getRecent: {
                minArgs: 1,
                maxArgs: 1
              },
              getSubTree: {
                minArgs: 1,
                maxArgs: 1
              },
              getTree: {
                minArgs: 0,
                maxArgs: 0
              },
              move: {
                minArgs: 2,
                maxArgs: 2
              },
              remove: {
                minArgs: 1,
                maxArgs: 1
              },
              removeTree: {
                minArgs: 1,
                maxArgs: 1
              },
              search: {
                minArgs: 1,
                maxArgs: 1
              },
              update: {
                minArgs: 2,
                maxArgs: 2
              }
            },
            browserAction: {
              disable: {
                minArgs: 0,
                maxArgs: 1,
                fallbackToNoCallback: !0
              },
              enable: {
                minArgs: 0,
                maxArgs: 1,
                fallbackToNoCallback: !0
              },
              getBadgeBackgroundColor: {
                minArgs: 1,
                maxArgs: 1
              },
              getBadgeText: {
                minArgs: 1,
                maxArgs: 1
              },
              getPopup: {
                minArgs: 1,
                maxArgs: 1
              },
              getTitle: {
                minArgs: 1,
                maxArgs: 1
              },
              openPopup: {
                minArgs: 0,
                maxArgs: 0
              },
              setBadgeBackgroundColor: {
                minArgs: 1,
                maxArgs: 1,
                fallbackToNoCallback: !0
              },
              setBadgeText: {
                minArgs: 1,
                maxArgs: 1,
                fallbackToNoCallback: !0
              },
              setIcon: {
                minArgs: 1,
                maxArgs: 1
              },
              setPopup: {
                minArgs: 1,
                maxArgs: 1,
                fallbackToNoCallback: !0
              },
              setTitle: {
                minArgs: 1,
                maxArgs: 1,
                fallbackToNoCallback: !0
              }
            },
            browsingData: {
              remove: {
                minArgs: 2,
                maxArgs: 2
              },
              removeCache: {
                minArgs: 1,
                maxArgs: 1
              },
              removeCookies: {
                minArgs: 1,
                maxArgs: 1
              },
              removeDownloads: {
                minArgs: 1,
                maxArgs: 1
              },
              removeFormData: {
                minArgs: 1,
                maxArgs: 1
              },
              removeHistory: {
                minArgs: 1,
                maxArgs: 1
              },
              removeLocalStorage: {
                minArgs: 1,
                maxArgs: 1
              },
              removePasswords: {
                minArgs: 1,
                maxArgs: 1
              },
              removePluginData: {
                minArgs: 1,
                maxArgs: 1
              },
              settings: {
                minArgs: 0,
                maxArgs: 0
              }
            },
            commands: {
              getAll: {
                minArgs: 0,
                maxArgs: 0
              }
            },
            contextMenus: {
              remove: {
                minArgs: 1,
                maxArgs: 1
              },
              removeAll: {
                minArgs: 0,
                maxArgs: 0
              },
              update: {
                minArgs: 2,
                maxArgs: 2
              }
            },
            cookies: {
              get: {
                minArgs: 1,
                maxArgs: 1
              },
              getAll: {
                minArgs: 1,
                maxArgs: 1
              },
              getAllCookieStores: {
                minArgs: 0,
                maxArgs: 0
              },
              remove: {
                minArgs: 1,
                maxArgs: 1
              },
              set: {
                minArgs: 1,
                maxArgs: 1
              }
            },
            devtools: {
              inspectedWindow: {
                eval: {
                  minArgs: 1,
                  maxArgs: 2,
                  singleCallbackArg: !1
                }
              },
              panels: {
                create: {
                  minArgs: 3,
                  maxArgs: 3,
                  singleCallbackArg: !0
                },
                elements: {
                  createSidebarPane: {
                    minArgs: 1,
                    maxArgs: 1
                  }
                }
              }
            },
            downloads: {
              cancel: {
                minArgs: 1,
                maxArgs: 1
              },
              download: {
                minArgs: 1,
                maxArgs: 1
              },
              erase: {
                minArgs: 1,
                maxArgs: 1
              },
              getFileIcon: {
                minArgs: 1,
                maxArgs: 2
              },
              open: {
                minArgs: 1,
                maxArgs: 1,
                fallbackToNoCallback: !0
              },
              pause: {
                minArgs: 1,
                maxArgs: 1
              },
              removeFile: {
                minArgs: 1,
                maxArgs: 1
              },
              resume: {
                minArgs: 1,
                maxArgs: 1
              },
              search: {
                minArgs: 1,
                maxArgs: 1
              },
              show: {
                minArgs: 1,
                maxArgs: 1,
                fallbackToNoCallback: !0
              }
            },
            extension: {
              isAllowedFileSchemeAccess: {
                minArgs: 0,
                maxArgs: 0
              },
              isAllowedIncognitoAccess: {
                minArgs: 0,
                maxArgs: 0
              }
            },
            history: {
              addUrl: {
                minArgs: 1,
                maxArgs: 1
              },
              deleteAll: {
                minArgs: 0,
                maxArgs: 0
              },
              deleteRange: {
                minArgs: 1,
                maxArgs: 1
              },
              deleteUrl: {
                minArgs: 1,
                maxArgs: 1
              },
              getVisits: {
                minArgs: 1,
                maxArgs: 1
              },
              search: {
                minArgs: 1,
                maxArgs: 1
              }
            },
            i18n: {
              detectLanguage: {
                minArgs: 1,
                maxArgs: 1
              },
              getAcceptLanguages: {
                minArgs: 0,
                maxArgs: 0
              }
            },
            identity: {
              launchWebAuthFlow: {
                minArgs: 1,
                maxArgs: 1
              }
            },
            idle: {
              queryState: {
                minArgs: 1,
                maxArgs: 1
              }
            },
            management: {
              get: {
                minArgs: 1,
                maxArgs: 1
              },
              getAll: {
                minArgs: 0,
                maxArgs: 0
              },
              getSelf: {
                minArgs: 0,
                maxArgs: 0
              },
              setEnabled: {
                minArgs: 2,
                maxArgs: 2
              },
              uninstallSelf: {
                minArgs: 0,
                maxArgs: 1
              }
            },
            notifications: {
              clear: {
                minArgs: 1,
                maxArgs: 1
              },
              create: {
                minArgs: 1,
                maxArgs: 2
              },
              getAll: {
                minArgs: 0,
                maxArgs: 0
              },
              getPermissionLevel: {
                minArgs: 0,
                maxArgs: 0
              },
              update: {
                minArgs: 2,
                maxArgs: 2
              }
            },
            pageAction: {
              getPopup: {
                minArgs: 1,
                maxArgs: 1
              },
              getTitle: {
                minArgs: 1,
                maxArgs: 1
              },
              hide: {
                minArgs: 1,
                maxArgs: 1,
                fallbackToNoCallback: !0
              },
              setIcon: {
                minArgs: 1,
                maxArgs: 1
              },
              setPopup: {
                minArgs: 1,
                maxArgs: 1,
                fallbackToNoCallback: !0
              },
              setTitle: {
                minArgs: 1,
                maxArgs: 1,
                fallbackToNoCallback: !0
              },
              show: {
                minArgs: 1,
                maxArgs: 1,
                fallbackToNoCallback: !0
              }
            },
            permissions: {
              contains: {
                minArgs: 1,
                maxArgs: 1
              },
              getAll: {
                minArgs: 0,
                maxArgs: 0
              },
              remove: {
                minArgs: 1,
                maxArgs: 1
              },
              request: {
                minArgs: 1,
                maxArgs: 1
              }
            },
            runtime: {
              getBackgroundPage: {
                minArgs: 0,
                maxArgs: 0
              },
              getPlatformInfo: {
                minArgs: 0,
                maxArgs: 0
              },
              openOptionsPage: {
                minArgs: 0,
                maxArgs: 0
              },
              requestUpdateCheck: {
                minArgs: 0,
                maxArgs: 0
              },
              sendMessage: {
                minArgs: 1,
                maxArgs: 3
              },
              sendNativeMessage: {
                minArgs: 2,
                maxArgs: 2
              },
              setUninstallURL: {
                minArgs: 1,
                maxArgs: 1
              }
            },
            sessions: {
              getDevices: {
                minArgs: 0,
                maxArgs: 1
              },
              getRecentlyClosed: {
                minArgs: 0,
                maxArgs: 1
              },
              restore: {
                minArgs: 0,
                maxArgs: 1
              }
            },
            storage: {
              local: {
                clear: {
                  minArgs: 0,
                  maxArgs: 0
                },
                get: {
                  minArgs: 0,
                  maxArgs: 1
                },
                getBytesInUse: {
                  minArgs: 0,
                  maxArgs: 1
                },
                remove: {
                  minArgs: 1,
                  maxArgs: 1
                },
                set: {
                  minArgs: 1,
                  maxArgs: 1
                }
              },
              managed: {
                get: {
                  minArgs: 0,
                  maxArgs: 1
                },
                getBytesInUse: {
                  minArgs: 0,
                  maxArgs: 1
                }
              },
              sync: {
                clear: {
                  minArgs: 0,
                  maxArgs: 0
                },
                get: {
                  minArgs: 0,
                  maxArgs: 1
                },
                getBytesInUse: {
                  minArgs: 0,
                  maxArgs: 1
                },
                remove: {
                  minArgs: 1,
                  maxArgs: 1
                },
                set: {
                  minArgs: 1,
                  maxArgs: 1
                }
              }
            },
            tabs: {
              captureVisibleTab: {
                minArgs: 0,
                maxArgs: 2
              },
              create: {
                minArgs: 1,
                maxArgs: 1
              },
              detectLanguage: {
                minArgs: 0,
                maxArgs: 1
              },
              discard: {
                minArgs: 0,
                maxArgs: 1
              },
              duplicate: {
                minArgs: 1,
                maxArgs: 1
              },
              executeScript: {
                minArgs: 1,
                maxArgs: 2
              },
              get: {
                minArgs: 1,
                maxArgs: 1
              },
              getCurrent: {
                minArgs: 0,
                maxArgs: 0
              },
              getZoom: {
                minArgs: 0,
                maxArgs: 1
              },
              getZoomSettings: {
                minArgs: 0,
                maxArgs: 1
              },
              goBack: {
                minArgs: 0,
                maxArgs: 1
              },
              goForward: {
                minArgs: 0,
                maxArgs: 1
              },
              highlight: {
                minArgs: 1,
                maxArgs: 1
              },
              insertCSS: {
                minArgs: 1,
                maxArgs: 2
              },
              move: {
                minArgs: 2,
                maxArgs: 2
              },
              query: {
                minArgs: 1,
                maxArgs: 1
              },
              reload: {
                minArgs: 0,
                maxArgs: 2
              },
              remove: {
                minArgs: 1,
                maxArgs: 1
              },
              removeCSS: {
                minArgs: 1,
                maxArgs: 2
              },
              sendMessage: {
                minArgs: 2,
                maxArgs: 3
              },
              setZoom: {
                minArgs: 1,
                maxArgs: 2
              },
              setZoomSettings: {
                minArgs: 1,
                maxArgs: 2
              },
              update: {
                minArgs: 1,
                maxArgs: 2
              }
            },
            topSites: {
              get: {
                minArgs: 0,
                maxArgs: 0
              }
            },
            webNavigation: {
              getAllFrames: {
                minArgs: 1,
                maxArgs: 1
              },
              getFrame: {
                minArgs: 1,
                maxArgs: 1
              }
            },
            webRequest: {
              handlerBehaviorChanged: {
                minArgs: 0,
                maxArgs: 0
              }
            },
            windows: {
              create: {
                minArgs: 0,
                maxArgs: 1
              },
              get: {
                minArgs: 1,
                maxArgs: 2
              },
              getAll: {
                minArgs: 0,
                maxArgs: 1
              },
              getCurrent: {
                minArgs: 0,
                maxArgs: 1
              },
              getLastFocused: {
                minArgs: 0,
                maxArgs: 1
              },
              remove: {
                minArgs: 1,
                maxArgs: 1
              },
              update: {
                minArgs: 2,
                maxArgs: 2
              }
            }
          };
          if (Object.keys(f).length === 0)
            throw new Error("api-metadata.json has not been included in browser-polyfill");
          class M extends WeakMap {
            constructor(s, n = void 0) {
              super(n), this.createItem = s;
            }
            get(s) {
              return this.has(s) || this.set(s, this.createItem(s)), super.get(s);
            }
          }
          const L = (e) => e && typeof e == "object" && typeof e.then == "function", T = (e, s) => (...n) => {
            x.runtime.lastError ? e.reject(new Error(x.runtime.lastError.message)) : s.singleCallbackArg || n.length <= 1 && s.singleCallbackArg !== !1 ? e.resolve(n[0]) : e.resolve(n);
          }, w = (e) => e == 1 ? "argument" : "arguments", _ = (e, s) => function(t, ...o) {
            if (o.length < s.minArgs)
              throw new Error(`Expected at least ${s.minArgs} ${w(s.minArgs)} for ${e}(), got ${o.length}`);
            if (o.length > s.maxArgs)
              throw new Error(`Expected at most ${s.maxArgs} ${w(s.maxArgs)} for ${e}(), got ${o.length}`);
            return new Promise((c, u) => {
              if (s.fallbackToNoCallback)
                try {
                  t[e](...o, T({
                    resolve: c,
                    reject: u
                  }, s));
                } catch (r) {
                  console.warn(`${e} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `, r), t[e](...o), s.fallbackToNoCallback = !1, s.noCallback = !0, c();
                }
              else s.noCallback ? (t[e](...o), c()) : t[e](...o, T({
                resolve: c,
                reject: u
              }, s));
            });
          }, N = (e, s, n) => new Proxy(s, {
            apply(t, o, c) {
              return n.call(o, e, ...c);
            }
          });
          let k = Function.call.bind(Object.prototype.hasOwnProperty);
          const y = (e, s = {}, n = {}) => {
            let t = /* @__PURE__ */ Object.create(null), o = {
              has(u, r) {
                return r in e || r in t;
              },
              get(u, r, d) {
                if (r in t)
                  return t[r];
                if (!(r in e))
                  return;
                let m = e[r];
                if (typeof m == "function")
                  if (typeof s[r] == "function")
                    m = N(e, e[r], s[r]);
                  else if (k(n, r)) {
                    let v = _(r, n[r]);
                    m = N(e, e[r], v);
                  } else
                    m = m.bind(e);
                else if (typeof m == "object" && m !== null && (k(s, r) || k(n, r)))
                  m = y(m, s[r], n[r]);
                else if (k(n, "*"))
                  m = y(m, s[r], n["*"]);
                else
                  return Object.defineProperty(t, r, {
                    configurable: !0,
                    enumerable: !0,
                    get() {
                      return e[r];
                    },
                    set(v) {
                      e[r] = v;
                    }
                  }), m;
                return t[r] = m, m;
              },
              set(u, r, d, m) {
                return r in t ? t[r] = d : e[r] = d, !0;
              },
              defineProperty(u, r, d) {
                return Reflect.defineProperty(t, r, d);
              },
              deleteProperty(u, r) {
                return Reflect.deleteProperty(t, r);
              }
            }, c = Object.create(e);
            return new Proxy(c, o);
          }, C = (e) => ({
            addListener(s, n, ...t) {
              s.addListener(e.get(n), ...t);
            },
            hasListener(s, n) {
              return s.hasListener(e.get(n));
            },
            removeListener(s, n) {
              s.removeListener(e.get(n));
            }
          }), R = new M((e) => typeof e != "function" ? e : function(n) {
            const t = y(n, {}, {
              getContent: {
                minArgs: 0,
                maxArgs: 0
              }
            });
            e(t);
          }), a = new M((e) => typeof e != "function" ? e : function(n, t, o) {
            let c = !1, u, r = new Promise((S) => {
              u = function(b) {
                c = !0, S(b);
              };
            }), d;
            try {
              d = e(n, t, u);
            } catch (S) {
              d = Promise.reject(S);
            }
            const m = d !== !0 && L(d);
            if (d !== !0 && !m && !c)
              return !1;
            const v = (S) => {
              S.then((b) => {
                o(b);
              }, (b) => {
                let j;
                b && (b instanceof Error || typeof b.message == "string") ? j = b.message : j = "An unexpected error occurred", o({
                  __mozWebExtensionPolyfillReject__: !0,
                  message: j
                });
              }).catch((b) => {
                console.error("Failed to send onMessage rejected reply", b);
              });
            };
            return v(m ? d : r), !0;
          }), E = ({
            reject: e,
            resolve: s
          }, n) => {
            x.runtime.lastError ? x.runtime.lastError.message === A ? s() : e(new Error(x.runtime.lastError.message)) : n && n.__mozWebExtensionPolyfillReject__ ? e(new Error(n.message)) : s(n);
          }, $ = (e, s, n, ...t) => {
            if (t.length < s.minArgs)
              throw new Error(`Expected at least ${s.minArgs} ${w(s.minArgs)} for ${e}(), got ${t.length}`);
            if (t.length > s.maxArgs)
              throw new Error(`Expected at most ${s.maxArgs} ${w(s.maxArgs)} for ${e}(), got ${t.length}`);
            return new Promise((o, c) => {
              const u = E.bind(null, {
                resolve: o,
                reject: c
              });
              t.push(u), n.sendMessage(...t);
            });
          }, I = {
            devtools: {
              network: {
                onRequestFinished: C(R)
              }
            },
            runtime: {
              onMessage: C(a),
              onMessageExternal: C(a),
              sendMessage: $.bind(null, "sendMessage", {
                minArgs: 1,
                maxArgs: 3
              })
            },
            tabs: {
              sendMessage: $.bind(null, "sendMessage", {
                minArgs: 2,
                maxArgs: 3
              })
            }
          }, B = {
            clear: {
              minArgs: 1,
              maxArgs: 1
            },
            get: {
              minArgs: 1,
              maxArgs: 1
            },
            set: {
              minArgs: 1,
              maxArgs: 1
            }
          };
          return f.privacy = {
            network: {
              "*": B
            },
            services: {
              "*": B
            },
            websites: {
              "*": B
            }
          }, y(x, I, f);
        };
        i.exports = h(chrome);
      }
    });
  }(F)), F.exports;
}
V();
var P;
(function(g) {
  g.Local = "local", g.Sync = "sync", g.Managed = "managed", g.Session = "session";
})(P || (P = {}));
var O;
(function(g) {
  g.ExtensionPagesOnly = "TRUSTED_CONTEXTS", g.ExtensionPagesAndContentScripts = "TRUSTED_AND_UNTRUSTED_CONTEXTS";
})(O || (O = {}));
const l = globalThis.chrome, D = async (g, p) => {
  const i = (h) => typeof h == "function", A = (h) => h instanceof Promise;
  return i(g) ? (A(g), g(p)) : g;
};
let W = !1;
function z(g) {
  if (l && l.storage[g] === void 0)
    throw new Error(`Check your storage permission in manifest.json: ${g} is not defined`);
}
function G(g, p, i) {
  var C, R;
  let A = null, h = !1, x = [];
  const f = (i == null ? void 0 : i.storageEnum) ?? P.Local, M = ((C = i == null ? void 0 : i.serialization) == null ? void 0 : C.serialize) ?? ((a) => a), L = ((R = i == null ? void 0 : i.serialization) == null ? void 0 : R.deserialize) ?? ((a) => a);
  W === !1 && f === P.Session && (i == null ? void 0 : i.sessionAccessForContentScripts) === !0 && (z(f), l == null || l.storage[f].setAccessLevel({
    accessLevel: O.ExtensionPagesAndContentScripts
  }).catch((a) => {
    console.warn(a), console.warn("Please call setAccessLevel into different context, like a background script.");
  }), W = !0);
  const T = async () => {
    z(f);
    const a = await (l == null ? void 0 : l.storage[f].get([g]));
    return a ? L(a[g]) ?? p : p;
  }, w = () => {
    x.forEach((a) => a());
  }, _ = async (a) => {
    h || (A = await T()), A = await D(a, A), await (l == null ? void 0 : l.storage[f].set({ [g]: M(A) })), w();
  }, N = (a) => (x = [...x, a], () => {
    x = x.filter((E) => E !== a);
  }), k = () => A;
  T().then((a) => {
    A = a, h = !0, w();
  });
  async function y(a) {
    if (a[g] === void 0)
      return;
    const E = L(a[g].newValue);
    A !== E && (A = await D(E, A), w());
  }
  return l == null || l.storage[f].onChanged.addListener(y), {
    get: T,
    set: _,
    getSnapshot: k,
    subscribe: N
  };
}
const U = G("theme-storage-key", "light", {
  storageEnum: P.Local
}), H = {
  ...U,
  toggle: async () => {
    await U.set((g) => g === "light" ? "dark" : "light");
  }
};
H.get().then((g) => {
  console.log("theme", g);
});
console.log("Background loaded");
console.log("Edit 'chrome-extension/src/background/index.ts' and save to reload.");
