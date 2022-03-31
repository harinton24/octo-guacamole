const array =["value1","value2", "value3"];

test(" Test array contains value2", ()=>{
    
    expect((array)).toContain("value2");

});

test(" Test array not contains Unac", ()=>{
    
    expect((array)).not.toContain("Unac");

});