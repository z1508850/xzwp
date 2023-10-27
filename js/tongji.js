
document.write("<script>!function(p){\"use strict\";!function(t){var s=window,e=document,i=p,c=\"\".concat(\"https:\"===e.location.protocol?\"https://\":\"http://\",\"sdk.51.la/js-sdk-pro.min.js\"),n=e.createElement(\"script\"),r=e.getElementsByTagName(\"script\")[0];n.type=\"text/javascript\",n.setAttribute(\"charset\",\"UTF-8\"),n.async=!0,n.src=c,n.id=\"LA_COLLECT\",i.d=n;var o=function(){s.LA.ids.push(i)};s.LA?s.LA.ids&&o():(s.LA=p,s.LA.ids=[],o()),r.parentNode.insertBefore(n,r)}()}({id:\"KE7cuB0azh8JFmk0\",ck:\"KE7cuB0azh8JFmk0\"});</script>")



  const style = document.createElement('style');
  style.innerText = `
    .barrage {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: #ffffffe6;
      color: #333;
      padding: 10px 15px;
      border-radius: 5px;
      z-index: 9999;
      display: flex;
      align-items: center;
    }

    .barrage-icon {
      display: block;
      width: 20px;
      height: 20px;
      background-image: url('https://cdn3.codesign.qq.com/screens/previews/2023/10/24/jM93UEfMyMIRXfy8jBGwHATwiF0mBZ3ngnmn0qcd.png'); 
      background-size: cover;
      margin-right: 5px;
      margin-left: -5px;
      line-height: 20px;
    }
  `;
  document.head.appendChild(style);

  function showBarrage(event) {
    if (window.innerWidth < 768) {
      return;
    }

    event.preventDefault(); 

    const barrage = document.createElement('span');
    barrage.innerHTML = '<span class="barrage-icon"></span>为了您更好的游览体验，本站禁用右键。';
    barrage.classList.add('barrage');
    document.body.appendChild(barrage);

    const { clientWidth, clientHeight } = document.documentElement;
    barrage.style.left = `${clientWidth / 2}px`;
    barrage.style.top = `${clientHeight / 6}px`;

    setTimeout(() => {
      document.body.removeChild(barrage); 
    }, 5000);
  }

  function updateBarrageDisplay() {
    const isSmallScreen = window.innerWidth < 768;


    if (isSmallScreen) {
      document.body.removeEventListener('contextmenu', showBarrage);
    } else {
      document.body.addEventListener('contextmenu', showBarrage);
    }
  }


  updateBarrageDisplay();

  window.addEventListener('resize', updateBarrageDisplay);
