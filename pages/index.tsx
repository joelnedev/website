import Head from 'next/head';
import About from '../components/About';
import Navbar from '../components/Navbar';

const Home = () => {
	return (
		<div className='bg-gradient-to-br from-green-theme-2 to-gray-theme-2'>
			<Head>
				<title>Joel N. Evans</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Navbar />
			<About />
		</div>
	);
};
export default Home;