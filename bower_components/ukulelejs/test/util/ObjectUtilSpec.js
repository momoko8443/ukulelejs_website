describe("ObjectUtil Test Suite", function () {
    var arrType1, arrType2, stringType, numberType, booleanType, nullType, undefinedType, blankStringType, zeroType, dateType, objectType, functionType;

    beforeAll(function () {
        arrType1 = [];
        arrType2 = new Array();
        stringType = "abcd";
        numberType = 1234;
        booleanType = false;
        nullType = null;
        undefinedType = undefined;
        blankStringType = "";
        zeroType = 0;
        dateType = new Date();
        objectType = {};
        functionType = function () {};
    });

    it("test isArray", function () {

        var result1 = ObjectUtil.isArray(arrType1);
        var result2 = ObjectUtil.isArray(arrType2);
        var result3 = ObjectUtil.isArray(stringType);
        var result4 = ObjectUtil.isArray(booleanType);
        var result5 = ObjectUtil.isArray(nullType);
        var result6 = ObjectUtil.isArray(undefinedType);

        expect(result1).toBe(true);
        expect(result2).toBe(true);
        expect(result3).toBe(false);
        expect(result4).toBe(false);
        expect(result5).toBe(false);
        expect(result6).toBe(false);

    });

    it("test getType", function () {
        expect(ObjectUtil.getType(arrType1)).toBe('array');
        expect(ObjectUtil.getType(arrType2)).toBe('array');
        expect(ObjectUtil.getType(stringType)).toBe('string');
        expect(ObjectUtil.getType(numberType)).toBe('number');
        expect(ObjectUtil.getType(booleanType)).toBe('boolean');
        expect(ObjectUtil.getType(nullType)).toBe('object');
        expect(ObjectUtil.getType(undefinedType)).toBe('undefined');
        expect(ObjectUtil.getType(blankStringType)).toBe('string');
        expect(ObjectUtil.getType(zeroType)).toBe('number');
        expect(ObjectUtil.getType(dateType)).toBe('object');
        expect(ObjectUtil.getType(objectType)).toBe('object');
        expect(ObjectUtil.getType(functionType)).toBe('function');
    });

    it("test deepClone", function () {
        function ClassA(){
            this.name = "momoko";
            this.sex = "male";
            this.children = [{'name':'lowe','sex':'male'}];
        }
        var inst = new ClassA();
        var cloneObject = ObjectUtil.deepClone(inst);
        expect(cloneObject.name).toBe(inst.name);
        expect(cloneObject.sex).toBe(inst.sex);
        expect(cloneObject.children.length).toBe(inst.children.length);
        
        for(var i=0;i<cloneObject.children.length;i++){
            var cloneChild = cloneObject.children[i];
            var instChild = inst.children[i];
            expect(cloneChild.name).toBe(instChild.name);
        }
        
    });
});