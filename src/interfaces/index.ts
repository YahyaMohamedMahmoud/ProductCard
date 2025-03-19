export interface IProduct {
    id?: number;
    imgUrl: string;
    title: string;
    description: string;
    colors: string[];
    price: string;
    categry: {
        name: string;
        imgurl: string;
    }
}