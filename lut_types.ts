
export type Number = [LUTIndex,LUTIndex,LUTIndex,LUTIndex];

export type MultLUT = [[0,0,0,0,0,0,0,0,0,0],
[0,1,2,3,4,5,6,7,8,9],
[0,2,4,6,8,10,12,14,16,18],
[0,3,6,9,12,15,18,21,24,27],
[0,4,8,12,16,20,24,28,32,36],
[0,5,10,15,20,25,30,35,40,45],
[0,6,12,18,24,30,36,42,48,54],
[0,7,14,21,28,35,42,49,56,63],
[0,8,16,24,32,40,48,56,64,72],
[0,9,18,27,36,45,54,63,72,81]];

export type AddLUT = [[/* 0 + 0 */ {v:0,c:0},/* 0 + 1 */ {v:1,c:0},/* 0 + 2 */ {v:2,c:0},/* 0 + 3 */ {v:3,c:0},/* 0 + 4 */ {v:4,c:0},/* 0 + 5 */ {v:5,c:0},/* 0 + 6 */ {v:6,c:0},/* 0 + 7 */ {v:7,c:0},/* 0 + 8 */ {v:8,c:0},/* 0 + 9 */ {v:9,c:0}],
[/* 1 + 0 */ {v:1,c:0},/* 1 + 1 */ {v:2,c:0},/* 1 + 2 */ {v:3,c:0},/* 1 + 3 */ {v:4,c:0},/* 1 + 4 */ {v:5,c:0},/* 1 + 5 */ {v:6,c:0},/* 1 + 6 */ {v:7,c:0},/* 1 + 7 */ {v:8,c:0},/* 1 + 8 */ {v:9,c:0},/* 1 + 9 */ {v:0,c:1}],
[/* 2 + 0 */ {v:2,c:0},/* 2 + 1 */ {v:3,c:0},/* 2 + 2 */ {v:4,c:0},/* 2 + 3 */ {v:5,c:0},/* 2 + 4 */ {v:6,c:0},/* 2 + 5 */ {v:7,c:0},/* 2 + 6 */ {v:8,c:0},/* 2 + 7 */ {v:9,c:0},/* 2 + 8 */ {v:0,c:1},/* 2 + 9 */ {v:1,c:1}],
[/* 3 + 0 */ {v:3,c:0},/* 3 + 1 */ {v:4,c:0},/* 3 + 2 */ {v:5,c:0},/* 3 + 3 */ {v:6,c:0},/* 3 + 4 */ {v:7,c:0},/* 3 + 5 */ {v:8,c:0},/* 3 + 6 */ {v:9,c:0},/* 3 + 7 */ {v:0,c:1},/* 3 + 8 */ {v:1,c:1},/* 3 + 9 */ {v:2,c:1}],
[/* 4 + 0 */ {v:4,c:0},/* 4 + 1 */ {v:5,c:0},/* 4 + 2 */ {v:6,c:0},/* 4 + 3 */ {v:7,c:0},/* 4 + 4 */ {v:8,c:0},/* 4 + 5 */ {v:9,c:0},/* 4 + 6 */ {v:0,c:1},/* 4 + 7 */ {v:1,c:1},/* 4 + 8 */ {v:2,c:1},/* 4 + 9 */ {v:3,c:1}],
[/* 5 + 0 */ {v:5,c:0},/* 5 + 1 */ {v:6,c:0},/* 5 + 2 */ {v:7,c:0},/* 5 + 3 */ {v:8,c:0},/* 5 + 4 */ {v:9,c:0},/* 5 + 5 */ {v:0,c:1},/* 5 + 6 */ {v:1,c:1},/* 5 + 7 */ {v:2,c:1},/* 5 + 8 */ {v:3,c:1},/* 5 + 9 */ {v:4,c:1}],
[/* 6 + 0 */ {v:6,c:0},/* 6 + 1 */ {v:7,c:0},/* 6 + 2 */ {v:8,c:0},/* 6 + 3 */ {v:9,c:0},/* 6 + 4 */ {v:0,c:1},/* 6 + 5 */ {v:1,c:1},/* 6 + 6 */ {v:2,c:1},/* 6 + 7 */ {v:3,c:1},/* 6 + 8 */ {v:4,c:1},/* 6 + 9 */ {v:5,c:1}],
[/* 7 + 0 */ {v:7,c:0},/* 7 + 1 */ {v:8,c:0},/* 7 + 2 */ {v:9,c:0},/* 7 + 3 */ {v:0,c:1},/* 7 + 4 */ {v:1,c:1},/* 7 + 5 */ {v:2,c:1},/* 7 + 6 */ {v:3,c:1},/* 7 + 7 */ {v:4,c:1},/* 7 + 8 */ {v:5,c:1},/* 7 + 9 */ {v:6,c:1}],
[/* 8 + 0 */ {v:8,c:0},/* 8 + 1 */ {v:9,c:0},/* 8 + 2 */ {v:0,c:1},/* 8 + 3 */ {v:1,c:1},/* 8 + 4 */ {v:2,c:1},/* 8 + 5 */ {v:3,c:1},/* 8 + 6 */ {v:4,c:1},/* 8 + 7 */ {v:5,c:1},/* 8 + 8 */ {v:6,c:1},/* 8 + 9 */ {v:7,c:1}],
[/* 9 + 0 */ {v:9,c:0},/* 9 + 1 */ {v:0,c:1},/* 9 + 2 */ {v:1,c:1},/* 9 + 3 */ {v:2,c:1},/* 9 + 4 */ {v:3,c:1},/* 9 + 5 */ {v:4,c:1},/* 9 + 6 */ {v:5,c:1},/* 9 + 7 */ {v:6,c:1},/* 9 + 8 */ {v:7,c:1},/* 9 + 9 */ {v:8,c:1}]];

