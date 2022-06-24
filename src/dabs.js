var Dabs = {
  ver: 1,
  lca: false,
  update() {
    Dabs.e = document.querySelectorAll("[data-tab]");
    Dabs.c = Dabs.c || false;
    Dabs.t = Dabs.t || {};
    if(Dabs.c != false) {
      if(window.Dage == null) {
        console.warn("Dage is not defined, view https://github.com/dlvdls18/Dage for installation");
      } else {
        if(Dabs.c == true) {
          Dabs.lca = true;
          var o = {};
          var i_ = 0;
          Dage.p.forEach(function(p) {
            o[`${i_}`] = p.getAttribute("data-page");
            i_++;
          });
          Dabs.c = o;
        }
        if(Dage.a == null) Dage.navigate(Dabs.c["0"]);
      }
    }
    Dabs.e.forEach(function(el) {
      var n = el.getAttribute("data-tab");
      var c = el.querySelectorAll(".dab");
      var ai_ = 0;
      var aii = 0;
      c.forEach(function(d) {
        if(d.getAttribute("data-active") != null) ai_ = aii;
        aii++;
      });
      var ha = false;
      if(Dabs.t[n] != null) ha = true;
      Dabs.t[n] = {
        c,
        a: ha ? Dabs.t[n].a : {
          t: el.querySelector(".dab[data-active]"),
          i: ai_
        } || {
          i: -1,
          t: null
        },
        ac: el.querySelectorAll(".dab[data-action]"),
        d:el.querySelectorAll("[data-disabled]"),
        $: ha ? Dabs.t[n].$ : {},
        $$: ha ? Dabs.t[n].$$ : function() {},
        a$: ha ? Dabs.t[n].a$ : {}
      }
      Dabs.t[n].a.t.setAttribute("data-active", "");
      el.selectTab = function(i) {
        Dabs.selectTab(this.getAttribute("data-tab"), i);
      }
      el.getActiveIndex = function() {
        return Dabs.getActiveIndex(this.getAttribute("data-tab"));
      }
      el.getActiveTab = function() {
        return Dabs.getActiveTab(this.getAttribute("data-tab"));
      }
      el.on = function(i, f) {
        Dabs.on(this.getAttribute("data-tab"),i,f);
      }
      el.change = function(f) {
        Dabs.change(this.getAttribute("data-tab"),f);
      }
      el.action = function(i,f) {
        Dabs.action(this.getAttribute("data-tab"),i,f);
      }
      var i = 0;
      Dabs.t[n].c.forEach(function(e) {
        e.setAttribute("data-parent", n);
        e.setAttribute("data-index", i);
        e.onclick = function() {
          var t = this;
          var p = t.getAttribute("data-parent");
          var i = parseInt(t.getAttribute("data-index"));
          if(t.getAttribute("data-disabled") != null || Dabs.t[p].a.i == i) return;
          if(t.getAttribute("data-action") != null) {
            if(Dabs.t[p].a$[`${i}`] != null) Dabs.t[p].a$[`${i}`](i);
            return;
          }
          Dabs.t[p].$$(i);
          if(Dabs.t[p].$[`${i}`] != null) Dabs.t[p].$[`${i}`](t);
          Dabs.selectTab(p,i);
        }
        i++;
      });
    });
  },
  selectTab(t,i) {
    var d = Dabs.t[t];
    d.a = {t,i};
    var e = d.c[i];
    d.c.forEach(function(el) {
      el.removeAttribute("data-active");
    });
    e.setAttribute("data-active", "");
    d.a = {i,t:e};
    if(typeof Dabs.c == "object") {
      for(var dci in Dabs.c) {
        if(parseInt(dci) == i) Dage.navigate(Dabs.c[dci]);
      }
    }
    Dabs.update();
  },
  getActiveIndex(tab) {
    return Dabs.t[tab].a.i;
  },
  getActiveTab(tab) {
    return Dabs.t[tab].a.t;
  },
  on(tab, i, f) {
    Dabs.t[tab].$[i] = f;
  },
  off(tab, i) {
    Dabs.t[tab].$[i] = undefined;
  },
  change(tab, f) {
    Dabs.t[tab].$$ = f;
  },
  action(tab, i, f) {
    Dabs.t[tab].a$[i] = f;
  },
  connect(conf) {
    if(conf == null) {
      Dabs.c = true;
    } else {
      Dabs.c = conf;
    }
    Dabs.update();
  },
  disconnect() {
    Dabs.c = false;
    Dabs.lca = false;
    Dabs.update();
  },
  disableTab(tab,i) {
    Dabs.t[tab].c[i].t.setAttribute("data-disabled", "");
    Dabs.update
  },
  enableTab(tab,i) {
    
  }
}

Dabs.update();