import { Add4, Sub4, GreaterThan4, Not, Number, LUTIndex } from './lut_types'

import { Add5, Sub5 } from './lut_types5'

import { Literal } from './lut_types'

import { Add2 } from './lut32_types';



type _5 = [0, 0, 0, 5]
type _6 = [0, 0, 0, 6]

type _11 = Add4<_5, _6>

type _99 = Sub4<[0, 1, 1, 2], [0, 0, 1, 3]>
type _100 = Add4<_99, Literal[1]>

type _4 = Sub4<[0, 0, 0, 8], [0, 0, 0, 4]>

type _10000 = Add5<[0, 9, 9, 9, 9], [0, 0, 0, 0, 1]>

const val_99: _99 = [0, 0, 9, 9];

type _False = GreaterThan4<Literal[100], Literal[943]>

type _True = Not<_False>;

type _L5 = Literal[5];

type _U5 = ToLiteral<_L5>

type _400 = Add4<Literal[298], Literal[102]>

function inc<X extends Number>(x: X): Add4<X, Literal[1]> {
    return undefined as any;
}




class Tensor<Dims extends number[]> {
    _shape: [Literal[Dims[0]], Literal[Dims[1]]]
    constructor(...shape: Dims) {

    }
}

function dim<X extends number>(x: X): Literal[X] {
    return x as any;
}

const shape = tuple;

const p = shape(1, 2, 3);

const x = new Tensor(1, 2)

function square<S extends number[]>(x: Tensor<S>): Tensor<S> {
    return x;
}

 
const x2 = square(x);

function bigger<Dim1 extends number, Dim2 extends number>(x: Tensor<[Dim1, Dim2]>): 
    Tensor<[Dim1, Add4<Literal[Dim2], Literal[4]>> {
    return x as any;
}

const y = bigger(x);

const rank3 = new Tensor(dim(5), dim(5), dim(10));

const breaks = bigger(rank3);

const add = (x, y) => x + y

enum Ops {
    add = 'add'
}

enum Ops {
    three = 'three'
}


type Lit = number;
export function tuple<A extends Lit, B extends Lit, C extends Lit, D extends Lit>(a: A, b: B, c: C, d: D): [Literal[A], Literal[B], Literal[C], Literal[D]];
export function tuple<A extends Lit, B extends Lit, C extends Lit>(a: A, b: B, c: C): [Literal[A], Literal[B], Literal[C]];
export function tuple<A extends Lit, B extends Lit>(a: A, b: B): [Literal[A], Literal[B]];
export function tuple<A extends Lit>(a: A): [Literal[A]];
export function tuple(...args: any[]): any[] {
  return args;
}