export type SubLUT = [[/* 0 - 0 */ {v:0,c:0},/* 0 - 1 */ {v:9,c:1},/* 0 - 2 */ {v:8,c:1},/* 0 - 3 */ {v:7,c:1},/* 0 - 4 */ {v:6,c:1},/* 0 - 5 */ {v:5,c:1},/* 0 - 6 */ {v:4,c:1},/* 0 - 7 */ {v:3,c:1},/* 0 - 8 */ {v:2,c:1},/* 0 - 9 */ {v:1,c:1}],
[/* 1 - 0 */ {v:1,c:0},/* 1 - 1 */ {v:0,c:0},/* 1 - 2 */ {v:9,c:1},/* 1 - 3 */ {v:8,c:1},/* 1 - 4 */ {v:7,c:1},/* 1 - 5 */ {v:6,c:1},/* 1 - 6 */ {v:5,c:1},/* 1 - 7 */ {v:4,c:1},/* 1 - 8 */ {v:3,c:1},/* 1 - 9 */ {v:2,c:1}],
[/* 2 - 0 */ {v:2,c:0},/* 2 - 1 */ {v:1,c:0},/* 2 - 2 */ {v:0,c:0},/* 2 - 3 */ {v:9,c:1},/* 2 - 4 */ {v:8,c:1},/* 2 - 5 */ {v:7,c:1},/* 2 - 6 */ {v:6,c:1},/* 2 - 7 */ {v:5,c:1},/* 2 - 8 */ {v:4,c:1},/* 2 - 9 */ {v:3,c:1}],
[/* 3 - 0 */ {v:3,c:0},/* 3 - 1 */ {v:2,c:0},/* 3 - 2 */ {v:1,c:0},/* 3 - 3 */ {v:0,c:0},/* 3 - 4 */ {v:9,c:1},/* 3 - 5 */ {v:8,c:1},/* 3 - 6 */ {v:7,c:1},/* 3 - 7 */ {v:6,c:1},/* 3 - 8 */ {v:5,c:1},/* 3 - 9 */ {v:4,c:1}],
[/* 4 - 0 */ {v:4,c:0},/* 4 - 1 */ {v:3,c:0},/* 4 - 2 */ {v:2,c:0},/* 4 - 3 */ {v:1,c:0},/* 4 - 4 */ {v:0,c:0},/* 4 - 5 */ {v:9,c:1},/* 4 - 6 */ {v:8,c:1},/* 4 - 7 */ {v:7,c:1},/* 4 - 8 */ {v:6,c:1},/* 4 - 9 */ {v:5,c:1}],
[/* 5 - 0 */ {v:5,c:0},/* 5 - 1 */ {v:4,c:0},/* 5 - 2 */ {v:3,c:0},/* 5 - 3 */ {v:2,c:0},/* 5 - 4 */ {v:1,c:0},/* 5 - 5 */ {v:0,c:0},/* 5 - 6 */ {v:9,c:1},/* 5 - 7 */ {v:8,c:1},/* 5 - 8 */ {v:7,c:1},/* 5 - 9 */ {v:6,c:1}],
[/* 6 - 0 */ {v:6,c:0},/* 6 - 1 */ {v:5,c:0},/* 6 - 2 */ {v:4,c:0},/* 6 - 3 */ {v:3,c:0},/* 6 - 4 */ {v:2,c:0},/* 6 - 5 */ {v:1,c:0},/* 6 - 6 */ {v:0,c:0},/* 6 - 7 */ {v:9,c:1},/* 6 - 8 */ {v:8,c:1},/* 6 - 9 */ {v:7,c:1}],
[/* 7 - 0 */ {v:7,c:0},/* 7 - 1 */ {v:6,c:0},/* 7 - 2 */ {v:5,c:0},/* 7 - 3 */ {v:4,c:0},/* 7 - 4 */ {v:3,c:0},/* 7 - 5 */ {v:2,c:0},/* 7 - 6 */ {v:1,c:0},/* 7 - 7 */ {v:0,c:0},/* 7 - 8 */ {v:9,c:1},/* 7 - 9 */ {v:8,c:1}],
[/* 8 - 0 */ {v:8,c:0},/* 8 - 1 */ {v:7,c:0},/* 8 - 2 */ {v:6,c:0},/* 8 - 3 */ {v:5,c:0},/* 8 - 4 */ {v:4,c:0},/* 8 - 5 */ {v:3,c:0},/* 8 - 6 */ {v:2,c:0},/* 8 - 7 */ {v:1,c:0},/* 8 - 8 */ {v:0,c:0},/* 8 - 9 */ {v:9,c:1}],
[/* 9 - 0 */ {v:9,c:0},/* 9 - 1 */ {v:8,c:0},/* 9 - 2 */ {v:7,c:0},/* 9 - 3 */ {v:6,c:0},/* 9 - 4 */ {v:5,c:0},/* 9 - 5 */ {v:4,c:0},/* 9 - 6 */ {v:3,c:0},/* 9 - 7 */ {v:2,c:0},/* 9 - 8 */ {v:1,c:0},/* 9 - 9 */ {v:0,c:0}]];

