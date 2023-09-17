/**
 * 数据类型
 * number、boolean、string\object、bigint、symbol\undefin\null
 * Number\Boolean\String\Object\Symbol
 * 复合类型
 * class、Array
 * 元组 Tuple 接口 Interface 枚举 Enum
 *  */

/**
 * 元组 Tuple
 * 元素和类型固定的数组类型
 */
type Tuple = [number, string]
const arr: Tuple = [1, '']
/**
 * 接口 interface
 * 可以描述函数、对象、构造器的结构 可以用来描述 函数、构造器、索引类型（对象、class、数组）等复合类型
 * implements：实现
 * extends：继承
 * 在类的声明过程中，通过关键字extends来创建一个类的子类；
 * 一个类通过关键字implements声明自己使用一个或多个接口；
 * xtends 是继承某个类, 继承之后可以使用父类的方法, 也可以重写父类的方法;
 * implements 是实现多个接口, 接口的方法一般为空的, 必须重写才能使用
 * 2、extends是继承父类，只要那个类不是声明为final或者那个类定义为abstract的就能继承
 * JAVA中不支持多重继承，但是可以用接口 来实现，这样就要用到implements，继承只能继承一个类，

interface IPerson {
  name: string;
  age: number;
}

class Person implements IPerson {
  name: string;
  age: number;
  constructor (name: string, age: number) {
    this.name = name
    this.age = age
  }
}
/**
 * 对象
 */
const obj1: IPerson2 = {
  name: '',
  age: 2
}
/**
 * 函数
 */
interface sayHello {
  (name: string, sayValue: string): string;
}
const fu: sayHello = (name: string, sayValue: string) => {
  return name + sayValue
}
interface ParsonConstructor {
  new (name: string, age: number): IPerson
}

function createParson(ctor: ParsonConstructor) {
  return new ctor('张三', 123)
}
/**
 * 索引类型
 * 对象、class 索引了多个元素的类型
 * 可以动态添加属性
 */
interface IPerson2 {
  [props: string]: string | number;
}
const obj2: IPerson2 = {}
obj2.a = 2

/**
 * 枚举 Enum 是一系列值的复合
 */

enum Transpiler {
  Babel = 'babel',
  Postcss = 'postcss',
  Terser = 'terser',
  Prettier = 'prettier',
  TypeScriptCompiler = 'tsc'
}
const transpiler = Transpiler.TypeScriptCompiler

/**
 * 字面量类型
 */
const a: 11 = 11;
const b: 'aa' = 'aa';
const c: {a:1} = {a:1}
interface IStr {
  (str: `#${string}`): string
}
function createStr (str: `#${string}`): string {
 return str
}
createStr('#122121')
/**
 * 1. 字面量类型
 * 2. 基本数据类型
 * 3. 枚举类型
 * 4. 接口
 * 5. 元组
 * 6. 四种特殊类型
 * never 代表不可达，比如函数抛异常的时候，返回值就是never
 * void 代表空 可以是undefined 或 never
 * any 任意类型 任何类型都可以赋值给他，但是可不可以赋值给别的类型除了never
 * unknown 位置类型 任何类型都可赋值给他 但是他不可赋值给别的类型
 */



/**
 * 类型装饰
 */
interface IPerson3 {
  readonly name: string;
  age?: number;
}
const obj3: IPerson3 = {
  name: ''
}
// obj3.name = '21'
obj3.age = 2

/**
 * 条件类型
 * 用于条件判断时的 extends ；当 extends 用于表示条件判断时，可以总结出以下规律
 */
/**
 * 若位于 extends 两侧的类型相同，则 extends 在语义上可理解为 ==
 */
type res = 1 extends 2 ? true : false
type result = 'abc' extends 'abc' ? true : false
/**
 * 若位于 extends 右侧的类型包含位于 extends 左侧的类型(即狭窄类型 extends 宽泛类型)时，结果为 true，反之为 false。可以参考如下例子
 */
type result1 = '2' extends string | 2 ? true : false
/**
 * 当 extends 作用于对象时，若在对象中指定的 key 越多，则其类型定义的范围越狭窄。可以参考如下例子:
 */
type result2 = {a: true, b: false, c: ''} extends { a: true, b: false } ? 'a' : 'x'


/**
 * 在泛型类型中使用条件类型
 * https://segmentfault.com/a/1190000040769584 参考
 */

type Demo<T, U> = T extends U ? never : T
/**
 * 结合用于条件判断时的 extends，可知 'a' | 'b' | 'c' extends 'a' 是 false, 因此 Demo<'a' | 'b' | 'c', 'a'> 结果是 'a' | 'b' | 'c' 么?
 */
/**
 * 当条件类型作用于泛型类型时，联合类型会被拆分使用。
 * 即 Demo<'a' | 'b' | 'c', 'a'> 会被拆分为 'a' extends 'a'、'b' extends 'a'、'c' extends 'a'。
 * 用伪代码表示类似于:
 * function Demo(T, U) {
 * return T.map(val => {
 *  if (val !== U) return val
 *  return 'never'
  })
}

Demo(['a', 'b', 'c'], 'a') // ['never', 'b', 'c']
 */
const aad: Demo<'a' | 'b' | 'c', 'a'> = 'b';
/**
 * 此外根据 never 类型的定义 —— never 类型可分配给每种类型，但是没有类型可以分配给 never(除了 never 本身)。即 never | 'b' | 'c' 等价于 'b' | 'c'。
 * 因此 Demo<'a' | 'b' | 'c', 'a'> 的结果并不是 'a' | 'b' | 'c' 而是 'b' | 'c'。
 */
const adaff: Demo<never | '', 'a'> = ''

/**
 * 工具类型
 * Demo 类型的声明过程其实就是 TypeScript 官方提供的工具类型中 Exclude<Type, ExcludedUnion> 的实现原理，其用于将联合类型 ExcludedUnion 排除在 Type 类型之外。
 */
type T = Demo<'a' | 'b' | 'c' | 'd' | 'e', 'a'>

/**
 * 基于 Demo 类型定义，
 * 进一步地还可以实现官方工具类型中的 Omit<Type, Keys>
 * 其用于移除对象 Type中满足 keys 类型的属性值。
*/
namespace Omit {
  type Omit<Type, Keys> = {
    [P in Demo<keyof Type, Keys>]: Type
  }
  interface Todo {
    title: string;
    description: string;
    completed: boolean;
  }
  type T = Omit<Todo, 'description'>
}
/** 逃离舱
 * 如果想让 Demo<'a' | 'b' | 'c', 'a'> 的结果为 'a' | 'b' | 'c' 是否可以实现呢?
 * 如果不想遍历泛型中的每一个类型，可以用方括号[]将泛型给括起来以表示使用该泛型的整体部分。
 */
namespace 逃离舱 {
  type Demo<T, U> = [T] extends [U] ? never : T
  type result = Demo<'a' | 'b' | 'c', 'a'>
  var res: result = 'c'
}