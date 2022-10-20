function CreatureBelenon({name, price, category, description, id, img, weird, enemies}) {


  return(
      <tr style={{backgroundColor:weird ? "rgb(52, 6, 52)" : "",}}>
        <td style={{color:enemies ? "red" : "green",}}>{name}</td>
        <td>{description}</td>
        <td><img style={{border:enemies ? "5px solid red" : "5px solid green"}} className="creatures-belenon-list-img" src={img} alt="Criaturas" /></td>
      </tr>
  )
}

export default CreatureBelenon