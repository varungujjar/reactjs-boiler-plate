import { useEffect } from 'react';

const TableFooter = ({
	sliceTableData,
	range,
	currentPage,
	setCurrentPage,
	rowsPerPage,
	tableData,
}) => {
	useEffect(() => {
		if (sliceTableData.length < 1 && currentPage !== 1) {
			setCurrentPage(currentPage - 1);
		}
	}, [sliceTableData, currentPage, setCurrentPage]);

	const NextButton = () => {
		const nextPage = range.includes(currentPage + 1) ? currentPage + 1 : null;
		return (
			<button
				className={`relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300   ${
					!nextPage
						? 'text-gray-400'
						: 'hover:bg-gray-200 focus:shadow-none text-gray-800 hover:text-gray-800'
				}`}
				onClick={() => setCurrentPage(nextPage)}
				disabled={!nextPage && 'disabled'}
			>
				Next
			</button>
		);
	};

	const PrevButton = () => {
		const prevPage = range.includes(currentPage - 1) ? currentPage - 1 : null;
		return (
			<button
				className={`relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300   ${
					!prevPage
						? 'text-gray-400'
						: 'hover:bg-gray-200 focus:shadow-none text-gray-800 hover:text-gray-800'
				}`}
				onClick={() => setCurrentPage(prevPage)}
				disabled={!prevPage && 'disabled'}
			>
				Prev
			</button>
		);
	};

	return (
		<div className="flex justify-center p-5 text-base text-gray-500">
			<div className="flex-1  mt-1">
				Showing {rowsPerPage * currentPage - rowsPerPage + 1} -
				{rowsPerPage * currentPage - rowsPerPage + sliceTableData.length}
				&nbsp;of&nbsp;
				{tableData.length}
			</div>
			<nav aria-label="Page navigation example">
				<ul className="flex list-style-none">
					<li className="page-item disabled">
						<PrevButton />
					</li>

					{range.map((el, index) => (
						<li className="page-item" key={index}>
							<button
								className={`page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300   focus:shadow-none ${
									currentPage === el
										? 'bg-emerald-600 text-white hover:bg-emerald-400'
										: 'hover:text-gray-800  hover:bg-gray-200 '
								}`}
								onClick={() => setCurrentPage(el)}
							>
								{el}
							</button>
						</li>
					))}

					<li className="page-item">
						<NextButton />
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default TableFooter;
