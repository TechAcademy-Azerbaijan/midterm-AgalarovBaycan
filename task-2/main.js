let n = 327
let last= n % 10
let first = parseInt(n/100)
let second= parseInt(n/10)%10
let max = 0
let mid =0
let end = 0


if(last>second && last > first){
    max = last
}else if(second>first && second>last){
    max= second
}else if (first > second && first > last ){
    max = first
}

if(first>second){
    mid=first
}else if (second>first){
    mid = second
}

if(second<mid && second<max){
    end =second
}else if(first<mid&&first<max){
    end = first
}else if(last < mid&& last<max){
    end = last
}


const number = (""+max +mid +end)

const kvadrat = number*number
console.log(kvadrat)
