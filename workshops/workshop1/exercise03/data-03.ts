
export class Data3 {
    // data structure 3
    #data: { [id: string]: { title: string; }; } = {}; // Record<string, {title: string}>

    // consider the item id is used as key, and the item value is an object that contains the title
    // add item (if id does not exist)
    // update title (if id exist)
    // delete item (if id exist)
    // read title by id (if id exist)
}