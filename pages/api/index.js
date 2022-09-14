// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Database from '../../database/db';

const allMatches = async (req, res) => {
	const data = await Database.getAll();
	res.status(200).json({ data });
};

export default allMatches;
