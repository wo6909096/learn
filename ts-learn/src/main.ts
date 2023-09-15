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
 */
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
const obj1: IPerson = {
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
 */
type res = 1 extends 2 ? true : false