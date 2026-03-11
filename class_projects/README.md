script element is add end of body element because it load slowly 

jsx --> refers to the components
use App.css names(1st letter uppercase)

Jsx is similar to html


Component Hierarchy
------------------
app
i)Header
ii)Footer
Address
iii)Products
Product



setCounter(counter+1) // To add directly
setCounter(prev=>prev+1)//To add based on previous  value

for in (loop) iterates--> arrays
for of (loop) iterates--> objects


const


{
    users.map(userObj=><tr>
    <td className="border>{userObj.username}</td>
    <td className="border>{userObj.email}</td>

    )
}



Side effects
----------
1.A component can render initially before displaying content
2.If the  component is about to make a API request it should wait until the initial rendering is completed
3.If both Initial rendering and API request happened together it leads to unexpected bugs in the application
4.No dependency array -- runs after every render 
  useEffect(()=>{side effect})
5.Empty array[] -- runs once on mount
  useEffect(()=>{side effect},[])
6.With dependencies-- runs when dependencies change 
 useEffect(()=>{side effects},[dependencies])