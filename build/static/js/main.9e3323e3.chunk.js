(this["webpackJsonpbeautiful-perlour-react"] =
  this["webpackJsonpbeautiful-perlour-react"] || []).push([
  [0],
  {
    106: function (e, t, c) {},
    122: function (e, t, c) {},
    123: function (e, t, c) {},
    124: function (e, t, c) {},
    125: function (e, t, c) {},
    126: function (e, t, c) {},
    127: function (e, t, c) {},
    128: function (e, t, c) {},
    129: function (e, t, c) {},
    130: function (e, t, c) {},
    131: function (e, t, c) {},
    132: function (e, t, c) {},
    133: function (e, t, c) {},
    134: function (e, t, c) {
      "use strict";
      c.r(t);
      var s = c(1),
        a = c.n(s),
        i = c(33),
        n = c.n(i),
        r = (c(82), c(83), c(16)),
        l = c(13),
        o = c(137),
        j = c(74),
        d = c(139),
        b = c(136),
        m = c(140),
        O = c.p + "static/media/group.f07059ac.png",
        u = c(12),
        h = c(38),
        x = c(72);
      c(85).config();
      var p = {
          apiKey: "AIzaSyC_OcfFKGzBY0hzRCJgmugIvyjQRgGuodU",
          authDomain: "jerinperlourcom.firebaseapp.com",
          projectId: "jerinperlourcom",
          storageBucket: "jerinperlourcom.appspot.com",
          messagingSenderId: "1006279854614",
          appId: "1:1006279854614:web:bc99b43f0ff327e45cc337",
        },
        f = function () {
          Object(x.a)(p);
        },
        g = c(35),
        v = c.n(g);
      f();
      var N = function () {
          var e = Object(s.useState)({}),
            t = Object(u.a)(e, 2),
            c = t[0],
            a = t[1],
            i = Object(s.useState)(""),
            n = Object(u.a)(i, 2),
            r = n[0],
            l = n[1],
            o = Object(s.useState)(!0),
            j = Object(u.a)(o, 2),
            d = j[0],
            b = j[1],
            m = Object(s.useState)([]),
            O = Object(u.a)(m, 2),
            x = O[0],
            p = O[1],
            f = Object(h.c)(),
            g = new h.a();
          Object(s.useEffect)(
            function () {
              var e = Object(h.d)(f, function (e) {
                a(e || {}), b(!1);
              });
              return function () {
                return e;
              };
            },
            [f]
          );
          return (
            Object(s.useEffect)(function () {
              b(!0),
                v.a
                  .get("https://jerins-perlour-server.up.railway.app/service")
                  .then(function (e) {
                    p(e.data);
                  })
                  .catch(function (e) {
                    console.log(e.message, e.code);
                  })
                  .finally(function () {
                    return b(!1);
                  });
            }, []),
            {
              HandleGoogleSignIn: function () {
                b(!0),
                  Object(h.f)(f, g)
                    .then(function (e) {})
                    .catch(function (e) {
                      l(e.message), console.log(e.message, e.code);
                    })
                    .finally(function () {
                      return b(!1);
                    });
              },
              user: c,
              HandleRegisterUser: function (e, t, c, s) {
                b(!0),
                  Object(h.b)(f, e, t)
                    .then(function (t) {
                      a({ email: e, displayName: c }),
                        Object(h.h)(f.currentUser, { displayName: c })
                          .then(function () {})
                          .catch(function (e) {
                            console.log(e.message);
                          }),
                        s("/");
                    })
                    .catch(function (e) {
                      l(e.message), console.log(e.code, e.message);
                    })
                    .finally(function () {
                      return b(!1);
                    });
              },
              error: r,
              setError: l,
              HandleLogOut: function () {
                b(!0),
                  Object(h.g)(f)
                    .then(function () {})
                    .catch(function (e) {
                      console.log(e.message);
                    })
                    .finally(function () {
                      return b(!1);
                    });
              },
              HandleLogInEmailAndPassword: function (e, t, c) {
                b(!0),
                  Object(h.e)(f, e, t)
                    .then(function (e) {
                      c("/");
                    })
                    .catch(function (e) {
                      l(e.message);
                      var t = e.code,
                        c = e.message;
                      console.log(t, c);
                    })
                    .finally(function () {
                      return b(!1);
                    });
              },
              loader: d,
              service: x,
            }
          );
        },
        y = (c(106), c(0)),
        w = function () {
          var e = N(),
            t = e.user,
            c = e.HandleLogOut;
          return Object(y.jsx)(d.a, {
            className: "sticky-top bg-white",
            collapseOnSelect: !0,
            expand: "lg",
            children: Object(y.jsxs)(b.a, {
              children: [
                Object(y.jsx)(d.a.Brand, {
                  as: r.b,
                  to: "/",
                  children: Object(y.jsx)("img", {
                    className: "header-logo",
                    src: O,
                    alt: "",
                  }),
                }),
                Object(y.jsx)(d.a.Toggle, {
                  "aria-controls": "responsive-navbar-nav",
                }),
                Object(y.jsx)(d.a.Collapse, {
                  id: "responsive-navbar-nav",
                  children: Object(y.jsxs)(m.a, {
                    className: "ms-auto",
                    children: [
                      Object(y.jsx)(m.a.Link, {
                        as: r.b,
                        className: "header-menu-list",
                        to: "/",
                        children: "Home",
                      }),
                      Object(y.jsx)(m.a.Link, {
                        as: r.b,
                        className: "header-menu-list",
                        to: "/services",
                        children: "Our Service",
                      }),
                      Object(y.jsx)(m.a.Link, {
                        as: r.b,
                        className: "header-menu-list",
                        to: "/",
                        children: "Testimonials",
                      }),
                      Object(y.jsx)(m.a.Link, {
                        as: r.b,
                        className: "header-menu-list",
                        to: "/",
                        children: "Contact Us",
                      }),
                      Object(y.jsx)(m.a.Link, {
                        as: r.b,
                        className: "header-menu-list",
                        to: "/dashboard/bookinglist",
                        children: "Dashboard",
                      }),
                      t.email &&
                        Object(y.jsx)(m.a.Link, {
                          className: "header-menu-list",
                          children: t.displayName,
                        }),
                      t.email
                        ? Object(y.jsxs)(m.a.Link, {
                            onClick: c,
                            className: "log-in-btn",
                            children: [
                              "LogOut ",
                              Object(y.jsx)("i", {
                                className: "fas fa-sign-out-alt ms-1",
                              }),
                            ],
                          })
                        : Object(y.jsxs)(m.a.Link, {
                            as: r.b,
                            className: "log-in-btn",
                            to: "/login",
                            children: [
                              "Login ",
                              Object(y.jsx)("i", {
                                className: "fas fa-sign-in-alt ms-1",
                              }),
                            ],
                          }),
                    ],
                  }),
                }),
              ],
            }),
          });
        },
        k = function () {
          return Object(y.jsx)("div", {
            children: Object(y.jsx)("h1", { children: "Add Service" }),
          });
        },
        S = function () {
          return Object(y.jsx)("div", {
            children: Object(y.jsx)("h1", { children: "This is book" }),
          });
        },
        C = Object(s.createContext)(),
        A = function (e) {
          var t = e.children,
            c = N();
          return Object(y.jsx)(C.Provider, { value: c, children: t });
        },
        E = function () {
          return Object(s.useContext)(C);
        },
        I = c(45),
        L = c.n(I),
        P =
          (c(122),
          function (e) {
            var t,
              c,
              s,
              a = e.data,
              i = e.order,
              n = e.setOrder;
            return Object(y.jsx)(j.a, {
              lg: 6,
              sm: 12,
              children: Object(y.jsxs)("div", {
                className: "p-5 bg-white single-order-box mb-5",
                children: [
                  Object(y.jsxs)("div", {
                    className:
                      "book-order-dashboard d-flex justify-content-between",
                    children: [
                      Object(y.jsx)("div", {
                        children: Object(y.jsx)("img", {
                          className: "single-order-img",
                          src:
                            null === a ||
                            void 0 === a ||
                            null === (t = a.orderdata) ||
                            void 0 === t
                              ? void 0
                              : t.img,
                          alt: "",
                        }),
                      }),
                      Object(y.jsx)("div", {
                        children: Object(y.jsx)("span", {
                          className: "order-review-button",
                          children: "Pending",
                        }),
                      }),
                    ],
                  }),
                  Object(y.jsx)("h3", {
                    className: "single-order-title",
                    children:
                      null === a ||
                      void 0 === a ||
                      null === (c = a.orderdata) ||
                      void 0 === c
                        ? void 0
                        : c.title,
                  }),
                  Object(y.jsx)("p", {
                    className: "single-order-description",
                    children:
                      null === a ||
                      void 0 === a ||
                      null === (s = a.orderdata) ||
                      void 0 === s
                        ? void 0
                        : s.description,
                  }),
                  Object(y.jsxs)("button", {
                    onClick: function () {
                      return (
                        (e = null === a || void 0 === a ? void 0 : a._id),
                        void L.a
                          .fire({
                            title: "Do you want Delete Order ?",
                            showDenyButton: !0,
                            confirmButtonText: "Delete Order",
                          })
                          .then(function (t) {
                            t.isConfirmed
                              ? v.a
                                  .delete(
                                    "https://jerins-perlour-server.up.railway.app/order/".concat(
                                      e
                                    )
                                  )
                                  .then(function (t) {
                                    if (t.data.deletedCount) {
                                      L.a.fire(
                                        "Deleted!",
                                        "Order Succesfully",
                                        "success"
                                      );
                                      var c = i.filter(function (t) {
                                        return e !== t._id;
                                      });
                                      n(c);
                                    }
                                  })
                              : t.isDenied &&
                                L.a.fire(
                                  "Order",
                                  "Can't Delete . Thanks",
                                  "info"
                                );
                          })
                      );
                      var e;
                    },
                    className: "common-button mb-0 border-0",
                    children: [
                      "Delete Order ",
                      Object(y.jsx)("i", {
                        className: "far fa-trash-alt ms-2",
                      }),
                    ],
                  }),
                ],
              }),
            });
          }),
        H = function () {
          var e = E().user,
            t = Object(s.useState)([]),
            c = Object(u.a)(t, 2),
            a = c[0],
            i = c[1];
          return (
            Object(s.useEffect)(
              function () {
                v.a
                  .get(
                    "https://jerins-perlour-server.up.railway.app/order/email?email=".concat(
                      null === e || void 0 === e ? void 0 : e.email
                    )
                  )
                  .then(function (e) {
                    i(e.data);
                  });
              },
              [null === e || void 0 === e ? void 0 : e.email]
            ),
            console.log(a),
            Object(y.jsxs)("div", {
              children: [
                Object(y.jsx)("h1", {
                  className: "all-head-title text-center py-5",
                  children: "My order List",
                }),
                Object(y.jsx)("div", {
                  children: Object(y.jsx)(b.a, {
                    children: Object(y.jsx)(o.a, {
                      children: a.map(function (e) {
                        return Object(y.jsx)(
                          P,
                          { setOrder: i, order: a, data: e },
                          e._id
                        );
                      }),
                    }),
                  }),
                }),
              ],
            })
          );
        },
        B = c(5),
        M = c(31),
        q =
          (c(123),
          function () {
            var e = Object(M.a)(),
              t = e.register,
              c = e.reset,
              s = e.handleSubmit;
            return Object(y.jsxs)("div", {
              children: [
                Object(y.jsx)("h1", {
                  className: "all-head-title text-center py-5",
                  children: "Make An Admin",
                }),
                Object(y.jsx)("div", {
                  className: "make-admin-box",
                  children: Object(y.jsxs)("form", {
                    onClick: s(function (e) {
                      console.log(e), c();
                    }),
                    className: "bookservice-form-box",
                    children: [
                      Object(y.jsx)(
                        "input",
                        Object(B.a)(
                          Object(B.a)({ type: "email" }, t("email")),
                          {},
                          { placeholder: "enter admin email", required: !0 }
                        )
                      ),
                      Object(y.jsx)("input", {
                        type: "submit",
                        value: "Make Admin",
                        className: "common-button text-white border-0",
                      }),
                    ],
                  }),
                }),
              ],
            });
          }),
        D = function () {
          return Object(y.jsx)("div", {
            children: Object(y.jsx)("h1", { children: "Manage Service" }),
          });
        },
        W = function () {
          return Object(y.jsx)("div", {
            children: Object(y.jsx)("h1", { children: "Order List" }),
          });
        },
        T = function () {
          return Object(y.jsx)("div", {
            children: Object(y.jsx)("h1", { children: "Review" }),
          });
        },
        R =
          (c(124),
          function () {
            return Object(y.jsxs)("div", {
              children: [
                Object(y.jsx)(w, {}),
                Object(y.jsx)("div", {
                  className: "dashboard-main-box",
                  children: Object(y.jsxs)(o.a, {
                    children: [
                      Object(y.jsx)(j.a, {
                        lg: 2,
                        children: Object(y.jsxs)("div", {
                          className: "dashboard-list-main position-fixed",
                          children: [
                            Object(y.jsx)("div", {
                              className: "dashboard-list",
                              children: Object(y.jsxs)(r.b, {
                                to: "book",
                                children: [
                                  Object(y.jsx)("i", {
                                    className: "fas fa-shopping-cart",
                                  }),
                                  " Book",
                                ],
                              }),
                            }),
                            Object(y.jsx)("div", {
                              className: "dashboard-list",
                              children: Object(y.jsxs)(r.b, {
                                to: "bookinglist",
                                children: [
                                  Object(y.jsx)("i", {
                                    className: "fas fa-hdd",
                                  }),
                                  " Booking List",
                                ],
                              }),
                            }),
                            Object(y.jsx)("div", {
                              className: "dashboard-list",
                              children: Object(y.jsxs)(r.b, {
                                to: "review",
                                children: [
                                  Object(y.jsx)("i", {
                                    className: "fas fa-comment-dots",
                                  }),
                                  " Review",
                                ],
                              }),
                            }),
                            Object(y.jsx)("div", {
                              className: "dashboard-list",
                              children: Object(y.jsxs)(r.b, {
                                to: "orderlist",
                                children: [
                                  Object(y.jsx)("i", {
                                    className: "fas fa-list-alt",
                                  }),
                                  " Order List",
                                ],
                              }),
                            }),
                            Object(y.jsx)("div", {
                              className: "dashboard-list",
                              children: Object(y.jsxs)(r.b, {
                                to: "addservice",
                                children: [
                                  Object(y.jsx)("i", {
                                    className: "fas fa-plus",
                                  }),
                                  " Add Service",
                                ],
                              }),
                            }),
                            Object(y.jsx)("div", {
                              className: "dashboard-list",
                              children: Object(y.jsxs)(r.b, {
                                to: "makeadmin",
                                children: [
                                  Object(y.jsx)("i", {
                                    className: "fas fa-user-plus",
                                  }),
                                  " Make Admin",
                                ],
                              }),
                            }),
                            Object(y.jsx)("div", {
                              className: "dashboard-list",
                              children: Object(y.jsxs)(r.b, {
                                to: "manageservice",
                                children: [
                                  Object(y.jsx)("i", {
                                    className: "fas fa-th-large",
                                  }),
                                  " Manage Service",
                                ],
                              }),
                            }),
                          ],
                        }),
                      }),
                      Object(y.jsx)(j.a, {
                        lg: 10,
                        children: Object(y.jsx)("div", {
                          children: Object(y.jsx)("div", {
                            className: "router-item",
                            children: Object(y.jsxs)(l.e, {
                              children: [
                                Object(y.jsx)(l.c, {
                                  path: "book",
                                  element: Object(y.jsx)(S, {}),
                                }),
                                Object(y.jsx)(l.c, {
                                  path: "bookinglist",
                                  element: Object(y.jsx)(H, {}),
                                }),
                                Object(y.jsx)(l.c, {
                                  path: "review",
                                  element: Object(y.jsx)(T, {}),
                                }),
                                Object(y.jsx)(l.c, {
                                  path: "orderlist",
                                  element: Object(y.jsx)(W, {}),
                                }),
                                Object(y.jsx)(l.c, {
                                  path: "addservice",
                                  element: Object(y.jsx)(k, {}),
                                }),
                                Object(y.jsx)(l.c, {
                                  path: "makeadmin",
                                  element: Object(y.jsx)(q, {}),
                                }),
                                Object(y.jsx)(l.c, {
                                  path: "manageservice",
                                  element: Object(y.jsx)(D, {}),
                                }),
                              ],
                            }),
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
              ],
            });
          }),
        z =
          (c(125),
          function () {
            var e = Object(l.i)().id,
              t = Object(s.useState)({}),
              c = Object(u.a)(t, 2),
              a = c[0],
              i = c[1],
              n = Object(M.a)(),
              r = n.register,
              d = n.handleSubmit,
              m = n.reset,
              O = Object(l.h)(),
              h = E().user;
            Object(s.useEffect)(
              function () {
                v.a
                  .get(
                    "https://jerins-perlour-server.up.railway.app/service/".concat(
                      e
                    )
                  )
                  .then(function (e) {
                    i(e.data);
                  });
              },
              [e]
            );
            return Object(y.jsxs)("div", {
              children: [
                Object(y.jsx)(w, {}),
                Object(y.jsxs)("div", {
                  className: "py-5",
                  children: [
                    Object(y.jsx)("h1", {
                      className: "all-head-title text-center pb-5",
                      children: "Book Your Order",
                    }),
                    Object(y.jsx)(b.a, {
                      children: Object(y.jsxs)(o.a, {
                        children: [
                          Object(y.jsx)(j.a, {
                            lg: 6,
                            sm: 12,
                            children: Object(y.jsxs)("div", {
                              className:
                                "text-center p-5 rounded-3 single-services shadow-lg",
                              children: [
                                Object(y.jsx)("img", {
                                  src:
                                    null === a || void 0 === a ? void 0 : a.img,
                                  alt: "",
                                }),
                                Object(y.jsx)("h2", {
                                  className: "service-title pt-4 pb-2",
                                  children:
                                    null === a || void 0 === a
                                      ? void 0
                                      : a.title,
                                }),
                                Object(y.jsxs)("h3", {
                                  className: "service-price py-2",
                                  children: [
                                    "$",
                                    null === a || void 0 === a
                                      ? void 0
                                      : a.price,
                                  ],
                                }),
                                Object(y.jsx)("p", {
                                  className: "service-descrip",
                                  children:
                                    null === a || void 0 === a
                                      ? void 0
                                      : a.description,
                                }),
                              ],
                            }),
                          }),
                          Object(y.jsx)(j.a, {
                            lg: 6,
                            sm: 12,
                            children: Object(y.jsx)("div", {
                              children: Object(y.jsxs)("form", {
                                onSubmit: d(function (e) {
                                  console.log(e),
                                    (e.orderdata = a),
                                    v.a
                                      .post(
                                        "https://jerins-perlour-server.up.railway.app/order",
                                        e
                                      )
                                      .then(function (e) {
                                        e.data.insertedId &&
                                          (L.a.fire({
                                            title: "Successfully",
                                            text: "Order Submited",
                                            icon: "success",
                                          }),
                                          O("/dashboard/bookinglist"),
                                          m());
                                      });
                                }),
                                className: "bookservice-form-box",
                                children: [
                                  Object(y.jsx)(
                                    "input",
                                    Object(B.a)(
                                      Object(B.a)({ type: "text" }, r("name")),
                                      {},
                                      {
                                        defaultValue:
                                          null === h || void 0 === h
                                            ? void 0
                                            : h.displayName,
                                      }
                                    )
                                  ),
                                  Object(y.jsx)(
                                    "input",
                                    Object(B.a)(
                                      Object(B.a)(
                                        { type: "email" },
                                        r("email")
                                      ),
                                      {},
                                      {
                                        defaultValue:
                                          null === h || void 0 === h
                                            ? void 0
                                            : h.email,
                                      }
                                    )
                                  ),
                                  Object(y.jsx)(
                                    "input",
                                    Object(B.a)(
                                      Object(B.a)(
                                        { type: "number" },
                                        r("phone")
                                      ),
                                      {},
                                      {
                                        placeholder: "Enter your phone number",
                                        required: !0,
                                      }
                                    )
                                  ),
                                  Object(y.jsx)(
                                    "input",
                                    Object(B.a)(
                                      Object(B.a)(
                                        { type: "text" },
                                        r("district")
                                      ),
                                      {},
                                      {
                                        placeholder: "Enter your district name",
                                        required: !0,
                                      }
                                    )
                                  ),
                                  Object(y.jsx)(
                                    "input",
                                    Object(B.a)(
                                      Object(B.a)({ type: "text" }, r("zip")),
                                      {},
                                      {
                                        placeholder: "Enter your zip name",
                                        required: !0,
                                      }
                                    )
                                  ),
                                  Object(y.jsx)(
                                    "input",
                                    Object(B.a)(
                                      Object(B.a)(
                                        { type: "number" },
                                        r("zipcode")
                                      ),
                                      {},
                                      {
                                        placeholder: "Enter your zip code",
                                        required: !0,
                                      }
                                    )
                                  ),
                                  Object(y.jsx)("input", {
                                    type: "submit",
                                    className:
                                      "common-button border-0 text-white",
                                    value: "Booking Now",
                                  }),
                                ],
                              }),
                            }),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              ],
            });
          }),
        G = c(138),
        U =
          (c(126),
          function () {
            return Object(y.jsx)("div", {
              className: "loader-container",
              children: Object(y.jsx)("div", {
                className: "loader",
                children: Object(y.jsx)(G.a, {
                  animation: "border",
                  variant: "danger",
                }),
              }),
            });
          }),
        _ = c.p + "static/media/banner.bcedfe65.png",
        F =
          (c(127),
          function () {
            return Object(y.jsxs)("div", {
              className: "banner-main-box",
              children: [
                Object(y.jsx)(w, {}),
                Object(y.jsx)("div", {
                  className: "py-5",
                  children: Object(y.jsx)(b.a, {
                    children: Object(y.jsxs)(o.a, {
                      className: "align-items-center",
                      children: [
                        Object(y.jsx)(j.a, {
                          lg: 5,
                          sm: 12,
                          children: Object(y.jsxs)("div", {
                            className: "banner-text",
                            children: [
                              Object(y.jsxs)("h1", {
                                className: "banner-head-title",
                                children: [
                                  "Beauty Salon ",
                                  Object(y.jsx)("br", {}),
                                  " For Every Women",
                                ],
                              }),
                              Object(y.jsx)("p", {
                                className: "banner-para-text",
                                children:
                                  "We give a qualityful service as your demand. We Make a team for our salon to do good work and customer satisfiction our main priority.",
                              }),
                              Object(y.jsxs)(r.b, {
                                className: "common-button",
                                to: "/",
                                children: [
                                  "Set An Appointment ",
                                  Object(y.jsx)("i", {
                                    className: "fas fa-arrow-right ms-2",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                        Object(y.jsx)(j.a, {
                          lg: 7,
                          sm: 12,
                          children: Object(y.jsx)("div", {
                            className: "banner-img",
                            children: Object(y.jsx)("img", {
                              src: _,
                              className: "img-fluid",
                              alt: "",
                            }),
                          }),
                        }),
                      ],
                    }),
                  }),
                }),
              ],
            });
          }),
        Y = c.p + "static/media/facial.27102e00.png",
        J =
          (c(128),
          function () {
            return Object(y.jsx)("div", {
              className: "main-facial-box py-5",
              children: Object(y.jsx)(b.a, {
                children: Object(y.jsx)("div", {
                  className: "py-5 my-3",
                  children: Object(y.jsxs)(o.a, {
                    className: "align-items-center",
                    children: [
                      Object(y.jsx)(j.a, {
                        lg: 7,
                        sm: 12,
                        children: Object(y.jsx)("img", {
                          src: Y,
                          className: "img-fluid",
                          alt: "",
                        }),
                      }),
                      Object(y.jsx)(j.a, {
                        lg: 5,
                        sm: 12,
                        children: Object(y.jsxs)("div", {
                          className: "facial-text",
                          children: [
                            Object(y.jsxs)("h2", {
                              className: "facial-title",
                              children: [
                                "Let Us Handle Your Screen ",
                                Object(y.jsx)("span", {
                                  children: "Professionally",
                                }),
                              ],
                            }),
                            Object(y.jsx)("p", {
                              className: "facial-description",
                              children:
                                "We give a qualityful service as your demand. We Make a team for our salon to do good work and customer satisfiction our main priority.We do stunning and amazing anti age face treatment for woment . Do a good face treatment protect your face from dirty.",
                            }),
                            Object(y.jsx)("div", {
                              children: Object(y.jsxs)(o.a, {
                                children: [
                                  Object(y.jsx)(j.a, {
                                    lg: 6,
                                    children: Object(y.jsxs)("div", {
                                      className: "facial-review",
                                      children: [
                                        Object(y.jsx)("h1", {
                                          children: "500+",
                                        }),
                                        Object(y.jsx)("h4", {
                                          children: "Happy Customer",
                                        }),
                                      ],
                                    }),
                                  }),
                                  Object(y.jsx)(j.a, {
                                    lg: 6,
                                    children: Object(y.jsxs)("div", {
                                      className: "facial-review",
                                      children: [
                                        Object(y.jsx)("h1", {
                                          children: "50+",
                                        }),
                                        Object(y.jsx)("h4", {
                                          children: "Total Service",
                                        }),
                                      ],
                                    }),
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                }),
              }),
            });
          }),
        K =
          (c(129),
          function () {
            var e = Object(M.a)(),
              t = e.register,
              c = e.handleSubmit,
              s = e.reset;
            return Object(y.jsxs)("div", {
              className: "contact-form-main pt-5",
              children: [
                Object(y.jsxs)("h1", {
                  className: "main-title text-center py-5",
                  children: [
                    "Let Us Handle Your ",
                    Object(y.jsx)("br", {}),
                    " Project Professionally",
                  ],
                }),
                Object(y.jsx)("div", {
                  className: "contact-form-box py-5",
                  children: Object(y.jsxs)("form", {
                    onSubmit: c(function (e) {
                      console.log(e), s();
                    }),
                    children: [
                      Object(y.jsxs)(o.a, {
                        children: [
                          Object(y.jsx)(j.a, {
                            lg: 6,
                            children: Object(y.jsx)(
                              "input",
                              Object(B.a)(
                                Object(B.a)(
                                  {
                                    type: "text",
                                    className: "w-100 contact-input",
                                    placeholder: "Enter your first name",
                                  },
                                  t("first_name")
                                ),
                                {},
                                { required: !0 }
                              )
                            ),
                          }),
                          Object(y.jsx)(j.a, {
                            lg: 6,
                            children: Object(y.jsx)(
                              "input",
                              Object(B.a)(
                                Object(B.a)(
                                  {
                                    type: "text",
                                    className: "w-100 contact-input",
                                    placeholder: "Enter your last name",
                                  },
                                  t("last_name")
                                ),
                                {},
                                { required: !0 }
                              )
                            ),
                          }),
                        ],
                      }),
                      Object(y.jsxs)(o.a, {
                        children: [
                          Object(y.jsx)(j.a, {
                            lg: 6,
                            children: Object(y.jsx)(
                              "input",
                              Object(B.a)(
                                Object(B.a)(
                                  {
                                    type: "email",
                                    className: "w-100 contact-input",
                                    placeholder: "Enter your email",
                                  },
                                  t("email")
                                ),
                                {},
                                { required: !0 }
                              )
                            ),
                          }),
                          Object(y.jsx)(j.a, {
                            lg: 6,
                            children: Object(y.jsx)(
                              "input",
                              Object(B.a)(
                                Object(B.a)(
                                  {
                                    type: "number",
                                    className: "w-100 contact-input",
                                    placeholder: "Enter your phone number",
                                  },
                                  t("phone")
                                ),
                                {},
                                { required: !0 }
                              )
                            ),
                          }),
                        ],
                      }),
                      Object(y.jsx)(o.a, {
                        children: Object(y.jsx)(j.a, {
                          children: Object(y.jsx)(
                            "textarea",
                            Object(B.a)(
                              Object(B.a)(
                                {
                                  className: "w-100 contact-textarea",
                                  cols: "15",
                                  rows: "5",
                                  placeholder: "Write your message",
                                },
                                t("description")
                              ),
                              {},
                              { required: !0 }
                            )
                          ),
                        }),
                      }),
                      Object(y.jsx)("div", {
                        className: "text-center",
                        children: Object(y.jsx)("input", {
                          className: "common-button border-0",
                          type: "submit",
                          value: "Send Message",
                        }),
                      }),
                    ],
                  }),
                }),
              ],
            });
          }),
        Q =
          (c(130),
          function (e) {
            var t = e.service,
              c = t._id,
              s = t.title,
              a = t.img,
              i = t.price,
              n = t.description;
            return Object(y.jsx)(j.a, {
              lg: 4,
              sm: 12,
              children: Object(y.jsxs)("div", {
                className: "text-center px-4 py-5 rounded-3 single-services",
                children: [
                  Object(y.jsx)("img", { src: a, alt: "" }),
                  Object(y.jsx)("h2", {
                    className: "service-title pt-4 pb-2",
                    children: s,
                  }),
                  Object(y.jsxs)("h3", {
                    className: "service-price py-2",
                    children: ["$", i],
                  }),
                  Object(y.jsx)("p", {
                    className: "service-descrip",
                    children: n,
                  }),
                  Object(y.jsxs)(r.b, {
                    className: "buy-now-btn",
                    to: "services/".concat(c),
                    children: [
                      "Book Now ",
                      Object(y.jsx)("i", {
                        className: "fas fa-angle-right ms-2",
                      }),
                    ],
                  }),
                  Object(y.jsx)(l.b, {}),
                ],
              }),
            });
          }),
        V = function () {
          var e = E().service;
          return Object(y.jsxs)("div", {
            className: "py-5",
            children: [
              Object(y.jsxs)("h1", {
                className: "main-title text-center py-5",
                children: [
                  "Our Awesome ",
                  Object(y.jsx)("span", { children: "Services" }),
                ],
              }),
              Object(y.jsx)("div", {
                children: Object(y.jsxs)(b.a, {
                  children: [
                    Object(y.jsx)(o.a, {
                      children: e.map(function (e) {
                        return Object(y.jsx)(Q, { service: e }, e._id);
                      }),
                    }),
                    Object(y.jsx)("div", {
                      className: "text-center py-5",
                      children: Object(y.jsxs)(r.b, {
                        to: "/",
                        className: "common-button",
                        children: [
                          "Explore More ",
                          Object(y.jsx)("i", {
                            className: "fas fa-arrow-right ms-2",
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        $ = c.p + "static/media/testimonial-1.a005d801.png",
        X = c.p + "static/media/testimonial-2.315af7bb.png",
        Z = c.p + "static/media/testimonial-3.1775e260.png",
        ee = c(75),
        te =
          (c(131),
          function (e) {
            var t = e.testimonial,
              c = t.name,
              s = t.rating,
              a = t.img,
              i = t.address,
              n = t.description;
            return Object(y.jsx)(j.a, {
              lg: 4,
              sm: 12,
              children: Object(y.jsxs)("div", {
                className: "p-4 text-center main-testi-box rounded-3",
                children: [
                  Object(y.jsxs)("div", {
                    className:
                      "d-flex align-items-center justify-content-center",
                    children: [
                      Object(y.jsx)("div", {
                        children: Object(y.jsx)("img", {
                          className: "testi-img me-3",
                          src: a,
                          alt: "",
                        }),
                      }),
                      Object(y.jsxs)("div", {
                        children: [
                          Object(y.jsxs)("h4", {
                            className: "testi-name",
                            children: [" ", c, " "],
                          }),
                          Object(y.jsxs)("h6", {
                            className: "testi-address",
                            children: [" ", i, " "],
                          }),
                        ],
                      }),
                    ],
                  }),
                  Object(y.jsxs)("p", {
                    className: "testi-description pb-2 pt-5",
                    children: [" ", n, " "],
                  }),
                  Object(y.jsx)("div", {
                    children: Object(y.jsx)(ee.a, {
                      readonly: !0,
                      initialRating: s,
                      emptySymbol: "far fa-star text-warning",
                      fullSymbol: "fas fa-star text-warning",
                    }),
                  }),
                ],
              }),
            });
          }),
        ce = function () {
          var e = [
            {
              id: 1,
              name: "Naspal Patrik",
              address: "CEO,Manpool",
              description:
                "I am Naspal . I am ceo of this company, Our main priority is client satisfiction. We are very patient for our customer",
              rating: 5,
              img: $,
            },
            {
              id: 2,
              name: "Naspal Patrik",
              address: "CEO,Manpool",
              description:
                "I am Naspal . I am ceo of this company, Our main priority is client satisfiction. We are very patient for our customer",
              rating: 5,
              img: X,
            },
            {
              id: 3,
              name: "Naspal Patrik",
              address: "CEO,Manpool",
              description:
                "I am Naspal . I am ceo of this company, Our main priority is client satisfiction. We are very patient for our customer",
              rating: 5,
              img: Z,
            },
          ];
          return Object(y.jsxs)("div", {
            className: "py-5",
            children: [
              Object(y.jsxs)("h1", {
                className: "main-title text-center",
                children: [
                  "Our ",
                  Object(y.jsx)("span", { children: "Testimonials" }),
                ],
              }),
              Object(y.jsx)("div", {
                className: "py-5",
                children: Object(y.jsx)(b.a, {
                  children: Object(y.jsx)(o.a, {
                    children: e.map(function (e) {
                      return Object(y.jsx)(te, { testimonial: e }, e.id);
                    }),
                  }),
                }),
              }),
            ],
          });
        },
        se = function () {
          var e = E().loader;
          return Object(y.jsxs)("div", {
            children: [
              Object(y.jsx)(F, {}),
              Object(y.jsx)(V, {}),
              Object(y.jsx)(J, {}),
              Object(y.jsx)(ce, {}),
              Object(y.jsx)(K, {}),
              e && Object(y.jsx)(U, {}),
            ],
          });
        },
        ae = function () {
          return Object(y.jsx)("div", {
            children: Object(y.jsx)("h1", {
              children: "This is 404 Notfound page",
            }),
          });
        },
        ie = function () {
          return Object(y.jsxs)("div", {
            children: [
              Object(y.jsx)(w, {}),
              Object(y.jsx)("h1", { children: "Services" }),
            ],
          });
        },
        ne = c(76),
        re = c(141),
        le = c.p + "static/media/google.e12914ad.png",
        oe =
          (c(132),
          function () {
            var e = Object(M.a)(),
              t = e.register,
              c = e.reset,
              s = e.handleSubmit,
              a = E(),
              i = a.HandleGoogleSignIn,
              n = a.HandleLogInEmailAndPassword,
              o = a.setError,
              j = a.loader,
              d = a.error,
              b = Object(l.h)();
            return Object(y.jsxs)("div", {
              className: "pb-5",
              children: [
                Object(y.jsx)(w, {}),
                Object(y.jsx)("h1", {
                  className: "main-title text-center py-5 fw-bold",
                  children: "Login Here",
                }),
                Object(y.jsxs)("div", {
                  onBlur: function () {
                    o("");
                  },
                  className: "log-in-form-box",
                  children: [
                    Object(y.jsxs)("form", {
                      onSubmit: s(function (e) {
                        console.log(e), n(e.email, e.password, b), c();
                      }),
                      children: [
                        Object(y.jsx)("div", {
                          className: "input-form-border",
                          children: Object(y.jsx)(ne.a, {
                            controlId: "floatingInput",
                            label: "Enter your email",
                            children: Object(y.jsx)(
                              re.a.Control,
                              Object(B.a)(
                                Object(B.a)(
                                  {
                                    placeholder: "enter your email",
                                    type: "email",
                                  },
                                  t("email")
                                ),
                                {},
                                {
                                  className: "login-input",
                                  autoComplete: "current-email",
                                }
                              )
                            ),
                          }),
                        }),
                        Object(y.jsx)("div", {
                          className: "input-form-border",
                          children: Object(y.jsx)(ne.a, {
                            controlId: "floatingPassword",
                            label: "Enter your Password",
                            children: Object(y.jsx)(
                              re.a.Control,
                              Object(B.a)(
                                Object(B.a)(
                                  {
                                    type: "password",
                                    placeholder: "enter your passoword",
                                  },
                                  t("password")
                                ),
                                {},
                                {
                                  className: "login-input",
                                  autoComplete: "current-password",
                                }
                              )
                            ),
                          }),
                        }),
                        Object(y.jsx)("p", {
                          className: "py-2 text-danger",
                          children: d,
                        }),
                        Object(y.jsx)("input", {
                          type: "submit",
                          value: "Login",
                          className: "common-button border-0 w-100",
                        }),
                      ],
                    }),
                    Object(y.jsxs)("p", {
                      className: "create-para text-center",
                      children: [
                        "Don't Have An Account ?",
                        " ",
                        Object(y.jsx)(r.b, {
                          className: "create-link",
                          to: "/register",
                          children: "Create An Account",
                        }),
                      ],
                    }),
                    Object(y.jsxs)("div", {
                      onClick: i,
                      className: "d-flex align-items-center google-button",
                      children: [
                        Object(y.jsx)("img", {
                          className: "google-img",
                          src: le,
                          alt: "",
                        }),
                        Object(y.jsx)("h4", {
                          className: "text-center",
                          children: "Continue With Google",
                        }),
                      ],
                    }),
                  ],
                }),
                j && Object(y.jsx)(U, {}),
              ],
            });
          }),
        je = function () {
          var e = Object(M.a)(),
            t = e.register,
            c = e.reset,
            s = e.handleSubmit,
            a = E(),
            i = a.HandleGoogleSignIn,
            n = a.HandleRegisterUser,
            o = a.error,
            j = a.setError,
            d = a.loader,
            b = Object(l.h)();
          return Object(y.jsxs)("div", {
            className: "pb-5",
            children: [
              Object(y.jsx)(w, {}),
              Object(y.jsx)("h1", {
                className: "main-title text-center py-5 fw-bold",
                children: "Create An Account",
              }),
              Object(y.jsxs)("div", {
                onBlur: function () {
                  j("");
                },
                className: "log-in-form-box",
                children: [
                  Object(y.jsxs)("form", {
                    onSubmit: s(function (e) {
                      e.password1.length >= 6 && e.password2.length >= 6
                        ? e.password1 === e.password2
                          ? (n(e.email, e.password2, e.name, b), c())
                          : j("Password did not match try again")
                        : j("Please Give Atleast 6 Character Passoword");
                    }),
                    children: [
                      Object(y.jsx)("div", {
                        className: "input-form-border",
                        children: Object(y.jsx)(ne.a, {
                          controlId: "floatingInput",
                          label: "Enter your Name",
                          children: Object(y.jsx)(
                            re.a.Control,
                            Object(B.a)(
                              Object(B.a)(
                                {
                                  placeholder: "enter your name",
                                  type: "text",
                                },
                                t("name")
                              ),
                              {},
                              {
                                className: "login-input",
                                autoComplete: "current-name",
                              }
                            )
                          ),
                        }),
                      }),
                      Object(y.jsx)("div", {
                        className: "input-form-border",
                        children: Object(y.jsx)(ne.a, {
                          controlId: "floatingPassword",
                          label: "Enter your Email",
                          children: Object(y.jsx)(
                            re.a.Control,
                            Object(B.a)(
                              Object(B.a)(
                                {
                                  type: "email",
                                  placeholder: "enter your email",
                                },
                                t("email")
                              ),
                              {},
                              {
                                className: "login-input",
                                autoComplete: "current-email",
                              }
                            )
                          ),
                        }),
                      }),
                      Object(y.jsx)("div", {
                        className: "input-form-border",
                        children: Object(y.jsx)(ne.a, {
                          controlId: "floatingPassword",
                          label: "Type your Password",
                          children: Object(y.jsx)(
                            re.a.Control,
                            Object(B.a)(
                              Object(B.a)(
                                {
                                  type: "password",
                                  placeholder: "enter your password",
                                },
                                t("password1")
                              ),
                              {},
                              {
                                className: "login-input",
                                autoComplete: "current-password",
                              }
                            )
                          ),
                        }),
                      }),
                      Object(y.jsx)("div", {
                        className: "input-form-border",
                        children: Object(y.jsx)(ne.a, {
                          controlId: "floatingPassword",
                          label: "Re-type your Password",
                          children: Object(y.jsx)(
                            re.a.Control,
                            Object(B.a)(
                              Object(B.a)(
                                {
                                  type: "password",
                                  placeholder: "enter your password",
                                },
                                t("password2")
                              ),
                              {},
                              {
                                className: "login-input",
                                autoComplete: "current-password",
                              }
                            )
                          ),
                        }),
                      }),
                      Object(y.jsx)("p", {
                        className: "text-danger",
                        children: o,
                      }),
                      Object(y.jsx)("input", {
                        type: "submit",
                        value: "Create An Account",
                        className: "common-button border-0 w-100",
                      }),
                    ],
                  }),
                  Object(y.jsxs)("p", {
                    className: "create-para text-center",
                    children: [
                      "Already Have An Account ?",
                      " ",
                      Object(y.jsx)(r.b, {
                        className: "create-link",
                        to: "/login",
                        children: "Login",
                      }),
                    ],
                  }),
                  Object(y.jsxs)("div", {
                    onClick: i,
                    className: "d-flex align-items-center google-button",
                    children: [
                      Object(y.jsx)("img", {
                        className: "google-img",
                        src: le,
                        alt: "",
                      }),
                      Object(y.jsx)("h4", {
                        className: "text-center",
                        children: "Continue With Google",
                      }),
                    ],
                  }),
                ],
              }),
              d && Object(y.jsx)(U, {}),
            ],
          });
        },
        de = c(9),
        be = ["children"],
        me = function (e) {
          var t = e.children,
            c = (Object(de.a)(e, be), E()),
            s = c.user,
            a = c.loader;
          console.log(s);
          var i = Object(l.g)();
          return a
            ? Object(y.jsx)(U, {})
            : (null === s || void 0 === s ? void 0 : s.email)
            ? t
            : Object(y.jsx)(l.a, { to: "/login", state: { from: i } });
        },
        Oe =
          (c(133),
          function () {
            return Object(y.jsxs)("footer", {
              className: "footer-main-box py-5 text-center",
              children: [
                Object(y.jsx)(b.a, {
                  children: Object(y.jsx)("div", {
                    className: "pt-5",
                    children: Object(y.jsxs)(o.a, {
                      children: [
                        Object(y.jsx)(j.a, {
                          lg: 3,
                          sm: 12,
                          children: Object(y.jsx)("div", {
                            className: "footer-location",
                            children: Object(y.jsxs)("p", {
                              className: "text-start",
                              children: [
                                Object(y.jsx)("i", {
                                  className: "fas fa-map-marker-alt me-2",
                                }),
                                "H#1200,(19th,floor),",
                                Object(y.jsx)("br", {}),
                                "Road #22,Mirpur Dohs,Mahakhali,",
                                Object(y.jsx)("br", {}),
                                "Dhaka,Bangladesh.",
                              ],
                            }),
                          }),
                        }),
                        Object(y.jsx)(j.a, {
                          lg: 3,
                          sm: 12,
                          children: Object(y.jsxs)("div", {
                            className: "footer-link",
                            children: [
                              Object(y.jsx)("h3", {
                                className: "footer-title",
                                children: "Company",
                              }),
                              Object(y.jsxs)("ul", {
                                children: [
                                  Object(y.jsx)("li", { children: "About" }),
                                  Object(y.jsx)("li", { children: "Project" }),
                                  Object(y.jsx)("li", { children: "Our Team" }),
                                  Object(y.jsx)("li", {
                                    children: "Terms And Condition",
                                  }),
                                  Object(y.jsx)("li", {
                                    children: "Submit Listening",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                        Object(y.jsx)(j.a, {
                          lg: 3,
                          sm: 12,
                          children: Object(y.jsxs)("div", {
                            className: "footer-link",
                            children: [
                              Object(y.jsx)("h3", {
                                className: "footer-title",
                                children: "Qucik Links",
                              }),
                              Object(y.jsxs)("ul", {
                                children: [
                                  Object(y.jsx)("li", { children: "Home" }),
                                  Object(y.jsx)("li", { children: "Contact" }),
                                  Object(y.jsx)("li", { children: "Rentals" }),
                                  Object(y.jsx)("li", { children: "Sales" }),
                                  Object(y.jsx)("li", { children: "Our Blog" }),
                                ],
                              }),
                            ],
                          }),
                        }),
                        Object(y.jsx)(j.a, {
                          lg: 3,
                          sm: 12,
                          children: Object(y.jsxs)("div", {
                            className: "footer-location",
                            children: [
                              Object(y.jsx)("h3", {
                                className: "footer-title",
                                children: "About Us",
                              }),
                              Object(y.jsx)("p", {
                                children:
                                  "We give a qualityful service as your demand. We Make a team for our salon to do good work and customer satisfiction our main priority.",
                              }),
                              Object(y.jsx)("div", {
                                className: "footer-social",
                                children: Object(y.jsxs)("ul", {
                                  children: [
                                    Object(y.jsx)("li", {
                                      children: Object(y.jsx)("i", {
                                        className: "fab fa-facebook-square",
                                      }),
                                    }),
                                    Object(y.jsx)("li", {
                                      children: Object(y.jsx)("i", {
                                        className: "fab fa-instagram-square",
                                      }),
                                    }),
                                    Object(y.jsx)("li", {
                                      children: Object(y.jsx)("i", {
                                        className: "fab fa-linkedin",
                                      }),
                                    }),
                                    Object(y.jsx)("li", {
                                      children: Object(y.jsx)("i", {
                                        className: "fab fa-youtube",
                                      }),
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  }),
                }),
                Object(y.jsx)("div", {
                  className: "text-center pt-5",
                  children: Object(y.jsx)("p", {
                    className: "m-0",
                    children: "\xa9 All right reserved 2021 || Selim",
                  }),
                }),
              ],
            });
          });
      var ue = function () {
          return Object(y.jsx)(A, {
            children: Object(y.jsxs)(r.a, {
              children: [
                Object(y.jsxs)(l.e, {
                  children: [
                    Object(y.jsx)(l.c, {
                      path: "/",
                      element: Object(y.jsx)(se, {}),
                    }),
                    Object(y.jsx)(l.c, {
                      path: "/home",
                      element: Object(y.jsx)(se, {}),
                    }),
                    Object(y.jsx)(l.c, {
                      path: "/login",
                      element: Object(y.jsx)(oe, {}),
                    }),
                    Object(y.jsx)(l.c, {
                      path: "/register",
                      element: Object(y.jsx)(je, {}),
                    }),
                    Object(y.jsx)(l.c, {
                      path: "/services",
                      element: Object(y.jsx)(ie, {}),
                    }),
                    Object(y.jsx)(l.c, {
                      path: "/services/:id",
                      element: Object(y.jsx)(me, {
                        children: Object(y.jsx)(z, {}),
                      }),
                    }),
                    Object(y.jsx)(l.c, {
                      path: "/dashboard/*",
                      element: Object(y.jsx)(me, {
                        children: Object(y.jsx)(R, {}),
                      }),
                    }),
                    Object(y.jsx)(l.c, {
                      path: "/404",
                      element: Object(y.jsx)(ae, {}),
                    }),
                    Object(y.jsx)(l.c, {
                      path: "*",
                      element: Object(y.jsx)(l.a, { replace: !0, to: "/404" }),
                    }),
                  ],
                }),
                Object(y.jsx)(Oe, {}),
              ],
            }),
          });
        },
        he = function (e) {
          e &&
            e instanceof Function &&
            c
              .e(3)
              .then(c.bind(null, 142))
              .then(function (t) {
                var c = t.getCLS,
                  s = t.getFID,
                  a = t.getFCP,
                  i = t.getLCP,
                  n = t.getTTFB;
                c(e), s(e), a(e), i(e), n(e);
              });
        };
      n.a.render(
        Object(y.jsx)(a.a.StrictMode, { children: Object(y.jsx)(ue, {}) }),
        document.getElementById("root")
      ),
        he();
    },
    82: function (e, t, c) {},
  },
  [[134, 1, 2]],
]);
//# sourceMappingURL=main.9e3323e3.chunk.js.map
