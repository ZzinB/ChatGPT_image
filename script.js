// const generateBtn = document.querySelector('#generateBtn')

// generateBtn.addEventListener('click', () => { //무언가를 하겠다! (클릭 이벤트가 발생)
//     //console.log('버튼을 누르면 실행되지롱'); //개발자도구 (cmd + opt + j)

// })
const generateBtn = document.querySelector('#generateBtn')
const gridConrainer = document.querySelector('#gridContainer')

generateBtn.addEventListener('click', () => {
    const randomNumber = Math.floor(Math.random() * 1000) + 1 //1부터 1000사이 랜덤
    const imgUrl = `https://picsum.photos/500?random=${randomNumber}`;//랜덤 이미지 URL 할당

    const img = document.createElement('img') //img 태그 생성
    img.src = imgUrl;
    gridConrainer.appendChild(img); //이미지를 그리드 컨테이너에 추가
})