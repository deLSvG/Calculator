var btn = document.getElementById ("theme_btn");
var link = document.getElementById ("theme_link");

btn.addEventListener ("click", function () { ChangeTheme(); });

function ChangeTheme()
{
    let lightT = "./light.css";
    let darkT = "./dark.css";

    var currT = link.getAttribute("href");
    var theme = "";

    if (currT == lightT)
    {
        currT = darkT;
        theme = "dark";
        document.getElementById("theme_btn").innerHTML = "LUMOS";
    }
    else
    {
        currT = lightT;
        theme = "light";
        document.getElementById("theme_btn").innerHTML = "NOX";
    }

    link.setAttribute ("href", currT);

    Save(theme);
}


