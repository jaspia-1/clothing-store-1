import React from 'react';
import'./List.css'
import Card from '../Card/Card';
const List = () => {
    const data=[
        {
            id:1,
            img:"https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?",
            img2:"https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?",
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
            oldPrice:19,
            price:12,
        },
        {
            id:4,
            img:"https://images.pexels.com/photos/2065200/pexels-2065200.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title:"Hat",
            oldPrice:19,
            price:12,
        },
        
    ]
    return (
        <div className='list'>
            {data?.map(item=>(
                <Card item={item} key={item.id}></Card>
            ))}
        </div>
    );
};

export default List;