const fs = require('fs');
const { faker } = require('@faker-js/faker');
const fsPromises = fs.promises;

async function writeToFile(filename, data) {
    await fsPromises.writeFile(filename, data);
}

async function generateNames(quantity = 1) {
    const names = [];

    for (let i = 0; i < quantity; i++) {
        const name = `${faker.person.firstName()} ${faker.person.lastName()}`;
        const email = faker.internet.email().toLowerCase();
        names.push(`${name}, ${email}`);
    }

    return names;
}

async function main() {
    const names = await generateNames(10);

    await writeToFile('names.txt', names.join('\n'));
}

main()
    .then(() => console.log('complete'))
    .catch((err) => console.error(err));