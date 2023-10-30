import 'reflect-metadata';

// Decorator to set metadata for the entity
export function Entity() {
  return function (target: any) {
    Reflect.defineMetadata('entity', true, target);
  }
}

// Decorator to define columns of the entity
export function Column() {
  return function (target: any, propertyName: string) {
    const columns = Reflect.getMetadata('columns', target) || [];
    columns.push(propertyName);
    Reflect.defineMetadata('columns', columns, target);
  }
}