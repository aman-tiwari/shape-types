import { Add4, Sub4 } from './lut_types'

import { Add5, Sub5 } from './lut_types5'

import { Literal } from './lut_types'

type _5 = [0, 0, 0, 5]
type _6 = [0, 0, 0, 6]

type _11 = Add4<_5, _6>

type _99 = Sub4<[0, 1, 1, 2], [0, 0, 1, 3]>

type _10000 = Add5<[0, 9, 9, 9, 9], [0, 0, 0, 0, 1]>

const val_99: _99 = [0, 0, 9, 9];


type _L5 = Literal[5];

type _400 = Add4<Literal[298], Literal[102]>