const main = () => {
  document.querySelector("#result").value = "0";
  document.querySelectorAll("td")[2].addEventListener("click", () => {
    th = document.querySelector("#result").value = "0";
  });
  document.querySelectorAll("td")[3].addEventListener("click", () => {
    ta = document.querySelector("#result").value;
    document.querySelector("#result").value = ta.substr(0, ta.length - 1);
  });

  var th = document.querySelector("#result").value;

  const show = (a) => {
    if (th == 0) {
      th = document.querySelector("#result").value = `${a}`;
    } else {
      th = document.querySelector("#result").value += `${a}`;
    }
  };
  // Rifat
  for (let index = 4; index < 6; index++) {
    var td = document.querySelectorAll("td");
    td[index].addEventListener("click", () => {
      let text = td[index].innerText;
      show(text);
    });
  }

  document.getElementById("pow").addEventListener("click", () => {
    var p = document.querySelector("#result").value;

    document.getElementById("result").value = Math.pow(p, 2);
  });
  td[6].addEventListener("click", () => {
    let s = Math.sqrt(th);
    document.getElementById("result").value = s;
  });

  for (let index = 7; index < 20; index++) {
    var td = document.querySelectorAll("td");
    td[index].addEventListener("click", () => {
      let text = td[index].innerText;
      show(text);
    });
  }
  for (let index = 21; index < 23; index++) {
    var td = document.querySelectorAll("td");
    td[index].addEventListener("click", () => {
      let text = td[index].innerText;
      show(text);
    });
  }

  const power = () => {
    td[20].addEventListener("click", () => {
      let o = td[20].innerHTML;
      show(o);
    });
    td[23].addEventListener("click", () => {
      let p = document.querySelector("#result").value;

      // document.querySelector("#result").value = Math.pow()
    });

    td[0].addEventListener("click", () => {
      let c = td[0].innerHTML;
      show(c);
    });
    td[23].addEventListener("click", () => {
      var p = document.querySelector("#result").value;

      let T = p.indexOf("⋀");

      let a = T;

      var sl = p.slice(0, T);

      T += 1;

      var s = p.slice(T, (T += 5));

      let f = p.indexOf("⨰");
      let g = p.indexOf("⨰");

      f += 1;
      g -= 2;

      var s1 = parseInt(p.slice(f, (f = +9)));
      var sl1 = p.slice(g, 2);
      console.log(sl1);

      if (sl1 == "10") {
        let k = Math.pow(sl1, s1);

        document.querySelector("#result").value = k;
      }

      if (a > 0) {
        document.querySelector("#result").value = Math.pow(sl, s);
      }
    });
  };

  power();

  document.getElementById("solve").addEventListener("click", () => {
    var x = document.getElementById("result").value;

    try {
      var y = eval(x);

      document.getElementById("result").value = y;
    } catch (err) {
      document.getElementById("result").value = err.message;
    }
  });
};

main();
