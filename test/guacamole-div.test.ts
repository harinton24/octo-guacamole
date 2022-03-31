import {div} from '../src/guacamole-div';

test(" Test Div Function 10/2 = 5", ()=>{
    
    expect(div(10,2)).toBe(5);

});

test(" Test Div Function 5/0 = error", ()=>{
    
    expect(div(5,0)).toBe(Infinity);

});