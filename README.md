# Restful API with ExpresJS
This is a "RESTFUL API" Component

### Features
- Repository pattern
- DTOs
- SOLID principies
- E2E tests
- TypeScript
- Environment files
- Global herror handler

### System architecture
![alt text for screen readers](https://firebasestorage.googleapis.com/v0/b/ingdeiver.appspot.com/o/MERN%20STACK%20APP%20ARCHITECTURE.png?alt=media&token=fae4764d-72ba-4dbf-9fc2-17714b856ba7 "Architecture diagram")
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


### How to use?
- Clone this repository
- Install node dependencies with "npm install" command
- Create the environment files for development/production (.env.dev, .env.prod, .env.test) and set the next environment variables: ** MONGODB_URI, JWT_SECRET, REDIS_HOST, REDIS_USER, REDIS_PASSWORD, REDIS_PORT, ORIGIN, JWT_AUTH_SECRET, SESION_SECRET**
- Run **"npm test"** command for run 	E2E tests
- Run **"npm start"** command for start in  production  mode or **"npm run start:dev"**  for start in  development mode.
- Navigate to http://localhost:3000

### Docker
In the root priject folder execut execute  the next commands of Docker 
-  **docker build -t mern/api .**
-  **docker run -p 80:3000 -env-file=your-env-file-path  mern/api**
- Navigate to http://localhost
