import { g as Vt } from "./_commonjsHelpers.gnU0ypJ3.js";
var L = { exports: {} };
/*! algoliasearch.umd.js | 4.22.1 | © Algolia, inc. | https://github.com/algolia/algoliasearch-client-javascript */ var Xt =
    L.exports,
  qe;
function $t() {
  return (
    qe ||
      ((qe = 1),
      (function (Se, er) {
        (function (ue, K) {
          Se.exports = K();
        })(Xt, function () {
          function ue(e, t, r) {
            return (
              t in e
                ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[t] = r),
              e
            );
          }
          function K(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(e);
              (t &&
                (n = n.filter(function (a) {
                  return Object.getOwnPropertyDescriptor(e, a).enumerable;
                })),
                r.push.apply(r, n));
            }
            return r;
          }
          function i(e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t] != null ? arguments[t] : {};
              t % 2
                ? K(Object(r), !0).forEach(function (n) {
                    ue(e, n, r[n]);
                  })
                : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      e,
                      Object.getOwnPropertyDescriptors(r),
                    )
                  : K(Object(r)).forEach(function (n) {
                      Object.defineProperty(
                        e,
                        n,
                        Object.getOwnPropertyDescriptor(r, n),
                      );
                    });
            }
            return e;
          }
          function x(e, t) {
            if (e == null) return {};
            var r,
              n,
              a = (function (c, o) {
                if (c == null) return {};
                var s,
                  d,
                  f = {},
                  p = Object.keys(c);
                for (d = 0; d < p.length; d++)
                  ((s = p[d]), o.indexOf(s) >= 0 || (f[s] = c[s]));
                return f;
              })(e, t);
            if (Object.getOwnPropertySymbols) {
              var u = Object.getOwnPropertySymbols(e);
              for (n = 0; n < u.length; n++)
                ((r = u[n]),
                  t.indexOf(r) >= 0 ||
                    (Object.prototype.propertyIsEnumerable.call(e, r) &&
                      (a[r] = e[r])));
            }
            return a;
          }
          function S(e, t) {
            return (
              (function (r) {
                if (Array.isArray(r)) return r;
              })(e) ||
              (function (r, n) {
                if (
                  Symbol.iterator in Object(r) ||
                  Object.prototype.toString.call(r) === "[object Arguments]"
                ) {
                  var a = [],
                    u = !0,
                    c = !1,
                    o = void 0;
                  try {
                    for (
                      var s, d = r[Symbol.iterator]();
                      !(u = (s = d.next()).done) &&
                      (a.push(s.value), !n || a.length !== n);
                      u = !0
                    );
                  } catch (f) {
                    ((c = !0), (o = f));
                  } finally {
                    try {
                      u || d.return == null || d.return();
                    } finally {
                      if (c) throw o;
                    }
                  }
                  return a;
                }
              })(e, t) ||
              (function () {
                throw new TypeError(
                  "Invalid attempt to destructure non-iterable instance",
                );
              })()
            );
          }
          function z(e) {
            return (
              (function (t) {
                if (Array.isArray(t)) {
                  for (var r = 0, n = new Array(t.length); r < t.length; r++)
                    n[r] = t[r];
                  return n;
                }
              })(e) ||
              (function (t) {
                if (
                  Symbol.iterator in Object(t) ||
                  Object.prototype.toString.call(t) === "[object Arguments]"
                )
                  return Array.from(t);
              })(e) ||
              (function () {
                throw new TypeError(
                  "Invalid attempt to spread non-iterable instance",
                );
              })()
            );
          }
          function ke(e) {
            var t,
              r = "algoliasearch-client-js-".concat(e.key),
              n = function () {
                return (
                  t === void 0 && (t = e.localStorage || window.localStorage),
                  t
                );
              },
              a = function () {
                return JSON.parse(n().getItem(r) || "{}");
              },
              u = function (o) {
                n().setItem(r, JSON.stringify(o));
              },
              c = function () {
                var o = e.timeToLive ? 1e3 * e.timeToLive : null,
                  s = a(),
                  d = Object.fromEntries(
                    Object.entries(s).filter(function (p) {
                      return S(p, 2)[1].timestamp !== void 0;
                    }),
                  );
                if ((u(d), o)) {
                  var f = Object.fromEntries(
                    Object.entries(d).filter(function (p) {
                      var l = S(p, 2)[1],
                        g = new Date().getTime();
                      return !(l.timestamp + o < g);
                    }),
                  );
                  u(f);
                }
              };
            return {
              get: function (o, s) {
                var d =
                  arguments.length > 2 && arguments[2] !== void 0
                    ? arguments[2]
                    : {
                        miss: function () {
                          return Promise.resolve();
                        },
                      };
                return Promise.resolve()
                  .then(function () {
                    c();
                    var f = JSON.stringify(o);
                    return a()[f];
                  })
                  .then(function (f) {
                    return Promise.all([f ? f.value : s(), f !== void 0]);
                  })
                  .then(function (f) {
                    var p = S(f, 2),
                      l = p[0],
                      g = p[1];
                    return Promise.all([l, g || d.miss(l)]);
                  })
                  .then(function (f) {
                    return S(f, 1)[0];
                  });
              },
              set: function (o, s) {
                return Promise.resolve().then(function () {
                  var d = a();
                  return (
                    (d[JSON.stringify(o)] = {
                      timestamp: new Date().getTime(),
                      value: s,
                    }),
                    n().setItem(r, JSON.stringify(d)),
                    s
                  );
                });
              },
              delete: function (o) {
                return Promise.resolve().then(function () {
                  var s = a();
                  (delete s[JSON.stringify(o)],
                    n().setItem(r, JSON.stringify(s)));
                });
              },
              clear: function () {
                return Promise.resolve().then(function () {
                  n().removeItem(r);
                });
              },
            };
          }
          function J(e) {
            var t = z(e.caches),
              r = t.shift();
            return r === void 0
              ? {
                  get: function (n, a) {
                    var u =
                        arguments.length > 2 && arguments[2] !== void 0
                          ? arguments[2]
                          : {
                              miss: function () {
                                return Promise.resolve();
                              },
                            },
                      c = a();
                    return c
                      .then(function (o) {
                        return Promise.all([o, u.miss(o)]);
                      })
                      .then(function (o) {
                        return S(o, 1)[0];
                      });
                  },
                  set: function (n, a) {
                    return Promise.resolve(a);
                  },
                  delete: function (n) {
                    return Promise.resolve();
                  },
                  clear: function () {
                    return Promise.resolve();
                  },
                }
              : {
                  get: function (n, a) {
                    var u =
                      arguments.length > 2 && arguments[2] !== void 0
                        ? arguments[2]
                        : {
                            miss: function () {
                              return Promise.resolve();
                            },
                          };
                    return r.get(n, a, u).catch(function () {
                      return J({ caches: t }).get(n, a, u);
                    });
                  },
                  set: function (n, a) {
                    return r.set(n, a).catch(function () {
                      return J({ caches: t }).set(n, a);
                    });
                  },
                  delete: function (n) {
                    return r.delete(n).catch(function () {
                      return J({ caches: t }).delete(n);
                    });
                  },
                  clear: function () {
                    return r.clear().catch(function () {
                      return J({ caches: t }).clear();
                    });
                  },
                };
          }
          function V() {
            var e =
                arguments.length > 0 && arguments[0] !== void 0
                  ? arguments[0]
                  : { serializable: !0 },
              t = {};
            return {
              get: function (r, n) {
                var a =
                    arguments.length > 2 && arguments[2] !== void 0
                      ? arguments[2]
                      : {
                          miss: function () {
                            return Promise.resolve();
                          },
                        },
                  u = JSON.stringify(r);
                if (u in t)
                  return Promise.resolve(
                    e.serializable ? JSON.parse(t[u]) : t[u],
                  );
                var c = n(),
                  o =
                    (a && a.miss) ||
                    function () {
                      return Promise.resolve();
                    };
                return c
                  .then(function (s) {
                    return o(s);
                  })
                  .then(function () {
                    return c;
                  });
              },
              set: function (r, n) {
                return (
                  (t[JSON.stringify(r)] = e.serializable
                    ? JSON.stringify(n)
                    : n),
                  Promise.resolve(n)
                );
              },
              delete: function (r) {
                return (delete t[JSON.stringify(r)], Promise.resolve());
              },
              clear: function () {
                return ((t = {}), Promise.resolve());
              },
            };
          }
          function X(e, t, r) {
            var n = { "x-algolia-api-key": r, "x-algolia-application-id": t };
            return {
              headers: function () {
                return e === F.WithinHeaders ? n : {};
              },
              queryParameters: function () {
                return e === F.WithinQueryParameters ? n : {};
              },
            };
          }
          function N(e) {
            var t = 0;
            return e(function r() {
              return (
                t++,
                new Promise(function (n) {
                  setTimeout(
                    function () {
                      n(e(r));
                    },
                    Math.min(100 * t, 1e3),
                  );
                })
              );
            });
          }
          function v(e) {
            var t =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : function (r, n) {
                    return Promise.resolve();
                  };
            return Object.assign(e, {
              wait: function (r) {
                return v(
                  e
                    .then(function (n) {
                      return Promise.all([t(n, r), n]);
                    })
                    .then(function (n) {
                      return n[1];
                    }),
                );
              },
            });
          }
          function Te(e) {
            for (var t = e.length - 1; t > 0; t--) {
              var r = Math.floor(Math.random() * (t + 1)),
                n = e[t];
              ((e[t] = e[r]), (e[r] = n));
            }
            return e;
          }
          function Q(e, t) {
            return (
              t &&
                Object.keys(t).forEach(function (r) {
                  e[r] = t[r](e);
                }),
              e
            );
          }
          function h(e) {
            for (
              var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1;
              n < t;
              n++
            )
              r[n - 1] = arguments[n];
            var a = 0;
            return e.replace(/%s/g, function () {
              return encodeURIComponent(r[a++]);
            });
          }
          var F = { WithinQueryParameters: 0, WithinHeaders: 1 };
          function q(e, t) {
            var r = e || {},
              n = r.data || {};
            return (
              Object.keys(r).forEach(function (a) {
                [
                  "timeout",
                  "headers",
                  "queryParameters",
                  "data",
                  "cacheable",
                ].indexOf(a) === -1 && (n[a] = r[a]);
              }),
              {
                data: Object.entries(n).length > 0 ? n : void 0,
                timeout: r.timeout || t,
                headers: r.headers || {},
                queryParameters: r.queryParameters || {},
                cacheable: r.cacheable,
              }
            );
          }
          var E = { Read: 1, Write: 2, Any: 3 },
            ie = 1,
            Ne = 2,
            se = 3;
          function ce(e) {
            var t =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : ie;
            return i(i({}, e), {}, { status: t, lastUpdate: Date.now() });
          }
          function fe(e) {
            return typeof e == "string"
              ? { protocol: "https", url: e, accept: E.Any }
              : {
                  protocol: e.protocol || "https",
                  url: e.url,
                  accept: e.accept || E.Any,
                };
          }
          var R = "DELETE",
            P = "GET",
            y = "POST",
            $ = "PUT";
          function Ee(e, t) {
            return Promise.all(
              t.map(function (r) {
                return e.get(r, function () {
                  return Promise.resolve(ce(r));
                });
              }),
            ).then(function (r) {
              var n = r.filter(function (c) {
                  return (function (o) {
                    return o.status === ie || Date.now() - o.lastUpdate > 12e4;
                  })(c);
                }),
                a = r.filter(function (c) {
                  return (function (o) {
                    return o.status === se && Date.now() - o.lastUpdate <= 12e4;
                  })(c);
                }),
                u = [].concat(z(n), z(a));
              return {
                getTimeout: function (c, o) {
                  return (a.length === 0 && c === 0 ? 1 : a.length + 3 + c) * o;
                },
                statelessHosts:
                  u.length > 0
                    ? u.map(function (c) {
                        return fe(c);
                      })
                    : t,
              };
            });
          }
          function de(e, t, r, n) {
            var a = [],
              u = (function (l, g) {
                if (!(
                  l.method === P ||
                  (l.data === void 0 && g.data === void 0)
                )) {
                  var m = Array.isArray(l.data)
                    ? l.data
                    : i(i({}, l.data), g.data);
                  return JSON.stringify(m);
                }
              })(r, n),
              c = (function (l, g) {
                var m = i(i({}, l.headers), g.headers),
                  b = {};
                return (
                  Object.keys(m).forEach(function (O) {
                    var I = m[O];
                    b[O.toLowerCase()] = I;
                  }),
                  b
                );
              })(e, n),
              o = r.method,
              s = r.method !== P ? {} : i(i({}, r.data), n.data),
              d = i(
                i(
                  i(
                    { "x-algolia-agent": e.userAgent.value },
                    e.queryParameters,
                  ),
                  s,
                ),
                n.queryParameters,
              ),
              f = 0,
              p = function l(g, m) {
                var b = g.pop();
                if (b === void 0)
                  throw {
                    name: "RetryError",
                    message:
                      "Unreachable hosts - your application id may be incorrect. If the error persists, contact support@algolia.com.",
                    transporterStackTrace: pe(a),
                  };
                var O = {
                    data: u,
                    headers: c,
                    method: o,
                    url: Ae(b, r.path, d),
                    connectTimeout: m(f, e.timeouts.connect),
                    responseTimeout: m(f, n.timeout),
                  },
                  I = function (D) {
                    var j = {
                      request: O,
                      response: D,
                      host: b,
                      triesLeft: g.length,
                    };
                    return (a.push(j), j);
                  },
                  W = {
                    onSuccess: function (D) {
                      return (function (j) {
                        try {
                          return JSON.parse(j.content);
                        } catch (T) {
                          throw (function (k, U) {
                            return {
                              name: "DeserializationError",
                              message: k,
                              response: U,
                            };
                          })(T.message, j);
                        }
                      })(D);
                    },
                    onRetry: function (D) {
                      var j = I(D);
                      return (
                        D.isTimedOut && f++,
                        Promise.all([
                          e.logger.info("Retryable failure", he(j)),
                          e.hostsCache.set(b, ce(b, D.isTimedOut ? se : Ne)),
                        ]).then(function () {
                          return l(g, m);
                        })
                      );
                    },
                    onFail: function (D) {
                      throw (
                        I(D),
                        (function (j, T) {
                          var k = j.content,
                            U = j.status,
                            B = k;
                          try {
                            B = JSON.parse(k).message;
                          } catch {}
                          return (function (G, oe, Lt) {
                            return {
                              name: "ApiError",
                              message: G,
                              status: oe,
                              transporterStackTrace: Lt,
                            };
                          })(B, U, T);
                        })(D, pe(a))
                      );
                    },
                  };
                return e.requester.send(O).then(function (D) {
                  return (function (j, T) {
                    return (function (k) {
                      var U = k.status;
                      return (
                        k.isTimedOut ||
                        (function (B) {
                          var G = B.isTimedOut,
                            oe = B.status;
                          return !G && ~~oe == 0;
                        })(k) ||
                        (~~(U / 100) != 2 && ~~(U / 100) != 4)
                      );
                    })(j)
                      ? T.onRetry(j)
                      : ~~(j.status / 100) == 2
                        ? T.onSuccess(j)
                        : T.onFail(j);
                  })(D, W);
                });
              };
            return Ee(e.hostsCache, t).then(function (l) {
              return p(z(l.statelessHosts).reverse(), l.getTimeout);
            });
          }
          function Y(e) {
            var t = e.hostsCache,
              r = e.logger,
              n = e.requester,
              a = e.requestsCache,
              u = e.responsesCache,
              c = e.timeouts,
              o = e.userAgent,
              s = e.hosts,
              d = e.queryParameters,
              f = {
                hostsCache: t,
                logger: r,
                requester: n,
                requestsCache: a,
                responsesCache: u,
                timeouts: c,
                userAgent: o,
                headers: e.headers,
                queryParameters: d,
                hosts: s.map(function (p) {
                  return fe(p);
                }),
                read: function (p, l) {
                  var g = q(l, f.timeouts.read),
                    m = function () {
                      return de(
                        f,
                        f.hosts.filter(function (O) {
                          return (O.accept & E.Read) != 0;
                        }),
                        p,
                        g,
                      );
                    };
                  if (
                    (g.cacheable !== void 0 ? g.cacheable : p.cacheable) !== !0
                  )
                    return m();
                  var b = {
                    request: p,
                    mappedRequestOptions: g,
                    transporter: {
                      queryParameters: f.queryParameters,
                      headers: f.headers,
                    },
                  };
                  return f.responsesCache.get(
                    b,
                    function () {
                      return f.requestsCache.get(b, function () {
                        return f.requestsCache
                          .set(b, m())
                          .then(
                            function (O) {
                              return Promise.all([
                                f.requestsCache.delete(b),
                                O,
                              ]);
                            },
                            function (O) {
                              return Promise.all([
                                f.requestsCache.delete(b),
                                Promise.reject(O),
                              ]);
                            },
                          )
                          .then(function (O) {
                            var I = S(O, 2);
                            return (I[0], I[1]);
                          });
                      });
                    },
                    {
                      miss: function (O) {
                        return f.responsesCache.set(b, O);
                      },
                    },
                  );
                },
                write: function (p, l) {
                  return de(
                    f,
                    f.hosts.filter(function (g) {
                      return (g.accept & E.Write) != 0;
                    }),
                    p,
                    q(l, f.timeouts.write),
                  );
                },
              };
            return f;
          }
          function Re(e) {
            var t = {
              value: "Algolia for JavaScript (".concat(e, ")"),
              add: function (r) {
                var n = "; "
                  .concat(r.segment)
                  .concat(
                    r.version !== void 0 ? " (".concat(r.version, ")") : "",
                  );
                return (
                  t.value.indexOf(n) === -1 &&
                    (t.value = "".concat(t.value).concat(n)),
                  t
                );
              },
            };
            return t;
          }
          function Ae(e, t, r) {
            var n = le(r),
              a = ""
                .concat(e.protocol, "://")
                .concat(e.url, "/")
                .concat(t.charAt(0) === "/" ? t.substr(1) : t);
            return (n.length && (a += "?".concat(n)), a);
          }
          function le(e) {
            return Object.keys(e)
              .map(function (t) {
                return h(
                  "%s=%s",
                  t,
                  ((r = e[t]),
                  Object.prototype.toString.call(r) === "[object Object]" ||
                  Object.prototype.toString.call(r) === "[object Array]"
                    ? JSON.stringify(e[t])
                    : e[t]),
                );
                var r;
              })
              .join("&");
          }
          function pe(e) {
            return e.map(function (t) {
              return he(t);
            });
          }
          function he(e) {
            var t = e.request.headers["x-algolia-api-key"]
              ? { "x-algolia-api-key": "*****" }
              : {};
            return i(
              i({}, e),
              {},
              {
                request: i(
                  i({}, e.request),
                  {},
                  { headers: i(i({}, e.request.headers), t) },
                ),
              },
            );
          }
          var Ce = function (e) {
              return function (t, r) {
                return e.transporter.write(
                  { method: y, path: "2/abtests", data: t },
                  r,
                );
              };
            },
            Ue = function (e) {
              return function (t, r) {
                return e.transporter.write(
                  { method: R, path: h("2/abtests/%s", t) },
                  r,
                );
              };
            },
            ze = function (e) {
              return function (t, r) {
                return e.transporter.read(
                  { method: P, path: h("2/abtests/%s", t) },
                  r,
                );
              };
            },
            Je = function (e) {
              return function (t) {
                return e.transporter.read({ method: P, path: "2/abtests" }, t);
              };
            },
            Fe = function (e) {
              return function (t, r) {
                return e.transporter.write(
                  { method: y, path: h("2/abtests/%s/stop", t) },
                  r,
                );
              };
            },
            He = function (e) {
              return function (t) {
                return e.transporter.read(
                  { method: P, path: "1/strategies/personalization" },
                  t,
                );
              };
            },
            Me = function (e) {
              return function (t, r) {
                return e.transporter.write(
                  { method: y, path: "1/strategies/personalization", data: t },
                  r,
                );
              };
            };
          function Z(e) {
            return (function t(r) {
              return e.request(r).then(function (n) {
                if ((e.batch !== void 0 && e.batch(n.hits), !e.shouldStop(n)))
                  return n.cursor
                    ? t({ cursor: n.cursor })
                    : t({ page: (r.page || 0) + 1 });
              });
            })({});
          }
          var We = function (e) {
              return function (t, r) {
                var n = r || {},
                  a = n.queryParameters,
                  u = x(n, ["queryParameters"]),
                  c = i({ acl: t }, a !== void 0 ? { queryParameters: a } : {});
                return v(
                  e.transporter.write(
                    { method: y, path: "1/keys", data: c },
                    u,
                  ),
                  function (o, s) {
                    return N(function (d) {
                      return H(e)(o.key, s).catch(function (f) {
                        if (f.status !== 404) throw f;
                        return d();
                      });
                    });
                  },
                );
              };
            },
            Be = function (e) {
              return function (t, r, n) {
                var a = q(n);
                return (
                  (a.queryParameters["X-Algolia-User-ID"] = t),
                  e.transporter.write(
                    {
                      method: y,
                      path: "1/clusters/mapping",
                      data: { cluster: r },
                    },
                    a,
                  )
                );
              };
            },
            Ke = function (e) {
              return function (t, r, n) {
                return e.transporter.write(
                  {
                    method: y,
                    path: "1/clusters/mapping/batch",
                    data: { users: t, cluster: r },
                  },
                  n,
                );
              };
            },
            Qe = function (e) {
              return function (t, r) {
                return v(
                  e.transporter.write(
                    {
                      method: y,
                      path: h("/1/dictionaries/%s/batch", t),
                      data: {
                        clearExistingDictionaryEntries: !0,
                        requests: { action: "addEntry", body: [] },
                      },
                    },
                    r,
                  ),
                  function (n, a) {
                    return A(e)(n.taskID, a);
                  },
                );
              };
            },
            _ = function (e) {
              return function (t, r, n) {
                return v(
                  e.transporter.write(
                    {
                      method: y,
                      path: h("1/indexes/%s/operation", t),
                      data: { operation: "copy", destination: r },
                    },
                    n,
                  ),
                  function (a, u) {
                    return M(e)(t, { methods: { waitTask: w } }).waitTask(
                      a.taskID,
                      u,
                    );
                  },
                );
              };
            },
            _e = function (e) {
              return function (t, r, n) {
                return _(e)(t, r, i(i({}, n), {}, { scope: [ae.Rules] }));
              };
            },
            Ge = function (e) {
              return function (t, r, n) {
                return _(e)(t, r, i(i({}, n), {}, { scope: [ae.Settings] }));
              };
            },
            Le = function (e) {
              return function (t, r, n) {
                return _(e)(t, r, i(i({}, n), {}, { scope: [ae.Synonyms] }));
              };
            },
            Ve = function (e) {
              return function (t, r) {
                return t.method === P
                  ? e.transporter.read(t, r)
                  : e.transporter.write(t, r);
              };
            },
            Xe = function (e) {
              return function (t, r) {
                return v(
                  e.transporter.write(
                    { method: R, path: h("1/keys/%s", t) },
                    r,
                  ),
                  function (n, a) {
                    return N(function (u) {
                      return H(e)(t, a)
                        .then(u)
                        .catch(function (c) {
                          if (c.status !== 404) throw c;
                        });
                    });
                  },
                );
              };
            },
            $e = function (e) {
              return function (t, r, n) {
                var a = r.map(function (u) {
                  return { action: "deleteEntry", body: { objectID: u } };
                });
                return v(
                  e.transporter.write(
                    {
                      method: y,
                      path: h("/1/dictionaries/%s/batch", t),
                      data: { clearExistingDictionaryEntries: !1, requests: a },
                    },
                    n,
                  ),
                  function (u, c) {
                    return A(e)(u.taskID, c);
                  },
                );
              };
            },
            H = function (e) {
              return function (t, r) {
                return e.transporter.read(
                  { method: P, path: h("1/keys/%s", t) },
                  r,
                );
              };
            },
            me = function (e) {
              return function (t, r) {
                return e.transporter.read(
                  { method: P, path: h("1/task/%s", t.toString()) },
                  r,
                );
              };
            },
            Ye = function (e) {
              return function (t) {
                return e.transporter.read(
                  { method: P, path: "/1/dictionaries/*/settings" },
                  t,
                );
              };
            },
            Ze = function (e) {
              return function (t) {
                return e.transporter.read({ method: P, path: "1/logs" }, t);
              };
            },
            et = function (e) {
              return function (t) {
                return e.transporter.read(
                  { method: P, path: "1/clusters/mapping/top" },
                  t,
                );
              };
            },
            tt = function (e) {
              return function (t, r) {
                return e.transporter.read(
                  { method: P, path: h("1/clusters/mapping/%s", t) },
                  r,
                );
              };
            },
            rt = function (e) {
              return function (t) {
                var r = t || {},
                  n = r.retrieveMappings,
                  a = x(r, ["retrieveMappings"]);
                return (
                  n === !0 && (a.getClusters = !0),
                  e.transporter.read(
                    { method: P, path: "1/clusters/mapping/pending" },
                    a,
                  )
                );
              };
            },
            M = function (e) {
              return function (t) {
                var r =
                    arguments.length > 1 && arguments[1] !== void 0
                      ? arguments[1]
                      : {},
                  n = {
                    transporter: e.transporter,
                    appId: e.appId,
                    indexName: t,
                  };
                return Q(n, r.methods);
              };
            },
            nt = function (e) {
              return function (t) {
                return e.transporter.read({ method: P, path: "1/keys" }, t);
              };
            },
            at = function (e) {
              return function (t) {
                return e.transporter.read({ method: P, path: "1/clusters" }, t);
              };
            },
            ot = function (e) {
              return function (t) {
                return e.transporter.read({ method: P, path: "1/indexes" }, t);
              };
            },
            ut = function (e) {
              return function (t) {
                return e.transporter.read(
                  { method: P, path: "1/clusters/mapping" },
                  t,
                );
              };
            },
            it = function (e) {
              return function (t, r, n) {
                return v(
                  e.transporter.write(
                    {
                      method: y,
                      path: h("1/indexes/%s/operation", t),
                      data: { operation: "move", destination: r },
                    },
                    n,
                  ),
                  function (a, u) {
                    return M(e)(t, { methods: { waitTask: w } }).waitTask(
                      a.taskID,
                      u,
                    );
                  },
                );
              };
            },
            st = function (e) {
              return function (t, r) {
                return v(
                  e.transporter.write(
                    {
                      method: y,
                      path: "1/indexes/*/batch",
                      data: { requests: t },
                    },
                    r,
                  ),
                  function (n, a) {
                    return Promise.all(
                      Object.keys(n.taskID).map(function (u) {
                        return M(e)(u, { methods: { waitTask: w } }).waitTask(
                          n.taskID[u],
                          a,
                        );
                      }),
                    );
                  },
                );
              };
            },
            ct = function (e) {
              return function (t, r) {
                return e.transporter.read(
                  {
                    method: y,
                    path: "1/indexes/*/objects",
                    data: { requests: t },
                  },
                  r,
                );
              };
            },
            ge = function (e) {
              return function (t, r) {
                var n = t.map(function (a) {
                  return i(i({}, a), {}, { params: le(a.params || {}) });
                });
                return e.transporter.read(
                  {
                    method: y,
                    path: "1/indexes/*/queries",
                    data: { requests: n },
                    cacheable: !0,
                  },
                  r,
                );
              };
            },
            ye = function (e) {
              return function (t, r) {
                return Promise.all(
                  t.map(function (n) {
                    var a = n.params,
                      u = a.facetName,
                      c = a.facetQuery,
                      o = x(a, ["facetName", "facetQuery"]);
                    return M(e)(n.indexName, {
                      methods: { searchForFacetValues: xe },
                    }).searchForFacetValues(u, c, i(i({}, r), o));
                  }),
                );
              };
            },
            ft = function (e) {
              return function (t, r) {
                var n = q(r);
                return (
                  (n.queryParameters["X-Algolia-User-ID"] = t),
                  e.transporter.write(
                    { method: R, path: "1/clusters/mapping" },
                    n,
                  )
                );
              };
            },
            dt = function (e) {
              return function (t, r, n) {
                var a = r.map(function (u) {
                  return { action: "addEntry", body: u };
                });
                return v(
                  e.transporter.write(
                    {
                      method: y,
                      path: h("/1/dictionaries/%s/batch", t),
                      data: { clearExistingDictionaryEntries: !0, requests: a },
                    },
                    n,
                  ),
                  function (u, c) {
                    return A(e)(u.taskID, c);
                  },
                );
              };
            },
            lt = function (e) {
              return function (t, r) {
                return v(
                  e.transporter.write(
                    { method: y, path: h("1/keys/%s/restore", t) },
                    r,
                  ),
                  function (n, a) {
                    return N(function (u) {
                      return H(e)(t, a).catch(function (c) {
                        if (c.status !== 404) throw c;
                        return u();
                      });
                    });
                  },
                );
              };
            },
            pt = function (e) {
              return function (t, r, n) {
                var a = r.map(function (u) {
                  return { action: "addEntry", body: u };
                });
                return v(
                  e.transporter.write(
                    {
                      method: y,
                      path: h("/1/dictionaries/%s/batch", t),
                      data: { clearExistingDictionaryEntries: !1, requests: a },
                    },
                    n,
                  ),
                  function (u, c) {
                    return A(e)(u.taskID, c);
                  },
                );
              };
            },
            ht = function (e) {
              return function (t, r, n) {
                return e.transporter.read(
                  {
                    method: y,
                    path: h("/1/dictionaries/%s/search", t),
                    data: { query: r },
                    cacheable: !0,
                  },
                  n,
                );
              };
            },
            mt = function (e) {
              return function (t, r) {
                return e.transporter.read(
                  {
                    method: y,
                    path: "1/clusters/mapping/search",
                    data: { query: t },
                  },
                  r,
                );
              };
            },
            gt = function (e) {
              return function (t, r) {
                return v(
                  e.transporter.write(
                    { method: $, path: "/1/dictionaries/*/settings", data: t },
                    r,
                  ),
                  function (n, a) {
                    return A(e)(n.taskID, a);
                  },
                );
              };
            },
            yt = function (e) {
              return function (t, r) {
                var n = Object.assign({}, r),
                  a = r || {},
                  u = a.queryParameters,
                  c = x(a, ["queryParameters"]),
                  o = u ? { queryParameters: u } : {},
                  s = [
                    "acl",
                    "indexes",
                    "referers",
                    "restrictSources",
                    "queryParameters",
                    "description",
                    "maxQueriesPerIPPerHour",
                    "maxHitsPerQuery",
                  ];
                return v(
                  e.transporter.write(
                    { method: $, path: h("1/keys/%s", t), data: o },
                    c,
                  ),
                  function (d, f) {
                    return N(function (p) {
                      return H(e)(t, f).then(function (l) {
                        return (function (g) {
                          return Object.keys(n)
                            .filter(function (m) {
                              return s.indexOf(m) !== -1;
                            })
                            .every(function (m) {
                              if (Array.isArray(g[m]) && Array.isArray(n[m])) {
                                var b = g[m];
                                return (
                                  b.length === n[m].length &&
                                  b.every(function (O, I) {
                                    return O === n[m][I];
                                  })
                                );
                              }
                              return g[m] === n[m];
                            });
                        })(l)
                          ? Promise.resolve()
                          : p();
                      });
                    });
                  },
                );
              };
            },
            A = function (e) {
              return function (t, r) {
                return N(function (n) {
                  return me(e)(t, r).then(function (a) {
                    return a.status !== "published" ? n() : void 0;
                  });
                });
              };
            },
            ve = function (e) {
              return function (t, r) {
                return v(
                  e.transporter.write(
                    {
                      method: y,
                      path: h("1/indexes/%s/batch", e.indexName),
                      data: { requests: t },
                    },
                    r,
                  ),
                  function (n, a) {
                    return w(e)(n.taskID, a);
                  },
                );
              };
            },
            vt = function (e) {
              return function (t) {
                return Z(
                  i(
                    i(
                      {
                        shouldStop: function (r) {
                          return r.cursor === void 0;
                        },
                      },
                      t,
                    ),
                    {},
                    {
                      request: function (r) {
                        return e.transporter.read(
                          {
                            method: y,
                            path: h("1/indexes/%s/browse", e.indexName),
                            data: r,
                          },
                          t,
                        );
                      },
                    },
                  ),
                );
              };
            },
            bt = function (e) {
              return function (t) {
                var r = i({ hitsPerPage: 1e3 }, t);
                return Z(
                  i(
                    i(
                      {
                        shouldStop: function (n) {
                          return n.hits.length < r.hitsPerPage;
                        },
                      },
                      r,
                    ),
                    {},
                    {
                      request: function (n) {
                        return je(e)("", i(i({}, r), n)).then(function (a) {
                          return i(
                            i({}, a),
                            {},
                            {
                              hits: a.hits.map(function (u) {
                                return (delete u._highlightResult, u);
                              }),
                            },
                          );
                        });
                      },
                    },
                  ),
                );
              };
            },
            Ot = function (e) {
              return function (t) {
                var r = i({ hitsPerPage: 1e3 }, t);
                return Z(
                  i(
                    i(
                      {
                        shouldStop: function (n) {
                          return n.hits.length < r.hitsPerPage;
                        },
                      },
                      r,
                    ),
                    {},
                    {
                      request: function (n) {
                        return Ie(e)("", i(i({}, r), n)).then(function (a) {
                          return i(
                            i({}, a),
                            {},
                            {
                              hits: a.hits.map(function (u) {
                                return (delete u._highlightResult, u);
                              }),
                            },
                          );
                        });
                      },
                    },
                  ),
                );
              };
            },
            ee = function (e) {
              return function (t, r, n) {
                var a = n || {},
                  u = a.batchSize,
                  c = x(a, ["batchSize"]),
                  o = { taskIDs: [], objectIDs: [] };
                return v(
                  (function s() {
                    var d,
                      f =
                        arguments.length > 0 && arguments[0] !== void 0
                          ? arguments[0]
                          : 0,
                      p = [];
                    for (
                      d = f;
                      d < t.length && (p.push(t[d]), p.length !== (u || 1e3));
                      d++
                    );
                    return p.length === 0
                      ? Promise.resolve(o)
                      : ve(e)(
                          p.map(function (l) {
                            return { action: r, body: l };
                          }),
                          c,
                        ).then(function (l) {
                          return (
                            (o.objectIDs = o.objectIDs.concat(l.objectIDs)),
                            o.taskIDs.push(l.taskID),
                            d++,
                            s(d)
                          );
                        });
                  })(),
                  function (s, d) {
                    return Promise.all(
                      s.taskIDs.map(function (f) {
                        return w(e)(f, d);
                      }),
                    );
                  },
                );
              };
            },
            Pt = function (e) {
              return function (t) {
                return v(
                  e.transporter.write(
                    { method: y, path: h("1/indexes/%s/clear", e.indexName) },
                    t,
                  ),
                  function (r, n) {
                    return w(e)(r.taskID, n);
                  },
                );
              };
            },
            wt = function (e) {
              return function (t) {
                var r = t || {},
                  n = r.forwardToReplicas,
                  a = q(x(r, ["forwardToReplicas"]));
                return (
                  n && (a.queryParameters.forwardToReplicas = 1),
                  v(
                    e.transporter.write(
                      {
                        method: y,
                        path: h("1/indexes/%s/rules/clear", e.indexName),
                      },
                      a,
                    ),
                    function (u, c) {
                      return w(e)(u.taskID, c);
                    },
                  )
                );
              };
            },
            xt = function (e) {
              return function (t) {
                var r = t || {},
                  n = r.forwardToReplicas,
                  a = q(x(r, ["forwardToReplicas"]));
                return (
                  n && (a.queryParameters.forwardToReplicas = 1),
                  v(
                    e.transporter.write(
                      {
                        method: y,
                        path: h("1/indexes/%s/synonyms/clear", e.indexName),
                      },
                      a,
                    ),
                    function (u, c) {
                      return w(e)(u.taskID, c);
                    },
                  )
                );
              };
            },
            jt = function (e) {
              return function (t, r) {
                return v(
                  e.transporter.write(
                    {
                      method: y,
                      path: h("1/indexes/%s/deleteByQuery", e.indexName),
                      data: t,
                    },
                    r,
                  ),
                  function (n, a) {
                    return w(e)(n.taskID, a);
                  },
                );
              };
            },
            It = function (e) {
              return function (t) {
                return v(
                  e.transporter.write(
                    { method: R, path: h("1/indexes/%s", e.indexName) },
                    t,
                  ),
                  function (r, n) {
                    return w(e)(r.taskID, n);
                  },
                );
              };
            },
            Dt = function (e) {
              return function (t, r) {
                return v(
                  be(e)([t], r).then(function (n) {
                    return { taskID: n.taskIDs[0] };
                  }),
                  function (n, a) {
                    return w(e)(n.taskID, a);
                  },
                );
              };
            },
            be = function (e) {
              return function (t, r) {
                var n = t.map(function (a) {
                  return { objectID: a };
                });
                return ee(e)(n, C.DeleteObject, r);
              };
            },
            qt = function (e) {
              return function (t, r) {
                var n = r || {},
                  a = n.forwardToReplicas,
                  u = q(x(n, ["forwardToReplicas"]));
                return (
                  a && (u.queryParameters.forwardToReplicas = 1),
                  v(
                    e.transporter.write(
                      {
                        method: R,
                        path: h("1/indexes/%s/rules/%s", e.indexName, t),
                      },
                      u,
                    ),
                    function (c, o) {
                      return w(e)(c.taskID, o);
                    },
                  )
                );
              };
            },
            St = function (e) {
              return function (t, r) {
                var n = r || {},
                  a = n.forwardToReplicas,
                  u = q(x(n, ["forwardToReplicas"]));
                return (
                  a && (u.queryParameters.forwardToReplicas = 1),
                  v(
                    e.transporter.write(
                      {
                        method: R,
                        path: h("1/indexes/%s/synonyms/%s", e.indexName, t),
                      },
                      u,
                    ),
                    function (c, o) {
                      return w(e)(c.taskID, o);
                    },
                  )
                );
              };
            },
            kt = function (e) {
              return function (t) {
                return Oe(e)(t)
                  .then(function () {
                    return !0;
                  })
                  .catch(function (r) {
                    if (r.status !== 404) throw r;
                    return !1;
                  });
              };
            },
            Tt = function (e) {
              return function (t, r, n) {
                return e.transporter.read(
                  {
                    method: y,
                    path: h("1/answers/%s/prediction", e.indexName),
                    data: { query: t, queryLanguages: r },
                    cacheable: !0,
                  },
                  n,
                );
              };
            },
            Nt = function (e) {
              return function (t, r) {
                var n = r || {},
                  a = n.query,
                  u = n.paginate,
                  c = x(n, ["query", "paginate"]),
                  o = 0;
                return (function s() {
                  return we(e)(a || "", i(i({}, c), {}, { page: o })).then(
                    function (d) {
                      for (
                        var f = 0, p = Object.entries(d.hits);
                        f < p.length;
                        f++
                      ) {
                        var l = S(p[f], 2),
                          g = l[0],
                          m = l[1];
                        if (t(m))
                          return {
                            object: m,
                            position: parseInt(g, 10),
                            page: o,
                          };
                      }
                      if ((o++, u === !1 || o >= d.nbPages))
                        throw {
                          name: "ObjectNotFoundError",
                          message: "Object not found.",
                        };
                      return s();
                    },
                  );
                })();
              };
            },
            Et = function (e) {
              return function (t, r) {
                return e.transporter.read(
                  { method: P, path: h("1/indexes/%s/%s", e.indexName, t) },
                  r,
                );
              };
            },
            Rt = function () {
              return function (e, t) {
                for (var r = 0, n = Object.entries(e.hits); r < n.length; r++) {
                  var a = S(n[r], 2),
                    u = a[0];
                  if (a[1].objectID === t) return parseInt(u, 10);
                }
                return -1;
              };
            },
            At = function (e) {
              return function (t, r) {
                var n = r || {},
                  a = n.attributesToRetrieve,
                  u = x(n, ["attributesToRetrieve"]),
                  c = t.map(function (o) {
                    return i(
                      { indexName: e.indexName, objectID: o },
                      a ? { attributesToRetrieve: a } : {},
                    );
                  });
                return e.transporter.read(
                  {
                    method: y,
                    path: "1/indexes/*/objects",
                    data: { requests: c },
                  },
                  u,
                );
              };
            },
            Ct = function (e) {
              return function (t, r) {
                return e.transporter.read(
                  {
                    method: P,
                    path: h("1/indexes/%s/rules/%s", e.indexName, t),
                  },
                  r,
                );
              };
            },
            Oe = function (e) {
              return function (t) {
                return e.transporter.read(
                  {
                    method: P,
                    path: h("1/indexes/%s/settings", e.indexName),
                    data: { getVersion: 2 },
                  },
                  t,
                );
              };
            },
            Ut = function (e) {
              return function (t, r) {
                return e.transporter.read(
                  {
                    method: P,
                    path: h("1/indexes/%s/synonyms/%s", e.indexName, t),
                  },
                  r,
                );
              };
            },
            zt = function (e) {
              return function (t, r) {
                return v(
                  Pe(e)([t], r).then(function (n) {
                    return { objectID: n.objectIDs[0], taskID: n.taskIDs[0] };
                  }),
                  function (n, a) {
                    return w(e)(n.taskID, a);
                  },
                );
              };
            },
            Pe = function (e) {
              return function (t, r) {
                var n = r || {},
                  a = n.createIfNotExists,
                  u = x(n, ["createIfNotExists"]),
                  c = a ? C.PartialUpdateObject : C.PartialUpdateObjectNoCreate;
                return ee(e)(t, c, u);
              };
            },
            Jt = function (e) {
              return function (t, r) {
                var n = r || {},
                  a = n.safe,
                  u = n.autoGenerateObjectIDIfNotExist,
                  c = n.batchSize,
                  o = x(n, [
                    "safe",
                    "autoGenerateObjectIDIfNotExist",
                    "batchSize",
                  ]),
                  s = function (m, b, O, I) {
                    return v(
                      e.transporter.write(
                        {
                          method: y,
                          path: h("1/indexes/%s/operation", m),
                          data: { operation: O, destination: b },
                        },
                        I,
                      ),
                      function (W, D) {
                        return w(e)(W.taskID, D);
                      },
                    );
                  },
                  d = Math.random().toString(36).substring(7),
                  f = "".concat(e.indexName, "_tmp_").concat(d),
                  p = te({
                    appId: e.appId,
                    transporter: e.transporter,
                    indexName: f,
                  }),
                  l = [],
                  g = s(
                    e.indexName,
                    f,
                    "copy",
                    i(
                      i({}, o),
                      {},
                      { scope: ["settings", "synonyms", "rules"] },
                    ),
                  );
                return (
                  l.push(g),
                  v(
                    (a ? g.wait(o) : g)
                      .then(function () {
                        var m = p(
                          t,
                          i(
                            i({}, o),
                            {},
                            { autoGenerateObjectIDIfNotExist: u, batchSize: c },
                          ),
                        );
                        return (l.push(m), a ? m.wait(o) : m);
                      })
                      .then(function () {
                        var m = s(f, e.indexName, "move", o);
                        return (l.push(m), a ? m.wait(o) : m);
                      })
                      .then(function () {
                        return Promise.all(l);
                      })
                      .then(function (m) {
                        var b = S(m, 3),
                          O = b[0],
                          I = b[1],
                          W = b[2];
                        return {
                          objectIDs: I.objectIDs,
                          taskIDs: [O.taskID].concat(z(I.taskIDs), [W.taskID]),
                        };
                      }),
                    function (m, b) {
                      return Promise.all(
                        l.map(function (O) {
                          return O.wait(b);
                        }),
                      );
                    },
                  )
                );
              };
            },
            Ft = function (e) {
              return function (t, r) {
                return re(e)(t, i(i({}, r), {}, { clearExistingRules: !0 }));
              };
            },
            Ht = function (e) {
              return function (t, r) {
                return ne(e)(t, i(i({}, r), {}, { clearExistingSynonyms: !0 }));
              };
            },
            Mt = function (e) {
              return function (t, r) {
                return v(
                  te(e)([t], r).then(function (n) {
                    return { objectID: n.objectIDs[0], taskID: n.taskIDs[0] };
                  }),
                  function (n, a) {
                    return w(e)(n.taskID, a);
                  },
                );
              };
            },
            te = function (e) {
              return function (t, r) {
                var n = r || {},
                  a = n.autoGenerateObjectIDIfNotExist,
                  u = x(n, ["autoGenerateObjectIDIfNotExist"]),
                  c = a ? C.AddObject : C.UpdateObject;
                if (c === C.UpdateObject) {
                  var o = !0,
                    s = !1,
                    d = void 0;
                  try {
                    for (
                      var f, p = t[Symbol.iterator]();
                      !(o = (f = p.next()).done);
                      o = !0
                    )
                      if (f.value.objectID === void 0)
                        return v(
                          Promise.reject({
                            name: "MissingObjectIDError",
                            message:
                              "All objects must have an unique objectID (like a primary key) to be valid. Algolia is also able to generate objectIDs automatically but *it's not recommended*. To do it, use the `{'autoGenerateObjectIDIfNotExist': true}` option.",
                          }),
                        );
                  } catch (l) {
                    ((s = !0), (d = l));
                  } finally {
                    try {
                      o || p.return == null || p.return();
                    } finally {
                      if (s) throw d;
                    }
                  }
                }
                return ee(e)(t, c, u);
              };
            },
            Wt = function (e) {
              return function (t, r) {
                return re(e)([t], r);
              };
            },
            re = function (e) {
              return function (t, r) {
                var n = r || {},
                  a = n.forwardToReplicas,
                  u = n.clearExistingRules,
                  c = q(x(n, ["forwardToReplicas", "clearExistingRules"]));
                return (
                  a && (c.queryParameters.forwardToReplicas = 1),
                  u && (c.queryParameters.clearExistingRules = 1),
                  v(
                    e.transporter.write(
                      {
                        method: y,
                        path: h("1/indexes/%s/rules/batch", e.indexName),
                        data: t,
                      },
                      c,
                    ),
                    function (o, s) {
                      return w(e)(o.taskID, s);
                    },
                  )
                );
              };
            },
            Bt = function (e) {
              return function (t, r) {
                return ne(e)([t], r);
              };
            },
            ne = function (e) {
              return function (t, r) {
                var n = r || {},
                  a = n.forwardToReplicas,
                  u = n.clearExistingSynonyms,
                  c = n.replaceExistingSynonyms,
                  o = q(
                    x(n, [
                      "forwardToReplicas",
                      "clearExistingSynonyms",
                      "replaceExistingSynonyms",
                    ]),
                  );
                return (
                  a && (o.queryParameters.forwardToReplicas = 1),
                  (c || u) && (o.queryParameters.replaceExistingSynonyms = 1),
                  v(
                    e.transporter.write(
                      {
                        method: y,
                        path: h("1/indexes/%s/synonyms/batch", e.indexName),
                        data: t,
                      },
                      o,
                    ),
                    function (s, d) {
                      return w(e)(s.taskID, d);
                    },
                  )
                );
              };
            },
            we = function (e) {
              return function (t, r) {
                return e.transporter.read(
                  {
                    method: y,
                    path: h("1/indexes/%s/query", e.indexName),
                    data: { query: t },
                    cacheable: !0,
                  },
                  r,
                );
              };
            },
            xe = function (e) {
              return function (t, r, n) {
                return e.transporter.read(
                  {
                    method: y,
                    path: h("1/indexes/%s/facets/%s/query", e.indexName, t),
                    data: { facetQuery: r },
                    cacheable: !0,
                  },
                  n,
                );
              };
            },
            je = function (e) {
              return function (t, r) {
                return e.transporter.read(
                  {
                    method: y,
                    path: h("1/indexes/%s/rules/search", e.indexName),
                    data: { query: t },
                  },
                  r,
                );
              };
            },
            Ie = function (e) {
              return function (t, r) {
                return e.transporter.read(
                  {
                    method: y,
                    path: h("1/indexes/%s/synonyms/search", e.indexName),
                    data: { query: t },
                  },
                  r,
                );
              };
            },
            Kt = function (e) {
              return function (t, r) {
                var n = r || {},
                  a = n.forwardToReplicas,
                  u = q(x(n, ["forwardToReplicas"]));
                return (
                  a && (u.queryParameters.forwardToReplicas = 1),
                  v(
                    e.transporter.write(
                      {
                        method: $,
                        path: h("1/indexes/%s/settings", e.indexName),
                        data: t,
                      },
                      u,
                    ),
                    function (c, o) {
                      return w(e)(c.taskID, o);
                    },
                  )
                );
              };
            },
            w = function (e) {
              return function (t, r) {
                return N(function (n) {
                  return (function (a) {
                    return function (u, c) {
                      return a.transporter.read(
                        {
                          method: P,
                          path: h(
                            "1/indexes/%s/task/%s",
                            a.indexName,
                            u.toString(),
                          ),
                        },
                        c,
                      );
                    };
                  })(e)(t, r).then(function (a) {
                    return a.status !== "published" ? n() : void 0;
                  });
                });
              };
            },
            C = {
              AddObject: "addObject",
              UpdateObject: "updateObject",
              PartialUpdateObject: "partialUpdateObject",
              PartialUpdateObjectNoCreate: "partialUpdateObjectNoCreate",
              DeleteObject: "deleteObject",
            },
            ae = { Settings: "settings", Synonyms: "synonyms", Rules: "rules" },
            Qt = 1,
            _t = 2,
            Gt = 3;
          function De(e, t, r) {
            var n,
              a = {
                appId: e,
                apiKey: t,
                timeouts: { connect: 1, read: 2, write: 30 },
                requester: {
                  send: function (o) {
                    return new Promise(function (s) {
                      var d = new XMLHttpRequest();
                      (d.open(o.method, o.url, !0),
                        Object.keys(o.headers).forEach(function (g) {
                          return d.setRequestHeader(g, o.headers[g]);
                        }));
                      var f,
                        p = function (g, m) {
                          return setTimeout(function () {
                            (d.abort(),
                              s({ status: 0, content: m, isTimedOut: !0 }));
                          }, 1e3 * g);
                        },
                        l = p(o.connectTimeout, "Connection timeout");
                      ((d.onreadystatechange = function () {
                        d.readyState > d.OPENED &&
                          f === void 0 &&
                          (clearTimeout(l),
                          (f = p(o.responseTimeout, "Socket timeout")));
                      }),
                        (d.onerror = function () {
                          d.status === 0 &&
                            (clearTimeout(l),
                            clearTimeout(f),
                            s({
                              content:
                                d.responseText || "Network request failed",
                              status: d.status,
                              isTimedOut: !1,
                            }));
                        }),
                        (d.onload = function () {
                          (clearTimeout(l),
                            clearTimeout(f),
                            s({
                              content: d.responseText,
                              status: d.status,
                              isTimedOut: !1,
                            }));
                        }),
                        d.send(o.data));
                    });
                  },
                },
                logger:
                  ((n = Gt),
                  {
                    debug: function (o, s) {
                      return (
                        Qt >= n && console.debug(o, s),
                        Promise.resolve()
                      );
                    },
                    info: function (o, s) {
                      return (_t >= n && console.info(o, s), Promise.resolve());
                    },
                    error: function (o, s) {
                      return (console.error(o, s), Promise.resolve());
                    },
                  }),
                responsesCache: V(),
                requestsCache: V({ serializable: !1 }),
                hostsCache: J({
                  caches: [
                    ke({ key: "".concat("4.22.1", "-").concat(e) }),
                    V(),
                  ],
                }),
                userAgent: Re("4.22.1").add({ segment: "Browser" }),
              },
              u = i(i({}, a), r),
              c = function () {
                return function (o) {
                  return (function (s) {
                    var d = s.region || "us",
                      f = X(F.WithinHeaders, s.appId, s.apiKey),
                      p = Y(
                        i(
                          i(
                            {
                              hosts: [
                                {
                                  url: "personalization.".concat(
                                    d,
                                    ".algolia.com",
                                  ),
                                },
                              ],
                            },
                            s,
                          ),
                          {},
                          {
                            headers: i(
                              i(i({}, f.headers()), {
                                "content-type": "application/json",
                              }),
                              s.headers,
                            ),
                            queryParameters: i(
                              i({}, f.queryParameters()),
                              s.queryParameters,
                            ),
                          },
                        ),
                      );
                    return Q({ appId: s.appId, transporter: p }, s.methods);
                  })(
                    i(
                      i(i({}, a), o),
                      {},
                      {
                        methods: {
                          getPersonalizationStrategy: He,
                          setPersonalizationStrategy: Me,
                        },
                      },
                    ),
                  );
                };
              };
            return (function (o) {
              var s = o.appId,
                d = X(
                  o.authMode !== void 0 ? o.authMode : F.WithinHeaders,
                  s,
                  o.apiKey,
                ),
                f = Y(
                  i(
                    i(
                      {
                        hosts: [
                          {
                            url: "".concat(s, "-dsn.algolia.net"),
                            accept: E.Read,
                          },
                          {
                            url: "".concat(s, ".algolia.net"),
                            accept: E.Write,
                          },
                        ].concat(
                          Te([
                            { url: "".concat(s, "-1.algolianet.com") },
                            { url: "".concat(s, "-2.algolianet.com") },
                            { url: "".concat(s, "-3.algolianet.com") },
                          ]),
                        ),
                      },
                      o,
                    ),
                    {},
                    {
                      headers: i(
                        i(i({}, d.headers()), {
                          "content-type": "application/x-www-form-urlencoded",
                        }),
                        o.headers,
                      ),
                      queryParameters: i(
                        i({}, d.queryParameters()),
                        o.queryParameters,
                      ),
                    },
                  ),
                );
              return Q(
                {
                  transporter: f,
                  appId: s,
                  addAlgoliaAgent: function (p, l) {
                    f.userAgent.add({ segment: p, version: l });
                  },
                  clearCache: function () {
                    return Promise.all([
                      f.requestsCache.clear(),
                      f.responsesCache.clear(),
                    ]).then(function () {});
                  },
                },
                o.methods,
              );
            })(
              i(
                i({}, u),
                {},
                {
                  methods: {
                    search: ge,
                    searchForFacetValues: ye,
                    multipleBatch: st,
                    multipleGetObjects: ct,
                    multipleQueries: ge,
                    copyIndex: _,
                    copySettings: Ge,
                    copySynonyms: Le,
                    copyRules: _e,
                    moveIndex: it,
                    listIndices: ot,
                    getLogs: Ze,
                    listClusters: at,
                    multipleSearchForFacetValues: ye,
                    getApiKey: H,
                    addApiKey: We,
                    listApiKeys: nt,
                    updateApiKey: yt,
                    deleteApiKey: Xe,
                    restoreApiKey: lt,
                    assignUserID: Be,
                    assignUserIDs: Ke,
                    getUserID: tt,
                    searchUserIDs: mt,
                    listUserIDs: ut,
                    getTopUserIDs: et,
                    removeUserID: ft,
                    hasPendingMappings: rt,
                    clearDictionaryEntries: Qe,
                    deleteDictionaryEntries: $e,
                    getDictionarySettings: Ye,
                    getAppTask: me,
                    replaceDictionaryEntries: dt,
                    saveDictionaryEntries: pt,
                    searchDictionaryEntries: ht,
                    setDictionarySettings: gt,
                    waitAppTask: A,
                    customRequest: Ve,
                    initIndex: function (o) {
                      return function (s) {
                        return M(o)(s, {
                          methods: {
                            batch: ve,
                            delete: It,
                            findAnswers: Tt,
                            getObject: Et,
                            getObjects: At,
                            saveObject: Mt,
                            saveObjects: te,
                            search: we,
                            searchForFacetValues: xe,
                            waitTask: w,
                            setSettings: Kt,
                            getSettings: Oe,
                            partialUpdateObject: zt,
                            partialUpdateObjects: Pe,
                            deleteObject: Dt,
                            deleteObjects: be,
                            deleteBy: jt,
                            clearObjects: Pt,
                            browseObjects: vt,
                            getObjectPosition: Rt,
                            findObject: Nt,
                            exists: kt,
                            saveSynonym: Bt,
                            saveSynonyms: ne,
                            getSynonym: Ut,
                            searchSynonyms: Ie,
                            browseSynonyms: Ot,
                            deleteSynonym: St,
                            clearSynonyms: xt,
                            replaceAllObjects: Jt,
                            replaceAllSynonyms: Ht,
                            searchRules: je,
                            getRule: Ct,
                            deleteRule: qt,
                            saveRule: Wt,
                            saveRules: re,
                            replaceAllRules: Ft,
                            browseRules: bt,
                            clearRules: wt,
                          },
                        });
                      };
                    },
                    initAnalytics: function () {
                      return function (o) {
                        return (function (s) {
                          var d = s.region || "us",
                            f = X(F.WithinHeaders, s.appId, s.apiKey),
                            p = Y(
                              i(
                                i(
                                  {
                                    hosts: [
                                      {
                                        url: "analytics.".concat(
                                          d,
                                          ".algolia.com",
                                        ),
                                      },
                                    ],
                                  },
                                  s,
                                ),
                                {},
                                {
                                  headers: i(
                                    i(i({}, f.headers()), {
                                      "content-type": "application/json",
                                    }),
                                    s.headers,
                                  ),
                                  queryParameters: i(
                                    i({}, f.queryParameters()),
                                    s.queryParameters,
                                  ),
                                },
                              ),
                            );
                          return Q(
                            { appId: s.appId, transporter: p },
                            s.methods,
                          );
                        })(
                          i(
                            i(i({}, a), o),
                            {},
                            {
                              methods: {
                                addABTest: Ce,
                                getABTest: ze,
                                getABTests: Je,
                                stopABTest: Fe,
                                deleteABTest: Ue,
                              },
                            },
                          ),
                        );
                      };
                    },
                    initPersonalization: c,
                    initRecommendation: function () {
                      return function (o) {
                        return (
                          u.logger.info(
                            "The `initRecommendation` method is deprecated. Use `initPersonalization` instead.",
                          ),
                          c()(o)
                        );
                      };
                    },
                  },
                },
              ),
            );
          }
          return ((De.version = "4.22.1"), De);
        });
      })(L)),
    L.exports
  );
}
var Yt = $t();
const Zt = Vt(Yt),
  rr = Zt("E67MRH3B7W", "d295e7764904c7abb371462706007132");
export { rr as a };
