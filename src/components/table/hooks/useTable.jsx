import { useState, useEffect } from 'react';

const calculateRange = (data, rowsPerPage) => {
	const range = [];
	const num = Math.ceil(data.length / rowsPerPage);
	for (let i = 1; i <= num; i++) {
		range.push(i);
	}
	return range;
};

const sliceData = (data, page, rowsPerPage) => {
	return data.slice((page - 1) * rowsPerPage, page * rowsPerPage);
};

const useTable = (data, page, rowsPerPage) => {
	const [tableRange, setTableRange] = useState([]);
	const [sliceTableData, setSliceTableData] = useState([]);

	useEffect(() => {
		const range = calculateRange(data, rowsPerPage);
		setTableRange([...range]);

		const sliceTableData = sliceData(data, page, rowsPerPage);
		setSliceTableData([...sliceTableData]);
	}, [data, setTableRange, page, setSliceTableData, rowsPerPage]);

	return [sliceTableData, tableRange];
};

export default useTable;
