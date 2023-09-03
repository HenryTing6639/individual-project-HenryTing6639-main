import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const HenzaClothes = [

  "products" [
    {
      "id": "ocean-blue-shirt",
      "title": "Ocean Blue Shirt",
      "body": "Ocean blue cotton shirt with a narrow collar and buttons down the front and long sleeves. Comfortable fit and tiled kalidoscope patterns.",
      "category": "apparel",
      "vendor": "partners-demo",
      "tags": [
        "men"
      ],
      "inventory": 73,
      "price": 50,
      "image": "https://burst.shopifycdn.com/photos/young-man-in-bright-fashion_925x.jpg"
    },

    {
      "id": "classic-varsity-top",
      "title": "Classic Varsity Top",
      "body": "Womens casual varsity top, This grey and black buttoned top is a sport-inspired piece complete with an embroidered letter.",
      "category": "apparel",
      "vendor": "partners-demo",
      "tags": [
        "women"
      ],
      "inventory": 53,
      "price": 60,
      "image": "https://burst.shopifycdn.com/photos/casual-fashion-woman_925x.jpg"
    },
    {
      "id": "yellow-wool-jumper",
      "title": "Yellow Wool Jumper",
      "body": "Knitted jumper in a soft wool blend with low dropped shoulders and wide sleeves and think cuffs. Perfect for keeping warm during Fall.",
      "category": "apparel",
      "vendor": "partners-demo",
      "tags": [
        "women"
      ],
      "inventory": 51,
      "price": 80,
      "image": "https://burst.shopifycdn.com/photos/autumn-photographer-taking-picture_925x.jpg"
    },
    {
      "id": "floral-white-top",
      "title": "Floral White Top",
      "body": "Stylish sleeveless white top with a floral pattern.",
      "category": "apparel",
      "vendor": "partners-demo",
      "tags": [
        "women"
      ],
      "inventory": 61,
      "price": 75,
      "image": "https://burst.shopifycdn.com/photos/city-woman-fashion_925x@2x.jpg"
    },
    {
      "id": "striped-silk-blouse",
      "title": "Striped Silk Blouse",
      "body": "Ultra-stylish black and red striped silk blouse with buckle collar and matching button pants.",
      "category": "apparel",
      "vendor": "partners-demo",
      "tags": [
        "women"
      ],
      "inventory": 81,
      "price": 50,
      "image": "https://burst.shopifycdn.com/photos/striped-blouse-fashion_925x.jpg"
    },
    {
      "id": "classic-leather-jacket",
      "title": "Classic Leather Jacket",
      "body": "Womans zipped leather jacket. Adjustable belt for a comfortable fit, complete with shoulder pads and front zip pocket.",
      "category": "apparel",
      "vendor": "partners-demo",
      "tags": [
        "women"
      ],
      "inventory": 93,
      "price": 80,
      "image": "https://burst.shopifycdn.com/photos/leather-jacket-and-tea_925x.jpg"
    },
    {
      "id": "dark-denim-top",
      "title": "Dark Denim Top",
      "body": "Classic dark denim top with chest pockets, long sleeves with buttoned cuffs, and a ripped hem effect.",
      "category": "apparel",
      "vendor": "partners-demo",
      "tags": [
        "women"
      ],
      "inventory": 86,
      "price": 60,
      "image": "https://burst.shopifycdn.com/photos/young-female-models-denim_925x.jpg"
    },
    {
      "id": "navy-sport-jacket",
      "title": "Navy Sports Jacket",
      "body": "Long-sleeved navy waterproof jacket in thin, polyester fabric with a soft mesh inside. The durable water-repellent finish means you'll be kept comfortable and protected when out in all weathers.",
      "category": "apparel",
      "vendor": "partners-demo",
      "tags": [
        "men"
      ],
      "inventory": 85,
      "price": 60,
      "image": "https://burst.shopifycdn.com/photos/mens-fall-fashion-jacket_925x.jpg"
    },
    {
      "id": "dark-winter-jacket",
      "title": "Soft Winter Jacket",
      "body": "Thick black winter jacket, with soft fleece lining. Perfect for those cold weather days.",
      "category": "apparel",
      "vendor": "partners-demo",
      "tags": [
        "women"
      ],
      "inventory": 70,
      "price": 50,
      "image": "https://burst.shopifycdn.com/photos/smiling-woman-on-snowy-afternoon_925x.jpg"
    },
    {
      "id": "black-leather-bag",
      "title": "Black Leather Bag",
      "body": "Womens black leather bag, with ample space. Can be worn over the shoulder, or remove straps to carry in your hand.",
      "category": "apparel",
      "vendor": "partners-demo",
      "tags": [
        "women"
      ],
      "inventory": 22,
      "price": 30,
      "image": "https://burst.shopifycdn.com/photos/black-bag-over-the-shoulder_925x.jpg"
    },
    {
      "id": "zipped-jacket",
      "title": "Zipped Jacket",
      "body": "Dark navy and light blue men's zipped waterproof jacket with an outer zipped chestpocket for easy storeage.",
      "category": "apparel",
      "vendor": "partners-demo",
      "tags": [
        "men"
      ],
      "inventory": 92,
      "price": 65,
      "image": "https://burst.shopifycdn.com/photos/menswear-blue-zip-up-jacket_925x.jpg"
    },
    {
      "id": "silk-summer-top",
      "title": "Silk Summer Top",
      "body": "Silk womens top with short sleeves and number pattern.",
      "category": "apparel",
      "vendor": "partners-demo",
      "tags": [
        "women"
      ],
      "inventory": 30,
      "price": 70,
      "image": "https://burst.shopifycdn.com/photos/young-hip-woman-at-carnival_925x.jpg"
    },
    {
      "id": "longsleeve-cotton-top",
      "title": "Long Sleeve Cotton Top",
      "body": "Black cotton womens top, with long sleeves, no collar and a thick hem.",
      "category": "apparel",
      "vendor": "partners-demo",
      "tags": [
        "women"
      ],
      "inventory": 42,
      "price": 50,
      "image": "https://burst.shopifycdn.com/photos/woman-outside-brownstone_925x.jpg"
    },
    {
      "id": "chequered-red-shirt",
      "title": "Chequered Red Shirt",
      "body": "Classic mens plaid flannel shirt with long sleeves, in chequered style, with two chest pockets.",
      "category": "apparel",
      "vendor": "partners-demo",
      "tags": [
        "men"
      ],
      "inventory": 17,
      "price": 50,
      "image": "https://burst.shopifycdn.com/photos/red-plaid-shirt_925x.jpg"
    },
    {
      "id": "white-cotton-shirt",
      "title": "White Cotton Shirt",
      "body": "Plain white cotton long sleeved shirt with loose collar. Small buttons and front pocket.",
      "category": "apparel",
      "vendor": "partners-demo",
      "tags": [
        "women"
      ],
      "inventory": 12,
      "price": 30,
      "image": "https://burst.shopifycdn.com/photos/smiling-woman-poses_925x.jpg"
    },
    {
      "id": "olive-green-jacket",
      "title": "Olive Green Jacket",
      "body": "Loose fitting olive green jacket with buttons and large pockets. Multicoloured pattern on the front of the shoulders.",
      "category": "apparel",
      "vendor": "partners-demo",
      "tags": [
        "women"
      ],
      "inventory": 21,
      "price": 65,
      "image": "https://burst.shopifycdn.com/photos/urban-fashion_925x.jpg"
    },
    {
      "id": "blue-silk-tuxedo",
      "title": "Blue Silk Tuxedo",
      "body": "Blue silk tuxedo with marbled aquatic pattern and dark lining. Sleeves are complete with rounded hem and black buttons.",
      "category": "apparel",
      "vendor": "partners-demo",
      "tags": [
        "men"
      ],
      "inventory": 59,
      "price": 70,
      "image": "https://burst.shopifycdn.com/photos/man-adjusts-blue-tuxedo-bowtie_925x.jpg"
    },
    {
      "id": "red-sports-tee",
      "title": "Red Sports Tee",
      "body": "Women's red sporty t-shirt with colorful details on the sleeves and a small white pocket.",
      "category": "apparel",
      "vendor": "partners-demo",
      "tags": [
        "women"
      ],
      "inventory": 28,
      "price": 50,
      "image": "https://burst.shopifycdn.com/photos/womens-red-t-shirt_925x.jpg"
    },
    {
      "id": "striped-skirt-and-top",
      "title": "Striped Skirt and Top",
      "body": "Black cotton top with matching striped skirt.",
      "category": "apparel",
      "vendor": "partners-demo",
      "tags": [
        "women"
      ],
      "inventory": 37,
      "price": 50,
      "image": "https://burst.shopifycdn.com/photos/woman-in-the-city_925x.jpg"
    },
    {
      "id": "led-high-tops",
      "title": "LED High Tops",
      "body": "Black high top shoes with green LED lights in the sole, tied up with laces and a buckle.",
      "category": "apparel",
      "vendor": "partners-demo",
      "tags": [
        "men"
      ],
      "inventory": 73,
      "price": 80,
      "image": "https://burst.shopifycdn.com/photos/putting-on-your-shoes_925x.jpg"
    },
    {
      "id": "clay-plant-pot",
      "title": "Clay Plant Pot",
      "body": "<p>Classic blown clay pot for plants</p>",
      "category": "home-and-garden",
      "vendor": "Company 123",
      "tags": [
        "Pot",
        "Plants"
      ],
      "inventory": 83,
      "price": 9.99,
      "image": "https://burst.shopifycdn.com/photos/single-sprout-in-a-pot_925x.jpg"
    },
    {
      "id": "copper-light",
      "title": "Copper Light",
      "body": "<p>Stylish copper bedside light</p>",
      "category": "home-and-garden",
      "vendor": "Company 123",
      "tags": [
        "Copper",
        "Bedroom"
      ],
      "inventory": 78,
      "price": 59.99,
      "image": "https://burst.shopifycdn.com/photos/copper-light-in-bedroom_925x.jpg"
    },
    {
      "id": "cream-sofa",
      "title": "Cream Sofa",
      "body": "<p>Comfortable cream sofa with wooden base</p>",
      "category": "home-and-garden",
      "vendor": "Company 123",
      "tags": [
        "Couch",
        "Wood"
      ],
      "inventory": 17,
      "price": 500,
      "image": "https://burst.shopifycdn.com/photos/condominium-interior-livingroom_925x.jpg"
    },
    {
      "id": "antique-drawers",
      "title": "Antique Drawers",
      "body": "<p>Antique wooden chest of drawers</p>",
      "category": "home-and-garden",
      "vendor": "Company 123",
      "tags": [
        "Antique",
        "Bedroom"
      ],
      "inventory": 97,
      "price": 250,
      "image": "https://burst.shopifycdn.com/photos/babys-room_925x.jpg"
    },
    {
      "id": "white-bed-clothes",
      "title": "White Bed Clothes",
      "body": "<p>Sleek white bed clothes</p>",
      "category": "home-and-garden",
      "vendor": "Company 123",
      "tags": [
        "Bed"
      ],
      "inventory": 69,
      "price": 29.99,
      "image": "https://burst.shopifycdn.com/photos/bright-hotel-room-bed_925x.jpg"
    },
    {
      "id": "pink-armchair",
      "title": "Pink Armchair",
      "body": "<p>Stylish pink armchair</p>",
      "category": "home-and-garden",
      "vendor": "Company 123",
      "tags": [
        "Chair"
      ],
      "inventory": 17,
      "price": 750,
      "image": "https://burst.shopifycdn.com/photos/soft-pink-cushioned-armchair-in-stately-salon_925x.jpg"
    },
    {
      "id": "wooden-outdoor-table",
      "title": "Wooden Outdoor Table",
      "body": "<p>Chic wooden outdoor garden table</p>",
      "category": "home-and-garden",
      "vendor": "Rustic LTD",
      "tags": [
        "Wood",
        "Garden"
      ],
      "inventory": 68,
      "price": 99.99,
      "image": "https://burst.shopifycdn.com/photos/cafe-patio_925x.jpg"
    },
    {
      "id": "brown-throw-pillows",
      "title": "Brown Throw Pillows",
      "body": "<p>Stylish brown throw pillows</p>",
      "category": "home-and-garden",
      "vendor": "Rustic LTD",
      "tags": [
        "Pillows"
      ],
      "inventory": 85,
      "price": 19.99,
      "image": "https://burst.shopifycdn.com/photos/bedroom-bed-with-brown-throw-pillows_925x.jpg"
    },
    {
      "id": "white-ceramic-pot",
      "title": "White Ceramic Pot",
      "body": "<p>Homemade white ceramic flower pot</p>",
      "category": "home-and-garden",
      "vendor": "Rustic LTD",
      "tags": [
        "Pot",
        "Plants"
      ],
      "inventory": 70,
      "price": 15.99,
      "image": "https://burst.shopifycdn.com/photos/house-plant-in-white-pot_925x.jpg"
    },
    {
      "id": "yellow-watering-can",
      "title": "Yellow watering can",
      "body": "<p>Vintage vibrant watering can</p>",
      "category": "home-and-garden",
      "vendor": "Rustic LTD",
      "tags": [
        "Plants"
      ],
      "inventory": 36,
      "price": 40.99,
      "image": "https://burst.shopifycdn.com/photos/flowers-in-yellow-watering-can_925x.jpg"
    },
    {
      "id": "gardening-hand-trowel",
      "title": "Gardening hand trowel",
      "body": "<p>Metal gardening hand trowel with wooden id</p>",
      "category": "home-and-garden",
      "vendor": "Rustic LTD",
      "tags": [
        "Plants"
      ],
      "inventory": 51,
      "price": 10.99,
      "image": "https://burst.shopifycdn.com/photos/spring-gardening-set-up_925x.jpg"
    },
    {
      "id": "biodegradable-cardboard-pots",
      "title": "Biodegradable cardboard pots",
      "body": "<p>Biodegradable outdoor cardboard pots</p>",
      "category": "home-and-garden",
      "vendor": "Rustic LTD",
      "tags": [
        "Garden",
        "Plants"
      ],
      "inventory": 85,
      "price": 10,
      "image": "https://burst.shopifycdn.com/photos/potted-seeds_925x.jpg"
    },
    {
      "id": "grey-sofa",
      "title": "Grey Sofa",
      "body": "<p>Large four seater grey sofa</p>",
      "category": "home-and-garden",
      "vendor": "Rustic LTD",
      "tags": [
        "Sofa"
      ],
      "inventory": 59,
      "price": 29.99,
      "image": "https://burst.shopifycdn.com/photos/large-grey-sofa-by-brick-wall_925x.jpg"
    },
    {
      "id": "wooden-outdoor-slats",
      "title": "Wooden outdoor slats",
      "body": "<p>Wooden outdoor fencing slats</p>",
      "category": "home-and-garden",
      "vendor": "Rustic LTD",
      "tags": [
        "Wood",
        "Garden"
      ],
      "inventory": 31,
      "price": 25.99,
      "image": "https://burst.shopifycdn.com/photos/house-plant-on-wooden-slat-wall_925x.jpg"
    },
    {
      "id": "wooden-fence",
      "title": "Wooden Fence",
      "body": "<p>Wooden garden fence</p>",
      "category": "home-and-garden",
      "vendor": "Rustic LTD",
      "tags": [
        "Garden",
        "Wood"
      ],
      "inventory": 82,
      "price": 200,
      "image": "https://burst.shopifycdn.com/photos/picket-fence-flowers_925x.jpg"
    },
    {
      "id": "yellow-sofa",
      "title": "Yellow Sofa",
      "body": "<p>Two seater yellow sofa with wooden legs</p>",
      "category": "home-and-garden",
      "vendor": "Home Sweet Home",
      "tags": [
        "Sofa"
      ],
      "inventory": 83,
      "price": 99.99,
      "image": "https://burst.shopifycdn.com/photos/yellow-couch-by-black-and-white-mural_925x.jpg"
    },
    {
      "id": "knitted-throw-pillows",
      "title": "Knitted Throw Pillows",
      "body": "<p>Homemade knitted throw pillows in a variety of colors</p>",
      "category": "home-and-garden",
      "vendor": "Home Sweet Home",
      "tags": [
        "Pillows"
      ],
      "inventory": 38,
      "price": 19.99,
      "image": "https://burst.shopifycdn.com/photos/yellow-sofa-with-throw-pillows_925x.jpg"
    },
    {
      "id": "vanilla-candle",
      "title": "Vanilla candle",
      "body": "<p>Vanilla scent candle in jar</p>",
      "category": "home-and-garden",
      "vendor": "Home Sweet Home",
      "tags": [
        "Candle"
      ],
      "inventory": 28,
      "price": 15.99,
      "image": "https://burst.shopifycdn.com/photos/diy-organic-candle_925x.jpg"
    },
    {
      "id": "black-bean-bag",
      "title": "Black Beanbag",
      "body": "<p>Black leather beanbag</p>",
      "category": "home-and-garden",
      "vendor": "Company 123",
      "tags": [
        "Black",
        "Leather"
      ],
      "inventory": 28,
      "price": 69.99,
      "image": "https://burst.shopifycdn.com/photos/comfortable-living-room-cat_925x.jpg"
    },
    {
      "id": "bedside-table",
      "title": "Bedside Table",
      "body": "<p>Wooden bedside table</p>",
      "category": "home-and-garden",
      "vendor": "Company 123",
      "tags": [
        "Wood",
        "Bedroom"
      ],
      "inventory": 31,
      "price": 69.99,
      "image": "https://burst.shopifycdn.com/photos/dark-wall-bedside-table_925x.jpg"
    },
    {
      "id": "chain-bracelet",
      "title": "7 Shakra Bracelet",
      "body": "7 chakra bracelet, in blue or black.",
      "category": "jewellery",
      "vendor": "Company 123",
      "tags": [
        "Beads"
      ],
      "inventory": 62,
      "price": 42.99,
      "image": "https://burst.shopifycdn.com/photos/7-chakra-bracelet_925x.jpg"
    },
    {
      "id": "leather-anchor",
      "title": "Anchor Bracelet Mens",
      "body": "Black leather bracelet with gold or silver anchor for men.",
      "category": "jewellery",
      "vendor": "Company 123",
      "tags": [
        "Anchor",
        "Gold",
        "Leather",
        "Silver"
      ],
      "inventory": 87,
      "price": 69.99,
      "image": "https://burst.shopifycdn.com/photos/anchor-bracelet-mens_925x.jpg"
    },
    {
      "id": "bangle-bracelet",
      "title": "Bangle Bracelet",
      "body": "Gold bangle bracelet with studded jewels.",
      "category": "jewellery",
      "vendor": "Company 123",
      "tags": [
        "Diamond",
        "Gem",
        "Gold"
      ],
      "inventory": 36,
      "price": 39.99,
      "image": "https://burst.shopifycdn.com/photos/bangle-bracelet-with-jewels_925x.jpg"
    },
    {
      "id": "bangle-bracelet-with-feathers",
      "title": "Boho Bangle Bracelet",
      "body": "Gold boho bangle bracelet with multicolor tassels.",
      "category": "jewellery",
      "vendor": "Company 123",
      "tags": [
        "Gold"
      ],
      "inventory": 26,
      "price": 42.99,
      "image": "https://burst.shopifycdn.com/photos/bangle-bracelet-with-feathers_925x.jpg"
    },
    {
      "id": "boho-earrings",
      "title": "Boho Earrings",
      "body": "Turquoise globe earrings on 14k gold hooks.",
      "category": "jewellery",
      "vendor": "Company 123",
      "tags": [
        "Silver",
        "Turquoise"
      ],
      "inventory": 24,
      "price": 27.99,
      "image": "https://burst.shopifycdn.com/photos/boho-earrings_925x.jpg"
    },
    {
      "id": "choker-with-bead",
      "title": "Choker with Bead",
      "body": "Black choker necklace with 14k gold bead.",
      "category": "jewellery",
      "vendor": "Company 123",
      "tags": [
        "Gold",
        "Leather"
      ],
      "inventory": 78,
      "price": 14.99,
      "image": "https://burst.shopifycdn.com/photos/black-choker-with-bead_925x.jpg"
    },
    {
      "id": "choker-with-gold-pendant",
      "title": "Choker with Gold Pendant",
      "body": "Black cord choker with gold pendant. Beautifully died black leather shapes a choker necklace with findings of 14k yellow gold, displaying gold pendant in a gorgeous balance of dark and light, delicate and strong.<ul><li>14k yellow gold</li><li>Leather</li><li>Length, 12\" with 2.5\" extender</li><li>Width, 0.3\"</li><li>Lobster clasp</li><li>Made in USA</li></ul>",
      "category": "jewellery",
      "vendor": "Company 123",
      "tags": [
        "Choker",
        "Gold",
        "Leather",
        "Pendant"
      ],
      "inventory": 5,
      "price": 29.99,
      "image": "https://burst.shopifycdn.com/photos/choker-with-gold-pendant_925x.jpg"
    },
    {
      "id": "choker-with-triangle",
      "title": "Choker with Triangle",
      "body": "Black choker with silver triangle pendant.",
      "category": "jewellery",
      "vendor": "Company 123",
      "tags": [
        "Leather",
        "Silver",
        "Triangle"
      ],
      "inventory": 58,
      "price": 47.99,
      "image": "https://burst.shopifycdn.com/photos/choker-with-triangle_925x.jpg"
    },
    {
      "id": "dainty-gold-neclace",
      "title": "Dainty Gold Necklace",
      "body": "Dainty gold necklace with two pendants.",
      "category": "jewellery",
      "vendor": "Company 123",
      "tags": [
        "Gold",
        "Pendant"
      ],
      "inventory": 38,
      "price": 63.99,
      "image": "https://burst.shopifycdn.com/photos/dainty-gold-necklace_925x.jpg"
    },
    {
      "id": "dreamcatcher-pendant-necklace",
      "title": "Dreamcatcher Pendant Necklace",
      "body": "Turquoise beaded dream catcher necklace. Silver feathers adorn this beautiful dream catcher, which move and twinkle as you walk.",
      "category": "jewellery",
      "vendor": "Sterling Ltd",
      "tags": [
        "Dreamcatcher",
        "Pendant",
        "Silver",
        "Turquoise"
      ],
      "inventory": 5,
      "price": 23.99,
      "image": "https://burst.shopifycdn.com/photos/dreamcatcher-pendant-necklace_925x.jpg"
    },
    {
      "id": "galaxy-earrings",
      "title": "Galaxy Earrings",
      "body": "One set of galaxy earrings, with sterling silver clasps.",
      "category": "jewellery",
      "vendor": "Sterling Ltd",
      "tags": [
        "Blue",
        "Galaxy",
        "Silver"
      ],
      "inventory": 44,
      "price": 37.99,
      "image": "https://burst.shopifycdn.com/photos/galaxy-earrings_925x.jpg"
    },
    {
      "id": "gemstone",
      "title": "Gemstone Necklace",
      "body": "<p>Gemstone pendant, housed in sterling silver, with sterling silver chain.</p><ul><li>Sterling silver chain, 14 inches</li><li>Turquoise or Quartz</li><li>Boho Chic</li><li>Made in USA</li></ul>",
      "category": "jewellery",
      "vendor": "Sterling Ltd",
      "tags": [
        "Blue",
        "Gem",
        "Purple",
        "Silver",
        "Turquoise"
      ],
      "inventory": 88,
      "price": 27.99,
      "image": "https://burst.shopifycdn.com/photos/blue-gemstone-pendant_925x.jpg"
    },
    {
      "id": "gold-bird-necklace",
      "title": "Gold Bird Necklace",
      "body": "14k Gold delicate necklace, with bird between two chains.",
      "category": "jewellery",
      "vendor": "Company 123",
      "tags": [
        "Bird",
        "Gold"
      ],
      "inventory": 27,
      "price": 79.99,
      "image": "https://burst.shopifycdn.com/photos/gold-bird-necklace_925x.jpg"
    },
    {
      "id": "looped-earrings",
      "title": "Gold Elephant Earrings",
      "body": "Small 14k gold elephant earrings, with opal ear detail.",
      "category": "jewellery",
      "vendor": "Company 123",
      "tags": [
        "Gold",
        "Silver"
      ],
      "inventory": 72,
      "price": 54.99,
      "image": "https://burst.shopifycdn.com/photos/elephant-earrings_925x.jpg"
    },
    {
      "id": "guardian-angel-earrings",
      "title": "Guardian Angel Earrings",
      "body": "Sterling silver guardian angel earrings with diamond gemstones.",
      "category": "jewellery",
      "vendor": "Sterling Ltd",
      "tags": [
        "Angel",
        "Silver"
      ],
      "inventory": 22,
      "price": 19.99,
      "image": "https://burst.shopifycdn.com/photos/guardian-angel-earrings_925x.jpg"
    },
    {
      "id": "moon-charm-bracelet",
      "title": "Moon Charm Bracelet",
      "body": "Moon 14k gold chain friendship bracelet.",
      "category": "jewellery",
      "vendor": "Company 123",
      "tags": [
        "Gold",
        "Moon"
      ],
      "inventory": 47,
      "price": 47.99,
      "image": "https://burst.shopifycdn.com/photos/womens-hand-moon-bracelet-_925x.jpg"
    },
    {
      "id": "origami-crane-necklace",
      "title": "Origami Crane Necklace",
      "body": "Sterling silver origami crane necklace.",
      "category": "jewellery",
      "vendor": "Sterling Ltd",
      "tags": [
        "Crane",
        "Origami",
        "Silver"
      ],
      "inventory": 13,
      "price": 75.99,
      "image": "https://burst.shopifycdn.com/photos/origami-crane-necklace-gold_925x.jpg"
    },
    {
      "id": "pretty-gold-necklace",
      "title": "Pretty Gold Necklace",
      "body": "14k gold and turquoise necklace. Stunning beaded turquoise on gold and pendant filled double chain design.",
      "category": "jewellery",
      "vendor": "Company 123",
      "tags": [
        "Gold",
        "Turquoise"
      ],
      "inventory": 48,
      "price": 44.95,
      "image": "https://burst.shopifycdn.com/photos/pretty-gold-necklace_925x.jpg"
    },
    {
      "id": "silver-threader-necklace",
      "title": "Silver Threader Necklace",
      "body": "Sterling silver chain thread through circle necklace.",
      "category": "jewellery",
      "vendor": "Sterling Ltd",
      "tags": [
        "Silver"
      ],
      "inventory": 16,
      "price": 14.99,
      "image": "https://burst.shopifycdn.com/photos/silver-threader-necklace_925x.jpg"
    },
    {
      "id": "stylish-summer-neclace",
      "title": "Stylish Summer Necklace",
      "body": "Double chained gold boho necklace with turquoise pendant.",
      "category": "jewellery",
      "vendor": "Company 123",
      "tags": [
        "Gold",
        "Turquoise"
      ],
      "inventory": 53,
      "price": 44.99,
      "image": "https://burst.shopifycdn.com/photos/stylish-summer-necklace_925x.jpg"
    }
  ],
  "categories", {
    "apparel": "Apparel",
    "home-and-garden": "Home and Garden",
    "jewellery": "Jewellery"
  },
]
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App HenzaClothes={HenzaClothes}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
