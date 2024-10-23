function delay(num)
{
    return new Promise(function (resolve,reject)
    {
        setTimeout(() => {
            resolve('added delay');
        }, num);
    });
}

async function delayprob()
{
    console.log("action1")
    await delay(2000)
    console.log("action2")

    await delay(2000)
    console.log("action3")
}



delayprob();