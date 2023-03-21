var texts = [
  'برنامه نویس C',
  'برنامه نویس Python',
  'برنامه نویس JS',
  'برنامه نویس B4A',
  'برنامه نویس B4J',
  'برنامه نویس Visual Basic',
  'برنامه نویس Java',
  'برنامه نویس PHP',
  'برنامه نویس Flutter',
  'برنامه نویس Django',
  'برنامه نویس Flask',
  'برنامه نویس AHK',
  'کد نویس HTML',
  'کد نویس SCSS',
  'توسعه دهنده وب',
  'توسعه دهنده موبایل',
  'علاقه مند به موسیقی رپ',
  'توسعه دهنده دسکتاپ',  
  'علاقه مند به پرش از ارتفاع',
];
var active = true;
var active_text = false;
var negetive  = false;
var counter = 0;
function UpdateText()
{
  if (!active_text)return;
  if (counter >= texts.length) counter =0;
  document.getElementById("chiza").innerHTML=texts[counter];
  counter++;
}

function UpdatePouya()
{
  if (!active_text)return;
  if ( negetive ){
    negetive = false;
  document.getElementById('pouya').style.filter="invert(0%)";
  }
  
  else{
    document.getElementById('pouya').style.filter="invert(100%)";
    negetive = true;
  }
  
}



function startanim()
{
  document.getElementById('youtube').classList.add('animate__rubberBand');
  document.getElementById('telegram').classList.add('animate__rubberBand');
  document.getElementById('mail').classList.add('animate__rubberBand');
  document.getElementById('irc').classList.add('animate__rubberBand');
  document.getElementById('g1').classList.add('animate__pulse');
  document.getElementById('p1').classList.add('animate__bounce');
  document.getElementById('p2').classList.add('animate__rubberBand');
  document.getElementById('p3').classList.add('animate__shakeY');
  document.getElementById('p4').classList.add('animate__rubberBand');
  document.getElementById('p5').classList.add('animate__shakeY');
  document.getElementById('p6').classList.add('animate__rubberBand');
  document.getElementById('p7').classList.add('animate__rubberBand');
  document.getElementById('p8').classList.add('animate__shakeY');
  document.getElementById('p9').classList.add('animate__rubberBand');
  document.getElementById('p10').classList.add('animate__shakeY');
  document.getElementById('p11').classList.add('animate__rubberBand');
  document.getElementById('p12').classList.add('animate__shakeY');
  document.getElementById('p13').classList.add('animate__rubberBand');
  document.getElementById('p14').classList.add('animate__rubberBand');
  
  document.getElementById('g0').classList.add('animate__pulse');
  document.getElementById('g2').classList.add('animate__pulse');
  document.getElementById('g3').classList.add('animate__pulse');
  document.getElementById('g4').classList.add('animate__pulse');
  
  document.getElementById('r1').classList.add('animate__shakeY');
  document.getElementById('r2').classList.add('animate__shakeY');
  document.getElementById('r3').classList.add('animate__rubberBand');
  document.getElementById('r4').classList.add('animate__shakeY');
  document.getElementById('r5').classList.add('animate__flash');
  
  document.getElementById('r6').classList.add('animate__shakeY');
  document.getElementById('r7').classList.add('animate__rubberBand');
  document.getElementById('r8').classList.add('animate__shakeY');
  document.getElementById('r9').classList.add('animate__flash');
 
  document.getElementById('r10').classList.add('animate__shakeY');
  document.getElementById('r11').classList.add('animate__rubberBand');
  document.getElementById('r12').classList.add('animate__shakeY');
  document.getElementById('r13').classList.add('animate__flash');
 
  document.getElementById('r14').classList.add('animate__shakeY');
  document.getElementById('r15').classList.add('animate__rubberBand');
  document.getElementById('r16').classList.add('animate__shakeY');
  document.getElementById('r17').classList.add('animate__flash');
 
  document.getElementById('r18').classList.add('animate__shakeY');
  document.getElementById('r19').classList.add('animate__rubberBand');
  document.getElementById('r20').classList.add('animate__shakeY');
  document.getElementById('r21').classList.add('animate__flash');
 
  document.getElementById('r22').classList.add('animate__shakeY');
  document.getElementById('r23').classList.add('animate__rubberBand');
  document.getElementById('r24').classList.add('animate__shakeY');
  document.getElementById('r25').classList.add('animate__flash');
 
  document.getElementById('r26').classList.add('animate__shakeY');
  document.getElementById('r27').classList.add('animate__rubberBand');
  document.getElementById('r28').classList.add('animate__shakeY');
  document.getElementById('r29').classList.add('animate__flash');
 
  document.getElementById('r30').classList.add('animate__shakeY');
  document.getElementById('r31').classList.add('animate__rubberBand');
  document.getElementById('r32').classList.add('animate__shakeY');
  document.getElementById('r33').classList.add('animate__flash');
 
  document.getElementById('v1').classList.add('animate__shakeY');
 

  document.getElementById('v2').classList.add('animate__shakeY');
  document.getElementById('v3').classList.add('animate__rubberBand');
  
  document.getElementById('v4').classList.add('animate__shakeY');
  document.getElementById('v5').classList.add('animate__rubberBand');
  
  document.getElementById('v6').classList.add('animate__shakeY');
  document.getElementById('v7').classList.add('animate__rubberBand');
  
  document.getElementById('v8').classList.add('animate__shakeY');
  document.getElementById('v9').classList.add('animate__rubberBand');
  

}

