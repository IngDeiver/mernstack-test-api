# Restful API with ExpresJS
This is a "RESTFUL API" Component

### Features
- Repository pattern
- DTOs
- SOLID principies
- TypeScript
-  Environment files
- Global herror handler

### System architecture
![alt text for screen readers](https://firebasestorage.googleapis.com/v0/b/ingdeiver.appspot.com/o/MERN%20STACK%20APP%20ARCHITECTURE.png?alt=media&token=e3161626-840e-49d3-9e51-440c6e7a3558 "Architecture diagram")
### Data transfer objects

##### ProductDTO (create, update, get variations)
{
	**_id**: ObjectId
	**name**: String
	**price**: Number
	**imageUrl**: String
}
##### UserDTO (create, update, get variations)
{
	**_id**: ObjectId
	**username**: String
	**password**: String
}

##### JwtTokenDto
{
	 **access_token**: string
    **username**: string
}

### How to use?
- Clone this repository
- Install node dependencies with "npm install" command
- Create the environment files for development/production (.env.dev, .env.prod, .env.test) and set the next environment variables: ** MONGODB_URI, JWT_SECRET, REDIS_HOST, REDIS_USER, REDIS_PASSWORD, REDIS_PORT, ORIGIN, JWT_AUTH_SECRET, SESION_SECRET**
- Run **"npm test"** command for run 	E2E tests
- Run **"npm start"** command for start in  production  mode or **"npm run start:dev"**  for start in  development mode.

#### End points available
- **POST** api/auth/signup: Sign up a new user, return user data
- **POST** api/auth/login: Login a user with username and password, return a JWT token

The next enpoinds require athorization with a JWT token bearer type in Authorization request header

- **GET** api/products: Get all productos, return a list of products
- **GET** api/products/{id}: Get a  product by id, return a product specific
- **POST** api/products: Save a new product, return a new product data
- **POST** api/products/upload: Upload a image, return the public url
- **DELETE** api/products/{id}: Remove a  product by id, return a 200 OK status code
- **PUT** api/products: Update a product,  return a new producto data
