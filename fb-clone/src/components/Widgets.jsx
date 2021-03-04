import React from 'react'
import '../components/Widgets.css'

function Widgets() {
    return (
        <div className="widgets">  
           <iframe src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fweb.facebook.com%2Fprotopie%2Fvideos%2F487074835635949%2F&show_text=true&
                          width=476" 
                          width="340"
                          height="100%"
                          style={{border:"none", overflow:"hidden"}}
                          scrolling="no"
                          frameborder="0"
                          allowTransparency="true"
                          allow="encrypted-media">
                 
             </iframe>
             
        </div>
    )
}

export default Widgets
