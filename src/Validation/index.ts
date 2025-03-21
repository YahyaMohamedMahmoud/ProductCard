export function productValidation(product:{title:string , description:string , price:string , imgUrl:string}) {
    const errors:{
        title:string,
        description:string,
        price:string,
        imgUrl:string
    } = {
        title: "",
        description: "",
        price: "",
        imgUrl: ""
    }

    if(!product.title.trim()  || product.title.length < 10 || product.title.length > 100) {
        errors.title = "Product title must be between 10 and 100 characters"
    }

    if(!product.description.trim() || product.description.length < 10 || product.description.length > 1000) {
        errors.description = "Product description must be between 10 and 1000 characters"
    }
    if(!product.price.trim() || isNaN(Number(product.price))) {
        errors.price = "Product price must be a number"
    }
    const imageVaild = /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/.test(product.imgUrl)
    if (!product.imgUrl.trim() || !imageVaild) {
        errors.imgUrl = "Image must be a URL";
    }
    

    return errors
}