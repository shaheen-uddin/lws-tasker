export const saveToLocalStorage = (itemName, itemToSave) => {
    localStorage.setItem(itemName, JSON.stringify(itemToSave));
}

export const readFromLocalStorage = (itemToRead) => {
    try {
        const readItems = localStorage.getItem(itemToRead);
        return readItems ? JSON.parse(readItems) : [];
    } catch (err) {
        console.log(`${itemToRead} not found. ${err}`);
        return [];
    }
}