
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
    [AddLUT[X[1]['c']][X[0]['v']],AddLUT[X[2]['c']][X[1]['v']],AddLUT[X[3]['c']][X[2]['v']],{v: X[2]['v'], c: 0}];

export type PropCarry4<X extends LUTValue[]> =
    PropCarry4Iter<PropCarry4Iter<PropCarry4Iter<PropCarry4Iter<X>>>>;

export type Sub4_ <X extends Number, Y extends Number> = 
[SubLUT[X[0]][Y[0]],SubLUT[X[1]][Y[1]],SubLUT[X[2]][Y[2]],SubLUT[X[3]][Y[3]]]
;

export type Sub4<X extends Number, Y extends Number> = 
    Unwrap4<PropBorrow4<Sub4_<X, Y>>>;

export type PropBorrow4Iter<X extends LUTValue[]> =
    [SubLUT[X[0]['v']][X[1]['c']],SubLUT[X[1]['v']][X[2]['c']],SubLUT[X[2]['v']][X[3]['c']],{v: X[2]['v'], c: 0}];

export type PropBorrow4<X extends LUTValue[]> =
    PropBorrow4Iter<PropBorrow4Iter<PropBorrow4Iter<PropBorrow4Iter<X>>>>;

export type Unwrap4<X extends LUTValue[]> =
    [X[0]['v'],X[1]['v'],X[2]['v'],X[3]['v']];


