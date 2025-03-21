export interface IProduct {
    id?: number;
    imgUrl: string;
    title: string;
    description: string;
    colors: string[];
    price: string;
    category: {
        name: string;
        imgurl: string;
    }
}

export interface IFromData {
    id: string;
    type: string;
    placeholder: string;
    lable: string;
    name: "title" | "description" | "price" | "imgUrl";
}


export interface ICategory{
    id?:string;
    name: string;
    imgurl: string;
}