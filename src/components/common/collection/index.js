import React from 'react';
import './collection.css';
import { FaCaretRight } from "react-icons/fa";
import Slider from 'react-slick';
import Nextarrow from '../commonarrows/nextarrow';
import Prevarrow from '../commonarrows/previousarrow';



const settings = {
    // dots: true,
    //   infinite false means if loop is over it will strat from starting point
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <Nextarrow />,
    prevArrow: <Prevarrow />
  };

const Collection=({list})=>
{
    return( 
    <div className='collection_wrapper'>
        <div className='maxwidth collection'>
            <div className='collection_title'>Collection</div>
            <div className='collection_subtitle_row'>  
                <div className='collection_subtitle_name'>Explore curated lists of top restaurants, cafes, pubs, and bars in Mumbai, based on trends</div>
                <div className='collection_location cursor_pointer'>
                    <div>All collections in Mumbai</div>
                    <div className='allcenter'><FaCaretRight /></div>
                </div>
            </div>
            
            <Slider {...settings}>
                {
                    list.map((item)=>{   
                       return <div>
                            <div className='collection_cover'>
                                <img src={item.cover} className='collection_img' alt={item.title}/>
                                <div className='gradient_bg'></div>
                                <div className='collection_card_title'>{item.title}</div>
                                <div className='collection_card_subtitle'>
                                    <div>{item.places}</div>
                                    <div className='allcenter'><FaCaretRight /></div>
                                </div>
                            </div>
                        </div>
                    })}
                    
            </Slider>

        </div>
    </div>
    )
}

export default Collection;
