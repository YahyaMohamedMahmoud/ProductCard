import { ICategory, IFromData, IProduct } from "../interfaces";

export const ProductData:IProduct[] = [
    {
        id: 1,
        imgUrl: "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?cs=srgb&dl=pexels-mikebirdy-170811.jpg&fm=jpg",
        title: "Revolutionary Cars of 2025",
        description: "Discover the most innovative and futuristic cars designed to change the automotive industry.",
        colors: ["#FF5733", "#C70039", "#900C3F"],
        price: "750",
        category: {
            name: "Future Cars",
            imgurl: "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?cs=srgb&dl=pexels-mikebirdy-170811.jpg&fm=jpg"
        }
    },
    {
        id: 2,
        imgUrl: "https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/2020-Chevrolet-Corvette-Stingray/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&width=960",
        title: "Iconic American Muscle Cars of 2023",
        description: "Explore the unmatched power and design of America's iconic muscle cars.",
        colors: ["#00FF7F", "#FF6347", "#8A2BE2"],
        price: "950",
        category: {
            name: "Muscle Cars",
            imgurl: "https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/2020-Chevrolet-Corvette-Stingray/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&width=960"
        }
    },
    {
        id: 3,
        imgUrl: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Fyc3xlbnwwfHwwfHx8MA%3D%3D",
        title: "Electric Cars Revolution in 2025",
        description: "The shift to electric cars is inevitable – here's a glimpse into the future of transportation.",
        colors: ["#FFD700", "#4B0082", "#FF1493"],
        price: "1200",
        category: {
            name: "Electric Cars",
            imgurl: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Fyc3xlbnwwfHwwfHx8MA%3D%3D"
        }
    },
    {
        id: 4,
        imgUrl: "https://hips.hearstapps.com/hmg-prod/images/honda-prelude-concept-front-three-quarters-653927960f1f4.jpg?crop=1.00xw:0.920xh;0,0.0801xh&resize=980:*",
        title: "Honda Prelude: A Concept Car Like No Other",
        description: "Explore the stunning design and cutting-edge technology behind the new Honda Prelude concept.",
        colors: ["#32CD32", "#DC143C", "#B22222"],
        price: "1100",
        category: {
            name: "Concept Cars",
            imgurl: "https://hips.hearstapps.com/hmg-prod/images/honda-prelude-concept-front-three-quarters-653927960f1f4.jpg?crop=1.00xw:0.920xh;0,0.0801xh&resize=980:*"
        }
    },
    {
        id: 5,
        imgUrl: "https://img.freepik.com/free-photo/sports-car-driving-asphalt-road-night-generative-ai_188544-8052.jpg",
        title: "Speed and Elegance: Top Cars for 2025",
        description: "A look at the fastest and most elegant cars coming in 2025, where style meets performance.",
        colors: ["#B0E0E6", "#C71585", "#8B0000"],
        price: "1300",
        category: {
            name: "Speed Cars",
            imgurl: "https://img.freepik.com/free-photo/sports-car-driving-asphalt-road-night-generative-ai_188544-8052.jpg"
        }
    },
    {
        id: 6,
        imgUrl: "https://media.architecturaldigest.com/photos/63079fc7b4858efb76814bd2/16:9/w_4000,h_2250,c_limit/9.%20DeLorean-Alpha-5%20%5BDeLorean%5D.jpg",
        title: "DeLorean Alpha 5: The Future of Electric Sports Cars",
        description: "Delve into the innovative world of the DeLorean Alpha 5, a groundbreaking electric sports car.",
        colors: ["#800080", "#FF4500", "#D2691E"],
        price: "1500",
        category: {
            name: "Electric Sports Cars",
            imgurl: "https://media.architecturaldigest.com/photos/63079fc7b4858efb76814bd2/16:9/w_4000,h_2250,c_limit/9.%20DeLorean-Alpha-5%20%5BDeLorean%5D.jpg"
        }
    },
    {
        id: 7,
        imgUrl: "https://www.topgear.com/sites/default/files/2024/02/ioniq5n.jpeg",
        title: "Hyundai Ioniq 5N: Speed Meets Innovation",
        description: "The Hyundai Ioniq 5N takes electric sports cars to a whole new level with speed and innovation.",
        colors: ["#3CB371", "#FF6347", "#8A2BE2"],
        price: "1450",
        category: {
            name: "Electric Performance Cars",
            imgurl: "https://www.topgear.com/sites/default/files/2024/02/ioniq5n.jpeg"
        }
    },
    {
        id: 8,
        imgUrl: "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?cs=srgb&dl=pexels-mikebirdy-170811.jpg&fm=jpg",
        title: "The Future of Cars: Innovation and Technology",
        description: "A sneak peek into the future of automobiles, where technology is taking us beyond the limits.",
        colors: ["#FF8C00", "#8B4513", "#228B22"],
        price: "1600",
        category: {
            name: "Tech Cars",
            imgurl: "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?cs=srgb&dl=pexels-mikebirdy-170811.jpg&fm=jpg"
        }
    }
];


export const FormData:IFromData[] = [
    {
        id:"title",
        type:"text",
        placeholder:"Product Title",
        lable:"Product Title",
        name:"title",
    },
    {
        id:"description",
        type:"text",
        placeholder:"Product Description",
        lable:"Product Description",
        name:"description",
    },
    {
        id:"price",
        type:"text",
        placeholder:"Product Price",
        lable:"Product Price",
        name:"price",
    },
    {
        id:"imgUrl",
        type:"text",
        placeholder:"Product Image URL",
        lable:"Product Image URL",
        name:"imgUrl",
    }
]


export const colors: string[] = [
    "#a855f7",
    "#2563eb",
    "#84D2C5",
    "#13005A",
    "#A31ACB",
    "#FF6E31",
    "#3C2A21",
    "#6C4AB6",
    "#CB1C8D",
    "#000000"
];


export const categories:ICategory[] = [
    {
        id:"22",
         name: "Future Cars",
        imgurl: "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?cs=srgb&dl=pexels-mikebirdy-170811.jpg&fm=jpg"
    },
    {
        id:"23",
        name: "Muscle Cars",
            imgurl: "https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/2020-Chevrolet-Corvette-Stingray/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&width=960"
    },
    {
        id:"24",
        name: "Speed Cars",
        imgurl: "https://img.freepik.com/free-photo/sports-car-driving-asphalt-road-night-generative-ai_188544-8052.jpg"
    },
    {
        id:"25",
        name: "Electric Sports Cars",
        imgurl: "https://media.architecturaldigest.com/photos/63079fc7b4858efb76814bd2/16:9/w_4000,h_2250,c_limit/9.%20DeLorean-Alpha-5%20%5BDeLorean%5D.jpg"
    },
    {
        id:"26",
        name: "Concept Cars",
        imgurl: "https://hips.hearstapps.com/hmg-prod/images/honda-prelude-concept-front-three-quarters-653927960f1f4.jpg?crop=1.00xw:0.920xh;0,0.0801xh&resize=980:*"
    },
    {
        id:"27",
        name: "Electric Performance Cars",
        imgurl: "https://www.topgear.com/sites/default/files/2024/02/ioniq5n.jpeg"
    },
    {
        id:"28",
        name: "Tech Cars",
        imgurl: "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?cs=srgb&dl=pexels-mikebirdy-170811.jpg&fm=jpg"
    },

]
