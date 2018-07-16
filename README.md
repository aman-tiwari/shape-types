# shape-types

how much math can u do using just types?

(Re)generate the lookup tables & add/subtract "type functions" with `yarn run build`

`gen_types.ts` generates the types.

Look at `index.ts` for how to use.

Currently working (addition, subtraction, literal -> type number conversion, greater than comparsion, logical not):

```typescript

// hovering over 400 will show u [0, 4, 0, 0]
type _400 = Add4<Literal[298], Literal[102]>

type _99 = Sub4<[0, 1, 0, 0], Literal[1]>

type _False = GreaterThan4<Literal[10], Literal[100]>

type _True = Not<_False>

function inc<X extends Number>(x: X): Add4<X, Literal[1]> {
    return ...;
}

// hovering over x will show you [0, 1, 0, 1]
const x = inc([0, 1, 0, 0]);
```

TODO:

* Multiplication & Division
* More comparison operators
* Better way to turn literal to array of digits
* Supporting variable digit numbers
* Support turning array of digits back into literal
