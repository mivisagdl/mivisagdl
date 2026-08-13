document.documentElement.classList.add("js-ready");
document.addEventListener("DOMContentLoaded",()=>{
 const toggle=document.querySelector(".menu-toggle"),nav=document.querySelector("#main-nav");
 if(toggle&&nav){toggle.addEventListener("click",()=>{const open=nav.classList.toggle("open");toggle.setAttribute("aria-expanded",String(open))});nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{nav.classList.remove("open");toggle.setAttribute("aria-expanded","false")}))}
 document.querySelectorAll(".faq-question").forEach(btn=>btn.addEventListener("click",()=>{const item=btn.closest(".faq-item"),ans=item.querySelector(".faq-answer"),open=item.classList.contains("open");document.querySelectorAll(".faq-item.open").forEach(x=>{if(x!==item){x.classList.remove("open");x.querySelector(".faq-answer").style.maxHeight=null}});item.classList.toggle("open",!open);ans.style.maxHeight=!open?ans.scrollHeight+"px":null}));
 const items=document.querySelectorAll(".reveal");if("IntersectionObserver" in window){const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("is-visible");io.unobserve(e.target)}}),{threshold:.08});items.forEach(x=>io.observe(x))}else items.forEach(x=>x.classList.add("is-visible"));
});
