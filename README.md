# Basic E-commerce App

Simple logic in handling discounts and promo codes on certain products

### Dependencies
```
Node v14

```

### How to run?

```
node main.js
```

### Various cases

- Case 1: Handling 3 for 2 bundle
- Case 2: Handling bundle prices
- Case 3: Handling free product bundles
- Case 4: Handling Promo codes

The following cases can be found in `main.js` marked by


```
//------------ADD INTENDED CART BELOW-----------

  ...cases here

//------------END ADDING HERE-----------

```




### Custom cases

To test different cases, simply call .`add(item)` to the cart between the start and end indicator in `main.js`

```
//Example

//------------ADD INTENDED CART BELOW-----------

cart.add(products[0]);
cart.add(products[1]);
cart.add(products[1]);

//------------END ADDING HERE-----------

```

#### List of products

You can add list of products in the `data/product.js` file

#### Adding promo codes

You can add promo codes in `data/promo-codes.js` file


#### Changing promos

List of promos are found in `data/promos.js` file. The promos have two unique traits

- Threshold
```
 threshold_operator: 'how many products till promo is applied',
 threshold: 3, //number of products

```

- Action

```
action: 'Action to execute',
value: 24.9 //value to use for specific action

```