import React from 'react';
import"./FeatureProducts.css"
import Card from '../Card/Card';

const FeatureProducts = ({type}) => {
    const data=[
        {
            id:1,
            img:"https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
            img2:"https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title:"Long Sleeve Graphic T-shirt",
            isNew:true,
            oldPrice:19,
            price:12,
        },
        {
            id:2,
            img:"https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title:"Coat",
            isNew:true,
            oldPrice:19,
            price:12,
        },
        {
            id:3,
            img:"https://images.pexels.com/photos/1457983/pexels-photo-1457983.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title:"Skirt",
            isNew:true,
            oldPrice:19,
            price:12,
        },
        {
            id:4,
            img:"https://images.pexels.com/photos/1457975/pexels-photos-1457975.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title:"Hat",
            oldPrice:19,
            price:12,
        },
    ];
    return (
        <div className='featureProducts'>
           <div className='top'>
            <h1>{type} products</h1>
            <p>Cloth products encompass a wide range of textiles and garments designed for various purposes. They include clothing, linens, fabrics, and accessories, with diverse materials and styles to meet fashion, comfort, and functional needs. Quality, style, and sustainability are key considerations for consumers.</p>
           </div>
           <div className='bottom'>
            {data.map(item=>(
                <Card item={item} key={item.id}></Card>
            ))}
           </div>
        </div>
    );
};

export default FeatureProducts;