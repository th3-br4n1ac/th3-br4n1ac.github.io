function delay(ms)
{
    return new Promise(resolve => {
        setTimeout(resolve,ms);
    });
}
function foo(i)
{
    var str = "Waiting to pair";
    for(let a = 0;a<i;a++)
    {
        str += ".";
    }
    document.getElementById("titletext").innerHTML = str;
}

async function openchat()
{
    //make chat button dissapear
    document.getElementById("bb").style.display = "none";
    //make chat box appear
    document.getElementById("cb").style.display = "block";
    var b = Math.floor(Math.random() * 2); // random number, 0 or 1
    var c = Math.floor(Math.random()*5 + 2);
    let i = 0;
    document.getElementById("backandforth").style.display = "none";
    document.getElementById("input").style.display = "none";

    for(let a = 0;a<c;a++)
    {
        foo(i);
        await delay(1000);
        i++;
        if(i == 4)
        {
            i = 0;
        }
    }
    document.getElementById("titletext").innerHTML = "You are chatting with Blake";
    document.getElementById("input").style.display = "block";
    await delay(i*1000 + 1000);
    document.getElementById("backandforth").style.display = "block";
}

function closechat()
{
    //make chat box dissapear
    document.getElementById("cb").style.display = "none";
    //make close chat button dissapear
    document.getElementById("bb").style.display = "block";
    document.getElementById("backandforth").style.display = "none";
    document.getElementById("input").style.display = "none";
    clearTimeout();
}
