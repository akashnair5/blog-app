import React from 'react'
import { useState } from 'react'
import Buttonone from './Buttonone'
import Buttontwo from './Buttontwo'

const Blogs = () => {
    const [blogs, setBlogs] = useState ([
        {
            id: 1,
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
        
        {
            id : 2,
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },

        {
            id: 3,
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },

    ])

    


    return (
        <>
        {blogs.map((blog) => (
            <h3 key = {blog.id}>{blog.text}
                <Buttonone
                    color = 'Lightblue' text = 'Like: '>          
                </Buttonone> 
                <Buttontwo
                    color = 'Lightblue' text = 'Dislike: '>          
                </Buttontwo>
                
                
                </h3>
            ))}
            
                

        </>
    )
}

export default Blogs