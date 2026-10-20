const labs=[
 {lab:'DeepSeek',rank:'#1 by tokens',model:'DeepSeek V4.1 Flash',tokens:'46.4T',change:'↓ 16.1%',trend:'down',context:'1M',mode:'Multimodal',price:'$0.30 / $1.20',visitors:'124 visitors',sign:'DEEPSEEK',icon:'✦'},
 {lab:'Anthropic',rank:'#2 by tokens',model:'Claude Sonnet 5',tokens:'28.7T',change:'↑ 8.4%',trend:'up',context:'200K',mode:'Multimodal',price:'$3 / $15',visitors:'98 visitors',sign:'ANTHROPIC',icon:'✺'},
 {lab:'OpenAI',rank:'#3 by tokens',model:'GPT-5',tokens:'21.9T',change:'↑ 12.8%',trend:'up',context:'400K',mode:'Multimodal',price:'$1.25 / $10',visitors:'87 visitors',sign:'OPENAI',icon:'◎'},
 {lab:'Google',rank:'#4 by tokens',model:'Gemini 3 Pro',tokens:'16.3T',change:'↑ 4.2%',trend:'up',context:'1M',mode:'Multimodal',price:'$2 / $12',visitors:'61 visitors',sign:'GOOGLE',icon:'◇'},
 {lab:'Mistral',rank:'#5 by tokens',model:'Mistral Large 3',tokens:'9.8T',change:'↑ 19.3%',trend:'up',context:'256K',mode:'Text + image',price:'$0.50 / $1.50',visitors:'45 visitors',sign:'MISTRAL',icon:'◆'},
 {lab:'Meta',rank:'#6 by tokens',model:'Llama 4 Maverick',tokens:'7.2T',change:'↓ 2.7%',trend:'down',context:'1M',mode:'Multimodal',price:'$0.20 / $0.60',visitors:'39 visitors',sign:'META',icon:'∞'}
];
let index=0, paused=false;
const $=id=>document.getElementById(id);
function render(){const d=labs[index];$('rank').textContent=`${d.lab} · ${d.rank}`;$('modelName').textContent=d.model;$('tokens').textContent=d.tokens;$('change').textContent=d.change;$('change').className=`change ${d.trend}`;$('context').textContent=d.context;$('mode').textContent=d.mode;$('price').textContent=d.price;$('visitors').textContent=d.visitors;$('shopSign').textContent=d.sign;$('avatar').textContent=d.icon;$('counter').textContent=`${index+1} / ${labs.length}`;document.querySelector('.spotlight').animate([{opacity:.45,transform:'translateY(9px)'},{opacity:1,transform:'translateY(0)'}],{duration:310,easing:'ease-out'});}
$('next').onclick=()=>{index=(index+1)%labs.length;render()};$('prev').onclick=()=>{index=(index+labs.length-1)%labs.length;render()};
$('pause').onclick=()=>{paused=!paused;$('app').classList.toggle('paused',paused);$('pause').textContent=paused?'▶':'Ⅱ'};
$('speed').onclick=()=>{$('speed').textContent=$('speed').textContent==='8×'?'24×':$('speed').textContent==='24×'?'1×':'8×'};
$('daynight').onclick=()=>{$('app').classList.toggle('day');$('daynight').textContent=$('app').classList.contains('day')?'☀':'☾'};
$('about').onclick=()=>$('aboutDialog').showModal();$('closeAbout').onclick=()=>$('aboutDialog').close();document.querySelector('.close').onclick=()=>$('aboutDialog').close();
$('share').onclick=async()=>{const text='I just took a walk through the AI economy 🏙️ Which lab is moving your world?';try{if(navigator.share)await navigator.share({title:'Token Town',text,url:location.href});else {await navigator.clipboard.writeText(`${text} ${location.href}`);$('toast').classList.add('toast-show');setTimeout(()=>$('toast').classList.remove('toast-show'),2500)}}catch(e){}};
document.addEventListener('keydown',e=>{if(e.key==='ArrowRight')$('next').click();if(e.key==='ArrowLeft')$('prev').click();if(e.key===' '){$('pause').click();e.preventDefault()}if(e.key.toLowerCase()==='d')$('daynight').click()});render();
