
import { Number, Sub4_, SubLUT, AddLUT, LUTIndex, StrLUTIndex, LUTValue, Sub4, Literal } from './lut_types';

type AddN<Num1 extends any[], Num2 extends any[]> = {
    [K in (keyof Num2 & keyof Num1)]: Num1[K] extends LUTIndex 
                       ? Num2[K] extends (keyof AddLUT[Num1[K]]) 
                       ? AddLUT[Num1[K]][Num2[K]] : Num2[K] : Num1[K];
}

type p = AddN<[1, 2, 3, 8], [3, 4, 5, 9]>;

console.error(emit);

type Shape = Number[];

type Shape4 = [Number, Number, Number, Number]

type Tensor<S extends Shape> = { shape: S, v: 'ok' }

function doSomething<S extends Shape>(t: Tensor<S>): Tensor<[Add4<S[0], [0, 0, 0, 1]>]> {
    return { shape:t.shape, v: 'ok'} as any;
}

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

import { AddLUT } from './lut_types1024'

type _vv = AddL


type _6 = SubLUT[8][2]

type _9 = Unwrap4<PropBorrow4<Sub4_<[0, 0, 1, 4], [0, 0, 0, 5]>>>;

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

type GT1<X extends LUTIndex, Y extends LUTIndex> =
    SubLUT[Y][X]['c'] extends 1 ? 1 : 0;

type ppp = GT1<3, 2>

type GT_<R extends LUTValue[]> =
    GT1<R[0]['c'], 0> extends 1 ? 1
    : GT1<R[1]['c'], R[0]['v']> extends 1 ? 1
    : GT1<R[2]['c'], R[1]['v']> extends 1 ? 1
    : GT1<R[3]['c'], R[2]['v']> extends 1 ? 1 : 0;

type GT<X extends Number, Y extends Number> =
    GT_<Sub4_<Y, X>>    


type pp = GT<Literal[100], Literal[10]>

type lll = GT<[0, 0, 0, 9], [0, 0, 0, 8]>
type lllll_ = Sub4_<[0, 0, 0, 9], [0, 0, 1, 0]>
type lllll = GT<[0, 0, 0, 9], [0, 0, 1, 0]>
type llllll = GT<[0, 1, 0, 0], [0, 1, 0, 0]>
// tail recur experiments


type CarryNeeded4<N extends LUTValue[]> =
    1 extends N[0]['c'] | N[1]['c'] | N[2]['c'] | N[3]['c'] ? 'true' : 'false';

interface PropCarry4_<X extends LUTValue[]> {
    prop: CarryNeeded4<X> extends 'true' ? PropCarry4_<PropCarry4Iter<X>> : X;
}

type c = CarryNeeded4<l>;
type c2 = CarryNeeded4<[A[0][1]]>;





export type Lit = string | number | boolean | undefined | null | void | {};

// infers a tuple type for up to twelve values (add more here if you need them)
export function tuple<A extends Lit, B extends Lit, C extends Lit, D extends Lit, E extends Lit, F extends Lit, G extends Lit, H extends Lit, I extends Lit, J extends Lit, K extends Lit, L extends Lit>(a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J, k: K, l: L): [A, B, C, D, E, F, G, H, I, J, K, L];
export function tuple<A extends Lit, B extends Lit, C extends Lit, D extends Lit, E extends Lit, F extends Lit, G extends Lit, H extends Lit, I extends Lit, J extends Lit, K extends Lit>(a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J, k: K): [A, B, C, D, E, F, G, H, I, J, K];
export function tuple<A extends Lit, B extends Lit, C extends Lit, D extends Lit, E extends Lit, F extends Lit, G extends Lit, H extends Lit, I extends Lit, J extends Lit>(a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J): [A, B, C, D, E, F, G, H, I, J];
export function tuple<A extends Lit, B extends Lit, C extends Lit, D extends Lit, E extends Lit, F extends Lit, G extends Lit, H extends Lit, I extends Lit>(a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I): [A, B, C, D, E, F, G, H, I];
export function tuple<A extends Lit, B extends Lit, C extends Lit, D extends Lit, E extends Lit, F extends Lit, G extends Lit, H extends Lit>(a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H): [A, B, C, D, E, F, G, H];
export function tuple<A extends Lit, B extends Lit, C extends Lit, D extends Lit, E extends Lit, F extends Lit, G extends Lit>(a: A, b: B, c: C, d: D, e: E, f: F, g: G): [A, B, C, D, E, F, G];
export function tuple<A extends Lit, B extends Lit, C extends Lit, D extends Lit, E extends Lit, F extends Lit>(a: A, b: B, c: C, d: D, e: E, f: F): [A, B, C, D, E, F];
export function tuple<A extends Lit, B extends Lit, C extends Lit, D extends Lit, E extends Lit>(a: A, b: B, c: C, d: D, e: E): [A, B, C, D, E];
export function tuple<A extends Lit, B extends Lit, C extends Lit, D extends Lit>(a: A, b: B, c: C, d: D): [A, B, C, D];
export function tuple<A extends Lit, B extends Lit, C extends Lit>(a: A, b: B, c: C): [A, B, C];
export function tuple<A extends Lit, B extends Lit>(a: A, b: B): [A, B];
export function tuple<A extends Lit>(a: A): [A];
export function tuple(...args: any[]): any[] {
  return args;
}


type Nonzero = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

type LUT2 = [

]

const v = tuple(1, 2, 3, 4);