const TableHead = ({ cols }) => {
	return (
		<thead className="text-slate-600 shadow-sm">
			<tr className="h-12 border-b border-t border-slate-200 ">
				<th className="px-5 w-4">
					<div className="form-check">
						<input
							className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-emerald-600 checked:border-emerald-600 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer"
							type="checkbox"
							value=""
							id="flexCheckChecked"
						/>
					</div>
				</th>
				{cols.map((col, index) => (
					<th className="px-3" key={index}>
						{col.name}
					</th>
				))}

				<th className="px-3 pr-10 text-right">Actions</th>
			</tr>
		</thead>
	);
};

export default TableHead;
