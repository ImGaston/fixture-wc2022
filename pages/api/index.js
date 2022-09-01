// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import data from '../../database/data';
import Database from '../../database/db';

// export default function handler(req, res) {
// 	res.status(200).json({ data });
// }

const allMatches = async (req, res) => {
	const data = await Database.getAll();
	res.status(200).json({ data });
};

export default allMatches;