export type LUTIndex = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export type StrLUTIndex = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";

export type LUTValue = {v:LUTIndex, c:LUTIndex};

export type Add4_<X extends Number, Y extends Number> = 
    [AddLUT[X[0]][Y[0]],AddLUT[X[1]][Y[1]],AddLUT[X[2]][Y[2]],AddLUT[X[3]][Y[3]]];

export type Add4<X extends Number, Y extends Number> = 
    Unwrap4<PropCarry4<Add4_<X, Y>>>
;

export type PropCarry4Iter<X extends LUTValue[]> =
    [AddLUT[X[1]['c']][X[0]['v']],AddLUT[X[2]['c']][X[1]['v']],AddLUT[X[3]['c']][X[2]['v']],{v: X[3]['v'], c: 0}];

export type PropCarry4<X extends LUTValue[]> =
    PropCarry4Iter<PropCarry4Iter<PropCarry4Iter<PropCarry4Iter<X>>>>;

export type Sub4_ <X extends Number, Y extends Number> = 
[SubLUT[X[0]][Y[0]],SubLUT[X[1]][Y[1]],SubLUT[X[2]][Y[2]],SubLUT[X[3]][Y[3]]]
;

export type Sub4<X extends Number, Y extends Number> = 
    Unwrap4<PropBorrow4<Sub4_<X, Y>>>;

export type PropBorrow4Iter<X extends LUTValue[]> =
    [SubLUT[X[0]['v']][X[1]['c']],SubLUT[X[1]['v']][X[2]['c']],SubLUT[X[2]['v']][X[3]['c']],{v: X[3]['v'], c: 0}];

export type PropBorrow4<X extends LUTValue[]> =
    PropBorrow4Iter<PropBorrow4Iter<PropBorrow4Iter<PropBorrow4Iter<X>>>>;

export 
type GT1<X extends LUTIndex, Y extends LUTIndex> =
    SubLUT[Y][X]['c'] extends 1 ? 1 : 0;

type GT4_<R extends LUTValue[]> =
    GT1<R[0]['c'], 0> extends 1 ? 1 : GT1<R[1]['c'], 0> extends 1 ? 1 : GT1<R[2]['c'], 0> extends 1 ? 1 : GT1<R[3]['c'], R[2]['v']> extends 1 ? 1 : 0;;

export type GreaterThan4<Y extends Number, X extends Number> =
    GT4_<Sub4_<X, Y>>;

export type Not<X> =
    X extends 0 ? 1 : 0

export type Unwrap4<X extends LUTValue[]> =
    [X[0]['v'],X[1]['v'],X[2]['v'],X[3]['v']];

