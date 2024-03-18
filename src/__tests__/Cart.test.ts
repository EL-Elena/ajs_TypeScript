import Cart from '../service/Cart';
import Movie from '../domain/Movie';

let firstMovie = new Movie(14, "Мстители", 250, 2012, "США", "Avengers Assemble!", ["фантастика", "боевик"], "137 мин. / 02:17");
let secondMovie = new Movie(15, "Мстители 2", 300, 2014, "США", "Avengers Assemble again!", ["фантастика", "боевик"], "137 мин. / 02:17");
let thirdMovie = new Movie(16, "Мстители 3", 350, 2016, "США", "Avengers Assemble again and again!", ["фантастика", "боевик"], "137 мин. / 02:17");
const cart = new Cart();
cart.add(firstMovie);
cart.add(secondMovie);
cart.add(thirdMovie);

test('Checking add and delete new movies', () => {
  cart.delete(15);
  expect(cart.items.length).toBe(2);
});

test('new card should be empty', () => {
  expect(cart.total()).toBe(600);
});

test('new card should be empty', () => {
  expect(cart.totalWithDiscount(15)).toBe(510);
});
