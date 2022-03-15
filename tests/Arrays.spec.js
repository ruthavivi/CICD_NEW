const expect=require('chai').expect;

describe('Array',()=>{
    describe('#sort',()=>{
        it('should sort the Array by name',()=>{
            var names=['dani','moshe','adam'];
            expect(names.sort()).to.be.eql(['adam','dani','moshe']);
        });
    });
});