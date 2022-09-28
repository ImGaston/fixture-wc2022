import Flags from '../../database/db-flags';

const allFlags = async (req, res) => {
	const data = await Flags.getAll();
	res.status(200).json({ data });
};

export default allFlags;
