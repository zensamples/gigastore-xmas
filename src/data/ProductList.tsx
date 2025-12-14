import type { Product } from "../models/Product";

export const produits: Product[] = [
	{
		title: "Coffret cadeau Premium",
		rating: 4.8,
		voters: 124,
		price: 79.99,
		previousPrice: 99.99,
		image: "images/noel/noel-cadeaux-etoiles.jpg",
		overlayInfo: "Bestseller"
	},
	{
		title: "Décorations de sapin artisanales",
		rating: 4.9,
		voters: 89,
		price: 25.99,
		image: "images/noel/noel-sapin-boules.jpg"
	},
	{
		title: "Guirlandes festives",
		rating: 4.6,
		voters: 78,
		price: 34.99,
		image: "images/noel/noel-guirlande.jpg"
	},
	{
		title: "Kit de décoration complet",
		rating: 4.3,
		voters: 203,
		price: 49.99,
		image: "images/noel/noel-kit-decoration.jpg"
	},
	{
		title: "Calendrier de l'Avent original",
		rating: 5,
		voters: 167,
		price: 89.99,
		image: "images/noel/noel-calendrier-avent.jpg",
		overlayInfo: "Nouveau"
	},
	{
		title: "Chaussettes du Père Noël",
		rating: 4,
		voters: 75,
		price: 19.99,
		image: "images/noel/noel-chaussette.jpg",
		overlayInfo: "Stock : 1"
	},
]