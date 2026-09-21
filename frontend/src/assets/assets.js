import logo from './logo.png'
import searchIcon from './search_icon.png'
import basketIcon from './basket_icon.png'
import ratingStarts from './rating_starts.webp'
import addIconBlack from './add_icon_black.png'
import addIconGreen from './add_icon_green.png'
import removeIconRed from './remove_icon_red.png'

import menu1 from './salad.jpg'
import menu2 from './rolls.jpg'
import menu3 from './deserts.jpg'
import menu4 from './sandwich.jpg'
import menu5 from './cake.jpg'
import menu6 from './pure-veg.jpg'
import menu7 from './pasta.jpg'
import menu8 from './noddles.jpg'

import food_1 from './greek-salad.jpg'
import food_2 from './veg-salad.jpg'
import food_3 from './clover-salad.jpg'
import food_4 from './chicken-salad.jpg'
import food_5 from './lasagna-rolls.jpg'
import food_6 from './peri-peri-rolls.jpg'
import food_7 from './chicken-rolls.jpg'
import food_8 from './ripple-ice-cream.jpg'
import food_9 from './fruit-ice-cream.jpg'
import food_10 from './vegan-sandwich.jpg'
import food_11 from './grilled-sandwich.jpg'
import food_12 from './cup-cake.jpg'
import food_13 from './vegan-cake.jpg'
import food_14 from './butterscotch-cake.jpg'
import food_15 from './garlic-mushroom.jpg'
import food_16 from './fried-rice.jpg'
import food_17 from './cheese-pasta.jpg'
import food_18 from './tomato-pasta.jpg'
import food_19 from './shed-noodles.jpg'
import food_20 from './ramen-noodles.jpg'

export const assets = {
    logo,
    searchIcon,
    basketIcon,
    ratingStarts,
    addIconBlack,
    addIconGreen,
    removeIconRed
}

export const menu_list = [
    {
        menu_name: "Salad",
        menu_image: menu1,
    },
    {
        menu_name: "Rolls",
        menu_image: menu2,
    },
    {
        menu_name: "Deserts",
        menu_image: menu3,
    },
    {
        menu_name: "Sandwich",
        menu_image: menu4,
    },
    {
        menu_name: "Cake",
        menu_image: menu5,
    },
    {
        menu_name: "Pure Veg",
        menu_image: menu6,
    },
    {
        menu_name: "Pasta",
        menu_image: menu7,
    },
    {
        menu_name: "Noodles",
        menu_image: menu8,
    },
]

export const food_list = [
    // Salad
    {
        _id: "1",
        name: "Greek salad",
        image: food_1,
        price: 12,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Salad"
    },
    {
        _id: "2",
        name: "Veg salad",
        image: food_2,
        price: 10,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Salad"
    },
    {
        _id: "3",
        name: "Clover Salad",
        image: food_3,
        price: 16,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Salad"
    },
    {
        _id: "4",
        name: "Chicken Salad",
        image: food_4,
        price: 24,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Salad"
    },

    // Rolls
    {
        _id: "5",
        name: "Lasagna Rolls",
        image: food_5,
        price: 14,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Rolls"
    },
    {
        _id: "6",
        name: "Peri Peri Rolls",
        image: food_6,
        price: 12,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Rolls"
    },
    {
        _id: "7",
        name: "Chicken Rolls",
        image: food_7,
        price: 20,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Rolls"
    },

    // Deserts
    {
        _id: "8",
        name: "Ripple Ice Cream",
        image: food_8,
        price: 15,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Deserts"
    },
    {
        _id: "9",
        name: "Fruit Ice Cream",
        image: food_9,
        price: 14,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Deserts"
    },

    // Sandwich
    {
        _id: "10",
        name: "Vegan Sandwich",
        image: food_10,
        price: 12,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Sandwich"
    },
    {
        _id: "11",
        name: "Grilled Sandwich",
        image: food_11,
        price: 18,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Sandwich"
    },

    // Cake
    {
        _id: "12",
        name: "Cup Cake",
        image: food_12,
        price: 8,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Cake"
    },
    {
        _id: "13",
        name: "Vegan Cake",
        image: food_13,
        price: 22,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Cake"
    },
    {
        _id: "14",
        name: "Butterscotch Cake",
        image: food_14,
        price: 25,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Cake"
    },

    // Pure Veg
    {
        _id: "15",
        name: "Garlic Mushroom",
        image: food_15,
        price: 16,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Pure Veg"
    },
    {
        _id: "16",
        name: "Fried Rice",
        image: food_16,
        price: 14,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Pure Veg"
    },

    // Pasta
    {
        _id: "17",
        name: "Cheese Pasta",
        image: food_17,
        price: 20,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Pasta"
    },
    {
        _id: "18",
        name: "Tomato Pasta",
        image: food_18,
        price: 18,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Pasta"
    },

    // Noodles
    {
        _id: "19",
        name: "Shed Noodles",
        image: food_19,
        price: 16,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Noodles"
    },
    {
        _id: "20",
        name: "Ramen Noodles",
        image: food_20,
        price: 22,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Noodles"
    }
];