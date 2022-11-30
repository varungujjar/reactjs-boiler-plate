import { useEffect, useState } from 'react';
import serviceApi from './service/axios';
import Table from './components/table';
import Header from './common/header';

function App() {
	const [items, setItems] = useState([]);
	const tableCols = [
		{
			name: 'Product Name',
			accessor: 'title',
		},
		{
			name: 'Category',
			accessor: 'category',
		},
		{
			name: 'Stock',
			accessor: 'stock',
		},
		{
			name: 'Price',
			accessor: 'price',
		},
		{
			name: 'ID',
			accessor: 'id',
		},
	];

	useEffect(() => {
		const fetchData = async () => {
			await serviceApi
				.get('/products')
				.then((response) => {
					setItems(response.data.products);
				})
				.catch((error) => {});
		};

		fetchData();
	}, []);

	return (
		<>
			<Header />
			<div className="w-11/12 m-auto">
				<Table cols={tableCols} data={items} rowsPerPage={11} />
			</div>
		</>
	);
}

export default App;
