const n = null;
const number =0;
const notTrue= false;
const notFalse = true;


test(" Test toBe Null", ()=>{

    expect((n)).toBeNull();

});

test(" Test toBe defined", ()=>{

    expect((n)).toBeDefined();
    
});

test(" Test notTrue toBe false", ()=>{

    expect((notTrue)).toBeFalsy();
    
});

test(" Test notFalse toBe false", ()=>{

    expect((notFalse)).toBeTruthy();
    
});