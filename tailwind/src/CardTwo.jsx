import React from 'react'


const CardTwo = ({users}) => {
  // const[user,setUser]=useState(null)

  // useEffect(() =>{
    
  //     const fetchdata = async() =>{


  //       try {
  //         const res = await fetch('https://randomuser.me/api/?page=1&results=1&seed=abc')
  //         const users = await res.json()
  //           setUser(users.results[0])

  //       } catch (error) {
  //         console.error(error)
  //       }
  //     }
   
  //   fetchdata();
    

  // },[])
  
  return (
    <div>
    {users && (
      <div>
        <div><img src={users.picture.medium} alt="" /></div>
        {/* Check if user.name exists before accessing title */}
        <div>{users.name.title}</div>
      </div>
    )}
  </div>
  )
}

export default CardTwo