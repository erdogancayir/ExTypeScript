import { text } from "stream/consumers";

function hello2()
{
  return new Promise(resolve => resolve("Hello World2"));
}

const text2 = hello2();
text2.then(response => console.log(response));

// bu kullanım yerine async kullanarak promise yapmış oluruz.

async function _async()
{
  return "async promise"
}

const __async = _async();
__async.then(response => console.log(response));

//AWait sadece async fonksiyonlarda çalışır.

__async.then(response => console.log(response));
