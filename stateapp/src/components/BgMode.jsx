import { useState } from "react"

const BgMode = () => {
    const [bgColor, setbgColor] = useState('white')

    const bgcolorHandler = (event) =>{
        setbgColor(event.target.value)
    }

    //let textColor = 'black';

    /* if(bgColor === 'black'){
        textColor = 'white'
    }else if(bgColor === 'green'){
        textColor = 'white'
    }else{
        textColor = 'black'
    } */
    
    //let textColor = (bgColor === 'black') ? 'white' : 'black'
      let textColor = (bgColor === 'black') ? 'white' : (bgColor === 'green') ? 'white' : 'black'


    
  return (
    <div style={{background : bgColor, height : '100vh', color : textColor}}>
        <select className="form-control w-25" onChange={bgcolorHandler}>
            <option value=''>Select Color</option>
            <option value='black'>Dark Mode</option>
            <option value='linear-gradient(purple,yellow)'>Linear Mode</option>
            <option value='green'>Green Mode</option>
            <option value='yellow'>Yellow Mode</option>
        </select>
        <h1 className="mt-5 text-center">Welcome to Skramby</h1>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores reprehenderit inventore porro nemo saepe dicta enim ut cum, iure veritatis dolorem totam magnam voluptate nihil est aspernatur perspiciatis tempore nostrum architecto minima quae perferendis. Vel natus est odio, ad eius totam corrupti inventore! Aliquam eum ut sed hic, facilis officia?
        </p>
        <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quam dolore obcaecati accusamus doloremque adipisci alias voluptate odio dolorem facilis consequatur, voluptatum temporibus ullam voluptas inventore magnam. Quis similique nobis inventore voluptatum eligendi earum perspiciatis aspernatur repellendus rem quasi facilis facere obcaecati reiciendis quia fuga nesciunt voluptatibus expedita consectetur eaque dolorum praesentium excepturi, ullam culpa? Ex aut saepe, debitis nemo provident consectetur, commodi inventore dolore quis rem consequuntur ratione, cupiditate libero aperiam maiores doloribus pariatur.
        </div>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur fugiat similique earum corporis. Eum optio modi libero tenetur, placeat maiores, adipisci esse officiis expedita fugit, laudantium consequuntur eos quis voluptatum. Alias in quo corporis iusto quia molestiae, inventore, dolorem explicabo voluptas nobis quaerat atque nostrum, iste deserunt perferendis quasi hic vel blanditiis tempora unde veniam? Itaque deleniti aliquid facilis debitis inventore repellendus? Placeat omnis iure nostrum quia eos eum asperiores ut dolor totam. Incidunt quia reprehenderit iusto error. Vero, nobis deleniti laboriosam accusantium ex non enim adipisci eos odit minima et sed dignissimos eum unde quam, iste deserunt facilis cumque!
        </p>
    </div>
  )
}

export default BgMode