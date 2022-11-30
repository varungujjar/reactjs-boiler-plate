import { useState } from 'react';
import useTable from './hooks/useTable';
import TableHead from './TableHead';
import TableBody from './TableBody';
import TableFooter from './TableFooter';

const Table = ({ data, cols, rowsPerPage }) => {
	const [filteredItems, setFilteredItems] = useState([]);
	const [currentPage, setCurrentPage] = useState(2);
	const [searchTerm, setSearchTerm] = useState('');
	const [sliceTableData, range] = useTable(
		filteredItems.length || searchTerm ? filteredItems : data,
		currentPage,
		rowsPerPage
	);

	const handleSearch = (event) => {
		let searchFilteredItems = data.filter((item) => {
			return cols.map((col) => {
				console.log(item.title);
				return item[col.accessor]
					.toString()
					.toLowerCase()
					.trim()
					.includes(event.target.value.toLowerCase());
			});
		});
		setFilteredItems(event.target.value ? searchFilteredItems : []);
		setSearchTerm(event.target.value);
	};

	return (
		<>
			<div className="overflow-x-scroll lg:overflow-x-hidden mt-5 rounded overflow-hidden bg-white shadow mb-4">
				<div className="pl-5 py-5">
					<div className="relative">
						<i className="fa-regular fa-magnifying-glass absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400"></i>
						<input
							type="text"
							onChange={handleSearch}
							placeholder="Search"
							className="w-4/12 text-slate-600 px-3 py-2 pl-9 border-2 border-slate-200 rounded hover:border-emerald-600 focus:outline-none focus:bg-white focus:text-slate-600 transition transition-duration-500"
						/>
					</div>
				</div>

				<table className="w-full bg-white dark:bg-gray-800 text-left text-base">
					<TableHead cols={cols} />
					<TableBody items={sliceTableData} searchTerm={searchTerm} />
				</table>
				<TableFooter
					sliceTableData={sliceTableData}
					range={range}
					currentPage={currentPage}
					setCurrentPage={setCurrentPage}
					rowsPerPage={rowsPerPage}
					tableData={data}
				/>
			</div>
		</>
	);
};

export default Table;
