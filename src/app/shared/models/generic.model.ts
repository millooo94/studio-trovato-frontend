export class GenericModel {
  static isKeyOfObject<T extends {}>(
    key: string | number | symbol,
    obj: T
  ): key is keyof T {
    return key in obj;
  }

  static fromObjectWithSnakeCase(sourceObject: any, instance: any) {
    Object.keys(sourceObject).forEach((propKeySnakeCase) => {
      const propKey = propKeySnakeCase.replace(/([-_]\w)/g, (g) =>
        g[1].toUpperCase()
      );
      instance[propKey] = sourceObject[propKeySnakeCase];
    });
    return instance;
  }

  static fromObject(sourceObject: any, instance: any) {
    Object.keys(sourceObject).forEach((key) => {
      instance[key] = sourceObject[key];
    });
    return instance;
  }

  toObjectWithSnakeCase(removeNulls: boolean = false) {
    const object: any = {};
    for (const camelCaseKey of Object.keys(this)) {
      if (!!removeNulls === true && !!(this as any)[camelCaseKey] === false) {
        continue;
      }
      const snakeCaseKey = camelCaseKey
        .replace(/[\w]([A-Z])/g, (m) => `${m[0]}_${m[1]}`)
        .toLowerCase();
      object[snakeCaseKey] = (this as any)[camelCaseKey];
    }
    return object;
  }

  toObject(removeNulls: boolean = false) {
    const object: any = {};
    for (const key of Object.keys(this)) {
      if (!!removeNulls === true && !!(this as any)[key] === false) {
        continue;
      }
      object[key] = (this as any)[key];
    }
    return object;
  }
}
