// import { expect } from "expect";
import { average,determineGrade } from "../GradeTest.js";


// jest.test('Average unit testing',()=>{
//     return test.expect(average([3,3,3,3])).toEqual(3);
// })

// jest.test('jjj unit testing',()=>{
//     return test.expect(average([3,3,3,3])).toEqual(3);
// })

describe('Test',()=>{
    test('Average Test',()=>{
        expect(average([3,3,3,3])).toEqual(3);
    }),
    test('Grade Test',()=>{
        expect(determineGrade(average([3,3,3,3]))).toEqual('E')
    })
})