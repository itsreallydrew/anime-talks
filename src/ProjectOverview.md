# anime-talks

Project Description

The name of this project is called Anime Talks. It is inspired by a group chat I share with some of my friends. The purpose of this app is to have two functions:

1. Is to be able to generate a random anime title to watch
2. Is to be able to search for information on an anime series.

# Wireframes

![Anime Talks Wireframe-Home](https://user-images.githubusercontent.com/88289750/133643890-3e2cc6c3-c994-4d9d-87cf-ec3cd0b5ba3c.png)
![Anime Talks Wireframe-Choose Path](https://user-images.githubusercontent.com/88289750/133643974-c1af98bb-dc7c-4186-8476-1b4e2784c30f.png)
![Anime Talks Wireframe-Hunter](https://user-images.githubusercontent.com/88289750/133644088-d53ade0a-2ed0-4cbe-8146-3700dc84308a.png)
![Anime Talks Wireframe-Explorer](https://user-images.githubusercontent.com/88289750/133644141-c074034a-38ec-4e10-90e6-2ccff4c7d278.png)

# Component Structure

![Anime Talks Wireframe-Component Visual](https://user-images.githubusercontent.com/88289750/133644255-b439821c-d35e-4325-aa5b-9bade4197ca5.png)

# User Stories

As a user I want to be able click a button and have a random Anime title display.
As a user I want to be able to search for an anime I know of and find out the details and information about it.

# Stretch Goals

I want to be able to have a random Manga be generated so that I can read it.
I want to be able to search for a Manga if I choose.
I want to be able to randomly search for an Anime/Manga based on category.
I want to be able to search based on ratings.
I want to be able to receive multiple suggestions when I choose randomly.
I want to be able to see a trailer for the Anime that shows up.

# Data Example

{
"request_hash": "request:manga:6a8f1d0bf1e0c5bff22ccafc9940313b28aecea8",
"request_cached": true,
"request_cache_expiry": 75238,
"mal_id": 99,
"url": "https://myanimelist.net/manga/99/Zombie-Loan",
"title": "Zombie-Loan",
"title_english": "Zombie-Loan",
"title_synonyms": [],
"title_japanese": "ZOMBIE-LOAN",
"status": "Finished",
"image_url": "https://cdn.myanimelist.net/images/manga/3/183676.jpg",
"type": "Manga",
"volumes": 13,
"chapters": 83,
"publishing": false,
"published": {
"from": "2002-10-18T00:00:00+00:00",
"to": "2011-02-18T00:00:00+00:00",
"prop": {
"from": {
"day": 18,
"month": 10,
"year": 2002
},
"to": {
"day": 18,
"month": 2,
"year": 2011
}
},
"string": "Oct 18, 2002 to Feb 18, 2011"
},
"rank": 3471,
"score": 7.38,
"scored_by": 6633,
"popularity": 790,
"members": 16669,
"favorites": 316,
"synopsis": "Michiru Kita’s a weak-spirited girl who has a hard time saying what’s on her mind. One day, she notices mysterious, ring-like markings around the necks of two of her classmates, Chika Akatsuki and Shito Tachibana — two boys who miraculously survived a horrible accident six months before. Michiru, possessing the rare ability to see these rings, knows that they warn of impending death. Thinking that, perhaps, she can do something to save her classmates’ lives, she approaches them... but it seems the boys have already made a different kind of deal and garnered themselves a heavy debt (Source: Yen Press)",
"background": "Zombie-Loan was published in English by Yen Press from October 17, 2007 to January 24, 2012.",
"related": {
"Adaptation": [
{
"mal_id": 3354,
"type": "anime",
"name": "Zombie-Loan Specials",
"url": "https://myanimelist.net/anime/3354/Zombie-Loan_Specials"
},
{
"mal_id": 2404,
"type": "anime",
"name": "Zombie-Loan",
"url": "https://myanimelist.net/anime/2404/Zombie-Loan"
}
]
},
"genres": [
{
"mal_id": 1,
"type": "manga",
"name": "Action",
"url": "https://myanimelist.net/manga/genre/1/Action"
},
{
"mal_id": 2,
"type": "manga",
"name": "Adventure",
"url": "https://myanimelist.net/manga/genre/2/Adventure"
},
{
"mal_id": 4,
"type": "manga",
"name": "Comedy",
"url": "https://myanimelist.net/manga/genre/4/Comedy"
},
{
"mal_id": 8,
"type": "manga",
"name": "Drama",
"url": "https://myanimelist.net/manga/genre/8/Drama"
},
{
"mal_id": 14,
"type": "manga",
"name": "Horror",
"url": "https://myanimelist.net/manga/genre/14/Horror"
},
{
"mal_id": 27,
"type": "manga",
"name": "Shounen",
"url": "https://myanimelist.net/manga/genre/27/Shounen"
},
{
"mal_id": 37,
"type": "manga",
"name": "Supernatural",
"url": "https://myanimelist.net/manga/genre/37/Supernatural"
}
],
"authors": [
{
"mal_id": 1948,
"type": "people",
"name": "PEACH‐PIT",
"url": "https://myanimelist.net/people/1948/PEACH‐PIT"
}
],
"serializations": [
{
"mal_id": 35,
"type": "manga",
"name": "GFantasy",
"url": "https://myanimelist.net/manga/magazine/35/GFantasy"
}
]
}

# API Choice

https://jikan.moe/
