import Head from 'next/head';
import Navbar from '../components/Navbar';

const Home = () => {
	return (
		<>
			<Head>
				<title>Joel N. Evans</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Navbar />
			<div>Hello World</div>
		</>
	);
};
export default Home;