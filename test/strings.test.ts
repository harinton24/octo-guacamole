const nombre = "Unac";

test(" Test Unac contains Un", ()=>{
    
    expect((nombre)).toMatch("Un");

});

test(" Test Unac not contains P", ()=>{
    
    expect((nombre)).not.toMatch("P");

});

