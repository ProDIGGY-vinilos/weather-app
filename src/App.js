import styles from './App.module.css';
import Header from './components/header/header';
import CityForm from 'components/city-form/city-form';

function App() {
	return (
		<section className={styles.container}>
			<Header />
			<CityForm />
		</section>
	);
}

export default App;
