const Header = () => {
	return (
		<header className="bg-white px-5 py-4 flex justify-between  border-b border-slate-200">
			<button
				className="w-8 h-8 transition duration-200 rounded-full hover:bg-slate-100 text-xl"
				data-mdb-ripple="true"
				data-mdb-ripple-color="light"
			>
				<i className="fa-regular fa-bars"></i>
			</button>
			<nav className="hidden sm:block text-base font-semibold">
				<ul className="flex items-center mt-1">
					<li className="mr-5">
						<a
							href="/"
							className=" px-3 py-2 text-slate-700 rounded hover:bg-slate-100 hover:text-slate-900 transition duration-500"
						>
							Home
						</a>
					</li>
					<li className="mr-5">
						<a
							href="/"
							className=" px-3 py-2 text-slate-700 rounded hover:bg-slate-100 hover:text-slate-900 transition duration-500"
						>
							Listing
						</a>
					</li>
					<li className="mr-5">
						<a
							href="/"
							className=" px-3 py-2 text-slate-700 rounded hover:bg-slate-100 hover:text-slate-900 transition duration-500"
						>
							Detail
						</a>
					</li>
					<li className="mr-5">
						<a
							href="/"
							className=" px-3 py-2 text-slate-700 rounded hover:bg-slate-100 hover:text-slate-900 transition duration-500"
						>
							Form
						</a>
					</li>
				</ul>
			</nav>

			<button
				className="rounded-full bg-slate-100 hover:bg-slate-200 w-8 h-8 transition duration-500"
				data-mdb-ripple="true"
				data-mdb-ripple-color="light"
			>
				<i className="fa-regular fa-sun-bright"></i>
			</button>
		</header>
	);
};
export default Header;
