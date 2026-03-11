//Create HTTP Server
    //Import express module
    import exp from 'express'
    import {userApp} from './APIs/UserAPI.js';
    import {Productapp} from './APIs/ProducAPI.js';
    
    //Create Server
    const app=exp();
    //Assign port number
    app.listen(3000,()=>console.log('HTTP server listening in port 3000..'));

    //body parsing middleware
    app.use(exp.json());


    //forward req to userApp when path starts with /users-api
    app.use('/users-api',userApp)
    app.use('/products-api',Productapp)



 