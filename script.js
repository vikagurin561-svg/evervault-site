const $=id=>document.getElementById(id);
const on=(list,el)=>list.forEach(b=>b.classList.toggle("on",b===el));
const tabs={pci:["Encrypt card data and streamline PCI DSS compliance","Using Evervault to encrypt credit card data reduces the burden of becoming PCI compliant, so you can demonstrate PCI compliance to partners in days, rather than months. Save $100k+ and months of engineering time."],
eaas:["Encryption as a Service","Encrypt any sensitive field with a single API call. Evervault manages the keys, so you never have to build or maintain cryptographic infrastructure."],
crypto:["Secure custody for crypto keys","Keep private keys and wallet secrets inside hardened secure enclaves, with policies that control exactly when they can be used."]};
const tb=[...document.querySelectorAll(".tabs button")];
tb.forEach(b=>b.onclick=()=>{on(tb,b);$("st").textContent=tabs[b.dataset.t][0];$("sp").textContent=tabs[b.dataset.t][1]});
const prim={Relay:"An encryption proxy which can be<br>configured to encrypt or decrypt data within<br>a network request. No additional<br>configuration required.",
Functions:"Run code on decrypted data inside a secure enclave,<br>without ever exposing plaintext to your own servers.",
"UI Components":"Drop-in inputs that encrypt sensitive data in the browser before it ever touches your backend.",
Cages:"Deploy backend code into isolated, attestable secure enclaves with a single command."};
const pb=[...document.querySelectorAll(".pills button")];
pb.forEach(b=>b.onclick=()=>{on(pb,b);$("pt").textContent=b.dataset.p;$("pp").innerHTML=prim[b.dataset.p]});
const qb=[...document.querySelectorAll("#testimonials button")];
const logos=[$("qlogo").innerHTML,"<span>LinkedIn</span>","<em>Ness</em>"];
qb.forEach((b,i)=>b.onclick=()=>{on(qb,b);$("qlogo").innerHTML=logos[i]});
