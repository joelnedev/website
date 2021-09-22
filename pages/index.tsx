import Head from 'next/head';
import Landing from '../components/Landing';
import Navbar from '../components/Navbar';
import Projects from '../components/Projects';

const Home = () => {
	return (
		<div id="top" className='bg-gradient-to-br from-green-theme-2 to-gray-theme-2'>
			<Head>
				<title>Joel N. Evans</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Navbar />
			<Landing />
			<Projects />
		</div>
	);
};
export default Home;