const A = document.querySelector('#A');

let count = 0;
// マスをクリックしたら、○を表示
A.addEventListener('click', () => {
    count++;
    // 奇数偶数の判定
    if (count%2===1) {
        A.textContent = '○'
    } else {
        A.textContent = '×'
    }
});

// 全マスにイベント設定
// 配列を作る？
const masu =  document.querySelectorAll('.board div');
console.log(masu);

for(let i = 0; i < 9; i++) {
    masu[0].addEventListener('click', () => {
        count++;
        // 奇数偶数の判定
        if (count%2===1) {
            masu[0].textContent = '○'
        } else {
            masu[0].textContent = '×'
        }
    })
}

// なんでfor文

