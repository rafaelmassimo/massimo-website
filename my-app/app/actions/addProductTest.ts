

export default function AddProductTest(formData: FormData, images: File[]) {

    const productName = formData.get('productName');
    const productDescription = formData.get('productDescription');
    const category = formData.get('category');
    const productImages =images;

    const newProduct = {
        productName,
        productDescription,
        category,
        productImages
    };

    console.log(newProduct);
    

};