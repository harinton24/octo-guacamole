import {sum} from '../src/guacamole';

test(" Test Sum Function 2+2 = 4", ()=>{
    
    expect(sum(2,2)).toBe(4);


});

test(" Test Sum Function 5+5 = 10", ()=>{
    
    expect(sum(5,5)).toBe(10);


});