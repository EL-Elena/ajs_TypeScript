"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cart_1 = require("../service/Cart");
var Movie_1 = require("../domain/Movie");
var firstMovie = new Movie_1.default(14, "Мстители", 250, 2012, "США", "Avengers Assemble!", ["фантастика", "боевик"], "137 мин. / 02:17");
var secondMovie = new Movie_1.default(15, "Мстители 2", 300, 2014, "США", "Avengers Assemble again!", ["фантастика", "боевик"], "137 мин. / 02:17");
var thirdMovie = new Movie_1.default(16, "Мстители 3", 350, 2016, "США", "Avengers Assemble again and again!", ["фантастика", "боевик"], "137 мин. / 02:17");
var cart = new Cart_1.default();
cart.add(firstMovie);
cart.add(secondMovie);
cart.add(thirdMovie);
test('Checking add and delete new movies', function () {
    cart.delete(15);
    expect(cart.items.length).toBe(2);
});
test('new card should be empty', function () {
    expect(cart.total()).toBe(600);
});
test('new card should be empty', function () {
    expect(cart.totalWithDiscount(15)).toBe(510);
});
//# sourceMappingURL=Cart.test.js.map