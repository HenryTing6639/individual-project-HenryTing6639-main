const HenryClothes = ({product}) => {

    return
    <div>
        <p>
            <a href={product.url} target="_blank" rel="noreferrer">{product.name}</a>
            <b>${product.price}</b> was ${product.price * 2}
        </p>
        {<img src={product.img} width="120" alt={product.name}/>}
    </div>
}

export default HenryClothes