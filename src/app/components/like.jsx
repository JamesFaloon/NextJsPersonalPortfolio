'use client'

import React, {useState} from 'react'


export default function like({index}) {
    let [like, setLike] = useState([false, false, false, false, false])

    function toggleLike(i) {
        console.log(i);
        setLike(like.map((like, j) => {i === j ? !like : like}))

    }
    return (
        <>
            {like[index] ? <ThumbUpIcon onClick={() => {toggleLike(index)}}> </ThumbUpIcon> 
            : <ThumbUpOffAltIcon onClick={() => {toggleLike(index)}}> </ThumbUpOffAltIcon>} 
        </>
        
    )



}