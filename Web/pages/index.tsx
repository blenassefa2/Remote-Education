import Sidebar from '../components/Sidebar';
import Description from '../components/Description';

const HomePage = () => {
   return (
	<div className="h-screen w-[100%]">
	<div className="flex">
		<Sidebar />
		<Description />
	</div>	
	</div>
   );
};

export default HomePage;
