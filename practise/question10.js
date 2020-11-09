var objects={x:2,y:3};
let count=0;
for(element in objects){
    if(objects[element].x==objects[element].y){
        count++;
    }
}
console.log(count);