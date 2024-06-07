function getComparator<T,Key extends keyof T>(field:Key):(a: T, b: T) => number {
    return (a:T,b:T) => {
        console.log('getComparator:', a, b);
        if(a[field] > b[field]){
            return -1;
        }else if(a[field] < b[field]){
            return 1
        }
        return 0;
    }
}

function testNoop(){

}
export {getComparator,testNoop};
