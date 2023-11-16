// Написать функцию, которая принимает массив любых целых чисел, и возвращает новый массив из элементов переданного массива, кратных пяти. ([1,2,5,12,15,21] вернет [5,15])

let arr=[5,15,34,35,50];

function calkFive(arr){
    let newArr=arr.filter((elem) => elem%5==0);
    return newArr;
}
console.log(calkFive(arr));

let arr1=Array.from(arr,function(elem){
    if (elem%5==0)
        return elem;
});

console.log(arr1);