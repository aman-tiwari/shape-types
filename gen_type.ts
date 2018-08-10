const LT_SIZE = 32;
const NUM_SIZE = 2;
const MAX_LITERAL = 1024;

const iota = n => new Array(n).fill(undefined).map((_, i) => i);

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

        const value = realValue < 0 ? i + LT_SIZE - j : realValue;
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
    [${iota(NUM_SIZE).map(i => `AddLUT[X[${i}]][Y[${i}]]`).toString()}]`

const PropCarryIterT = `PropCarry${NUM_SIZE}Iter`
const PropCarryIterStr = `type ${PropCarryIterT}<X extends LUTValue[]> =
    [${iota(NUM_SIZE).map(i => {
        if(i === NUM_SIZE - 1) return `{v: X[${i}]['v'], c: 0}`
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
[${iota(NUM_SIZE).map(i => `SubLUT[X[${i}]][Y[${i}]]`).toString()}]
`

const PropBorrowIterT = `PropBorrow${NUM_SIZE}Iter`
const PropBorrowIterStr = `type ${PropBorrowIterT}<X extends LUTValue[]> =
    [${iota(NUM_SIZE).map(i => {
        if(i === NUM_SIZE - 1) return `{v: X[${i}]['v'], c: 0}`
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

const LUTIndexStr = `${iota(LT_SIZE).join(' | ')}`
const StrLUTIndexStr = `${iota(LT_SIZE).map(i => `"${i}"`).join(' | ')}`


const GTHelperT = `GT${NUM_SIZE}_`
const GTHelperStr = `
type GT1<X extends LUTIndex, Y extends LUTIndex> =
    SubLUT[Y][X]['c'] extends 1 ? 1 : 0;

type ${GTHelperT}<R extends LUTValue[]> =
    ${iota(NUM_SIZE).map(i => {
        if(i === NUM_SIZE - 1) return `GT1<R[3]['c'], R[2]['v']> extends 1 ? 1 : 0;`
        else return `GT1<R[${i}]['c'], 0> extends 1 ? 1 : `
    }).join('')}`

const GreaterThanT = `GreaterThan${NUM_SIZE}`
const GreaterThanStr = `type ${GreaterThanT}<Y extends Number, X extends Number> =
    ${GTHelperT}<${SubberT}<X, Y>>`

const NotT = `Not`
const NotStr = `type ${NotT}<X> =
    X extends 0 ? 1 : 0`

const zpad = (x, s) => iota(s - x.toString().length).map(() => '0').join('') + x.toString()

const digitsNeeded = Math.ceil(Math.log(MAX_LITERAL)/Math.log(LT_SIZE));

function toBase(x: number, b: number) {
    const digits = x.toString(b).split('').map(d => parseInt(d, b));
    return iota(NUM_SIZE - digits.length).fill(0).concat(digits);
}

const LiteralLUT = iota(MAX_LITERAL).map(i => '[' + toBase(i, LT_SIZE).toString() + ']');

// `[${iota(NUM_LITERALS).map(i => `[${zpad(i, NUM_SIZE).split('').toString()}]`).toString()}]`

const ReverseLUT = []

function recursiveToString(arr) {
    if(Array.isArray(arr)) return `[${arr.map(x => recursiveToString(x)).toString()}]`
    else return arr.toString();
}

/*
for(let i = 0; i < NUM_LITERALS; i++) {
    const digits = zpad(i, NUM_SIZE).split('').map(x => parseInt(x, 10));
    let arr = ReverseLUT;
    for(const digit of digits.slice(0, digits.length - 1)) {
        if(arr[digit] == null) {
            arr[digit] = [];
        }
        arr = arr[digit];
    }
    (arr as any)[digits[digits.length - 1]] = i;
}
*/
const ReverseLUTStr = recursiveToString(ReverseLUT)

const ToLiteralT = `ToLiteral`

const ToLiteralStr = `type ${ToLiteralT} = any` //`type ${ToLiteralT}<X extends Number> = ReverseLUT${iota(NUM_SIZE).map(i => `[X[${i}]]`).join('')}`

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

export ${GTHelperStr};

export ${GreaterThanStr};

export ${NotStr}

export ${UnwrapStr};

export type Literal = [${LiteralLUT.toString()}];

export type ReverseLUT = ${ReverseLUTStr};

export ${ToLiteralStr};

`

console.error(emit);