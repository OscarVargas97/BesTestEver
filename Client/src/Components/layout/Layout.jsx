const styles = {
	layout: {

	}
}

const Layout = (props) => {
	return (
		<div style={styles.layout}>
			{props.children}
		</div>
	);
};
export default Layout