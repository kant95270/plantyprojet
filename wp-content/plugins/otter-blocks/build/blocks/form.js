!function(){"use strict";let e=null,t="permanent";const o=e=>{const t=[...e?.querySelectorAll(":scope > .otter-form__container .wp-block-themeisle-blocks-form")];return[...e?.querySelectorAll(":scope > .otter-form__container .wp-block-themeisle-blocks-form-input, :scope > .otter-form__container .wp-block-themeisle-blocks-form-textarea, :scope > .otter-form__container .wp-block-themeisle-blocks-form-multiple-choice, :scope > .otter-form__container .wp-block-themeisle-blocks-form-file, :scope > .otter-form__container .wp-block-themeisle-blocks-form-hidden-field, :scope > .otter-form__container .wp-block-themeisle-blocks-form-stripe-field")].filter((e=>!t?.some((t=>t?.contains(e)))))},i=(e,t,o,i,s)=>{e.then((e=>e.json())).then((e=>{const r=e;if("0"===r?.code||"1"===r?.code||r?.success)o?.(r,t);else{let e="";"110"===r.code?t.setMsg(r?.reasons?.join(""),"error").show():"12"===r.code||"13"===r.code?t.pullMsg("invalid-file","error").show():0<r?.displayError?.length?(e=r?.displayError,t.setMsg(e,"error").show()):t.setMsg(r?.reasons?.join(""),"error").show(),i?.(r,t),console.error(`(${r?.code}) ${r?.reasons?.join("")}`)}s?.()}))?.catch((e=>{console.error(e),t.pullMsg("try-again","error").show(),i?.(e,t)}))},s=e=>{const t=document.createElement("span");return t.classList.add("spinner"),{show:()=>{e.appendChild(t)},hide:()=>{e.removeChild(t)}}},r=async(r,n,l)=>{const a=r?.id,c={},{formFieldsData:d}=await(async e=>{const i=[{label:window?.themeisleGutenbergForm?.messages["form-submission"]||"Form submission from",value:window.location.href,metadata:{position:0}}],s=o(e);return s?.forEach(((e,o)=>{const s=e.querySelector(".otter-form-input-label"),r=(null!=s?s:e).querySelector(".otter-form-input-label__label, .otter-form-textarea-label__label"),n=`(Field ${o+1})`;let l,a,c,d=`${n} ${(null!=r?r:s)?.innerHTML?.replace(/<[^>]*>?/gm,"")}`,m={};const{id:u}=e,h=e.querySelector('.otter-form-input:not([type="checkbox"], [type="radio"], [type="file"], [type="hidden"]), .otter-form-textarea-input');if(null!==h)l=h?.value,a=h?.type,c=h?.name;else{const s=e.querySelector("select");c=s?.name;const r=e.querySelector('input[type="file"]'),h=e.querySelector('input[type="hidden"]'),p=e.classList.contains("wp-block-themeisle-blocks-form-stripe-field");if(r){const e=r?.files,t=r?.name;for(let s=0;s<e.length;s++)i.push({label:d,value:`${e[s].name} (${(e[s].size/1048576).toFixed(4)} MB)`,type:r.type,id:u,metadata:{version:1,name:e[s].name,size:e[s].size,file:e[s],fieldOptionName:r?.dataset?.fieldOptionName,position:o+1,mappedName:t}})}else if(s)l=[...s.selectedOptions].map((e=>e?.label))?.filter((e=>Boolean(e))).join(", "),a="multiple-choice";else if(h){const e=h?.dataset?.paramName;c=h?.name,e&&(l=new URLSearchParams(window.location.search).get(e),a="hidden")}else if(p)d=`${n} ${e.querySelector(".o-stripe-checkout-description h3")?.innerHTML?.replace(/<[^>]*>?/gm,"")}`,l=e.querySelector(".o-stripe-checkout-description h5")?.innerHTML?.replace(/<[^>]*>?/gm,""),a="stripe-field",c=e.name,m={fieldOptionName:e?.dataset?.fieldOptionName},t="temporary";else{const t=e.querySelectorAll(".o-form-multiple-choice-field > label"),o=e.querySelectorAll(".o-form-multiple-choice-field > input");c=o[0]?.name,l=[...t].filter(((e,t)=>o[t]?.checked)).map((e=>e.innerHTML)).join(", "),a="multiple-choice"}}l&&i.push({label:d||"(No label)",value:l,type:a,id:u,metadata:{...m,version:1,position:o+1,mappedName:c}})})),{formFieldsData:i}})(r),m=2>d?.length,u=function(e){const t=`.protection #${e.id||""}_nonce_field`;return e.querySelector(t)?.value}(r),h=r?.classList?.contains("has-captcha"),p=a&&window.themeisleGutenberg?.tokens?.[a]?.token,f=s(n);if(m)return n.disabled=!1,void f.hide();const b=function(e){let t=!0;const i=o(e);for(const e of i)if(e.classList.contains("wp-block-themeisle-blocks-form-input")){const o=e.querySelector("input");if(!o?.checkValidity()){o?.reportValidity(),t=!1;break}}else if(e.classList.contains("wp-block-themeisle-blocks-form-textarea")){const o=e.querySelector("textarea");if(!o?.checkValidity()){o?.reportValidity(),t=!1;break}}else if(e.classList.contains("wp-block-themeisle-blocks-form-multiple-choice")){const o=e.querySelector("select");if(o?.hasAttribute("required")&&!o?.checkValidity()){o?.reportValidity(),t=!1;break}const i=e.querySelectorAll('.o-form-multiple-choice-field input[type="radio"]');if(i?.length&&i[0]?.hasAttribute("required")&&![...i].some((e=>e.checked))){i[0]?.reportValidity(),t=!1;break}const s=e.querySelectorAll('.o-form-multiple-choice-field input[type="checkbox"]');if(s?.length&&s[0]?.hasAttribute("required")&&![...s].some((e=>e.checked))){s[0]?.reportValidity(),t=!1;break}}else if(e.classList.contains("wp-block-themeisle-blocks-form-file")){const o=e.querySelector("input");if(!o?.checkValidity()){o?.reportValidity(),t=!1;break}}return t}(r);if(h&&!p){const e=window.hasOwnProperty("grecaptcha")?"check-captcha":"captcha-not-loaded";l.pullMsg(e,"error").show()}if(!b||h&&!p)n.disabled=!1,n.removeChild(f);else{var w,g;c.formInputsData=d,p&&(c.token=window.themeisleGutenberg?.tokens?.[a].token),""!==r?.dataset?.emailSubject&&(c.emailSubject=r?.dataset?.emailSubject),r?.dataset?.optionName&&(c.formOption=r?.dataset?.optionName),r?.id&&(c.formId=r?.id),u&&(c.nonceValue=u),c.antiSpamTime=Date.now()-(null!==(w=e)&&void 0!==w?w:Date.now()),c.antiSpamHoneyPot=Boolean(null!==(g=r.querySelector(":scope > .otter-form__container > .protection .o-anti-bot")?.checked)&&void 0!==g&&g),c.postUrl=window.location.href,c.postId=(()=>{const e=document.querySelector("body"),t=e?.classList?.value?.split(" "),o=t?.find((e=>e.includes("postid-")||e.includes("page-id-")));if(o){const e=o.split("-").pop();if(e)return parseInt(e)}return 0})(),r.classList.contains("can-submit-and-subscribe")&&(c.action="submit-subscribe",c.consent=r.querySelector(".otter-form-consent input")?.checked||!1);const o=(window?.themeisleGutenbergForm?.root||window.location.origin+"/wp-json/")+"otter/v1/form/frontend",s=(e=>{var t=new FormData;return e?.payload?.formInputsData?.forEach(((o,i)=>{if("file"===o.type){let s="file__"+o.metadata.position+"_"+i;t.append(s,o.metadata.file),e.payload.formInputsData[i].metadata.file=void 0,e.payload.formInputsData[i].metadata.data=s}})),t.append("form_data",JSON.stringify(e)),t})({handler:"submit",payload:c});try{const e=fetch(o,{method:"POST",headers:{"X-WP-Nonce":window?.themeisleGutenbergForm?.nonce,"O-Form-Save-Mode":t},credentials:"include",body:s});f.show(),i(e,l,((e,t)=>{if(0<e?.frontend_external_confirmation_url?.length)return void window.open(e.frontend_external_confirmation_url,"_blank");const o=e?.submitMessage?e.submitMessage:"Success";t.setMsg(o).show(),r?.querySelector("form")?.reset(),0<e?.redirectLink?.length&&(r.setAttribute("data-redirect",e.redirectLink),setTimeout((()=>{window.location.href=e.redirectLink}),1e3))}),((e,t)=>{}),(()=>{window.themeisleGutenberg?.tokens?.[a].reset&&window.themeisleGutenberg?.tokens?.[a].reset(),n.disabled=!1,f.hide()}))}catch(e){console.error(e),l.pullMsg("try-again","error").show(),n.disabled=!1,f.hide()}}};var n;n=()=>{const t=document.querySelectorAll(".wp-block-themeisle-blocks-form");(e=>{if(!window.hasOwnProperty("grecaptcha")&&window?.themeisleGutenbergForm?.reRecaptchaSitekey){const t=document.createElement("script");t.id="recaptcha",document.body.appendChild(t),t.addEventListener("load",(()=>{const t=setInterval((()=>{window.hasOwnProperty("grecaptcha")&&window.grecaptcha.hasOwnProperty("render")&&(e.forEach((e=>{e?.classList?.contains("has-captcha")&&(e=>{if(!window.hasOwnProperty("grecaptcha"))return;const{id:t}=e,o=document.createElement("div"),i=e.querySelector(".otter-form__container");i?.insertBefore(o,i.lastChild);const s=window.grecaptcha?.render(o,{sitekey:window?.themeisleGutenbergForm?.reRecaptchaSitekey,callback:e=>{window.themeisleGutenberg||(window.themeisleGutenberg={}),window.themeisleGutenberg?.tokens||(window.themeisleGutenberg.tokens={}),window.themeisleGutenberg.tokens[t]={token:e,reset:()=>window.grecaptcha?.reset(s)}},"expired-callback":()=>{window.themeisleGutenberg?.tokens||(window.themeisleGutenberg={},window.themeisleGutenberg.tokens={}),window.themeisleGutenberg.tokens[t]={token:null,reset:()=>null}}})})(e)})),clearInterval(t))}),200)})),t.src=window?.themeisleGutenbergForm?.reRecaptchaAPIURL}})(t),e=Date.now(),t.forEach((e=>{e.classList.contains("can-submit-and-subscribe")&&(e=>{const t=e.querySelector(".otter-form__container"),o=e.querySelector(".wp-block-button"),i=document.createElement("div");i.classList.add("otter-form-consent"),t.insertBefore(i,o);const s=document.createElement("input");s.type="checkbox",s.name="o-consent",s.id="o-consent";const r=document.createElement("label");r.innerHTML=window?.themeisleGutenbergForm?.messages?.privacy||"I have read and agreed the privacy statement.",r.htmlFor="o-consent",i.appendChild(s),i.appendChild(r)})(e);const t=e.querySelector("button"),o=new class{constructor(e){this.form=e,this.anchor=e.querySelector(".wp-block-button"),this.anchor?.classList.add("has-submit-msg"),this.msgElem=document.createElement("div"),this.msgElem.classList.add("o-form-server-response"),this.anchor.appendChild(this.msgElem),this.isVisible=!1,this.visibilityTimeout=void 0,this.visibilityDuration=12e3}toggle(e){this.isVisible=void 0!==e?e:!this.isVisible,this.msgElem.style.display=this.isVisible?"block":"none"}getMsgBySlug(e){return window?.themeisleGutenbergForm?.messages[e]||"Messages are missing!"}pullMsg(e,t){return this.setMsg(this.getMsgBySlug(e),t)}setMsg(e,t=""){switch(this.msgElem.innerHTML=e,this.clean(),t){case"error":this.msgElem.classList.toggle("o-error",!0);break;case"warning":this.msgElem.classList.toggle("o-warning",!0);break;default:this.msgElem.classList.toggle("o-success",!0)}return this}show(e){clearTimeout(this.visibilityTimeout),this.toggle(!0),this.visibilityTimeout=setTimeout((()=>{this.toggle(!1)}),e||this.visibilityDuration)}clean(){this.msgElem.classList.toggle("o-error",!1),this.msgElem.classList.toggle("o-warning",!1),this.msgElem.classList.toggle("o-success",!1)}}(e);if(new URLSearchParams(window.location.search).has("stripe_checkout")){t.disabled=!0;const r=t.innerHTML;t.innerHTML=o.getMsgBySlug("confirmingSubmission");const n=s(t);n.show(),i((async()=>{const e=new URLSearchParams(window.location.search).get("stripe_checkout"),t=(window?.themeisleGutenbergForm?.root||window.location.origin+"/wp-json/")+"otter/v1/form/confirm";return await fetch(t+`?stripe_checkout=${e}`,{method:"GET",credentials:"include"})})(),o,((t,o)=>{const i=t?.submitMessage?t.submitMessage:"Success";o.setMsg(i).show(),0<t?.redirectLink?.length&&(e.setAttribute("data-redirect",t.redirectLink),setTimeout((()=>{window.location.href=t.redirectLink}),1e3))}),(()=>{}),(()=>{t.disabled=!1,n.hide(),t.innerHTML=r}))}e.querySelector(':scope > form > button[type="submit"]')?e?.addEventListener("submit",(i=>{i.preventDefault(),t.disabled||(t.disabled=!0,r(e,t,o))}),!1):t?.addEventListener("click",(i=>{i.preventDefault(),t.disabled||(t.disabled=!0,r(e,t,o))}),!1)})),t.forEach((e=>{o(e).forEach((e=>{const t=e.querySelector("input");if("file"===t?.type){const{maxFilesNumber:e,maxFileSize:o}=t.dataset;t.addEventListener("change",(i=>{let s=!0;const{files:r}=i.target;if(e&&r.length>e&&(t.setCustomValidity(window.themeisleGutenbergForm?.messages?.["too-many-files"]+e),s=!1),s&&o)for(const e of r)if(e.size>1024*o*1024){t.setCustomValidity(window.themeisleGutenbergForm?.messages?.["big-file"]+" "+o+"MB."),s=!1;break}s?t.setCustomValidity(""):(t.reportValidity(),t.value="")}))}}))}))},"undefined"!=typeof document&&("complete"!==document.readyState&&"interactive"!==document.readyState?document.addEventListener("DOMContentLoaded",n):n())}();