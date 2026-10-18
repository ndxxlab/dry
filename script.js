
const NOME = "Adrielly";               
const DE = "nando";                  
const FRASE = "Hoje é o dia de uma pessoa muito especial, e eu não podia deixar passar em branco. Fiz esta página só pra arrancar um sorriso seu. 💖";
const MOTIVOS = [
  ["😊","Seu sorriso ilumina qualquer dia ruim."],
  ["🤗","Tenho quase certeza de que seu abraço deve ser incrível."],
  ["🌷","Você é doce e gentil, dá pra perceber de longe."],
  ["😂","Você me faz rir até das coisas mais bobas."],
  ["✨","Do seu jeitinho, tudo fica mais leve e mais bonito."],
  ["💞","Perto de você eu quero ser sempre a minha melhor versão."]
];
const CARTA = [
  "Hoje é o seu dia, e eu quero que você se sinta especial do começo ao fim, porque é exatamente isso que você é. ❤️ Obrigado por cada conversa, cada risada e por cada momento que a gente compartilhou até aqui. Quero que você curta não só hoje, mas todos os dias da sua vida, porque você merece ser feliz de verdade. Tenho certeza de que você tá feliz aí com os coreanos kkkkk❤️",
  "Que esse novo ciclo venha cheio de saúde, sonhos realizados, paz e motivos pra sorrir. Que você continue sendo essa pessoa especial que, mesmo sem perceber, consegue despertar coisas boas em mim. E sabe, eu só queria uma chance de te mostrar o quanto você é especial pra mim, não só com palavras, mas também com atitudes. Queria poder te conhecer cada vez mais, compartilhar momentos contigo e te fazer sorrir de pertinho.",
  "E, se você deixar, adoraria comemorar esse dia com você, seja tomando um café, tomando um sorvete ou fazendo qualquer outra coisa que você goste. O lugar é o de menos, o que importa pra mim é ter a oportunidade de estar com você. 🍓❤️",
  "Feliz aniversário! Que a vida seja tão bonita contigo quanto você merece que ela seja. 🫶🏻"
  

];

document.getElementById('nome').textContent = NOME + " 🎀";
document.getElementById('sign').textContent = "Com carinho, " + DE + " 💗";
["l1","l2","l3"].forEach((id,i)=>document.getElementById(id).textContent=CARTA[i]);


const fx=document.getElementById('fx'), icons=['💗','🌸','💖','🎀','✨','💕','🌷'];
function spawn(x){
  const e=document.createElement('div'); e.className='fl'; e.textContent=icons[Math.floor(Math.random()*icons.length)];
  e.style.left=(x ?? Math.random()*100)+'vw'; e.style.fontSize=(14+Math.random()*26)+'px';
  e.style.animationDuration=(6+Math.random()*7)+'s'; fx.appendChild(e); setTimeout(()=>e.remove(),14000);
}
setInterval(spawn,700);
function burst(n=30){for(let i=0;i<n;i++)setTimeout(()=>spawn(),i*40)}
const h=document.getElementById('h');
h.onclick=()=>burst(20); h.onkeydown=e=>{if(e.key==='Enter'||e.key===' ')burst(20)};
document.getElementById('go').onclick=()=>{burst(60);document.querySelectorAll('section')[1].scrollIntoView({behavior:'smooth'})};
 


let t=0; const ty=document.getElementById('type');
(function w(){ if(t<=FRASE.length){ty.textContent=FRASE.slice(0,t++);setTimeout(w,45)} })();


const box=document.getElementById('reasons');
MOTIVOS.forEach(([e,tx])=>{const r=document.createElement('div');r.className='reason';r.innerHTML='<i></i><span></span>';
  r.children[0].textContent=e; r.children[1].textContent=tx; box.appendChild(r)});
const io=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}}),{threshold:.3});
document.querySelectorAll('.reason').forEach(r=>io.observe(r));


const cake=document.getElementById('cake');
function blow(){
  document.querySelectorAll('.fire').forEach(f=>f.style.opacity=0);
  document.getElementById('wish').textContent="Pedido feito! 🌟 Tenho certeza de que vai se realizar.";
  burst(70);
}
cake.onclick=blow; cake.onkeydown=e=>{if(e.key==='Enter'||e.key===' ')blow()};


document.getElementById('open').onclick=()=>{document.getElementById('letter').classList.add('open');burst(50)};



const botaoVale = document.getElementById("resgatarVale");
const mensagemVale = document.getElementById("mensagemVale");

botaoVale.addEventListener("click", () => {
  mensagemVale.classList.toggle("ativo");

  const aberto = mensagemVale.classList.contains("ativo");

  botaoVale.querySelector("small").textContent = aberto
    ? "Presente revelado 💕"
    : "Clique para resgatar 💗";

  if (aberto) {
    mensagemVale.scrollIntoView({
      behavior: "smooth",
      block: "nearest"
    });
  }
});
