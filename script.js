// const generateBtn = document.querySelector('#generateBtn')

// generateBtn.addEventListener('click', () => { //무언가를 하겠다! (클릭 이벤트가 발생)
//     //console.log('버튼을 누르면 실행되지롱'); //개발자도구 (cmd + opt + j)

// })
const generateBtn = document.querySelector('#generateBtn')
const gridConrainer = document.querySelector('#gridContainer')

generateBtn.addEventListener('click', () => {

    //이미지가 30개 이상힐 경우 모든 이미지 삭제
    if (gridConrainer.children.length >= 30){   
        const confirmed = confirm("이미지가 30개 찼습니다. 모든 사진을 지우시겠습니까?");
        if (confirmed){
            gridConrainer.innerHTML = ""; //이미지 모두 삭제
        }
    }

    const randomNumber = Math.floor(Math.random() * 1000) + 1 //1부터 1000사이 랜덤
    const imgUrl = `https://picsum.photos/500?random=${randomNumber}`;//랜덤 이미지 URL 할당

    const img = document.createElement('img') //img 태그 생성
    img.src = imgUrl;

    gridConrainer.appendChild(img); //이미지를 그리드 컨테이너에 추가
})