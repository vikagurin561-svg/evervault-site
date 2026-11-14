function pick(btns,btn){btns.forEach(b=>b.classList.toggle("active",b===btn))}
const $=id=>document.getElementById(id);
const tabs={pci:["Encrypt card data and streamline PCI DSS compliance","Using Evervault to encrypt credit card data reduces the burden of becoming PCI compliant, so you can demonstrate PCI compliance to partners in days, rather than months. Save $100k+ and months of engineering time."],
eaas:["Encryption as a Service","Encrypt any sensitive field with a single API call. Evervault manages the keys so you never maintain cryptographic infrastructure."],
crypto:["Crypto Custody","Keep private keys inside hardened secure enclaves, with policies that control exactly when they can be used."]};
const tb=[...document.querySelectorAll(".tabs button")];
tb.forEach(b=>b.onclick=()=>{pick(tb,b);$("sol-title").textContent=tabs[b.dataset.t][0];$("sol-text").textContent=tabs[b.dataset.t][1]});
const prim={Relay:["An encryption proxy which can be configured to encrypt or decrypt data within a network request. No additional configuration required.","Read the docs"],
Functions:["Run code on decrypted data inside a secure enclave, without exposing plaintext to your own servers.","Read the docs"],
"UI Components":["Drop-in inputs that encrypt sensitive data in the browser before it touches your backend.","Read the docs"],
Cages:["Deploy backend code into isolated, attestable secure enclaves with a single command.","Read the docs"]};
const pb=[...document.querySelectorAll(".pills button")];
pb.forEach(b=>b.onclick=()=>{const k=b.dataset.p;pick(pb,b);$("prim-title").textContent=k;$("prim-text").textContent=prim[k][0]});
const q=["“Evervault makes data security simple for developers.”","“Evervault lets our team ship secure products without slowing down.”","“Compliance went from months of work to a few days.”"];
const qb=[...document.querySelectorAll("#testimonials button")];
qb.forEach((b,i)=>b.onclick=()=>{pick(qb,b);$("q-text").textContent=q[i]});
