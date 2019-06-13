const Favorites = {

	getKey: (event) => {
		return event.name + '-' + event.host;
	},

	toggleFavorite: (event) => {
		const favorites = Favorites.getFavorites();
		const key = Favorites.getKey(event);
		if (favorites.indexOf(key) !== -1) {
			Favorites.removeFromFavorites(favorites, key);
		} else {
			Favorites.addToFavorites(favorites, key);
		}

		return Favorites.getFavorites();
	},

	addToFavorites: (favorites, key) => {
		const newFavorites = favorites.concat([key]);
		localStorage.setItem('favorites', JSON.stringify(newFavorites));
	},

	removeFromFavorites: (favorites, key) => {
		const newFavorites = favorites.filter(f => f !== key);
		localStorage.setItem('favorites', JSON.stringify(newFavorites));
	},

	getFavorites: () => {
		const favorites = localStorage.getItem('favorites') || JSON.stringify([]);
		return JSON.parse(favorites);
	}
}

export default Favorites;