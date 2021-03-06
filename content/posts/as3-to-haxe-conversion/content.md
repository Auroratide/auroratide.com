Haxe shares many similarities with the Actionscript 3 (AS3) language, and therefore AS3 developers like myself can pick it up rather easily. There are, of course, some immediate differences that should be noted if wanting to write Haxe code, and I attempt to note the most important ones here. This post borrows and augments the information found at [OpenFL's site](http://www.openfl.org/archive/developer/documentation/actionscript-developers/).

Please note that this is by no means a complete guide to Haxe! One of the most glaring differences between AS3 and Haxe is Haxe's incredibly expansive functionality. For instance, Haxe allows for generic type parameters whereas AS3 does not; such a feature can be found in Java generics and C++ templates. Haxe furthermore allows for Enum structures, inlining, type abstraction, and much more. I will explore such things in later posts, but you can get a head start by peeking at [Haxe's manual](http://haxe.org/manual/introduction.html).

Below, though, you can find some quick conversions from AS3 code to Haxe, along with some notes about how Haxe compares with Java or C++ for those more familiar with those languages.

## Basic Types

* Both Number and Float are IEEE double-precision numbers and use 64 bits
* Many sources will compare Haxe's Dynamic construct to AS3 or Java's Object class. However, I believe that Dynamic is more similar to the * (untyped) in AS3. Dynamic removes compile-time type checking just like the * typing in AS3.
* We essentially replace Vectors with Arrays. In Java, this is the same as ArrayList&lt;T&gt;, and in C++, we use vector&lt;T&gt;.

<horizontal-flex>
<div style="flex: 1; margin: 0;">

### AS3

1. int
2. uint
3. Number
4. Boolean
5. void
6. Object
7. Array
8. Vector.&lt;T&gt;

</div>
<div style="flex: 1; margin: 0;">

### Haxe

1. Int
2. UInt
3. Float
4. Bool
5. Void
6. Dynamic (?)
7. Array&lt;Dynamic&gt;
8. Array&lt;T&gt;

</div>
</horizontal-flex>

## Class Definition

* Constructors in Haxe are now named `new` rather than the class name
* Do NOT include `public` before `class` in Haxe

### AS3

```actionscript
package com.newprogrammer{ 
    public class Circle extends Shape implements Drawable { 
        public function Circle() { } 
    } 
}
```

### Haxe

```haxe
package com.newprogrammer; 
 
class Circle extends Shape implements Drawable {
    public function new() { } 
}
```

## Properties

* There is no `const` keyword in Haxe. Instead we use `inline var` for constants.
* I will discuss accessors more in detail in a future post.

### AS3

```actionscript
public class Circle {
    public static const PI: Number = 3.1415;
 
    private var _radius: Number; 
 
    public function get radius(): Number{ 
        return _radius; 
    } 
    public function set radius(value: Number): void { 
        if(value < 0)
            throw "Error";
        _radius = value;
    } 
}
```

### Haxe

```haxe
class Circle { 
    public static inline var PI: Float = 3.1415;
    public var radius(default, set): Float;
 
    public function set_radius(value: Float): Float { 
        if(value < 0) 
            throw "Error"; 
        return radius = value; 
    } 
}
```

## For Loops

* for loops do not support the traditional C syntax like AS3 or Java do
* for loops only work on iterable entities
* Haxe uses the "`in`" keyword like Java uses the colon (:) operator

### AS3

```actionscript
for(var i: int = 0; i < 100; ++i) { } 
 
for each(var v: T in items) { }
```

### Haxe

```haxe
for(i in 0...100) { } 
 
for(v in items) { }
```

## Switch Statements

* Haxe always has an implicit `break` statement for each case
* Haxe allows the use of [pattern matching](http://haxe.org/manual/lf-pattern-matching.html) in case expressions (not pictured above), making switch statements overall very powerful

### AS3

```actionscript
switch(value) { 
    case 1: 
        trace("Value is 1"); 
        break; 
    case 2: 
        trace("Value is 2"); 
        break; 
    default: 
        trace("Default reached"); 
}
```

### Haxe

```haxe
switch(value) { 
    case 1: 
        trace("Value is 1"); 
    case 2: 
        trace("Value is 2"); 
    default: 
        trace("Default reached"); 
}
```

## Hash Tables

* Haxe has a new Map structure that handles hash tables more elegantly

### AS3

```actionscript
var table: Object = new Object(); 
table["key"] = 1; 
 
if(table.hasOwnProperty("key")) 
    trace(table["key"]); 
 
for(var key: Object in table) { } 
 
delete table["key"];
```

### Haxe

```haxe
var table = new Map<String, Int>();
table["key"] = 1;
 
if (table.exists("key")) 
    trace(table["key"]); 
 
for (key in table.keys()) { } 
 
table.remove("key");
```

## Other Differences

Some other notable differences include:

* Haxe allows for type inference. In AS3, not giving a variable a type will cause it to be untyped. Haxe will actually guess what the type of a value is if not given.
* Rather than having a generic Function class, Haxe has its own way of assigning types to functions. You can read about it [here](http://haxe.org/manual/types-function.html).
* Haxe's `private` access specifier is actually equivalent to `protected` in other languages, meaning that child classes can access private members of their parents. Because of this, _there is no notion of a truly private variable_.

[OpenFL's page](http://www.openfl.org/archive/developer/documentation/actionscript-developers/) specifies even more differences regarding casting and reflection. In future posts, I will begin looking at some of Haxe's features in more depth.

And, since it is 25 December, Merry Christmas to all readers!
