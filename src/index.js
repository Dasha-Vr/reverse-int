module.exports = function reverse (n) {
    n = Math.abs(n)
    n = n.toString()
    let result = ''
    for(let cont = 0; cont < n.length; cont += 1){
        result = `${n[cont]}${result}`
    }
    return +result
}
