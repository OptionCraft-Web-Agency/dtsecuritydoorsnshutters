

map

    init rows
    init cols
    init boxs


loop rows, rowIndex 
    loop cols, colIndex 
    num = [rowIndex, colIndex]
    //{skip . value}
    //map box index by
    0 | 1 | 2
    3 | 4 | 5
    6 | 7 | 8

    boxIndex = [Math.floor(row/3) * 3 , Math.floor(col/3)]
    check rowIndex value exist in rows
    rows [row] [num]
    check colIndex value exist in cols
    check boxIndex value exist in boxs

    if exist return false

    it not add value to rows, cols, boxs



    Data structure

    rows{
        0:{
            1: true|false
            2: true|false
            ...
            9: true|false
        }
        1:{}
        ...
        8:{}
    }





