
import { Sub4_, SubLUT, AddLUT, LUTIndex, StrLUTIndex, LUTValue } from './lut_types';

type AddN<Num1 extends any[], Num2 extends any[]> = {
    [K in (keyof Num2 & keyof Num1)]: Num1[K] extends LUTIndex 
                       ? Num2[K] extends (keyof AddLUT[Num1[K]]) 
                       ? AddLUT[Num1[K]][Num2[K]] : Num2[K] : Num1[K];
}

type p = AddN<[1, 2, 3, 8], [3, 4, 5, 9]>;

console.error(emit);

type A = AddLUT;
type S = SubLUT;

type Add4_<X extends LUTIndex[], Y extends LUTIndex[]> = 
    [A[X[0]][Y[0]], A[X[1]][Y[1]], A[X[2]][Y[2]], A[X[3]][Y[3]]]

type l = Add4_<[1, 2, 3, 8], [3, 4, 5, 9]>
type lp = PropCarry4Iter<l>;
type PropCarry4Iter<X extends LUTValue[]> =
     [A[X[1]['c']][X[0]['v']], 
      A[X[2]['c']][X[1]['v']], 
      A[X[3]['c']][X[2]['v']],
      {v: X[3]['v'], c: 0}]

type PropCarry4<X extends LUTValue[]> = PropCarry4Iter<PropCarry4Iter<PropCarry4Iter<PropCarry4Iter<X>>>>

type Unwrap4<X extends [LUTValue, LUTValue, LUTValue, LUTValue]> = 
    [X[0]['v'], X[1]['v'], X[2]['v'], X[3]['v']]


type PropBorrow4Iter<X extends LUTValue[]> =
    [S[X[0]['v']][X[1]['c']],
     S[X[1]['v']][X[2]['c']],
     S[X[2]['v']][X[3]['c']],
     {v: X[3]['v'], c: 0}]


type PropBorrow4<X extends LUTValue[]> = PropBorrow4Iter<PropBorrow4Iter<PropBorrow4Iter<PropBorrow4Iter<X>>>>

type _6 = SubLUT[8][2]

type _9 = PropBorrow4<Sub4_<[0, 0, 1, 4], [0, 0, 0, 5]>>;

type Add4<X extends LUTIndex[], Y extends LUTIndex[]> = 
    Unwrap4<PropCarry4<Add4_<X, Y>>>

type _100 = [0, 1, 0, 0]
type _99 = [0, 0, 9, 9]
type _900 = [0, 9, 0, 0]
type _8999 = [8, 9, 9, 9]
type _199 = Add4<_100, _99>
type _1000 = Add4<_900, _100>
type _9999 = Add4<_1000, _8999>
type _overflow = Add4<_9999, [0, 0, 0, 1]>

// tail recur experiments


type CarryNeeded4<N extends LUTValue[]> =
    1 extends N[0]['c'] | N[1]['c'] | N[2]['c'] | N[3]['c'] ? 'true' : 'false';

interface PropCarry4_<X extends LUTValue[]> {
    prop: CarryNeeded4<X> extends 'true' ? PropCarry4_<PropCarry4Iter<X>> : X;
}

type c = CarryNeeded4<l>;
type c2 = CarryNeeded4<[A[0][1]]>;

