const ahmed=require('./index')
describe("PrintHello",()=>{
    test('print hello should return Hello',()=>{
        expect(ahmed.printHello()).toBe("Hello");
    })
})
describe("add numbers",()=>{
    test("Add two positive",()=>{
        expect(ahmed.addNumber(1,2)).toBe(3)
    })
    test("Add two positive",()=>{
        expect(ahmed.addNumber(0,0)).toBe(0)
    })
    test("Add two positive",()=>{
        expect(ahmed.addNumber(-1,-2)).toBe(-3)
    })
    test("Add two positive",()=>{
        expect(ahmed.addNumber(100,2111)).toBe(2211)
    })
})
describe("reverse string",()=>{
    test("reverse hello",()=>{
        expect(ahmed.reverseString("hello")).toBe("olleh")
    })
    test("reverse tamer",()=>{
        expect(ahmed.reverseString("tamer")).toBe("remat")
    })
    test("reverse yooo",()=>{
        expect(ahmed.reverseString("yooo")).toBe("oooy")
    })
    test("reverse symbol",()=>{
        expect(ahmed.reverseString("@#@")).toBe("@#@")
    })
    test("reverse alphanum",()=>{
        expect(ahmed.reverseString("012ah")).toBe("ha210")
    })
})