function stopanim()
{
  
    document.getElementById('header-pouya-name').classList.remove('animate__pulse');
    document.getElementById('youtube').classList.remove('animate__rubberBand');
    document.getElementById('telegram').classList.remove('animate__rubberBand');
    document.getElementById('mail').classList.remove('animate__rubberBand');
    document.getElementById('irc').classList.remove('animate__rubberBand');
    document.getElementById('g1').classList.remove('animate__pulse');
    document.getElementById('p1').classList.remove('animate__bounce');
    document.getElementById('p2').classList.remove('animate__rubberBand');
    document.getElementById('p3').classList.remove('animate__shakeY');
    document.getElementById('p4').classList.remove('animate__rubberBand');
    document.getElementById('p5').classList.remove('animate__shakeY');
    document.getElementById('p6').classList.remove('animate__rubberBand');
    document.getElementById('p7').classList.remove('animate__rubberBand');
    document.getElementById('p8').classList.remove('animate__shakeY');
    document.getElementById('p9').classList.remove('animate__rubberBand');
    document.getElementById('p10').classList.remove('animate__shakeY');
    document.getElementById('p11').classList.remove('animate__rubberBand');
    document.getElementById('p12').classList.remove('animate__shakeY');
    document.getElementById('p13').classList.remove('animate__rubberBand');
    document.getElementById('p14').classList.remove('animate__rubberBand');
    document.getElementById('g2').classList.remove('animate__pulse');
    document.getElementById('g0').classList.remove('animate__pulse');
    document.getElementById('g3').classList.remove('animate__pulse');
    document.getElementById('g4').classList.remove('animate__pulse');
document.getElementById('r1').classList.remove('animate__shakeY');
document.getElementById('r2').classList.remove('animate__shakeY');
document.getElementById('r3').classList.remove('animate__rubberBand');
document.getElementById('r4').classList.remove('animate__shakeY');
document.getElementById('r5').classList.remove('animate__flash');

document.getElementById('r6').classList.remove('animate__shakeY');
document.getElementById('r7').classList.remove('animate__rubberBand');
document.getElementById('r8').classList.remove('animate__shakeY');
document.getElementById('r9').classList.remove('animate__flash');

document.getElementById('r10').classList.remove('animate__shakeY');
document.getElementById('r11').classList.remove('animate__rubberBand');
document.getElementById('r12').classList.remove('animate__shakeY');
document.getElementById('r13').classList.remove('animate__flash');

document.getElementById('r14').classList.remove('animate__shakeY');
document.getElementById('r15').classList.remove('animate__rubberBand');
document.getElementById('r16').classList.remove('animate__shakeY');
document.getElementById('r17').classList.remove('animate__flash');

document.getElementById('r18').classList.remove('animate__shakeY');
document.getElementById('r19').classList.remove('animate__rubberBand');
document.getElementById('r20').classList.remove('animate__shakeY');
document.getElementById('r21').classList.remove('animate__flash');

document.getElementById('r22').classList.remove('animate__shakeY');
document.getElementById('r23').classList.remove('animate__rubberBand');
document.getElementById('r24').classList.remove('animate__shakeY');
document.getElementById('r25').classList.remove('animate__flash');

document.getElementById('r26').classList.remove('animate__shakeY');
document.getElementById('r27').classList.remove('animate__rubberBand');
document.getElementById('r28').classList.remove('animate__shakeY');
document.getElementById('r29').classList.remove('animate__flash');

document.getElementById('r30').classList.remove('animate__shakeY');
document.getElementById('r31').classList.remove('animate__rubberBand');
document.getElementById('r32').classList.remove('animate__shakeY');
document.getElementById('r33').classList.remove('animate__flash');

document.getElementById('v1').classList.remove('animate__shakeY');
 

document.getElementById('v2').classList.remove('animate__shakeY');
document.getElementById('v3').classList.remove('animate__rubberBand');

document.getElementById('v4').classList.remove('animate__shakeY');
document.getElementById('v5').classList.remove('animate__rubberBand');

document.getElementById('v6').classList.remove('animate__shakeY');
document.getElementById('v7').classList.remove('animate__rubberBand');

document.getElementById('v8').classList.remove('animate__shakeY');
document.getElementById('v9').classList.remove('animate__rubberBand');

}



setInterval(UpdateText,300);
setInterval(UpdatePouya,300);

document.getElementById('pouya').addEventListener('click', function (e) {
if (active) active=false; else return;
  document.getElementById("music").play();
  document.getElementById('header-pouya-name').classList.add('animate__pulse');
 
  setTimeout(() => {
    active_text=true;
    startanim();
   }, 15500);
   setTimeout(() => {
    active_text=false;
    active = true;
    document.getElementById('pouya').style.filter="invert(0%)";
    negetive=false;
    stopanim();
  }, 29000);
  
});


