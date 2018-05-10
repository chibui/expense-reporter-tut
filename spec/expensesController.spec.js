describe('expensesController', function () {

    var $controllerContructor,
        scope;

    beforeEach(module('app'));

    beforeEach(inject(function ($controller, $rootScope) {
        $controllerContructor = $controller;
        scope = $rootScope.$new();
    }));


    it('should have three expense items', function () {
        var ctrl = $controllerContructor('expensesController', { $scope : scope });

        expect(ctrl.expenseItems.length).toBe(3);
    });
});