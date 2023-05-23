import bcrypt from 'bcryptjs';
const data={
    users:[
        {
            name:'vamsi',
            email:'admin@example.com',
            password: bcrypt.hashSync('1234',8),
            isAdmin:true,
        },
        {
            name:'john',
            email:'user@example.com',
            password: bcrypt.hashSync('1234',8),
            isAdmin:false,
        },
    ],
    products:[
        {
            
            name:'Nike Slim Shirt',
            category:'Shirts',
            image:'/images/d1.jpg',
            price:120,
            countInStock:10,
            brand:'Nike',
            rating:3.5,
            numReviews:10,
            description:'high quality product',
        },
        {
            
            name:'Adidas Slim Shirt',
            category:'Shirts',
            image:'/images/d2.jpg',
            price:180,
            countInStock:20,
            brand:'Adidas',
            rating:4.7,
            numReviews:7,
            description:'high quality product',
        },
        {
            
            name:'MAX Slim Shirt',
            category:'Shirts',
            image:'/images/d3.jpg',
            price:220,
            countInStock:0,
            brand:'MAX',
            rating:4.9,
            numReviews:12,
            description:'high quality product',
        },
        {
            
            name:'American Eagle pant',
            category:'Pants',
            image:'/images/p1.jpg',
            price:140,
            countInStock:15,
            brand:'American Eagle',
            rating:4.2,
            numReviews:4,
            description:'high quality product',
        },
        {
            
            name:'Highlander pant',
            category:'Pants',
            image:'/images/p2.jpg',
            price:90,
            countInStock:5,
            brand:'Highlander',
            rating:2.7,
            numReviews:10,
            description:'high quality product',
        },
        {
            
            name:'Denim pant',
            category:'Pants',
            image:'/images/p3.jpg',
            price:90,
            countInStock:5,
            brand:'Denim',
            rating:3.7,
            numReviews:7,
            description:'high quality product',
        },
    ],
};

export default data;