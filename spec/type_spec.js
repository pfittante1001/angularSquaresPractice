describe('data types in javascript', () => {
    describe('strings in javascript', () => {
        it('can be single-quotes', () => {
            const name = 'Teddy';
            expect(name).toBe("Teddy");
        });
        it('fun with strings', () => {
            const name = "john O'Connor";
            const report = 'She said "you suck" the big one'; //u can use double quotes inside a string delineiated with single quotes and visa versa
        });
        it('has template strings', () => {
            let name = 'Sue', age = 42;

            const m1 = `Her name is ` + name + ` and her age is ` + age; //use back tics for concatination in javascript
            expect(m1).toBe("Her name is Sue and her age is 42");

            const m2 = `Her name is ${name} and her age is ${age}`;
            expect(m2).toBe("Her name is Sue and her age is 42");

            const myLifeStory = `By Jeff
            It was a dark and stormy night.
            The end`;
            console.log(myLifeStory);


        });


    });

    describe('a few actual types of literals', () => {
        it('some exaples', () => {
            const v1 = 'Tacos';
            expect(typeof v1).toBe('string');
            const v2 = 3.1415927;
            expect(typeof v2).toBe('number');
            const v3 = true;
            expect(typeof v3).toBe("boolean");
        });
        

    });
});