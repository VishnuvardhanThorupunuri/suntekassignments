# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.



















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