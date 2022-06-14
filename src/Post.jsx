export function Post(props) {
  console.log(props)
  return (

    < div >

      <p>meu nome é <strong>{props.author}</strong></p>
      <p>{props.content}</p>
    </div >

  )
}