export type Literal = [[0,0,0,0],[0,0,0,1],[0,0,0,2],[0,0,0,3],[0,0,0,4],[0,0,0,5],[0,0,0,6],[0,0,0,7],[0,0,0,8],[0,0,0,9],[0,0,1,0],[0,0,1,1],[0,0,1,2],[0,0,1,3],[0,0,1,4],[0,0,1,5],[0,0,1,6],[0,0,1,7],[0,0,1,8],[0,0,1,9],[0,0,2,0],[0,0,2,1],[0,0,2,2],[0,0,2,3],[0,0,2,4],[0,0,2,5],[0,0,2,6],[0,0,2,7],[0,0,2,8],[0,0,2,9],[0,0,3,0],[0,0,3,1],[0,0,3,2],[0,0,3,3],[0,0,3,4],[0,0,3,5],[0,0,3,6],[0,0,3,7],[0,0,3,8],[0,0,3,9],[0,0,4,0],[0,0,4,1],[0,0,4,2],[0,0,4,3],[0,0,4,4],[0,0,4,5],[0,0,4,6],[0,0,4,7],[0,0,4,8],[0,0,4,9],[0,0,5,0],[0,0,5,1],[0,0,5,2],[0,0,5,3],[0,0,5,4],[0,0,5,5],[0,0,5,6],[0,0,5,7],[0,0,5,8],[0,0,5,9],[0,0,6,0],[0,0,6,1],[0,0,6,2],[0,0,6,3],[0,0,6,4],[0,0,6,5],[0,0,6,6],[0,0,6,7],[0,0,6,8],[0,0,6,9],[0,0,7,0],[0,0,7,1],[0,0,7,2],[0,0,7,3],[0,0,7,4],[0,0,7,5],[0,0,7,6],[0,0,7,7],[0,0,7,8],[0,0,7,9],[0,0,8,0],[0,0,8,1],[0,0,8,2],[0,0,8,3],[0,0,8,4],[0,0,8,5],[0,0,8,6],[0,0,8,7],[0,0,8,8],[0,0,8,9],[0,0,9,0],[0,0,9,1],[0,0,9,2],[0,0,9,3],[0,0,9,4],[0,0,9,5],[0,0,9,6],[0,0,9,7],[0,0,9,8],[0,0,9,9],[0,1,0,0],[0,1,0,1],[0,1,0,2],[0,1,0,3],[0,1,0,4],[0,1,0,5],[0,1,0,6],[0,1,0,7],[0,1,0,8],[0,1,0,9],[0,1,1,0],[0,1,1,1],[0,1,1,2],[0,1,1,3],[0,1,1,4],[0,1,1,5],[0,1,1,6],[0,1,1,7],[0,1,1,8],[0,1,1,9],[0,1,2,0],[0,1,2,1],[0,1,2,2],[0,1,2,3],[0,1,2,4],[0,1,2,5],[0,1,2,6],[0,1,2,7],[0,1,2,8],[0,1,2,9],[0,1,3,0],[0,1,3,1],[0,1,3,2],[0,1,3,3],[0,1,3,4],[0,1,3,5],[0,1,3,6],[0,1,3,7],[0,1,3,8],[0,1,3,9],[0,1,4,0],[0,1,4,1],[0,1,4,2],[0,1,4,3],[0,1,4,4],[0,1,4,5],[0,1,4,6],[0,1,4,7],[0,1,4,8],[0,1,4,9],[0,1,5,0],[0,1,5,1],[0,1,5,2],[0,1,5,3],[0,1,5,4],[0,1,5,5],[0,1,5,6],[0,1,5,7],[0,1,5,8],[0,1,5,9],[0,1,6,0],[0,1,6,1],[0,1,6,2],[0,1,6,3],[0,1,6,4],[0,1,6,5],[0,1,6,6],[0,1,6,7],[0,1,6,8],[0,1,6,9],[0,1,7,0],[0,1,7,1],[0,1,7,2],[0,1,7,3],[0,1,7,4],[0,1,7,5],[0,1,7,6],[0,1,7,7],[0,1,7,8],[0,1,7,9],[0,1,8,0],[0,1,8,1],[0,1,8,2],[0,1,8,3],[0,1,8,4],[0,1,8,5],[0,1,8,6],[0,1,8,7],[0,1,8,8],[0,1,8,9],[0,1,9,0],[0,1,9,1],[0,1,9,2],[0,1,9,3],[0,1,9,4],[0,1,9,5],[0,1,9,6],[0,1,9,7],[0,1,9,8],[0,1,9,9],[0,2,0,0],[0,2,0,1],[0,2,0,2],[0,2,0,3],[0,2,0,4],[0,2,0,5],[0,2,0,6],[0,2,0,7],[0,2,0,8],[0,2,0,9],[0,2,1,0],[0,2,1,1],[0,2,1,2],[0,2,1,3],[0,2,1,4],[0,2,1,5],[0,2,1,6],[0,2,1,7],[0,2,1,8],[0,2,1,9],[0,2,2,0],[0,2,2,1],[0,2,2,2],[0,2,2,3],[0,2,2,4],[0,2,2,5],[0,2,2,6],[0,2,2,7],[0,2,2,8],[0,2,2,9],[0,2,3,0],[0,2,3,1],[0,2,3,2],[0,2,3,3],[0,2,3,4],[0,2,3,5],[0,2,3,6],[0,2,3,7],[0,2,3,8],[0,2,3,9],[0,2,4,0],[0,2,4,1],[0,2,4,2],[0,2,4,3],[0,2,4,4],[0,2,4,5],[0,2,4,6],[0,2,4,7],[0,2,4,8],[0,2,4,9],[0,2,5,0],[0,2,5,1],[0,2,5,2],[0,2,5,3],[0,2,5,4],[0,2,5,5],[0,2,5,6],[0,2,5,7],[0,2,5,8],[0,2,5,9],[0,2,6,0],[0,2,6,1],[0,2,6,2],[0,2,6,3],[0,2,6,4],[0,2,6,5],[0,2,6,6],[0,2,6,7],[0,2,6,8],[0,2,6,9],[0,2,7,0],[0,2,7,1],[0,2,7,2],[0,2,7,3],[0,2,7,4],[0,2,7,5],[0,2,7,6],[0,2,7,7],[0,2,7,8],[0,2,7,9],[0,2,8,0],[0,2,8,1],[0,2,8,2],[0,2,8,3],[0,2,8,4],[0,2,8,5],[0,2,8,6],[0,2,8,7],[0,2,8,8],[0,2,8,9],[0,2,9,0],[0,2,9,1],[0,2,9,2],[0,2,9,3],[0,2,9,4],[0,2,9,5],[0,2,9,6],[0,2,9,7],[0,2,9,8],[0,2,9,9],[0,3,0,0],[0,3,0,1],[0,3,0,2],[0,3,0,3],[0,3,0,4],[0,3,0,5],[0,3,0,6],[0,3,0,7],[0,3,0,8],[0,3,0,9],[0,3,1,0],[0,3,1,1],[0,3,1,2],[0,3,1,3],[0,3,1,4],[0,3,1,5],[0,3,1,6],[0,3,1,7],[0,3,1,8],[0,3,1,9],[0,3,2,0],[0,3,2,1],[0,3,2,2],[0,3,2,3],[0,3,2,4],[0,3,2,5],[0,3,2,6],[0,3,2,7],[0,3,2,8],[0,3,2,9],[0,3,3,0],[0,3,3,1],[0,3,3,2],[0,3,3,3],[0,3,3,4],[0,3,3,5],[0,3,3,6],[0,3,3,7],[0,3,3,8],[0,3,3,9],[0,3,4,0],[0,3,4,1],[0,3,4,2],[0,3,4,3],[0,3,4,4],[0,3,4,5],[0,3,4,6],[0,3,4,7],[0,3,4,8],[0,3,4,9],[0,3,5,0],[0,3,5,1],[0,3,5,2],[0,3,5,3],[0,3,5,4],[0,3,5,5],[0,3,5,6],[0,3,5,7],[0,3,5,8],[0,3,5,9],[0,3,6,0],[0,3,6,1],[0,3,6,2],[0,3,6,3],[0,3,6,4],[0,3,6,5],[0,3,6,6],[0,3,6,7],[0,3,6,8],[0,3,6,9],[0,3,7,0],[0,3,7,1],[0,3,7,2],[0,3,7,3],[0,3,7,4],[0,3,7,5],[0,3,7,6],[0,3,7,7],[0,3,7,8],[0,3,7,9],[0,3,8,0],[0,3,8,1],[0,3,8,2],[0,3,8,3],[0,3,8,4],[0,3,8,5],[0,3,8,6],[0,3,8,7],[0,3,8,8],[0,3,8,9],[0,3,9,0],[0,3,9,1],[0,3,9,2],[0,3,9,3],[0,3,9,4],[0,3,9,5],[0,3,9,6],[0,3,9,7],[0,3,9,8],[0,3,9,9],[0,4,0,0],[0,4,0,1],[0,4,0,2],[0,4,0,3],[0,4,0,4],[0,4,0,5],[0,4,0,6],[0,4,0,7],[0,4,0,8],[0,4,0,9],[0,4,1,0],[0,4,1,1],[0,4,1,2],[0,4,1,3],[0,4,1,4],[0,4,1,5],[0,4,1,6],[0,4,1,7],[0,4,1,8],[0,4,1,9],[0,4,2,0],[0,4,2,1],[0,4,2,2],[0,4,2,3],[0,4,2,4],[0,4,2,5],[0,4,2,6],[0,4,2,7],[0,4,2,8],[0,4,2,9],[0,4,3,0],[0,4,3,1],[0,4,3,2],[0,4,3,3],[0,4,3,4],[0,4,3,5],[0,4,3,6],[0,4,3,7],[0,4,3,8],[0,4,3,9],[0,4,4,0],[0,4,4,1],[0,4,4,2],[0,4,4,3],[0,4,4,4],[0,4,4,5],[0,4,4,6],[0,4,4,7],[0,4,4,8],[0,4,4,9],[0,4,5,0],[0,4,5,1],[0,4,5,2],[0,4,5,3],[0,4,5,4],[0,4,5,5],[0,4,5,6],[0,4,5,7],[0,4,5,8],[0,4,5,9],[0,4,6,0],[0,4,6,1],[0,4,6,2],[0,4,6,3],[0,4,6,4],[0,4,6,5],[0,4,6,6],[0,4,6,7],[0,4,6,8],[0,4,6,9],[0,4,7,0],[0,4,7,1],[0,4,7,2],[0,4,7,3],[0,4,7,4],[0,4,7,5],[0,4,7,6],[0,4,7,7],[0,4,7,8],[0,4,7,9],[0,4,8,0],[0,4,8,1],[0,4,8,2],[0,4,8,3],[0,4,8,4],[0,4,8,5],[0,4,8,6],[0,4,8,7],[0,4,8,8],[0,4,8,9],[0,4,9,0],[0,4,9,1],[0,4,9,2],[0,4,9,3],[0,4,9,4],[0,4,9,5],[0,4,9,6],[0,4,9,7],[0,4,9,8],[0,4,9,9],[0,5,0,0],[0,5,0,1],[0,5,0,2],[0,5,0,3],[0,5,0,4],[0,5,0,5],[0,5,0,6],[0,5,0,7],[0,5,0,8],[0,5,0,9],[0,5,1,0],[0,5,1,1],[0,5,1,2],[0,5,1,3],[0,5,1,4],[0,5,1,5],[0,5,1,6],[0,5,1,7],[0,5,1,8],[0,5,1,9],[0,5,2,0],[0,5,2,1],[0,5,2,2],[0,5,2,3],[0,5,2,4],[0,5,2,5],[0,5,2,6],[0,5,2,7],[0,5,2,8],[0,5,2,9],[0,5,3,0],[0,5,3,1],[0,5,3,2],[0,5,3,3],[0,5,3,4],[0,5,3,5],[0,5,3,6],[0,5,3,7],[0,5,3,8],[0,5,3,9],[0,5,4,0],[0,5,4,1],[0,5,4,2],[0,5,4,3],[0,5,4,4],[0,5,4,5],[0,5,4,6],[0,5,4,7],[0,5,4,8],[0,5,4,9],[0,5,5,0],[0,5,5,1],[0,5,5,2],[0,5,5,3],[0,5,5,4],[0,5,5,5],[0,5,5,6],[0,5,5,7],[0,5,5,8],[0,5,5,9],[0,5,6,0],[0,5,6,1],[0,5,6,2],[0,5,6,3],[0,5,6,4],[0,5,6,5],[0,5,6,6],[0,5,6,7],[0,5,6,8],[0,5,6,9],[0,5,7,0],[0,5,7,1],[0,5,7,2],[0,5,7,3],[0,5,7,4],[0,5,7,5],[0,5,7,6],[0,5,7,7],[0,5,7,8],[0,5,7,9],[0,5,8,0],[0,5,8,1],[0,5,8,2],[0,5,8,3],[0,5,8,4],[0,5,8,5],[0,5,8,6],[0,5,8,7],[0,5,8,8],[0,5,8,9],[0,5,9,0],[0,5,9,1],[0,5,9,2],[0,5,9,3],[0,5,9,4],[0,5,9,5],[0,5,9,6],[0,5,9,7],[0,5,9,8],[0,5,9,9],[0,6,0,0],[0,6,0,1],[0,6,0,2],[0,6,0,3],[0,6,0,4],[0,6,0,5],[0,6,0,6],[0,6,0,7],[0,6,0,8],[0,6,0,9],[0,6,1,0],[0,6,1,1],[0,6,1,2],[0,6,1,3],[0,6,1,4],[0,6,1,5],[0,6,1,6],[0,6,1,7],[0,6,1,8],[0,6,1,9],[0,6,2,0],[0,6,2,1],[0,6,2,2],[0,6,2,3],[0,6,2,4],[0,6,2,5],[0,6,2,6],[0,6,2,7],[0,6,2,8],[0,6,2,9],[0,6,3,0],[0,6,3,1],[0,6,3,2],[0,6,3,3],[0,6,3,4],[0,6,3,5],[0,6,3,6],[0,6,3,7],[0,6,3,8],[0,6,3,9],[0,6,4,0],[0,6,4,1],[0,6,4,2],[0,6,4,3],[0,6,4,4],[0,6,4,5],[0,6,4,6],[0,6,4,7],[0,6,4,8],[0,6,4,9],[0,6,5,0],[0,6,5,1],[0,6,5,2],[0,6,5,3],[0,6,5,4],[0,6,5,5],[0,6,5,6],[0,6,5,7],[0,6,5,8],[0,6,5,9],[0,6,6,0],[0,6,6,1],[0,6,6,2],[0,6,6,3],[0,6,6,4],[0,6,6,5],[0,6,6,6],[0,6,6,7],[0,6,6,8],[0,6,6,9],[0,6,7,0],[0,6,7,1],[0,6,7,2],[0,6,7,3],[0,6,7,4],[0,6,7,5],[0,6,7,6],[0,6,7,7],[0,6,7,8],[0,6,7,9],[0,6,8,0],[0,6,8,1],[0,6,8,2],[0,6,8,3],[0,6,8,4],[0,6,8,5],[0,6,8,6],[0,6,8,7],[0,6,8,8],[0,6,8,9],[0,6,9,0],[0,6,9,1],[0,6,9,2],[0,6,9,3],[0,6,9,4],[0,6,9,5],[0,6,9,6],[0,6,9,7],[0,6,9,8],[0,6,9,9],[0,7,0,0],[0,7,0,1],[0,7,0,2],[0,7,0,3],[0,7,0,4],[0,7,0,5],[0,7,0,6],[0,7,0,7],[0,7,0,8],[0,7,0,9],[0,7,1,0],[0,7,1,1],[0,7,1,2],[0,7,1,3],[0,7,1,4],[0,7,1,5],[0,7,1,6],[0,7,1,7],[0,7,1,8],[0,7,1,9],[0,7,2,0],[0,7,2,1],[0,7,2,2],[0,7,2,3],[0,7,2,4],[0,7,2,5],[0,7,2,6],[0,7,2,7],[0,7,2,8],[0,7,2,9],[0,7,3,0],[0,7,3,1],[0,7,3,2],[0,7,3,3],[0,7,3,4],[0,7,3,5],[0,7,3,6],[0,7,3,7],[0,7,3,8],[0,7,3,9],[0,7,4,0],[0,7,4,1],[0,7,4,2],[0,7,4,3],[0,7,4,4],[0,7,4,5],[0,7,4,6],[0,7,4,7],[0,7,4,8],[0,7,4,9],[0,7,5,0],[0,7,5,1],[0,7,5,2],[0,7,5,3],[0,7,5,4],[0,7,5,5],[0,7,5,6],[0,7,5,7],[0,7,5,8],[0,7,5,9],[0,7,6,0],[0,7,6,1],[0,7,6,2],[0,7,6,3],[0,7,6,4],[0,7,6,5],[0,7,6,6],[0,7,6,7],[0,7,6,8],[0,7,6,9],[0,7,7,0],[0,7,7,1],[0,7,7,2],[0,7,7,3],[0,7,7,4],[0,7,7,5],[0,7,7,6],[0,7,7,7],[0,7,7,8],[0,7,7,9],[0,7,8,0],[0,7,8,1],[0,7,8,2],[0,7,8,3],[0,7,8,4],[0,7,8,5],[0,7,8,6],[0,7,8,7],[0,7,8,8],[0,7,8,9],[0,7,9,0],[0,7,9,1],[0,7,9,2],[0,7,9,3],[0,7,9,4],[0,7,9,5],[0,7,9,6],[0,7,9,7],[0,7,9,8],[0,7,9,9],[0,8,0,0],[0,8,0,1],[0,8,0,2],[0,8,0,3],[0,8,0,4],[0,8,0,5],[0,8,0,6],[0,8,0,7],[0,8,0,8],[0,8,0,9],[0,8,1,0],[0,8,1,1],[0,8,1,2],[0,8,1,3],[0,8,1,4],[0,8,1,5],[0,8,1,6],[0,8,1,7],[0,8,1,8],[0,8,1,9],[0,8,2,0],[0,8,2,1],[0,8,2,2],[0,8,2,3],[0,8,2,4],[0,8,2,5],[0,8,2,6],[0,8,2,7],[0,8,2,8],[0,8,2,9],[0,8,3,0],[0,8,3,1],[0,8,3,2],[0,8,3,3],[0,8,3,4],[0,8,3,5],[0,8,3,6],[0,8,3,7],[0,8,3,8],[0,8,3,9],[0,8,4,0],[0,8,4,1],[0,8,4,2],[0,8,4,3],[0,8,4,4],[0,8,4,5],[0,8,4,6],[0,8,4,7],[0,8,4,8],[0,8,4,9],[0,8,5,0],[0,8,5,1],[0,8,5,2],[0,8,5,3],[0,8,5,4],[0,8,5,5],[0,8,5,6],[0,8,5,7],[0,8,5,8],[0,8,5,9],[0,8,6,0],[0,8,6,1],[0,8,6,2],[0,8,6,3],[0,8,6,4],[0,8,6,5],[0,8,6,6],[0,8,6,7],[0,8,6,8],[0,8,6,9],[0,8,7,0],[0,8,7,1],[0,8,7,2],[0,8,7,3],[0,8,7,4],[0,8,7,5],[0,8,7,6],[0,8,7,7],[0,8,7,8],[0,8,7,9],[0,8,8,0],[0,8,8,1],[0,8,8,2],[0,8,8,3],[0,8,8,4],[0,8,8,5],[0,8,8,6],[0,8,8,7],[0,8,8,8],[0,8,8,9],[0,8,9,0],[0,8,9,1],[0,8,9,2],[0,8,9,3],[0,8,9,4],[0,8,9,5],[0,8,9,6],[0,8,9,7],[0,8,9,8],[0,8,9,9],[0,9,0,0],[0,9,0,1],[0,9,0,2],[0,9,0,3],[0,9,0,4],[0,9,0,5],[0,9,0,6],[0,9,0,7],[0,9,0,8],[0,9,0,9],[0,9,1,0],[0,9,1,1],[0,9,1,2],[0,9,1,3],[0,9,1,4],[0,9,1,5],[0,9,1,6],[0,9,1,7],[0,9,1,8],[0,9,1,9],[0,9,2,0],[0,9,2,1],[0,9,2,2],[0,9,2,3],[0,9,2,4],[0,9,2,5],[0,9,2,6],[0,9,2,7],[0,9,2,8],[0,9,2,9],[0,9,3,0],[0,9,3,1],[0,9,3,2],[0,9,3,3],[0,9,3,4],[0,9,3,5],[0,9,3,6],[0,9,3,7],[0,9,3,8],[0,9,3,9],[0,9,4,0],[0,9,4,1],[0,9,4,2],[0,9,4,3],[0,9,4,4],[0,9,4,5],[0,9,4,6],[0,9,4,7],[0,9,4,8],[0,9,4,9],[0,9,5,0],[0,9,5,1],[0,9,5,2],[0,9,5,3],[0,9,5,4],[0,9,5,5],[0,9,5,6],[0,9,5,7],[0,9,5,8],[0,9,5,9],[0,9,6,0],[0,9,6,1],[0,9,6,2],[0,9,6,3],[0,9,6,4],[0,9,6,5],[0,9,6,6],[0,9,6,7],[0,9,6,8],[0,9,6,9],[0,9,7,0],[0,9,7,1],[0,9,7,2],[0,9,7,3],[0,9,7,4],[0,9,7,5],[0,9,7,6],[0,9,7,7],[0,9,7,8],[0,9,7,9],[0,9,8,0],[0,9,8,1],[0,9,8,2],[0,9,8,3],[0,9,8,4],[0,9,8,5],[0,9,8,6],[0,9,8,7],[0,9,8,8],[0,9,8,9],[0,9,9,0],[0,9,9,1],[0,9,9,2],[0,9,9,3],[0,9,9,4],[0,9,9,5],[0,9,9,6],[0,9,9,7],[0,9,9,8],[0,9,9,9],[1,0,0,0],[1,0,0,1],[1,0,0,2],[1,0,0,3],[1,0,0,4],[1,0,0,5],[1,0,0,6],[1,0,0,7],[1,0,0,8],[1,0,0,9],[1,0,1,0],[1,0,1,1],[1,0,1,2],[1,0,1,3],[1,0,1,4],[1,0,1,5],[1,0,1,6],[1,0,1,7],[1,0,1,8],[1,0,1,9],[1,0,2,0],[1,0,2,1],[1,0,2,2],[1,0,2,3]];

export type ReverseLUT = [];

export type ToLiteral = any;


