import React, { useState, useEffect } from 'react'
import Spinner from 'react-bootstrap/Spinner'


function Details({items, idx}) {
    console.log(items)

    return ( 
        <div>
            {/* {items[idx] ? ( */}

        <section>
{/* 
            <h2>{items[idx].title}</h2>
            <img src={items[idx].img} alt={items[idx].title} />
            <h4>{items[idx].score}</h4>
            <h4>{items[idx].episodes}</h4>
            <h4>{items[idx].status}</h4>
            <div>
                {items[idx].type}
                More details: {items[idx].url}
            </div> */}
        </section>
            {/* // ) : (
            //     <Spinner animation="border" role="status">
            //     <span className="visually-hidden"></span>
            //     </Spinner>
            // )}
            }
             */}
        </div>
    );
}

export default Details;