const LT_SIZE = 10;
const NUM_SIZE = 5;

const iota = n => new Array(n).fill(undefined);

const UnwrapT = `Unwrap${NUM_SIZE}`
const UnwrapStr = `type ${UnwrapT}<X extends LUTValue[]> =
    [${iota(NUM_SIZE).map((_, i) => `X[${i}]['v']`).toString()}]`

const multLUT = []

for(let i = 0; i < LT_SIZE; i++) {
    multLUT[i] = []
    for(let j = 0; j < LT_SIZE; j++) {
        multLUT[i][j] = i * j;
    }
}

const multLUTStr = `[${
    multLUT.map(ar => `[${ar.toString()}]`).join(',\n')
}]`


const addLUT = []

for(let i = 0; i < LT_SIZE; i++) {
    addLUT[i] = []
    for(let j = 0; j < LT_SIZE; j++) {
        const realValue = i + j;
        const value = realValue % LT_SIZE;
        const carry = (realValue - value) / LT_SIZE;

        addLUT[i][j] = `/* ${i} + ${j} */ {v:${value},c:${carry}}`
    }
}

const addLUTStr = `[${
    addLUT.map(ar => `[${ar.toString()}]`).join(',\n')
}]`

const subLUT = []

for(let i = 0; i < LT_SIZE; i++) {
    subLUT[i] = []
    for(let j = 0; j < LT_SIZE; j++) {
        const realValue = i - j;

        const value = realValue < 0 ? i + 10 - j : realValue;
        const borrow = realValue < 0 ? 1 : 0;
        subLUT[i][j] = `/* ${i} - ${j} */ {v:${value},c:${borrow}}`
    }
}

const subLUTStr = `[${
    subLUT.map(ar => `[${ar.toString()}]`).join(',\n')
}]`

const NumberStr = `[${iota(NUM_SIZE).map(() => 'LUTIndex').join(',')}]`

const AdderT = `Add${NUM_SIZE}_`

const AdderStr = `type ${AdderT}<X extends Number, Y extends Number> = 
    [${iota(NUM_SIZE).map((_, i) => `AddLUT[X[${i}]][Y[${i}]]`).toString()}]`

const PropCarryIterT = `PropCarry${NUM_SIZE}Iter`
const PropCarryIterStr = `type ${PropCarryIterT}<X extends LUTValue[]> =
    [${iota(NUM_SIZE).map((_, i) => {
        if(i === NUM_SIZE - 1) return `{v: X[${i - 1}]['v'], c: 0}`
        else return `AddLUT[X[${i + 1}]['c']][X[${i}]['v']]`
    })}]` 

const PropCarryT = `PropCarry${NUM_SIZE}`
const PropCarryStr = `type ${PropCarryT}<X extends LUTValue[]> =
    ${iota(NUM_SIZE).reduce((X, _) => {
        return `${PropCarryIterT}<${X}>`
    }, `X`)}`
    
    
const AddT = `Add${NUM_SIZE}`

const AddStr = `type ${AddT}<X extends Number, Y extends Number> = 
    ${UnwrapT}<${PropCarryT}<${AdderT}<X, Y>>>
`
    
const SubberT = `Sub${NUM_SIZE}_`

const SubberStr = `type ${SubberT} <X extends Number, Y extends Number> = 
[${iota(NUM_SIZE).map((_, i) => `SubLUT[X[${i}]][Y[${i}]]`).toString()}]
`

const PropBorrowIterT = `PropBorrow${NUM_SIZE}Iter`
const PropBorrowIterStr = `type ${PropBorrowIterT}<X extends LUTValue[]> =
    [${iota(NUM_SIZE).map((_, i) => {
        if(i === NUM_SIZE - 1) return `{v: X[${i - 1}]['v'], c: 0}`
        else return `SubLUT[X[${i}]['v']][X[${i + 1}]['c']]`
    })}]` 

const PropBorrowT = `PropBorrow${NUM_SIZE}`
const PropBorrowStr = `type ${PropBorrowT}<X extends LUTValue[]> =
    ${iota(NUM_SIZE).reduce((X, _) => {
        return `${PropBorrowIterT}<${X}>`
    }, `X`)}`

const SubT = `Sub${NUM_SIZE}`

const SubStr = `type ${SubT}<X extends Number, Y extends Number> = 
    ${UnwrapT}<${PropBorrowT}<${SubberT}<X, Y>>>`

const LUTIndexStr = `${iota(LT_SIZE).map((_, i) => i).join(' | ')}`
const StrLUTIndexStr = `${iota(LT_SIZE).map((_, i) => `"${i}"`).join(' | ')}`

const emit = `
export type Number = ${NumberStr};

export type MultLUT = ${multLUTStr};

export type AddLUT = ${addLUTStr};

export type SubLUT = ${subLUTStr};

export type LUTIndex = ${LUTIndexStr};

export type StrLUTIndex = ${StrLUTIndexStr};

export type LUTValue = {v:LUTIndex, c:LUTIndex};

export ${AdderStr};

export ${AddStr};

export ${PropCarryIterStr};

export ${PropCarryStr};

export ${SubberStr};

export ${SubStr};

export ${PropBorrowIterStr};

export ${PropBorrowStr};

export ${UnwrapStr};

`

console.error(emit);