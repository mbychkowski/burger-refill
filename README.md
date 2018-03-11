#[Burger refill](https://rocky-wildwood-32693.herokuapp.com/)
Burger refill is an application built as an exercise to better understand CRUD operations using a model-view-controller (MVC) architectural pattern.

[Application](https://rocky-wildwood-32693.herokuapp.com/)

## How to use
The application itself is a *burger eating simulator*. The user can order a custom burger (`POST`), devour a burger (`PUT`), and trash a burger after eating (`DELETE`). The current available burgers from the database are displayed on application load (`GET`).

### Interface
In the middle of the application the user can order a custom burger of their choice after submitting. The burger will be placed on the **Menu**, where the user can then *devour* the burger using the **hamburger button** icon. Once *devoured*, the burger will appear on the **Devoured** side with all other devoured burgers. To trash the devoured burger click on the **remove icon**.

![Picture of Interface](https://github.com/mbychkowski/burger-refill/blob/master/public/assets/img/burger-refill-interface.png)

## How it's built
This application is built with MVC principles and CRUD operations using the following technologies:

### Backend
* [Node.js](https://nodejs.org/en/)
* [Express](https://expressjs.com/)
* [express-handlebars](https://www.npmjs.com/package/express-handlebars)
* [body-parser](https://www.npmjs.com/package/body-parser)
* [mysql](https://www.npmjs.com/package/mysql)

### Frontend
* [handlebars](https://handlebarsjs.com/)
* [Bootstrap](https://getbootstrap.com/)
* [Font Awesome](https://fontawesome.com/)
