var clock = setInterval(clocktiming, 1000);
      function clocktiming() {
        var d = new Date();
        var om = d.toLocaleTimeString();
        document.getElementById('showclock').innerHTML = om;
      }