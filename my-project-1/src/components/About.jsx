import React from 'react'
import PropTypes from 'prop-types'


export default function About(props) {
    return (
      <>
      <div className={` mb-4 text-2xl text-center font-bold shadow-md ${props.mode === 'black' ? 'text-white' : 'text-black'} ${props.mode === 'black' ? 'shadow-blue-200' : 'shadow-black'} ${props.mode === 'black' ? 'myStyle' : 'myStyle'}`}>
        About-Us
      </div>
      <p className={` mb-4 font-bold text-md p-2 ${props.mode === 'black' ? 'text-white' : 'text-black'}  ${props.mode === 'black' ? 'myStyle' : 'myStyle'}`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni esse reiciendis ad itaque velit, dolor eveniet architecto quo, veritatis est nihil nisi, deserunt corrupti? Beatae vitae sunt sit quod error amet! Dolore nisi explicabo earum, voluptates laudantium nam, distinctio doloribus cumque eveniet deleniti aspernatur fuga consectetur atque tempora placeat expedita doloremque! Dicta laborum aspernatur obcaecati laboriosam, amet nostrum nihil optio voluptates voluptas non quidem nemo doloremque odio odit asperiores mollitia soluta consequatur illo blanditiis provident! Quia, facilis delectus. Facere voluptate accusamus pariatur, atque, numquam cupiditate dolorem voluptates debitis at in illo. Assumenda cumque ducimus asperiores saepe sapiente blanditiis, ut, quia veniam magni ipsa adipisci fugiat doloribus impedit doloremque. Eius, aut. Dolorum quod nobis doloribus eveniet expedita dicta aliquam nesciunt magnam quo cum nulla, culpa ea quas esse libero ipsum deserunt quia minima inventore neque, eius praesentium velit. Cumque, deleniti? Corporis incidunt voluptatum ipsa illum, quod soluta ad itaque, eaque deserunt accusamus dignissimos atque facere asperiores aliquid, cum enim impedit molestias eius ducimus omnis labore vero perspiciatis corrupti delectus! Veritatis quisquam aspernatur corporis laudantium sit! Minima tempore magnam cum deleniti voluptates, officia possimus illum. Repudiandae aspernatur odio officiis facilis, assumenda eveniet obcaecati modi, vero numquam odit facere doloremque maxime, neque quae?</p>
      </>
    )
}
