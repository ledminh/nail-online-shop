# 💅 Nail Online Shop

A modern e-commerce platform for nail supplies built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🛍️ **Product Catalog**: Browse a wide range of nail supplies including polish, tools, art supplies, and care products
- 🔍 **Search & Filter**: Find products by category or search by name/description
- 🛒 **Shopping Cart**: Add products to cart with quantity and color selection
- 💳 **Checkout Process**: Complete checkout flow with order summary
- 📱 **Responsive Design**: Mobile-friendly interface that works on all devices
- 🎨 **Modern UI**: Clean, attractive design with Tailwind CSS

## Product Categories

- **Nail Polish**: Wide range of colors and finishes
- **Nail Tools**: Professional equipment and tools
- **Nail Art Supplies**: Creative supplies for nail art designs
- **Nail Care**: Products for healthy nails

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/ledminh/nail-online-shop.git
cd nail-online-shop
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
nail-online-shop/
├── src/
│   ├── app/              # Next.js app directory
│   │   ├── cart/         # Shopping cart page
│   │   ├── categories/   # Categories page
│   │   ├── checkout/     # Checkout page
│   │   ├── products/     # Products listing and detail pages
│   │   ├── layout.tsx    # Root layout
│   │   ├── page.tsx      # Home page
│   │   └── globals.css   # Global styles
│   ├── components/       # Reusable components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── ProductCard.tsx
│   ├── lib/              # Utilities and data
│   │   ├── CartContext.tsx  # Shopping cart state management
│   │   └── data.ts          # Product and category data
│   └── types/            # TypeScript type definitions
├── public/               # Static assets
└── package.json
```

## Technologies Used

- **Next.js 15**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **React Context**: State management for shopping cart

## Features Overview

### Home Page
- Hero section with call-to-action
- Category showcase
- Featured products
- Benefits section

### Products Page
- Product grid with cards
- Search functionality
- Category filtering
- Responsive layout

### Product Detail Page
- Detailed product information
- Color selection (when applicable)
- Quantity selector
- Add to cart functionality
- Related products

### Shopping Cart
- View all cart items
- Update quantities
- Remove items
- Order summary with tax calculation
- Proceed to checkout

### Checkout
- Contact information form
- Shipping address
- Payment information
- Order summary
- Order confirmation

## Customization

### Adding Products

Edit `src/lib/data.ts` to add or modify products:

```typescript
{
  id: 'unique-id',
  name: 'Product Name',
  description: 'Product description',
  price: 19.99,
  category: 'polish', // polish, tools, art, care
  image: '/images/product.jpg',
  inStock: true,
  colors: ['Color 1', 'Color 2'], // optional
}
```

### Adding Categories

Edit `src/lib/data.ts` to add or modify categories:

```typescript
{
  id: 'category-id',
  name: 'Category Name',
  description: 'Category description',
}
```

### Styling

The project uses Tailwind CSS. Customize colors and theme in `tailwind.config.ts`.

## License

ISC

## Author

ledminh