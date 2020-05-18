# chamo

a functional programming library

Derived completely from Reduce which only uses the for( of ) pattern for lists and for( in ) for objects.

Everything else is in terms of reduce and basic arthmetic operators.

Please see implementation on Github: https://github.com/sjlevens/chamo

Usage:

compose(
filter(a => true || 'a predicate function'),
map(a => 'a mappable function'),
)('an iterable e.g. [1, 2, 3], { a: 1, b: 2 }, "strings!"')

map((element, key) => `${key}${element}`, { a: 1, b: 2 }) // { a: 'a1', b: 'b2' }
map(a => a + 2)([1, 2, 3]) // [3, 4, 5]
