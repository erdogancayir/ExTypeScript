import { domainToUnicode } from "url"

function hello () {
    return 'hello'
}

export default hello // ** import hello from "./modul.js"; **  boyle almanı  saglar. default da ismin onemi kalmaz. hello yerine baska da olur.

// app2 icin default olmadan export ornegi
export function world() {
    return "say"
}

export let str = name => `hello ${name}`;


/* export ları en son yapmak istersen.

export {
    world,
    str
}

*/