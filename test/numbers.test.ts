import {sum} from '../src/guacamole';

test(" Test Sum Function 5+5 greater than 5", ()=>{
    
    expect(sum(5,5)).toBeGreaterThan(5);

});


test(" Test Sum Function 5+5 greater or equal than 10", ()=>{
    
    expect(sum(5,5)).toBeGreaterThanOrEqual(10);

});

test(" Test Sum Function 2+1 less than 4", ()=>{
    
    expect(sum(2,1)).toBeLessThan(4);

});