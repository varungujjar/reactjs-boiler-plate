import { useEffect, useState } from 'react';

const TableBody = ({ items, searchTerm }) => {
	const [selectedItems, setSelectedItems] = useState([]);

	const onItemSelected = (event, id) => {
		if (event.target.checked) {
			setSelectedItems([...selectedItems, id]);
		} else {
			setSelectedItems([...selectedItems.filter((item) => item !== id)]);
		}
	};

	useEffect(() => {}, [selectedItems.length]);

	return (
		<tbody className="text-slate-600">
			{items.length ? (
				items.map((item, index) => {
					const selectedActive = selectedItems.indexOf(item.id) >= 0;

					return (
						<tr
							key={index}
							className={`h-12 border-b border-slate-200 hover:bg-slate-50 transition transition-duration-50 ${
								selectedActive ? 'bg-slate-50' : ''
							}`}
						>
							<td className="px-3 pl-5">
								<div className="form-check">
									<input
										className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-emerald-600 checked:border-emerald-600 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer"
										type="checkbox"
										defaultValue=""
										id="flexCheckChecked"
										onChange={(event) => onItemSelected(event, item.id)}
										checked={selectedActive ? 'checked' : ''}
									/>
								</div>
							</td>
							<td className="px-3">{item.title}</td>
							<td className="px-3">
								<span className="bg-emerald-200 text-emerald-600 px-2 py-1 rounded inline-block text-sm">
									{item.category}
								</span>
							</td>
							<td className="px-3">{item.stock}</td>
							<td className="px-3">${item.price}</td>
							<td className="px-3">{item.id}</td>
							<td className="px-3 text-right pr-5">
								<div className="actions px-3">
									<button className=" hover:text-emerald-600 transition transition-duration-500 h-10 w-10">
										<i className="fa-regular fa-pen"></i>
									</button>
									<button className="hover:text-emerald-600 transition transition-duration-500 h-10 w-10">
										<i className="fa-regular fa-trash"></i>
									</button>
								</div>
							</td>
						</tr>
					);
				})
			) : searchTerm ? (
				<tr>
					<td colSpan="7">
						<div className="text-center p-5 bg-slate-50 text-gray-400">
							No Items Found.
						</div>
					</td>
				</tr>
			) : (
				<>
					<TrPlaceholderItem />
					<TrPlaceholderItem />
					<TrPlaceholderItem />
					<TrPlaceholderItem />
					<TrPlaceholderItem />
					<TrPlaceholderItem />
				</>
			)}
		</tbody>
	);
};

const TrPlaceholderItem = () => {
	return (
		<tr className="h-12 border-b border-slate-200 w-full">
			<td className="px-3 pl-5"></td>
			<td className="px-3">
				<div className="h-4 bg-gray-200 rounded animate-pulse"></div>
			</td>
			<td className="px-3">
				<div className="h-4 bg-gray-200 rounded animate-pulse w-6/12"></div>
			</td>
			<td className="px-3">
				<div className="h-4 bg-gray-200 rounded animate-pulse"></div>
			</td>
			<td className="px-3">
				<div className="h-4 bg-gray-200 rounded animate-pulse"></div>
			</td>
			<td className="px-3">
				<div className="h-4 bg-gray-200 rounded animate-pulse"></div>
			</td>
			<td className="px-3 text-right pr-5">
				<div className="actions px-3 flex pr-5 align-end">
					<div className="h-4 bg-gray-200 rounded animate-pulse mr-4 w-3/12"></div>
					<div className="h-4 bg-gray-200 rounded animate-pulse w-3/12"></div>
				</div>
			</td>
		</tr>
	);
};

export default TableBody;
