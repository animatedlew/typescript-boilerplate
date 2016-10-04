import * as _ from "lodash"
import { Promise } from "es6-promise"
let p = new Promise<string>((resolve, reject) => resolve("ok!"));
p.then(msg => document.body.innerHTML = msg);
console.log(_.range(10).map(n => (n * 2).toString()).join("\n"));
