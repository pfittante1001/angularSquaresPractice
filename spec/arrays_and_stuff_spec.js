
describe('array literals', () => {
    it('has them', () => {
        const things = [];
        expect(things[99]).toBeUndefined();
        things[0] = 1;
        things[1] = 3.4;
        things[2] = things;
    });
    it('they can be initialized', () => {
        const colors = ['red', 'green', 'orange'];
        expect(colors.length).toBe(3);
        expect(colors[0]).toBe('red');
    });

    it('destructing arrays', () => {
        const luckyNumbers = [1,2,108, 22];

        // const third = luckyNumbers[2];
        // const fourth = luckyNumbers[3];
        const [, , third, fourth] = luckyNumbers; //creates array with two named variables third and fourth
        expect(third).toBe(108);
        expect(fourth).toBe(22);
    });
});

describe('object literals', () => {
    it('a simple example', () => {
        const movie = {};
        movie.title = 'jaws';
        movie.director = 'speilberg';
        movie.yearReleased = 1977;
        
        expect(movie.title).toBe('jaws');
        expect(movie.yearReleased).toBe(1977);
        expect(movie.yaerReleased).toBeUndefined(); //this property is not defined because it is spelled wrong
    });
    it('initializing an object', () => {
        const person = {
            name:{
            first: 'Pete',
            last: 'Fittante'
        },
        roles: ['Kylo Ren', 'Ben Solo']
    };

    expect(person.name.last).toBe('Fittante');
    expect(person.roles[1]).toBe('Ben Solo');
    });
    it('property access', () => {
        
        const someObj = { color: 'blue' };

        expect(someObj.color).toBe('blue');
        expect(someObj['color']).toBe('blue');
        const cast = {
            'luke skywalker': 'Mark Hamill',
            'han solo': 'Harrison Ford'
        };
        expect(cast['luke skywalker']).toBe('Mark Hamill'); 
     });
     it('destructering an object', () => {
         const book = {
             title: 'Walden',
             author: 'Thoreau',
             price: 21.38
         };

        //  const title = book.title;
        //  const price = book.price;

        const {title, price: cost } = book;// renames price to cost

        expect(title).toBe('Walden');
        expect(cost).toBe(21.38);
     });

     describe('functions', () => {
         describe('functions definitions and literals', () => {
             it('creating a function', () => {
                 //named function
                 function add(a,b) {
                     return a+b;
                 }
                 const answer = add(2,2);
                 expect(answer).toBe(4);

                 //anonymous, immeadiatly invoked function expression (IIFE)
                 const answer2 = (function (a,b) {return a-b;})(10,2);
                 expect(answer2).toBe(8);
                 const multiply = function (a,b) { return a*b;};
                 expect(multiply(3,3)).toBe(9);

                 
             });

             it('should behave...', () => {
                 
             });
         });
     });
});