# Product Rating System

![Demo GIF1](images/5-star-system.gif "Demo gif1")
## From the PDF

A eCommerce site built in React that allows rating of products and those ratings to be stored and fetched via Firebase.<br />

There is no authorization or authentication as this is a POC.

## How to run
Make sure to install dependencies with `npm install`
Then run locally with `npm run start`

## Notes
- I want to use React for our front-end for the product components and firebase communication. As I feel more comfortable in this environment
when creating components.
- We can use Firebase to store product data as well as user rating data. Firebase is a backend as a service and makes it
easy for us to setup. It doesn't require us to host it ourselves.
- I use the star icon from the [react-icons](https://react-icons.github.io/react-icons/) library.

### How it Works
**Front-end: React** <br />
**Back-end/DB: Firebase** <br /><br />

Our app Initially fetches a list of documents (our products), this is handled in **ProductList.js**. From there the data is passed down via props to our products via **Product.js**. Any time a rating is clicked on by the user (1-5 stars), we
have a **updatedRatingHandler** in **Product.js** handle that and update the DB
for that product ID. <br />

The StarRating component is actually 5 radio buttons that each have a value representing there rating (1-5), and when clicked, the rating is set in **StarRating.js** <br />

There is also a simple search bar at the top that when changed (onChange) will filter the products in **ProductsGrid.js**

_Images from Amazon.ca_