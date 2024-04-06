import fs from 'node:fs';
import EventEmitter from 'node:events';

import sytemChecker from './check.ts';
import { error } from 'node:console';

interface Name {
    id: string;
    name: string;
}

class Names extends EventEmitter {
    private data: Name[] = [];

    constructor() {
        super();
        this.on('loadNotification', (message) => {
            console.log(message);
        });
        this.loadData();
    }

    private loadData(): void {
        try {
            this.data = JSON.parse(fs.readFileSync('./data.json', 'utf8'));
            this.emit('loadNotification', 'Data loaded from file successfully');
        } catch (error: unknown) {
            if (error instanceof Error) {
                console.log(error.message)
            }
            console.error('Error loading data from file:', error);
        }
    }

    persist(): void {
        try {
            fs.writeFileSync('./data.json', JSON.stringify(this.data, null, 2));
            this.emit('parsistanceNotification', 'Data persisted back to file successfully');
        } catch (error: unknown) {
            if (error instanceof Error) {
                console.log(error.message);
            }
            console.error('Error persisting data to file:', error);
        }
    }

    addName(id: string, name: string): void {
        this.data.push({ id, name });
        this.persist();
    }

    getNames(): Name[] {
        return this.data;
    }

    getNameById(id: string): string | null {
        const dataFound = this.data.find(name => name.id === id);
        if (dataFound) {
            return dataFound.name;
        }
        return null;
    }

    deleteNameById(id: string): void {
        const index = this.data.findIndex(name => name.id === id);
        if (index !== -1) {
            this.data.splice(index, 1);
            this.persist();
        }
    }
}


// Test

const names = new Names();

names.on('parsistanceNotification', message => {
    console.log(message);
});
names.on('loadNotification', message=>console.log(message))


names.addName('3', 'Bacha Wondimu');
names.addName('4', 'Chala Abdi');
names.addName('5', 'Joe Johnson');
names.addName('6', 'Chris Tom');
console.log('All names:', names.getNames());
console.log('----------------------------------------------------------------')

console.log('Name with id "3":', names.getNameById('3'));
console.log('----------------------------------------------------------------')

names.deleteNameById('3');
console.log('Names after deletion:', names.getNames());
console.log('----------------------------------------------------------------')

console.log('Task 2')
sytemChecker()
    .then(console.log)
    .catch(console.log)