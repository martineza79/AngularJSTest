describe('My first test', function () {
    it('should be able to test sum of two values', function () {
        var sum = 10 + 20;
        //expect(sum).toEqual(300); makes the test fail
        expect(sum).toEqual(30);//use any other number than 30 to make this test fail

    });
});