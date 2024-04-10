 type Item = Record<string, any>; // Тип для элементов в массиве items

export const UpdateObjectHelper = <T extends Item>(items: T[], itemId: number, objectPropName: keyof T, newObjectProps: Partial<T>): T[] => {
    return items.map(item => {
        if (item[objectPropName] === itemId) {
            return { ...item, ...newObjectProps };
        }
        return item;
    });
};
