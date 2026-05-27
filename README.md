# Nxt Trendz - E-Commerce Application

A modern e-commerce web application built with React, featuring a full shopping cart experience with product browsing, cart management, and checkout functionality.






Link: https://nxt-trendz-nine-beta.vercel.app/login 

## Features

### 1. **Product Browsing**
- Browse all available products with product cards
- View product details including title, brand, price, and images
- Filter products by various categories
- View similar products

### 2. **Shopping Cart Management**
- **Add to Cart**: Add products to your shopping cart
- **Delete Cart Item**: Remove individual items from the cart with delete button or "Remove" button
- **Update Quantity**: Increase or decrease item quantity using +/- buttons
- **Duplicate Prevention**: When adding the same product again, the quantity is automatically updated instead of creating a duplicate

### 3. **Cart Summary**
- Display total amount of all items in the cart
- Show number of items in the cart
- Real-time calculation of order total

### 4. **Checkout**
- Remove all items from cart with a single "Remove All" button
- Checkout button to place orders
- Order confirmation message displayed after successful checkout
- Cart automatically clears after order placement

### 5. **Empty Cart View**
- Shows a friendly empty cart message when cart is empty
- Shop Now button to redirect to products

## Technologies Used

- **Frontend Framework**: React 19.0.0
- **Routing**: React Router 7.4.0
- **Build Tool**: Vite 6.2.0
- **Styling**: CSS3
- **Icons**: React Icons 5.5.0
- **State Management**: React Context API
- **Utilities**: JS Cookie 3.0.5, React Spinners 0.15.0
- **Development**: Node.js, npm

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or higher)
- npm (v6 or higher)

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/Nxt-Trendz.git
   cd Nxt-Trendz
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

## Running the Project

### Development Mode
```bash
npm run dev
```
This will start the development server. Open your browser and navigate to `http://localhost:5173` (or the URL shown in your terminal).

### Build for Production
```bash
npm run build
```
This creates an optimized production build in the `dist` folder.

### Preview Production Build
```bash
npm run preview
```

### Lint Code
```bash
npm run lint
```

## Project Structure

```
Nxt-Trendz/
├── src/
│   ├── components/
│   │   ├── AllProductsSection/      # All products display
│   │   ├── Cart/                    # Cart page with summary
│   │   ├── CartItem/                # Individual cart item component
│   │   ├── CartListView/            # Cart items list
│   │   ├── EmptyCartView/           # Empty cart message
│   │   ├── FiltersGroup/            # Product filters
│   │   ├── Header/                  # Navigation header
│   │   ├── Home/                    # Home page
│   │   ├── LoginForm/               # Login page
│   │   ├── NotFound/                # 404 page
│   │   ├── PrimeDealsSection/       # Featured deals
│   │   ├── ProductCard/             # Product card component
│   │   ├── ProductHeader/           # Product section header
│   │   ├── ProductItemDetails/      # Product detail page
│   │   ├── Products/                # Products page
│   │   ├── ProtectedRoute/          # Protected route wrapper
│   │   └── SimilarProductItem/      # Similar product item
│   ├── context/
│   │   └── CartContext.jsx          # Cart context for state management
│   ├── App.jsx                      # Main app component
│   ├── main.jsx                     # Entry point
│   └── index.css                    # Global styles
├── public/                          # Public assets
├── package.json
├── vite.config.js
├── eslint.config.js
└── README.md
```

## Usage Guide

### Adding Items to Cart
1. Browse products on the Products page
2. Click the "Add to Cart" button on any product
3. Item will be added to your cart
4. Cart badge in the header will show the number of items

### Managing Cart
1. Go to the Cart page
2. View all items in your cart
3. Use +/- buttons to update quantity
4. Click "Remove" button or delete icon to remove items
5. Click "Remove all" to clear the entire cart

### Checkout
1. Review your cart items and total amount
2. Click the "Checkout" button
3. You will see a success message confirming your order
4. Cart will be automatically cleared

## Cart Features in Detail

### Delete Cart Item
- Click the delete button (X icon) next to the product or click the "Remove" button
- Item will be immediately removed from the cart
- Total amount updates automatically

### Update Quantity
- Use the minus (-) button to decrease quantity
- Use the plus (+) button to increase quantity
- When quantity reaches 0, item is automatically removed
- Total amount updates in real-time

### Smart Add to Cart
- If you add the same product again, the quantity increases by 1
- No duplicate items are created in the cart
- Perfect for re-adding popular items

### Order Summary
- Real-time calculation of total order amount
- Display of total items in cart
- Checkout button for order placement

## Authentication

The application includes a login form to protect routes. Users must log in to access:
- Home page
- Products page
- Product details
- Shopping cart

## API Integration (Ready)

The project structure supports easy integration with a backend API. You can modify the component files to fetch data from your API endpoints.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the MIT License.

## Support

For support, email your-email@example.com or create an issue in the repository.

## Acknowledgments

- Designed and developed as a modern e-commerce solution
- Built with React best practices
- Context API for efficient state management
- Responsive design for mobile and desktop

---

**Happy Shopping! 🛒**
