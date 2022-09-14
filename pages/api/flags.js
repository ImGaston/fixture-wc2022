import flags from '../../database/countries';

const Flags = {};

Flags.getAll = async () => {
	return flags;
};

const allFlags = async (req, res) => {
	const data = await Flags.getAll();
	res.status(200).json({ data });
};

export default allFlags;
