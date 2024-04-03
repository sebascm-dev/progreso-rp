import { db, News } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
	await db.insert(News).values([
		{
			id: 1,
			date: '15/02',
			text: 'Esto es una noticia de prueba para comprobar que funciona correctamente'
		},
		{
			id: 2,
			date: '16/02',
			text: 'Esto es una noticia de prueba para comprobar que funciona correctamente'
		},
		{
			id: 3,
			date: '17/02',
			text: 'Esto es una noticia de prueba para comprobar que funciona correctamente'
		},
		{
			id: 4,
			date: '18/02',
			text: 'Esto es una noticia de prueba para comprobar que funciona correctamente'
		},
		{
			id: 5,
			date: '19/02',
			text: 'Esto es una noticia de prueba para comprobar que funciona correctamente'
		},
		{
			id: 6,
			date: '20/02',
			text: 'Esto es una noticia de prueba para comprobar que funciona correctamente'
		},
	])
}
