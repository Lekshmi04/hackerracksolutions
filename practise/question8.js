var nums=[2,3,6,6,5];
const unique = Array.from(new Set(nums));
const reverseSorted = unique.sort((a, b)=>b-a)
const second = reverseSorted[1];
console.log(second)