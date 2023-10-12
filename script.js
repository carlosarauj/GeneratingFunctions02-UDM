function* ger1(){
    yield 'val 1'
    yield 'val 2'
    yield 'val 3'
}

function* gen2(){
    let i = 1

    while(true){
        yield i
        i++
    }
}

let g2 = gen2()
console.log(g2.next().value)
console.log(g2.next().value)
console.log(g2.next().value)
console.log(g2.next().value)
console.log(g2.next().value)