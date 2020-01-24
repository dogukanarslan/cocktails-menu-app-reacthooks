import React from 'react';

const LoginNotification = (props) => {

  const [name,setName] = React.useState('')
  React.useEffect(()=> setName(props.user),[])
  return(
    <div className="notification">
      <p>{name} not found</p>
    </div>
  )
}
export {LoginNotification};
