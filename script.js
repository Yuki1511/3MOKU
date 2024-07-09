const A = document.querySelector('#A');

// マスをクリックしたら、○を表示
A.addEventListener('click', () => {
    count++;
    // 奇数偶数の判定
    if (count % 2 === 1) {
        A.textContent = '○'
    } else {
        A.textContent = '×'
    }
});

// 全マスにイベント設定
// 配列を作る？
const masu = document.querySelectorAll('.board div');
console.log(masu);

let count = 0;

for (let i = 0; i < 9; i++) {
    masu[i].addEventListener('click', () => {
        count++;
        // 奇数偶数の判定
        if (count % 2 === 1) {
            masu[i].textContent = '○'
            masu[i].classList.add('maru');
        } else {
            masu[i].textContent = '×'
            masu[i].classList.add('batu');
        }
        if (masu[0].textContent === '○' &&
            masu[1].textContent === '○' &&
            masu[2].textContent === '○'
        ) {
            console.log(masu[0].textContent)
            console.log('○の勝ち！')
        }

    })
}

// なんでfor文
