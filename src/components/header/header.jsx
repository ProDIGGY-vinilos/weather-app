import styles from './header.module.css';

const Header = () => {
	return (
		<>
			<header>
				<div className={styles.container}>
					<nav className={styles.nav}>
						<p>Welcome to my weather app :)</p>
					</nav>
				</div>
			</header>
		</>
	);
};

export default Header;
