const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
    /* 
    Istifadəçinin daxil etdiyi dəyişəni qəbul edirik. 
    Giriş veriləni String type olur. Number type-a çevirmək üçün parseInt() metodundan istifadə edirik.
    Vergüllə daxil edilmiş sətri iki fərqli ədədə bölmək üçün split metodundan istifadə edirik.
    */
    var input = result.input; // "2,3,5"
    var numbers = input.split(','); // ['2', '3', '5']
    var n = parseInt(numbers[0]); // Ilk daxil olunmuş ədədi alırıq. Nümunə - 2 
    var last = parseInt(numbers[1]); // İkinci daxil olunmuş ədədi alırıq. Nümunə - 3
    var first = parseInt(numbers[2]);
    if(n<100){
        console.log(last + first)
    }
});
