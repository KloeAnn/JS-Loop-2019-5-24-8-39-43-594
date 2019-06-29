var str,i,j;
var arr=[]
for( i=1;i<10;i++){
    for(j=1;j<=i;j++){
        str=i+"*"+j+"="+(i*j)
        arr.push(str)
    }
    console.log(arr.join(" "))
    arr=[]
}
