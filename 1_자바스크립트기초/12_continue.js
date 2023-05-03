var total = 0;

// 1~100까지 중 3의 배수만 더한 총합을 continue를 활용해 작성하세요.
for(var i = 1; i <= 100; i++){
    if(i % 3 !== 0){// 3의 배수가 아니면
        continue;// 다음 바퀴로
    }
    total +=i;
}
console.log(`1~100 범위의 3의 배수만 더한 총합 : ${total}`);