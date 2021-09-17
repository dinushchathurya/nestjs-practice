import { Injectable } from '@nestjs/common';
import { Item } from '../item';
import { Items } from '../items';

@Injectable()
export class ItemsService {
    private readonly items: Items ={
        1: {
            id: 1,
            name: 'Burger',
            price: 5.99,
            description: 'Tasty',
            image: 'https://via.placeholder.com/150'
        },
        2: {
            id: 2,
            name: 'Pizza',
            price: 6.99,
            description: 'Cheesy',
            image: 'https://via.placeholder.com/150'
        }
    };

    findAll(): Items {
        return this.items;
    }

    create(newItem: Item): void {
        
        const id = new Date().valueOf();
        this.items[id] = {
            ...newItem,
            id,
        };
    }

    find(id:number): Item {

        const record: Item = this.items[id];

        if(record){
            return record;
        }

        throw new Error('No record found');
    }

    update(updatedItem: Item): void {

        if(this.items[updatedItem.id]) {
            this.items[updatedItem.id] = updatedItem;
            return;   
        }

        throw new Error('No record found to update');
    }

    delete(id: number):void{

        const record: Item = this.items[id];

        if(record){
            delete this.items[id];
            return;
        }

        throw new Error('No record found to delete');
    }
}
