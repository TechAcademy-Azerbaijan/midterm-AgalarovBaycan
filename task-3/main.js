let n = 63456
let max = 0
let count = 0
while(n > 0){
    const num = n % 10
    if(num > max){
        max = num
        count = 1
    }
    else if(num == max){
        count++
    }
    n = parseInt( n / 10 )
}
if (count >= 2){
    console.log("YES");
}
else{
    console.log("NO");
}
