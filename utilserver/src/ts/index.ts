import ORM, { Model } from '../ts/test/test.index';

// 사용 예시
interface User extends Model {
  name: string;
  age: number;
}

const initialUsers: User[] = [
  { id: 1, name: 'John', age: 25 },
  { id: 2, name: 'Jane', age: 30 }
];

const userORM = new ORM<User>(initialUsers);

console.log(userORM.getAll()); // [{ id: 1, name: 'John', age: 25 }, { id: 2, name: 'Jane', age: 30 }]
console.log(userORM.getById(1)); // { id: 1, name: 'John', age: 25 }

userORM.add({ id: 3, name: 'Doe', age: 40 });
console.log(userORM.getAll()); // [{ id: 1, name: 'John', age: 25 }, { id: 2, name: 'Jane', age: 30 }, { id: 3, name: 'Doe', age: 40 }]

userORM.update(1, { id: 1, name: 'Johnny', age: 26 });
console.log(userORM.getById(1)); // { id: 1, name: 'Johnny', age: 26 }

userORM.delete(2);
console.log(userORM.getAll()); // [{ id: 1, name: 'Johnny', age: 26 }, { id: 3, name: 'Doe', age: 40 }]
